import { Box, Img, SimpleGrid , Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
 
// import data from "../DataFiles/db.json"
// const newdata = data.Electronics
  // console.log(data.Electronics)
const getData = () =>{
   return fetch("http://localhost:3004/weadevices?_limit=8").then((res) => res.json())
}

function ForthR_SecondHalf() {

     const[fourthData , setFourthData] = useState([])
  //  console.log(data)
    useEffect(()=>{
      getData().then((res)=>{
             console.log(res)
            setFourthData(res)
        })
    },[])


  return (
    <> 
    <SimpleGrid minChildWidth='120px' spacing='40px' textAlign="center" >
      {fourthData.map((elem) =>{
        return <Link to="/ShopingPage">  <Box mt={20} key="Date.now()"  >
            <Image src={elem.image} alt='Dan Abramov' />
            <Text backgroundColor="red"  color="white" borderRadius="20px" width="100px" >{elem.discount}</Text>
            <Text>{elem.original}</Text>
            <Text textDecoration="line-through" >{elem.before}</Text>
             <Text>{elem.name}</Text>    
        </Box>
        </Link>
      })}
  </SimpleGrid>  
  
  </>
  )
}

export default ForthR_SecondHalf