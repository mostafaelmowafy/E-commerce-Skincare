import { products } from "../Data";
import ProductCard from "./ProductCard";

function Products() {
  // التحقق مما إذا كان هناك منتج واحد فقط
  const isSingleProduct = products.length === 1;

  return (
    <div className="flex flex-col items-center gap-6 py-12 px-8 bg-pink-50/50">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 tracking-tight">
        Our Products
      </h1>
      {isSingleProduct ? (
        <div className="w-full max-w-2xl transform transition-all duration-500 hover:scale-[1.01]">
          <div className="bg-white rounded-3xl shadow-2xl shadow-pink-100/50 border border-gray-100 overflow-hidden">
            <ProductCard product={products[0]} />
          </div>

          <p className="text-center mt-6 text-gray-400 italic text-sm">
            ✨ Our Star Product - Carefully Crafted for You
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
