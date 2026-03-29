function QuickBuy({ product }) {
  const scrollToForm = () => {
    const form = document.getElementById("checkout-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className=" fixed left-0 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] bottom-0 w-full bg-white border-y border-gray-100 py-6 px-4 font-cairo"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* الصورة والاسم */}
        <div className="flex items-center gap-4">
          <img
            src="/hair-serum.png"
            alt={product?.name}
            className="w-16 h-16 object-contain rounded-lg bg-orange-50 p-1"
          />
          <div className="text-right">
            <h3 className="font-bold text-slate-800 text-lg leading-tight">
              {product?.name || "LUMIÈRE Serum"}
            </h3>
            <p className="text-pink-600 font-bold text-sm">متوفر الآن ✅</p>
          </div>
        </div>

        {/* الزرار */}
        <button
          onClick={scrollToForm}
          className="w-full md:w-auto bg-slate-600 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all active:scale-95"
        >
          اشتري الان
        </button>
      </div>
    </div>
  );
}

export default QuickBuy;
