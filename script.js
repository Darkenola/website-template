// SKYZON DEVELOPMENT: Template vitrin verileri
const templates = [
  { id: 1, folder: "template-1", title: "Warm Glass", summary: "Sıcak tonlu, cam etkili ve yumuşak kart yapısı.", mainTag: "Light", tags: ["light", "soft", "portfolio"] },
  { id: 2, folder: "template-2", title: "Dark Tech", summary: "Keskin hatlı, koyu ve teknik panel hissi veren tasarım.", mainTag: "Dark", tags: ["dark", "tech", "dashboard"] },
  { id: 3, folder: "template-3", title: "Playful Collage", summary: "Renkli kolaj, sticker ve polaroid havası.", mainTag: "Colorful", tags: ["colorful", "playful", "creative"] },
  { id: 4, folder: "template-4", title: "Brutalist Poster", summary: "Kalın çizgili, sert ve afiş gibi duran düzen.", mainTag: "Poster", tags: ["poster", "bold", "minimal"] },
  { id: 5, folder: "template-5", title: "Field Notes", summary: "Doğal tonlu, günlük ve kartpostal hissi.", mainTag: "Editorial", tags: ["editorial", "organic", "journal"] },
  { id: 6, folder: "template-6", title: "Retro Terminal", summary: "CRT hissi taşıyan retro komut satırı tasarımı.", mainTag: "Hacker", tags: ["hacker", "terminal", "dark"] },
  { id: 7, folder: "template-7", title: "Refined Luxury", summary: "Sessiz lüks, rafine tipografi ve geniş boşluklar.", mainTag: "Editorial", tags: ["editorial", "luxury", "light"] },
  { id: 8, folder: "template-8", title: "Magazine Grid", summary: "Dergi-gazete düzeni ve editorial başlık akışı.", mainTag: "Editorial", tags: ["editorial", "magazine", "grid"] },
  { id: 9, folder: "template-9", title: "Festival Poster", summary: "Parlak renkli, afiş ve etkinlik hissi taşıyan tasarım.", mainTag: "Colorful", tags: ["poster", "colorful", "bold"] },
  { id: 10, folder: "template-10", title: "Soft Dark Cinema", summary: "Yumuşak koyu tema, sisli ışıklar ve sinematik paneller.", mainTag: "Dark", tags: ["dark", "cinematic", "soft"] },
  { id: 11, folder: "template-11", title: "Notebook", summary: "Çizgili sayfa ve kişisel defter hissi veren tasarım.", mainTag: "Light", tags: ["light", "notebook", "journal"] },
  { id: 12, folder: "template-12", title: "Neon Cyber", summary: "Neon mor-camgöbeği vurgulu cyber görünüm.", mainTag: "Hacker", tags: ["hacker", "cyber", "neon"] },
  { id: 13, folder: "template-13", title: "Swiss Minimal", summary: "Siyah-beyaz, keskin ve yüksek okunurluklu düzen.", mainTag: "Minimal", tags: ["minimal", "light", "grid"] },
  { id: 14, folder: "template-14", title: "Travel Scrapbook", summary: "Kartpostal ve bilet notları gibi duran sıcak yapı.", mainTag: "Creative", tags: ["creative", "scrapbook", "light"] },
  { id: 15, folder: "template-15", title: "Coastal Pastel", summary: "Yaz akşamı tonlarında ferah ve açık bir tema.", mainTag: "Light", tags: ["light", "pastel", "soft"] },
  { id: 16, folder: "template-16", title: "Art Deco", summary: "Altın çizgili, simetrik ve lüks etkili görünüm.", mainTag: "Luxury", tags: ["luxury", "dark", "ornamental"] },
  { id: 17, folder: "template-17", title: "Gaming HUD", summary: "Oyun arayüzü gibi davranan yüksek kontrastlı yapı.", mainTag: "Dark", tags: ["dark", "gaming", "hud"] },
  { id: 18, folder: "template-18", title: "Candy Bubble", summary: "Yuvarlak, neşeli ve şeker renkli baloncuk tasarımı.", mainTag: "Colorful", tags: ["colorful", "cute", "soft"] },
  { id: 19, folder: "template-19", title: "Blueprint", summary: "Mimari çizim ve plan hissi taşıyan mavi grid sistemi.", mainTag: "Technical", tags: ["technical", "blueprint", "dark"] },
  { id: 20, folder: "template-20", title: "Photo Book", summary: "Siyah-beyaz fotoğraf kitabı estetiği.", mainTag: "Minimal", tags: ["minimal", "monochrome", "editorial"] },
  { id: 21, folder: "template-21", title: "Matrix Hacker", summary: "Yeşil matrix akışı ve terminal efekti taşıyan set.", mainTag: "Hacker", tags: ["hacker", "matrix", "terminal"] },
  { id: 22, folder: "template-22", title: "Red Team Ops", summary: "Kırmızı operasyon paneli ve alarm hissi.", mainTag: "Hacker", tags: ["hacker", "red-team", "dark"] },
  { id: 23, folder: "template-23", title: "Forensic Blue", summary: "Adli analiz ekranı gibi mavi hacker teması.", mainTag: "Hacker", tags: ["hacker", "forensic", "blue"] },
  { id: 24, folder: "template-24", title: "Amber Terminal", summary: "Amber monitör tonlarında retro hacker görünümü.", mainTag: "Hacker", tags: ["hacker", "retro", "terminal"] },
  { id: 25, folder: "template-25", title: "Exploit Dashboard", summary: "Lime vurgulu koyu exploit panel düzeni.", mainTag: "Hacker", tags: ["hacker", "dashboard", "dark"] },
];

