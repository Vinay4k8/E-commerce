import { Product } from '@/types'
import React, { MouseEventHandler } from 'react'
import Currency from './ui/currency'

import AddToCart from './add-to-cart'


interface InfoProps{
    data:Product
}

const Info:React.FC<InfoProps> = ({data}) => {

   


  return (
    <div>
        <h1 className='text-3xl font-bold teaxt-gray-500'>
            {data.name}
         </h1>
         <div className='mt-3 flex items-end justify-between'>
            <div className='text-2xl text-gray-900'>
                <Currency value={data?.price}/>
            </div>
         </div>
         <hr className="my-4" />
         {data.Propertys.map((item:any,index:number)=>(
            <div className='flex items-center gap-x-4' key={index}>
            <h3 className='font-semibold text-black'>{item.name} : </h3>
            <div>
                {item.value}
            </div>
         </div>
         ))}
         <div className='mt-10 flex items-center gap-x-3'>
            <AddToCart data={data} />
         </div>
    </div>
  )
}

export default Info