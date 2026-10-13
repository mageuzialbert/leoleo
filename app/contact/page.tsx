import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { contacts, whatsappHref } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Contact Leoleo Modern Farm, Leoleo Meat Shop and Kwanza Coffee in Tanzania." };

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero"><div className="shell"><p className="place-line">We would like to hear from you</p><h1>Let’s talk.</h1><p>Choose the place you need, or send an enquiry to the farm on WhatsApp.</p></div></section>
      <section className="shell contact-locations">
        {contacts.map((contact) => (
          <article className="contact-location" key={contact.name}>
            <p className="small-rule">{contact.note}</p>
            <h2>{contact.name}</h2>
            <p>{contact.location}</p>
            <a className="contact-phone" href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            {contact.instagram && <a className="text-link" href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener noreferrer">Instagram @{contact.instagram} <span aria-hidden="true">↗</span></a>}
          </article>
        ))}
      </section>
      <section className="contact-form-section">
        <div className="shell contact-form-grid">
          <div className="contact-form-intro"><p className="small-rule">Send an enquiry</p><h2>Start with a message.</h2><p>Use this form to prepare a WhatsApp message for Leoleo Modern Farm. For the meat shop or Kwanza Coffee, you can also call the location directly above.</p><a className="text-link" href={whatsappHref} target="_blank" rel="noopener noreferrer">Open a blank WhatsApp chat <span aria-hidden="true">↗</span></a></div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
