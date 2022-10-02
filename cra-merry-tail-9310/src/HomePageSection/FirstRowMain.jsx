import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import FirstR_SecondHalf from './FirstR_SecondHalf'
import SlideshowFirst from '../Pages/SlidshowFirst'

function FirstRowMain() {
  return (
     <>
      <Box padding="20px" display="flex" >
      <Box w="600px"><SlideshowFirst/></Box>
      <Box w="750px"  >
        <FirstR_SecondHalf/>
      </Box>
      </Box>
     </>
  )
}

export default FirstRowMain