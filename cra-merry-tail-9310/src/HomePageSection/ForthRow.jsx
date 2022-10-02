import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import ForthR_SecondHalf from './SecondHForthRow'

function ForthRow() {
  return (
    <Box padding="20px" display="flex" >
      <Box w="600px"><Img src="https://img.gkbcdn.com/bn/2209/500x632-63326e5e2b40c9222cacb303._p1_.jpg" alt="pic_enjoy" /></Box>
      <Box w="750px" >
        <ForthR_SecondHalf/>
      </Box>
      </Box>
  )
}

export default ForthRow