import {atom,selector} from 'recoil';
import { RecoilRoot,useSetRecoilState,useRecoilValue } from 'recoil';
import './App.css';
import { useEffect } from 'react';
import { useMemo } from 'react';
const count=atom({
    default:0, //you cant set name like number or something (should mention default only)
    key:'count'
})
const even=selector({
    key:'even',
    get:function({get}){
        const number=get(count);//derived state from count
        return number%2==0;
    }
})
function Recoil(){
    return(//should wrap the parent component inside RecoilRoot
        <RecoilRoot>
            <Counter/>
        </RecoilRoot>
    )
}
function Counter(){
    const display=useSetRecoilState(count);
    return(//whenever atom state change then only the children re-renders
        <>
        <Currentcount/><br/>
        <Increase/>
        <Decrease/>
        <Iseven/>
        </>
    )
}
function Increase(){
    const setcount=useSetRecoilState(count);//no re-render as we just use the setfun but not changing the value
    return(
        <button onClick={()=>setcount(x=>x+2)}>increase</button>
    )
}
function Currentcount(){
    const displaycount=useRecoilValue(count);
    return(<>
    {displaycount}
    </>
    )
}
function Decrease(){
    const setcount=useSetRecoilState(count);
    return (
        <div>
            <button onClick={()=>setcount(x=>x-1)}>decrease</button>
        </div>
    )
}   
function Iseven(){
    const number=useRecoilValue(even);
    return(//if number return evertime true ,then no re-rendering,else re-render 
        //so for every even increase no re-render of Iseven (optimized)
        <div>
            <p>{number?"even":"odd"}</p>
        </div>
    )
}
export default Recoil;

//usecallback,usememo,useInterval,useTImeout,selector(refer notes)
