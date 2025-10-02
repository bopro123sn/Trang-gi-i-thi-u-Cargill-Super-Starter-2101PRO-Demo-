import React, { useState } from 'react';
import { type FormData, ChickenType } from '../types';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    farmSize: '',
    chickenType: ChickenType.BROILER,
    location: '',
    notes: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email không hợp lệ';
    if (!formData.farmSize.trim() || isNaN(Number(formData.farmSize))) newErrors.farmSize = 'Quy mô trang trại phải là một con số';
    if (!formData.location.trim()) newErrors.location = 'Vui lòng nhập địa điểm';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      console.log('Form Data Submitted:', formData);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: '', phone: '', email: '', farmSize: '', chickenType: ChickenType.BROILER, location: '', notes: '',
        });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration-form" className="py-16 bg-white sm:py-24">
        <div className="max-w-xl mx-auto px-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           <h2 className="mt-4 text-3xl font-extrabold text-gray-900 tracking-tight">Cảm ơn bạn!</h2>
           <p className="mt-4 text-lg text-gray-600">
             Yêu cầu của bạn đã được gửi thành công. Đội ngũ bán hàng của chúng tôi sẽ sớm liên hệ với bạn để tư vấn.
           </p>
           <button 
             onClick={() => setIsSubmitted(false)}
             className="mt-8 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 font-medium"
           >
             Gửi một yêu cầu khác
           </button>
        </div>
      </section>
    );
  }

  return (
    <section id="registration-form" className="py-16 bg-white sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Đăng ký tư vấn miễn phí</h2>
          <p className="mt-4 text-lg text-gray-600">
            Điền vào biểu mẫu bên dưới và một trong những chuyên gia gia cầm của chúng tôi sẽ liên hệ với bạn.
          </p>
        </div>
        <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Địa chỉ Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700">Quy mô trang trại (Số lượng gà)</label>
                <input type="number" name="farmSize" id="farmSize" value={formData.farmSize} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                {errors.farmSize && <p className="text-red-500 text-xs mt-1">{errors.farmSize}</p>}
              </div>
              <div>
                <label htmlFor="chickenType" className="block text-sm font-medium text-gray-700">Loại gà</label>
                <select id="chickenType" name="chickenType" value={formData.chickenType} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                  {Object.values(ChickenType).map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Địa điểm trang trại (Tỉnh/Thành phố)</label>
                <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Ghi chú thêm</label>
                <textarea name="notes" id="notes" rows={4} value={formData.notes} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang gửi...' : 'Yêu cầu tư vấn'}
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">
              Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách bảo mật của chúng tôi. Chúng tôi sẽ chỉ sử dụng thông tin của bạn để liên hệ với bạn về yêu cầu của bạn.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;