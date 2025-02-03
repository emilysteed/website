import type { FlexProps } from "@chakra-ui/react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

import { Tag } from "./ui";

export type CardProps = FlexProps & {
  aProps: LinkProps;
  description: string;
  tags?: readonly string[] | string[];
  title: string;
};

export const Card = ({
  aProps,
  description,
  tags,
  title,
  ...props
}: CardProps) => {
  return (
    <Flex
      gap="4"
      p="4"
      bg={{ base: "colorPalette.50", _hover: "colorPalette.100" }}
      borderWidth="thin"
      borderStyle="solid"
      borderColor="colorPalette.500"
      borderRadius="md"
      _dark={{
        bg: {
          base: "colorPalette.950",
          _hover: "colorPalette.900",
        },
        borderColor: "colorPalette.700",
      }}
      cursor="pointer"
      asChild
      colorPalette="purple"
      focusRingColor="blue.200 !important"
      focusVisibleRing="outside"
      {...props}
    >
      <Link {...aProps}>
        <Stack gap="0.5">
          <Heading as="h3" fontWeight="bold" size="xl">
            {title}
          </Heading>
          <Text
            as="p"
            color="colorPalette.900"
            fontSize="m"
            _dark={{ color: "colorPalette.200" }}
          >
            {description}
          </Text>
          {tags && (
            <Flex align="center" gap="2.5" mt="1" colorPalette="orange">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Flex>
          )}
        </Stack>
      </Link>
    </Flex>
  );
};
