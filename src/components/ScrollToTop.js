import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as ReactGA from "react-ga";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  
  const trackPage = (page) => {
    ReactGA.set({
      page
    });
    ReactGA.pageview(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPage(pathname);
  }, [pathname]);

  return null;
}
