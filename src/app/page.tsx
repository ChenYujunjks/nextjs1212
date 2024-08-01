import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Next.js App
        </h1>
        <h1 className="text-4xl font-semibold text-gray-700 mb-4">TBD</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is a modern and beautifully designed home page using Tailwind
          CSS.
        </p>
        <div className="space-x-4">
          <Link
            href="/namelist"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Main Content
          </Link>
          <Link
            href="/sign-up"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
