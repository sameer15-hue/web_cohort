import {atom,selector} from 'recoil';
import { RecoilRoot,useSetRecoilState,useRecoilValue } from 'recoil';
import './App.css';
const count=atom({
    default:0, //you cant set name like number or something (should mention default only)
    key:'count'
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
export default Recoil;
