import {create} from "zustand";


import {Product }from "@/types";
import { Divide } from "lucide-react";

interface PreviewProps{
    isOpen:boolean;
    data?:Product;
    onClose:()=>void;
    onOpen:(data:Product)=>void;
}

const usePreviewModal=create<PreviewProps>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Product)=>set({data,isOpen:true}),
    onClose:()=>set({isOpen:false})
}))


export default usePreviewModal;