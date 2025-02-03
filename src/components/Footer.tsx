"use client";

import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

import { NAME } from "@/constants";
import { links } from "@/lib";

export const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const onClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack as="footer" gap="2.5" py="16">
      <Flex align="center" justify="space-between">
        <Text as="span" fontSize="xl" fontWeight="bold">
          {NAME}
        </Text>
        <Flex align="center" gap="4">
          {[links.gitHub, links.linkedIn].map((link) => (
            <Link key={link.text} {...link.aProps}>
              <Text as="span" fontSize="m">
                {link.text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
      {scrollY !== 0 && (
        <Button w="fit" onClick={onClick} size="xs" variant="outline">
          Back To Top{" "}
          <Icon h="3">
            <FaArrowUpLong />
          </Icon>
        </Button>
      )}
    </Stack>
  );
};
