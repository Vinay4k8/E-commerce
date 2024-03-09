
import Image from "next/image";
import {Tab} from "@headlessui/react";

import {cn} from "@/lib/utils"




const GalleryTab = ({image}:{image:string}) => {
  return (
    <Tab className={"relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white transition-all duration-200"}>
        {({selected})=>(
            <div>
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image
                    fill
                    src={image}
                    className="object-cover object-center"
                    alt="Image"
                    />
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",selected?"ring-black":"ring-transparent")} />
                </span>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab