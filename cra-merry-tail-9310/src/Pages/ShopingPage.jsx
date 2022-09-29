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
  return fetch("https://pravin0428.github.io/myData/open_data.geojson").then(
    (res) => res.json()
  );
};

function ShopingPage() {
  const [shoping, setShoping] = useState([]);
  const[isLoading , setIsLoading] = useState(false)
  useState(() => {
    setIsLoading(true)
    shopingData().then((res) => {
      console.log(res.Electronics);
      setShoping(res.Electronics);
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
    

      <SimpleGrid border="1px solid black" minChildWidth="210px" spacing="30px">
        {shoping &&
          shoping.map((elem) => (
            <Stack key={elem.id}>
              <Box boxShadow="lg" p="6" rounded="md" bg="white">
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
            </Stack>
          ))}
      </SimpleGrid>
    </>
  );
}

export default ShopingPage;

/* 
before: 26.99
detail: "Xiaomi WiFi Amplifier Pro 2X2 External Antenna 300Mbps Support 64 Devices Simultaneous Link - Black"
detail_url: "https://www.geekbuying.com/item/Xiaomi-WiFi-Amplifier-Pro-Black-383286.html?pmrm=best-sellers"
discount: "30% OFF"
id: "1"
image: "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_.jpg"
original: 19.99
star: "🌟🌟🌟🌟"
url: "https://www.geekbuying.
*/
