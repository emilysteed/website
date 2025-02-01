import { Stack, type StackProps } from "@chakra-ui/react";

export type CardsProps = StackProps;

export const Cards = ({ children, ...props }: CardsProps) => (
  <Stack gap="4" {...props}>
    {children}
  </Stack>
);
