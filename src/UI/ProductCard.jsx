import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutPage from "../components/Checkout";
import { MdLocalShipping, MdVerified } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import CountdownTimer from "./CountdownTimer";

function ProductCard({ product }) {
  // اختيار العرض الأول كافتراضي
  const [selectedOffer, setSelectedOffer] = useState(product.offers[0]);
  // عدد المجموعات (Packs) المطلوبة
  const [packQuantity, setPackQuantity] = useState(1);

  const features = [
    {
      icon: <MdVerified className="text-green-500 text-2xl" />,
      text: "جودة مضمونة",
    },
    {
      icon: <MdLocalShipping className="text-pink-500 text-2xl" />,
      text: "توصيل سريع",
    },
    {
      icon: <RiSecurePaymentLine className="text-blue-500 text-2xl" />,
      text: "الدفع عند الاستلام",
    },
  ];

  // حسابات الأسعار
  const totalPrice = selectedOffer.price * packQuantity;
  const totalOldPrice = selectedOffer.oldPrice * packQuantity;
  const totalSavings = totalOldPrice - totalPrice;

  return (
    <div
      className="flex flex-col h-full bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow text-right font-cairo"
      dir="rtl"
    >
      {/* قسم الصورة */}
      <Link
        to={`/product/${product.name}`}
        state={{ product }}
        className="block overflow-hidden group relative"
      >
        <img
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
          عرض حصري ✨
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-2xl text-gray-800 mb-2 text-center">
          {product.name}
        </h3>

        {/* 1. السعر تحت الصورة مباشرة (ثابت للقطعة/العرض المختار ولا يتأثر بـ packQuantity) */}
        <div className="flex flex-col items-center md:items-start gap-1 my-4 border-b pb-4">
          <p className="text-[10px] text-gray-400 font-bold mb-1">
            سعر العرض الحالي:
          </p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-slate-800">
              {selectedOffer.price} جنية
            </span>
            <span className="text-lg text-gray-400 line-through decoration-red-500/40">
              {selectedOffer.oldPrice} جنية
            </span>
          </div>
          <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 mt-2">
            شحن مجاني لجميع المحافظات 🚚
          </span>
        </div>

        {/* قائمة العروض */}
        <div className="space-y-3 mt-2">
          <CountdownTimer />
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
            اختر العرض الموفر لك:
          </p>

          {product.offers.map((offer) => (
            <label
              key={offer.id}
              className={`flex items-center justify-between p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                selectedOffer.id === offer.id
                  ? "border-slate-800 bg-slate-50 ring-1 ring-slate-800 shadow-sm"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name={`offer-${product.id}`}
                  checked={selectedOffer.id === offer.id}
                  onChange={() => {
                    setSelectedOffer(offer);
                    setPackQuantity(1); // إعادة التصفير عند تغيير العرض لسهولة العميل
                  }}
                  className="w-5 h-5 accent-slate-800 cursor-pointer"
                />
                <span
                  className={`text-sm font-bold ${selectedOffer.id === offer.id ? "text-slate-900" : "text-gray-700"}`}
                >
                  {offer.label}
                </span>
              </div>
              <span className="font-black text-slate-800 text-lg">
                {offer.price} ج.م
              </span>
            </label>
          ))}
        </div>

        {/* 2. عداد الكمية + Total + خانة التوفير */}
        <div className="mt-8 bg-slate-100 p-4 rounded-2xl border border-slate-200">
          <p className="text-xs font-bold text-slate-500 mb-3 text-center">
            تكرار العرض المختار
          </p>

          <div className="flex items-center justify-center gap-6 mb-4">
            <button
              onClick={() => setPackQuantity(packQuantity + 1)}
              className="w-12 h-12 bg-white border-2 border-slate-300 rounded-xl font-bold text-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all active:scale-90"
            >
              +
            </button>
            <span className="font-black text-2xl text-slate-800">
              {packQuantity}
            </span>
            <button
              onClick={() => setPackQuantity(Math.max(1, packQuantity - 1))}
              className="w-12 h-12 bg-white border-2 border-slate-300 rounded-xl font-bold text-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all active:scale-90"
            >
              -
            </button>
          </div>

          {/* خانة الـ Total و التوفير */}
          <div className="border-t border-slate-200 pt-3 text-center space-y-1">
            <p className="text-slate-600 font-bold text-sm">
              إجمالي المطلوب دفعه:
            </p>
            <p className="text-3xl font-black text-slate-900">
              {totalPrice} جنية
            </p>

            {totalSavings > 0 && (
              <div className="inline-block mt-2 bg-orange-100 text-orange-800 text-xs font-black px-4 py-1.5 rounded-full border border-orange-200">
                🎉 لقد وفرت {totalSavings} جنية بسبب العرض!
              </div>
            )}
          </div>
        </div>

        {/* زر الطلب */}
        <div className="mt-6">
          <CheckoutPage
            product={product}
            selectedOffer={selectedOffer}
            packQuantity={packQuantity}
          />
        </div>
      </div>

      {/* المميزات السفلية */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 border-t border-gray-100 mt-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="mb-1">{feature.icon}</div>
            <p className="font-bold text-[10px] text-gray-600">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
