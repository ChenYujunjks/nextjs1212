"use client";

import { useState } from "react";

export default function HomePage() {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError("Please enter valid numbers.");
      return;
    }

    const response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num1: Number(num1), num2: Number(num2) }),
    });

    const data = await response.json();

    if (response.ok) {
      setResult(data.result);
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Add Two Numbers</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label htmlFor="num1" className="block text-gray-700">
            Number 1
          </label>
          <input
            id="num1"
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="num2" className="block text-gray-700">
            Number 2
          </label>
          <input
            id="num2"
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {result !== null && (
        <p className="mt-4 text-2xl font-bold text-green-700">
          Result: {result}
        </p>
      )}
    </div>
  );
}
