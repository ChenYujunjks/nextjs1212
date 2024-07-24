"use client";

import React, { useEffect, useState } from "react";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

// 定义用户类型
interface UserType {
  _id: string;
  name: string;
  email: string;
}
// Fetch users function
async function fetchUsers(): Promise<UserType[]> {
  await dbConnect();
  const usersData = await User.find({});
  return usersData;
}

const Userpage = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Userpage</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userpage;
