import { useRef } from "react";
import Button from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { backendurl } from "../../config";
import { useNavigate } from "react-router-dom";
export function Signin() {
    const userRef=useRef<HTMLInputElement>();
    const passRef=useRef<HTMLInputElement>();
    const nav=useNavigate();
    async function signup(){
      const username=userRef.current?.value;
      const password=passRef.current?.value;
      console.log(username);
      //@ts-ignore
       const response=await axios.post(backendurl+"/signin",{
        username:username,
        password:password
      });
      const jwt=response.data.msg;
      localStorage.setItem('token',jwt);
      nav('/Dashboard');
    }
  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
      <span className="text-lg font-semibold mb-4">Signin</span>
      <div className="bg-white border rounded-lg w-full max-w-sm p-6 shadow-md">
        <div className="mb-4">
          <Input  reference={userRef} placeholder="Enter name" onchange={() => {}} />
        </div>
        <div className="mb-6">
          <Input reference={passRef} placeholder="Password" onchange={() => {}} />
        </div>
        <Button text="Submit" variant="secondary" clicked={signup}/>
      </div>
    </div>
  );
}