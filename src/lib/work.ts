import { AnchorHTMLAttributes } from "react";

import { CardProps } from "../components";

export const work = {
  usAidContracts: {
    aProps: {
      href: "https://github.com/emilysteed/usa_spending",
      target: "_blank",
    },
    description: "Data analysis and visualization with Dash and Python",
    title: "USAID Contracts Analysis",
  },
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
