"use client";


import React, { useState } from 'react'
import Button from './ui/Button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from './ui/icon-button';
import Filter from './filter';


const MobileFilter = ({data,handleProducts}:any) => {

    const [open,setOpen]=useState(false);

    const onOpen=()=>setOpen(true)
    const onClose=()=>setOpen(false)

  return (
    <div>
        <Button className='flex items-center gap-x-2 lg:hidden'
        onClick={onOpen}
        >
            Filters
            <Plus size={20} />
        </Button>

        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose} >
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
            <div className='fixed inset-0 z-40 flex'>
                <Dialog.Panel className={"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"}>
                <div className='items-center justify-end px-4 flex'>
            <IconButton  icon={<X size={15} />} onClick={onClose} />
                </div>
                <div className='ml-6'>
                    {data.map((item:any)=>(
                        <Filter
                        data={item.value}
                        name={item.name}
                        key={item._id}
                        handleFilter={handleProducts}
                        />
                    ))}
                </div>
                </Dialog.Panel>
            </div>
        
        </Dialog>
    </div>
  )
}

export default MobileFilter