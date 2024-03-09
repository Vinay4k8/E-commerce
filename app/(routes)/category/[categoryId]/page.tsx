import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import React from 'react'
import CategoryClient from './components/client';


interface CategoryPageProps{
    params:{categoryId:string}
}


export const revalidate=0;


const CategoryPage :React.FC<CategoryPageProps>=async ({
    params
}) => {

        const products=await getProducts();
        const category=await getCategory(params.categoryId)
        const categoryProducts=products.filter((item:any)=>(
            item.categoryId._id==params.categoryId
        ))
  return (
    <div className='bg-white'>
        <Container>
            <Billboard textColor='white' data={category.billboardId}/>
            <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                <CategoryClient products={categoryProducts} category={category} />
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage