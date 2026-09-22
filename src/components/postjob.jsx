import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function PostJob() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
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
      const response = await api.post("/post", {
        ...formData,
        salary: Number(formData.salary),
      });

      console.log(response.data);

      setMessage("Job posted successfully!");

      setTimeout(() => {
        navigate("/findjobs");
      }, 1000);

    } catch (error) {
      console.log(error);

      setMessage(
        error.response?.data?.message || "Failed to post job"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Post a Job
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-3 mb-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full p-3 mb-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Job Location"
            className="w-full p-3 mb-3 border rounded-lg"
            required
          />

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Post Job
          </button>

        </form>

        {message && (
          <p className="text-center mt-4 text-blue-600">
            {message}
          </p>
        )}

        <p className="text-center mt-4 text-gray-600">
          Want to go back?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold"
          >
            Home
          </button>
        </p>

      </div>
    </div>
  );
}

export default PostJob;