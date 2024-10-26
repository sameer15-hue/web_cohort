import { useState,useEffect } from "react";
import usedebounce from "./usedebounce";
function App3(){
    const [value, setvalue] = useState(0);
    const debouncing=usedebounce(value,1000);
    function change(e){
        setvalue(e.target.value);
    }
    return (
        <div>
            <input id='query' placeholder=" search" type="text" onChange={change}></input>
        </div>
    )

}
export default App3;