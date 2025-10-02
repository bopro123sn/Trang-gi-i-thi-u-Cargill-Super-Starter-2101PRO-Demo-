import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {/* Add social links here if needed */}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Cargill, Incorporated. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer;