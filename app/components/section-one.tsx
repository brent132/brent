import Image from "next/image";
import {
  CodeXml,
  ContactRound,
  Download,
  Mail,
  MapPin,
  Mouse,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

const socialItems = [
  { label: "GitHub", Icon: CodeXml },
  { label: "LinkedIn", Icon: ContactRound },
  { label: "Email", Icon: Mail },
  { label: "Location", Icon: MapPin },
];

const interactiveClassName =
  "transition duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-400 motion-reduce:transform-none motion-reduce:transition-none";

export function SectionOne(): React.JSX.Element {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-slate-950 text-white"
    >
      <Image
        src="/section1.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-right sm:object-contain sm:object-bottom 2xl:object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90"
      />

      <div className="mx-auto flex min-h-svh w-full max-w-screen-2xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header>
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6"
          >
            <Image
              src="/logo blue transparent.png"
              alt="Brent"
              width={1254}
              height={1254}
              className="h-10 w-32 object-cover object-center sm:w-40"
            />

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  type="button"
                  variant="ghost"
                  className={`${interactiveClassName} relative h-11 rounded-lg px-1 text-sm text-slate-300 hover:bg-transparent hover:text-white`}
                >
                  {item}
                  {index === 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 size-1 rounded-full bg-blue-500 shadow-sm shadow-blue-400"
                    />
                  ) : null}
                </Button>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              className={`${interactiveClassName} h-11 rounded-lg border-white/15 bg-slate-950/50 px-3 text-slate-100 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-white sm:px-5`}
            >
              <Download aria-hidden="true" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sr-only sm:hidden">Download Resume</span>
            </Button>
          </nav>
        </header>

        <div className="grid flex-1 items-center py-14 sm:py-16 lg:grid-cols-2 lg:py-20">
          <main className="max-w-2xl space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-2 text-xs font-medium tracking-widest text-blue-400 uppercase shadow-lg shadow-blue-950/20">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400"
              />
              FULL-STACK DEVELOPER &amp; WEB DESIGNER
            </p>

            <h1
              id="hero-title"
              className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              I build digital solutions that are{" "}
              <span className="text-blue-500">fast, modern,</span> and{" "}
              <span className="text-blue-500">user-focused.</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m a Full-Stack Developer and Web Designer passionate about
              building clean, responsive, and impactful web applications. I
              enjoy turning ideas into functional solutions that solve
              real-world problems.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                className={`${interactiveClassName} h-11 rounded-lg bg-blue-600 px-5 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500`}
              >
                <Sparkles aria-hidden="true" />
                View My Work
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`${interactiveClassName} h-11 rounded-lg border-white/15 bg-slate-950/55 px-5 text-slate-100 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-white`}
              >
                <Mail aria-hidden="true" />
                Contact Me
              </Button>
              <Button
                type="button"
                variant="outline"
                className={`${interactiveClassName} h-11 rounded-lg border-white/15 bg-slate-950/55 px-5 text-slate-100 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-white`}
              >
                <Download aria-hidden="true" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-3 pt-5">
              <p className="text-sm text-slate-400">Let&apos;s connect</p>
              <div
                role="group"
                aria-label="Social links"
                className="flex items-center gap-3"
              >
                {socialItems.map(({ label, Icon }) => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label={label}
                    className={`${interactiveClassName} size-11 rounded-lg border-white/15 bg-slate-950/55 text-slate-300 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-blue-300`}
                  >
                    <Icon aria-hidden="true" />
                  </Button>
                ))}
              </div>
            </div>
          </main>

          <div aria-hidden="true" />
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-slate-400 md:flex"
        >
          <Mouse className="size-8 stroke-1" />
          <span className="text-xs tracking-widest uppercase">Scroll down</span>
        </div>
      </div>
    </section>
  );
}
