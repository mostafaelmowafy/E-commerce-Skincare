import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const TOTAL_SECONDS = 55 * 60 * 60; // 55 ساعة بالثواني
  const RESET_LIMIT = 50 * 60 * 60; // 50 ساعة (نقطة إعادة العداد)

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    // 1. البحث عن وقت النهاية المخزن مسبقاً في المتصفح
    let savedEndTime = localStorage.getItem("timer_end_time");
    let endTime;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);

      // إذا انتهى الوقت تماماً أو وصل للحد (50 ساعة)، نعيد ضبطه
      const now = Math.floor(Date.now() / 1000);
      if (endTime - now <= RESET_LIMIT) {
        endTime = now + TOTAL_SECONDS;
        localStorage.setItem("timer_end_time", endTime.toString());
      }
    } else {
      // 2. إذا كانت أول مرة يدخل، ننشئ وقت نهاية جديد (الآن + 55 ساعة)
      endTime = Math.floor(Date.now() / 1000) + TOTAL_SECONDS;
      localStorage.setItem("timer_end_time", endTime.toString());
    }

    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000);
      const distance = endTime - now;

      if (distance <= RESET_LIMIT) {
        // إعادة العداد للدورة الجديدة (55 ساعة) وحفظ التوقيت الجديد
        const newEndTime = now + TOTAL_SECONDS;
        endTime = newEndTime;
        localStorage.setItem("timer_end_time", newEndTime.toString());
        setTimeLeft(TOTAL_SECONDS);
      } else {
        setTimeLeft(distance);
      }
    };

    updateTimer(); // تشغيل فوري أول مرة
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // دالة تحويل الثواني لتنسيق (ساعة:دقيقة:ثانية)
  const formatTime = (seconds) => {
    if (!seconds) return { h: "00", m: "00", s: "00" };
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, "0"),
      m: m.toString().padStart(2, "0"),
      s: s.toString().padStart(2, "0"),
    };
  };

  const time = formatTime(timeLeft);

  // لمنع ظهور أصفار للحظة قبل قراءة الـ LocalStorage
  if (timeLeft === null) return null;

  return (
    <div
      className="flex flex-col items-center gap-2 my-4 p-3 bg-red-50 border border-red-100 rounded-2xl shadow-inner"
      dir="rtl"
    >
      <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        العرض ينتهي خلال:
      </div>

      <div className="flex gap-2 text-slate-800 font-black">
        {/* الساعات */}
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-sm border border-red-100 rounded-lg w-12 py-2 text-xl text-center">
            {time.h}
          </div>
          <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold">
            ساعة
          </span>
        </div>

        <span className="text-xl mt-2 text-red-300">:</span>

        {/* الدقائق */}
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-sm border border-red-100 rounded-lg w-12 py-2 text-xl text-center">
            {time.m}
          </div>
          <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold">
            دقيقة
          </span>
        </div>

        <span className="text-xl mt-2 text-red-300">:</span>

        {/* الثواني */}
        <div className="flex flex-col items-center">
          <div className="bg-white shadow-sm border border-red-100 rounded-lg w-12 py-2 text-xl text-center text-red-600">
            {time.s}
          </div>
          <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold">
            ثانية
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
