# P&A Advocates — Local Improvement Pass

This copy contains the first local improvement pass for review. It has not been pushed to GitHub.

## Included

- Replaced deployment-dependent Lovable hero and practice-area media with bundled stock images supplied for this review.
- Assigned the six newly supplied images, in upload order, to Corporate, Real Estate, Family & Succession, Banking & Finance, Intellectual Property, and Tax & Regulatory Compliance.
- Reserved the earlier image set for the hero, supporting pages, and Insights articles.
- Assigned the latest four images in upload order to the homepage trust section, the Mombasa land article, the company-founder article, and the intestate-succession article.
- Replaced the office image with an on-brand photoshoot placeholder.
- Made the consultation page a static, usable page instead of an automatic redirect.
- Replaced the hand-built header/footer mark with a bundled logo extracted from the supplied P&A brand identity PDF.
- Updated the homepage hero to use the two supplied local MP4 videos as cross-faded, muted layers with no colour tint, with bundled stock imagery as a fallback.
- Applied the supplied green, gold and off-white palette to shared error states and selected page elements.
- Added a graceful fallback for failed hero imagery.
- Made the loading screen a root-level, full-viewport solid brand-green screen with only the existing centered logo, so no underlying white section can appear behind it while the page initializes.
- Embedded the unchanged logo asset directly in the loading markup so the green background and logo appear together in the first visible frame.
- Made both local videos preload automatically and reveal on either `loadeddata` or `canplay`, with the first video that becomes ready selected automatically.
- Limited the loading screen to the initial website entry; returning to Home through the navigation goes directly to the homepage content.

## Still needed before final submission

- Replace the temporary stock images with approved/licensed images if the client supplies them.
- Insert the latest team CV text and associate details when supplied by P&A.
- Confirm the final international hosting/error configuration on the target deployment.
- The current package is self-contained for hero video media: `hero-coastal.mp4` and `hero-architecture.mp4` are bundled under `src/assets/videos/`.

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local URL shown by Vite. Validate the home page, practice areas, about, contact and book-consultation pages before any GitHub action.
