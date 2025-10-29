 // Helper do przypisywania stylów w JS
function setStyles(element, styles) {
  Object.assign(element.style, styles);
}

// Funkcja tworząca profesjonalny badge
function createBadge(options = {}) {
  const badge = document.createElement('div');
  badge.textContent = options.text || 'Powered by Coda';
  document.body.appendChild(badge);
if (options.titleSuffix) {
  const currentTitle = document.title;
  if (!currentTitle.endsWith(options.titleSuffix)) {
    document.title = currentTitle + '  ' + options.titleSuffix;
  }
}

  // Domyślne style
  const defaultStyles = {
    position: 'fixed',
    bottom: options.bottom || '20px',
    right: options.right || '20px',
    padding: options.padding || '10px 25px',
    borderRadius: options.borderRadius || '8px',
    background: options.background || 'linear-gradient(135deg, #7ab8cc, #e8a0c4)',
    color: options.color || '#0f0f0f',
    fontSize: options.fontSize || '0.9rem',
    fontWeight: options.fontWeight || '600',
    textTransform: options.textTransform || 'uppercase',
    letterSpacing: options.letterSpacing || '1px',
    textAlign: 'center',
    boxShadow: options.boxShadow || '0 3px 10px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease',
    zIndex: '9999'
  };
  setStyles(badge, defaultStyles);

  // Hover efekty
  badge.addEventListener('mouseenter', () => {
    setStyles(badge, {
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: '0 5px 14px rgba(0,0,0,0.6)',
      background: options.hoverBackground || 'linear-gradient(135deg, #e8a0c4, #7ab8cc)'
    });
  });

  badge.addEventListener('mouseleave', () => {
    setStyles(badge, {
      transform: 'translateY(0) scale(1)',
      boxShadow: defaultStyles.boxShadow,
      background: defaultStyles.background
    });
  });

  return badge;
}

// Tworzymy badge
createBadge({
  titleSuffix: 'CodaJS',
  text: 'Powered by Coda',
  bottom: '20px',
  right: '20px',
  background: 'linear-gradient(135deg, #7ab8cc, #e8a0c4)',
  hoverBackground: 'linear-gradient(135deg, #e8a0c4, #7ab8cc)'
});

