import React from "react";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
function ThirdRowHome() {
  return (
    <Container maxW="550%" mt="15px" p={8}  >
      <Heading p={3} textAlign="start">
       New For You
      </Heading>
      <Box className="row2nd_img">
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/bn/2209/power-631b2a8a2b40c9215c0db0d5._p1_.jpg" />
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
          <Image src="https://img.gkbcdn.com/p/2022-09-15/Y80-Bluetooth-5-1-TWS-Earphone-517050-0._w280_p1_.jpg" />
          <h3 className="headingstyle">Smart Home & Garden</h3>
          <Text className="textSecondRow">
            Smart cleaning robots and vacuums, kitchen supplies and patio &
            garden supplies, up to 60% off!
          </Text>
        </Box>
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/p/2022-09-26/X98H-TV-BOX-Android-12-Allwinner-H618-4GB-RAM-32GB-ROM-WIFI-6-517227-0._w280_p1_.jpg" />
          <Box>
            <h3 className="headingstyle">E-transport & Outdoor</h3>
            <Text className="textSecondRow">
              Electric bikes, electric scooters, portable generators, and more
              outdoor gear, save $50 now!buy now
            </Text>
          </Box>
        </Box>
        <Box boxShadow="lg">
          {" "}
          <Image src="https://img.gkbcdn.com/p/2022-09-21/OOLACTIVE-Bike-Saddle-Bicycle-Seat-Black---Red-517131-0._w280_p1_.jpg" />
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

export default ThirdRowHome;
