import { ReactElement } from "react";

interface sidebaritemsprops {
  text: string;
  symbol: ReactElement;
}
export function Sidebaritem(props: sidebaritemsprops) {
  return <div className="flex py-1 px-2 transition-all duration-290 hover:bg-gray-200  rounded  border-2px">
    <div className="p-2">
        {props.symbol}
    </div>
    <div className="p-2">
        {props.text}
    </div>

  </div>;
}
