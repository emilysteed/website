import { AnchorHTMLAttributes } from "react";

import { CardProps } from "../components";

export const visualizations = {
  shiny: {
    aProps: {
      href: "https://emilysteed.shinyapps.io/shiny",
      target: "_blank",
    },
    description: "Data visualization for public CDC dataset",
    tags: ["R", "Shiny"],
    title: "US Chronic Disease Indicators App",
  },
  tableau: {
    aProps: {
      href: "https://public.tableau.com/app/profile/emily.steed/viz/USChronicDiseaseIndicators2016/USChronicDiseaseIndicators2016",
      target: "_blank",
    },
    description: "Data visualization for public CDC dataset",
    tags: ["Python", "Tableau"],
    title: "US Chronic Disease Indicators Workbook",
  },
} as const satisfies Record<
  string,
  Pick<CardProps, "description" | "tags" | "title"> & {
    aProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  }
>;
