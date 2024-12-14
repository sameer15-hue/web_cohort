import { useEffect, useRef, useState } from 'react'
function App() {
  const [mesg,setmesg]=useState(['hi there','hello']);
  const wsRef=useRef();
  const inputRef=useRef();
  useEffect(()=>{
    const ws=new WebSocket("http://localhost:8087");
    ws.onmessage=(ev)=>{
      setmesg(m=>[...m,ev.data]);
    }
    //@ts-ignore
    wsRef.current=ws;
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:"join",
        roomid:"123"
      }))
      console.log("socket connected");
    }
    return ()=>{
      ws.close();
    }
  },[])
  return (
    <div className='h-screen bg-black   '>
      <br></br>
      <div className='h-[90vh]'>
        {mesg.map(message=><div className='m-8'>
        <span className='bg-white text-black rounded p-4 m-6'>{message}</span></div>)}
      </div>
      <div className='w-full bg-white flex '>
        <input ref={inputRef} placeholder='message..' type='text' className=' flex-1 p-4'/>
        <button onClick={()=>{
          const input=inputRef.current?.value;
          wsRef.current.send(JSON.stringify({
            type:"chat",
            mesg:input
          }))
          console.log("mesg sent");
        }} className='bg-purple-600 text-white p-4'>send button</button>
      </div>
    </div>
  )
}
export default App;