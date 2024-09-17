"use client";

import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

// Define the type for a User object
type User = {
  _id: string;
  name: string;
  email:string;
  role:string;
};

const AllUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/allUser/api/getuser");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        console.log('user data',data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  const handleDelete=(id)=>{
    const res = fetch('http://localhost:3000/api/deleteUser',{
      method:"DELETE",
      body:JSON.stringify({user_id:id})
    })
    console.log(res)
    // location.reload();
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
  <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th className="font-bold">Name</th>
                <th className="font-bold">Email</th>
                <th className="font-bold">Change Role</th>
                <th className="font-bold">Action</th>
            </tr>
            </thead>
    <tbody>
    {
        users.map((user)=><tr key={user._id}>
        <td>
          {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <td>{user.role}</td>
        <td><button onClick={()=>handleDelete(user._id)} className="btn"><IoTrashOutline  className="text-xl"/></button>
        </td>
      </tr>)
    }     
    </tbody>
  </table>
</div>
      )}
    </div>
  );
};

export default AllUser;
