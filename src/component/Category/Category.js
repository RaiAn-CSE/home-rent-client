import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
const Category = ({ categ, setTotalAdd, totalAdd }) => {
  const { title, icon, adds } = categ;
  const [add, setAdd] = useState()
  const navigate = useNavigate()
  const handleCategory = () => {
    console.log("hit", title);
    navigate("/AllProperty", { state: { data: { title, page: "home" } } })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/categoryWiseData?title=${title}`)
      .then(res => res.json())
      .then(data => {
        console.log("category", data);
        setAdd(data.length)
        setTotalAdd(totalAdd + data.length)
      })


  }, [])

  console.log(icon);
  return (
    <div className="category-item">
      <button className="bg-white" onClick={handleCategory}>
        <img src={icon} alt="" />
        <p>{title}</p>
        <span>{add} adds</span>
      </button>
    </div>
  );
};
export default Category;
