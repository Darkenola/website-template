// SKYZON DEVELOPMENT: Matrix rain ve yazi akisi
(function () {
  const settings = {
    color: "rgba(137,255,159,0.8)",
    fade: "rgba(3,8,5,0.18)",
    chars: "01<>[]{}#@$%&*+-=/rootsudo",
    fontSize: 18,
    resetChance: 0.025,
  };

  const shell = document.querySelector(".shell");
  if (shell) {
    shell.style.position = "relative";
    shell.style.zIndex = "1";
  }
  document.body.style.overflowX = "hidden";

  const canvas = document.createElement("canvas");
  canvas.className = "fx-canvas";
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: "0.45",
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
    const columns = Math.ceil(width / settings.fontSize);
    drops = Array.from({ length: columns }, () => Math.random() * -40);
  }

  function tick() {
    ctx.fillStyle = settings.fade;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = settings.color;
    ctx.font = `${settings.fontSize}px "Share Tech Mono", monospace`;

    drops.forEach((drop, index) => {
      const char = settings.chars[Math.floor(Math.random() * settings.chars.length)];
      const x = index * settings.fontSize;
      const y = drop * settings.fontSize;
      ctx.fillText(char, x, y);
      drops[index] = y > height && Math.random() < settings.resetChance ? 0 : drop + 1;
    });

    requestAnimationFrame(tick);
  }

  // SKYZON DEVELOPMENT: Baslik yazma efekti
  function typeHeadline() {
    const headline = document.querySelector(".hero h1");
    if (!headline) return;
    const text = headline.textContent;
    headline.textContent = "";
    let pointer = 0;
    const timer = setInterval(() => {
      headline.textContent += text[pointer] || "";
      pointer += 1;
      if (pointer > text.length) clearInterval(timer);
    }, 22);
  }

  resize();
  typeHeadline();
  tick();
  window.addEventListener("resize", resize);
})();
