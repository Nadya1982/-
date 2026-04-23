const assistantBtn = document.getElementById('assistantBtn');
const assistantFloat = document.getElementById('assistantFloat');
const assistantClose = document.getElementById('assistantClose');
const assistantWidget = document.getElementById('assistantWidget');
const assistantChat = document.getElementById('assistantChat');
const assistantMessage = document.getElementById('assistantMessage');
const assistantSend = document.getElementById('assistantSend');

const quickReplies = ["Без VPN из РФ", "Для презентаций", "Генерация картинок", "Лучшие по рейтингу", "Создание сайтов"];

function toggleAssistant() {
  assistantWidget?.classList.toggle('visible');
  if (assistantWidget?.classList.contains('visible')) addMessage("👋 Привет! Я помогу выбрать ИИ-инструмент. Что ищешь?", false, true);
}

function addMessage(text, isUser = false, showQuick = false) {
  if (!assistantChat) return;
  const msg = document.createElement('div');
  msg.className = `message ${isUser ? 'user' : 'bot'}`;
  msg.innerHTML = text.replace(/\n/g, '<br>');
  assistantChat.appendChild(msg);

  if (showQuick && !isUser) {
    const qr = document.createElement('div');
    qr.className = 'quick-replies';
    quickReplies.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'quick-btn';
      btn.textContent = q;
      btn.onclick = () => { assistantMessage.value = q; handleSend(); };
      qr.appendChild(btn);
    });
    assistantChat.appendChild(qr);
  }

  assistantChat.scrollTop = assistantChat.scrollHeight;
}

function showTyping() {
  const el = document.createElement('div');
  el.className = 'typing bot';
  el.id = 'typing';
  el.innerHTML = '<span></span><span></span><span></span>';
  assistantChat.appendChild(el);
  assistantChat.scrollTop = assistantChat.scrollHeight;
}

function hideTyping() { document.getElementById('typing')?.remove(); }

function analyzeQuery(q) {
  const lower = q.toLowerCase();
  const tools = window.TOOLS || [];
  let response = "🤔 Не совсем понял. Попробуй: «без VPN», «для презентаций», «лучшие», «генерация картинок».";
  let matched = false;

  // Интенты
  if (/привет|здравствуй|хай|добрый/.test(lower)) {
    response = "👋 Рад помочь! Спроси про доступность, категории или рейтинги.";
    matched = true;
  } else if (/помощь|как|гайд|инструк/.test(lower)) {
    response = "💡 Используй поиск сверху, фильтры по VPN и категории. Я тоже могу подсказать! Например: «покажи инструменты без VPN для видео».";
    matched = true;
  } else if (/категории|разделы|типы/.test(lower)) {
    const cats = [...new Set(tools.map(t => t.category))];
    response = "📁 Доступные категории:\n• " + cats.join("\n• ");
    matched = true;
  } else if (/без vpn|работает.*росс|доступн.*рф/.test(lower)) {
    const free = tools.filter(t => t.vpn === 'no');
    response = free.length ? "✅ Работают без VPN:\n" + free.map(t => `• ${t.name} (${t.category})`).join("\n") : "К сожалению, таких нет.";
    matched = true;
  } else if (/лучший|топ|рейтинг/.test(lower)) {
    const top = [...tools].sort((a,b) => b.rating - a.rating).slice(0,3);
    response = "🏆 Топ-3 по рейтингу:\n" + top.map((t,i) => `${i+1}. ${t.name} (${t.rating}/10) — ${t.vpn==='no'?'✅ без VPN':'❌ нужен VPN'}`).join("\n");
    matched = true;
  } else if (/презентац|слайд|pitch/.test(lower)) {
    const pres = tools.filter(t => t.category.includes("Презент"));
    response = pres.length ? "📊 Для презентаций:\n" + pres.map(t => `• ${t.name}: ${t.description}`).join("\n") : "Не нашёл.";
    matched = true;
  } else if (/картинк|изображ|арт|генераци.*изображ/.test(lower)) {
    const img = tools.filter(t => t.category.includes("Изображ"));
    response = img.length ? "🎨 Для генерации:\n" + img.map(t => `• ${t.name} (${t.vpn==='no'?'✅ без VPN':'❌ VPN'}): ${t.description}`).join("\n") : "Не нашёл.";
    matched = true;
  } else if (/видео|ролик|аватар/.test(lower)) {
    const vid = tools.filter(t => t.category.includes("Видео"));
    response = vid.length ? "🎬 Для видео:\n" + vid.map(t => `• ${t.name}: ${t.description}`).join("\n") : "Не нашёл.";
    matched = true;
  } else if (/сайт|приложен|код|лоябл|v0/.test(lower)) {
    const dev = tools.filter(t => t.category.includes("Сайт"));
    response = dev.length ? "💻 Для разработки:\n" + dev.map(t => `• ${t.name}: ${t.description}`).join("\n") : "Не нашёл.";
    matched = true;
  }

  // Динамический поиск по названию/описанию, если интент не сработал
  if (!matched) {
    const found = tools.filter(t => t.name.toLowerCase().includes(lower) || t.description.toLowerCase().includes(lower));
    if (found.length > 0 && found.length <= 3) {
      response = "🔍 Нашёл:\n" + found.map(t => `• **${t.name}** (${t.category}, ${t.rating}/10)\n  ${t.description}`).join("\n");
      matched = true;
    }
  }

  return response;
}

function handleSend() {
  const text = assistantMessage?.value.trim();
  if (!text) return;

  addMessage(text, true);
  assistantMessage.value = '';

  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage(analyzeQuery(text), false);
  }, 400 + Math.random() * 600);
}

assistantBtn?.addEventListener('click', toggleAssistant);
assistantFloat?.addEventListener('click', toggleAssistant);
assistantClose?.addEventListener('click', toggleAssistant);
assistantSend?.addEventListener('click', handleSend);
assistantMessage?.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(); });
