import BlurFade from "./BlurFade";
import { Highlight } from "./Highlight";
import { Paragraph } from "./Paragraph";

export function HelloText() {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hello There 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          I&apos;m Dipak, Nice to meet you
        </span>
      </BlurFade>
      <BlurFade delay={0.25 * 3} inView>
        <Paragraph className="max-w-xl mt-4 text-primary">
          I&apos;m a software engineer with
          <Highlight> 2.5 years of experience</Highlight> building scalable web
          apps that are performance optimized and good looking.
        </Paragraph>
      </BlurFade>
    </section>
  );
}
