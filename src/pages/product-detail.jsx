import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/product";

export const ProductDetail = () => {
  const { name } = useParams();
  const product = ProductsData.find((item) => item.name == name);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-4xl">{product?.title}</h1>
      <img src={product.img} alt={product.title} />
      <p className="text-2xl">{product.price}</p>
      <p>{product.text}</p>
      <button>{product.button}</button>
    </div>
  );
};

