function Footer() {
  return (
    <div className="bg-gray-900 text-white px-8 py-12 mt-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h1 className="text-2xl font-bold text-pink-500">
            Airbnb Clone
          </h1>

          <p className="mt-4 text-gray-400">
            Discover amazing places and unique stays around the world.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            Email: support@airbnbclone.com
          </p>

          <p className="text-gray-400 mt-2">
            Phone: +91 9876543210
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500">

        © 2026 Airbnb Clone. All rights reserved.

      </div>
    </div>
  );
}

export default Footer;