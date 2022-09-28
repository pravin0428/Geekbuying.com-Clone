import { Box, Img, SimpleGrid , Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from "../DataFiles/db.json"
const newdata = data.Electronics
//   console.log(data.Electronics)
// const getData = () =>{
//    return fetch("").then((res) => res.json())
// }

function FirstR_SecondHalf() {

     const[data , setData] = useState(newdata)
   console.log(data)
    // useEffect(()=>{
    //     getData().then((res)=>{
    //         console.log(res)
    //     })
    // },[])


  return (
    <> 
    <SimpleGrid minChildWidth='120px' spacing='40px' textAlign="center" >
      {data.map((elem) =>{
        return<Box key={elem.before} >
            <Image src={elem.image} alt='Dan Abramov' />
            <Text backgroundColor="red"  color="white" borderRadius="20px" width="100px" >{elem.discount}</Text>
            <Text>{elem.original}</Text>
            <Text textDecoration="line-through" >{elem.before}</Text>
        </Box>
      })}
  </SimpleGrid>
  </>
  )
}

export default FirstR_SecondHalf