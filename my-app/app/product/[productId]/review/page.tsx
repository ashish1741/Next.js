export default function  productDetails ({params } : {params : {productId : string}}) {
    return <h1>review  of product {params.productId}   </h1>
}