// SKYZON DEVELOPMENT: Filtre tanimlari
const filters = [
  { label: "Hepsi", value: "all" },
  { label: "Hacker", value: "hacker" },
  { label: "Koyu", value: "dark" },
  { label: "Açık", value: "light" },
  { label: "Editoryal", value: "editorial" },
  { label: "Renkli", value: "colorful" },
  { label: "Minimal", value: "minimal" },
];

const searchInput = document.getElementById("searchInput");
const filterBar = document.getElementById("filterBar");
const templateGrid = document.getElementById("templateGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

let activeFilter = "all";
let searchTerm = "";

// SKYZON DEVELOPMENT: Filtre dugmelerini olustur
function renderFilters() {
  filterBar.innerHTML = "";
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${filter.value === activeFilter ? " active" : ""}`;
    button.textContent = filter.label;
    button.addEventListener("click", () => {
      activeFilter = filter.value;
      renderFilters();
      renderTemplates();
    });
    filterBar.appendChild(button);
  });
}

// SKYZON DEVELOPMENT: Kart HTML uretimi
function createTemplateCard(template) {
  const article = document.createElement("article");
  article.className = "template-card";

  const templatePath = `${template.folder}/index.html`;
  const tagsMarkup = template.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  article.innerHTML = `
    <a class="preview-link" href="${templatePath}" data-preview-link>
      <div class="preview-viewport">
        <div class="preview-skeleton">Önizleme yükleniyor...</div>
        <iframe
          class="preview-frame"
          title="${template.title} önizleme"
          loading="lazy"
          data-src="${templatePath}"
        ></iframe>
        <div class="preview-overlay">Canlı önizlemeyi aç</div>
      </div>
    </a>
    <div class="card-head">
      <span class="card-number">TEMPLATE ${template.id}</span>
      <span class="main-tag">${template.mainTag}</span>
    </div>
    <div>
      <h2>${template.title}</h2>
      <p>${template.summary}</p>
    </div>
    <div class="tag-list">${tagsMarkup}</div>
    <div class="action-row">
      <a class="primary" href="${templatePath}">Aç</a>
      <a href="${templatePath}" target="_blank" rel="noreferrer">Yeni Sekme</a>
    </div>
  `;

  return article;
}

// SKYZON DEVELOPMENT: Arama ve filtreleme
function getFilteredTemplates() {
  return templates.filter((template) => {
    const matchesFilter =
      activeFilter === "all" || template.tags.includes(activeFilter);

    const haystack = [
      template.title,
      template.folder,
      template.summary,
      template.mainTag,
      ...template.tags,
      `template ${template.id}`,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = haystack.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
}

// SKYZON DEVELOPMENT: Lazy iframe onizleme yukleyici
function bindPreviewFrames() {
  const previewLinks = [...document.querySelectorAll("[data-preview-link]")];

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = entry.target;
        const frame = link.querySelector(".preview-frame");
        if (frame && !frame.src) {
          frame.src = frame.dataset.src;
          frame.addEventListener(
            "load",
            () => {
              link.classList.add("loaded");
            },
            { once: true }
          );
        }
        instance.unobserve(link);
      });
    },
    { rootMargin: "180px 0px" }
  );

  previewLinks.forEach((link) => observer.observe(link));
}

// SKYZON DEVELOPMENT: Kart gridini ciz
function renderTemplates() {
  const filtered = getFilteredTemplates();
  templateGrid.innerHTML = "";

  filtered.forEach((template) => {
    templateGrid.appendChild(createTemplateCard(template));
  });

  resultCount.textContent = `${filtered.length} template`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  bindPreviewFrames();
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderTemplates();
});

renderFilters();
renderTemplates();
