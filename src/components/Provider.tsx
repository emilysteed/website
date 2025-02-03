"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

import type { WithChildren } from "@/types";

import { ColorModeProvider } from "./ui";

export const Provider = ({ children }: WithChildren) => (
  <ChakraProvider value={defaultSystem}>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  </ChakraProvider>
);
