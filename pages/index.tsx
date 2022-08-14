import type { NextPage } from 'next'
import { Box, Center, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Box w='100%' minHeight='100vh'>
      <Center w='100%' h='400px'>
          <Heading as='h1' size='4xl' color={"purple.100"}>
            Lightning Ball
          </Heading>
      </Center>
    </Box>
  );
}

export default Home
