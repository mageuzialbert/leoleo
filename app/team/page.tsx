import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { director, teamStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our team",
  description: "Meet the people and shared purpose behind the Leoleo farm, meat shop and Kwanza Coffee projects.",
};

export default function TeamPage() {
  return (
    <>
      <section className="team-hero">
        <div className="shell team-hero-grid">
          <div className="team-hero-copy">
            <p className="small-rule">Our team</p>
            <h1>The people behind the progress.</h1>
            <p>Three projects take many hands. The Leoleo story grows through the people who show up, work together and care about what comes next.</p>
          </div>
          <div className="team-hero-photo"><Image src="/images/farm-team.jpg" alt="Four Leoleo farm team members wearing green work coats" fill priority sizes="(max-width: 700px) 100vw, 48vw" /></div>
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
          <div className="leadership-photo"><Image src="/images/director.png" alt="Dady Kayombo, Leoleo’s Founder and Managing Director, at Kwanza Coffee" fill sizes="(max-width: 700px) 100vw, 30vw" /></div>
          <div><p className="small-rule">Our leadership</p><h2>{director.name}</h2><p>{director.role}. A Tanzanian entrepreneur and agribusiness professional whose pig farming journey began in 2010. Dady founded the Dodoma Pig Farmers Association in 2020 and served as its chairman.</p><p>Leoleo’s directors are {director.fullName} and {director.fellowDirector}.</p><div className="leadership-links"><Link className="text-link" href="/about-us#director">Read Dady’s story <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about-us#certifications">Our registration documents <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>
    </>
  );
}
