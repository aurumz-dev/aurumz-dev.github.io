import { c as createComponent, b as renderSlot, d as renderHead, a as renderTemplate } from './astro/server_DbqXh4Qz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                       */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Web | Aurumz</title>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/vihaan/aurumz-dev.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
