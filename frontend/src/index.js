import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  // <BrowserRouter>
  //   <ChatProvider>
  //     <ChakraProvider>
  //       <App />
  //     </ChakraProvider>
  //   </ChatProvider>
  // </BrowserRouter>,
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
