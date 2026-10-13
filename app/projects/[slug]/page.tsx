import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contacts, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const contact = contacts[project.contactIndex];

  return (
    <>
      <section className={`project-hero project-hero-${project.theme}`}>
        <div className="shell project-hero-grid">
          <div className="project-hero-copy">
            <Link className="back-link" href="/#projects">All projects</Link>
            <h1>{project.name}</h1>
            <p>{project.lead}</p>
            <a className="button button-light" href={`tel:${contact.phoneHref}`}>Call {contact.phoneDisplay} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-hero-image"><Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
        </div>
      </section>
      <section className="shell project-body-grid">
        <div><p className="small-rule">The Leoleo projects</p><h2>{project.storyTitle}</h2></div>
        <div><p>{project.body}</p><Link className="text-link" href="/contact">Send an enquiry <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="shell detail-photo-section">
        <div className={`detail-photo detail-photo-${project.theme}`}><Image src={project.detailImage} alt={project.detailAlt} fill sizes="(max-width: 800px) 100vw, 90vw" /></div>
        <p>{project.detailAlt}</p>
      </section>
      <section className="project-contact-panel">
        <div className="shell project-contact-grid">
          <div><p className="small-rule">Visit or call</p><h2>{contact.name}</h2><p>{contact.location}</p></div>
          <div className="project-contact-actions"><a className="button button-dark" href={`tel:${contact.phoneHref}`}>Call {contact.phoneDisplay}</a><Link className="text-link" href="/contact">All contact details <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
