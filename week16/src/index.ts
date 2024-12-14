import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8087});
interface user{
    roomid:string,
    socket:WebSocket
}
//user={roomid,socket}
//msg={type,roomid}
let allsockets:user[]=[];
wss.on("connection",function(socket:any){
    socket.on("message",(message:string)=>{
        const msg=JSON.parse(message);
        if (msg.type=='join'){
            allsockets.push({
                socket:socket,
                roomid:msg.roomid
            })
            console.log('joined');
        }
        if (msg.type=='chat'){
            let currentroom = allsockets.find((x)=> x.socket===socket)?.roomid;
            console.log("it is "+currentroom);
            allsockets.forEach((x)=>{
                if(x.roomid===currentroom){  
                    x.socket.send(msg.mesg.toString());
                    console.log(msg.mesg);
                }
            });
        }
    });
    socket.on("close",()=>{
        allsockets.pop();
    })
})