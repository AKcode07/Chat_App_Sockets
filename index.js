const express = require("express");
const http = require("http");
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/', express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New connection is up...");
  console.log(socket.id);
  socket.on("msg_send", async (data) => {
    console.log(data);
    // const chat = await Chat.create({
    //   roomId: data.roomid,
    //   user: data.username,
    //   content: data.msg,
    // });
    io.emit("msg_rcvd", data);
  });
});

server.listen(3000, () => {
  console.log(`Server started on port: 3000`);
});
