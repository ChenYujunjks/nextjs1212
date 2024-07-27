// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Next.js App
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This is a modern and beautifully designed home page using Tailwind
          CSS.
        </p>
        <Link
          href="/add"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Add User
        </Link>
      </div>
    </main>
  );
}
