"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8087 });
//user={roomid,socket}
//msg={type,roomid}
let allsockets = [];
wss.on("connection", function (socket) {
    socket.on("message", (message) => {
        const msg = JSON.parse(message);
        if (msg.type == 'join') {
            allsockets.push({
                socket: socket,
                roomid: msg.roomid
            });
            console.log('joined');
        }
        if (msg.type == 'chat') {
            let currentUser = allsockets.find((x) => x.socket === socket);
            let currentroom = currentUser === null || currentUser === void 0 ? void 0 : currentUser.roomid;
            console.log("it is " + currentroom);
            allsockets.forEach((x) => {
                if (x.roomid === currentroom) {
                    x.socket.send(msg.mesg.toString());
                    console.log(msg.mesg);
                }
            });
        }
    });
    socket.on("close", () => {
        allsockets = allsockets.filter((x) => x.socket !== socket);
    });
});
