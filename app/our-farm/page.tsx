import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/lib/content";

export const metadata: Metadata = { title: "Our farm", description: "See the Leoleo farm in Mwavi, Bagamoyo and learn about its pig and Pili Pili projects." };

export default function OurFarmPage() {
  return (
    <>
      <section className="page-hero farm-page-hero">
        <div className="shell page-hero-inner">
          <p className="place-line">Leoleo Modern Farm · Mwavi, Bagamoyo</p>
          <h1>A place where the work begins.</h1>
          <p>Our farm in Mwavi is home to the pig and Pili Pili projects.</p>
        </div>
        <Image src="/images/field.jpg" alt="Cultivated fields at Leoleo Modern Farm in Mwavi" fill priority sizes="100vw" />
      </section>
      <section className="shell farm-page-content">
        <div>
          <p className="small-rule">From the ground up</p>
          <h2>Farming in Bagamoyo</h2>
        </div>
        <div>
          <p>Leoleo Modern Farm Limited was incorporated in 2024. Based in Mwavi in the Coast Region, Leoleo’s work brings together pig farming and habanero chili cultivation.</p>
          <p>Learning is part of that journey. Alongside the farm projects, our CEO has shared agricultural knowledge with young farmers through a presentation to Mboni Ya Vijana Group.</p>
          <Link className="text-link farm-community-link" href="/about-us#community">Read our community story <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" href="/contact">Contact the farm <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="farm-photo-pair shell">
        <div className="photo-frame"><Image src="/images/chili-plant.jpg" alt="Green chili plant growing in the farm field" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
        <div className="photo-frame"><Image src="/images/piglets.jpg" alt="Sow and piglets at Leoleo Modern Farm" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
      </section>
      <section className="farm-contact-note shell"><h2>Find the farm</h2><p>{contacts[0].location}</p><a className="button button-dark" href={`tel:${contacts[0].phoneHref}`}>Call {contacts[0].phoneDisplay}</a></section>
    </>
  );
}
