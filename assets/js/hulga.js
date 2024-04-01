{{- if .Site.Params.darkToggle -}}
// dark toggle
const rel = document.documentElement;
const menus = document.querySelectorAll('.theme-toggle');
const setTheme = (mode) => {
  const curr = mode || localStorage.getItem('bulma-theme') || 'system';
  if (curr === 'light' || curr === 'dark') {
    localStorage.setItem('bulma-theme', curr);
    rel.setAttribute("data-theme", curr);
  } else {
    localStorage.removeItem("bulma-theme");
    rel.removeAttribute("data-theme");
  }
  menus.forEach(el => {
    const m = el.dataset.value;
    if (m === curr) {
      el.classList.add("is-active");
    } else {
      el.classList.remove("is-active");
    }
  });
};
{{- end -}}
// navbar related js
document.addEventListener('DOMContentLoaded', () => {
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  burgers.forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  {{- if .Site.Params.darkToggle -}}
  setTheme();
  menus.forEach( el => {
    el.addEventListener('click', () => {
      const mode = el.dataset.value;
      setTheme(mode);
    });
  });
  {{- end -}}
});

// activate back to top
addBackToTop({
  diameter: 42,
  innerHTML: '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
});
