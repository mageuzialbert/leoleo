import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the people and shared purpose behind the Leo Leo farm, meat shop and Kwanza Coffee projects.",
};

export default function TeamPage() {
  return (
    <>
      <section className="team-hero">
        <div className="shell team-hero-grid">
          <div className="team-hero-copy">
            <p className="small-rule">Our team</p>
            <h1>The people behind the progress.</h1>
            <p>Three projects take many hands. The Leo Leo story grows through the people who show up, work together and care about what comes next.</p>
          </div>
          <div className="team-hero-photo"><Image src="/images/farm-team.jpg" alt="Four Leo Leo farm team members wearing green work coats" fill priority sizes="(max-width: 700px) 100vw, 48vw" /></div>
        </div>
      </section>

      <section className="shell team-stories">
        <div className="section-heading"><h2>One team spirit.</h2><p>Different kinds of work, connected by an ambition to do each day’s work with care.</p></div>
        <div className="team-story-grid">
          {teamStories.map((story) => <article key={story.title}><h3>{story.title}</h3><p>{story.text}</p></article>)}
        </div>
      </section>

      <section className="team-leadership">
        <div className="shell team-leadership-grid">
          <div className="leadership-photo"><Image src="/images/director.png" alt="The Leo Leo Director at Kwanza Coffee" fill sizes="(max-width: 700px) 100vw, 30vw" /></div>
          <div><p className="small-rule">Our shared direction</p><h2>Sharing knowledge. Growing opportunity.</h2><p>Our CEO’s presentation to Mboni Ya Vijana Group brought sustainable farming, agribusiness opportunities and modern cultivation into the conversation with young farmers.</p><div className="leadership-links"><Link className="text-link" href="/about-us#community">Read our community story <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about-us#director">A word from our Director <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>
    </>
  );
}
