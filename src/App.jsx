
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Categories from "./components/pages/categories";
import Home from "./components/home";
import FindJobs from "./components/pages/findjobs";
import About from "./components/pages/about";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Register from "./components/register";
import PostJob from "./components/postjob";
import api from "./api";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get("/findjob")
      .then((response) => {
        console.log("API RESPONSE:", response.data);

        const jobData = response.data.data || response.data;

        setJobs(Array.isArray(jobData) ? jobData : []);
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/find-jobs"
          element={<FindJobs jobs={jobs} />}
        />

        <Route path="/categories" element={<Categories />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/postjob" element={<PostJob />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

