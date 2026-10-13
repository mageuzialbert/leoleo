import Image from "next/image";
import Link from "next/link";
import { contacts, projects, whatsappHref } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="place-line">Mwavi, Bagamoyo · Goba, Dar es Salaam</p>
            <h1>Growing more than one story.</h1>
            <p className="hero-intro">Meet Leo Leo’s pig and meat project, Pili Pili fields, and Kwanza Coffee.</p>
            <Link className="button button-light" href="#projects">Explore our projects <span aria-hidden="true">↓</span></Link>
          </div>
          <div className="hero-bottom">Three projects. One Leo Leo.</div>
        </div>
        <div className="hero-visual">
          <Image src="/images/field.jpg" alt="Rows of crops at Leo Leo Modern Farm in Mwavi, Bagamoyo" fill priority sizes="(max-width: 800px) 100vw, 58vw" />
          <div className="image-caption">The fields at Mwavi, Bagamoyo</div>
        </div>
      </section>

      <section className="intro-section shell" id="projects">
        <div className="section-heading">
          <h2>Our three projects</h2>
          <p>Explore the farm, the meat shop and the coffee stop. Each has its own place in the Leo Leo story.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-card-${project.theme}`} key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`Explore ${project.name}`}>
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" />
              </Link>
              <div className="project-card-copy">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <Link className="text-link" href={`/projects/${project.slug}`}>Explore {project.shortName} <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="farm-story">
        <div className="shell story-grid">
          <div className="story-photo">
            <Image src="/images/chili-plant.jpg" alt="Chili plant growing in the Leo Leo fields" fill sizes="(max-width: 800px) 100vw, 44vw" />
          </div>
          <div className="story-copy">
            <p className="small-rule">At the farm</p>
            <h2>Rooted in Mwavi. Connected to Goba.</h2>
            <p>Our farming journey began in 2024. From pig farming and habanero chili fields in Mwavi to the meat shop and Kwanza Coffee in Goba, each project connects our work with everyday moments around food and coffee.</p>
            <Link className="text-link" href="/about-us">Read our story <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="shell home-team-section">
        <div className="home-team-copy"><p className="small-rule">The people behind Leo Leo</p><h2>Many hands. A shared story.</h2><p>Our story grows through teamwork and learning, from the everyday work on the farm to conversations with young farmers. Meet our people and explore how we share knowledge beyond the farm.</p><div className="leadership-links"><Link className="text-link" href="/team">Meet our team <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about-us#community">Our community story <span aria-hidden="true">↗</span></Link></div></div>
        <div className="home-team-photo"><Image src="/images/farm-team.jpg" alt="Leo Leo farm team members in their green work coats" fill sizes="(max-width: 700px) 100vw, 40vw" /></div>
      </section>

      <section className="contact-band shell">
        <div>
          <p className="small-rule">Start a conversation</p>
          <h2>Looking for Leo Leo?</h2>
          <p>Ask the farm about Pili Pili, contact the meat shop, or call Kwanza Coffee before you visit.</p>
        </div>
        <div className="contact-band-actions">
          <Link className="button button-dark" href="/contact">See all contacts <span aria-hidden="true">↗</span></Link>
          <a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Chat with the farm on WhatsApp</a>
        </div>
      </section>
      <div className="home-address-strip">
        <div className="shell"><span>Farm · {contacts[0].location}</span><span>Meat shop & coffee · Goba, Makongo Road</span></div>
      </div>
    </>
  );
}
