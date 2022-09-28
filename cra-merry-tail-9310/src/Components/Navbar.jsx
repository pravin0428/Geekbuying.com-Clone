import { Box, Container, Input, Link, Img, HStack, Flex, ButtonGroup, Spacer, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import ModalComponent from "./ModalComp";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <Box border="4px solid red" backgroundColor="#318ffb" >
      {/* 1st line_navbar */}
      <Flex minWidth='max-content' alignItems='center' gap='2' border="0.5px solid white"   >
  <Spacer />
  
  <ModalComponent title="Save BIG with our app!" />
  <ModalComponent title="Language" />
  <ModalComponent title="Support Center" />
   
 </Flex>
 

      {/* 2nd line_navbar */}

      <Flex padding="10px" >
    <Box w='70px' h='10' >
    <Img src="https://drive.google.com/file/d/121f9Nt8LrESZENCpZTnSimfXxHmq0MWe/view?usp=sharing" alt="logo"/> 
    </Box>
 
    <Box w='270px' h='10' display="flex" >
    <Box padding="7px">
            <select name="" id="">
              <option value="">all cat</option>
              <option value="">all cat</option>
            </select>
          </Box>
          <Box>
            <Input
              placeholder="Search by keyword"
              w="650px"
              backgroundColor="white"
              color="white"
              padding="10px"
              // ml="5em"  // if logo will come then it will be fine
            ></Input>
          </Box> 
    </Box>
    <Spacer />
    <Box backgroundColor="#318ffb" color="white" >
    <Flex minWidth='max-content'maxWidth="max-content" alignItems='center' gap='2' >
  <Spacer />
  
  <ModalComponent title="Ship to/INR" />
  <ModalComponent title="Sign in" />
  <ModalComponent title="cart" />
   
 
</Flex>
    </Box>
  </Flex>
 
      {/* 3rd line_navbar */}
      <HStack className={styles.navThird}   color="white" border="2px solid black" >
        <Box width="200px" border="2px solid red" >
        <HamburgerIcon/>
         <ModalComponent title="Categories" />
        </Box>
         
        <Box width="750px" border="2px solid red" display="flex" justifyContent="space-evenly" >
       <Link to="">New</Link>
        <Link to="">Bestselling</Link>
        <Link to="">Brand</Link>
        <Link to="">Clearance</Link>
        <Link to="">Deals</Link>
        <Link to="">Coupon</Link>
        <Link to="">App Only</Link>
       </Box>
         
      </HStack>
    </Box>
  );
}

export default Navbar;
