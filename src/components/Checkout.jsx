import { useState } from "react";
import { MdLocalShipping } from "react-icons/md";

function CheckoutPage({ orderItems }) {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const phoneRegex =
      /^(?:(?:010|011|015)[0-9]{8}|(?:0127|0128|0120|0121)[0-9]{7})$/;

    if (!formData.get("name")) newErrors.name = "يجب إدخال الاسم بالكامل";

    if (!formData.get("phone")) {
      newErrors.phone = "يجب إدخال رقم الهاتف";
    } else if (!phoneRegex.test(formData.get("phone"))) {
      newErrors.phone =
        "❌ من فضلك أدخل رقم هاتف صحيح يبدأ بـ 010 - 011 - 015 - 0127 - 0128 - 0120 - 0121 ويتكون من 11 رقم";
    }

    if (!formData.get("governorate"))
      newErrors.governorate = "يجب إدخال المحافظة";

    if (!formData.get("address"))
      newErrors.address = "يجب إدخال العنوان بالتفصيل";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // باقي الكود الخاص بإرسال الطلب...
  };

  return (
    <div className="w-full mx-auto p-4 lg:p-10 text-right font-cairo" dir="rtl">
      <form
        id="checkout-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-10 "
      >
        <div className="space-y-6">
          <h2 className="text-xl font-bold border-b pb-3">
            لإجراء طلب, يرجي إدخال معلوماتك هنا:
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right"
            dir="rtl"
          >
            {/* الاسم */}
            <div className="col-span-2">
              <input
                name="name"
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-4 border rounded-xl outline-slate-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* الهاتف */}
            <div className="col-span-2">
              <input
                name="phone"
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-4 border rounded-xl outline-slate-600 text-right"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* هاتف بديل */}
            <div className="col-span-2">
              <input
                name="otherPhone"
                type="tel"
                placeholder="رقم هاتف بديل"
                className="w-full p-4 border rounded-xl outline-slate-600 text-right"
              />
            </div>

            {/* المحافظة */}
            <div className="col-span-2">
              <input
                name="governorate"
                type="text"
                placeholder="المحافظة"
                className="w-full p-4 border rounded-xl outline-slate-600"
              />
              {errors.governorate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.governorate}
                </p>
              )}
            </div>

            {/* العنوان */}
            <div className="col-span-2">
              <input
                name="address"
                type="text"
                placeholder="العنوان بالتفصيل"
                className="w-full p-4 border rounded-xl outline-slate-600"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h2 className="text-xl font-bold border-b pb-3 flex items-center gap-2">
              <MdLocalShipping /> مصاريف الشحن
            </h2>
            <p className="text-gray-600 mt-2">
              الشحن مجاني لجميع المحافظات في مصر 🚚✨
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-slate-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-slate-700 transition-all"
          >
            أطلب الأن - والدفع عند الاستلام
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
