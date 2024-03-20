export default function  productDetails ({params } : {params : {productId : string}}) {
    return <h1>details of product {params.productId}   </h1>
}