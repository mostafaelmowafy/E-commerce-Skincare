import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const Shipping = 50; // قيمة ثابتة للشحن، يمكنك تعديلها حسب الحاجة

  const subtotal = cartItems.reduce((acc, item) => {
    // التأكد أن السعر والكمية أرقام فعلاً
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  const total = subtotal + Shipping;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 mb-6">No items in your cart</p>
          <Link to="/" className="bg-brandPink text-white px-8 py-3 rounded-lg">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* قائمة المنتجات */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 gap-4"
              >
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-lg"
                  alt=""
                />
                <div className="flex-grow text-right">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">${item.price} EGP</p>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={() => addToCart(item)}
                      className="hover:text-brandPink px-2"
                    >
                      +
                    </button>
                    <span className="font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="hover:text-brandPink px-2"
                    >
                      -
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 text-xl hover:scale-110 transition-transform"
                >
                  <MdDeleteForever />
                </button>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="bg-gray-50 p-6 rounded-2xl h-fit shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 border-b pb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Shipping</span>
                <span>${Shipping.toFixed(2)} EGP</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg py-4">
              <span>Total</span>
              <span className="text-brandPink">${formatPrice(total)} EGP</span>
            </div>
            <Link
              to="/checkout"
              className="block text-center bg-black text-white w-full py-4 rounded-xl font-bold hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
