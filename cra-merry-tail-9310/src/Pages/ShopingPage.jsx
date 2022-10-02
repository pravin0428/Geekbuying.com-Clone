import { RepeatIcon } from "@chakra-ui/icons";
import {
  Container,
  SimpleGrid,
  Img,
  Stack,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../Components/Loading";

const iconArr = [
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    },
    {
        "img":"https://i.pinimg.com/originals/c8/9c/7f/c89c7f02c4aa3920ee215254d45bb708.jpg",
        "text":"Super Deals"
    }
]

const shopingData = () => {
  return fetch("http://localhost:3004/Electronics").then(
    (res) => res.json()
  );
};

function ShopingPage() {
  const [shoping, setShoping] = useState([]);
  const[isLoading , setIsLoading] = useState(false)
  const[serachParams , setSearchParams] = useSearchParams()
  useState(() => {
    setIsLoading(true)
    shopingData().then((res) => {
      console.log(res);
      setShoping(res);
      setIsLoading(false)
    }).then((err) =>{
        console.log(err)
        setIsLoading(false)
    })
  }, []);

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <Heading color="#d81414" p={2}>
        FLASH DEALS
      </Heading>

     {/* <SimpleGrid >
       
          {iconArr.map((ele)=>(
            <Box> 
            <Img src={ele.img} alt="x" w={15} />
            <Text>{ele.text}</Text>
            </Box>
          ))}
         
     </SimpleGrid> */}
    

      <SimpleGrid  minChildWidth="210px" spacing="30px">
        {shoping &&
          shoping.map((elem) => (
            <Stack key={elem.id}>
           <Link to={`/cartpage/${elem.id}`} >    <Box boxShadow="lg" p="6" rounded="md" bg="white" key={elem.id}>
                <Img src={elem.image} alt={elem.original} />
                <Text fontSize="small" textAlign="start" p={2}>
                  {" "}
                  {elem.detail}{" "}
                </Text>
                <Text
                  textAlign="start"
                  p={2}
                  color="#d81414"
                  fontSize="larger"
                  fontWeight="bold"
                >
                  {" "}
                  {`₹${elem.original}`}{" "}
                </Text>
                <Text
                  textDecoration="line-through"
                  textAlign="start"
                  p={2}
                  fontSize="smaller"
                  mt="-15px"
                  color="grey"
                >
                  {" "}
                  {`₹${elem.before}`}{" "}
                </Text>
                <Text
                  textAlign="center"
                  ml={2}
                  backgroundColor="#d81414"
                  color="white"
                  width="90px"
                >
                  {elem.discount}
                </Text>
              </Box>
              </Link>
            </Stack>
          ))}
      </SimpleGrid>
    </>
  );
}

export default ShopingPage;

 
