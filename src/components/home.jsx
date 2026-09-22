function Home() {
  return (
    <main>

      <section className="bg-gradient-to-r from-blue-100 to-sky-200 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold text-lg">
            🚀 Your career starts here
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            Find Your <span className="text-blue-600">Dream Job</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Discover thousands of jobs from trusted companies and
            find the perfect opportunity for your career.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <input
              type="text"
              placeholder="Search job title..."
              className="px-5 py-3 rounded-lg border w-72"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Search Jobs
            </button>
          </div>

        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">
          Why Choose JobPortal?
        </h2>

        <p className="text-gray-600 mt-4">
          Find jobs, connect with companies and grow your career.
        </p>
        <div>
          
        </div>
      </section>

    </main>
  );
}

export default Home;