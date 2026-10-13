import Image from "next/image";
import { about } from "@/lib/content";

export function DirectorMessage() {
  return (
    <section className="director-section" id="director" aria-labelledby="director-title">
      <div className="shell director-grid">
        <div className="director-portrait">
          <Image src="/images/director.png" alt="The Leo Leo Director seated at Kwanza Coffee" fill sizes="(max-width: 700px) 100vw, 40vw" />
        </div>
        <div className="director-copy">
          <p className="small-rule">A word from our Director</p>
          <h2 id="director-title">Growing together, every day.</h2>
          <blockquote>
            {about.directorMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </blockquote>
          <p className="director-byline"><strong>The Director</strong><span>Leo Leo Modern Farm</span></p>
        </div>
      </div>
    </section>
  );
}
