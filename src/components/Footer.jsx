import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C0C26] text-white py-8 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-lg">WEB MAGNETISM</span>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hidden md:block ml-auto">
              CONTACT US
            </button>
          </div>
          <h2 className="text-lg font-semibold mt-4">Services</h2>
          <div className="flex flex-col md:flex-row mt-2 md:mt-4 gap-3">
            <div>
              <h3 className="font-semibold">Digital Marketing</h3>
              <ul className="mt-2 space-y-1">
                <li>Email Nurture</li>
                <li>SEO</li>
                <li>Social Media Marketing</li>
                <li>Conversion Rate Optimization</li>
                <li>Copy Writing</li>
                <li>Email Marketing</li>
                <li>Remarketing</li>
                <li>PPC</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Bespoke Web Design</h3>
              <ul className="mt-2 space-y-1">
                <li>Web Design</li>
                <li>Web Redesign</li>
                <li>UI/UX Design</li>
                <li>Brand Identity and Logo</li>
                <li className="font-semibold">App Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h2 className="text-lg font-semibold">Home</h2>
          <ul className="mt-2 space-y-1">
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <address className="mt-4">
            United Kingdom,<br />
            TW4 7LU<br />
            London
          </address>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-8 md:mt-0 space-y-1">
            <li>Our Work</li>
            <li>Insights</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Social media</h2>
          <ul className="mt-8 md:mt-0 space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Telegram</li>
            <li>YouTube</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          Subscribe to our weekly newsletter today!
        </div>
        <form className="flex">
          <input 
            type="email" 
            placeholder="Enter your email address here" 
            className="px-4 py-2 w-full md:w-auto bg-gray-800 text-white rounded-l-md"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-r-md ml-2">
            ➜
          </button>
          
        </form>
        <button className="mt-3 md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 self-start rounded-full">
          CONTACT US
        </button>
      </div>
    </footer>
  );
};

export default Footer;
