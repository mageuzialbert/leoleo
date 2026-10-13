# Leo Leo website plan

## Goal and scope

Build an English-only, mobile-first public website in Next.js that introduces Leo Leo's three projects, shows real work and products through the supplied photography, and routes visitors to the right contact. Treat the farm management and ordering proposal as background research. The first release has no backend, live inventory, account portals, invoicing, SMS, ordering, or payments.

**Working audience:** people buying chili or pork, local visitors looking for Kwanza Coffee, and partners who want to understand the farm. **Primary action:** choose a project, then call or enquire using that project's verified contact.

## Content structure

1. **Home:** one clear headline about the three projects; large Leo Leo field image; short introductions to Pig & Meat, Pili Pili, and Kwanza Coffee; a small story of the farm; contact strip.
2. **Our farm:** Bagamoyo location, what the farm does, real team and working photos, concise business story after Leo Leo approves the wording.
3. **Pig & Meat:** pig farming and the Goba meat shop, with the pig photo and confirmed product categories. Avoid displaying stock quantities or prices until supplied.
4. **Pili Pili:** chili fields, planting and harvest imagery, what buyers can enquire about, farm contact.
5. **Kwanza Coffee:** café photos, Goba location, contact, and later menu/hours once provided.
6. **Contact:** three clearly separated location/contact blocks, the two confirmed Instagram links, a direct WhatsApp link, and a form that prepares a message for the confirmed farm WhatsApp account.
7. **About us:** short brand story including the reported 2024 farm starting year, vision, mission, a sourced Mboni Ya Vijana knowledge sharing story and a word from the Director alongside the supplied portrait.
8. **Our team:** farm team photograph and short stories about the work across the three projects, without inventing personal names or credentials.

Navigation: Home / About us / Our team / Pig & Meat / Pili Pili / Kwanza Coffee / Contact. Our Farm remains accessible from About us and the footer. The homepage makes the three projects visible and includes a team introduction.

## Visual direction

The [Emwani Coffee reference](https://emwanicoffee.co.tz/) suggests a strong photo-led hero, a brand story, project or product sections, and clear contact navigation. Leo Leo should use its own people, fields, animals, café, and marks. The site should feel like a working Tanzanian farm with a coffee branch, not a coffee-roaster copy.

### Draft design tokens

| Role | Color | Reason |
| --- | --- | --- |
| Farm green | `#155B3D` | Existing Leo Leo coats and logo mark |
| Deep leaf | `#12372B` | High-contrast text and footer |
| Chili gold | `#E6A534` | Harvested orange chilies in supplied photos |
| Coffee brown | `#5D3528` | Kwanza Coffee wall mark and coffee imagery |
| Paper | `#F7F5EF` | Quiet background for photography |
| Ink | `#202720` | Long-form body text |

Use a restrained system sans for body and navigation and a distinctive classic serif for large headings, without depending on external font downloads. Keep headings sentence case. Let the project images supply the color and texture; avoid decorative gradients, generic farm icons, and repeated identical cards.

### Layout concept

On desktop, pair a short left-aligned hero statement with a full-height crop photo. Follow it with three editorial project sections that vary image position and scale, then a compact three-column contact area. On mobile, show the headline and image first, then stack the projects with visible names and one action each.

```text
DESKTOP                                    MOBILE
Logo    Our Farm  Pig  Pili Pili  Coffee  Contact
┌─────────────────┬───────────────────┐    Logo  Menu
│ headline + CTA  │ real farm photo   │    Headline
│                 │                   │    CTA
└─────────────────┴───────────────────┘    Farm photo
  three projects, each with its own scene     Pig & Meat
  brief story + team/field image              Pili Pili
  contacts by location                        Kwanza Coffee
                                              Contacts
```

## Draft homepage copy for review

**Headline:** “Growing more than one story.”

**Supporting line:** “Explore Leo Leo's pig farming, Pili Pili harvests, and Kwanza Coffee.”

**Project labels:** “Pig farming & meat shop” / “Pili Pili chili” / “Kwanza Coffee.”

These are draft navigation words, not factual claims about sourcing, quality grades, availability, or delivery.

## Next.js implementation outline

- Use the App Router with TypeScript and responsive CSS. Store approved site copy and contact details in a small typed content module so corrections do not require component edits.
- Keep `research/` internal. Copy only approved and optimized images to `public/images/` during implementation, with descriptive filenames and alt text.
- Use `next/image` for responsive sizes and image compression. Avoid loading the full WhatsApp originals on the public site.
- Start with static pages and direct `tel:`/Instagram links. The contact form prepares a WhatsApp message to the verified farm chat at `+255 652 620 724`; it does not submit to a server or store data.
- Before launch, verify mobile layout, keyboard navigation, contrast, image cropping, metadata, and all phone and social links.

## Decisions needed before publishing

Confirm the final display name, exact relationship among the three projects, current products and prices, café and shop hours, map pins, and the final brand wording. The user has supplied a logo and director portrait and requested the Team page. The new story, vision, mission and director's message are draft copy created at the user's request. The Kwanza number is **+255 722 000 419**; the photographed old sign carries a different number and is excluded.
