import { Heading, Stack } from "@chakra-ui/react";

import { Card, Cards } from "@/components";
import { createMetadata, visualizations } from "@/lib";

const Page = () => (
  <Stack gap="4">
    <Heading as="h1" fontWeight="black" size="4xl">
      Visualizations
    </Heading>
    <Cards>
      {[
        visualizations.usAidContracts,
        visualizations.shiny,
        visualizations.tableau,
      ].map((visualization) => (
        <Card key={visualization.title} {...visualization} />
      ))}
    </Cards>
  </Stack>
);

export default Page;

export const metadata = createMetadata({
  description: "Data analysis and visualization projects.",
  title: "Visualizations",
});
