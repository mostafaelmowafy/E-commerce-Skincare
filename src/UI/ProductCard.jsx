import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    // أضفنا flex-col و h-full لضمان أن الكارد يأخذ كامل الارتفاع المتاح له في الصف
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* قسم الصورة */}
      <Link
        to={`/product/${product.name}`}
        className="block overflow-hidden group"
        state={{ product }}
      >
        <img
          className="w-full aspect-square object-cover bg-gray-100 transition-transform duration-500 group-hover:scale-110 border-b-2 border-gray-200"
          src={product.image}
          alt={product.name}
        />
      </Link>

      {/* محتوى النصوص: استخدمنا flex-grow هنا */}
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">
          {product.name}
        </div>

        {/* line-clamp-2 تضمن أن الوصف لن يتعدى سطرين مهما كان طوله */}
        <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
          {product.description}
        </p>

        <p className="text-gray-900 font-bold mt-4 text-lg">
          ${product.price.toFixed(2)} EGP
        </p>
      </div>

      {/* قسم الزر: سيكون دائماً في الأسفل بسبب flex-grow في العنصر السابق */}
      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-brandPink hover:bg-hoverBrandPink text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
