"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { projects } from "@/lib/content";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/our-farm", label: "Our farm" },
  { href: "/team", label: "Our team" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  function closeMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="Leoleo Modern Farm home">
          <Image className="wordmark-icon" src="/images/leo-leo-logo.png" alt="" width={64} height={56} priority />
          <span className="wordmark-text"><span className="wordmark-main">Leoleo</span><span className="wordmark-sub">Modern Farm</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, 2).map((item) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
          <details className="business-nav"><summary>Our projects <span aria-hidden="true">⌄</span></summary><div className="business-menu">{projects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} onClick={closeMenu} aria-current={pathname === `/projects/${project.slug}` ? "page" : undefined}>{project.navName}</Link>)}</div></details>
          {navigation.slice(2).map((item) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <Link className="header-chat" href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
        <details className="mobile-nav">
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">
            {navigation.slice(0, 2).map((item) => <Link href={item.href} key={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
            {projects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} onClick={closeMenu}>{project.navName}</Link>)}
            {navigation.slice(2).map((item) => <Link href={item.href} key={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
