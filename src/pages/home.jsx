import React from "react";
import { Link } from "react-router-dom";
import { CategoriesData } from "../data/categories";

export const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <h2>Categories</h2>
        <div>
          {CategoriesData.map((item) => (
            <Link to={`/products/product-detail/${item.id}`} key={item.id}>
              <img src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
            </Link>
          ))}
        </div>
      </div>
      </div>
  );
};


