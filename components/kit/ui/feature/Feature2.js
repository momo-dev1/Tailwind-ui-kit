import React from "react";

const Feature2 = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className="container py-20 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-24">
            <h1 className="text-4xl font-black leading-10 text-center text-gray-800 lg:text-6xl md:text-5xl dark:text-white">
              How it works
            </h1>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:space-x-32">
            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-end w-3/4 mt-6 h-72 md:mt-0">
                <div className="mb-2 md:mb-6">
                  <h2 className="text-3xl font-extrabold leading-10 text-gray-800 lg:text-5xl md:text-4xl dark:text-white">
                    Sign Up
                  </h2>
                </div>
                <div className="flex items-center justify-start">
                  <p className="text-base leading-7 text-gray-600 md:text-xl dark:text-gray-300">
                    Already have an account? Log In. Continue with Facebook.
                    Continue with Google. Continue with Apple. By getting
                    started, you acknowledge and agree to our terms.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 md:mt-8">
                  <div>
                    <button className="h-12 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 w-36 bg-gradient-to-l from-indigo-600 to-indigo-700">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center w-full lg:justify-start">
              <div className="flex items-center justify-center w-56 mb-10 lg:mt-0 md:w-full">
                <img src="https://i.ibb.co/ZcJhy6Y/mobile.png" alt="iphone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature2;
