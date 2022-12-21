import React from "react";
import "./Category.css";
const Category = ({ categ }) => {
  const { title, icon, adds } = categ;
  console.log(icon);
  return (
    <div className="category-item">
      <a href={{}}>
        <img src={icon} alt="" />
        <p>{title}</p>
        <span>{adds} adds</span>
      </a>
    </div>
  );
};
export default Category;
