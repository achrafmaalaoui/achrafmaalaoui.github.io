/* =========================================================
   Achraf Maalaoui — Portfolio
   Main behaviour: i18n rendering, nav, animations
   ========================================================= */

(function () {
  "use strict";

  const CV_PATHS = {
    en: "assets/cv/Achraf-Maalaoui-CV-EN.pdf",
    fr: "assets/cv/Achraf-Maalaoui-CV-FR.pdf",
  };

  const TITLES = {
    en: "Achraf Maalaoui | DevOps & Platform Engineer — AWS · Kubernetes · Terraform",
    fr: "Achraf Maalaoui | Ingénieur DevOps & Plateforme — AWS · Kubernetes · Terraform",
  };

  /* ---------- Helpers ---------- */
  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function getStoredLang() {
    const stored = localStorage.getItem("site-lang");
    if (stored === "en" || stored === "fr") return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  /* ---------- Static text nodes (data-i18n) ---------- */
  function applyStaticTranslations(lang) {
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      let value = getNested(dict, key);
      if (value == null) return;
      if (key === "footer.text") {
        value = value.replace("{year}", new Date().getFullYear());
      }
      el.textContent = value;
    });

    document.documentElement.lang = lang;
    document.title = TITLES[lang];

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    const cvPath = CV_PATHS[lang];
    const headerCv = document.getElementById("downloadCvBtn");
    const heroCv = document.getElementById("downloadCvHero");
    if (headerCv) headerCv.setAttribute("href", cvPath);
    if (heroCv) heroCv.setAttribute("href", cvPath);
  }

  /* ---------- Dynamic: Skills ---------- */
  function renderSkills(lang) {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    const groups = I18N[lang].skills.groups;
    grid.innerHTML = groups
      .map(
        (g) => `
      <div class="skill-card reveal">
        <h3><i class="${g.icon}"></i> ${g.title}</h3>
        <div class="skill-tags">
          ${g.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  /* ---------- Dynamic: Timeline ---------- */
  function renderTimeline(lang) {
    const el = document.getElementById("timeline");
    if (!el) return;
    const exp = I18N[lang].exp;

    const mainItems = exp.items
      .map((item, i) => {
        const dotIcon = i === 0 ? "fa-solid fa-server" : "fa-solid fa-headset";
        let body = "";
        if (item.subprojects) {
          body = item.subprojects
            .map(
              (sp) => `
            <div class="tl-subproject">
              <h4>${sp.name}</h4>
              <ul>${sp.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
            </div>`
            )
            .join("");
        } else if (item.bullets) {
          body = `<ul>${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
        }
        return `
        <div class="tl-item ${i % 2 ? "alt" : ""} reveal">
          <div class="tl-dot"><i class="${dotIcon}"></i></div>
          <div class="tl-card">
            <div class="tl-role-row">
              <span class="tl-role">${item.role}</span>
              <span class="tl-date">${item.date}</span>
            </div>
            <div class="tl-company">${item.company}</div>
            ${body}
          </div>
        </div>`;
      })
      .join("");

    const earlier = `
      <div class="tl-item reveal">
        <div class="tl-dot"><i class="fa-solid fa-clock-rotate-left"></i></div>
        <div class="tl-card">
          <div class="tl-role-row"><span class="tl-role">${exp.earlierTitle}</span></div>
          <div class="tl-earlier">
            ${exp.earlier
              .map(
                (e) => `<div class="tl-earlier-item"><b>${e.role}</b> — ${e.company} <span style="opacity:.65">(${e.date})</span></div>`
              )
              .join("")}
          </div>
        </div>
      </div>`;

    el.innerHTML = mainItems + earlier;
  }

  /* ---------- Dynamic: Certifications ---------- */
  function renderCerts(lang) {
    const grid = document.getElementById("certsGrid");
    if (!grid) return;
    const certs = I18N[lang].certs;
    grid.innerHTML = certs.items
      .map(
        (c) => `
      <a class="cert-card reveal" href="https://www.credly.com/users/achrafmaalaoui" target="_blank" rel="noopener">
        <div class="cert-icon"><i class="${c.icon}"></i></div>
        <h3>${c.name}</h3>
        <p>${c.issuer}</p>
        <span class="cert-verify">${certs.verify}</span>
      </a>`
      )
      .join("");
  }

  /* ---------- Reveal-on-scroll (with safety-net fallback) ---------- */
  let revealObserver;
  function initReveal() {
    const items = document.querySelectorAll(".reveal");

    // Safety net: if IntersectionObserver is unsupported or fails to fire
    // for any reason, guarantee content is visible after a short delay.
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 200px 0px" }
    );
    items.forEach((el) => revealObserver.observe(el));

    // Belt-and-suspenders: force-reveal anything still hidden after 1.5s
    // (covers any edge case where an observer callback never fires).
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => el.classList.add("in-view"));
    }, 1500);
  }

  /* ---------- Stat counters ---------- */
  function initStatCounters() {
    const cards = document.querySelectorAll(".stat-number");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const duration = 1100;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    cards.forEach((c) => obs.observe(c));
  }

  /* ---------- Render everything for a language ---------- */
  function renderAll(lang) {
    applyStaticTranslations(lang);
    renderSkills(lang);
    renderTimeline(lang);
    renderCerts(lang);
    initReveal();
  }

  /* ---------- Language switch wiring ---------- */
  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        localStorage.setItem("site-lang", lang);
        renderAll(lang);
      });
    });
  }

  /* ---------- Mobile drawer ---------- */
  function initMobileNav() {
    const burger = document.getElementById("burgerBtn");
    const drawer = document.getElementById("mobileDrawer");
    if (!burger || !drawer) return;
    burger.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });
    drawer.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Scroll progress + header shadow + back-to-top + scrollspy ---------- */
  function initScrollEffects() {
    const progress = document.getElementById("scrollProgress");
    const header = document.getElementById("siteHeader");
    const backToTop = document.getElementById("backToTop");
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const sections = navLinks
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progress) progress.style.width = pct + "%";
      if (header) header.classList.toggle("scrolled", scrollTop > 8);
      if (backToTop) backToTop.classList.toggle("visible", scrollTop > 480);

      let activeIdx = -1;
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120) activeIdx = i;
      });
      navLinks.forEach((a, i) => a.classList.toggle("active", i === activeIdx));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getStoredLang();
    renderAll(lang);
    initStatCounters();
    initLangSwitch();
    initMobileNav();
    initScrollEffects();
  });
})();
