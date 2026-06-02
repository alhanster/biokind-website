/* ============================================================================
   BIOKIND BLOG — "Notes from the network"
   ----------------------------------------------------------------------------
   This is the ONLY file you edit to publish a blog post. The card on the
   Press page AND the full article page at  post.html#<slug>  are both built
   automatically from the list below.

   TO ADD A POST:
     1. Copy the TEMPLATE block just below.
     2. Paste it at the TOP of the list (newest posts go first).
     3. Fill in the fields, commit, and push. Done.

   FIELDS:
     slug      A short url-safe id, lowercase-with-dashes. Becomes the link:
               post.html#uva-spring-2025-teams . Must be unique.
     title     The headline.
     chapter   Short label shown on the cover (e.g. "UVA", "USC", "Network").
     category  Small pill above the title (e.g. "Team spotlight", "Field notes").
     date      Free text shown on the card (e.g. "Spring 2025", "May 2025").
     excerpt   One-sentence summary for the card.
     author    (optional) Byline shown on the article page.
     cover     (optional) Path to a cover image you've added to the repo, e.g.
               "assets/blog/uva-spring-2025.jpg". Leave as "" to show a branded
               Biokind placeholder instead. Recommended size: 1200×675 (16:9).
     body      The article itself, written as HTML. You can use:
                 <p>…</p>            paragraphs
                 <h2>…</h2>          section headings
                 <ul><li>…</li></ul> bullet lists
                 <blockquote>…</blockquote>
                 <a href="…">…</a>   links
                 <img src="assets/…"> images you've added to the repo
   ============================================================================ */

window.BIOKIND_POSTS = [

  /* ---- TEMPLATE — copy this whole block, paste it above the first { below, fill in, save & push ----
  {
    slug: "",           // Short, unique, lowercase-with-dashes. Becomes the URL: post.html#your-slug
    title: "",          // Headline shown on the card and article page
    chapter: "",        // Short label on the card cover, e.g. "UVA", "USC", "Network"
    category: "",       // Pill above the title, e.g. "Team spotlight", "Field notes"
    date: "",           // Free text, e.g. "Spring 2025" or "May 2025"
    excerpt: "",        // One sentence shown on the card
    author: "",         // Optional byline, e.g. "Biokind UVA Chapter"
    cover: "",          // Optional image path, e.g. "assets/blog/my-image.jpg". Leave "" for default.
    body: `
      <p>Opening paragraph.</p>
      <h2>Section heading</h2>
      <p>More text. <a href="https://example.com">Links</a> work inline.</p>
      <ul>
        <li>Bullet point</li>
        <li>Another point</li>
      </ul>
    `
  },
  ---- end template ---- */

  {
    slug: "uva-spring-2025-teams",
    title: "UVA Spring 2025 Teams",
    chapter: "UVA",
    category: "Team spotlight",
    date: "Spring 2025",
    excerpt: "A new round of University of Virginia teams and the nonprofit missions they helped move forward this spring.",
    author: "Biokind UVA Chapter",
    cover: "",
    body: `
      <p>This spring, Biokind's University of Virginia chapter paired analyst teams with healthcare nonprofits working on the issues closest to their communities. Over the semester, each team moved from raw data exports to board-ready findings — and left its partner with tooling it can reuse next quarter.</p>
      <h2>The teams</h2>
      <p>Replace this paragraph with write-ups of each team and the partner they supported. You can add as many sections as you like using <strong>&lt;h2&gt;</strong> headings and <strong>&lt;p&gt;</strong> paragraphs.</p>
      <h2>What's next</h2>
      <p>Wrap up with a note on outcomes, thanks to partners and advisors, or a call to get involved.</p>
    `
  },

  {
    slug: "usc-fall-2024-teams",
    title: "USC Fall 2024 Teams",
    chapter: "USC",
    category: "Team spotlight",
    date: "Fall 2024",
    excerpt: "The USC chapter's fall cohort, their projects, and the partners they delivered analyses to.",
    author: "Biokind USC Chapter",
    cover: "",
    body: `
      <p>Biokind's USC chapter spent the fall semester turning donor, patient, and event data into decisions our nonprofit partners could act on. Here's a look at the cohort and what they built.</p>
      <h2>The teams</h2>
      <p>Replace this paragraph with your team and partner write-ups.</p>
    `
  },

  {
    slug: "uva-spring-2024-teams",
    title: "UVA Spring 2024 Teams",
    chapter: "UVA",
    category: "Team spotlight",
    date: "Spring 2024",
    excerpt: "Meet the University of Virginia analyst teams and the healthcare nonprofits they partnered with this semester.",
    author: "Biokind UVA Chapter",
    cover: "",
    body: `
      <p>Our University of Virginia chapter kicked off the spring with a full slate of analyst teams supporting healthcare nonprofits across donor, patient, and event analysis.</p>
      <h2>The teams</h2>
      <p>Replace this paragraph with your team and partner write-ups.</p>
    `
  }

];
