function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 via-white to-purple-50 border-t border-blue-300 ">
      
      <div className="px-6 py-14">
        
        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-120">
          
          {/* BRAND */}
          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Blog Platform
            </h1>

            <p className="text-gray-600 mt-4 leading-7">
              A modern platform where writers share creative ideas and readers
              explore inspiring stories from around the world.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-5">
              Contact Us
            </h2>

            <div className="space-y-3 text-gray-600">
              <p> support@blogplatform.com</p>

              <p> +91 23466777878</p>

              <p> +91 8725372512</p>

              <p> India</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-pink-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm text-gray-500">
            @ {new Date().getFullYear()} Blog Platform. All rights reserved.
          </p>

          <div className="flex gap-5 text-gray-500 text-sm">
            <p className="hover:text-shadow-blue-950 cursor-pointer ">
              Privacy Policy
            </p>

            <p className="hover:text-shadow-blue-950 cursor-pointer ">
              Terms & Conditions
            </p>

            <p className="hover:text-shadow-blue-950 cursor-pointer ">
              Support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;