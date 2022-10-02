import { Center, Flex, Box, Text, Button } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ShowCart from "./ShowCart";

var cartData = JSON.parse(localStorage.getItem("cartdata")) || [];

function CartPage() {
  const [singleData, setSingleData] = useState([]);
  
  const params = useParams();
//   console.log(params.id);
  const{isAuth} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3004/Electronics/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSingleData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  const addItemToCartArr = (id,url,price,name) =>{
   
    var payload ={
      id:id,
      url : url,
      price : price,
      name : name
    }
   cartData.push(payload)
   localStorage.setItem("cartdata", JSON.stringify(cartData));
    alert("acount created successfully")
  }
 
  return (
    <>
      <Flex color="white">
        <Center w="500px">
          <img width="100%" height="100%" src={singleData.image} />
        </Center>
        <Box flex="1" lineHeight="50px">
          <Text color="black" textAlign="start" fontWeight="bold">
            {singleData.detail}
          </Text>
          <Text color="black" textAlign="start">
            {`Ratings : ${singleData.star}`}
          </Text>
          <Text
            color="#f1403c"
            fontSize="20px"
            lineHeight="30px"
            fontWeight="700"
            textAlign="start"
          >
            Flash Deal
          </Text>

          <Box
            display="flex"
            justifyContent="space-evenly"
            // border="1px solid green"
            width="250px"
            alignItems="center"
          >
            <Text
              textAlign="start"
              p={2}
              color="#2e2f32"
              fontSize="28px"
              fontWeight="700"
            >
              {" "}
              {`₹${singleData.original}`}{" "}
            </Text>
            <Text
              textDecoration="line-through"
              textAlign="center"
              p={2}
              fontSize="smaller"
              color="#999"
            >
              {" "}
              {`₹${singleData.before}`}{" "}
            </Text>
            <Text
              textAlign="center"
              ml={2}
              backgroundColor="#f1403c"
              color="#fff;"
              width="74px"
              height="22px"
              lineHeight="22px"
              borderRadius="4px"
              fontSize="14px"
              fontWeight="700"
              verticalAlign="top"
              mt="8px"
            >
              {singleData.discount}
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt={10}
            ml="-28px"
            // border="1px solid red"
            width="350px"
          >
          <Button
                w="170px"
                bg="#fff"
                color="#06f"
                p={6}
                cursor="pointer"
                // border="2px solid #06f"
                borderRadius="4px"
                overflow="hidden"
                fontSize="larger"
                fontWeight="bold"
                onClick={() => addItemToCartArr(singleData.id , singleData.image ,singleData.original,singleData.detail )}
              >
                Add to Cart
              </Button>
          
            <Link to="/chekoutPage">
              <Button
                w="170px"
                color="#fff"
                p={6}
                bg="#06f"
                cursor="pointer"
                // border="2px solid #06f"
                borderRadius="4px"
                overflow="hidden"
                fontSize="larger"
                fontWeight="bold"
              >
                Buy Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>

 

    </>
  );
}

export default CartPage;
