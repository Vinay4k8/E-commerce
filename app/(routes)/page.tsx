import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import React from 'react'



export const revalidate=0

export const metadata={
  title:"KV-STORE",
  description:"Explore the store"
}

const HomePage = async() => {

  const billboard=await getBillboard("65e448151b35bb44809e8845");
  const products=await getProducts();

  const formateProducts=products.filter(product=>product.isFeatured!=false);

  return (
    <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} textColor='white'/>
          <div>
          <ProductList title={"Featured Products"} data={formateProducts} />
          </div>
        </div>
    </Container>
  )
}

export default HomePage