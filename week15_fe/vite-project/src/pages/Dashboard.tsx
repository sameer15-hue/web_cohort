import Button from "../components/Button";
import { Plus,Share } from "../Icons";
import Card from "../components/Card";
import Create from "../components/Addcontent";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
function Dashboard() {
  const [model,setmodel]=useState(false);
  return (
    <div className="border-3">
      <Sidebar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100  ">
      <Create open={model} clicked={()=>{
        setmodel(false)}}/>
      <div className="flex justify-end gap-4">
      <Button variant="primary" text="Share " startsymbol={<Share/>} />
      <Button variant="secondary" text="Add Content" startsymbol={<Plus/>} clicked={()=>{
        setmodel(true)}}/>
      </div>
      <div className="flex gap-4">
      <Card title="React-Basics" link="https://www.youtube.com/watch?v=WvGexufMouA" type="yt"/>
      <Card title="harkirat" link="https://x.com/im_saif2417/status/1865498780419911842" type="x"/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard; 