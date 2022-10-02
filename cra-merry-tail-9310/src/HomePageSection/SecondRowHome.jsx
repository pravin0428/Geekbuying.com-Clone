import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
function SecondRowHome() {
  return (
    <Container maxW="550%" mt="15px">
      <Heading p={3} textAlign="start">
        Trending Categories
      </Heading>
      <Box className="row2nd_img">
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/bn/2209/3d-6321b67e2b40c9137c3f2ca9._p1_.jpg" />
          <Box>
            <h3 className="headingstyle">3D Printers & Electronics</h3>
            <Text className="textSecondRow">
              3D printers, laser engravers, video games, speakers, earphones and
              more electronics, up to 70% off!
            </Text>
          </Box>
        </Box>
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/bn/2209/1-6321b33f2b40c9137c3f2ca7._p1_.jpg" />
          <h3 className="headingstyle">Smart Home & Garden</h3>
          <Text className="textSecondRow">
            Smart cleaning robots and vacuums, kitchen supplies and patio &
            garden supplies, up to 60% off!
          </Text>
        </Box>
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/bn/2209/12-6321b5fe2b40c9137c3f2ca8._p1_.jpg" />
          <Box>
            <h3 className="headingstyle">E-transport & Outdoor</h3>
            <Text className="textSecondRow">
              Electric bikes, electric scooters, portable generators, and more
              outdoor gear, save $50 now!buy now
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SecondRowHome;
