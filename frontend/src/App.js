
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
//import { Route } from 'express';
import { Route } from "react-router-dom";
import HomePg from './Pages/HomePg';
import ChatPg from './Pages/ChatPg';


function App() {
  return (
    <div className="App">
    {/* <Route path='/' component={HomePg} exact></Route>
    <Route path='/chats' component={ChatPg}></Route>  */}
    <Route path="/" component={HomePg} exact />
    <Route path="/chats" component={ChatPg} />
    </div>
  );
}

export default App;
