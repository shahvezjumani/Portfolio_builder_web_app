import React from "react";

const Login = () => {
  //  return (
  //     <div className="flex h-screen w-full">
  //       {/* Left Side - Video */}
  //       <div className="relative w-1/2 h-full overflow-hidden">
  //         <video
  //           className="w-full h-full object-cover"
  //           autoPlay
  //           loop
  //           muted
  //           src="https://www.w3schools.com/html/mov_bbb.mp4"
  //         />
  //       </div>

  //       {/* Right Side - Login Form */}
  //       <div className="relative w-1/2 flex justify-center items-center bg-white">
  //         <div className="absolute left-0 top-0 w-2/3 h-full bg-white -skew-x-12 shadow-lg"></div>
  //         <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-96">
  //           <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
  //           <form>
  //             <div className="mb-4">
  //               <label className="block text-gray-700 text-sm font-bold mb-2">
  //                 Username
  //               </label>
  //               <input
  //                 type="text"
  //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //                 placeholder="Enter your username"
  //               />
  //             </div>
  //             <div className="mb-4">
  //               <label className="block text-gray-700 text-sm font-bold mb-2">
  //                 Password
  //               </label>
  //               <input
  //                 type="password"
  //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //                 placeholder="Enter your password"
  //               />
  //             </div>
  //             <button
  //               type="submit"
  //               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
  //             >
  //               Login
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   return (
  //     <div className="flex h-screen w-full bg-gradient-to-br from-blue-500 to-purple-600">
  //       {/* Left Side - Signup Form */}
  //       <div className="w-1/2 flex justify-center items-center">
  //         <div className="bg-white/20 backdrop-blur-md p-10 rounded-lg shadow-2xl w-96">
  //           <h2 className="text-3xl font-semibold text-white text-center mb-6">
  //             Create an Account
  //           </h2>
  //           <form>
  //             <div className="mb-4">
  //               <label className="block text-white text-sm font-semibold mb-2">
  //                 Username
  //               </label>
  //               <input
  //                 type="text"
  //                 className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
  //                 placeholder="Enter your username"
  //               />
  //             </div>
  //             <div className="mb-4">
  //               <label className="block text-white text-sm font-semibold mb-2">
  //                 Email
  //               </label>
  //               <input
  //                 type="email"
  //                 className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
  //                 placeholder="Enter your email"
  //               />
  //             </div>
  //             <div className="mb-6">
  //               <label className="block text-white text-sm font-semibold mb-2">
  //                 Password
  //               </label>
  //               <input
  //                 type="password"
  //                 className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-300"
  //                 placeholder="Enter your password"
  //               />
  //             </div>
  //             <button
  //               type="submit"
  //               className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
  //             >
  //               Sign Up
  //             </button>
  //           </form>
  //         </div>
  //       </div>

  //       {/* Right Side - Image */}
  //       <div className="w-1/2 h-full flex justify-center items-center">
  //         <img
  //           className="w-[65%] h-auto object-cover rounded-xl shadow-lg"
  //           src="/public/images/Untitled-a.png"
  //           alt="AI Concept"
  //         />
  //       </div>
  //     </div>
  //   );
  return (
    <div className="flex h-screen w-full bg-zinc-900">
      {/* Left Side - Signup Form (Always Visible) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="bg-zinc-800/60 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-semibold text-zinc-200 text-center mb-6">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-zinc-300 text-sm font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder-zinc-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-300 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder-zinc-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-zinc-300 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder-zinc-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-700 text-zinc-300 font-semibold py-2 rounded-lg hover:bg-zinc-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - AI Image (Hidden on Mobile) */}
      <div className="hidden md:flex w-1/2 h-full justify-center items-center">
        <img
          className="w-[55%] h-auto object-cover rounded-xl shadow-lg"
          src="/images/chen-Qtu3hGinLF8-unsplash.jpg"
          alt="AI Concept"
        />
      </div>
    </div>
  );
};

export default Login;
