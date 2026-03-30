export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
        MyStore
      </h1>

      {/* Menu */}
      <div className="space-x-6 hidden md:flex text-sm font-medium">
        <a href="#" className="hover:text-blue-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Products
        </a>
      </div>

      {/* Cart */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Cart (0)
      </button>
    </nav>
  )
}