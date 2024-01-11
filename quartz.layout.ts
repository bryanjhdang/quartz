import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/bryanjhdang",
      LinkedIn: "https://linkedin.com/in/bryanjhdang",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("posts/") && f.slug! !== "posts/index" && !f.frontmatter?.noindex,
        linkToMore: "posts/" as SimpleSlug,
      }),
    ),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
    Component.NavList({
      title: "Site Map",
      links: [
        {
          name: "Blog Posts",
          url:"/quartz/posts"
        },
        {
          name: "Projects",
          url:"/quartz/projects"
        },
        {
          name: "Work Experience",
          url:"/quartz/experience"
        },
      ]
    }),
    Component.NavList({
      title: "Links",
      links: [
       {
          name: "GitHub",
          url: "https://github.com/bryanjhdang"
       },
       {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bryanjhdang"
       },
       {
        name: "E-mail",
        url: "mailto:bda37@sfu.ca"
       },
      ]
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
