const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Room storage
const rooms = new Map();
const typingUsersMap = new Map();

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Processing the entrance to the room
  socket.on("join", ({ room, nick, date }) => {
    try {
      // Leave the previous room
      if (socket.room) {
        socket.leave(socket.room);
      }

      // Joining the new room
      socket.join(room);
      socket.room = room;

      // Create a room if there is no room
      if (!rooms.has(room)) {
        rooms.set(room, []);
      }
    } catch (error) {
      console.error("Error joining room:", error.message);
    }
  });

  // Process sending a message
  socket.on("sendMessage", (message) => {
    try {
      const room = socket.room;

      // Add a message to the room
      rooms.get(room).push(message);

      // Send a message to all members of the room
      io.to(room).emit("message", message);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  });

  // Process start typing text
  socket.on("user-start-write", ({ nick, room }) => {
    try {
      if (!typingUsersMap.has(room)) {
        typingUsersMap.set(room, []);
      }

      const typingUsers = typingUsersMap.get(room);

      if (!typingUsers.includes(nick)) {
        typingUsers.push(nick);
      }

      const otherTypingUsers = typingUsers.filter((user) => user !== nick);

      io.to(room).emit("user-start-write", {
        typingUsers: otherTypingUsers,
        room,
      });

      console.log("user-start-write", typingUsers, nick, room);
    } catch (error) {
      console.error("Error typing message:", error);
    }
  });

  // Process end typing text
  socket.on("user-end-write", ({ nick, room }) => {
    try {
      if (typingUsersMap.has(room)) {
        const typingUsers = typingUsersMap.get(room);
        const index = typingUsers.indexOf(nick);

        if (index !== -1) {
          typingUsers.splice(index, 1);

          const otherTypingUsers = typingUsers.filter((user) => user !== nick);

          io.to(room).emit("user-end-write", {
            typingUsers: otherTypingUsers,
            room,
          });

          console.log("user-end-write", otherTypingUsers, nick, room);
        }
      }
    } catch (error) {
      console.error("Error ending typing:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`);
});
