import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const AllOwners = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [buyers, setBuyers] = useState([])

    console.log(allUsers);

    useEffect(() => {
        fetch('http://localhost:5000/dashboard/allsellers?role=seller')
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }, []);

    const handleDelete = id => {
        console.log(id);
        const agree = window.confirm(`Are you sure you want to delete :${id} `)
        if (agree) {
            console.log("Deleting user with id:", id)
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // toast.success('Make admin successful.')

                        const remaining = buyers.filter(dlt => dlt._id !== id)
                        setBuyers(remaining)
                    }
                    console.log(data)
                })
        }
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((user, i) => <tr
                            key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-outline btn-warning btn-xs mr-3 mb-5" onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllOwners;