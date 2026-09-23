export function parseLocationHash(hash = window.location.hash) {
  const raw = hash.replace(/^#/, "") || "/";
  const [section, projectId = ""] = raw.split("/").filter(Boolean);

  if (!section) {
    return { view: "home", projectName: "allproject", projectId: "" };
  }
  if (section === "about") {
    return { view: "about", projectName: "", projectId: "" };
  }
  if (section === "workproject") {
    return { view: "home", projectName: "workproject", projectId };
  }
  if (section === "articlelink" || section === "article") {
    return { view: "home", projectName: "articlelink", projectId: "" };
  }
  return { view: "notFound", projectName: "", projectId: "" };
}

export function listHashForFilter(projectName) {
  if (projectName === "workproject") return "#/workproject";
  if (projectName === "articlelink") return "#/articlelink";
  return "#/";
}
