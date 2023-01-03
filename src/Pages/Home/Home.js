import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import Hero from "../../component/Hero/Hero";
import Category from "../../component/Category/Category";
import "./Home.css";
import TopListingProperty from "../../component/TopListingProperty/TopListingProperty";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const [category, setCategory] = useState([]);

  useTitle('Home')
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <section className="category-section h-auto w-auto py-5">
        <div className="container">
          <div className="category-title">
            <p>Top Categories</p>
            <span>{category.length} categories 20 ads</span>
          </div>
          <div className="category">
            {category.map((categ) => (
              <Category
                // icon={categ.category_icon}s
                key={categ.id}
                // title={categ.title}
                // adds={categ.adds}
                categ={categ}
              ></Category>
            ))}
          </div>
        </div>
      </section>
      <TopListingProperty></TopListingProperty>
    </div>
  );
};

export default Home;
