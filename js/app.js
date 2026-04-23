// Данные инструментов (доступны помощнику через window.TOOLS)
window.TOOLS = [
  { name: "ChatGPT", category: "Текст и ресёрч", vpn: "yes", rating: 10, description: "Универсальный центр работы: тексты, анализ, код, таблицы, файлы, изображения, презентации, прототипы.", links: { site: "https://chat.openai.com", api: "https://platform.openai.com" } },
  { name: "Claude", category: "Текст и ресёрч", vpn: "yes", rating: 10, description: "Длинные документы, регламенты, политики, аналитика, чистый язык, логика без лишнего шума.", links: { site: "https://claude.ai" } },
  { name: "GigaChat", category: "Текст и ресёрч", vpn: "no", rating: 8, description: "Русский язык, российский контекст, быстрые бытовые и корпоративные задачи, генерация текста и изображений.", links: { site: "https://gigachat.sberbank.ru" } },
  { name: "Lovable", category: "Сайты и MVP", vpn: "no", rating: 9, description: "Быстрые MVP, веб-приложения, full-stack разработка на естественном языке. AI app builder.", links: { site: "https://lovable.dev" } },
  { name: "v0 by Vercel", category: "Сайты и MVP", vpn: "yes", rating: 9, description: "Landing pages, frontend-прототипы, dashboards. Быстрый путь от идеи к working app.", links: { site: "https://v0.dev" } },
  { name: "Gamma", category: "Презентации", vpn: "no", rating: 8.5, description: "Презентации, документы, мини-сайты, pitch decks, учебные блоки, экспорт в PPT и PDF.", links: { site: "https://gamma.app" } },
  { name: "Canva AI", category: "Презентации", vpn: "no", rating: 8, description: "Дизайн, слайды, соцсети, лендинги, брендовый визуал, AI-дизайн внутри привычного редактора.", links: { site: "https://canva.com" } },
  { name: "Midjourney", category: "Изображения", vpn: "yes", rating: 8.5, description: "Художественные изображения, стилизованные материалы, маркетинг, креатив, баннеры, иллюстрации.", links: { site: "https://midjourney.com" } },
  { name: "Kandinsky", category: "Изображения", vpn: "no", rating: 7.5, description: "Русскоязычная генерация изображений, локальные сценарии, бесплатный доступ.", links: { site: "https://fusionbrain.ai" } },
  { name: "HeyGen", category: "Видео", vpn: "maybe", rating: 8.5, description: "Аватары, дубляж, локализация, обучающие ролики, говорящие персонажи.", links: { site: "https://heygen.com" } },
  { name: "n8n", category: "Автоматизация", vpn: "no", rating: 7, description: "Интеграции, RAG-боты, пайплайны, агенты, уведомления, HR/Legal/Finance workflows.", links: { site: "https://n8n.io" } },
  { name: "Qwen локально", category: "Локальный контур", vpn: "no", rating: 8.5, description: "Корпоративные ассистенты внутри контура, RAG, документооборот, закрытые knowledge-системы.", links: { site: "https://qwenlm.github.io" } }
];

const grid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const vpnFilter = document.getElementById('vpnFilter');
const resetBtn = document.getElementById('resetBtn');

function getVPNBage(vpn) {
  const map = { no: ['✅ Без VPN', 'vpn-no'], yes: ['❌ Требуется VPN', 'vpn-yes'], maybe: ['⚠️ Нестабильно', 'vpn-maybe'] };
  const [text, cls] = map[vpn] || ['❓', 'vpn-maybe'];
  return `<span class="badge ${cls}">${text}</span>`;
}

function renderCard(tool) {
  const linksHtml = Object.entries(tool.links)
    .map(([key, url]) => `<a href="${url}" target="_blank">${key === 'site' ? '🌐 Сайт' : '🔌 API'}</a>`)
    .join(' ');
  
  const fillWidth = (tool.rating / 10) * 100;
  
  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${tool.name}</div>
        <span class="badge category">${tool.category}</span>
      </div>
      ${getVPNBage(tool.vpn)}
      <div class="card-desc">${tool.description}</div>
      <div class="card-meta">
        <div class="rating">
          <div class="rating-bar"><div class="rating-fill" style="width:${fillWidth}%"></div></div>
          <span>${tool.rating}/10</span>
        </div>
        <div class="links">${linksHtml}</div>
      </div>
    </div>
  `;
}

function filterTools() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const vpn = vpnFilter.value;

  const filtered = window.TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query);
    const matchesCategory = !category || tool.category === category;
    const matchesVPN = !vpn || tool.vpn === vpn;
    return matchesSearch && matchesCategory && matchesVPN;
  });

  grid.innerHTML = filtered.length 
    ? filtered.map(renderCard).join('')
    : '<div class="card" style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-secondary)">😕 Ничего не найдено. Попробуйте изменить фильтры.</div>';
}

searchInput?.addEventListener('input', filterTools);
categoryFilter?.addEventListener('change', filterTools);
vpnFilter?.addEventListener('change', filterTools);
resetBtn?.addEventListener('click', () => {
  searchInput.value = '';
  categoryFilter.value = '';
  vpnFilter.value = '';
  filterTools();
});

if (grid) filterTools();
