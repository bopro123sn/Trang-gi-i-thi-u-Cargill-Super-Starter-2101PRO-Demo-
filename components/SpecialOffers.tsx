import React from 'react';

const offers = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    title: 'Tài liệu chăm sóc gà theo từng giai đoạn',
    description: 'Nhận hướng dẫn chi tiết về cách chăm sóc gà con hiệu quả qua từng giai đoạn phát triển quan trọng.'
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">Đăng ký ngay và nhận</span>
          <span className="block text-green-400">Ưu đãi đặc biệt độc quyền</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#registration-form"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Nhận ưu đãi của bạn
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-center">
            {offers.map((offer) => (
                <div key={offer.title} className="flex items-start p-4 max-w-md">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-green-600">
                        {offer.icon}
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium">{offer.title}</h3>
                        <p className="mt-1 text-gray-300">{offer.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;