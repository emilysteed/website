import { Heading, Stack } from "@chakra-ui/react";

import { Card, Cards } from "@/components";
import { visualizations } from "@/lib";

const Page = () => (
  <Stack gap="4">
    <Heading as="h1" fontWeight="black" size="4xl">
      Visualizations
    </Heading>
    <Cards>
      {[visualizations.shiny, visualizations.tableau].map((visualization) => (
        <Card key={visualization.title} {...visualization} />
      ))}
    </Cards>
  </Stack>
);

export default Page;
