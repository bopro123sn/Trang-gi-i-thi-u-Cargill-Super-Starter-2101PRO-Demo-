import React from 'react';

const technologies = [
  {
    name: 'Công nghệ IPM',
    description: 'Phương pháp Quản lý dịch hại tổng hợp để đảm bảo an toàn và chất lượng thức ăn từ nguyên liệu thô đến thành phẩm.',
  },
  {
    name: 'Postbiotics',
    description: 'Khai thác các chất chuyển hóa có lợi từ quá trình lên men probiotic để hỗ trợ sức khỏe đường ruột và cải thiện khả năng miễn dịch.',
  },
  {
    name: 'Proviox',
    description: 'Một hỗn hợp chọn lọc các chất chống oxy hóa tự nhiên giúp bảo vệ chống lại stress oxy hóa, tăng cường sức khỏe và hiệu suất.',
  },
  {
    name: 'Sức mạnh tổng hợp từ Enzyme',
    description: 'Sự kết hợp chính xác của các enzyme giúp giải phóng nhiều chất dinh dưỡng hơn từ nguyên liệu thức ăn, tối đa hóa việc sử dụng năng lượng và protein.',
  },
];

const Technology: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Sự đổi mới trong từng viên cám</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Được hỗ trợ bởi các công nghệ đột phá
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Cam kết của chúng tôi trong nghiên cứu và phát triển mang đến cho bạn dinh dưỡng gia cầm tiên tiến nhất.
          </p>
        </div>

        <div className="mt-12">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            {technologies.map((tech) => (
              <div key={tech.name} className="relative p-6 bg-white rounded-lg shadow-sm">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.63.63.184 1.707-.707 1.707H10.414c-.891 0-1.336-1.077-.707-1.707L11.707 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 13a2 2 0 100-4 2 2 0 000 4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17m-2 2a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{tech.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{tech.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Technology;