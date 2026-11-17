/* Різдвяний сайт: ASCII-ялинка, що виростає з землі й обертається, — з гірляндою, кульками, вогниками,
   зіркою й подарунками. Сцена — хмара точок у 3D, яку щокадру проєктуємо на сітку символів із z-буфером.
   Тексти сайту — з window.AIC.content, рядки інтерфейсу — в UI. */
(() => {
  const AIC = window.AIC;
  const root = document.getElementById("xm");
  if (!AIC || !AIC.content || !root) return;

  const $ = (id) => document.getElementById(id);
  const LANGS = AIC.langs;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Різдво цього року: у січні–червні ще вітаємо з минулим */
  const NOW = new Date();
  const XYEAR = NOW.getMonth() >= 6 ? NOW.getFullYear() : NOW.getFullYear() - 1;

  const UI = {
    uk: {
      services: "Послуги", partners: "Партнери", contacts: "Контакти", language: "Мова",
      greet: "З Різдвом і Новим роком!",
      ctaServices: "Розгорнути подарунки", ctaContacts: "Написати нам",
      servicesSub: "Десять подарунків під ялинкою — по одному на кожен напрям. Розгортайте будь-який: усередині те, що ми робимо, що входить у роботу і що ви отримаєте в результаті.",
      partnersSub: "Технології, з якими ми працюємо щодня. Гірлянда горить цілий рік.",
      open: "[+] розгорнути подарунок", close: "[–] згорнути",
      includes: "Що входить", result: "Результат",
      pause: "❚❚ пауза", play: "▶ далі", again: "↻ знову",
      pauseLabel: "Пауза анімації", playLabel: "Продовжити анімацію", againLabel: "Виростити ялинку знову",
      keys: "<kbd>Space</kbd> пауза · <kbd>R</kbd> виростити знову",
      tree: "ASCII-ялинка, що обертається: гірлянда, кульки, вогники, зірка на верхівці й подарунки під нею"
    },
    en: {
      services: "Services", partners: "Partners", contacts: "Contact", language: "Language",
      greet: "Merry Christmas and Happy New Year!",
      ctaServices: "Unwrap the gifts", ctaContacts: "Write to us",
      servicesSub: "Ten gifts under the tree, one for each thing we do. Unwrap any of them to see what the work involves, what's included and what you get at the end.",
      partnersSub: "Technologies we work with every day. These lights stay on all year round.",
      open: "[+] unwrap the gift", close: "[–] wrap it back",
      includes: "What's included", result: "Result",
      pause: "❚❚ pause", play: "▶ resume", again: "↻ again",
      pauseLabel: "Pause the animation", playLabel: "Resume the animation", againLabel: "Grow the tree again",
      keys: "<kbd>Space</kbd> pause · <kbd>R</kbd> grow again",
      tree: "A rotating ASCII Christmas tree with tinsel, baubles, twinkling lights, a star on top and presents underneath"
    },
    ru: {
      services: "Услуги", partners: "Партнёры", contacts: "Контакты", language: "Язык",
      greet: "С Рождеством и Новым годом!",
      ctaServices: "Развернуть подарки", ctaContacts: "Написать нам",
      servicesSub: "Десять подарков под ёлкой — по одному на каждое направление. Разворачивайте любой: внутри то, что мы делаем, что входит в работу и что вы получите в результате.",
      partnersSub: "Технологии, с которыми мы работаем каждый день. Гирлянда горит круглый год.",
      open: "[+] развернуть подарок", close: "[–] свернуть",
      includes: "Что входит", result: "Результат",
      pause: "❚❚ пауза", play: "▶ дальше", again: "↻ заново",
      pauseLabel: "Пауза анимации", playLabel: "Продолжить анимацию", againLabel: "Вырастить ёлку заново",
      keys: "<kbd>Space</kbd> пауза · <kbd>R</kbd> вырастить заново",
      tree: "Вращающаяся ASCII-ёлка: гирлянда, шары, огоньки, звезда на макушке и подарки под ней"
    },
    de: {
      services: "Leistungen", partners: "Partner", contacts: "Kontakt", language: "Sprache",
      greet: "Frohe Weihnachten und ein gutes neues Jahr!",
      ctaServices: "Geschenke auspacken", ctaContacts: "Schreiben Sie uns",
      servicesSub: "Zehn Geschenke unter dem Baum, eines für jeden Bereich. Packen Sie eines aus: Darin steht, was wir tun, was zur Arbeit gehört und was Sie am Ende bekommen.",
      partnersSub: "Technologien, mit denen wir jeden Tag arbeiten. Diese Lichterkette leuchtet das ganze Jahr.",
      open: "[+] Geschenk auspacken", close: "[–] wieder einpacken",
      includes: "Leistungsumfang", result: "Ergebnis",
      pause: "❚❚ Pause", play: "▶ weiter", again: "↻ neu",
      pauseLabel: "Animation anhalten", playLabel: "Animation fortsetzen", againLabel: "Den Baum noch einmal wachsen lassen",
      keys: "<kbd>Leertaste</kbd> Pause · <kbd>R</kbd> neu wachsen lassen",
      tree: "Ein sich drehender ASCII-Weihnachtsbaum mit Lametta, Kugeln, funkelnden Lichtern, einem Stern an der Spitze und Geschenken darunter"
    },
    fr: {
      services: "Services", partners: "Partenaires", contacts: "Contact", language: "Langue",
      greet: "Joyeux Noël et bonne année !",
      ctaServices: "Ouvrir les cadeaux", ctaContacts: "Nous écrire",
      servicesSub: "Dix cadeaux sous le sapin, un par domaine. Ouvrez celui que vous voulez : vous y trouverez ce que nous faisons, ce que comprend le travail et ce que vous obtenez à la fin.",
      partnersSub: "Les technologies avec lesquelles nous travaillons tous les jours. Cette guirlande reste allumée toute l'année.",
      open: "[+] ouvrir le cadeau", close: "[–] refermer",
      includes: "Ce qui est inclus", result: "Résultat",
      pause: "❚❚ pause", play: "▶ reprendre", again: "↻ recommencer",
      pauseLabel: "Mettre l'animation en pause", playLabel: "Reprendre l'animation", againLabel: "Faire repousser le sapin",
      keys: "<kbd>Espace</kbd> pause · <kbd>R</kbd> faire repousser",
      tree: "Un sapin de Noël en ASCII qui tourne, avec guirlande, boules, lumières scintillantes, une étoile au sommet et des cadeaux au pied"
    },
    es: {
      services: "Servicios", partners: "Socios", contacts: "Contacto", language: "Idioma",
      greet: "¡Feliz Navidad y próspero Año Nuevo!",
      ctaServices: "Abrir los regalos", ctaContacts: "Escríbanos",
      servicesSub: "Diez regalos bajo el árbol, uno por cada área. Abra el que quiera: dentro está lo que hacemos, qué incluye el trabajo y qué obtiene al final.",
      partnersSub: "Tecnologías con las que trabajamos cada día. Esta guirnalda está encendida todo el año.",
      open: "[+] abrir el regalo", close: "[–] cerrar",
      includes: "Qué incluye", result: "Resultado",
      pause: "❚❚ pausa", play: "▶ seguir", again: "↻ de nuevo",
      pauseLabel: "Pausar la animación", playLabel: "Reanudar la animación", againLabel: "Hacer crecer el árbol de nuevo",
      keys: "<kbd>Espacio</kbd> pausa · <kbd>R</kbd> crecer de nuevo",
      tree: "Un árbol de Navidad en ASCII que gira, con espumillón, bolas, luces parpadeantes, una estrella en la punta y regalos debajo"
    },
    pt: {
      services: "Serviços", partners: "Parceiros", contacts: "Contactos", language: "Idioma",
      greet: "Feliz Natal e Feliz Ano Novo!",
      ctaServices: "Abrir os presentes", ctaContacts: "Escreva-nos",
      servicesSub: "Dez presentes debaixo da árvore, um para cada área. Abra o que quiser: lá dentro está o que fazemos, o que inclui o trabalho e o que recebe no fim.",
      partnersSub: "Tecnologias com que trabalhamos todos os dias. Estas luzes ficam acesas o ano inteiro.",
      open: "[+] abrir o presente", close: "[–] fechar",
      includes: "O que inclui", result: "Resultado",
      pause: "❚❚ pausa", play: "▶ continuar", again: "↻ de novo",
      pauseLabel: "Pausar a animação", playLabel: "Continuar a animação", againLabel: "Fazer crescer a árvore de novo",
      keys: "<kbd>Espaço</kbd> pausa · <kbd>R</kbd> crescer de novo",
      tree: "Uma árvore de Natal em ASCII a rodar, com fitas douradas, bolas, luzes a piscar, uma estrela no topo e presentes por baixo"
    },
    it: {
      services: "Servizi", partners: "Partner", contacts: "Contatti", language: "Lingua",
      greet: "Buon Natale e felice anno nuovo!",
      ctaServices: "Scarta i regali", ctaContacts: "Ci scriva",
      servicesSub: "Dieci regali sotto l'albero, uno per ogni area. Ne scarti uno qualsiasi: dentro c'è quello che facciamo, cosa comprende il lavoro e cosa ottiene alla fine.",
      partnersSub: "Le tecnologie con cui lavoriamo ogni giorno. Queste luci restano accese tutto l'anno.",
      open: "[+] scarta il regalo", close: "[–] richiudi",
      includes: "Cosa comprende", result: "Risultato",
      pause: "❚❚ pausa", play: "▶ riprendi", again: "↻ di nuovo",
      pauseLabel: "Metti in pausa l'animazione", playLabel: "Riprendi l'animazione", againLabel: "Fai crescere di nuovo l'albero",
      keys: "<kbd>Spazio</kbd> pausa · <kbd>R</kbd> fai ricrescere",
      tree: "Un albero di Natale in ASCII che ruota, con festoni, palline, luci scintillanti, una stella in cima e regali sotto"
    }
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  let lang = store.get("aic-lang");
  if (!LANGS.includes(lang)) lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "uk";
  const c = () => AIC.content[lang];
  const u = () => UI[lang];

  /* =====================================================================
     Сцена: точки ялинки
     ===================================================================== */
  const TAU = Math.PI * 2;
  const Y0 = 0.13;   // низ крони
  const Y1 = 1.0;    // верхівка
  const R0 = 0.44;   // радіус крони біля землі

  /* Хронологія, секунди */
  const T_GROW = [0.4, 5.4];
  const T_TINSEL = [5.0, 8.0];
  const T_BAUBLES = [6.4, 9.4];
  const T_LIGHTS = [7.4, 10.0];
  const T_STAR = 10.3;
  const T_GIFTS = [11.0, 12.6];
  const T_MSG = 12.9;
  const T_END = 16;

  const K_INNER = 0, K_NEEDLE = 1, K_SNOW = 2, K_TINSEL = 3, K_BAUBLE = 4, K_LIGHT = 5, K_TRUNK = 6, K_BOX = 7, K_RIBBON = 8;
  /* Зсув глибини: прикраси трохи «над» гілками, темне внутрішнє тіло — під ними */
  const BIAS = [-0.03, 0, 0.005, 0.012, 0.02, 0.03, 0, 0, 0.004];

  /* Кольори: родина — градієнт від тіні до світла у SH відтінків. glow — малюється з сяйвом */
  const SH = 8;
  const FAMS = [
    ["inner", [9, 34, 16], [22, 70, 32], 0],
    ["green", [16, 74, 30], [128, 238, 116], 0],
    ["snow", [120, 130, 148], [255, 255, 255], 0],
    ["gold", [130, 84, 14], [255, 228, 125], 0],
    ["red", [96, 14, 16], [255, 98, 88], 0],
    ["blue", [22, 40, 128], [125, 165, 255], 0],
    ["brown", [56, 32, 16], [142, 94, 54], 0],
    ["purple", [64, 26, 104], [205, 140, 255], 0],
    ["ground", [24, 29, 40], [58, 66, 86], 0],
    ["warm", [120, 92, 40], [255, 246, 205], 1],
    ["lred", [130, 28, 28], [255, 124, 112], 1],
    ["lgreen", [28, 108, 40], [160, 255, 150], 1],
    ["lblue", [40, 60, 150], [145, 185, 255], 1],
    ["lpink", [128, 38, 100], [255, 145, 222], 1],
    ["star", [190, 138, 18], [255, 250, 196], 1],
    ["flash", [205, 210, 220], [255, 255, 255], 1]
  ];
  const F = {};
  const PAL = [];
  const GLOW = [];
  FAMS.forEach(([name, a, b, glow], i) => {
    F[name] = i;
    for (let s = 0; s < SH; s++) {
      const k = s / (SH - 1);
      PAL.push(`rgb(${a.map((v, j) => Math.round(v + (b[j] - v) * k)).join(",")})`);
      GLOW.push(glow);
    }
  });
  const shade = (b) => (b <= 0 ? 0 : b >= 1 ? SH - 1 : Math.round(b * (SH - 1)));

  /* Детермінований генератор: ялинка щоразу та сама */
  function mulberry(seed) {
    return () => {
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const envelope = (y) => {
    const t = (y - Y0) / (Y1 - Y0);
    return t <= 0 ? R0 : t >= 1 ? 0 : R0 * Math.pow(1 - t, 1.02);
  };
  const growTime = (y) => T_GROW[0] + (T_GROW[1] - T_GROW[0]) * Math.min(1, Math.max(0, y / Y1));

  const scene = (() => {
    const rnd = mulberry(20261225);
    const gauss = () => {
      let a = 0;
      while (!a) a = rnd();
      return Math.sqrt(-2 * Math.log(a)) * Math.cos(TAU * rnd());
    };
    const P = { x: [], y: [], z: [], nx: [], ny: [], nz: [], t0: [], kind: [], fam: [], j: [], ph: [], w: [] };
    const add = (x, y, z, nx, ny, nz, t0, kind, fam, ph = 0, w = 0) => {
      const n = Math.hypot(nx, ny, nz) || 1;
      P.x.push(x); P.y.push(y); P.z.push(z);
      P.nx.push(nx / n); P.ny.push(ny / n); P.nz.push(nz / n);
      P.t0.push(t0); P.kind.push(kind); P.fam.push(fam); P.j.push(rnd()); P.ph.push(ph); P.w.push(w);
    };

    /* Темне внутрішнє тіло: крізь гілки нічого не просвічує */
    for (let i = 0; i < 2600; i++) {
      const y = Y0 + (Y1 - Y0) * (1 - Math.sqrt(rnd())) * 0.97;
      const a = rnd() * TAU;
      const r = envelope(y) * (0.62 + 0.1 * rnd());
      add(Math.cos(a) * r, y, Math.sin(a) * r, Math.cos(a), 0.3, Math.sin(a), growTime(y), K_INNER, F.inner);
    }

    /* Гілки: яруси пониклих гілок, густіші й довші внизу */
    const TIERS = 26;
    for (let i = 0; i < TIERS; i++) {
      const yb = Y0 + 0.02 + (Y1 - 0.06 - Y0 - 0.02) * (i / (TIERS - 1));
      const t = (yb - Y0) / (Y1 - Y0);
      const nb = Math.round(6 + 12 * (1 - t));
      const droop = 0.04 + 0.05 * (1 - t);
      for (let b = 0; b < nb; b++) {
        const a = (TAU * (b + 0.5 * rnd())) / nb + i * 0.77;
        const L = (envelope(yb) + 0.035 * (1 - t)) * (0.85 + 0.23 * rnd());
        const np = Math.max(8, Math.round(L * 190));
        for (let p = 0; p < np; p++) {
          const s = (p + rnd()) / np;
          const spread = 0.01 + 0.028 * s;
          const r = L * s;
          const x = Math.cos(a) * r + gauss() * spread;
          const z = Math.sin(a) * r + gauss() * spread;
          const y = yb + 0.018 * s - droop * s * s + gauss() * spread * 0.55;
          const snowy = s > 0.55 && rnd() < 0.06 * s;
          add(x, y, z, Math.cos(a), 0.45 - 0.5 * s, Math.sin(a), growTime(y), snowy ? K_SNOW : K_NEEDLE, snowy ? F.snow : F.green);
        }
      }
    }
    /* Хвоя по поверхні крони: щоб ялинка була суцільною, а не лише з окремих гілок.
       Радіус злегка «дихає» ярусами, як у справжньої ялинки */
    for (let i = 0; i < 9000; i++) {
      const y = Y0 + (Y1 - Y0) * (1 - Math.sqrt(rnd())) * 0.985;
      const t = (y - Y0) / (Y1 - Y0);
      const tier = (t * TIERS) % 1;
      const a = rnd() * TAU;
      const r = envelope(y) * (0.84 + 0.16 * tier) * (0.9 + 0.12 * rnd());
      const snowy = tier > 0.8 && rnd() < 0.05;
      add(Math.cos(a) * r, y, Math.sin(a) * r, Math.cos(a), 0.45, Math.sin(a), growTime(y), snowy ? K_SNOW : K_NEEDLE, snowy ? F.snow : F.green);
    }
    /* Верхівка */
    for (let i = 0; i < 70; i++) {
      const y = Y1 - 0.07 + 0.08 * rnd();
      const a = rnd() * TAU;
      const r = 0.012 * rnd();
      add(Math.cos(a) * r, y, Math.sin(a) * r, Math.cos(a), 0.6, Math.sin(a), growTime(y), K_NEEDLE, F.green);
    }

    /* Стовбур */
    for (let i = 0; i < 260; i++) {
      const y = 0.005 + (Y0 + 0.02) * rnd();
      const a = rnd() * TAU;
      add(Math.cos(a) * 0.045, y, Math.sin(a) * 0.045, Math.cos(a), 0, Math.sin(a), T_GROW[0] - 0.2 + 0.3 * rnd(), K_TRUNK, F.brown);
    }

    /* Гірлянда: золота спіраль, що провисає між точками кріплення */
    const NT = 2400, TURNS = 4.6, HANG = TAU / 5.5;
    for (let i = 0; i < NT; i++) {
      const s = i / NT;
      const phi = TAU * TURNS * s;
      let y = Y0 + 0.07 + Math.pow(s, 1.35) * (Y1 - Y0 - 0.2);
      const tt = (y - Y0) / (Y1 - Y0);
      y -= 0.04 * (1 - tt * 0.6) * Math.sin(((phi % HANG) / HANG) * Math.PI);
      const r = envelope(y) * 1.02 + 0.006;
      const a = phi + gauss() * 0.01;
      add(Math.cos(a) * r, y + gauss() * 0.004, Math.sin(a) * r, Math.cos(a), 0.2, Math.sin(a),
        T_TINSEL[0] + (T_TINSEL[1] - T_TINSEL[0]) * s, K_TINSEL, F.gold, rnd() * TAU);
    }

    /* Кульки: точки на маленьких сферах (сфера Фібоначчі), червоні й золоті */
    const NB = 34;
    for (let k = 0; k < NB; k++) {
      const yt = 0.05 + 0.8 * (1 - Math.sqrt(rnd()));
      const y = Y0 + (Y1 - Y0) * yt;
      const a = k * 2.39996 + rnd() * 0.4;
      const rad = 0.026 + 0.018 * (1 - yt);
      const R = envelope(y) * 0.98;
      const cx = Math.cos(a) * R, cz = Math.sin(a) * R;
      const fam = k % 3 === 2 ? F.gold : F.red;
      const t0 = T_BAUBLES[0] + (T_BAUBLES[1] - T_BAUBLES[0]) * rnd();
      const n = 46;
      for (let q = 0; q < n; q++) {
        const yy = 1 - (2 * (q + 0.5)) / n;
        const rr = Math.sqrt(1 - yy * yy);
        const th = q * 2.39996;
        const nx = Math.cos(th) * rr, nz = Math.sin(th) * rr;
        add(cx + nx * rad, y + yy * rad - rad * 0.6, cz + nz * rad, nx, yy, nz, t0, K_BAUBLE, fam);
      }
    }

    /* Вогники: здебільшого теплі, частина різнокольорових */
    const LFAM = [F.lred, F.lgreen, F.lblue, F.lpink];
    for (let k = 0; k < 170; k++) {
      const y = Y0 + 0.02 + (Y1 - Y0 - 0.06) * (1 - Math.sqrt(rnd()));
      const a = rnd() * TAU;
      const r = envelope(y) * (0.96 + 0.08 * rnd());
      const fam = rnd() < 0.72 ? F.warm : LFAM[Math.floor(rnd() * 4)];
      add(Math.cos(a) * r, y, Math.sin(a) * r, Math.cos(a), 0.3, Math.sin(a),
        T_LIGHTS[0] + (T_LIGHTS[1] - T_LIGHTS[0]) * rnd(), K_LIGHT, fam, rnd() * TAU, 1.4 + 3.2 * rnd());
    }

    /* Подарунки: коробки зі стрічкою хрест-навхрест і бантом */
    const GIFTS = [
      [-0.42, 0.2, 0.17, 0.14, 0.15, F.red, F.gold],
      [0.4, 0.22, 0.13, 0.18, 0.13, F.blue, F.gold],
      [0.1, 0.44, 0.19, 0.11, 0.15, F.gold, F.red],
      [-0.17, -0.42, 0.15, 0.16, 0.15, F.red, F.snow],
      [0.45, -0.2, 0.12, 0.1, 0.12, F.purple, F.gold],
      [-0.47, -0.17, 0.11, 0.12, 0.11, F.gold, F.red]
    ];
    const STEP = 0.0115, BAND = 0.1;
    GIFTS.forEach(([gx, gz, w, h, d, box, rib], gi) => {
      const t0 = T_GIFTS[0] + ((T_GIFTS[1] - T_GIFTS[0]) * gi) / (GIFTS.length - 1);
      const face = (ox, oy, oz, ux, uy, uz, vx, vy, vz, lu, lv, nx, ny, nz, top) => {
        for (let a = 0; a <= lu; a += STEP) {
          for (let b = 0; b <= lv; b += STEP) {
            const fu = a / lu, fv = b / lv;
            const ribbon = Math.abs(fu - 0.5) < BAND || (top && Math.abs(fv - 0.5) < BAND);
            add(ox + ux * a + vx * b, oy + uy * a + vy * b, oz + uz * a + vz * b, nx, ny, nz, t0,
              ribbon ? K_RIBBON : K_BOX, ribbon ? rib : box);
          }
        }
      };
      const x0 = gx - w / 2, z0 = gz - d / 2;
      face(x0, 0, z0 + d, 1, 0, 0, 0, 1, 0, w, h, 0, 0, 1, false);       // перед
      face(x0, 0, z0, 1, 0, 0, 0, 1, 0, w, h, 0, 0, -1, false);          // зад
      face(x0, 0, z0, 0, 0, 1, 0, 1, 0, d, h, -1, 0, 0, false);          // ліва
      face(x0 + w, 0, z0, 0, 0, 1, 0, 1, 0, d, h, 1, 0, 0, false);       // права
      face(x0, h, z0, 1, 0, 0, 0, 0, 1, w, d, 0, 1, 0, true);            // кришка
      for (let q = 0; q < 40; q++) {                                      // бант: дві петлі
        const th = (q / 40) * TAU;
        const side = q < 20 ? -1 : 1;
        add(gx + side * (0.022 + 0.02 * Math.cos(th)), h + 0.012 + 0.018 * Math.abs(Math.sin(th)), gz + 0.004 * Math.sin(th),
          side, 1, 0.3, t0, K_RIBBON, rib);
      }
    });

    const f32 = (a) => Float32Array.from(a);
    return {
      n: P.x.length,
      x: f32(P.x), y: f32(P.y), z: f32(P.z), nx: f32(P.nx), ny: f32(P.ny), nz: f32(P.nz),
      t0: f32(P.t0), j: f32(P.j), ph: f32(P.ph), w: f32(P.w),
      kind: Uint8Array.from(P.kind), fam: Uint8Array.from(P.fam),
      lightT0: P.t0.filter((_, i) => P.kind[i] === K_LIGHT).sort((a, b) => a - b)
    };
  })();

  /* =====================================================================
     Рендер ялинки у сітку символів
     ===================================================================== */
  const MONO = 'ui-monospace, "SFMono-Regular", "SF Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace';
  const RAMP = ".:-~=+*^vxo%&#@W";
  const stage = root.querySelector(".xm-stage");
  const canvas = $("xmTree");
  const ctx = canvas.getContext("2d");
  const PITCH = 0.2, CP = Math.cos(PITCH), SP = Math.sin(PITCH), DIST = 3.4;
  const L = (() => { const v = [-0.55, 0.55, 0.62]; const n = Math.hypot(...v); return v.map((x) => x / n); })();
  const STAR = Array.from({ length: 10 }, (_, k) => {
    const a = -Math.PI / 2 + (k * Math.PI) / 5;
    const r = k % 2 ? 0.44 : 1;
    return [Math.cos(a) * r, Math.sin(a) * r];
  });
  const inStar = (x, y) => {
    let inside = false;
    for (let i = 0, j = STAR.length - 1; i < STAR.length; j = i++) {
      const [xi, yi] = STAR[i], [xj, yj] = STAR[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  };
  const bounce = (x) => {
    const n = 7.5625, d = 2.75;
    if (x < 1 / d) return n * x * x;
    if (x < 2 / d) return n * (x -= 1.5 / d) * x + 0.75;
    if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + 0.9375;
    return n * (x -= 2.625 / d) * x + 0.984375;
  };
  const hash = (a, b) => {
    let h = Math.imul(a, 374761393) + Math.imul(b, 668265263);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };

  const G = { w: 0, h: 0, cols: 0, rows: 0, cellW: 8, cellH: 12, S: 100, cx: 0, gy: 0 };
  let depth = new Float32Array(0);
  let pal = new Int16Array(0);
  let glyph = [];
  let ground = [];
  const buckets = PAL.map(() => []);

  function setupTree() {
    const rect = stage.getBoundingClientRect();
    const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const fontPx = Math.max(8, Math.min(13, Math.round(h / 84)));
    ctx.font = `600 ${fontPx}px ${MONO}`;
    ctx.textBaseline = "top";
    G.w = w; G.h = h;
    G.cellW = ctx.measureText("M").width || fontPx * 0.6;
    G.cellH = Math.round(fontPx * 1.18);
    G.cols = Math.ceil(w / G.cellW);
    G.rows = Math.ceil(h / G.cellH);
    G.gy = h * 0.8;
    G.S = Math.min((G.gy - h * 0.07) / 1.13, (w * 0.94) / 1.34);
    G.cx = w / 2;
    const size = G.cols * G.rows;
    depth = new Float32Array(size);
    pal = new Int16Array(size);
    glyph = new Array(size);

    /* Земля: штрихи й крапки від обрію донизу */
    ground = [];
    const horizon = Math.max(0, Math.floor((G.gy - 0.13 * G.S) / G.cellH));
    for (let r = horizon; r < G.rows; r++) {
      const k = (r - horizon) / Math.max(1, G.rows - horizon);
      for (let col = 0; col < G.cols; col++) {
        const v = hash(col, r);
        if (v < 0.2 + 0.08 * k) ground.push(r * G.cols + col, F.ground * SH + Math.min(SH - 1, 2 + Math.round(k * 3)), "-");
        else if (v < 0.27 + 0.08 * k) ground.push(r * G.cols + col, F.ground * SH + 1 + Math.round(k * 2), ".");
      }
    }
  }

  function put(col, row, z, p, ch) {
    if (col < 0 || row < 0 || col >= G.cols || row >= G.rows) return;
    const idx = row * G.cols + col;
    if (z < depth[idx]) return;
    depth[idx] = z;
    pal[idx] = p;
    glyph[idx] = ch;
  }

  function drawStar(t) {
    if (t < T_STAR) return;
    const { cellW, cellH, S, cx, gy } = G;
    const top = Y1 + 0.05;
    const k = DIST / (DIST - top * SP);
    const sx = cx, sy = gy - top * CP * k * S;
    const p = (t - T_STAR) / 1.5;
    const Ro = Math.max(cellH * 1.7, 0.072 * S) * (1 + 0.05 * Math.sin(t * 3)) * (p < 0.12 ? 0.4 + (p / 0.12) * 0.6 : 1);
    const hot = p < 0.4;
    const Z = 1e6;

    /* Промені: спершу довгі й білі, потім стишуються до короткого мерехтіння */
    const rays = p < 1 ? 16 : 4;
    for (let q = 0; q < rays; q++) {
      const a = (q / rays) * TAU - Math.PI / 2;
      const long = q % 2 === 0 || p >= 1;
      const len = p < 1
        ? Ro * (1.1 + (long ? 6.5 : 3.2) * Math.pow(1 - p, 2) * Math.min(1, p / 0.1))
        : Ro * (1.15 + 0.3 * Math.sin(t * 2.4 + q * 1.7));
      const dx = Math.cos(a), dy = Math.sin(a);
      if (p >= 1 && dy > 0.5) continue; // униз, у крону, — без променя
      const ch = Math.abs(dx) > 0.92 ? "-" : Math.abs(dy) > 0.92 ? "|" : dx * dy < 0 ? "/" : "\\";
      const step = Math.min(cellW, cellH) * 0.8;
      for (let d = Ro * 0.7; d < len; d += step) {
        const fade = 1 - (d - Ro * 0.7) / Math.max(1, len - Ro * 0.7);
        put(Math.floor((sx + dx * d) / cellW), Math.floor((sy + dy * d) / cellH), Z,
          (hot ? F.flash : F.star) * SH + shade(fade * (p < 1 ? 1 : 0.7)), ch);
      }
    }

    /* Сама зірка */
    const c0 = Math.floor((sx - Ro) / cellW), c1 = Math.ceil((sx + Ro) / cellW);
    const r0 = Math.floor((sy - Ro) / cellH), r1 = Math.ceil((sy + Ro) / cellH);
    for (let r = r0; r <= r1; r++) {
      for (let col = c0; col <= c1; col++) {
        const px = ((col + 0.5) * cellW - sx) / Ro, py = ((r + 0.5) * cellH - sy) / Ro;
        if (!inStar(px, py)) continue;
        const d = Math.hypot(px, py);
        put(col, r, Z + 1, (hot ? F.flash : F.star) * SH + shade(1 - d * 0.45), d < 0.32 ? "@" : d < 0.62 ? "#" : "*");
      }
    }
  }

  let litCount = 0;
  function drawTree(t, theta) {
    const { cols, rows, cellW, cellH, S, cx, gy } = G;
    const P = scene;
    depth.fill(-1e9);
    pal.fill(-1);
    for (let i = 0; i < ground.length; i += 3) {
      const idx = ground[i];
      depth[idx] = -1e8;
      pal[idx] = ground[i + 1];
      glyph[idx] = ground[i + 2];
    }

    const cs = Math.cos(theta), sn = Math.sin(theta);
    const n = P.n;
    for (let i = 0; i < n; i++) {
      const t0 = P.t0[i];
      if (t0 > t) continue;
      const kind = P.kind[i];
      const age = t - t0;
      let y = P.y[i];
      if (kind >= K_BOX && age < 0.9) y += (1 - bounce(age / 0.9)) * 0.55;
      const x = P.x[i], z = P.z[i];
      const xr = x * cs - z * sn, zr = x * sn + z * cs;
      const yv = y * CP - zr * SP;
      const zv = zr * CP + y * SP + BIAS[kind];
      const k = DIST / (DIST - zv);
      const sx = cx + xr * k * S, sy = gy - yv * k * S;
      if (sx < 0 || sy < 0) continue;
      const col = (sx / cellW) | 0, row = (sy / cellH) | 0;
      if (col >= cols || row >= rows) continue;
      const idx = row * cols + col;
      if (zv <= depth[idx]) continue;
      depth[idx] = zv;

      const nx = P.nx[i], nz = P.nz[i];
      let dot = (nx * cs - nz * sn) * L[0] + P.ny[i] * L[1] + (nx * sn + nz * cs) * L[2];
      if (dot < 0) dot = 0;
      const j = P.j[i];
      let f, b, ch;
      switch (kind) {
        case K_INNER:
          f = F.inner; b = 0.2 + 0.5 * j; ch = j < 0.5 ? "." : j < 0.8 ? ":" : "-";
          break;
        case K_NEEDLE:
          if (age < 0.4) { f = F.snow; b = 1 - age; ch = j < 0.5 ? "*" : "+"; break; }
          f = F.green;
          b = 0.3 + 0.55 * dot + 0.18 * (zr / R0) + 0.25 * (j - 0.5);
          ch = RAMP[Math.max(0, Math.min(RAMP.length - 1, ((b * 0.75 + j * 0.4) * RAMP.length) | 0))];
          break;
        case K_SNOW:
          f = F.snow; b = 0.45 + 0.55 * dot; ch = j < 0.5 ? "*" : j < 0.8 ? "+" : ".";
          break;
        case K_TINSEL:
          if (age < 0.25) { f = F.flash; b = 1; ch = "*"; break; }
          f = F.gold;
          b = 0.3 + 0.6 * dot + 0.18 * Math.sin(t * 5 + P.ph[i]);
          ch = j < 0.4 ? "~" : j < 0.75 ? "=" : j < 0.93 ? "-" : "*";
          break;
        case K_BAUBLE:
          if (age < 0.18) { f = F.flash; b = 1; ch = "@"; break; }
          if (dot > 0.94) { f = F.snow; b = 1; ch = "o"; break; }
          f = P.fam[i]; b = 0.15 + 0.85 * dot;
          ch = b > 0.75 ? "@" : b > 0.5 ? "0" : b > 0.32 ? "%" : "o";
          break;
        case K_LIGHT: {
          const tw = 0.5 + 0.5 * Math.sin(t * P.w[i] + P.ph[i]);
          f = P.fam[i]; b = 0.3 + 0.7 * tw; ch = tw > 0.62 ? "*" : tw > 0.3 ? "o" : "+";
          break;
        }
        case K_TRUNK:
          f = F.brown; b = 0.25 + 0.7 * dot; ch = j < 0.55 ? "|" : "#";
          break;
        case K_BOX:
          f = P.fam[i]; b = 0.22 + 0.78 * dot; ch = j < 0.35 ? "#" : j < 0.65 ? "%" : j < 0.85 ? "X" : "&";
          break;
        default:
          f = P.fam[i]; b = 0.35 + 0.65 * dot; ch = j < 0.4 ? "+" : j < 0.75 ? "x" : "=";
      }
      pal[idx] = f * SH + shade(b);
      glyph[idx] = ch;
    }

    drawStar(t);

    /* Малюємо групами за кольором: менше перемикань fillStyle */
    for (const list of buckets) list.length = 0;
    for (let idx = 0; idx < pal.length; idx++) if (pal[idx] >= 0) buckets[pal[idx]].push(idx);
    ctx.clearRect(0, 0, G.w, G.h);
    const blur = 7 * Math.min(2, window.devicePixelRatio || 1);
    for (let p = 0; p < buckets.length; p++) {
      const list = buckets[p];
      if (!list.length) continue;
      ctx.fillStyle = PAL[p];
      if (GLOW[p]) { ctx.shadowColor = PAL[p]; ctx.shadowBlur = blur; } else ctx.shadowBlur = 0;
      for (let q = 0; q < list.length; q++) {
        const idx = list[q];
        ctx.fillText(glyph[idx], (idx % cols) * cellW, ((idx / cols) | 0) * cellH);
      }
    }
    ctx.shadowBlur = 0;

    litCount = 0;
    for (const t0 of P.lightT0) { if (t0 > t) break; litCount++; }
  }

  /* =====================================================================
     Сніг — окремий шар на весь екран
     ===================================================================== */
  const snowCanvas = $("xmSnow");
  const sctx = snowCanvas.getContext("2d");
  const SNOW = { w: 0, h: 0, cw: 8, ch: 14, layers: [[], [], []] };
  const SNOW_CH = [".", "+", "*"];
  const SNOW_COL = ["rgba(190,202,225,.32)", "rgba(215,225,245,.55)", "rgba(240,246,255,.85)"];
  const SNOW_V = [9, 16, 27];

  function setupSnow() {
    const rect = root.getBoundingClientRect();
    const w = Math.max(1, rect.width), h = Math.max(1, rect.height);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    snowCanvas.width = Math.round(w * dpr);
    snowCanvas.height = Math.round(h * dpr);
    sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    sctx.font = `600 12px ${MONO}`;
    sctx.textBaseline = "top";
    SNOW.cw = sctx.measureText("M").width || 7.2;
    SNOW.ch = 14;
    const count = Math.min(650, Math.round((w * h) / 4300));
    const rnd = Math.random;
    SNOW.w = w; SNOW.h = h;
    SNOW.layers = [[], [], []];
    for (let i = 0; i < count; i++) {
      const v = rnd();
      const layer = v < 0.55 ? 0 : v < 0.86 ? 1 : 2;
      SNOW.layers[layer].push({ x: rnd() * w, y: rnd() * h, v: SNOW_V[layer] * (0.75 + 0.5 * rnd()), a: 4 + 12 * rnd(), f: 0.3 + 0.7 * rnd(), p: rnd() * TAU });
    }
  }

  let snowT = 0;
  function drawSnow(dt) {
    snowT += dt;
    const { w, h, cw, ch } = SNOW;
    sctx.clearRect(0, 0, w, h);
    for (let l = 0; l < 3; l++) {
      sctx.fillStyle = SNOW_COL[l];
      for (const s of SNOW.layers[l]) {
        s.y += s.v * dt;
        if (s.y > h + 10) { s.y = -12; s.x = Math.random() * w; }
        const x = s.x + Math.sin(snowT * s.f + s.p) * s.a;
        sctx.fillText(SNOW_CH[l], Math.floor(x / cw) * cw, Math.floor(s.y / ch) * ch);
      }
    }
  }

  /* =====================================================================
     Анімація: один цикл на ялинку й сніг, ~30 кадрів за секунду
     ===================================================================== */
  const hud = $("xmHud");
  const pauseBtn = $("xmPause");
  const againBtn = $("xmAgain");
  const greetEl = $("xmGreet");
  let simT = REDUCED ? T_END : 0;
  let rot = 0.6;
  let paused = false;
  let treeVisible = true;
  let raf = 0;
  let last = 0;
  let frame = 0;
  let shownLetters = -1;

  function updateGreet(force) {
    const letters = greetEl.querySelectorAll(".xm-greet-l > span");
    const n = REDUCED ? letters.length : Math.max(0, Math.floor((simT - T_MSG) / 0.085));
    if (!force && n === shownLetters) return;
    shownLetters = n;
    letters.forEach((el, i) => el.classList.toggle("on", i < n));
  }

  function updateHud() {
    const deg = (((rot * 180) / Math.PI) % 360 + 360) % 360;
    hud.textContent = `artintellico.ascii\nrotation ${deg.toFixed(2)}°\nlights   ${litCount}\nframe    ${frame}`;
  }

  function renderFrame() {
    drawTree(simT, rot);
    updateGreet(false);
    if (frame % 4 === 0) updateHud();
  }

  function loop(now) {
    raf = requestAnimationFrame(loop);
    if (now - last < 32) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    drawSnow(dt);
    if (paused || !treeVisible) return;
    simT += dt;
    rot += dt * 0.42;
    frame++;
    renderFrame();
  }

  function start() {
    if (REDUCED || raf || document.hidden) return;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  }
  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  function setPaused(v) {
    paused = v;
    pauseBtn.textContent = paused ? u().play : u().pause;
    pauseBtn.setAttribute("aria-label", paused ? u().playLabel : u().pauseLabel);
    pauseBtn.setAttribute("aria-pressed", String(paused));
  }
  function restart() {
    simT = 0;
    shownLetters = -1;
    if (REDUCED) simT = T_END;
    setPaused(false);
    renderFrame();
    updateGreet(true);
  }

  pauseBtn.addEventListener("click", () => setPaused(!paused));
  againBtn.addEventListener("click", restart);
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || REDUCED || !treeVisible) return;
    if (e.target instanceof Element && e.target.closest("a, button, summary, input, textarea, select, details, [contenteditable]")) return;
    if (e.code === "Space") { e.preventDefault(); setPaused(!paused); }
    else if (e.key === "r" || e.key === "R" || e.key === "к" || e.key === "К") restart();
  });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  /* =====================================================================
     Тексти сторінки
     ===================================================================== */
  const scroller = $("xmScroll");

  function greetHtml() {
    const text = u().greet;
    const COLORS = ["var(--red)", "var(--gold)", "var(--green-hi)"];
    let k = 0;
    const letters = [...text].map((ch) => {
      if (ch === " ") return "<span> </span>";
      return `<span style="color:${COLORS[k++ % COLORS.length]}">${esc(ch)}</span>`;
    }).join("");
    return `<span class="sr">${esc(text)}</span><span class="xm-greet-l" aria-hidden="true">${letters}</span>`;
  }

  function mainHtml() {
    const C = c(), s = u();
    const gifts = C.services.items.map((it, i) => `
      <details class="gift">
        <summary>
          <span class="gift-bow" aria-hidden="true">}{</span>
          <span class="gift-no">#${String(i + 1).padStart(2, "0")}</span>
          <h3>${esc(it.title)}</h3>
          <span class="gift-text">${esc(it.text)}</span>
          <span class="gift-open"><span class="o">${esc(s.open)}</span><span class="c">${esc(s.close)}</span></span>
        </summary>
        <div class="gift-body">
          <p>${esc(it.details)}</p>
          <h4>${esc(s.includes)}</h4>
          <ul>${(it.includes || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <h4>${esc(s.result)}</h4>
          <p class="gift-result">${esc(it.result)}</p>
        </div>
      </details>`).join("");

    const partners = C.partners.items.map((it, i) => {
      const name = it.url
        ? `<a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.name)}</a>`
        : `<span class="xm-pname">${esc(it.name)}</span>`;
      return `<li style="--i:${i}"><span class="xm-bulb" aria-hidden="true"></span>${name}</li>`;
    }).join("");

    const ct = C.contacts, f = C.footer;
    return `
      <section class="xm-sec" id="xmServices" aria-labelledby="xmServicesH">
        <h2 id="xmServicesH">${esc(C.services.heading)}</h2>
        <p class="xm-sub">${esc(s.servicesSub)}</p>
        <div class="xm-gifts">${gifts}</div>
      </section>
      <section class="xm-sec" id="xmPartners" aria-labelledby="xmPartnersH">
        <h2 id="xmPartnersH">${esc(C.partners.heading)}</h2>
        <p class="xm-sub">${esc(s.partnersSub)}</p>
        <ul class="xm-garland">${partners}</ul>
      </section>
      <section class="xm-sec" id="xmContacts" aria-labelledby="xmContactsH">
        <div class="xm-card">
          <span class="xm-stamp" aria-hidden="true">★<br>${XYEAR}</span>
          <h2 id="xmContactsH">${esc(ct.heading)}</h2>
          <p>${esc(ct.text)}</p>
          <p class="xm-mail"><span class="xm-mail-label">${esc(ct.emailLabel)}:</span><a href="mailto:${esc(ct.email)}">${esc(ct.email)}</a></p>
        </div>
      </section>
      <footer class="xm-foot">
        <span>© ${esc(f.year)} ${esc(f.legalName)}. ${esc(f.rights)}</span>
        <a href="${esc(C.classic.url)}">${esc(C.classic.label)}</a>
      </footer>`;
  }

  let typedTimer = 0;
  function startTyped() {
    clearTimeout(typedTimer);
    const phrases = c().hero.typed;
    const el = $("xmTyped");
    if (REDUCED) { el.textContent = phrases.join(", "); return; }
    let i = 0, n = 0, del = false;
    const step = () => {
      const p = phrases[i];
      if (!del) {
        el.textContent = p.slice(0, ++n);
        if (n >= p.length) { del = true; typedTimer = setTimeout(step, 1900); return; }
        typedTimer = setTimeout(step, 40 + Math.random() * 45);
      } else {
        el.textContent = p.slice(0, --n);
        if (n <= 0) { del = false; i = (i + 1) % phrases.length; typedTimer = setTimeout(step, 380); return; }
        typedTimer = setTimeout(step, 20);
      }
    };
    step();
  }

  function render() {
    const C = c(), s = u();
    document.documentElement.lang = lang;
    $("xmNav").innerHTML = [["xmServices", s.services], ["xmPartners", s.partners], ["xmContacts", s.contacts]]
      .map(([id, label]) => `<a href="#${id}" data-go="${id}">${esc(label)}</a>`).join("");
    $("xmLangBtn").textContent = (AIC.langCodes && AIC.langCodes[lang]) || lang.toUpperCase();
    $("xmLangBtn").setAttribute("aria-label", `${s.language}: ${(AIC.langNames && AIC.langNames[lang]) || lang}`);
    $("xmLangList").setAttribute("aria-label", s.language);
    $("xmLangList").innerHTML = LANGS.map((l) =>
      `<li><button type="button" data-l="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ""}>` +
      `<b>${esc((AIC.langCodes && AIC.langCodes[l]) || l.toUpperCase())}</b>${esc((AIC.langNames && AIC.langNames[l]) || l)}</button></li>`).join("");
    $("xmTitle").textContent = C.hero.title;
    $("xmLead").textContent = C.hero.text;
    $("xmTypedLead").textContent = C.hero.typedLead;
    $("xmTyped").setAttribute("aria-label", C.hero.typed.join(", "));
    $("xmCtaServices").textContent = s.ctaServices;
    $("xmCtaContacts").textContent = s.ctaContacts;
    $("xmKeys").innerHTML = s.keys;
    canvas.setAttribute("aria-label", s.tree);
    againBtn.textContent = s.again;
    againBtn.setAttribute("aria-label", s.againLabel);
    againBtn.hidden = REDUCED;
    pauseBtn.hidden = REDUCED;
    setPaused(paused);
    greetEl.innerHTML = greetHtml();
    greetEl.classList.toggle("long", [...s.greet].length > 30);
    updateGreet(true);
    $("xmMain").innerHTML = mainHtml();
    startTyped();
  }

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    store.set("aic-lang", l);
    render();
  }

  const langMenu = $("xmLangs");
  langMenu.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-l]");
    if (!b) return;
    langMenu.open = false;
    setLang(b.dataset.l);
  });
  document.addEventListener("pointerdown", (e) => {
    if (langMenu.open && !langMenu.contains(e.target)) langMenu.open = false;
  });
  langMenu.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !langMenu.open) return;
    langMenu.open = false;
    $("xmLangBtn").focus();
    e.stopPropagation();
  });
  root.addEventListener("click", (e) => {
    const link = e.target.closest("[data-go]");
    if (!link) return;
    const target = $(link.dataset.go);
    if (!target) return;
    e.preventDefault();
    const header = root.querySelector(".xm-top");
    const top = link.dataset.go === "xmHero" ? 0 : target.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - header.offsetHeight - 8;
    scroller.scrollTo({ top, behavior: REDUCED ? "auto" : "smooth" });
  });

  /* =====================================================================
     Запуск
     ===================================================================== */
  render();
  setupTree();
  setupSnow();
  renderFrame();
  updateHud();
  if (REDUCED) drawSnow(0);

  let resizeTimer = 0;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupTree();
      setupSnow();
      renderFrame();
      if (REDUCED) drawSnow(0);
    }, 60);
  }).observe(root);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      treeVisible = entries[entries.length - 1].isIntersecting;
    }, { root: scroller }).observe(stage);
  }

  start();
})();
