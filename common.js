// En-tête + menu partagés par toutes les pages
(function () {
  const header = document.createElement("header");
  header.className = "header";
  // nom de la page en cours à côté du nom, pour toujours savoir où l'on est
  const pageName = T("Accueil", "Home");
  // FR / EN : on reste sur la section où l'on se trouve
  const langLink = (l) => `<a href="index.html?lang=${l}${location.hash}" lang="${l}" hreflang="${l}"${l === LANG ? ' class="is-on" aria-current="true"' : ""}>${l.toUpperCase()}</a>`;
  header.innerHTML = `
    <a href="index.html" class="brand">${SITE.name}${pageName ? `<span class="crumb"><i>/</i>${pageName}</span>` : ""}</a>
    <div class="header-right">
      <span class="lang-switch" aria-label="${T("Langue", "Language")}">${langLink("fr")}<i aria-hidden="true">/</i>${langLink("en")}</span>
      <button class="menu-btn" aria-label="Menu" aria-expanded="false"><span class="burger" aria-hidden="true"><i></i><i></i><i></i></span></button>
    </div>`;

  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";

  const menu = document.createElement("nav");
  menu.className = "menu";
  menu.innerHTML = `
    <ul class="menu-links">
      <li><a href="index.html?arrivee"><span>${T("Accueil", "Home")}</span></a></li>
      <li><a href="index.html#parcours"><span>CV</span></a></li>
      <li><a href="index.html#contact"><span>Contact</span></a></li>
    </ul>
    <div>
      <div class="menu-label">Email</div>
      <a class="mail" href="mailto:${SITE.email}">${SITE.email}</a>
    </div>
    <div>
      <div class="menu-label">${T("Réseaux", "Social")}</div>
      <div class="menu-socials">
        ${SITE.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("")}
      </div>
    </div>`;

  document.body.prepend(header, overlay, menu);

  // page courante dans le menu
  const here = location.pathname.split("/").pop() || "index.html";
  menu.querySelectorAll(".menu-links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("is-current");
  });

  const btn = header.querySelector(".menu-btn");
  const toggle = (open) => {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open);
  };
  btn.addEventListener("click", () => toggle(!document.body.classList.contains("menu-open")));
  overlay.addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && toggle(false));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));

  // Pied de page des pages intérieures (pas sur l'accueil)
  const main = document.querySelector("main.page:not([data-no-footer])");
  if (main) {
    const foot = document.createElement("footer");
    foot.className = "site-footer";
    foot.innerHTML = `
      <div>
        <p class="sf-label">${T("Travaillons ensemble", "Let’s work together")}</p>
        <a href="index.html#contact">${T("Me contacter", "Get in touch")}</a>
      </div>
      <div>
        <p class="sf-label">Email</p>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
      <div>
        <p class="sf-label">Menu</p>
        <a href="index.html?arrivee">${T("Accueil", "Home")}</a><a href="index.html#parcours">CV</a><a href="index.html#contact">Contact</a>
      </div>
      <div>
        <p class="sf-label">${T("Réseaux", "Social")}</p>
        ${SITE.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("")}
      </div>
      <div class="sf-time"><span class="sf-date"></span><span class="sf-clock"></span></div>`;
    main.after(foot);
    const fmt = new Intl.DateTimeFormat(T("fr-FR", "en-GB"), { weekday: "long", day: "numeric", month: "long" });
    const tick = () => {
      const now = new Date(), d = fmt.format(now);
      foot.querySelector(".sf-date").textContent = d.charAt(0).toUpperCase() + d.slice(1);
      foot.querySelector(".sf-clock").textContent = now.toLocaleTimeString(T("fr-FR", "en-GB"));
    };
    tick(); setInterval(tick, 1000);
  }
})();

// Applique l'image ou la couleur d'un projet à un élément
function paint(el, p) {
  if (p.image) {
    el.style.backgroundImage = `url("${p.image}")`;
    el.classList.add("has-image");
  } else {
    el.style.backgroundColor = p.color;
    const hex = p.color.replace("#", "");
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.substr(i, 2), 16));
    if ((r * 299 + g * 587 + b * 114) / 1000 > 160) el.classList.add("light");
  }
}

// ----- Curseur : mini point rouge qui laisse derrière lui un fil rouge, comme un trait de stylo, qui s'efface vite -----
(function () {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return; // pas sur écran tactile
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const cv = document.createElement("canvas");
  cv.className = "cursor-trail";
  document.body.append(cv, dot);
  document.documentElement.classList.add("has-cursor");
  const ctx = cv.getContext("2d");
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize(); addEventListener("resize", resize);

  const LIFE = 650;          // durée de vie du fil (ms)
  const pts = [];
  let x = -100, y = -100;
  addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    pts.push({ x, y, t: performance.now() });
    document.documentElement.classList.add("cursor-on");
    const t = e.target.closest && e.target.closest("a, button, [role=button], [data-p], label, select, input, textarea, .card, .lib-card, .gal-thumb");
    document.documentElement.classList.toggle("cursor-hover", !!t);
  });
  document.addEventListener("mouseleave", () => document.documentElement.classList.remove("cursor-on"));

  let drawn = false;
  const loop = () => {
    const now = performance.now();
    while (pts.length && now - pts[0].t > LIFE) pts.shift();
    dot.style.transform = `translate(${x}px, ${y}px)`;
    if (pts.length > 1 || drawn) {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.strokeStyle = "#cc3333";
      // trait lissé (milieux des segments) dont l'opacité et l'épaisseur diminuent avec l'âge
      for (let i = 1; i < pts.length - 1; i++) {
        const a = pts[i - 1], b = pts[i], c2 = pts[i + 1];
        const life = 1 - (now - b.t) / LIFE;
        ctx.globalAlpha = Math.max(0, life) * 0.9;
        ctx.lineWidth = 0.6 + 1.2 * life;
        ctx.beginPath();
        ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
        ctx.quadraticCurveTo(b.x, b.y, (b.x + c2.x) / 2, (b.y + c2.y) / 2);
        ctx.stroke();
      }
      if (pts.length > 1) {
        const p = pts[pts.length - 2], q = pts[pts.length - 1];
        ctx.globalAlpha = 0.9; ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.moveTo((p.x + q.x) / 2, (p.y + q.y) / 2); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
      drawn = pts.length > 1;
    }
    requestAnimationFrame(loop);
  };
  loop();
})();

