import { Share } from "../Icons";
interface Cardprops {
  title: string;
  link: string;
  type: "x" | "yt";
}
export default function Card(props:Cardprops) {
  return (
    <div className="flex justify-between gap-3">
      <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border">
        <div className="flex justify-between">
          <div className="flex items-center text-sm">
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
            {props.title}
          </div>
          <div className="flex">
            <div className="pr-2 text-gray-500">
              <Share />
            </div>
            <div className="text-gray-500">
              <Share />
            </div>
          </div>    
        </div>
        <div className="pt-4">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/WvGexufMouA?si=tazpxNb-BbuLmBYI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        
      </div>
      <div className="pt-4  max-w-sm " >
        <blockquote className="twitter-tweet" >
            <a href="https://twitter.com/username/status/807811447862468608"></a>
            </blockquote>
        </div>
    </div>
  );
}
