import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, speed: 400, trickleSpeed: 200 });

if (typeof window !== "undefined") {
  // Show bar for 2 seconds on every page load (just to test)
  window.addEventListener("load", () => {
    NProgress.start();
    setTimeout(() => NProgress.done(), 2000);
  });

  // These only work when Astro uses client-side navigation
  window.addEventListener("astro:before-navigate", () => NProgress.start());
  window.addEventListener("astro:after-navigate", () => NProgress.done());
}
