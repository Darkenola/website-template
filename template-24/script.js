// SKYZON DEVELOPMENT: Amber rain ve yazi efekti
(function () {
  const config = {
    color: "rgba(255,183,94,0.82)",
    fade: "rgba(8,5,2,0.18)",
    chars: "0123456789ARCBOOTLOG[]{}+-=/",
    fontSize: 18,
    resetChance: 0.026,
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
    opacity: "0.36",
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
    drops = Array.from({ length: Math.ceil(width / config.fontSize) }, () => Math.random() * -35);
  }

  function animate() {
    ctx.fillStyle = config.fade;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = config.color;
    ctx.font = `${config.fontSize}px "IBM Plex Mono", monospace`;
    drops.forEach((drop, index) => {
      const char = config.chars[Math.floor(Math.random() * config.chars.length)];
      const x = index * config.fontSize;
      const y = drop * config.fontSize;
      ctx.fillText(char, x, y);
      drops[index] = y > height && Math.random() < config.resetChance ? 0 : drop + 1;
    });
    requestAnimationFrame(animate);
  }

  const headline = document.querySelector(".hero h1");
  if (headline) {
    const text = headline.textContent;
    headline.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      headline.textContent += text[i] || "";
      i += 1;
      if (i > text.length) clearInterval(timer);
    }, 24);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
})();
