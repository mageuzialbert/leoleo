"use client";

import Link from "next/link";
import Image from "next/image";
import { whatsappHref } from "@/lib/content";

const navigation = [
  { href: "/about-us", label: "About us" },
  { href: "/team", label: "Our team" },
  { href: "/projects/pig-and-meat", label: "Pig & Meat" },
  { href: "/projects/pili-pili", label: "Pili Pili" },
  { href: "/projects/kwanza-coffee", label: "Kwanza Coffee" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  function closeMobileMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="Leo Leo Modern Farm home">
          <Image className="wordmark-icon" src="/images/leo-leo-logo.png" alt="" width={64} height={56} priority />
          <span className="wordmark-text">
            <span className="wordmark-main">Leo Leo</span>
            <span className="wordmark-sub">Modern Farm</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <a className="header-chat" href={whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        <details className="mobile-nav">
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link href={item.href} key={item.href} onClick={closeMobileMenu}>{item.label}</Link>)}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Chat on WhatsApp</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
