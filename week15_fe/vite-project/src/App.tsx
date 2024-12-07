import Button from "./components/Button";
import { Plus,Share } from "./Icons";
import Card from "./components/Card";
import Create from "./components/Addcontent";
function App() {

  return (
    <div className="p-4">
      <Create open={true}/>
      <div className="flex justify-end gap-4">
      <Button variant="primary" text="Share " startsymbol={<Share/>} />
      <Button variant="secondary" text="Add Content" startsymbol={<Plus/>}/>
      </div>
      <div className="flex gap-4">
      <Card title="React-Basics" link="https://www.youtube.com/watch?v=WvGexufMouA" type="yt"/>
      </div>
    </div>
  )
}

export default App; 