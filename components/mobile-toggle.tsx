"use client";

import React, { useState } from 'react'
import Button from './ui/Button'
import { Dialog } from '@headlessui/react'
import { AlignLeft, Plus, X } from 'lucide-react'
import IconButton from './ui/icon-button'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MobileToogle = ({data}:any) => {

    const [open,setOpen]=useState(false);

    const pathname=usePathname();

    const routes=data.map((route:any)=>({
        href:`/category/${route._id}`,
        label:route.name,
        active:pathname===`category/${route._id}`
    }))

    const onOpen=()=>setOpen(true)
    const onClose=()=>setOpen(false)

  return (
    <div>
    <Button className='flex items-center gap-x-2 lg:hidden'
        onClick={onOpen}
        >
            <AlignLeft className='w-5 h-5' size={15} />
        </Button>

        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose} >
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
            <div className='fixed inset-0 z-40 flex'>
                <Dialog.Panel className={"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"}>
                <div className='items-center justify-end px-4 flex'>
            <IconButton  icon={<X size={15} />} onClick={onClose} />
                </div>
                <div className='ml-6 flex flex-col items-start space-y-4'>
                {routes.map((route:any)=>(
                    <Link 
                        href={route.href}
                        key={route.href}
                        className={cn(
                        "text-lg  font-medium transition-colors hover:text-black",
                        route.active?"text-black":"text-neutral-500"
                     )}
                    >
                        {route.label}
                    </Link>
                ))}
                </div>
                </Dialog.Panel>
            </div>
        
        </Dialog>
    </div>
  )
}

export default MobileToogle