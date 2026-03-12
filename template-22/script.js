// SKYZON DEVELOPMENT: Red team rain ve yazi efekti
(function () {
  const settings = {
    color: "rgba(255,86,86,0.82)",
    fade: "rgba(9,3,4,0.18)",
    chars: "ALERTROOTSHELL01[]{}#%*+-=/",
    fontSize: 18,
    resetChance: 0.03,
  };

  const shell = document.querySelector(".shell");
  if (shell) {
    shell.style.position = "relative";
    shell.style.zIndex = "1";
  }
  document.body.style.overflowX = "hidden";

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: "0.38",
    zIndex: "0",
  });
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let drops = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    drops = Array.from({ length: Math.ceil(width / settings.fontSize) }, () => Math.random() * -35);
  }

  function frame() {
    ctx.fillStyle = settings.fade;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = settings.color;
    ctx.font = `${settings.fontSize}px "JetBrains Mono", monospace`;

    drops.forEach((drop, index) => {
      const char = settings.chars[Math.floor(Math.random() * settings.chars.length)];
      const x = index * settings.fontSize;
      const y = drop * settings.fontSize;
      ctx.fillText(char, x, y);
      drops[index] = y > height && Math.random() < settings.resetChance ? 0 : drop + 1;
    });

    requestAnimationFrame(frame);
  }

  // SKYZON DEVELOPMENT: Baslik daktilo efekti
  const headline = document.querySelector(".hero h1");
  if (headline) {
    const fullText = headline.textContent;
    headline.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      headline.textContent += fullText[i] || "";
      i += 1;
      if (i > fullText.length) clearInterval(timer);
    }, 18);
  }

  resize();
  frame();
  window.addEventListener("resize", resize);
})();
