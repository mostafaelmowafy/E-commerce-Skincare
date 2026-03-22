import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showInstaModal, setShowInstaModal] = useState(false); // حالة إظهار نافذة انستا باي

  const instapayNumber = "010XXXXXXXX"; // ضع رقمك هنا
  const total =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const paymentMethod = formData.get("payment");

    const orderData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      payment: paymentMethod,
      products: cartItems
        .map((item) => `${item.name} (x${item.quantity})`)
        .join(", "),
      total: total,
    };

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzGfC1kmGwVb0t5ZP5BDkexBMiyKbSQDV58sgFDjC67AkUZCVm2c5IpukLerQfoh2Opdg/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(orderData),
      });

      // إذا اختار انستا باي، نظهر المودال أولاً
      if (paymentMethod === "InstaPay") {
        setShowInstaModal(true);
      } else {
        toast.success("Order placed successfully!", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        finishOrder();
      }
    } catch (error) {
      toast.error("Failed to place order. Please try again.", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const finishOrder = () => {
    clearCart();
    navigate("/");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 relative min-h-svh">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* ... نفس كود الفورم السابق مع التأكد من إضافة value للـ radio buttons ... */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">
              Shipping Information
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right"
              dir="rtl"
            >
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="col-span-2 p-3 border rounded-lg"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="p-3 border rounded-lg"
                required
              />
              <input
                name="city"
                type="text"
                placeholder="Governorate"
                className="p-3 border rounded-lg"
                required
              />
              <input
                name="address"
                type="text"
                placeholder="Detailed Address"
                className="col-span-2 p-3 border rounded-lg"
                required
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  className="accent-brandPink w-5 h-5"
                  defaultChecked
                />
                <span className="mr-3 font-bold">Cash on Delivery</span>
              </label>
              <label className="flex items-center p-4 border rounded-xl cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="InstaPay"
                  className="accent-brandPink w-5 h-5"
                />
                <span className="mr-3 font-bold">InstaPay</span>
              </label>
            </div>
          </section>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brandPink text-white rounded-xl font-bold"
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>

        {/* مراجعة الطلب */}
        <div className="bg-gray-50 p-6 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-2 italic text-sm"
            >
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>{item.price * item.quantity} EGP</span>
            </div>
          ))}
          <div className="pt-4 font-bold text-lg flex justify-between">
            <span>Total (Including Shipping)</span>
            <span>{formatPrice(total)} EGP</span>
          </div>
        </div>
      </form>

      {/* --- نافذة InstaPay المنبثقة (Modal) --- */}
      {showInstaModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-5xl mb-4">💸</div>
            <h3 className="text-2xl font-bold mb-2">
              Almost Done – Complete Your Order
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Please transfer the amount of
              <span className="font-bold text-black">
                {formatPrice(total)} EGP
              </span>{" "}
              via the InstaPay app to the following number:
            </p>
            <div className="bg-gray-100 p-4 rounded-xl mb-6 flex justify-between items-center group">
              <span className="font-mono text-xl font-bold tracking-widest">
                {instapayNumber}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(instapayNumber);
                  toast.success("Number copied to clipboard!", {
                    style: {
                      background: "#333",
                      color: "#fff",
                    },
                  });
                }}
                className="text-brandPink text-sm font-bold"
              >
                نسخ
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-6 italic">
              * Please send a photo of the transfer on WhatsApp to confirm
              shipping immediately.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/2${instapayNumber}?text=تم التحويل لطلب باسم ${document.getElementsByName("name")[0].value}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition"
              >
                Send Receipt (WhatsApp) 💬
              </a>
              <button
                onClick={() => navigate("/")}
                className="text-gray-500 text-sm hover:underline"
              >
                Close and Return to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
