import React from 'react';

const CargillLogo: React.FC = () => (
    <svg className="h-8 w-auto text-green-600" viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.8 13.2c-2.3-2.3-5.4-3.7-8.8-3.7-6.8 0-12.4 5.6-12.4 12.4s5.6 12.4 12.4 12.4c3.4 0 6.5-1.4 8.8-3.7l-4-4c-1.3 1.3-3.1 2.1-5 2.1-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4c1.9 0 3.7.8 5 2.1l4-4z"/>
        <path d="M45 10h8v24h-8z"/>
        <path d="M68.8 34l-6.8-10.4c.6-.4 1.1-.9 1.5-1.5 2.4-3.4 1.8-8.2-1.5-10.6-3.7-2.6-8.9-1.8-11.5 1.9-2.6 3.7-1.8 8.9 1.9 11.5 2.8 2 6.5 2.4 9.6 1.5L68.8 34zM58.7 22.1c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        <path d="M85 10h8v24h-8z"/>
        <path d="M103.4 10h8v14.8l6.6-14.8h8L116 24.2V34h-8V19.8l-6.6 14.2h-8V10z"/>
        <path d="M135.4 10h8v24h-8z"/>
        <path d="M149.2 10h8v24h-8z"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <CargillLogo />
            <span className="hidden sm:inline-block border-l border-gray-300 h-6"></span>
            <span className="text-gray-600 font-semibold text-sm sm:text-base">Super Starter 2101PRO</span>
          </div>
          <div className="flex items-center">
            <a
              href="#registration-form"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 text-sm font-medium"
            >
              Yêu cầu Tư vấn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;