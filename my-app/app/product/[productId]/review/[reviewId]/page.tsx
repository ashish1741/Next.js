export default function  productDetails ({params } : {params : {reviewId : string ,  productId :  string} }) {
    return <h1>review  of product {params.productId} by  {params.reviewId}   </h1>
}