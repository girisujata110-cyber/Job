import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-blue-600"
        >
          Job<span className="text-pink-500">Portal</span>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <button
            onClick={() => navigate("/")}
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/find-jobs")}
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Find Jobs
          </button>

          <button
            onClick={() => navigate("/categories")}
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Categories
          </button>

          <button
            onClick={() => navigate("/about")}
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            About
          </button>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Login */}
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg border border-blue-600
            text-blue-600 font-medium hover:bg-blue-600
            hover:text-white transition"
          >
            Login
          </button>

          {/* Register */}
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 rounded-lg border border-blue-600
            text-blue-600 font-medium hover:bg-blue-600
            hover:text-white transition"
          >
            Register
          </button>

          {/* Post a Job */}
          <button
            onClick={() => navigate("/postjob")}
            className="px-5 py-2 rounded-lg bg-blue-600
            text-white font-medium hover:bg-blue-700
            transition shadow-md"
          >
            Post a Job
          </button>

          {/* Profile Picture */}
          <img
            src="/suju.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

        </div>
      </div>
    </header>
  );
}

export default Navbar;

