import React, { useState } from 'react';

const faqData = [
  {
    question: 'Super Starter 2101PRO phù hợp với loại gà nào?',
    answer: 'Sản phẩm được thiết kế tối ưu cho gà thịt và gà thả vườn trong giai đoạn úm (từ 1 đến 21 ngày tuổi). Công thức đặc biệt giúp gà con phát triển khung xương vững chắc, hệ tiêu hóa khỏe mạnh và tăng cường sức đề kháng.',
  },
  {
    question: 'Tôi có cần bổ sung thêm thuốc hoặc vitamin khác khi sử dụng sản phẩm này không?',
    answer: 'Super Starter 2101PRO đã được bổ sung đầy đủ các vitamin, khoáng chất và axit amin thiết yếu. Tuy nhiên, việc bổ sung thêm có thể cần thiết tùy thuộc vào tình trạng sức khỏe cụ thể của đàn gà và điều kiện chăn nuôi. Chúng tôi khuyên bạn nên tham khảo ý kiến của chuyên gia kỹ thuật của Cargill để có lời khuyên tốt nhất.',
  },
  {
    question: 'Sự khác biệt chính giữa 2101PRO và các loại cám úm khác là gì?',
    answer: 'Điểm khác biệt nằm ở các công nghệ độc quyền của Cargill như Postbiotics và Proviox, giúp tăng cường sức khỏe đường ruột và khả năng chống lại stress oxy hóa. Điều này không chỉ giúp gà tăng trưởng nhanh hơn mà còn giảm tỷ lệ hao hụt và cải thiện độ đồng đều của đàn.',
  },
    {
    question: 'Làm thế nào để bảo quản sản phẩm một cách tốt nhất?',
    answer: 'Để đảm bảo chất lượng tốt nhất, bạn nên bảo quản Super Starter 2101PRO ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và các loại côn trùng, gặm nhấm. Luôn sử dụng sản phẩm trong thời hạn sử dụng được in trên bao bì.',
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Câu hỏi thường gặp</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tìm câu trả lời cho những câu hỏi phổ biến nhất về Super Starter 2101PRO.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-200 ${openIndex === index ? '-rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
