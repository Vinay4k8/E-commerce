import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import Gallery from "@/components/gallery/index"
import Info from "@/components/info"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/container"



interface ProductPageProps{
    params:{productId:string}
}



const ProductPage:React.FC<ProductPageProps>=async({params})=>{

    const product=await getProduct(params.productId)
    const products=await getProducts();
    const suggestedProducts=products.filter((item:any)=>(item.categoryId==product.categoryId._id && item._id!=product._id))


    return(
    <div className="bg-white">
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Gallery Images={product.Images} />
                    <div className="mt-10 px-4 sm:mt-16">
                        <Info data={product}/>
                    </div>
                </div>
                <hr className="my-10" />
                <ProductList title="Related products" data={suggestedProducts} />
            </div>
        </Container>
    </div>
    )
}


export default ProductPage