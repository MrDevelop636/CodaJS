const CodaJS = (() => {
  // Selektor
  const c = (selector) => document.querySelectorAll(selector);

  // Event listener
  const on = (selector, event, callback) => {
    c(selector).forEach(el => el.addEventListener(event, callback));
  };

  // Klasy CSS
  const addClass = (selector, className) => {
    c(selector).forEach(el => el.classList.add(className));
  };

  const removeClass = (selector, className) => {
    c(selector).forEach(el => el.classList.remove(className));
  };

  // Tworzenie elementów
  const create = (tag, options = {}) => {
    const el = document.createElement(tag);

    if (options.id) el.id = options.id;
    if (options.class) el.className = options.class;
    if (options.text) el.textContent = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.attrs) {
      for (let attr in options.attrs) {
        el.setAttribute(attr, options.attrs[attr]);
      }
    }
    if (options.on) {
      for (let evt in options.on) {
        el.addEventListener(evt, options.on[evt]);
      }
    }

    return el;
  };

  // Dodawanie elementu do rodzica
  const append = (parentSelector, element) => {
    const parents = c(parentSelector);
    parents.forEach(p => p.appendChild(element));
  };

  return { c, on, addClass, removeClass, create, append };
})();
CodaJS.registerModule('dom', '/js/modules/coda-dom.js');
CodaJS.registerModule('ajax', '/js/modules/coda-ajax.js');
CodaJS.registerModule('animations', '/js/modules/coda-anim.js');
