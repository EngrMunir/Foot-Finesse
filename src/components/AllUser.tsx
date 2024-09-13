"use client";

import { useEffect, useState } from "react";

// Define the type for a User object
type User = {
  _id: string;
  name: string;
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
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <li key={user._id}>{user.name}</li>)
      )}
    </div>
  );
};

export default AllUser;
