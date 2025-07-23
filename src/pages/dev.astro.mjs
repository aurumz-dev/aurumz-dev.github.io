import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DbqXh4Qz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D3FWU9J9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function DevIntro() {
  return /* @__PURE__ */ jsx("div", { className: "aspect-ratio-container", children: /* @__PURE__ */ jsxs("div", { className: "typing-wrapper centered shift-left", children: [
    /* @__PURE__ */ jsx("h1", { className: "main-title", children: "Welcome to the Dev Page" }),
    /* @__PURE__ */ jsxs("p", { className: "subtitle", style: { color: "#ccc", lineHeight: "1.5", fontSize: "1.25rem" }, children: [
      "This is the developer's corner.",
      /* @__PURE__ */ jsx("br", {}),
      "Here I share my projects, experiments,",
      /* @__PURE__ */ jsx("br", {}),
      "and thoughts on coding,",
      /* @__PURE__ */ jsx("br", {}),
      "open-source, and tech innovations."
    ] })
  ] }) });
}

const $$Dev = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <title>Dev | Aurumz</title> ` })} ${renderComponent($$result, "DevIntro", DevIntro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/vihaan/aurumz-dev.github.io/src/components/DevIntro.jsx", "client:component-export": "default" })} `;
}, "/Users/vihaan/aurumz-dev.github.io/src/pages/dev.astro", void 0);

const $$file = "/Users/vihaan/aurumz-dev.github.io/src/pages/dev.astro";
const $$url = "/dev";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dev,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
