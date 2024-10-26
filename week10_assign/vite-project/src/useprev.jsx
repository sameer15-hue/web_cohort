import { useEffect, useRef } from "react";
export default function useprev(value){
    const ref=useRef;
    useEffect(function(){
    ref.current=value},[value]);
    return ref.current;
}
//first any component returns and mount into the hook.
// so here first return is done and then value is assigned to ref.current