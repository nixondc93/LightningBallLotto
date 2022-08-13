import type { NextPage } from 'next'
import { Box, Center, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Box w='100%'>
      <Box w='100%' h='400px'>
        <Center>
          <Heading size='2xl'>
            Lightning Ball Lotto
          </Heading>
        </Center>
      </Box>
    </Box>
  );
}

export default Home
