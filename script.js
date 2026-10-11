(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const toast = $("#toast");
  let toastTimer;
  function notify(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  const profiles = {
    sam: {
      name: "سام", code: "FILE_001 // ROCK SIGNAL", color: "#ff4fd8", symbol: "♫",
      title: "وقتی حرف کم میاد، گیتار حرف می‌زنه.",
      bio: "سام از اون آدم‌هاست که یه گیتار و یه حال‌وهوای راک می‌تونه امضای حضورش باشه. رادیو هده توی این پرونده یه رفرنس موسیقیه؛ بقیه‌ی پلی‌لیست رو خود سام باید لو بده.",
      letter: "سام، اینجا یه گوشه برای توئه؛ برای سلیقه‌ی خاصت، برای انرژی باحالت و برای اون بخشی از رفاقت که لازم نیست همیشه با حرف توضیح داده بشه. <b>صداتو بلند کن، ولی خودت بمون.</b>",
      tags: ["ROCK MODE: ON", "GUITAR DETECTED", "RADIO HEDYEH VIBES"]
    },
    owin: {
      name: "اوین", code: "FILE_002 // CALM WRITER", color: "#5df5e8", symbol: "✎",
      title: "بعضیا وسط شلوغی، نقطه‌ی آرامشن.",
      bio: "اوین؛ نویسنده‌ای با ذهن اهل کلمه، انتخاب رشته‌ی انسانی و خونسردی‌ای که توی مشکلات به درد می‌خوره. از اون آدم‌هایی که حضورش می‌تونه کمک کنه مسئله‌ها یه‌کم قابل‌حل‌تر به نظر برسن.",
      letter: "اوین، شاید همیشه نشه درست گفت که کمک‌هات چقدر ارزش دارن؛ برای همین این بخش هست. ممنون که وقتی همه‌چی قاطی می‌شه، می‌تونی با آرامشت یه راهی نشون بدی. <b>دنیا به آدم‌هایی با ذهن و دل تو نیاز داره.</b>",
      tags: ["WRITER.exe", "CALM IN CHAOS", "HUMANITIES MODE"]
    },
    taghi: {
      name: "تقی‌زاده", code: "FILE_003 // CHAOS ENGINE", color: "#a58bff", symbol: "☻",
      title: "قربانی رسمی شوخی‌ها؛ رفیق واقعی روزهای سخت.",
      bio: "تقی‌زاده، طبق گزارش‌ها هدف اصلی شوخی‌ها و کل‌کل‌هاست؛ اما پشت این همه اذیت کردن، یه آدم مهربون هست که وقت سختی کنارت می‌مونه. پرونده می‌گه این تضاد، بخشی از جذابیت ماجراست.",
      letter: "تقی‌زاده، قبول دارم احتمالاً زیادی اذیتت می‌کنم؛ ولی شوخی‌ها یه طرف، معرفتت یه طرف. اینکه توی سختی‌ها پیشمی چیزی نیست که بشه با چندتا کل‌کل جاش رو پر کرد. <b>رفیق، ممنون که هستی.</b>",
      tags: ["ROAST LEVEL: HIGH", "KINDNESS DETECTED", "REAL ONE"]
    }
  };

  $$(".person-card").forEach(card => {
    card.addEventListener("click", () => {
      const p = profiles[card.dataset.person];
      if (!p) return;
      const panel = $("#profilePanel");
      panel.innerHTML = `
        <div class="profile-content" style="--card-color:${p.color}">
          <div><span class="profile-code">${p.code}</span><h3>${p.symbol} ${p.name}</h3><p>${p.title}</p>
            <div class="profile-tags">${p.tags.map(tag => `<span>${tag}</span>`).join(" · ")}</div>
          </div>
          <div><p>${p.bio}</p><div class="profile-letter">${p.letter}</div></div>
        </div>`;
      $$(".person-card").forEach(c => c.setAttribute("aria-pressed", String(c === card)));
      panel.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
    });
  });

  const archives = [
    { label:"MEMORY_001 // ORIGIN", title:"همه‌چی از یه گپ شروع شد.", body:"اسمش ساده‌ست، ولی داستانش مال خودتونه. یه فضای خصوصی برای حرف‌ها، شوخی‌ها، کل‌کل‌ها و لحظه‌هایی که لازم نیست برای هیچ‌کس دیگه توضیحشون بدین.", art:"chat", bubbles:["پیوی؟","پیوی.","همین شد اسمش؟"], stamp:"LORE UNLOCKED", status:"ONGOING" },
    { label:"MEMORY_002 // CHAOS", title:"کل‌کل؛ زبان رسمی گروه.", body:"یه شوخی کوچیک، یه جواب سریع و بعدش رشته‌ای از پیام‌ها که معلوم نیست چطور از موضوع اصلی دور شدن. اینجا هر کل‌کل یه فصل تازه‌ست؛ فقط یادتون نره مرز شوخی رو با حال همدیگه تنظیم کنین.", art:"chaos", bubbles:["من که چیزی نگفتم","همین الان گفتی!","SCREENSHOT موجوده"], stamp:"INFINITE LOOP", status:"NEVER ENDING" },
    { label:"MEMORY_003 // SUPPORT", title:"وقتی شوخی کنار می‌ره.", body:"رفاقت فقط خندیدن به همدیگه نیست. گاهی یعنی گوش دادن، موندن و کمک کردن؛ حتی وقتی هیچ جمله‌ی خفنی برای گفتن نداری. این بخش برای همون لحظه‌هاست.", art:"support", bubbles:["حالت خوبه؟","من هستم.","حرف بزن."], stamp:"REAL ONES STAY", status:"ALWAYS ON" },
    { label:"MEMORY_004 // FREQUENCIES", title:"یه طرف راک؛ یه طرف کلمه.", body:"از گیتار و حال‌وهوای راک سام تا دنیای کلمه‌های اوین و شوخی‌های تقی‌زاده؛ هرکسی یه فرکانس خودش رو داره. عجیب اینکه همین تفاوت‌ها ترکیب گروه رو می‌سازه.", art:"music", bubbles:["volume +100","یه جمله بنویس","باز شروع کردیم"], stamp:"SIGNAL FOUND", status:"MIXED SIGNAL" }
  ];
  $$(".archive-item").forEach(button => {
    button.addEventListener("click", () => {
      const item = archives[Number(button.dataset.archive)];
      if (!item) return;
      $$(".archive-item").forEach(b => b.classList.toggle("active", b === button));
      const artClass = item.art === "chat" ? "art-chat" : `art-${item.art}`;
      $("#archiveDisplay").innerHTML = `
        <span class="display-label">${item.label}</span>
        <div class="display-art ${artClass}">
          ${item.bubbles.map((b,i)=>`<span class="chat-bubble bubble-${["a","b","c"][i]}">${b}</span>`).join("")}
          <span class="chat-stamp">${item.stamp}</span>
        </div>
        <h3>${item.title}</h3><p>${item.body}</p>
        <div class="display-meta"><span>STATUS: <b>${item.status}</b></span><span>ACCESS: <b>FRIENDS ONLY</b></span></div>`;
    });
  });

  const quotes = [
    "رفاقت یعنی بتونی یکی رو تا مرز جنون مسخره کنی، ولی وقتی دنیا سخت شد، کنارش وایسی.",
    "گروه ساکته؟ یا همه دارن یه جواب خیلی خفن تایپ می‌کنن، یا خوابن. حالت سومی وجود نداره.",
    "بعضی خاطره‌ها عکس ندارن؛ فقط با گفتن یه کلمه، هر سه نفر می‌زنن زیر خنده.",
    "رفیق خوب کسیه که هم توی میم‌ها تگش کنی، هم روز سخت بتونی بهش زنگ بزنی.",
    "سه نفر، سه مدل شخصیت، و یه گروه که هیچ الگوریتمی نمی‌تونه منطقش رو بفهمه.",
    "دوستی یعنی roast کردن با عشق و حمایت کردن بدون سر و صدا."
  ];
  $("#quoteBtn").addEventListener("click", () => {
    const q = $("#friendQuote");
    let next = quotes[Math.floor(Math.random() * quotes.length)];
    if (next === q.textContent) next = quotes[(quotes.indexOf(next) + 1) % quotes.length];
    q.textContent = next;
  });

  const terminalMessages = ["loading_friendship.exe", "3 personalities detected...", "private channel: PV", "chaos level: unmeasurable", "connection: still alive"];
  let terminalIndex = 0;
  setInterval(() => {
    terminalIndex = (terminalIndex + 1) % terminalMessages.length;
    const el = $("#terminalText");
    if (el) el.textContent = terminalMessages[terminalIndex];
  }, 3200);

  $("#surpriseBtn").addEventListener("click", () => {
    const randomLines = [
      "SYSTEM: سه نفر پیدا شدن؛ منطق پیدا نشد.",
      "ALERT: سطح کل‌کل از حد مجاز عبور کرد.",
      "PV STATUS: احتمالاً یکی یه چیزی گفته و بقیه دارن جواب می‌دن.",
      "FRIENDSHIP.exe has stopped being normal. This is a feature.",
      "یادآوری سیستم: تقی‌زاده فعلاً در معرض شوخی قرار دارد."
    ];
    notify(randomLines[Math.floor(Math.random() * randomLines.length)]);
  });

  $("#glitchBtn").addEventListener("click", () => {
    document.body.classList.remove("glitch-mode");
    void document.body.offsetWidth;
    document.body.classList.add("glitch-mode");
    notify("GLITCH MODE: فعال شد ⚡");
    setTimeout(() => document.body.classList.remove("glitch-mode"), 650);
  });

  const dialog = $("#messageDialog");
  $("#finaleBtn").addEventListener("click", () => {
    $("#messageInput").value = "";
    $("#messageResult").textContent = "";
    dialog.showModal();
  });
  $("#saveMessage").addEventListener("click", event => {
    event.preventDefault();
    const value = $("#messageInput").value.trim();
    if (!value) {
      $("#messageResult").textContent = "اول یه چیزی بنویس 🙂";
      return;
    }
    $("#messageResult").textContent = `پیام ثبت شد: «${value}»`;
  });

  // Small glitch burst only; no continuous canvas or heavy animation loops.
  const style = document.createElement("style");
  style.textContent = `.glitch-mode h1,.glitch-mode .neon-text{animation:glitchBurst .16s steps(2) 3}@keyframes glitchBurst{0%{transform:translateX(0);text-shadow:2px 0 #ff4fd8,-2px 0 #5df5e8}50%{transform:translateX(2px);text-shadow:-3px 0 #ff4fd8,3px 0 #5df5e8}100%{transform:translateX(0)}}.profile-tags{font:9px var(--mono);color:var(--card-color);line-height:2;direction:ltr}.art-chaos{background:radial-gradient(circle at 50% 50%,rgba(255,79,216,.17),transparent 60%),linear-gradient(135deg,rgba(255,79,216,.06),rgba(93,245,232,.04))}.art-support{background:radial-gradient(circle at 50% 50%,rgba(93,245,232,.16),transparent 60%),linear-gradient(135deg,rgba(93,245,232,.06),rgba(155,123,255,.05))}.art-music{background:radial-gradient(circle at 50% 50%,rgba(155,123,255,.19),transparent 60%),linear-gradient(135deg,rgba(255,79,216,.05),rgba(93,245,232,.04))}`;
  document.head.appendChild(style);
})();