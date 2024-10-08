import { HelloText } from "@/components/Blured-animated-text";
import BlurFade from "@/components/BlurFade";
import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
// import { TechStack } from "@/components/TechStack";
import { DATA } from "./data/resume";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { CerticationCard } from "@/components/certification-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dipak Giri | portfolio",
  description: "Dipak Giri's cv, portfolio and recent blogs",
  openGraph: {
    title: "Dipak Giri | portfolio",
    description: "Dipak Giri's cv, portfolio and recent blogs",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=Dipak%20Giri&description=Dipak%20Giri%27s%20Portfolio&dark=true`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipak Giri | portfolio",
    description: "Dipak Giri's cv, portfolio and recent blogs",
    images: [
      `${process.env.NEXT_PUBLIC_URL}/api/og?title=Dipak%20Giri&description=Dipak%20Giri%27s%20Portfolio&dark=true&twitter=true`,
    ],
  },
};

export default function Home() {
  return (
    <Container className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <HelloText />
      </section>

      <section id="work">
        <div className="flex min-h-0 pr-10 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 pr-10 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 pr-10 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="Certifications">
        <div className="space-y-6 w-full ">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Cerfications</h2>
          </BlurFade>
          {DATA.certification.map((certificate, id) => (
            <BlurFade
              key={certificate.href}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <CerticationCard
                course={certificate.course}
                date={certificate.date}
                href={certificate.href}
                logoUrl={certificate.logoUrl}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="Contact me">
        <div className="space-y-4 w-full ">
          <Separator />
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Contact me</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8 + 1 * 0.05}>
            <div className="flex gap-2">
              <Link href="mailto:dipakgiri1200@gmail.com">
                dipakgiri1200@gmail.com
              </Link>
              <Link href="https://github.com/dipaktech">| github</Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </Container>
  );
}
