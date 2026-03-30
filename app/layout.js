import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Product Store",
  description: "Practice project for building product UI step by step.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-100 text-slate-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
