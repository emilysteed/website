import { Heading, Highlight, Stack, Text } from "@chakra-ui/react";

import { Card, Cards } from "@/components";
import { NAME } from "@/constants";
import { createMetadata, visualizations, work } from "@/lib";

const Page = () => (
  <Stack gap="12">
    <Stack>
      <Heading as="h1" fontWeight="black" size="4xl">
        {NAME}
      </Heading>
      <Text
        as="span"
        color="colorPalette.600"
        fontSize="s"
        _dark={{ color: "colorPalette.300" }}
      >
        Data Analyst
      </Text>
      <Text
        color="colorPalette.900"
        fontSize="2xl"
        _dark={{ color: "colorPalette.200" }}
      >
        <Highlight
          query={["analysis", "visualization", "positive impact"]}
          styles={{ bg: "yellow.200", _dark: { bg: "orange.800" } }}
        >
          Passionate about data analysis and visualization, drawing insights
          from complex datasets, and making positive impact.
        </Highlight>
      </Text>
    </Stack>
    <Stack gap="4">
      <Heading as="h2" fontWeight="bold" size="3xl">
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
    <Stack gap="4">
      <Heading as="h2" fontWeight="bold" size="3xl">
        Work
      </Heading>
      <Cards>
        {[work.usAidContracts, work.dataAnalysis].map((work) => (
          <Card key={work.title} {...work} />
        ))}
      </Cards>
    </Stack>
  </Stack>
);

export default Page;

export const metadata = createMetadata({
  description: "Data Analyst",
  title: NAME,
});
