function FindJobs({ jobs }) {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-pink-500">
        Jobs
      </h1>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {jobs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No jobs found
          </p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h2 className="mb-3 text-2xl font-bold">
                {job.title}
              </h2>

              <p>
                <b>Company:</b> {job.company}
              </p>

              <p>
                <b>Location:</b> {job.location}
              </p>

              <p>
                <b>Salary:</b> Rs. {job.salary}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FindJobs;