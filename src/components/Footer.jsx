import { HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-blue-950 py-10 bg-orange-50 font-cairo border-t border-orange-100 mb-28"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* اللوجو */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="font-bold text-3xl tracking-widest hover:text-black transition-colors inline-block"
            dir="ltr"
          >
            LUMIÈRE
          </Link>
          <p className="text-sm text-gray-500 mt-2 italic">
            تألقي بثقة.. بجمالك الطبيعي.
          </p>
        </div>

        {/* من نحن - مع ضبط اتجاه النص العربي */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-lg font-bold mb-4 text-slate-800 underline underline-offset-8 decoration-orange-200">
            من نحن
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-center px-2">
            في{" "}
            <span className="font-bold text-slate-700" dir="ltr">
              Lumière
            </span>
            ، مهمتنا هي تقديم حل فعّال وآمن لمشكلة تساقط الشعر والفراغات، من
            خلال سيروم متطور يعتمد على مكونات مدروسة علميًا، مصمم لدعم نمو الشعر
            وتعزيز كثافته بشكل ملحوظ مع الاستخدام المنتظم.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-4 text-justify md:text-center px-2">
            نؤمن أن استعادة شعرك هي بداية لاستعادة ثقتك بنفسك، لذلك نركز على
            نتائج حقيقية تُبنى على الجودة والاستمرارية، وليس على وعود مبالغ
            فيها.
          </p>
        </div>

        <div className="border-t border-orange-200 w-24 mx-auto mb-8"></div>

        {/* بيانات الاتصال والحقوق */}
        <div className="text-center text-xs md:text-sm space-y-4">
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-10 text-gray-700">
            <p className="flex items-center justify-center gap-2">
              <HiOutlinePhone className="text-lg text-slate-500" />
              <span dir="ltr">+20 123 456 789</span>
            </p>

            <p className="flex items-center justify-center gap-2">
              <MdOutlineMailOutline className="text-lg text-slate-500" />
              <a
                href="mailto:test@gmail.com"
                className="hover:underline hover:text-blue-800 transition-colors"
                dir="ltr"
              >
                test@gmail.com
              </a>
            </p>

            <p className="flex items-center justify-center gap-2">
              <IoLocationOutline className="text-lg text-slate-500" />
              <span>القاهرة، مصر</span>
            </p>
          </div>

          <div className="pt-8 text-gray-400 border-t border-orange-100 mt-6">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold" dir="ltr">
              LUMIÈRE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
