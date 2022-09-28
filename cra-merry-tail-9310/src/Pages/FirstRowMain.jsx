import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SlideshowFirst from './SlidshowFirst'

function FirstRowMain() {
  return (
     <>
      <Flex padding="20px" >
      <Box w="600px"><SlideshowFirst/></Box>
      <Box></Box>
      </Flex >
     </>
  )
}

export default FirstRowMain