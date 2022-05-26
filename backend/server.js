// import express
const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { notFound , errorHandler} = require('./MiddleWares/errorMiddleWare');
const messageRoutes = require('./routes/messageRoutes')
//created instance of express variable
dotenv.config();
connectDB();
const app = express(); 

app.use(express.json());

//simple end point
app.get("/",(req,res)=>{
res.send("API working");
})

app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound)
app.use(errorHandler)

const PORT= process.env.PORT||5000;

// we started a server with the help of app variable
const server = app.listen(PORT,console.log(`server started at ${PORT}`.yellow.bold));

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
    //   console.log(userData._id);
      socket.emit("connected");
    });

    socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
      });
    
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
    
        if (!chat.users) return console.log("chat.users not defined");
    
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return;
    
          socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
      });
      socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
      });
  });    
  
  


