(() => {
  const EMAIL = "io@artintellico.com";
  /* Мови беруться зі спільного рантайму: порядок перемикача й самоназви */
  const LANGS = AIC.langs;
  const LANG_NAMES = AIC.langNames;
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";
  const HOME = "/home/guest";
  const SITE_DIR = HOME + "/artintellico";

  /* Тексти взяті з artintellico.com — ті самі, що в index.html */
  const I18N = {
    uk: {
      heroTitle: "Ми створюємо ІТ рішення, що працюють на ваш бізнес",
      heroText: "Команда ArtIntelliCo допомагає цифровізувати та автоматизувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень.",
      heroLead: "Для вашого бізнесу ми",
      phrases: ["розробляємо SaaS-платформи", "будуємо CRM та ERP системи", "впроваджуємо штучний інтелект", "переносимо інфраструктуру в хмару"],
      partnersTitle: "Наші партнери",
      contactTitle: "Розкажіть про вашу задачу",
      contactText: "Якщо у вас є пропозиція щодо співпраці або ви хочете дізнатися більше про наші рішення та досвід — напишіть нам на пошту.",
      emailLabel: "Пошта",
      copyright: "© 2026 ArtIntelliCo. Усі права захищено.",
      legal: "ТОВ «АртІнтелліко»",
      slogan: "Ми бачили, як зароджувалося IT. Знаємо, як воно працює сьогодні — і розуміємо, куди рухається завтра.",
      source: "Класична версія сайту"
    },
    en: {
      heroTitle: "We build IT solutions that work for your business",
      heroText: "The ArtIntelliCo team helps you digitalise and automate business processes by designing and delivering modern IT solutions.",
      heroLead: "For your business we",
      phrases: ["build SaaS platforms", "ship CRM and ERP systems", "put AI to work", "move infrastructure to the cloud"],
      partnersTitle: "Our partners",
      contactTitle: "Tell us about your project",
      contactText: "If you have a partnership proposal or want to know more about our solutions and experience — drop us an email.",
      emailLabel: "Email",
      copyright: "© 2026 ArtIntelliCo. All rights reserved.",
      legal: "ArtIntelliCo LLC",
      slogan: "We saw IT being born. We know how it works today — and we understand where it is heading tomorrow.",
      source: "Classic version of the site"
    },
    ru: {
      heroTitle: "Мы создаём работающие ИТ решения для вашего бизнеса",
      heroText: "Команда ArtIntelliCo помогает цифровизировать и автоматизировать ваши бизнес-процессы путём разработки и внедрения современных ИТ решений.",
      heroLead: "Для вашего бизнеса мы",
      phrases: ["разрабатываем SaaS-платформы", "строим CRM и ERP системы", "внедряем искусственный интеллект", "переносим инфраструктуру в облако"],
      partnersTitle: "Наши партнёры",
      contactTitle: "Расскажите о вашей задаче",
      contactText: "Если у вас есть предложение о сотрудничестве или вы хотите узнать больше о наших решениях и опыте — напишите нам на почту.",
      emailLabel: "Почта",
      copyright: "© 2026 ArtIntelliCo. Все права защищены.",
      legal: "ООО «АртИнтеллико»",
      slogan: "Мы видели, как зарождалось IT. Знаем, как оно работает сегодня — и понимаем, куда движется завтра.",
      source: "Классическая версия сайта"
    },
    de: {
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Ihre Geschäftsprozesse zu digitalisieren und zu automatisieren: Wir konzipieren moderne IT-Lösungen und führen sie bei Ihnen ein.",
      heroLead: "Was wir für Ihr Unternehmen tun",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme aufbauen", "KI in die Praxis bringen", "Infrastruktur in die Cloud verlagern"],
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie uns eine Zusammenarbeit vorschlagen möchten oder mehr über unsere Lösungen und unsere Erfahrung wissen wollen, schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      copyright: "© 2026 ArtIntelliCo. Alle Rechte vorbehalten.",
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt.",
      source: "Klassische Website"
    },
    fr: {
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous",
      phrases: ["développons des plateformes SaaS", "mettons en place des systèmes CRM et ERP", "mettons l'IA au travail", "migrons l'infrastructure vers le cloud"],
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Si vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience, écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l'informatique. Nous savons comment elle fonctionne aujourd'hui — et nous comprenons où elle va demain.",
      source: "Site classique"
    },
    es: {
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar sus procesos de negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio",
      phrases: ["desarrollamos plataformas SaaS", "implantamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos un correo electrónico.",
      emailLabel: "Correo electrónico",
      copyright: "© 2026 ArtIntelliCo. Todos los derechos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos nacer la informática. Sabemos cómo funciona hoy y entendemos hacia dónde va mañana.",
      source: "Sitio clásico"
    },
    pt: {
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio",
      phrases: ["desenvolvemos plataformas SaaS", "implementamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, envie-nos um e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Todos os direitos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã.",
      source: "Site clássico"
    },
    it: {
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali progettando e introducendo soluzioni IT moderne.",
      heroLead: "Per la Sua azienda",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo al lavoro l'IA", "portiamo l'infrastruttura nel cloud"],
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l'informatica. Sappiamo come funziona oggi e capiamo dove andrà domani.",
      source: "Sito classico"
    }
  };
  /* Рядки інтерфейсу mc (у mc є переклади, тож меню локалізовані, як у справжньому) */
  const MX = {
    uk: {
      menu: ["Ліва", "Файл", "Команда", "Налаштування", "Права"],
      leftItems: ["Повний формат", "Короткий формат", "Перечитати"],
      rightModes: ["Список файлів", "Швидкий перегляд", "Інформація"],
      fileItems: ["Перегляд", "Редагування", "Копіювати", "Перейменувати", "Створити каталог", "Видалити", "Вихід"],
      cmdItems: ["Меню користувача", "Написати запит", "Відкрити artintellico.com", "Командна оболонка"],
      versions: "Інші версії сайту",
      skins: "Скін",
      cols: ["Ім'я", "Розмір", "Час правки"],
      keys: ["Допомога", "Меню", "Перегляд", "Редагув.", "Копія", "Перейм.", "НовКат", "Вилуч.", "МенюМС", "Вихід"],
      viewKeys: ["Допомога", "Перенос", "Вихід", "Hex", "", "", "", "", "", "Вихід"],
      editKeys: ["Допомога", "Зберегти", "", "", "", "", "", "", "", "Вихід"],
      hints: [
        "Підказка: Enter відкриває файл, Tab перемикає панелі, F3 — перегляд.",
        "Підказка: запустіть request.sh, щоб написати нам запит.",
        "Підказка: F9 відкриває меню з мовою та скінами.",
        "Підказка: Ctrl+O показує командну оболонку.",
        "Підказка: F5 копіює вміст файлу в буфер обміну."
      ],
      info: ["Файл", "Режим", "Посилань", "Власник", "Розмір", "Змінено", "Файлова система", "Пристрій", "Тип", "Вільно"],
      bytes: "байт",
      dirSummary: (n) => `Каталог: ${n} об'єктів`,
      quitText: "Справді вийти з Midnight Commander?",
      yes: "Так", no: "Ні", ok: "Гаразд", cancel: "Скасувати", error: "Помилка",
      copyTitle: "Копіювання", copyTo: (n) => `Копіювати «${n}» до:`, clipboard: "буфер обміну",
      copied: (n) => `Скопійовано в буфер обміну: ${n}`, copyFailed: "Не вдалося записати в буфер обміну.",
      ro: { move: (n) => `Не можу перейменувати «${n}»: файлова система лише для читання.`, mkdir: "Не можу створити каталог: файлова система лише для читання.", del: (n) => `Не можу вилучити «${n}»: файлова система лише для читання.` },
      delTitle: "Вилучення", delAsk: (n) => `Вилучити «${n}»?`,
      editRO: "Не можу зберегти файл: доступ заборонено.",
      sendTitle: "Запит", sendAsk: `Надіслати запит на ${EMAIL}? Відкриється ваша поштова програма.`, send: "Надіслати", dontSend: "Не надсилати",
      defaultSubject: "Запит з сайту", placeholder: "Напишіть тут про вашу задачу.",
      userMenu: "Меню користувача",
      um: ["Написати запит (request.sh)", "Обговорити вибрану послугу", "Відкрити artintellico.com", "Копіювати адресу пошти", "Змінити мову"],
      shellHint: "Ctrl+O або Esc — назад до панелей",
      mcHint: "Введіть mc, щоб запустити Midnight Commander.",
      notFound: (c) => `bash: ${c}: команду не знайдено`,
      discuss: "Обговорити задачу: ./request.sh",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      helpTitle: "Допомога",
      help: [
        "Midnight Commander для сайту ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   рух курсору",
        "Enter           відкрити каталог або файл",
        "Tab             інша панель",
        "F3 / F4         перегляд / редагування",
        "F5              копіювати вміст у буфер обміну",
        "F2              меню користувача",
        "F9              меню: мова, скіни, інші версії",
        "Ctrl+O          командна оболонка",
        "F10             вихід",
        "",
        "Щоб написати нам, запустіть request.sh:",
        "відкриється mcedit, F2 надішле лист."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — інші версії"]
    },
    en: {
      menu: ["Left", "File", "Command", "Options", "Right"],
      leftItems: ["Full format", "Brief format", "Reread"],
      rightModes: ["File listing", "Quick view", "Info"],
      fileItems: ["View", "Edit", "Copy", "Rename/Move", "Make directory", "Delete", "Exit"],
      cmdItems: ["User menu", "Write a request", "Open artintellico.com", "Command shell"],
      versions: "Other versions of the site",
      skins: "Skin",
      cols: ["Name", "Size", "Modify time"],
      keys: ["Help", "Menu", "View", "Edit", "Copy", "RenMov", "Mkdir", "Delete", "PullDn", "Quit"],
      viewKeys: ["Help", "Wrap", "Quit", "Hex", "", "", "", "", "", "Quit"],
      editKeys: ["Help", "Save", "", "", "", "", "", "", "", "Quit"],
      hints: [
        "Hint: Enter opens a file, Tab switches panels, F3 views.",
        "Hint: run request.sh to write us a request.",
        "Hint: F9 opens the menu with language and skins.",
        "Hint: Ctrl+O shows the command shell.",
        "Hint: F5 copies a file's contents to the clipboard."
      ],
      info: ["File", "Mode", "Links", "Owner", "Size", "Modified", "Filesystem", "Device", "Type", "Free"],
      bytes: "bytes",
      dirSummary: (n) => `Directory: ${n} entries`,
      quitText: "Do you really want to quit the Midnight Commander?",
      yes: "Yes", no: "No", ok: "OK", cancel: "Cancel", error: "Error",
      copyTitle: "Copy", copyTo: (n) => `Copy "${n}" to:`, clipboard: "clipboard",
      copied: (n) => `Copied to the clipboard: ${n}`, copyFailed: "Couldn't write to the clipboard.",
      ro: { move: (n) => `Cannot rename "${n}": read-only file system.`, mkdir: "Cannot create directory: read-only file system.", del: (n) => `Cannot delete "${n}": read-only file system.` },
      delTitle: "Delete", delAsk: (n) => `Delete "${n}"?`,
      editRO: "Cannot save file: permission denied.",
      sendTitle: "Request", sendAsk: `Send the request to ${EMAIL}? Your email app will open.`, send: "Send", dontSend: "Don't send",
      defaultSubject: "Enquiry from the website", placeholder: "Tell us about your project here.",
      userMenu: "User menu",
      um: ["Write a request (request.sh)", "Discuss the selected service", "Open artintellico.com", "Copy email address", "Switch language"],
      shellHint: "Ctrl+O or Esc — back to the panels",
      mcHint: "Type mc to start Midnight Commander.",
      notFound: (c) => `bash: ${c}: command not found`,
      discuss: "Discuss your project: ./request.sh",
      skip: "Press any key to skip",
      helpTitle: "Help",
      help: [
        "Midnight Commander for the ArtIntelliCo site.",
        "",
        "↑ ↓ PgUp PgDn   move the cursor",
        "Enter           open a directory or file",
        "Tab             other panel",
        "F3 / F4         view / edit",
        "F5              copy contents to the clipboard",
        "F2              user menu",
        "F9              menu: language, skins, other versions",
        "Ctrl+O          command shell",
        "F10             quit",
        "",
        "To write to us, run request.sh:",
        "mcedit opens, F2 sends the letter."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — other versions"]
    },
    ru: {
      menu: ["Левая", "Файл", "Команда", "Настройки", "Правая"],
      leftItems: ["Полный формат", "Краткий формат", "Перечитать"],
      rightModes: ["Список файлов", "Быстрый просмотр", "Информация"],
      fileItems: ["Просмотр", "Правка", "Копировать", "Переименовать", "Создать каталог", "Удалить", "Выход"],
      cmdItems: ["Меню пользователя", "Написать запрос", "Открыть artintellico.com", "Командная оболочка"],
      versions: "Другие версии сайта",
      skins: "Скин",
      cols: ["Имя", "Размер", "Время правки"],
      keys: ["Помощь", "Меню", "Просмотр", "Правка", "Копия", "ПереимПер", "НовКтлг", "Удалить", "МенюMC", "Выход"],
      viewKeys: ["Помощь", "Перенос", "Выход", "Hex", "", "", "", "", "", "Выход"],
      editKeys: ["Помощь", "Сохран", "", "", "", "", "", "", "", "Выход"],
      hints: [
        "Совет: Enter открывает файл, Tab переключает панели, F3 — просмотр.",
        "Совет: запустите request.sh, чтобы написать нам запрос.",
        "Совет: F9 открывает меню с языком и скинами.",
        "Совет: Ctrl+O показывает командную оболочку.",
        "Совет: F5 копирует содержимое файла в буфер обмена."
      ],
      info: ["Файл", "Режим", "Ссылок", "Владелец", "Размер", "Изменён", "Файловая система", "Устройство", "Тип", "Свободно"],
      bytes: "байт",
      dirSummary: (n) => `Каталог: ${n} объектов`,
      quitText: "Вы действительно хотите выйти из Midnight Commander?",
      yes: "Да", no: "Нет", ok: "Хорошо", cancel: "Отмена", error: "Ошибка",
      copyTitle: "Копирование", copyTo: (n) => `Копировать «${n}» в:`, clipboard: "буфер обмена",
      copied: (n) => `Скопировано в буфер обмена: ${n}`, copyFailed: "Не удалось записать в буфер обмена.",
      ro: { move: (n) => `Не могу переименовать «${n}»: файловая система только для чтения.`, mkdir: "Не могу создать каталог: файловая система только для чтения.", del: (n) => `Не могу удалить «${n}»: файловая система только для чтения.` },
      delTitle: "Удаление", delAsk: (n) => `Удалить «${n}»?`,
      editRO: "Не могу сохранить файл: доступ запрещён.",
      sendTitle: "Запрос", sendAsk: `Отправить запрос на ${EMAIL}? Откроется ваша почтовая программа.`, send: "Отправить", dontSend: "Не отправлять",
      defaultSubject: "Запрос с сайта", placeholder: "Напишите здесь о вашей задаче.",
      userMenu: "Меню пользователя",
      um: ["Написать запрос (request.sh)", "Обсудить выбранную услугу", "Открыть artintellico.com", "Копировать адрес почты", "Сменить язык"],
      shellHint: "Ctrl+O или Esc — назад к панелям",
      mcHint: "Введите mc, чтобы запустить Midnight Commander.",
      notFound: (c) => `bash: ${c}: команда не найдена`,
      discuss: "Обсудить задачу: ./request.sh",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      helpTitle: "Помощь",
      help: [
        "Midnight Commander для сайта ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   движение курсора",
        "Enter           открыть каталог или файл",
        "Tab             другая панель",
        "F3 / F4         просмотр / правка",
        "F5              копировать содержимое в буфер обмена",
        "F2              меню пользователя",
        "F9              меню: язык, скины, другие версии",
        "Ctrl+O          командная оболочка",
        "F10             выход",
        "",
        "Чтобы написать нам, запустите request.sh:",
        "откроется mcedit, F2 отправит письмо."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — другие версии"]
    },
    de: {
      menu: ["Links", "Datei", "Befehl", "Optionen", "Rechts"],
      leftItems: ["Langformat", "Kurzformat", "Neu einlesen"],
      rightModes: ["Dateiliste", "Schnellansicht", "Info"],
      fileItems: ["Ansicht", "Bearbeiten", "Kopieren", "Umbenennen/Verschieben", "Verzeichnis anlegen", "Löschen", "Beenden"],
      cmdItems: ["Benutzermenü", "Anfrage schreiben", "artintellico.com öffnen", "Befehlsshell"],
      versions: "Andere Versionen der Website",
      skins: "Skin",
      cols: ["Name", "Größe", "Geändert"],
      keys: ["Hilfe", "Menü", "Ansicht", "Bearb.", "Kopie", "UmbVer", "NeuVz", "Löschen", "Menüs", "Ende"],
      viewKeys: ["Hilfe", "Umbruch", "Ende", "Hex", "", "", "", "", "", "Ende"],
      editKeys: ["Hilfe", "Sichern", "", "", "", "", "", "", "", "Ende"],
      hints: [
        "Tipp: Enter öffnet eine Datei, Tab wechselt das Panel, F3 zeigt sie an.",
        "Tipp: Starten Sie request.sh, um uns eine Anfrage zu schreiben.",
        "Tipp: F9 öffnet das Menü mit Sprache und Skins.",
        "Tipp: Strg+O zeigt die Befehlsshell.",
        "Tipp: F5 kopiert den Inhalt einer Datei in die Zwischenablage."
      ],
      info: ["Datei", "Modus", "Links", "Besitzer", "Größe", "Geändert", "Dateisystem", "Gerät", "Typ", "Frei"],
      bytes: "Bytes",
      dirSummary: (n) => `Verzeichnis: ${n} Einträge`,
      quitText: "Wollen Sie Midnight Commander wirklich beenden?",
      yes: "Ja", no: "Nein", ok: "OK", cancel: "Abbrechen", error: "Fehler",
      copyTitle: "Kopieren", copyTo: (n) => `„${n}“ kopieren nach:`, clipboard: "Zwischenablage",
      copied: (n) => `In die Zwischenablage kopiert: ${n}`, copyFailed: "Schreiben in die Zwischenablage fehlgeschlagen.",
      ro: { move: (n) => `„${n}“ kann nicht umbenannt werden: Dateisystem ist schreibgeschützt.`, mkdir: "Verzeichnis kann nicht angelegt werden: Dateisystem ist schreibgeschützt.", del: (n) => `„${n}“ kann nicht gelöscht werden: Dateisystem ist schreibgeschützt.` },
      delTitle: "Löschen", delAsk: (n) => `„${n}“ löschen?`,
      editRO: "Datei kann nicht gespeichert werden: Zugriff verweigert.",
      sendTitle: "Anfrage", sendAsk: `Anfrage an ${EMAIL} senden? Ihr E-Mail-Programm wird geöffnet.`, send: "Senden", dontSend: "Nicht senden",
      defaultSubject: "Anfrage über die Website", placeholder: "Erzählen Sie uns hier von Ihrem Projekt.",
      userMenu: "Benutzermenü",
      um: ["Anfrage schreiben (request.sh)", "Gewählte Leistung besprechen", "artintellico.com öffnen", "E-Mail-Adresse kopieren", "Sprache wechseln"],
      shellHint: "Strg+O oder Esc — zurück zu den Panels",
      mcHint: "Geben Sie mc ein, um Midnight Commander zu starten.",
      notFound: (c) => `bash: ${c}: Befehl nicht gefunden.`,
      discuss: "Sprechen wir über Ihr Projekt: ./request.sh",
      skip: "Drücken Sie eine beliebige Taste, um zu überspringen",
      helpTitle: "Hilfe",
      help: [
        "Midnight Commander für die ArtIntelliCo-Website.",
        "",
        "↑ ↓ Bild↑ Bild↓ Cursor bewegen",
        "Enter           Verzeichnis oder Datei öffnen",
        "Tab             anderes Panel",
        "F3 / F4         ansehen / bearbeiten",
        "F5              Inhalt in die Zwischenablage kopieren",
        "F2              Benutzermenü",
        "F9              Menü: Sprache, Skins, andere Versionen",
        "Strg+O          Befehlsshell",
        "F10             beenden",
        "",
        "Um uns zu schreiben, starten Sie request.sh:",
        "mcedit öffnet sich, F2 sendet die Nachricht."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — andere Versionen"]
    },
    fr: {
      menu: ["Gauche", "Fichier", "Commande", "Options", "Droite"],
      leftItems: ["Format complet", "Format bref", "Relire"],
      rightModes: ["Liste des fichiers", "Vue rapide", "Infos"],
      fileItems: ["Voir", "Éditer", "Copier", "Renommer/Déplacer", "Créer un répertoire", "Supprimer", "Quitter"],
      cmdItems: ["Menu utilisateur", "Écrire une demande", "Ouvrir artintellico.com", "Interpréteur de commandes"],
      versions: "Autres versions du site",
      skins: "Thème",
      cols: ["Nom", "Taille", "Modifié le"],
      keys: ["Aide", "Menu", "Voir", "Éditer", "Copier", "RenDép", "NvRép", "Suppr", "Menus", "Sortir"],
      viewKeys: ["Aide", "Coupure", "Sortir", "Hex", "", "", "", "", "", "Sortir"],
      editKeys: ["Aide", "Enreg.", "", "", "", "", "", "", "", "Sortir"],
      hints: [
        "Astuce\u00a0: Entrée ouvre un fichier, Tab change de panneau, F3 l'affiche.",
        "Astuce\u00a0: lancez request.sh pour nous écrire une demande.",
        "Astuce\u00a0: F9 ouvre le menu des langues et des thèmes.",
        "Astuce\u00a0: Ctrl+O affiche l'interpréteur de commandes.",
        "Astuce\u00a0: F5 copie le contenu d'un fichier dans le presse-papiers."
      ],
      info: ["Fichier", "Mode", "Liens", "Propriétaire", "Taille", "Modifié", "Système de fichiers", "Périphérique", "Type", "Libre"],
      bytes: "octets",
      dirSummary: (n) => `Répertoire\u00a0: ${n} éléments`,
      quitText: "Voulez-vous vraiment quitter Midnight Commander\u00a0?",
      yes: "Oui", no: "Non", ok: "OK", cancel: "Annuler", error: "Erreur",
      copyTitle: "Copie", copyTo: (n) => `Copier «\u00a0${n}\u00a0» vers\u00a0:`, clipboard: "presse-papiers",
      copied: (n) => `Copié dans le presse-papiers\u00a0: ${n}`, copyFailed: "Impossible d'écrire dans le presse-papiers.",
      ro: { move: (n) => `Impossible de renommer «\u00a0${n}\u00a0»\u00a0: système de fichiers en lecture seule.`, mkdir: "Impossible de créer le répertoire\u00a0: système de fichiers en lecture seule.", del: (n) => `Impossible de supprimer «\u00a0${n}\u00a0»\u00a0: système de fichiers en lecture seule.` },
      delTitle: "Suppression", delAsk: (n) => `Supprimer «\u00a0${n}\u00a0»\u00a0?`,
      editRO: "Impossible d'enregistrer le fichier\u00a0: permission refusée.",
      sendTitle: "Demande", sendAsk: `Envoyer la demande à ${EMAIL}\u00a0? Votre logiciel de messagerie va s'ouvrir.`, send: "Envoyer", dontSend: "Ne pas envoyer",
      defaultSubject: "Demande depuis le site", placeholder: "Parlez-nous ici de votre projet.",
      userMenu: "Menu utilisateur",
      um: ["Écrire une demande (request.sh)", "Parler du service sélectionné", "Ouvrir artintellico.com", "Copier l'adresse e-mail", "Changer de langue"],
      shellHint: "Ctrl+O ou Échap — retour aux panneaux",
      mcHint: "Tapez mc pour lancer Midnight Commander.",
      notFound: (c) => `bash: ${c}\u00a0: commande introuvable`,
      discuss: "Parlons de votre projet\u00a0: ./request.sh",
      skip: "Appuyez sur une touche pour passer",
      helpTitle: "Aide",
      help: [
        "Midnight Commander pour le site ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   déplacer le curseur",
        "Entrée          ouvrir un répertoire ou un fichier",
        "Tab             autre panneau",
        "F3 / F4         voir / éditer",
        "F5              copier le contenu dans le presse-papiers",
        "F2              menu utilisateur",
        "F9              menu\u00a0: langue, thèmes, autres versions",
        "Ctrl+O          interpréteur de commandes",
        "F10             quitter",
        "",
        "Pour nous écrire, lancez request.sh\u00a0:",
        "mcedit s'ouvre, F2 envoie le message."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — autres versions"]
    },
    es: {
      menu: ["Izquierdo", "Archivo", "Comando", "Opciones", "Derecho"],
      leftItems: ["Formato completo", "Formato breve", "Releer"],
      rightModes: ["Listado de archivos", "Vista rápida", "Información"],
      fileItems: ["Ver", "Editar", "Copiar", "Renombrar/Mover", "Crear directorio", "Borrar", "Salir"],
      cmdItems: ["Menú de usuario", "Escribir una solicitud", "Abrir artintellico.com", "Intérprete de órdenes"],
      versions: "Otras versiones del sitio",
      skins: "Tema",
      cols: ["Nombre", "Tamaño", "Modificado"],
      keys: ["Ayuda", "Menú", "Ver", "Editar", "Copiar", "RenMov", "CrDir", "Borrar", "Menús", "Salir"],
      viewKeys: ["Ayuda", "Ajuste", "Salir", "Hex", "", "", "", "", "", "Salir"],
      editKeys: ["Ayuda", "Guardar", "", "", "", "", "", "", "", "Salir"],
      hints: [
        "Consejo: Intro abre un archivo, Tab cambia de panel, F3 lo muestra.",
        "Consejo: ejecute request.sh para escribirnos una solicitud.",
        "Consejo: F9 abre el menú con el idioma y los temas.",
        "Consejo: Ctrl+O muestra el intérprete de órdenes.",
        "Consejo: F5 copia el contenido de un archivo al portapapeles."
      ],
      info: ["Archivo", "Modo", "Enlaces", "Propietario", "Tamaño", "Modificado", "Sistema de archivos", "Dispositivo", "Tipo", "Libre"],
      bytes: "bytes",
      dirSummary: (n) => `Directorio: ${n} elementos`,
      quitText: "¿Realmente desea salir de Midnight Commander?",
      yes: "Sí", no: "No", ok: "Aceptar", cancel: "Cancelar", error: "Error",
      copyTitle: "Copiar", copyTo: (n) => `Copiar «${n}» en:`, clipboard: "portapapeles",
      copied: (n) => `Copiado al portapapeles: ${n}`, copyFailed: "No se pudo escribir en el portapapeles.",
      ro: { move: (n) => `No se puede renombrar «${n}»: sistema de archivos de solo lectura.`, mkdir: "No se puede crear el directorio: sistema de archivos de solo lectura.", del: (n) => `No se puede borrar «${n}»: sistema de archivos de solo lectura.` },
      delTitle: "Borrar", delAsk: (n) => `¿Borrar «${n}»?`,
      editRO: "No se puede guardar el archivo: permiso denegado.",
      sendTitle: "Solicitud", sendAsk: `¿Enviar la solicitud a ${EMAIL}? Se abrirá su programa de correo.`, send: "Enviar", dontSend: "No enviar",
      defaultSubject: "Consulta desde la web", placeholder: "Cuéntenos aquí su proyecto.",
      userMenu: "Menú de usuario",
      um: ["Escribir una solicitud (request.sh)", "Hablar del servicio seleccionado", "Abrir artintellico.com", "Copiar la dirección de correo", "Cambiar de idioma"],
      shellHint: "Ctrl+O o Esc — volver a los paneles",
      mcHint: "Escriba mc para iniciar Midnight Commander.",
      notFound: (c) => `bash: ${c}: orden no encontrada`,
      discuss: "Hablemos de su proyecto: ./request.sh",
      skip: "Pulse cualquier tecla para omitir",
      helpTitle: "Ayuda",
      help: [
        "Midnight Commander para el sitio de ArtIntelliCo.",
        "",
        "↑ ↓ RePág AvPág mover el cursor",
        "Intro           abrir un directorio o un archivo",
        "Tab             otro panel",
        "F3 / F4         ver / editar",
        "F5              copiar el contenido al portapapeles",
        "F2              menú de usuario",
        "F9              menú: idioma, temas, otras versiones",
        "Ctrl+O          intérprete de órdenes",
        "F10             salir",
        "",
        "Para escribirnos, ejecute request.sh:",
        "se abrirá mcedit; F2 envía el mensaje."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — otras versiones"]
    },
    pt: {
      menu: ["Esquerdo", "Ficheiro", "Comando", "Opções", "Direito"],
      leftItems: ["Formato completo", "Formato breve", "Reler"],
      rightModes: ["Lista de ficheiros", "Vista rápida", "Informação"],
      fileItems: ["Ver", "Editar", "Copiar", "Mudar nome/Mover", "Criar diretório", "Apagar", "Sair"],
      cmdItems: ["Menu do utilizador", "Escrever um pedido", "Abrir artintellico.com", "Linha de comandos"],
      versions: "Outras versões do site",
      skins: "Tema",
      cols: ["Nome", "Tamanho", "Modificado"],
      keys: ["Ajuda", "Menu", "Ver", "Editar", "Copiar", "MudMov", "CriDir", "Apagar", "Menus", "Sair"],
      viewKeys: ["Ajuda", "Quebra", "Sair", "Hex", "", "", "", "", "", "Sair"],
      editKeys: ["Ajuda", "Gravar", "", "", "", "", "", "", "", "Sair"],
      hints: [
        "Dica: Enter abre um ficheiro, Tab muda de painel, F3 mostra-o.",
        "Dica: execute request.sh para nos escrever um pedido.",
        "Dica: F9 abre o menu com o idioma e os temas.",
        "Dica: Ctrl+O mostra a linha de comandos.",
        "Dica: F5 copia o conteúdo de um ficheiro para a área de transferência."
      ],
      info: ["Ficheiro", "Modo", "Ligações", "Dono", "Tamanho", "Modificado", "Sistema de ficheiros", "Dispositivo", "Tipo", "Livre"],
      bytes: "bytes",
      dirSummary: (n) => `Diretório: ${n} entradas`,
      quitText: "Quer mesmo sair do Midnight Commander?",
      yes: "Sim", no: "Não", ok: "OK", cancel: "Cancelar", error: "Erro",
      copyTitle: "Copiar", copyTo: (n) => `Copiar «${n}» para:`, clipboard: "área de transferência",
      copied: (n) => `Copiado para a área de transferência: ${n}`, copyFailed: "Não foi possível escrever na área de transferência.",
      ro: { move: (n) => `Não é possível mudar o nome de «${n}»: sistema de ficheiros só de leitura.`, mkdir: "Não é possível criar o diretório: sistema de ficheiros só de leitura.", del: (n) => `Não é possível apagar «${n}»: sistema de ficheiros só de leitura.` },
      delTitle: "Apagar", delAsk: (n) => `Apagar «${n}»?`,
      editRO: "Não é possível gravar o ficheiro: permissão negada.",
      sendTitle: "Pedido", sendAsk: `Enviar o pedido para ${EMAIL}? Vai abrir-se o seu programa de e-mail.`, send: "Enviar", dontSend: "Não enviar",
      defaultSubject: "Pedido a partir do site", placeholder: "Fale-nos aqui do seu projeto.",
      userMenu: "Menu do utilizador",
      um: ["Escrever um pedido (request.sh)", "Falar sobre o serviço selecionado", "Abrir artintellico.com", "Copiar o endereço de e-mail", "Mudar de idioma"],
      shellHint: "Ctrl+O ou Esc — voltar aos painéis",
      mcHint: "Escreva mc para iniciar o Midnight Commander.",
      notFound: (c) => `bash: ${c}: comando não encontrado`,
      discuss: "Fale-nos do seu projeto: ./request.sh",
      skip: "Prima qualquer tecla para saltar",
      helpTitle: "Ajuda",
      help: [
        "Midnight Commander para o site da ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   mover o cursor",
        "Enter           abrir um diretório ou um ficheiro",
        "Tab             outro painel",
        "F3 / F4         ver / editar",
        "F5              copiar para a área de transferência",
        "F2              menu do utilizador",
        "F9              menu: idioma, temas, outras versões",
        "Ctrl+O          linha de comandos",
        "F10             sair",
        "",
        "Para nos escrever, execute request.sh:",
        "abre-se o mcedit e F2 envia a mensagem."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — outras versões"]
    },
    it: {
      menu: ["Sinistra", "File", "Comando", "Opzioni", "Destra"],
      leftItems: ["Formato completo", "Formato breve", "Rileggi"],
      rightModes: ["Elenco file", "Vista rapida", "Informazioni"],
      fileItems: ["Visualizza", "Modifica", "Copia", "Rinomina/Sposta", "Crea directory", "Elimina", "Esci"],
      cmdItems: ["Menu utente", "Scrivi una richiesta", "Apri artintellico.com", "Shell dei comandi"],
      versions: "Altre versioni del sito",
      skins: "Tema",
      cols: ["Nome", "Dimens.", "Modificato"],
      keys: ["Aiuto", "Menu", "Vedi", "Modif.", "Copia", "RinSpo", "CreaDir", "Elimina", "Tendina", "Esci"],
      viewKeys: ["Aiuto", "A capo", "Esci", "Hex", "", "", "", "", "", "Esci"],
      editKeys: ["Aiuto", "Salva", "", "", "", "", "", "", "", "Esci"],
      hints: [
        "Suggerimento: Invio apre un file, Tab cambia pannello, F3 lo visualizza.",
        "Suggerimento: esegua request.sh per scriverci una richiesta.",
        "Suggerimento: F9 apre il menu con lingua e temi.",
        "Suggerimento: Ctrl+O mostra la shell dei comandi.",
        "Suggerimento: F5 copia il contenuto di un file negli appunti."
      ],
      info: ["File", "Modo", "Collegamenti", "Proprietario", "Dimensione", "Modificato", "File system", "Dispositivo", "Tipo", "Libero"],
      bytes: "byte",
      dirSummary: (n) => `Directory: ${n} elementi`,
      quitText: "Vuole davvero uscire da Midnight Commander?",
      yes: "Sì", no: "No", ok: "OK", cancel: "Annulla", error: "Errore",
      copyTitle: "Copia", copyTo: (n) => `Copia «${n}» in:`, clipboard: "appunti",
      copied: (n) => `Copiato negli appunti: ${n}`, copyFailed: "Impossibile scrivere negli appunti.",
      ro: { move: (n) => `Impossibile rinominare «${n}»: file system di sola lettura.`, mkdir: "Impossibile creare la directory: file system di sola lettura.", del: (n) => `Impossibile eliminare «${n}»: file system di sola lettura.` },
      delTitle: "Eliminazione", delAsk: (n) => `Eliminare «${n}»?`,
      editRO: "Impossibile salvare il file: permesso negato.",
      sendTitle: "Richiesta", sendAsk: `Inviare la richiesta a ${EMAIL}? Si aprirà il Suo programma di posta.`, send: "Invia", dontSend: "Non inviare",
      defaultSubject: "Richiesta dal sito", placeholder: "Ci parli qui del Suo progetto.",
      userMenu: "Menu utente",
      um: ["Scrivi una richiesta (request.sh)", "Parla del servizio selezionato", "Apri artintellico.com", "Copia l'indirizzo e-mail", "Cambia lingua"],
      shellHint: "Ctrl+O o Esc — torna ai pannelli",
      mcHint: "Digiti mc per avviare Midnight Commander.",
      notFound: (c) => `bash: ${c}: comando non trovato`,
      discuss: "Parliamo del Suo progetto: ./request.sh",
      skip: "Premere un tasto qualsiasi per saltare",
      helpTitle: "Aiuto",
      help: [
        "Midnight Commander per il sito ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   sposta il cursore",
        "Invio           apre una directory o un file",
        "Tab             altro pannello",
        "F3 / F4         visualizza / modifica",
        "F5              copia il contenuto negli appunti",
        "F2              menu utente",
        "F9              menu: lingua, temi, altre versioni",
        "Ctrl+O          shell dei comandi",
        "F10             esce",
        "",
        "Per scriverci, esegua request.sh:",
        "si apre mcedit, F2 invia il messaggio."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", `lang ${LANGS.join("|")}, skin default|dark|mono, clear, exit`, "nc, dos, unix, apple, lisa, linux — altre versioni"]
    }
  };

  /* Послуги як markdown-файли в services/: заголовок, вступ, розділ «чому», склад, результат */
  const MD = {
    uk: {
      title: "Послуги",
      lead: "Ми не прив'язані до однієї мови програмування чи платформи. Спершу розбираємося, що треба зробити, і лише потім обираємо інструменти. Буває, що найкраща відповідь — готовий сервіс за підпискою; тоді ми так і скажемо, і розробляти нічого не доведеться.",
      open: "Кожна послуга — окремий файл. Відкрийте його через Enter або F3:",
      includes: "Що входить",
      result: "Результат",
      pages: [
        {
          title: "Розробка концепції ІТ-рішення",
          intro: "Допомагаємо зрозуміти, яка система вам потрібна, і записати це так, щоб із документом могли працювати і бізнес, і розробники.",
          head: "Чому варто почати саме з цього",
          why: "Найдорожча помилка в ІТ-проєкті стається до першого рядка коду: команда будує систему під задачу, яку ніхто толком не сформулював. Ми починаємо з розмов із тими, хто в системі працюватиме, — з бухгалтерією, складом, менеджерами. З керівником теж, але не лише з ним.\n\nІноді за підсумком ми радимо нічого не розробляти, а взяти готовий продукт і доналаштувати його. Для нас це нормальний результат.",
          includes: ["інтерв'ю з працівниками й розбір того, як зараз влаштовані процеси", "бізнес-вимоги та опис сценаріїв роботи", "порівняння готових рішень із розробкою на замовлення", "технічне завдання з оцінкою строків і бюджету за етапами"],
          result: "Документ, за яким будь-яка команда — наша чи інша — зможе оцінити роботу й узятися за неї."
        },
        {
          title: "Розробка SaaS-рішень",
          intro: "Проєктуємо й розробляємо SaaS-платформи. Починаємо з першої версії для пілотних клієнтів і доводимо до сервісу, де кожен клієнт має свій простір, тарифи й особистий кабінет.",
          head: "Де в SaaS гроші",
          why: "Не в коді. У тому, наскільки просто новому клієнту зареєструватися, оплатити й почати працювати, не дзвонячи в підтримку. Тому мультитенантність, білінг і права доступу ми закладаємо з першого дня: переробляти їх, коли клієнти вже всередині, коштує в рази дорожче.\n\nПершу версію намагаємося випустити якомога раніше. Справжні користувачі швидко показують, які функції були зайві.",
          includes: ["мультитенантна архітектура з ізоляцією даних клієнтів", "реєстрація, тарифи, підписки й онлайн-оплата", "особисті кабінети, ролі та права доступу", "інтеграції та відкрите API для ваших клієнтів", "масштабування під зростання навантаження"],
          result: "Продукт, який можна продавати за підпискою, а не проєкт, що щоразу впроваджується вручну."
        },
        {
          title: "Веброзробка",
          intro: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси. Робимо під задачу, шаблонів не беремо.",
          head: "Як ми міряємо сайт",
          why: "Заявками й замовленнями. Дизайн у портфоліо тут другорядний. Ще до старту домовляємося, що вважати результатом, і налаштовуємо аналітику до запуску, а не через пів року після нього.\n\nТехнологію добираємо за задачею. Лендингу важка платформа не потрібна, а маркетплейс у конструктор сайтів не вміститься.",
          includes: ["прототип і дизайн інтерфейсів", "frontend, backend і панель адміністрування", "інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидкість завантаження й аналітика", "запуск і супровід"],
          result: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        {
          title: "Мобільні застосунки",
          intro: "Застосунки для iOS та Android разом із серверною частиною й панеллю адміністрування.",
          head: "Коли застосунок не потрібен",
          why: "Застосунок виправданий, якщо клієнт повертається до нього регулярно: робить повторні замовлення, стежить за статусом, накопичує бонуси. Якщо людина заходить раз на рік, зручний мобільний сайт вийде дешевше, і ми скажемо про це до початку робіт.\n\nМіж нативною й кросплатформною розробкою обираємо за бюджетом і тим, наскільки застосунку потрібні камера, геолокація та офлайн-режим.",
          includes: ["застосунки для iOS та Android", "серверна частина та API", "адмінпанель для контенту, замовлень і користувачів", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          result: "Застосунок, що проходить модерацію магазинів і яким ваша команда керує без розробників."
        },
        {
          title: "Рішення зі штучним інтелектом",
          intro: "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів: рішення на базі штучного інтелекту й машинного навчання беруть на себе рутинні кроки, які зараз виконують працівники.",
          head: "ШІ без захвату",
          why: "Ми ставимося до ШІ скептичніше за багатьох. Половину ідей «давайте додамо нейромережу» розв'язує звичайна автоматизація. Але там, де люди годинами розбирають листи, документи й звернення, мовні моделі справді знімають рутину.\n\nПочинаємо з пілота на ваших даних. Цифри точності з'являються до основної розробки, а не після неї.",
          includes: ["ШІ-агенти, які самі проходять рутинні кроки процесу: розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень і пошук у базі знань", "прогнози попиту й аналіз даних", "пілот з оцінкою якості на ваших даних"],
          result: "Конкретний процес, який раніше виконували люди, тепер виконує система, а людина її контролює."
        },
        {
          title: "Розробка CRM та ERP",
          intro: "CRM та ERP, побудовані навколо ваших процесів, а не процеси, підігнані під систему.",
          head: "Коли коробки вже замало",
          why: "Коробкова CRM добра, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», дешевше зробити своє.\n\nДані переносимо зі старих систем і таблиць. Запускаємо по відділах, щоб робота не зупинялася ні на день.",
          includes: ["модулі продажів, складу, виробництва, фінансів — за потреби", "ролі, права доступу та журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією та поштою"],
          result: "Одна система замість зоопарку таблиць. Керівник бачить стан справ без щотижневих звітів від кожного відділу."
        },
        {
          title: "Хмарні рішення",
          intro: "Переносимо інфраструктуру до Amazon Web Services, повністю або частинами, а потім стежимо, щоб вона працювала й не дорожчала без причини.",
          head: "Хмара не завжди дешевша",
          why: "Власний сервер іноді обходиться дешевше. Хмара виграє, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають підніматися за хвилини, а не за тиждень.\n\nТому переїзд починаємо з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є план відкату.",
          includes: ["аудит поточної інфраструктури й розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервне копіювання та моніторинг", "оптимізація витрат після переїзду"],
          result: "Інфраструктура, яка переживає відмову сервера, і рахунок за хмару, який ви розумієте."
        },
        {
          title: "Інфраструктура компанії на базі Red Hat",
          intro: "Будуємо ІТ-інфраструктуру компанії на Red Hat: сервери на Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
          head: "Навіщо платити за підписку",
          why: "Red Hat обирають, коли інфраструктура має роками працювати й проходити аудит, а не триматися на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом: для Red Hat Enterprise Linux він розрахований на десять років.\n\nІнфраструктуру проєктуємо під ваші навантаження, а конфігурацію серверів описуємо в Ansible. Будь-який сервер перезбирається за сценарієм, а не з пам'яті. Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися.",
          includes: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux і централізовані оновлення через Red Hat Satellite", "контейнерна платформа OpenShift для ваших застосунків", "автоматизація налаштування й розгортання через Ansible", "єдине керування обліковими записами й доступом (Identity Management)", "моніторинг, резервне копіювання й документація для вашої команди"],
          result: "Інфраструктура, яку можна перевірити, повторити й передати іншій команді, не втративши знань."
        },
        {
          title: "API та інтеграції",
          intro: "Розробляємо API для ваших систем і поєднуємо їх із сервісами, якими ви вже користуєтеся.",
          head: "Найчастіший біль",
          why: "Дані вводять двічі. Замовлення із сайту переносять в облікову систему вручну, оплати звіряють у таблиці. Інтеграція прибирає цю роботу, а разом із нею й помилки.\n\nМоніторинг налаштовуємо окремо. Інтеграції ламаються тихо, коли партнер змінює свій API, і дізнатися про це краще від системи, ніж від клієнта.",
          includes: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM та обліком", "обмін даними між внутрішніми системами", "черги й повторні спроби при збоях", "моніторинг і сповіщення"],
          result: "Дані вводяться один раз і самі доходять туди, де потрібні."
        },
        {
          title: "Технічна підтримка",
          intro: "Підтримуємо й розвиваємо ваші ІТ-системи, зокрема ті, що писали не ми.",
          head: "Якщо систему писали не ми",
          why: "Починаємо з аудиту й документації. Без неї будь-яка правка перетворюється на лотерею.\n\nА далі підтримка — це не лише виправлення помилок. Це оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і невеликі доопрацювання по ходу.",
          includes: ["моніторинг доступності та помилок", "виправлення помилок і оновлення безпеки", "резервне копіювання й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація систем від інших підрядників"],
          result: "Система, яка працює, і команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      title: "Services",
      lead: "We aren't tied to one programming language or platform. First we work out what needs doing, and only then pick the tools. Sometimes the best answer is an off-the-shelf subscription service; then we'll say so, and nothing needs to be built.",
      open: "Each service is a separate file. Open it with Enter or F3:",
      includes: "What's included",
      result: "Outcome",
      pages: [
        {
          title: "IT solution concept",
          intro: "We help you figure out which system you actually need and write it down so that both the business and the developers can work from the document.",
          head: "Why start here",
          why: "The most expensive mistake in an IT project happens before the first line of code: a team builds a system for a problem nobody properly defined. We start by talking to the people who'll work in the system: accounting, the warehouse, sales managers. The boss too, but not only the boss.\n\nSometimes we end up advising you to build nothing and configure an existing product instead. We count that as a perfectly good result.",
          includes: ["interviews with staff and a look at how processes run today", "business requirements and user scenarios", "a comparison of ready-made products against custom development", "a specification with time and budget estimates per phase"],
          result: "A document any team, ours or another, can estimate from and get started on."
        },
        {
          title: "SaaS development",
          intro: "We design and build SaaS platforms. We start with a first version for pilot customers and take it to a service where every customer has their own workspace, plan and dashboard.",
          head: "Where the money is in SaaS",
          why: "Not in the code. It's in how easily a new customer can sign up, pay and start working without calling support. That's why we build in multi-tenancy, billing and permissions from day one: reworking them once customers are inside costs several times more.\n\nWe try to ship the first version early. Real users are quick to show which features were never needed.",
          includes: ["multi-tenant architecture with isolated customer data", "sign-up, plans, subscriptions and online payments", "customer dashboards, roles and permissions", "integrations and a public API for your customers", "scaling as load grows"],
          result: "A product you can sell by subscription, not a project that gets rolled out by hand every time."
        },
        {
          title: "Web development",
          intro: "Corporate websites, marketplaces, online stores, booking systems and internal web tools. Built for the task, no templates.",
          head: "How we measure a website",
          why: "In leads and orders. The portfolio shot matters less. Before work starts we agree on what counts as a result, and we set up analytics in time for launch, not six months after it.\n\nThe technology follows the task. A landing page doesn't need a heavy platform, and a marketplace won't fit into a website builder.",
          includes: ["prototype and interface design", "frontend, backend and admin panel", "integrations with payments, delivery, CRM and accounting systems", "SEO groundwork, page speed and analytics", "launch and ongoing support"],
          result: "A web service where you can see how many leads and how much revenue it brings in."
        },
        {
          title: "Mobile apps",
          intro: "iOS and Android apps, together with the server side and the admin panel behind them.",
          head: "When you don't need an app",
          why: "An app is justified when customers come back to it regularly: reordering, tracking a status, collecting loyalty points. If someone visits once a year, a good mobile website is cheaper, and we'll tell you so before any work starts.\n\nNative versus cross-platform is decided by budget and by how much the app relies on the camera, location and offline mode.",
          includes: ["iOS and Android apps", "server side and API", "an admin panel for content, orders and users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          result: "An app that passes store review and that your team runs without a developer."
        },
        {
          title: "AI-powered solutions",
          intro: "We automate business processes with AI agents: solutions built on artificial intelligence and machine learning take over the routine steps your staff handle today.",
          head: "AI without the hype",
          why: "We're more sceptical about AI than most. Half of the \"let's add a neural network\" ideas are solved by ordinary automation. But where people spend hours sorting emails, documents and support requests, language models genuinely take the routine off their plate.\n\nWe start with a pilot on your own data. You get accuracy figures before the main build, not after it.",
          includes: ["AI agents that walk through routine process steps on their own: triaging requests, filling in the CRM, drafting replies to customers", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification and knowledge-base search", "demand forecasting and data analysis", "a pilot with quality measured on your data"],
          result: "A specific process that people used to do is now done by the system, with a person keeping it in check."
        },
        {
          title: "CRM and ERP development",
          intro: "CRM and ERP systems built around your processes, rather than processes bent to fit a system.",
          head: "When the box isn't enough",
          why: "Off-the-shelf CRM is fine as long as your process looks standard. When managers run half their work in spreadsheets because the system \"can't do that\", building your own becomes cheaper.\n\nWe migrate data from old systems and spreadsheets. Rollout goes department by department, so work never stops for a day.",
          includes: ["sales, warehouse, production and finance modules, as needed", "roles, permissions and an audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony and email"],
          result: "One system instead of a zoo of spreadsheets. Management sees where things stand without weekly reports from every department."
        },
        {
          title: "Cloud solutions",
          intro: "We move your infrastructure to Amazon Web Services, in full or in part, and then make sure it keeps running and doesn't get more expensive for no reason.",
          head: "The cloud isn't always cheaper",
          why: "Your own server can sometimes cost less. The cloud wins when load spikes, when you need fault tolerance, or when new environments should come up in minutes rather than a week.\n\nSo a move starts with an audit and a cost estimate. We migrate in stages, with a rollback plan at every step.",
          includes: ["audit of the current infrastructure and a cost estimate", "AWS architecture and a migration plan", "moving servers, databases and files", "backups and monitoring", "cost optimisation after the move"],
          result: "Infrastructure that survives a server failure, and a cloud bill you actually understand."
        },
        {
          title: "Company infrastructure on Red Hat",
          intro: "We build your company's IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform and automation with Ansible.",
          head: "Why pay for a subscription",
          why: "Companies pick Red Hat when infrastructure has to run for years and pass audits, rather than live in one administrator's head. The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years.\n\nWe design the infrastructure around your workloads and describe server configuration in Ansible. Any server can be rebuilt from a playbook instead of from memory. Red Hat is our partner, so we can also help you sort out subscriptions and vendor support.",
          includes: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout with centralised updates through Red Hat Satellite", "the OpenShift container platform for your applications", "configuration and deployment automation with Ansible", "central identity and access management (Identity Management)", "monitoring, backups and documentation for your team"],
          result: "Infrastructure you can audit, reproduce and hand over to another team without losing what it knows."
        },
        {
          title: "APIs and integrations",
          intro: "We design APIs for your systems and connect them with the services you already use.",
          head: "The most common pain",
          why: "Data typed in twice. Website orders re-entered into the accounting system by hand, payments reconciled in a spreadsheet. An integration removes that work, and the mistakes go with it.\n\nWe set up monitoring separately. Integrations break quietly when a partner changes their API, and it's better to hear about it from the system than from a customer.",
          includes: ["API design and documentation", "integrations with payment providers, delivery services, CRM and accounting", "data exchange between internal systems", "queues and retries when something fails", "monitoring and alerts"],
          result: "Data is entered once and gets where it needs to go on its own."
        },
        {
          title: "Technical support",
          intro: "We support and keep developing your IT systems, including ones we didn't build.",
          head: "If someone else built it",
          why: "We start with an audit and documentation. Without it, every change is a gamble.\n\nAfter that, support is more than fixing bugs. It's updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way.",
          includes: ["availability and error monitoring", "bug fixes and security updates", "backups and restore testing", "planned improvements and new features", "audit and documentation of systems built by other contractors"],
          result: "A system that works, and a team that knows how it's put together."
        }
      ]
    },
    ru: {
      title: "Услуги",
      lead: "Мы не привязаны к одному языку программирования или платформе. Сначала разбираемся, что нужно сделать, и только потом выбираем инструменты. Бывает, что лучший ответ — готовый сервис по подписке; тогда мы так и скажем, и разрабатывать ничего не придётся.",
      open: "Каждая услуга — отдельный файл. Откройте его через Enter или F3:",
      includes: "Что входит",
      result: "Результат",
      pages: [
        {
          title: "Разработка концепции ИТ-решения",
          intro: "Помогаем понять, какая система вам нужна, и записать это так, чтобы с документом могли работать и бизнес, и разработчики.",
          head: "Почему стоит начать с этого",
          why: "Самая дорогая ошибка в ИТ-проекте случается до первой строки кода: команда строит систему под задачу, которую никто толком не сформулировал. Мы начинаем с разговоров с теми, кто будет в системе работать, — с бухгалтерией, складом, менеджерами. С руководителем тоже, но не только с ним.\n\nИногда по итогам мы советуем ничего не разрабатывать, а взять готовый продукт и донастроить его. Для нас это нормальный результат.",
          includes: ["интервью с сотрудниками и разбор того, как сейчас устроены процессы", "бизнес-требования и описание сценариев работы", "сравнение готовых решений с заказной разработкой", "техническое задание с оценкой сроков и бюджета по этапам"],
          result: "Документ, по которому любая команда — наша или другая — сможет оценить работу и взяться за неё."
        },
        {
          title: "Разработка SaaS-решений",
          intro: "Проектируем и разрабатываем SaaS-платформы. Начинаем с первой версии для пилотных клиентов и доводим до сервиса, где у каждого клиента своё пространство, тарифы и личный кабинет.",
          head: "Где в SaaS деньги",
          why: "Не в коде. В том, насколько просто новому клиенту зарегистрироваться, оплатить и начать работать, не звоня в поддержку. Поэтому мультитенантность, биллинг и права доступа мы закладываем с первого дня: переделывать их, когда клиенты уже внутри, обходится в разы дороже.\n\nПервую версию стараемся выпустить пораньше. Настоящие пользователи быстро показывают, какие функции были лишними.",
          includes: ["мультитенантная архитектура с изоляцией данных клиентов", "регистрация, тарифы, подписки и онлайн-оплата", "личные кабинеты, роли и права доступа", "интеграции и открытое API для ваших клиентов", "масштабирование под рост нагрузки"],
          result: "Продукт, который можно продавать по подписке, а не проект, который каждый раз внедряется вручную."
        },
        {
          title: "Веб-разработка",
          intro: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Делаем под задачу, шаблоны не берём.",
          head: "Как мы меряем сайт",
          why: "Заявками и заказами. Дизайн в портфолио тут вторичен. Ещё до старта договариваемся, что считать результатом, и настраиваем аналитику к запуску, а не через полгода после него.\n\nТехнологию подбираем по задаче. Лендингу тяжёлая платформа не нужна, а маркетплейс в конструктор сайтов не поместится.",
          includes: ["прототип и дизайн интерфейсов", "frontend, backend и панель администрирования", "интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, скорость загрузки и аналитика", "запуск и сопровождение"],
          result: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        {
          title: "Мобильные приложения",
          intro: "Приложения для iOS и Android вместе с серверной частью и панелью администрирования.",
          head: "Когда приложение не нужно",
          why: "Приложение оправдано, если клиент возвращается к нему регулярно: делает повторные заказы, следит за статусом, копит бонусы. Если человек заходит раз в год, удобный мобильный сайт выйдет дешевле, и мы скажем об этом до начала работ.\n\nМежду нативной и кроссплатформенной разработкой выбираем по бюджету и по тому, насколько приложению нужны камера, геолокация и офлайн-режим.",
          includes: ["приложения для iOS и Android", "серверная часть и API", "админ-панель для контента, заказов и пользователей", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          result: "Приложение, которое проходит модерацию магазинов и которым ваша команда управляет без разработчиков."
        },
        {
          title: "Решения с искусственным интеллектом",
          intro: "Автоматизируем бизнес-процессы с помощью ИИ-агентов: решения на базе искусственного интеллекта и машинного обучения берут на себя рутинные шаги, которые сейчас делают сотрудники.",
          head: "ИИ без восторгов",
          why: "Мы относимся к ИИ скептичнее многих. Половину идей «давайте добавим нейросеть» решает обычная автоматизация. Но там, где люди часами разбирают письма, документы и обращения, языковые модели действительно снимают рутину.\n\nНачинаем с пилота на ваших данных. Цифры точности появляются до основной разработки, а не после неё.",
          includes: ["ИИ-агенты, которые сами проходят рутинные шаги процесса: разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений и поиск по базе знаний", "прогнозы спроса и анализ данных", "пилот с оценкой качества на ваших данных"],
          result: "Конкретный процесс, который раньше делали люди, теперь делает система, а человек её контролирует."
        },
        {
          title: "Разработка CRM и ERP",
          intro: "CRM и ERP, построенные вокруг ваших процессов, а не процессы, подогнанные под систему.",
          head: "Когда коробки уже мало",
          why: "Коробочная CRM хороша, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», дешевле сделать своё.\n\nДанные переносим из старых систем и таблиц. Запускаем по отделам, чтобы работа не останавливалась ни на день.",
          includes: ["модули продаж, склада, производства, финансов — по необходимости", "роли, права доступа и журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией и почтой"],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит состояние дел без еженедельных отчётов от каждого отдела."
        },
        {
          title: "Облачные решения",
          intro: "Переносим инфраструктуру в Amazon Web Services, целиком или частями, а потом следим, чтобы она работала и не дорожала без причины.",
          head: "Облако не всегда дешевле",
          why: "Свой сервер иногда обходится дешевле. Облако выигрывает, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны подниматься за минуты, а не за неделю.\n\nПоэтому переезд начинаем с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть план отката.",
          includes: ["аудит текущей инфраструктуры и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервное копирование и мониторинг", "оптимизация расходов после переезда"],
          result: "Инфраструктура, которая переживает отказ сервера, и счёт за облако, который вы понимаете."
        },
        {
          title: "Инфраструктура компании на базе Red Hat",
          intro: "Строим ИТ-инфраструктуру компании на Red Hat: серверы на Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
          head: "Зачем платить за подписку",
          why: "Red Hat выбирают, когда инфраструктура должна годами работать и проходить аудит, а не держаться на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом: у Red Hat Enterprise Linux он рассчитан на десять лет.\n\nИнфраструктуру проектируем под ваши нагрузки, а конфигурацию серверов описываем в Ansible. Любой сервер пересобирается по сценарию, а не по памяти. Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться.",
          includes: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux и централизованные обновления через Red Hat Satellite", "контейнерная платформа OpenShift для ваших приложений", "автоматизация настройки и развёртывания через Ansible", "единое управление учётными записями и доступом (Identity Management)", "мониторинг, резервное копирование и документация для вашей команды"],
          result: "Инфраструктура, которую можно проверить, повторить и передать другой команде, не потеряв знаний."
        },
        {
          title: "API и интеграции",
          intro: "Разрабатываем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          head: "Самая частая боль",
          why: "Данные вводят дважды. Заказ с сайта переносят в учётную систему руками, оплаты сверяют в таблице. Интеграция убирает эту работу, а вместе с ней и ошибки.\n\nМониторинг настраиваем отдельно. Интеграции ломаются тихо, когда партнёр меняет свой API, и узнать об этом лучше от системы, чем от клиента.",
          includes: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM и учётом", "обмен данными между внутренними системами", "очереди и повторные попытки при сбоях", "мониторинг и оповещения"],
          result: "Данные вводятся один раз и сами доходят туда, где нужны."
        },
        {
          title: "Техническая поддержка",
          intro: "Поддерживаем и развиваем ваши ИТ-системы, в том числе те, что писали не мы.",
          head: "Если систему писали не мы",
          why: "Начинаем с аудита и документации. Без неё любая правка превращается в лотерею.\n\nА дальше поддержка — это не только исправление ошибок. Это обновления, закрывающие уязвимости, мониторинг, который замечает проблему раньше пользователей, и небольшие доработки по ходу.",
          includes: ["мониторинг доступности и ошибок", "исправление ошибок и обновления безопасности", "резервное копирование и проверка восстановления", "доработки и новые функции по плану", "аудит и документация систем от других подрядчиков"],
          result: "Система, которая работает, и команда, которая знает, как она устроена."
        }
      ]
    },
    de: {
      title: "Leistungen",
      lead: "Wir sind an keine Programmiersprache und keine Plattform gebunden. Zuerst klären wir, was zu tun ist, und erst dann wählen wir die Werkzeuge. Manchmal ist die beste Antwort ein fertiger Dienst im Abonnement; dann sagen wir das auch, und es muss nichts entwickelt werden.",
      open: "Jede Leistung ist eine eigene Datei. Öffnen Sie sie mit Enter oder F3:",
      includes: "Leistungsumfang",
      result: "Ergebnis",
      pages: [
        {
          title: "Konzeption von IT-Lösungen",
          intro: "Wir helfen Ihnen herauszufinden, welches System Sie wirklich brauchen, und halten es so fest, dass sowohl die Fachabteilungen als auch die Entwickler mit dem Dokument arbeiten können.",
          head: "Warum man hier anfangen sollte",
          why: "Der teuerste Fehler in einem IT-Projekt passiert vor der ersten Zeile Code: Ein Team baut ein System für eine Aufgabe, die niemand sauber formuliert hat. Wir beginnen mit Gesprächen mit den Menschen, die später im System arbeiten: Buchhaltung, Lager, Vertrieb. Mit der Geschäftsführung natürlich auch, aber nicht nur mit ihr.\n\nManchmal raten wir am Ende, gar nichts zu entwickeln, sondern ein fertiges Produkt zu nehmen und anzupassen. Für uns ist das ein völlig normales Ergebnis.",
          includes: ["Interviews mit Mitarbeitenden und eine Analyse, wie die Prozesse heute laufen", "fachliche Anforderungen und Beschreibung der Anwendungsszenarien", "Vergleich fertiger Produkte mit einer Individualentwicklung", "Pflichtenheft mit Zeit- und Budgetschätzung pro Projektphase"],
          result: "Ein Dokument, auf dessen Grundlage jedes Team, unseres oder ein anderes, den Aufwand schätzen und mit der Arbeit beginnen kann."
        },
        {
          title: "SaaS-Entwicklung",
          intro: "Wir konzipieren und entwickeln SaaS-Plattformen. Wir beginnen mit einer ersten Version für Pilotkunden und bauen sie zu einem Dienst aus, in dem jeder Kunde seinen eigenen Bereich, seinen Tarif und sein Kundenkonto hat.",
          head: "Wo bei SaaS das Geld liegt",
          why: "Nicht im Code. Sondern darin, wie einfach sich ein neuer Kunde registrieren, bezahlen und loslegen kann, ohne beim Support anzurufen. Deshalb planen wir Mandantenfähigkeit, Abrechnung und Zugriffsrechte vom ersten Tag an ein: Sie umzubauen, wenn die Kunden schon im System sind, kostet ein Vielfaches.\n\nDie erste Version bringen wir möglichst früh heraus. Echte Nutzer zeigen schnell, welche Funktionen überflüssig waren.",
          includes: ["mandantenfähige Architektur mit getrennten Kundendaten", "Registrierung, Tarife, Abonnements und Online-Zahlung", "Kundenkonten, Rollen und Zugriffsrechte", "Integrationen und eine offene API für Ihre Kunden", "Skalierung bei wachsender Last"],
          result: "Ein Produkt, das Sie im Abonnement verkaufen können, statt eines Projekts, das jedes Mal von Hand eingeführt wird."
        },
        {
          title: "Webentwicklung",
          intro: "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen. Passend zur Aufgabe gebaut, ohne Vorlagen.",
          head: "Woran wir eine Website messen",
          why: "An Anfragen und Bestellungen. Wie sie im Portfolio aussieht, ist zweitrangig. Schon vor dem Start vereinbaren wir, was als Erfolg zählt, und richten die Webanalyse zum Launch ein, nicht ein halbes Jahr danach.\n\nDie Technologie richtet sich nach der Aufgabe. Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Homepage-Baukasten.",
          includes: ["Prototyp und Oberflächendesign", "Frontend, Backend und Administrationsbereich", "Anbindung an Zahlung, Versand, CRM und Buchhaltungssysteme", "SEO-Grundlagen, Ladegeschwindigkeit und Webanalyse", "Launch und laufende Betreuung"],
          result: "Ein Webangebot, bei dem Sie sehen, wie viele Anfragen und wie viel Umsatz es bringt."
        },
        {
          title: "Mobile Apps",
          intro: "Apps für iOS und Android, zusammen mit dem Server-Backend und dem Administrationsbereich dahinter.",
          head: "Wann Sie keine App brauchen",
          why: "Eine App lohnt sich, wenn Kunden regelmäßig zu ihr zurückkehren: nachbestellen, einen Status verfolgen, Bonuspunkte sammeln. Wer nur einmal im Jahr vorbeischaut, ist mit einer guten mobilen Website günstiger bedient, und das sagen wir Ihnen, bevor die Arbeit beginnt.\n\nOb nativ oder plattformübergreifend, entscheiden das Budget und die Frage, wie stark die App Kamera, Standort und Offline-Modus braucht.",
          includes: ["Apps für iOS und Android", "Server-Backend und API", "Administrationsbereich für Inhalte, Bestellungen und Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          result: "Eine App, die die Prüfung der Stores besteht und die Ihr Team ohne Entwickler betreibt."
        },
        {
          title: "KI-Lösungen",
          intro: "Wir automatisieren Geschäftsprozesse mit KI-Agenten: Lösungen auf Basis von künstlicher Intelligenz und maschinellem Lernen übernehmen die Routineschritte, die heute Ihre Mitarbeitenden erledigen.",
          head: "KI ohne Hype",
          why: "Wir sehen KI skeptischer als viele andere. Die Hälfte der Ideen nach dem Motto „Bauen wir ein neuronales Netz ein“ löst eine ganz gewöhnliche Automatisierung. Aber wo Menschen stundenlang E-Mails, Dokumente und Anfragen sortieren, nehmen Sprachmodelle ihnen tatsächlich Routine ab.\n\nWir beginnen mit einem Pilotprojekt auf Ihren eigenen Daten. Zahlen zur Genauigkeit bekommen Sie vor der eigentlichen Entwicklung, nicht danach.",
          includes: ["KI-Agenten, die Routineschritte eines Prozesses selbstständig durchlaufen: Anfragen sortieren, das CRM befüllen, Antworten an Kunden vorbereiten", "Chatbots und Assistenten für Kunden und Mitarbeitende", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen und Suche in der Wissensdatenbank", "Bedarfsprognosen und Datenanalyse", "Pilotprojekt mit Qualitätsmessung auf Ihren Daten"],
          result: "Ein konkreter Prozess, den bisher Menschen erledigt haben, läuft jetzt im System, und ein Mensch behält ihn im Blick."
        },
        {
          title: "CRM- und ERP-Entwicklung",
          intro: "CRM- und ERP-Systeme, die um Ihre Prozesse herum gebaut sind, statt Prozesse, die an ein System angepasst werden.",
          head: "Wenn Standardsoftware nicht mehr reicht",
          why: "Ein Standard-CRM ist gut, solange Ihr Prozess dem Standard ähnelt. Wenn die Vertriebsleute die Hälfte ihrer Arbeit in Tabellen erledigen, weil das System „das nicht kann“, wird eine eigene Lösung günstiger.\n\nDaten übernehmen wir aus Altsystemen und Tabellen. Die Einführung erfolgt Abteilung für Abteilung, damit die Arbeit keinen Tag stillsteht.",
          includes: ["Module für Vertrieb, Lager, Produktion und Finanzen, je nach Bedarf", "Rollen, Zugriffsrechte und Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie und E-Mail"],
          result: "Ein System statt eines Zoos aus Tabellen. Die Geschäftsführung sieht den Stand der Dinge ohne wöchentliche Berichte aus jeder Abteilung."
        },
        {
          title: "Cloud-Lösungen",
          intro: "Wir verlagern Ihre Infrastruktur ganz oder teilweise zu Amazon Web Services und sorgen danach dafür, dass sie läuft und nicht ohne Grund teurer wird.",
          head: "Die Cloud ist nicht immer günstiger",
          why: "Ein eigener Server kann manchmal weniger kosten. Die Cloud gewinnt, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn neue Umgebungen in Minuten statt in einer Woche bereitstehen sollen.\n\nDeshalb beginnt ein Umzug mit einem Audit und einer Kostenrechnung. Wir migrieren schrittweise, mit einem Rückfallplan für jeden Schritt.",
          includes: ["Audit der bestehenden Infrastruktur und Kostenrechnung", "Architektur in AWS und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Datensicherung und Monitoring", "Kostenoptimierung nach dem Umzug"],
          result: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie verstehen."
        },
        {
          title: "Unternehmensinfrastruktur auf Red Hat",
          intro: "Wir bauen die IT-Infrastruktur Ihres Unternehmens auf Red Hat auf: Server mit Red Hat Enterprise Linux, die Containerplattform OpenShift und Automatisierung mit Ansible.",
          head: "Warum für ein Abonnement bezahlen",
          why: "Unternehmen wählen Red Hat, wenn die Infrastruktur jahrelang laufen und Audits bestehen muss, statt nur im Kopf eines einzelnen Administrators zu existieren. Das Abonnement rechnet sich durch den Herstellersupport und den langen Lebenszyklus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt.\n\nWir planen die Infrastruktur passend zu Ihren Workloads und beschreiben die Serverkonfiguration in Ansible. Jeder Server lässt sich nach einem Playbook neu aufbauen statt aus dem Gedächtnis. Red Hat ist unser Partner, deshalb helfen wir Ihnen auch bei Abonnements und beim Herstellersupport.",
          includes: ["Audit Ihrer bestehenden Server und Migrationsplan", "Einführung von Red Hat Enterprise Linux mit zentralen Updates über Red Hat Satellite", "die Containerplattform OpenShift für Ihre Anwendungen", "Automatisierung von Konfiguration und Bereitstellung mit Ansible", "zentrale Verwaltung von Benutzerkonten und Zugriffen (Identity Management)", "Monitoring, Datensicherung und Dokumentation für Ihr Team"],
          result: "Eine Infrastruktur, die sich prüfen, reproduzieren und an ein anderes Team übergeben lässt, ohne dass Wissen verloren geht."
        },
        {
          title: "APIs und Integrationen",
          intro: "Wir entwickeln APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
          head: "Das häufigste Problem",
          why: "Daten werden doppelt erfasst. Bestellungen von der Website werden von Hand in die Buchhaltung übertragen, Zahlungen in einer Tabelle abgeglichen. Eine Integration nimmt Ihnen diese Arbeit ab, und mit ihr verschwinden die Fehler.\n\nDas Monitoring richten wir gesondert ein. Integrationen fallen leise aus, wenn ein Partner seine API ändert, und davon erfahren Sie besser vom System als von einem Kunden.",
          includes: ["Entwurf und Dokumentation von APIs", "Anbindung an Zahlungsdienste, Versanddienstleister, CRM und Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholungsversuche bei Störungen", "Monitoring und Benachrichtigungen"],
          result: "Daten werden einmal erfasst und kommen von selbst dort an, wo sie gebraucht werden."
        },
        {
          title: "Technischer Support",
          intro: "Wir betreuen Ihre IT-Systeme und entwickeln sie weiter, auch solche, die nicht von uns stammen.",
          head: "Wenn jemand anderes das System gebaut hat",
          why: "Wir beginnen mit einem Audit und einer Dokumentation. Ohne sie wird jede Änderung zum Glücksspiel.\n\nDanach ist Support mehr als Fehlerbehebung. Dazu gehören Updates, die Sicherheitslücken schließen, ein Monitoring, das ein Problem vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei.",
          includes: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Datensicherung und Tests der Wiederherstellung", "geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation von Systemen anderer Dienstleister"],
          result: "Ein System, das funktioniert, und ein Team, das weiß, wie es aufgebaut ist."
        }
      ]
    },
    fr: {
      title: "Services",
      lead: "Nous ne sommes liés à aucun langage de programmation ni à aucune plateforme. Nous commençons par comprendre ce qu'il faut faire, et ce n'est qu'ensuite que nous choisissons les outils. Parfois, la meilleure réponse est un service existant sur abonnement\u00a0; dans ce cas, nous vous le dirons, et il n'y aura rien à développer.",
      open: "Chaque service est un fichier à part. Ouvrez-le avec Entrée ou F3\u00a0:",
      includes: "Ce qui est inclus",
      result: "Résultat",
      pages: [
        {
          title: "Conception de solutions informatiques",
          intro: "Nous vous aidons à déterminer le système dont vous avez réellement besoin et à le décrire de façon à ce que les métiers comme les développeurs puissent travailler à partir du document.",
          head: "Pourquoi commencer par là",
          why: "L'erreur la plus coûteuse d'un projet informatique se produit avant la première ligne de code\u00a0: une équipe construit un système pour un problème que personne n'a vraiment formulé. Nous commençons par parler avec ceux qui travailleront dans le système\u00a0: la comptabilité, l'entrepôt, les commerciaux. Avec la direction aussi, mais pas seulement.\n\nIl arrive qu'au bout du compte nous vous conseillions de ne rien développer et de paramétrer un produit existant. Pour nous, c'est un résultat tout à fait normal.",
          includes: ["entretiens avec le personnel et analyse du fonctionnement actuel des processus", "exigences métier et scénarios d'utilisation", "comparaison entre produits du marché et développement sur mesure", "cahier des charges avec estimation des délais et du budget par phase"],
          result: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et s'y mettre."
        },
        {
          title: "Développement SaaS",
          intro: "Nous concevons et développons des plateformes SaaS. Nous partons d'une première version pour des clients pilotes et la faisons évoluer jusqu'à un service où chaque client dispose de son propre espace, de son offre et de son tableau de bord.",
          head: "Où est l'argent dans le SaaS",
          why: "Pas dans le code. Il est dans la facilité avec laquelle un nouveau client peut s'inscrire, payer et commencer à travailler sans appeler le support. C'est pourquoi nous intégrons dès le premier jour le multi-locataire, la facturation et les droits d'accès\u00a0: les reprendre une fois les clients installés coûte plusieurs fois plus cher.\n\nNous cherchons à livrer la première version tôt. Les vrais utilisateurs montrent vite quelles fonctions étaient superflues.",
          includes: ["architecture multi-locataire avec isolation des données clients", "inscription, offres, abonnements et paiement en ligne", "espaces clients, rôles et droits d'accès", "intégrations et API publique pour vos clients", "montée en charge au fil de la croissance"],
          result: "Un produit que vous pouvez vendre sur abonnement, et non un projet à déployer à la main à chaque fois."
        },
        {
          title: "Développement web",
          intro: "Sites d'entreprise, places de marché, boutiques en ligne, systèmes de réservation et outils web internes. Conçus pour la tâche, sans modèles tout faits.",
          head: "Comment nous mesurons un site",
          why: "En demandes et en commandes. L'image dans le portfolio passe au second plan. Avant de commencer, nous convenons de ce qui comptera comme résultat, et nous mettons en place la mesure d'audience pour le lancement, pas six mois après.\n\nLa technologie dépend de la tâche. Une page d'atterrissage n'a pas besoin d'une plateforme lourde, et une place de marché ne tiendra pas dans un outil de création de sites.",
          includes: ["prototype et conception des interfaces", "frontend, backend et interface d'administration", "intégration avec le paiement, la livraison, le CRM et les logiciels de gestion", "bases du référencement, vitesse de chargement et mesure d'audience", "mise en ligne et suivi"],
          result: "Un service web dont vous voyez combien de demandes et combien de chiffre d'affaires il rapporte."
        },
        {
          title: "Applications mobiles",
          intro: "Applications iOS et Android, avec la partie serveur et l'interface d'administration qui les accompagnent.",
          head: "Quand une application n'est pas nécessaire",
          why: "Une application se justifie quand les clients y reviennent régulièrement\u00a0: pour recommander, suivre un statut, cumuler des points de fidélité. Si quelqu'un passe une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant de commencer.\n\nLe choix entre natif et multiplateforme dépend du budget et de l'usage que l'application fait de l'appareil photo, de la géolocalisation et du mode hors ligne.",
          includes: ["applications iOS et Android", "partie serveur et API", "interface d'administration pour le contenu, les commandes et les utilisateurs", "notifications push et statistiques", "publication sur l'App Store et Google Play"],
          result: "Une application qui passe la validation des stores et que votre équipe gère sans développeur."
        },
        {
          title: "Solutions d'intelligence artificielle",
          intro: "Nous automatisons les processus métier avec des agents d'IA\u00a0: des solutions fondées sur l'intelligence artificielle et l'apprentissage automatique prennent en charge les tâches répétitives qu'effectue aujourd'hui votre personnel.",
          head: "L'IA sans l'emballement",
          why: "Nous sommes plus sceptiques envers l'IA que beaucoup. La moitié des idées du type «\u00a0ajoutons un réseau de neurones\u00a0» se règlent par une automatisation ordinaire. Mais là où des gens passent des heures à trier des e-mails, des documents et des demandes, les modèles de langage les déchargent vraiment de la routine.\n\nNous commençons par un pilote sur vos propres données. Les chiffres de précision arrivent avant le développement principal, pas après.",
          includes: ["agents d'IA qui enchaînent seuls les étapes répétitives d'un processus\u00a0: tri des demandes, saisie dans le CRM, préparation des réponses aux clients", "chatbots et assistants pour les clients et le personnel", "reconnaissance de documents et extraction de données", "classement des demandes et recherche dans la base de connaissances", "prévision de la demande et analyse de données", "pilote avec mesure de la qualité sur vos données"],
          result: "Un processus précis, autrefois effectué par des personnes, est désormais pris en charge par le système, sous le contrôle d'un humain."
        },
        {
          title: "Développement CRM et ERP",
          intro: "Des CRM et des ERP construits autour de vos processus, plutôt que des processus pliés aux exigences d'un logiciel.",
          head: "Quand le logiciel standard ne suffit plus",
          why: "Un CRM standard convient tant que votre processus ressemble au modèle type. Quand les commerciaux font la moitié de leur travail dans des tableurs parce que le système «\u00a0ne sait pas faire ça\u00a0», développer le vôtre revient moins cher.\n\nNous reprenons les données des anciens systèmes et des tableurs. Le déploiement se fait service par service, pour que le travail ne s'arrête pas un seul jour.",
          includes: ["modules ventes, stock, production et finances, selon les besoins", "rôles, droits d'accès et journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "intégration avec la comptabilité, la téléphonie et la messagerie"],
          result: "Un seul système au lieu d'un zoo de tableurs. La direction voit où en sont les choses sans rapports hebdomadaires de chaque service."
        },
        {
          title: "Solutions cloud",
          intro: "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou en partie, puis nous veillons à ce qu'elle fonctionne et ne coûte pas plus cher sans raison.",
          head: "Le cloud n'est pas toujours moins cher",
          why: "Un serveur à vous peut parfois coûter moins. Le cloud l'emporte quand la charge varie fortement, quand il faut de la tolérance aux pannes, ou quand de nouveaux environnements doivent être prêts en quelques minutes et non en une semaine.\n\nUne migration commence donc par un audit et une estimation des coûts. Nous migrons par étapes, avec un plan de retour arrière à chaque étape.",
          includes: ["audit de l'infrastructure actuelle et estimation des coûts", "architecture AWS et plan de migration", "transfert des serveurs, des bases de données et des fichiers", "sauvegardes et supervision", "optimisation des coûts après la migration"],
          result: "Une infrastructure qui survit à la panne d'un serveur, et une facture cloud que vous comprenez."
        },
        {
          title: "Infrastructure d'entreprise sous Red Hat",
          intro: "Nous construisons l'infrastructure informatique de votre entreprise sur Red Hat\u00a0: serveurs sous Red Hat Enterprise Linux, plateforme de conteneurs OpenShift et automatisation avec Ansible.",
          head: "Pourquoi payer un abonnement",
          why: "Les entreprises choisissent Red Hat quand l'infrastructure doit fonctionner pendant des années et passer des audits, au lieu de reposer sur la mémoire d'un seul administrateur. L'abonnement se rentabilise par le support de l'éditeur et un long cycle de vie\u00a0: Red Hat Enterprise Linux est maintenu pendant dix ans.\n\nNous concevons l'infrastructure en fonction de vos charges de travail et décrivons la configuration des serveurs dans Ansible. Chaque serveur se reconstruit à partir d'un playbook, et non de mémoire. Red Hat est notre partenaire\u00a0: nous pouvons aussi vous aider à y voir clair dans les abonnements et le support de l'éditeur.",
          includes: ["audit de vos serveurs actuels et plan de migration", "déploiement de Red Hat Enterprise Linux avec mises à jour centralisées via Red Hat Satellite", "la plateforme de conteneurs OpenShift pour vos applications", "automatisation de la configuration et du déploiement avec Ansible", "gestion centralisée des comptes et des accès (Identity Management)", "supervision, sauvegardes et documentation pour votre équipe"],
          result: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe sans perdre le savoir-faire."
        },
        {
          title: "API et intégrations",
          intro: "Nous concevons des API pour vos systèmes et les relions aux services que vous utilisez déjà.",
          head: "Le problème le plus fréquent",
          why: "Les données sont saisies deux fois. Les commandes du site sont ressaisies à la main dans le logiciel de comptabilité, les paiements sont rapprochés dans un tableur. Une intégration supprime ce travail, et les erreurs avec.\n\nNous mettons en place la supervision à part. Les intégrations tombent en panne sans bruit quand un partenaire modifie son API, et mieux vaut l'apprendre par le système que par un client.",
          includes: ["conception et documentation d'API", "intégration avec les prestataires de paiement, les transporteurs, le CRM et la comptabilité", "échange de données entre systèmes internes", "files d'attente et nouvelles tentatives en cas d'échec", "supervision et alertes"],
          result: "Les données sont saisies une seule fois et arrivent d'elles-mêmes là où elles sont utiles."
        },
        {
          title: "Support technique",
          intro: "Nous maintenons et faisons évoluer vos systèmes informatiques, y compris ceux que nous n'avons pas développés.",
          head: "Si le système vient d'ailleurs",
          why: "Nous commençons par un audit et une documentation. Sans elle, chaque modification devient un coup de dés.\n\nEnsuite, le support ne se limite pas à corriger des bugs. Ce sont aussi des mises à jour qui comblent les failles de sécurité, une supervision qui repère un problème avant les utilisateurs, et de petites améliorations au fil de l'eau.",
          includes: ["supervision de la disponibilité et des erreurs", "correction de bugs et mises à jour de sécurité", "sauvegardes et tests de restauration", "améliorations planifiées et nouvelles fonctions", "audit et documentation des systèmes réalisés par d'autres prestataires"],
          result: "Un système qui fonctionne, et une équipe qui sait comment il est construit."
        }
      ]
    },
    es: {
      title: "Servicios",
      lead: "No estamos atados a un lenguaje de programación ni a una plataforma. Primero averiguamos qué hay que hacer y solo después elegimos las herramientas. A veces la mejor respuesta es un servicio ya existente por suscripción; entonces se lo diremos y no habrá que desarrollar nada.",
      open: "Cada servicio es un archivo aparte. Ábralo con Intro o F3:",
      includes: "Qué incluye",
      result: "Resultado",
      pages: [
        {
          title: "Concepto de la solución de TI",
          intro: "Le ayudamos a entender qué sistema necesita realmente y a dejarlo por escrito de forma que tanto el negocio como los desarrolladores puedan trabajar con el documento.",
          head: "Por qué empezar por aquí",
          why: "El error más caro de un proyecto de TI ocurre antes de la primera línea de código: un equipo construye un sistema para un problema que nadie ha formulado bien. Empezamos hablando con quienes van a trabajar con el sistema: contabilidad, almacén, comerciales. También con la dirección, pero no solo con ella.\n\nA veces acabamos aconsejándole no desarrollar nada y configurar un producto existente. Para nosotros es un resultado perfectamente válido.",
          includes: ["entrevistas con el personal y análisis de cómo funcionan hoy los procesos", "requisitos de negocio y escenarios de uso", "comparación entre productos estándar y desarrollo a medida", "especificación técnica con estimación de plazos y presupuesto por fases"],
          result: "Un documento con el que cualquier equipo, el nuestro u otro, puede estimar el trabajo y ponerse manos a la obra."
        },
        {
          title: "Desarrollo SaaS",
          intro: "Diseñamos y desarrollamos plataformas SaaS. Empezamos con una primera versión para clientes piloto y la llevamos hasta un servicio en el que cada cliente tiene su propio espacio, su plan y su área privada.",
          head: "Dónde está el dinero en el SaaS",
          why: "No en el código, sino en lo fácil que le resulta a un cliente nuevo registrarse, pagar y empezar a trabajar sin llamar a soporte. Por eso incorporamos la arquitectura multiinquilino, la facturación y los permisos desde el primer día: rehacerlos cuando los clientes ya están dentro cuesta varias veces más.\n\nIntentamos lanzar la primera versión cuanto antes. Los usuarios reales enseguida muestran qué funciones sobraban.",
          includes: ["arquitectura multiinquilino con datos de clientes aislados", "registro, planes, suscripciones y pago en línea", "áreas privadas, roles y permisos", "integraciones y una API pública para sus clientes", "escalado a medida que crece la carga"],
          result: "Un producto que puede vender por suscripción, y no un proyecto que se implanta a mano cada vez."
        },
        {
          title: "Desarrollo web",
          intro: "Webs corporativas, marketplaces, tiendas online, sistemas de reservas y herramientas web internas. Hechos a medida de la tarea, sin plantillas.",
          head: "Cómo medimos una web",
          why: "En solicitudes y pedidos. Cómo quede en el portfolio es secundario. Antes de empezar acordamos qué se considera un resultado y configuramos la analítica para el lanzamiento, no seis meses después.\n\nLa tecnología depende de la tarea. Una landing page no necesita una plataforma pesada, y un marketplace no cabe en un creador de webs.",
          includes: ["prototipo y diseño de interfaces", "frontend, backend y panel de administración", "integración con pagos, envíos, CRM y sistemas contables", "base SEO, velocidad de carga y analítica", "lanzamiento y mantenimiento"],
          result: "Un servicio web en el que se ve cuántas solicitudes y cuántos ingresos aporta."
        },
        {
          title: "Aplicaciones móviles",
          intro: "Aplicaciones para iOS y Android, junto con la parte de servidor y el panel de administración que las respaldan.",
          head: "Cuándo no necesita una aplicación",
          why: "Una aplicación se justifica cuando los clientes vuelven a ella con regularidad: repiten pedidos, siguen un estado, acumulan puntos. Si alguien entra una vez al año, una buena web móvil sale más barata, y se lo diremos antes de empezar.\n\nEntre desarrollo nativo y multiplataforma decidimos según el presupuesto y según cuánto dependa la aplicación de la cámara, la geolocalización y el modo sin conexión.",
          includes: ["aplicaciones para iOS y Android", "parte de servidor y API", "panel de administración para contenidos, pedidos y usuarios", "notificaciones push y analítica", "publicación en App Store y Google Play"],
          result: "Una aplicación que supera la revisión de las tiendas y que su equipo gestiona sin desarrolladores."
        },
        {
          title: "Soluciones con inteligencia artificial",
          intro: "Automatizamos procesos de negocio con agentes de IA: soluciones basadas en inteligencia artificial y aprendizaje automático asumen los pasos rutinarios que hoy realiza su personal.",
          head: "IA sin euforia",
          why: "Somos más escépticos con la IA que la mayoría. La mitad de las ideas del tipo «añadamos una red neuronal» se resuelven con una automatización corriente. Pero donde las personas pasan horas clasificando correos, documentos y solicitudes, los modelos de lenguaje de verdad les quitan la rutina de encima.\n\nEmpezamos con un piloto sobre sus propios datos. Las cifras de precisión llegan antes del desarrollo principal, no después.",
          includes: ["agentes de IA que recorren por sí solos los pasos rutinarios de un proceso: clasifican solicitudes, rellenan el CRM, preparan respuestas a los clientes", "chatbots y asistentes para clientes y empleados", "reconocimiento de documentos y extracción de datos", "clasificación de solicitudes y búsqueda en la base de conocimiento", "previsión de la demanda y análisis de datos", "piloto con medición de la calidad sobre sus datos"],
          result: "Un proceso concreto que antes hacían personas lo hace ahora el sistema, con una persona supervisándolo."
        },
        {
          title: "Desarrollo de CRM y ERP",
          intro: "Sistemas CRM y ERP construidos en torno a sus procesos, en lugar de procesos forzados a encajar en un sistema.",
          head: "Cuando el software estándar ya no basta",
          why: "Un CRM estándar sirve mientras su proceso se parezca al habitual. Cuando los comerciales llevan la mitad de su trabajo en hojas de cálculo porque el sistema «no sabe hacerlo», desarrollar uno propio sale más barato.\n\nMigramos los datos desde los sistemas antiguos y las hojas de cálculo. La implantación va departamento por departamento, para que el trabajo no se detenga ni un día.",
          includes: ["módulos de ventas, almacén, producción y finanzas, según sea necesario", "roles, permisos y registro de actividad", "informes y cuadros de mando para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "integración con contabilidad, telefonía y correo"],
          result: "Un solo sistema en lugar de un zoo de hojas de cálculo. La dirección ve cómo van las cosas sin informes semanales de cada departamento."
        },
        {
          title: "Soluciones en la nube",
          intro: "Trasladamos su infraestructura a Amazon Web Services, total o parcialmente, y después nos aseguramos de que siga funcionando y no se encarezca sin motivo.",
          head: "La nube no siempre es más barata",
          why: "Un servidor propio a veces cuesta menos. La nube gana cuando la carga sufre picos, cuando hace falta tolerancia a fallos o cuando los entornos nuevos deben estar listos en minutos y no en una semana.\n\nPor eso una migración empieza con una auditoría y un cálculo de costes. Migramos por etapas, con un plan de vuelta atrás en cada paso.",
          includes: ["auditoría de la infraestructura actual y cálculo de costes", "arquitectura en AWS y plan de migración", "traslado de servidores, bases de datos y archivos", "copias de seguridad y monitorización", "optimización de costes tras la migración"],
          result: "Una infraestructura que sobrevive a la caída de un servidor y una factura de la nube que usted entiende."
        },
        {
          title: "Infraestructura empresarial con Red Hat",
          intro: "Construimos la infraestructura de TI de su empresa sobre Red Hat: servidores con Red Hat Enterprise Linux, la plataforma de contenedores OpenShift y automatización con Ansible.",
          head: "Por qué pagar una suscripción",
          why: "Las empresas eligen Red Hat cuando la infraestructura tiene que funcionar durante años y superar auditorías, en lugar de depender de la memoria de un único administrador. La suscripción se amortiza con el soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene soporte durante diez años.\n\nDiseñamos la infraestructura según sus cargas de trabajo y describimos la configuración de los servidores en Ansible. Cualquier servidor se reconstruye a partir de un playbook, no de memoria. Red Hat es nuestro socio, así que también le ayudamos con las suscripciones y el soporte del fabricante.",
          includes: ["auditoría de sus servidores actuales y plan de migración", "implantación de Red Hat Enterprise Linux con actualizaciones centralizadas mediante Red Hat Satellite", "la plataforma de contenedores OpenShift para sus aplicaciones", "automatización de la configuración y el despliegue con Ansible", "gestión centralizada de cuentas y accesos (Identity Management)", "monitorización, copias de seguridad y documentación para su equipo"],
          result: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin perder el conocimiento."
        },
        {
          title: "API e integraciones",
          intro: "Desarrollamos API para sus sistemas y los conectamos con los servicios que ya utiliza.",
          head: "El problema más habitual",
          why: "Los datos se introducen dos veces. Los pedidos de la web se pasan a mano al sistema contable y los pagos se cuadran en una hoja de cálculo. Una integración elimina ese trabajo y, con él, los errores.\n\nLa monitorización la configuramos aparte. Las integraciones fallan en silencio cuando un socio cambia su API, y es mejor enterarse por el sistema que por un cliente.",
          includes: ["diseño y documentación de API", "integración con pasarelas de pago, empresas de mensajería, CRM y contabilidad", "intercambio de datos entre sistemas internos", "colas y reintentos cuando algo falla", "monitorización y alertas"],
          result: "Los datos se introducen una sola vez y llegan solos adonde hacen falta."
        },
        {
          title: "Soporte técnico",
          intro: "Mantenemos y seguimos desarrollando sus sistemas de TI, incluidos los que no hicimos nosotros.",
          head: "Si el sistema lo hizo otro",
          why: "Empezamos con una auditoría y la documentación. Sin ella, cada cambio es una lotería.\n\nDespués, el soporte es algo más que corregir errores. Son actualizaciones que cierran vulnerabilidades, una monitorización que detecta un problema antes que los usuarios y pequeñas mejoras sobre la marcha.",
          includes: ["monitorización de la disponibilidad y de los errores", "corrección de errores y actualizaciones de seguridad", "copias de seguridad y pruebas de restauración", "mejoras planificadas y nuevas funciones", "auditoría y documentación de sistemas hechos por otros proveedores"],
          result: "Un sistema que funciona y un equipo que sabe cómo está construido."
        }
      ]
    },
    pt: {
      title: "Serviços",
      lead: "Não estamos presos a uma linguagem de programação nem a uma plataforma. Primeiro percebemos o que é preciso fazer e só depois escolhemos as ferramentas. Por vezes, a melhor resposta é um serviço já existente por subscrição; nesse caso dizemo-lo, e não é preciso desenvolver nada.",
      open: "Cada serviço é um ficheiro à parte. Abra-o com Enter ou F3:",
      includes: "O que inclui",
      result: "Resultado",
      pages: [
        {
          title: "Conceção de soluções de TI",
          intro: "Ajudamos a perceber de que sistema precisa realmente e a registá-lo por escrito de forma a que tanto o negócio como os programadores possam trabalhar a partir do documento.",
          head: "Porque começar por aqui",
          why: "O erro mais caro num projeto de TI acontece antes da primeira linha de código: uma equipa constrói um sistema para um problema que ninguém formulou como deve ser. Começamos por falar com quem vai trabalhar no sistema: a contabilidade, o armazém, os comerciais. Com a direção também, mas não só.\n\nÀs vezes acabamos por aconselhar a não desenvolver nada e a configurar um produto existente. Para nós, é um resultado perfeitamente normal.",
          includes: ["entrevistas com os colaboradores e análise de como os processos funcionam hoje", "requisitos de negócio e cenários de utilização", "comparação entre produtos prontos e desenvolvimento à medida", "caderno de encargos com estimativa de prazos e orçamento por fase"],
          result: "Um documento a partir do qual qualquer equipa, a nossa ou outra, consegue orçamentar o trabalho e pô-lo em marcha."
        },
        {
          title: "Desenvolvimento SaaS",
          intro: "Concebemos e desenvolvemos plataformas SaaS. Começamos com uma primeira versão para clientes-piloto e levamo-la até um serviço em que cada cliente tem o seu próprio espaço, o seu plano e a sua área de cliente.",
          head: "Onde está o dinheiro no SaaS",
          why: "Não está no código. Está na facilidade com que um novo cliente se regista, paga e começa a trabalhar sem ligar para o suporte. Por isso incluímos a arquitetura multi-inquilino, a faturação e as permissões desde o primeiro dia: refazê-las quando os clientes já estão lá dentro custa várias vezes mais.\n\nProcuramos lançar a primeira versão cedo. Os utilizadores reais mostram depressa que funcionalidades estavam a mais.",
          includes: ["arquitetura multi-inquilino com dados de clientes isolados", "registo, planos, subscrições e pagamento online", "áreas de cliente, perfis e permissões de acesso", "integrações e uma API pública para os seus clientes", "escalabilidade à medida que a carga cresce"],
          result: "Um produto que pode vender por subscrição, e não um projeto que é implementado à mão de cada vez."
        },
        {
          title: "Desenvolvimento web",
          intro: "Sites institucionais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas. Feitos à medida da tarefa, sem modelos.",
          head: "Como medimos um site",
          why: "Em pedidos de contacto e encomendas. O aspeto no portefólio é secundário. Antes de começar, combinamos o que conta como resultado e configuramos a análise de tráfego a tempo do lançamento, não seis meses depois.\n\nA tecnologia segue a tarefa. Uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num criador de sites.",
          includes: ["protótipo e design de interfaces", "frontend, backend e painel de administração", "integração com pagamentos, entregas, CRM e sistemas de faturação", "base de SEO, velocidade de carregamento e análise de tráfego", "lançamento e acompanhamento"],
          result: "Um serviço web em que se vê quantos pedidos e quanta receita traz."
        },
        {
          title: "Aplicações móveis",
          intro: "Aplicações para iOS e Android, juntamente com a parte de servidor e o painel de administração que as suportam.",
          head: "Quando não precisa de uma aplicação",
          why: "Uma aplicação justifica-se quando os clientes voltam a ela com regularidade: repetem encomendas, acompanham um estado, acumulam pontos. Se alguém a abre uma vez por ano, um bom site móvel fica mais barato, e dizemo-lo antes de começar.\n\nEntre desenvolvimento nativo e multiplataforma decidimos pelo orçamento e pelo quanto a aplicação depende da câmara, da localização e do modo offline.",
          includes: ["aplicações para iOS e Android", "parte de servidor e API", "painel de administração para conteúdos, encomendas e utilizadores", "notificações push e análise", "publicação na App Store e no Google Play"],
          result: "Uma aplicação que passa a revisão das lojas e que a sua equipa gere sem programadores."
        },
        {
          title: "Soluções com inteligência artificial",
          intro: "Automatizamos processos de negócio com agentes de IA: soluções baseadas em inteligência artificial e aprendizagem automática assumem os passos rotineiros que hoje são feitos pelos seus colaboradores.",
          head: "IA sem euforia",
          why: "Somos mais céticos em relação à IA do que a maioria. Metade das ideias do género «vamos acrescentar uma rede neuronal» resolve-se com automatização comum. Mas onde as pessoas passam horas a triar e-mails, documentos e pedidos, os modelos de linguagem tiram-lhes de facto a rotina das mãos.\n\nComeçamos com um piloto sobre os seus próprios dados. Os números de precisão chegam antes do desenvolvimento principal, não depois.",
          includes: ["agentes de IA que percorrem sozinhos os passos rotineiros de um processo: triam pedidos, preenchem o CRM, preparam respostas aos clientes", "chatbots e assistentes para clientes e colaboradores", "reconhecimento de documentos e extração de dados", "classificação de pedidos e pesquisa na base de conhecimento", "previsão da procura e análise de dados", "piloto com medição da qualidade sobre os seus dados"],
          result: "Um processo concreto que antes era feito por pessoas passa a ser feito pelo sistema, com uma pessoa a supervisioná-lo."
        },
        {
          title: "Desenvolvimento de CRM e ERP",
          intro: "Sistemas CRM e ERP construídos à volta dos seus processos, em vez de processos forçados a caber num sistema.",
          head: "Quando o software padrão já não chega",
          why: "Um CRM padrão serve enquanto o seu processo se parecer com o habitual. Quando os comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», desenvolver o seu próprio sai mais barato.\n\nMigramos os dados dos sistemas antigos e das folhas de cálculo. A implementação é feita departamento a departamento, para que o trabalho não pare um único dia.",
          includes: ["módulos de vendas, armazém, produção e finanças, conforme necessário", "perfis, permissões de acesso e registo de ações", "relatórios e painéis para a gestão", "migração de dados a partir de folhas de cálculo e sistemas antigos", "integração com contabilidade, telefonia e e-mail"],
          result: "Um único sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê o ponto da situação sem relatórios semanais de cada departamento."
        },
        {
          title: "Soluções na cloud",
          intro: "Migramos a sua infraestrutura para a Amazon Web Services, total ou parcialmente, e depois garantimos que continua a funcionar e não fica mais cara sem razão.",
          head: "A cloud nem sempre é mais barata",
          why: "Um servidor próprio às vezes custa menos. A cloud ganha quando a carga tem picos, quando é preciso tolerância a falhas ou quando novos ambientes devem ficar prontos em minutos e não numa semana.\n\nPor isso, uma migração começa com uma auditoria e um cálculo de custos. Migramos por etapas, com um plano de reversão em cada passo.",
          includes: ["auditoria da infraestrutura atual e cálculo de custos", "arquitetura na AWS e plano de migração", "transferência de servidores, bases de dados e ficheiros", "cópias de segurança e monitorização", "otimização de custos depois da migração"],
          result: "Uma infraestrutura que sobrevive à falha de um servidor e uma fatura da cloud que percebe."
        },
        {
          title: "Infraestrutura empresarial em Red Hat",
          intro: "Construímos a infraestrutura de TI da sua empresa em Red Hat: servidores com Red Hat Enterprise Linux, a plataforma de contentores OpenShift e automatização com Ansible.",
          head: "Porquê pagar uma subscrição",
          why: "As empresas escolhem a Red Hat quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de viver na cabeça de um único administrador. A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos.\n\nConcebemos a infraestrutura em função das suas cargas de trabalho e descrevemos a configuração dos servidores em Ansible. Qualquer servidor é reconstruído a partir de um playbook, e não de memória. A Red Hat é nossa parceira, por isso também ajudamos a pôr em ordem as subscrições e o suporte do fabricante.",
          includes: ["auditoria dos seus servidores atuais e plano de migração", "implementação do Red Hat Enterprise Linux com atualizações centralizadas através do Red Hat Satellite", "a plataforma de contentores OpenShift para as suas aplicações", "automatização da configuração e da implementação com Ansible", "gestão centralizada de contas e acessos (Identity Management)", "monitorização, cópias de segurança e documentação para a sua equipa"],
          result: "Uma infraestrutura que se pode auditar, reproduzir e entregar a outra equipa sem perder o conhecimento."
        },
        {
          title: "APIs e integrações",
          intro: "Desenvolvemos APIs para os seus sistemas e ligamo-los aos serviços que já utiliza.",
          head: "O problema mais comum",
          why: "Os dados são introduzidos duas vezes. As encomendas do site são passadas à mão para o sistema de faturação, os pagamentos são conferidos numa folha de cálculo. Uma integração elimina esse trabalho e, com ele, os erros.\n\nA monitorização configuramo-la à parte. As integrações avariam em silêncio quando um parceiro altera a sua API, e é melhor sabê-lo pelo sistema do que por um cliente.",
          includes: ["conceção e documentação de APIs", "integração com prestadores de pagamento, transportadoras, CRM e contabilidade", "troca de dados entre sistemas internos", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          result: "Os dados são introduzidos uma vez e chegam sozinhos aonde são precisos."
        },
        {
          title: "Suporte técnico",
          intro: "Mantemos e continuamos a desenvolver os seus sistemas de TI, incluindo os que não fomos nós a fazer.",
          head: "Se o sistema foi feito por outros",
          why: "Começamos com uma auditoria e documentação. Sem ela, cada alteração é uma lotaria.\n\nDepois disso, o suporte é mais do que corrigir erros. São atualizações que fecham vulnerabilidades, monitorização que deteta um problema antes dos utilizadores e pequenas melhorias pelo caminho.",
          includes: ["monitorização da disponibilidade e dos erros", "correção de erros e atualizações de segurança", "cópias de segurança e testes de reposição", "melhorias planeadas e novas funcionalidades", "auditoria e documentação de sistemas feitos por outros fornecedores"],
          result: "Um sistema que funciona e uma equipa que sabe como está construído."
        }
      ]
    },
    it: {
      title: "Servizi",
      lead: "Non siamo legati a un linguaggio di programmazione o a una piattaforma. Prima capiamo che cosa va fatto, e solo dopo scegliamo gli strumenti. A volte la risposta migliore è un servizio già pronto in abbonamento; in quel caso glielo diremo, e non ci sarà nulla da sviluppare.",
      open: "Ogni servizio è un file a sé. Lo apra con Invio o F3:",
      includes: "Cosa comprende",
      result: "Risultato",
      pages: [
        {
          title: "Ideazione della soluzione IT",
          intro: "La aiutiamo a capire di quale sistema ha davvero bisogno e a metterlo per iscritto in modo che sia l'azienda sia gli sviluppatori possano lavorare sul documento.",
          head: "Perché partire da qui",
          why: "L'errore più costoso in un progetto IT avviene prima della prima riga di codice: un team costruisce un sistema per un problema che nessuno ha formulato bene. Cominciamo parlando con chi lavorerà nel sistema: l'amministrazione, il magazzino, i commerciali. Anche con la direzione, ma non solo.\n\nA volte, alla fine, Le consigliamo di non sviluppare nulla e di configurare un prodotto esistente. Per noi è un risultato del tutto normale.",
          includes: ["interviste al personale e analisi di come funzionano oggi i processi", "requisiti di business e scenari d'uso", "confronto tra prodotti pronti e sviluppo su misura", "capitolato tecnico con stima di tempi e budget per fase"],
          result: "Un documento con cui qualsiasi team, il nostro o un altro, può stimare il lavoro e mettersi all'opera."
        },
        {
          title: "Sviluppo SaaS",
          intro: "Progettiamo e sviluppiamo piattaforme SaaS. Partiamo da una prima versione per i clienti pilota e la portiamo fino a un servizio in cui ogni cliente ha il proprio spazio, il proprio piano e la propria area riservata.",
          head: "Dove sono i soldi nel SaaS",
          why: "Non nel codice. Stanno nella facilità con cui un nuovo cliente si registra, paga e inizia a lavorare senza chiamare l'assistenza. Per questo prevediamo multi-tenancy, fatturazione e permessi fin dal primo giorno: rifarli quando i clienti sono già dentro costa molte volte di più.\n\nCerchiamo di rilasciare presto la prima versione. Gli utenti reali mostrano in fretta quali funzioni erano superflue.",
          includes: ["architettura multi-tenant con dati dei clienti isolati", "registrazione, piani, abbonamenti e pagamenti online", "aree riservate, ruoli e permessi di accesso", "integrazioni e un'API pubblica per i Suoi clienti", "scalabilità al crescere del carico"],
          result: "Un prodotto da vendere in abbonamento, non un progetto da installare a mano ogni volta."
        },
        {
          title: "Sviluppo web",
          intro: "Siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni. Realizzati per il compito, senza modelli preconfezionati.",
          head: "Come misuriamo un sito",
          why: "In richieste e ordini. L'aspetto nel portfolio conta meno. Prima di iniziare concordiamo che cosa considerare un risultato e configuriamo le statistiche in tempo per il lancio, non sei mesi dopo.\n\nLa tecnologia segue il compito. Una landing page non ha bisogno di una piattaforma pesante, e un marketplace non entra in un costruttore di siti.",
          includes: ["prototipo e design delle interfacce", "frontend, backend e pannello di amministrazione", "integrazione con pagamenti, spedizioni, CRM e gestionali contabili", "basi SEO, velocità di caricamento e statistiche", "lancio e assistenza continuativa"],
          result: "Un servizio web di cui si vede quante richieste e quanto fatturato porta."
        },
        {
          title: "App mobili",
          intro: "App per iOS e Android, insieme alla parte server e al pannello di amministrazione che le sostengono.",
          head: "Quando un'app non serve",
          why: "Un'app ha senso quando i clienti ci tornano regolarmente: per riordinare, seguire lo stato di una pratica, accumulare punti. Se qualcuno passa una volta l'anno, un buon sito mobile costa meno, e glielo diremo prima di iniziare.\n\nTra nativo e multipiattaforma scegliamo in base al budget e a quanto l'app ha bisogno di fotocamera, geolocalizzazione e modalità offline.",
          includes: ["app per iOS e Android", "parte server e API", "pannello di amministrazione per contenuti, ordini e utenti", "notifiche push e statistiche", "pubblicazione su App Store e Google Play"],
          result: "Un'app che supera la revisione degli store e che il Suo team gestisce senza sviluppatori."
        },
        {
          title: "Soluzioni di intelligenza artificiale",
          intro: "Automatizziamo i processi aziendali con agenti di IA: soluzioni basate su intelligenza artificiale e machine learning si fanno carico dei passaggi di routine che oggi svolge il Suo personale.",
          head: "IA senza clamore",
          why: "Siamo più scettici sull'IA della maggior parte delle persone. Metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione. Ma dove le persone passano ore a smistare e-mail, documenti e richieste, i modelli linguistici tolgono davvero la routine dalle loro mani.\n\nPartiamo da un progetto pilota sui Suoi dati. I numeri sulla precisione arrivano prima dello sviluppo vero e proprio, non dopo.",
          includes: ["agenti di IA che svolgono da soli i passaggi di routine di un processo: smistano le richieste, compilano il CRM, preparano le risposte ai clienti", "chatbot e assistenti per clienti e dipendenti", "riconoscimento dei documenti ed estrazione dei dati", "classificazione delle richieste e ricerca nella base di conoscenza", "previsione della domanda e analisi dei dati", "progetto pilota con misura della qualità sui Suoi dati"],
          result: "Un processo concreto che prima svolgevano le persone ora lo svolge il sistema, con una persona che lo tiene sotto controllo."
        },
        {
          title: "Sviluppo CRM ed ERP",
          intro: "CRM ed ERP costruiti attorno ai Suoi processi, invece di processi piegati per adattarsi a un sistema.",
          head: "Quando il software standard non basta più",
          why: "Un CRM standard va bene finché il Suo processo somiglia a quello tipico. Quando i commerciali svolgono metà del lavoro su fogli di calcolo perché il sistema «non lo sa fare», sviluppare il proprio diventa più conveniente.\n\nMigriamo i dati dai vecchi sistemi e dai fogli di calcolo. L'introduzione procede reparto per reparto, così il lavoro non si ferma nemmeno per un giorno.",
          includes: ["moduli per vendite, magazzino, produzione e finanza, secondo le esigenze", "ruoli, permessi di accesso e registro delle attività", "report e dashboard per la direzione", "migrazione dei dati da fogli di calcolo e sistemi esistenti", "integrazione con contabilità, telefonia e posta elettronica"],
          result: "Un solo sistema al posto di uno zoo di fogli di calcolo. La direzione vede a che punto sono le cose senza report settimanali da ogni reparto."
        },
        {
          title: "Soluzioni cloud",
          intro: "Trasferiamo la Sua infrastruttura su Amazon Web Services, del tutto o in parte, e poi ci assicuriamo che continui a funzionare e non diventi più cara senza motivo.",
          head: "Il cloud non costa sempre meno",
          why: "Un server di proprietà a volte costa meno. Il cloud vince quando il carico ha dei picchi, quando serve tolleranza ai guasti o quando i nuovi ambienti devono essere pronti in pochi minuti e non in una settimana.\n\nPer questo una migrazione inizia con un audit e una stima dei costi. Migriamo per fasi, con un piano di rientro a ogni passaggio.",
          includes: ["audit dell'infrastruttura attuale e stima dei costi", "architettura su AWS e piano di migrazione", "trasferimento di server, database e file", "backup e monitoraggio", "ottimizzazione dei costi dopo la migrazione"],
          result: "Un'infrastruttura che sopravvive al guasto di un server, e una bolletta del cloud che Lei capisce."
        },
        {
          title: "Infrastruttura aziendale su Red Hat",
          intro: "Costruiamo l'infrastruttura IT della Sua azienda su Red Hat: server con Red Hat Enterprise Linux, la piattaforma di container OpenShift e l'automazione con Ansible.",
          head: "Perché pagare un abbonamento",
          why: "Le aziende scelgono Red Hat quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di vivere nella memoria di un solo amministratore. L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni.\n\nProgettiamo l'infrastruttura sui Suoi carichi di lavoro e descriviamo la configurazione dei server in Ansible. Ogni server si ricostruisce da un playbook, non a memoria. Red Hat è nostro partner, quindi possiamo aiutarLa anche a orientarsi tra abbonamenti e supporto del produttore.",
          includes: ["audit dei server attuali e piano di migrazione", "introduzione di Red Hat Enterprise Linux con aggiornamenti centralizzati tramite Red Hat Satellite", "la piattaforma di container OpenShift per le Sue applicazioni", "automazione di configurazione e deployment con Ansible", "gestione centralizzata di account e accessi (Identity Management)", "monitoraggio, backup e documentazione per il Suo team"],
          result: "Un'infrastruttura che si può verificare, riprodurre e passare a un altro team senza perdere conoscenze."
        },
        {
          title: "API e integrazioni",
          intro: "Sviluppiamo API per i Suoi sistemi e li colleghiamo ai servizi che già utilizza.",
          head: "Il problema più frequente",
          why: "I dati vengono inseriti due volte. Gli ordini del sito si ricopiano a mano nel gestionale, i pagamenti si riconciliano in un foglio di calcolo. Un'integrazione elimina questo lavoro, e con esso gli errori.\n\nIl monitoraggio lo configuriamo a parte. Le integrazioni si rompono in silenzio quando un partner cambia la sua API, ed è meglio saperlo dal sistema che da un cliente.",
          includes: ["progettazione e documentazione delle API", "integrazione con servizi di pagamento, corrieri, CRM e contabilità", "scambio di dati tra sistemi interni", "code e nuovi tentativi in caso di errore", "monitoraggio e notifiche"],
          result: "I dati si inseriscono una volta sola e arrivano da soli dove servono."
        },
        {
          title: "Supporto tecnico",
          intro: "Assistiamo e continuiamo a sviluppare i Suoi sistemi IT, compresi quelli che non abbiamo realizzato noi.",
          head: "Se il sistema l'ha fatto qualcun altro",
          why: "Partiamo da un audit e dalla documentazione. Senza, ogni modifica diventa una lotteria.\n\nPoi l'assistenza non si limita a correggere bug. Sono aggiornamenti che chiudono le vulnerabilità, un monitoraggio che nota un problema prima degli utenti e piccoli miglioramenti strada facendo.",
          includes: ["monitoraggio di disponibilità ed errori", "correzione di bug e aggiornamenti di sicurezza", "backup e prove di ripristino", "miglioramenti pianificati e nuove funzioni", "audit e documentazione di sistemi realizzati da altri fornitori"],
          result: "Un sistema che funziona, e un team che sa com'è fatto."
        }
      ]
    }
  };

  /* Інші версії сайту — зі спільного списку, з адресою поточної мови */
  const versions = () => AIC.variants.filter((v) => v.id !== AIC.id).map((v) => [v.name[lang], AIC.url(v.id, lang)]);
  const SVC = ["concept", "saas", "web", "mobile", "ai", "crm-erp", "cloud", "redhat", "api", "support"];

  /* Скіни: роль → [колір тексту, колір фону] */
  const SKINS = {
    default: { panel: [7, 4], frame: [7, 4], dir: [15, 4], exe: [10, 4], header: [11, 4], sel: [0, 6], path: [0, 6], menu: [0, 6], menuSel: [15, 0], keynum: [7, 0], keylbl: [0, 6], cmd: [7, 0], hint: [7, 0], dialog: [0, 7], dtitle: [4, 7], dfocus: [0, 6], error: [15, 1], efocus: [0, 7], view: [7, 4], viewHead: [0, 6], edit: [7, 4], editHead: [0, 6], h1: [11, 4], h2: [14, 4], li: [10, 4], quote: [6, 4], link: [14, 4], shell: [7, 0], shade: [8, 0] },
    dark: { panel: [7, 0], frame: [8, 0], dir: [15, 0], exe: [10, 0], header: [11, 0], sel: [0, 7], path: [0, 7], menu: [7, 8], menuSel: [0, 7], keynum: [7, 0], keylbl: [0, 8], cmd: [7, 0], hint: [8, 0], dialog: [7, 8], dtitle: [15, 8], dfocus: [0, 7], error: [15, 1], efocus: [0, 7], view: [7, 0], viewHead: [0, 7], edit: [7, 0], editHead: [0, 7], h1: [11, 0], h2: [14, 0], li: [10, 0], quote: [8, 0], link: [14, 0], shell: [7, 0], shade: [8, 0] },
    mono: { panel: [7, 0], frame: [7, 0], dir: [15, 0], exe: [15, 0], header: [15, 0], sel: [0, 7], path: [0, 7], menu: [0, 7], menuSel: [7, 0], keynum: [7, 0], keylbl: [0, 7], cmd: [7, 0], hint: [7, 0], dialog: [0, 7], dtitle: [0, 7], dfocus: [7, 0], error: [0, 7], efocus: [7, 0], view: [7, 0], viewHead: [0, 7], edit: [7, 0], editHead: [0, 7], h1: [15, 0], h2: [15, 0], li: [15, 0], quote: [7, 0], link: [15, 0], shell: [7, 0], shade: [8, 0] }
  };

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || LANGS.find((l) => nav.startsWith(l)) || "uk";
  if (!LANGS.includes(lang)) lang = "uk";
  let skin = store.get("aic-mc-skin");
  if (!SKINS[skin]) skin = "default";
  const t = () => I18N[lang];
  const m = () => MX[lang];
  /* Двокрапка після підпису: у французькій перед нею нерозривний пробіл */
  const colon = () => (lang === "fr" ? "\u00a0:" : ":");
  const S = (role) => SKINS[skin][role];
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };
  const bytes = (s) => new TextEncoder().encode(s).length;
  const siteUrl = () => location.origin + AIC.url("classic", lang);

  /* ---------- Файлова система ---------- */
  const file = (text, extra = {}) => ({ type: "file", text, mode: "-rw-r--r--", ...extra });
  const dir = (kids) => ({ type: "dir", kids, mode: "drwxr-xr-x" });
  const md = {
    readme: () => {
      const s = t();
      return [`# ${s.heroTitle}`, "", s.heroText, "", `## ${s.heroLead}${colon()}`, "", ...s.phrases.map((p) => `- ${p}`), "", "---", "", s.copyright, s.legal, s.slogan, `${s.source}${colon()} ${siteUrl()}`, ""].join("\n");
    },
    service: (i) => {
      const D = MD[lang];
      const p = D.pages[i];
      return [`# ${p.title}`, "", p.intro, "", `## ${p.head}`, "", p.why, "", `## ${D.includes}`, "", ...p.includes.map((x) => `- ${x}`), "", `## ${D.result}`, "", p.result, "", `> ${m().discuss}`, ""].join("\n");
    },
    services: () => {
      const D = MD[lang];
      return [`# ${D.title}`, "", D.lead, "", D.open, "", ...SVC.map((s, i) => `- ${s}.md — ${D.pages[i].title}`), "", `> ${m().discuss}`, ""].join("\n");
    },
    partners: () => [t().partnersTitle, "", ...PARTNERS.map((p) => `  * ${p}${p === "UNIO24" ? "  https://unio24.com/" : ""}`), ""].join("\n"),
    vcard: () => ["BEGIN:VCARD", "VERSION:3.0", "FN:ArtIntelliCo", "ORG:ArtIntelliCo", `EMAIL;TYPE=work:${EMAIL}`, `URL:${siteUrl()}`, `NOTE:${t().contactText}`, "END:VCARD", ""].join("\n"),
    request: () => ["#!/bin/sh", `# ${t().contactTitle}`, "", "mcedit ~/request.txt && \\", `  mail -s "$(head -1 ~/request.txt)" ${EMAIL} < ~/request.txt`, ""].join("\n"),
    bashrc: () => ["# ~/.bashrc", "export EDITOR=mcedit", "export PAGER=less", "alias ll='ls -l'", "PS1='\\u@\\h:\\w\\$ '", ""].join("\n"),
    motd: () => ["", "ArtIntelliCo GNU/Linux", "", t().heroTitle, ""].join("\n")
  };
  const ROOT = dir({
    bin: dir({}), etc: dir({ motd: file(md.motd) }), tmp: dir({}), usr: dir({}), var: dir({}),
    home: dir({
      guest: dir({
        ".bashrc": file(md.bashrc),
        artintellico: dir({
          "README.md": file(md.readme),
          "contact.vcf": file(md.vcard),
          "partners.txt": file(md.partners),
          "request.sh": file(md.request, { mode: "-rwxr-xr-x", exe: true }),
          services: dir({ "README.md": file(md.services), ...Object.fromEntries(SVC.map((s, i) => [s + ".md", file(() => md.service(i), { svc: i })])) })
        })
      })
    })
  });
  const norm = (p, base) => {
    let path = p.replace(/^~(?=\/|$)/, HOME);
    if (!path.startsWith("/")) path = base + "/" + path;
    const out = [];
    path.split("/").forEach((s) => { if (!s || s === ".") return; if (s === "..") out.pop(); else out.push(s); });
    return "/" + out.join("/");
  };
  const lookup = (abs) => { let n = ROOT; for (const s of abs.split("/").filter(Boolean)) { if (!n || n.type !== "dir") return null; n = n.kids[s]; } return n || null; };
  const short = (abs) => (abs === HOME ? "~" : abs.startsWith(HOME + "/") ? "~" + abs.slice(HOME.length) : abs);
  const sizeOf = (n) => (n.type === "dir" ? 4096 : bytes(n.text()));
  const mtime = () => { const d = new Date(); return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00`; };
  function entries(abs) {
    const n = lookup(abs);
    const kids = Object.entries(n.kids).map(([name, node]) => ({ name, node, abs: abs === "/" ? "/" + name : abs + "/" + name }));
    const dirs = kids.filter((k) => k.node.type === "dir").sort((a, b) => a.name.localeCompare(b.name));
    const files = kids.filter((k) => k.node.type !== "dir").sort((a, b) => a.name.localeCompare(b.name));
    const up = abs === "/" ? [] : [{ name: "..", node: { type: "dir", mode: "drwxr-xr-x" }, abs: norm("..", abs), up: true }];
    return [...up, ...dirs, ...files];
  }

  /* ---------- Екран: буфер клітинок ---------- */
  const scr = $("scr");
  let C = 80, R = 25, CW = 8, CH = 16, FS = 16;
  let buf = [];
  let hits = [];
  function measure() {
    const W = innerWidth, H = document.body.clientHeight || innerHeight; /* під футером сайту */
    if (W >= 1720 && H >= 1000) { FS = 24; CW = 12; CH = 24; }
    else if (W >= 1100 && H >= 640) { FS = 20; CW = 10; CH = 20; }
    else { FS = 16; CW = 8; CH = 16; }
    C = Math.max(40, Math.floor(W / CW));
    R = Math.max(16, Math.floor(H / CH));
    Object.assign(scr.style, {
      font: `${FS}px/${CH}px "TCon${FS}", monospace`,
      left: Math.floor((W - C * CW) / 2) + "px",
      top: Math.floor((H - R * CH) / 2) + "px",
      width: C * CW + "px",
      height: R * CH + "px"
    });
  }
  function cls(role = "shell") { const [f, b] = S(role); buf = Array.from({ length: R * C }, () => ({ c: " ", f, b })); hits = []; modalFrom = 0; }
  function put(r, c, text, role, extra) {
    if (r < 0 || r >= R) return c;
    const [f, b] = Array.isArray(role) ? role : S(role);
    for (const ch of String(text)) {
      if (c >= C) break;
      if (c >= 0) buf[r * C + c] = { c: ch, f, b, k: extra };
      c++;
    }
    return c;
  }
  function fill(r, c, w, h, role, ch = " ") { for (let y = r; y < r + h; y++) put(y, c, ch.repeat(Math.max(0, w)), role); }
  function box(r, c, w, h, role) {
    put(r, c, "┌" + "─".repeat(w - 2) + "┐", role);
    for (let y = r + 1; y < r + h - 1; y++) { put(y, c, "│", role); put(y, c + w - 1, "│", role); }
    put(r + h - 1, c, "└" + "─".repeat(w - 2) + "┘", role);
  }
  let modalFrom = 0;
  function hit(r, c0, c1, act, dbl) { hits.push({ r, c0, c1, act, dbl }); }
  const fit = (s, w) => { const a = [...String(s)]; return a.length > w ? a.slice(0, Math.max(0, w - 1)).join("") + "~" : a.join("").padEnd(w); };
  function wrap(text, w) {
    const out = [];
    String(text).split("\n").forEach((line) => {
      if (!line) { out.push(""); return; }
      let cur = "";
      for (const word of line.split(/([ \t]+)/)) { /* нерозривний пробіл не розриває рядок */
        if ([...(cur + word)].length > w) {
          if (cur.trim()) out.push(cur.replace(/\s+$/, ""));
          cur = word.trimStart();
          while ([...cur].length > w) { out.push([...cur].slice(0, w).join("")); cur = [...cur].slice(w).join(""); }
        } else cur += word;
      }
      out.push(cur);
    });
    return out;
  }
  const escH = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  function flush() {
    let html = "";
    for (let r = 0; r < R; r++) {
      let run = "", key = null;
      for (let c = 0; c < C; c++) {
        const cell = buf[r * C + c];
        const k = `f${cell.f} b${cell.b}${cell.k ? " " + cell.k : ""}`;
        if (k !== key) { if (key) html += `<span class="${key}">${escH(run)}</span>`; run = ""; key = k; }
        run += cell.c;
      }
      html += `<span class="${key}">${escH(run)}</span>` + (r < R - 1 ? "\n" : "");
    }
    scr.innerHTML = html;
  }

  /* ---------- Стан ---------- */
  let mode = "boot";          // boot | panels | view | edit | shell
  let mcRunning = false;
  let active = 0;
  let single = false;
  const panels = [
    { path: SITE_DIR, cur: 0, top: 0, mode: "list", format: "full" },
    { path: SITE_DIR + "/services", cur: 0, top: 0, mode: "quick", qtop: 0 }
  ];
  let cmd = "";
  let hintIx = 0;
  let hintOverride = "";
  let menu = null;            // { i, sel }
  let dialog = null;          // { title, lines, buttons, focus, error }
  let viewer = null;          // { abs, top, wrap, hex }
  let editor = null;
  const shellLog = [];
  let shellCmd = "";
  const history = [];
  let hIx = 0;

  const P = () => panels[active];
  const curEntry = (p = panels[0]) => entries(p.path)[p.cur];

  /* ---------- Малювання ---------- */
  function draw() {
    if (mode === "boot") return;
    if (mode === "view") return drawViewer();
    if (mode === "edit") return drawEditor();
    if (mode === "shell") return drawShell();
    single = C < 72;
    cls("cmd");
    drawMenubar();
    const H = R - 4;
    if (single) drawPanel(0, 0, C, H);
    else {
      const w0 = Math.floor(C / 2);
      drawPanel(0, 0, w0, H);
      drawPanel(1, w0, C - w0, H);
    }
    put(R - 3, 0, fit(hintOverride || m().hints[hintIx], C), "hint");
    const pr = `guest@${HOST}:${short(P().mode === "list" ? P().path : panels[0].path)}$ `;
    const end = put(R - 2, 0, fit(pr + cmd, C), "cmd");
    const cc = Math.min(C - 1, [...(pr + cmd)].length);
    const cell = buf[(R - 2) * C + cc];
    buf[(R - 2) * C + cc] = { ...cell, k: "blink", f: S("cmd")[1], b: S("cmd")[0] };
    hit(R - 2, 0, C, () => $("ki").focus());
    drawKeybar(m().keys, fkey);
    if (menu) drawMenu();
    if (dialog) drawDialog();
    flush();
    updateSr();
  }

  /* Рядок меню: пункти mc і окремий пункт «Мова» праворуч від «Права».
     Якщо на вузькому екрані не вміщається, спершу прибираються проміжки, потім «Мова» стає кодом (UK),
     а далі найдовші назви вкорочуються, як у справжнього mc */
  const LANG_WORD = { uk: "Мова", en: "Language", ru: "Язык", de: "Sprache", fr: "Langue", es: "Idioma", pt: "Idioma", it: "Lingua" };
  const LANG_MENU = 5;
  const MENU_COUNT = 6;
  function menuLabels() {
    const fits = (L, gap) => L.reduce((a, l) => a + [...l].length + gap, gap === 3 ? 2 : 0) <= C;
    const word = LANG_WORD[lang] || "Language";
    const code = (AIC.langCodes && AIC.langCodes[lang]) || lang.toUpperCase();
    for (const L of [[...m().menu, word], [...m().menu, code]]) {
      if (fits(L, 3)) return { L, wide: true };
      if (fits(L, 2)) return { L, wide: false };
    }
    const L = [...m().menu, code].map((l) => [...l]);
    while (L.reduce((a, l) => a + l.length + 2, 0) > C) {
      const longest = L.slice(0, -1).reduce((a, l, i) => (l.length > L[a].length ? i : a), 0);
      if (L[longest].length <= 3) break;
      L[longest].pop();
    }
    return { L: L.map((l) => l.join("")), wide: false };
  }
  function menuPos() {
    const { L, wide } = menuLabels();
    let c = wide ? 2 : 0;
    return L.map((l) => { const c0 = c; c += [...l].length + (wide ? 3 : 2); return c0; });
  }
  function drawMenubar() {
    fill(0, 0, C, 1, "menu");
    const pos = menuPos();
    menuLabels().L.forEach((label, i) => {
      const c = put(0, pos[i], ` ${label} `, menu && menu.i === i ? "menuSel" : "menu");
      hit(0, pos[i], c, () => openMenu(i));
    });
  }

  function drawKeybar(labels, act) {
    /* На вузькому екрані лишаються п'ять головних клавіш, інакше підписи нечитабельні */
    const keys = labels.map((l, i) => i).filter((i) => C >= 72 || (labels[i] && [1, 2, 3, 8, 9].includes(i)));
    const w = Math.floor(C / keys.length);
    keys.forEach((i, k) => {
      const c0 = k * w;
      const wi = k === keys.length - 1 ? C - c0 : w;
      const n = String(i + 1);
      put(R - 1, c0, n, "keynum");
      put(R - 1, c0 + n.length, fit(labels[i], wi - n.length), "keylbl");
      hit(R - 1, c0, c0 + wi, () => act(i + 1));
    });
  }

  function drawPanel(ix, x, w, H) {
    const p = panels[ix];
    const isActive = ix === active;
    fill(1, x, w, H, "panel");
    box(1, x, w, H, "frame");
    if (p.mode === "list") drawList(p, ix, x, w, H, isActive);
    else if (p.mode === "quick") drawQuick(p, ix, x, w, H, isActive);
    else drawInfo(p, ix, x, w, H, isActive);
    hit(1, x, x + w, () => { active = ix; draw(); });
  }

  function header(x, w, title, isActive) {
    put(1, x + 1, "<─", "frame");
    put(1, x + w - 6, ".[^]>", "frame");
    const room = w - 10;
    const s = ` ${title} `;
    put(1, x + 3, [...s].length > room ? " ~" + [...s].slice(-room + 2).join("") : s, isActive ? "path" : "frame");
  }

  function drawList(p, ix, x, w, H, isActive) {
    const list = entries(p.path);
    p.cur = Math.max(0, Math.min(p.cur, list.length - 1));
    header(x, w, short(p.path), isActive);
    const full = p.format === "full" && w >= 36;
    const nameW = full ? w - 2 - 1 - 7 - 1 - 12 : w - 2;
    const sep = full ? [x + 1 + nameW, x + 1 + nameW + 8] : [];
    put(2, x + 1, fit(center(m().cols[0], nameW), nameW), "header");
    if (full) {
      put(2, sep[0], "│", "frame"); put(2, sep[0] + 1, fit(center(m().cols[1], 7), 7), "header");
      put(2, sep[1], "│", "frame"); put(2, sep[1] + 1, fit(center(m().cols[2], 12), 12), "header");
    }
    const rows = H - 5;
    if (p.cur < p.top) p.top = p.cur;
    if (p.cur >= p.top + rows) p.top = p.cur - rows + 1;
    for (let i = 0; i < rows; i++) {
      const r = 3 + i;
      const e = list[p.top + i];
      sep.forEach((sx) => put(r, sx, "│", "frame"));
      if (!e) continue;
      const isDir = e.node.type === "dir";
      const prefix = isDir ? "/" : e.node.exe ? "*" : " ";
      const role = isActive && p.top + i === p.cur ? "sel" : isDir ? "dir" : e.node.exe ? "exe" : "panel";
      put(r, x + 1, fit(prefix + e.name, nameW), role);
      if (full) {
        put(r, sep[0], "│", role === "sel" ? "sel" : "frame");
        put(r, sep[0] + 1, (e.up ? "UP--DIR" : String(sizeOf(e.node))).padStart(7), role);
        put(r, sep[1], "│", role === "sel" ? "sel" : "frame");
        put(r, sep[1] + 1, fit(mtime(), 12), role);
      }
      const k = p.top + i;
      hit(r, x + 1, x + w - 1, () => {
        const already = active === ix && p.cur === k;
        active = ix; p.cur = k;
        syncQuick();
        if (already && coarse) open(); else draw();
      }, () => { active = ix; p.cur = k; open(); });
    }
    put(1 + H - 3, x, "├" + "─".repeat(w - 2) + "┤", "frame");
    sep.forEach((sx) => put(1 + H - 3, sx, "┴", "frame"));
    const e = list[p.cur];
    if (e) put(1 + H - 2, x + 1, fit((e.node.type === "dir" ? "/" : "") + e.name + (e.up ? "" : "  " + sizeOf(e.node) + " " + m().bytes), w - 2), "panel");
    put(1 + H - 1, x + w - 18, " 40G/40G (99%) ", "frame");
  }
  const center = (s, w) => { const n = [...s].length; const l = Math.max(0, Math.floor((w - n) / 2)); return " ".repeat(l) + s; };

  function mdRole(line) {
    if (/^# /.test(line)) return "h1";
    if (/^## /.test(line)) return "h2";
    if (/^\s*[-*] /.test(line)) return "li";
    if (/^> /.test(line)) return "quote";
    return "panel";
  }

  /* Markdown з підсвіткою: роль береться з вихідного рядка, перенесений пункт списку зберігає відступ */
  function mdLines(text, w) {
    const out = [];
    String(text).split("\n").forEach((line) => {
      const role = mdRole(line);
      if (!w) { out.push({ t: line, role }); return; }
      const lead = role === "li" ? line.match(/^\s*[-*] /) : role === "quote" ? line.match(/^> /) : null;
      const pre = lead ? lead[0] : "";
      const pad = " ".repeat([...pre].length);
      wrap(line.slice(pre.length), Math.max(8, w - pad.length)).forEach((b, k) => out.push({ t: (k ? pad : pre) + b, role }));
    });
    return out;
  }

  function linkHits(r, c, text) {
    [EMAIL, siteUrl(), "https://unio24.com/"].forEach((u) => {
      const i = text.indexOf(u);
      if (i >= 0) {
        const c0 = c + [...text.slice(0, i)].length;
        const c1 = c0 + u.length;
        for (let k = c0; k < Math.min(c1, C); k++) { const cell = buf[r * C + k]; buf[r * C + k] = { ...cell, f: S("link")[0] }; }
        hit(r, c0, c1, () => (u === EMAIL ? (location.href = AIC.mailto("mailto:" + EMAIL)) : window.open(u, "_blank", "noopener")));
      }
    });
  }

  function drawQuick(p, ix, x, w, H, isActive) {
    const e = curEntry(panels[0]);
    header(x, w, e ? e.name : "", isActive);
    if (!e) return;
    let lines;
    if (e.node.type === "dir") {
      const kids = e.up ? [] : entries(e.abs).filter((k) => !k.up);
      lines = e.up ? [] : [m().dirSummary(kids.length), "", ...kids.map((k) => (k.node.type === "dir" ? "/" : " ") + k.name)];
    } else lines = /\.md$/.test(e.name) ? mdLines(e.node.text(), w - 2) : wrap(e.node.text(), w - 2);
    const rows = H - 2;
    p.qtop = Math.max(0, Math.min(p.qtop || 0, Math.max(0, lines.length - rows)));
    lines.slice(p.qtop, p.qtop + rows).forEach((l, i) => {
      const text = typeof l === "string" ? l : l.t;
      put(2 + i, x + 1, fit(text, w - 2), typeof l === "string" ? "panel" : l.role);
      linkHits(2 + i, x + 1, text);
    });
  }

  function drawInfo(p, ix, x, w, H, isActive) {
    const e = curEntry(panels[0]);
    header(x, w, m().rightModes[2], isActive);
    const L = m().info;
    put(2, x + 1, fit(center("Midnight Commander 4.8.30", w - 2), w - 2), "header");
    put(3, x, "├" + "─".repeat(w - 2) + "┤", "frame");
    if (!e) return;
    const rows = [
      [L[0], e.name], [L[1], `${e.node.mode} (${e.node.exe ? "0755" : e.node.type === "dir" ? "0755" : "0644"})`], [L[2], e.node.type === "dir" ? "2" : "1"],
      [L[3], "guest/guest"], [L[4], `${e.up ? 4096 : sizeOf(e.node)} ${m().bytes}`], [L[5], mtime()],
      [L[6], "/home"], [L[7], "/dev/sda1"], [L[8], "ext4"], [L[9], "40G (99%)"]
    ];
    rows.forEach(([k, v], i) => put(4 + i, x + 1, fit(`${k}${colon()} ${v}`, w - 2), "panel"));
  }

  /* ---------- Меню F9 ---------- */
  function menuItems(i) {
    const mm = m();
    if (i === 0) return [
      { label: mm.leftItems[0], check: panels[0].format === "full", act: () => { panels[0].format = "full"; } },
      { label: mm.leftItems[1], check: panels[0].format === "brief", act: () => { panels[0].format = "brief"; } },
      { sep: true },
      { label: mm.leftItems[2], key: "C-r", act: () => {} }
    ];
    if (i === 1) return [
      { label: mm.fileItems[0], key: "F3", act: () => fkey(3) },
      { label: mm.fileItems[1], key: "F4", act: () => fkey(4) },
      { label: mm.fileItems[2], key: "F5", act: () => fkey(5) },
      { label: mm.fileItems[3], key: "F6", act: () => fkey(6) },
      { label: mm.fileItems[4], key: "F7", act: () => fkey(7) },
      { label: mm.fileItems[5], key: "F8", act: () => fkey(8) },
      { sep: true },
      { label: mm.fileItems[6], key: "F10", act: () => fkey(10) }
    ];
    if (i === 2) return [
      { label: mm.cmdItems[0], key: "F2", act: userMenu },
      { label: mm.cmdItems[1], act: () => openEditor() },
      { label: mm.cmdItems[2], act: () => window.open(siteUrl(), "_blank", "noopener") },
      { label: mm.cmdItems[3], key: "C-o", act: toggleShell },
      { sep: true },
      { head: mm.versions },
      ...versions().map(([n, u]) => ({ label: n, act: () => { location.href = u; } }))
    ];
    if (i === LANG_MENU) return LANGS.map((l) => ({
      label: `${(AIC.langCodes && AIC.langCodes[l]) || l.toUpperCase()}  ${LANG_NAMES[l]}`, check: l === lang, act: () => setLang(l)
    }));
    if (i === 3) return [
      ...Object.keys(SKINS).map((k) => ({ label: `${mm.skins}: ${k}`, check: k === skin, act: () => setSkin(k) }))
    ];
    return mm.rightModes.map((label, k) => ({ label, check: panels[1].mode === ["list", "quick", "info"][k], act: () => { panels[1].mode = ["list", "quick", "info"][k]; } }));
  }
  function openMenu(i) {
    const items = menuItems(i);
    const current = items.findIndex((it) => it.check);
    menu = { i, sel: i === LANG_MENU && current >= 0 ? current : items.findIndex((it) => !it.sep && !it.head) };
    draw();
  }
  function drawMenu() {
    const items = menuItems(menu.i);
    const w = Math.min(C - 2, Math.max(...items.map((it) => [...(it.label || it.head || "")].length + (it.key ? it.key.length + 2 : 0))) + 6);
    const x = Math.max(0, Math.min(menuPos()[menu.i], C - w - 1));
    const h = items.length + 2;
    fill(1, x, w, h, "menu");
    box(1, x, w, h, "menu");
    items.forEach((it, k) => {
      const r = 2 + k;
      if (it.sep) { put(r, x, "├" + "─".repeat(w - 2) + "┤", "menu"); return; }
      if (it.head) { put(r, x + 1, fit(" " + it.head, w - 2), "dtitle"); return; }
      const role = k === menu.sel ? "menuSel" : "menu";
      const left = `${it.check ? "√" : " "} ${it.label}`;
      put(r, x + 1, fit(left, w - 2), role);
      if (it.key) put(r, x + w - 2 - it.key.length, it.key, role);
      hit(r, x, x + w, () => { menu = null; it.act(); draw(); });
    });
  }
  function menuKey(key) {
    const items = menuItems(menu.i);
    const step = (d) => { let k = menu.sel; do { k = (k + d + items.length) % items.length; } while (items[k].sep || items[k].head); menu.sel = k; };
    if (key === "ArrowDown") step(1);
    else if (key === "ArrowUp") step(-1);
    else if (key === "ArrowRight") openMenu((menu.i + 1) % MENU_COUNT);
    else if (key === "ArrowLeft") openMenu((menu.i + MENU_COUNT - 1) % MENU_COUNT);
    else if (key === "Escape" || key === "F9" || key === "F10") menu = null;
    else if (key === "Enter") { const it = items[menu.sel]; menu = null; it.act(); }
    draw();
  }

  /* ---------- Діалоги ---------- */
  function ask(title, text, buttons, error = false) {
    dialog = { title, text, buttons, focus: 0, error };
    draw();
  }
  function drawDialog() {
    modalFrom = hits.length;
    if (dialog.list) return drawListDialog();
    const d = dialog;
    const roleBg = d.error ? "error" : "dialog";
    const roleFocus = d.error ? "efocus" : "dfocus";
    const w = Math.min(C - 4, Math.max(36, Math.min(64, [...d.text].length + 8)));
    const lines = wrap(d.text, w - 6);
    const h = lines.length + 6;
    const x = Math.floor((C - w) / 2), y = Math.max(1, Math.floor((R - h) / 2) - 1);
    fill(y, x, w, h, roleBg);
    for (let r = y + 1; r <= y + h; r++) put(r, x + w, "  ", "shade");
    put(y + h, x + 2, " ".repeat(w), "shade");
    box(y + 1, x + 1, w - 2, h - 2, roleBg);
    const tt = ` ${d.title} `;
    put(y + 1, x + Math.floor((w - [...tt].length) / 2), tt, d.error ? roleBg : "dtitle");
    lines.forEach((l, i) => put(y + 2 + i, x + 3, l, roleBg));
    const labels = d.buttons.map((b, i) => (i === 0 ? `[< ${b.label} >]` : `[ ${b.label} ]`));
    const total = labels.reduce((a, l) => a + [...l].length + 1, -1);
    let c = x + Math.max(2, Math.floor((w - total) / 2));
    labels.forEach((l, i) => {
      const c0 = c;
      c = put(y + h - 3, c, l, i === d.focus ? roleFocus : roleBg) + 1;
      hit(y + h - 3, c0, c, () => { dialog = null; (d.buttons[i].act || (() => {}))(); draw(); });
    });
    hit(y, x, x + w, () => {});
  }
  function dialogKey(key) {
    const d = dialog;
    if (key === "ArrowRight" || key === "Tab") d.focus = (d.focus + 1) % d.buttons.length;
    else if (key === "ArrowLeft") d.focus = (d.focus - 1 + d.buttons.length) % d.buttons.length;
    else if (key === "Escape") { dialog = null; const c = d.buttons.find((b) => b.cancel); if (c && c.act) c.act(); }
    else if (key === "Enter") { dialog = null; (d.buttons[d.focus].act || (() => {}))(); }
    draw();
  }
  const errorBox = (text) => ask(m().error, text, [{ label: m().ok, cancel: true }], true);

  /* ---------- Дії над файлами ---------- */
  function open() {
    const p = P();
    if (p.mode !== "list") return;
    const e = curEntry(p);
    if (!e) return;
    if (e.node.type === "dir") {
      const from = p.path;
      p.path = e.abs;
      p.top = 0;
      const list = entries(p.path);
      const back = list.findIndex((x) => x.abs === from);
      p.cur = e.up && back >= 0 ? back : 0;
      syncQuick();
      draw();
      return;
    }
    if (e.node.exe) return openEditor();
    openViewer(e.abs);
  }
  function syncQuick() { panels[1].qtop = 0; }

  function fkey(n) {
    const p = P();
    const e = p.mode === "list" ? curEntry(p) : curEntry(panels[0]);
    const name = e ? e.name : "";
    switch (n) {
      case 1: return ask(m().helpTitle, m().help.join("\n"), [{ label: m().ok, cancel: true }]);
      case 2: return userMenu();
      case 3: if (e && e.node.type !== "dir") openViewer(e.abs); return;
      case 4: if (e && e.node.type !== "dir") { if (e.node.exe) openViewer(e.abs); else openEditor(e.abs); } return;
      case 5: if (!e || e.up) return;
      return ask(m().copyTitle, `${m().copyTo(name)}\n[${m().clipboard}]`, [
        { label: m().ok, act: () => copyText(e.node.type === "dir" ? entries(e.abs).filter((k) => !k.up).map((k) => k.name).join("\n") : e.node.text(), name) },
        { label: m().cancel, cancel: true }
      ]);
      case 6: if (e && !e.up) errorBox(m().ro.move(name)); return;
      case 7: return errorBox(m().ro.mkdir);
      case 8: if (!e || e.up) return;
      return ask(m().delTitle, m().delAsk(name), [{ label: m().yes, act: () => errorBox(m().ro.del(name)) }, { label: m().no, cancel: true }], true);
      case 9: return openMenu(0);
      case 10: return ask("Midnight Commander", m().quitText, [{ label: m().yes, act: quitMc }, { label: m().no, cancel: true }]);
    }
  }

  async function copyText(text, name) {
    try { await navigator.clipboard.writeText(text); hintOverride = m().copied(name); sr(hintOverride); }
    catch { errorBox(m().copyFailed); }
    draw();
  }

  function userMenu() {
    const e = curEntry(panels[0]);
    const svc = e && e.node.svc !== undefined ? e.node.svc : (P().mode === "list" && curEntry(P()) && curEntry(P()).node.svc);
    const um = m().um;
    const items = [
      { label: um[0], act: () => openEditor() },
      ...(svc !== undefined && svc !== null ? [{ label: um[1], act: () => openEditor(null, MD[lang].pages[svc].title) }] : []),
      { label: um[2], act: () => window.open(siteUrl(), "_blank", "noopener") },
      { label: um[3], act: () => copyText(EMAIL, EMAIL) },
      { label: um[4], act: langDialog }
    ];
    menu = null;
    dialog = { title: m().userMenu, text: "", buttons: [], focus: 0, list: items, sel: 0 };
    draw();
  }

  /* Вибір мови — такий самий діалог зі списком, курсор на поточній мові */
  function langDialog() {
    menu = null;
    const list = LANGS.map((l) => ({ label: `${l === lang ? "√" : " "} ${LANG_NAMES[l]}`, act: () => setLang(l) }));
    dialog = { title: m().um[4], text: "", buttons: [], focus: 0, list, sel: Math.max(0, LANGS.indexOf(lang)) };
    draw();
  }

  /* Меню користувача — діалог зі списком */
  function drawListDialog() {
    const d = dialog;
    const w = Math.min(C - 4, Math.max([...d.title].length - 4, ...d.list.map((it) => [...it.label].length)) + 10);
    const h = d.list.length + 4;
    const x = Math.floor((C - w) / 2), y = Math.max(1, Math.floor((R - h) / 2) - 1);
    fill(y, x, w, h, "dialog");
    for (let r = y + 1; r <= y + h; r++) put(r, x + w, "  ", "shade");
    put(y + h, x + 2, " ".repeat(w), "shade");
    box(y + 1, x + 1, w - 2, h - 2, "dialog");
    const tt = ` ${d.title} `;
    put(y + 1, x + Math.floor((w - [...tt].length) / 2), tt, "dtitle");
    d.list.forEach((it, k) => {
      put(y + 2 + k, x + 2, fit(` ${it.label}`, w - 4), k === d.sel ? "dfocus" : "dialog");
      hit(y + 2 + k, x + 2, x + w - 2, () => { dialog = null; it.act(); draw(); });
    });
  }

  /* ---------- mcview ---------- */
  function openViewer(abs) { viewer = { abs, top: 0, wrap: true, hex: false }; mode = "view"; draw(); sr(lookup(abs).text()); }
  function viewerLines() {
    const n = lookup(viewer.abs);
    const text = n.text();
    if (viewer.hex) {
      const b = new TextEncoder().encode(text);
      const per = C >= 78 ? 16 : 8;
      const out = [];
      for (let i = 0; i < b.length; i += per) {
        const chunk = [...b.slice(i, i + per)];
        out.push(i.toString(16).toUpperCase().padStart(8, "0") + "  " + chunk.map((x) => x.toString(16).toUpperCase().padStart(2, "0")).join(" ").padEnd(per * 3) + " " + chunk.map((x) => (x >= 32 && x < 127 ? String.fromCharCode(x) : ".")).join(""));
      }
      return out.map((l) => ({ t: l, role: "view" }));
    }
    const cut = (l) => [...l].slice(0, C).join("");
    if (/\.md$/.test(viewer.abs)) return mdLines(text, viewer.wrap ? C : 0).map((l) => ({ t: cut(l.t), role: l.role === "panel" ? "view" : l.role }));
    return (viewer.wrap ? wrap(text, C) : text.split("\n").map(cut)).map((l) => ({ t: l, role: "view" }));
  }
  function drawViewer() {
    cls("view");
    const lines = viewerLines();
    const rows = R - 2;
    viewer.top = Math.max(0, Math.min(viewer.top, Math.max(0, lines.length - rows)));
    const size = bytes(lookup(viewer.abs).text());
    const pct = lines.length <= rows ? 100 : Math.round(((viewer.top + rows) / lines.length) * 100);
    const right = `${size}/${size}  ${String(pct).padStart(3)}%`;
    fill(0, 0, C, 1, "viewHead");
    put(0, 0, fit(viewer.abs, C - right.length - 2), "viewHead");
    put(0, C - right.length - 1, right, "viewHead");
    lines.slice(viewer.top, viewer.top + rows).forEach((l, i) => { put(1 + i, 0, l.t, l.role); if (!viewer.hex) linkHits(1 + i, 0, l.t); });
    const keys = [...m().viewKeys];
    keys[1] = viewer.wrap ? m().viewKeys[1] : "Unwrap";
    keys[3] = viewer.hex ? "ASCII" : "Hex";
    drawKeybar(keys, (n) => viewKey("F" + n));
    if (dialog) drawDialog();
    flush();
  }
  function viewKey(key) {
    const rows = R - 2;
    if (["Escape", "F3", "F10", "q"].includes(key)) { viewer = null; mode = "panels"; }
    else if (key === "ArrowDown") viewer.top++;
    else if (key === "ArrowUp") viewer.top--;
    else if (key === "PageDown" || key === " ") viewer.top += rows - 1;
    else if (key === "PageUp") viewer.top -= rows - 1;
    else if (key === "Home") viewer.top = 0;
    else if (key === "End") viewer.top = 1e9;
    else if (key === "F2") viewer.wrap = !viewer.wrap;
    else if (key === "F4") { viewer.hex = !viewer.hex; viewer.top = 0; }
    else if (key === "F1") return fkey(1);
    draw();
  }

  /* ---------- mcedit: справжнє текстове поле поверх екрана ---------- */
  const ed = $("ed");
  function openEditor(abs, subject) {
    menu = null;
    if (abs) {
      editor = { name: abs.split("/").pop(), abs, ro: true, dirty: false };
      ed.value = lookup(abs).text();
      ed.readOnly = true;
    } else {
      editor = { name: "request.txt", abs: HOME + "/request.txt", ro: false, dirty: false };
      ed.readOnly = false;
      ed.value = `${subject || m().defaultSubject}\n\n${m().placeholder}\n`;
    }
    mode = "edit";
    ed.hidden = false;
    draw();
    setTimeout(() => {
      ed.focus();
      if (!editor.ro) { const i = ed.value.indexOf(m().placeholder); ed.setSelectionRange(i, i + m().placeholder.length); }
      draw();
    }, 0);
  }
  function drawEditor() {
    cls("edit");
    const [ef, eb] = S("edit");
    Object.assign(ed.style, {
      left: scr.style.left, top: (parseFloat(scr.style.top) + CH) + "px",
      width: C * CW + "px", height: (R - 2) * CH + "px",
      font: `${FS}px/${CH}px "TCon${FS}", monospace`,
      color: `var(--c${ef})`, background: `var(--c${eb})`, caretColor: `var(--c${S("h1")[0]})`
    });
    const v = ed.value;
    const pos = ed.selectionStart || 0;
    const before = v.slice(0, pos);
    const line = before.split("\n").length;
    const col = before.length - before.lastIndexOf("\n") - 1;
    const total = v.split("\n").length;
    const code = v.charCodeAt(pos) || 0;
    const status = `${editor.name}  [${editor.ro ? "R---" : editor.dirty ? "-M--" : "----"}]  ${col} L:[ 1+${line - 1}  ${line}/${total}] *(${pos}/${bytes(v)}b) ${String(code).padStart(4, "0")} 0x${code.toString(16).toUpperCase().padStart(3, "0")}`;
    fill(0, 0, C, 1, "editHead");
    put(0, 0, fit(status, C), "editHead");
    drawKeybar(m().editKeys, (n) => editKey("F" + n));
    if (dialog) { drawDialog(); ed.style.visibility = "hidden"; } else ed.style.visibility = "";
    flush();
  }
  function editKey(key) {
    if (key === "F2") {
      if (editor.ro) return errorBox(m().editRO);
      return ask(m().sendTitle, m().sendAsk, [{ label: m().send, act: sendRequest }, { label: m().cancel, cancel: true, act: () => setTimeout(() => ed.focus(), 0) }]);
    }
    if (key === "F10" || key === "Escape") {
      if (!editor.ro && editor.dirty) {
        return ask(m().sendTitle, m().sendAsk, [
          { label: m().send, act: () => { sendRequest(); closeEditor(); } },
          { label: m().dontSend, act: closeEditor },
          { label: m().cancel, cancel: true, act: () => setTimeout(() => ed.focus(), 0) }
        ]);
      }
      return closeEditor();
    }
    if (key === "F1") return fkey(1);
  }
  function closeEditor() { editor = null; ed.hidden = true; mode = "panels"; draw(); }
  function sendRequest() {
    const [subject, ...rest] = ed.value.split("\n");
    const body = rest.join("\n").trim();
    editor.dirty = false;
    location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`);
  }
  ed.addEventListener("input", () => { if (editor) { editor.dirty = true; drawEditor(); } });
  ["keyup", "click", "select"].forEach((ev) => ed.addEventListener(ev, () => { if (editor) drawEditor(); }));
  ed.addEventListener("keydown", (e) => {
    if (dialog) return;
    if (/^F\d+$/.test(e.key) || e.key === "Escape") { e.preventDefault(); e.stopPropagation(); editKey(e.key); }
  });

  /* ---------- Командна оболонка (Ctrl+O) ---------- */
  function toggleShell() { menu = null; mode = mode === "shell" ? (mcRunning ? "panels" : "shell") : "shell"; draw(); }
  function drawShell() {
    cls("shell");
    const pr = `guest@${HOST}:${short(panels[0].path)}$ `;
    const lines = shellLog.flatMap((l) => wrap(l, C));
    const promptLines = wrap(pr + shellCmd, C);
    const hintLine = mcRunning ? m().shellHint : m().mcHint;
    const all = [...lines, ...promptLines];
    const rows = R - 1;
    const view = all.slice(-rows);
    view.forEach((l, i) => { put(i, 0, l, "shell"); linkHits(i, 0, l); });
    const lastRow = view.length - 1;
    const cc = Math.min(C - 1, [...view[lastRow]].length);
    const [f, b] = S("shell");
    buf[lastRow * C + cc] = { c: " ", f: b, b: f, k: "blink" };
    put(R - 1, 0, fit(hintLine, C), [8, 0]);
    hit(R - 1, 0, C, () => { if (mcRunning) toggleShell(); });
    hit(0, 0, C, () => $("ki").focus());
    flush();
  }

  function runCommand(line) {
    const raw = line.trim();
    const pr = `guest@${HOST}:${short(panels[0].path)}$ `;
    shellLog.push(pr + line);
    if (raw) { history.push(raw); hIx = history.length; }
    if (!raw) return mode === "shell";
    const [c0, ...args] = raw.split(/\s+/);
    const arg = args.join(" ");
    const out = (s) => s.split("\n").forEach((l) => shellLog.push(l));
    const base = panels[0].path;
    switch (c0) {
      case "help": m().shellHelp.forEach(out); return true;
      case "ls": {
        const target = norm(arg || ".", base);
        const n = lookup(target);
        if (!n) { out(`ls: ${arg}: No such file or directory`); return true; }
        if (n.type !== "dir") { out(arg); return true; }
        out(entries(target).filter((e) => !e.up).map((e) => e.name + (e.node.type === "dir" ? "/" : e.node.exe ? "*" : "")).join("  "));
        return true;
      }
      case "cd": {
        const target = norm(arg || "~", base);
        const n = lookup(target);
        if (!n || n.type !== "dir") { out(`bash: cd: ${arg}: No such file or directory`); return true; }
        panels[0].path = target; panels[0].cur = 0; panels[0].top = 0;
        return mode === "shell";
      }
      case "pwd": out(base); return true;
      case "cat": case "less": case "more": {
        if (!arg) { out(`usage: ${c0} file`); return true; }
        const n = lookup(norm(arg, base));
        if (!n) { out(`${c0}: ${arg}: No such file or directory`); return true; }
        if (n.type === "dir") { out(`${c0}: ${arg}: Is a directory`); return true; }
        out(n.text().replace(/\n$/, ""));
        return true;
      }
      case "mcview": case "view": { const a = norm(arg, base); if (lookup(a) && lookup(a).type === "file") { openViewer(a); return false; } out(`mcview: ${arg}: No such file`); return true; }
      case "mcedit": case "edit": { if (!arg || /request/.test(arg)) { openEditor(); return false; } const a = norm(arg, base); if (lookup(a) && lookup(a).type === "file") { openEditor(a); return false; } out(`mcedit: ${arg}: No such file`); return true; }
      case "./request.sh": case "request.sh": case "sh": openEditor(); return false;
      case "mail": out(`${t().contactTitle}\n${t().contactText}\n${t().emailLabel}${colon()} ${EMAIL}`); return true;
      case "mc": mcRunning = true; mode = "panels"; return false;
      case "clear": shellLog.length = 0; return true;
      case "lang": { const l = (args[0] || "").toLowerCase(); if (LANGS.includes(l)) { setLang(l); out("LANG=" + l); } else out("usage: lang " + LANGS.join("|")); return true; }
      case "skin": if (SKINS[args[0]]) { setSkin(args[0]); out("skin=" + args[0]); } else out("usage: skin default|dark|mono"); return true;
      case "exit": case "logout": if (mcRunning) { mode = "panels"; return false; } shellLog.length = 0; boot(); return false;
      case "uname": out(args.includes("-a") ? `Linux ${HOST} 6.1.0-artintellico #1 SMP x86_64 GNU/Linux` : "Linux"); return true;
      case "whoami": out("guest"); return true;
      case "date": out(new Date().toString().replace(/ GMT.*/, "")); return true;
    }
    /* Інші версії сайту: nc, dos, unix, apple, lisa, linux (startx), win31 (win), ai… */
    const vid = { startx: "linux", win: "win31", site: "classic" }[c0] || c0;
    if (vid !== AIC.id && AIC.variants.some((v) => v.id === vid)) {
      setTimeout(() => { location.href = AIC.url(vid, lang); }, 150);
      return true;
    }
    out(m().notFound(c0));
    return true;
  }

  function quitMc() {
    mcRunning = false;
    shellLog.push(`guest@${HOST}:${short(panels[0].path)}$ `);
    mode = "shell";
    draw();
  }

  /* ---------- Клавіатура ---------- */
  let escPending = 0;
  function onKey(e) {
    if (mode === "boot") { skipBoot(); e.preventDefault(); return; }
    if (mode === "edit" && !dialog) return;
    let key = e.key;
    /* Esc + цифра — F-клавіша, як у mc без функціональних клавіш */
    if (escPending && /^[0-9]$/.test(key) && Date.now() - escPending < 1200) { key = "F" + (key === "0" ? 10 : key); escPending = 0; }
    else if (key === "Escape") escPending = Date.now();
    if (e.ctrlKey && (key === "o" || key === "O" || key === "щ" || key === "Щ")) { e.preventDefault(); if (mode !== "view") toggleShell(); return; }
    if (dialog) {
      e.preventDefault();
      if (dialog.list) {
        if (key === "ArrowDown") dialog.sel = (dialog.sel + 1) % dialog.list.length;
        else if (key === "ArrowUp") dialog.sel = (dialog.sel - 1 + dialog.list.length) % dialog.list.length;
        else if (key === "Enter") { const it = dialog.list[dialog.sel]; dialog = null; it.act(); }
        else if (key === "Escape") dialog = null;
        return draw();
      }
      return dialogKey(key);
    }
    if (mode === "view") { e.preventDefault(); return viewKey(key); }
    if (mode === "shell") return shellKey(e, key);
    if (menu) { e.preventDefault(); return menuKey(key); }
    const p = P();
    const fm = /^F(\d+)$/.exec(key);
    if (fm) { e.preventDefault(); return fkey(Number(fm[1])); }
    if (key === "Tab") { e.preventDefault(); if (!single) active = 1 - active; return draw(); }
    if (e.ctrlKey && (key === "q" || key === "й")) { e.preventDefault(); panels[1].mode = panels[1].mode === "quick" ? "list" : "quick"; return draw(); }
    if (e.ctrlKey && (key === "l" || key === "д")) { e.preventDefault(); panels[1].mode = panels[1].mode === "info" ? "list" : "info"; return draw(); }
    const n = p.mode === "list" ? entries(p.path).length : 0;
    const rows = R - 10;
    const move = { ArrowDown: 1, ArrowUp: -1, PageDown: rows, PageUp: -rows };
    if (key in move || key === "Home" || key === "End") {
      e.preventDefault();
      if (p.mode === "list") {
        p.cur = key === "Home" ? 0 : key === "End" ? n - 1 : Math.max(0, Math.min(n - 1, p.cur + move[key]));
        if (active === 0) syncQuick();
      } else if (p.mode === "quick") p.qtop = Math.max(0, (p.qtop || 0) + (key === "Home" ? -1e9 : key === "End" ? 1e9 : move[key]));
      hintOverride = "";
      return draw();
    }
    if (key === "Enter") {
      e.preventDefault();
      if (cmd.trim()) { const c = cmd; cmd = ""; const stay = runCommand(c); mode = stay ? "shell" : mode; return draw(); }
      return open();
    }
    if (key === "Backspace") { e.preventDefault(); cmd = cmd.slice(0, -1); return draw(); }
    if (key === "Escape") { cmd = ""; return draw(); }
    if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); cmd += key; return draw(); }
  }
  function shellKey(e, key) {
    if (key === "Enter") { e.preventDefault(); const c = shellCmd; shellCmd = ""; const stay = runCommand(c); if (stay) mode = "shell"; return draw(); }
    if (key === "Escape") { e.preventDefault(); if (mcRunning) { mode = "panels"; } return draw(); }
    if (key === "Backspace") { e.preventDefault(); shellCmd = shellCmd.slice(0, -1); return draw(); }
    if (key === "ArrowUp" || key === "ArrowDown") {
      e.preventDefault();
      hIx = Math.max(0, Math.min(history.length, hIx + (key === "ArrowUp" ? -1 : 1)));
      shellCmd = history[hIx] || "";
      return draw();
    }
    if (e.ctrlKey && (key === "l" || key === "д")) { e.preventDefault(); shellLog.length = 0; return draw(); }
    if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); shellCmd += key; return draw(); }
  }
  document.addEventListener("keydown", (e) => {
    if (e.target === ed && mode === "edit" && !dialog) return;
    if (e.target === $("ki") && (e.key.length === 1 || e.key === "Unidentified" || e.key === "Process")) return;
    if (e.metaKey) return;
    onKey(e);
  });
  $("ki").addEventListener("input", () => {
    const v = $("ki").value;
    $("ki").value = "";
    for (const ch of v) onKey({ key: ch, preventDefault() {}, ctrlKey: false, metaKey: false, altKey: false });
  });

  /* ---------- Миша ---------- */
  function cellAt(ev) {
    const b = scr.getBoundingClientRect();
    return { r: Math.floor((ev.clientY - b.top) / CH), c: Math.floor((ev.clientX - b.left) / CW) };
  }
  scr.addEventListener("click", (ev) => {
    if (mode === "boot") return skipBoot();
    const { r, c } = cellAt(ev);
    if (mode === "shell") { $("ki").focus(); if (r === R - 1 && mcRunning) toggleShell(); return; }
    if (dialog) {
      const h = hits.slice(modalFrom).reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
      if (h) h.act();
      return;
    }
    if (menu && r > 0) {
      const h = [...hits].reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
      if (!h || h.r === 0) { menu = null; draw(); return; }
    }
    const h = [...hits].reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
    if (!h) { if (menu) { menu = null; draw(); } return; }
    if (ev.detail === 2 && h.dbl) h.dbl();
    else if (ev.detail !== 2) h.act();
  });
  scr.addEventListener("wheel", (ev) => {
    ev.preventDefault();
    const key = ev.deltaY > 0 ? "ArrowDown" : "ArrowUp";
    if (mode === "view") return viewKey(key);
    if (mode === "panels" && !menu && !dialog) {
      const { c } = cellAt(ev);
      const ix = single ? 0 : c < Math.floor(C / 2) ? 0 : 1;
      active = ix;
      onKey({ key, preventDefault() {}, ctrlKey: false, metaKey: false, altKey: false });
    }
  }, { passive: false });
  scr.addEventListener("mousemove", (ev) => {
    const { r, c } = cellAt(ev);
    scr.style.cursor = hits.some((x) => x.r === r && c >= x.c0 && c < x.c1 && r !== 1) ? "pointer" : "default";
  });

  /* ---------- Мова, скін, доступний текст ---------- */
  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    buildSrText();
    if (mode !== "boot") draw();
  }
  function setSkin(k) { skin = k; store.set("aic-mc-skin", k); draw(); }
  function buildSrText() {
    const s = t();
    const c = colon() + " ";
    $("srText").textContent = [s.heroTitle, s.heroText, s.heroLead + c + s.phrases.join(", "), ...MD[lang].pages.map((p) => [p.title + ".", p.intro, p.why.replace(/\n+/g, " "), MD[lang].includes + c + p.includes.join("; ") + ".", MD[lang].result + c + p.result].join(" ")), s.partnersTitle + c + PARTNERS.join(", "), s.contactTitle, s.contactText, s.emailLabel + c + EMAIL].join("\n");
  }
  let lastSr = "";
  function updateSr() {
    const e = curEntry(P().mode === "list" ? P() : panels[0]);
    const s = e ? e.name : "";
    if (s !== lastSr) { lastSr = s; sr(s); }
  }

  /* ---------- Завантаження: консоль Linux → mc ---------- */
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((res) => { if (skipping || reduced) return res(); const id = setTimeout(res, ms); waiters.push(() => { clearTimeout(id); res(); }); });
  function skipBoot() { skipping = true; waiters.splice(0).forEach((f) => f()); }
  async function boot() {
    mode = "boot";
    skipping = false;
    mcRunning = false;
    const lines = [];
    const show = (extra = "") => {
      cls("shell");
      lines.concat(extra ? [extra] : []).flatMap((l) => wrap(l, C)).slice(-(R - 1)).forEach((l, i) => put(i, 0, l, "shell"));
      put(R - 1, 0, fit(m().skip, C), [8, 0]);
      flush();
    };
    const type = async (prefix, text) => {
      let s = prefix;
      for (const ch of text) { s += ch; show(s); await sleep(70 + Math.random() * 50); }
      lines.push(s);
    };
    lines.push("", `ArtIntelliCo GNU/Linux 12 ${HOST} tty1`, "");
    show();
    await sleep(500);
    await type(`${HOST} login: `, "guest");
    lines.push("Password: ");
    show();
    await sleep(600);
    const last = new Date(Date.now() - 86400000).toString().slice(0, 15);
    lines.push(`Last login: ${last} 18:30:12 on tty1`, `Linux ${HOST} 6.1.0-artintellico #1 SMP x86_64`, "", t().heroTitle, "");
    show();
    await sleep(500);
    await type(`guest@${HOST}:~$ `, "mc");
    await sleep(300);
    store.set("aic-mc-booted", "1", sessionStorage);
    lines.forEach((l) => shellLog.push(l));
    mcRunning = true;
    mode = "panels";
    draw();
  }

  /* Підказки mc змінюються з часом */
  setInterval(() => { if (mode === "panels" && !hintOverride) { hintIx = (hintIx + 1) % m().hints.length; draw(); } }, 12000);
  addEventListener("resize", () => { measure(); if (mode !== "boot") draw(); });

  document.documentElement.lang = lang;
  buildSrText();
  measure();
  const readme = entries(SITE_DIR).findIndex((e) => e.name === "README.md");
  panels[0].cur = readme;
  document.fonts.load(`${FS}px "TCon${FS}"`).finally(() => {
    if (reduced || store.get("aic-mc-booted", sessionStorage)) { mcRunning = true; mode = "panels"; shellLog.push(`guest@${HOST}:~$ mc`); draw(); }
    else boot();
  });
})();
