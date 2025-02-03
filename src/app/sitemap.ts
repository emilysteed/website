import { MetadataRoute } from "next";

import { URL } from "@/constants";
import { links } from "@/lib";

const sitemap = (): MetadataRoute.Sitemap =>
  [links.home.aProps.href, links.viz.aProps.href, links.work.aProps.href].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

export default sitemap;
