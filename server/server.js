const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const server = app.listen(port, () =>
  console.log(`The server is all fired up on port ${port}`)
);
require("./server/config/mongoose.config")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => {
    // Each client that connects gets their own socket id
    console.log("Nice to meet you. (shake hand)");
    //if this logs, new client successfully completed handshake
    socket.on("Welcome", (data) => {
        // socket.broadcast.emit("new_message_from_server", data)
    });

    socket.on("new_message_from_client", data => {
      socket.broadcast.emit("new_message_from_server", data)
    })
});
require("./server/routes/author.routes")(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));