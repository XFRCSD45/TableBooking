import "@/app/globals.css";

export const metadata = {
  title: 'Restaurant Table Booking',
  description: 'A responsive table booking system for restaurants.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
