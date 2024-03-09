"use client";

import { Product } from "@/types";
import Image from "next/image";
import {toast } from "react-hot-toast";
import {X} from "lucide-react";

import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-carts";
import { cn } from "@/lib/utils";






interface CartItemProps{
    data:Product;
}



const CartItem :React.FC<CartItemProps>= ({data}) => {

    const cart=useCart();


    const onRemove=()=>{
        cart.removeItem(data._id);
    }



  return (
    <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
            <Image
            fill
            alt="Image"
            src={data.Images[0]}
            className="object-cover object-center"
            />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="absolute z-10 right-0 top-0">
                <IconButton
                icon={<X size={15}/>}
                onClick={onRemove}
                />
            </div>
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-black">
                        {data.name}
                    </p>
                </div>
                <div className="mt-1 flex text-sm flex-wrap">
                    {data.Propertys.map((item:any,index:number)=>(
                        <p
                        key={index} 
                        className={cn("text-gary-500 ",index!==0 &&"border-l border-gray-200 ml-4 pl-4")}>
                            {item.value} {item.name}
                        </p> 
                    ))}

                </div>
            </div>
        </div>
    </li>
  )
}

export default CartItem