"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import {  Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-carts";


interface ProductCardProps{
    data:Product
}



const ProductCard:React.FC<ProductCardProps>=({data})=>{


    const cart=useCart();
    const previewModal=usePreviewModal();

    const router=useRouter()
    const handleClick=()=>{
        router.push(`/product/${data?._id}`)
    }



    const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        previewModal.onOpen(data);
    }


    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();

        cart.addItem(data);
    }

    return(
        <div  className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        onClick={handleClick}
        >
            <div className="aspect-square rounded-xl bg-gray-100 relative ">
                <Image
                src={data?.Images?.[0]}
                fill
                alt="Image"
                className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 absolute bottom-5">
                    <div className="flex gap-x-6 justify-center ">
                        <IconButton onClick={onPreview}
                        icon={<Expand size={20} className=""/>}
                        />
                        <IconButton onClick={onAddToCart}
                        icon={<ShoppingCart size={20} className=""/>}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p>
                    {data.categoryId.name}
                </p>
                <div>
                    <Currency value={data?.price}/>
                </div>
            </div>
        </div>
    );
}


export default ProductCard;