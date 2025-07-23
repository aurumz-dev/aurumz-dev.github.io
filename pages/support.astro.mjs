import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DbqXh4Qz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D3FWU9J9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { S as SocialLinks } from '../chunks/SocialLinks_BP3nWOHt.mjs';
export { renderers } from '../renderers.mjs';

function StaticIntro() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  return /* @__PURE__ */ jsxs("div", { className: "aspect-ratio-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "typing-wrapper centered shift-left", children: [
      /* @__PURE__ */ jsx("h1", { className: "main-title", children: "Hello there!" }),
      /* @__PURE__ */ jsxs("p", { className: "subtitle", children: [
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: 'print("' }),
        /* @__PURE__ */ jsxs("span", { children: [
          "I",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: "'" }),
          "m Vihaan",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: "," })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: '")' }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: 'print("' }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Also known as Aurumz",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: "." })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: '")' }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: 'print("' }),
        /* @__PURE__ */ jsxs("span", { children: [
          "A Medical Student ",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: " & " }),
          " Creator with keen interest in Developing",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: "," })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: '")' }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: 'print("' }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Animating ",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: " & " }),
          " Open-Access",
          /* @__PURE__ */ jsx("strong", { style: { color: "#ffe8d8" }, children: "." })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "code-tag", children: '")' })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "nav-panel active", id: "nav-panel", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: `nav-link ${currentPath === "/" ? "active" : ""}`, children: "Main Page" }),
      /* @__PURE__ */ jsx("a", { href: "/support", className: `nav-link ${currentPath === "/support" ? "active" : ""}`, children: "Support" }),
      /* @__PURE__ */ jsx("a", { href: "/dev", className: `nav-link ${currentPath === "/dev" ? "active" : ""}`, children: "Dev" })
    ] }),
    currentPath === "/" && /* @__PURE__ */ jsx("div", { className: "socials-container-inside-section", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
  ] });
}

const $$Support = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <title>Support | Aurumz</title> ` })} ${renderComponent($$result, "StaticIntro", StaticIntro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/vihaan/aurumz-dev.github.io/src/components/StaticIntro.jsx", "client:component-export": "default" })} `;
}, "/Users/vihaan/aurumz-dev.github.io/src/pages/support.astro", void 0);

const $$file = "/Users/vihaan/aurumz-dev.github.io/src/pages/support.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
