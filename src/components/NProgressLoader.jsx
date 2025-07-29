import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function NProgressLoader() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 400, trickleSpeed: 200 });

    const start = () => NProgress.start();
    const done = () => NProgress.done();

    window.addEventListener("load", () => {
      NProgress.start();
      setTimeout(() => NProgress.done(), 2000);
    });

    window.addEventListener("astro:before-navigate", start);
    window.addEventListener("astro:after-navigate", done);

    return () => {
      window.removeEventListener("astro:before-navigate", start);
      window.removeEventListener("astro:after-navigate", done);
    };
  }, []);

  return null;
}
