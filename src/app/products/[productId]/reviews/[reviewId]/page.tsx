import { notFound } from "next/navigation";
export default function ProductReview({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 10) {
    notFound();
  }
  return (
    <>
      Review {params.reviewId} for product {params.productId}
    </>
  );
}
