import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Xem Thực Tế Hiệu Quả</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Minh chứng sống động nhất
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Một video có thể thay ngàn lời nói. Hãy xem cách Super Starter 2101PRO tạo ra sự khác biệt tại các trang trại.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/KRtvCCDbLgQ?si=OAWCeohr6v-auRFG" // Lưu ý: URL video giữ chỗ
              title="Video giới thiệu Super Starter 2101PRO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
           <p className="mt-4 text-xs text-gray-500 text-center">
             Lưu ý: Video chỉ mang tính chất minh họa.
           </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
