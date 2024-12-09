import { useRef } from "react";
import { Cross } from "../Icons";
import Button from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { backendurl } from "../../config";
interface AddComponentProps {
  open: boolean;
  clicked(): void;
}
export default function Create(props: AddComponentProps) {
  const titleref=useRef<HTMLInputElement>();
  const linkref=useRef<HTMLInputElement>();
  async function submit(){
    const title=titleref.current?.value;
    const link =linkref.current?.value;
    const response = await axios.post(backendurl+'/content',{
      link:link,
      title:title
    },{
      headers:{
        "authorization":localStorage.getItem('token')
      }
      
    })
    alert(response.data.msg);
  } 
  return (
    <div className="flex justify-center">
      {props.open && (
        <div className="w-screen h-screen bg-slate-500 bg-opacity-50 fixed top-0 left-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center space-y-4">
            <div className="flex justify-between items-center w-full">
              <span className="flex justify-left">ADD Content</span>
              <div
                className=" flex justify-end cursor-pointer "
                onClick={props.clicked}
              >
                <Cross />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 ">
              <Input reference={titleref} placeholder="enter title" onchange={() => {}} />
              <Input reference={linkref} placeholder="enter link" onchange={() => {}} />
            </div>

            <Button variant="primary" text="Submit" clicked={submit} />
          </div>
        </div>
      )}
    </div>
  );
}

