const Features = () => {
  const features = [
    {
      icon: "✨",
      title: "Premium Quality",
      desc: "Carefully formulated with the finest ingredients",
    },
    {
      icon: "🌸",
      title: "Gentle & Effective",
      desc: "Suitable for all skin types, dermatologist tested",
    },
    {
      icon: "💕",
      title: "Made with Love",
      desc: "Crafted to make you feel beautiful every day",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* الحاوية الرئيسية: عمود واحد للموبايل، 3 أعمدة للكمبيوتر */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group transition-all duration-300"
            >
              {/* أيقونة مستجيبة: تصغر قليلاً في الموبايل */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-50 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6 group-hover:bg-brandPink/10 group-hover:scale-110 transition-all duration-500 shadow-sm">
                {feature.icon}
              </div>

              {/* العنوان: حجم خط متكيف */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 tracking-wide uppercase italic">
                {feature.title}
              </h3>

              {/* الوصف: عرض محدد لضمان عدم تشتت النص في الشاشات الواسعة */}
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-full italic">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
