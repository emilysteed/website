import type { FlexProps } from "@chakra-ui/react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { Tag } from "./ui";

export type CardProps = FlexProps & {
  aProps: NextLinkProps;
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
      bg="colorPalette.50"
      borderWidth="thin"
      borderStyle="solid"
      borderColor="colorPalette.500"
      borderRadius="md"
      _hover={{ bg: "colorPalette.100" }}
      _dark={{
        bg: "colorPalette.950",
        borderColor: "colorPalette.700",
        _hover: {
          bg: "colorPalette.900",
        },
      }}
      cursor="pointer"
      asChild
      colorPalette="purple"
      {...props}
    >
      <NextLink {...aProps}>
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
      </NextLink>
    </Flex>
  );
};
