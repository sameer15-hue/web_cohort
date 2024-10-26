import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from "react-router-dom";
function Sample(){
    return (
        <div>
            <BrowserRouter>
                {/* <Link to="/neet/11">class 11</Link>||
                <Link to="/neet/12">class 12</Link>||
                <Link to="/">Home</Link> */}
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    
                    <Route path="/neet/11" element={<Class11/>}></Route>
                    <Route path="/neet/12" element={<Class12/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    </Route>
                </Routes>
                Footer||contact us
                </BrowserRouter>
        </div>
    )
}
function Home(){
    return (<div>
        <h1>welcome to allen</h1>
    </div>)
}
function Class11(){
    const navigate=useNavigate();
    function redirect(){
        navigate('/neet/12')
    }
    return(
        <div>
        welcome to neet preparation
        <button onClick={redirect} >go back to neet12</button>
        </div>
    )
}
function Class12(){
    return(<div>
        revision should happen</div>
    )
     
}
//another way using layouts(using outlet)
function Layout(){
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
        
        
    )
}
function Header(){
    return <div>
        <Link to="/neet/11">class 11</Link>||
        <Link to="/neet/12">class 12</Link>||
        <Link to="/">Home</Link>
    </div>
    
}
export default Sample;
