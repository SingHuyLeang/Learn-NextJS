export default function ProductDetailPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Product detail page of id {params.productId}</h1>;
}
