// SKYZON DEVELOPMENT: Forensic rain ve baslik efekti
(function () {
  const config = {
    color: "rgba(110,198,255,0.82)",
    fade: "rgba(6,11,18,0.18)",
    chars: "ABCDEF0123456789[]{}:.netpacket",
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
    opacity: "0.34",
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
    ctx.font = `${config.fontSize}px "Roboto Mono", monospace`;

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
    const fullText = headline.textContent;
    headline.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      headline.textContent += fullText[i] || "";
      i += 1;
      if (i > fullText.length) clearInterval(timer);
    }, 20);
  }

  resize();
  animate();
  window.addEventListener("resize", resize);
})();
