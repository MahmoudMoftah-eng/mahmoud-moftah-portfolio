# Initial validation

Validated on 6 October 2026.

- Astro / TypeScript: zero errors, warnings or hints.
- Static build: ten HTML pages plus robots.txt and sitemap.xml.
- Built-site validation: 193 local links, assets and anchor references; no missing targets.
- Each page has one H1 and matching title, description, OpenGraph and X metadata; canonical links are present.
- Browser checks at approximately 375, 768, 1024 and 1440 CSS pixels: homepage and representative case studies fit without horizontal overflow. About and Contact were also checked at all four sizes.
- Mobile menu opens, provides all navigation links and closes with Escape. CV action opens the explicit missing-PDF page with an email request link.
- Content independently reviewed against the supplied brief: no invented numerical results, individual award attribution or completed-work claims for ongoing work.
- No original project media or CV was supplied. These are intentionally represented by TODO placeholders and the CV fallback, not broken files.

No Lighthouse score is claimed. The initial static output is small, uses system fonts and has only the mobile-navigation script on the client. Recheck performance once real imagery and video are added.
