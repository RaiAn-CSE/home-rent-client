import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopListingProperty.css";

const TopListingProperty = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch("top-listing-property.json")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="text-center category-title">
        <p>Top Listing Property</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 1,
          },
          400: {
            width: 400,
            slidesPerView: 1,
          },
          520: {
            width: 520,
            slidesPerView: 2,
          },
          960: {
            width: 950,
            slidesPerView: 3,
          },
          1290: {
            width: 1290,
            slidesPerView: 4,
          },
          1110: {
            width: 1110,
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {property.map((pro) => (
          <SwiperSlide>
            <div className="card">
              <img src={pro.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="details">
                  <p className="location">{pro.name}</p>
                  <p className="rent">Rent: {pro.rent} Tk</p>
                  <p>
                    <span>{pro.bed}</span>&nbsp; Room, <span>{pro.bath}</span>
                    &nbsp; Bath, <span>{pro.kitchen}</span>&nbsp;Kitchen
                  </p>
                  <p className="availability">{pro.availability} Available</p>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="/details">
                    <button className="view-btn">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopListingProperty;
