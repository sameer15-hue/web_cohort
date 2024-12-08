import { Twitter ,Video,Document, Brain} from "../Icons";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar(){
    return <div className="h-screen bg-white left-0 w-72 fixed top-0 border-r pl-4">
        
        <div className="text-2xl flex font-weight: 900 pl-2"> 
            <Brain/>
                Second Brain</div>
        <div className="pt-4">
         
        <Sidebaritem text="twitter" symbol={<Twitter/>}/>
        <Sidebaritem text="videos" symbol={<Video/>}/>
        <Sidebaritem text="document" symbol={<Document/>}/>
           
        </div>

    </div>
}