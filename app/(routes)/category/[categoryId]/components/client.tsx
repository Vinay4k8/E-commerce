"use client";

import Filter from '@/components/filter'
import MobileFilter from '@/components/mobile-filter';
import NoResults from '@/components/np-results'
import ProductCard from '@/components/ui/product-card'
import { Category, Product } from '@/types'
import React, { useState } from 'react'

interface CategoryClientProps{
    products:Product[]
    category:Category
}


const CategoryClient:React.FC<CategoryClientProps> = ({category,products}) => {

    const [filterProducts,setFilterProducts]=useState(products);



    function handleFilterProducts(object:any) {
        if(Object.keys(object).length==0){
             setFilterProducts(products);
             return;
        }
        let MatchedProducts=[]
       for(let product of products){
        let flag=0;
          product.Propertys.forEach((item:any)=>{
            if(object.hasOwnProperty(item.name)){
                if(object[item.name]==item.value || object[item.name]==null){
                    flag++;
                }
            }
        })
        if(flag==Object.keys(object).length){
        MatchedProducts.push(product);}
       }
       setFilterProducts(MatchedProducts)
    }
    

   

  return (
    <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                {/* {filters} */}
                <div>
                    <MobileFilter data={category.value} 
                    handleProducts={handleFilterProducts}
                    /> 
                <div className='hidden lg:block'>
                   {category.value.map((item:any,index)=>(
                     <Filter
                     key={index}
                     name={item.name}
                     data={item.value}
                     handleFilter={handleFilterProducts}
                     />
                   ))}
                </div>
                </div>
                
                <div className='mt-6 lg:col-span-4 lg:mt-0'>
                    {products.length==0 && <NoResults/>}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {filterProducts.map((item)=>(
                            <ProductCard key={item._id} data={item}/>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default CategoryClient