// ----- Mouvements : apparition des éléments au défilement, titres lettre par lettre, transition entre les pages -----
(function () {
  const root = document.documentElement;
  if (root.classList.contains("embed") || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // transition de sortie : la page s'efface en remontant, puis on change de page
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || (url.pathname === location.pathname && url.search === location.search)) return;
    e.preventDefault();
    root.classList.add("leaving");
    setTimeout(() => (location.href = url.href), 520);
  });
  addEventListener("pageshow", () => root.classList.remove("leaving"));   // retour arrière : on réaffiche la page

  // une fois le contenu de la page construit (les scripts de page s'exécutent avant DOMContentLoaded)
  document.addEventListener("DOMContentLoaded", () => {
    // grands titres : chaque lettre tombe à sa place avec un petit rebond
    document.querySelectorAll(".cv h2, .contact-page h1").forEach((h) => {
      const txt = h.textContent;
      h.setAttribute("aria-label", txt);
      h.classList.add("split");
      h.innerHTML = [...txt].map((c, i) => (c === " " ? " " : `<span class="ch" aria-hidden="true" style="--i:${i}">${c}</span>`)).join("");
    });
    // blocs qui descendent en douceur quand ils arrivent à l'écran, l'un après l'autre
    const items = document.querySelectorAll(
      ".cv h2, .job, .edu-group, .lang, #contact + .body > *, .kw-row, .about-headline, .diptych, .contact-page > *, .site-footer > div"
    );
    items.forEach((el) => el.classList.add("rv"));
    const start = () => {
      const io = new IntersectionObserver((entries) => {
        let n = 0;
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.style.setProperty("--rd", n++ * 90 + "ms");
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      items.forEach((el) => io.observe(el));
    };
    // sur l'accueil, on attend que le rideau noir soit tombé
    if (document.getElementById("splash") && root.classList.contains("splash-running")) document.addEventListener("splash-done", start, { once: true });
    else start();
  });
})();

// ----- Page unique : le repère de l'en-tête suit la section affichée (À propos, CV, Contact) -----
document.addEventListener("DOMContentLoaded", () => {
  const crumb = document.querySelector(".header .crumb");
  const secs = [...document.querySelectorAll("[data-crumb], #contact")];
  if (!crumb || !secs.length) return;
  const label = crumb.lastChild;
  const update = () => {
    const y = innerHeight * 0.35;
    let cur = secs[0];
    secs.forEach((s) => { if (s.getBoundingClientRect().top < y) cur = s; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = secs[secs.length - 1];   // tout en bas : dernière section
    const name = cur.id === "contact" ? "Contact" : cur.dataset.crumb;
    if (label.textContent !== name) label.textContent = name;
  };
  addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  update();
});

// ----- Défilement doux : la page glisse avec une légère inertie (molette et pavé tactile) -----
(function () {
  const root = document.documentElement;
  if (!window.Lenis || root.classList.contains("embed") || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true, anchors: { offset: -70 } });
  window.lenis = lenis;
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  // pas de défilement de la page derrière l'écran d'arrivée, le menu ou une fiche projet
  const sync = () => {
    const lock = root.classList.contains("splash-running") || root.classList.contains("proj-open") || document.body.classList.contains("menu-open");
    lock ? lenis.stop() : lenis.start();
  };
  new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ["class"] });
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  // liens du menu vers une section de la page (index.html#parcours…) : on glisse jusqu'à elle
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
    const target = document.querySelector(url.hash);
    if (!target) return;
    e.preventDefault();
    document.body.classList.remove("menu-open");
    setTimeout(() => lenis.scrollTo(target, { offset: -70, duration: 1.4 }), 50);
    history.replaceState(null, "", url.hash);
  });
})();

// ----- CV : les tirets apparaissent un à un en descendant, et le fil rouge de chaque expérience suit la lecture -----
document.addEventListener("DOMContentLoaded", () => {
  const jobs = [...document.querySelectorAll(".job")];
  if (!jobs.length) return;
  const items = document.querySelectorAll(".job .role li");
  const io = new IntersectionObserver((entries) => {
    let n = 0;
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      setTimeout(() => en.target.classList.add("seen"), n++ * 160);
      io.unobserve(en.target);
    });
  }, { rootMargin: "0px 0px -16% 0px", threshold: 1 });
  items.forEach((li) => io.observe(li));
  // progression : 0 quand le haut de l'expérience arrive au milieu de l'écran, 1 quand son bas y passe
  const update = () => {
    const mid = innerHeight * 0.6;
    jobs.forEach((j) => {
      const r = j.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (mid - r.top) / Math.max(1, r.height - 40)));
      j.style.setProperty("--p", p.toFixed(3));
    });
  };
  addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  addEventListener("resize", update);
  update();
});
