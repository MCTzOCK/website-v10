/**
 * src/pages/index.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.06.25
 */

import * as React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex w={"100%"} h={"100%"} minH={"100vh"}>
        <Box pt={10} w={"100%"}>
          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.500"}>
              Ben Siebert - IT Dienstleistungen
            </Text>
            <Heading size={"2xl"}>Ben Siebert</Heading>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
