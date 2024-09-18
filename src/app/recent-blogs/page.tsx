import { Container } from "@/components/Container";

import { recentBlogs } from "../../../action/recent-blogs";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Highlight } from "@/components/Highlight";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dipak Giri | recent blogs",
  description: "recent blogs by Dipak Giri",
  openGraph: {
    title: "Dipak Giri | recent blogs",
    description: "recent blogs by Dipak Giri",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=Recent%20blogs%20&%20&description=I%20write%20about%20technology.%20%20I%27ve%20been%20fascinated%20by%20technology.&dark=true`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipak Giri | recent blogs",
    description: "recent blogs by Dipak Giri",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/api/og?title=Recent%20blogs%20&%20&description=I%20write%20about%20technology.%20%20I%27ve%20been%20fascinated%20by%20technology.&dark=true&twitter=true`,
    ],
  },
};

export default async function RecentBlogs() {
  const blogs: any = await recentBlogs();

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  );
}
