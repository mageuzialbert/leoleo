import { communityStory } from "@/lib/content";

export function CommunityStory() {
  return (
    <section className="community-section" id="community" aria-labelledby="community-title">
      <div className="shell community-grid">
        <div>
          <p className="small-rule">Learning with Mboni Ya Vijana</p>
          <h2 id="community-title">{communityStory.title}</h2>
          <p className="community-date">Shared on <time dateTime={communityStory.dateISO}>{communityStory.date}</time></p>
        </div>
        <div className="community-copy">
          {communityStory.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="text-link" href={communityStory.sourceHref} target="_blank" rel="noopener noreferrer">View the presentation on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
