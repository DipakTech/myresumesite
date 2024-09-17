import BlurFade from "@/components/BlurFade";
import { Container } from "@/components/Container";

import { ResumeCard } from "@/components/resume-card";
import { DATA } from "../data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function RecentBlogs() {
  return (
    <Container className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="work">
        <div className="flex min-h-0 pr-10 px-10  flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Recent Blogs</h2>
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
    </Container>
  );
}
