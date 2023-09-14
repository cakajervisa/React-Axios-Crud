import React, { useEffect, useState } from "react";

const ProductLit = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching the products in", category);
    setProducts(["clothing", "household"]);
  }, [category]);

  return <div>ProductLit</div>;
};

export default ProductLit;
