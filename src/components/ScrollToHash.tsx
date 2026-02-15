import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.classList.remove("vexa-target-flash");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (el as HTMLElement).offsetWidth;
    el.classList.add("vexa-target-flash");

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => el.classList.remove("vexa-target-flash"), 1400);
  }, [location.hash, location.pathname]);

  return null;
};

export default ScrollToHash;

