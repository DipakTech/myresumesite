"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Star, Navigation } from "lucide-react";

// Type definitions remain the same
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        LatLng: any;
        places: {
          PlacesService: any;
          RankBy: {
            DISTANCE: "DISTANCE";
            PROMINENCE: "PROMINENCE";
          };
          PlacesServiceStatus: {
            OK: "OK";
            ZERO_RESULTS: "ZERO_RESULTS";
            OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT";
            REQUEST_DENIED: "REQUEST_DENIED";
            INVALID_REQUEST: "INVALID_REQUEST";
          };
        };
      };
    };
  }
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface PlaceGeometry {
  location: {
    lat: () => number;
    lng: () => number;
  };
}

interface Place {
  place_id: string;
  name: string;
  rating?: number;
  vicinity?: string;
  geometry: PlaceGeometry;
  type: string;
}

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const NearbyAmenities: React.FC = () => {
  const [amenities, setAmenities] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      getCurrentLocation();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getCurrentLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const coords: Coordinates = {
            lat: 27.7111974,
            lng: 85.3730327,
          };
          setCoordinates(coords);
          searchNearbyPlaces(coords);
        },
        (error: GeolocationPositionError) => {
          setError("Error getting location. Please enable location services.");
          setLoading(false);
        },
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  const searchNearbyPlaces = (location: Coordinates): void => {
    const map = new window.google.maps.Map(document.createElement("div"));
    const service = new window.google.maps.places.PlacesService(map);

    const searchTypes = [
      "bank",
      "hospital",
      "school",
      "college",
      "library",
      "bus_station",
    ];

    const amenitiesPromises = searchTypes.map((type) => {
      return new Promise<Place>((resolve, reject) => {
        const request = {
          location: new window.google.maps.LatLng(location.lat, location.lng),
          type: type,
          rankBy: window.google.maps.places.RankBy.DISTANCE, // When using rankBy:DISTANCE, radius is not allowed
        };

        service.nearbySearch(request, (results: any[], status: string) => {
          if (status === "OK" && results.length > 0) {
            // Only take the first (nearest) result
            const place = results[0];
            resolve({
              ...place,
              type: type,
            });
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    });

    Promise.all(amenitiesPromises)
      .then((results) => {
        // Filter out null results and set the amenities
        const validAmenities = results.filter(
          (place): place is Place => place !== null,
        );
        setAmenities(validAmenities);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching nearby places");
        setLoading(false);
      });
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): string => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d.toFixed(1);
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  const formatType = (type: string): string => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5" />
            Your Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Latitude: {coordinates?.lat}</p>
          <p>Longitude: {coordinates?.lng}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenities.map((place) => (
          <Card
            key={place.place_id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{place.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {formatType(place.type)}
                  </p>
                </div>
                {place.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{place.rating}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
                <MapPin className="h-4 w-4" />
                <span>
                  {calculateDistance(
                    coordinates?.lat ?? 0,
                    coordinates?.lng ?? 0,
                    place.geometry.location.lat(),
                    place.geometry.location.lng(),
                  )}{" "}
                  km away
                </span>
              </div>

              {place.vicinity && (
                <p className="text-sm text-gray-600 mt-2">{place.vicinity}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NearbyAmenities;
