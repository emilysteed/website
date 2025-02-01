"use client";

import { Flex, IconButton, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa6";

import { links } from "@/lib";

import { Emily } from "./Emily";
import { useColorMode } from "./ui";

export const Nav = () => {
  const pathname = usePathname();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      pos="sticky"
      top="0"
      left="0"
      align="center"
      justify="space-between"
      py="4"
      bg="bg"
    >
      <Flex align="center" gap="4">
        <Flex
          align="center"
          gap="2.5"
          opacity={links.home.aProps.href === pathname ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          asChild
        >
          <Link asChild>
            <NextLink {...links.home.aProps}>
              <Emily size="xs" />
              <Text
                as="span"
                display="none"
                fontSize="xl"
                fontWeight="bold"
                md={{ display: "inline" }}
              >
                {links.home.text}
              </Text>
            </NextLink>
          </Link>
        </Flex>
        {[links.viz, links.work].map((link) => (
          <Link
            key={link.text}
            opacity={link.aProps.href === pathname ? 1 : 0.5}
            _hover={{ opacity: 1 }}
            asChild
          >
            <NextLink {...link.aProps}>
              <Text as="span" fontSize="xl" fontWeight="bold">
                {link.text}
              </Text>
            </NextLink>
          </Link>
        ))}
      </Flex>
      <Flex align="center" gap="2.5">
        {[links.gitHub, links.linkedIn].map((link) => (
          <IconButton key={link.text} asChild size="sm" variant="outline">
            <NextLink {...link.aProps}>
              <link.icon />
            </NextLink>
          </IconButton>
        ))}
        <IconButton onClick={toggleColorMode} size="sm" variant="outline">
          {colorMode === "dark" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </Flex>
    </Flex>
  );
};
