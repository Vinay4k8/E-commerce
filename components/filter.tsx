"use client";

import qs from "query-string"


import { useRouter, useSearchParams } from "next/navigation";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";



interface FilterProps{
    data:any;
    name:string;
    handleFilter:(filters:any)=>void
}

const Filter:React.FC<FilterProps> = ({data,name,handleFilter}) => {

    const router=useRouter();
    const searchParams=useSearchParams();

    const selectedValue=searchParams.get(name);

    const handleOnClick=(id:string)=>{
        const current=qs.parse(searchParams.toString());
        const query:any={
            ...current,
            [name]:id
        }
        
        if(current[name]===id){
            query[name]=null
        }
        handleFilter(query)
        const url:any=qs.stringifyUrl({
            url:window.location.href,
            query
        },{skipNull:true});
       router.push(url) 
    }

  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">
            {name}
        </h3>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2">
            {data.map((item:any,index:number)=>(
                <div key={index} className="flex items-center" >
                    <Button  className={cn("rounded-md text-gray-800 text-sm bg-white p-2 border border-gray-300",selectedValue==item && "bg-black text-white")}
                    onClick={()=>handleOnClick(item)}
                    >
                        {item}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter