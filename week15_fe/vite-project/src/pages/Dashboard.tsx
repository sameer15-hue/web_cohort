import Button from "../components/Button";
import { Plus,Share } from "../Icons";
import Card from "../components/Card";
import Create from "../components/Addcontent";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Usecontent } from "../components/Usecontent";
function Dashboard() {
  const [model,setmodel]=useState(false);
  const contents=Usecontent();
  console.log(contents);
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
      <div className="flex gap-4 flex-wrap">
        {contents.map(({link,title})=><Card 
        title={title} 
        link={link} 
        type="yt"
        />)}
      
      <Card title="harkirat" link="https://x.com/im_saif2417/status/1865498780419911842" type="x"/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard; 