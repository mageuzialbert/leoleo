import Image from "next/image";
import Link from "next/link";
import { director } from "@/lib/content";

export function DirectorStory({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`director-story${compact ? " director-story-compact" : ""}`} id="director" aria-labelledby="director-title">
      <div className="shell director-story-grid">
        <div className="director-story-portrait">
          <Image src="/images/director.png" alt="Dady Kayombo, Founder and Managing Director of Leoleo, seated at Kwanza Coffee" fill sizes="(max-width: 700px) 100vw, 35vw" />
        </div>
        <div className="director-story-copy">
          <p className="small-rule">Meet our Founder & Managing Director</p>
          <h2 id="director-title">{director.name}</h2>
          <p className="director-story-role">{director.role}</p>
          <p>{director.introduction}</p>
          {compact ? (
            <>
              <p>With a pig farming journey that began in 2010 and more than a decade in agricultural production, Dady brings practical experience to Leoleo. He founded the Dodoma Pig Farmers Association in 2020 and served as its chairman, helping farmers connect and share knowledge.</p>
              <Link className="text-link" href="/about-us#director">Read Dady’s story <span aria-hidden="true">↗</span></Link>
            </>
          ) : (
            <>
              {director.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <blockquote className="director-vision"><p>“{director.vision}”</p><cite>{director.name} · Leadership vision</cite></blockquote>
              <p className="director-board">Leoleo’s directors are {director.fullName} and {director.fellowDirector}.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
