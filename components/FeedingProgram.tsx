import React from 'react';

const FeedingProgram: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Đơn giản & Hiệu quả</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Chương trình cho ăn tối ưu
            </p>
            <p className="mt-4 text-xl text-gray-600">
              Chương trình của chúng tôi được thiết kế đơn giản và hiệu quả tối đa, đảm bảo đàn gà của bạn nhận được dinh dưỡng phù hợp vào đúng thời điểm.
            </p>
            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-green-800">
                    Một chương trình tiêu chuẩn cho <strong className="font-bold">1.000 con gà</strong> cần khoảng <strong className="font-bold">50 bao</strong> Super Starter 2101PRO cho toàn bộ giai đoạn khởi đầu.
                  </p>
                </div>
              </div>
            </div>
             <p className="mt-4 text-gray-500 text-sm">
                Lưu ý: Đây là ước tính. Lượng tiêu thụ thực tế có thể thay đổi tùy thuộc vào giống, khí hậu và thực hành quản lý trang trại. Hãy tham khảo ý kiến của các chuyên gia của chúng tôi để có một chương trình phù hợp.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://img.lovepik.com/photo/60235/8624.jpg_wh300.jpg" 
              alt="Người nông dân với đàn gà" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedingProgram;