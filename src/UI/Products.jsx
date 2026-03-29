import { FcOk } from "react-icons/fc";
import { products } from "../Data";
import ProductCard from "./ProductCard";
import { useState } from "react";

function Products() {
  const features = [
    "يدعم نمو الشعر",
    "يحفز البصيلات",
    "يحسن الدورة الدموية",
    "تغذية عميقة",
    "يقوي الشعر",
  ];

  const faqs = [
    {
      question: " ❓ هل المنتج آمن؟",
      answer: "نعم، آمن ومجرب ومناسب للاستخدام اليومي.",
    },
    {
      question: "❓ ينفع أستخدمه على الدقن؟",
      answer:
        "طبعًا - البصيلات في الدقن تستجيب بسرعة عالية جدًا للتحفيز + التغذية.",
    },
    {
      question: "❓ هل بيرجع الشعر بعد ما يقع؟",
      answer: "نعم، المنتج بيحفّز البصيلات على الإنبات من جديد.",
    },
    {
      question: "❓ قد إيه وتبان نتيجة؟",
      answer:
        "– 2–4 أسابيع: توقف تساقط – 4–6 أسابيع: بداية إنبات – 6–10 أسابيع: كثافة واتّساق",
    },
    {
      question: "❓ ينفع للرجالة والسيدات؟",
      answer: "أيوه - آمن للجميع.",
    },
    {
      question: "❓ ينفع أوقفه بعد ما الشعر يرجع؟",
      answer:
        "طبعًا - لما البصيلة تقوى وتشتغل طبيعي، مش مطلوب استخدام يومي بعدها.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center font-cairo mx-auto " dir="rtl">
      <div className=" max-w-2xl p-8 flex flex-col items-start gap-4 md:gap-6 md:w-2/3 text-right ">
        <h1 className="text-3xl font-bold mb-4 text-black leading-tight">
          شعر أقوى يبدأ من الجذور
        </h1>

        <p className="text-base md:text-lg mb-6 text-gray-600 w-fit py-2">
          حل متكامل لعلاج تساقط الشعر وتحفيز الإنبات من الجذور – مناسب للرجال
          اللي بيعانوا من الصلع الوراثي.
        </p>
        <ul className="list-none text-gray-600 mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <FcOk />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            document
              .getElementById("checkout-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full mt-4 px-6 py-2 bg-slate-600 text-white font-bold rounded-lg hover:bg-slate-700 transition"
        >
          أطلب الآن - والدفع عند الاستلام
        </button>
      </div>

      <div
        className="w-full max-w-2xl mx-auto p-6 bg-orange-50/50 shadow-lg border border-orange-200 font-cairo"
        dir="rtl"
      >
        <h2 className="text-3xl font-bold mb-10 text-gray-800 tracking-tight">
          شوف الفرق… لما البصيلة تصحى.
        </h2>
        <div className="w-full max-w-2xl space-y-2">
          <p>
            الصورة بتوضح التحوّل الطبيعي بعد استخدام{" "}
            <span className=" font-bold text-gray-800">HAIR GROWTH SERUM:</span>
          </p>
          <p className="mb-4 bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-400">
            <span className="font-bold text-red-500"> قبل: </span>بصيلات ضعيفة，
            شعر خفيف، ومناطق صلع واضحة.
          </p>

          <div>
            <img
              src="/before-after1.jpeg"
              alt="Before and After Hair Growth Serum"
              className="w-full rounded-lg shadow-md border border-gray-200 mt-10"
            />
            <p className="bg-green-100 p-4 rounded-lg border-l-4 border-green-400 mt-8 mb-4">
              <span className="font-bold text-green-500">بعد:</span> بصيلات
              صحية， شعر أكثف، ومناطق الصلع بتتغطى تدريجياً من أول أسابيع
              الاستخدام.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("checkout-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-4 px-6 py-2 bg-slate-600 text-white font-bold rounded-lg hover:bg-slate-700 transition"
            >
              أطلب الآن - والدفع عند الاستلام
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl  ">
        <div className="bg-white shadow-2xl shadow-pink-100/50 border border-gray-100 overflow-hidden">
          <ProductCard product={products[0]} />
        </div>

        <p className="text-center mt-6 text-gray-400 italic text-sm">
          منتجنا النجم - مصنوع بعناية من أجلك ✨
        </p>
      </div>
      <div
        className=" w-full max-w-2xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg font-cairo"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          الأسئلة الشائعة (FAQ)
        </h2>
        <div className="space-y-4 w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-right font-bold text-gray-700 hover:text-orange-300 transition"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
