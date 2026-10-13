import Image from "next/image";
import Link from "next/link";
import { DirectorStory } from "@/components/director-story";
import { Certifications } from "@/components/certifications";
import { contacts, projects, whatsappHref } from "@/lib/content";

const projectDescriptions: Record<string, string> = {
  "pig-and-meat": "Pig farming in Mwavi. Meat shop in Goba.",
  "pili-pili": "Habanero chilies, grown at our farm.",
  "kwanza-coffee": "Good coffee. A moment together in Goba.",
};

function FarmIcon({ kind }: { kind: "leaf" | "heart" | "people" | "cup" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "leaf" && <><path d="M7 24C1 11 13 4 27 4c0 14-7 26-20 20Z" /><path d="M5 28 22 11M11 22v-7M17 16h7" /></>}
      {kind === "heart" && <><path d="m16 28-4-3C-5 14 4 1 16 10 28 1 37 14 20 25Z" /><path d="m10 17 4 4 8-8" /></>}
      {kind === "people" && <><circle cx="16" cy="8" r="4" /><path d="M9 28v-7a7 7 0 0 1 14 0v7H9Z" /><path d="M6 5a4 4 0 0 0 0 8M26 5a4 4 0 0 1 0 8M6 17a6 6 0 0 0-4 6v4h3M26 17a6 6 0 0 1 4 6v4h-3" /></>}
      {kind === "cup" && <><path d="M5 12h18v8a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-8ZM23 13h2a4 4 0 0 1 0 8h-2M3 29h24M10 3v4M16 2v5M22 3v4" /></>}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="home-landing">
      <section className="farm-welcome" aria-labelledby="welcome-title">
        <Image className="welcome-background" src="/images/field.jpg" alt="Chili fields at Leoleo Modern Farm in Mwavi, Bagamoyo" fill priority sizes="100vw" />
        <div className="welcome-shade" />
        <div className="shell welcome-layout">
          <div className="welcome-copy">
            <p className="welcome-kicker">Welcome to</p>
            <h1 id="welcome-title"><span>Leoleo</span>Modern Farm</h1>
            <p className="welcome-tagline">Farming. Food. Coffee. Everyday life.</p>
            <p className="welcome-intro">From our fields in Bagamoyo to your table in Goba. Discover our pig and meat project, fresh Pili Pili and Kwanza Coffee.</p>
            <Link className="button button-lime" href="#projects">Explore our projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="welcome-photos" aria-label="Life at Leoleo">
            <figure className="welcome-pigs"><Image src="/images/piglets.jpg" alt="A sow with her piglets at Leoleo" fill priority sizes="(max-width: 900px) 1px, 24vw" /><figcaption>At home on the farm</figcaption></figure>
            <figure className="welcome-coffee"><Image src="/images/coffee-cup.jpg" alt="Freshly served coffee at Kwanza Coffee" fill priority sizes="(max-width: 900px) 1px, 18vw" /><figcaption>A taste of Kwanza</figcaption></figure>
          </div>
        </div>
        <section className="shell welcome-projects" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="visually-hidden">Explore all our projects</h2>
          {projects.map((project) => (
            <Link className={`welcome-project welcome-project-${project.theme}`} href={`/projects/${project.slug}`} key={project.slug}>
              <div className="welcome-project-photo"><Image src={project.slug === "pili-pili" ? "/images/habanero-peppers.jpg" : project.image} alt={project.slug === "pili-pili" ? "Yellow habanero peppers freshly picked at Leoleo" : project.imageAlt} fill loading="eager" sizes="(max-width: 700px) 92px, 15vw" /></div>
              <div className="welcome-project-copy"><h3>{project.name}</h3><p>{projectDescriptions[project.slug]}</p></div>
              <span className="project-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </section>
      </section>

      <section className="shell farm-overview" aria-labelledby="overview-title">
        <div className="overview-story">
          <p className="small-rule">About Leoleo Modern Farm</p>
          <h2 id="overview-title">Growing together, from farm to everyday life.</h2>
          <p>Leoleo was incorporated in 2024. Today, pig farming and habanero chili fields in Mwavi connect with our meat shop and Kwanza Coffee in Goba. Different projects, with a shared commitment to food, people and opportunity.</p>
          <Link className="button button-lime" href="/about-us">Get to know us <span aria-hidden="true">→</span></Link>
        </div>
        <div className="overview-values">
          <div><FarmIcon kind="leaf" /><h3>Rooted in farming</h3><p>Mwavi, Bagamoyo</p></div>
          <div><FarmIcon kind="heart" /><h3>Food for the table</h3><p>Our meat & chili projects</p></div>
          <div><FarmIcon kind="people" /><h3>Shared knowledge</h3><p>Learning with young farmers</p></div>
          <div><FarmIcon kind="cup" /><h3>Time for coffee</h3><p>Kwanza Coffee, Goba</p></div>
        </div>
        <Link href="/our-farm" className="overview-photo">
          <Image src="/images/chili-plant.jpg" alt="Habanero chili plants growing in the Leoleo fields" fill sizes="(max-width: 700px) 100vw, 24vw" />
          <span>Discover our farm <span aria-hidden="true">↗</span></span>
        </Link>
      </section>

      <section className="home-people">
        <div className="shell home-people-grid">
          <div className="home-people-photo"><Image src="/images/farm-team.jpg" alt="The Leoleo team outside the farm in their green work coats" fill sizes="(max-width: 700px) 100vw, 45vw" /></div>
          <div className="home-people-copy"><p className="small-rule">The people behind the projects</p><h2>Many hands.<br />A shared story.</h2><p>Everyday attention on the farm. A conversation at the meat shop. A warm welcome over coffee. Meet the people who bring Leoleo to life and see how we share agricultural knowledge beyond the farm.</p><div className="leadership-links"><Link className="text-link" href="/team">Meet our team <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/about-us#community">Our community story <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>

      <DirectorStory compact />
      <Certifications />

      <section className="shell home-enquiries">
        <div><h2>Let’s talk farm, food or coffee.</h2><p>Ask about our produce, contact the meat shop or plan your next coffee stop.</p></div>
        <div className="home-enquiry-actions"><Link className="button button-dark" href="/contact">Find your Leoleo contact <span aria-hidden="true">→</span></Link><a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp the farm</a></div>
      </section>
      <div className="home-address-strip"><div className="shell"><span>Farm · {contacts[0].location}</span><span>Meat shop & coffee · Goba, Makongo Road</span></div></div>
    </div>
  );
}
