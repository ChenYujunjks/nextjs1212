// src/app/dashboard/UsersList.tsx
import React from "react";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

interface UserType {
  _id: string;
  name: string;
  email: string;
}

const UsersList = async () => {
  await dbConnect();
  const usersData = await User.find({});
  const users = usersData.map((user: any) => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  }));

  return (
    <div>
      <h1>Userpage:testttttttting@@#$!#@$!@#</h1>
      <ul>
        {users.map((user: UserType) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
