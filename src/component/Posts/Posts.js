import React from "react";
import "./Posts.css";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="card-content">
      {posts.map((post) => (
        <div className="card">
          <div className="card-image">
            <img src={post.image} className="card-img-top" alt="..." />
          </div>
          <div className="card-info">
            <p className="fw-bold">{post.name}</p>

            <span>
              <ImLocation2 />
              {post.location}
            </span>
            <p> Property Type: {post.category}</p>
            <div className="d-flex justify-content-start gap-4">
              <span>
                <FaBed /> {post.room}
              </span>
              <span>
                <FaBath /> {post.bath}
              </span>
              <span>
                <FaSquare /> {post.length} sqft.
              </span>
            </div>
            <div className="mt-2">
              <p>
                Rent: <span>{post.rent}</span> TK
              </p>
            </div>
            <div className="text-center mt-2">
              <Link to="/details" className="details">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
