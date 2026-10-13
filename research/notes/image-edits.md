# Website image edits

## Chili harvest background cleanup

- Requested on 13 October 2026: remove the mattress in the background wherever this photo is used.
- Mode: built-in image generation tool, image edit (`precise-object-edit`).
- Source: `research/whatsapp-photos/WhatsApp Image 2026-10-12 at 17.59.14.jpeg` (previous site copy: `public/images/chilies.jpg`).
- Result: `public/images/chilies-cleaned.png`.
- Uses: Homepage project image and Pili Pili project hero, both supplied by `lib/content.ts`.
- The source photograph remains preserved in the research archive. The site uses a new filename to avoid showing the old version from an image cache.

### Final prompt

Use case: precise-object-edit. Edit target: the supplied Leo Leo chili harvest photograph. Remove the patterned upright mattress and the stacked cushions, grille/appliance and miscellaneous stored items visible in the narrow doorway/recess near the center-left of the background. Reconstruct that small recess as an empty, tidy interior with the same cream walls, natural daylight, perspective and realistic subtle shadows. Keep the doorway edges and room architecture intact. Preserve the entire mound of green and orange habanero peppers, foreground fabric, bulletin board, window, exterior view, camera framing, photographic texture and existing colors unchanged. Make only this localized background cleanup. Do not crop, add objects, retouch the peppers, invent text or change the rest of the photograph. Maintain the original 4:3 landscape composition.
