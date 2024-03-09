"use client";
import Image from "next/image";
import {Tab} from "@headlessui/react";
import React from "react";
import GalleryTab from "./gallery-tab";

interface GalleryProps{
    Images:string[]
}

const Gallery :React.FC<GalleryProps>= ({Images}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
        <div  className="mx-auto mt-6  w-full max-w-2xl  lg:max-w-none">
           
            <Tab.Panels className={"aspect-square w-full"}>
                {Images.map((image,index)=>(
                    <Tab.Panel key={index}>
                          <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                     <Image
                         fill
                        src={image}
                        alt="Image"
                        className="object-cover object-center"
                    />
                    </div>
                    </Tab.Panel>
                ))}
                  
            </Tab.Panels>
            <Tab.List
            className="grid grid-cols-4 gap-7 mt-5"
            >
                {Images.map((image,index)=>(
                    <GalleryTab key={index} image={image} />
                ))}
            </Tab.List>
        </div>
    </Tab.Group>
  )
}

export default Gallery