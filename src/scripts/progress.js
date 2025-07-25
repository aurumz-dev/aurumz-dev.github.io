// src/scripts/progress.js
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({ showSpinner: false, speed: 400, trickleSpeed: 200 });

// Listen for navigation events
if (typeof window !== "undefined") {
  window.addEventListener("astro:before-navigate", () => NProgress.start());
  window.addEventListener("astro:after-navigate", () => NProgress.done());
}
