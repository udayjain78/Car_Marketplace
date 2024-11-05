import React from 'react';
import './Footer.css'; // Import for additional styling if needed

function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600">
              {<img src='/logo.svg' alt='Logo'  width={150} height={100} />}
              <h3 className="text-xl font-bold"></h3>
              <p>Your trusted partner for affordable and convenient car rentals.</p>
            </div>

            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              <li><a href="#" target="_blank" className="text-gray-700 transition hover:opacity-75">Facebook</a></li>
              <li><a href="#" target="_blank" className="text-gray-700 transition hover:opacity-75">Instagram</a></li>
              <li><a href="#" target="_blank" className="text-gray-700 transition hover:opacity-75">Twitter</a></li>
              <li><a href="#" target="_blank" className="text-gray-700 transition hover:opacity-75">GitHub</a></li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-6 sm:grid-cols-2 lg:grid-cols-4 lg:pt-12">
            <div>
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Rent a Car</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Our Fleet</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Pricing</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">About Us</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Meet the Team</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Careers</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Contact Us</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">FAQs</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Support</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Terms of Service</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-500">&copy; 2024 Car Rental Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
