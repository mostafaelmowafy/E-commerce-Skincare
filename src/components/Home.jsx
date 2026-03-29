import { products } from "../Data";
import Banner from "../UI/Banner";
import Features from "../UI/Features";
import Products from "../UI/Products";
import QuickBuy from "./QuickBuy";

function Home() {
  return (
    <div>
      <div>
        <Banner /> <Products /> <Features />
        <QuickBuy product={products[0]} />
      </div>
    </div>
  );
}

export default Home;
