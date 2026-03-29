import { HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className=" text-blue-950 py-6 bg-orange-50 font-cairo">
        <div className="container mx-auto text-center mb-6">
          <Link
            to="/"
            className="font-bold text-2xl tracking-widest hover:text-black transition-colors "
          >
            LUMIÈRE
          </Link>
          <p className="text-sm text-gray-600">تألقي بثقة.. بجمالك الطبيعي.</p>
        </div>
        <div className="container mx-auto mt-4 text-center text-xs ">
          <p className="mb-1 flex items-center justify-center gap-1">
            <HiOutlinePhone />
            <span className="ml-1">+20 123 456 789</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <MdOutlineMailOutline />
            <a
              href="mailto:test@gmail.com"
              className=" ml-1 hover:underline hover:text-gray-300 transition-colors"
            >
              test@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-1 mt-1 mb-6">
            <IoLocationOutline />
            123 Main Street, City, Country
          </p>
          &copy; {new Date().getFullYear()} LUMIÈRE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
