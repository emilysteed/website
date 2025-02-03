import { URL } from "@/constants";

const robots = () => ({
  host: URL,
  rules: [
    {
      userAgent: "*",
    },
  ],
  sitemap: `${URL}/sitemap.xml`,
});

export default robots;
