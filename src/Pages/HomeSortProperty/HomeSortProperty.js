import React, { useEffect, useState } from 'react';
import { FaBath, FaBed, FaSquare } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';

const HomeSortProperty = () => {
    const location = useLocation();
    console.log(location.state.data);
    const [add, setAdd] = useState([])

    console.log(add);

    useEffect(() => {
        fetch(`http://localhost:5000/categoryWiseData?title=${location.state.data.title}`)
            .then(res => res.json())
            .then(data => {
                setAdd(data);
            })
    }, [location.state.data.title])
    return (
        <div>
            <h2 className='text-center fw-semibold'>Category: {location.state.data.title}</h2>
            <div className="card-content">
                {add.map((post) => (
                    <div className="card">
                        <div className="card-image text-center">
                            <img src={post.image} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-info">
                            <p className="fw-bold">{post.title}</p>

                            <span>
                                <ImLocation2 className="property-des-style" />
                                {post.area}, {post.city}
                            </span>
                            <p> Property Type: {post.category}</p>
                            <div className="d-flex justify-content-start gap-4">
                                <span>
                                    <FaBed className="property-des-style" /> {post.room}
                                </span>
                                <span>
                                    <FaBath className="property-des-style" /> {post.bath}
                                </span>
                                <span>
                                    <FaSquare className="property-des-style" /> {post.propertySize}{" "}
                                    sqft.
                                </span>
                            </div>
                            <div className="mt-2">
                                <span>
                                    Available From:{" "}
                                    <b className="property-des-style">{post.month}</b>
                                </span>
                            </div>
                            <div className="mt-2">
                                <span>
                                    Rent: <span className="property-des-style">{post.rent}</span> TK
                                </span>
                            </div>
                            <div className="text-center mt-2">
                                <Link to={`/details/${post._id}`} className="details">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSortProperty;