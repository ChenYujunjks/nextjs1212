"use client";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/supabase/trynew1");
        const data = await response.json();
        if (response.ok) {
          setUsers(data);
          //console.log("Initail list:---->>", data);
        } else {
          console.error("Error fetching users:", data.error);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/supabase/trynew1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemname: itemName, price: price }),
      });
      if (response.ok) {
        const newUser = await response.json();
        //console.log("New inserted item: ||||", newUser);
        setUsers((prevUsers) => [...prevUsers, newUser[0]]); //response.json() return a array
        setItemName("");
        setPrice("");
      } else {
        const errorData = await response.json();
        console.error("Error adding item:", errorData.error);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/supabase/trynew1/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } else {
        const errorData = await response.json();
        console.error("Error deleting item:", errorData.error);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Item Price List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <span className="font-medium text-gray-700">{user.itemname}</span>
            <span className="text-indigo-500 font-semibold">${user.price}</span>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="itemName"
            className="mt-4 block text-m font-medium text-gray-700"
          >
            Item Name:
          </label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-m font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default UsersPage;
