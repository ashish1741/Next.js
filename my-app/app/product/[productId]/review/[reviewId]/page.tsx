import { notFound } from "next/navigation";

export default function productDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
    if (parseInt(params.reviewId ) > 1000) {
        notFound();
        
    }
  return (
    <h1>
      review of product {params.productId} by {params.reviewId}{" "}
    </h1>
  );
}
