// src/app/layout.tsx
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/add" className="hover:text-gray-200">
                  Add User
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-gray-200">
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
