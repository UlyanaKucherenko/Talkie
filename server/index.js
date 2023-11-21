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

// Сховище  для кімнат
const rooms = new Map();

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Обработка входа в комнату
  socket.on("joinRoom", (room) => {
    try {
      // Покидаем предыдущую комнату
      if (socket.room) {
        socket.leave(socket.room);
      }

      // Присоединяемся к новой комнате
      socket.join(room);
      socket.room = room;

      // Создаем комнату, если ее нет
      if (!rooms.has(room)) {
        rooms.set(room, []);
      }

      // // Отправляем сообщение о входе в комнату
      // io.to(room).emit("message", "User joined the room");

      // Отправляем клиенту список сообщений в комнате
      io.to(socket.id).emit("messageList", rooms.get(room));
    } catch (error) {
      console.error("Error joining room:", error.message);
    }
  });

  // Обработка отправки сообщения
  socket.on("sendMessage", (message) => {
    try {
      const room = socket.room;

      // Добавляем сообщение в комнату
      rooms.get(room).push(message);

      // Отправляем сообщение всем участникам комнаты
      io.to(room).emit("message", message);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`);
});
