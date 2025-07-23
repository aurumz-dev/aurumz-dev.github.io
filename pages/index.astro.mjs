import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DbqXh4Qz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D3FWU9J9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'preact/hooks';
import TypeIt from 'typeit';
import { S as SocialLinks } from '../chunks/SocialLinks_BP3nWOHt.mjs';
export { renderers } from '../renderers.mjs';

function TypingIntro({ onTypingComplete }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const wrapperRef = useRef(null);
  const [currentPath, setCurrentPath] = useState("/");
  const [showSocials, setShowSocials] = useState(false);
  const typingStarted = useRef(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
    if (typingStarted.current) return;
    typingStarted.current = true;
    async function runTyping() {
      await new TypeIt(titleRef.current, {
        speed: 30,
        waitUntilVisible: true,
        cursor: true,
        afterComplete: async () => {
          const cursor = titleRef.current.querySelector(".ti-cursor");
          if (cursor) cursor.remove();
          await new Promise((res) => setTimeout(res, 1e3));
          await new TypeIt(subtitleRef.current, {
            speed: 10,
            waitUntilVisible: true,
            cursor: true,
            afterComplete: async () => {
              await new Promise((res) => setTimeout(res, 2e3));
              document.querySelectorAll(".code-tag").forEach((el) => {
                el.classList.add("slide-left-blur");
                setTimeout(() => el.style.display = "none", 600);
              });
              wrapperRef.current.classList.add("shift-left");
              const navPanel = document.getElementById("nav-panel");
              if (navPanel) {
                navPanel.classList.remove("hidden");
                setTimeout(() => {
                  navPanel.classList.add("active");
                  if (currentPath === "/") {
                    setShowSocials(true);
                  }
                }, 50);
              }
              const subCursor = subtitleRef.current.querySelector(".ti-cursor");
              if (subCursor) subCursor.remove();
              if (onTypingComplete) onTypingComplete();
            }
          }).type(`<span class="code-tag">print("</span><span>I<strong style="color:#E9E3DF;">'</strong>m Vihaan<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>`).pause(100).break().type(`<span class="code-tag">print("</span><span>Also known as Aurumz<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>`).pause(100).break().type(`<span class="code-tag">print("</span><span>A Medical Student <strong style="color:#E9E3DF;"> & </strong> Creator with a keen interest in Developing<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>`).pause(100).break().type(`<span class="code-tag">print("</span><span>Animating <strong style="color:#E9E3DF;"> & </strong> Open-Access<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>`).go();
        }
      }).type(`<span class="code-tag">print("</span><span>Hello there!</span><span class="code-tag">")</span>`).go();
    }
    runTyping();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "aspect-ratio-container relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "typing-wrapper centered", ref: wrapperRef, children: [
      /* @__PURE__ */ jsx("h1", { className: "main-title", ref: titleRef }),
      /* @__PURE__ */ jsx("p", { className: "subtitle", ref: subtitleRef })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "nav-panel hidden", id: "nav-panel", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: `nav-link ${currentPath === "/" ? "active" : ""}`, children: "Main Page" }),
      /* @__PURE__ */ jsx("a", { href: "/support", className: `nav-link ${currentPath === "/support" ? "active" : ""}`, children: "Support" }),
      /* @__PURE__ */ jsx("a", { href: "/dev", className: `nav-link ${currentPath === "/dev" ? "active" : ""}`, children: "Dev" })
    ] }),
    currentPath === "/" && showSocials && /* @__PURE__ */ jsx("div", { className: "socials-container-inside-section", children: /* @__PURE__ */ jsx(SocialLinks, {}) })
  ] });
}

function ProjectCard({ name, website, github, description, image }) {
  const [expanded, setExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `project-horizontal-box ${expanded ? "expanded" : ""}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: `Screenshot of ${name}`,
        className: "project-image",
        loading: "lazy",
        onError: (e) => e.target.style.display = "none"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "project-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "project-header", children: [
        /* @__PURE__ */ jsx("h2", { className: "project-name", children: name }),
        !expanded && /* @__PURE__ */ jsx(
          "button",
          {
            className: "info-btn",
            onClick: () => setExpanded(true),
            "aria-label": `Show ${name} details`,
            children: "Info"
          }
        )
      ] }),
      expanded && /* @__PURE__ */ jsxs("div", { className: "project-info", children: [
        /* @__PURE__ */ jsx("p", { children: description }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "info-btn hide-btn",
            onClick: () => setExpanded(false),
            "aria-label": "Hide details",
            children: "Hide Info"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "project-links", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: website,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `Visit ${name} (opens in new tab)`,
            children: "Website"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: github,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `View ${name} code (opens in new tab)`,
            children: "GitHub"
          }
        )
      ] })
    ] })
  ] });
}

const projectsData = [
  {
    name: "Open-Access Library",
    website: "https://openaccess.example",
    github: "https://github.com/yourrepo/open-access",
    description: "An open-access platform for sharing scientific research papers with zero paywall."
  },
  {
    name: "Code Animator",
    website: "https://codeanimator.example",
    github: "https://github.com/yourrepo/code-animator",
    description: "A tool to animate code snippets for tutorials and presentations."
  }
];
function ProjectsList() {
  return /* @__PURE__ */ jsx("div", { className: "projects-list", children: projectsData.map((proj, i) => /* @__PURE__ */ jsx(
    ProjectCard,
    {
      name: proj.name,
      website: proj.website,
      github: proj.github,
      description: proj.description,
      image: proj.image
    },
    i
  )) });
}

function SecondSection() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.3 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "section second-section", children: /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `animate-fade ${visible ? "visible" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "left-top-text", children: [
      /* @__PURE__ */ jsxs("div", { className: "title-subtitle-row", children: [
        /* @__PURE__ */ jsx("h1", { children: "Some of My Projects" }),
        /* @__PURE__ */ jsx("div", { className: "subtitle", children: "(open-access)" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "new-subtitle", children: "Your new subtitle goes here" })
    ] }),
    /* @__PURE__ */ jsx(ProjectsList, {})
  ] }) });
}

function MultiSectionPage() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollToSecond = () => {
    document.querySelector(".second-section")?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs("section", { className: "section typing-section", children: [
      /* @__PURE__ */ jsx(TypingIntro, { onTypingComplete: () => setShowScrollButton(true) }),
      showScrollButton && /* @__PURE__ */ jsx("div", { className: "scroll-button", children: /* @__PURE__ */ jsx("button", { onClick: scrollToSecond, children: "↓ Scroll down" }) })
    ] }),
    /* @__PURE__ */ jsx(SecondSection, {})
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <title>Home | Aurumz</title> ` })} ${renderComponent($$result, "MultiSectionPage", MultiSectionPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/vihaan/aurumz-dev.github.io/src/components/MultiSectionPage.jsx", "client:component-export": "default" })} `;
}, "/Users/vihaan/aurumz-dev.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/vihaan/aurumz-dev.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
