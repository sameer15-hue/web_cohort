import { backendurl } from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";

export function Usecontent(){
    const [contents,setcontent]=useState([]);
    useEffect(function (){
        async function display (){ 
        await axios.get(backendurl+'/content',{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }).then((response)=>setcontent(response.data.content))
    }
    display();
    
},[])
    return contents;
}