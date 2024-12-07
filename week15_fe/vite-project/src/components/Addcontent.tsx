import { useState } from "react";
import { Cross } from "../Icons";
import Button from "./Button";
const change=useState('true',setchange);
interface addcomponentprops{
    open:boolean
}
interface Inputprops{
    placeholder:string,
    text:string,
    type:string,

}
function onChange({change}){
    setchange(!change)
}
export default function Create(props:addcomponentprops){
    return <div>
        {props.open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-65 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className=" flex justify-end "><Cross/></div>
                </span>
            </div>
            <div className="flex">
                <input placeholder="enter title" type="text"></input>
            </div>
            <Button variant="primary" text="Submit" />
        </div>
        }
    </div>
}
function Input(props:Inputprops){
    return <div className="flex ">
        <input type="text" className="px-4 py-2" onChange={onChange}/>

    </div>
}