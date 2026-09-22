function Footer() {
  return (
    <footer className="bg-sky-400 text-white mt-16">

      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-bold">
              Job<span className="text-blue-800">Portal</span>
            </h2>

            <p className="mt-4 text-white leading-7">
              Connecting talented people with the right career
              opportunities. Find your dream job with us.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-sky-500
                hover:bg-blue-800 hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-sky-500
                hover:bg-blue-800 hover:text-white transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-sky-500
                hover:bg-blue-800 hover:text-white transition"
              >
                𝕏
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white text-sky-500
                hover:bg-blue-800 hover:text-white transition"
              >
                ◎
              </a>
            </div>
          </div>


          {/* Job Seekers */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Job Seekers
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#jobs" className="hover:text-blue-800 transition">
                  Find Jobs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Create Resume
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Job Alerts
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>


          {/* Employers */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Employers
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Post a Job
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Find Candidates
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-800 transition">
                  Employer Login
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>

            <p className="mb-3">
              📍 Butwal, Nepal
            </p>

            <p className="mb-3">
              📧 support@jobportal.com
            </p>

            <p>
              📞 +977 98XXXXXXXX
            </p>
          </div>

        </div>
      </div>


      {/* Footer Bottom */}
      <div className="border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 py-5
          flex flex-col md:flex-row items-center
          justify-between gap-3 text-sm">

          <p>
            © 2026 JobPortal. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-800 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-800 transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;