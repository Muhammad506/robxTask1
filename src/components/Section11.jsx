import React from "react";

const Section11 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-5 md:p-14">
      <div className=" w-full mx-auto">
        <div className=" md:p-8 flex flex-col md:flex-row  justify-between">
          <div className="mb-8 md:w-1/3">
            <h2 className="text-3xl font-semibold mb-4">
              Let's Talk About Your Project
            </h2>
            <p className="text-gray-600">
              Do you have a project in mind, that you feel our approach would
              work well for?
            </p>
            <p className="text-gray-600">
              We’re always happy to discuss your project with you and put
              together a free proposal.
            </p>
          </div>
          <form className="md:w-2/4 md:p-10 p-3 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                
                
                <input

                  type="text"
                  placeholder="Company"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
          
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
               
                <input
                  type="file"
                  placeholder=" Send us your brief"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
              
                <textarea
                 placeholder="Message"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label className="ml-2 block text-gray-700">
                  I agree to have my information stored{" "}
                  <a
                    href="https://tailwindcss.com/docs/customizing-colors"
                    className="text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-red-600"
                >
                  Send your message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section11;
