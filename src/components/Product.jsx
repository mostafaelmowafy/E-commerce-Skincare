import { Link, useLocation, useParams } from "react-router-dom";
import { products } from "../Data";
import { useCart } from "../context/CartContext";

function Product() {
  const { addToCart } = useCart();
  const { name } = useParams();
  const location = useLocation();
  const product =
    location.state?.product || products.find((p) => p.name === name);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg"> No Product Details</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:py-12 sm:px-8 ">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="p-8 flex flex-col gap-4 md:gap-6 w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black leading-tight text-left">
            {product.name}
          </h2>
          <p className="text-base md:text-lg mb-6 text-gray-600 text-left w-full ">
            {product.description}
          </p>
          <p className="text-gray-900 font-bold mb-4">{product.price}</p>
          <div className="flex flex-col lg:flex-row ">
            <button
              onClick={() => addToCart(product)}
              className="bg-brandPink hover:bg-hoverBrandPink text-white font-bold py-2 px-4 rounded mb-6"
            >
              Add to Cart
            </button>
            <Link
              to="/"
              className="lg:ml-4 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-6"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
