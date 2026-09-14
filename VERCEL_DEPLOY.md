# Vercel deployment

This project is configured to deploy from GitHub to Vercel without changing the site design or application routes.

## Git workflow

1. Commit and push this version to the GitHub repository.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Confirm the detected framework is **TanStack Start**.
4. Leave Build Command and Output Directory on Vercel defaults unless Vercel explicitly asks for them.
5. Deploy. Every later push to `main` will deploy automatically.

## Domain

After the generated `*.vercel.app` deployment is verified:

1. Add `paadvocatesllp.com` and `www.paadvocatesllp.com` under Vercel → Project → Settings → Domains.
2. Use the DNS records Vercel displays for the domain.
3. Change only the web-hosting records at the DNS provider. Do not alter MX, SPF, DKIM, DMARC, or other mail-related records.
4. Keep the old live hosting record until the Vercel deployment has been tested.

## Files changed for hosting

- `vite.config.ts`: selects Nitro's Vercel preset only inside Vercel builds.
- `vercel.json`: makes TanStack Start detection explicit.
- `.github/workflows/*deploy-pages.yml`: removed because GitHub Pages cannot run the SSR server output and the duplicate workflows caused failed checks.

No application source, design, content, images, fonts, videos, routes, or styling files were modified.
