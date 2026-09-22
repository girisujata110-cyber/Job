import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", formData);

      console.log(response.data);

      setMessage("Registration successful!");

      // 1 second पछि Login page मा जाने
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <div className="flex justify-center mb-4">
          <img
            src="/suju.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-pink-500"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 mb-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600"
          >
            Register
          </button>

        </form>

        {message && (
          <p className="text-center mt-4 text-pink-600">
            {message}
          </p>
        )}

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-pink-500 font-semibold"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;