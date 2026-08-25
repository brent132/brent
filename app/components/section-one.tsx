import Image from "next/image";
import {
  ContactRound,
  CodeXml,
  Download,
  Mail,
  MapPin,
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

export function SectionOne(): React.JSX.Element {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Image
        src="/section1.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />

      <header className="relative">
        <nav aria-label="Primary navigation">
          <Image
            src="/logo blue transparent.png"
            alt="Brent"
            width={1254}
            height={1254}
          />

          <div>
            {navItems.map((item) => (
              <Button key={item} type="button" variant="ghost">
                {item}
              </Button>
            ))}
          </div>

          <Button type="button" variant="outline">
            <Download aria-hidden="true" />
            Download Resume
          </Button>
        </nav>
      </header>

      <main className="relative">
        <p>FULL-STACK DEVELOPER &amp; WEB DESIGNER</p>
        <h1 id="hero-title">
          I build digital solutions that are <span>fast, modern,</span> and{" "}
          <span>user-focused.</span>
        </h1>
        <p>
          I&apos;m a Full-Stack Developer and Web Designer passionate about
          building clean, responsive, and impactful web applications. I enjoy
          turning ideas into functional solutions that solve real-world
          problems.
        </p>

        <div>
          <Button type="button">
            <Sparkles aria-hidden="true" />
            View My Work
          </Button>
          <Button type="button" variant="outline">
            <Mail aria-hidden="true" />
            Contact Me
          </Button>
          <Button type="button" variant="outline">
            <Download aria-hidden="true" />
            Download Resume
          </Button>
        </div>

        <div>
          <p>Let&apos;s connect</p>
          <div aria-label="Social links">
            {socialItems.map(({ label, Icon }) => (
              <Button
                key={label}
                type="button"
                variant="outline"
                size="icon"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </Button>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
