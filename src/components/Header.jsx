import { CiShop } from "react-icons/ci";
// import { Link } from "react-router-dom"; // تأكد من استيراد Link إذا كنت ستنتقل لصفحة العربة
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="font-cairo ">
      <motion.div
        initial={{ y: -100, opacity: 0 }} // يبدأ من فوق ومخفي
        animate={{ y: 0, opacity: 1 }} // ينزل لمكانه ويظهر
        transition={{ duration: 0.5, ease: "easeOut" }} // مدة الحركة
        className="bg-slate-600/80 py-2 text-sm text-gray-50 flex items-center justify-center gap-2"
        dir="rtl"
      >
        <span className="text-2xl text-blue-50 animate-pulse">
          <CiShop />
        </span>
        <p>ودّع الفراغات والصلع الوراثي… وارجّع شعرك من جديد خلال أسابيع!</p>
      </motion.div>
      {/* <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-gray-800  border-b border-gray-100 text-center">
        
        <Link
          to="/"
          className="font-bold text-4xl tracking-widest hover:text-brandPink transition-colors w-full"
        >
          <img src="/logo.png" alt="Logo" className="w-24 h-24 mx-auto" />
        </Link>
      </div> */}
    </div>
  );
}

export default Header;
