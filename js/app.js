window.TOOLS = [
  // 1. Текст и ресёрч
  { name: "ChatGPT", category: "Текст и ресёрч", vpn: "yes", rating: 10, description: "Универсальный центр работы: тексты, анализ, код, таблицы, файлы, изображения, презентации, прототипы.", links: { site: "https://chatgpt.com" } },
  { name: "Claude", category: "Текст и ресёрч", vpn: "yes", rating: 10, description: "Длинные документы, регламенты, политики, программы обучения, аккуратные тексты, логика, аналитика.", links: { site: "https://claude.ai" } },
  { name: "Gemini", category: "Текст и ресёрч", vpn: "yes", rating: 9.5, description: "Поиск, логика, факты, deep research, научные темы, статистика, связка с Google Workspace.", links: { site: "https://gemini.google.com" } },
  { name: "Google AI Studio", category: "Текст и ресёрч", vpn: "yes", rating: 9, description: "Быстрые эксперименты с Gemini, multimodal-сценарии, тестирование промптов, image generation.", links: { site: "https://aistudio.google.com" } },
  { name: "Perplexity", category: "Текст и ресёрч", vpn: "maybe", rating: 9, description: "AI-поиск с источниками, факт-чекинг, конкурентные обзоры, исследовательские отчёты.", links: { site: "https://perplexity.ai" } },
  { name: "Kimi", category: "Текст и ресёрч", vpn: "maybe", rating: 9, description: "Длинные тексты, большие объёмы контекста, методички, объяснения, конспекты, research workflows.", links: { site: "https://kimi.ai" } },
  { name: "DeepSeek", category: "Текст и ресёрч", vpn: "no", rating: 8.5, description: "Сильная логика, код, математика, аналитика, черновая структурная работа, сценарии со снижением стоимости.", links: { site: "https://deepseek.com" } },
  { name: "Qwen / Qwen Chat", category: "Текст и ресёрч", vpn: "no", rating: 8.5, description: "Open-source и корпоративные сценарии, внутренние ассистенты, RAG, document processing, локальный контур.", links: { site: "https://chat.qwen.ai" } },
  { name: "Mistral AI", category: "Текст и ресёрч", vpn: "yes", rating: 8.5, description: "Европейский стек, EU-контекст, документы, многоязычность, enterprise-сценарии.", links: { site: "https://mistral.ai" } },
  { name: "GigaChat", category: "Текст и ресёрч", vpn: "no", rating: 8, description: "Русский язык, российский контекст, быстрые бытовые и корпоративные задачи, генерация текста и изображений.", links: { site: "https://gigachat.sberbank.ru" } },
  { name: "YandexGPT / Алиса", category: "Текст и ресёрч", vpn: "no", rating: 8, description: "Экосистема Яндекса, русскоязычные запросы, корпоративные сценарии, интеграции с сервисами Яндекса.", links: { site: "https://ya.ru/ai" } },

  // 2. Сайты и MVP
  { name: "Lovable", category: "Сайты и MVP", vpn: "no", rating: 9, description: "Быстрые MVP, внутренние ассистенты, интерфейсы, дашборды, full-stack разработка на естественном языке.", links: { site: "https://lovable.dev" } },
  { name: "Base44", category: "Сайты и MVP", vpn: "no", rating: 8.5, description: "Business apps, customer portals, внутренние сервисы, app builder без кода.", links: { site: "https://base44.ai" } },
  { name: "Bubble", category: "Сайты и MVP", vpn: "maybe", rating: 7.5, description: "No-code, визуальная логика, базы данных, workflows, privacy rules, web/mobile apps.", links: { site: "https://bubble.io" } },
  { name: "v0 by Vercel", category: "Сайты и MVP", vpn: "yes", rating: 9, description: "Landing pages, интерфейсы, frontend-прототипы, dashboards, быстрый путь от идеи к working app.", links: { site: "https://v0.dev" } },
  { name: "Cursor", category: "Сайты и MVP", vpn: "yes", rating: 9.5, description: "Инженерная доработка, рефакторинг, agentic coding, работа по репозиторию, программирование с AI-агентами.", links: { site: "https://cursor.com" } },
  { name: "Replit", category: "Сайты и MVP", vpn: "yes", rating: 8.5, description: "Быстрый app builder в браузере, создание и деплой прототипов без локальной настройки среды.", links: { site: "https://replit.com" } },
  { name: "Google Stitch", category: "Сайты и MVP", vpn: "yes", rating: 8.5, description: "UI-концепты для web/mobile, wireframes, high-fidelity screens, путь от идеи к интерфейсу.", links: { site: "https://stitch.google.com" } },
  { name: "Opal (Google Labs)", category: "Сайты и MVP", vpn: "yes", rating: 8.5, description: "AI mini-apps, внутренние мини-инструменты, простые агентные сервисы, demo-MVP.", links: { site: "https://labs.google" } },

  // 3. Презентации
  { name: "Gamma", category: "Презентации", vpn: "no", rating: 8.5, description: "Презентации, документы, мини-сайты, pitch decks, учебные блоки, экспорт в PPT и PDF.", links: { site: "https://gamma.app" } },
  { name: "Genspark", category: "Презентации", vpn: "yes", rating: 8.5, description: "All-in-one workspace для слайдов, документов, картинок, видео, кода и agentic-задач.", links: { site: "https://genspark.ai" } },
  { name: "Canva + Canva AI", category: "Презентации", vpn: "no", rating: 8, description: "Дизайн, маркетинговые материалы, слайды, соцсети, простые лендинги, брендовый визуал.", links: { site: "https://canva.com" } },
  { name: "Kimi (для презентаций)", category: "Презентации", vpn: "maybe", rating: 9, description: "Содержание презентаций, структура, тезисы, сценарии слайдов, методички, учебные материалы.", links: { site: "https://kimi.ai" } },
  { name: "Napkin AI", category: "Презентации", vpn: "maybe", rating: 8, description: "Превращение текста в схемы, диаграммы, визуальные объяснения, business storytelling.", links: { site: "https://napkin.ai" } },

  // 4. Изображения
  { name: "Midjourney", category: "Изображения", vpn: "yes", rating: 8.5, description: "Художественные изображения, стилизованные материалы, маркетинг, креатив, баннеры, иллюстрации.", links: { site: "https://midjourney.com" } },
  { name: "OpenAI Image", category: "Изображения", vpn: "yes", rating: 9, description: "Иконки, инфографика, обложки, иллюстрации для презентаций, понятное исполнение промпта.", links: { site: "https://chatgpt.com" } },
  { name: "Google image gen / NanoBanana", category: "Изображения", vpn: "yes", rating: 8.5, description: "Точное исполнение промпта, инфографика, визуальные эксперименты, генерация в Google-экосистеме.", links: { site: "https://aistudio.google.com" } },
  { name: "Stable Diffusion", category: "Изображения", vpn: "no", rating: 7.5, description: "Open-source, self-hosted сценарии, кастомизация, тонкая настройка, локальный контур.", links: { site: "https://stability.ai" } },
  { name: "Krea", category: "Изображения", vpn: "maybe", rating: 8, description: "Realtime-генерация, быстрые вариации, визуальный контроль, стиль, референсы.", links: { site: "https://krea.ai" } },
  { name: "Kandinsky / Fusion Brain", category: "Изображения", vpn: "no", rating: 7.5, description: "Русскоязычная генерация изображений, локальные сценарии, бесплатный доступ.", links: { site: "https://fusionbrain.ai" } },

  // 5. Видео
  { name: "HeyGen", category: "Видео", vpn: "maybe", rating: 8.5, description: "Аватары, дубляж, локализация, обучающие ролики, говорящие персонажи, корпоративные демо.", links: { site: "https://heygen.com" } },
  { name: "Pika", category: "Видео", vpn: "maybe", rating: 8, description: "Короткие стильные ролики, тизеры, анимация, ролики для слайдов и презентаций.", links: { site: "https://pika.art" } },
  { name: "Runway", category: "Видео", vpn: "yes", rating: 8.5, description: "Генерация видео, монтаж, эффекты, storytelling, motion-вставки, creative demos.", links: { site: "https://runwayml.com" } },
  { name: "Kling", category: "Видео", vpn: "yes", rating: 8, description: "Кинематографичные и более «вау»-ролики, когда нужен эффектный визуал.", links: { site: "https://klingai.com" } },
  { name: "Veo / Google video stack", category: "Видео", vpn: "yes", rating: 8.5, description: "Высококачественные видеоэксперименты внутри Google AI-экосистемы.", links: { site: "https://deepmind.google/technologies/veo" } },
  { name: "Luma", category: "Видео", vpn: "yes", rating: 8, description: "Динамичный визуальный контент, creative demos, видеогенерация, быстрые эффектные ролики.", links: { site: "https://lumalabs.ai" } },

  // 6. Автоматизация
  { name: "n8n", category: "Автоматизация", vpn: "no", rating: 7, description: "Интеграции, RAG-боты, пайплайны, агенты, уведомления, маршрутизация задач, HR/Legal workflows.", links: { site: "https://n8n.io" } },
  { name: "Make", category: "Автоматизация", vpn: "maybe", rating: 7, description: "Быстрые no-code автоматизации, визуальные сценарии, интеграции без тяжёлой инженерии.", links: { site: "https://make.com" } },
  { name: "Zapier", category: "Автоматизация", vpn: "yes", rating: 7.5, description: "Лёгкие интеграции между SaaS-сервисами, AI workflows, агенты и автоматизация западного стека.", links: { site: "https://zapier.com" } },
  { name: "Qwen (ассистенты)", category: "Автоматизация", vpn: "no", rating: 8.5, description: "Корпоративные ассистенты, локальные решения, RAG и внутренние knowledge-боты.", links: { site: "https://qwen.ai" } },
  { name: "Genspark Claw", category: "Автоматизация", vpn: "yes", rating: 8.5, description: "Выполнение задач целиком: research, docs, calendar, code, процессы и агентные сценарии.", links: { site: "https://genspark.ai" } },
  { name: "Opal (Google Labs)", category: "Автоматизация", vpn: "yes", rating: 8.5, description: "Внутренние ассистенты, mini-tools, agentic MVP, быстрые демо для бизнеса.", links: { site: "https://labs.google" } },

  // 7. Локальный контур
  { name: "LM Studio", category: "Локальный контур", vpn: "no", rating: 6.5, description: "Запуск локальных моделей, быстрые тесты open-source LLM, демонстрация контура на компьютере.", links: { site: "https://lmstudio.ai" } },
  { name: "Qwen локально", category: "Локальный контур", vpn: "no", rating: 8.5, description: "Корпоративные ассистенты внутри контура, RAG, документооборот, закрытые knowledge-системы.", links: { site: "https://qwenlm.github.io" } },
  { name: "DeepSeek локально", category: "Локальный контур", vpn: "no", rating: 8.5, description: "Недорогие корпоративные ассистенты, аналитика, код, локальный контур и чувствительные данные.", links: { site: "https://deepseek.com" } },
  { name: "Continue", category: "Локальный контур", vpn: "yes", rating: 7, description: "AI-помощник в IDE, code assistant, quality control и работа с подключёнными моделями.", links: { site: "https://continue.dev" } },

  // 8. Маркетинг
  { name: "Canva (маркетинг)", category: "Маркетинг", vpn: "no", rating: 8, description: "Маркетинговые материалы, соцсети, визуалы, брендовый контент, быстрый дизайн без дизайнера.", links: { site: "https://canva.com" } },
  { name: "Pomelli", category: "Маркетинг", vpn: "yes", rating: 8, description: "Анализ бренд-ДНК, понимание business DNA, создание on-brand контента и креативных направлений.", links: { site: "https://pomelli.com" } },
  { name: "Photoshoot (Google Labs)", category: "Маркетинг", vpn: "yes", rating: 8, description: "Превращение обычных фото товаров в более студийные и lifestyle product shots.", links: { site: "https://labs.google" } },
  { name: "Midjourney (креатив)", category: "Маркетинг", vpn: "yes", rating: 8.5, description: "Креативные визуалы, сильная эстетика, брендовый контент, арт и рекламные образы.", links: { site: "https://midjourney.com" } },
  { name: "OpenAI Image (маркетинг)", category: "Маркетинг", vpn: "yes", rating: 9, description: "Быстрые иллюстрации, инфографика, визуалы под посты, презентации и маркетинг.", links: { site: "https://chatgpt.com" } }
];

// Далее идёт код рендера и фильтров (оставь его без изменений!)
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
  searchInput.value = ''; categoryFilter.value = ''; vpnFilter.value = ''; filterTools();
});
if (grid) filterTools();
