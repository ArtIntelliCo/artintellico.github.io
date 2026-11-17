(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const PROMPT = "C:\\ARTINTEL>";

  /* Тексти взяті з artintellico.com — ті самі, що в index.html */
  const I18N = {
    uk: {
      title: "ArtIntelliCo — розробка та підтримка ІТ рішень для бізнесу",
      menu: ["Послуги", "Партнери", "Контакти", "Мова:", "Монітор:"],
      monitors: { ega: "EGA", green: "Зелений", amber: "Бурштин" },
      cols: ["Ім'я", "Опис"],
      fkeys: ["Довідка", "Мова", "Перегляд", "Лист", "", "", "", "", "Монітор", "Вихід"],
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      heroTitle: "Ми створюємо ІТ рішення, що працюють на ваш бізнес",
      heroText: "Команда ArtIntelliCo допомагає цифровізувати та автоматизувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень.",
      heroLead: "Для вашого бізнесу ми",
      phrases: ["розробляємо SaaS-платформи", "будуємо CRM та ERP системи", "впроваджуємо штучний інтелект", "переносимо інфраструктуру в хмару"],
      readmeDesc: "Про компанію",
      hint: "↑↓ вибрати файл   Enter відкрити   F1 довідка",
      discuss: "Обговорити задачу",
      partnersTitle: "Наші партнери",
      contactTitle: "Розкажіть про вашу задачу",
      contactText: "Якщо у вас є пропозиція щодо співпраці або ви хочете дізнатися більше про наші рішення та досвід — напишіть нам на пошту.",
      emailLabel: "Пошта",
      write: "Написати листа",
      copy: "Копіювати адресу",
      copied: "Адресу скопійовано",
      copyFailed: "Не вдалося скопіювати. Адреса: " + EMAIL,
      cancel: "Скасувати",
      copyright: "© 2026 ArtIntelliCo. Усі права захищено.",
      legal: "ТОВ «АртІнтелліко»",
      slogan: "Ми бачили, як зароджувалося IT. Знаємо, як воно працює сьогодні — і розуміємо, куди рухається завтра.",
      source: "Класична версія сайту",
      bad: "Невірна команда або ім'я файлу. Введіть HELP.",
      back: "Введіть NC або натисніть Esc, щоб повернутися до панелей.",
      help: [
        "Команди:",
        "  DIR             список файлів",
        "  TYPE <файл>     відкрити файл (можна просто ім'я)",
        "  MAIL            написати нам",
        "  LANG [xx]       змінити мову",
        "  COLOR           змінити монітор",
        "  CLS             очистити екран",
        "  VER             версія",
        "  BOOT            перезавантажити",
        "  NC              повернутися до панелей",
        "",
        "Клавіші: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    en: {
      title: "ArtIntelliCo — software development and IT support for business",
      menu: ["Services", "Partners", "Contacts", "Lang:", "Monitor:"],
      monitors: { ega: "EGA", green: "Green", amber: "Amber" },
      cols: ["Name", "Description"],
      fkeys: ["Help", "Lang", "View", "Mail", "", "", "", "", "Monitor", "Quit"],
      skip: "Press any key to skip",
      heroTitle: "We build IT solutions that work for your business",
      heroText: "The ArtIntelliCo team helps you digitalise and automate business processes by designing and delivering modern IT solutions.",
      heroLead: "For your business we",
      phrases: ["build SaaS platforms", "ship CRM and ERP systems", "put AI to work", "move infrastructure to the cloud"],
      readmeDesc: "About the company",
      hint: "↑↓ select file   Enter open   F1 help",
      discuss: "Discuss your project",
      partnersTitle: "Our partners",
      contactTitle: "Tell us about your project",
      contactText: "If you have a partnership proposal or want to know more about our solutions and experience — drop us an email.",
      emailLabel: "Email",
      write: "Write an email",
      copy: "Copy address",
      copied: "Address copied",
      copyFailed: "Couldn't copy. The address is " + EMAIL,
      cancel: "Cancel",
      copyright: "© 2026 ArtIntelliCo. All rights reserved.",
      legal: "ArtIntelliCo LLC",
      slogan: "We saw IT being born. We know how it works today — and we understand where it is heading tomorrow.",
      source: "Classic version of the site",
      bad: "Bad command or file name. Type HELP.",
      back: "Type NC or press Esc to return to the panels.",
      help: [
        "Commands:",
        "  DIR             list files",
        "  TYPE <file>     open a file (or just type its name)",
        "  MAIL            write to us",
        "  LANG [xx]       switch language",
        "  COLOR           switch monitor",
        "  CLS             clear screen",
        "  VER             version",
        "  BOOT            reboot",
        "  NC              back to the panels",
        "",
        "Keys: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    ru: {
      title: "ArtIntelliCo — разработка и поддержка ИТ решений для бизнеса",
      menu: ["Услуги", "Партнёры", "Контакты", "Язык:", "Монитор:"],
      monitors: { ega: "EGA", green: "Зелёный", amber: "Янтарь" },
      cols: ["Имя", "Описание"],
      fkeys: ["Помощь", "Язык", "Просмотр", "Письмо", "", "", "", "", "Монитор", "Выход"],
      skip: "Нажмите любую клавишу, чтобы пропустить",
      heroTitle: "Мы создаём работающие ИТ решения для вашего бизнеса",
      heroText: "Команда ArtIntelliCo помогает цифровизировать и автоматизировать ваши бизнес-процессы путём разработки и внедрения современных ИТ решений.",
      heroLead: "Для вашего бизнеса мы",
      phrases: ["разрабатываем SaaS-платформы", "строим CRM и ERP системы", "внедряем искусственный интеллект", "переносим инфраструктуру в облако"],
      readmeDesc: "О компании",
      hint: "↑↓ выбрать файл   Enter открыть   F1 помощь",
      discuss: "Обсудить задачу",
      partnersTitle: "Наши партнёры",
      contactTitle: "Расскажите о вашей задаче",
      contactText: "Если у вас есть предложение о сотрудничестве или вы хотите узнать больше о наших решениях и опыте — напишите нам на почту.",
      emailLabel: "Почта",
      write: "Написать письмо",
      copy: "Копировать адрес",
      copied: "Адрес скопирован",
      copyFailed: "Не удалось скопировать. Адрес: " + EMAIL,
      cancel: "Отмена",
      copyright: "© 2026 ArtIntelliCo. Все права защищены.",
      legal: "ООО «АртИнтеллико»",
      slogan: "Мы видели, как зарождалось IT. Знаем, как оно работает сегодня — и понимаем, куда движется завтра.",
      source: "Классическая версия сайта",
      bad: "Неверная команда или имя файла. Введите HELP.",
      back: "Введите NC или нажмите Esc, чтобы вернуться к панелям.",
      help: [
        "Команды:",
        "  DIR             список файлов",
        "  TYPE <файл>     открыть файл (можно просто имя)",
        "  MAIL            написать нам",
        "  LANG [xx]       сменить язык",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    de: {
      title: "ArtIntelliCo — Softwareentwicklung und IT-Support für Unternehmen",
      menu: ["Leistungen", "Partner", "Kontakt", "Sprache:", "Monitor:"],
      monitors: { ega: "EGA", green: "Grün", amber: "Bernstein" },
      cols: ["Name", "Beschreibung"],
      fkeys: ["Hilfe", "Sprache", "Ansicht", "Mail", "", "", "", "", "Monitor", "Ende"],
      skip: "Beliebige Taste drücken, um zu überspringen",
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Ihre Geschäftsprozesse zu digitalisieren und zu automatisieren – mit modernen IT-Lösungen, die wir entwickeln und einführen.",
      heroLead: "Was wir für Ihr Unternehmen tun",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme bauen", "künstliche Intelligenz einsetzen", "Infrastruktur in die Cloud verlagern"],
      readmeDesc: "Über das Unternehmen",
      hint: "↑↓ Datei wählen   Enter öffnen   F1 Hilfe",
      discuss: "Projekt besprechen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie einen Vorschlag für eine Zusammenarbeit haben oder mehr über unsere Lösungen und unsere Erfahrung wissen möchten, schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      write: "E-Mail schreiben",
      copy: "Adresse kopieren",
      copied: "Adresse kopiert",
      copyFailed: "Kopieren fehlgeschlagen. Die Adresse lautet " + EMAIL,
      cancel: "Abbrechen",
      copyright: "© 2026 ArtIntelliCo. Alle Rechte vorbehalten.",
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt.",
      source: "Klassische Version der Website",
      bad: "Befehl oder Dateiname nicht gefunden. Geben Sie HELP ein.",
      back: "Geben Sie NC ein oder drücken Sie Esc, um zu den Fenstern zurückzukehren.",
      help: [
        "Befehle:",
        "  DIR             Dateien auflisten",
        "  TYPE <Datei>    Datei öffnen (oder nur den Namen)",
        "  MAIL            an uns schreiben",
        "  LANG [xx]       Sprache wechseln",
        "  COLOR           Monitor wechseln",
        "  CLS             Bildschirm löschen",
        "  VER             Version",
        "  BOOT            neu starten",
        "  NC              zurück zu den Fenstern",
        "",
        "Tasten: ↑↓ Pos1 Ende Enter F1–F10 Esc Strg+O"
      ]
    },
    fr: {
      title: "ArtIntelliCo — développement logiciel et support informatique pour les entreprises",
      menu: ["Services", "Partenaires", "Contacts", "Langue\u00A0:", "Moniteur\u00A0:"],
      monitors: { ega: "EGA", green: "Vert", amber: "Ambre" },
      cols: ["Nom", "Description"],
      fkeys: ["Aide", "Langue", "Voir", "Mail", "", "", "", "", "Moniteur", "Quitter"],
      skip: "Appuyez sur une touche pour passer",
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous\u00A0",
      phrases: ["développons des plateformes SaaS", "livrons des systèmes CRM et ERP", "faisons travailler l'intelligence artificielle", "migrons l'infrastructure vers le cloud"],
      readmeDesc: "À propos de l'entreprise",
      hint: "↑↓ choisir un fichier   Entrée ouvrir   F1 aide",
      discuss: "Parler de votre projet",
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Si vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience, écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      write: "Écrire un e-mail",
      copy: "Copier l'adresse",
      copied: "Adresse copiée",
      copyFailed: "Copie impossible. L'adresse est " + EMAIL,
      cancel: "Annuler",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l'informatique. Nous savons comment elle fonctionne aujourd'hui — et nous comprenons où elle va demain.",
      source: "Version classique du site\u00A0",
      bad: "Commande ou nom de fichier incorrect. Tapez HELP.",
      back: "Tapez NC ou appuyez sur Échap pour revenir aux panneaux.",
      help: [
        "Commandes\u00A0:",
        "  DIR             liste des fichiers",
        "  TYPE <fichier>  ouvrir un fichier (ou tapez son nom)",
        "  MAIL            nous écrire",
        "  LANG [xx]       changer de langue",
        "  COLOR           changer de moniteur",
        "  CLS             effacer l'écran",
        "  VER             version",
        "  BOOT            redémarrer",
        "  NC              retour aux panneaux",
        "",
        "Touches\u00A0: ↑↓ Origine Fin Entrée F1–F10 Échap Ctrl+O"
      ]
    },
    es: {
      title: "ArtIntelliCo — desarrollo de software y soporte de TI para empresas",
      menu: ["Servicios", "Socios", "Contacto", "Idioma:", "Monitor:"],
      monitors: { ega: "EGA", green: "Verde", amber: "Ámbar" },
      cols: ["Nombre", "Descripción"],
      fkeys: ["Ayuda", "Idioma", "Ver", "Correo", "", "", "", "", "Monitor", "Salir"],
      skip: "Pulse cualquier tecla para omitir",
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar los procesos de su negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio",
      phrases: ["desarrollamos plataformas SaaS", "creamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      hint: "↑↓ elegir archivo   Intro abrir   F1 ayuda",
      discuss: "Hablemos de su proyecto",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y experiencia, escríbanos por correo electrónico.",
      emailLabel: "Correo electrónico",
      write: "Escribir un correo",
      copy: "Copiar dirección",
      copied: "Dirección copiada",
      copyFailed: "No se pudo copiar. La dirección es " + EMAIL,
      cancel: "Cancelar",
      copyright: "© 2026 ArtIntelliCo. Todos los derechos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos nacer la informática. Sabemos cómo funciona hoy y entendemos hacia dónde va mañana.",
      source: "Versión clásica del sitio",
      bad: "Comando o nombre de archivo incorrecto. Escriba HELP.",
      back: "Escriba NC o pulse Esc para volver a los paneles.",
      help: [
        "Comandos:",
        "  DIR             lista de archivos",
        "  TYPE <archivo>  abrir un archivo (o escriba su nombre)",
        "  MAIL            escribirnos",
        "  LANG [xx]       cambiar de idioma",
        "  COLOR           cambiar de monitor",
        "  CLS             borrar la pantalla",
        "  VER             versión",
        "  BOOT            reiniciar",
        "  NC              volver a los paneles",
        "",
        "Teclas: ↑↓ Inicio Fin Intro F1–F10 Esc Ctrl+O"
      ]
    },
    pt: {
      title: "ArtIntelliCo — desenvolvimento de software e suporte de TI para empresas",
      menu: ["Serviços", "Parceiros", "Contactos", "Idioma:", "Monitor:"],
      monitors: { ega: "EGA", green: "Verde", amber: "Âmbar" },
      cols: ["Nome", "Descrição"],
      fkeys: ["Ajuda", "Idioma", "Ver", "Correio", "", "", "", "", "Monitor", "Sair"],
      skip: "Prima qualquer tecla para saltar",
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio",
      phrases: ["desenvolvemos plataformas SaaS", "criamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      hint: "↑↓ escolher ficheiro   Enter abrir   F1 ajuda",
      discuss: "Falar do seu projeto",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e experiência, envie-nos um e-mail.",
      emailLabel: "E-mail",
      write: "Escrever um e-mail",
      copy: "Copiar endereço",
      copied: "Endereço copiado",
      copyFailed: "Não foi possível copiar. O endereço é " + EMAIL,
      cancel: "Cancelar",
      copyright: "© 2026 ArtIntelliCo. Todos os direitos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã.",
      source: "Versão clássica do site",
      bad: "Comando ou nome de ficheiro inválido. Escreva HELP.",
      back: "Escreva NC ou prima Esc para voltar aos painéis.",
      help: [
        "Comandos:",
        "  DIR             lista de ficheiros",
        "  TYPE <ficheiro> abrir um ficheiro (ou só o nome)",
        "  MAIL            escrever-nos",
        "  LANG [xx]       mudar de idioma",
        "  COLOR           mudar de monitor",
        "  CLS             limpar o ecrã",
        "  VER             versão",
        "  BOOT            reiniciar",
        "  NC              voltar aos painéis",
        "",
        "Teclas: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    it: {
      title: "ArtIntelliCo — sviluppo software e assistenza IT per le aziende",
      menu: ["Servizi", "Partner", "Contatti", "Lingua:", "Monitor:"],
      monitors: { ega: "EGA", green: "Verde", amber: "Ambra" },
      cols: ["Nome", "Descrizione"],
      fkeys: ["Aiuto", "Lingua", "Vedi", "Posta", "", "", "", "", "Monitor", "Esci"],
      skip: "Premere un tasto qualsiasi per saltare",
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali progettando e introducendo soluzioni IT moderne.",
      heroLead: "Per la Sua azienda",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo al lavoro l'IA", "portiamo l'infrastruttura nel cloud"],
      readmeDesc: "Chi siamo",
      hint: "↑↓ scegli file   Invio apri   F1 aiuto",
      discuss: "Parliamo del Suo progetto",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      write: "Scrivere un'e-mail",
      copy: "Copia indirizzo",
      copied: "Indirizzo copiato",
      copyFailed: "Copia non riuscita. L'indirizzo è " + EMAIL,
      cancel: "Annulla",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l'informatica. Sappiamo come funziona oggi e capiamo dove andrà domani.",
      source: "Versione classica del sito",
      bad: "Comando o nome di file non valido. Digiti HELP.",
      back: "Digiti NC o prema Esc per tornare ai pannelli.",
      help: [
        "Comandi:",
        "  DIR             elenco dei file",
        "  TYPE <file>     apri un file (o digiti solo il nome)",
        "  MAIL            scriverci",
        "  LANG [xx]       cambia lingua",
        "  COLOR           cambia monitor",
        "  CLS             pulisci lo schermo",
        "  VER             versione",
        "  BOOT            riavvia",
        "  NC              torna ai pannelli",
        "",
        "Tasti: ↑↓ Home Fine Invio F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Послуги як документація DOS: TYPE CONCEPT.DOC тощо. see — індекси послуг для «Див. також» */
  const SEE = [[1, 2], [8, 6], [3, 8], [2, 8], [8, 0], [8, 9], [7, 9], [6, 9], [5, 6], [6, 7]];
  const SVC = {
    uk: {
      labels: ["ПРИЗНАЧЕННЯ", "ПРИМІТКИ", "ЩО ВХОДИТЬ", "РЕЗУЛЬТАТ", "Див. також:"],
      items: [
        {
          t: "Розробка концепції ІТ рішення",
          lead: "З'ясовуємо, що насправді має робити система, і записуємо це так, щоб зрозуміли і в бізнесі, і в розробці.",
          notes: [
            "Найдорожча помилка проєкту зазвичай трапляється ще до програмування: систему почали будувати, не домовившись, яку задачу вона розв'язує.",
            "Тож спершу говоримо з тими, хто з нею працюватиме, — з бухгалтерією, складом, менеджерами. Не лише з директором.",
            "Буває й такий висновок: розробляти нічого не треба, краще взяти готовий продукт і доналаштувати. Так і пишемо."
          ],
          inc: ["інтерв'ю з працівниками, розбір того, як працюють зараз", "бізнес-вимоги та сценарії роботи", "готовий продукт чи власна розробка: порівняння", "ТЗ зі строками й бюджетом за етапами"],
          res: "Документ, за яким можна оцінити й почати роботу. Байдуже, хто робитиме, — ми чи інша команда."
        },
        {
          t: "Розробка SaaS рішень",
          lead: "Робимо SaaS-платформи: від першої версії для пілотних клієнтів до сервісу, де кожен клієнт має свій простір, тариф і кабінет.",
          notes: [
            "SaaS заробляє не кодом. Він заробляє тоді, коли клієнт сам реєструється, платить і починає працювати, жодного разу не подзвонивши в підтримку.",
            "Мультитенантність, білінг і права доступу закладаємо одразу. Переробляти їх, коли клієнти вже всередині, виходить у рази дорожче.",
            "Першу версію випускаємо рано. Живі користувачі швидко покажуть, що із задуманого було зайвим."
          ],
          inc: ["мультитенантна архітектура, дані клієнтів ізольовані", "реєстрація, тарифи, підписки, онлайн-оплата", "кабінети, ролі, права доступу", "інтеграції та відкрите API для ваших клієнтів", "масштабування в міру зростання навантаження"],
          res: "Продукт, який продається за підпискою. Не проєкт, який кожному клієнтові впроваджують вручну."
        },
        {
          t: "Web-розробка",
          lead: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. Під задачу, без шаблонів.",
          notes: [
            "Сайт бізнесу міряють заявками й замовленнями. Як він виглядає в портфоліо — питання друге.",
            "До розробки домовляємося, що вважати результатом, і ставимо аналітику до запуску, а не через пів року.",
            "Технологія — за задачею. Лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе."
          ],
          inc: ["прототип і дизайн інтерфейсів", "frontend, backend, адмінпанель", "зв'язка з оплатою, доставкою, CRM, обліком", "SEO-основа, швидкість завантаження, аналітика", "запуск і супровід"],
          res: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        {
          t: "Мобільні застосунки",
          lead: "Застосунки для iOS та Android разом із серверною частиною й панеллю адміністрування.",
          notes: [
            "Застосунок виправданий, якщо до нього повертаються: повторне замовлення, статус доставки, бонуси.",
            "Якщо клієнт заходить раз на рік, вистачить доброго мобільного сайту, і він дешевший. Скажемо це до початку робіт, а не після.",
            "Нативно чи кросплатформно — вирішують бюджет і те, наскільки застосунку потрібні камера, геолокація та офлайн-режим."
          ],
          inc: ["застосунки iOS та Android", "серверна частина та API", "адмінка: контент, замовлення, користувачі", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          res: "Застосунок проходить модерацію магазинів, а ваша команда керує ним без розробника."
        },
        {
          t: "Рішення зі штучним інтелектом",
          lead: "Автоматизуємо ваші бізнес-процеси ШІ-агентами: штучний інтелект і машинне навчання беруть на себе рутинні кроки.",
          notes: [
            "До ШІ ставимося скептично. Половину ідей «а давайте прикрутимо нейромережу» закриває звичайна автоматизація.",
            "Інша річ — коли люди годинами розбирають листи, документи й звернення. Тут мовні моделі справді знімають рутину.",
            "Починаємо з пілота на ваших даних. Цифри точності ви бачите до основної розробки."
          ],
          inc: ["ШІ-агенти, що самі розбирають заявки, заповнюють CRM і готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень, пошук у базі знань", "прогноз попиту, аналіз даних", "пілот з оцінкою якості на ваших даних"],
          res: "Процес, який раніше виконували люди, тепер виконує система. Людина її контролює."
        },
        {
          t: "Розробка CRM та ERP",
          lead: "Спеціалізовані CRM та ERP, побудовані навколо ваших процесів. Не навпаки.",
          notes: [
            "Коробкова CRM працює, доки ваш процес схожий на стандартний.",
            "Коли половина роботи менеджерів живе в таблицях, бо система «так не вміє», власна система обходиться дешевше.",
            "Дані переносимо зі старих систем і таблиць. Запускаємо по відділах, щоб робота не ставала ні на день."
          ],
          inc: ["модулі: продажі, склад, виробництво, фінанси — які потрібні", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "зв'язка з бухгалтерією, телефонією, поштою"],
          res: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, без щотижневих звітів від кожного відділу."
        },
        {
          t: "Хмарні рішення",
          lead: "Переносимо інфраструктуру в Amazon Web Services, повністю або частинами. Стежимо, щоб працювала й не дорожчала просто так.",
          notes: [
            "Хмара не завжди дешевша за власний сервер.",
            "Вона окупається, коли навантаження стрибає, потрібна відмовостійкість або нове середовище треба підняти за хвилини, а не за тиждень.",
            "Тому спершу аудит і розрахунок вартості. Переїзд — крок за кроком, і на кожному кроці є план відкату."
          ],
          inc: ["аудит інфраструктури, розрахунок вартості", "архітектура в AWS, план міграції", "перенесення серверів, баз даних, файлів", "резервне копіювання, моніторинг", "оптимізація витрат після переїзду"],
          res: "Інфраструктура переживає відмову сервера. Рахунок за хмару зрозумілий."
        },
        {
          t: "Інфраструктура компанії на базі Red Hat",
          lead: "Будуємо серверну інфраструктуру компанії на Red Hat: Red Hat Enterprise Linux на серверах, OpenShift для контейнерів, Ansible для автоматизації.",
          notes: [
            "Red Hat беруть, коли інфраструктура має працювати роками й проходити аудит, а не триматися на пам'яті одного адміністратора.",
            "За підписку ви отримуєте підтримку виробника й довгий життєвий цикл: Red Hat Enterprise Linux підтримується десять років.",
            "Конфігурацію серверів описуємо в Ansible. Будь-який сервер перезбирається за сценарієм, а не з пам'яті.",
            "Red Hat — наш партнер. Із підписками й підтримкою виробника теж допоможемо."
          ],
          inc: ["аудит поточних серверів, план переходу", "Red Hat Enterprise Linux, централізовані оновлення через Red Hat Satellite", "OpenShift — контейнерна платформа для ваших застосунків", "автоматизація налаштування й розгортання на Ansible", "облікові записи й доступ в одному місці (Identity Management)", "моніторинг, резервні копії, документація для вашої команди"],
          res: "Інфраструктуру можна перевірити, повторити й передати іншій команді. Знання не губляться."
        },
        {
          t: "API та інтеграції",
          lead: "Робимо API для ваших систем і зв'язуємо їх із сервісами, якими ви вже користуєтеся.",
          notes: [
            "Найчастіше бачимо одне й те саме: дані вводять двічі. Замовлення із сайту вручну передруковують в облікову систему, оплати звіряють у таблиці.",
            "Інтеграція прибирає цю роботу разом із помилками, які вона плодить.",
            "Моніторинг ставимо обов'язково. Інтеграції ламаються тихо: партнер змінив свій API — і все. Краще дізнатися про це від системи, ніж від клієнта."
          ],
          inc: ["проєктування й документація API", "платіжні системи, доставка, CRM, облік", "обмін даними між внутрішніми системами", "черги та повтори при збоях", "моніторинг і сповіщення"],
          res: "Дані вводять один раз. Далі вони самі доходять, куди треба."
        },
        {
          t: "Технічна підтримка",
          lead: "Підтримуємо й розвиваємо ваші ІТ-системи. Зокрема ті, що писали не ми.",
          notes: [
            "Підтримка — не лише виправлення помилок. Це оновлення, що закривають уразливості, моніторинг, який помічає збій раніше за користувачів, і невеликі доопрацювання по ходу.",
            "Система дісталася від іншого підрядника? Спершу аудит і документація. Без них будь-яка правка — лотерея."
          ],
          inc: ["моніторинг доступності та помилок", "виправлення та оновлення безпеки", "резервні копії й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація чужих систем"],
          res: "Система працює, а команда знає, як вона влаштована."
        }
      ]
    },
    en: {
      labels: ["PURPOSE", "NOTES", "WHAT'S INCLUDED", "RESULT", "See also:"],
      items: [
        {
          t: "IT solution concept",
          lead: "We find out what the system really has to do and write it down so that both the business side and the developers can read it.",
          notes: [
            "The costliest mistake in a project usually happens before any programming: the build starts before anyone agreed on the problem it solves.",
            "So first we talk to the people who will use it — accounting, the warehouse, sales managers. Not just the director.",
            "Sometimes the conclusion is: don't build anything, take an existing product and configure it. We write that down too."
          ],
          inc: ["staff interviews, a look at how work gets done today", "business requirements and user scenarios", "off-the-shelf product vs. custom build: a comparison", "a specification with time and budget per phase"],
          res: "A document you can estimate and start work from, whoever does the work — us or another team."
        },
        {
          t: "SaaS development",
          lead: "We build SaaS platforms, from a first version for pilot customers to a service where each customer has their own workspace, plan and dashboard.",
          notes: [
            "A SaaS product doesn't earn from its code. It earns when a customer signs up, pays and starts working without ever calling support.",
            "Multi-tenancy, billing and permissions go in from the start. Reworking them once customers are inside costs several times more.",
            "We ship the first version early. Real users quickly show which of the planned features weren't needed."
          ],
          inc: ["multi-tenant architecture, isolated customer data", "sign-up, plans, subscriptions, online payments", "dashboards, roles, permissions", "integrations and a public API for your customers", "scaling as load grows"],
          res: "A product that sells by subscription. Not a project that has to be installed by hand for every customer."
        },
        {
          t: "Web development",
          lead: "Corporate sites, marketplaces, online stores, booking systems, internal web tools. Built for the task, not from a template.",
          notes: [
            "A business site is measured in leads and orders. How it looks in a portfolio comes second.",
            "Before development we agree what counts as a result, and analytics goes live with the launch, not six months later.",
            "The technology follows the task. A landing page has no use for a heavy platform; a marketplace won't fit in a site builder."
          ],
          inc: ["prototype and interface design", "frontend, backend, admin panel", "hook-up to payments, delivery, CRM, accounting", "SEO groundwork, page speed, analytics", "launch and ongoing support"],
          res: "A web service that shows how many leads and how much money it brings in."
        },
        {
          t: "Mobile apps",
          lead: "iOS and Android apps, plus the server side and admin panel behind them.",
          notes: [
            "An app is worth it when people come back to it: reordering, checking a delivery, collecting points.",
            "If a customer visits once a year, a good mobile site will do, and it costs less. We'll say so before the work starts, not after.",
            "Native or cross-platform is down to budget and how much the app needs the camera, location and offline mode."
          ],
          inc: ["iOS and Android apps", "server side and API", "admin: content, orders, users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          res: "The app passes store review, and your team runs it without a developer."
        },
        {
          t: "AI-powered solutions",
          lead: "We automate your business processes with AI agents: artificial intelligence and machine learning take over the routine steps.",
          notes: [
            "We're sceptical about AI. Half of the \"let's bolt on a neural network\" ideas are covered by plain automation.",
            "It's different when people spend hours sorting emails, documents and requests. There, language models really do take the routine away.",
            "We start with a pilot on your data. You see the accuracy figures before the main build."
          ],
          inc: ["AI agents that triage requests, fill in the CRM and draft customer replies on their own", "chatbots and assistants for customers and staff", "document recognition and parsing", "request classification, knowledge-base search", "demand forecasts, data analysis", "a pilot with quality measured on your data"],
          res: "A process people used to do is now done by the system, with a person in control."
        },
        {
          t: "CRM and ERP development",
          lead: "Custom CRM and ERP built around your processes. Not the other way round.",
          notes: [
            "Boxed CRM works as long as your process looks standard.",
            "Once half of the sales team's work lives in spreadsheets because the system \"can't do that\", your own system is the cheaper option.",
            "We move the data over from old systems and spreadsheets. Rollout goes department by department, so work doesn't stop for a single day."
          ],
          inc: ["modules: sales, warehouse, production, finance — whichever you need", "roles, permissions, audit log", "reports and dashboards for management", "data migration from spreadsheets and old systems", "hook-up to accounting, telephony, email"],
          res: "One system instead of a zoo of spreadsheets. Management sees how things stand without weekly reports from every department."
        },
        {
          t: "Cloud solutions",
          lead: "We move infrastructure to Amazon Web Services, all of it or in parts, and make sure it runs and doesn't get pricier for no reason.",
          notes: [
            "The cloud isn't always cheaper than your own server.",
            "It pays off when load jumps around, when you need fault tolerance, or when a new environment has to come up in minutes rather than a week.",
            "So first an audit and a cost estimate. The move goes step by step, with a rollback plan at every step."
          ],
          inc: ["infrastructure audit, cost estimate", "AWS architecture, migration plan", "moving servers, databases, files", "backups, monitoring", "cost optimisation after the move"],
          res: "Infrastructure that survives a server failure. A cloud bill that makes sense."
        },
        {
          t: "Company infrastructure on Red Hat",
          lead: "We build company server infrastructure on Red Hat: Red Hat Enterprise Linux on the servers, OpenShift for containers, Ansible for automation.",
          notes: [
            "Red Hat is the pick when infrastructure has to run for years and pass audits, rather than live in one administrator's head.",
            "The subscription buys vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years.",
            "Server configuration is written down in Ansible. Any server can be rebuilt from a playbook, not from memory.",
            "Red Hat is our partner, so we can help with subscriptions and vendor support too."
          ],
          inc: ["audit of current servers, migration plan", "Red Hat Enterprise Linux, centralised updates via Red Hat Satellite", "OpenShift as the container platform for your applications", "configuration and deployment automation in Ansible", "accounts and access in one place (Identity Management)", "monitoring, backups, documentation for your team"],
          res: "Infrastructure that can be checked, reproduced and handed to another team. Nothing gets lost on the way."
        },
        {
          t: "APIs and integrations",
          lead: "We build APIs for your systems and connect them to the services you already use.",
          notes: [
            "The thing we see most: data typed in twice. Website orders retyped into accounting by hand, payments checked against a spreadsheet.",
            "An integration removes that work along with the mistakes it breeds.",
            "Monitoring is not optional. Integrations break quietly — a partner changes their API and that's it. Better to hear it from the system than from a customer."
          ],
          inc: ["API design and documentation", "payments, delivery, CRM, accounting", "data exchange between internal systems", "queues and retries on failure", "monitoring and alerts"],
          res: "Data is entered once. After that it gets where it's needed on its own."
        },
        {
          t: "Technical support",
          lead: "We support and develop your IT systems, including ones we didn't write.",
          notes: [
            "Support isn't just bug fixing. It's updates that close vulnerabilities, monitoring that catches a failure before users do, and small improvements along the way.",
            "Inherited the system from another contractor? Audit and documentation come first. Without them any change is a lottery."
          ],
          inc: ["availability and error monitoring", "fixes and security updates", "backups and restore checks", "planned improvements and new features", "audit and docs for systems built by others"],
          res: "The system works, and the team knows how it's built."
        }
      ]
    },
    ru: {
      labels: ["НАЗНАЧЕНИЕ", "ПРИМЕЧАНИЯ", "ЧТО ВХОДИТ", "РЕЗУЛЬТАТ", "См. также:"],
      items: [
        {
          t: "Разработка концепции ИТ решения",
          lead: "Выясняем, что на самом деле должна делать система, и записываем это так, чтобы поняли и в бизнесе, и в разработке.",
          notes: [
            "Самая дорогая ошибка проекта обычно случается ещё до программирования: систему начали строить, не договорившись, какую задачу она решает.",
            "Поэтому сначала говорим с теми, кто будет с ней работать, — с бухгалтерией, складом, менеджерами. Не только с директором.",
            "Бывает и такой вывод: разрабатывать ничего не нужно, лучше взять готовый продукт и донастроить. Так и пишем."
          ],
          inc: ["интервью с сотрудниками, разбор того, как работают сейчас", "бизнес-требования и сценарии работы", "готовый продукт или своя разработка: сравнение", "ТЗ со сроками и бюджетом по этапам"],
          res: "Документ, по которому можно оценить и начать работу. Неважно, кто будет делать, — мы или другая команда."
        },
        {
          t: "Разработка SaaS решений",
          lead: "Делаем SaaS-платформы: от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и кабинет.",
          notes: [
            "SaaS зарабатывает не кодом. Он зарабатывает, когда клиент сам регистрируется, платит и начинает работать, ни разу не позвонив в поддержку.",
            "Мультитенантность, биллинг и права доступа закладываем сразу. Переделывать их, когда клиенты уже внутри, выходит в разы дороже.",
            "Первую версию выпускаем рано. Живые пользователи быстро покажут, что из задуманного было лишним."
          ],
          inc: ["мультитенантная архитектура, данные клиентов изолированы", "регистрация, тарифы, подписки, онлайн-оплата", "кабинеты, роли, права доступа", "интеграции и открытое API для ваших клиентов", "масштабирование по мере роста нагрузки"],
          res: "Продукт, который продаётся по подписке. Не проект, который каждому клиенту внедряют вручную."
        },
        {
          t: "Web-разработка",
          lead: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. Под задачу, без шаблонов.",
          notes: [
            "Сайт бизнеса меряют заявками и заказами. Как он смотрится в портфолио — вопрос второй.",
            "До разработки договариваемся, что считать результатом, и ставим аналитику к запуску, а не через полгода.",
            "Технология — по задаче. Лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет."
          ],
          inc: ["прототип и дизайн интерфейсов", "frontend, backend, админ-панель", "связка с оплатой, доставкой, CRM, учётом", "SEO-основа, скорость загрузки, аналитика", "запуск и сопровождение"],
          res: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        {
          t: "Мобильные приложения",
          lead: "Приложения для iOS и Android вместе с серверной частью и панелью администрирования.",
          notes: [
            "Приложение оправдано, если к нему возвращаются: повторный заказ, статус доставки, бонусы.",
            "Если клиент заходит раз в год, хватит хорошего мобильного сайта, и он дешевле. Скажем это до начала работ, а не после.",
            "Нативно или кроссплатформенно — решают бюджет и то, насколько приложению нужны камера, геолокация и офлайн-режим."
          ],
          inc: ["приложения iOS и Android", "серверная часть и API", "админка: контент, заказы, пользователи", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          res: "Приложение проходит модерацию магазинов, а ваша команда управляет им без разработчика."
        },
        {
          t: "Решения с искусственным интеллектом",
          lead: "Автоматизируем ваши бизнес-процессы ИИ-агентами: искусственный интеллект и машинное обучение берут на себя рутинные шаги.",
          notes: [
            "К ИИ относимся скептически. Половину идей «а давайте прикрутим нейросеть» закрывает обычная автоматизация.",
            "Другое дело — когда люди часами разбирают письма, документы и обращения. Здесь языковые модели действительно снимают рутину.",
            "Начинаем с пилота на ваших данных. Цифры точности вы видите до основной разработки."
          ],
          inc: ["ИИ-агенты, которые сами разбирают заявки, заполняют CRM и готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогноз спроса, анализ данных", "пилот с оценкой качества на ваших данных"],
          res: "Процесс, который раньше делали люди, теперь делает система. Человек её контролирует."
        },
        {
          t: "Разработка CRM и ERP",
          lead: "Специализированные CRM и ERP, построенные вокруг ваших процессов. Не наоборот.",
          notes: [
            "Коробочная CRM работает, пока ваш процесс похож на стандартный.",
            "Когда половина работы менеджеров живёт в таблицах, потому что система «так не умеет», своя система обходится дешевле.",
            "Данные переносим из старых систем и таблиц. Запускаем по отделам, чтобы работа не вставала ни на день."
          ],
          inc: ["модули: продажи, склад, производство, финансы — какие нужны", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "связка с бухгалтерией, телефонией, почтой"],
          res: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, без еженедельных отчётов от каждого отдела."
        },
        {
          t: "Облачные решения",
          lead: "Переносим инфраструктуру в Amazon Web Services, целиком или частями. Следим, чтобы работала и не дорожала просто так.",
          notes: [
            "Облако не всегда дешевле своего сервера.",
            "Оно окупается, когда нагрузка скачет, нужна отказоустойчивость или новое окружение надо поднять за минуты, а не за неделю.",
            "Поэтому сначала аудит и расчёт стоимости. Переезд — по шагам, и на каждом шаге есть план отката."
          ],
          inc: ["аудит инфраструктуры, расчёт стоимости", "архитектура в AWS, план миграции", "перенос серверов, баз данных, файлов", "резервное копирование, мониторинг", "оптимизация расходов после переезда"],
          res: "Инфраструктура переживает отказ сервера. Счёт за облако понятен."
        },
        {
          t: "Инфраструктура компании на базе Red Hat",
          lead: "Строим серверную инфраструктуру компании на Red Hat: Red Hat Enterprise Linux на серверах, OpenShift для контейнеров, Ansible для автоматизации.",
          notes: [
            "Red Hat берут, когда инфраструктура должна работать годами и проходить аудит, а не держаться на памяти одного администратора.",
            "За подписку вы получаете поддержку производителя и длинный жизненный цикл: Red Hat Enterprise Linux поддерживается десять лет.",
            "Конфигурацию серверов описываем в Ansible. Любой сервер пересобирается по сценарию, а не по памяти.",
            "Red Hat — наш партнёр. С подписками и поддержкой производителя тоже поможем."
          ],
          inc: ["аудит текущих серверов, план перехода", "Red Hat Enterprise Linux, централизованные обновления через Red Hat Satellite", "OpenShift — контейнерная платформа для ваших приложений", "автоматизация настройки и развёртывания на Ansible", "учётные записи и доступ в одном месте (Identity Management)", "мониторинг, резервные копии, документация для вашей команды"],
          res: "Инфраструктуру можно проверить, повторить и передать другой команде. Знания не теряются."
        },
        {
          t: "API и интеграции",
          lead: "Делаем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          notes: [
            "Чаще всего мы видим одно и то же: данные вводят дважды. Заказ с сайта руками перебивают в учётную систему, оплаты сверяют в таблице.",
            "Интеграция убирает эту работу вместе с ошибками, которые она плодит.",
            "Мониторинг ставим обязательно. Интеграции ломаются тихо: партнёр поменял свой API — и всё. Лучше узнать об этом от системы, чем от клиента."
          ],
          inc: ["проектирование и документация API", "платёжные системы, доставка, CRM, учёт", "обмен данными между внутренними системами", "очереди и повтор при сбоях", "мониторинг и оповещения"],
          res: "Данные вводят один раз. Дальше они сами доходят, куда нужно."
        },
        {
          t: "Техническая поддержка",
          lead: "Поддерживаем и развиваем ваши ИТ-системы. В том числе написанные не нами.",
          notes: [
            "Поддержка — не только исправление ошибок. Это обновления, закрывающие уязвимости, мониторинг, который замечает сбой раньше пользователей, и небольшие доработки по ходу.",
            "Система досталась от другого подрядчика? Сначала аудит и документация. Без них любая правка — лотерея."
          ],
          inc: ["мониторинг доступности и ошибок", "исправления и обновления безопасности", "резервные копии и проверка восстановления", "доработки и новые функции по плану", "аудит и документация чужих систем"],
          res: "Система работает, а команда знает, как она устроена."
        }
      ]
    },
    de: {
      labels: ["ZWECK", "ANMERKUNGEN", "LEISTUNGSUMFANG", "ERGEBNIS", "Siehe auch:"],
      items: [
        {
          t: "Konzeption von IT-Lösungen",
          lead: "Wir klären, was das System wirklich leisten muss, und schreiben es so auf, dass es die Fachabteilung ebenso versteht wie die Entwicklung.",
          notes: [
            "Der teuerste Fehler eines Projekts passiert meist vor der ersten Zeile Code: Man fängt an zu bauen, ohne sich geeinigt zu haben, welches Problem das System lösen soll.",
            "Deshalb sprechen wir zuerst mit denen, die damit arbeiten werden – Buchhaltung, Lager, Vertrieb. Nicht nur mit der Geschäftsführung.",
            "Manchmal lautet das Fazit: nichts entwickeln, sondern ein fertiges Produkt nehmen und anpassen. Dann schreiben wir genau das auf."
          ],
          inc: ["Interviews mit Mitarbeitenden, Analyse der heutigen Abläufe", "fachliche Anforderungen und Nutzungsszenarien", "Standardprodukt oder Eigenentwicklung: ein Vergleich", "Pflichtenheft mit Zeit- und Budgetplan je Phase"],
          res: "Ein Dokument, mit dem sich der Aufwand schätzen und die Arbeit beginnen lässt – egal, wer sie macht: wir oder ein anderes Team."
        },
        {
          t: "SaaS-Entwicklung",
          lead: "Wir bauen SaaS-Plattformen: von der ersten Version für Pilotkunden bis zum Service, in dem jeder Kunde seinen eigenen Arbeitsbereich, Tarif und Kundenbereich hat.",
          notes: [
            "Ein SaaS-Produkt verdient nicht mit seinem Code. Es verdient, wenn sich ein Kunde selbst registriert, bezahlt und loslegt, ohne je beim Support anzurufen.",
            "Mandantenfähigkeit, Abrechnung und Berechtigungen planen wir von Anfang an ein. Sie umzubauen, wenn die Kunden schon im System sind, kostet ein Vielfaches.",
            "Die erste Version bringen wir früh heraus. Echte Nutzer zeigen schnell, welche der geplanten Funktionen überflüssig waren."
          ],
          inc: ["mandantenfähige Architektur, getrennte Kundendaten", "Registrierung, Tarife, Abonnements, Online-Zahlung", "Kundenbereiche, Rollen, Berechtigungen", "Integrationen und eine offene API für Ihre Kunden", "Skalierung mit wachsender Last"],
          res: "Ein Produkt, das sich im Abonnement verkauft. Kein Projekt, das bei jedem Kunden von Hand eingeführt werden muss."
        },
        {
          t: "Webentwicklung",
          lead: "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme, interne Webanwendungen. Für die Aufgabe gebaut, nicht nach Vorlage.",
          notes: [
            "Eine Unternehmenswebsite misst man an Anfragen und Bestellungen. Wie sie im Portfolio aussieht, ist zweitrangig.",
            "Vor der Entwicklung vereinbaren wir, was als Ergebnis zählt, und die Webanalyse läuft ab dem Start – nicht erst ein halbes Jahr später.",
            "Die Technik folgt der Aufgabe. Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Website-Baukasten."
          ],
          inc: ["Prototyp und Oberflächendesign", "Frontend, Backend, Admin-Bereich", "Anbindung an Zahlung, Versand, CRM, Buchhaltung", "SEO-Grundlagen, Ladezeit, Webanalyse", "Start und laufende Betreuung"],
          res: "Ein Webdienst, an dem man ablesen kann, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        {
          t: "Mobile Apps",
          lead: "Apps für iOS und Android, samt Serverteil und Admin-Bereich dahinter.",
          notes: [
            "Eine App lohnt sich, wenn Menschen zu ihr zurückkehren: Nachbestellung, Lieferstatus, Bonuspunkte.",
            "Kommt ein Kunde einmal im Jahr vorbei, reicht eine gute mobile Website, und die ist günstiger. Das sagen wir vor Beginn der Arbeiten, nicht danach.",
            "Nativ oder plattformübergreifend – das entscheiden das Budget und wie sehr die App Kamera, Standort und Offline-Modus braucht."
          ],
          inc: ["Apps für iOS und Android", "Serverteil und API", "Admin-Bereich: Inhalte, Bestellungen, Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          res: "Die App besteht die Prüfung der Stores, und Ihr Team betreibt sie ohne Entwickler."
        },
        {
          t: "KI-Lösungen",
          lead: "Wir automatisieren Ihre Geschäftsprozesse mit KI-Agenten: Künstliche Intelligenz und maschinelles Lernen übernehmen die Routineschritte.",
          notes: [
            "Wir sehen KI skeptisch. Die Hälfte der Ideen à la „Bauen wir doch ein neuronales Netz ein“ erledigt schon eine gewöhnliche Automatisierung.",
            "Anders ist es, wenn Menschen stundenlang E-Mails, Dokumente und Anfragen sortieren. Dort nehmen Sprachmodelle tatsächlich Routine ab.",
            "Wir beginnen mit einem Pilotprojekt auf Ihren Daten. Die Genauigkeitswerte sehen Sie vor der eigentlichen Entwicklung."
          ],
          inc: ["KI-Agenten, die selbstständig Anfragen sortieren, das CRM befüllen und Antworten an Kunden vorbereiten", "Chatbots und Assistenten für Kunden und Mitarbeitende", "Erkennung und Auswertung von Dokumenten", "Klassifizierung von Anfragen, Suche in der Wissensdatenbank", "Bedarfsprognosen, Datenanalyse", "Pilotprojekt mit Qualitätsmessung auf Ihren Daten"],
          res: "Einen Prozess, den früher Menschen erledigt haben, erledigt jetzt das System. Ein Mensch behält die Kontrolle."
        },
        {
          t: "CRM- und ERP-Entwicklung",
          lead: "Individuelle CRM- und ERP-Systeme, gebaut um Ihre Prozesse herum. Nicht umgekehrt.",
          notes: [
            "Ein CRM von der Stange funktioniert, solange Ihr Prozess dem Standard ähnelt.",
            "Wenn die Hälfte der Vertriebsarbeit in Tabellen stattfindet, weil das System „das nicht kann“, ist ein eigenes System die günstigere Wahl.",
            "Die Daten übernehmen wir aus Altsystemen und Tabellen. Eingeführt wird Abteilung für Abteilung, damit die Arbeit keinen einzigen Tag stillsteht."
          ],
          inc: ["Module: Vertrieb, Lager, Produktion, Finanzen – je nach Bedarf", "Rollen, Berechtigungen, Aktionsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie, E-Mail"],
          res: "Ein System statt eines Tabellenzoos. Die Geschäftsführung sieht, wie es läuft, ohne wöchentliche Berichte aus jeder Abteilung."
        },
        {
          t: "Cloud-Lösungen",
          lead: "Wir verlagern Ihre Infrastruktur zu Amazon Web Services, ganz oder in Teilen, und sorgen dafür, dass sie läuft und nicht grundlos teurer wird.",
          notes: [
            "Die Cloud ist nicht immer günstiger als der eigene Server.",
            "Sie rechnet sich, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn eine neue Umgebung in Minuten statt in einer Woche bereitstehen muss.",
            "Deshalb zuerst ein Audit und eine Kostenschätzung. Der Umzug erfolgt Schritt für Schritt, mit einem Rückfallplan für jeden Schritt."
          ],
          inc: ["Infrastruktur-Audit, Kostenschätzung", "AWS-Architektur, Migrationsplan", "Umzug von Servern, Datenbanken, Dateien", "Datensicherung, Monitoring", "Kostenoptimierung nach dem Umzug"],
          res: "Eine Infrastruktur, die den Ausfall eines Servers übersteht. Eine Cloud-Rechnung, die man versteht."
        },
        {
          t: "Unternehmensinfrastruktur auf Red Hat",
          lead: "Wir bauen die Serverinfrastruktur Ihres Unternehmens auf Red Hat: Red Hat Enterprise Linux auf den Servern, OpenShift für Container, Ansible für die Automatisierung.",
          notes: [
            "Red Hat ist die Wahl, wenn die Infrastruktur jahrelang laufen und Audits bestehen muss, statt nur im Kopf eines einzelnen Administrators zu existieren.",
            "Mit dem Abonnement erhalten Sie Herstellersupport und einen langen Lebenszyklus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt.",
            "Die Serverkonfiguration beschreiben wir in Ansible. Jeder Server lässt sich nach Playbook neu aufsetzen, nicht aus dem Gedächtnis.",
            "Red Hat ist unser Partner. Auch bei Abonnements und Herstellersupport helfen wir Ihnen."
          ],
          inc: ["Audit der vorhandenen Server, Migrationsplan", "Red Hat Enterprise Linux, zentrale Updates über Red Hat Satellite", "OpenShift als Container-Plattform für Ihre Anwendungen", "Automatisierung von Konfiguration und Deployment mit Ansible", "Konten und Zugriffe an einer Stelle (Identity Management)", "Monitoring, Datensicherung, Dokumentation für Ihr Team"],
          res: "Eine Infrastruktur, die sich prüfen, nachbauen und an ein anderes Team übergeben lässt. Kein Wissen geht verloren."
        },
        {
          t: "APIs und Integrationen",
          lead: "Wir entwickeln APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
          notes: [
            "Was wir am häufigsten sehen: Daten werden doppelt erfasst. Bestellungen von der Website werden von Hand in die Buchhaltung abgetippt, Zahlungen in einer Tabelle abgeglichen.",
            "Eine Integration nimmt diese Arbeit ab – und mit ihr die Fehler, die dabei entstehen.",
            "Monitoring ist Pflicht. Integrationen brechen leise: Ein Partner ändert seine API, und das war's. Besser, das System meldet es, als ein Kunde."
          ],
          inc: ["API-Design und Dokumentation", "Zahlungsanbieter, Versand, CRM, Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholungen bei Fehlern", "Monitoring und Benachrichtigungen"],
          res: "Daten werden einmal erfasst. Danach kommen sie von selbst dort an, wo sie gebraucht werden."
        },
        {
          t: "Technischer Support",
          lead: "Wir betreuen Ihre IT-Systeme und entwickeln sie weiter, auch solche, die nicht von uns stammen.",
          notes: [
            "Support heißt nicht nur Fehler beheben. Dazu gehören Updates, die Sicherheitslücken schließen, Monitoring, das einen Ausfall vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei.",
            "Sie haben das System von einem anderen Dienstleister übernommen? Dann zuerst Audit und Dokumentation. Ohne sie ist jede Änderung ein Glücksspiel."
          ],
          inc: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebungen und Sicherheitsupdates", "Datensicherungen und Wiederherstellungstests", "geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation fremder Systeme"],
          res: "Das System läuft, und das Team weiß, wie es aufgebaut ist."
        }
      ]
    },
    fr: {
      labels: ["OBJET", "REMARQUES", "CE QUI EST INCLUS", "RÉSULTAT", "Voir aussi\u00A0:"],
      items: [
        {
          t: "Conception de solutions informatiques",
          lead: "Nous établissons ce que le système doit réellement faire et le mettons par écrit, de sorte que les métiers comme les développeurs puissent le lire.",
          notes: [
            "L'erreur la plus coûteuse d'un projet survient en général avant toute programmation\u00A0: on commence à construire sans s'être mis d'accord sur le problème à résoudre.",
            "Nous parlons donc d'abord à ceux qui vont l'utiliser — la comptabilité, l'entrepôt, les commerciaux. Pas seulement à la direction.",
            "Parfois, la conclusion est\u00A0: ne rien développer, prendre un produit existant et le paramétrer. Nous l'écrivons aussi."
          ],
          inc: ["entretiens avec le personnel, analyse du fonctionnement actuel", "exigences métier et scénarios d'utilisation", "produit du marché ou développement sur mesure\u00A0: comparatif", "cahier des charges avec délais et budget par phase"],
          res: "Un document qui permet de chiffrer et de lancer le travail, quel que soit celui qui le fera — nous ou une autre équipe."
        },
        {
          t: "Développement SaaS",
          lead: "Nous créons des plateformes SaaS, de la première version pour des clients pilotes jusqu'au service où chaque client a son espace, sa formule et son tableau de bord.",
          notes: [
            "Un produit SaaS ne rapporte pas grâce à son code. Il rapporte quand un client s'inscrit, paie et commence à travailler sans jamais appeler le support.",
            "Multi-tenant, facturation et droits d'accès sont prévus dès le départ. Les refaire une fois les clients installés coûte plusieurs fois plus cher.",
            "Nous sortons la première version tôt. De vrais utilisateurs montrent vite quelles fonctions prévues étaient superflues."
          ],
          inc: ["architecture multi-tenant, données clients isolées", "inscription, formules, abonnements, paiement en ligne", "espaces clients, rôles, droits d'accès", "intégrations et API publique pour vos clients", "montée en charge au rythme de la croissance"],
          res: "Un produit qui se vend par abonnement. Pas un projet qu'il faut installer à la main chez chaque client."
        },
        {
          t: "Développement web",
          lead: "Sites d'entreprise, places de marché, boutiques en ligne, systèmes de réservation, outils web internes. Conçus pour la tâche, pas à partir d'un modèle.",
          notes: [
            "Un site d'entreprise se mesure en demandes et en commandes. Son allure dans un portfolio passe après.",
            "Avant le développement, nous convenons de ce qui compte comme résultat, et la mesure d'audience est en place dès le lancement, pas six mois plus tard.",
            "La technologie suit la tâche. Une page d'atterrissage n'a que faire d'une plateforme lourde\u00A0; une place de marché ne tient pas dans un générateur de sites."
          ],
          inc: ["prototype et design des interfaces", "frontend, backend, interface d'administration", "raccordement au paiement, à la livraison, au CRM, à la comptabilité", "bases SEO, vitesse de chargement, mesure d'audience", "mise en ligne et suivi"],
          res: "Un service web dont on voit combien de demandes et combien d'argent il rapporte."
        },
        {
          t: "Applications mobiles",
          lead: "Applications iOS et Android, avec la partie serveur et l'interface d'administration qui les accompagnent.",
          notes: [
            "Une application se justifie quand on y revient\u00A0: nouvelle commande, suivi de livraison, points de fidélité.",
            "Si un client passe une fois par an, un bon site mobile suffit, et il coûte moins cher. Nous vous le dirons avant le début des travaux, pas après.",
            "Natif ou multiplateforme\u00A0: tout dépend du budget et de l'usage que l'application fera de l'appareil photo, de la géolocalisation et du mode hors ligne."
          ],
          inc: ["applications iOS et Android", "partie serveur et API", "administration\u00A0: contenus, commandes, utilisateurs", "notifications push et statistiques", "publication sur l'App Store et Google Play"],
          res: "L'application passe la validation des stores, et votre équipe la gère sans développeur."
        },
        {
          t: "Solutions d'intelligence artificielle",
          lead: "Nous automatisons vos processus métier avec des agents d'IA\u00A0: l'intelligence artificielle et l'apprentissage automatique prennent en charge les étapes routinières.",
          notes: [
            "Nous restons sceptiques face à l'IA. La moitié des idées du genre «\u00A0et si on ajoutait un réseau de neurones\u00A0» se règlent avec une simple automatisation.",
            "C'est autre chose quand des gens passent des heures à trier des e-mails, des documents et des demandes. Là, les modèles de langage suppriment vraiment la routine.",
            "Nous commençons par un pilote sur vos données. Vous voyez les chiffres de précision avant le développement principal."
          ],
          inc: ["agents d'IA qui trient eux-mêmes les demandes, remplissent le CRM et préparent les réponses aux clients", "chatbots et assistants pour les clients et le personnel", "reconnaissance et analyse de documents", "classement des demandes, recherche dans la base de connaissances", "prévisions de la demande, analyse de données", "pilote avec mesure de la qualité sur vos données"],
          res: "Un processus autrefois assuré par des personnes est désormais pris en charge par le système. Un humain garde le contrôle."
        },
        {
          t: "Développement CRM et ERP",
          lead: "Des CRM et ERP sur mesure, construits autour de vos processus. Et non l'inverse.",
          notes: [
            "Un CRM standard fonctionne tant que votre processus ressemble au standard.",
            "Quand la moitié du travail des commerciaux vit dans des tableurs parce que le système «\u00A0ne sait pas faire ça\u00A0», un système à vous revient moins cher.",
            "Nous reprenons les données des anciens systèmes et des tableurs. Le déploiement se fait service par service, pour que le travail ne s'arrête pas un seul jour."
          ],
          inc: ["modules\u00A0: ventes, stock, production, finances — selon vos besoins", "rôles, droits d'accès, journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "raccordement à la comptabilité, à la téléphonie, à la messagerie"],
          res: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit où en sont les choses sans rapports hebdomadaires de chaque service."
        },
        {
          t: "Solutions cloud",
          lead: "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou en partie, et veillons à ce qu'elle fonctionne sans devenir plus chère sans raison.",
          notes: [
            "Le cloud n'est pas toujours moins cher qu'un serveur à soi.",
            "Il devient rentable quand la charge varie fortement, quand il faut de la tolérance aux pannes ou quand un nouvel environnement doit être prêt en quelques minutes plutôt qu'en une semaine.",
            "D'abord, donc, un audit et une estimation des coûts. La migration se fait par étapes, avec un plan de retour arrière à chaque étape."
          ],
          inc: ["audit de l'infrastructure, estimation des coûts", "architecture AWS, plan de migration", "migration des serveurs, bases de données, fichiers", "sauvegardes, supervision", "optimisation des coûts après la migration"],
          res: "Une infrastructure qui survit à la panne d'un serveur. Une facture cloud compréhensible."
        },
        {
          t: "Infrastructure d'entreprise sous Red Hat",
          lead: "Nous construisons l'infrastructure serveur de votre entreprise sous Red Hat\u00A0: Red Hat Enterprise Linux sur les serveurs, OpenShift pour les conteneurs, Ansible pour l'automatisation.",
          notes: [
            "On choisit Red Hat quand l'infrastructure doit tourner des années et passer des audits, au lieu de reposer sur la mémoire d'un seul administrateur.",
            "L'abonnement vous apporte le support de l'éditeur et un long cycle de vie\u00A0: Red Hat Enterprise Linux est maintenu pendant dix ans.",
            "La configuration des serveurs est décrite dans Ansible. N'importe quel serveur se reconstruit à partir d'un playbook, pas de mémoire.",
            "Red Hat est notre partenaire. Nous vous aidons aussi pour les abonnements et le support de l'éditeur."
          ],
          inc: ["audit des serveurs existants, plan de migration", "Red Hat Enterprise Linux, mises à jour centralisées via Red Hat Satellite", "OpenShift comme plateforme de conteneurs pour vos applications", "automatisation de la configuration et du déploiement avec Ansible", "comptes et accès au même endroit (Identity Management)", "supervision, sauvegardes, documentation pour votre équipe"],
          res: "Une infrastructure que l'on peut vérifier, reproduire et confier à une autre équipe. Aucun savoir ne se perd."
        },
        {
          t: "API et intégrations",
          lead: "Nous créons des API pour vos systèmes et les relions aux services que vous utilisez déjà.",
          notes: [
            "Ce que nous voyons le plus souvent\u00A0: des données saisies deux fois. Les commandes du site retapées à la main dans la comptabilité, les paiements pointés dans un tableur.",
            "Une intégration supprime ce travail, et avec lui les erreurs qu'il engendre.",
            "La supervision n'est pas une option. Les intégrations cassent sans bruit\u00A0: un partenaire modifie son API, et c'est fini. Mieux vaut l'apprendre par le système que par un client."
          ],
          inc: ["conception et documentation d'API", "paiement, livraison, CRM, comptabilité", "échange de données entre systèmes internes", "files d'attente et nouvelles tentatives en cas d'échec", "supervision et alertes"],
          res: "Les données sont saisies une seule fois. Ensuite, elles arrivent d'elles-mêmes là où il faut."
        },
        {
          t: "Support technique",
          lead: "Nous maintenons et faisons évoluer vos systèmes informatiques, y compris ceux que nous n'avons pas écrits.",
          notes: [
            "Le support, ce n'est pas seulement corriger des bugs. Ce sont des mises à jour qui comblent les failles, une supervision qui repère une panne avant les utilisateurs et de petites améliorations au fil de l'eau.",
            "Vous avez hérité du système d'un autre prestataire\u00A0? D'abord un audit et de la documentation. Sans eux, toute modification est une loterie."
          ],
          inc: ["supervision de la disponibilité et des erreurs", "correctifs et mises à jour de sécurité", "sauvegardes et tests de restauration", "améliorations planifiées et nouvelles fonctions", "audit et documentation des systèmes développés par d'autres"],
          res: "Le système fonctionne, et l'équipe sait comment il est construit."
        }
      ]
    },
    es: {
      labels: ["PROPÓSITO", "NOTAS", "QUÉ INCLUYE", "RESULTADO", "Véase también:"],
      items: [
        {
          t: "Concepto de la solución de TI",
          lead: "Averiguamos qué tiene que hacer realmente el sistema y lo ponemos por escrito para que lo entiendan tanto el negocio como los desarrolladores.",
          notes: [
            "El error más caro de un proyecto suele producirse antes de programar nada: se empieza a construir sin haber acordado qué problema tiene que resolver el sistema.",
            "Por eso primero hablamos con quienes van a trabajar con él: contabilidad, almacén, comerciales. No solo con la dirección.",
            "A veces la conclusión es: no hay que desarrollar nada, mejor tomar un producto existente y configurarlo. Y así lo escribimos."
          ],
          inc: ["entrevistas con el personal, análisis de cómo se trabaja hoy", "requisitos de negocio y escenarios de uso", "producto estándar o desarrollo a medida: comparativa", "especificación con plazos y presupuesto por fases"],
          res: "Un documento con el que se puede presupuestar y empezar el trabajo, lo haga quien lo haga: nosotros u otro equipo."
        },
        {
          t: "Desarrollo SaaS",
          lead: "Creamos plataformas SaaS, desde una primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, plan y panel.",
          notes: [
            "Un producto SaaS no gana dinero con su código. Lo gana cuando el cliente se registra, paga y empieza a trabajar sin llamar nunca a soporte.",
            "La multitenencia, la facturación y los permisos se incorporan desde el principio. Rehacerlos cuando ya hay clientes dentro cuesta varias veces más.",
            "Lanzamos pronto la primera versión. Los usuarios reales enseguida muestran qué funciones previstas sobraban."
          ],
          inc: ["arquitectura multitenant, datos de clientes aislados", "registro, planes, suscripciones, pagos en línea", "paneles, roles, permisos", "integraciones y una API pública para sus clientes", "escalado a medida que crece la carga"],
          res: "Un producto que se vende por suscripción. No un proyecto que hay que implantar a mano para cada cliente."
        },
        {
          t: "Desarrollo web",
          lead: "Webs corporativas, marketplaces, tiendas online, sistemas de reservas, herramientas web internas. Hechas para la tarea, no a partir de una plantilla.",
          notes: [
            "Una web de empresa se mide en solicitudes y pedidos. Cómo queda en un portafolio es secundario.",
            "Antes de desarrollar acordamos qué cuenta como resultado, y la analítica se activa con el lanzamiento, no seis meses después.",
            "La tecnología se elige según la tarea. A una landing page no le hace falta una plataforma pesada, y un marketplace no cabe en un creador de webs."
          ],
          inc: ["prototipo y diseño de interfaces", "frontend, backend, panel de administración", "conexión con pagos, envíos, CRM, contabilidad", "base SEO, velocidad de carga, analítica", "lanzamiento y mantenimiento"],
          res: "Un servicio web en el que se ve cuántas solicitudes y cuánto dinero aporta."
        },
        {
          t: "Aplicaciones móviles",
          lead: "Aplicaciones para iOS y Android, junto con la parte de servidor y el panel de administración que hay detrás.",
          notes: [
            "Una aplicación tiene sentido cuando la gente vuelve a ella: repetir un pedido, consultar un envío, acumular puntos.",
            "Si un cliente entra una vez al año, basta con una buena web móvil, que además cuesta menos. Se lo diremos antes de empezar, no después.",
            "Nativa o multiplataforma: lo deciden el presupuesto y cuánto necesita la aplicación la cámara, la geolocalización y el modo sin conexión."
          ],
          inc: ["aplicaciones para iOS y Android", "parte de servidor y API", "administración: contenidos, pedidos, usuarios", "notificaciones push y analítica", "publicación en App Store y Google Play"],
          res: "La aplicación supera la revisión de las tiendas y su equipo la gestiona sin un desarrollador."
        },
        {
          t: "Soluciones con inteligencia artificial",
          lead: "Automatizamos sus procesos de negocio con agentes de IA: la inteligencia artificial y el aprendizaje automático se encargan de los pasos rutinarios.",
          notes: [
            "Somos escépticos con la IA. La mitad de las ideas del tipo «vamos a meterle una red neuronal» se resuelven con una automatización corriente.",
            "Otra cosa es cuando hay personas que pasan horas clasificando correos, documentos y solicitudes. Ahí los modelos de lenguaje sí quitan la rutina.",
            "Empezamos con un piloto sobre sus datos. Usted ve las cifras de precisión antes del desarrollo principal."
          ],
          inc: ["agentes de IA que clasifican solicitudes, rellenan el CRM y preparan respuestas a los clientes por sí solos", "chatbots y asistentes para clientes y empleados", "reconocimiento y análisis de documentos", "clasificación de solicitudes, búsqueda en la base de conocimiento", "previsión de la demanda, análisis de datos", "piloto con medición de la calidad sobre sus datos"],
          res: "Un proceso que antes hacían personas ahora lo hace el sistema. Una persona lo supervisa."
        },
        {
          t: "Desarrollo de CRM y ERP",
          lead: "CRM y ERP a medida, construidos en torno a sus procesos. No al revés.",
          notes: [
            "Un CRM estándar funciona mientras su proceso se parezca al estándar.",
            "Cuando la mitad del trabajo de los comerciales vive en hojas de cálculo porque el sistema «no sabe hacer eso», un sistema propio sale más barato.",
            "Migramos los datos de los sistemas antiguos y de las hojas de cálculo. La implantación va departamento a departamento, para que el trabajo no se pare ni un solo día."
          ],
          inc: ["módulos: ventas, almacén, producción, finanzas, los que hagan falta", "roles, permisos, registro de actividad", "informes y paneles para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "conexión con contabilidad, telefonía, correo"],
          res: "Un solo sistema en lugar de un zoo de hojas de cálculo. La dirección ve cómo van las cosas sin informes semanales de cada departamento."
        },
        {
          t: "Soluciones en la nube",
          lead: "Trasladamos su infraestructura a Amazon Web Services, entera o por partes, y nos aseguramos de que funcione y no se encarezca sin motivo.",
          notes: [
            "La nube no siempre es más barata que un servidor propio.",
            "Compensa cuando la carga sube y baja bruscamente, cuando se necesita tolerancia a fallos o cuando un entorno nuevo tiene que estar listo en minutos y no en una semana.",
            "Por eso primero, auditoría y cálculo de costes. La migración se hace paso a paso, con un plan de vuelta atrás en cada paso."
          ],
          inc: ["auditoría de la infraestructura, cálculo de costes", "arquitectura en AWS, plan de migración", "traslado de servidores, bases de datos, archivos", "copias de seguridad, monitorización", "optimización de costes tras la migración"],
          res: "Una infraestructura que sobrevive a la caída de un servidor. Una factura de la nube que se entiende."
        },
        {
          t: "Infraestructura empresarial con Red Hat",
          lead: "Construimos la infraestructura de servidores de su empresa con Red Hat: Red Hat Enterprise Linux en los servidores, OpenShift para contenedores, Ansible para la automatización.",
          notes: [
            "Red Hat es la opción cuando la infraestructura tiene que funcionar durante años y superar auditorías, en lugar de depender de la memoria de un único administrador.",
            "La suscripción le da soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene diez años de soporte.",
            "La configuración de los servidores queda descrita en Ansible. Cualquier servidor se reconstruye a partir de un playbook, no de memoria.",
            "Red Hat es nuestro socio. También le ayudamos con las suscripciones y el soporte del fabricante."
          ],
          inc: ["auditoría de los servidores actuales, plan de migración", "Red Hat Enterprise Linux, actualizaciones centralizadas con Red Hat Satellite", "OpenShift como plataforma de contenedores para sus aplicaciones", "automatización de la configuración y el despliegue con Ansible", "cuentas y accesos en un solo lugar (Identity Management)", "monitorización, copias de seguridad, documentación para su equipo"],
          res: "Una infraestructura que se puede revisar, reproducir y entregar a otro equipo. El conocimiento no se pierde."
        },
        {
          t: "API e integraciones",
          lead: "Creamos API para sus sistemas y los conectamos con los servicios que ya utiliza.",
          notes: [
            "Lo que más vemos: datos que se introducen dos veces. Pedidos de la web que se vuelven a teclear a mano en contabilidad, pagos que se cotejan en una hoja de cálculo.",
            "Una integración elimina ese trabajo junto con los errores que genera.",
            "La monitorización no es opcional. Las integraciones fallan en silencio: un socio cambia su API y se acabó. Mejor enterarse por el sistema que por un cliente."
          ],
          inc: ["diseño y documentación de API", "pagos, envíos, CRM, contabilidad", "intercambio de datos entre sistemas internos", "colas y reintentos ante fallos", "monitorización y alertas"],
          res: "Los datos se introducen una vez. Después llegan solos adonde hacen falta."
        },
        {
          t: "Soporte técnico",
          lead: "Mantenemos y desarrollamos sus sistemas de TI, también los que no hemos escrito nosotros.",
          notes: [
            "El soporte no es solo corregir errores. Son actualizaciones que cierran vulnerabilidades, una monitorización que detecta un fallo antes que los usuarios y pequeñas mejoras sobre la marcha.",
            "¿Ha heredado el sistema de otro proveedor? Primero, auditoría y documentación. Sin ellas, cualquier cambio es una lotería."
          ],
          inc: ["monitorización de disponibilidad y errores", "correcciones y actualizaciones de seguridad", "copias de seguridad y pruebas de restauración", "mejoras planificadas y nuevas funciones", "auditoría y documentación de sistemas ajenos"],
          res: "El sistema funciona y el equipo sabe cómo está construido."
        }
      ]
    },
    pt: {
      labels: ["FINALIDADE", "NOTAS", "O QUE INCLUI", "RESULTADO", "Ver também:"],
      items: [
        {
          t: "Conceção de soluções de TI",
          lead: "Apuramos o que o sistema tem realmente de fazer e pomos isso por escrito, de forma que o percebam tanto o negócio como os programadores.",
          notes: [
            "O erro mais caro de um projeto costuma acontecer antes de qualquer programação: começa-se a construir o sistema sem se ter acordado que problema ele resolve.",
            "Por isso, falamos primeiro com quem vai trabalhar com ele — contabilidade, armazém, comerciais. Não só com a administração.",
            "Por vezes, a conclusão é: não é preciso desenvolver nada, mais vale pegar num produto existente e configurá-lo. E é isso que escrevemos."
          ],
          inc: ["entrevistas aos colaboradores, análise de como se trabalha hoje", "requisitos de negócio e cenários de utilização", "produto pronto ou desenvolvimento à medida: comparação", "caderno de encargos com prazos e orçamento por fase"],
          res: "Um documento com o qual se pode orçamentar e começar o trabalho, seja quem for a fazê-lo: nós ou outra equipa."
        },
        {
          t: "Desenvolvimento SaaS",
          lead: "Criamos plataformas SaaS, desde uma primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu espaço, plano e área de cliente.",
          notes: [
            "Um produto SaaS não ganha dinheiro com o código. Ganha quando o cliente se regista, paga e começa a trabalhar sem nunca ligar para o suporte.",
            "Multi-tenancy, faturação e permissões entram logo de início. Refazê-los quando os clientes já lá estão dentro custa várias vezes mais.",
            "Lançamos cedo a primeira versão. Utilizadores reais mostram depressa que funcionalidades planeadas estavam a mais."
          ],
          inc: ["arquitetura multi-tenant, dados de clientes isolados", "registo, planos, subscrições, pagamentos online", "áreas de cliente, perfis, permissões", "integrações e uma API pública para os seus clientes", "escalabilidade à medida que a carga cresce"],
          res: "Um produto que se vende por subscrição. Não um projeto que tem de ser implementado à mão em cada cliente."
        },
        {
          t: "Desenvolvimento web",
          lead: "Sites institucionais, marketplaces, lojas online, sistemas de reservas, ferramentas web internas. Feitos para a tarefa, não a partir de um modelo.",
          notes: [
            "Um site de empresa mede-se em pedidos e encomendas. O aspeto que tem num portefólio vem depois.",
            "Antes do desenvolvimento, acordamos o que conta como resultado, e a analítica fica ativa no lançamento, não seis meses depois.",
            "A tecnologia segue a tarefa. Uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites."
          ],
          inc: ["protótipo e design de interfaces", "frontend, backend, painel de administração", "ligação a pagamentos, entregas, CRM, contabilidade", "base de SEO, velocidade de carregamento, analítica", "lançamento e acompanhamento"],
          res: "Um serviço web em que se vê quantos pedidos e quanto dinheiro traz."
        },
        {
          t: "Aplicações móveis",
          lead: "Aplicações para iOS e Android, com a parte de servidor e o painel de administração por trás.",
          notes: [
            "Uma aplicação compensa quando as pessoas voltam a ela: repetir uma encomenda, ver o estado da entrega, juntar pontos.",
            "Se um cliente aparece uma vez por ano, basta um bom site móvel, e sai mais barato. Dizemo-lo antes de começar o trabalho, não depois.",
            "Nativa ou multiplataforma: decidem o orçamento e o quanto a aplicação precisa da câmara, da localização e do modo offline."
          ],
          inc: ["aplicações iOS e Android", "parte de servidor e API", "administração: conteúdos, encomendas, utilizadores", "notificações push e analítica", "publicação na App Store e no Google Play"],
          res: "A aplicação passa a revisão das lojas e a sua equipa gere-a sem um programador."
        },
        {
          t: "Soluções com inteligência artificial",
          lead: "Automatizamos os processos do seu negócio com agentes de IA: a inteligência artificial e a aprendizagem automática assumem os passos de rotina.",
          notes: [
            "Olhamos para a IA com ceticismo. Metade das ideias do género «e se metêssemos uma rede neuronal» resolve-se com automatização comum.",
            "Outra coisa é quando há pessoas que passam horas a triar e-mails, documentos e pedidos. Aí, os modelos de linguagem tiram mesmo a rotina.",
            "Começamos com um piloto sobre os seus dados. Vê os números de precisão antes do desenvolvimento principal."
          ],
          inc: ["agentes de IA que triam pedidos, preenchem o CRM e preparam respostas aos clientes por si próprios", "chatbots e assistentes para clientes e colaboradores", "reconhecimento e análise de documentos", "classificação de pedidos, pesquisa na base de conhecimento", "previsão da procura, análise de dados", "piloto com avaliação da qualidade sobre os seus dados"],
          res: "Um processo que antes era feito por pessoas passa a ser feito pelo sistema. Uma pessoa controla-o."
        },
        {
          t: "Desenvolvimento de CRM e ERP",
          lead: "CRM e ERP à medida, construídos à volta dos seus processos. Não o contrário.",
          notes: [
            "Um CRM de caixa funciona enquanto o seu processo se parecer com o padrão.",
            "Quando metade do trabalho dos comerciais vive em folhas de cálculo porque o sistema «não faz isso», um sistema próprio sai mais barato.",
            "Migramos os dados dos sistemas antigos e das folhas de cálculo. A implementação é feita departamento a departamento, para que o trabalho não pare um único dia."
          ],
          inc: ["módulos: vendas, armazém, produção, finanças — os que forem precisos", "perfis, permissões, registo de ações", "relatórios e painéis para a administração", "migração de dados de folhas de cálculo e sistemas antigos", "ligação à contabilidade, telefonia, e-mail"],
          res: "Um só sistema em vez de um jardim zoológico de folhas de cálculo. A administração vê como estão as coisas sem relatórios semanais de cada departamento."
        },
        {
          t: "Soluções na cloud",
          lead: "Migramos a sua infraestrutura para a Amazon Web Services, no todo ou por partes, e garantimos que funciona e não fica mais cara sem razão.",
          notes: [
            "A cloud nem sempre é mais barata do que um servidor próprio.",
            "Compensa quando a carga oscila muito, quando é precisa tolerância a falhas ou quando um novo ambiente tem de estar pronto em minutos e não numa semana.",
            "Por isso, primeiro uma auditoria e uma estimativa de custos. A migração faz-se passo a passo, com um plano de reversão em cada passo."
          ],
          inc: ["auditoria da infraestrutura, estimativa de custos", "arquitetura na AWS, plano de migração", "migração de servidores, bases de dados, ficheiros", "cópias de segurança, monitorização", "otimização de custos depois da migração"],
          res: "Uma infraestrutura que sobrevive à falha de um servidor. Uma fatura da cloud que se percebe."
        },
        {
          t: "Infraestrutura empresarial em Red Hat",
          lead: "Construímos a infraestrutura de servidores da sua empresa em Red Hat: Red Hat Enterprise Linux nos servidores, OpenShift para contentores, Ansible para automatização.",
          notes: [
            "Escolhe-se Red Hat quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de depender da memória de um único administrador.",
            "A subscrição dá-lhe suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos.",
            "A configuração dos servidores fica descrita em Ansible. Qualquer servidor é reconstruído a partir de um playbook, não de memória.",
            "A Red Hat é nossa parceira. Também ajudamos com subscrições e suporte do fabricante."
          ],
          inc: ["auditoria dos servidores atuais, plano de migração", "Red Hat Enterprise Linux, atualizações centralizadas através do Red Hat Satellite", "OpenShift como plataforma de contentores para as suas aplicações", "automatização da configuração e da implementação com Ansible", "contas e acessos num só lugar (Identity Management)", "monitorização, cópias de segurança, documentação para a sua equipa"],
          res: "Uma infraestrutura que se pode verificar, reproduzir e passar a outra equipa. O conhecimento não se perde."
        },
        {
          t: "APIs e integrações",
          lead: "Criamos APIs para os seus sistemas e ligamo-los aos serviços que já utiliza.",
          notes: [
            "O que mais vemos: dados introduzidos duas vezes. Encomendas do site passadas à mão para a contabilidade, pagamentos conferidos numa folha de cálculo.",
            "Uma integração elimina esse trabalho, e com ele os erros que gera.",
            "A monitorização não é opcional. As integrações avariam em silêncio: um parceiro muda a sua API e pronto. Mais vale sabê-lo pelo sistema do que por um cliente."
          ],
          inc: ["desenho e documentação de APIs", "pagamentos, entregas, CRM, contabilidade", "troca de dados entre sistemas internos", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          res: "Os dados são introduzidos uma vez. Depois chegam sozinhos onde são precisos."
        },
        {
          t: "Suporte técnico",
          lead: "Mantemos e desenvolvemos os seus sistemas de TI, incluindo os que não fomos nós a escrever.",
          notes: [
            "Suporte não é só corrigir erros. São atualizações que fecham vulnerabilidades, monitorização que deteta uma falha antes dos utilizadores e pequenas melhorias pelo caminho.",
            "Herdou o sistema de outro fornecedor? Primeiro, auditoria e documentação. Sem elas, qualquer alteração é uma lotaria."
          ],
          inc: ["monitorização da disponibilidade e de erros", "correções e atualizações de segurança", "cópias de segurança e testes de reposição", "melhorias planeadas e novas funcionalidades", "auditoria e documentação de sistemas alheios"],
          res: "O sistema funciona e a equipa sabe como está construído."
        }
      ]
    },
    it: {
      labels: ["SCOPO", "NOTE", "COSA COMPRENDE", "RISULTATO", "Vedi anche:"],
      items: [
        {
          t: "Ideazione della soluzione IT",
          lead: "Chiariamo che cosa deve fare davvero il sistema e lo mettiamo per iscritto in modo che lo capiscano sia il business sia gli sviluppatori.",
          notes: [
            "L'errore più costoso di un progetto avviene di solito prima ancora di programmare: si comincia a costruire senza essersi accordati su quale problema il sistema debba risolvere.",
            "Per questo parliamo prima con chi lo userà: amministrazione, magazzino, commerciali. Non solo con la direzione.",
            "A volte la conclusione è: non serve sviluppare nulla, meglio prendere un prodotto esistente e configurarlo. E lo scriviamo."
          ],
          inc: ["interviste al personale, analisi di come si lavora oggi", "requisiti di business e scenari d'uso", "prodotto pronto o sviluppo su misura: confronto", "capitolato con tempi e budget per fase"],
          res: "Un documento su cui si può stimare e avviare il lavoro, chiunque lo svolga: noi o un altro team."
        },
        {
          t: "Sviluppo SaaS",
          lead: "Realizziamo piattaforme SaaS, dalla prima versione per i clienti pilota fino a un servizio in cui ogni cliente ha il proprio spazio, piano e area riservata.",
          notes: [
            "Un prodotto SaaS non guadagna con il codice. Guadagna quando il cliente si registra, paga e inizia a lavorare senza mai chiamare l'assistenza.",
            "Multi-tenancy, fatturazione e permessi li prevediamo fin dall'inizio. Rifarli quando i clienti sono già dentro costa molte volte di più.",
            "Rilasciamo presto la prima versione. Gli utenti reali mostrano in fretta quali funzioni previste erano superflue."
          ],
          inc: ["architettura multi-tenant, dati dei clienti isolati", "registrazione, piani, abbonamenti, pagamenti online", "aree riservate, ruoli, permessi", "integrazioni e un'API pubblica per i Suoi clienti", "scalabilità man mano che cresce il carico"],
          res: "Un prodotto che si vende in abbonamento. Non un progetto da installare a mano per ogni cliente."
        },
        {
          t: "Sviluppo web",
          lead: "Siti aziendali, marketplace, negozi online, sistemi di prenotazione, strumenti web interni. Fatti per il compito, non partendo da un modello.",
          notes: [
            "Un sito aziendale si misura in richieste e ordini. Come appare in un portfolio viene dopo.",
            "Prima dello sviluppo concordiamo che cosa conta come risultato, e le statistiche partono con il lancio, non sei mesi dopo.",
            "La tecnologia segue il compito. A una landing page non serve una piattaforma pesante, e un marketplace non entra in un costruttore di siti."
          ],
          inc: ["prototipo e design delle interfacce", "frontend, backend, pannello di amministrazione", "collegamento a pagamenti, spedizioni, CRM, contabilità", "basi SEO, velocità di caricamento, statistiche", "lancio e assistenza continuativa"],
          res: "Un servizio web da cui si vede quante richieste e quanto denaro porta."
        },
        {
          t: "App mobili",
          lead: "App per iOS e Android, insieme alla parte server e al pannello di amministrazione che le gestisce.",
          notes: [
            "Un'app ha senso quando le persone ci tornano: riordinare, controllare una consegna, raccogliere punti.",
            "Se un cliente passa una volta l'anno, basta un buon sito mobile, che costa anche meno. Glielo diciamo prima di iniziare, non dopo.",
            "Nativa o multipiattaforma: decidono il budget e quanto l'app ha bisogno di fotocamera, geolocalizzazione e modalità offline."
          ],
          inc: ["app per iOS e Android", "parte server e API", "amministrazione: contenuti, ordini, utenti", "notifiche push e statistiche", "pubblicazione su App Store e Google Play"],
          res: "L'app supera la revisione degli store e il Suo team la gestisce senza uno sviluppatore."
        },
        {
          t: "Soluzioni di intelligenza artificiale",
          lead: "Automatizziamo i Suoi processi aziendali con agenti di IA: intelligenza artificiale e apprendimento automatico si fanno carico dei passaggi di routine.",
          notes: [
            "Sull'IA siamo scettici. Metà delle idee del tipo «aggiungiamoci una rete neurale» si risolve con una normale automazione.",
            "Diverso è quando le persone passano ore a smistare e-mail, documenti e richieste. Lì i modelli linguistici tolgono davvero la routine.",
            "Partiamo da un progetto pilota sui Suoi dati. Vede i valori di accuratezza prima dello sviluppo vero e proprio."
          ],
          inc: ["agenti di IA che smistano da soli le richieste, compilano il CRM e preparano le risposte ai clienti", "chatbot e assistenti per clienti e dipendenti", "riconoscimento e analisi dei documenti", "classificazione delle richieste, ricerca nella base di conoscenza", "previsione della domanda, analisi dei dati", "progetto pilota con misurazione della qualità sui Suoi dati"],
          res: "Un processo che prima svolgevano le persone ora lo svolge il sistema. Una persona lo controlla."
        },
        {
          t: "Sviluppo CRM ed ERP",
          lead: "CRM ed ERP su misura, costruiti intorno ai Suoi processi. Non il contrario.",
          notes: [
            "Un CRM preconfezionato funziona finché il Suo processo somiglia a quello standard.",
            "Quando metà del lavoro dei commerciali vive nei fogli di calcolo perché il sistema «non lo sa fare», un sistema proprio costa meno.",
            "Trasferiamo i dati dai vecchi sistemi e dai fogli di calcolo. L'avvio procede reparto per reparto, così il lavoro non si ferma nemmeno un giorno."
          ],
          inc: ["moduli: vendite, magazzino, produzione, finanza — quelli che servono", "ruoli, permessi, registro delle attività", "report e dashboard per la direzione", "migrazione dei dati da fogli di calcolo e vecchi sistemi", "collegamento a contabilità, telefonia, posta"],
          res: "Un solo sistema al posto di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza report settimanali da ogni reparto."
        },
        {
          t: "Soluzioni cloud",
          lead: "Trasferiamo la Sua infrastruttura su Amazon Web Services, in tutto o in parte, e facciamo in modo che funzioni e non diventi più cara senza motivo.",
          notes: [
            "Il cloud non sempre costa meno di un server proprio.",
            "Conviene quando il carico sale e scende di colpo, quando serve tolleranza ai guasti o quando un nuovo ambiente deve essere pronto in minuti e non in una settimana.",
            "Per questo prima un audit e una stima dei costi. La migrazione avviene passo dopo passo, con un piano di ripristino a ogni passo."
          ],
          inc: ["audit dell'infrastruttura, stima dei costi", "architettura AWS, piano di migrazione", "trasferimento di server, database, file", "backup, monitoraggio", "ottimizzazione dei costi dopo la migrazione"],
          res: "Un'infrastruttura che sopravvive al guasto di un server. Una bolletta del cloud comprensibile."
        },
        {
          t: "Infrastruttura aziendale su Red Hat",
          lead: "Costruiamo l'infrastruttura server della Sua azienda su Red Hat: Red Hat Enterprise Linux sui server, OpenShift per i container, Ansible per l'automazione.",
          notes: [
            "Si sceglie Red Hat quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di reggersi sulla memoria di un solo amministratore.",
            "Con l'abbonamento si ottengono il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni.",
            "La configurazione dei server è descritta in Ansible. Qualsiasi server si ricostruisce da un playbook, non a memoria.",
            "Red Hat è nostro partner. Possiamo aiutarLa anche con abbonamenti e supporto del produttore."
          ],
          inc: ["audit dei server attuali, piano di migrazione", "Red Hat Enterprise Linux, aggiornamenti centralizzati tramite Red Hat Satellite", "OpenShift come piattaforma container per le Sue applicazioni", "automazione di configurazione e deployment con Ansible", "account e accessi in un unico punto (Identity Management)", "monitoraggio, backup, documentazione per il Suo team"],
          res: "Un'infrastruttura che si può verificare, riprodurre e consegnare a un altro team. Le conoscenze non vanno perse."
        },
        {
          t: "API e integrazioni",
          lead: "Realizziamo API per i Suoi sistemi e li colleghiamo ai servizi che già utilizza.",
          notes: [
            "La cosa che vediamo più spesso: dati inseriti due volte. Ordini dal sito ribattuti a mano nella contabilità, pagamenti verificati su un foglio di calcolo.",
            "Un'integrazione elimina questo lavoro insieme agli errori che produce.",
            "Il monitoraggio non è facoltativo. Le integrazioni si rompono in silenzio: un partner cambia la sua API e basta. Meglio saperlo dal sistema che da un cliente."
          ],
          inc: ["progettazione e documentazione delle API", "pagamenti, spedizioni, CRM, contabilità", "scambio di dati tra sistemi interni", "code e nuovi tentativi in caso di errore", "monitoraggio e avvisi"],
          res: "I dati si inseriscono una volta sola. Poi arrivano da soli dove servono."
        },
        {
          t: "Supporto tecnico",
          lead: "Manteniamo e sviluppiamo i Suoi sistemi IT, compresi quelli che non abbiamo scritto noi.",
          notes: [
            "Il supporto non è solo correzione di errori. Sono aggiornamenti che chiudono le vulnerabilità, un monitoraggio che si accorge di un guasto prima degli utenti e piccoli miglioramenti strada facendo.",
            "Ha ereditato il sistema da un altro fornitore? Prima audit e documentazione. Senza, qualsiasi modifica è una lotteria."
          ],
          inc: ["monitoraggio di disponibilità ed errori", "correzioni e aggiornamenti di sicurezza", "backup e verifica del ripristino", "miglioramenti pianificati e nuove funzioni", "audit e documentazione di sistemi altrui"],
          res: "Il sistema funziona e il team sa come è fatto."
        }
      ]
    }
  };

  /* Рядки, потрібні лише консолі */
  const CON = {
    uk: {
      banner: "ArtIntelliCo DOS, версія 4.06",
      typeHelp: ["Введіть ", "HELP", ", щоб побачити список команд."],
      help: [
        ["HELP", "", "цей список"],
        ["DIR", " [/W]", "список файлів"],
        ["TYPE", " <файл>", "показати файл (або просто ім'я)"],
        ["MAIL", "", "як з нами зв'язатися"],
        ["LANG", " [xx]", "мова"],
        ["COLOR", " 07|0A|0E", "монітор: EGA, зелений, бурштин"],
        ["CLS", "", "очистити екран"],
        ["VER", "", "версія"],
        ["DATE", "", "поточна дата"],
        ["TIME", "", "поточний час"],
        ["BOOT", "", "перезавантажити"],
        ["NC", "", "панелі Norton Commander"],
        ["UNIX", "", "термінал UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "AI і цифрове майбутнє"]
      ],
      helpTitle: "Команди:",
      keys: "Клавіші: ↑↓ історія, Tab доповнення, F3 повтор, Esc очистити рядок",
      missing: "Не вказано обов'язковий параметр",
      notFound: "Файл не знайдено",
      badDir: "Невірний каталог",
      discuss: ["Обговорити задачу: ", "MAIL"],
      langSet: "Мова: українська",
      colorSet: "Монітор: ",
      colorUsage: "COLOR 07 — EGA, 0A — зелений, 0E — бурштин",
      nc: "Запуск Norton Commander...",
      date: "Поточна дата: ",
      time: "Поточний час: ",
      files: "файл(ів)",
      bytes: "байт",
      dirOf: "Каталог C:\\ARTINTEL",
      label: "Том у пристрої C має мітку ARTINTELLICO",
      serial: "Серійний номер тому: 1986-2026",
      skip: "Натисніть будь-яку клавішу, щоб пропустити"
    },
    en: {
      banner: "ArtIntelliCo DOS Version 4.06",
      typeHelp: ["Type ", "HELP", " to list commands."],
      help: [
        ["HELP", "", "this list"],
        ["DIR", " [/W]", "list files"],
        ["TYPE", " <file>", "show a file (or just type its name)"],
        ["MAIL", "", "how to reach us"],
        ["LANG", " [xx]", "language"],
        ["COLOR", " 07|0A|0E", "monitor: EGA, green, amber"],
        ["CLS", "", "clear screen"],
        ["VER", "", "version"],
        ["DATE", "", "current date"],
        ["TIME", "", "current time"],
        ["BOOT", "", "reboot"],
        ["NC", "", "Norton Commander panels"],
        ["UNIX", "", "UNIX terminal"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "AI and the digital future"]
      ],
      helpTitle: "Commands:",
      keys: "Keys: ↑↓ history, Tab completion, F3 repeat, Esc clear line",
      missing: "Required parameter missing",
      notFound: "File not found",
      badDir: "Invalid directory",
      discuss: ["Discuss your project: ", "MAIL"],
      langSet: "Language: English",
      colorSet: "Monitor: ",
      colorUsage: "COLOR 07 — EGA, 0A — green, 0E — amber",
      nc: "Starting Norton Commander...",
      date: "Current date is ",
      time: "Current time is ",
      files: "file(s)",
      bytes: "bytes",
      dirOf: "Directory of C:\\ARTINTEL",
      label: "Volume in drive C is ARTINTELLICO",
      serial: "Volume Serial Number is 1986-2026",
      skip: "Press any key to skip"
    },
    ru: {
      banner: "ArtIntelliCo DOS, версия 4.06",
      typeHelp: ["Введите ", "HELP", ", чтобы увидеть список команд."],
      help: [
        ["HELP", "", "этот список"],
        ["DIR", " [/W]", "список файлов"],
        ["TYPE", " <файл>", "показать файл (или просто имя)"],
        ["MAIL", "", "как с нами связаться"],
        ["LANG", " [xx]", "язык"],
        ["COLOR", " 07|0A|0E", "монитор: EGA, зелёный, янтарь"],
        ["CLS", "", "очистить экран"],
        ["VER", "", "версия"],
        ["DATE", "", "текущая дата"],
        ["TIME", "", "текущее время"],
        ["BOOT", "", "перезагрузить"],
        ["NC", "", "панели Norton Commander"],
        ["UNIX", "", "терминал UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "ИИ и цифровое будущее"]
      ],
      helpTitle: "Команды:",
      keys: "Клавиши: ↑↓ история, Tab дополнение, F3 повтор, Esc очистить строку",
      missing: "Не указан обязательный параметр",
      notFound: "Файл не найден",
      badDir: "Неверный каталог",
      discuss: ["Обсудить задачу: ", "MAIL"],
      langSet: "Язык: русский",
      colorSet: "Монитор: ",
      colorUsage: "COLOR 07 — EGA, 0A — зелёный, 0E — янтарь",
      nc: "Запуск Norton Commander...",
      date: "Текущая дата: ",
      time: "Текущее время: ",
      files: "файл(ов)",
      bytes: "байт",
      dirOf: "Каталог C:\\ARTINTEL",
      label: "Том в устройстве C имеет метку ARTINTELLICO",
      serial: "Серийный номер тома: 1986-2026",
      skip: "Нажмите любую клавишу, чтобы пропустить"
    },
    de: {
      banner: "ArtIntelliCo DOS Version 4.06",
      typeHelp: ["Geben Sie ", "HELP", " ein, um die Befehle anzuzeigen."],
      help: [
        ["HELP", "", "diese Liste"],
        ["DIR", " [/W]", "Dateien auflisten"],
        ["TYPE", " <Datei>", "Datei anzeigen (oder nur den Namen)"],
        ["MAIL", "", "so erreichen Sie uns"],
        ["LANG", " [xx]", "Sprache"],
        ["COLOR", " 07|0A|0E", "Monitor: EGA, grün, bernstein"],
        ["CLS", "", "Bildschirm löschen"],
        ["VER", "", "Version"],
        ["DATE", "", "aktuelles Datum"],
        ["TIME", "", "aktuelle Uhrzeit"],
        ["BOOT", "", "neu starten"],
        ["NC", "", "Fenster des Norton Commander"],
        ["UNIX", "", "UNIX-Terminal"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "KI und die digitale Zukunft"]
      ],
      helpTitle: "Befehle:",
      keys: "Tasten: ↑↓ Verlauf, Tab ergänzen, F3 wiederholen, Esc Zeile löschen",
      missing: "Erforderlicher Parameter fehlt",
      notFound: "Datei nicht gefunden",
      badDir: "Ungültiges Verzeichnis",
      discuss: ["Projekt besprechen: ", "MAIL"],
      langSet: "Sprache: Deutsch",
      colorSet: "Monitor: ",
      colorUsage: "COLOR 07 — EGA, 0A — grün, 0E — bernstein",
      nc: "Norton Commander wird gestartet...",
      date: "Aktuelles Datum: ",
      time: "Aktuelle Uhrzeit: ",
      files: "Datei(en)",
      bytes: "Byte",
      dirOf: "Verzeichnis von C:\\ARTINTEL",
      label: "Datenträger in Laufwerk C ist ARTINTELLICO",
      serial: "Datenträgernummer: 1986-2026",
      skip: "Beliebige Taste drücken, um zu überspringen"
    },
    fr: {
      banner: "ArtIntelliCo DOS version 4.06",
      typeHelp: ["Tapez ", "HELP", " pour afficher la liste des commandes."],
      help: [
        ["HELP", "", "cette liste"],
        ["DIR", " [/W]", "liste des fichiers"],
        ["TYPE", " <fichier>", "afficher un fichier (ou tapez son nom)"],
        ["MAIL", "", "comment nous joindre"],
        ["LANG", " [xx]", "langue"],
        ["COLOR", " 07|0A|0E", "moniteur\u00A0: EGA, vert, ambre"],
        ["CLS", "", "effacer l'écran"],
        ["VER", "", "version"],
        ["DATE", "", "date du jour"],
        ["TIME", "", "heure actuelle"],
        ["BOOT", "", "redémarrer"],
        ["NC", "", "panneaux de Norton Commander"],
        ["UNIX", "", "terminal UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "L'IA et l'avenir numérique"]
      ],
      helpTitle: "Commandes\u00A0:",
      keys: "Touches\u00A0: ↑↓ historique, Tab compléter, F3 répéter, Échap effacer la ligne",
      missing: "Paramètre requis manquant",
      notFound: "Fichier introuvable",
      badDir: "Répertoire non valide",
      discuss: ["Parler de votre projet\u00A0:\u00A0", "MAIL"],
      langSet: "Langue\u00A0: français",
      colorSet: "Moniteur\u00A0:\u00A0",
      colorUsage: "COLOR 07 — EGA, 0A — vert, 0E — ambre",
      nc: "Lancement de Norton Commander...",
      date: "Date du jour\u00A0:\u00A0",
      time: "Heure actuelle\u00A0:\u00A0",
      files: "fichier(s)",
      bytes: "octets",
      dirOf: "Répertoire de C:\\ARTINTEL",
      label: "Le volume dans le lecteur C s'appelle ARTINTELLICO",
      serial: "Le numéro de série du volume est 1986-2026",
      skip: "Appuyez sur une touche pour passer"
    },
    es: {
      banner: "ArtIntelliCo DOS versión 4.06",
      typeHelp: ["Escriba ", "HELP", " para ver la lista de comandos."],
      help: [
        ["HELP", "", "esta lista"],
        ["DIR", " [/W]", "lista de archivos"],
        ["TYPE", " <archivo>", "mostrar un archivo (o solo su nombre)"],
        ["MAIL", "", "cómo contactarnos"],
        ["LANG", " [xx]", "idioma"],
        ["COLOR", " 07|0A|0E", "monitor: EGA, verde, ámbar"],
        ["CLS", "", "borrar la pantalla"],
        ["VER", "", "versión"],
        ["DATE", "", "fecha actual"],
        ["TIME", "", "hora actual"],
        ["BOOT", "", "reiniciar"],
        ["NC", "", "paneles de Norton Commander"],
        ["UNIX", "", "terminal UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "La IA y el futuro digital"]
      ],
      helpTitle: "Comandos:",
      keys: "Teclas: ↑↓ historial, Tab completar, F3 repetir, Esc borrar línea",
      missing: "Falta un parámetro requerido",
      notFound: "No se encontró el archivo",
      badDir: "Directorio no válido",
      discuss: ["Hablemos de su proyecto: ", "MAIL"],
      langSet: "Idioma: español",
      colorSet: "Monitor: ",
      colorUsage: "COLOR 07 — EGA, 0A — verde, 0E — ámbar",
      nc: "Iniciando Norton Commander...",
      date: "Fecha actual: ",
      time: "Hora actual: ",
      files: "archivo(s)",
      bytes: "bytes",
      dirOf: "Directorio de C:\\ARTINTEL",
      label: "El volumen de la unidad C es ARTINTELLICO",
      serial: "El número de serie del volumen es 1986-2026",
      skip: "Pulse cualquier tecla para omitir"
    },
    pt: {
      banner: "ArtIntelliCo DOS versão 4.06",
      typeHelp: ["Escreva ", "HELP", " para ver a lista de comandos."],
      help: [
        ["HELP", "", "esta lista"],
        ["DIR", " [/W]", "lista de ficheiros"],
        ["TYPE", " <ficheiro>", "mostrar um ficheiro (ou só o nome)"],
        ["MAIL", "", "como nos contactar"],
        ["LANG", " [xx]", "idioma"],
        ["COLOR", " 07|0A|0E", "monitor: EGA, verde, âmbar"],
        ["CLS", "", "limpar o ecrã"],
        ["VER", "", "versão"],
        ["DATE", "", "data atual"],
        ["TIME", "", "hora atual"],
        ["BOOT", "", "reiniciar"],
        ["NC", "", "painéis do Norton Commander"],
        ["UNIX", "", "terminal UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "A IA e o futuro digital"]
      ],
      helpTitle: "Comandos:",
      keys: "Teclas: ↑↓ histórico, Tab completar, F3 repetir, Esc limpar a linha",
      missing: "Falta um parâmetro obrigatório",
      notFound: "Ficheiro não encontrado",
      badDir: "Diretório inválido",
      discuss: ["Falar do seu projeto: ", "MAIL"],
      langSet: "Idioma: português",
      colorSet: "Monitor: ",
      colorUsage: "COLOR 07 — EGA, 0A — verde, 0E — âmbar",
      nc: "A iniciar o Norton Commander...",
      date: "Data atual: ",
      time: "Hora atual: ",
      files: "ficheiro(s)",
      bytes: "bytes",
      dirOf: "Diretório de C:\\ARTINTEL",
      label: "O volume na unidade C é ARTINTELLICO",
      serial: "O número de série do volume é 1986-2026",
      skip: "Prima qualquer tecla para saltar"
    },
    it: {
      banner: "ArtIntelliCo DOS versione 4.06",
      typeHelp: ["Digiti ", "HELP", " per l'elenco dei comandi."],
      help: [
        ["HELP", "", "questo elenco"],
        ["DIR", " [/W]", "elenco dei file"],
        ["TYPE", " <file>", "mostra un file (o digiti solo il nome)"],
        ["MAIL", "", "come contattarci"],
        ["LANG", " [xx]", "lingua"],
        ["COLOR", " 07|0A|0E", "monitor: EGA, verde, ambra"],
        ["CLS", "", "pulisce lo schermo"],
        ["VER", "", "versione"],
        ["DATE", "", "data corrente"],
        ["TIME", "", "ora corrente"],
        ["BOOT", "", "riavvia"],
        ["NC", "", "pannelli di Norton Commander"],
        ["UNIX", "", "terminale UNIX"],
        ["APPLE", "", "Apple ]["],
        ["LISA", "", "Apple Lisa"],
        ["LINUX", "", "X11 + fvwm, 1996"],
        ["MC", "", "Linux + Midnight Commander"],
        ["WIN", "", "Windows 3.11"],
        ["AI", "", "L'IA e il futuro digitale"]
      ],
      helpTitle: "Comandi:",
      keys: "Tasti: ↑↓ cronologia, Tab completa, F3 ripeti, Esc cancella la riga",
      missing: "Parametro richiesto mancante",
      notFound: "File non trovato",
      badDir: "Directory non valida",
      discuss: ["Parliamo del Suo progetto: ", "MAIL"],
      langSet: "Lingua: italiano",
      colorSet: "Monitor: ",
      colorUsage: "COLOR 07 — EGA, 0A — verde, 0E — ambra",
      nc: "Avvio di Norton Commander...",
      date: "Data corrente: ",
      time: "Ora corrente: ",
      files: "file",
      bytes: "byte",
      dirOf: "Directory di C:\\ARTINTEL",
      label: "Il volume nell'unità C è ARTINTELLICO",
      serial: "Numero di serie del volume: 1986-2026",
      skip: "Premere un tasto qualsiasi per saltare"
    }
  };

  /* Файли на диску C: — індекс послуги вказує на SVC[lang].items */
  const FILES = [
    { name: "README", ext: "TXT", kind: "readme" },
    { name: "CONCEPT", ext: "DOC", kind: "service", i: 0 },
    { name: "SAAS", ext: "EXE", kind: "service", i: 1 },
    { name: "WEB", ext: "HTM", kind: "service", i: 2 },
    { name: "MOBILE", ext: "APP", kind: "service", i: 3 },
    { name: "NEURONET", ext: "AI", kind: "service", i: 4 },
    { name: "CRM_ERP", ext: "DBF", kind: "service", i: 5 },
    { name: "CLOUD", ext: "AWS", kind: "service", i: 6 },
    { name: "REDHAT", ext: "SYS", kind: "service", i: 7 },
    { name: "API", ext: "LIB", kind: "service", i: 8 },
    { name: "SUPPORT", ext: "COM", kind: "service", i: 9 },
    { name: "PARTNERS", ext: "LST", kind: "partners" },
    { name: "MAIL", ext: "BAT", kind: "mail" }
  ];
  const MONITORS = ["ega", "green", "amber"];
  const COLOR_CODES = { "07": "ega", "0A": "green", "0E": "amber" };
  const LANGS = AIC.langs;
  /* LANG розуміє код (DE), назву мовою оригіналу (Deutsch, français) і англійську назву (German) */
  const LANG_ALIASES = {
    uk: ["ua", "ukrainian"], en: ["english"], ru: ["russian"], de: ["german"],
    fr: ["french"], es: ["spanish", "castellano"], pt: ["portuguese"], it: ["italian"]
  };
  const COMMANDS = ["HELP", "DIR", "TYPE", "MAIL", "LANG", "COLOR", "CLS", "VER", "DATE", "TIME", "BOOT", "NC", "UNIX", "APPLE", "LISA", "LINUX", "MC", "WIN", "AI", "ECHO", "CD"];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;

  const nav = (navigator.language || "").toLowerCase().split("-")[0];
  let lang = store.get("aic-lang") || (LANGS.includes(nav) ? nav : "uk");
  if (!LANGS.includes(lang)) lang = "uk";
  /* Мова з аргументу LANG: код, назва або її початок (LANG deu, lang franc) */
  const plain = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  function findLang(arg) {
    const a = plain(arg);
    if (!a) return null;
    if (LANGS.includes(a)) return a;
    const names = (l) => [AIC.langNames[l], ...(LANG_ALIASES[l] || [])].map(plain);
    return LANGS.find((l) => names(l).includes(a)) ||
      (a.length >= 3 ? LANGS.find((l) => names(l).some((n) => n.startsWith(a))) : null) || null;
  }
  let monitor = store.get("aic-monitor");
  if (!MONITORS.includes(monitor)) monitor = "ega";

  const t = () => I18N[lang];
  const c = () => CON[lang];
  const fname = (f) => f.name + "." + f.ext;
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const tok = (label, cmd = label) => `<button type="button" class="tok" data-cmd="${esc(cmd)}">${esc(label)}</button>`;

  const NAV_CMDS = ["TYPE README.TXT", "DIR", "TYPE PARTNERS.LST", "MAIL", "HELP"];
  /* Навігація в кінці README: інші версії сайту (посилання) і розділи (команди) */
  const NAV = {
    uk: { versions: "Інші версії сайту:", sections: "Розділи сайту:", items: ["Про компанію", "Послуги", "Партнери", "Контакти", "Довідка"] },
    en: { versions: "Other versions of the site:", sections: "Site sections:", items: ["About", "Services", "Partners", "Contacts", "Help"] },
    ru: { versions: "Другие версии сайта:", sections: "Разделы сайта:", items: ["О компании", "Услуги", "Партнёры", "Контакты", "Помощь"] },
    de: { versions: "Weitere Versionen der Website:", sections: "Bereiche der Website:", items: ["Über uns", "Leistungen", "Partner", "Kontakt", "Hilfe"] },
    fr: { versions: "Autres versions du site\u00A0:", sections: "Rubriques du site\u00A0:", items: ["À propos", "Services", "Partenaires", "Contacts", "Aide"] },
    es: { versions: "Otras versiones del sitio:", sections: "Secciones del sitio:", items: ["Empresa", "Servicios", "Socios", "Contacto", "Ayuda"] },
    pt: { versions: "Outras versões do site:", sections: "Secções do site:", items: ["Sobre nós", "Serviços", "Parceiros", "Contactos", "Ajuda"] },
    it: { versions: "Altre versioni del sito:", sections: "Sezioni del sito:", items: ["Chi siamo", "Servizi", "Partner", "Contatti", "Aiuto"] }
  };
  const navLines = () => {
    const n = NAV[lang] || NAV.uk;
    const versions = AIC.variants.map((v) => v.id === AIC.id
      ? `<span class="d">[${esc(v.name[lang])}]</span>`
      : `<a href="${AIC.url(v.id, lang)}">${esc(v.name[lang])}</a>`).join(" · ");
    return [
      "",
      `<span class="d">${esc(n.versions)}</span>`,
      versions,
      "",
      `<span class="d">${esc(n.sections)}</span>`,
      n.items.map((label, i) => tok(label, NAV_CMDS[i])).join("  ")
    ];
  };
  const fileTok = (f, label = fname(f)) => tok(label, f.kind === "mail" ? "mail" : "type " + fname(f).toLowerCase());
  const heading = (s) => [`<span class="b">${esc(s)}</span>`, `<span class="rule" aria-hidden="true">${"═".repeat([...s].length)}</span>`];

  const out = $("out");
  const screen = $("screen");
  const input = $("cmd");
  const form = $("promptLine");

  /* ---------- Виведення: рядок за рядком, як на повільному терміналі ---------- */
  let busy = false;
  let flushing = false;
  const waiters = [];
  const sleep = (ms) => new Promise((resolve) => {
    if (flushing || reduced) return resolve();
    const id = setTimeout(resolve, ms);
    waiters.push(() => { clearTimeout(id); resolve(); });
  });
  const flush = () => { flushing = true; waiters.splice(0).forEach((f) => f()); };
  const scrollDown = () => { screen.scrollTop = screen.scrollHeight; };

  function line(html) {
    const d = document.createElement("div");
    d.className = "line";
    d.innerHTML = html;
    out.appendChild(d);
    scrollDown();
    return d;
  }

  async function emit(lines, delay = 16) {
    for (const l of lines) {
      line(l);
      await sleep(delay);
    }
  }

  async function typeIn(cmd) {
    const d = line(esc(PROMPT));
    for (const ch of cmd) {
      d.textContent += ch;
      await sleep(70 + Math.random() * 60);
    }
    await sleep(200);
  }

  function setBusy(on) {
    busy = on;
    form.hidden = on;
    if (!on) {
      flushing = false;
      renderInput();
      scrollDown();
      if (!coarse) input.focus({ preventScroll: true });
    }
  }

  /* ---------- Рядок вводу з DOS-курсором ---------- */
  function renderInput() {
    const v = input.value;
    const p = input.selectionStart ?? v.length;
    const chars = [...v.slice(0, p)];
    const rest = [...v.slice(p)];
    $("before").textContent = chars.join("");
    $("cur").textContent = rest[0] || " ";
    $("after").textContent = rest.slice(1).join("");
  }
  ["input", "keyup", "click", "select"].forEach((ev) => input.addEventListener(ev, renderInput));
  document.addEventListener("selectionchange", () => { if (document.activeElement === input) renderInput(); });

  /* ---------- Вміст файлів ---------- */
  const logo = () => {
    const G = {
      A: [" ### ", "#   #", "#####", "#   #", "#   #"],
      R: ["#### ", "#   #", "#### ", "#  # ", "#   #"],
      T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "],
      I: ["###", " # ", " # ", " # ", "###"],
      N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
      E: ["#####", "#    ", "#### ", "#    ", "#####"],
      L: ["#    ", "#    ", "#    ", "#    ", "#####"],
      C: [" ####", "#    ", "#    ", "#    ", " ####"],
      O: [" ### ", "#   #", "#   #", "#   #", " ### "]
    };
    return [0, 1, 2, 3, 4]
      .map((r) => [..."ARTINTELLICO"].map((ch) => G[ch][r]).join(" ").replace(/#/g, "█"))
      .join("\n");
  };

  /* Ширина екрана в символах: документи переносимо по словах, не ширше 70 колонок */
  function columns() {
    const probe = document.createElement("span");
    probe.textContent = "0".repeat(10);
    probe.style.cssText = "position:absolute;visibility:hidden;white-space:pre";
    out.appendChild(probe);
    const cw = probe.getBoundingClientRect().width / 10;
    probe.remove();
    const n = cw ? Math.floor(out.clientWidth / cw) : 70;
    return Math.max(28, Math.min(70, n || 70));
  }
  function wrap(text, w, first = "", rest = first) {
    const lines = [];
    let cur = first, empty = true;
    /* «Red Hat» не розриваємо між рядками */
    for (const word of String(text).replace(/Red Hat/gi, (m) => m.replace(" ", "\u00A0")).split(/[ \t\n]+/).filter(Boolean)) {
      if (!empty && cur.length + 1 + word.length > w) { lines.push(cur); cur = rest + word; }
      else cur += (empty ? "" : " ") + word;
      empty = false;
    }
    if (!empty) lines.push(cur);
    return lines.map((l) => l.replace(/\u00A0/g, " "));
  }

  /* «Див. також: TYPE …» — один рядок або стовпчиком, якщо не вміщується */
  function seeAlso(f, label, w, ind) {
    const refs = SEE[f.i].map((j) => FILES.find((x) => x.kind === "service" && x.i === j));
    const plain = ind + label + " " + refs.map((g) => "TYPE " + fname(g)).join("  ");
    const toks = refs.map((g) => fileTok(g, "TYPE " + fname(g)));
    if (plain.length <= w) return [ind + esc(label) + " " + toks.join("  ")];
    return [ind + esc(label), ...toks.map((x) => ind + "  " + x)];
  }

  /* Послуга як файл документації: рамка з назвою, розділи капсом, «Див. також» */
  function serviceLines(f) {
    const { labels, items } = SVC[lang];
    const v = items[f.i];
    const w = columns();
    const ind = w >= 60 ? "    " : "  ";
    const inner = w - 4;
    const rows = [fname(f), ...wrap(v.t.toLocaleUpperCase(lang), inner)];
    const bw = Math.min(inner, Math.max(...rows.map((r) => r.length)));
    const edge = (l, r) => `<span class="b">${l}${"═".repeat(bw + 2)}${r}</span>`;
    const sec = (label) => ["", `<span class="a">${esc(label)}</span>`];
    const para = (text) => wrap(text, w, ind).map(esc);
    const [lead, cmd] = c().discuss;
    return [
      edge("╔", "╗"),
      ...rows.map((r, k) => `<span class="b">║ </span><span class="${k ? "b" : "a"}">${esc(r.padEnd(bw))}</span><span class="b"> ║</span>`),
      edge("╚", "╝"),
      ...sec(labels[0]), ...para(v.lead),
      ...sec(labels[1]), ...v.notes.flatMap((n, k) => [...(k ? [""] : []), ...para(n)]),
      ...sec(labels[2]), ...v.inc.flatMap((x) => wrap(x, w, ind + "■ ", ind + "  ").map(esc)),
      ...sec(labels[3]), ...para(v.res),
      "",
      `<span class="d" aria-hidden="true">${"─".repeat(w)}</span>`,
      ind + esc(lead) + tok(cmd, "mail"),
      ...seeAlso(f, labels[4], w, ind)
    ];
  }

  function fileLines(f) {
    const s = t();
    if (f.kind === "readme") {
      return [
        `<div class="logo" aria-label="ArtIntelliCo">${logo()}</div>`,
        "",
        ...heading(s.heroTitle),
        esc(s.heroText),
        "",
        esc(s.heroLead) + ":",
        ...s.phrases.map((p) => "  ■ " + esc(p)),
        "",
        `<span class="d">${esc(s.copyright)}</span>`,
        `<span class="d">${esc(s.legal)}</span>`,
        `<span class="d">${esc(s.slogan)}</span>`,
        `<span class="d">${esc(s.source)}:</span> <a href="${location.origin}${AIC.url("classic", lang)}" target="_blank" rel="noopener">artintellico.com</a>`,
        ...navLines()
      ];
    }
    if (f.kind === "service") return serviceLines(f);
    if (f.kind === "partners") {
      return [
        ...heading(s.partnersTitle),
        ...PARTNERS.map((p) => "  ■ " + (p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)))
      ];
    }
    return [
      ...heading(s.contactTitle),
      esc(s.contactText),
      "",
      esc(s.emailLabel) + ": " + `<a href="mailto:${EMAIL}">${EMAIL}</a>`
    ];
  }

  const fileText = (f) => {
    const s = t();
    if (f.kind === "service") { const v = SVC[lang].items[f.i]; return [v.t, v.lead, ...v.notes, ...v.inc, v.res].join("\n"); }
    if (f.kind === "readme") return [s.heroTitle, s.heroText, s.heroLead, ...s.phrases].join("\n");
    if (f.kind === "partners") return PARTNERS.join("\n");
    return [s.contactTitle, s.contactText, EMAIL].join("\n");
  };

  function findFile(arg) {
    const a = arg.toUpperCase();
    return FILES.find((f) => fname(f) === a || f.name === a);
  }

  /* ---------- Команди ---------- */
  function dirLines(wide) {
    const k = c();
    const d = new Date();
    const date = [d.getDate(), d.getMonth() + 1, d.getFullYear() % 100].map((n) => String(n).padStart(2, "0")).join(".");
    const head = ["", " " + esc(k.label), " " + esc(k.serial), "", " " + esc(k.dirOf), ""];
    let total = 0;
    const sizes = FILES.map((f) => { const n = new TextEncoder().encode(fileText(f)).length; total += n; return n; });
    let rows;
    if (wide) {
      rows = [];
      for (let i = 0; i < FILES.length; i += 5) {
        rows.push(FILES.slice(i, i + 5).map((f) => fileTok(f) + " ".repeat(16 - fname(f).length)).join(""));
      }
    } else {
      rows = FILES.map((f, i) =>
        fileTok(f, f.name.padEnd(9) + f.ext.padEnd(3)) +
        esc(String(sizes[i]).padStart(10) + "  " + date + "   9:00")
      );
    }
    return [...head, ...rows, esc(String(FILES.length).padStart(10) + " " + k.files + String(total).padStart(14) + " " + k.bytes), ""];
  }

  function helpLines() {
    const k = c();
    const row = ([cmd, args, desc]) => {
      const pad = " ".repeat(Math.max(1, 18 - cmd.length - args.length));
      let argsHtml = esc(args);
      if (cmd === "COLOR") argsHtml = " " + Object.keys(COLOR_CODES).map((code) => tok(code, "color " + code)).join("|");
      const cmdHtml = cmd === "TYPE" ? esc(cmd) : tok(cmd, cmd.toLowerCase());
      return "  " + cmdHtml + argsHtml + pad + esc(desc);
    };
    return [esc(k.helpTitle), ...k.help.map(row), "", `<span class="d">${esc(k.keys)}</span>`, ""];
  }

  /* LANG без параметра: список мов стовпчиком, поточна позначена ► */
  function langLines() {
    return [esc(c().langSet), "", ...LANGS.map((l) => (l === lang ? "► " : "  ") +
      tok(AIC.langCodes[l] || l.toUpperCase(), "lang " + l) + "  " +
      (l === lang ? `<span class="b">${esc(AIC.langNames[l])}</span>` : esc(AIC.langNames[l])))];
  }

  function typeHelpLine() {
    const [a, cmd, b] = c().typeHelp;
    return esc(a) + tok(cmd, "help") + esc(b);
  }

  function setMonitor(m) {
    monitor = m;
    store.set("aic-monitor", m);
    document.documentElement.dataset.monitor = m;
  }

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    document.title = t().title;
  }

  const history = [];
  let hIndex = 0;

  async function run(raw, { typed = false } = {}) {
    setBusy(true);
    if (typed) await typeIn(raw);
    else line(esc(PROMPT + raw));
    const cmdline = raw.trim();
    if (cmdline) {
      if (history[history.length - 1] !== cmdline) history.push(cmdline);
      hIndex = history.length;
      await execute(cmdline);
    }
    if (out.lastChild && out.lastChild.textContent !== "") line("");
    setBusy(false);
  }

  async function execute(cmdline) {
    const k = c();
    const [first, ...rest] = cmdline.split(/\s+/);
    const cmd = first.toUpperCase();
    const arg = rest.join(" ");

    switch (cmd) {
      case "HELP": case "?":
        return emit(helpLines());
      case "DIR":
        return emit(dirLines(/\/w/i.test(arg)));
      case "TYPE": {
        if (!arg) return emit([esc(k.missing)]);
        const f = findFile(arg);
        return emit(f ? fileLines(f) : [esc(k.notFound)]);
      }
      case "MAIL": case "MAIL.BAT":
        return emit(fileLines(FILES.find((f) => f.kind === "mail")));
      case "CLS":
        out.innerHTML = "";
        return;
      case "VER":
        return emit(["", esc(k.banner), esc(t().copyright), esc(t().legal), "Font: PxPlus IBM VGA 9x16, VileR, int10h.org (CC BY-SA 4.0)"]);
      case "DATE": {
        const d = new Date();
        const day = d.toLocaleDateString(lang, { weekday: "short" });
        const date = [d.getDate(), d.getMonth() + 1].map((n) => String(n).padStart(2, "0")).join(".") + "." + d.getFullYear();
        return emit([esc(k.date + day + " " + date)]);
      }
      case "TIME": {
        const d = new Date();
        const time = [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, "0")).join(":") +
          "," + String(Math.floor(d.getMilliseconds() / 10)).padStart(2, "0");
        return emit([esc(k.time + time)]);
      }
      case "LANG": {
        const l = findLang(arg);
        if (!l) return emit(langLines());
        setLang(l);
        return emit([esc(c().langSet), typeHelpLine()]);
      }
      case "COLOR": {
        if (!arg) setMonitor(MONITORS[(MONITORS.indexOf(monitor) + 1) % MONITORS.length]);
        else if (COLOR_CODES[arg.toUpperCase()]) setMonitor(COLOR_CODES[arg.toUpperCase()]);
        else return emit([esc(k.colorUsage)]);
        return emit([esc(k.colorSet + t().monitors[monitor])]);
      }
      case "ECHO":
        return emit([esc(arg || "ECHO is on")]);
      case "CD": case "CHDIR":
        if (!arg || arg === "." || arg === "\\" || arg.toUpperCase() === "C:\\ARTINTEL") return emit(["C:\\ARTINTEL"]);
        return emit([esc(k.badDir)]);
      case "BOOT": case "REBOOT":
        return boot();
      case "AI": case "FUTURE":
        location.href = AIC.url("ai", lang);
        return;
      case "WIN":
        await emit([""]);
        await sleep(200);
        location.href = AIC.url("win31", lang);
        return;
      case "MC":
        await emit(["Starting Midnight Commander..."]);
        await sleep(400);
        location.href = AIC.url("mc", lang);
        return;
      case "LINUX": case "REDHAT":
        await emit(["Booting Linux..."]);
        await sleep(400);
        location.href = AIC.url("linux", lang);
        return;
      case "LISA":
        await emit(["Starting ArtIntelliCo Office System..."]);
        await sleep(400);
        location.href = AIC.url("lisa", lang);
        return;
      case "APPLE": case "APPLE2":
        await emit(["Loading Apple ][..."]);
        await sleep(400);
        location.href = AIC.url("apple", lang);
        return;
      case "UNIX": case "TELNET":
        await emit(["Trying artintellico...", "Connected to artintellico."]);
        await sleep(500);
        location.href = AIC.url("unix", lang);
        return;
      case "NC": case "EXIT":
        await emit([esc(k.nc)]);
        await sleep(400);
        location.href = AIC.url("nc", lang);
        return;
    }

    const f = findFile(first);
    if (f) return emit(fileLines(f));
    return emit([esc(t().bad)]);
  }

  /* ---------- Клавіатура ---------- */
  function complete() {
    const v = input.value;
    const parts = v.split(" ");
    const word = parts[parts.length - 1].toUpperCase();
    if (!word) return;
    const pool = parts.length === 1 ? [...COMMANDS, ...FILES.map(fname)] : FILES.map(fname);
    const hits = pool.filter((x) => x.startsWith(word));
    if (!hits.length) return;
    let common = hits[0];
    for (const h of hits) while (!h.startsWith(common)) common = common.slice(0, -1);
    const lower = parts[parts.length - 1] === parts[parts.length - 1].toLowerCase();
    parts[parts.length - 1] = lower ? common.toLowerCase() : common;
    input.value = parts.join(" ") + (hits.length === 1 ? " " : "");
    if (hits.length > 1 && common.length === word.length) {
      line(esc(PROMPT + v));
      line(hits.map(esc).join("   "));
    }
    renderInput();
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { e.preventDefault(); complete(); return; }
    if (e.key === "Escape") { input.value = ""; renderInput(); return; }
    if (e.key === "F3") { e.preventDefault(); if (history.length) { input.value = history[history.length - 1]; renderInput(); } return; }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      hIndex = Math.max(0, Math.min(history.length, hIndex + (e.key === "ArrowUp" ? -1 : 1)));
      input.value = history[hIndex] || "";
      input.setSelectionRange(input.value.length, input.value.length);
      renderInput();
      return;
    }
    if (e.ctrlKey && (e.key === "l" || e.key === "L" || e.key === "д" || e.key === "Д")) {
      e.preventDefault();
      out.innerHTML = "";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (busy) return;
    const v = input.value;
    input.value = "";
    renderInput();
    run(v);
  });

  document.addEventListener("keydown", (e) => {
    if (busy) {
      if (!e.metaKey && !e.ctrlKey) { e.preventDefault(); flush(); }
      return;
    }
    if (e.key === "PageUp" || e.key === "PageDown") {
      e.preventDefault();
      screen.scrollBy(0, (e.key === "PageUp" ? -1 : 1) * screen.clientHeight * 0.8);
      return;
    }
    if (document.activeElement !== input && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      input.focus({ preventScroll: true });
    }
  });

  screen.addEventListener("click", (e) => {
    const b = e.target.closest(".tok");
    if (b) {
      if (busy) { flush(); return; }
      run(b.dataset.cmd);
      return;
    }
    if (busy) { flush(); return; }
    if (e.target.closest("a")) return;
    if (!String(getSelection())) input.focus({ preventScroll: true });
  });

  /* ---------- Завантаження ---------- */
  async function boot() {
    setBusy(true);
    out.innerHTML = "";
    const k = c();
    const skip = !reduced ? line(`<span class="d">${esc(k.skip)}</span>`) : null;
    await emit([
      "ArtIntelliCo Modular BIOS v4.06",
      "Copyright (C) 1987-2026, ArtIntelliCo LLC",
      "",
      "CPU            : 80286 at 12 MHz"
    ], 120);
    const mem = line("");
    for (let n = 0; n <= 640 && !flushing && !reduced; n += 32) {
      mem.textContent = "Memory Test    : " + n + "K";
      await sleep(30);
    }
    mem.textContent = "Memory Test    : 640K OK";
    await emit(["Fixed Disk 0   : ARTINTEL HDD, 40 MB", "", "Starting DOS...", ""], 220);
    await sleep(500);
    if (skip) skip.remove();
    out.innerHTML = "";
    store.set("aic-booted", "1", sessionStorage);
    flushing = false;
    await start();
  }

  async function start() {
    setBusy(true);
    await emit([esc(c().banner), "(C) Copyright ArtIntelliCo LLC 1987-2026", ""], 60);
    await typeIn("type readme.txt");
    await emit(fileLines(FILES[0]), 40);
    await emit(["", typeHelpLine(), ""]);
    setBusy(false);
  }

  setLang(lang);
  setMonitor(monitor);
  document.fonts.load('16px "IBM VGA"').finally(() => {
    if (reduced || store.get("aic-booted", sessionStorage)) start();
    else boot();
  });
})();
