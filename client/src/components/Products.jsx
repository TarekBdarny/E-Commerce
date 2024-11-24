import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="flex justify-around flex-wrap gap-5  py-4 px-8  ">
      {/* grid place-content-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
      {[1, 2, 3, 4].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default Products;
