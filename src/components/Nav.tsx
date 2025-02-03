"use client";

import { chakra, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
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
          gap={{ base: "1.5", sm: "2.5" }}
          opacity={{
            base: links.home.aProps.href === pathname ? 1 : 0.5,
            _hover: 1,
          }}
          asChild
        >
          <Link {...links.home.aProps}>
            <Emily size="xs" />
            <Text
              as="span"
              display={{ base: "none", md: "inline" }}
              fontSize="xl"
              fontWeight="bold"
            >
              {links.home.text}
            </Text>
          </Link>
        </Flex>
        {[links.viz, links.work].map((link) => (
          <chakra.span
            key={link.text}
            opacity={{
              base: link.aProps.href === pathname ? 1 : 0.5,
              _hover: 1,
            }}
            asChild
          >
            <Link {...link.aProps}>
              <Text as="span" fontSize="xl" fontWeight="bold">
                {link.text}
              </Text>
            </Link>
          </chakra.span>
        ))}
      </Flex>
      <Flex align="center" gap={{ base: "1.5", sm: "2.5" }}>
        {[links.gitHub, links.linkedIn].map((link) => (
          <IconButton key={link.text} asChild size="sm" variant="outline">
            <Link {...link.aProps}>
              <link.icon />
            </Link>
          </IconButton>
        ))}
        <IconButton onClick={toggleColorMode} size="sm" variant="outline">
          {colorMode === "dark" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </Flex>
    </Flex>
  );
};
