import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400, trickleSpeed: 200 });

if (typeof window !== "undefined") {
  
  window.addEventListener("load", () => {
    NProgress.start();
    setTimeout(() => NProgress.done(), 2000);
  });


  window.addEventListener("astro:before-navigate", () => NProgress.start());
  window.addEventListener("astro:after-navigate", () => NProgress.done());
}
