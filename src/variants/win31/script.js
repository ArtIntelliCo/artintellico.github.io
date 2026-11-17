(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

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
        "  LANG <xx>       змінити мову",
        "  COLOR           змінити монітор",
        "  CLS             очистити екран",
        "  VER             версія",
        "  BOOT            перезавантажити",
        "  NC              повернутися до панелей",
        "  COMMAND         консольний режим",
        "  UNIX            термінал UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
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
        "  LANG <xx>       switch language",
        "  COLOR           switch monitor",
        "  CLS             clear screen",
        "  VER             version",
        "  BOOT            reboot",
        "  NC              back to the panels",
        "  COMMAND         console mode",
        "  UNIX            UNIX terminal",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
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
        "  LANG <xx>       сменить язык",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "  COMMAND         консольный режим",
        "  UNIX            терминал UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
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
      skip: "Drücken Sie eine beliebige Taste zum Überspringen",
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Geschäftsprozesse zu digitalisieren und zu automatisieren – mit modernen IT-Lösungen, die wir konzipieren und umsetzen.",
      heroLead: "Für Ihr Unternehmen",
      phrases: ["entwickeln wir SaaS-Plattformen", "bauen wir CRM- und ERP-Systeme", "setzen wir KI produktiv ein", "bringen wir Ihre Infrastruktur in die Cloud"],
      readmeDesc: "Über das Unternehmen",
      hint: "↑↓ Datei wählen   Enter öffnen   F1 Hilfe",
      discuss: "Projekt besprechen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Sie haben einen Vorschlag zur Zusammenarbeit oder möchten mehr über unsere Lösungen und Erfahrung erfahren? Schreiben Sie uns eine E-Mail.",
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
      back: "Geben Sie NC ein oder drücken Sie Esc, um zu den Feldern zurückzukehren.",
      help: [
        "Befehle:",
        "  DIR             Dateien auflisten",
        "  TYPE <datei>    Datei öffnen (oder nur ihren Namen eingeben)",
        "  MAIL            an uns schreiben",
        "  LANG <xx>       Sprache wechseln",
        "  COLOR           Monitor wechseln",
        "  CLS             Bildschirm löschen",
        "  VER             Version",
        "  BOOT            Neustart",
        "  NC              zurück zu den Feldern",
        "  COMMAND         Konsolenmodus",
        "  UNIX            UNIX-Terminal",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Tasten: ↑↓ Pos1 Ende Enter F1–F10 Esc Strg+O"
      ]
    },
    fr: {
      title: "ArtIntelliCo — développement logiciel et support informatique pour les entreprises",
      menu: ["Services", "Partenaires", "Contacts", "Langue :", "Moniteur :"],
      monitors: { ega: "EGA", green: "Vert", amber: "Ambre" },
      cols: ["Nom", "Description"],
      fkeys: ["Aide", "Langue", "Voir", "Mail", "", "", "", "", "Moniteur", "Quitter"],
      skip: "Appuyez sur une touche pour passer",
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en mettant en place des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous",
      phrases: ["développons des plateformes SaaS", "mettons en place des systèmes CRM et ERP", "mettons l'IA au travail", "migrons l'infrastructure vers le cloud"],
      readmeDesc: "À propos de l'entreprise",
      hint: "↑↓ choisir un fichier   Entrée ouvrir   F1 aide",
      discuss: "Parler de votre projet",
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience ? Écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      write: "Écrire un e-mail",
      copy: "Copier l'adresse",
      copied: "Adresse copiée",
      copyFailed: "Copie impossible. L'adresse est : " + EMAIL,
      cancel: "Annuler",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l'informatique. Nous savons comment elle fonctionne aujourd'hui — et nous comprenons où elle va demain.",
      source: "Version classique du site",
      bad: "Commande ou nom de fichier incorrect. Tapez HELP.",
      back: "Tapez NC ou appuyez sur Échap pour revenir aux panneaux.",
      help: [
        "Commandes :",
        "  DIR             liste des fichiers",
        "  TYPE <fichier>  ouvrir un fichier (ou tapez son nom)",
        "  MAIL            nous écrire",
        "  LANG <xx>       changer de langue",
        "  COLOR           changer de moniteur",
        "  CLS             effacer l'écran",
        "  VER             version",
        "  BOOT            redémarrer",
        "  NC              revenir aux panneaux",
        "  COMMAND         mode console",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Touches : ↑↓ Home End Entrée F1–F10 Échap Ctrl+O"
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
      phrases: ["creamos plataformas SaaS", "implantamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      hint: "↑↓ elegir archivo   Enter abrir   F1 ayuda",
      discuss: "Hablemos de su proyecto",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos un correo.",
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
        "  TYPE <archivo>  abrir un archivo (o escriba solo su nombre)",
        "  MAIL            escribirnos",
        "  LANG <xx>       cambiar de idioma",
        "  COLOR           cambiar de monitor",
        "  CLS             borrar la pantalla",
        "  VER             versión",
        "  BOOT            reiniciar",
        "  NC              volver a los paneles",
        "  COMMAND         modo consola",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Teclas: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
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
      phrases: ["desenvolvemos plataformas SaaS", "construímos sistemas CRM e ERP", "pomos a inteligência artificial a trabalhar", "levamos a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      hint: "↑↓ escolher ficheiro   Enter abrir   F1 ajuda",
      discuss: "Falar sobre o seu projeto",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, escreva-nos por e-mail.",
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
        "  DIR             listar ficheiros",
        "  TYPE <ficheiro> abrir um ficheiro (ou só o nome)",
        "  MAIL            escrever-nos",
        "  LANG <xx>       mudar de idioma",
        "  COLOR           mudar de monitor",
        "  CLS             limpar o ecrã",
        "  VER             versão",
        "  BOOT            reiniciar",
        "  NC              voltar aos painéis",
        "  COMMAND         modo de consola",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Teclas: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    it: {
      title: "ArtIntelliCo — sviluppo software e supporto IT per le aziende",
      menu: ["Servizi", "Partner", "Contatti", "Lingua:", "Monitor:"],
      monitors: { ega: "EGA", green: "Verde", amber: "Ambra" },
      cols: ["Nome", "Descrizione"],
      fkeys: ["Guida", "Lingua", "Vedi", "Posta", "", "", "", "", "Monitor", "Esci"],
      skip: "Premere un tasto per saltare",
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali, progettando e realizzando soluzioni IT moderne.",
      heroLead: "Per la Sua azienda",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo l'IA al lavoro", "portiamo l'infrastruttura nel cloud"],
      readmeDesc: "Chi siamo",
      hint: "↑↓ scegli file   Invio apri   F1 guida",
      discuss: "Parliamo del Suo progetto",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      write: "Scrivi un'e-mail",
      copy: "Copia indirizzo",
      copied: "Indirizzo copiato",
      copyFailed: "Impossibile copiare. L'indirizzo è " + EMAIL,
      cancel: "Annulla",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l'informatica. Sappiamo come funziona oggi e capiamo dove andrà domani.",
      source: "Versione classica del sito",
      bad: "Comando o nome di file non valido. Digitare HELP.",
      back: "Digitare NC o premere Esc per tornare ai pannelli.",
      help: [
        "Comandi:",
        "  DIR             elenco dei file",
        "  TYPE <file>     apre un file (basta anche il nome)",
        "  MAIL            scriverci",
        "  LANG <xx>       cambia lingua",
        "  COLOR           cambia monitor",
        "  CLS             pulisce lo schermo",
        "  VER             versione",
        "  BOOT            riavvia",
        "  NC              torna ai pannelli",
        "  COMMAND         modalità console",
        "  UNIX            terminale UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Tasti: ↑↓ Home End Invio F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Послуги як теми довідки WinHelp. {{ключ|текст}} — термін зі спливним поясненням із GLOSS */
  const SEE = [[1, 5], [6, 8, 0], [3, 8], [2, 8], [8, 0], [8, 0], [7, 9], [6, 8, 9], [5, 7, 2], [6, 8]];
  const SVC = {
    uk: {
      intro: "Ми не тримаємося за одну мову програмування чи платформу. Спершу з'ясовуємо, що саме треба зробити, а інструменти добираємо потім. Буває, що найкраща відповідь — готовий сервіс за підпискою; тоді ми так прямо й скажемо, а не продаватимемо вам розробку.",
      items: [
        {
          t: "Розробка концепції ІТ рішення",
          lead: "З'ясовуємо, яку задачу має розв'язати система, і записуємо вимоги так, щоб їх однаково розуміли і бізнес, і розробники.",
          body: "Найдорожча помилка в ІТ-проєкті стається ще до першого рядка коду: систему починають будувати під задачу, яку ніхто до ладу не сформулював. Тому ми говоримо не лише з керівником, а й з тими, хто працюватиме в системі щодня, — з бухгалтерією, складом, менеджерами.",
          note: "Іноді висновок такий: нічого не розробляти, а взяти готовий продукт і доналаштувати його. Це теж результат, хоч і не той, на який чекають, коли кличуть розробників.",
          inc: ["інтерв'ю з працівниками й розбір того, як процеси влаштовані зараз", "бізнес-вимоги та сценарії роботи", "чесне порівняння готових продуктів із розробкою на замовлення", "{{spec|технічне завдання}} з оцінкою строків і бюджету за етапами"],
          res: "Документ, з яким будь-яка команда, наша чи інша, може оцінити роботу й почати її."
        },
        {
          t: "Розробка SaaS рішень",
          lead: "Проєктуємо й розробляємо {{saas|SaaS}}-платформи — від першої версії для кількох пілотних клієнтів до сервісу, де в кожного клієнта свій простір, тариф і особистий кабінет.",
          body: "Гроші в SaaS приносить не код. Їх приносить те, наскільки легко новий клієнт реєструється, платить і починає працювати, жодного разу не подзвонивши в підтримку. {{tenant|Мультитенантність}}, {{billing|білінг}} і права доступу закладаємо з першого дня: переробляти їх потім, коли клієнти вже всередині, коштує в рази дорожче. А першу версію намагаємося випустити якомога раніше, бо живі користувачі дуже швидко показують, які функції були зайві.",
          inc: ["мультитенантна архітектура, де дані клієнтів ізольовані одні від одних", "реєстрація, тарифи, підписки, онлайн-оплата", "особисті кабінети, ролі й права доступу", "інтеграції та відкрите {{api|API}} для ваших клієнтів", "масштабування, коли навантаження росте"],
          res: "Продукт, який продається за підпискою, а не проєкт, який щоразу доводиться впроваджувати вручну."
        },
        {
          t: "Web-розробка",
          lead: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. Кожен робимо під його задачу, а не підганяємо під шаблон.",
          body: "Сайт для бізнесу оцінюють за заявками й замовленнями. Як він виглядає в портфоліо — справа десята. Тому ще до старту домовляємося, що вважати результатом, і налаштовуємо аналітику до запуску (а не через пів року, коли вже й порівнювати нема з чим). Технологію добираємо під задачу: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів просто не влізе.",
          inc: ["прототип і дизайн інтерфейсів", "frontend, backend і панель адміністрування", "інтеграція з оплатою, доставкою, {{crm|CRM}} та обліковими системами", "{{seo|SEO}}-основа, швидке завантаження сторінок, аналітика", "запуск, а далі супровід"],
          res: "Вебсервіс, про який ви точно знаєте, скільки заявок і грошей він приносить."
        },
        {
          t: "Мобільні застосунки",
          lead: "Застосунки для iOS та Android, а заразом усе, що за ними стоїть: серверна частина й панель адміністрування.",
          body: "Застосунок виправдовує себе, коли клієнт повертається до нього регулярно: замовляє вдруге, стежить за статусом, збирає бонуси. Між {{native|нативною та кросплатформною}} розробкою обираємо за бюджетом і за тим, наскільки застосунку потрібні камера, геолокація й робота без мережі.",
          note: "Якщо людина відкриває ваш застосунок раз на рік, зручний мобільний сайт обійдеться дешевше. Ми скажемо про це до початку робіт, а не після публікації.",
          inc: ["застосунки для iOS та Android", "серверна частина й {{api|API}}", "адмінпанель для контенту, замовлень і користувачів", "{{push|push-сповіщення}} та аналітика", "публікація в App Store і Google Play"],
          res: "Застосунок, який проходить модерацію магазинів і яким ваша команда керує сама, не смикаючи розробника."
        },
        {
          t: "Рішення зі штучним інтелектом",
          lead: "Автоматизуємо бізнес-процеси за допомогою {{agent|ШІ-агентів}}. Штучний інтелект і машинне навчання ставимо туди, де вони заощаджують час працівників або гроші компанії, і більше нікуди.",
          body: "Там, де люди годинами розбирають листи, документи й звернення, {{llm|мовні моделі}} справді знімають рутину. Починаємо з {{pilot|пілота}} на ваших даних: цифри точності ви бачите до основної розробки, а не після неї.",
          note: "До ШІ ми ставимося скептичніше за багатьох. Приблизно половина ідей «а давайте додамо нейромережу» розв'язується звичайною автоматизацією, без жодної моделі.",
          inc: ["ШІ-агенти, що самі проходять рутинні кроки процесу: розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання й розбір документів", "класифікація звернень, пошук у базі знань", "прогноз попиту, аналіз даних", "пілот, де якість міряють на ваших даних"],
          res: "Конкретна ділянка роботи, яку раніше тягнули люди, переходить до системи, а контроль лишається за людиною."
        },
        {
          t: "Розробка CRM та ERP",
          lead: "{{crm|CRM}} та {{erp|ERP}} системи, збудовані навколо ваших процесів. Підлаштовувати бізнес під програму не доведеться.",
          body: "Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», власне рішення виходить дешевшим. Дані зі старих систем і таблиць переносимо самі, а запускаємо по відділах, щоб робота не зупинилася ні на день.",
          note: "Коробкова CRM цілком годиться, доки ваш процес схожий на стандартний. Якщо так і є, ми порадимо її, а не розробку.",
          inc: ["модулі продажів, складу, виробництва, фінансів — ті, що справді потрібні", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією та поштою"],
          res: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижня звіти з кожного відділу."
        },
        {
          t: "Хмарні рішення",
          lead: "Переносимо інфраструктуру до {{aws|Amazon Web Services}}, повністю або частинами, і пильнуємо, щоб після переїзду вона працювала й не дорожчала без причини.",
          body: "Хмара вигідна, коли навантаження стрибає, коли потрібна {{failover|відмовостійкість}} або коли нове середовище має підніматися за хвилини, а не за тиждень. Тому переїзд починається з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є {{rollback|план відкату}}.",
          note: "Хмара не завжди дешевша за власний сервер. Якщо розрахунок покаже, що вам вигідніше лишитися на своєму залізі, ви про це дізнаєтеся.",
          inc: ["аудит поточної інфраструктури й розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервне копіювання та моніторинг", "оптимізація витрат, коли переїзд позаду"],
          res: "Інфраструктура, яка переживе відмову сервера, і рахунок за хмару, який ви можете прочитати й зрозуміти."
        },
        {
          t: "Інфраструктура компанії на базі Red Hat",
          lead: "Будуємо ІТ-інфраструктуру компанії на рішеннях Red Hat: сервери на {{rhel|Red Hat Enterprise Linux}}, застосунки на контейнерній платформі {{openshift|OpenShift}}, налаштування через {{ansible|Ansible}}.",
          body: "Red Hat беруть тоді, коли інфраструктура має працювати роками й проходити аудити, а не триматися на пам'яті одного адміністратора (який теж іноді йде у відпустку). Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux розрахований на десять років. Інфраструктуру проєктуємо під ваші навантаження, а конфігурацію кожного сервера описуємо в Ansible, тож будь-який із них можна перезібрати за сценарієм, нічого не пригадуючи.",
          note: "Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися.",
          inc: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux, оновлення централізовано через {{satellite|Red Hat Satellite}}", "OpenShift для ваших застосунків", "автоматизація налаштування й розгортання в Ansible", "облікові записи й доступи в одному місці — {{idm|Identity Management}}", "моніторинг, резервні копії й документація для вашої команди"],
          res: "Інфраструктура, яку можна перевірити, відтворити й передати іншій команді, і знання при цьому нікуди не зникнуть."
        },
        {
          t: "API та інтеграції",
          lead: "Розробляємо {{api|API}} для ваших систем і з'єднуємо їх із сервісами, якими ви вже користуєтеся.",
          body: "Біль, який ми бачимо найчастіше: дані вводять двічі. Замовлення із сайту хтось руками переносить в облікову систему, оплати звіряють у таблиці. Інтеграція забирає цю роботу, а разом із нею й помилки, які вона плодить. Окремо ставимо моніторинг: коли партнер змінює свій API, інтеграція ламається тихо, і краще дізнатися про це від системи, ніж від клієнта.",
          inc: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM та обліком", "обмін даними між вашими внутрішніми системами", "{{queue|черги й повторні спроби}} на випадок збоїв", "моніторинг і сповіщення"],
          res: "Дані вводять один раз, а далі вони самі потрапляють туди, де потрібні."
        },
        {
          t: "Технічна підтримка",
          lead: "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, зокрема ті, які писали не ми.",
          body: "Виправлення помилок — лише частина роботи. Сюди ж належать оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася від іншого підрядника, починаємо з аудиту й документації, бо без неї кожна правка перетворюється на лотерею.",
          inc: ["моніторинг доступності й помилок", "виправлення помилок, оновлення безпеки", "резервні копії та перевірка, що з них справді можна відновитися", "доопрацювання й нові функції за планом", "аудит і документація систем, які писали інші"],
          res: "Система працює, а поруч є команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      intro: "We don't tie ourselves to one programming language or platform. First we work out what actually needs doing; the tools come after. Sometimes the best answer is an off-the-shelf subscription service, and then we'll tell you so rather than sell you a build.",
      items: [
        {
          t: "IT solution concept",
          lead: "We work out what problem the system has to solve and write the requirements so that the business and the developers read them the same way.",
          body: "The most expensive mistake in an IT project happens before anyone writes a line of code: the system gets built for a problem nobody ever pinned down. So we don't only talk to the person signing off. We talk to the people who'll use it every day — accounting, the warehouse, the sales managers.",
          note: "Sometimes the conclusion is to build nothing and configure an existing product instead. That's a result too, just not the one people expect when they call in developers.",
          inc: ["interviews with staff and a walkthrough of how things work today", "business requirements and user scenarios", "an honest comparison of ready-made products against custom development", "a {{spec|specification}} with time and budget estimates for each phase"],
          res: "A document any team, ours or someone else's, can estimate from and start building."
        },
        {
          t: "SaaS development",
          lead: "We design and build {{saas|SaaS}} platforms, from a first version for a handful of pilot customers to a service where every customer has their own workspace, plan and dashboard.",
          body: "The money in SaaS isn't in the code. It's in how easily a new customer signs up, pays and gets going without ever calling support. We put {{tenant|multi-tenancy}}, {{billing|billing}} and permissions in from day one, because bolting them on once customers are inside costs several times more. And we try to ship the first version early: real users are quick to show you which features nobody needed.",
          inc: ["multi-tenant architecture that keeps each customer's data apart", "sign-up, plans, subscriptions and online payments", "customer dashboards, roles and permissions", "integrations and a public {{api|API}} for your customers", "scaling as the load grows"],
          res: "A product you sell by subscription, not a project you have to roll out by hand every time."
        },
        {
          t: "Web development",
          lead: "Corporate sites, marketplaces, online stores, booking systems, internal web tools. Each one is built around its own task instead of being squeezed into a template.",
          body: "A business website is judged by leads and orders. How it looks in a portfolio barely matters. So before we start we agree on what counts as a result, and analytics goes in before launch (not six months later, when there's nothing left to compare against). The technology follows the task: a landing page has no use for a heavy platform, and a marketplace simply won't fit in a website builder.",
          inc: ["prototype and interface design", "frontend, backend and admin panel", "integrations with payments, delivery, {{crm|CRM}} and accounting systems", "{{seo|SEO}} groundwork, fast page loads, analytics", "launch, then ongoing support"],
          res: "A web service where you know exactly how many leads and how much revenue it brings in."
        },
        {
          t: "Mobile apps",
          lead: "iOS and Android apps, plus everything behind them: the server side and the admin panel.",
          body: "An app earns its keep when customers come back to it regularly — reordering, tracking a delivery, collecting loyalty points. Whether we go {{native|native or cross-platform}} depends on the budget and on how much the app needs the camera, location and offline mode.",
          note: "If someone opens your app once a year, a good mobile website will cost you less. We'll say so before work starts, not after the app is in the store.",
          inc: ["iOS and Android apps", "server side and {{api|API}}", "an admin panel for content, orders and users", "{{push|push notifications}} and analytics", "publishing to the App Store and Google Play"],
          res: "An app that passes store review and that your team runs on its own, without phoning a developer."
        },
        {
          t: "AI-powered solutions",
          lead: "We automate business processes with {{agent|AI agents}}. Artificial intelligence and machine learning go where they save staff time or company money, and nowhere else.",
          body: "Where people spend hours sorting emails, documents and support requests, {{llm|language models}} really do take the routine off their plate. We start with a {{pilot|pilot}} on your own data, so you see accuracy figures before the main build, not after it.",
          note: "We're more sceptical about AI than most. Roughly half of the “let's add a neural network” ideas get solved by ordinary automation, no model required.",
          inc: ["AI agents that work through the routine steps of a process by themselves: sorting incoming requests, filling in the CRM, drafting replies to customers", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification and knowledge-base search", "demand forecasting and data analysis", "a pilot where quality is measured on your data"],
          res: "A specific piece of work that people used to grind through moves to the system, and a person stays in control."
        },
        {
          t: "CRM and ERP development",
          lead: "{{crm|CRM}} and {{erp|ERP}} systems built around the way your business runs. You won't have to bend the business to fit the software.",
          body: "When managers keep half their work in spreadsheets because the system “can't do that”, building your own becomes the cheaper option. We move the data over from old systems and spreadsheets ourselves and roll out one department at a time, so work doesn't stop for a single day.",
          note: "Off-the-shelf CRM is perfectly fine as long as your process looks standard. If it does, we'll recommend that instead of a build.",
          inc: ["sales, warehouse, production and finance modules — the ones you actually need", "roles, permissions and an audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony and email"],
          res: "One system instead of a zoo of spreadsheets. Management can see where things stand without chasing a weekly report from every department."
        },
        {
          t: "Cloud solutions",
          lead: "We move your infrastructure to {{aws|Amazon Web Services}}, all of it or in parts, and keep an eye on it afterwards so it keeps running and doesn't get pricier for no reason.",
          body: "The cloud pays off when load jumps around, when you need {{failover|fault tolerance}}, or when a new environment should be up in minutes rather than a week. That's why a migration starts with an audit and a cost estimate. The move happens in stages, with a {{rollback|rollback plan}} at every step.",
          note: "The cloud isn't always cheaper than your own server. If the numbers say you're better off staying on your own hardware, you'll hear that from us.",
          inc: ["audit of the current infrastructure and a cost estimate", "AWS architecture and a migration plan", "moving servers, databases and files", "backups and monitoring", "cost optimisation once the move is done"],
          res: "Infrastructure that survives a server failure, and a cloud bill you can read and understand."
        },
        {
          t: "Company infrastructure on Red Hat",
          lead: "We build your company's IT infrastructure on Red Hat: servers on {{rhel|Red Hat Enterprise Linux}}, applications on the {{openshift|OpenShift}} container platform, configuration through {{ansible|Ansible}}.",
          body: "Companies go with Red Hat when infrastructure has to run for years and pass audits instead of living in one administrator's head (and administrators do take holidays). The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years. We design the infrastructure around your workloads and describe every server's configuration in Ansible, so any of them can be rebuilt from a playbook, with nobody trying to remember how it was done.",
          note: "Red Hat is our partner, so we can also help you sort out subscriptions and vendor support.",
          inc: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout, with updates managed centrally through {{satellite|Red Hat Satellite}}", "OpenShift for your applications", "configuration and deployment automation in Ansible", "accounts and access in one place with {{idm|Identity Management}}", "monitoring, backups and documentation for your team"],
          res: "Infrastructure you can audit, reproduce and hand to another team without the knowledge walking out the door."
        },
        {
          t: "APIs and integrations",
          lead: "We design {{api|APIs}} for your systems and connect them to the services you already use.",
          body: "The pain we see most often is data typed in twice. Someone re-enters website orders into the accounting system by hand; payments get reconciled in a spreadsheet. An integration takes that work away, along with the mistakes it breeds. We also set up monitoring, because when a partner changes their API the integration breaks quietly, and you'd rather hear it from the system than from a customer.",
          inc: ["API design and documentation", "integrations with payment providers, delivery services, CRM and accounting", "data exchange between your internal systems", "{{queue|queues and retries}} for when something fails", "monitoring and alerts"],
          res: "Data gets entered once and finds its own way to wherever it's needed."
        },
        {
          t: "Technical support",
          lead: "We look after your IT systems and keep developing them, including the ones we didn't build.",
          body: "Fixing bugs is only part of the job. There are also updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and documentation, because without it every change is a gamble.",
          inc: ["availability and error monitoring", "bug fixes and security updates", "backups, and checks that you can actually restore from them", "planned improvements and new features", "audit and documentation of systems built by others"],
          res: "The system works, and there's a team nearby that knows how it's put together."
        }
      ]
    },
    ru: {
      intro: "Мы не держимся за один язык программирования или платформу. Сначала выясняем, что именно нужно сделать, а инструменты подбираем потом. Бывает, что лучший ответ — готовый сервис по подписке; тогда мы так прямо и скажем, а не станем продавать вам разработку.",
      items: [
        {
          t: "Разработка концепции ИТ решения",
          lead: "Выясняем, какую задачу должна решать система, и записываем требования так, чтобы их одинаково понимали и бизнес, и разработчики.",
          body: "Самая дорогая ошибка в ИТ-проекте случается ещё до первой строки кода: систему начинают строить под задачу, которую толком никто не сформулировал. Поэтому мы разговариваем не только с руководителем, но и с теми, кто будет работать в системе каждый день, — с бухгалтерией, складом, менеджерами.",
          note: "Иногда вывод такой: ничего не разрабатывать, а взять готовый продукт и донастроить его. Это тоже результат, хотя и не тот, которого ждут, когда зовут разработчиков.",
          inc: ["интервью с сотрудниками и разбор того, как процессы устроены сейчас", "бизнес-требования и сценарии работы", "честное сравнение готовых продуктов с заказной разработкой", "{{spec|техническое задание}} с оценкой сроков и бюджета по этапам"],
          res: "Документ, с которым любая команда, наша или чужая, сможет оценить работу и начать её."
        },
        {
          t: "Разработка SaaS решений",
          lead: "Проектируем и разрабатываем {{saas|SaaS}}-платформы — от первой версии для нескольких пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и личный кабинет.",
          body: "Деньги в SaaS приносит не код. Их приносит то, насколько легко новый клиент регистрируется, платит и начинает работать, ни разу не позвонив в поддержку. {{tenant|Мультитенантность}}, {{billing|биллинг}} и права доступа закладываем с первого дня: переделывать их потом, когда клиенты уже внутри, в разы дороже. А первую версию стараемся выпустить пораньше — живые пользователи быстро показывают, какие функции были лишними.",
          inc: ["мультитенантная архитектура, где данные клиентов изолированы друг от друга", "регистрация, тарифы, подписки, онлайн-оплата", "личные кабинеты, роли и права доступа", "интеграции и открытое {{api|API}} для ваших клиентов", "масштабирование, когда нагрузка растёт"],
          res: "Продукт, который продаётся по подписке, а не проект, который каждый раз приходится внедрять вручную."
        },
        {
          t: "Web-разработка",
          lead: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. Каждый делаем под его задачу, а не подгоняем под шаблон.",
          body: "Сайт для бизнеса оценивают по заявкам и заказам. Как он смотрится в портфолио — дело десятое. Поэтому ещё до старта договариваемся, что считать результатом, и настраиваем аналитику до запуска (а не через полгода, когда уже и сравнивать не с чем). Технологию подбираем под задачу: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов просто не влезет.",
          inc: ["прототип и дизайн интерфейсов", "frontend, backend и панель администрирования", "интеграция с оплатой, доставкой, {{crm|CRM}} и учётными системами", "{{seo|SEO}}-основа, быстрая загрузка страниц, аналитика", "запуск, а дальше сопровождение"],
          res: "Веб-сервис, про который вы точно знаете, сколько заявок и денег он приносит."
        },
        {
          t: "Мобильные приложения",
          lead: "Приложения для iOS и Android, а заодно всё, что за ними стоит: серверная часть и панель администрирования.",
          body: "Приложение оправдывает себя, когда клиент возвращается к нему регулярно: заказывает повторно, следит за статусом, копит бонусы. Между {{native|нативной и кроссплатформенной}} разработкой выбираем по бюджету и по тому, насколько приложению нужны камера, геолокация и работа без сети.",
          note: "Если человек открывает ваше приложение раз в год, удобный мобильный сайт обойдётся дешевле. Мы скажем об этом до начала работ, а не после публикации.",
          inc: ["приложения для iOS и Android", "серверная часть и {{api|API}}", "админ-панель для контента, заказов и пользователей", "{{push|push-уведомления}} и аналитика", "публикация в App Store и Google Play"],
          res: "Приложение, которое проходит модерацию магазинов и которым ваша команда управляет сама, не дёргая разработчика."
        },
        {
          t: "Решения с искусственным интеллектом",
          lead: "Автоматизируем бизнес-процессы с помощью {{agent|ИИ-агентов}}. Искусственный интеллект и машинное обучение ставим туда, где они экономят время сотрудников или деньги компании, и больше никуда.",
          body: "Там, где люди часами разбирают письма, документы и обращения, {{llm|языковые модели}} действительно снимают рутину. Начинаем с {{pilot|пилота}} на ваших данных: цифры точности вы видите до основной разработки, а не после неё.",
          note: "К ИИ мы относимся скептичнее многих. Примерно половина идей «а давайте добавим нейросеть» решается обычной автоматизацией, безо всякой модели.",
          inc: ["ИИ-агенты, которые сами проходят рутинные шаги процесса: разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогноз спроса, анализ данных", "пилот, где качество меряют на ваших данных"],
          res: "Конкретный участок работы, который раньше тянули люди, переходит к системе, а контроль остаётся за человеком."
        },
        {
          t: "Разработка CRM и ERP",
          lead: "{{crm|CRM}}- и {{erp|ERP}}-системы, построенные вокруг ваших процессов. Подстраивать бизнес под программу не придётся.",
          body: "Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», своё решение выходит дешевле. Данные из старых систем и таблиц переносим сами, а запускаем по отделам, чтобы работа не встала ни на день.",
          note: "Коробочная CRM вполне годится, пока ваш процесс похож на стандартный. Если так и есть, мы посоветуем её, а не разработку.",
          inc: ["модули продаж, склада, производства, финансов — те, что действительно нужны", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией и почтой"],
          res: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, и не собирает каждую неделю отчёты с каждого отдела."
        },
        {
          t: "Облачные решения",
          lead: "Переносим инфраструктуру в {{aws|Amazon Web Services}}, целиком или частями, и следим, чтобы после переезда она работала и не дорожала без причины.",
          body: "Облако выгодно, когда нагрузка скачет, когда нужна {{failover|отказоустойчивость}} или когда новое окружение должно подниматься за минуты, а не за неделю. Поэтому переезд начинается с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть {{rollback|план отката}}.",
          note: "Облако не всегда дешевле своего сервера. Если расчёт покажет, что вам выгоднее остаться на своём железе, вы об этом узнаете.",
          inc: ["аудит текущей инфраструктуры и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервное копирование и мониторинг", "оптимизация расходов, когда переезд позади"],
          res: "Инфраструктура, которая переживёт отказ сервера, и счёт за облако, который вы можете прочитать и понять."
        },
        {
          t: "Инфраструктура компании на базе Red Hat",
          lead: "Строим ИТ-инфраструктуру компании на решениях Red Hat: серверы на {{rhel|Red Hat Enterprise Linux}}, приложения на контейнерной платформе {{openshift|OpenShift}}, настройка через {{ansible|Ansible}}.",
          body: "Red Hat берут тогда, когда инфраструктура должна работать годами и проходить аудиты, а не держаться на памяти одного администратора (который тоже иногда уходит в отпуск). Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux рассчитан на десять лет. Инфраструктуру проектируем под ваши нагрузки, а конфигурацию каждого сервера описываем в Ansible, так что любой из них можно пересобрать по сценарию, ничего не вспоминая.",
          note: "Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться.",
          inc: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux, обновления централизованно через {{satellite|Red Hat Satellite}}", "OpenShift для ваших приложений", "автоматизация настройки и развёртывания в Ansible", "учётные записи и доступы в одном месте — {{idm|Identity Management}}", "мониторинг, резервные копии и документация для вашей команды"],
          res: "Инфраструктура, которую можно проверить, воспроизвести и передать другой команде, и знания при этом никуда не денутся."
        },
        {
          t: "API и интеграции",
          lead: "Разрабатываем {{api|API}} для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          body: "Боль, которую мы видим чаще всего: данные вводят дважды. Заказ с сайта кто-то руками переносит в учётную систему, оплаты сверяют в таблице. Интеграция забирает эту работу, а вместе с ней и ошибки, которые она плодит. Отдельно ставим мониторинг: когда партнёр меняет свой API, интеграция ломается тихо, и лучше узнать об этом от системы, чем от клиента.",
          inc: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM и учётом", "обмен данными между вашими внутренними системами", "{{queue|очереди и повторные попытки}} на случай сбоев", "мониторинг и оповещения"],
          res: "Данные вводят один раз, а дальше они сами попадают туда, где нужны."
        },
        {
          t: "Техническая поддержка",
          lead: "Поддерживаем ваши ИТ-системы и развиваем их дальше, в том числе те, которые писали не мы.",
          body: "Исправление ошибок — только часть работы. Сюда же входят обновления, которые закрывают уязвимости, мониторинг, который замечает проблему раньше пользователей, и мелкие доработки по ходу. Если система досталась от другого подрядчика, начинаем с аудита и документации, потому что без неё каждая правка превращается в лотерею.",
          inc: ["мониторинг доступности и ошибок", "исправление ошибок, обновления безопасности", "резервные копии и проверка, что из них действительно можно восстановиться", "доработки и новые функции по плану", "аудит и документация систем, которые писали другие"],
          res: "Система работает, а рядом есть команда, которая знает, как она устроена."
        }
      ]
    },
    de: {
      intro: "Wir legen uns nicht auf eine Programmiersprache oder Plattform fest. Zuerst klären wir, was tatsächlich zu tun ist; die Werkzeuge kommen danach. Manchmal ist die beste Antwort ein fertiger Dienst im Abonnement – dann sagen wir Ihnen das auch, statt Ihnen eine Entwicklung zu verkaufen.",
      items: [
        {
          t: "Konzeption von IT-Lösungen",
          lead: "Wir klären, welches Problem das System lösen soll, und schreiben die Anforderungen so auf, dass Fachabteilung und Entwickler sie gleich verstehen.",
          body: "Der teuerste Fehler in einem IT-Projekt passiert, bevor die erste Zeile Code geschrieben ist: Das System wird für eine Aufgabe gebaut, die nie jemand sauber formuliert hat. Deshalb sprechen wir nicht nur mit der Person, die unterschreibt, sondern auch mit denen, die jeden Tag damit arbeiten werden – Buchhaltung, Lager, Vertrieb.",
          note: "Manchmal lautet das Ergebnis: nichts entwickeln, sondern ein fertiges Produkt nehmen und passend einrichten. Auch das ist ein Ergebnis, nur nicht das, mit dem man rechnet, wenn man Entwickler ins Haus holt.",
          inc: ["Gespräche mit Mitarbeitern und eine Bestandsaufnahme, wie die Abläufe heute funktionieren", "fachliche Anforderungen und Anwendungsszenarien", "ein ehrlicher Vergleich von Standardprodukten und Individualentwicklung", "ein {{spec|Pflichtenheft}} mit Zeit- und Budgetschätzung für jede Phase"],
          res: "Ein Dokument, mit dem jedes Team, unseres oder ein anderes, den Aufwand schätzen und loslegen kann."
        },
        {
          t: "SaaS-Entwicklung",
          lead: "Wir konzipieren und entwickeln {{saas|SaaS}}-Plattformen – von der ersten Version für eine Handvoll Pilotkunden bis zum Dienst, in dem jeder Kunde seinen eigenen Bereich, Tarif und Kundenzugang hat.",
          body: "Das Geld in SaaS steckt nicht im Code. Es steckt darin, wie leicht sich ein neuer Kunde registriert, bezahlt und loslegt, ohne je beim Support anzurufen. {{tenant|Mandantenfähigkeit}}, {{billing|Abrechnung}} und Berechtigungen planen wir vom ersten Tag an ein, denn sie nachzurüsten, wenn die Kunden schon drin sind, kostet ein Vielfaches. Und die erste Version bringen wir möglichst früh heraus: Echte Nutzer zeigen schnell, welche Funktionen niemand gebraucht hat.",
          inc: ["mandantenfähige Architektur, die die Daten jedes Kunden getrennt hält", "Registrierung, Tarife, Abonnements und Online-Zahlung", "Kundenbereiche, Rollen und Berechtigungen", "Integrationen und eine öffentliche {{api|API}} für Ihre Kunden", "Skalierung, wenn die Last wächst"],
          res: "Ein Produkt, das Sie im Abonnement verkaufen, statt eines Projekts, das jedes Mal von Hand eingeführt werden muss."
        },
        {
          t: "Webentwicklung",
          lead: "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme, interne Webanwendungen. Jede wird um ihre eigene Aufgabe herum gebaut, statt in eine Vorlage gepresst zu werden.",
          body: "Eine Unternehmenswebsite misst man an Anfragen und Bestellungen. Wie sie im Portfolio aussieht, spielt kaum eine Rolle. Deshalb vereinbaren wir vor dem Start, was als Ergebnis zählt, und richten die Webanalyse vor dem Launch ein (nicht ein halbes Jahr später, wenn es nichts mehr zu vergleichen gibt). Die Technik richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt schlicht nicht in einen Website-Baukasten.",
          inc: ["Prototyp und Oberflächendesign", "Frontend, Backend und Administrationsbereich", "Anbindung an Zahlung, Versand, {{crm|CRM}} und Buchhaltungssysteme", "{{seo|SEO}}-Grundlagen, schnelle Ladezeiten, Webanalyse", "Launch und anschließende Betreuung"],
          res: "Ein Webdienst, bei dem Sie genau wissen, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        {
          t: "Mobile Apps",
          lead: "Apps für iOS und Android und alles, was dahintersteht: das Backend und der Administrationsbereich.",
          body: "Eine App lohnt sich, wenn Kunden regelmäßig zu ihr zurückkehren – nachbestellen, eine Lieferung verfolgen, Bonuspunkte sammeln. Ob {{native|nativ oder plattformübergreifend}}, entscheiden wir nach Budget und danach, wie sehr die App Kamera, Standort und Offline-Betrieb braucht.",
          note: "Wenn jemand Ihre App einmal im Jahr öffnet, kommt Sie eine gute mobile Website günstiger. Das sagen wir Ihnen vor Projektbeginn, nicht erst, wenn die App im Store ist.",
          inc: ["Apps für iOS und Android", "Backend und {{api|API}}", "ein Administrationsbereich für Inhalte, Bestellungen und Nutzer", "{{push|Push-Benachrichtigungen}} und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          res: "Eine App, die die Store-Prüfung besteht und die Ihr Team selbst betreibt, ohne ständig beim Entwickler anzurufen."
        },
        {
          t: "KI-Lösungen",
          lead: "Wir automatisieren Geschäftsprozesse mit {{agent|KI-Agenten}}. Künstliche Intelligenz und maschinelles Lernen setzen wir dort ein, wo sie Arbeitszeit oder Geld sparen, und nirgendwo sonst.",
          body: "Wo Menschen stundenlang E-Mails, Dokumente und Anfragen sortieren, nehmen {{llm|Sprachmodelle}} ihnen die Routine tatsächlich ab. Wir beginnen mit einem {{pilot|Pilotprojekt}} auf Ihren eigenen Daten, damit Sie die Trefferquote vor der eigentlichen Entwicklung sehen, nicht danach.",
          note: "Wir sehen KI skeptischer als die meisten. Ungefähr die Hälfte der Ideen nach dem Muster „Bauen wir doch ein neuronales Netz ein“ lässt sich mit ganz normaler Automatisierung lösen, ganz ohne Modell.",
          inc: ["KI-Agenten, die Routineschritte eines Prozesses selbstständig erledigen: eingehende Anfragen sortieren, das CRM befüllen, Antworten an Kunden vorbereiten", "Chatbots und Assistenten für Kunden und Mitarbeiter", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen und Suche in der Wissensdatenbank", "Bedarfsprognosen und Datenanalyse", "ein Pilotprojekt, bei dem die Qualität an Ihren Daten gemessen wird"],
          res: "Ein konkreter Arbeitsbereich, den bisher Menschen mühsam erledigt haben, geht an das System über, und die Kontrolle bleibt beim Menschen."
        },
        {
          t: "CRM- und ERP-Entwicklung",
          lead: "{{crm|CRM}}- und {{erp|ERP}}-Systeme, die um Ihre Abläufe herum gebaut sind. Sie müssen Ihr Unternehmen nicht an die Software anpassen.",
          body: "Wenn der Vertrieb die Hälfte seiner Arbeit in Tabellen erledigt, weil das System „das nicht kann“, wird eine eigene Lösung zur günstigeren Variante. Die Daten aus Altsystemen und Tabellen übernehmen wir selbst, und eingeführt wird Abteilung für Abteilung, damit die Arbeit keinen einzigen Tag stillsteht.",
          note: "Ein Standard-CRM ist völlig in Ordnung, solange Ihr Prozess dem Standard ähnelt. Wenn das so ist, empfehlen wir Ihnen das statt einer Entwicklung.",
          inc: ["Module für Vertrieb, Lager, Produktion und Finanzen – nur die, die Sie wirklich brauchen", "Rollen, Berechtigungen und Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie und E-Mail"],
          res: "Ein System statt eines Zoos aus Tabellen. Die Geschäftsführung sieht, wo die Dinge stehen, ohne jede Woche jeder Abteilung einem Bericht hinterherzulaufen."
        },
        {
          t: "Cloud-Lösungen",
          lead: "Wir bringen Ihre Infrastruktur zu {{aws|Amazon Web Services}}, ganz oder in Teilen, und behalten sie danach im Blick, damit sie läuft und nicht ohne Grund teurer wird.",
          body: "Die Cloud rechnet sich, wenn die Last stark schwankt, wenn Sie {{failover|Ausfallsicherheit}} brauchen oder wenn eine neue Umgebung in Minuten statt in einer Woche stehen soll. Deshalb beginnt eine Migration mit einer Bestandsaufnahme und einer Kostenschätzung. Umgezogen wird schrittweise, mit einem {{rollback|Rückfallplan}} für jeden Schritt.",
          note: "Die Cloud ist nicht immer günstiger als der eigene Server. Wenn die Zahlen sagen, dass Sie mit Ihrer eigenen Hardware besser fahren, hören Sie das von uns.",
          inc: ["Prüfung der bestehenden Infrastruktur und Kostenschätzung", "AWS-Architektur und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Datensicherung und Monitoring", "Kostenoptimierung nach abgeschlossenem Umzug"],
          res: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie lesen und verstehen können."
        },
        {
          t: "Unternehmensinfrastruktur auf Red Hat",
          lead: "Wir bauen die IT-Infrastruktur Ihres Unternehmens auf Red Hat auf: Server mit {{rhel|Red Hat Enterprise Linux}}, Anwendungen auf der Container-Plattform {{openshift|OpenShift}}, Konfiguration über {{ansible|Ansible}}.",
          body: "Unternehmen entscheiden sich für Red Hat, wenn die Infrastruktur jahrelang laufen und Audits bestehen muss, statt im Kopf eines einzigen Administrators zu leben (und auch Administratoren gehen mal in den Urlaub). Das Abonnement rechnet sich durch den Herstellersupport und den langen Lebenszyklus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt. Wir planen die Infrastruktur nach Ihren Lasten und beschreiben die Konfiguration jedes Servers in Ansible, sodass sich jeder davon per Playbook neu aufbauen lässt, ohne dass jemand nachgrübeln muss, wie es damals gemacht wurde.",
          note: "Red Hat ist unser Partner, deshalb helfen wir Ihnen auch bei Abonnements und Herstellersupport.",
          inc: ["Prüfung Ihrer bestehenden Server und ein Umstellungsplan", "Einführung von Red Hat Enterprise Linux, Updates zentral verwaltet über {{satellite|Red Hat Satellite}}", "OpenShift für Ihre Anwendungen", "Automatisierung von Konfiguration und Deployment mit Ansible", "Konten und Zugriffsrechte an einer Stelle mit {{idm|Identity Management}}", "Monitoring, Datensicherung und Dokumentation für Ihr Team"],
          res: "Eine Infrastruktur, die Sie prüfen, nachbauen und einem anderen Team übergeben können, ohne dass das Wissen mit einem Mitarbeiter zur Tür hinausgeht."
        },
        {
          t: "APIs und Integrationen",
          lead: "Wir entwickeln {{api|APIs}} für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
          body: "Das Problem, das wir am häufigsten sehen: Daten werden doppelt erfasst. Jemand tippt Bestellungen aus dem Onlineshop von Hand in die Buchhaltung ab, Zahlungen werden in einer Tabelle abgeglichen. Eine Integration nimmt diese Arbeit ab und mit ihr die Fehler, die dabei entstehen. Außerdem richten wir ein Monitoring ein, denn wenn ein Partner seine API ändert, bricht die Integration still und leise, und das erfahren Sie lieber vom System als von einem Kunden.",
          inc: ["API-Design und Dokumentation", "Anbindung an Zahlungsanbieter, Versanddienstleister, CRM und Buchhaltung", "Datenaustausch zwischen Ihren internen Systemen", "{{queue|Warteschlangen und Wiederholungsversuche}} für den Fall, dass etwas ausfällt", "Monitoring und Alarmierung"],
          res: "Daten werden einmal erfasst und finden von selbst ihren Weg dorthin, wo sie gebraucht werden."
        },
        {
          t: "Technischer Support",
          lead: "Wir betreuen Ihre IT-Systeme und entwickeln sie weiter, auch solche, die nicht von uns stammen.",
          body: "Fehler beheben ist nur ein Teil der Arbeit. Dazu gehören auch Updates, die Sicherheitslücken schließen, ein Monitoring, das ein Problem vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei. Stammt das System von einem anderen Dienstleister, beginnen wir mit einer Prüfung und einer Dokumentation, denn ohne sie wird jede Änderung zum Glücksspiel.",
          inc: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Datensicherung und die Prüfung, dass sich daraus tatsächlich wiederherstellen lässt", "geplante Verbesserungen und neue Funktionen", "Prüfung und Dokumentation von Systemen, die andere gebaut haben"],
          res: "Das System läuft, und in der Nähe gibt es ein Team, das weiß, wie es aufgebaut ist."
        }
      ]
    },
    fr: {
      intro: "Nous ne sommes attachés à aucun langage de programmation ni à aucune plateforme. D'abord, nous cherchons à comprendre ce qu'il faut réellement faire ; les outils viennent ensuite. Parfois, la meilleure réponse est un service existant sur abonnement, et nous vous le dirons alors franchement plutôt que de vous vendre un développement.",
      items: [
        {
          t: "Conception de solutions informatiques",
          lead: "Nous établissons quel problème le système doit résoudre et rédigeons les exigences de sorte que la direction et les développeurs les comprennent de la même façon.",
          body: "L'erreur la plus coûteuse d'un projet informatique se produit avant même la première ligne de code : on construit le système pour un problème que personne n'a jamais vraiment formulé. C'est pourquoi nous ne parlons pas seulement à la personne qui signe. Nous parlons aussi à ceux qui utiliseront le système tous les jours : la comptabilité, l'entrepôt, les commerciaux.",
          note: "Parfois, la conclusion est de ne rien développer et de paramétrer un produit existant. C'est aussi un résultat, simplement pas celui qu'on attend quand on fait appel à des développeurs.",
          inc: ["entretiens avec les équipes et analyse du fonctionnement actuel des processus", "exigences métier et scénarios d'utilisation", "une comparaison honnête entre produits du marché et développement sur mesure", "un {{spec|cahier des charges}} avec estimation des délais et du budget pour chaque phase"],
          res: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et le commencer."
        },
        {
          t: "Développement SaaS",
          lead: "Nous concevons et développons des plateformes {{saas|SaaS}}, de la première version pour une poignée de clients pilotes jusqu'au service où chaque client dispose de son propre espace, de son forfait et de son tableau de bord.",
          body: "En SaaS, l'argent ne vient pas du code. Il vient de la facilité avec laquelle un nouveau client s'inscrit, paie et se met au travail sans jamais appeler le support. Nous intégrons la {{tenant|multilocation}}, la {{billing|facturation}} et les droits d'accès dès le premier jour, car les ajouter une fois les clients installés coûte plusieurs fois plus cher. Et nous essayons de sortir la première version tôt : les vrais utilisateurs montrent très vite quelles fonctions ne servaient à rien.",
          inc: ["une architecture multilocataire qui isole les données de chaque client", "inscription, forfaits, abonnements et paiement en ligne", "espaces clients, rôles et droits d'accès", "intégrations et {{api|API}} publique pour vos clients", "montée en charge à mesure que l'activité grandit"],
          res: "Un produit que l'on vend sur abonnement, et non un projet qu'il faut déployer à la main chez chaque nouveau client."
        },
        {
          t: "Développement web",
          lead: "Sites d'entreprise, places de marché, boutiques en ligne, systèmes de réservation, outils web internes. Chacun est construit pour sa propre tâche au lieu d'être forcé dans un modèle.",
          body: "Un site d'entreprise se juge aux demandes et aux commandes qu'il apporte. Son allure dans un portfolio ne compte presque pas. Avant de commencer, nous convenons donc de ce qui comptera comme résultat, et l'analytique est en place avant le lancement (pas six mois plus tard, quand il n'y a plus rien à comparer). La technologie suit la tâche : une page d'atterrissage n'a que faire d'une plateforme lourde, et une place de marché ne tiendra tout simplement pas dans un constructeur de sites.",
          inc: ["prototype et conception des interfaces", "frontend, backend et interface d'administration", "intégration avec le paiement, la livraison, le {{crm|CRM}} et les logiciels de comptabilité", "bases {{seo|SEO}}, chargement rapide des pages, analytique", "mise en ligne, puis maintenance"],
          res: "Un service web dont vous savez exactement combien de demandes et de chiffre d'affaires il rapporte."
        },
        {
          t: "Applications mobiles",
          lead: "Applications iOS et Android, avec tout ce qui se trouve derrière : la partie serveur et l'interface d'administration.",
          body: "Une application se rentabilise quand les clients y reviennent régulièrement : pour commander à nouveau, suivre une livraison, cumuler des points de fidélité. Le choix entre développement {{native|natif ou multiplateforme}} dépend du budget et de l'usage que l'application fera de l'appareil photo, de la géolocalisation et du mode hors ligne.",
          note: "Si l'on ouvre votre application une fois par an, un bon site mobile vous coûtera moins cher. Nous vous le dirons avant le début des travaux, pas après la publication.",
          inc: ["applications iOS et Android", "partie serveur et {{api|API}}", "interface d'administration pour les contenus, les commandes et les utilisateurs", "{{push|notifications push}} et analytique", "publication sur l'App Store et Google Play"],
          res: "Une application qui passe la validation des stores et que votre équipe gère elle-même, sans avoir à appeler un développeur."
        },
        {
          t: "Solutions d'intelligence artificielle",
          lead: "Nous automatisons les processus métier avec des {{agent|agents d'IA}}. L'intelligence artificielle et l'apprentissage automatique vont là où ils font gagner du temps aux équipes ou de l'argent à l'entreprise, et nulle part ailleurs.",
          body: "Là où des personnes passent des heures à trier des e-mails, des documents et des demandes, les {{llm|modèles de langage}} enlèvent réellement la routine. Nous commençons par un {{pilot|pilote}} sur vos propres données : vous voyez les chiffres de précision avant le développement principal, pas après.",
          note: "Nous sommes plus sceptiques que la plupart vis-à-vis de l'IA. Environ la moitié des idées du type « et si on ajoutait un réseau de neurones ? » se règlent par une automatisation ordinaire, sans aucun modèle.",
          inc: ["des agents d'IA qui enchaînent seuls les étapes routinières d'un processus : trier les demandes, remplir le CRM, préparer les réponses aux clients", "chatbots et assistants pour les clients et les équipes", "reconnaissance de documents et extraction de données", "classement des demandes et recherche dans la base de connaissances", "prévision de la demande et analyse de données", "un pilote où la qualité se mesure sur vos données"],
          res: "Une tâche précise que des personnes accomplissaient laborieusement passe au système, et c'est toujours un humain qui garde le contrôle."
        },
        {
          t: "Développement CRM et ERP",
          lead: "Des systèmes {{crm|CRM}} et {{erp|ERP}} construits autour de votre façon de travailler. Vous n'aurez pas à plier l'entreprise au logiciel.",
          body: "Quand les commerciaux tiennent la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire ça », développer votre propre outil devient la solution la moins chère. Nous reprenons nous-mêmes les données des anciens systèmes et des tableurs, et nous déployons service par service, pour que le travail ne s'arrête pas un seul jour.",
          note: "Un CRM standard convient parfaitement tant que votre processus ressemble au standard. Si c'est le cas, nous vous le recommanderons plutôt qu'un développement.",
          inc: ["modules ventes, entrepôt, production et finances — ceux dont vous avez réellement besoin", "rôles, droits d'accès et journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "intégration avec la comptabilité, la téléphonie et la messagerie"],
          res: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit où en sont les choses sans courir chaque semaine après le rapport de chaque service."
        },
        {
          t: "Solutions cloud",
          lead: "Nous migrons votre infrastructure vers {{aws|Amazon Web Services}}, en totalité ou en partie, et nous la surveillons ensuite pour qu'elle continue de fonctionner sans devenir plus chère sans raison.",
          body: "Le cloud est rentable quand la charge varie fortement, quand il vous faut de la {{failover|tolérance aux pannes}} ou quand un nouvel environnement doit être prêt en quelques minutes plutôt qu'en une semaine. C'est pourquoi une migration commence par un audit et une estimation des coûts. Le déménagement se fait par étapes, avec un {{rollback|plan de retour arrière}} à chacune d'elles.",
          note: "Le cloud n'est pas toujours moins cher que votre propre serveur. Si les chiffres montrent que vous avez intérêt à rester sur votre matériel, c'est ce que nous vous dirons.",
          inc: ["audit de l'infrastructure actuelle et estimation des coûts", "architecture AWS et plan de migration", "migration des serveurs, des bases de données et des fichiers", "sauvegardes et supervision", "optimisation des coûts une fois la migration terminée"],
          res: "Une infrastructure qui survit à la panne d'un serveur, et une facture cloud que vous pouvez lire et comprendre."
        },
        {
          t: "Infrastructure d'entreprise sous Red Hat",
          lead: "Nous construisons l'infrastructure informatique de votre entreprise avec Red Hat : serveurs sous {{rhel|Red Hat Enterprise Linux}}, applications sur la plateforme de conteneurs {{openshift|OpenShift}}, configuration avec {{ansible|Ansible}}.",
          body: "Les entreprises choisissent Red Hat quand l'infrastructure doit tourner pendant des années et passer des audits, au lieu de reposer sur la mémoire d'un seul administrateur (et les administrateurs partent aussi en vacances). L'abonnement se rentabilise grâce au support de l'éditeur et à un long cycle de vie : Red Hat Enterprise Linux est maintenu pendant dix ans. Nous concevons l'infrastructure en fonction de vos charges et décrivons la configuration de chaque serveur dans Ansible : n'importe lequel peut être reconstruit à partir d'un playbook, sans que personne ait à se souvenir de la façon dont il a été monté.",
          note: "Red Hat est notre partenaire : nous pouvons donc aussi vous aider à y voir clair dans les abonnements et le support de l'éditeur.",
          inc: ["audit de vos serveurs actuels et plan de migration", "déploiement de Red Hat Enterprise Linux, avec des mises à jour gérées de façon centralisée via {{satellite|Red Hat Satellite}}", "OpenShift pour vos applications", "automatisation de la configuration et du déploiement avec Ansible", "comptes et accès réunis en un seul endroit avec {{idm|Identity Management}}", "supervision, sauvegardes et documentation pour votre équipe"],
          res: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe sans que le savoir s'en aille avec quelqu'un."
        },
        {
          t: "API et intégrations",
          lead: "Nous concevons des {{api|API}} pour vos systèmes et les relions aux services que vous utilisez déjà.",
          body: "Le problème que nous rencontrons le plus souvent : des données saisies deux fois. Quelqu'un ressaisit à la main les commandes du site dans le logiciel de comptabilité, les paiements sont rapprochés dans un tableur. Une intégration supprime ce travail, et avec lui les erreurs qu'il engendre. Nous mettons aussi en place une supervision, car lorsqu'un partenaire modifie son API, l'intégration casse sans bruit, et mieux vaut l'apprendre du système que d'un client.",
          inc: ["conception et documentation d'API", "intégration avec les prestataires de paiement, les services de livraison, le CRM et la comptabilité", "échange de données entre vos systèmes internes", "{{queue|files d'attente et nouvelles tentatives}} en cas de panne", "supervision et alertes"],
          res: "Les données sont saisies une seule fois et se retrouvent d'elles-mêmes là où l'on en a besoin."
        },
        {
          t: "Support technique",
          lead: "Nous assurons la maintenance de vos systèmes informatiques et continuons de les faire évoluer, y compris ceux que nous n'avons pas développés.",
          body: "Corriger des bugs n'est qu'une partie du travail. Il y a aussi les mises à jour qui comblent les failles de sécurité, la supervision qui repère un problème avant les utilisateurs et les petites améliorations au fil de l'eau. Si le système vient d'un autre prestataire, nous commençons par un audit et une documentation, car sans elle chaque modification devient un pari.",
          inc: ["supervision de la disponibilité et des erreurs", "corrections de bugs et mises à jour de sécurité", "sauvegardes, et vérification qu'on peut réellement les restaurer", "améliorations planifiées et nouvelles fonctions", "audit et documentation des systèmes développés par d'autres"],
          res: "Le système fonctionne, et une équipe à portée de main sait comment il est construit."
        }
      ]
    },
    es: {
      intro: "No nos atamos a un lenguaje de programación ni a una plataforma. Primero averiguamos qué hay que hacer de verdad; las herramientas vienen después. A veces la mejor respuesta es un servicio ya hecho por suscripción, y entonces se lo diremos sin rodeos en lugar de venderle un desarrollo.",
      items: [
        {
          t: "Concepto de la solución de TI",
          lead: "Averiguamos qué problema tiene que resolver el sistema y redactamos los requisitos de modo que el negocio y los desarrolladores los entiendan igual.",
          body: "El error más caro de un proyecto de TI se comete antes de escribir la primera línea de código: el sistema se construye para un problema que nadie llegó a definir bien. Por eso no hablamos solo con quien da el visto bueno. Hablamos también con quienes lo usarán a diario: contabilidad, el almacén, los comerciales.",
          note: "A veces la conclusión es no desarrollar nada y configurar un producto existente. También es un resultado, aunque no el que se espera cuando se llama a unos desarrolladores.",
          inc: ["entrevistas con el personal y un repaso de cómo funcionan hoy los procesos", "requisitos de negocio y escenarios de uso", "una comparación honesta entre productos ya hechos y desarrollo a medida", "una {{spec|especificación técnica}} con estimación de plazos y presupuesto por fases"],
          res: "Un documento con el que cualquier equipo, el nuestro u otro, puede presupuestar el trabajo y empezarlo."
        },
        {
          t: "Desarrollo SaaS",
          lead: "Diseñamos y desarrollamos plataformas {{saas|SaaS}}, desde una primera versión para un puñado de clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, su plan y su panel.",
          body: "En SaaS el dinero no está en el código. Está en lo fácil que le resulte a un cliente nuevo registrarse, pagar y ponerse a trabajar sin llamar nunca a soporte. La {{tenant|multitenencia}}, la {{billing|facturación}} y los permisos los incorporamos desde el primer día, porque añadirlos cuando los clientes ya están dentro cuesta varias veces más. Y procuramos lanzar pronto la primera versión: los usuarios reales enseñan muy deprisa qué funciones sobraban.",
          inc: ["arquitectura multitenencia que mantiene separados los datos de cada cliente", "registro, planes, suscripciones y pagos en línea", "paneles de cliente, roles y permisos", "integraciones y una {{api|API}} pública para sus clientes", "escalado a medida que crece la carga"],
          res: "Un producto que se vende por suscripción, no un proyecto que hay que implantar a mano cada vez."
        },
        {
          t: "Desarrollo web",
          lead: "Webs corporativas, marketplaces, tiendas online, sistemas de reservas, herramientas web internas. Cada una se construye en torno a su propia tarea, sin encajarla a la fuerza en una plantilla.",
          body: "Una web de empresa se juzga por los contactos y los pedidos que trae. Cómo queda en un portafolio importa poco. Por eso, antes de empezar, acordamos qué se considera un resultado, y la analítica se instala antes del lanzamiento (no seis meses después, cuando ya no hay con qué comparar). La tecnología depende de la tarea: una landing page no necesita una plataforma pesada, y un marketplace sencillamente no cabe en un creador de webs.",
          inc: ["prototipo y diseño de interfaces", "frontend, backend y panel de administración", "integración con pagos, envíos, {{crm|CRM}} y sistemas contables", "base {{seo|SEO}}, carga rápida de páginas, analítica", "lanzamiento y, después, mantenimiento"],
          res: "Un servicio web del que usted sabe exactamente cuántos contactos y cuántos ingresos le aporta."
        },
        {
          t: "Aplicaciones móviles",
          lead: "Aplicaciones para iOS y Android, y todo lo que hay detrás: la parte de servidor y el panel de administración.",
          body: "Una aplicación se amortiza cuando el cliente vuelve a ella con regularidad: repite pedidos, sigue un envío, acumula puntos. Elegimos entre desarrollo {{native|nativo o multiplataforma}} según el presupuesto y según cuánto necesite la aplicación la cámara, la geolocalización y el modo sin conexión.",
          note: "Si alguien abre su aplicación una vez al año, una buena web móvil le saldrá más barata. Se lo diremos antes de empezar, no cuando la aplicación ya esté en la tienda.",
          inc: ["aplicaciones para iOS y Android", "parte de servidor y {{api|API}}", "panel de administración para contenidos, pedidos y usuarios", "{{push|notificaciones push}} y analítica", "publicación en App Store y Google Play"],
          res: "Una aplicación que supera la revisión de las tiendas y que su equipo gestiona por su cuenta, sin tener que llamar a un desarrollador."
        },
        {
          t: "Soluciones con inteligencia artificial",
          lead: "Automatizamos procesos de negocio con {{agent|agentes de IA}}. La inteligencia artificial y el aprendizaje automático van donde ahorran tiempo al personal o dinero a la empresa, y a ningún otro sitio.",
          body: "Donde la gente pasa horas clasificando correos, documentos y solicitudes, los {{llm|modelos de lenguaje}} de verdad le quitan la rutina de encima. Empezamos con un {{pilot|piloto}} sobre sus propios datos, de modo que usted ve las cifras de precisión antes del desarrollo principal, no después.",
          note: "Somos más escépticos con la IA que la mayoría. Aproximadamente la mitad de las ideas del tipo «añadamos una red neuronal» se resuelven con automatización corriente, sin ningún modelo.",
          inc: ["agentes de IA que recorren solos los pasos rutinarios de un proceso: clasifican las solicitudes entrantes, rellenan el CRM, preparan respuestas a los clientes", "chatbots y asistentes para clientes y empleados", "reconocimiento de documentos y extracción de datos", "clasificación de solicitudes y búsqueda en la base de conocimiento", "previsión de la demanda y análisis de datos", "un piloto en el que la calidad se mide con sus datos"],
          res: "Una parte concreta del trabajo que antes sacaban adelante las personas pasa al sistema, y el control sigue en manos de una persona."
        },
        {
          t: "Desarrollo de CRM y ERP",
          lead: "Sistemas {{crm|CRM}} y {{erp|ERP}} construidos en torno a la forma de trabajar de su empresa. No tendrá que adaptar el negocio al programa.",
          body: "Cuando los comerciales llevan la mitad de su trabajo en hojas de cálculo porque el sistema «no sabe hacer eso», un desarrollo propio sale más barato. Los datos de los sistemas antiguos y de las hojas de cálculo los migramos nosotros, y la puesta en marcha se hace departamento a departamento, para que el trabajo no se detenga ni un solo día.",
          note: "Un CRM estándar sirve perfectamente mientras su proceso se parezca al habitual. Si es así, le recomendaremos eso y no un desarrollo.",
          inc: ["módulos de ventas, almacén, producción y finanzas: los que de verdad necesita", "roles, permisos y registro de actividad", "informes y cuadros de mando para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "integración con contabilidad, telefonía y correo"],
          res: "Un solo sistema en lugar de un zoo de hojas de cálculo. La dirección ve cómo van las cosas sin tener que perseguir cada semana un informe de cada departamento."
        },
        {
          t: "Soluciones en la nube",
          lead: "Trasladamos su infraestructura a {{aws|Amazon Web Services}}, entera o por partes, y después la vigilamos para que siga funcionando y no se encarezca sin motivo.",
          body: "La nube compensa cuando la carga sube y baja, cuando se necesita {{failover|tolerancia a fallos}} o cuando un entorno nuevo debe estar listo en minutos y no en una semana. Por eso una migración empieza con una auditoría y un cálculo de costes. El traslado se hace por etapas, con un {{rollback|plan de reversión}} en cada paso.",
          note: "La nube no siempre es más barata que un servidor propio. Si las cifras dicen que le conviene quedarse con su propio hardware, se lo diremos.",
          inc: ["auditoría de la infraestructura actual y cálculo de costes", "arquitectura en AWS y plan de migración", "traslado de servidores, bases de datos y archivos", "copias de seguridad y monitorización", "optimización de costes una vez terminado el traslado"],
          res: "Una infraestructura que sobrevive a la caída de un servidor, y una factura de la nube que usted puede leer y entender."
        },
        {
          t: "Infraestructura empresarial con Red Hat",
          lead: "Construimos la infraestructura de TI de su empresa sobre Red Hat: servidores con {{rhel|Red Hat Enterprise Linux}}, aplicaciones en la plataforma de contenedores {{openshift|OpenShift}} y configuración mediante {{ansible|Ansible}}.",
          body: "Las empresas eligen Red Hat cuando la infraestructura tiene que funcionar durante años y pasar auditorías, en lugar de vivir en la cabeza de un único administrador (que también se va de vacaciones). La suscripción se amortiza con el soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene soporte durante diez años. Diseñamos la infraestructura según sus cargas de trabajo y describimos la configuración de cada servidor en Ansible, de modo que cualquiera de ellos puede reconstruirse a partir de un playbook sin que nadie tenga que recordar cómo se hizo.",
          note: "Red Hat es nuestro socio, así que también podemos ayudarle con las suscripciones y el soporte del fabricante.",
          inc: ["auditoría de sus servidores actuales y plan de migración", "despliegue de Red Hat Enterprise Linux, con actualizaciones centralizadas mediante {{satellite|Red Hat Satellite}}", "OpenShift para sus aplicaciones", "automatización de la configuración y el despliegue con Ansible", "cuentas y accesos en un solo lugar con {{idm|Identity Management}}", "monitorización, copias de seguridad y documentación para su equipo"],
          res: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin que el conocimiento se marche con nadie."
        },
        {
          t: "API e integraciones",
          lead: "Diseñamos {{api|API}} para sus sistemas y los conectamos con los servicios que ya utiliza.",
          body: "El problema que más vemos es que los datos se introducen dos veces. Alguien vuelve a teclear a mano en el sistema contable los pedidos de la web; los pagos se cuadran en una hoja de cálculo. Una integración elimina ese trabajo, y con él los errores que genera. También montamos monitorización, porque cuando un socio cambia su API la integración se rompe sin hacer ruido, y es mejor enterarse por el sistema que por un cliente.",
          inc: ["diseño y documentación de API", "integraciones con pasarelas de pago, empresas de mensajería, CRM y contabilidad", "intercambio de datos entre sus sistemas internos", "{{queue|colas y reintentos}} para cuando algo falla", "monitorización y alertas"],
          res: "Los datos se introducen una sola vez y llegan por sí solos a donde hacen falta."
        },
        {
          t: "Soporte técnico",
          lead: "Mantenemos sus sistemas de TI y seguimos desarrollándolos, incluidos los que no construimos nosotros.",
          body: "Corregir errores es solo una parte del trabajo. También están las actualizaciones que cierran agujeros de seguridad, una monitorización que detecta un problema antes que los usuarios y pequeñas mejoras por el camino. Si el sistema viene de otro proveedor, empezamos con una auditoría y documentación, porque sin ellas cada cambio es una lotería.",
          inc: ["monitorización de disponibilidad y errores", "corrección de errores y actualizaciones de seguridad", "copias de seguridad, y comprobación de que de verdad se puede restaurar a partir de ellas", "mejoras planificadas y nuevas funciones", "auditoría y documentación de sistemas desarrollados por otros"],
          res: "El sistema funciona, y cerca hay un equipo que sabe cómo está montado."
        }
      ]
    },
    pt: {
      intro: "Não nos prendemos a uma linguagem de programação nem a uma plataforma. Primeiro percebemos o que é preciso fazer; as ferramentas vêm depois. Às vezes a melhor resposta é um serviço pronto por subscrição, e nesse caso dizemo-lo com franqueza em vez de lhe vender um desenvolvimento.",
      items: [
        {
          t: "Conceção de soluções de TI",
          lead: "Apuramos que problema o sistema tem de resolver e escrevemos os requisitos de forma a que o negócio e os programadores os leiam da mesma maneira.",
          body: "O erro mais caro de um projeto de TI acontece antes de alguém escrever uma linha de código: o sistema é construído para um problema que nunca ninguém definiu ao certo. Por isso não falamos só com quem aprova o projeto. Falamos com quem vai usar o sistema todos os dias — a contabilidade, o armazém, os comerciais.",
          note: "Por vezes a conclusão é não desenvolver nada e configurar um produto que já existe. Também é um resultado, só que não é o que se espera quando se chamam programadores.",
          inc: ["entrevistas com a equipa e análise de como as coisas funcionam hoje", "requisitos de negócio e cenários de utilização", "uma comparação honesta entre produtos prontos e desenvolvimento por medida", "uma {{spec|especificação técnica}} com estimativa de prazos e orçamento por fase"],
          res: "Um documento a partir do qual qualquer equipa, a nossa ou outra, consegue orçamentar o trabalho e começar a fazê-lo."
        },
        {
          t: "Desenvolvimento SaaS",
          lead: "Concebemos e desenvolvemos plataformas {{saas|SaaS}}, desde uma primeira versão para meia dúzia de clientes-piloto até um serviço em que cada cliente tem o seu espaço, o seu plano e a sua área de cliente.",
          body: "Num SaaS, o dinheiro não está no código. Está na facilidade com que um cliente novo se regista, paga e começa a trabalhar sem nunca ligar para o suporte. A arquitetura {{tenant|multi-tenant}}, a {{billing|faturação}} e as permissões entram desde o primeiro dia, porque acrescentá-las depois, com os clientes já lá dentro, custa várias vezes mais. E tentamos lançar a primeira versão cedo: os utilizadores reais depressa mostram que funcionalidades ninguém queria.",
          inc: ["arquitetura multi-tenant que mantém os dados de cada cliente separados", "registo, planos, subscrições e pagamentos online", "áreas de cliente, perfis e permissões de acesso", "integrações e uma {{api|API}} pública para os seus clientes", "escalabilidade à medida que a carga cresce"],
          res: "Um produto que se vende por subscrição, e não um projeto que tem de ser implementado à mão de cada vez."
        },
        {
          t: "Desenvolvimento web",
          lead: "Sites institucionais, marketplaces, lojas online, sistemas de reservas, ferramentas web internas. Cada um é feito à medida da sua tarefa, em vez de ser encaixado à força num modelo.",
          body: "Um site empresarial avalia-se pelos contactos e encomendas que gera. O aspeto que tem num portefólio pouco importa. Por isso, antes de começar, combinamos o que conta como resultado, e a analítica fica configurada antes do lançamento (e não seis meses depois, quando já não há com que comparar). A tecnologia segue a tarefa: uma landing page não precisa de uma plataforma pesada, e um marketplace simplesmente não cabe num construtor de sites.",
          inc: ["protótipo e design de interfaces", "frontend, backend e painel de administração", "integração com pagamentos, entregas, {{crm|CRM}} e sistemas de contabilidade", "base de {{seo|SEO}}, carregamento rápido das páginas, analítica", "lançamento e, depois, acompanhamento contínuo"],
          res: "Um serviço web do qual sabe exatamente quantos contactos e quanta receita traz."
        },
        {
          t: "Aplicações móveis",
          lead: "Aplicações para iOS e Android, e tudo o que está por trás delas: o servidor e o painel de administração.",
          body: "Uma aplicação justifica-se quando o cliente volta a ela com regularidade — para repetir uma encomenda, acompanhar uma entrega, juntar pontos. A escolha entre desenvolvimento {{native|nativo ou multiplataforma}} depende do orçamento e de quanto a aplicação precisa da câmara, da localização e de funcionar sem rede.",
          note: "Se alguém abre a sua aplicação uma vez por ano, um bom site para telemóvel sai-lhe mais barato. Dizemo-lo antes de o trabalho começar, e não depois de a aplicação estar na loja.",
          inc: ["aplicações para iOS e Android", "servidor e {{api|API}}", "painel de administração para conteúdos, encomendas e utilizadores", "{{push|notificações push}} e analítica", "publicação na App Store e no Google Play"],
          res: "Uma aplicação que passa a revisão das lojas e que a sua equipa gere sozinha, sem ter de telefonar ao programador."
        },
        {
          t: "Soluções com inteligência artificial",
          lead: "Automatizamos processos de negócio com {{agent|agentes de IA}}. A inteligência artificial e a aprendizagem automática vão para onde poupam tempo à equipa ou dinheiro à empresa, e para mais lado nenhum.",
          body: "Onde há pessoas a passar horas a triar e-mails, documentos e pedidos de suporte, os {{llm|modelos de linguagem}} tiram-lhes de facto a rotina de cima. Começamos com um {{pilot|piloto}} sobre os seus próprios dados, para que veja os números de precisão antes do desenvolvimento principal, e não depois.",
          note: "Somos mais céticos em relação à IA do que a maioria. Cerca de metade das ideias do género «vamos pôr aqui uma rede neuronal» resolve-se com automação comum, sem modelo nenhum.",
          inc: ["agentes de IA que tratam sozinhos dos passos rotineiros de um processo: triam os pedidos que chegam, preenchem o CRM, preparam respostas aos clientes", "chatbots e assistentes para clientes e colaboradores", "reconhecimento de documentos e extração de dados", "classificação de pedidos e pesquisa na base de conhecimento", "previsão da procura e análise de dados", "um piloto em que a qualidade é medida com os seus dados"],
          res: "Uma parte concreta do trabalho, que antes era feita à mão, passa para o sistema, e o controlo continua nas mãos de uma pessoa."
        },
        {
          t: "Desenvolvimento de CRM e ERP",
          lead: "Sistemas {{crm|CRM}} e {{erp|ERP}} construídos à volta da forma como a sua empresa funciona. Não vai ter de adaptar o negócio ao software.",
          body: "Quando os gestores fazem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», desenvolver uma solução própria passa a ser a opção mais barata. Somos nós que migramos os dados dos sistemas antigos e das folhas de cálculo, e implementamos departamento a departamento, para que o trabalho não pare um único dia.",
          note: "Um CRM de prateleira serve perfeitamente enquanto o seu processo for o habitual. Se for esse o caso, recomendamos-lho em vez de um desenvolvimento.",
          inc: ["módulos de vendas, armazém, produção e finanças — aqueles de que realmente precisa", "perfis, permissões e registo de atividade", "relatórios e dashboards para a gestão", "migração de dados de folhas de cálculo e de sistemas antigos", "integração com contabilidade, telefonia e e-mail"],
          res: "Um só sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê como estão as coisas sem andar atrás de um relatório semanal de cada departamento."
        },
        {
          t: "Soluções na cloud",
          lead: "Migramos a sua infraestrutura para a {{aws|Amazon Web Services}}, toda ou por partes, e acompanhamo-la depois, para que continue a funcionar e não fique mais cara sem razão.",
          body: "A cloud compensa quando a carga oscila muito, quando precisa de {{failover|tolerância a falhas}} ou quando um ambiente novo tem de estar de pé em minutos e não numa semana. É por isso que uma migração começa com uma auditoria e uma estimativa de custos. A mudança faz-se por etapas, com um {{rollback|plano de reversão}} em cada passo.",
          note: "A cloud nem sempre é mais barata do que um servidor próprio. Se as contas mostrarem que lhe compensa ficar no seu hardware, é isso que lhe vamos dizer.",
          inc: ["auditoria da infraestrutura atual e estimativa de custos", "arquitetura na AWS e plano de migração", "migração de servidores, bases de dados e ficheiros", "cópias de segurança e monitorização", "otimização de custos depois de concluída a migração"],
          res: "Uma infraestrutura que sobrevive à falha de um servidor e uma fatura da cloud que consegue ler e perceber."
        },
        {
          t: "Infraestrutura empresarial em Red Hat",
          lead: "Construímos a infraestrutura de TI da sua empresa em Red Hat: servidores em {{rhel|Red Hat Enterprise Linux}}, aplicações na plataforma de contentores {{openshift|OpenShift}}, configuração através do {{ansible|Ansible}}.",
          body: "As empresas escolhem Red Hat quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de viver na cabeça de um único administrador (e os administradores também vão de férias). A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos. Desenhamos a infraestrutura à medida das suas cargas de trabalho e descrevemos a configuração de cada servidor em Ansible, para que qualquer um deles possa ser reconstruído a partir de um playbook, sem ninguém ter de se lembrar de como foi feito.",
          note: "A Red Hat é nossa parceira, por isso também o podemos ajudar a pôr em ordem as subscrições e o suporte do fabricante.",
          inc: ["auditoria dos servidores atuais e plano de migração", "implementação do Red Hat Enterprise Linux, com atualizações geridas centralmente através do {{satellite|Red Hat Satellite}}", "OpenShift para as suas aplicações", "automação da configuração e da implementação em Ansible", "contas e acessos num só lugar com {{idm|Identity Management}}", "monitorização, cópias de segurança e documentação para a sua equipa"],
          res: "Uma infraestrutura que pode auditar, reproduzir e entregar a outra equipa sem que o conhecimento saia porta fora."
        },
        {
          t: "APIs e integrações",
          lead: "Desenhamos {{api|APIs}} para os seus sistemas e ligamo-los aos serviços que já utiliza.",
          body: "O problema que mais vemos são dados introduzidos duas vezes. Alguém volta a escrever à mão as encomendas do site no sistema de contabilidade; os pagamentos são conferidos numa folha de cálculo. Uma integração elimina esse trabalho, e com ele os erros que gera. Também configuramos monitorização, porque quando um parceiro altera a sua API a integração avaria em silêncio, e é preferível saber pelo sistema do que por um cliente.",
          inc: ["desenho e documentação de APIs", "integração com prestadores de pagamento, serviços de entrega, CRM e contabilidade", "troca de dados entre os seus sistemas internos", "{{queue|filas e novas tentativas}} para quando algo falha", "monitorização e alertas"],
          res: "Os dados são introduzidos uma vez e chegam sozinhos aonde forem precisos."
        },
        {
          t: "Suporte técnico",
          lead: "Cuidamos dos seus sistemas de TI e continuamos a desenvolvê-los, incluindo os que não fomos nós a construir.",
          body: "Corrigir erros é só uma parte do trabalho. Há também as atualizações que fecham falhas de segurança, a monitorização que deteta um problema antes dos utilizadores e as pequenas melhorias pelo caminho. Se o sistema veio de outro fornecedor, começamos por uma auditoria e pela documentação, porque sem ela cada alteração é uma lotaria.",
          inc: ["monitorização da disponibilidade e de erros", "correção de erros e atualizações de segurança", "cópias de segurança, e a verificação de que é mesmo possível restaurar a partir delas", "melhorias planeadas e novas funcionalidades", "auditoria e documentação de sistemas feitos por terceiros"],
          res: "O sistema funciona, e há uma equipa por perto que sabe como está montado."
        }
      ]
    },
    it: {
      intro: "Non ci leghiamo a un solo linguaggio di programmazione o a una sola piattaforma. Prima capiamo che cosa va fatto davvero; gli strumenti vengono dopo. A volte la risposta migliore è un servizio già pronto in abbonamento, e allora glielo diciamo apertamente invece di venderLe uno sviluppo.",
      items: [
        {
          t: "Ideazione della soluzione IT",
          lead: "Chiariamo quale problema deve risolvere il sistema e scriviamo i requisiti in modo che l'azienda e gli sviluppatori li leggano allo stesso modo.",
          body: "L'errore più costoso in un progetto IT avviene prima ancora che qualcuno scriva una riga di codice: il sistema viene costruito per un problema che nessuno ha mai definito con precisione. Per questo non parliamo solo con chi firma. Parliamo con le persone che lo useranno ogni giorno: contabilità, magazzino, commerciali.",
          note: "A volte la conclusione è non sviluppare nulla e configurare invece un prodotto esistente. Anche questo è un risultato, solo non quello che ci si aspetta quando si chiamano gli sviluppatori.",
          inc: ["interviste al personale e analisi di come funzionano oggi i processi", "requisiti di business e scenari d'uso", "un confronto onesto tra prodotti pronti e sviluppo su misura", "{{spec|capitolato tecnico}} con stima di tempi e budget per ogni fase"],
          res: "Un documento su cui qualsiasi team, il nostro o un altro, può fare una stima e iniziare a lavorare."
        },
        {
          t: "Sviluppo SaaS",
          lead: "Progettiamo e sviluppiamo piattaforme {{saas|SaaS}}, dalla prima versione per una manciata di clienti pilota fino a un servizio in cui ogni cliente ha il proprio spazio, il proprio piano e la propria area riservata.",
          body: "Nel SaaS i soldi non stanno nel codice. Stanno nella facilità con cui un nuovo cliente si registra, paga e comincia a lavorare senza mai chiamare l'assistenza. {{tenant|Multi-tenancy}}, {{billing|fatturazione}} e permessi li prevediamo dal primo giorno, perché aggiungerli dopo, con i clienti già dentro, costa molte volte di più. E cerchiamo di pubblicare presto la prima versione: gli utenti veri mostrano in fretta quali funzioni non servivano a nessuno.",
          inc: ["architettura multi-tenant che tiene separati i dati di ogni cliente", "registrazione, piani tariffari, abbonamenti e pagamenti online", "aree riservate per i clienti, ruoli e permessi", "integrazioni e un'{{api|API}} pubblica per i Suoi clienti", "scalabilità man mano che il carico cresce"],
          res: "Un prodotto che si vende in abbonamento, non un progetto da installare a mano ogni volta."
        },
        {
          t: "Sviluppo web",
          lead: "Siti aziendali, marketplace, negozi online, sistemi di prenotazione, strumenti web interni. Ognuno è costruito attorno al proprio compito, invece di essere infilato a forza in un modello.",
          body: "Un sito aziendale si giudica dai contatti e dagli ordini. Come appare in un portfolio conta poco. Per questo, prima di iniziare, concordiamo che cosa si considera un risultato, e l'analisi del traffico si configura prima del lancio (non sei mesi dopo, quando non resta più nulla con cui confrontare). La tecnologia segue il compito: a una landing page non serve una piattaforma pesante, e un marketplace in un costruttore di siti semplicemente non ci sta.",
          inc: ["prototipo e design delle interfacce", "frontend, backend e pannello di amministrazione", "integrazioni con pagamenti, spedizioni, {{crm|CRM}} e sistemi contabili", "basi {{seo|SEO}}, caricamento rapido delle pagine, analisi del traffico", "lancio e poi assistenza continuativa"],
          res: "Un servizio web di cui sa esattamente quanti contatti e quanto fatturato porta."
        },
        {
          t: "App mobili",
          lead: "App per iOS e Android, più tutto ciò che sta dietro: la parte server e il pannello di amministrazione.",
          body: "Un'app si ripaga quando i clienti ci tornano regolarmente: per riordinare, seguire una consegna, accumulare punti fedeltà. La scelta tra sviluppo {{native|nativo o multipiattaforma}} dipende dal budget e da quanto l'app ha bisogno di fotocamera, posizione e funzionamento offline.",
          note: "Se qualcuno apre la Sua app una volta l'anno, un buon sito mobile Le costerà meno. Glielo diciamo prima di iniziare, non dopo la pubblicazione sugli store.",
          inc: ["app per iOS e Android", "parte server e {{api|API}}", "pannello di amministrazione per contenuti, ordini e utenti", "{{push|notifiche push}} e analisi", "pubblicazione su App Store e Google Play"],
          res: "Un'app che supera la revisione degli store e che il Suo team gestisce da solo, senza dover chiamare uno sviluppatore."
        },
        {
          t: "Soluzioni di intelligenza artificiale",
          lead: "Automatizziamo i processi aziendali con {{agent|agenti di IA}}. L'intelligenza artificiale e il machine learning vanno dove fanno risparmiare tempo al personale o denaro all'azienda, e da nessun'altra parte.",
          body: "Dove le persone passano ore a smistare e-mail, documenti e richieste di assistenza, i {{llm|modelli linguistici}} tolgono davvero di mezzo la routine. Partiamo da un {{pilot|progetto pilota}} sui Suoi dati, così vede i numeri sull'accuratezza prima dello sviluppo principale, non dopo.",
          note: "Sull'IA siamo più scettici di molti. Circa metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione, senza alcun modello.",
          inc: ["agenti di IA che svolgono da soli i passaggi ripetitivi di un processo: smistano le richieste in arrivo, compilano il CRM, preparano le bozze di risposta ai clienti", "chatbot e assistenti per clienti e personale", "riconoscimento dei documenti ed estrazione dei dati", "classificazione delle richieste e ricerca nella base di conoscenza", "previsione della domanda e analisi dei dati", "un progetto pilota in cui la qualità si misura sui Suoi dati"],
          res: "Un'attività precisa che prima pesava sulle persone passa al sistema, e il controllo resta a una persona."
        },
        {
          t: "Sviluppo CRM ed ERP",
          lead: "Sistemi {{crm|CRM}} ed {{erp|ERP}} costruiti attorno al modo in cui lavora la Sua azienda. Non dovrà piegare l'azienda al software.",
          body: "Quando i commerciali tengono metà del lavoro su fogli di calcolo perché il sistema «non lo fa», sviluppare una soluzione propria diventa l'opzione più economica. I dati dei vecchi sistemi e dei fogli di calcolo li trasferiamo noi, e introduciamo il sistema un reparto alla volta, così il lavoro non si ferma neanche per un giorno.",
          note: "Un CRM pronto all'uso va benissimo finché il Suo processo è standard. Se lo è, Le consigliamo quello invece di uno sviluppo.",
          inc: ["moduli per vendite, magazzino, produzione e finanza: solo quelli che servono davvero", "ruoli, permessi e registro delle attività", "report e dashboard per la direzione", "migrazione dei dati da fogli di calcolo e sistemi legacy", "integrazione con contabilità, telefonia ed e-mail"],
          res: "Un solo sistema invece di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza rincorrere ogni settimana un report da ogni reparto."
        },
        {
          t: "Soluzioni cloud",
          lead: "Trasferiamo la Sua infrastruttura su {{aws|Amazon Web Services}}, in tutto o in parte, e poi la teniamo d'occhio perché continui a funzionare e non costi di più senza motivo.",
          body: "Il cloud conviene quando il carico va su e giù, quando serve {{failover|tolleranza ai guasti}} o quando un nuovo ambiente deve essere pronto in pochi minuti anziché in una settimana. Per questo una migrazione comincia con un audit e una stima dei costi. Il trasferimento avviene per fasi, con un {{rollback|piano di rollback}} a ogni passo.",
          note: "Il cloud non è sempre più economico di un server proprio. Se i numeri dicono che Le conviene restare sul Suo hardware, glielo diremo.",
          inc: ["audit dell'infrastruttura attuale e stima dei costi", "architettura su AWS e piano di migrazione", "trasferimento di server, database e file", "backup e monitoraggio", "ottimizzazione dei costi a migrazione conclusa"],
          res: "Un'infrastruttura che sopravvive al guasto di un server, e una bolletta del cloud che si può leggere e capire."
        },
        {
          t: "Infrastruttura aziendale su Red Hat",
          lead: "Costruiamo l'infrastruttura IT della Sua azienda su Red Hat: server con {{rhel|Red Hat Enterprise Linux}}, applicazioni sulla piattaforma di container {{openshift|OpenShift}}, configurazione tramite {{ansible|Ansible}}.",
          body: "Le aziende scelgono Red Hat quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di vivere nella testa di un solo amministratore (e anche gli amministratori vanno in ferie). L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni. Progettiamo l'infrastruttura in base ai Suoi carichi di lavoro e descriviamo la configurazione di ogni server in Ansible, così qualsiasi server si può ricostruire da un playbook, senza che nessuno debba ricordarsi come era stato fatto.",
          note: "Red Hat è nostro partner, quindi possiamo aiutarLa anche a orientarsi tra abbonamenti e supporto del produttore.",
          inc: ["audit dei server attuali e piano di migrazione", "adozione di Red Hat Enterprise Linux, con aggiornamenti gestiti centralmente tramite {{satellite|Red Hat Satellite}}", "OpenShift per le Sue applicazioni", "automazione di configurazione e deployment con Ansible", "account e accessi in un unico punto con {{idm|Identity Management}}", "monitoraggio, backup e documentazione per il Suo team"],
          res: "Un'infrastruttura che si può verificare, riprodurre e consegnare a un altro team, senza che le conoscenze se ne vadano insieme a qualcuno."
        },
        {
          t: "API e integrazioni",
          lead: "Progettiamo {{api|API}} per i Suoi sistemi e li colleghiamo ai servizi che usa già.",
          body: "Il problema che vediamo più spesso sono i dati inseriti due volte. Qualcuno ricopia a mano gli ordini del sito nel sistema contabile; i pagamenti si riconciliano su un foglio di calcolo. Un'integrazione toglie di mezzo quel lavoro, insieme agli errori che genera. Configuriamo anche il monitoraggio, perché quando un partner cambia la sua API l'integrazione si rompe in silenzio, ed è meglio saperlo dal sistema che da un cliente.",
          inc: ["progettazione e documentazione delle API", "integrazioni con sistemi di pagamento, corrieri, CRM e contabilità", "scambio di dati tra i Suoi sistemi interni", "{{queue|code e nuovi tentativi}} per quando qualcosa va storto", "monitoraggio e avvisi"],
          res: "I dati si inseriscono una volta sola e arrivano da soli dove servono."
        },
        {
          t: "Supporto tecnico",
          lead: "Ci occupiamo dei Suoi sistemi IT e continuiamo a svilupparli, anche quelli che non abbiamo realizzato noi.",
          body: "Correggere i bug è solo una parte del lavoro. Ci sono anche gli aggiornamenti che chiudono le falle di sicurezza, il monitoraggio che si accorge di un problema prima degli utenti e i piccoli miglioramenti strada facendo. Se il sistema arriva da un altro fornitore, partiamo da un audit e dalla documentazione, perché senza di essa ogni modifica è un azzardo.",
          inc: ["monitoraggio di disponibilità ed errori", "correzione dei bug e aggiornamenti di sicurezza", "backup, e verifiche che da quei backup si possa davvero ripristinare", "miglioramenti e nuove funzioni pianificati", "audit e documentazione di sistemi realizzati da altri"],
          res: "Il sistema funziona, e c'è un team a portata di mano che sa com'è fatto."
        }
      ]
    }
  };

  /* Спливні пояснення термінів */
  const GLOSS = {
    uk: {
      saas: "SaaS (software as a service) — програма, якою користуються через браузер за підпискою. Нічого не треба встановлювати: сервіс працює на сервері постачальника.",
      tenant: "Мультитенантність — коли одна копія сервісу обслуговує багатьох клієнтів, а дані кожного з них відокремлені від інших.",
      billing: "Білінг — частина сервісу, яка рахує, скільки клієнт винен за своїм тарифом, виставляє рахунки й приймає оплату.",
      api: "API — домовлений спосіб, у який одна програма звертається до іншої: передає замовлення, питає статус, забирає дані. Людина посередині не потрібна.",
      aws: "Amazon Web Services (AWS) — хмара компанії Amazon: сервери, бази даних і сховища, за які платять за фактичне використання. ArtIntelliCo — партнер AWS.",
      crm: "CRM — система, де ведуть клієнтів і угоди: хто дзвонив, що замовив, на якому етапі продаж.",
      erp: "ERP — система обліку для всього підприємства: склад, виробництво, закупівлі й фінанси в одній базі.",
      seo: "SEO — налаштування сайту, щоб пошукові системи правильно його індексували й показували у видачі.",
      native: "Нативний застосунок пишуть окремо під iOS і окремо під Android. Кросплатформний — один код на обидві платформи. Перший має повніший доступ до можливостей телефона, другий зазвичай дешевший.",
      push: "Push-сповіщення — коротке повідомлення від застосунку, яке з'являється на екрані телефона, навіть коли застосунок закритий.",
      agent: "ШІ-агент — програма на основі штучного інтелекту, яка сама виконує рутинні кроки процесу: розбирає заявку, вносить дані в CRM, готує відповідь клієнту. Контроль лишається за людиною.",
      llm: "Мовна модель — нейромережа, навчена на великих обсягах тексту. Вміє читати, сортувати й складати тексти, але її якість треба перевіряти на ваших даних.",
      pilot: "Пілот — невелика пробна версія на справжніх даних, щоб виміряти точність до того, як вкладатися в повну розробку.",
      failover: "Відмовостійкість — здатність системи працювати далі, коли один із серверів вийшов з ладу.",
      rollback: "План відкату — заздалегідь розписаний спосіб повернутися до попереднього стану, якщо крок міграції пішов не так.",
      queue: "Черга з повторними спробами: якщо інша система не відповіла, повідомлення не губиться, а чекає й надсилається ще раз.",
      rhel: "Red Hat Enterprise Linux (RHEL) — серверна операційна система Red Hat. Її життєвий цикл розрахований на десять років, а підписка включає підтримку виробника.",
      openshift: "OpenShift — контейнерна платформа Red Hat, на якій запускають і оновлюють ваші застосунки.",
      ansible: "Ansible — інструмент автоматизації від Red Hat. Налаштування сервера записують у сценарій, і за ним сервер можна зібрати заново.",
      satellite: "Red Hat Satellite — система, через яку сервери на Red Hat Enterprise Linux оновлюють централізовано, а не кожен окремо.",
      idm: "Identity Management — єдине керування обліковими записами й правами доступу замість окремих налаштувань на кожному сервері.",
      spec: "Технічне завдання — документ, де описано, що саме має робити система і як перевірити, що вона це робить."
    },
    en: {
      saas: "SaaS (software as a service) — software you use in a browser on a subscription. Nothing to install: it runs on the provider's servers.",
      tenant: "Multi-tenancy — one copy of a service serves many customers, while each customer's data stays separate from everyone else's.",
      billing: "Billing — the part of a service that works out what a customer owes on their plan, issues invoices and takes payment.",
      api: "API — an agreed way for one program to talk to another: send an order, ask for a status, fetch data. No person in the middle.",
      aws: "Amazon Web Services (AWS) — Amazon's cloud: servers, databases and storage you pay for as you use them. ArtIntelliCo is an AWS partner.",
      crm: "CRM — a system for customers and deals: who called, what they ordered, what stage the sale is at.",
      erp: "ERP — a system that runs the books for the whole company: warehouse, production, purchasing and finance in one database.",
      seo: "SEO — setting a site up so that search engines index it properly and show it in results.",
      native: "A native app is written separately for iOS and for Android. A cross-platform app shares one codebase across both. Native gets fuller access to the phone; cross-platform is usually cheaper.",
      push: "Push notification — a short message from an app that shows up on the phone's screen even when the app is closed.",
      agent: "AI agent — an AI-based program that carries out routine process steps on its own: sorting a request, entering data into the CRM, drafting a reply to a customer. A person stays in control.",
      llm: "Language model — a neural network trained on large amounts of text. It can read, sort and write text, but its quality has to be checked on your own data.",
      pilot: "Pilot — a small trial version run on real data to measure accuracy before you commit to the full build.",
      failover: "Fault tolerance — the system keeps working when one of its servers goes down.",
      rollback: "Rollback plan — a way back to the previous state, written down in advance, in case a migration step goes wrong.",
      queue: "A queue with retries: if the other system doesn't answer, the message isn't lost; it waits and gets sent again.",
      rhel: "Red Hat Enterprise Linux (RHEL) — Red Hat's server operating system. Its lifecycle runs ten years, and the subscription includes vendor support.",
      openshift: "OpenShift — Red Hat's container platform, where your applications run and get updated.",
      ansible: "Ansible — Red Hat's automation tool. A server's configuration is written down as a playbook, and the server can be rebuilt from it.",
      satellite: "Red Hat Satellite — a system for updating Red Hat Enterprise Linux servers centrally rather than one by one.",
      idm: "Identity Management — one place to manage accounts and access rights instead of separate settings on every server.",
      spec: "Specification — a document describing exactly what the system must do and how to check that it does it."
    },
    ru: {
      saas: "SaaS (software as a service) — программа, которой пользуются через браузер по подписке. Ничего не нужно устанавливать: сервис работает на серверах поставщика.",
      tenant: "Мультитенантность — когда одна копия сервиса обслуживает многих клиентов, а данные каждого отделены от остальных.",
      billing: "Биллинг — часть сервиса, которая считает, сколько клиент должен по своему тарифу, выставляет счета и принимает оплату.",
      api: "API — оговорённый способ, которым одна программа обращается к другой: передаёт заказ, спрашивает статус, забирает данные. Человек посередине не нужен.",
      aws: "Amazon Web Services (AWS) — облако компании Amazon: серверы, базы данных и хранилища, за которые платят по факту использования. ArtIntelliCo — партнёр AWS.",
      crm: "CRM — система, где ведут клиентов и сделки: кто звонил, что заказал, на каком этапе продажа.",
      erp: "ERP — система учёта для всего предприятия: склад, производство, закупки и финансы в одной базе.",
      seo: "SEO — настройка сайта, чтобы поисковые системы правильно его индексировали и показывали в выдаче.",
      native: "Нативное приложение пишут отдельно под iOS и отдельно под Android. Кроссплатформенное — один код на обе платформы. У первого полнее доступ к возможностям телефона, второе обычно дешевле.",
      push: "Push-уведомление — короткое сообщение от приложения, которое появляется на экране телефона, даже когда приложение закрыто.",
      agent: "ИИ-агент — программа на основе искусственного интеллекта, которая сама выполняет рутинные шаги процесса: разбирает заявку, вносит данные в CRM, готовит ответ клиенту. Контроль остаётся за человеком.",
      llm: "Языковая модель — нейросеть, обученная на больших объёмах текста. Умеет читать, сортировать и составлять тексты, но её качество нужно проверять на ваших данных.",
      pilot: "Пилот — небольшая пробная версия на настоящих данных, чтобы измерить точность до того, как вкладываться в полную разработку.",
      failover: "Отказоустойчивость — способность системы работать дальше, когда один из серверов вышел из строя.",
      rollback: "План отката — заранее расписанный способ вернуться к предыдущему состоянию, если шаг миграции пошёл не так.",
      queue: "Очередь с повторными попытками: если другая система не ответила, сообщение не теряется, а ждёт и отправляется ещё раз.",
      rhel: "Red Hat Enterprise Linux (RHEL) — серверная операционная система Red Hat. Её жизненный цикл рассчитан на десять лет, а подписка включает поддержку производителя.",
      openshift: "OpenShift — контейнерная платформа Red Hat, на которой запускают и обновляют ваши приложения.",
      ansible: "Ansible — инструмент автоматизации от Red Hat. Настройку сервера записывают в сценарий, и по нему сервер можно собрать заново.",
      satellite: "Red Hat Satellite — система, через которую серверы на Red Hat Enterprise Linux обновляют централизованно, а не каждый по отдельности.",
      idm: "Identity Management — единое управление учётными записями и правами доступа вместо отдельных настроек на каждом сервере.",
      spec: "Техническое задание — документ, где описано, что именно должна делать система и как проверить, что она это делает."
    },
    de: {
      saas: "SaaS (Software as a Service) – Software, die Sie im Browser per Abonnement nutzen. Nichts zu installieren: Sie läuft auf den Servern des Anbieters.",
      tenant: "Mandantenfähigkeit – eine Instanz des Dienstes bedient viele Kunden, und die Daten jedes Kunden bleiben von denen der anderen getrennt.",
      billing: "Abrechnung (Billing) – der Teil eines Dienstes, der ermittelt, was ein Kunde nach seinem Tarif schuldet, Rechnungen stellt und Zahlungen annimmt.",
      api: "API – eine vereinbarte Schnittstelle, über die ein Programm mit einem anderen spricht: eine Bestellung übergeben, einen Status abfragen, Daten abholen. Ohne Menschen dazwischen.",
      aws: "Amazon Web Services (AWS) – die Cloud von Amazon: Server, Datenbanken und Speicher, die Sie nach tatsächlicher Nutzung bezahlen. ArtIntelliCo ist AWS-Partner.",
      crm: "CRM – ein System für Kunden und Geschäfte: Wer hat angerufen, was wurde bestellt, in welcher Phase ist der Verkauf.",
      erp: "ERP – ein System, das die Bücher des ganzen Unternehmens führt: Lager, Produktion, Einkauf und Finanzen in einer Datenbank.",
      seo: "SEO – eine Website so einrichten, dass Suchmaschinen sie richtig indexieren und in den Ergebnissen anzeigen.",
      native: "Eine native App wird für iOS und für Android getrennt geschrieben. Eine plattformübergreifende App nutzt eine gemeinsame Codebasis für beide. Nativ bekommt vollen Zugriff auf das Telefon, plattformübergreifend ist meist günstiger.",
      push: "Push-Benachrichtigung – eine kurze Nachricht einer App, die auf dem Bildschirm des Telefons erscheint, auch wenn die App geschlossen ist.",
      agent: "KI-Agent – ein Programm auf Basis künstlicher Intelligenz, das Routineschritte eines Prozesses selbstständig erledigt: eine Anfrage sortieren, Daten ins CRM eintragen, eine Antwort an den Kunden vorbereiten. Die Kontrolle bleibt beim Menschen.",
      llm: "Sprachmodell – ein neuronales Netz, das auf großen Textmengen trainiert wurde. Es kann Texte lesen, sortieren und schreiben, aber seine Qualität muss an Ihren eigenen Daten geprüft werden.",
      pilot: "Pilotprojekt – eine kleine Testversion mit echten Daten, um die Genauigkeit zu messen, bevor Sie sich auf die vollständige Entwicklung festlegen.",
      failover: "Ausfallsicherheit – das System arbeitet weiter, wenn einer seiner Server ausfällt.",
      rollback: "Rückfallplan – ein vorab festgelegter Weg zurück zum vorherigen Zustand, falls ein Migrationsschritt schiefgeht.",
      queue: "Eine Warteschlange mit Wiederholungsversuchen: Antwortet das andere System nicht, geht die Nachricht nicht verloren, sondern wartet und wird erneut gesendet.",
      rhel: "Red Hat Enterprise Linux (RHEL) – das Server-Betriebssystem von Red Hat. Sein Lebenszyklus beträgt zehn Jahre, und das Abonnement umfasst den Herstellersupport.",
      openshift: "OpenShift – die Container-Plattform von Red Hat, auf der Ihre Anwendungen laufen und aktualisiert werden.",
      ansible: "Ansible – das Automatisierungswerkzeug von Red Hat. Die Konfiguration eines Servers wird als Playbook festgehalten, und der Server lässt sich daraus neu aufbauen.",
      satellite: "Red Hat Satellite – ein System, mit dem Server unter Red Hat Enterprise Linux zentral aktualisiert werden statt einer nach dem anderen.",
      idm: "Identity Management – eine zentrale Stelle für Konten und Zugriffsrechte statt eigener Einstellungen auf jedem Server.",
      spec: "Pflichtenheft – ein Dokument, das genau beschreibt, was das System tun muss und wie man prüft, dass es das tut."
    },
    fr: {
      saas: "SaaS (software as a service) — un logiciel qu'on utilise dans le navigateur, sur abonnement. Rien à installer : il tourne sur les serveurs du fournisseur.",
      tenant: "Multilocation — une seule instance du service sert de nombreux clients, tandis que les données de chacun restent séparées de celles des autres.",
      billing: "Facturation — la partie du service qui calcule ce que le client doit selon son forfait, émet les factures et encaisse les paiements.",
      api: "API — une façon convenue pour un programme de s'adresser à un autre : transmettre une commande, demander un statut, récupérer des données. Sans personne au milieu.",
      aws: "Amazon Web Services (AWS) — le cloud d'Amazon : serveurs, bases de données et stockage, payés selon l'usage réel. ArtIntelliCo est partenaire AWS.",
      crm: "CRM — un système où l'on suit les clients et les affaires : qui a appelé, ce qu'il a commandé, où en est la vente.",
      erp: "ERP — un système de gestion pour toute l'entreprise : entrepôt, production, achats et finances dans une seule base de données.",
      seo: "SEO — le travail sur un site pour que les moteurs de recherche l'indexent correctement et l'affichent dans leurs résultats.",
      native: "Une application native est écrite séparément pour iOS et pour Android. Une application multiplateforme partage le même code entre les deux. La native accède plus complètement au téléphone ; la multiplateforme coûte généralement moins cher.",
      push: "Notification push — un court message d'une application qui s'affiche sur l'écran du téléphone, même lorsque l'application est fermée.",
      agent: "Agent d'IA — un programme fondé sur l'intelligence artificielle qui exécute seul les étapes routinières d'un processus : trier une demande, saisir des données dans le CRM, préparer une réponse au client. Un humain garde le contrôle.",
      llm: "Modèle de langage — un réseau de neurones entraîné sur de grandes quantités de texte. Il sait lire, trier et rédiger des textes, mais sa qualité doit être vérifiée sur vos propres données.",
      pilot: "Pilote — une petite version d'essai sur des données réelles, pour mesurer la précision avant de vous engager dans le développement complet.",
      failover: "Tolérance aux pannes — la capacité du système à continuer de fonctionner quand l'un de ses serveurs tombe en panne.",
      rollback: "Plan de retour arrière — un moyen, prévu par écrit à l'avance, de revenir à l'état précédent si une étape de la migration tourne mal.",
      queue: "File d'attente avec nouvelles tentatives : si l'autre système ne répond pas, le message n'est pas perdu ; il attend, puis il est renvoyé.",
      rhel: "Red Hat Enterprise Linux (RHEL) — le système d'exploitation serveur de Red Hat. Son cycle de vie est de dix ans, et l'abonnement inclut le support de l'éditeur.",
      openshift: "OpenShift — la plateforme de conteneurs de Red Hat, sur laquelle vos applications tournent et sont mises à jour.",
      ansible: "Ansible — l'outil d'automatisation de Red Hat. La configuration d'un serveur est décrite dans un playbook, et le serveur peut être reconstruit à partir de celui-ci.",
      satellite: "Red Hat Satellite — un système qui permet de mettre à jour les serveurs Red Hat Enterprise Linux de façon centralisée plutôt qu'un par un.",
      idm: "Identity Management — un point unique pour gérer les comptes et les droits d'accès, au lieu de réglages séparés sur chaque serveur.",
      spec: "Cahier des charges — un document qui décrit précisément ce que le système doit faire et comment vérifier qu'il le fait."
    },
    es: {
      saas: "SaaS (software as a service) — un programa que se usa en el navegador mediante una suscripción. No hay nada que instalar: funciona en los servidores del proveedor.",
      tenant: "Multitenencia — una sola copia del servicio atiende a muchos clientes, y los datos de cada uno se mantienen separados de los del resto.",
      billing: "Facturación — la parte del servicio que calcula cuánto debe un cliente según su plan, emite las facturas y cobra.",
      api: "API — una forma acordada para que un programa hable con otro: enviar un pedido, consultar un estado, obtener datos. Sin ninguna persona en medio.",
      aws: "Amazon Web Services (AWS) — la nube de Amazon: servidores, bases de datos y almacenamiento que se pagan según el uso. ArtIntelliCo es socio de AWS.",
      crm: "CRM — un sistema para llevar clientes y operaciones: quién llamó, qué pidió, en qué fase está la venta.",
      erp: "ERP — un sistema de gestión para toda la empresa: almacén, producción, compras y finanzas en una sola base de datos.",
      seo: "SEO — preparar un sitio para que los buscadores lo indexen correctamente y lo muestren en los resultados.",
      native: "Una aplicación nativa se escribe por separado para iOS y para Android. Una multiplataforma comparte el mismo código en ambas. La nativa accede mejor a las funciones del teléfono; la multiplataforma suele ser más barata.",
      push: "Notificación push — un mensaje breve de una aplicación que aparece en la pantalla del teléfono aunque la aplicación esté cerrada.",
      agent: "Agente de IA — un programa basado en inteligencia artificial que realiza por sí solo pasos rutinarios de un proceso: clasificar una solicitud, introducir datos en el CRM, preparar la respuesta a un cliente. El control sigue en manos de una persona.",
      llm: "Modelo de lenguaje — una red neuronal entrenada con grandes cantidades de texto. Sabe leer, clasificar y redactar textos, pero su calidad hay que comprobarla con sus propios datos.",
      pilot: "Piloto — una pequeña versión de prueba con datos reales para medir la precisión antes de comprometerse con el desarrollo completo.",
      failover: "Tolerancia a fallos — el sistema sigue funcionando cuando cae uno de sus servidores.",
      rollback: "Plan de reversión — una forma de volver al estado anterior, escrita de antemano, por si un paso de la migración sale mal.",
      queue: "Una cola con reintentos: si el otro sistema no responde, el mensaje no se pierde; espera y se vuelve a enviar.",
      rhel: "Red Hat Enterprise Linux (RHEL) — el sistema operativo para servidores de Red Hat. Su ciclo de vida es de diez años, y la suscripción incluye el soporte del fabricante.",
      openshift: "OpenShift — la plataforma de contenedores de Red Hat, donde se ejecutan y se actualizan sus aplicaciones.",
      ansible: "Ansible — la herramienta de automatización de Red Hat. La configuración de un servidor se escribe como un playbook, y a partir de él se puede reconstruir el servidor.",
      satellite: "Red Hat Satellite — un sistema para actualizar los servidores con Red Hat Enterprise Linux de forma centralizada, en lugar de uno por uno.",
      idm: "Identity Management — un único lugar para gestionar cuentas y permisos de acceso, en vez de ajustes separados en cada servidor.",
      spec: "Especificación técnica — un documento que describe exactamente qué debe hacer el sistema y cómo comprobar que lo hace."
    },
    pt: {
      saas: "SaaS (software as a service) — software que se usa no browser, por subscrição. Não é preciso instalar nada: funciona nos servidores do fornecedor.",
      tenant: "Arquitetura multi-tenant — uma única cópia do serviço serve muitos clientes, mas os dados de cada um ficam separados dos restantes.",
      billing: "Faturação — a parte do serviço que calcula quanto o cliente deve pelo seu plano, emite as faturas e recebe o pagamento.",
      api: "API — uma forma combinada de um programa falar com outro: enviar uma encomenda, pedir um estado, ir buscar dados. Sem ninguém pelo meio.",
      aws: "Amazon Web Services (AWS) — a cloud da Amazon: servidores, bases de dados e armazenamento que se pagam à medida que se usam. A ArtIntelliCo é parceira da AWS.",
      crm: "CRM — sistema onde se gerem clientes e negócios: quem ligou, o que encomendou, em que fase está a venda.",
      erp: "ERP — sistema de gestão para toda a empresa: armazém, produção, compras e finanças numa só base de dados.",
      seo: "SEO — preparar um site para que os motores de pesquisa o indexem corretamente e o mostrem nos resultados.",
      native: "Uma aplicação nativa é escrita à parte para iOS e para Android. Uma aplicação multiplataforma partilha o mesmo código nas duas. A nativa tem acesso mais completo ao telemóvel; a multiplataforma costuma ser mais barata.",
      push: "Notificação push — uma mensagem curta de uma aplicação que aparece no ecrã do telemóvel mesmo com a aplicação fechada.",
      agent: "Agente de IA — um programa baseado em inteligência artificial que executa sozinho passos rotineiros de um processo: triar um pedido, introduzir dados no CRM, preparar uma resposta a um cliente. O controlo continua nas mãos de uma pessoa.",
      llm: "Modelo de linguagem — uma rede neuronal treinada com grandes volumes de texto. Consegue ler, ordenar e escrever texto, mas a sua qualidade tem de ser verificada com os seus próprios dados.",
      pilot: "Piloto — uma pequena versão experimental, a correr sobre dados reais, para medir a precisão antes de avançar para o desenvolvimento completo.",
      failover: "Tolerância a falhas — o sistema continua a funcionar quando um dos servidores vai abaixo.",
      rollback: "Plano de reversão — uma forma, escrita com antecedência, de voltar ao estado anterior caso um passo da migração corra mal.",
      queue: "Fila com novas tentativas: se o outro sistema não responde, a mensagem não se perde; fica à espera e é enviada outra vez.",
      rhel: "Red Hat Enterprise Linux (RHEL) — o sistema operativo para servidores da Red Hat. O seu ciclo de vida é de dez anos, e a subscrição inclui o suporte do fabricante.",
      openshift: "OpenShift — a plataforma de contentores da Red Hat, onde as suas aplicações correm e são atualizadas.",
      ansible: "Ansible — a ferramenta de automação da Red Hat. A configuração de um servidor fica escrita num playbook, e o servidor pode ser reconstruído a partir dele.",
      satellite: "Red Hat Satellite — um sistema para atualizar os servidores Red Hat Enterprise Linux de forma centralizada, e não um a um.",
      idm: "Identity Management — um só lugar para gerir contas e permissões de acesso, em vez de configurações separadas em cada servidor.",
      spec: "Especificação técnica — documento que descreve exatamente o que o sistema tem de fazer e como verificar que o faz."
    },
    it: {
      saas: "SaaS (software as a service) — software che si usa nel browser con un abbonamento. Niente da installare: gira sui server del fornitore.",
      tenant: "Multi-tenancy — una sola copia di un servizio serve molti clienti, mentre i dati di ciascuno restano separati da quelli degli altri.",
      billing: "Fatturazione — la parte di un servizio che calcola quanto deve un cliente in base al suo piano, emette le fatture e incassa i pagamenti.",
      api: "API — un modo concordato con cui un programma parla con un altro: invia un ordine, chiede uno stato, recupera dati. Nessuna persona in mezzo.",
      aws: "Amazon Web Services (AWS) — il cloud di Amazon: server, database e spazio di archiviazione che si pagano in base all'uso. ArtIntelliCo è partner di AWS.",
      crm: "CRM — un sistema per clienti e trattative: chi ha chiamato, che cosa ha ordinato, a che punto è la vendita.",
      erp: "ERP — un gestionale per tutta l'azienda: magazzino, produzione, acquisti e finanza in un unico database.",
      seo: "SEO — impostare un sito in modo che i motori di ricerca lo indicizzino correttamente e lo mostrino nei risultati.",
      native: "Un'app nativa si scrive separatamente per iOS e per Android. Un'app multipiattaforma usa un unico codice per entrambi. La nativa ha un accesso più completo al telefono; la multipiattaforma di solito costa meno.",
      push: "Notifica push — un breve messaggio di un'app che compare sullo schermo del telefono anche quando l'app è chiusa.",
      agent: "Agente di IA — un programma basato sull'intelligenza artificiale che svolge da solo i passaggi ripetitivi di un processo: smista una richiesta, inserisce i dati nel CRM, prepara una bozza di risposta al cliente. Il controllo resta a una persona.",
      llm: "Modello linguistico — una rete neurale addestrata su grandi quantità di testo. Sa leggere, smistare e scrivere testi, ma la sua qualità va verificata sui Suoi dati.",
      pilot: "Progetto pilota — una piccola versione di prova sui dati reali, per misurare l'accuratezza prima di impegnarsi nello sviluppo completo.",
      failover: "Tolleranza ai guasti — il sistema continua a funzionare quando uno dei suoi server si ferma.",
      rollback: "Piano di rollback — un modo per tornare allo stato precedente, messo per iscritto in anticipo, nel caso in cui un passo della migrazione vada storto.",
      queue: "Una coda con nuovi tentativi: se l'altro sistema non risponde, il messaggio non va perso; aspetta e viene inviato di nuovo.",
      rhel: "Red Hat Enterprise Linux (RHEL) — il sistema operativo per server di Red Hat. Il suo ciclo di vita dura dieci anni e l'abbonamento include il supporto del produttore.",
      openshift: "OpenShift — la piattaforma di container di Red Hat, su cui girano e si aggiornano le Sue applicazioni.",
      ansible: "Ansible — lo strumento di automazione di Red Hat. La configurazione di un server si scrive in un playbook, e da questo il server si può ricostruire.",
      satellite: "Red Hat Satellite — un sistema per aggiornare i server Red Hat Enterprise Linux in modo centralizzato anziché uno per uno.",
      idm: "Identity Management — un unico punto per gestire account e diritti di accesso, invece di impostazioni separate su ogni server.",
      spec: "Capitolato tecnico — un documento che descrive esattamente che cosa deve fare il sistema e come verificare che lo faccia."
    }
  };

  /* Підписи вікна довідки */
  const HX = {
    uk: { title: "Довідка", file: "ПОСЛУГИ.HLP", contents: "Зміст", back: "Назад", prevT: "Попередня тема", nextT: "Наступна тема", see: "Див. також", inc: "Що ми робимо", res: "Що ви отримаєте", note: "Примітка.", head: "Послуги ArtIntelliCo", pick: "Клацніть тему, щоб прочитати про послугу:", more: "Докладніше в довідці (F1)", topicHelp: "Довідка про послугу", index: "Зміст довідки", icon: "Довідка" },
    en: { title: "Help", file: "SERVICES.HLP", contents: "Contents", back: "Back", prevT: "Previous topic", nextT: "Next topic", see: "See also", inc: "What we do", res: "What you get", note: "Note:", head: "ArtIntelliCo services", pick: "Click a topic to read about a service:", more: "More in Help (F1)", topicHelp: "Help on this service", index: "Help contents", icon: "Help" },
    ru: { title: "Справка", file: "УСЛУГИ.HLP", contents: "Содержание", back: "Назад", prevT: "Предыдущая тема", nextT: "Следующая тема", see: "См. также", inc: "Что мы делаем", res: "Что вы получите", note: "Примечание.", head: "Услуги ArtIntelliCo", pick: "Щёлкните тему, чтобы прочитать об услуге:", more: "Подробнее в справке (F1)", topicHelp: "Справка об услуге", index: "Содержание справки", icon: "Справка" },
    de: { title: "Hilfe", file: "LEISTUNG.HLP", contents: "Inhalt", back: "Zurück", prevT: "Vorheriges Thema", nextT: "Nächstes Thema", see: "Siehe auch", inc: "Was wir tun", res: "Was Sie erhalten", note: "Hinweis:", head: "Leistungen von ArtIntelliCo", pick: "Klicken Sie auf ein Thema, um mehr über die Leistung zu lesen:", more: "Mehr dazu in der Hilfe (F1)", topicHelp: "Hilfe zu dieser Leistung", index: "Hilfe-Inhalt", icon: "Hilfe" },
    fr: { title: "Aide", file: "SERVICES.HLP", contents: "Sommaire", back: "Précédent", prevT: "Rubrique précédente", nextT: "Rubrique suivante", see: "Voir aussi", inc: "Ce que nous faisons", res: "Ce que vous obtenez", note: "Remarque :", head: "Services d'ArtIntelliCo", pick: "Cliquez sur une rubrique pour en savoir plus sur un service :", more: "Plus de détails dans l'Aide (F1)", topicHelp: "Aide sur ce service", index: "Sommaire de l'Aide", icon: "Aide" },
    es: { title: "Ayuda", file: "SERVICIO.HLP", contents: "Contenido", back: "Atrás", prevT: "Tema anterior", nextT: "Tema siguiente", see: "Véase también", inc: "Qué hacemos", res: "Qué obtiene usted", note: "Nota:", head: "Servicios de ArtIntelliCo", pick: "Haga clic en un tema para leer sobre el servicio:", more: "Más información en la Ayuda (F1)", topicHelp: "Ayuda sobre este servicio", index: "Contenido de la Ayuda", icon: "Ayuda" },
    pt: { title: "Ajuda", file: "SERVICOS.HLP", contents: "Conteúdo", back: "Voltar", prevT: "Tópico anterior", nextT: "Tópico seguinte", see: "Consulte também", inc: "O que fazemos", res: "O que recebe", note: "Nota:", head: "Serviços da ArtIntelliCo", pick: "Clique num tópico para ler sobre o serviço:", more: "Mais informações na Ajuda (F1)", topicHelp: "Ajuda sobre este serviço", index: "Conteúdo da Ajuda", icon: "Ajuda" },
    it: { title: "Guida", file: "SERVIZI.HLP", contents: "Sommario", back: "Indietro", prevT: "Argomento precedente", nextT: "Argomento successivo", see: "Vedere anche", inc: "Che cosa facciamo", res: "Che cosa ottiene", note: "Nota:", head: "Servizi di ArtIntelliCo", pick: "Fare clic su un argomento per leggere del servizio:", more: "Ulteriori informazioni nella Guida (F1)", topicHelp: "Guida su questo servizio", index: "Sommario della Guida", icon: "Guida" }
  };

  /* Рядки Windows 3.11 */
  const WX = {
    uk: {
      progman: "Диспетчер програм", write: "Write", cardfile: "Картотека", notepad: "Блокнот", mail: "Пошта", cpl: "Панель керування", clock: "Годинник", tasks: "Список завдань", dos: "Сеанс DOS",
      groups: { aic: "ArtIntelliCo", main: "Головна", ver: "Інші версії" },
      icons: { readme: "Про компанію", services: "Послуги", partners: "Партнери", contact: "Написати нам" },
      pmMenus: ["Файл", "Параметри", "Вікно", "Довідка"],
      pm: { open: "Відкрити", exit: "Завершити сеанс…", minOnUse: "Згортати при запуску", cascade: "Каскадом", tile: "Мозаїкою", about: "Про програму…" },
      sys: ["Відновити", "Перемістити", "Розмір", "Згорнути", "Розгорнути", "Закрити", "Перейти до…"],
      file: "Файл", edit: "Правка", view: "Вигляд", card: "Картка", options: "Параметри", help: "Довідка",
      print: "Друкувати", quit: "Вихід", copyAll: "Копіювати все", aboutApp: (n) => `Про програму «${n}»…`,
      cardsView: "Картки", listView: "Список", prev: "Попередня картка", next: "Наступна картка", writeAbout: "Написати про цю послугу",
      cardCount: (n) => `${n} карток`, cardMode: "Вигляд картки", listMode: "Вигляд списку",
      page: (n) => `Сторінка ${n}`,
      ole: { services: "ПОСЛУГИ.CRD", mail: "ЛИСТ.MSG", partners: "ПАРТНЕР.TXT" },
      oleHint: "Двічі клацніть вбудований об'єкт, щоб відкрити його.",
      to: "Кому:", subject: "Тема:", send: "Надіслати", checkNames: "Перевірити імена", attach: "Вкласти", optionsBtn: "Параметри", address: "Адреса",
      defaultSubject: "Запит з сайту", sendNote: "Лист відкриється у вашій поштовій програмі.",
      cplItems: ["Колір", "Робочий стіл", "Міжнародні"],
      color: "Колір", schemes: "Колірні схеми", desktopDlg: "Робочий стіл", wallpaper: "Шпалери", none: "(немає)", intl: "Міжнародні", language: "Мова",
      schemeNames: { def: "Стандартна", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Активне вікно", menu: "Звичайний  Вимкнено", text: "Текст вікна" },
      ok: "OK", cancel: "Скасувати", switchTo: "Перейти до", endTask: "Завершити завдання",
      analog: "Аналоговий", digital: "Цифровий",
      aboutLines: ["ArtIntelliCo for Workgroups", "Версія 3.11", "© 1985–2026 ArtIntelliCo", "", "Розширений режим 386", "Вільна пам'ять: 14 532 КБ", "Системні ресурси: 79% вільно"],
      exitText: "Це завершить ваш сеанс ArtIntelliCo for Workgroups.",
      exitDos: "Введіть win, щоб знову запустити систему.",
      bad: "Невірна команда або ім'я файлу",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      version: "Версія 3.11",
      copied: "Текст скопійовано в буфер обміну."
    },
    en: {
      progman: "Program Manager", write: "Write", cardfile: "Cardfile", notepad: "Notepad", mail: "Mail", cpl: "Control Panel", clock: "Clock", tasks: "Task List", dos: "DOS Prompt",
      groups: { aic: "ArtIntelliCo", main: "Main", ver: "Other versions" },
      icons: { readme: "About", services: "Services", partners: "Partners", contact: "Write to us" },
      pmMenus: ["File", "Options", "Window", "Help"],
      pm: { open: "Open", exit: "Exit Windows…", minOnUse: "Minimize on Use", cascade: "Cascade", tile: "Tile", about: "About Program Manager…" },
      sys: ["Restore", "Move", "Size", "Minimize", "Maximize", "Close", "Switch To…"],
      file: "File", edit: "Edit", view: "View", card: "Card", options: "Options", help: "Help",
      print: "Print", quit: "Exit", copyAll: "Copy all", aboutApp: (n) => `About ${n}…`,
      cardsView: "Card", listView: "List", prev: "Previous card", next: "Next card", writeAbout: "Write about this service",
      cardCount: (n) => `${n} Cards`, cardMode: "Card View", listMode: "List View",
      page: (n) => `Page ${n}`,
      ole: { services: "SERVICES.CRD", mail: "LETTER.MSG", partners: "PARTNERS.TXT" },
      oleHint: "Double-click an embedded object to open it.",
      to: "To:", subject: "Subject:", send: "Send", checkNames: "Check Names", attach: "Attach", optionsBtn: "Options", address: "Address",
      defaultSubject: "Enquiry from the website", sendNote: "The letter will open in your email app.",
      cplItems: ["Color", "Desktop", "International"],
      color: "Color", schemes: "Color Schemes", desktopDlg: "Desktop", wallpaper: "Wallpaper", none: "(None)", intl: "International", language: "Language",
      schemeNames: { def: "Default", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Active", menu: "Normal  Disabled", text: "Window Text" },
      ok: "OK", cancel: "Cancel", switchTo: "Switch To", endTask: "End Task",
      analog: "Analog", digital: "Digital",
      aboutLines: ["ArtIntelliCo for Workgroups", "Version 3.11", "© 1985–2026 ArtIntelliCo", "", "386 Enhanced Mode", "Memory: 14,532 KB Free", "System Resources: 79% Free"],
      exitText: "This will end your ArtIntelliCo for Workgroups session.",
      exitDos: "Type win to start the system again.",
      bad: "Bad command or file name",
      skip: "Press any key to skip",
      version: "Version 3.11",
      copied: "Text copied to the clipboard."
    },
    ru: {
      progman: "Диспетчер программ", write: "Write", cardfile: "Картотека", notepad: "Блокнот", mail: "Почта", cpl: "Панель управления", clock: "Часы", tasks: "Список задач", dos: "Сеанс DOS",
      groups: { aic: "ArtIntelliCo", main: "Главная", ver: "Другие версии" },
      icons: { readme: "О компании", services: "Услуги", partners: "Партнёры", contact: "Написать нам" },
      pmMenus: ["Файл", "Параметры", "Окно", "Справка"],
      pm: { open: "Открыть", exit: "Завершить сеанс…", minOnUse: "Сворачивать при запуске", cascade: "Каскадом", tile: "Мозаикой", about: "О программе…" },
      sys: ["Восстановить", "Переместить", "Размер", "Свернуть", "Развернуть", "Закрыть", "Перейти к…"],
      file: "Файл", edit: "Правка", view: "Вид", card: "Карточка", options: "Параметры", help: "Справка",
      print: "Печать", quit: "Выход", copyAll: "Копировать всё", aboutApp: (n) => `О программе «${n}»…`,
      cardsView: "Карточки", listView: "Список", prev: "Предыдущая карточка", next: "Следующая карточка", writeAbout: "Написать об этой услуге",
      cardCount: (n) => `${n} карточек`, cardMode: "Вид карточек", listMode: "Вид списка",
      page: (n) => `Страница ${n}`,
      ole: { services: "УСЛУГИ.CRD", mail: "ПИСЬМО.MSG", partners: "ПАРТНЁР.TXT" },
      oleHint: "Дважды щёлкните встроенный объект, чтобы открыть его.",
      to: "Кому:", subject: "Тема:", send: "Отправить", checkNames: "Проверить имена", attach: "Вложить", optionsBtn: "Параметры", address: "Адрес",
      defaultSubject: "Запрос с сайта", sendNote: "Письмо откроется в вашей почтовой программе.",
      cplItems: ["Цвет", "Рабочий стол", "Международные"],
      color: "Цвет", schemes: "Цветовые схемы", desktopDlg: "Рабочий стол", wallpaper: "Обои", none: "(нет)", intl: "Международные", language: "Язык",
      schemeNames: { def: "Стандартная", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Активное окно", menu: "Обычный  Отключён", text: "Текст окна" },
      ok: "OK", cancel: "Отмена", switchTo: "Перейти к", endTask: "Снять задачу",
      analog: "Аналоговые", digital: "Цифровые",
      aboutLines: ["ArtIntelliCo for Workgroups", "Версия 3.11", "© 1985–2026 ArtIntelliCo", "", "Расширенный режим 386", "Свободная память: 14 532 КБ", "Системные ресурсы: 79% свободно"],
      exitText: "Это завершит ваш сеанс ArtIntelliCo for Workgroups.",
      exitDos: "Введите win, чтобы снова запустить систему.",
      bad: "Неверная команда или имя файла",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      version: "Версия 3.11",
      copied: "Текст скопирован в буфер обмена."
    },
    de: {
      progman: "Programm-Manager", write: "Write", cardfile: "Kartei", notepad: "Editor", mail: "Mail", cpl: "Systemsteuerung", clock: "Uhr", tasks: "Task-Liste", dos: "MS-DOS-Eingabe­aufforderung",
      groups: { aic: "ArtIntelliCo", main: "Hauptgruppe", ver: "Andere Versionen" },
      icons: { readme: "Über uns", services: "Leistungen", partners: "Partner", contact: "Schreiben Sie uns" },
      pmMenus: ["Datei", "Optionen", "Fenster", "Hilfe"],
      pm: { open: "Öffnen", exit: "Windows beenden…", minOnUse: "Nach Programmstart minimieren", cascade: "Überlappend", tile: "Nebeneinander", about: "Info über Programm-Manager…" },
      sys: ["Wiederherstellen", "Verschieben", "Größe ändern", "Symbol", "Vollbild", "Schließen", "Wechseln zu…"],
      file: "Datei", edit: "Bearbeiten", view: "Ansicht", card: "Karte", options: "Optionen", help: "Hilfe",
      print: "Drucken", quit: "Beenden", copyAll: "Alles kopieren", aboutApp: (n) => `Info über ${n}…`,
      cardsView: "Karte", listView: "Liste", prev: "Vorherige Karte", next: "Nächste Karte", writeAbout: "Zu dieser Leistung schreiben",
      cardCount: (n) => `${n} Karten`, cardMode: "Kartenansicht", listMode: "Listenansicht",
      page: (n) => `Seite ${n}`,
      ole: { services: "LEISTUNG.CRD", mail: "BRIEF.MSG", partners: "PARTNER.TXT" },
      oleHint: "Doppelklicken Sie auf ein eingebettetes Objekt, um es zu öffnen.",
      to: "An:", subject: "Betreff:", send: "Senden", checkNames: "Namen prüfen", attach: "Anlage", optionsBtn: "Optionen", address: "Adresse",
      defaultSubject: "Anfrage über die Website", sendNote: "Die Nachricht wird in Ihrem E-Mail-Programm geöffnet.",
      cplItems: ["Farben", "Desktop", "Länder­einstellungen"],
      color: "Farben", schemes: "Farbschemas", desktopDlg: "Desktop", wallpaper: "Hintergrundbild", none: "(Keines)", intl: "Ländereinstellungen", language: "Sprache",
      schemeNames: { def: "Windows-Standard", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Aktiv", menu: "Normal  Gesperrt", text: "Fenstertext" },
      ok: "OK", cancel: "Abbrechen", switchTo: "Wechseln zu", endTask: "Task beenden",
      analog: "Analog", digital: "Digital",
      aboutLines: ["ArtIntelliCo for Workgroups", "Version 3.11", "© 1985–2026 ArtIntelliCo", "", "Erweiterter Modus für 386-PCs", "Speicher: 14.532 KB frei", "Systemressourcen: 79% frei"],
      exitText: "Hiermit wird Ihre Sitzung von ArtIntelliCo for Workgroups beendet.",
      exitDos: "Geben Sie win ein, um das System erneut zu starten.",
      bad: "Befehl oder Dateiname nicht gefunden",
      skip: "Drücken Sie eine beliebige Taste zum Überspringen",
      version: "Version 3.11",
      copied: "Text in die Zwischenablage kopiert."
    },
    fr: {
      progman: "Gestionnaire de programmes", write: "Write", cardfile: "Fichier", notepad: "Bloc-notes", mail: "Mail", cpl: "Panneau de configuration", clock: "Horloge", tasks: "Liste des tâches", dos: "Invite MS-DOS",
      groups: { aic: "ArtIntelliCo", main: "Groupe principal", ver: "Autres versions" },
      icons: { readme: "À propos", services: "Services", partners: "Partenaires", contact: "Nous écrire" },
      pmMenus: ["Fichier", "Options", "Fenêtre", "Aide"],
      pm: { open: "Ouvrir", exit: "Quitter Windows…", minOnUse: "Réduire à l'utilisation", cascade: "Cascade", tile: "Mosaïque", about: "À propos du Gestionnaire de programmes…" },
      sys: ["Restauration", "Déplacement", "Dimension", "Réduction", "Agrandissement", "Fermeture", "Basculer vers…"],
      file: "Fichier", edit: "Édition", view: "Affichage", card: "Fi&che", options: "Options", help: "Aide",
      print: "Imprimer", quit: "Quitter", copyAll: "Tout copier", aboutApp: (n) => `À propos de ${n}…`,
      cardsView: "Fiche", listView: "Liste", prev: "Fiche précédente", next: "Fiche suivante", writeAbout: "Écrire au sujet de ce service",
      cardCount: (n) => `${n} fiches`, cardMode: "Mode Fiche", listMode: "Mode Liste",
      page: (n) => `Page ${n}`,
      ole: { services: "SERVICES.CRD", mail: "LETTRE.MSG", partners: "PARTENAI.TXT" },
      oleHint: "Double-cliquez sur un objet incorporé pour l'ouvrir.",
      to: "À :", subject: "Objet :", send: "Envoyer", checkNames: "Vérifier les noms", attach: "Joindre", optionsBtn: "Options", address: "Adresses",
      defaultSubject: "Demande depuis le site", sendNote: "Le message s'ouvrira dans votre logiciel de messagerie.",
      cplItems: ["Couleurs", "Bureau", "International"],
      color: "Couleurs", schemes: "Modèles de couleurs", desktopDlg: "Bureau", wallpaper: "Papier peint", none: "(Aucun)", intl: "International", language: "Langue",
      schemeNames: { def: "Windows par défaut", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Actif", menu: "Normal  Désactivé", text: "Texte de la fenêtre" },
      ok: "OK", cancel: "Annuler", switchTo: "Basculer vers", endTask: "Fin de tâche",
      analog: "Analogique", digital: "Numérique",
      aboutLines: ["ArtIntelliCo for Workgroups", "Version 3.11", "© 1985–2026 ArtIntelliCo", "", "Mode étendu 386", "Mémoire : 14 532 Ko libres", "Ressources système : 79 % libres"],
      exitText: "Cette opération va mettre fin à votre session ArtIntelliCo for Workgroups.",
      exitDos: "Tapez win pour relancer le système.",
      bad: "Commande ou nom de fichier incorrect",
      skip: "Appuyez sur une touche pour passer",
      version: "Version 3.11",
      copied: "Texte copié dans le Presse-papiers."
    },
    es: {
      progman: "Administrador de programas", write: "Write", cardfile: "Fichero", notepad: "Bloc de notas", mail: "Correo", cpl: "Panel de control", clock: "Reloj", tasks: "Lista de tareas", dos: "Símbolo del MS-DOS",
      groups: { aic: "ArtIntelliCo", main: "Principal", ver: "Otras versiones" },
      icons: { readme: "La empresa", services: "Servicios", partners: "Socios", contact: "Escríbanos" },
      pmMenus: ["Archivo", "Opciones", "Ventana", "Ay&uda"],
      pm: { open: "Abrir", exit: "Salir de Windows…", minOnUse: "Minimizar al usar", cascade: "Cascada", tile: "Mosaico", about: "Acerca del Administrador de programas…" },
      sys: ["Restaurar", "Mover", "Tamaño", "Minimizar", "Maximizar", "Cerrar", "Cambiar a…"],
      file: "Archivo", edit: "Edición", view: "Ver", card: "Ficha", options: "Opciones", help: "Ay&uda",
      print: "Imprimir", quit: "Salir", copyAll: "Copiar todo", aboutApp: (n) => `Acerca de ${n}…`,
      cardsView: "Ficha", listView: "Lista", prev: "Ficha anterior", next: "Ficha siguiente", writeAbout: "Escribir sobre este servicio",
      cardCount: (n) => `${n} fichas`, cardMode: "Vista de fichas", listMode: "Vista de lista",
      page: (n) => `Página ${n}`,
      ole: { services: "SERVICIO.CRD", mail: "CARTA.MSG", partners: "SOCIOS.TXT" },
      oleHint: "Haga doble clic en un objeto incrustado para abrirlo.",
      to: "Para:", subject: "Asunto:", send: "Enviar", checkNames: "Comprobar nombres", attach: "Adjuntar", optionsBtn: "Opciones", address: "Direcciones",
      defaultSubject: "Consulta desde la web", sendNote: "El mensaje se abrirá en su programa de correo.",
      cplItems: ["Colores", "Escritorio", "Internacional"],
      color: "Colores", schemes: "Combinaciones de colores", desktopDlg: "Escritorio", wallpaper: "Papel tapiz", none: "(Ninguno)", intl: "Internacional", language: "Idioma",
      schemeNames: { def: "Predeterminada de Windows", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Activa", menu: "Normal  Desactivado", text: "Texto de ventana" },
      ok: "Aceptar", cancel: "Cancelar", switchTo: "Cambiar a", endTask: "Finalizar tarea",
      analog: "Analógico", digital: "Digital",
      aboutLines: ["ArtIntelliCo for Workgroups", "Versión 3.11", "© 1985–2026 ArtIntelliCo", "", "Modo extendido 386", "Memoria: 14.532 KB libres", "Recursos del sistema: 79% libres"],
      exitText: "Con esto finalizará su sesión de ArtIntelliCo for Workgroups.",
      exitDos: "Escriba win para volver a iniciar el sistema.",
      bad: "Comando o nombre de archivo incorrecto",
      skip: "Presione cualquier tecla para omitir",
      version: "Versión 3.11",
      copied: "Texto copiado en el Portapapeles."
    },
    pt: {
      progman: "Gestor de programas", write: "Write", cardfile: "Fichas", notepad: "Bloco de notas", mail: "Correio", cpl: "Painel de controlo", clock: "Relógio", tasks: "Lista de tarefas", dos: "Linha de comandos MS-DOS",
      groups: { aic: "ArtIntelliCo", main: "Principal", ver: "Outras versões" },
      icons: { readme: "A empresa", services: "Serviços", partners: "Parceiros", contact: "Escreva-nos" },
      pmMenus: ["Ficheiro", "Opções", "Janela", "Ajuda"],
      pm: { open: "Abrir", exit: "Sair do Windows…", minOnUse: "Minimizar ao utilizar", cascade: "Em cascata", tile: "Em mosaico", about: "Acerca do Gestor de programas…" },
      sys: ["Restaurar", "Mover", "Tamanho", "Minimizar", "Maximizar", "Fechar", "Mudar para…"],
      file: "Ficheiro", edit: "Editar", view: "Ver", card: "Fic&ha", options: "Opções", help: "Ajuda",
      print: "Imprimir", quit: "Sair", copyAll: "Copiar tudo", aboutApp: (n) => `Acerca de ${n}…`,
      cardsView: "Ficha", listView: "Lista", prev: "Ficha anterior", next: "Ficha seguinte", writeAbout: "Escrever sobre este serviço",
      cardCount: (n) => `${n} fichas`, cardMode: "Vista de fichas", listMode: "Vista de lista",
      page: (n) => `Página ${n}`,
      ole: { services: "SERVICOS.CRD", mail: "CARTA.MSG", partners: "PARCEIRO.TXT" },
      oleHint: "Faça duplo clique num objeto incorporado para o abrir.",
      to: "Para:", subject: "Assunto:", send: "Enviar", checkNames: "Verificar nomes", attach: "Anexar", optionsBtn: "Opções", address: "Endereços",
      defaultSubject: "Pedido a partir do site", sendNote: "A mensagem será aberta no seu programa de correio eletrónico.",
      cplItems: ["Cores", "Ambiente de trabalho", "Internacional"],
      color: "Cores", schemes: "Esquemas de cores", desktopDlg: "Ambiente de trabalho", wallpaper: "Imagem de fundo", none: "(Nenhuma)", intl: "Internacional", language: "Idioma",
      schemeNames: { def: "Predefinição do Windows", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Ativa", menu: "Normal  Desativado", text: "Texto da janela" },
      ok: "OK", cancel: "Cancelar", switchTo: "Mudar para", endTask: "Terminar tarefa",
      analog: "Analógico", digital: "Digital",
      aboutLines: ["ArtIntelliCo for Workgroups", "Versão 3.11", "© 1985–2026 ArtIntelliCo", "", "Modo expandido 386", "Memória: 14 532 KB livres", "Recursos do sistema: 79% livres"],
      exitText: "Esta ação termina a sua sessão do ArtIntelliCo for Workgroups.",
      exitDos: "Escreva win para iniciar novamente o sistema.",
      bad: "Comando ou nome de ficheiro inválido",
      skip: "Prima qualquer tecla para saltar",
      version: "Versão 3.11",
      copied: "Texto copiado para a Área de transferência."
    },
    it: {
      progman: "Program Manager", write: "Write", cardfile: "Schedario", notepad: "Blocco note", mail: "Posta", cpl: "Pannello di controllo", clock: "Orologio", tasks: "Elenco attività", dos: "Prompt di MS-DOS",
      groups: { aic: "ArtIntelliCo", main: "Principale", ver: "Altre versioni" },
      icons: { readme: "Chi siamo", services: "Servizi", partners: "Partner", contact: "Ci scriva" },
      pmMenus: ["File", "Opzioni", "Finestra", "Guida"],
      pm: { open: "Apri", exit: "Esci da Windows…", minOnUse: "Riduci a icona all'uso", cascade: "Sovrapponi", tile: "Affianca", about: "Informazioni su Program Manager…" },
      sys: ["Ripristina", "Sposta", "Ridimensiona", "Riduci a icona", "Ingrandisci", "Chiudi", "Passa a…"],
      file: "File", edit: "Modifica", view: "Visualizza", card: "Scheda", options: "Opzioni", help: "Guida",
      print: "Stampa", quit: "Esci", copyAll: "Copia tutto", aboutApp: (n) => `Informazioni su ${n}…`,
      cardsView: "Scheda", listView: "Elenco", prev: "Scheda precedente", next: "Scheda successiva", writeAbout: "Scrivere su questo servizio",
      cardCount: (n) => `${n} schede`, cardMode: "Visualizza scheda", listMode: "Visualizza elenco",
      page: (n) => `Pagina ${n}`,
      ole: { services: "SERVIZI.CRD", mail: "LETTERA.MSG", partners: "PARTNER.TXT" },
      oleHint: "Fare doppio clic su un oggetto incorporato per aprirlo.",
      to: "A:", subject: "Oggetto:", send: "Invia", checkNames: "Controlla nomi", attach: "Allega", optionsBtn: "Opzioni", address: "Indirizzi",
      defaultSubject: "Richiesta dal sito", sendNote: "Il messaggio si aprirà nel Suo programma di posta elettronica.",
      cplItems: ["Colori", "Desktop", "Internazionale"],
      color: "Colori", schemes: "Combinazioni di colori", desktopDlg: "Desktop", wallpaper: "Sfondo", none: "(Nessuno)", intl: "Internazionale", language: "Lingua",
      schemeNames: { def: "Predefinita di Windows", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Attiva", menu: "Normale  Disattivato", text: "Testo finestra" },
      ok: "OK", cancel: "Annulla", switchTo: "Passa a", endTask: "Termina attività",
      analog: "Analogico", digital: "Digitale",
      aboutLines: ["ArtIntelliCo for Workgroups", "Versione 3.11", "© 1985–2026 ArtIntelliCo", "", "Modalità 386 avanzata", "Memoria: 14.532 KB liberi", "Risorse di sistema: 79% libere"],
      exitText: "La sessione di ArtIntelliCo for Workgroups verrà chiusa.",
      exitDos: "Digitare win per riavviare il sistema.",
      bad: "Comando o nome di file non valido",
      skip: "Premere un tasto qualsiasi per saltare",
      version: "Versione 3.11",
      copied: "Testo copiato negli Appunti."
    }
  };

  const SCHEMES = {
    def: { desktop: "#C0C0C0", workspace: "#FFFFFF", title: "#000080", "title-text": "#FFFFFF", ititle: "#FFFFFF", "ititle-text": "#000000", frame: "#C0C0C0", menu: "#FFFFFF", "menu-text": "#000000", hl: "#000080", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" },
    hotdog: { desktop: "#FFFF00", workspace: "#FFFF00", title: "#000000", "title-text": "#FFFFFF", ititle: "#FF0000", "ititle-text": "#FFFFFF", frame: "#FF0000", menu: "#FF0000", "menu-text": "#FFFFFF", hl: "#000000", "hl-text": "#FFFFFF", window: "#FF0000", "window-text": "#FFFFFF" },
    ocean: { desktop: "#008080", workspace: "#C0E0E0", title: "#008080", "title-text": "#FFFFFF", ititle: "#C0E0E0", "ititle-text": "#004040", frame: "#80C0C0", menu: "#FFFFFF", "menu-text": "#000000", hl: "#008080", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" },
    leather: { desktop: "#000000", workspace: "#808080", title: "#000000", "title-text": "#FFFFFF", ititle: "#808080", "ititle-text": "#C0C0C0", frame: "#808080", menu: "#C0C0C0", "menu-text": "#000000", hl: "#000000", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" }
  };
  const WALLS = {
    none: "none",
    squares: "linear-gradient(90deg, rgba(0,0,0,.18) 1px, transparent 1px), linear-gradient(rgba(0,0,0,.18) 1px, transparent 1px)",
    argyle: "linear-gradient(45deg, rgba(0,0,128,.25) 25%, transparent 25%, transparent 75%, rgba(0,0,128,.25) 75%), linear-gradient(45deg, rgba(128,0,0,.18) 25%, transparent 25%, transparent 75%, rgba(128,0,0,.18) 75%)",
    tartan: "repeating-linear-gradient(90deg, rgba(0,96,0,.35) 0 8px, transparent 8px 24px, rgba(160,0,0,.3) 24px 28px, transparent 28px 40px), repeating-linear-gradient(0deg, rgba(0,96,0,.35) 0 8px, transparent 8px 24px, rgba(160,0,0,.3) 24px 28px, transparent 28px 40px)"
  };
  const WALL_SIZE = { none: "auto", squares: "24px 24px", argyle: "32px 32px, 32px 32px", tartan: "auto" };
  const WALL_POS = { none: "0 0", squares: "0 0", argyle: "0 0, 16px 16px", tartan: "0 0" };
  const LANGS = AIC.langs;
  const LANG_NAMES = AIC.langNames;
  /* [назва, id варіанта, піктограма]; адресу дає AIC.url з поточною мовою */
  const VERSIONS = [["Norton Commander", "nc", "nc"], ["DOS", "dos", "dos"], ["UNIX", "unix", "unix"], ["Apple ][", "apple", "apple"], ["Apple Lisa", "lisa", "lisa"], ["Linux 1996", "linux", "linux"], ["Midnight Commander", "mc", "mc"], ["AI", "ai", "ai"]];
  const go = (id) => { location.href = AIC.url(id, lang); };

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const narrow = () => matchMedia("(max-width: 720px)").matches;
  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || LANGS.find((l) => nav.startsWith(l)) || "uk";
  if (!LANGS.includes(lang)) lang = "uk";
  let scheme = store.get("aic-w31-scheme");
  if (!SCHEMES[scheme]) scheme = "def";
  let wall = store.get("aic-w31-wall");
  if (!WALLS[wall]) wall = "none";
  let minOnUse = false;
  const t = () => I18N[lang];
  const w = () => WX[lang];
  const svc = () => SVC[lang].items;
  const hx = () => HX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  /* {{ключ|текст}}: plain — просто текст, rich — кнопка зі спливним поясненням */
  const plain = (s) => String(s).replace(/\{\{\w+\|([^}]+)\}\}/g, "$1");
  const rich = (s) => esc(s).replace(/\{\{(\w+)\|([^}]+)\}\}/g, (m, k, v) => `<button type="button" class="hpop" data-g="${k}" aria-haspopup="dialog" aria-expanded="false">${v}</button>`);
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };
  const siteUrl = () => location.origin + AIC.url("classic", lang);

  /* ---------- Піктограми 32×32 у 16 кольорах VGA ---------- */
  const px = (body) => `<svg viewBox="0 0 32 32" shape-rendering="crispEdges" aria-hidden="true">${body}</svg>`;
  const ICON = {
    write: px(`<path d="M6 3h15l5 5v21H6z" fill="#fff" stroke="#000"/><path d="M21 3v5h5" fill="none" stroke="#000"/><path d="M9 11h9M9 14h13M9 17h13M9 20h10" stroke="#000080"/><path d="M10 23l3-7 3 7M11 21h4" fill="none" stroke="#C00000" stroke-width="1.5"/><path d="M24 12l5-5 2 2-5 5-3 1z" fill="#C0C000" stroke="#000"/>`),
    cardfile: px(`<rect x="10" y="3" width="19" height="13" fill="#fff" stroke="#000"/><rect x="7" y="7" width="19" height="13" fill="#fff" stroke="#000"/><rect x="4" y="11" width="19" height="13" fill="#fff" stroke="#000"/><path d="M4 15h19" stroke="#C00000"/><path d="M6 18h14M6 21h10" stroke="#000080"/><rect x="4" y="25" width="25" height="4" fill="#808080" stroke="#000"/>`),
    notepad: px(`<rect x="7" y="4" width="18" height="25" fill="#fff" stroke="#000"/><path d="M9 3v3M13 3v3M17 3v3M21 3v3" stroke="#000" stroke-width="2"/><rect x="7" y="6" width="18" height="2" fill="#00C0C0"/><path d="M10 12h12M10 15h12M10 18h12M10 21h8M10 24h10" stroke="#808080"/>`),
    mail: px(`<rect x="3" y="8" width="26" height="17" fill="#FFFF80" stroke="#000"/><path d="M3 8l13 10 13-10" fill="none" stroke="#000"/><path d="M3 25l10-8M29 25l-10-8" stroke="#000"/><rect x="22" y="3" width="7" height="6" fill="#C00000" stroke="#000"/>`),
    cpl: px(`<rect x="4" y="4" width="20" height="15" fill="#C0C0C0" stroke="#000"/><rect x="6" y="6" width="16" height="11" fill="#008080"/><rect x="9" y="19" width="10" height="3" fill="#C0C0C0" stroke="#000"/><rect x="3" y="23" width="22" height="5" fill="#C0C0C0" stroke="#000"/><rect x="26" y="18" width="4" height="7" rx="2" fill="#fff" stroke="#000"/><path d="M28 18v-4h-4" fill="none" stroke="#000"/><rect x="8" y="8" width="4" height="3" fill="#FFFF00"/><rect x="14" y="11" width="5" height="3" fill="#C00000"/>`),
    clock: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000" stroke-width="2"/><path d="M16 16V7M16 16l6 4" stroke="#000" stroke-width="2"/><path d="M16 4v2M16 26v2M4 16h2M26 16h2" stroke="#000080"/>`),
    dos: px(`<rect x="2" y="5" width="28" height="22" fill="#000" stroke="#808080"/><rect x="2" y="5" width="28" height="3" fill="#000080"/><path d="M5 13h3M5 13v6M5 19h3M10 15h1M10 18h1M13 12l4 8M19 19h5" stroke="#C0C0C0"/><rect x="25" y="17" width="2" height="2" fill="#C0C0C0"/>`),
    group: px(`<rect x="2" y="4" width="28" height="23" fill="#fff" stroke="#000"/><rect x="2" y="4" width="28" height="4" fill="#000080"/><rect x="6" y="12" width="5" height="4" fill="#C00000"/><rect x="14" y="12" width="5" height="4" fill="#008000"/><rect x="22" y="12" width="5" height="4" fill="#C0C000"/><rect x="6" y="19" width="5" height="4" fill="#0000C0"/><rect x="14" y="19" width="5" height="4" fill="#808080"/>`),
    progman: px(`<rect x="2" y="4" width="28" height="23" fill="#C0C0C0" stroke="#000"/><rect x="2" y="4" width="28" height="4" fill="#000080"/><rect x="5" y="11" width="10" height="7" fill="#fff" stroke="#000"/><rect x="17" y="11" width="10" height="7" fill="#fff" stroke="#000"/><rect x="5" y="20" width="22" height="4" fill="#fff" stroke="#000"/>`),
    package: px(`<path d="M5 10l11-5 11 5v14l-11 5-11-5z" fill="#C0A060" stroke="#000"/><path d="M5 10l11 5 11-5M16 15v14" fill="none" stroke="#000"/><rect x="18" y="16" width="6" height="5" fill="#fff" stroke="#000"/>`),
    info: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000080" stroke-width="2"/><rect x="14" y="13" width="4" height="11" fill="#000080"/><rect x="14" y="7" width="4" height="4" fill="#000080"/>`),
    question: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000080" stroke-width="2"/><path d="M11 12c0-3 2-5 5-5s5 2 5 5-5 4-5 7v1" fill="none" stroke="#000080" stroke-width="3"/><rect x="14" y="23" width="4" height="3" fill="#000080"/>`),
    color: px(`<rect x="3" y="3" width="26" height="26" fill="#C0C0C0" stroke="#000"/><rect x="6" y="6" width="9" height="9" fill="#C00000"/><rect x="17" y="6" width="9" height="9" fill="#00C000"/><rect x="6" y="17" width="9" height="9" fill="#0000C0"/><rect x="17" y="17" width="9" height="9" fill="#FFFF00"/>`),
    deskicon: px(`<rect x="3" y="5" width="26" height="19" fill="#008080" stroke="#000"/><rect x="6" y="8" width="11" height="8" fill="#fff" stroke="#000"/><rect x="6" y="8" width="11" height="2" fill="#000080"/><rect x="11" y="24" width="10" height="4" fill="#C0C0C0" stroke="#000"/>`),
    intl: px(`<circle cx="16" cy="16" r="13" fill="#0080C0" stroke="#000"/><path d="M8 9c4 1 4 5 8 5s3 6 7 7M20 6c-2 3 1 5 4 5" fill="none" stroke="#00C000" stroke-width="3"/><path d="M3 16h26M16 3c-6 7-6 19 0 26M16 3c6 7 6 19 0 26" fill="none" stroke="#000" stroke-width=".6"/>`),
    nc: px(`<rect x="2" y="4" width="28" height="24" fill="#0000AA" stroke="#000"/><rect x="2" y="4" width="28" height="3" fill="#00AAAA"/><path d="M4 9h11v16H4zM17 9h11v16H17z" fill="none" stroke="#55FFFF"/><rect x="5" y="12" width="9" height="2" fill="#00AAAA"/>`),
    unix: px(`<rect x="2" y="4" width="28" height="22" fill="#000" stroke="#808080"/><path d="M5 10h8M5 14h12M5 18h6" stroke="#C9D6EA"/><rect x="12" y="17" width="3" height="3" fill="#C9D6EA"/>`),
    apple: px(`<rect x="2" y="4" width="28" height="22" rx="3" fill="#D8CCAE" stroke="#000"/><rect x="5" y="7" width="22" height="15" fill="#000"/><path d="M8 11h2v6H8M10 11h1M10 17h1M13 11h8M13 14h6" stroke="#33FF33"/>`),
    lisa: px(`<rect x="2" y="3" width="28" height="26" fill="#fff" stroke="#000"/><rect x="3" y="4" width="26" height="24" fill="#C0C0C0"/><rect x="7" y="9" width="17" height="14" fill="#fff" stroke="#000"/><rect x="7" y="9" width="17" height="3" fill="#fff" stroke="#000"/>`),
    linux: px(`<rect x="2" y="4" width="28" height="22" fill="#908090" stroke="#000"/><rect x="4" y="6" width="24" height="4" fill="#C06077"/><rect x="5" y="12" width="22" height="12" fill="#fff"/><path d="M7 15h9M7 18h12" stroke="#000"/>`),
    ai: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000"/><circle cx="11" cy="12" r="2.5" fill="#3A2BFF"/><circle cx="21" cy="12" r="2.5" fill="#3A2BFF"/><circle cx="16" cy="21" r="2.5" fill="#3A2BFF"/><path d="M11 12h10M11 12l5 9M21 12l-5 9" stroke="#3A2BFF"/>`),
    mc: px(`<rect x="2" y="4" width="28" height="24" fill="#0000AA" stroke="#000"/><rect x="2" y="4" width="28" height="3" fill="#00AAAA"/><path d="M4 9h11v14H4zM17 9h11v14H17z" fill="none" stroke="#AAAAAA"/><rect x="2" y="25" width="28" height="3" fill="#00AAAA"/><rect x="5" y="13" width="9" height="2" fill="#00AAAA"/>`)
  };

  /* ---------- Віконний менеджер ---------- */
  const desk = $("desk");
  const wins = new Map();
  let z = 10;

  function container(rec) { return rec.parent ? wins.get(rec.parent).mdi : desk; }

  function createWin(id, def) {
    if (wins.has(id)) { const r = wins.get(id); if (r.min) restore(id); else focus(id); return r; }
    const parentEl = def.parent ? wins.get(def.parent).mdi : desk;
    const el = document.createElement("section");
    el.className = "w" + (def.dialog ? " dlg" : "");
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "t-" + id);
    if (def.dialog) el.setAttribute("aria-modal", "true");
    el.innerHTML = `<div class="in">
      <div class="tb"><button type="button" class="ctl" aria-label="${esc(w().sys[0])}"><i></i></button><h2 id="t-${id}"></h2>${def.dialog ? "" : `<button type="button" class="mn" aria-label="${esc(w().sys[3])}"></button><button type="button" class="mx" aria-label="${esc(w().sys[4])}"></button>`}</div>
      <nav class="mb"${def.menus ? "" : " hidden"}></nav>
      <div class="body"></div></div>`;
    const R = parentEl.getBoundingClientRect();
    const [ww, hh] = def.size;
    const width = Math.min(ww, R.width - 8);
    const height = Math.min(hh, R.height - 8);
    let [x, y] = def.pos;
    if (x === "c") x = (R.width - width) / 2;
    if (y === "c") y = (R.height - height) / 2.4;
    if (x < 0) x = R.width - width + x;
    x = Math.max(0, Math.min(x, R.width - width));
    y = Math.max(0, Math.min(y, R.height - height));
    Object.assign(el.style, { left: x + "px", top: y + "px", width: width + "px", height: height + "px" });
    const rec = { id, el, def, parent: def.parent || null, body: el.querySelector(".body"), min: false, max: false };
    wins.set(id, rec);
    rec.render = () => {
      el.querySelector("h2").textContent = def.title();
      if (def.menus) renderMenubar(rec);
      def.render(rec.body, rec);
    };
    parentEl.appendChild(el);
    rec.render();
    wire(rec);
    focus(id);
    if (def.max) maximize(id);
    return rec;
  }

  function wire(rec) {
    const el = rec.el;
    el.addEventListener("pointerdown", () => focus(rec.id));
    el.addEventListener("focusin", () => focus(rec.id));
    const tb = el.querySelector(".tb");
    tb.addEventListener("pointerdown", (e) => { if (!e.target.closest("button")) rubber(rec, e, "move"); });
    tb.addEventListener("dblclick", (e) => { if (!e.target.closest("button") && !rec.def.dialog) maximize(rec.id); });
    const ctl = el.querySelector(".ctl");
    ctl.addEventListener("click", (e) => { e.stopPropagation(); sysMenu(rec, ctl); });
    ctl.addEventListener("dblclick", () => close(rec.id));
    const mn = el.querySelector(".mn");
    if (mn) mn.addEventListener("click", () => minimize(rec.id));
    const mx = el.querySelector(".mx");
    if (mx) mx.addEventListener("click", () => maximize(rec.id));
    if (!rec.def.dialog) {
      el.addEventListener("pointerdown", (e) => {
        if (e.target !== el) return;
        const r = el.getBoundingClientRect();
        const dir = (e.clientY - r.top < 6 ? "n" : r.bottom - e.clientY < 6 ? "s" : "") + (e.clientX - r.left < 6 ? "w" : r.right - e.clientX < 6 ? "e" : "");
        if (dir) rubber(rec, e, dir);
      });
      el.addEventListener("pointermove", (e) => {
        if (e.target !== el) { el.style.cursor = ""; return; }
        const r = el.getBoundingClientRect();
        const v = e.clientY - r.top < 6 ? "n" : r.bottom - e.clientY < 6 ? "s" : "";
        const h = e.clientX - r.left < 6 ? "w" : r.right - e.clientX < 6 ? "e" : "";
        el.style.cursor = { n: "ns-resize", s: "ns-resize", e: "ew-resize", w: "ew-resize", nw: "nwse-resize", se: "nwse-resize", ne: "nesw-resize", sw: "nesw-resize" }[v + h] || "";
      });
    }
  }

  function focus(id) {
    const rec = wins.get(id);
    if (!rec || rec.min) return;
    const siblings = [...wins.values()].filter((r) => r.parent === rec.parent);
    siblings.forEach((r) => r.el.classList.toggle("active", r === rec));
    if (rec.parent) focus(rec.parent);
    if (Number(rec.el.style.zIndex) !== z) rec.el.style.zIndex = ++z;
    if (rec.def.focused) rec.def.focused(rec);
  }
  const activeTop = () => [...wins.values()].filter((r) => !r.parent && !r.min && r.el.classList.contains("active"))[0];

  function close(id) {
    const rec = wins.get(id);
    if (!rec) return;
    if (rec.def.noClose) return rec.def.noClose();
    [...wins.values()].filter((r) => r.parent === id).forEach((r) => close(r.id));
    rec.el.remove();
    if (rec.mini) rec.mini.remove();
    wins.delete(id);
    const next = [...wins.values()].filter((r) => r.parent === rec.parent && !r.min).sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0];
    if (next) focus(next.id);
  }

  function minimize(id) {
    const rec = wins.get(id);
    if (!rec || rec.min) return;
    rec.min = true;
    rec.el.hidden = true;
    const holder = rec.parent ? wins.get(rec.parent).minis : $("deskMinis");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ico";
    b.innerHTML = `${ICON[rec.def.icon] || ICON.group}<span>${esc(rec.def.title())}</span>`;
    b.addEventListener("click", (e) => { selectIcon(b); if (coarse) restore(id); e.stopPropagation(); });
    b.addEventListener("dblclick", () => restore(id));
    b.addEventListener("keydown", (e) => { if (e.key === "Enter") restore(id); });
    rec.mini = b;
    holder.appendChild(b);
  }
  function restore(id) {
    const rec = wins.get(id);
    if (!rec) return;
    if (rec.min) { rec.min = false; rec.el.hidden = false; rec.mini.remove(); rec.mini = null; }
    else if (rec.max) maximize(id);
    focus(id);
  }
  function maximize(id) {
    const rec = wins.get(id);
    const s = rec.el.style;
    if (rec.max) { Object.assign(s, rec.saved); rec.max = false; }
    else { rec.saved = { left: s.left, top: s.top, width: s.width, height: s.height }; Object.assign(s, { left: "-4px", top: "-4px", width: "calc(100% + 8px)", height: "calc(100% + 8px)" }); rec.max = true; }
    const mx = rec.el.querySelector(".mx");
    if (mx) mx.classList.toggle("rs", rec.max);
  }

  /* Переміщення та зміна розміру сірим контуром, як у Windows 3.x */
  function rubber(rec, e, mode) {
    if (narrow() || e.button !== 0 || rec.max) return;
    e.preventDefault();
    focus(rec.id);
    const host = container(rec);
    const H = host.getBoundingClientRect();
    const r = rec.el.getBoundingClientRect();
    const box = { left: r.left - H.left, top: r.top - H.top, width: r.width, height: r.height };
    const o = document.createElement("div");
    o.className = "outline";
    const draw = (b) => Object.assign(o.style, { left: b.left + "px", top: b.top + "px", width: b.width + "px", height: b.height + "px" });
    draw(box);
    host.appendChild(o);
    const sx = e.clientX, sy = e.clientY;
    let next = box;
    const tgt = e.currentTarget;
    tgt.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (mode === "move") next = { ...box, left: box.left + dx, top: box.top + dy };
      else {
        next = { ...box };
        if (mode.includes("e")) next.width = Math.max(160, box.width + dx);
        if (mode.includes("s")) next.height = Math.max(80, box.height + dy);
        if (mode.includes("w")) { next.width = Math.max(160, box.width - dx); next.left = box.left + box.width - next.width; }
        if (mode.includes("n")) { next.height = Math.max(80, box.height - dy); next.top = box.top + box.height - next.height; }
      }
      draw(next);
    };
    const up = () => {
      tgt.removeEventListener("pointermove", move);
      tgt.removeEventListener("pointerup", up);
      tgt.removeEventListener("pointercancel", up);
      o.remove();
      Object.assign(rec.el.style, { left: next.left + "px", top: next.top + "px", width: next.width + "px", height: next.height + "px" });
    };
    tgt.addEventListener("pointermove", move);
    tgt.addEventListener("pointerup", up);
    tgt.addEventListener("pointercancel", up);
  }

  /* ---------- Меню ---------- */
  let menuEl = null, menuOwner = null;
  function popup(anchor, items, owner) {
    closeMenu();
    const m = document.createElement("div");
    m.className = "menu";
    m.setAttribute("role", "menu");
    m.innerHTML = items.map((it, k) => it.sep ? "<hr>" : `<button type="button" role="menuitem${it.checked !== undefined ? "radio" : ""}" data-k="${k}"${it.checked !== undefined ? ` aria-checked="${it.checked}"` : ""}${it.disabled ? " disabled" : ""}><span>${esc(it.label)}</span>${it.acc ? `<span class="acc">${esc(it.acc)}</span>` : ""}</button>`).join("");
    desk.appendChild(m);
    const a = anchor.getBoundingClientRect();
    const D = desk.getBoundingClientRect();
    const mr = m.getBoundingClientRect();
    m.style.left = Math.max(0, Math.min(a.left - D.left, D.width - mr.width - 4)) + "px";
    m.style.top = Math.max(0, Math.min(a.bottom - D.top, D.height - mr.height - 4)) + "px";
    m.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-k]");
      if (!b || b.disabled) return;
      const it = items[Number(b.dataset.k)];
      closeMenu();
      it.act();
    });
    m.addEventListener("keydown", (e) => {
      const bs = [...m.querySelectorAll("button:not(:disabled)")];
      const k = bs.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); bs[(k + 1) % bs.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); bs[(k - 1 + bs.length) % bs.length].focus(); }
    });
    menuEl = m;
    menuOwner = owner || null;
    if (menuOwner) menuOwner.setAttribute("aria-expanded", "true");
    const f = m.querySelector("button:not(:disabled)");
    if (f) f.focus({ preventScroll: true });
  }
  function closeMenu() {
    if (menuEl) menuEl.remove();
    if (menuOwner) menuOwner.setAttribute("aria-expanded", "false");
    menuEl = null;
    menuOwner = null;
  }
  document.addEventListener("pointerdown", (e) => { if (menuEl && !e.target.closest(".menu") && !e.target.closest(".mb")) closeMenu(); }, true);

  function renderMenubar(rec) {
    const mb = rec.el.querySelector(".mb");
    const menus = rec.def.menus();
    /* «&» перед літерою позначає підкреслену клавішу доступу, як у ресурсах Windows; без «&» — перша літера */
    const acc = (l) => { const k = Math.max(0, l.indexOf("&")); const t = l.replace("&", ""); return `${esc(t.slice(0, k))}<span class="u">${esc(t[k])}</span>${esc(t.slice(k + 1))}`; };
    mb.innerHTML = menus.map((m, i) => `<button type="button" aria-haspopup="true" aria-expanded="false" data-i="${i}">${acc(m.label)}</button>`).join("");
    mb.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        if (menuOwner === b) return closeMenu();
        popup(b, rec.def.menus()[Number(b.dataset.i)].items, b);
      });
      b.addEventListener("pointerenter", () => { if (menuOwner && menuOwner !== b && menuOwner.parentElement === mb) popup(b, rec.def.menus()[Number(b.dataset.i)].items, b); });
    });
  }

  function sysMenu(rec, anchor) {
    const s = w().sys;
    popup(anchor, [
      { label: s[0], act: () => restore(rec.id), disabled: !rec.max && !rec.min },
      { label: s[1], disabled: true },
      { label: s[2], disabled: true },
      { label: s[3], act: () => minimize(rec.id), disabled: !!rec.def.dialog },
      { label: s[4], act: () => maximize(rec.id), disabled: rec.max || !!rec.def.dialog },
      { sep: true },
      { label: s[5], acc: rec.parent ? "Ctrl+F4" : "Alt+F4", act: () => close(rec.id) },
      ...(rec.parent ? [] : [{ sep: true }, { label: s[6], acc: "Ctrl+Esc", act: taskList }])
    ]);
  }

  /* ---------- Іконки ---------- */
  function iconBtn(label, icon, act) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ico";
    b.innerHTML = `${ICON[icon]}<span>${esc(label)}</span>`;
    b.addEventListener("click", () => { selectIcon(b); if (coarse) act(); });
    b.addEventListener("dblclick", act);
    b.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); act(); } });
    return b;
  }
  function selectIcon(b) { document.querySelectorAll(".ico.sel").forEach((x) => x.classList.remove("sel")); if (b) b.classList.add("sel"); }

  /* Запуск застосунку: пісочний годинник, і за потреби згорнути Диспетчер */
  function launch(fn) {
    desk.classList.add("busy");
    setTimeout(() => {
      desk.classList.remove("busy");
      fn();
      if (minOnUse && wins.has("pm")) minimize("pm");
    }, reduced ? 0 : 280);
  }

  /* ---------- Диспетчер програм ---------- */
  const GROUPS = {
    aic: () => [
      [w().icons.readme, "write", () => launch(openWrite)],
      [w().icons.services, "cardfile", () => launch(() => openCardfile())],
      [w().icons.partners, "notepad", () => launch(openNotepad)],
      [w().icons.contact, "mail", () => launch(() => openMail())],
      [hx().icon, "question", () => launch(() => openHelp())]
    ],
    main: () => [
      [w().cpl, "cpl", () => launch(openCpl)],
      [w().clock, "clock", () => launch(openClock)],
      [w().dos, "dos", () => go("dos")],
      [w().tasks, "progman", taskList]
    ],
    ver: () => VERSIONS.map(([n, id, ic]) => [n, ic, () => go(id)])
  };

  function openProgman() {
    createWin("pm", {
      title: () => w().progman, icon: "progman", size: [640, 480], pos: [12, 12],
      noClose: exitWindows,
      menus: () => {
        const p = w().pm;
        return [
          { label: w().pmMenus[0], items: [{ label: p.open, acc: "Enter", act: () => { const s = document.querySelector(".mdi .ico.sel"); if (s) s.dispatchEvent(new MouseEvent("dblclick", { bubbles: true })); } }, { sep: true }, { label: p.exit, act: exitWindows }] },
          { label: w().pmMenus[1], items: [{ label: p.minOnUse, checked: minOnUse, act: () => { minOnUse = !minOnUse; } }] },
          { label: w().pmMenus[2], items: [
            { label: p.cascade, acc: "Shift+F5", act: cascade },
            { label: p.tile, acc: "Shift+F4", act: tile },
            { sep: true },
            ...Object.keys(GROUPS).map((g, i) => ({ label: `${i + 1} ${w().groups[g]}`, act: () => openGroup(g) }))
          ] },
          { label: w().pmMenus[3], items: [{ label: hx().index, acc: "F1", act: () => openHelp() }, { sep: true }, { label: p.about, act: about }] }
        ];
      },
      render: (b, rec) => {
        if (rec.mdi) return;
        rec.mdi = document.createElement("div");
        rec.mdi.className = "mdi";
        rec.minis = document.createElement("div");
        rec.minis.className = "minis";
        rec.mdi.appendChild(rec.minis);
        b.appendChild(rec.mdi);
      }
    });
    openGroup("ver"); minimize("g-ver");
    openGroup("main"); minimize("g-main");
    openGroup("aic");
  }

  function openGroup(g) {
    return createWin("g-" + g, {
      parent: "pm", title: () => w().groups[g], icon: "group",
      size: [420, 220], pos: { aic: [8, 8], main: [40, 40], ver: [72, 72] }[g],
      render: (b) => {
        b.classList.add("scroll");
        b.style.overflow = "auto";
        const grid = document.createElement("div");
        grid.className = "grid";
        GROUPS[g]().forEach(([label, icon, act]) => grid.appendChild(iconBtn(label, icon, act)));
        b.replaceChildren(grid);
      }
    });
  }
  function groupWins() { return [...wins.values()].filter((r) => r.parent === "pm" && !r.min); }
  function cascade() { groupWins().forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: 8 + i * 24 + "px", top: 8 + i * 24 + "px", width: "420px", height: "220px" }); focus(r.id); }); }
  function tile() {
    const list = groupWins();
    const H = wins.get("pm").mdi.getBoundingClientRect();
    const usable = H.height - 70;
    list.forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: "0px", top: (i * usable) / list.length + "px", width: H.width + "px", height: usable / list.length + "px" }); });
  }

  /* ---------- Write ---------- */
  function openWrite() {
    createWin("write", {
      title: () => `${w().write} - README.WRI`, icon: "write", size: [600, 520], pos: [-16, 40],
      menus: () => [
        { label: w().file, items: [{ label: w().print, act: () => window.print() }, { sep: true }, { label: w().quit, act: () => close("write") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("write").body.innerText) }] },
        { label: w().help, items: [{ label: w().aboutApp(w().write), act: about }] }
      ],
      render: (b) => {
        const s = t();
        b.innerHTML = `<div class="write scroll" style="overflow:auto">
          <img class="doclogo" src="${esc(AIC.logo)}" alt="ArtIntelliCo">
          <h1>${esc(s.heroTitle)}</h1>
          <p>${esc(s.heroText)}</p>
          <p><b>${esc(s.heroLead)}:</b></p>
          <ul>${s.phrases.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <p><i>${esc(w().oleHint)}</i></p>
          <div class="ole"></div>
          <small>${esc(s.copyright)}<br>${esc(s.legal)}<br>${esc(s.slogan)}<br>${esc(s.source)}: <a href="${siteUrl()}" target="_blank" rel="noopener">artintellico.com</a></small>
          <p class="end">¤</p>
        </div><div class="status">${esc(w().page(1))}</div>`;
        const ole = b.querySelector(".ole");
        ole.append(
          iconBtn(w().ole.services, "package", () => launch(() => openCardfile())),
          iconBtn(w().ole.partners, "package", () => launch(openNotepad)),
          iconBtn(w().ole.mail, "package", () => launch(() => openMail()))
        );
      }
    });
  }

  /* ---------- Картотека: послуги як картки ---------- */
  const cf = { front: 0, list: false };
  function openCardfile(at) {
    if (typeof at === "number") cf.front = at;
    const rec = createWin("cardfile", {
      title: () => `${w().cardfile} - ${w().ole.services}`, icon: "cardfile", size: [560, 400], pos: [200, 120],
      menus: () => [
        { label: w().file, items: [{ label: w().quit, act: () => close("cardfile") }] },
        { label: w().view, items: [{ label: w().cardsView, checked: !cf.list, act: () => { cf.list = false; rerender("cardfile"); } }, { label: w().listView, checked: cf.list, act: () => { cf.list = true; rerender("cardfile"); } }] },
        { label: w().card, items: [
          { label: w().prev, acc: "PgUp", act: () => stepCard(-1) },
          { label: w().next, acc: "PgDn", act: () => stepCard(1) },
          { sep: true },
          { label: hx().topicHelp, acc: "F1", act: () => openHelp(cf.front) },
          { label: w().writeAbout, act: () => openMail(svc()[cf.front].t) }
        ] },
        { label: w().help, items: [{ label: hx().index, act: () => openHelp() }, { sep: true }, { label: w().aboutApp(w().cardfile), act: about }] }
      ],
      render: (b) => renderCards(b),
      focused: () => {}
    });
    /* подвійний клік по послузі відкриває тему довідки; слухач на тілі вікна, бо вміст перемальовується */
    if (!rec.cfWired) {
      rec.cfWired = true;
      rec.body.addEventListener("dblclick", (e) => {
        if (e.target.closest("a, .cardbar")) return;
        const x = e.target.closest("[data-i]");
        if (x) openHelp(Number(x.dataset.i));
        else if (e.target.closest(".cbody")) openHelp(cf.front);
      });
    }
    rerender("cardfile");
    return rec;
  }
  function stepCard(d) { const n = svc().length; cf.front = (cf.front + d + n) % n; rerender("cardfile"); }
  function rerender(id) { const r = wins.get(id); if (r) r.render(); }
  function renderCards(b) {
    const s = svc();
    b.innerHTML = `<div class="cardbar"><span>${esc(cf.list ? w().listMode : w().cardMode)}</span><button type="button" data-d="-1" aria-label="${esc(w().prev)}">◄</button><button type="button" data-d="1" aria-label="${esc(w().next)}">►</button><span>${esc(w().cardCount(s.length))}</span></div>`;
    b.querySelectorAll("[data-d]").forEach((x) => x.addEventListener("click", () => stepCard(Number(x.dataset.d))));
    if (cf.list) {
      const ul = document.createElement("ul");
      ul.className = "clist scroll";
      ul.setAttribute("role", "listbox");
      ul.innerHTML = s.map(({ t: n }, i) => `<li><button type="button" role="option" aria-selected="${i === cf.front}" data-i="${i}">${esc(n)}</button></li>`).join("");
      ul.addEventListener("click", (e) => { const x = e.target.closest("[data-i]"); if (x) { cf.front = Number(x.dataset.i); rerender("cardfile"); } });
      b.appendChild(ul);
      return;
    }
    const area = document.createElement("div");
    area.className = "cards";
    const n = s.length;
    const order = Array.from({ length: n }, (_, k) => (cf.front + k) % n).reverse();
    order.forEach((i, k) => {
      const depth = n - 1 - k;
      const card = document.createElement("div");
      card.className = "card";
      Object.assign(card.style, { left: 10 + depth * 10 + "px", bottom: 10 + depth * 16 + "px" });
      const { t: name, lead } = s[i];
      card.innerHTML = `<button type="button" data-i="${i}">${esc(name)}</button>${depth === 0 ? `<div class="cbody"><p>${esc(plain(lead))}</p><p><a href="#" data-help="${i}">${esc(hx().more)}</a><br><a href="#" data-mail="${i}">${esc(w().writeAbout)}</a></p></div>` : ""}`;
      area.appendChild(card);
    });
    area.addEventListener("click", (e) => {
      const m = e.target.closest("[data-mail]");
      if (m) { e.preventDefault(); openMail(s[Number(m.dataset.mail)].t); return; }
      const h = e.target.closest("[data-help]");
      if (h) { e.preventDefault(); openHelp(Number(h.dataset.help)); return; }
      const x = e.target.closest("[data-i]");
      if (x) { cf.front = Number(x.dataset.i); rerender("cardfile"); sr(s[cf.front].t + ". " + plain(s[cf.front].lead)); }
    });
    b.appendChild(area);
  }

  /* ---------- Довідка WinHelp: послуги як теми ---------- */
  const hlp = { topic: -1, hist: [] };
  function openHelp(i) {
    if (!wins.has("help")) { hlp.topic = -1; hlp.hist = []; }
    const rec = createWin("help", {
      title: () => `${hx().title} - ${hx().file}`, icon: "question", size: [520, 460], pos: [-24, 24],
      menus: () => [
        { label: w().file, items: [{ label: w().print, act: () => window.print() }, { sep: true }, { label: w().quit, act: () => close("help") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("help").body.querySelector(".htext").innerText) }] },
        { label: w().help, items: [{ label: hx().contents, act: () => helpGo(-1) }, { sep: true }, { label: w().aboutApp(hx().title), act: about }] }
      ],
      render: (b, rec) => renderHelp(b, rec)
    });
    helpGo(typeof i === "number" ? i : -1);
    return rec;
  }
  function helpGo(i, fromBack) {
    if (!fromBack && i !== hlp.topic) hlp.hist.push(hlp.topic);
    hlp.topic = i;
    rerender("help");
    const r = wins.get("help");
    if (r) {
      const tx = r.body.querySelector(".htext");
      if (tx && !coarse) tx.focus({ preventScroll: true });
      sr(i < 0 ? hx().head : svc()[i].t);
    }
  }
  function helpBack() { if (hlp.hist.length) helpGo(hlp.hist.pop(), true); }
  function renderHelp(b, rec) {
    closeGloss();
    const H = hx();
    const s = svc();
    const k = hlp.topic;
    const jump = (i) => `<button type="button" class="hjump" data-go="${i}">${esc(s[i].t)}</button>`;
    let title, html;
    if (k < 0) {
      title = H.head;
      html = `<p>${rich(SVC[lang].intro)}</p><p>${esc(H.pick)}</p><ul class="hlist">${s.map((_, i) => `<li>${jump(i)}</li>`).join("")}</ul>`;
    } else {
      const x = s[k];
      title = x.t;
      html = `<p>${rich(x.lead)}</p><p>${rich(x.body)}</p>${x.note ? `<p class="hnote"><b>${esc(H.note)}</b> ${rich(x.note)}</p>` : ""}
        <h3>${esc(H.inc)}</h3><ul>${x.inc.map((v) => `<li>${rich(v)}</li>`).join("")}</ul>
        <h3>${esc(H.res)}</h3><p>${rich(x.res)}</p>
        <div class="hsee"><b>${esc(H.see)}</b><ul class="hlist">${SEE[k].map((j) => `<li>${jump(j)}</li>`).join("")}<li><button type="button" class="hjump" data-mail>${esc(w().writeAbout)}</button></li></ul></div>`;
    }
    b.innerHTML = `<div class="hbar face"><button type="button" class="btn" data-h="toc">${esc(H.contents)}</button><button type="button" class="btn" data-h="back"${hlp.hist.length ? "" : " disabled"}>${esc(H.back)}</button><button type="button" class="btn" data-h="prev" aria-label="${esc(H.prevT)}">&lt;&lt;</button><button type="button" class="btn" data-h="next" aria-label="${esc(H.nextT)}">&gt;&gt;</button></div>
      <h3 class="htitle">${esc(title)}</h3><div class="htext scroll" tabindex="-1">${html}</div>`;
    b.querySelector(".htext").addEventListener("scroll", closeGloss, { passive: true });
    if (rec.hWired) return;
    rec.hWired = true;
    b.addEventListener("click", (e) => {
      const c = e.target.closest("[data-h], [data-go], [data-mail], .hpop");
      if (!c || c.disabled) return;
      if (c.classList.contains("hpop")) return toggleGloss(c);
      if (c.dataset.go !== undefined) return helpGo(Number(c.dataset.go));
      if (c.dataset.mail !== undefined) return openMail(hlp.topic < 0 ? undefined : svc()[hlp.topic].t);
      const n = svc().length, cur = hlp.topic;
      ({ toc: () => helpGo(-1), back: helpBack, prev: () => helpGo(cur <= 0 ? n - 1 : cur - 1), next: () => helpGo(cur >= n - 1 ? 0 : cur + 1) })[c.dataset.h]();
    });
  }

  /* Спливне вікно з визначенням терміна */
  let glossEl = null, glossBtn = null;
  function closeGloss() {
    if (glossEl) glossEl.remove();
    if (glossBtn) glossBtn.setAttribute("aria-expanded", "false");
    glossEl = glossBtn = null;
  }
  function toggleGloss(btn) {
    if (glossBtn === btn) return closeGloss();
    closeGloss();
    const def = GLOSS[lang][btn.dataset.g];
    if (!def) return;
    const p = document.createElement("div");
    p.className = "hpopup";
    p.setAttribute("role", "dialog");
    p.setAttribute("aria-label", btn.textContent);
    p.innerHTML = `<p>${esc(def)}</p>`;
    p.addEventListener("click", closeGloss);
    desk.appendChild(p);
    const a = btn.getBoundingClientRect(), D = desk.getBoundingClientRect(), r = p.getBoundingClientRect();
    const below = a.bottom - D.top + 4;
    p.style.left = Math.max(4, Math.min(a.left - D.left, D.width - r.width - 8)) + "px";
    p.style.top = (below + r.height > D.height - 4 ? Math.max(4, a.top - D.top - r.height - 4) : below) + "px";
    btn.setAttribute("aria-expanded", "true");
    glossEl = p;
    glossBtn = btn;
    sr(def);
  }
  document.addEventListener("pointerdown", (e) => { if (glossEl && !e.target.closest(".hpopup, .hpop")) closeGloss(); }, true);

  /* ---------- Блокнот ---------- */
  function openNotepad() {
    createWin("notepad", {
      title: () => `${w().notepad} - ${w().ole.partners}`, icon: "notepad", size: [380, 320], pos: [90, 180],
      menus: () => [
        { label: w().file, items: [{ label: w().quit, act: () => close("notepad") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("notepad").body.querySelector("textarea").value) }] },
        { label: w().help, items: [{ label: w().aboutApp(w().notepad), act: about }] }
      ],
      render: (b) => {
        b.innerHTML = `<textarea class="notepad scroll" readonly spellcheck="false" aria-label="${esc(t().partnersTitle)}"></textarea>`;
        b.querySelector("textarea").value = [t().partnersTitle, "=".repeat(t().partnersTitle.length), "", ...PARTNERS.map((p) => `  * ${p}`), "", "https://unio24.com/"].join("\r\n");
      }
    });
  }

  /* ---------- Пошта ---------- */
  function openMail(subject) {
    const exists = wins.get("mail");
    const rec = createWin("mail", {
      title: () => `${w().mail} - ${t().contactTitle}`, icon: "mail", size: [520, 420], pos: ["c", 70], state: { subject: subject || w().defaultSubject, body: "" },
      menus: () => [
        { label: w().file, items: [{ label: w().send, act: sendMail }, { sep: true }, { label: w().quit, act: () => close("mail") }] },
        { label: w().help, items: [{ label: w().aboutApp(w().mail), act: about }] }
      ],
      render: (b, rec) => {
        const st = rec.def.state;
        b.innerHTML = `<form class="mail face">
          <div class="tool"><button class="btn def">${esc(w().send)}</button><button type="button" class="btn" disabled>${esc(w().checkNames)}</button><button type="button" class="btn" disabled>${esc(w().attach)}</button><button type="button" class="btn" disabled>${esc(w().optionsBtn)}</button><button type="button" class="btn" disabled>${esc(w().address)}</button></div>
          <div class="field"><label for="mTo">${esc(w().to)}</label><input id="mTo" class="sunk" value="${EMAIL}" readonly><label for="mSubj">${esc(w().subject)}</label><input id="mSubj" class="sunk" name="subject"></div>
          <p style="font:var(--ui-r)">${esc(t().contactText)}</p>
          <textarea class="sunk scroll" name="body" aria-label="${esc(t().contactTitle)}"></textarea>
          <p style="font:var(--ui-r)">${esc(w().sendNote)}</p>
        </form>`;
        const f = b.querySelector("form");
        f.subject.value = st.subject;
        f.body.value = st.body;
        f.addEventListener("input", () => { st.subject = f.subject.value; st.body = f.body.value; });
        f.addEventListener("submit", (e) => { e.preventDefault(); sendMail(); });
      }
    });
    if (exists && subject) { rec.def.state.subject = subject; rec.render(); }
    setTimeout(() => { const ta = rec.body.querySelector("textarea"); if (ta && !coarse) ta.focus(); }, 0);
  }
  function sendMail() {
    const st = wins.get("mail").def.state;
    location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(st.subject)}&body=${encodeURIComponent(st.body)}`);
  }

  /* ---------- Панель керування ---------- */
  function openCpl() {
    createWin("cpl", {
      title: () => w().cpl, icon: "cpl", size: [360, 200], pos: [140, 90],
      menus: () => [
        { label: w().options, items: [...w().cplItems.map((l, i) => ({ label: l, act: [colorDlg, deskDlg, intlDlg][i] })), { sep: true }, { label: w().quit, act: () => close("cpl") }] },
        { label: w().help, items: [{ label: w().aboutApp(w().cpl), act: about }] }
      ],
      render: (b) => {
        const g = document.createElement("div");
        g.className = "cpl";
        [["color", colorDlg], ["deskicon", deskDlg], ["intl", intlDlg]].forEach(([ic, fn], i) => g.appendChild(iconBtn(w().cplItems[i], ic, fn)));
        b.replaceChildren(g);
      }
    });
  }

  function dialog(id, title, html, buttons, size, onMount) {
    if (wins.has(id)) close(id);
    const rec = createWin(id, {
      dialog: true, title: () => title, size, pos: ["c", "c"],
      render: (b, rec) => {
        b.innerHTML = `<div class="dlgbody">${html}<div class="btns">${buttons.map((x, i) => `<button type="button" class="btn${i === 0 ? " def" : ""}" data-b="${i}">${esc(x.label)}</button>`).join("")}</div></div>`;
        b.querySelectorAll("[data-b]").forEach((x) => x.addEventListener("click", () => { const btn = buttons[Number(x.dataset.b)]; if (btn.act) btn.act(rec); close(id); }));
        if (onMount) onMount(b, rec);
        setTimeout(() => { const f = b.querySelector("select, input, .btn.def"); if (f && !coarse) f.focus(); }, 0);
      }
    });
    rec.el.addEventListener("keydown", (e) => { if (e.key === "Escape") close(id); });
    return rec;
  }

  function colorDlg() {
    const opts = Object.keys(SCHEMES).map((k) => `<option value="${k}"${k === scheme ? " selected" : ""}>${esc(w().schemeNames[k])}</option>`).join("");
    const before = scheme;
    const s = w().sample;
    dialog("dlg-color", w().color, `
      <label>${esc(w().schemes)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>
      <div class="preview" aria-hidden="true"><div class="pw"><div class="pt">${esc(s.active)}</div><div class="pm">${esc(s.menu)}</div><div class="pb">${esc(s.text)}</div></div></div>`,
      [{ label: w().ok }, { label: w().cancel, act: () => setScheme(before) }], [340, 300],
      (b) => b.querySelector("select").addEventListener("change", (e) => setScheme(e.target.value)));
  }
  function deskDlg() {
    const opts = Object.keys(WALLS).map((k) => `<option value="${k}"${k === wall ? " selected" : ""}>${k === "none" ? esc(w().none) : k.toUpperCase() + ".BMP"}</option>`).join("");
    const before = wall;
    dialog("dlg-desk", w().desktopDlg, `<label>${esc(w().wallpaper)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>`,
      [{ label: w().ok }, { label: w().cancel, act: () => setWall(before) }], [320, 170],
      (b) => b.querySelector("select").addEventListener("change", (e) => setWall(e.target.value)));
  }
  function intlDlg() {
    const opts = LANGS.map((l) => `<option value="${l}"${l === lang ? " selected" : ""}>${LANG_NAMES[l]}</option>`).join("");
    let pick = lang;
    dialog("dlg-intl", w().intl, `<label>${esc(w().language)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>`,
      [{ label: w().ok, act: () => setLang(pick) }, { label: w().cancel }], [320, 170],
      (b) => b.querySelector("select").addEventListener("change", (e) => { pick = e.target.value; }));
  }

  /* ---------- Годинник ---------- */
  let clockDigital = false;
  function openClock() {
    createWin("clock", {
      title: () => `${w().clock} - ${new Date().toLocaleDateString(lang)}`, icon: "clock", size: [220, 240], pos: [-30, 30],
      menus: () => [{ label: w().options, items: [{ label: w().analog, checked: !clockDigital, act: () => { clockDigital = false; rerender("clock"); } }, { label: w().digital, checked: clockDigital, act: () => { clockDigital = true; rerender("clock"); } }] }],
      render: (b) => { b.innerHTML = `<div class="clockface"></div>`; tickClock(); }
    });
  }
  function tickClock() {
    const rec = wins.get("clock");
    if (!rec) return;
    const face = rec.body.querySelector(".clockface");
    const d = new Date();
    if (clockDigital) { face.innerHTML = `<div class="digital">${d.toLocaleTimeString(lang)}</div>`; return; }
    const dots = Array.from({ length: 60 }, (_, i) => {
      const a = (i * 6 * Math.PI) / 180;
      const big = i % 5 === 0;
      const r = big ? 3 : 1.2;
      return `<rect x="${Math.sin(a) * 44 - r}" y="${-Math.cos(a) * 44 - r}" width="${r * 2}" height="${r * 2}" fill="${big ? "#008080" : "#000"}"/>`;
    }).join("");
    const hand = (deg, len, wdt, color) => `<polygon points="0,${-len} ${wdt},0 0,${wdt * 1.5} ${-wdt},0" transform="rotate(${deg})" fill="${color}" stroke="#000" stroke-width=".6"/>`;
    const h = d.getHours() % 12, m = d.getMinutes(), s = d.getSeconds();
    face.innerHTML = `<svg viewBox="-50 -50 100 100" aria-label="${d.toLocaleTimeString(lang)}">${dots}${hand(h * 30 + m / 2, 24, 4.5, "#008080")}${hand(m * 6, 36, 3.5, "#008080")}<line x1="0" y1="6" x2="0" y2="-40" transform="rotate(${s * 6})" stroke="#000" stroke-width="1"/></svg>`;
  }
  setInterval(tickClock, 1000);

  /* ---------- Системні вікна ---------- */
  function about() {
    dialog("dlg-about", w().pm.about.replace("…", ""), `<div class="row">${ICON.progman}<div>${w().aboutLines.map((l) => (l ? `<div>${esc(l)}</div>` : "<br>")).join("")}</div></div>`, [{ label: w().ok }], [360, 250]);
  }
  function taskList() {
    closeMenu();
    const tops = () => [...wins.values()].filter((r) => !r.parent && !r.def.dialog);
    let sel = 0;
    dialog("dlg-tasks", w().tasks, `<ul class="tasks sunk" role="listbox"></ul>`, [
      { label: w().switchTo, act: () => { const r = tops()[sel]; if (r) restore(r.id); } },
      { label: w().endTask, act: () => { const r = tops()[sel]; if (r) close(r.id); } },
      { label: w().cancel },
      { label: w().pm.cascade, act: () => tops().forEach((r, i) => { if (r.min) restore(r.id); if (r.max) maximize(r.id); Object.assign(r.el.style, { left: 12 + i * 26 + "px", top: 12 + i * 26 + "px" }); focus(r.id); }) },
      { label: w().pm.tile, act: () => { const l = tops().filter((r) => !r.min); const D = desk.getBoundingClientRect(); l.forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: (i * D.width) / l.length + "px", top: "0px", width: D.width / l.length + "px", height: D.height - 70 + "px" }); }); } }
    ], [380, 260], (b) => {
      const ul = b.querySelector(".tasks");
      const draw = () => { ul.innerHTML = tops().map((r, i) => `<li><button type="button" role="option" aria-selected="${i === sel}" data-i="${i}">${esc(r.def.title())}</button></li>`).join(""); };
      draw();
      ul.addEventListener("click", (e) => { const x = e.target.closest("[data-i]"); if (x) { sel = Number(x.dataset.i); draw(); } });
      ul.addEventListener("dblclick", (e) => { const x = e.target.closest("[data-i]"); if (x) { const r = tops()[Number(x.dataset.i)]; close("dlg-tasks"); if (r) restore(r.id); } });
    });
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); sr(w().copied); } catch { /* буфер обміну недоступний */ }
  }

  /* ---------- Схема, шпалери, мова ---------- */
  function setScheme(k) {
    scheme = k;
    store.set("aic-w31-scheme", k);
    Object.entries(SCHEMES[k]).forEach(([n, v]) => document.documentElement.style.setProperty("--" + n, v));
  }
  function setWall(k) {
    wall = k;
    store.set("aic-w31-wall", k);
    document.documentElement.style.setProperty("--wall", WALLS[k]);
    desk.style.backgroundSize = WALL_SIZE[k];
    desk.style.backgroundPosition = WALL_POS[k];
  }
  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    wins.forEach((r) => { if (!r.def.dialog) { r.render(); if (r.mini) r.mini.querySelector("span").textContent = r.def.title(); } });
  }

  /* ---------- Вихід у DOS і запуск ---------- */
  function exitWindows() {
    dialog("dlg-exit", w().progman, `<div class="row">${ICON.info}<p>${esc(w().exitText)}</p></div>`, [{ label: w().ok, act: toDos }, { label: w().cancel }], [380, 160]);
  }
  function toDos() {
    setTimeout(() => {
      desk.hidden = true;
      [...wins.keys()].forEach((id) => { const r = wins.get(id); if (r) { r.el.remove(); if (r.mini) r.mini.remove(); } });
      wins.clear();
      $("deskMinis").replaceChildren();
      showDosPrompt(w().exitDos);
    }, 0);
  }

  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((res) => { if (skipping || reduced) return res(); const id = setTimeout(res, ms); waiters.push(() => { clearTimeout(id); res(); }); });
  const skip = () => { skipping = true; waiters.splice(0).forEach((f) => f()); };

  function showDosPrompt(hint) {
    const dos = $("dos");
    dos.hidden = false;
    $("dosSkip").textContent = "";
    let typed = "";
    const out = $("dosOut");
    const base = (hint ? hint + "\n\n" : "") + "C:\\>";
    const paint = () => { out.textContent = base + typed + "_"; };
    paint();
    const onKey = (e) => {
      if (e.key === "Enter") {
        const c = typed.trim().toLowerCase();
        typed = "";
        if (c === "win") { cleanup(); boot(false); return; }
        const v = VERSIONS.find((x) => x[1] === c);
        if (v) { go(v[1]); return; }
        out.textContent = base + c + "\n" + w().bad + "\n\nC:\\>_";
        return;
      }
      if (e.key === "Backspace") typed = typed.slice(0, -1);
      else if (e.key.length === 1) typed += e.key;
      paint();
    };
    const tap = () => { if (coarse) { cleanup(); boot(false); } };
    function cleanup() { document.removeEventListener("keydown", onKey); dos.removeEventListener("click", tap); }
    document.addEventListener("keydown", onKey);
    dos.addEventListener("click", tap);
  }

  async function boot(full) {
    skipping = false;
    const dos = $("dos");
    const out = $("dosOut");
    const onSkip = () => skip();
    addEventListener("keydown", onSkip);
    addEventListener("pointerdown", onSkip);
    if (full) {
      dos.hidden = false;
      $("dosSkip").textContent = w().skip;
      out.textContent = "";
      const put = (s) => { out.textContent += s; };
      put("Starting DOS...\n\n");
      await sleep(400);
      put("HIMEM is testing extended memory...done.\n\n");
      await sleep(300);
      put("C:\\>");
      await sleep(400);
      for (const ch of "win") { put(ch); await sleep(120); }
      put("\n");
      await sleep(300);
    }
    dos.hidden = true;
    $("splashVer").textContent = w().version;
    $("splash").hidden = false;
    await sleep(1400);
    $("splash").hidden = true;
    desk.hidden = false;
    desk.classList.add("busy");
    await sleep(500);
    desk.classList.remove("busy");
    removeEventListener("keydown", onSkip);
    removeEventListener("pointerdown", onSkip);
    store.set("aic-w31-booted", "1", sessionStorage);
    openProgman();
    if (!narrow()) openWrite();
    skipping = false;
  }

  /* ---------- Глобальні клавіші ---------- */
  document.addEventListener("keydown", (e) => {
    if (desk.hidden) return;
    if (e.key === "Escape" && glossEl) { const g = glossBtn; closeGloss(); if (g) g.focus(); return; }
    if (e.key === "F1") { e.preventDefault(); const c = wins.get("cardfile"); openHelp(c && c.el.classList.contains("active") ? cf.front : undefined); return; }
    if (e.altKey && e.key === "F4") closeGloss();
    if (e.key === "Escape" && menuEl) { const o = menuOwner; closeMenu(); if (o) o.focus(); return; }
    if (e.ctrlKey && e.key === "Escape") { e.preventDefault(); taskList(); return; }
    if (e.altKey && e.key === "F4") { e.preventDefault(); const r = activeTop(); if (r) close(r.id); return; }
    if (e.ctrlKey && e.key === "F4") { e.preventDefault(); const g = groupWins().find((r) => r.el.classList.contains("active")); if (g) close(g.id); return; }
    const card = wins.get("cardfile");
    if (card && card.el.classList.contains("active") && (e.key === "PageDown" || e.key === "PageUp")) { e.preventDefault(); stepCard(e.key === "PageDown" ? 1 : -1); }
  });
  desk.addEventListener("dblclick", (e) => { if (e.target === desk) taskList(); });
  desk.addEventListener("click", (e) => { if (e.target === desk || e.target.classList.contains("mdi")) selectIcon(null); });

  setScheme(scheme);
  setWall(wall);
  document.documentElement.lang = lang;
  document.fonts.load('16px "TCon16"').finally(() => {
    boot(!(reduced || store.get("aic-w31-booted", sessionStorage)));
  });
})();
