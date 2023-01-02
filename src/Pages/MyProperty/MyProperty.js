import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaBath, FaBed, FaSquare } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProperty = () => {
    const { user } = useContext(AuthContext)
    const [reProducts, setReProducts] = useState([])

    // console.log(user.email);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                    headers: {}
                });
                const data = await res.json();
                console.log(data);
                return data;
            }
            catch (error) { }
        }
    });

    console.log(products);



    const handleDeleteProduct = post => {
        console.log(post);
        const agree = window.confirm(`Are you sure you want to delete :${post} `)
        if (agree) {
            console.log("Deleting user with id:", post)
            fetch(`http://localhost:5000/products/${post._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // toast.success('Make admin successful.')

                        const remaining = reProducts.filter(dlt => dlt._id !== post)
                        setReProducts(remaining)
                    }
                    console.log(data)
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="card-content">
            {products.map(post => (
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
                            <Button onClick={() => handleDeleteProduct(post)} variant="danger">Delete</Button>{' '}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyProperty;