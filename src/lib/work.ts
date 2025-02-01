import { AnchorHTMLAttributes } from "react";

import { CardProps } from "../components";

export const work = {
  dataAnalysis: {
    aProps: {
      href: "https://github.com/emilysteed/data-analysis",
      target: "_blank",
    },
    description:
      "Example data analysis and visualization with Jupyter, Python, R, Shiny, and Tableau",
    title: "Data Analysis",
  },
} as const satisfies Record<
  string,
  Pick<CardProps, "description" | "title"> & {
    aProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  }
>;
