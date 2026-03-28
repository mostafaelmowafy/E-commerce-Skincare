// import { FcOk } from "react-icons/fc";
// import { motion } from "framer-motion";

function Banner() {
  // const features = [
  //   "يدعم نمو الشعر",
  //   "يحفز البصيلات",
  //   "يحسن الدورة الدموية",
  //   "تغذية عميقة",
  //   "يقوي الشعر",
  // ];
  // return (
  //   <div className="bg-gray-100 w-full font-cairo" dir="rtl">
  //     <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden xl:px-14">
  //       <div className="p-8 flex flex-col items-start gap-4 md:gap-6 w-full md:w-2/3 text-right">
  //         <h1 className="text-3xl font-bold mb-4 text-black leading-tight">
  //           شعر أقوى يبدأ من الجذور
  //         </h1>

  //         <p className="text-base md:text-lg mb-6 text-gray-600 w-fit py-2">
  //           حل متكامل لعلاج تساقط الشعر وتحفيز الإنبات من الجذور – مناسب للرجال
  //           اللي بيعانوا من الصلع الوراثي.
  //         </p>
  //         <ul className="list-none text-gray-600 mb-6 space-y-2">
  //           {features.map((feature, index) => (
  //             <li key={index} className="flex items-center gap-2">
  //               <FcOk />
  //               <span>{feature}</span>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>

  //       <div className="w-full md:w-1/3 flex justify-center md:justify-end">
  //         <motion.img
  //           src="/hair-serum.png"
  //           alt="Lumiere Hair Serum"
  //           className="h-64 md:h-96 w-auto object-contain"
  //           initial={{ y: 200, opacity: 0 }}
  //           animate={{ y: 0, opacity: 1 }}
  //           transition={{
  //             type: "spring",
  //             stiffness: 100,
  //             damping: 10,
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <img
        src="/banner.png"
        alt="Lumiere Hair Serum Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default Banner;
