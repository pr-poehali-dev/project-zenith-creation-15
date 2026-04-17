export default function Index() {
  const wardrobeItems = [
    {
      id: 1,
      tag: "База №1",
      tagColor: "var(--primary)",
      tagTextColor: "white",
      emoji: "👕",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/cd8d5fb2-8e7d-4872-b9d9-8197a26b591e.png",
      name: "Белая / серая футболка",
      desc: "Универсальная основа любого образа. Подходит к джинсам, брюкам и под пиджак.",
    },
    {
      id: 2,
      tag: "База №2",
      tagColor: "var(--secondary)",
      tagTextColor: "white",
      emoji: "👖",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/150aa1f6-d5c7-472a-8479-20da13ae7665.png",
      name: "Прямые синие джинсы",
      desc: "Классика, которая никогда не выходит из моды. Работает и в школе, и на прогулке.",
    },
    {
      id: 3,
      tag: "База №3",
      tagColor: "var(--accent)",
      tagTextColor: "var(--dark)",
      emoji: "🧥",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/2338109e-2277-4b6f-9af6-2e93e69665f0.png",
      name: "Однотонная толстовка",
      desc: "Тепло + стиль. Надевай поверх футболки или под куртку — всегда выглядит аккуратно.",
    },
    {
      id: 4,
      tag: "База №4",
      tagColor: "var(--primary)",
      tagTextColor: "white",
      emoji: "🕴",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/b0a191cb-2ff2-41f0-a4da-c49b6513dd7e.png",
      name: "Пиджак или джинсовка",
      desc: "Мгновенно «поднимает» любой образ. Накинул — уже не просто футболка, а look.",
    },
    {
      id: 5,
      tag: "База №5",
      tagColor: "var(--secondary)",
      tagTextColor: "white",
      emoji: "👟",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/5b54a2ba-df7f-4eeb-844e-c3ae2dc363f4.png",
      name: "Белые кроссовки",
      desc: "Самая нейтральная обувь. Идёт буквально ко всему: джинсы, брюки, платье.",
    },
    {
      id: 6,
      tag: "База №6",
      tagColor: "var(--accent)",
      tagTextColor: "var(--dark)",
      emoji: "🧣",
      photo: "https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/989a18b6-c0fd-45ea-8dec-7f79bec02ef4.png",
      name: "Лонгслив / водолазка",
      desc: "Отличная замена футболке в холод. Можно носить отдельно или под пиджак.",
    },
  ];

  const trickItems = [
    {
      phrase: "«Лимитированная коллекция»",
      meaning: "Создаёт искусственный дефицит. На самом деле — просто маркетинг.",
    },
    {
      phrase: "«Осталось 2 штуки»",
      meaning: "Вызывает страх потери. Цель — заставить тебя купить прямо сейчас.",
    },
    {
      phrase: "«Только сегодня скидка»",
      meaning: "Давит на срочность. Проверь — скидка, скорее всего, будет и завтра.",
    },
  ];

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СТИЛЬНЫЙ*КОД</div>
        <nav>
          <a href="#why">Зачем</a>
          <a href="#wardrobe">Гардероб</a>
          <a href="#shopping">Шопинг</a>
          <a href="#style">Стиль</a>
        </nav>
        <button className="btn-cta">Начать</button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТВОЙ
              <br />
              СТИЛЬ —<span>твои правила</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Как быть собой, не тратя всё на бренды. Гид по моде для тех, кто хочет выглядеть круто — без лишних денег и чужих правил.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Начать читать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Базовый гардероб
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/4ade0cc6-5867-407c-9b08-bab0a7b76c5d.png)`,
            }}
          >
            <div className="sticker">
              БУДЬ
              <br />
              СОБОЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СВОЙСТИЛЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЕЗ ПОНТОВ
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * МОДА — ЭТО САМОВЫРАЖЕНИЕ * НЕ ПОКУПАЙСЯ НА ТРЕНДЫ * НАЙДИ СВОЙ СТИЛЬ * 10 ВЕЩЕЙ — 15 ОБРАЗОВ * СТИЛЬ БЕЗ ЛИШНИХ ТРАТ *
            МОДА — ЭТО САМОВЫРАЖЕНИЕ * НЕ ПОКУПАЙСЯ НА ТРЕНДЫ * НАЙДИ СВОЙ СТИЛЬ * 10 ВЕЩЕЙ — 15 ОБРАЗОВ * СТИЛЬ БЕЗ ЛИШНИХ ТРАТ
          </div>
        </div>

        {/* ПОЧЕМУ ЭТО ВАЖНО */}
        <section id="why" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ПОЧЕМУ ЭТО ВАЖНО?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }} className="md:grid-cols-2">
            <div
              style={{
                border: "var(--border)",
                padding: "30px",
                background: "white",
                boxShadow: "var(--shadow)",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>💬</div>
              <h3
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Одежда — это язык
              </h3>
              <p style={{ lineHeight: 1.7, color: "#444" }}>
                Внешний вид — наш первый способ общения. Мы «рассказываем» о себе ещё до того, как начали говорить. Каждый образ — это твоё сообщение миру.
              </p>
            </div>
            <div
              style={{
                border: "var(--border)",
                padding: "30px",
                background: "var(--accent)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>💪</div>
              <h3
                style={{
                  fontFamily: "Unbounded, sans-serif",
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                Уверенность изнутри
              </h3>
              <p style={{ lineHeight: 1.7, color: "#222" }}>
                Когда тебе нравится, как ты выглядишь — ты чувствуешь себя лучше и смелее. Одежда влияет на настроение и поведение. Это не магия — это психология.
              </p>
            </div>
          </div>
        </section>

        {/* МОДА И МОЗГ */}
        <section className="retro-vibe" id="brain">
          <div>
            <h2 className="vibe-title">МОДА И МОЗГ.</h2>
            <p className="vibe-text">
              Ты когда-нибудь покупал вещь, потому что её носит блогер? Или потому что «осталось 2 штуки»? Это не случайность — это работа маркетологов.
              FOMO (страх упустить) и желание быть частью группы — мощные инструменты влияния. Но теперь ты знаешь об этом.
            </p>
            <div style={{ marginTop: "30px" }}>
              {trickItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: "2px solid white",
                    padding: "16px 20px",
                    marginBottom: "12px",
                    background: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: "16px", marginBottom: "6px", color: "#bff000" }}>
                    {item.phrase}
                  </div>
                  <div style={{ fontSize: "14px", color: "#ccc", lineHeight: 1.6 }}>{item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/df875963-567a-47fa-ace1-c65077dce96a/bucket/f85d18a3-96b1-47c0-b08a-9b07b507f684.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>

        {/* БАЗОВЫЙ ГАРДЕРОБ */}
        <section id="wardrobe" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">10 ВЕЩЕЙ — 15+ ОБРАЗОВ</h2>
            <span
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}
            >
              Твоя база
            </span>
          </div>

          <div
            style={{
              border: "var(--border)",
              padding: "24px",
              background: "var(--accent)",
              boxShadow: "var(--shadow)",
              marginBottom: "40px",
            }}
          >
            <p style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1.7 }}>
              Базовый гардероб — это 7–10 вещей, которые идеально сочетаются между собой. Один раз собрал — и каждый день у тебя есть образ без лишних раздумий и трат.
            </p>
          </div>

          <div className="menu-grid">
            {wardrobeItems.map((item) => (
              <div key={item.id} className="menu-card">
                <span className="menu-tag" style={{ background: item.tagColor, color: item.tagTextColor }}>
                  {item.tag}
                </span>
                <div
                  style={{
                    height: "220px",
                    background: "#f5f5f5",
                    borderBottom: "var(--border)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {"photo" in item && item.photo ? (
                    <img src={item.photo as string} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span style={{ fontSize: "72px" }}>{item.emoji}</span>
                  )}
                </div>
                <div className="menu-card-body">
                  <h3 style={{ marginBottom: "10px" }}>{item.name}</h3>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* БЮДЖЕТНЫЙ ШОПИНГ */}
        <section id="shopping" className="section-padding" style={{ background: "var(--dark)", color: "white" }}>
          <h2
            className="section-title"
            style={{ marginBottom: "40px", color: "white" }}
          >
            ГДЕ ИСКАТЬ СТИЛЬ?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }} className="md:grid-cols-3">
            {[
              {
                icon: "🛍",
                title: "Масс-маркет",
                bg: "var(--primary)",
                text: "Ozon, Wildberries, Lamoda — здесь ищи базовые вещи нейтральных цветов. Фильтруй по цвету и составу, выбирай хлопок и плотные ткани.",
              },
              {
                icon: "♻️",
                title: "Секонд-хенды",
                bg: "var(--secondary)",
                text: "Здесь можно найти уникальные и винтажные вещи за копейки. Главное — терпение и насмотренность. Лучшие находки — в хаосе.",
              },
              {
                icon: "🔄",
                title: "Своп-вечеринки",
                bg: "var(--accent)",
                text: "Обменяйся одеждой с друзьями! Собери компанию, принесите вещи, которые не носите — и обновите гардероб бесплатно.",
              },
            ].map((block, i) => (
              <div
                key={i}
                style={{
                  border: "2px solid white",
                  padding: "28px",
                  background: block.bg,
                  color: block.bg === "var(--accent)" ? "var(--dark)" : "white",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>{block.icon}</div>
                <h3
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "18px",
                    fontWeight: 800,
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {block.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7 }}>{block.text}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "32px",
              border: "2px solid #444",
              padding: "24px",
              background: "#222",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "12px" }}>💡</div>
            <p style={{ color: "#ccc", lineHeight: 1.7, fontSize: "15px" }}>
              <strong style={{ color: "white" }}>Совет по уходу:</strong> Стирай при низкой температуре, сушите в тени, храни сложенными — и вещи прослужат в 2 раза дольше. Это прямая экономия!
            </p>
          </div>
        </section>

        {/* КАК НАЙТИ СВОЙ СТИЛЬ */}
        <section id="style" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "16px", textAlign: "center" }}>
            НАЙДИ СВОЙ СТИЛЬ
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "48px", fontSize: "16px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 48px" }}>
            Вдохновение — не только в ленте блогеров. Смотри шире!
          </p>
          <div className="social-grid">
            {[
              { icon: "🎬", label: "Герои фильмов", desc: "Стиль любимого персонажа — отличный ориентир" },
              { icon: "🎵", label: "Музыканты", desc: "От рок-классики до современного хип-хопа" },
              { icon: "🎨", label: "Художники", desc: "Необычный взгляд на цвет, форму и сочетания" },
              { icon: "📌", label: "Moodboard", desc: "Собери доску вдохновения в Pinterest или на бумаге" },
            ].map((item, i) => (
              <div
                key={i}
                className="social-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  padding: "30px 20px",
                  background: i % 2 === 0 ? "var(--dark)" : "var(--accent)",
                  color: i % 2 === 0 ? "white" : "var(--dark)",
                  minHeight: "200px",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "48px" }}>{item.icon}</div>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", textAlign: "center" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "13px", textAlign: "center", opacity: 0.8, lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-logo">СТИЛЬНЫЙ*КОД</div>
          <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "16px" }}>
            Мода должна приносить радость, а не стресс.
          </p>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#333",
              lineHeight: 1.6,
              borderLeft: "4px solid var(--primary)",
              paddingLeft: "16px",
            }}
          >
            «Важно не что на тебе надето, а как ты себя в этом чувствуешь»
          </p>
        </div>
        <div className="footer-links">
          <h4>Разделы</h4>
          <ul>
            <li><a href="#why" style={{ color: "inherit", textDecoration: "none" }}>Зачем это важно</a></li>
            <li><a href="#wardrobe" style={{ color: "inherit", textDecoration: "none" }}>Базовый гардероб</a></li>
            <li><a href="#shopping" style={{ color: "inherit", textDecoration: "none" }}>Где покупать</a></li>
            <li><a href="#style" style={{ color: "inherit", textDecoration: "none" }}>Найти свой стиль</a></li>
          </ul>
        </div>
        <div className="footer-hours">
          <h4>Идеи для образов</h4>
          <div className="hours-list">
            <span>Футболка + джинсы</span><span>Школа / кэжуал</span>
            <span>Футболка + пиджак</span><span>Прогулка</span>
            <span>Худи + джоггеры</span><span>Спортивный стиль</span>
            <span>Водолазка + джинсы</span><span>Интеллектуал</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Стильный код</span>
          <span>Будь собой — это всегда в тренде</span>
        </div>
      </footer>
    </>
  );
}