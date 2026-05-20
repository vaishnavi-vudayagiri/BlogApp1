import { NavLink } from "react-router";

function Home() {
  return (
    <div className="w-full bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="items-center justify-center w-full">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-20">
          
          <div>
            <p className="text-blue-500 font-serif text-2xl mb-4">
              MODERN BLOG PLATFORM
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Share Your
              <span className="block text-blue-600">
                Creative Ideas
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg pt-1.5">
              Write blogs, inspire readers, and create beautiful stories with a
              modern blogging experience.
            </p>

            <div className="mt-8 flex gap-4">
              <NavLink to="/register" className="bg-gradient-to-r from-blue-700 to-amber-50 text-white px-6 py-3 rounded-xl hover:scale-105 duration-300">
                Start Writing
              </NavLink>

              <NavLink to="/login"className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 duration-300">
                Explore
              </NavLink>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
            alt="blog"
            className="rounded-3xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto text-center">
          
          <h2 className="text-6xl font-bold text-blue-900 mb-6">
            Why Choose Our Blog?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            Our platform helps writers share ideas beautifully while readers
            enjoy a smooth and engaging blogging experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            
            <div className="p-10 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-200 to-blue-950 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">
                Easy to Use
              </h3>

              <p className="text-white">
                Simple interface for writing and reading blogs.
              </p>
            </div>

            <div className="p-10 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-200 to-blue-950 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">
                Modern Design
              </h3>

              <p className="text-white">
                Clean and attractive layout with smooth experience.
              </p>
            </div>

            <div className="p-10 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-200 to-blue-950 hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-3 text-white">
                Community
              </h3>

              <p className="text-white">
                Connect with authors and readers from everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flip Cards */}
      <section className="py-24 px-6">
        
        <h2 className="text-5xl font-black text-center mb-16">
          Explore Community
        </h2>

        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Author Card */}
          <div className="group h-96 relative [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] duration-700">
            
            {/* Front */}
            <div className="absolute inset-0 bg-blue-700 text-white rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] shadow-xl">
              <h3 className="text-4xl font-black">AUTHOR</h3>

              <p className="mt-4 text-lg">
                Creators of inspiring stories
              </p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-gray-100 rounded-3xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl flex flex-col justify-center items-center text-center">
              
              <h3 className="text-3xl font-black text-blue-700 mb-4">
                Who is an Author?
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Authors share ideas, experiences, and knowledge through blogs
                that inspire readers around the world.
              </p>

              <NavLink
                to="/register"
                className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-300 duration-300"
              >
                Write Articles
              </NavLink>
            </div>
          </div>

          {/* User Card */}
          <div className="group h-96 relative [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] duration-700">
            
            {/* Front */}
            <div className="absolute inset-0 bg-blue-500 text-white rounded-3xl flex flex-col items-center justify-center [backface-visibility:hidden] shadow-xl">
              
              <h3 className="text-4xl font-black">USERS</h3>

              <p className="mt-4 text-lg">
                Readers who explore blogs
              </p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-gray-100 rounded-3xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl flex flex-col justify-center items-center text-center">
              
              <h3 className="text-3xl font-black text-blue-500 mb-4">
                User Features
              </h3>

              <ul className="space-y-3 text-gray-600 mb-6">
                <li>Read trending blogs</li>
                <li>Comment on posts</li>
                <li>Save favorite blogs</li>
                <li>Responsive experience</li>
              </ul>

              <NavLink to="/register"className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 duration-300">
                Explore Blogs
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;