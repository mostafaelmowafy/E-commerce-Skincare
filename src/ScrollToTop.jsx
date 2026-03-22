import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // دايما يطلع لأول الصفحة عند أي تغيير في المسار أو الرجوع
    window.history.scrollRestoration = "manual"; // منع الاسترجاع التلقائي
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop;
