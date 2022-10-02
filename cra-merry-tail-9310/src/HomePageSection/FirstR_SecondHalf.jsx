import { Box, Img, SimpleGrid , Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopingPage from '../Pages/ShopingPage'
// import data from "../DataFiles/db.json"
// const newdata = data.Electronics
  // console.log(data.Electronics)
const getData = () =>{
   return fetch("https://pravin0428.github.io/myData/limited.json").then((res) => res.json())
}

function FirstR_SecondHalf() {

     const[data , setData] = useState([])
  //  console.log(data)
    useEffect(()=>{
      getData().then((res)=>{
            // console.log(res.Electronics)
            setData(res.Electronics)
        })
    },[])


  return (
    <> 
    <SimpleGrid minChildWidth='120px' spacing='40px' textAlign="center" >
      {data.map((elem) =>{
        return <Link to="/ShopingPage">  <Box key="Date.now()" >
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

export default FirstR_SecondHalf