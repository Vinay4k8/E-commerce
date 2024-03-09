"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-carts";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NavbarActions=()=>{

    const [isMounted,setIsMounted]=useState(false);
    const router=useRouter();

    const cart=useCart()


    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted) return null

    return(<div className="ml-auto items-center flex gap-x-4">
        <Button className="flex"
        onClick={()=>router.push(`/cart`)}
        >
            <ShoppingBag
            size={20}
            color="white"
            />
            <span className="ml-2 text-white font-medium text-sm">
                {cart.items.length}
            </span>
        </Button>
    </div>)
}

export default NavbarActions
