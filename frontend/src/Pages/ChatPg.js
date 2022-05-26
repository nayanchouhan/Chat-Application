import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";
import { useState } from "react";

const ChatPg = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false); //for updating page when you leave grp etc.


  return (
    <div style={{ width:"100%" }}>
      {user && <SideDrawer/>}
      <Box d="flex" justifyContent="space-between" w="100%" h="93.5vh" p="10px">
          {user && <MyChats fetchAgain={fetchAgain}  />} 
          {user && (<ChatBox fetchAgain={fetchAgain}  setFetchAgain={setFetchAgain} />)}
      </Box>
      
    </div>
  );
};

export default ChatPg;
