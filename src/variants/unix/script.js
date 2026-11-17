(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";
  const HOME = "/usr/guest";

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
        "  LANG <мова>     змінити мову",
        "  COLOR           змінити монітор",
        "  CLS             очистити екран",
        "  VER             версія",
        "  BOOT            перезавантажити",
        "  NC              повернутися до панелей",
        "  COMMAND         консольний режим",
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
        "  LANG <code>     switch language",
        "  COLOR           switch monitor",
        "  CLS             clear screen",
        "  VER             version",
        "  BOOT            reboot",
        "  NC              back to the panels",
        "  COMMAND         console mode",
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
        "  LANG <язык>     сменить язык",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "  COMMAND         консольный режим",
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
      skip: "Zum Überspringen beliebige Taste drücken",
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Ihre Geschäftsprozesse zu digitalisieren und zu automatisieren: Wir konzipieren moderne IT-Lösungen und führen sie ein.",
      heroLead: "Was wir für Ihr Unternehmen tun",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme aufbauen", "künstliche Intelligenz einsetzen", "Infrastruktur in die Cloud bringen"],
      readmeDesc: "Über das Unternehmen",
      hint: "↑↓ Datei wählen   Enter öffnen   F1 Hilfe",
      discuss: "Projekt besprechen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie eine Zusammenarbeit vorschlagen möchten oder mehr über unsere Lösungen und unsere Erfahrung wissen wollen – schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      write: "E-Mail schreiben",
      copy: "Adresse kopieren",
      copied: "Adresse kopiert",
      copyFailed: "Kopieren nicht möglich. Die Adresse lautet " + EMAIL,
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
        "  TYPE <Datei>    Datei öffnen (oder nur den Namen eingeben)",
        "  MAIL            an uns schreiben",
        "  LANG <Code>     Sprache wechseln",
        "  COLOR           Monitor wechseln",
        "  CLS             Bildschirm löschen",
        "  VER             Version",
        "  BOOT            neu starten",
        "  NC              zurück zu den Fenstern",
        "  COMMAND         Konsolenmodus",
        "",
        "Tasten: ↑↓ Pos1 Ende Enter F1–F10 Esc Strg+O"
      ]
    },
    fr: {
      title: "ArtIntelliCo — développement logiciel et support informatique pour les entreprises",
      menu: ["Services", "Partenaires", "Contacts", "Langue :", "Moniteur :"],
      monitors: { ega: "EGA", green: "Vert", amber: "Ambre" },
      cols: ["Nom", "Description"],
      fkeys: ["Aide", "Langue", "Voir", "Courrier", "", "", "", "", "Moniteur", "Quitter"],
      skip: "Appuyez sur une touche pour passer",
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous",
      phrases: ["développons des plateformes SaaS", "mettons en place des systèmes CRM et ERP", "faisons travailler l'IA pour vous", "migrons l'infrastructure vers le cloud"],
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
      copyFailed: "Copie impossible. L'adresse est " + EMAIL,
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
        "  LANG <code>     changer de langue",
        "  COLOR           changer de moniteur",
        "  CLS             effacer l'écran",
        "  VER             version",
        "  BOOT            redémarrer",
        "  NC              revenir aux panneaux",
        "  COMMAND         mode console",
        "",
        "Touches : ↑↓ Origine Fin Entrée F1–F10 Échap Ctrl+O"
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
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar sus procesos de negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio",
      phrases: ["desarrollamos plataformas SaaS", "creamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      hint: "↑↓ elegir archivo   Intro abrir   F1 ayuda",
      discuss: "Hablar de su proyecto",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos un correo electrónico.",
      emailLabel: "Correo electrónico",
      write: "Escribir un correo",
      copy: "Copiar dirección",
      copied: "Dirección copiada",
      copyFailed: "No se ha podido copiar. La dirección es " + EMAIL,
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
        "  LANG <código>   cambiar de idioma",
        "  COLOR           cambiar de monitor",
        "  CLS             borrar la pantalla",
        "  VER             versión",
        "  BOOT            reiniciar",
        "  NC              volver a los paneles",
        "  COMMAND         modo consola",
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
      heroText: "A equipa da ArtIntelliCo ajuda-o a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio",
      phrases: ["desenvolvemos plataformas SaaS", "criamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      hint: "↑↓ escolher ficheiro   Enter abrir   F1 ajuda",
      discuss: "Falar do seu projeto",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, envie-nos um e-mail.",
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
        "  LANG <código>   mudar de idioma",
        "  COLOR           mudar de monitor",
        "  CLS             limpar o ecrã",
        "  VER             versão",
        "  BOOT            reiniciar",
        "  NC              voltar aos painéis",
        "  COMMAND         modo consola",
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
      hint: "↑↓ scegliere file   Invio aprire   F1 aiuto",
      discuss: "Parliamo del Suo progetto",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      write: "Scrivere un'e-mail",
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
        "  TYPE <file>     aprire un file (o digitarne il nome)",
        "  MAIL            scriverci",
        "  LANG <codice>   cambiare lingua",
        "  COLOR           cambiare monitor",
        "  CLS             pulire lo schermo",
        "  VER             versione",
        "  BOOT            riavviare",
        "  NC              tornare ai pannelli",
        "  COMMAND         modalità console",
        "",
        "Tasti: ↑↓ Home Fine Invio F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Рядки, потрібні лише терміналу UNIX */
  const UX = {
    uk: {
      motd: ["Ласкаво просимо до ArtIntelliCo. Підказка: ", "help", "."],
      discuss: ["Обговорити задачу: ", "mail"],
      phosphors: { white: "білий", green: "зелений", amber: "бурштин" },
      phosphorSet: "Люмінофор: ",
      langSet: "LANG=uk_UA.KOI8-U",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      man: {
        header: "Довідник користувача",
        name: ["НАЗВА", "intro — як читати цей сайт"],
        desc: ["ОПИС", "Сайт — це домашній каталог /usr/guest. Почніть з:"],
        steps: [
          ["ls", "що тут є"],
          ["cat README", "про компанію"],
          ["cd services; ls", "послуги"],
          ["man concept", "послуга як сторінка довідника"],
          ["cat partners", "наші партнери"],
          ["mail", "лист від нас: як зв'язатися"],
          ["finger aic", "хто ми"]
        ],
        cmds: ["КОМАНДИ", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "мова"],
          ["phosphor white|green|amber", "колір люмінофора"],
          ["dos", "DOS-версія сайту"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "вийти"]
        ],
        keys: ["КЛАВІШІ", "↑↓ історія, Tab доповнення, Ctrl+C скасувати, Ctrl+L очистити екран"]
      }
    },
    en: {
      motd: ["Welcome to ArtIntelliCo. Need a hint? Type ", "help", "."],
      discuss: ["Discuss your project: ", "mail"],
      phosphors: { white: "white", green: "green", amber: "amber" },
      phosphorSet: "Phosphor: ",
      langSet: "LANG=en_US.ASCII",
      skip: "Press any key to skip",
      man: {
        header: "UNIX Programmer's Manual",
        name: ["NAME", "intro — how to read this site"],
        desc: ["DESCRIPTION", "The site is the home directory /usr/guest. Start with:"],
        steps: [
          ["ls", "what's here"],
          ["cat README", "about the company"],
          ["cd services; ls", "services"],
          ["man concept", "a service as a manual page"],
          ["cat partners", "our partners"],
          ["mail", "a letter from us: how to get in touch"],
          ["finger aic", "who we are"]
        ],
        cmds: ["COMMANDS", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "language"],
          ["phosphor white|green|amber", "phosphor colour"],
          ["dos", "DOS version of the site"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "log out"]
        ],
        keys: ["KEYS", "↑↓ history, Tab completion, Ctrl+C cancel, Ctrl+L clear screen"]
      }
    },
    ru: {
      motd: ["Добро пожаловать в ArtIntelliCo. Подсказка: ", "help", "."],
      discuss: ["Обсудить задачу: ", "mail"],
      phosphors: { white: "белый", green: "зелёный", amber: "янтарь" },
      phosphorSet: "Люминофор: ",
      langSet: "LANG=ru_RU.KOI8-R",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      man: {
        header: "Руководство пользователя",
        name: ["ИМЯ", "intro — как читать этот сайт"],
        desc: ["ОПИСАНИЕ", "Сайт — это домашний каталог /usr/guest. Начните с:"],
        steps: [
          ["ls", "что здесь есть"],
          ["cat README", "о компании"],
          ["cd services; ls", "услуги"],
          ["man concept", "услуга как страница руководства"],
          ["cat partners", "наши партнёры"],
          ["mail", "письмо от нас: как связаться"],
          ["finger aic", "кто мы"]
        ],
        cmds: ["КОМАНДЫ", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "язык"],
          ["phosphor white|green|amber", "цвет люминофора"],
          ["dos", "DOS-версия сайта"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "выйти"]
        ],
        keys: ["КЛАВИШИ", "↑↓ история, Tab дополнение, Ctrl+C отменить, Ctrl+L очистить экран"]
      }
    },
    de: {
      motd: ["Willkommen bei ArtIntelliCo. Hilfe gefällig? Geben Sie ", "help", " ein."],
      discuss: ["Projekt besprechen: ", "mail"],
      phosphors: { white: "weiß", green: "grün", amber: "bernstein" },
      phosphorSet: "Phosphor: ",
      langSet: "LANG=de_DE.ISO8859-1",
      skip: "Zum Überspringen beliebige Taste drücken",
      man: {
        header: "UNIX-Programmierhandbuch",
        name: ["NAME", "intro — wie man diese Website liest"],
        desc: ["BESCHREIBUNG", "Die Website ist das Heimatverzeichnis /usr/guest. Beginnen Sie mit:"],
        steps: [
          ["ls", "was es hier gibt"],
          ["cat README", "über das Unternehmen"],
          ["cd services; ls", "Leistungen"],
          ["man concept", "eine Leistung als Handbuchseite"],
          ["cat partners", "unsere Partner"],
          ["mail", "ein Brief von uns: so erreichen Sie uns"],
          ["finger aic", "wer wir sind"]
        ],
        cmds: ["BEFEHLE", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "Sprache"],
          ["phosphor white|green|amber", "Farbe des Phosphors"],
          ["dos", "DOS-Version der Website"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "KI"],
          ["logout", "abmelden"]
        ],
        keys: ["TASTEN", "↑↓ Verlauf, Tab ergänzen, Strg+C Abbruch, Strg+L Bildschirm löschen"]
      }
    },
    fr: {
      motd: ["Bienvenue chez ArtIntelliCo. Besoin d'aide ? Tapez ", "help", "."],
      discuss: ["Parler de votre projet : ", "mail"],
      phosphors: { white: "blanc", green: "vert", amber: "ambre" },
      phosphorSet: "Phosphore : ",
      langSet: "LANG=fr_FR.ISO8859-1",
      skip: "Appuyez sur une touche pour passer",
      man: {
        header: "Manuel du programmeur UNIX",
        name: ["NOM", "intro — comment lire ce site"],
        desc: ["DESCRIPTION", "Le site est le répertoire personnel /usr/guest. Commencez par :"],
        steps: [
          ["ls", "ce qu'il y a ici"],
          ["cat README", "à propos de l'entreprise"],
          ["cd services; ls", "les services"],
          ["man concept", "un service en page de manuel"],
          ["cat partners", "nos partenaires"],
          ["mail", "une lettre de notre part : comment nous joindre"],
          ["finger aic", "qui nous sommes"]
        ],
        cmds: ["COMMANDES", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "langue"],
          ["phosphor white|green|amber", "couleur du phosphore"],
          ["dos", "version DOS du site"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "IA"],
          ["logout", "se déconnecter"]
        ],
        keys: ["TOUCHES", "↑↓ historique, Tab complète, Ctrl+C annule, Ctrl+L efface l'écran"]
      }
    },
    es: {
      motd: ["Bienvenido a ArtIntelliCo. ¿Necesita ayuda? Escriba ", "help", "."],
      discuss: ["Hablar de su proyecto: ", "mail"],
      phosphors: { white: "blanco", green: "verde", amber: "ámbar" },
      phosphorSet: "Fósforo: ",
      langSet: "LANG=es_ES.ISO8859-1",
      skip: "Pulse cualquier tecla para omitir",
      man: {
        header: "Manual del programador UNIX",
        name: ["NOMBRE", "intro — cómo leer este sitio"],
        desc: ["DESCRIPCIÓN", "El sitio es el directorio personal /usr/guest. Empiece por:"],
        steps: [
          ["ls", "qué hay aquí"],
          ["cat README", "sobre la empresa"],
          ["cd services; ls", "servicios"],
          ["man concept", "un servicio como página de manual"],
          ["cat partners", "nuestros socios"],
          ["mail", "una carta nuestra: cómo contactarnos"],
          ["finger aic", "quiénes somos"]
        ],
        cmds: ["COMANDOS", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "idioma"],
          ["phosphor white|green|amber", "color del fósforo"],
          ["dos", "versión DOS del sitio"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "IA"],
          ["logout", "cerrar sesión"]
        ],
        keys: ["TECLAS", "↑↓ historial, Tab completa, Ctrl+C cancela, Ctrl+L borra pantalla"]
      }
    },
    pt: {
      motd: ["Bem-vindo à ArtIntelliCo. Precisa de ajuda? Escreva ", "help", "."],
      discuss: ["Falar do seu projeto: ", "mail"],
      phosphors: { white: "branco", green: "verde", amber: "âmbar" },
      phosphorSet: "Fósforo: ",
      langSet: "LANG=pt_PT.ISO8859-1",
      skip: "Prima qualquer tecla para saltar",
      man: {
        header: "Manual do programador UNIX",
        name: ["NOME", "intro — como ler este site"],
        desc: ["DESCRIÇÃO", "O site é o diretório pessoal /usr/guest. Comece por:"],
        steps: [
          ["ls", "o que há aqui"],
          ["cat README", "sobre a empresa"],
          ["cd services; ls", "serviços"],
          ["man concept", "um serviço como página de manual"],
          ["cat partners", "os nossos parceiros"],
          ["mail", "uma carta nossa: como nos contactar"],
          ["finger aic", "quem somos"]
        ],
        cmds: ["COMANDOS", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "idioma"],
          ["phosphor white|green|amber", "cor do fósforo"],
          ["dos", "versão DOS do site"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "IA"],
          ["logout", "terminar sessão"]
        ],
        keys: ["TECLAS", "↑↓ histórico, Tab completar, Ctrl+C cancelar, Ctrl+L limpar o ecrã"]
      }
    },
    it: {
      motd: ["Benvenuti in ArtIntelliCo. Serve aiuto? Digiti ", "help", "."],
      discuss: ["Parliamo del Suo progetto: ", "mail"],
      phosphors: { white: "bianco", green: "verde", amber: "ambra" },
      phosphorSet: "Fosfori: ",
      langSet: "LANG=it_IT.ISO8859-1",
      skip: "Premere un tasto qualsiasi per saltare",
      man: {
        header: "Manuale del programmatore UNIX",
        name: ["NOME", "intro — come leggere questo sito"],
        desc: ["DESCRIZIONE", "Il sito è la directory home /usr/guest. Cominci da:"],
        steps: [
          ["ls", "che cosa c'è qui"],
          ["cat README", "l'azienda"],
          ["cd services; ls", "servizi"],
          ["man concept", "un servizio come pagina di manuale"],
          ["cat partners", "i nostri partner"],
          ["mail", "una lettera da parte nostra: come contattarci"],
          ["finger aic", "chi siamo"]
        ],
        cmds: ["COMANDI", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang", "lingua"],
          ["phosphor white|green|amber", "colore dei fosfori"],
          ["dos", "versione DOS del sito"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "IA"],
          ["logout", "disconnettersi"]
        ],
        keys: ["TASTI", "↑↓ storico, Tab completa, Ctrl+C annulla, Ctrl+L pulisce lo schermo"]
      }
    }
  };

  /* Послуги як сторінки man у розділі 8. {x} — підкреслене ім'я */
  const SEE = {
    concept: ["saas", "web", "crm-erp"],
    saas: ["concept", "api", "cloud"],
    web: ["mobile", "api", "support"],
    mobile: ["web", "saas", "api"],
    ai: ["api", "crm-erp", "concept"],
    "crm-erp": ["concept", "api", "ai"],
    cloud: ["redhat", "support", "saas"],
    redhat: ["cloud", "support", "api"],
    api: ["crm-erp", "saas", "support"],
    support: ["redhat", "cloud", "api"]
  };
  const FLAGS = {
    concept: ["-i", "-b", "-c", "-s"],
    saas: ["-m", "-b", "-r", "-a", "-s"],
    web: ["-p", "-f", "-i", "-s", "-l"],
    mobile: ["-i", "-s", "-a", "-n", "-p"],
    ai: ["-a", "-c", "-d", "-k", "-f", "-p"],
    "crm-erp": ["-m", "-r", "-d", "-t", "-i"],
    cloud: ["-a", "-p", "-m", "-b", "-o"],
    redhat: ["-a", "-r", "-o", "-p", "-i", "-m"],
    api: ["-d", "-p", "-x", "-q", "-w"],
    support: ["-m", "-u", "-b", "-f", "-a"]
  };
  const MAN = {
    uk: {
      header: "Довідник послуг ArtIntelliCo",
      sec: { name: "НАЗВА", syn: "СИНТАКСИС", desc: "ОПИС", opts: "ПАРАМЕТРИ", ret: "ЗНАЧЕННЯ, ЩО ПОВЕРТАЄТЬСЯ", bugs: "ВАДИ", notes: "ПРИМІТКИ", see: "ДИВ. ТАКОЖ", list: "СТОРІНКИ" },
      intro: {
        name: "вступ до розділу 8: послуги ArtIntelliCo",
        desc: [
          "Кожна сторінка цього розділу описує одну послугу. Стек добираємо під задачу, а не задачу під стек.",
          "Іноді найкраща відповідь — готовий сервіс за підпискою. Тоді ми так і скажемо, і розробляти нічого не доведеться."
        ]
      },
      pages: {
        concept: {
          name: "концепція ІТ-рішення",
          desc: [
            "З'ясовуємо, що насправді має робити система, і записуємо це так, щоб зрозуміли і бізнес, і розробники.",
            "Починається все з розмов. Не лише з керівником, а й з бухгалтерією, складом, менеджерами, тобто з тими, хто щодня натискатиме кнопки. Причина проста: найдорожчу помилку в проєкті роблять ще до першого рядка коду, коли систему будують під задачу, яку ніхто толком не сформулював."
          ],
          opts: ["інтерв'ю з працівниками, розбір того, як процеси йдуть зараз", "бізнес-вимоги та сценарії роботи", "порівняння готових продуктів із розробкою на замовлення", "технічне завдання зі строками й бюджетом, оціненими за етапами"],
          ret: "Документ, за яким будь-яка команда, наша чи чужа, може оцінити роботу й почати її.",
          bugs: "Іноді за підсумком радимо нічого не розробляти, а взяти готовий продукт і доналаштувати його. Так і задумано."
        },
        saas: {
          name: "розробка SaaS-рішень",
          desc: [
            "Проєктуємо й складаємо SaaS-платформу: від першої версії для пілотних клієнтів до сервісу, де кожен клієнт має свій простір, тариф і особистий кабінет.",
            "Гроші в SaaS приносить не код. Їх приносить те, наскільки легко новий клієнт реєструється, платить і береться до роботи, жодного разу не подзвонивши в підтримку. Тому мультитенантність, білінг і права доступу закладаються з першого дня: переробляти їх, коли клієнти вже всередині, виходить у рази дорожче."
          ],
          opts: ["мультитенантна архітектура, дані клієнтів ізольовані одне від одного", "реєстрація, тарифи, підписки, онлайн-оплата", "особисті кабінети, ролі, права доступу", "інтеграції та відкрите API для ваших клієнтів", "масштабування, коли зростає навантаження"],
          ret: "Продукт, який продається за підпискою. Не проєкт, який щоразу впроваджують руками.",
          bugs: "Перша версія виходить раніше, ніж хотілося б. Навмисно: живі користувачі швидко показують, які функції були зайві."
        },
        web: {
          name: "веброзробка",
          desc: [
            "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання та внутрішні вебсервіси. Під задачу, без шаблону.",
            "Сайт для бізнесу міряють заявками й замовленнями, а як він виглядає в портфоліо — справа десята. Ще до старту домовляємося, що вважати результатом, і вмикаємо аналітику до запуску, а не через пів року. Технологію обирають під задачу: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе."
          ],
          opts: ["прототип і дизайн інтерфейсів", "frontend, backend, панель адміністрування", "інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидкість завантаження, аналітика", "запуск і супровід"],
          ret: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        mobile: {
          name: "мобільні застосунки",
          desc: [
            "Складаємо застосунки для iOS та Android разом із серверною частиною й панеллю адміністрування.",
            "Застосунок окуповується, коли до нього повертаються: повторне замовлення, статус доставки, бонуси. Нативно чи кросплатформно — вирішують бюджет і те, наскільки застосунку потрібні камера, геолокація та офлайн-режим."
          ],
          opts: ["застосунки для iOS та Android", "серверна частина та API", "адмінпанель: контент, замовлення, користувачі", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          ret: "Застосунок, що проходить модерацію магазинів. Керувати ним ваша команда може без розробників.",
          bugs: "Якщо клієнт заходить раз на рік, застосунок не потрібен: радимо зручний мобільний сайт, так дешевше. Кажемо про це до початку робіт."
        },
        ai: {
          name: "рішення зі штучним інтелектом",
          desc: [
            "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів та інших рішень на базі штучного інтелекту й машинного навчання. Агент сам проходить рутинні кроки процесу, а людина перевіряє результат.",
            "Мовні моделі справді корисні там, де працівники годинами розбирають листи, документи й звернення. Робота починається з пілота на ваших даних: цифри точності ви бачите до основної розробки, а не після неї."
          ],
          opts: ["ШІ-агенти: самі розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень, пошук у базі знань", "прогнози попиту, аналіз даних", "пілот з оцінкою якості на ваших даних"],
          ret: "Процес, який раніше виконували люди, тепер виконує система. Контроль лишається за людиною.",
          bugs: "До ШІ ми ставимося скептичніше за багатьох. Половину ідей «давайте додамо нейромережу» закриває звичайна автоматизація, і тоді ми так і кажемо."
        },
        "crm-erp": {
          name: "розробка CRM та ERP",
          desc: [
            "{crm-erp} будує CRM та ERP навколо ваших процесів. Навпаки не працює.",
            "Коробкова CRM справляється, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», власна виходить дешевшою.",
            "Дані переносяться зі старих систем і таблиць. Запуск іде по відділах, щоб робота не ставала ні на день."
          ],
          opts: ["модулі продажів, складу, виробництва, фінансів; ставляться лише потрібні", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією, поштою"],
          ret: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижневих звітів з кожного відділу."
        },
        cloud: {
          name: "хмарні рішення",
          desc: [
            "Переносимо інфраструктуру до Amazon Web Services, повністю або частинами, і стежимо, щоб вона працювала й не дорожчала без причини.",
            "Переїзд починається з аудиту й розрахунку вартості. Переносять усе поетапно, і на кожному кроці є план відкату."
          ],
          opts: ["аудит поточної інфраструктури, розрахунок вартості", "архітектура в AWS, план міграції", "перенесення серверів, баз даних, файлів", "резервне копіювання та моніторинг", "оптимізація витрат після переїзду"],
          ret: "Інфраструктура переживає відмову сервера. Рахунок за хмару зрозумілий.",
          bugs: "Хмара не завжди дешевша за власний сервер. Вигода з'являється, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають підніматися за хвилини, а не за тиждень."
        },
        redhat: {
          name: "інфраструктура компанії на базі Red Hat",
          desc: [
            "Будуємо ІТ-інфраструктуру компанії на рішеннях Red Hat: сервери на Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
            "Red Hat беруть, коли інфраструктура має працювати роками й проходити аудит, а не триматися на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux підтримується десять років.",
            "Інфраструктуру проєктують під ваші навантаження, а конфігурацію серверів описують в Ansible. Будь-який сервер перезбирається за сценарієм, а не з пам'яті."
          ],
          opts: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux, централізовані оновлення через Red Hat Satellite", "контейнерна платформа OpenShift для ваших застосунків", "автоматизація налаштування й розгортання через Ansible", "єдине керування обліковими записами й доступом (Identity Management)", "моніторинг, резервне копіювання, документація для вашої команди"],
          ret: "Інфраструктура, яку можна перевірити, повторити й передати іншій команді, не втративши знань.",
          notes: "Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися."
        },
        api: {
          name: "API та інтеграції",
          desc: [
            "Проєктуємо API для ваших систем і поєднуємо їх із сервісами, якими ви вже користуєтеся.",
            "Найчастіше трапляється одне й те саме: дані вводять двічі. Замовлення із сайту передруковують в облікову систему вручну, оплати звіряють у таблиці. Інтеграція прибирає і цю роботу, і помилки, які вона плодить."
          ],
          opts: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM, обліком", "обмін даними між внутрішніми системами", "черги й повторні спроби при збоях", "моніторинг і сповіщення"],
          ret: "Дані вводяться один раз і самі доходять туди, де потрібні.",
          bugs: "Інтеграції ламаються тихо, коли партнер змінює свій API. Тому -w увімкнено завжди: про поломку має повідомити система, а не клієнт."
        },
        support: {
          name: "технічна підтримка",
          desc: [
            "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, зокрема ті, що писали не ми.",
            "Виправлення помилок — лише частина роботи. Є ще оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і невеликі доопрацювання по ходу."
          ],
          opts: ["моніторинг доступності та помилок", "виправлення помилок, оновлення безпеки", "резервне копіювання й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація систем від інших підрядників"],
          ret: "Система працює, і є команда, яка знає, як вона влаштована.",
          bugs: "Чужу систему без документації не правлять: будь-яка правка стає лотереєю. Тому в такому разі спершу робимо аудит (support -a)."
        }
      }
    },
    en: {
      header: "ArtIntelliCo Services Manual",
      sec: { name: "NAME", syn: "SYNOPSIS", desc: "DESCRIPTION", opts: "OPTIONS", ret: "RETURN VALUES", bugs: "BUGS", notes: "NOTES", see: "SEE ALSO", list: "PAGES" },
      intro: {
        name: "introduction to section 8: ArtIntelliCo services",
        desc: [
          "Each page in this section describes one service. We pick the stack to fit the task, not the task to fit the stack.",
          "Sometimes the best answer is an off-the-shelf subscription service. Then we'll say so, and nothing needs to be built."
        ]
      },
      pages: {
        concept: {
          name: "IT solution concept",
          desc: [
            "We work out what the system actually has to do and write it down so that both the business and the developers can read it.",
            "It starts with conversations. Not only with whoever signs off, but with accounting, the warehouse and the sales managers, the people who'll be pressing the buttons every day. The reason is simple: the most expensive mistake in a project is made before the first line of code, when the system gets built for a problem nobody properly defined."
          ],
          opts: ["interviews with staff; a walkthrough of how processes run today", "business requirements and user scenarios", "ready-made products compared against custom development", "a specification with time and budget estimated per phase"],
          ret: "A document any team, ours or someone else's, can estimate from and start building.",
          bugs: "Sometimes our advice is to build nothing and configure an existing product instead. This is intended behaviour."
        },
        saas: {
          name: "SaaS development",
          desc: [
            "We design and build SaaS platforms, from a first version for pilot customers to a service where every customer gets their own workspace, plan and dashboard.",
            "The money in SaaS isn't in the code. It's in how easily a new customer signs up, pays and gets going without ever calling support. That's why multi-tenancy, billing and permissions go in on day one: retrofitting them once customers are inside costs several times more."
          ],
          opts: ["multi-tenant architecture; customer data kept isolated", "sign-up, plans, subscriptions, online payments", "customer dashboards, roles, permissions", "integrations and a public API for your customers", "scaling as load grows"],
          ret: "A product you sell by subscription. Not a project someone rolls out by hand every time.",
          bugs: "The first version ships earlier than you'd like. On purpose: real users are quick to show which features were never needed."
        },
        web: {
          name: "web development",
          desc: [
            "We build corporate websites, marketplaces, online stores, booking systems and internal web tools. Built around the task, no templates.",
            "A business website is measured in leads and orders; how it looks in a portfolio comes a distant second. Before work starts we agree on what counts as a result, and analytics go live before launch, not six months later. The technology follows the task: a landing page has no use for a heavy platform, and a marketplace won't squeeze into a website builder."
          ],
          opts: ["prototype and interface design", "frontend, backend, admin panel", "integrations with payments, delivery, CRM and accounting systems", "SEO groundwork, page speed, analytics", "launch and ongoing support"],
          ret: "A web service that shows how many leads and how much revenue it brings in."
        },
        mobile: {
          name: "mobile apps",
          desc: [
            "We build iOS and Android apps together with the server side and the admin panel behind them.",
            "An app earns its keep when people come back to it: a repeat order, a delivery status, loyalty points. Native or cross-platform comes down to budget and to how much the app depends on the camera, location and offline mode."
          ],
          opts: ["iOS and Android apps", "server side and API", "admin panel: content, orders, users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          ret: "An app that passes store review. Your team runs it without calling a developer.",
          bugs: "If a customer would open it once a year, you don't need an app: we suggest a good mobile website instead, it's cheaper. We say so before any work begins."
        },
        ai: {
          name: "AI-powered solutions",
          desc: [
            "We automate business processes with AI agents and other solutions built on artificial intelligence and machine learning. The agent walks through the routine steps of a process itself; a person checks the outcome.",
            "Language models earn their place where people spend hours sorting emails, documents and support requests. Work starts with a pilot on your own data, so you see accuracy figures before the main build, not after it."
          ],
          opts: ["AI agents that triage requests, fill in the CRM and draft replies to customers on their own", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification, knowledge-base search", "demand forecasting, data analysis", "a pilot with quality measured on your data"],
          ret: "A process people used to do by hand is now done by the system. A person stays in control.",
          bugs: "We're more sceptical about AI than most. Half of the \"let's add a neural network\" ideas are covered by ordinary automation, and in that case we say so."
        },
        "crm-erp": {
          name: "CRM and ERP development",
          desc: [
            "{crm-erp} builds CRM and ERP systems around the way your business works. The other way round doesn't work.",
            "Off-the-shelf CRM copes as long as your process looks standard. Once managers run half their work in spreadsheets because the system \"can't do that\", building your own comes out cheaper.",
            "Data is migrated from old systems and spreadsheets. Rollout goes department by department, so work never stops for a day."
          ],
          opts: ["sales, warehouse, production, finance modules; only the ones you need", "roles, permissions, audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony, email"],
          ret: "One system instead of a zoo of spreadsheets. Management sees where things stand without collecting weekly reports from every department."
        },
        cloud: {
          name: "cloud solutions",
          desc: [
            "We move your infrastructure to Amazon Web Services, in full or in part, and keep it running without the bill creeping up for no reason.",
            "A move starts with an audit and a cost estimate. Everything is migrated in stages, with a rollback plan at every step."
          ],
          opts: ["audit of the current infrastructure, cost estimate", "AWS architecture, migration plan", "moving servers, databases, files", "backups and monitoring", "cost optimisation after the move"],
          ret: "Infrastructure that survives a server failure. A cloud bill you understand.",
          bugs: "The cloud isn't always cheaper than your own server. It pays off when load spikes, when you need fault tolerance, or when new environments must come up in minutes rather than a week."
        },
        redhat: {
          name: "company infrastructure on Red Hat",
          desc: [
            "We build your company's IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform, automation with Ansible.",
            "Red Hat is the pick when infrastructure has to run for years and pass audits instead of living in one administrator's head. The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years.",
            "The infrastructure is designed around your workloads, and server configuration is described in Ansible. Any server can be rebuilt from a playbook rather than from memory."
          ],
          opts: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout, centralised updates through Red Hat Satellite", "the OpenShift container platform for your applications", "configuration and deployment automation with Ansible", "central identity and access management (Identity Management)", "monitoring, backups, documentation for your team"],
          ret: "Infrastructure you can audit, reproduce and hand over to another team without losing what it knows.",
          notes: "Red Hat is our partner, so we can also help you sort out subscriptions and vendor support."
        },
        api: {
          name: "APIs and integrations",
          desc: [
            "We design APIs for your systems and connect them to the services you already use.",
            "The same thing turns up most often: data typed in twice. Website orders re-keyed into the accounting system by hand, payments reconciled in a spreadsheet. An integration removes that work along with the mistakes it breeds."
          ],
          opts: ["API design and documentation", "integrations with payment providers, delivery services, CRM, accounting", "data exchange between internal systems", "queues and retries on failure", "monitoring and alerts"],
          ret: "Data is entered once and gets where it needs to go on its own.",
          bugs: "Integrations break quietly when a partner changes their API. That's why -w is always on: the system should report the breakage, not a customer."
        },
        support: {
          name: "technical support",
          desc: [
            "We keep your IT systems running and keep developing them, including ones we didn't build.",
            "Fixing bugs is only part of the job. There are also updates that close security holes, monitoring that spots trouble before users do, and small improvements along the way."
          ],
          opts: ["availability and error monitoring", "bug fixes, security updates", "backups and restore testing", "planned improvements and new features", "audit and documentation of systems from other contractors"],
          ret: "The system works, and there's a team that knows how it's put together.",
          bugs: "Someone else's undocumented system can't be changed safely: every edit is a gamble. In that case we start with an audit (support -a)."
        }
      }
    },
    ru: {
      header: "Руководство по услугам ArtIntelliCo",
      sec: { name: "ИМЯ", syn: "СИНТАКСИС", desc: "ОПИСАНИЕ", opts: "ПАРАМЕТРЫ", ret: "ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ", bugs: "ОШИБКИ", notes: "ПРИМЕЧАНИЯ", see: "СМОТРИТЕ ТАКЖЕ", list: "СТРАНИЦЫ" },
      intro: {
        name: "введение в раздел 8: услуги ArtIntelliCo",
        desc: [
          "Каждая страница этого раздела описывает одну услугу. Стек подбираем под задачу, а не задачу под стек.",
          "Иногда лучший ответ — готовый сервис по подписке. Тогда мы так и скажем, и разрабатывать ничего не придётся."
        ]
      },
      pages: {
        concept: {
          name: "концепция ИТ-решения",
          desc: [
            "Выясняем, что на самом деле должна делать система, и записываем это так, чтобы поняли и бизнес, и разработчики.",
            "Начинается всё с разговоров. Не только с руководителем, но и с бухгалтерией, складом, менеджерами, то есть с теми, кто будет нажимать кнопки каждый день. Причина простая: самую дорогую ошибку в проекте делают ещё до первой строки кода, когда систему строят под задачу, которую никто толком не сформулировал."
          ],
          opts: ["интервью с сотрудниками, разбор того, как процессы идут сейчас", "бизнес-требования и сценарии работы", "сравнение готовых продуктов с разработкой на заказ", "техническое задание со сроками и бюджетом, оценёнными по этапам"],
          ret: "Документ, по которому любая команда, наша или чужая, может оценить работу и начать её.",
          bugs: "Иногда по итогам советуем ничего не разрабатывать, а взять готовый продукт и донастроить его. Так и задумано."
        },
        saas: {
          name: "разработка SaaS-решений",
          desc: [
            "Проектируем и собираем SaaS-платформу: от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и личный кабинет.",
            "Деньги в SaaS приносит не код. Их приносит то, насколько легко новый клиент регистрируется, платит и начинает работать, ни разу не позвонив в поддержку. Поэтому мультитенантность, биллинг и права доступа закладываются с первого дня: переделывать их, когда клиенты уже внутри, выходит в разы дороже."
          ],
          opts: ["мультитенантная архитектура, данные клиентов изолированы друг от друга", "регистрация, тарифы, подписки, онлайн-оплата", "личные кабинеты, роли, права доступа", "интеграции и открытое API для ваших клиентов", "масштабирование, когда растёт нагрузка"],
          ret: "Продукт, который продаётся по подписке. Не проект, который каждый раз внедряют руками.",
          bugs: "Первая версия выходит раньше, чем хотелось бы. Намеренно: живые пользователи быстро показывают, какие функции были лишними."
        },
        web: {
          name: "веб-разработка",
          desc: [
            "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Под задачу, без шаблона.",
            "Сайт для бизнеса меряют заявками и заказами, а как он смотрится в портфолио — дело десятое. Ещё до старта договариваемся, что считать результатом, и включаем аналитику до запуска, а не через полгода. Технологию выбирают под задачу: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет."
          ],
          opts: ["прототип и дизайн интерфейсов", "frontend, backend, панель администрирования", "интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, скорость загрузки, аналитика", "запуск и сопровождение"],
          ret: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        mobile: {
          name: "мобильные приложения",
          desc: [
            "Собираем приложения для iOS и Android вместе с серверной частью и панелью администрирования.",
            "Приложение окупается, когда к нему возвращаются: повторный заказ, статус доставки, бонусы. Нативно или кроссплатформенно — решают бюджет и то, насколько приложению нужны камера, геолокация и офлайн-режим."
          ],
          opts: ["приложения для iOS и Android", "серверная часть и API", "админ-панель: контент, заказы, пользователи", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          ret: "Приложение, которое проходит модерацию магазинов. Управлять им ваша команда может без разработчиков.",
          bugs: "Если клиент заходит раз в год, приложение не нужно: советуем удобный мобильный сайт, так дешевле. Говорим об этом до начала работ."
        },
        ai: {
          name: "решения с искусственным интеллектом",
          desc: [
            "Автоматизируем бизнес-процессы с помощью ИИ-агентов и других решений на базе искусственного интеллекта и машинного обучения. Агент сам проходит рутинные шаги процесса, а человек проверяет результат.",
            "Языковые модели по-настоящему полезны там, где сотрудники часами разбирают письма, документы и обращения. Работа начинается с пилота на ваших данных: цифры точности вы видите до основной разработки, а не после неё."
          ],
          opts: ["ИИ-агенты: сами разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогнозы спроса, анализ данных", "пилот с оценкой качества на ваших данных"],
          ret: "Процесс, который раньше делали люди, теперь делает система. Контроль остаётся за человеком.",
          bugs: "К ИИ мы относимся скептичнее многих. Половину идей «давайте добавим нейросеть» закрывает обычная автоматизация, и тогда мы так и говорим."
        },
        "crm-erp": {
          name: "разработка CRM и ERP",
          desc: [
            "{crm-erp} строит CRM и ERP вокруг ваших процессов. Наоборот не работает.",
            "Коробочная CRM справляется, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», своя выходит дешевле.",
            "Данные переносятся из старых систем и таблиц. Запуск идёт по отделам, чтобы работа не вставала ни на день."
          ],
          opts: ["модули продаж, склада, производства, финансов; ставятся только нужные", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией, почтой"],
          ret: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, и не собирает еженедельные отчёты с каждого отдела."
        },
        cloud: {
          name: "облачные решения",
          desc: [
            "Переносим инфраструктуру в Amazon Web Services, целиком или частями, и следим, чтобы она работала и не дорожала без причины.",
            "Переезд начинается с аудита и расчёта стоимости. Переносят всё поэтапно, и на каждом шаге есть план отката."
          ],
          opts: ["аудит текущей инфраструктуры, расчёт стоимости", "архитектура в AWS, план миграции", "перенос серверов, баз данных, файлов", "резервное копирование и мониторинг", "оптимизация расходов после переезда"],
          ret: "Инфраструктура переживает отказ сервера. Счёт за облако понятен.",
          bugs: "Облако не всегда дешевле своего сервера. Выгода появляется, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны подниматься за минуты, а не за неделю."
        },
        redhat: {
          name: "инфраструктура компании на базе Red Hat",
          desc: [
            "Строим ИТ-инфраструктуру компании на решениях Red Hat: серверы на Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
            "Red Hat берут, когда инфраструктура должна работать годами и проходить аудит, а не держаться на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux поддерживается десять лет.",
            "Инфраструктура проектируется под ваши нагрузки, а конфигурация серверов описывается в Ansible. Любой сервер пересобирается по сценарию, а не по памяти."
          ],
          opts: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux, централизованные обновления через Red Hat Satellite", "контейнерная платформа OpenShift для ваших приложений", "автоматизация настройки и развёртывания через Ansible", "единое управление учётными записями и доступом (Identity Management)", "мониторинг, резервное копирование, документация для вашей команды"],
          ret: "Инфраструктура, которую можно проверить, повторить и передать другой команде, не потеряв знаний.",
          notes: "Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться."
        },
        api: {
          name: "API и интеграции",
          desc: [
            "Проектируем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
            "Чаще всего встречается одно и то же: данные вводят дважды. Заказ с сайта перебивают в учётную систему руками, оплаты сверяют в таблице. Интеграция убирает и эту работу, и ошибки, которые она плодит."
          ],
          opts: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM, учётом", "обмен данными между внутренними системами", "очереди и повторные попытки при сбоях", "мониторинг и оповещения"],
          ret: "Данные вводятся один раз и сами доходят туда, где нужны.",
          bugs: "Интеграции ломаются тихо, когда партнёр меняет свой API. Поэтому -w включён всегда: о поломке должна сообщить система, а не клиент."
        },
        support: {
          name: "техническая поддержка",
          desc: [
            "Поддерживаем ваши ИТ-системы и развиваем их дальше, в том числе написанные не нами.",
            "Исправлять ошибки — только часть работы. Есть ещё обновления, закрывающие уязвимости, мониторинг, который замечает проблему раньше пользователей, и небольшие доработки по ходу."
          ],
          opts: ["мониторинг доступности и ошибок", "исправление ошибок, обновления безопасности", "резервное копирование и проверка восстановления", "доработки и новые функции по плану", "аудит и документация систем от других подрядчиков"],
          ret: "Система работает, и есть команда, которая знает, как она устроена.",
          bugs: "Чужую систему без документации не правят: любая правка превращается в лотерею. Поэтому в таком случае сначала проводим аудит (support -a)."
        }
      }
    },
    de: {
      header: "Handbuch der ArtIntelliCo-Leistungen",
      sec: { name: "NAME", syn: "ÜBERSICHT", desc: "BESCHREIBUNG", opts: "OPTIONEN", ret: "RÜCKGABEWERT", bugs: "FEHLER", notes: "ANMERKUNGEN", see: "SIEHE AUCH", list: "SEITEN" },
      intro: {
        name: "Einführung in Abschnitt 8: Leistungen von ArtIntelliCo",
        desc: [
          "Jede Seite dieses Abschnitts beschreibt eine Leistung. Wir wählen die Technik passend zur Aufgabe, nicht die Aufgabe passend zur Technik.",
          "Manchmal ist die beste Antwort ein fertiger Dienst im Abonnement. Dann sagen wir Ihnen das, und es muss nichts entwickelt werden."
        ]
      },
      pages: {
        concept: {
          name: "Konzeption von IT-Lösungen",
          desc: [
            "Wir klären, was das System tatsächlich leisten muss, und halten es so fest, dass es sowohl die Fachseite als auch die Entwickler verstehen.",
            "Am Anfang stehen Gespräche. Nicht nur mit der Geschäftsführung, sondern auch mit Buchhaltung, Lager und Vertrieb, also mit den Menschen, die jeden Tag die Knöpfe drücken werden. Der Grund ist einfach: Der teuerste Fehler eines Projekts passiert vor der ersten Codezeile, wenn ein System für ein Problem gebaut wird, das niemand sauber definiert hat."
          ],
          opts: ["Interviews mit Mitarbeitern; Analyse, wie die Prozesse heute laufen", "fachliche Anforderungen und Anwendungsszenarien", "Vergleich fertiger Produkte mit einer Individualentwicklung", "ein Pflichtenheft mit Zeit- und Budgetschätzung je Phase"],
          ret: "Ein Dokument, anhand dessen jedes Team, unseres oder ein anderes, den Aufwand schätzen und mit der Arbeit beginnen kann.",
          bugs: "Manchmal raten wir, nichts zu entwickeln, sondern ein vorhandenes Produkt anzupassen. Dieses Verhalten ist beabsichtigt."
        },
        saas: {
          name: "SaaS-Entwicklung",
          desc: [
            "Wir konzipieren und bauen SaaS-Plattformen: von der ersten Version für Pilotkunden bis zum Dienst, in dem jeder Kunde seinen eigenen Arbeitsbereich, Tarif und Kundenbereich hat.",
            "Bei SaaS verdient man das Geld nicht mit dem Code, sondern damit, wie leicht sich ein neuer Kunde registriert, bezahlt und loslegt, ohne je beim Support anzurufen. Deshalb gehören Mandantenfähigkeit, Abrechnung und Berechtigungen vom ersten Tag an dazu: Sie nachzurüsten, wenn die Kunden schon im System sind, kostet ein Vielfaches."
          ],
          opts: ["mandantenfähige Architektur; Kundendaten strikt getrennt", "Registrierung, Tarife, Abonnements, Online-Zahlung", "Kundenbereiche, Rollen, Berechtigungen", "Integrationen und eine öffentliche API für Ihre Kunden", "Skalierung bei wachsender Last"],
          ret: "Ein Produkt, das Sie im Abonnement verkaufen. Kein Projekt, das jedes Mal von Hand eingeführt wird.",
          bugs: "Die erste Version erscheint früher, als Ihnen lieb ist. Mit Absicht: Echte Nutzer zeigen schnell, welche Funktionen nie gebraucht wurden."
        },
        web: {
          name: "Webentwicklung",
          desc: [
            "Wir entwickeln Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen. Passend zur Aufgabe, ohne Vorlagen.",
            "Eine Unternehmenswebsite misst man an Anfragen und Bestellungen; wie sie im Portfolio aussieht, ist zweitrangig. Vor dem Start legen wir fest, was als Ergebnis zählt, und die Webanalyse läuft schon vor dem Livegang, nicht erst ein halbes Jahr später. Die Technik richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Homepage-Baukasten."
          ],
          opts: ["Prototyp und Oberflächendesign", "Frontend, Backend, Administrationsbereich", "Anbindung an Zahlung, Versand, CRM und Buchhaltungssysteme", "SEO-Grundlagen, Ladezeit, Webanalyse", "Livegang und laufende Betreuung"],
          ret: "Ein Webdienst, an dem man sieht, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        mobile: {
          name: "Mobile Apps",
          desc: [
            "Wir entwickeln Apps für iOS und Android, samt Serverseite und Administrationsbereich dahinter.",
            "Eine App rechnet sich, wenn Nutzer zu ihr zurückkehren: für eine Nachbestellung, den Lieferstatus, Bonuspunkte. Ob nativ oder plattformübergreifend, entscheiden das Budget und die Frage, wie stark die App auf Kamera, Standort und Offline-Modus angewiesen ist."
          ],
          opts: ["Apps für iOS und Android", "Serverseite und API", "Administrationsbereich: Inhalte, Bestellungen, Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          ret: "Eine App, die die Prüfung der Stores besteht. Ihr Team betreibt sie ohne Entwickler.",
          bugs: "Wenn ein Kunde die App einmal im Jahr öffnen würde, brauchen Sie keine: Wir empfehlen dann eine gute mobile Website, das ist günstiger. Das sagen wir, bevor die Arbeit beginnt."
        },
        ai: {
          name: "KI-Lösungen",
          desc: [
            "Wir automatisieren Geschäftsprozesse mit KI-Agenten und anderen Lösungen auf Basis von künstlicher Intelligenz und maschinellem Lernen. Der Agent erledigt die Routineschritte eines Prozesses selbst, ein Mensch prüft das Ergebnis.",
            "Sprachmodelle lohnen sich dort, wo Mitarbeiter stundenlang E-Mails, Dokumente und Anfragen sortieren. Die Arbeit beginnt mit einem Pilotprojekt auf Ihren eigenen Daten: Die Zahlen zur Genauigkeit sehen Sie vor der eigentlichen Entwicklung, nicht danach."
          ],
          opts: ["KI-Agenten, die selbstständig Anfragen sortieren, das CRM befüllen und Antworten an Kunden vorbereiten", "Chatbots und Assistenten für Kunden und Mitarbeiter", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen, Suche in der Wissensdatenbank", "Bedarfsprognosen, Datenanalyse", "ein Pilotprojekt mit Qualitätsmessung auf Ihren Daten"],
          ret: "Ein Prozess, den bisher Menschen von Hand erledigt haben, läuft jetzt im System. Die Kontrolle bleibt beim Menschen.",
          bugs: "Wir sehen KI skeptischer als die meisten. Die Hälfte der Ideen nach dem Muster „Bauen wir doch ein neuronales Netz ein“ lässt sich mit gewöhnlicher Automatisierung lösen, und dann sagen wir das auch."
        },
        "crm-erp": {
          name: "CRM- und ERP-Entwicklung",
          desc: [
            "{crm-erp} baut CRM- und ERP-Systeme um Ihre Abläufe herum. Umgekehrt funktioniert es nicht.",
            "Ein CRM von der Stange genügt, solange Ihr Prozess dem Standard ähnelt. Sobald Ihr Vertrieb die Hälfte der Arbeit in Tabellen erledigt, weil das System „das nicht kann“, kommt eine eigene Lösung günstiger.",
            "Die Daten werden aus Altsystemen und Tabellen übernommen. Die Einführung erfolgt Abteilung für Abteilung, damit die Arbeit keinen Tag stillsteht."
          ],
          opts: ["Module für Vertrieb, Lager, Produktion, Finanzen; nur die, die Sie brauchen", "Rollen, Berechtigungen, Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie, E-Mail"],
          ret: "Ein System statt eines Tabellenzoos. Die Geschäftsführung sieht, wo das Unternehmen steht, ohne jede Woche Berichte aus allen Abteilungen einzusammeln."
        },
        cloud: {
          name: "Cloud-Lösungen",
          desc: [
            "Wir verlagern Ihre Infrastruktur ganz oder teilweise zu Amazon Web Services und sorgen dafür, dass sie läuft und die Rechnung nicht grundlos steigt.",
            "Ein Umzug beginnt mit einem Audit und einer Kostenschätzung. Migriert wird in Etappen, mit einem Rückfallplan für jeden Schritt."
          ],
          opts: ["Audit der bestehenden Infrastruktur, Kostenschätzung", "Architektur in AWS, Migrationsplan", "Umzug von Servern, Datenbanken, Dateien", "Datensicherung und Überwachung", "Kostenoptimierung nach dem Umzug"],
          ret: "Eine Infrastruktur, die den Ausfall eines Servers übersteht. Eine Cloud-Rechnung, die Sie verstehen.",
          bugs: "Die Cloud ist nicht immer günstiger als ein eigener Server. Sie lohnt sich, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn neue Umgebungen in Minuten statt in einer Woche bereitstehen müssen."
        },
        redhat: {
          name: "Unternehmensinfrastruktur auf Red Hat",
          desc: [
            "Wir bauen die IT-Infrastruktur Ihres Unternehmens auf Red Hat auf: Server mit Red Hat Enterprise Linux, die Container-Plattform OpenShift, Automatisierung mit Ansible.",
            "Red Hat ist die richtige Wahl, wenn eine Infrastruktur jahrelang laufen und Audits bestehen muss, statt im Kopf eines einzigen Administrators zu leben. Das Abonnement rechnet sich durch den Herstellersupport und einen langen Lebenszyklus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt.",
            "Die Infrastruktur wird auf Ihre Workloads zugeschnitten, die Serverkonfiguration in Ansible beschrieben. Jeder Server lässt sich nach Playbook neu aufbauen statt aus dem Gedächtnis."
          ],
          opts: ["Audit Ihrer bestehenden Server und ein Migrationsplan", "Einführung von Red Hat Enterprise Linux, zentrale Updates über Red Hat Satellite", "die Container-Plattform OpenShift für Ihre Anwendungen", "Automatisierung von Konfiguration und Deployment mit Ansible", "zentrale Verwaltung von Identitäten und Zugriffsrechten (Identity Management)", "Überwachung, Datensicherung, Dokumentation für Ihr Team"],
          ret: "Eine Infrastruktur, die sich prüfen, nachbauen und an ein anderes Team übergeben lässt, ohne dass Wissen verloren geht.",
          notes: "Red Hat ist unser Partner, deshalb helfen wir Ihnen auch bei Abonnements und Herstellersupport."
        },
        api: {
          name: "APIs und Integrationen",
          desc: [
            "Wir entwerfen APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
            "Am häufigsten begegnet uns dasselbe: Daten werden doppelt erfasst. Bestellungen von der Website werden von Hand ins Buchhaltungssystem abgetippt, Zahlungen in einer Tabelle abgeglichen. Eine Integration nimmt Ihnen diese Arbeit ab, und mit ihr die Fehler, die dabei entstehen."
          ],
          opts: ["API-Design und Dokumentation", "Anbindung an Zahlungsanbieter, Versanddienste, CRM, Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholungsversuche bei Fehlern", "Überwachung und Benachrichtigungen"],
          ret: "Daten werden einmal erfasst und gelangen von selbst dorthin, wo sie gebraucht werden.",
          bugs: "Integrationen brechen lautlos, wenn ein Partner seine API ändert. Deshalb ist -w immer aktiv: Den Ausfall soll das System melden, nicht ein Kunde."
        },
        support: {
          name: "Technischer Support",
          desc: [
            "Wir halten Ihre IT-Systeme am Laufen und entwickeln sie weiter, auch solche, die nicht von uns stammen.",
            "Fehlerbehebung ist nur ein Teil der Arbeit. Dazu kommen Updates, die Sicherheitslücken schließen, eine Überwachung, die Probleme vor den Nutzern bemerkt, und kleine Verbesserungen im laufenden Betrieb."
          ],
          opts: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung, Sicherheitsupdates", "Datensicherung und Wiederherstellungstests", "geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation von Systemen anderer Dienstleister"],
          ret: "Das System läuft, und es gibt ein Team, das weiß, wie es aufgebaut ist.",
          bugs: "Ein fremdes System ohne Dokumentation lässt sich nicht sicher ändern: Jeder Eingriff wird zum Glücksspiel. In diesem Fall beginnen wir mit einem Audit (support -a)."
        }
      }
    },
    fr: {
      header: "Manuel des services ArtIntelliCo",
      sec: { name: "NOM", syn: "SYNOPSIS", desc: "DESCRIPTION", opts: "OPTIONS", ret: "VALEUR RENVOYÉE", bugs: "BOGUES", notes: "NOTES", see: "VOIR AUSSI", list: "PAGES" },
      intro: {
        name: "introduction à la section 8 : services ArtIntelliCo",
        desc: [
          "Chaque page de cette section décrit un service. Nous choisissons les technologies en fonction du besoin, et non le besoin en fonction des technologies.",
          "Parfois, la meilleure réponse est un service existant sur abonnement. Nous vous le dirons alors, et il n'y aura rien à développer."
        ]
      },
      pages: {
        concept: {
          name: "conception de solutions informatiques",
          desc: [
            "Nous déterminons ce que le système doit réellement faire et nous le formalisons de manière que les métiers comme les développeurs le comprennent.",
            "Tout commence par des entretiens. Pas seulement avec la direction, mais aussi avec la comptabilité, l'entrepôt et les commerciaux, c'est-à-dire avec ceux qui appuieront sur les boutons tous les jours. La raison est simple : l'erreur la plus coûteuse d'un projet se commet avant la première ligne de code, quand on construit le système pour un problème que personne n'a vraiment défini."
          ],
          opts: ["entretiens avec le personnel ; analyse du fonctionnement actuel des processus", "exigences métier et scénarios d'utilisation", "comparaison entre produits du marché et développement sur mesure", "un cahier des charges avec délais et budget estimés par phase"],
          ret: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et le lancer.",
          bugs: "Il arrive que nous conseillions de ne rien développer et de paramétrer un produit existant. Ce comportement est voulu."
        },
        saas: {
          name: "développement SaaS",
          desc: [
            "Nous concevons et construisons des plateformes SaaS, de la première version pour des clients pilotes jusqu'au service où chaque client dispose de son espace, de sa formule et de son tableau de bord.",
            "Dans le SaaS, l'argent ne vient pas du code. Il vient de la facilité avec laquelle un nouveau client s'inscrit, paie et se lance sans jamais appeler le support. C'est pourquoi l'architecture multi-locataire, la facturation et les droits d'accès sont prévus dès le premier jour : les ajouter une fois les clients installés coûte plusieurs fois plus cher."
          ],
          opts: ["architecture multi-locataire ; données des clients isolées les unes des autres", "inscription, formules, abonnements, paiement en ligne", "espaces clients, rôles, droits d'accès", "intégrations et API publique pour vos clients", "montée en charge à mesure que l'activité grandit"],
          ret: "Un produit que vous vendez par abonnement. Pas un projet que l'on déploie à la main à chaque fois.",
          bugs: "La première version sort plus tôt que vous ne le voudriez. C'est voulu : les vrais utilisateurs montrent vite quelles fonctions étaient superflues."
        },
        web: {
          name: "développement web",
          desc: [
            "Nous réalisons des sites d'entreprise, des places de marché, des boutiques en ligne, des systèmes de réservation et des outils web internes. Sur mesure, sans modèle tout fait.",
            "Un site d'entreprise se mesure en demandes et en commandes ; son allure dans un portfolio passe loin derrière. Avant de commencer, nous convenons de ce qui comptera comme résultat, et la mesure d'audience fonctionne avant la mise en ligne, pas six mois plus tard. La technologie suit le besoin : une page d'atterrissage n'a que faire d'une plateforme lourde, et une place de marché n'entrera pas dans un constructeur de sites."
          ],
          opts: ["prototype et conception des interfaces", "frontend, backend, interface d'administration", "intégration avec le paiement, la livraison, le CRM et la comptabilité", "bases du SEO, vitesse de chargement, mesure d'audience", "mise en ligne et maintenance"],
          ret: "Un service web dont on voit combien de demandes et de chiffre d'affaires il rapporte."
        },
        mobile: {
          name: "applications mobiles",
          desc: [
            "Nous développons des applications iOS et Android, avec la partie serveur et l'interface d'administration qui les font tourner.",
            "Une application est rentable quand on y revient : une nouvelle commande, le suivi d'une livraison, des points de fidélité. Natif ou multiplateforme : tout dépend du budget et de la place qu'y tiennent l'appareil photo, la géolocalisation et le mode hors ligne."
          ],
          opts: ["applications iOS et Android", "partie serveur et API", "interface d'administration : contenus, commandes, utilisateurs", "notifications push et statistiques", "publication sur l'App Store et Google Play"],
          ret: "Une application qui passe la validation des stores. Votre équipe la gère sans faire appel à un développeur.",
          bugs: "Si un client ne l'ouvre qu'une fois par an, une application est inutile : nous conseillons plutôt un bon site mobile, moins cher. Nous le disons avant le début des travaux."
        },
        ai: {
          name: "solutions d'intelligence artificielle",
          desc: [
            "Nous automatisons les processus métier avec des agents IA et d'autres solutions fondées sur l'intelligence artificielle et l'apprentissage automatique. L'agent enchaîne lui-même les étapes routinières d'un processus ; une personne vérifie le résultat.",
            "Les modèles de langage sont vraiment utiles là où des employés passent des heures à trier e-mails, documents et demandes. Le travail commence par un pilote sur vos propres données : vous voyez les chiffres de précision avant le développement principal, pas après."
          ],
          opts: ["agents IA qui trient les demandes, remplissent le CRM et préparent les réponses aux clients en toute autonomie", "chatbots et assistants pour les clients et le personnel", "reconnaissance de documents et extraction de données", "classification des demandes, recherche dans la base de connaissances", "prévision de la demande, analyse de données", "un pilote avec mesure de la qualité sur vos données"],
          ret: "Un processus autrefois effectué à la main est désormais assuré par le système. Une personne garde le contrôle.",
          bugs: "Nous sommes plus sceptiques que beaucoup à l'égard de l'IA. La moitié des idées du type « ajoutons un réseau de neurones » se règlent par une automatisation ordinaire, et dans ce cas nous le disons."
        },
        "crm-erp": {
          name: "développement CRM et ERP",
          desc: [
            "{crm-erp} construit des systèmes CRM et ERP autour de vos processus. L'inverse ne fonctionne pas.",
            "Un CRM standard suffit tant que votre processus ressemble à la norme. Dès que les commerciaux font la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire », développer le vôtre revient moins cher.",
            "Les données sont reprises des anciens systèmes et des tableurs. Le déploiement se fait service par service, pour que le travail ne s'arrête pas un seul jour."
          ],
          opts: ["modules ventes, stock, production, finances ; seulement ceux dont vous avez besoin", "rôles, droits d'accès, journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "intégration avec la comptabilité, la téléphonie, la messagerie"],
          ret: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit où en sont les choses sans réclamer chaque semaine un rapport à chaque service."
        },
        cloud: {
          name: "solutions cloud",
          desc: [
            "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou en partie, et veillons à ce qu'elle tourne sans que la facture grimpe sans raison.",
            "Une migration commence par un audit et une estimation des coûts. Tout est transféré progressivement, avec un plan de retour arrière à chaque étape."
          ],
          opts: ["audit de l'infrastructure actuelle, estimation des coûts", "architecture AWS, plan de migration", "transfert des serveurs, bases de données, fichiers", "sauvegardes et supervision", "optimisation des coûts après la migration"],
          ret: "Une infrastructure qui survit à la panne d'un serveur. Une facture cloud que vous comprenez.",
          bugs: "Le cloud n'est pas toujours moins cher qu'un serveur à soi. Il devient rentable quand la charge connaît des pics, quand il faut de la tolérance aux pannes ou quand de nouveaux environnements doivent être prêts en quelques minutes plutôt qu'en une semaine."
        },
        redhat: {
          name: "infrastructure d'entreprise sous Red Hat",
          desc: [
            "Nous construisons l'infrastructure informatique de votre entreprise sur Red Hat : serveurs sous Red Hat Enterprise Linux, plateforme de conteneurs OpenShift, automatisation avec Ansible.",
            "On choisit Red Hat quand une infrastructure doit tourner des années et passer des audits, au lieu de reposer sur la mémoire d'un seul administrateur. L'abonnement se rentabilise grâce au support de l'éditeur et à un long cycle de vie : Red Hat Enterprise Linux est maintenu pendant dix ans.",
            "L'infrastructure est conçue pour vos charges de travail, et la configuration des serveurs est décrite dans Ansible. N'importe quel serveur se reconstruit à partir d'un playbook, et non de mémoire."
          ],
          opts: ["audit de vos serveurs actuels et plan de migration", "déploiement de Red Hat Enterprise Linux, mises à jour centralisées via Red Hat Satellite", "la plateforme de conteneurs OpenShift pour vos applications", "automatisation de la configuration et du déploiement avec Ansible", "gestion centralisée des identités et des accès (Identity Management)", "supervision, sauvegardes, documentation pour votre équipe"],
          ret: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe sans perdre le savoir accumulé.",
          notes: "Red Hat est notre partenaire : nous pouvons donc aussi vous aider à y voir clair dans les abonnements et le support de l'éditeur."
        },
        api: {
          name: "API et intégrations",
          desc: [
            "Nous concevons des API pour vos systèmes et les relions aux services que vous utilisez déjà.",
            "Le cas le plus fréquent est toujours le même : des données saisies deux fois. Les commandes du site ressaisies à la main dans la comptabilité, les paiements rapprochés dans un tableur. Une intégration supprime ce travail, et les erreurs qu'il engendre."
          ],
          opts: ["conception et documentation d'API", "intégration avec les prestataires de paiement, les transporteurs, le CRM, la comptabilité", "échange de données entre systèmes internes", "files d'attente et nouvelles tentatives en cas d'échec", "supervision et alertes"],
          ret: "Les données sont saisies une seule fois et arrivent d'elles-mêmes là où on en a besoin.",
          bugs: "Les intégrations cassent sans bruit quand un partenaire modifie son API. C'est pourquoi -w est toujours actif : c'est au système de signaler la panne, pas à un client."
        },
        support: {
          name: "support technique",
          desc: [
            "Nous maintenons vos systèmes informatiques en état de marche et les faisons évoluer, y compris ceux que nous n'avons pas développés.",
            "Corriger les bogues n'est qu'une partie du travail. Il y a aussi les mises à jour qui comblent les failles de sécurité, la supervision qui repère un problème avant les utilisateurs, et les petites améliorations au fil de l'eau."
          ],
          opts: ["surveillance de la disponibilité et des erreurs", "correction de bogues, mises à jour de sécurité", "sauvegardes et tests de restauration", "améliorations planifiées et nouvelles fonctions", "audit et documentation de systèmes livrés par d'autres prestataires"],
          ret: "Le système fonctionne, et une équipe sait comment il est construit.",
          bugs: "On ne modifie pas sans risque le système non documenté de quelqu'un d'autre : chaque changement devient un pari. Dans ce cas, nous commençons par un audit (support -a)."
        }
      }
    },
    es: {
      header: "Manual de servicios de ArtIntelliCo",
      sec: { name: "NOMBRE", syn: "SINOPSIS", desc: "DESCRIPCIÓN", opts: "OPCIONES", ret: "VALOR DEVUELTO", bugs: "ERRORES", notes: "NOTAS", see: "VÉASE TAMBIÉN", list: "PÁGINAS" },
      intro: {
        name: "introducción a la sección 8: servicios de ArtIntelliCo",
        desc: [
          "Cada página de esta sección describe un servicio. Elegimos la tecnología según el problema, no el problema según la tecnología.",
          "A veces la mejor respuesta es un servicio ya existente por suscripción. En ese caso se lo diremos, y no habrá que desarrollar nada."
        ]
      },
      pages: {
        concept: {
          name: "concepto de la solución de TI",
          desc: [
            "Averiguamos qué debe hacer realmente el sistema y lo ponemos por escrito para que lo entiendan tanto el negocio como los desarrolladores.",
            "Todo empieza con conversaciones. No solo con quien toma la decisión, sino también con contabilidad, el almacén y los comerciales, es decir, con quienes pulsarán los botones cada día. La razón es sencilla: el error más caro de un proyecto se comete antes de la primera línea de código, cuando el sistema se construye para un problema que nadie ha definido bien."
          ],
          opts: ["entrevistas con el personal; análisis de cómo funcionan hoy los procesos", "requisitos de negocio y escenarios de uso", "comparativa entre productos existentes y desarrollo a medida", "una especificación con plazos y presupuesto estimados por fases"],
          ret: "Un documento con el que cualquier equipo, el nuestro o cualquier otro, puede presupuestar el trabajo y ponerlo en marcha.",
          bugs: "A veces aconsejamos no desarrollar nada y configurar un producto existente. Es el comportamiento previsto."
        },
        saas: {
          name: "desarrollo SaaS",
          desc: [
            "Diseñamos y construimos plataformas SaaS: desde una primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, plan y panel.",
            "En SaaS el dinero no está en el código. Está en lo fácil que le resulta a un cliente nuevo registrarse, pagar y empezar a trabajar sin llamar nunca a soporte. Por eso la arquitectura multiinquilino, la facturación y los permisos se incorporan desde el primer día: añadirlos cuando los clientes ya están dentro cuesta varias veces más."
          ],
          opts: ["arquitectura multiinquilino; datos de cada cliente aislados", "registro, planes, suscripciones, pagos en línea", "paneles de cliente, roles, permisos", "integraciones y una API pública para sus clientes", "escalado a medida que crece la carga"],
          ret: "Un producto que se vende por suscripción. No un proyecto que alguien implanta a mano cada vez.",
          bugs: "La primera versión sale antes de lo que usted querría. A propósito: los usuarios reales enseguida muestran qué funciones sobraban."
        },
        web: {
          name: "desarrollo web",
          desc: [
            "Creamos webs corporativas, marketplaces, tiendas en línea, sistemas de reservas y herramientas web internas. A la medida del problema, sin plantillas.",
            "Una web de empresa se mide en solicitudes y pedidos; cómo luce en un portafolio queda muy en segundo plano. Antes de empezar acordamos qué contará como resultado, y la analítica funciona antes del lanzamiento, no seis meses después. La tecnología se elige según el problema: una landing page no necesita una plataforma pesada, y un marketplace no cabe en un creador de webs."
          ],
          opts: ["prototipo y diseño de interfaces", "frontend, backend, panel de administración", "integración con pagos, envíos, CRM y sistemas contables", "bases de SEO, velocidad de carga, analítica", "lanzamiento y mantenimiento"],
          ret: "Un servicio web en el que se ve cuántas solicitudes y cuántos ingresos aporta."
        },
        mobile: {
          name: "aplicaciones móviles",
          desc: [
            "Desarrollamos aplicaciones para iOS y Android junto con la parte de servidor y el panel de administración que hay detrás.",
            "Una aplicación se rentabiliza cuando la gente vuelve a ella: un pedido repetido, el estado de un envío, puntos de fidelidad. Nativa o multiplataforma: lo deciden el presupuesto y cuánto depende la aplicación de la cámara, la geolocalización y el modo sin conexión."
          ],
          opts: ["aplicaciones para iOS y Android", "parte de servidor y API", "panel de administración: contenidos, pedidos, usuarios", "notificaciones push y analítica", "publicación en App Store y Google Play"],
          ret: "Una aplicación que supera la revisión de las tiendas. Su equipo la gestiona sin llamar a un desarrollador.",
          bugs: "Si un cliente solo la abriría una vez al año, no necesita una aplicación: le recomendamos una buena web móvil, que sale más barata. Lo decimos antes de empezar."
        },
        ai: {
          name: "soluciones con inteligencia artificial",
          desc: [
            "Automatizamos procesos de negocio con agentes de IA y otras soluciones basadas en inteligencia artificial y aprendizaje automático. El agente recorre por sí mismo los pasos rutinarios del proceso y una persona revisa el resultado.",
            "Los modelos de lenguaje resultan realmente útiles donde la plantilla pasa horas clasificando correos, documentos y solicitudes. El trabajo empieza con un piloto sobre sus propios datos: usted ve las cifras de precisión antes del desarrollo principal, no después."
          ],
          opts: ["agentes de IA que por sí solos clasifican solicitudes, rellenan el CRM y preparan respuestas a los clientes", "chatbots y asistentes para clientes y empleados", "reconocimiento de documentos y extracción de datos", "clasificación de solicitudes, búsqueda en la base de conocimiento", "previsión de la demanda, análisis de datos", "un piloto con medición de calidad sobre sus datos"],
          ret: "Un proceso que antes hacían personas a mano ahora lo hace el sistema. El control sigue en manos de una persona.",
          bugs: "Somos más escépticos con la IA que la mayoría. La mitad de las ideas del tipo «añadamos una red neuronal» se resuelven con automatización corriente, y en ese caso lo decimos."
        },
        "crm-erp": {
          name: "desarrollo de CRM y ERP",
          desc: [
            "{crm-erp} construye sistemas CRM y ERP en torno a sus procesos. Al revés no funciona.",
            "Un CRM estándar basta mientras su proceso se parezca al estándar. Cuando los comerciales llevan la mitad del trabajo en hojas de cálculo porque el sistema «no sabe hacerlo», uno propio sale más barato.",
            "Los datos se migran desde los sistemas antiguos y las hojas de cálculo. La implantación se hace departamento por departamento, para que el trabajo no se detenga ni un día."
          ],
          opts: ["módulos de ventas, almacén, producción y finanzas; solo los que necesite", "roles, permisos, registro de actividad", "informes y cuadros de mando para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "integración con contabilidad, telefonía y correo"],
          ret: "Un solo sistema en lugar de un zoológico de hojas de cálculo. La dirección ve cómo van las cosas sin reunir cada semana informes de todos los departamentos."
        },
        cloud: {
          name: "soluciones en la nube",
          desc: [
            "Trasladamos su infraestructura a Amazon Web Services, completa o por partes, y nos aseguramos de que funcione sin que la factura suba sin motivo.",
            "La mudanza empieza con una auditoría y un cálculo de costes. Todo se migra por fases, con un plan de vuelta atrás en cada paso."
          ],
          opts: ["auditoría de la infraestructura actual, cálculo de costes", "arquitectura en AWS, plan de migración", "traslado de servidores, bases de datos y archivos", "copias de seguridad y monitorización", "optimización de costes tras la mudanza"],
          ret: "Una infraestructura que sobrevive a la caída de un servidor. Una factura de la nube que se entiende.",
          bugs: "La nube no siempre es más barata que un servidor propio. Compensa cuando la carga tiene picos, cuando se necesita tolerancia a fallos o cuando los nuevos entornos deben estar listos en minutos y no en una semana."
        },
        redhat: {
          name: "infraestructura empresarial con Red Hat",
          desc: [
            "Construimos la infraestructura de TI de su empresa sobre Red Hat: servidores con Red Hat Enterprise Linux, la plataforma de contenedores OpenShift y automatización con Ansible.",
            "Red Hat es la opción cuando la infraestructura tiene que funcionar durante años y superar auditorías, en lugar de depender de la memoria de un solo administrador. La suscripción se amortiza gracias al soporte del fabricante y a un ciclo de vida largo: Red Hat Enterprise Linux tiene soporte durante diez años.",
            "La infraestructura se diseña según sus cargas de trabajo, y la configuración de los servidores se describe en Ansible. Cualquier servidor se reconstruye a partir de un playbook, no de memoria."
          ],
          opts: ["auditoría de sus servidores actuales y plan de migración", "implantación de Red Hat Enterprise Linux, actualizaciones centralizadas con Red Hat Satellite", "la plataforma de contenedores OpenShift para sus aplicaciones", "automatización de la configuración y el despliegue con Ansible", "gestión centralizada de identidades y accesos (Identity Management)", "monitorización, copias de seguridad y documentación para su equipo"],
          ret: "Una infraestructura que se puede auditar, reproducir y traspasar a otro equipo sin perder conocimiento.",
          notes: "Red Hat es socio nuestro, así que también podemos ayudarle a aclararse con las suscripciones y el soporte del fabricante."
        },
        api: {
          name: "API e integraciones",
          desc: [
            "Diseñamos API para sus sistemas y las conectamos con los servicios que ya utiliza.",
            "Lo que más vemos es siempre lo mismo: datos que se introducen dos veces. Pedidos de la web que se vuelven a teclear a mano en el sistema contable, pagos que se cuadran en una hoja de cálculo. Una integración elimina ese trabajo y los errores que genera."
          ],
          opts: ["diseño y documentación de API", "integración con pasarelas de pago, empresas de mensajería, CRM y contabilidad", "intercambio de datos entre sistemas internos", "colas y reintentos ante fallos", "monitorización y alertas"],
          ret: "Los datos se introducen una sola vez y llegan solos a donde hacen falta.",
          bugs: "Las integraciones se rompen sin hacer ruido cuando un socio cambia su API. Por eso -w está siempre activado: la avería debe comunicarla el sistema, no un cliente."
        },
        support: {
          name: "soporte técnico",
          desc: [
            "Mantenemos sus sistemas de TI en marcha y los seguimos desarrollando, incluidos los que no hemos creado nosotros.",
            "Corregir errores es solo una parte del trabajo. También están las actualizaciones que cierran agujeros de seguridad, la monitorización que detecta un problema antes que los usuarios y las pequeñas mejoras sobre la marcha."
          ],
          opts: ["monitorización de disponibilidad y errores", "corrección de errores, actualizaciones de seguridad", "copias de seguridad y pruebas de restauración", "mejoras planificadas y nuevas funciones", "auditoría y documentación de sistemas de otros proveedores"],
          ret: "El sistema funciona y hay un equipo que sabe cómo está construido.",
          bugs: "Un sistema ajeno sin documentación no se puede tocar con seguridad: cada cambio es una lotería. En ese caso empezamos por una auditoría (support -a)."
        }
      }
    },
    pt: {
      header: "Manual de serviços da ArtIntelliCo",
      sec: { name: "NOME", syn: "SINOPSE", desc: "DESCRIÇÃO", opts: "OPÇÕES", ret: "VALOR DE RETORNO", bugs: "ERROS", notes: "NOTAS", see: "VER TAMBÉM", list: "PÁGINAS" },
      intro: {
        name: "introdução à secção 8: serviços da ArtIntelliCo",
        desc: [
          "Cada página desta secção descreve um serviço. Escolhemos a tecnologia em função do problema, e não o problema em função da tecnologia.",
          "Por vezes, a melhor resposta é um serviço já existente por subscrição. Nesse caso dizemo-lo, e não é preciso desenvolver nada."
        ]
      },
      pages: {
        concept: {
          name: "conceção de soluções de TI",
          desc: [
            "Apuramos o que o sistema tem realmente de fazer e pomo-lo por escrito de forma que tanto o negócio como os programadores o entendam.",
            "Tudo começa com conversas. Não só com quem decide, mas também com a contabilidade, o armazém e os comerciais, ou seja, com quem vai carregar nos botões todos os dias. A razão é simples: o erro mais caro de um projeto comete-se antes da primeira linha de código, quando o sistema é construído para um problema que ninguém definiu bem."
          ],
          opts: ["entrevistas com os colaboradores; análise de como os processos funcionam hoje", "requisitos de negócio e cenários de utilização", "comparação entre produtos existentes e desenvolvimento à medida", "um caderno de encargos com prazos e orçamento estimados por fase"],
          ret: "Um documento a partir do qual qualquer equipa, a nossa ou outra, pode orçamentar o trabalho e começá-lo.",
          bugs: "Por vezes aconselhamos a não desenvolver nada e a configurar um produto existente. Este comportamento é intencional."
        },
        saas: {
          name: "desenvolvimento SaaS",
          desc: [
            "Concebemos e construímos plataformas SaaS: desde uma primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu próprio espaço, plano e área de cliente.",
            "No SaaS, o dinheiro não está no código. Está na facilidade com que um novo cliente se regista, paga e começa a trabalhar sem nunca ligar para o suporte. Por isso a arquitetura multi-inquilino, a faturação e as permissões entram desde o primeiro dia: acrescentá-las quando os clientes já lá estão custa várias vezes mais."
          ],
          opts: ["arquitetura multi-inquilino; dados de cada cliente isolados", "registo, planos, subscrições, pagamentos online", "áreas de cliente, perfis, permissões", "integrações e uma API pública para os seus clientes", "escalabilidade à medida que a carga cresce"],
          ret: "Um produto que se vende por subscrição. Não um projeto que alguém implementa à mão de cada vez.",
          bugs: "A primeira versão sai mais cedo do que gostaria. De propósito: os utilizadores reais mostram depressa que funções nunca fizeram falta."
        },
        web: {
          name: "desenvolvimento web",
          desc: [
            "Criamos sites institucionais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas. À medida do problema, sem modelos prontos.",
            "Um site empresarial mede-se em pedidos de contacto e encomendas; o aspeto no portefólio fica muito para trás. Antes de começar, combinamos o que conta como resultado, e a análise de tráfego fica ativa antes do lançamento, não seis meses depois. A tecnologia segue o problema: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites."
          ],
          opts: ["protótipo e design de interfaces", "frontend, backend, painel de administração", "integração com pagamentos, entregas, CRM e sistemas de contabilidade", "bases de SEO, velocidade de carregamento, análise de tráfego", "lançamento e acompanhamento"],
          ret: "Um serviço web em que se vê quantos pedidos e quanta receita traz."
        },
        mobile: {
          name: "aplicações móveis",
          desc: [
            "Desenvolvemos aplicações para iOS e Android, juntamente com a parte de servidor e o painel de administração por trás delas.",
            "Uma aplicação compensa quando as pessoas voltam a ela: uma nova encomenda, o estado de uma entrega, pontos de fidelização. Nativa ou multiplataforma: decidem o orçamento e o quanto a aplicação depende da câmara, da localização e do modo offline."
          ],
          opts: ["aplicações para iOS e Android", "parte de servidor e API", "painel de administração: conteúdos, encomendas, utilizadores", "notificações push e análise", "publicação na App Store e no Google Play"],
          ret: "Uma aplicação que passa a revisão das lojas. A sua equipa gere-a sem chamar um programador.",
          bugs: "Se um cliente só a abrir uma vez por ano, não precisa de uma aplicação: recomendamos um bom site para telemóvel, que fica mais barato. Dizemo-lo antes de o trabalho começar."
        },
        ai: {
          name: "soluções com inteligência artificial",
          desc: [
            "Automatizamos processos de negócio com agentes de IA e outras soluções baseadas em inteligência artificial e aprendizagem automática. O agente percorre sozinho os passos rotineiros do processo; uma pessoa verifica o resultado.",
            "Os modelos de linguagem são realmente úteis onde os colaboradores passam horas a triar e-mails, documentos e pedidos. O trabalho começa com um piloto sobre os seus próprios dados: vê os números de precisão antes do desenvolvimento principal, e não depois."
          ],
          opts: ["agentes de IA que, sozinhos, triam pedidos, preenchem o CRM e preparam respostas aos clientes", "chatbots e assistentes para clientes e colaboradores", "reconhecimento de documentos e extração de dados", "classificação de pedidos, pesquisa na base de conhecimento", "previsão da procura, análise de dados", "um piloto com medição da qualidade sobre os seus dados"],
          ret: "Um processo que antes era feito à mão por pessoas passa a ser feito pelo sistema. O controlo continua nas mãos de uma pessoa.",
          bugs: "Somos mais céticos em relação à IA do que a maioria. Metade das ideias do género «vamos acrescentar uma rede neuronal» resolve-se com automatização comum, e nesse caso dizemo-lo."
        },
        "crm-erp": {
          name: "desenvolvimento de CRM e ERP",
          desc: [
            "{crm-erp} constrói sistemas CRM e ERP à volta dos seus processos. Ao contrário não funciona.",
            "Um CRM pronto a usar chega enquanto o seu processo se parecer com o padrão. Quando os comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não sabe fazer isso», ter um próprio sai mais barato.",
            "Os dados são migrados dos sistemas antigos e das folhas de cálculo. A implementação avança departamento a departamento, para que o trabalho não pare um único dia."
          ],
          opts: ["módulos de vendas, armazém, produção, finanças; só os necessários", "perfis, permissões, registo de atividade", "relatórios e painéis para a gestão", "migração de dados de folhas de cálculo e sistemas antigos", "integração com contabilidade, telefonia, e-mail"],
          ret: "Um único sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê como estão as coisas sem recolher todas as semanas relatórios de cada departamento."
        },
        cloud: {
          name: "soluções na cloud",
          desc: [
            "Migramos a sua infraestrutura para a Amazon Web Services, total ou parcialmente, e garantimos que funciona sem que a fatura suba sem razão.",
            "A mudança começa com uma auditoria e uma estimativa de custos. Tudo é migrado por fases, com um plano de reversão em cada passo."
          ],
          opts: ["auditoria da infraestrutura atual, estimativa de custos", "arquitetura na AWS, plano de migração", "migração de servidores, bases de dados, ficheiros", "cópias de segurança e monitorização", "otimização de custos após a mudança"],
          ret: "Uma infraestrutura que sobrevive à falha de um servidor. Uma fatura da cloud que se percebe.",
          bugs: "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga tem picos, quando é precisa tolerância a falhas ou quando novos ambientes têm de estar prontos em minutos e não numa semana."
        },
        redhat: {
          name: "infraestrutura empresarial em Red Hat",
          desc: [
            "Construímos a infraestrutura de TI da sua empresa em Red Hat: servidores com Red Hat Enterprise Linux, a plataforma de contentores OpenShift e automatização com Ansible.",
            "Red Hat é a escolha certa quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de depender da memória de um único administrador. A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos.",
            "A infraestrutura é desenhada para as suas cargas de trabalho, e a configuração dos servidores é descrita em Ansible. Qualquer servidor se reconstrói a partir de um playbook, e não de memória."
          ],
          opts: ["auditoria dos seus servidores atuais e plano de migração", "implementação do Red Hat Enterprise Linux, atualizações centralizadas com o Red Hat Satellite", "a plataforma de contentores OpenShift para as suas aplicações", "automatização da configuração e da implementação com Ansible", "gestão centralizada de identidades e acessos (Identity Management)", "monitorização, cópias de segurança, documentação para a sua equipa"],
          ret: "Uma infraestrutura que se pode auditar, reproduzir e passar a outra equipa sem perder conhecimento.",
          notes: "A Red Hat é nossa parceira, por isso também ajudamos a esclarecer as subscrições e o suporte do fabricante."
        },
        api: {
          name: "APIs e integrações",
          desc: [
            "Concebemos APIs para os seus sistemas e ligamo-las aos serviços que já utiliza.",
            "O que mais encontramos é sempre o mesmo: dados introduzidos duas vezes. Encomendas do site copiadas à mão para o sistema de contabilidade, pagamentos conferidos numa folha de cálculo. Uma integração elimina esse trabalho e os erros que ele gera."
          ],
          opts: ["conceção e documentação de APIs", "integração com prestadores de pagamento, transportadoras, CRM, contabilidade", "troca de dados entre sistemas internos", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          ret: "Os dados são introduzidos uma vez e chegam sozinhos aonde são precisos.",
          bugs: "As integrações avariam em silêncio quando um parceiro altera a sua API. Por isso o -w está sempre ligado: quem deve comunicar a avaria é o sistema, não um cliente."
        },
        support: {
          name: "suporte técnico",
          desc: [
            "Mantemos os seus sistemas de TI a funcionar e continuamos a desenvolvê-los, incluindo os que não foram feitos por nós.",
            "Corrigir erros é só uma parte do trabalho. Há também as atualizações que fecham falhas de segurança, a monitorização que deteta um problema antes dos utilizadores e as pequenas melhorias pelo caminho."
          ],
          opts: ["monitorização da disponibilidade e de erros", "correção de erros, atualizações de segurança", "cópias de segurança e testes de reposição", "melhorias planeadas e novas funcionalidades", "auditoria e documentação de sistemas de outros fornecedores"],
          ret: "O sistema funciona, e há uma equipa que sabe como está construído.",
          bugs: "Um sistema alheio sem documentação não se altera com segurança: cada alteração torna-se uma lotaria. Nesse caso começamos por uma auditoria (support -a)."
        }
      }
    },
    it: {
      header: "Manuale dei servizi ArtIntelliCo",
      sec: { name: "NOME", syn: "SINTASSI", desc: "DESCRIZIONE", opts: "OPZIONI", ret: "VALORE RESTITUITO", bugs: "BUG", notes: "NOTE", see: "VEDERE ANCHE", list: "PAGINE" },
      intro: {
        name: "introduzione alla sezione 8: servizi ArtIntelliCo",
        desc: [
          "Ogni pagina di questa sezione descrive un servizio. Scegliamo la tecnologia in base al problema, non il problema in base alla tecnologia.",
          "A volte la risposta migliore è un servizio già pronto in abbonamento. In quel caso glielo diciamo, e non c'è nulla da sviluppare."
        ]
      },
      pages: {
        concept: {
          name: "ideazione della soluzione IT",
          desc: [
            "Chiariamo che cosa deve fare davvero il sistema e lo mettiamo per iscritto in modo che lo capiscano sia l'azienda sia gli sviluppatori.",
            "Tutto comincia dai colloqui. Non solo con chi decide, ma anche con l'amministrazione, il magazzino e i commerciali, cioè con chi premerà i pulsanti ogni giorno. Il motivo è semplice: l'errore più costoso di un progetto si commette prima ancora di scrivere una riga di codice, quando il sistema viene costruito per un problema che nessuno ha definito bene."
          ],
          opts: ["colloqui con il personale; analisi di come funzionano oggi i processi", "requisiti di business e scenari d'uso", "confronto tra prodotti pronti e sviluppo su misura", "un capitolato con tempi e budget stimati per fase"],
          ret: "Un documento in base al quale qualsiasi team, il nostro o un altro, può stimare il lavoro e avviarlo.",
          bugs: "A volte consigliamo di non sviluppare nulla e di configurare un prodotto esistente. È il comportamento previsto."
        },
        saas: {
          name: "sviluppo SaaS",
          desc: [
            "Progettiamo e realizziamo piattaforme SaaS: dalla prima versione per i clienti pilota a un servizio in cui ogni cliente ha il proprio spazio, piano e area riservata.",
            "Nel SaaS i soldi non li fa il codice. Li fa la facilità con cui un nuovo cliente si registra, paga e comincia a lavorare senza mai chiamare l'assistenza. Per questo multi-tenancy, fatturazione e permessi si prevedono dal primo giorno: aggiungerli quando i clienti sono già dentro costa molte volte di più."
          ],
          opts: ["architettura multi-tenant; dati dei clienti isolati tra loro", "registrazione, piani, abbonamenti, pagamenti online", "aree riservate, ruoli, permessi", "integrazioni e un'API pubblica per i Suoi clienti", "scalabilità al crescere del carico"],
          ret: "Un prodotto che si vende in abbonamento. Non un progetto che qualcuno installa a mano ogni volta.",
          bugs: "La prima versione esce prima di quanto vorrebbe. Di proposito: gli utenti reali mostrano presto quali funzioni non servivano."
        },
        web: {
          name: "sviluppo web",
          desc: [
            "Realizziamo siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni. Su misura, senza modelli.",
            "Un sito aziendale si misura in richieste e ordini; come appare in un portfolio viene molto dopo. Prima di iniziare concordiamo che cosa conta come risultato, e gli strumenti di analisi sono attivi prima del lancio, non sei mesi dopo. La tecnologia segue il problema: a una landing page non serve una piattaforma pesante, e un marketplace non entra in un costruttore di siti."
          ],
          opts: ["prototipo e design delle interfacce", "frontend, backend, pannello di amministrazione", "integrazione con pagamenti, spedizioni, CRM e sistemi contabili", "basi SEO, velocità di caricamento, analisi", "lancio e assistenza continuativa"],
          ret: "Un servizio web da cui si vede quante richieste e quanto fatturato porta."
        },
        mobile: {
          name: "app mobili",
          desc: [
            "Sviluppiamo app per iOS e Android insieme alla parte server e al pannello di amministrazione che le sostengono.",
            "Un'app si ripaga quando le persone ci tornano: un nuovo ordine, lo stato di una consegna, i punti fedeltà. Nativa o multipiattaforma: lo decidono il budget e quanto l'app dipende da fotocamera, geolocalizzazione e modalità offline."
          ],
          opts: ["app per iOS e Android", "parte server e API", "pannello di amministrazione: contenuti, ordini, utenti", "notifiche push e analisi", "pubblicazione su App Store e Google Play"],
          ret: "Un'app che supera la revisione degli store. Il Suo team la gestisce senza chiamare uno sviluppatore.",
          bugs: "Se un cliente la apre una volta l'anno, un'app non serve: consigliamo piuttosto un buon sito mobile, che costa meno. Lo diciamo prima di iniziare i lavori."
        },
        ai: {
          name: "soluzioni di intelligenza artificiale",
          desc: [
            "Automatizziamo i processi aziendali con agenti IA e altre soluzioni basate su intelligenza artificiale e apprendimento automatico. L'agente svolge da solo i passaggi di routine del processo; una persona verifica il risultato.",
            "I modelli linguistici sono davvero utili dove i dipendenti passano ore a smistare e-mail, documenti e richieste. Il lavoro parte da un progetto pilota sui Suoi dati: i numeri sull'accuratezza li vede prima dello sviluppo vero e proprio, non dopo."
          ],
          opts: ["agenti IA che in autonomia smistano le richieste, compilano il CRM e preparano le risposte ai clienti", "chatbot e assistenti per clienti e dipendenti", "riconoscimento di documenti ed estrazione di dati", "classificazione delle richieste, ricerca nella knowledge base", "previsioni della domanda, analisi dei dati", "un progetto pilota con misura della qualità sui Suoi dati"],
          ret: "Un processo che prima svolgevano le persone a mano ora lo svolge il sistema. Il controllo resta a una persona.",
          bugs: "Sull'IA siamo più scettici di molti. Metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con la normale automazione, e in quel caso lo diciamo."
        },
        "crm-erp": {
          name: "sviluppo CRM ed ERP",
          desc: [
            "{crm-erp} costruisce sistemi CRM ed ERP attorno ai Suoi processi. Al contrario non funziona.",
            "Un CRM standard basta finché il Suo processo somiglia a quello standard. Quando i commerciali gestiscono metà del lavoro in fogli di calcolo perché il sistema «non lo sa fare», uno su misura costa meno.",
            "I dati vengono migrati dai vecchi sistemi e dai fogli di calcolo. L'avvio procede reparto per reparto, così il lavoro non si ferma neanche un giorno."
          ],
          opts: ["moduli vendite, magazzino, produzione, finanza; solo quelli che servono", "ruoli, permessi, registro delle attività", "report e dashboard per la direzione", "migrazione dei dati da fogli di calcolo e vecchi sistemi", "integrazione con contabilità, telefonia, posta elettronica"],
          ret: "Un solo sistema invece di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza raccogliere ogni settimana i report di ogni reparto."
        },
        cloud: {
          name: "soluzioni cloud",
          desc: [
            "Trasferiamo la Sua infrastruttura su Amazon Web Services, in tutto o in parte, e facciamo in modo che funzioni senza che la fattura cresca senza motivo.",
            "Il trasloco inizia con un audit e una stima dei costi. Tutto viene migrato per fasi, con un piano di rollback a ogni passo."
          ],
          opts: ["audit dell'infrastruttura attuale, stima dei costi", "architettura su AWS, piano di migrazione", "trasferimento di server, database, file", "backup e monitoraggio", "ottimizzazione dei costi dopo il trasloco"],
          ret: "Un'infrastruttura che sopravvive al guasto di un server. Una fattura del cloud comprensibile.",
          bugs: "Il cloud non è sempre più economico di un server proprio. Conviene quando il carico ha picchi, quando serve tolleranza ai guasti o quando i nuovi ambienti devono essere pronti in pochi minuti anziché in una settimana."
        },
        redhat: {
          name: "infrastruttura aziendale su Red Hat",
          desc: [
            "Costruiamo l'infrastruttura IT della Sua azienda su Red Hat: server con Red Hat Enterprise Linux, la piattaforma di container OpenShift, automazione con Ansible.",
            "Si sceglie Red Hat quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di reggersi sulla memoria di un unico amministratore. L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni.",
            "L'infrastruttura viene progettata sui Suoi carichi di lavoro e la configurazione dei server è descritta in Ansible. Qualsiasi server si ricostruisce da un playbook, non a memoria."
          ],
          opts: ["audit dei server attuali e piano di migrazione", "adozione di Red Hat Enterprise Linux, aggiornamenti centralizzati tramite Red Hat Satellite", "la piattaforma di container OpenShift per le Sue applicazioni", "automazione di configurazione e deployment con Ansible", "gestione centralizzata di identità e accessi (Identity Management)", "monitoraggio, backup, documentazione per il Suo team"],
          ret: "Un'infrastruttura che si può verificare, riprodurre e consegnare a un altro team senza perdere conoscenze.",
          notes: "Red Hat è nostro partner, quindi possiamo aiutarLa anche a orientarsi tra abbonamenti e supporto del produttore."
        },
        api: {
          name: "API e integrazioni",
          desc: [
            "Progettiamo API per i Suoi sistemi e le colleghiamo ai servizi che già utilizza.",
            "Il caso più frequente è sempre lo stesso: dati inseriti due volte. Ordini del sito ricopiati a mano nel gestionale contabile, pagamenti riconciliati in un foglio di calcolo. Un'integrazione elimina questo lavoro e gli errori che produce."
          ],
          opts: ["progettazione e documentazione delle API", "integrazione con circuiti di pagamento, corrieri, CRM, contabilità", "scambio di dati tra sistemi interni", "code e nuovi tentativi in caso di errore", "monitoraggio e notifiche"],
          ret: "I dati si inseriscono una volta sola e arrivano da soli dove servono.",
          bugs: "Le integrazioni si rompono in silenzio quando un partner cambia la propria API. Per questo -w è sempre attivo: il guasto deve segnalarlo il sistema, non un cliente."
        },
        support: {
          name: "supporto tecnico",
          desc: [
            "Manteniamo in funzione i Suoi sistemi IT e continuiamo a svilupparli, compresi quelli che non abbiamo scritto noi.",
            "Correggere i bug è solo una parte del lavoro. Ci sono anche gli aggiornamenti che chiudono le falle di sicurezza, il monitoraggio che si accorge di un problema prima degli utenti e i piccoli miglioramenti strada facendo."
          ],
          opts: ["monitoraggio di disponibilità ed errori", "correzione di bug, aggiornamenti di sicurezza", "backup e prove di ripristino", "miglioramenti pianificati e nuove funzioni", "audit e documentazione di sistemi di altri fornitori"],
          ret: "Il sistema funziona, e c'è un team che sa com'è fatto.",
          bugs: "Un sistema altrui senza documentazione non si modifica in sicurezza: ogni intervento diventa una lotteria. In quel caso partiamo da un audit (support -a)."
        }
      }
    }
  };

  const PHOSPHORS = ["white", "green", "amber"];
  const LANGS = window.AIC && Array.isArray(AIC.langs) ? AIC.langs.filter((l) => I18N[l] && UX[l] && MAN[l]) : Object.keys(I18N);
  const SERVICE_FILES = ["concept", "saas", "web", "mobile", "ai", "crm-erp", "cloud", "redhat", "api", "support"];
  const BIN = ["cat", "clear", "date", "echo", "finger", "hostname", "ls", "mail", "man", "more", "pwd", "uname", "who", "whoami"];
  const BUILTINS = ["cd", "history", "logout", "exit", "help", "lang", "phosphor", "setenv", "printenv", "dos", "nc", "apple", "lisa", "linux", "startx", "mc", "win", "ai"];
  const DENIED = ["rm", "mv", "cp", "mkdir", "rmdir", "touch", "chmod", "chown", "ln", "vi", "ed", "emacs"];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;

  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || document.documentElement.lang || nav.split("-")[0];
  if (!LANGS.includes(lang)) lang = LANGS.includes(nav.split("-")[0]) ? nav.split("-")[0] : "uk";
  let phosphor = store.get("aic-phosphor");
  if (!PHOSPHORS.includes(phosphor)) phosphor = "white";
  let cwd = HOME;

  const t = () => I18N[lang];
  const u = () => UX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const tok = (label, cmd = label) => `<button type="button" class="tok" data-cmd="${esc(cmd)}">${esc(label)}</button>`;

  const NAV_CMDS = ["cat ~/README", "cd ~/services; ls", "cat ~/partners", "mail", "help"];
  /* Навігація в кінці README: інші версії сайту (посилання) і розділи (команди) */
  const NAV = {
    uk: { versions: "Інші версії сайту:", sections: "Розділи сайту:", items: ["Про компанію", "Послуги", "Партнери", "Контакти", "Довідка"] },
    en: { versions: "Other versions of the site:", sections: "Site sections:", items: ["About", "Services", "Partners", "Contacts", "Help"] },
    ru: { versions: "Другие версии сайта:", sections: "Разделы сайта:", items: ["О компании", "Услуги", "Партнёры", "Контакты", "Помощь"] },
    de: { versions: "Andere Versionen der Website:", sections: "Bereiche der Website:", items: ["Über uns", "Leistungen", "Partner", "Kontakt", "Hilfe"] },
    fr: { versions: "Autres versions du site :", sections: "Rubriques du site :", items: ["À propos", "Services", "Partenaires", "Contacts", "Aide"] },
    es: { versions: "Otras versiones del sitio:", sections: "Secciones del sitio:", items: ["Sobre nosotros", "Servicios", "Socios", "Contacto", "Ayuda"] },
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
  const colon = () => (lang === "fr" ? "\u00a0:" : ":");
  const heading = (s) => `<span class="b u">${esc(s)}</span>`;
  const bytes = (s) => new TextEncoder().encode(s).length;

  /* ---------- Дати в стилі UNIX ---------- */
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const two = (n) => String(n).padStart(2, "0");
  const hms = (d) => `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}`;
  const unixDate = (d) => `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} ${hms(d)} ${d.getFullYear()}`;
  const lsDate = () => { const d = new Date(); return `${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00`; };
  const today9 = () => { const d = new Date(); d.setHours(9, 0, 0, 0); return d; };

  /* ---------- Банер: логотип символами #, як у banner(6) ---------- */
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
    return [0, 1, 2, 3, 4].map((r) => [..."ARTINTELLICO"].map((ch) => G[ch][r]).join(" ")).join("\n");
  };

  /* ---------- Файлова система ---------- */
  const file = (lines, text, extra = {}) => ({ type: "file", lines, text, owner: "aic", mode: "-r--r--r--", ...extra });
  const dir = (kids, extra = {}) => ({ type: "dir", kids, owner: "aic", mode: "dr-xr-xr-x", ...extra });

  const contactLines = () => {
    const s = t();
    return [heading(s.contactTitle), "", esc(s.contactText), "", esc(s.emailLabel) + colon() + " " + `<a href="mailto:${EMAIL}">${EMAIL}</a>`];
  };
  const contactText = () => [t().contactTitle, t().contactText, EMAIL].join("\n");

  const readme = file(
    () => {
      const s = t();
      return [
        `<div class="logo" aria-label="ArtIntelliCo">${esc(logo())}</div>`,
        "",
        heading(s.heroTitle),
        "",
        esc(s.heroText),
        "",
        esc(s.heroLead) + colon(),
        ...s.phrases.map((p) => "    - " + esc(p)),
        "",
        `<span class="d">${esc(s.copyright)}</span>`,
        `<span class="d">${esc(s.legal)}</span>`,
        `<span class="d">${esc(s.slogan)}</span>`,
        `<span class="d">${esc(s.source)}${colon()}</span> <a href="${location.origin}${AIC.url("classic", lang)}" target="_blank" rel="noopener">artintellico.com</a>`,
        ...navLines()
      ];
    },
    () => { const s = t(); return [s.heroTitle, s.heroText, s.heroLead, ...s.phrases].join("\n"); }
  );

  /* ---------- Сторінки man для послуг (розділ 8) ---------- */
  const mp = (html, extra = "") => `<span class="mp${extra}">${html}</span>`;
  const fmt = (s) => esc(s).replace(/\{([^}]+)\}/g, '<span class="u">$1</span>');
  const sec = (s) => `<span class="b">${esc(s)}</span>`;
  const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  const MAN_ALIAS = { crm: "crm-erp", erp: "crm-erp", aic: "services", "red-hat": "redhat", rhel: "redhat" };
  const manCols = () => Math.min(columns(), 72);
  /* Рядок з краями по ширині екрана; середина зникає, якщо не вміщується */
  function spread(left, mid, right, cols) {
    if (left.length + mid.length + right.length + 4 <= cols) {
      const free = cols - left.length - mid.length - right.length;
      const a = Math.floor(free / 2);
      return left + " ".repeat(a) + mid + " ".repeat(free - a) + right;
    }
    if (left.length + right.length + 2 <= cols) return left + " ".repeat(cols - left.length - right.length) + right;
    return left;
  }

  function manPage(name) {
    const M = MAN[lang];
    const S = M.sec;
    const intro = name === "services";
    const p = intro ? M.intro : M.pages[name];
    const cols = manCols();
    const title = name.toUpperCase() + "(8)";
    const ref = (n) => tok(n + "(8)", "man " + n);
    const L = [esc(spread(title, M.header, title, cols)), "", sec(S.name), mp(esc(`${name} — ${p.name}`)), ""];
    if (!intro) {
      const letters = FLAGS[name].map((f) => f.slice(1)).sort().join("");
      L.push(
        sec(S.syn),
        mp(`<span class="b">${esc(name)}</span> [-${esc(letters)}]`),
        mp(`<a href="mailto:${EMAIL}?subject=${encodeURIComponent(name)}">mail -s ${esc(name)} ${EMAIL}</a>`),
        ""
      );
    }
    L.push(sec(S.desc));
    p.desc.forEach((d, i) => { if (i) L.push(""); L.push(mp(fmt(d))); });
    L.push("");
    if (intro) {
      L.push(sec(S.list), ...SERVICE_FILES.map((n) => mp(ref(n) + " " + esc(M.pages[n].name), " mt")), "");
      L.push(sec(S.see), mp(tok("intro(1)", "man intro") + ", " + tok("mail(1)", "mail")));
    } else {
      L.push(sec(S.opts), ...FLAGS[name].map((f, i) => mp(`<span class="b">${esc(f)}</span>  ${fmt(p.opts[i])}`, " mt")), "");
      L.push(sec(S.ret), mp(fmt(p.ret)), "");
      if (p.bugs) L.push(sec(S.bugs), mp(fmt(p.bugs)), "");
      if (p.notes) L.push(sec(S.notes), mp(fmt(p.notes)), "");
      L.push(sec(S.see), mp(SEE[name].map(ref).join(", ") + ", " + tok("mail(1)", "mail")));
    }
    L.push("", esc(spread("4.3 Berkeley Distribution", "", "Oct 2, 1987", cols)));
    return L;
  }

  const serviceFile = (name) => file(
    () => {
      const L = manPage(name);
      if (name === "services") return L;
      const [lead, cmd] = u().discuss;
      return [...L, "", esc(lead) + tok(cmd)];
    },
    () => manPage(name).map(strip).join("\n")
  );
  const services = { README: serviceFile("services"), ...Object.fromEntries(SERVICE_FILES.map((name) => [name, serviceFile(name)])) };

  const partners = file(
    () => [
      heading(t().partnersTitle),
      "",
      ...PARTNERS.map((p) => "    - " + (p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)))
    ],
    () => PARTNERS.join("\n")
  );

  const planLines = () => {
    const s = t();
    return [esc(s.heroTitle), "", esc(s.heroLead) + colon(), ...s.phrases.map((p) => "    - " + esc(p))];
  };

  const passwd = [
    "root:*:0:0:Charlie &:/:/bin/csh",
    "daemon:*:1:1:The devil himself:/:",
    "aic:*:100:10:ArtIntelliCo LLC:/usr/guest:/bin/csh",
    "guest::101:31:Guest:/usr/guest:/bin/csh"
  ];

  const ROOT = dir({
    bin: dir(Object.fromEntries(BIN.map((n, i) => [n, { type: "bin", owner: "root", mode: "-rwxr-xr-x", size: 8192 + ((n.length * 7919 + i * 1237) % 40000) }])), { owner: "root" }),
    etc: dir({
      motd: file(() => [esc(u().motd.join(""))], () => u().motd.join(""), { owner: "root" }),
      passwd: file(() => passwd.map(esc), () => passwd.join("\n"), { owner: "root" })
    }, { owner: "root" }),
    usr: dir({
      guest: dir({
        README: readme,
        services: dir(services),
        partners,
        contact: file(contactLines, contactText),
        ".plan": file(planLines, () => planLines().join("\n"))
      })
    }, { owner: "root" })
  }, { owner: "root" });

  function normalize(path) {
    let p = path.replace(/^~(?=\/|$)/, HOME);
    if (!p.startsWith("/")) p = cwd + "/" + p;
    const parts = [];
    for (const seg of p.split("/")) {
      if (!seg || seg === ".") continue;
      if (seg === "..") parts.pop();
      else parts.push(seg);
    }
    return "/" + parts.join("/");
  }
  function lookup(abs) {
    let node = ROOT;
    for (const seg of abs.split("/").filter(Boolean)) {
      if (!node || node.type !== "dir") return null;
      node = node.kids[seg];
    }
    return node || null;
  }
  const short = (abs) => (abs === HOME ? "~" : abs.startsWith(HOME + "/") ? "~" + abs.slice(HOME.length) : abs);
  const sizeOf = (n) => (n.type === "dir" ? 512 : n.type === "bin" ? n.size : bytes(n.text()));
  const prompt = () => `${HOST}:${short(cwd)}% `;

  /* ---------- Виведення ---------- */
  const out = $("out");
  const screen = $("screen");
  const input = $("cmd");
  const form = $("promptLine");

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
  async function emit(lines, delay = 14) {
    for (const l of lines) { line(l); await sleep(delay); }
  }
  async function typeIn(before, text) {
    const d = line(esc(before));
    for (const ch of text) { d.textContent += ch; await sleep(70 + Math.random() * 60); }
    await sleep(200);
    return d;
  }

  function setBusy(on) {
    busy = on;
    form.hidden = on;
    if (!on) {
      flushing = false;
      $("prompt").textContent = prompt();
      renderInput();
      scrollDown();
      if (!coarse) input.focus({ preventScroll: true });
    }
  }

  function renderInput() {
    const v = input.value;
    const p = input.selectionStart ?? v.length;
    const rest = [...v.slice(p)];
    $("before").textContent = v.slice(0, p);
    $("cur").textContent = rest[0] || " ";
    $("after").textContent = rest.slice(1).join("");
  }
  ["input", "keyup", "click", "select"].forEach((ev) => input.addEventListener(ev, renderInput));
  document.addEventListener("selectionchange", () => { if (document.activeElement === input) renderInput(); });

  const columns = () => {
    const w = $("measure").getBoundingClientRect().width / 10 || 10;
    return Math.max(20, Math.min(80, Math.floor(out.clientWidth / w)));
  };

  /* ---------- Команди ---------- */
  function lsEntries(node, all) {
    const names = Object.keys(node.kids).filter((n) => all || !n.startsWith(".")).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    return all ? [".", "..", ...names] : names;
  }

  function entryTok(abs, name, node, label = name + (node.type === "dir" ? "/" : node.type === "bin" ? "*" : "")) {
    const target = short(abs);
    if (node.type === "dir") return tok(label, `cd ${target}; ls`);
    if (node.type === "bin") return tok(label, name);
    return tok(label, `cat ${target}`);
  }

  function ls(args) {
    const flags = args.filter((a) => a.startsWith("-")).join("");
    const paths = args.filter((a) => !a.startsWith("-"));
    const long = flags.includes("l");
    const all = flags.includes("a");
    const result = [];
    for (const p of paths.length ? paths : ["."]) {
      const abs = normalize(p);
      const node = lookup(abs);
      if (!node) { result.push(esc(`ls: ${p}: No such file or directory`)); continue; }
      if (paths.length > 1) result.push(esc(p + ":"));
      const entries = node.type === "dir"
        ? lsEntries(node, all).map((name) => {
          const childAbs = name === "." ? abs : name === ".." ? normalize(abs + "/..") : abs + "/" + name;
          return [name, childAbs, lookup(childAbs)];
        })
        : [[p, abs, node]];
      if (long) {
        if (node.type === "dir") result.push("total " + Math.max(1, entries.length));
        for (const [name, childAbs, n] of entries) {
          const meta = `${n.mode}  1 ${n.owner.padEnd(5)} ${String(sizeOf(n)).padStart(6)} ${lsDate()} `;
          result.push(esc(meta) + (name === "." || name === ".." ? esc(name) : entryTok(childAbs, name, n, name)));
        }
      } else {
        const labels = entries.map(([name, , n]) => name + (n.type === "dir" && name !== "." && name !== ".." ? "/" : n.type === "bin" ? "*" : ""));
        const width = Math.max(...labels.map((l) => l.length)) + 2;
        const perRow = Math.max(1, Math.floor(columns() / width));
        const rows = Math.ceil(entries.length / perRow);
        for (let r = 0; r < rows; r++) {
          let row = "";
          for (let c = 0; c < perRow; c++) {
            const k = c * rows + r;
            if (k >= entries.length) continue;
            const [name, childAbs, n] = entries[k];
            const html = name === "." || name === ".." ? esc(labels[k]) : entryTok(childAbs, name, n, labels[k]);
            row += html + " ".repeat(c < perRow - 1 ? width - labels[k].length : 0);
          }
          result.push(row);
        }
      }
      if (paths.length > 1) result.push("");
    }
    return result;
  }

  function cat(args, cmd = "cat") {
    if (!args.length) return [esc(`usage: ${cmd} file ...`)];
    const res = [];
    args.forEach((p, i) => {
      const node = lookup(normalize(p));
      if (!node) res.push(esc(`${cmd}: ${p}: No such file or directory`));
      else if (node.type === "dir") res.push(esc(`${cmd}: ${p}: Is a directory`));
      else if (node.type === "bin") res.push(esc(`${cmd}: ${p}: binary file`));
      else { if (i > 0) res.push(""); res.push(...node.lines()); }
    });
    return res;
  }

  function manIntro() {
    const m = u().man;
    const cols = Math.min(columns(), 72);
    const left = "INTRO(1)";
    const mid = m.header;
    const gap = Math.max(1, Math.floor((cols - left.length * 2 - mid.length) / 2));
    const pad = (s, n) => s + " ".repeat(Math.max(2, n - s.length));
    const cmdTok = (c) => {
      if (c.startsWith("lang ")) return "lang " + LANGS.map((l) => tok(l, "lang " + l)).join("|");
      if (c.startsWith("phosphor ")) return "phosphor " + PHOSPHORS.map((p) => tok(p, "phosphor " + p)).join("|");
      /* Шляхи від домашнього каталогу, щоб посилання працювали з будь-якого cwd */
      return tok(c, c.replace(/\b(README|partners|services)\b/, "~/$1"));
    };
    const table = (rows) => {
      rows = rows.map(([c, d]) => [c === "lang" ? "lang " + LANGS.join("|") : c, d]);
      const width = Math.max(...rows.map(([c]) => c.length)) + 3;
      /* Вузький екран: опис під командою з відступом, як .TP у troff, щоб колонки не розсипались */
      if (5 + width + Math.max(...rows.map(([, d]) => d.length)) > cols) return rows.flatMap(([c, d]) => ["     " + cmdTok(c), "         " + esc(d)]);
      return rows.map(([c, d]) => "     " + cmdTok(c) + " ".repeat(width - c.length) + esc(d));
    };
    /* Перелік команд переноситься вручну, зберігаючи відступ */
    const cmdLines = [];
    let cur = [];
    let len = 0;
    for (const c of m.cmds[1].split(/\s{2,}/)) {
      if (cur.length && len + 2 + c.length > cols - 5) { cmdLines.push(cur); cur = []; len = 0; }
      len += (cur.length ? 2 : 0) + c.length;
      cur.push(c);
    }
    if (cur.length) cmdLines.push(cur);
    return [
      esc(left + " ".repeat(gap) + mid + " ".repeat(gap) + left),
      "",
      `<span class="b">${esc(m.name[0])}</span>`,
      "     " + esc(m.name[1]),
      "",
      `<span class="b">${esc(m.desc[0])}</span>`,
      "     " + esc(m.desc[1]),
      "",
      ...table(m.steps),
      "",
      `<span class="b">${esc(m.cmds[0])}</span>`,
      ...cmdLines.map((row) => "     " + row.map((c) => (c.startsWith("ls") ? esc(c) : tok(c))).join("  ")),
      "",
      ...table(m.extra),
      "",
      `<span class="b">${esc(m.keys[0])}</span>`,
      "     " + esc(m.keys[1]),
      "",
      esc("4.3 Berkeley Distribution" + " ".repeat(Math.max(1, cols - 25 - 11)) + "Oct 2, 1987")
    ];
  }

  function mail() {
    const s = t();
    const d = today9();
    const body = contactText();
    const n = body.split("\n").length + 6;
    const subject = s.contactTitle;
    return [
      "Mail version 5.2 6/21/85.  Type ? for help.",
      `"/usr/spool/mail/guest": 1 message 1 new`,
      esc(`>N  1 ${EMAIL}  ${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00  ${n}/${bytes(body)} "${subject}"`),
      "& 1",
      esc(`Message 1:`),
      esc(`From ${EMAIL} ${unixDate(d)}`),
      esc(`To: guest@${HOST}`),
      `Subject: <span class="b">${esc(subject)}</span>`,
      "",
      esc(s.contactText),
      "",
      "-- ",
      "ArtIntelliCo",
      `<a href="mailto:${EMAIL}">${EMAIL}</a>`,
      "",
      "& q",
      esc(`Saved 1 message in ${HOME}/mbox`)
    ];
  }

  function finger(args) {
    const who = (args[0] || "").toLowerCase();
    if (!who) {
      return [
        "Login    Name                TTY  Idle  When",
        esc("aic      ArtIntelliCo LLC     co         Fri 07:00"),
        esc("guest    Guest                01         " + DAYS[new Date().getDay()] + " " + hms(new Date()).slice(0, 5))
      ];
    }
    if (who === "aic" || who === "artintellico") {
      return [
        esc("Login name: aic                         In real life: ArtIntelliCo LLC"),
        esc("Directory: /usr/guest                   Shell: /bin/csh"),
        esc("On since Fri 07:00 on console"),
        "Mail: " + `<a href="mailto:${EMAIL}">${EMAIL}</a>`,
        "Plan:",
        ...planLines()
      ];
    }
    if (who === "guest") {
      return [esc("Login name: guest                       In real life: Guest"), esc("Directory: /usr/guest                   Shell: /bin/csh"), "No Plan."];
    }
    return [esc(`finger: ${args[0]}: no such user.`)];
  }

  function env() {
    return { HOME, USER: "guest", SHELL: "/bin/csh", TERM: "vt100", PATH: "/bin:/usr/bin:/usr/ucb", LANG: u().langSet.split("=")[1] };
  }
  const expand = (s) => s.replace(/\$(\w+)/g, (_, k) => env()[k] ?? "");

  /* Мова за кодом (de), локаллю (de_DE.ISO8859-1) або назвою (Deutsch, german, німецька) */
  const LANG_WORDS = {
    uk: ["ukrainian", "українська", "украинский", "ukrainisch", "ukrainien", "ucraniano", "ucraino"],
    en: ["english", "англійська", "английский", "englisch", "anglais", "inglés", "inglês", "inglese"],
    ru: ["russian", "російська", "русский", "russisch", "russe", "ruso", "russo"],
    de: ["german", "deutsch", "німецька", "немецкий", "allemand", "alemán", "alemão", "tedesco"],
    fr: ["french", "français", "французька", "французский", "französisch", "francés", "francês", "francese"],
    es: ["spanish", "español", "castellano", "іспанська", "испанский", "spanisch", "espagnol", "espanhol", "spagnolo"],
    pt: ["portuguese", "português", "португальська", "португальский", "portugiesisch", "portugais", "portugués", "portoghese"],
    it: ["italian", "italiano", "італійська", "итальянский", "italienisch", "italien"]
  };
  const fold = (w) => w.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  function findLang(raw) {
    const w = fold(raw);
    if (!w) return null;
    const code = w.slice(0, 2);
    if (LANGS.includes(code) && (w.length === 2 || /^[a-z]{2}[_.-]/.test(w))) return code;
    for (const l of LANGS) {
      const names = [AIC.langNames && AIC.langNames[l], ...(LANG_WORDS[l] || [])].filter(Boolean).map(fold);
      if (names.some((n) => n === w || (w.length >= 3 && n.startsWith(w)))) return l;
    }
    return null;
  }
  /* Перелік мов у стилі locale -a: поточна позначена зірочкою */
  const langList = () => LANGS.map((l) => `${l === lang ? "*" : " "} ${tok(l, "lang " + l)}  ${esc(UX[l].langSet.split("=")[1].padEnd(15))}  ${esc((AIC.langNames && AIC.langNames[l]) || l)}`);

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
  }
  function setPhosphor(p) {
    phosphor = p;
    store.set("aic-phosphor", p);
    document.documentElement.dataset.phosphor = p;
  }

  const history = [];
  let hIndex = 0;

  async function run(raw, { typed = false } = {}) {
    setBusy(true);
    if (typed) await typeIn(prompt(), raw);
    else line(esc(prompt() + raw));
    const cmdline = raw.trim();
    if (cmdline) {
      if (history[history.length - 1] !== cmdline) history.push(cmdline);
      hIndex = history.length;
      for (const part of cmdline.split(";").map((x) => x.trim()).filter(Boolean)) {
        const stop = await execute(part);
        if (stop) return;
      }
    }
    setBusy(false);
  }

  async function execute(cmdline) {
    const argv = expand(cmdline).split(/\s+/);
    const cmd = argv[0];
    const args = argv.slice(1);
    const name = cmd.includes("/") ? cmd.split("/").pop() : cmd;

    switch (name) {
      case "help":
        return emit(manIntro(), 10);
      case "man": {
        const want = (args.filter((a) => !/^\d$/.test(a) && !a.startsWith("-"))[0] || "").toLowerCase();
        if (!want || want === "intro" || want === "man") return emit(manIntro(), 10);
        const page = MAN_ALIAS[want] || want;
        if (page === "services" || SERVICE_FILES.includes(page)) return emit(manPage(page), 10);
        return emit([esc(`No manual entry for ${want}.`)]);
      }
      case "ls":
        return emit(ls(args));
      case "cd": {
        const target = normalize(args[0] || "~");
        const node = lookup(target);
        if (!node) return emit([esc(`${args[0]}: No such file or directory.`)]);
        if (node.type !== "dir") return emit([esc(`${args[0]}: Not a directory.`)]);
        cwd = target;
        return;
      }
      case "pwd":
        return emit([esc(cwd)]);
      case "cat":
      case "more":
      case "less":
      case "head":
        return emit(cat(args, name));
      case "echo":
        return emit([esc(args.join(" "))]);
      case "clear":
        out.innerHTML = "";
        return;
      case "date":
        return emit([esc(unixDate(new Date()))]);
      case "uname":
        return emit([args.includes("-a") ? `4.3BSD ${HOST} 4.3 BSD UNIX #1: Fri Jun 13 09:00:00 PDT 1987 vax` : "4.3BSD"]);
      case "hostname":
        return emit([HOST]);
      case "whoami":
        return emit(["guest"]);
      case "who":
        return emit([esc("aic      console Oct  2 07:00"), esc(`guest    tty01   ${MONTHS[new Date().getMonth()]} ${String(new Date().getDate()).padStart(2)} ${hms(new Date()).slice(0, 5)}`)]);
      case "finger":
        return emit(finger(args));
      case "mail":
      case "Mail":
        return emit(mail(), 30);
      case "history":
        return emit(history.map((h, i) => esc(String(i + 1).padStart(5) + "  " + h)));
      case "lang": {
        const l = findLang(args.join(" "));
        if (!l) return emit([...(args.length ? [esc(`lang: ${args.join(" ")}: unknown language`)] : []), "usage: lang code", ...langList()]);
        setLang(l);
        return emit([esc(u().langSet), u().motd.map((part, i) => (i === 1 ? tok(part) : esc(part))).join("")]);
      }
      case "setenv": {
        if (!args.length) return emit(Object.entries(env()).map(([k, v]) => esc(`${k}=${v}`)));
        if (args[0] === "LANG") {
          const l = findLang(args[1] || "");
          if (l) { setLang(l); return emit([esc(u().langSet)]); }
        }
        return;
      }
      case "printenv":
      case "env":
        return emit(Object.entries(env()).map(([k, v]) => esc(`${k}=${v}`)));
      case "phosphor": {
        const p = (args[0] || "").toLowerCase();
        if (!p) setPhosphor(PHOSPHORS[(PHOSPHORS.indexOf(phosphor) + 1) % PHOSPHORS.length]);
        else if (PHOSPHORS.includes(p)) setPhosphor(p);
        else return emit(["usage: phosphor " + PHOSPHORS.map((x) => tok(x, "phosphor " + x)).join("|")]);
        return emit([esc(u().phosphorSet + u().phosphors[phosphor])]);
      }
      case "dos":
      case "command.com":
        await emit(["Connection to DOS..."]);
        await sleep(400);
        location.href = AIC.url("dos", lang);
        return true;
      case "ai":
      case "future":
        location.href = AIC.url("ai", lang);
        return true;
      case "win":
        await emit(["Starting Windows 3.11..."]);
        await sleep(400);
        location.href = AIC.url("win31", lang);
        return true;
      case "mc":
        await emit(["Starting Midnight Commander..."]);
        await sleep(400);
        location.href = AIC.url("mc", lang);
        return true;
      case "startx":
      case "linux":
        await emit(["xinit: starting X server..."]);
        await sleep(400);
        location.href = AIC.url("linux", lang);
        return true;
      case "lisa":
        await emit(["Starting ArtIntelliCo Office System..."]);
        await sleep(400);
        location.href = AIC.url("lisa", lang);
        return true;
      case "apple":
        await emit(["Connecting to Apple ][..."]);
        await sleep(400);
        location.href = AIC.url("apple", lang);
        return true;
      case "nc":
        await emit(["Starting Norton Commander..."]);
        await sleep(400);
        location.href = AIC.url("nc", lang);
        return true;
      case "logout":
      case "exit":
        await emit(["logout"]);
        await sleep(500);
        login();
        return true;
      case "su":
        return emit(["su: Sorry"]);
      case "sudo":
        return emit(["sudo: Command not found."]);
    }
    if (DENIED.includes(name)) return emit([esc(`${name}: ${args[0] ? args[0] + ": " : ""}Permission denied`)]);

    /* Виконувані файли та шляхи */
    const node = cmd.includes("/") ? lookup(normalize(cmd)) : null;
    if (node && node.type === "dir") return emit([esc(`${cmd}: Permission denied.`)]);
    if (node && node.type === "file") return emit([esc(`${cmd}: Permission denied.`)]);
    /* Послуги — це сторінки довідника, а не програми */
    if (SERVICE_FILES.includes(name) || MAN_ALIAS[name]) return emit([esc(`${cmd}: Command not found. `) + tok(`man ${MAN_ALIAS[name] || name}`)]);
    return emit([esc(`${cmd}: Command not found.`)]);
  }

  /* ---------- Клавіатура ---------- */
  function complete() {
    const v = input.value;
    const parts = v.split(" ");
    const word = parts[parts.length - 1];
    let pool;
    let prefix = "";
    let base = word;
    if (parts.length === 1 && !word.includes("/")) {
      pool = [...BUILTINS, ...BIN].sort();
    } else if (parts[0] === "man" && parts.length === 2) {
      pool = ["intro", "services", ...SERVICE_FILES];
    } else {
      const slash = word.lastIndexOf("/");
      prefix = slash >= 0 ? word.slice(0, slash + 1) : "";
      base = slash >= 0 ? word.slice(slash + 1) : word;
      const node = lookup(normalize(prefix || "."));
      if (!node || node.type !== "dir") return;
      pool = Object.keys(node.kids)
        .filter((n) => base.startsWith(".") || !n.startsWith("."))
        .map((n) => n + (node.kids[n].type === "dir" ? "/" : ""));
    }
    const hits = [...new Set(pool.filter((x) => x.startsWith(base)))];
    if (!hits.length) return;
    let common = hits[0];
    for (const h of hits) while (!h.startsWith(common)) common = common.slice(0, -1);
    parts[parts.length - 1] = prefix + common;
    input.value = parts.join(" ") + (hits.length === 1 && !common.endsWith("/") ? " " : "");
    if (hits.length > 1 && common.length === base.length) {
      line(esc(prompt() + v));
      line(hits.map(esc).join("  "));
    }
    renderInput();
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { e.preventDefault(); complete(); return; }
    if (e.ctrlKey && (e.key === "c" || e.key === "C" || e.key === "с" || e.key === "С")) {
      e.preventDefault();
      line(esc(prompt() + input.value + "^C"));
      input.value = "";
      renderInput();
      return;
    }
    if (e.ctrlKey && (e.key === "l" || e.key === "L" || e.key === "д" || e.key === "Д")) {
      e.preventDefault();
      out.innerHTML = "";
      return;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      hIndex = Math.max(0, Math.min(history.length, hIndex + (e.key === "ArrowUp" ? -1 : 1)));
      input.value = history[hIndex] || "";
      input.setSelectionRange(input.value.length, input.value.length);
      renderInput();
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
      if (!e.metaKey && !(e.ctrlKey && e.key !== "c")) { e.preventDefault(); flush(); }
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
    if (busy) { flush(); return; }
    if (b) { run(b.dataset.cmd); return; }
    if (e.target.closest("a")) return;
    if (!String(getSelection())) input.focus({ preventScroll: true });
  });

  /* ---------- Вхід у систему ---------- */
  async function login() {
    setBusy(true);
    cwd = HOME;
    out.innerHTML = "";
    flushing = false;
    const quick = store.get("aic-unix-login", sessionStorage);
    const hint = !quick && !reduced ? line(`<span class="d">${esc(u().skip)}</span>`) : null;
    await emit([`4.3 BSD UNIX (${HOST}) (tty01)`, ""], 80);
    await sleep(quick ? 0 : 500);
    const l = await typeIn("login: ", "guest");
    if (hint) hint.remove();
    l.textContent = "login: guest";
    line("Password:");
    await sleep(quick ? 100 : 700);
    const last = new Date(Date.now() - 86400000);
    last.setHours(18, 30, 12);
    await emit([
      esc(`Last login: ${DAYS[last.getDay()]} ${MONTHS[last.getMonth()]} ${String(last.getDate()).padStart(2)} ${hms(last)} on tty01`),
      "4.3 BSD UNIX #1: Fri Jun 13 09:00:00 PDT 1987",
      "",
      u().motd.map((part, i) => (i === 1 ? tok(part) : esc(part))).join(""),
      "",
      "You have new mail."
    ], 60);
    store.set("aic-unix-login", "1", sessionStorage);
    await typeIn(prompt(), "cat README");
    await emit(readme.lines(), 30);
    setBusy(false);
  }

  setLang(lang);
  setPhosphor(phosphor);
  document.fonts.load('20px "DEC Rainbow"').finally(login);
})();
