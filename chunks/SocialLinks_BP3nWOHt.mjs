import { jsxs, jsx } from 'react/jsx-runtime';

function SocialLinks() {
  return /* @__PURE__ */ jsxs("div", { className: "social-links", style: { display: "flex", gap: "1rem" }, children: [
    /* @__PURE__ */ jsx("a", { href: "mailto:aurumz.gg@hotmail.com", title: "Email", target: "_blank", rel: "noopener", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#E9E3DF",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          /* @__PURE__ */ jsx("path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
          /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("a", { href: "https://github.com/aurumz-dev", title: "GitHub", target: "_blank", rel: "noopener", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "45",
        height: "45",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#E9E3DF",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7\n                   A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0\n                   C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61\n                   6.44 7a3.37 3.37 0 0 0-.94 2.59V22Z" })
      }
    ) })
  ] });
}

export { SocialLinks as S };
