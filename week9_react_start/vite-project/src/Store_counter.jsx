import { useState,useEffect } from "react";
// function Counter(){
//     const [count,setCount]=useState(function(){
//         const x=localStorage.getItem('count');
//         if (x){
//             return parseInt(x);
//         }return 0;
//     });
//     useEffect(function setting(){
//         console.log('setting entered');
//         localStorage.setItem('count',count);
//     },[count])
//     function update(){
//         setCount(count+1);
//     }
//     return(
//         <div>
//             <h1> count:{count} </h1>
//             <button onClick={update}>update</button>
//         </div>
//     )
// }
// export default Counter;
// practice agained code
function Counter(){
    const [count,setCount]=useState(function(){
        let x=localStorage.getItem('count');
        console.log(x);
        if (x){
            return parseInt(x);
        }else{
            return 0;
        }
    });
    function update(){
        localStorage.setItem('count',count+1);
        setCount(count+1);
        
    }
    return(
        <div>
            <h1> count:{count} </h1>
            <button onClick={update}>increase</button>
        </div>
    )
}
export default Counter;