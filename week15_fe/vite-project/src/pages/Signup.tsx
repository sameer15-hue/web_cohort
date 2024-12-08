import Button from "../components/Button";
import { Input } from "../components/Input";

export function Signup() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
      <span className="text-lg font-semibold mb-4">Signup</span>
      <div className="bg-white border rounded-lg w-full max-w-sm p-6 shadow-md">
        <div className="mb-4">
          <Input placeholder="Enter name" onchange={() => {}} />
        </div>
        <div className="mb-6">
          <Input placeholder="Password" onchange={() => {}} />
        </div>
        <Button text="Submit" variant="secondary" clicked={() => {}}/>
      </div>
    </div>
  );
}