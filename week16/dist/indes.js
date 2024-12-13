"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8085 });
wss.on("connection", function (socket) {
    console.log('hi there');
    socket.send('hello');
    setInterval(() => {
        socket.send("socket responding");
    }, 5000);
});
