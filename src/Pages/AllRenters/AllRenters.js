import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const AllRenters = () => {

    const [allUsers, setAllUsers] = useState([]);

    console.log(allUsers);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user, i) => <tr
                            key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllRenters;