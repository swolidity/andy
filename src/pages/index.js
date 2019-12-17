import React from "react"
import { Box, Heading, Text, Link } from "@chakra-ui/core"

export default () => (
  <Box p={6}>
    <Heading>
      <span role="img" aria-label="waving hand emoji">
        👋
      </span>{" "}
      Hi! I'm Andy Kay.
    </Heading>

    <Text>
      I build web applications. I write about how I build them under /blog
    </Text>

    <Text>
      Chat with me here{" "}
      <Link href="http://bit.ly/38QeFX1" isExternal>
        http://bit.ly/38QeFX1
      </Link>
    </Text>
  </Box>
)
