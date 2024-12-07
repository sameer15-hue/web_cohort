import {ReactElement} from "react";
interface Buttonprops{
    text:string,
    startsymbol?:ReactElement,
    variant:"primary"|"secondary"
}
const defaultstyle="px-4 py-2 round-md font-weight: 500 flex items-center" ;
const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-400",
    };
export default function Button(props:Buttonprops){
    return <button className={variantClasses[props.variant]+" "+defaultstyle}>{props.startsymbol} {props.text}</button>
    
}