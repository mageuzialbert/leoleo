import Link from "next/link";
import Image from "next/image";
import { contacts, whatsappHref } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <Link className="footer-brand" href="/" aria-label="Leoleo Modern Farm home">
            <Image className="footer-logo" src="/images/leo-leo-logo.png" alt="" width={64} height={64} />
            <span className="footer-brand-text">Leoleo<span>Modern Farm</span></span>
          </Link>
          <p>Farming, food and coffee across Bagamoyo and Goba.</p>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          <Link href="/about-us">About us</Link>
          <Link href="/team">Our team</Link>
          <Link href="/about-us#director">Our director</Link>
          <Link href="/about-us#certifications">Registration documents</Link>
          <Link href="/our-farm">Our farm</Link>
          <Link href="/projects/pig-and-meat">Pig & Meat</Link>
          <Link href="/projects/pili-pili">Pili Pili</Link>
          <Link href="/projects/kwanza-coffee">Kwanza Coffee</Link>
        </div>
        <div className="footer-links">
          <h2>Get in touch</h2>
          <a href={`tel:${contacts[0].phoneHref}`}>{contacts[0].phoneDisplay}</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp the farm</a>
          <Link href="/contact">All locations and contacts</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Leoleo Modern Farm</span><span>Bagamoyo · Goba, Tanzania</span></div>
    </footer>
  );
}
