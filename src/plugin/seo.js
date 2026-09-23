export const DEFAULT_SEO = {
  title: "Brian Li Profile",
  description:
    "Brian Li frontend portfolio: RWD web design, work projects, and articles across Vue, React, and responsive UI.",
  keywords:
    "Brian Li, frontend, portfolio, RWD, Vue, React, web design, WorkProject",
};

export const LIST_SEO = {
  allproject: {
    title: "All Projects | Brian Li Profile",
    description:
      "Browse Brian Li's frontend portfolio: work projects, side projects, and articles.",
    keywords:
      "Brian Li, portfolio, frontend, all projects, RWD, web design",
  },
  workproject: {
    title: "Work Projects | Brian Li",
    description:
      "Work projects by Brian Li: GAMA GCMS, iGame RWD templates, and production frontend UI.",
    keywords:
      "WorkProject, Brian Li, GCMS, GAMA, RWD, PSD to HTML, frontend portfolio",
  },
  articlelink: {
    title: "Articles | Brian Li",
    description:
      "Articles and case studies from Brian Li's frontend and product work.",
    keywords: "Brian Li, articles, Medium, frontend, case study",
  },
};

export const ABOUT_SEO = {
  title: "About | Brian Li",
  description:
    "Brian Li is a frontend developer experienced in Vue, React, RWD interfaces, and production web apps.",
  keywords:
    "Brian Li, about, frontend developer, Vue, React, RWD, web design",
};

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setPageMeta({
  title,
  description,
  keywords,
  image,
} = {}) {
  const meta = {
    title: title || DEFAULT_SEO.title,
    description: description || DEFAULT_SEO.description,
    keywords: keywords || DEFAULT_SEO.keywords,
    image,
  };

  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta("name", "keywords", meta.keywords);
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:type", "website");
  if (meta.image) {
    upsertMeta("property", "og:image", meta.image);
  }
}
