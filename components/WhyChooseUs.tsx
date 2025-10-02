import React from 'react';

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Tốc độ tăng trưởng nhanh hơn',
    description: 'Công thức của chúng tôi được tối ưu hóa để phát triển cơ và xương nhanh chóng, giúp bạn đạt trọng lượng xuất chuồng trước thời hạn.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.789-2.75 9.565M12 11c0-3.517.009-6.789 2.75-9.565M12 11H3.344a9 9 0 000 12.092m14.312-12.092A9 9 0 0120.656 11H12z" /></svg>
    ),
    title: 'Cải thiện hệ số chuyển đổi thức ăn',
    description: 'Khả năng tiêu hóa cao đồng nghĩa với việc ít lãng phí hơn và hấp thụ chất dinh dưỡng hiệu quả hơn, giúp giảm tổng chi phí thức ăn của bạn.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Ngoại hình đẹp',
    description: 'Thúc đẩy lông và da khỏe mạnh, bóng mượt, mang lại vẻ ngoài cao cấp cho đàn gà của bạn.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Tại sao chọn chúng tôi</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Lợi thế rõ ràng cho trang trại của bạn
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Super Starter 2101PRO được thiết kế để mang lại kết quả mà bạn có thể thấy rõ.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;