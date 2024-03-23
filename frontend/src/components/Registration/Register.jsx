export default function Register() {
  return (
    <div className="bg-white ">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div
            className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            }}
          >
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                PerfectPitch.
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Achieve your dream job with our NLP-based interviewing tool for
                Behavioural Interviews
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <h1 className="w-full text-3xl font-bold text-indigo-500">
                  PerfectPitch.
                </h1>
              </div>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    First Name
                  </label>
                  <input
                    type="first_name"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Last Name
                  </label>
                  <input
                    type="last_name"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="confirm_password"
                      className="text-sm text-gray-600 "
                    >
                      Confirm Password
                    </label>
                  </div>

                  <input
                    type="confirm_password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-indigo-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
