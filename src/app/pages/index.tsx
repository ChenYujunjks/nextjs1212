"use client";

import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    try {
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
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <h1>Add Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={handleSubmit}>Add</button>
      {result !== null && <div>Result: {result}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
