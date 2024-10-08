import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 px-8 ">
      {[1, 2, 3, 4].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default Products;
