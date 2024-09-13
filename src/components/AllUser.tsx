"use client"

import { useEffect, useState } from "react";

const AllUser = () => {
    const [users, setUsers]=useState([]);
    const [isLoading, setLoading]= useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/allUser/api/getuser')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
            setLoading(false)
        })
    },[])
    return (
        <div>
            
            {
                users.map(user =><li key={user._id}>{user.name}</li>)
            }
        </div>
    );
};

export default AllUser;