"use client";

import Link from "next/link";
import React from "react";
import { Card, CardHeader } from "./ui/card";

interface CerticationCardProps {
  course: string;
  href: string;
  logoUrl: string;
  date: string;
}
export const CerticationCard = ({
  course,
  date,
  href,
  logoUrl,
}: CerticationCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer">
      <Card className="flex ">
        <div className="flex-grow ml-2 items-center flex-col group">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {course}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {date}
              </div>
            </div>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};
