import { useEffect, useState } from "react";
function usedebounce(value,delay){
    const [debounce,setdebounce]=useState(0);
    useEffect(function(){
        
        const timer =setTimeout(function(){
            console.log('entered');
            setdebounce(value)},delay);
        return function(){
            console.log('returnce')
            clearTimeout(timer);   
        }
    },[value,delay])
    return debounce;
}
export default usedebounce;