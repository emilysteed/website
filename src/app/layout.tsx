import { Box, Container, Stack } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Footer, Nav, Provider } from "@/components";
import { WithChildren } from "@/types";

const Layout = ({ children }: WithChildren) => (
  <html suppressHydrationWarning>
    <body>
      <Provider>
        <Stack minH="100dvh" px="4" asChild>
          <Container maxW="3xl">
            <Nav />
            <Box flexGrow="1" pt={{ base: "12", md: "16" }}>
              {children}
              <Analytics />
              <SpeedInsights />
            </Box>
            <Footer />
          </Container>
        </Stack>
      </Provider>
    </body>
  </html>
);

export default Layout;
