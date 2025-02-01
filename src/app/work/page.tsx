import { Heading, Stack } from "@chakra-ui/react";

import { Card, Cards } from "@/components";
import { work } from "@/lib";

const Page = () => (
  <Stack gap="4">
    <Heading as="h1" fontWeight="black" size="4xl">
      Work
    </Heading>
    <Cards>
      {[work.dataAnalysis].map((work) => (
        <Card key={work.title} {...work} />
      ))}
    </Cards>
  </Stack>
);

export default Page;
