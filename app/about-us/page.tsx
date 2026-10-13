import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DirectorMessage } from "@/components/director-message";
import { CommunityStory } from "@/components/community-story";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description: "Discover the story, vision and mission behind Leo Leo Modern Farm, the meat shop and Kwanza Coffee.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="shell about-hero">
        <div className="about-hero-copy">
          <p className="small-rule">About Leo Leo</p>
          <h1>One name. Three ways to grow.</h1>
          <p>Farming, food and coffee, connected by a shared ambition to build something lasting.</p>
        </div>
        <figure className="about-hero-photo">
          <Image src="/images/field.jpg" alt="Chili fields at Leo Leo Modern Farm in Mwavi, Bagamoyo" fill priority sizes="(max-width: 700px) 100vw, 48vw" />
          <figcaption>Our roots in Mwavi, Bagamoyo</figcaption>
        </figure>
      </section>

      <section className="shell about-story">
        <div><p className="small-rule">Our story</p><h2>Different projects. Shared purpose.</h2></div>
        <div>
          {about.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link className="text-link" href="/our-farm">Visit our farm story <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="purpose-section" aria-label="Our vision and mission">
        <div className="shell purpose-grid">
          <article><p className="small-rule">Our vision</p><h2>A future with more opportunity.</h2><p>{about.vision}</p></article>
          <article><p className="small-rule">Our mission</p><h2>Grow, share and serve.</h2><p>{about.mission}</p></article>
        </div>
      </section>

      <CommunityStory />
      <DirectorMessage />

      <section className="shell people-invitation">
        <div><h2>Every story has people behind it.</h2><p>Meet the team that brings the Leo Leo projects to life.</p></div>
        <Link className="button button-dark" href="/team">Meet our team <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
