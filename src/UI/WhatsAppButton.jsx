import { FaWhatsapp } from "react-icons/fa"; // تأكد من تثبيت react-icons

const WhatsAppButton = () => {
  const phoneNumber = "2010XXXXXXXX"; // ضع رقمك هنا بالكود الدولي بدون أصفار (مثال: 2010...)
  const message = "Hello Lumière! I have a question about your products."; // رسالة ترحيبية تلقائية

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* نص يظهر عند تمرير الماوس (Tooltip) */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us!
      </span>

      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
