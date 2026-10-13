"use client";

import { FormEvent, useState } from "react";
import { whatsappNumber } from "@/lib/content";

export function ContactForm() {
  const [project, setProject] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = String(data.get("project") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !subject || !message) return;

    const text = `Hello Leoleo, my name is ${name}.\n\nI'm enquiring about: ${subject}.\n\n${message}`;
    window.location.assign(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" maxLength={80} required placeholder="How should we address you?" />
      </div>
      <div className="form-row">
        <label htmlFor="project">What is your enquiry about?</label>
        <select id="project" name="project" value={project} onChange={(event) => setProject(event.target.value)} required>
          <option value="">Choose a project</option>
          <option value="Pig farming and meat shop">Pig farming & meat shop</option>
          <option value="Pili Pili">Pili Pili</option>
          <option value="Kwanza Coffee">Kwanza Coffee</option>
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" rows={6} maxLength={1200} required placeholder="Tell us what you would like to know." />
      </div>
      <button className="button button-dark" type="submit">Continue to WhatsApp <span aria-hidden="true">↗</span></button>
      <p className="form-note">This opens WhatsApp with your message ready. You can review it before you send.</p>
    </form>
  );
}
