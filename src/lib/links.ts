import { AnchorHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { NAME } from "@/constants";

export const links = {
  gitHub: {
    aProps: {
      href: "https://github.com/emilysteed",
      target: "_blank",
    },
    icon: FaGithub,
    text: "GitHub",
  },
  home: {
    aProps: {
      href: "/",
    },
    text: NAME,
  },
  linkedIn: {
    aProps: {
      href: "https://linkedin.com/in/emilysteed",
      target: "_blank",
    },
    icon: FaLinkedinIn,
    text: "LinkedIn",
  },
  viz: {
    aProps: {
      href: "/visualizations",
    },
    text: "Viz",
  },
  work: {
    aProps: {
      href: "/work",
    },
    text: "Work",
  },
} as const satisfies Record<
  string,
  {
    icon?: IconType;
    aProps: AnchorHTMLAttributes<HTMLAnchorElement>;
    text: string;
  }
>;
