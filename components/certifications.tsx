"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { certifications } from "@/lib/content";

type Certificate = (typeof certifications)[number];

export function Certifications() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);

  function openCertificate(certificate: Certificate) {
    setZoomed(false);
    setSelected(certificate);
  }

  return (
    <section className="certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="shell">
        <div className="certifications-heading">
          <div><p className="small-rule">Our registration documents</p><h2 id="certifications-title">Registration & certification</h2></div>
          <p>Leoleo Modern Farm Limited’s company incorporation and Tanzania Meat Board registrations. Click a certificate to take a closer look.</p>
        </div>
        <div className="certification-grid">
          {certifications.map((certificate) => (
            <article className="certification-card" key={certificate.slug}>
              <button type="button" className="certificate-preview" onClick={() => openCertificate(certificate)} aria-label={`Zoom ${certificate.title} certificate`} aria-haspopup="dialog">
                <Image src={`/images/certificates/${certificate.slug}.png`} alt={`${certificate.issuer} ${certificate.title} certificate for Leoleo Modern Farm Limited`} fill sizes="(max-width: 700px) 80vw, (max-width: 1100px) 40vw, 22vw" draggable={false} onContextMenu={(event) => event.preventDefault()} />
              </button>
              <div className="certificate-copy">
                <p className="certificate-issuer">{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
                <p className="certificate-description">{certificate.description}</p>
                <dl><div><dt>Registration</dt><dd>{certificate.registrationNumber}</dd></div><div><dt>Issued</dt><dd><time dateTime={certificate.dateISO}>{certificate.date}</time></dd></div></dl>
                <button type="button" className="text-link" onClick={() => openCertificate(certificate)} aria-haspopup="dialog">Enlarge certificate <span aria-hidden="true">⤢</span></button>
              </div>
            </article>
          ))}
        </div>
        <p className="certificate-note">The Tanzania Meat Board certificates state that their validity depends on payment of the prescribed retention fees.</p>
      </div>
      <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-viewer-title" onClose={() => { setSelected(null); setZoomed(false); }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        {selected && (
          <div className="certificate-viewer">
            <div className="certificate-viewer-header">
              <div><p>{selected.issuer}</p><h2 id="certificate-viewer-title">{selected.title}</h2></div>
              <div className="certificate-viewer-actions">
                <button type="button" className="certificate-zoom-toggle" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>{zoomed ? "Fit image" : "Zoom in"}</button>
                <button type="button" className="certificate-close" onClick={() => dialog.current?.close()} aria-label="Close certificate viewer" autoFocus><span aria-hidden="true">×</span></button>
              </div>
            </div>
            <div className={`certificate-image-stage${zoomed ? " is-zoomed" : ""}`} tabIndex={0} aria-label="Certificate image; scroll to explore when zoomed">
              <Image src={`/images/certificates/${selected.slug}.png`} alt={`${selected.title} certificate issued to Leoleo Modern Farm Limited by ${selected.issuer}`} width={774} height={1094} sizes="(max-width: 700px) 100vw, 1000px" draggable={false} onContextMenu={(event) => event.preventDefault()} />
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
