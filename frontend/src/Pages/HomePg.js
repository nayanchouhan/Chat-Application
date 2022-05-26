import React from "react";
import {
  Box,
  Container,
  flattenTokens,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";
import { useHistory } from "react-router";
import { useEffect } from "react";

const HomePg = () => {
   
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);




  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={5}
        bg="gray.500"
        w="100%"
        m="60px 0 20px 0"
        borderRadius="lg"
        borderWidth="4px"
        borderColor="black"
      >
        <Text fontSize="3xl" color="white">
          Talk-Trice
        </Text>
      </Box>
      <Box
        bgColor="white"
        w="100%"
        m="10px 0 20px 0"
        p={5}
        borderRadius="lg"
        borderWidth="4px"
        borderColor="black"
      >
        <Tabs variant="unstyled" align="end">
          <TabList>
            <Tab _selected={{ color: "white", bg: "gray.500" }}>Log in</Tab>
            <Tab _selected={{ color: "white", bg: "gray.500" }}>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePg;
