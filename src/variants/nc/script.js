/* DOS-версія сайту: Norton Commander, консоль, завантаження BIOS. Розмітку та SEO-фолбек віддає src/layouts/Retro.astro. */
(() => {
  const EMAIL = "io@artintellico.com";
  const YEAR = new Date().getFullYear();
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

  /* Тексти взяті з artintellico.com */
  const I18N = {
    uk: {
      title: "Розробка та підтримка ІТ рішень для бізнесу — ArtIntelliCo",
      menu: ["Послуги", "Партнери", "Контакти", "Мова:", "Монітор:", "Режими"],
      modesTitle: "Вибір режиму",
      modesText: "Той самий сайт в інтерфейсах різних років:",
      langTitle: "Вибір мови",
      monitors: { ega: "EGA", green: "Зелений", amber: "Бурштин" },
      cols: ["Ім'я", "Опис"],
      fkeys: ["Довідка", "Мова", "Перегляд", "Лист", "Режими", "", "", "", "Монітор", "Вихід"],
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
      copyright: `© ${YEAR} ArtIntelliCo. Усі права захищено.`,
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
        "  LANG [код]      змінити мову (F2)",
        "  COLOR           змінити монітор",
        "  CLS             очистити екран",
        "  VER             версія",
        "  BOOT            перезавантажити",
        "  NC              повернутися до панелей",
        "  MODE            вибір режиму (F5)",
        "  CLASSIC         класична версія сайту",
        "  COMMAND         консольний режим",
        "  UNIX            термінал UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              AI і цифрове майбутнє",
        "",
        "Клавіші: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    en: {
      title: "Software development and IT support for business — ArtIntelliCo",
      menu: ["Services", "Partners", "Contacts", "Lang:", "Monitor:", "Modes"],
      modesTitle: "Choose a mode",
      modesText: "The same site in interfaces from different years:",
      langTitle: "Choose a language",
      monitors: { ega: "EGA", green: "Green", amber: "Amber" },
      cols: ["Name", "Description"],
      fkeys: ["Help", "Lang", "View", "Mail", "Modes", "", "", "", "Monitor", "Quit"],
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
      copyright: `© ${YEAR} ArtIntelliCo. All rights reserved.`,
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
        "  LANG [code]     switch language (F2)",
        "  COLOR           switch monitor",
        "  CLS             clear screen",
        "  VER             version",
        "  BOOT            reboot",
        "  NC              back to the panels",
        "  MODE            choose a mode (F5)",
        "  CLASSIC         classic version of the site",
        "  COMMAND         console mode",
        "  UNIX            UNIX terminal",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              AI and the digital future",
        "",
        "Keys: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    ru: {
      title: "Разработка и поддержка ИТ решений для бизнеса — ArtIntelliCo",
      menu: ["Услуги", "Партнёры", "Контакты", "Язык:", "Монитор:", "Режимы"],
      modesTitle: "Выбор режима",
      modesText: "Тот же сайт в интерфейсах разных лет:",
      langTitle: "Выбор языка",
      monitors: { ega: "EGA", green: "Зелёный", amber: "Янтарь" },
      cols: ["Имя", "Описание"],
      fkeys: ["Помощь", "Язык", "Просмотр", "Письмо", "Режимы", "", "", "", "Монитор", "Выход"],
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
      copyright: `© ${YEAR} ArtIntelliCo. Все права защищены.`,
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
        "  LANG [код]      сменить язык (F2)",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "  MODE            выбор режима (F5)",
        "  CLASSIC         классическая версия сайта",
        "  COMMAND         консольный режим",
        "  UNIX            терминал UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              ИИ и цифровое будущее",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    de: {
      title: "Softwareentwicklung und IT-Support für Unternehmen — ArtIntelliCo",
      menu: ["Leistungen", "Partner", "Kontakt", "Sprache:", "Monitor:", "Modi"],
      modesTitle: "Modus wählen",
      modesText: "Dieselbe Website in Oberflächen verschiedener Jahre:",
      langTitle: "Sprache wählen",
      monitors: { ega: "EGA", green: "Grün", amber: "Bernstein" },
      cols: ["Name", "Beschreibung"],
      fkeys: ["Hilfe", "Sprache", "Ansicht", "E-Mail", "Modi", "", "", "", "Monitor", "Ende"],
      skip: "Beliebige Taste zum Überspringen drücken",
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo digitalisiert und automatisiert Ihre Geschäftsprozesse, indem es moderne IT-Lösungen entwirft und einführt.",
      heroLead: "Was wir für Ihr Unternehmen tun:",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme bauen", "KI produktiv einsetzen", "Infrastruktur in die Cloud bringen"],
      readmeDesc: "Über das Unternehmen",
      hint: "↑↓ Datei wählen   Enter öffnen   F1 Hilfe",
      discuss: "Projekt besprechen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie eine Zusammenarbeit vorschlagen oder mehr über unsere Lösungen und Erfahrungen wissen möchten, schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      write: "E-Mail schreiben",
      copy: "Adresse kopieren",
      copied: "Adresse kopiert",
      copyFailed: "Kopieren fehlgeschlagen. Adresse: " + EMAIL,
      cancel: "Abbrechen",
      copyright: `© ${YEAR} ArtIntelliCo. Alle Rechte vorbehalten.`,
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt.",
      source: "Klassische Version der Website",
      bad: "Befehl oder Dateiname nicht gefunden. Geben Sie HELP ein.",
      back: "Geben Sie NC ein oder drücken Sie Esc, um zu den Fenstern zurückzukehren.",
      help: [
        "Befehle:",
        "  DIR             Dateien auflisten",
        "  TYPE <Datei>    Datei öffnen (oder nur den Namen eingeben)",
        "  MAIL            uns schreiben",
        "  LANG [Code]     Sprache wechseln (F2)",
        "  COLOR           Monitor wechseln",
        "  CLS             Bildschirm löschen",
        "  VER             Version",
        "  BOOT            neu starten",
        "  NC              zurück zu den Fenstern",
        "  MODE            Modus wählen (F5)",
        "  CLASSIC         klassische Version der Website",
        "  COMMAND         Konsolenmodus",
        "  UNIX            UNIX-Terminal",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              KI und die digitale Zukunft",
        "",
        "Tasten: ↑↓ Pos1 Ende Enter F1–F10 Esc Strg+O"
      ]
    },
    fr: {
      title: "Développement logiciel et support informatique pour les entreprises — ArtIntelliCo",
      menu: ["Services", "Partenaires", "Contacts", "Langue :", "Écran :", "Modes"],
      modesTitle: "Choisir un mode",
      modesText: "Le même site dans des interfaces d'époques différentes :",
      langTitle: "Choisir la langue",
      monitors: { ega: "EGA", green: "Vert", amber: "Ambre" },
      cols: ["Nom", "Description"],
      fkeys: ["Aide", "Langue", "Voir", "E-mail", "Modes", "", "", "", "Écran", "Quitter"],
      skip: "Appuyez sur une touche pour passer",
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous",
      phrases: ["développons des plateformes SaaS", "construisons des systèmes CRM et ERP", "mettons l'IA au travail", "migrons l'infrastructure vers le cloud"],
      readmeDesc: "À propos de la société",
      hint: "↑↓ choisir un fichier   Entrée ouvrir   F1 aide",
      discuss: "Parler de votre projet",
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience ? Écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      write: "Écrire un e-mail",
      copy: "Copier l'adresse",
      copied: "Adresse copiée",
      copyFailed: "Copie impossible. Adresse : " + EMAIL,
      cancel: "Annuler",
      copyright: `© ${YEAR} ArtIntelliCo. Tous droits réservés.`,
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
        "  LANG [code]     changer de langue (F2)",
        "  COLOR           changer d'écran",
        "  CLS             effacer l'écran",
        "  VER             version",
        "  BOOT            redémarrer",
        "  NC              revenir aux panneaux",
        "  MODE            choisir un mode (F5)",
        "  CLASSIC         version classique du site",
        "  COMMAND         mode console",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              l'IA et l'avenir numérique",
        "",
        "Touches : ↑↓ Début Fin Entrée F1–F10 Échap Ctrl+O"
      ]
    },
    es: {
      title: "Desarrollo de software y soporte de TI para empresas — ArtIntelliCo",
      menu: ["Servicios", "Socios", "Contacto", "Idioma:", "Monitor:", "Modos"],
      modesTitle: "Elegir modo",
      modesText: "El mismo sitio en interfaces de distintas épocas:",
      langTitle: "Elegir idioma",
      monitors: { ega: "EGA", green: "Verde", amber: "Ámbar" },
      cols: ["Nombre", "Descripción"],
      fkeys: ["Ayuda", "Idioma", "Ver", "Correo", "Modos", "", "", "", "Monitor", "Salir"],
      skip: "Pulse cualquier tecla para omitir",
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar sus procesos de negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio,",
      phrases: ["desarrollamos plataformas SaaS", "creamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      hint: "↑↓ elegir archivo   Intro abrir   F1 ayuda",
      discuss: "Hablar de su proyecto",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y experiencia, escríbanos un correo.",
      emailLabel: "Correo electrónico",
      write: "Escribir un correo",
      copy: "Copiar dirección",
      copied: "Dirección copiada",
      copyFailed: "No se pudo copiar. La dirección es " + EMAIL,
      cancel: "Cancelar",
      copyright: `© ${YEAR} ArtIntelliCo. Todos los derechos reservados.`,
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
        "  LANG [código]   cambiar de idioma (F2)",
        "  COLOR           cambiar de monitor",
        "  CLS             borrar la pantalla",
        "  VER             versión",
        "  BOOT            reiniciar",
        "  NC              volver a los paneles",
        "  MODE            elegir modo (F5)",
        "  CLASSIC         versión clásica del sitio",
        "  COMMAND         modo consola",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              la IA y el futuro digital",
        "",
        "Teclas: ↑↓ Inicio Fin Intro F1–F10 Esc Ctrl+O"
      ]
    },
    pt: {
      title: "Desenvolvimento de software e suporte de TI para empresas — ArtIntelliCo",
      menu: ["Serviços", "Parceiros", "Contactos", "Idioma:", "Monitor:", "Modos"],
      modesTitle: "Escolher modo",
      modesText: "O mesmo site em interfaces de diferentes épocas:",
      langTitle: "Escolher idioma",
      monitors: { ega: "EGA", green: "Verde", amber: "Âmbar" },
      cols: ["Nome", "Descrição"],
      fkeys: ["Ajuda", "Idioma", "Ver", "E-mail", "Modos", "", "", "", "Monitor", "Sair"],
      skip: "Prima qualquer tecla para saltar",
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio,",
      phrases: ["desenvolvemos plataformas SaaS", "criamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      hint: "↑↓ escolher ficheiro   Enter abrir   F1 ajuda",
      discuss: "Falar do seu projeto",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e experiência, escreva-nos um e-mail.",
      emailLabel: "E-mail",
      write: "Escrever e-mail",
      copy: "Copiar endereço",
      copied: "Endereço copiado",
      copyFailed: "Não foi possível copiar. O endereço é " + EMAIL,
      cancel: "Cancelar",
      copyright: `© ${YEAR} ArtIntelliCo. Todos os direitos reservados.`,
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã.",
      source: "Versão clássica do site",
      bad: "Comando ou nome de ficheiro inválido. Escreva HELP.",
      back: "Escreva NC ou prima Esc para voltar aos painéis.",
      help: [
        "Comandos:",
        "  DIR             lista de ficheiros",
        "  TYPE <ficheiro> abrir um ficheiro (ou escreva o nome)",
        "  MAIL            escrever-nos",
        "  LANG [código]   mudar de idioma (F2)",
        "  COLOR           mudar de monitor",
        "  CLS             limpar o ecrã",
        "  VER             versão",
        "  BOOT            reiniciar",
        "  NC              voltar aos painéis",
        "  MODE            escolher modo (F5)",
        "  CLASSIC         versão clássica do site",
        "  COMMAND         modo consola",
        "  UNIX            terminal UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              a IA e o futuro digital",
        "",
        "Teclas: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    },
    it: {
      title: "Sviluppo software e supporto IT per le aziende — ArtIntelliCo",
      menu: ["Servizi", "Partner", "Contatti", "Lingua:", "Monitor:", "Modalità"],
      modesTitle: "Scelta della modalità",
      modesText: "Lo stesso sito nelle interfacce di epoche diverse:",
      langTitle: "Scelta della lingua",
      monitors: { ega: "EGA", green: "Verde", amber: "Ambra" },
      cols: ["Nome", "Descrizione"],
      fkeys: ["Aiuto", "Lingua", "Vedi", "E-mail", "Modalità", "", "", "", "Monitor", "Esci"],
      skip: "Premere un tasto qualsiasi per saltare",
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali, progettando e introducendo soluzioni IT moderne.",
      heroLead: "Per la Sua azienda",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo l'IA al lavoro", "portiamo l'infrastruttura nel cloud"],
      readmeDesc: "Sull'azienda",
      hint: "↑↓ selezionare file   Invio aprire   F1 aiuto",
      discuss: "Parliamo del Suo progetto",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      write: "Scrivere un'e-mail",
      copy: "Copia indirizzo",
      copied: "Indirizzo copiato",
      copyFailed: "Copia non riuscita. Indirizzo: " + EMAIL,
      cancel: "Annulla",
      copyright: `© ${YEAR} ArtIntelliCo. Tutti i diritti riservati.`,
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
        "  LANG [codice]   cambiare lingua (F2)",
        "  COLOR           cambiare monitor",
        "  CLS             pulire lo schermo",
        "  VER             versione",
        "  BOOT            riavviare",
        "  NC              tornare ai pannelli",
        "  MODE            scegliere la modalità (F5)",
        "  CLASSIC         versione classica del sito",
        "  COMMAND         modalità console",
        "  UNIX            terminale UNIX",
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "  AI              l'IA e il futuro digitale",
        "",
        "Tasti: ↑↓ Inizio Fine Invio F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Послуги для переглядача NC (F3): сухо, як README до утиліти. labels — «Що входить» / «Результат» */
  const SVC = {
    uk: {
      labels: ["Що входить:", "Результат:"],
      items: [
        { t: "Розробка концепції ІТ рішення",
          lead: "Визначаємо задачу системи й перекладаємо її у вимоги для бізнесу та розробників.",
          text: "Найдорожчі помилки роблять до коду. Тому спершу опитуємо тих, хто працюватиме із системою: бухгалтерію, склад, менеджерів. Якщо підходить готовий продукт, радимо його замість розробки.",
          inc: ["інтерв'ю, розбір процесів", "бізнес-вимоги, сценарії", "готове рішення чи розробка", "ТЗ: строки й бюджет за етапами"],
          res: "Документ, за яким будь-яка команда оцінить і почне роботу." },
        { t: "Розробка SaaS рішень",
          lead: "SaaS-платформи: від версії для пілотних клієнтів до сервісу з тарифами й кабінетами.",
          text: "Цінність SaaS у тому, що клієнт реєструється, платить і працює сам. Мультитенантність, білінг і права закладаються одразу: потім це в рази дорожче. Перша версія виходить рано.",
          inc: ["мультитенантність, ізоляція даних", "реєстрація, тарифи, оплата", "кабінети, ролі, права", "інтеграції, відкрите API", "масштабування"],
          res: "Продукт для продажу за підпискою, без ручного впровадження в кожного клієнта." },
        { t: "Web-розробка",
          lead: "Корпоративні сайти, маркетплейси, магазини, бронювання, внутрішні вебсервіси.",
          text: "Критерій — заявки й замовлення. Результат погоджується наперед, аналітика ставиться до запуску. Платформа — за задачею: лендингу важка не потрібна, маркетплейсу замало конструктора.",
          inc: ["прототип, дизайн", "frontend, backend, адмінка", "оплата, доставка, CRM, облік", "SEO, швидкість, аналітика", "запуск, супровід"],
          res: "Вебсервіс із видимою віддачею в заявках і грошах." },
        { t: "Мобільні застосунки",
          lead: "iOS та Android, серверна частина, адмінпанель.",
          text: "Застосунок потрібен, якщо клієнт повертається: повторні замовлення, статуси, бонуси. Інакше дешевший мобільний сайт — повідомимо до початку робіт. Нативно чи кросплатформно — за бюджетом і потребою в камері, геолокації, офлайні.",
          inc: ["застосунки iOS та Android", "сервер і API", "адмінка: контент, замовлення, користувачі", "push, аналітика", "публікація в App Store, Google Play"],
          res: "Застосунок пройшов модерацію; керується без розробників." },
        { t: "Рішення зі штучним інтелектом",
          lead: "Автоматизація бізнес-процесів за допомогою ШІ-агентів на базі ШІ та машинного навчання.",
          text: "Чимало задач «для нейромережі» розв'язує звичайна автоматизація. ШІ виправданий там, де люди годинами розбирають листи, документи, звернення. Спершу пілот на ваших даних і цифри точності.",
          inc: ["ШІ-агенти: розбір заявок, заповнення CRM, відповіді клієнтам", "чат-боти, асистенти", "розпізнавання документів", "класифікація, пошук у базі знань", "прогноз попиту, аналіз даних", "пілот з оцінкою якості"],
          res: "Процес переходить від людей до системи. Контроль лишається за людиною." },
        { t: "Розробка CRM та ERP",
          lead: "CRM та ERP під ваші процеси.",
          text: "Коробка годиться для стандартного процесу. Якщо менеджери працюють у таблицях в обхід системи, власна дешевша. Дані переносяться, запуск по відділах, без зупинки роботи.",
          inc: ["продажі, склад, виробництво, фінанси", "ролі, права, журнал дій", "звіти, дашборди", "перенесення з таблиць і старих систем", "бухгалтерія, телефонія, пошта"],
          res: "Одна система замість таблиць. Стан справ видно без щотижневих звітів." },
        { t: "Хмарні рішення",
          lead: "Перенесення інфраструктури в AWS — повністю або частинами. Контроль роботи й витрат.",
          text: "Хмара не завжди дешевша за власний сервер. Вигідна, коли навантаження стрибає, потрібна відмовостійкість або середовища мають підніматися за хвилини. Порядок: аудит, розрахунок, поетапне перенесення з планом відкату.",
          inc: ["аудит, розрахунок вартості", "архітектура AWS, план міграції", "сервери, бази, файли", "бекапи, моніторинг", "оптимізація витрат"],
          res: "Інфраструктура переживає відмову сервера. Рахунок зрозумілий." },
        { t: "Інфраструктура компанії на базі Red Hat",
          lead: "Інфраструктура на Red Hat: Red Hat Enterprise Linux на серверах, OpenShift, автоматизація Ansible.",
          text: "Для систем, які мають працювати роками й проходити аудит. Підписка — це підтримка виробника й десятирічний життєвий цикл RHEL. Конфігурація серверів зберігається в Ansible: сервер перезбирається за сценарієм, а не з пам'яті. Red Hat — наш партнер: допоможемо з підписками й підтримкою виробника.",
          inc: ["аудит серверів, план переходу", "RHEL, оновлення через Satellite", "OpenShift для застосунків", "автоматизація на Ansible", "Identity Management: облікові записи й доступ", "моніторинг, бекапи, документація"],
          res: "Інфраструктуру можна перевірити, повторити й передати іншій команді." },
        { t: "API та інтеграції",
          lead: "API для ваших систем і зв'язок із зовнішніми сервісами.",
          text: "Типова проблема — подвійне введення: замовлення передруковують вручну, оплати звіряють у таблицях. Інтеграція прибирає роботу й помилки. Моніторинг обов'язковий: інтеграції ламаються мовчки, коли партнер змінює API.",
          inc: ["проєктування, документація API", "оплата, доставка, CRM, облік", "обмін між внутрішніми системами", "черги, повтори при збоях", "моніторинг, сповіщення"],
          res: "Введення один раз. Далі дані йдуть самі." },
        { t: "Технічна підтримка",
          lead: "Підтримка й розвиток ІТ-систем, зокрема чужих.",
          text: "Крім виправлень — оновлення безпеки, моніторинг, дрібні доопрацювання. Для чужих систем спершу аудит і документація, інакше будь-яка правка — лотерея.",
          inc: ["моніторинг доступності, помилок", "виправлення, оновлення безпеки", "бекапи, перевірка відновлення", "доопрацювання за планом", "аудит і документація"],
          res: "Система працює. Команда знає її будову." }
      ]
    },
    en: {
      labels: ["Included:", "Result:"],
      items: [
        { t: "IT solution concept",
          lead: "Pins down what the system is for and turns it into requirements for business and developers.",
          text: "Expensive mistakes happen before coding. Future users are interviewed first: accounting, warehouse, sales. If an existing product fits, it is recommended instead of a build.",
          inc: ["interviews, process review", "business requirements, scenarios", "ready-made vs. custom", "spec: time and budget per phase"],
          res: "A document any team can estimate and start from." },
        { t: "SaaS development",
          lead: "SaaS platforms: from a pilot-customer version to a service with plans and dashboards.",
          text: "SaaS pays when customers sign up, pay and work on their own. Multi-tenancy, billing and permissions are built in from the start; retrofitting costs several times more. First version ships early.",
          inc: ["multi-tenancy, data isolation", "sign-up, plans, payments", "dashboards, roles, permissions", "integrations, public API", "scaling"],
          res: "A product sold by subscription, no manual rollout per customer." },
        { t: "Web development",
          lead: "Corporate sites, marketplaces, stores, booking, internal web tools.",
          text: "Success criterion: leads and orders. Agreed up front; analytics live at launch. Platform per task: no heavy stack for a landing page, no site builder for a marketplace.",
          inc: ["prototype, design", "frontend, backend, admin", "payments, delivery, CRM, accounting", "SEO, speed, analytics", "launch, support"],
          res: "A web service with visible return in leads and money." },
        { t: "Mobile apps",
          lead: "iOS and Android, server side, admin panel.",
          text: "An app pays off if customers return: reorders, status tracking, points. Otherwise a mobile site is cheaper — you'll hear it before work starts. Native or cross-platform: by budget and need for camera, location, offline.",
          inc: ["iOS and Android apps", "server and API", "admin: content, orders, users", "push, analytics", "App Store, Google Play release"],
          res: "An app that passes store review and runs without developers." },
        { t: "AI-powered solutions",
          lead: "Business process automation with AI agents, built on AI and machine learning.",
          text: "Many \"neural network\" tasks are solved by plain automation. AI earns its place where people spend hours on emails, documents, requests. Pilot on your data and accuracy figures come first.",
          inc: ["AI agents: request triage, CRM entry, customer replies", "chatbots, assistants", "document recognition", "classification, knowledge-base search", "demand forecasts, data analysis", "pilot with quality check"],
          res: "A process moves from people to the system. A person stays in control." },
        { t: "CRM and ERP development",
          lead: "CRM and ERP fitted to your processes.",
          text: "Boxed software suits a standard process. If managers work around it in spreadsheets, your own system is cheaper. Data migrated, rollout by department, work doesn't stop.",
          inc: ["sales, warehouse, production, finance", "roles, permissions, audit log", "reports, dashboards", "migration from spreadsheets and old systems", "accounting, telephony, email"],
          res: "One system instead of spreadsheets. Status visible without weekly reports." },
        { t: "Cloud solutions",
          lead: "Infrastructure moved to AWS, whole or in parts. Uptime and costs watched.",
          text: "Cloud is not always cheaper than own servers. It pays off with spiky load, fault-tolerance needs, environments wanted in minutes. Order: audit, estimate, staged move with a rollback plan.",
          inc: ["audit, cost estimate", "AWS architecture, migration plan", "servers, databases, files", "backups, monitoring", "cost optimisation"],
          res: "Infrastructure that survives a server failure. A bill that makes sense." },
        { t: "Company infrastructure on Red Hat",
          lead: "Infrastructure on Red Hat: Red Hat Enterprise Linux servers, OpenShift, Ansible automation.",
          text: "For systems that must run for years and pass audits. The subscription means vendor support and RHEL's ten-year lifecycle. Server configuration lives in Ansible: a server is rebuilt from a playbook, not from memory. Red Hat is our partner: we help with subscriptions and vendor support.",
          inc: ["server audit, migration plan", "RHEL, updates via Satellite", "OpenShift for applications", "Ansible automation", "Identity Management: accounts and access", "monitoring, backups, documentation"],
          res: "Infrastructure that can be audited, reproduced and handed to another team." },
        { t: "APIs and integrations",
          lead: "APIs for your systems, links to outside services.",
          text: "Typical problem: double entry. Orders retyped, payments checked in spreadsheets. Integration removes the work and the errors. Monitoring is mandatory: integrations fail silently when a partner changes its API.",
          inc: ["API design, documentation", "payments, delivery, CRM, accounting", "internal data exchange", "queues, retries on failure", "monitoring, alerts"],
          res: "Data is entered once and moves on by itself." },
        { t: "Technical support",
          lead: "Support and development of IT systems, others' included.",
          text: "Beyond fixes: security updates, monitoring, small improvements. Inherited systems get an audit and documentation first; without them every change is a gamble.",
          inc: ["availability and error monitoring", "fixes, security updates", "backups, restore checks", "planned improvements", "audit and documentation"],
          res: "System works. Team knows how it's built." }
      ]
    },
    ru: {
      labels: ["Что входит:", "Результат:"],
      items: [
        { t: "Разработка концепции ИТ решения",
          lead: "Определяем задачу системы и переводим её в требования для бизнеса и разработчиков.",
          text: "Самые дорогие ошибки делают до кода. Поэтому сначала опрашиваем тех, кто будет работать с системой: бухгалтерию, склад, менеджеров. Если подходит готовый продукт, рекомендуем его вместо разработки.",
          inc: ["интервью, разбор процессов", "бизнес-требования, сценарии", "готовое решение или разработка", "ТЗ: сроки и бюджет по этапам"],
          res: "Документ, по которому любая команда оценит и начнёт работу." },
        { t: "Разработка SaaS решений",
          lead: "SaaS-платформы: от версии для пилотных клиентов до сервиса с тарифами и кабинетами.",
          text: "Ценность SaaS в том, что клиент регистрируется, платит и работает сам. Мультитенантность, биллинг и права закладываются сразу: потом это в разы дороже. Первая версия выходит рано.",
          inc: ["мультитенантность, изоляция данных", "регистрация, тарифы, оплата", "кабинеты, роли, права", "интеграции, открытое API", "масштабирование"],
          res: "Продукт для продажи по подписке, без ручного внедрения у каждого клиента." },
        { t: "Web-разработка",
          lead: "Корпоративные сайты, маркетплейсы, магазины, бронирование, внутренние веб-сервисы.",
          text: "Критерий — заявки и заказы. Результат согласуется заранее, аналитика ставится к запуску. Платформа выбирается по задаче: лендингу тяжёлая не нужна, маркетплейсу мало конструктора.",
          inc: ["прототип, дизайн", "frontend, backend, админка", "оплата, доставка, CRM, учёт", "SEO, скорость, аналитика", "запуск, сопровождение"],
          res: "Веб-сервис с видимой отдачей в заявках и деньгах." },
        { t: "Мобильные приложения",
          lead: "iOS и Android, серверная часть, админ-панель.",
          text: "Приложение нужно, если клиент возвращается: повторные заказы, статусы, бонусы. Иначе дешевле мобильный сайт — сообщим до начала работ. Нативно или кроссплатформенно — по бюджету и потребности в камере, геолокации, офлайне.",
          inc: ["приложения iOS и Android", "сервер и API", "админка: контент, заказы, пользователи", "push, аналитика", "публикация в App Store, Google Play"],
          res: "Приложение прошло модерацию; управляется без разработчиков." },
        { t: "Решения с искусственным интеллектом",
          lead: "Автоматизация бизнес-процессов с помощью ИИ-агентов на базе ИИ и машинного обучения.",
          text: "Многие задачи «для нейросети» решает обычная автоматизация. ИИ оправдан там, где люди часами разбирают письма, документы, обращения. Сначала пилот на ваших данных и цифры точности.",
          inc: ["ИИ-агенты: разбор заявок, заполнение CRM, ответы клиентам", "чат-боты, ассистенты", "распознавание документов", "классификация, поиск по базе знаний", "прогноз спроса, анализ данных", "пилот с оценкой качества"],
          res: "Процесс переходит от людей к системе. Контроль остаётся за человеком." },
        { t: "Разработка CRM и ERP",
          lead: "CRM и ERP под ваши процессы.",
          text: "Коробка подходит для стандартного процесса. Если менеджеры работают в таблицах в обход системы, своя дешевле. Данные переносятся, запуск по отделам, без остановки работы.",
          inc: ["продажи, склад, производство, финансы", "роли, права, журнал действий", "отчёты, дашборды", "перенос из таблиц и старых систем", "бухгалтерия, телефония, почта"],
          res: "Одна система вместо таблиц. Состояние дел видно без еженедельных отчётов." },
        { t: "Облачные решения",
          lead: "Перенос инфраструктуры в AWS — целиком или частями. Контроль работы и расходов.",
          text: "Облако не всегда дешевле своего сервера. Выгодно, когда нагрузка скачет, нужна отказоустойчивость или окружения должны подниматься за минуты. Порядок: аудит, расчёт, поэтапный перенос с планом отката.",
          inc: ["аудит, расчёт стоимости", "архитектура AWS, план миграции", "серверы, базы, файлы", "бэкапы, мониторинг", "оптимизация расходов"],
          res: "Инфраструктура переживает отказ сервера. Счёт понятен." },
        { t: "Инфраструктура компании на базе Red Hat",
          lead: "Инфраструктура на Red Hat: Red Hat Enterprise Linux на серверах, OpenShift, автоматизация Ansible.",
          text: "Для систем, которые должны работать годами и проходить аудит. Подписка — это поддержка производителя и десятилетний жизненный цикл RHEL. Конфигурация серверов хранится в Ansible: сервер пересобирается по сценарию, а не по памяти. Red Hat — наш партнёр: поможем с подписками и поддержкой производителя.",
          inc: ["аудит серверов, план перехода", "RHEL, обновления через Satellite", "OpenShift для приложений", "автоматизация на Ansible", "Identity Management: учётные записи и доступ", "мониторинг, бэкапы, документация"],
          res: "Инфраструктуру можно проверить, повторить и передать другой команде." },
        { t: "API и интеграции",
          lead: "API для ваших систем и связь с внешними сервисами.",
          text: "Типичная проблема — двойной ввод: заказы перебивают вручную, оплаты сверяют в таблицах. Интеграция убирает работу и ошибки. Мониторинг обязателен: интеграции ломаются молча, когда партнёр меняет API.",
          inc: ["проектирование, документация API", "оплата, доставка, CRM, учёт", "обмен между внутренними системами", "очереди, повторы при сбоях", "мониторинг, оповещения"],
          res: "Ввод один раз. Дальше данные идут сами." },
        { t: "Техническая поддержка",
          lead: "Поддержка и развитие ИТ-систем, включая чужие.",
          text: "Кроме исправлений — обновления безопасности, мониторинг, мелкие доработки. Для чужих систем сначала аудит и документация, иначе любая правка — лотерея.",
          inc: ["мониторинг доступности, ошибок", "исправления, обновления безопасности", "бэкапы, проверка восстановления", "доработки по плану", "аудит и документация"],
          res: "Система работает. Устройство известно команде." }
      ]
    },
    de: {
      labels: ["Leistungsumfang:", "Ergebnis:"],
      items: [
        { t: "Konzeption von IT-Lösungen",
          lead: "Wir klären, wofür das System da ist, und übersetzen das in Anforderungen für Fachbereich und Entwickler.",
          text: "Die teuersten Fehler passieren vor der ersten Zeile Code. Deshalb befragen wir zuerst die künftigen Nutzer: Buchhaltung, Lager, Vertrieb. Passt ein fertiges Produkt, empfehlen wir es statt einer Eigenentwicklung.",
          inc: ["Interviews, Prozessanalyse", "Fachanforderungen, Szenarien", "Standardprodukt oder Eigenentwicklung", "Pflichtenheft: Zeit und Budget je Phase"],
          res: "Ein Dokument, mit dem jedes Team schätzen und loslegen kann." },
        { t: "SaaS-Entwicklung",
          lead: "SaaS-Plattformen: von der Version für Pilotkunden bis zum Dienst mit Tarifen und Kundenbereichen.",
          text: "SaaS rechnet sich, wenn Kunden sich selbst registrieren, bezahlen und arbeiten. Mandantenfähigkeit, Abrechnung und Rechte werden von Anfang an eingeplant – nachrüsten kostet ein Vielfaches. Die erste Version geht früh live.",
          inc: ["Mandantenfähigkeit, Datentrennung", "Registrierung, Tarife, Zahlung", "Kundenbereiche, Rollen, Rechte", "Integrationen, offene API", "Skalierung"],
          res: "Ein Produkt im Abo-Verkauf, ohne manuelle Einführung bei jedem Kunden." },
        { t: "Webentwicklung",
          lead: "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme, interne Webdienste.",
          text: "Maßstab sind Anfragen und Bestellungen. Das Ziel wird vorab vereinbart, die Analytik läuft ab dem Start. Plattform nach Aufgabe: keine schwere Technik für eine Landingpage, kein Baukasten für einen Marktplatz.",
          inc: ["Prototyp, Design", "Frontend, Backend, Admin-Bereich", "Zahlung, Versand, CRM, Buchhaltung", "SEO, Geschwindigkeit, Analytik", "Start, Betreuung"],
          res: "Ein Webdienst mit messbarem Ertrag in Anfragen und Umsatz." },
        { t: "Mobile Apps",
          lead: "iOS und Android, Serverteil, Admin-Panel.",
          text: "Eine App lohnt sich, wenn Kunden wiederkommen: Nachbestellungen, Statusmeldungen, Bonuspunkte. Sonst ist eine mobile Website günstiger – das sagen wir Ihnen vor Projektbeginn. Nativ oder plattformübergreifend: je nach Budget und Bedarf an Kamera, Standort, Offline-Betrieb.",
          inc: ["Apps für iOS und Android", "Server und API", "Admin: Inhalte, Bestellungen, Nutzer", "Push, Analytik", "Veröffentlichung im App Store und bei Google Play"],
          res: "Die App hat die Store-Prüfung bestanden und läuft ohne Entwickler." },
        { t: "KI-Lösungen",
          lead: "Automatisierung von Geschäftsprozessen mit KI-Agenten auf Basis von KI und maschinellem Lernen.",
          text: "Viele Aufgaben „für ein neuronales Netz“ löst schlichte Automatisierung. KI lohnt sich dort, wo Menschen stundenlang E-Mails, Dokumente und Anfragen sortieren. Zuerst kommen ein Pilot mit Ihren Daten und Zahlen zur Genauigkeit.",
          inc: ["KI-Agenten: Anfragen sortieren, CRM befüllen, Kunden antworten", "Chatbots, Assistenten", "Dokumentenerkennung", "Klassifizierung, Suche in der Wissensdatenbank", "Bedarfsprognosen, Datenanalyse", "Pilot mit Qualitätsbewertung"],
          res: "Ein Prozess geht vom Menschen auf das System über. Die Kontrolle bleibt beim Menschen." },
        { t: "CRM- und ERP-Entwicklung",
          lead: "CRM und ERP passend zu Ihren Prozessen.",
          text: "Standardsoftware passt zu Standardprozessen. Arbeiten Ihre Mitarbeiter am System vorbei in Tabellen, ist ein eigenes System günstiger. Daten werden übernommen, die Einführung läuft abteilungsweise, ohne den Betrieb anzuhalten.",
          inc: ["Vertrieb, Lager, Produktion, Finanzen", "Rollen, Rechte, Änderungsprotokoll", "Berichte, Dashboards", "Übernahme aus Tabellen und Altsystemen", "Buchhaltung, Telefonie, E-Mail"],
          res: "Ein System statt Tabellen. Der Stand ist ohne Wochenberichte sichtbar." },
        { t: "Cloud-Lösungen",
          lead: "Umzug der Infrastruktur zu AWS – komplett oder in Teilen. Betrieb und Kosten unter Kontrolle.",
          text: "Die Cloud ist nicht immer günstiger als eigene Server. Sie lohnt sich bei schwankender Last, wenn Ausfallsicherheit gefragt ist oder Umgebungen in Minuten bereitstehen müssen. Ablauf: Audit, Kalkulation, schrittweiser Umzug mit Rückfallplan.",
          inc: ["Audit, Kostenkalkulation", "AWS-Architektur, Migrationsplan", "Server, Datenbanken, Dateien", "Backups, Monitoring", "Kostenoptimierung"],
          res: "Die Infrastruktur übersteht einen Serverausfall. Die Rechnung ist nachvollziehbar." },
        { t: "Unternehmensinfrastruktur auf Red Hat",
          lead: "Infrastruktur auf Red Hat: Red Hat Enterprise Linux auf den Servern, OpenShift, Automatisierung mit Ansible.",
          text: "Für Systeme, die jahrelang laufen und Audits bestehen müssen. Die Subskription bedeutet Herstellersupport und den zehnjährigen Lebenszyklus von RHEL. Die Serverkonfiguration liegt in Ansible: Ein Server wird nach Playbook neu aufgebaut, nicht aus dem Gedächtnis. Red Hat ist unser Partner: Wir helfen bei Subskriptionen und Herstellersupport.",
          inc: ["Server-Audit, Migrationsplan", "RHEL, Updates über Satellite", "OpenShift für Anwendungen", "Automatisierung mit Ansible", "Identity Management: Konten und Zugriffe", "Monitoring, Backups, Dokumentation"],
          res: "Eine Infrastruktur, die sich prüfen, reproduzieren und an ein anderes Team übergeben lässt." },
        { t: "APIs und Integrationen",
          lead: "APIs für Ihre Systeme und Anbindung externer Dienste.",
          text: "Typisches Problem: doppelte Erfassung. Bestellungen werden abgetippt, Zahlungen in Tabellen abgeglichen. Eine Integration spart die Arbeit und die Fehler. Monitoring ist Pflicht: Schnittstellen fallen still aus, wenn ein Partner seine API ändert.",
          inc: ["API-Design, Dokumentation", "Zahlung, Versand, CRM, Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen, Wiederholung bei Fehlern", "Monitoring, Benachrichtigungen"],
          res: "Daten werden einmal erfasst und fließen dann von selbst weiter." },
        { t: "Technischer Support",
          lead: "Betreuung und Weiterentwicklung von IT-Systemen, auch von fremden.",
          text: "Neben Fehlerbehebungen: Sicherheitsupdates, Monitoring, kleine Verbesserungen. Übernommene Systeme bekommen zuerst ein Audit und eine Dokumentation, sonst ist jede Änderung ein Glücksspiel.",
          inc: ["Monitoring von Verfügbarkeit und Fehlern", "Fehlerbehebung, Sicherheitsupdates", "Backups, Wiederherstellungstests", "geplante Weiterentwicklung", "Audit und Dokumentation"],
          res: "Das System läuft. Das Team kennt seinen Aufbau." }
      ]
    },
    fr: {
      labels: ["Ce qui est inclus :", "Résultat :"],
      items: [
        { t: "Conception de solutions informatiques",
          lead: "Nous définissons le rôle du système et le traduisons en exigences pour les métiers et les développeurs.",
          text: "Les erreurs les plus coûteuses se commettent avant le code. Nous interrogeons donc d'abord les futurs utilisateurs : comptabilité, entrepôt, commerciaux. Si un produit existant convient, nous le recommandons plutôt qu'un développement.",
          inc: ["entretiens, analyse des processus", "exigences métier, scénarios", "produit existant ou sur mesure", "cahier des charges : délais et budget par phase"],
          res: "Un document que toute équipe peut chiffrer et mettre en route." },
        { t: "Développement SaaS",
          lead: "Plateformes SaaS : de la version pour clients pilotes au service avec offres et espaces clients.",
          text: "Un SaaS rapporte quand le client s'inscrit, paie et travaille seul. Multi-locataire, facturation et droits sont prévus dès le départ : les ajouter après coup coûte plusieurs fois plus cher. La première version sort tôt.",
          inc: ["multi-locataire, isolation des données", "inscription, offres, paiement", "espaces clients, rôles, droits", "intégrations, API publique", "montée en charge"],
          res: "Un produit vendu par abonnement, sans déploiement manuel chez chaque client." },
        { t: "Développement web",
          lead: "Sites d'entreprise, places de marché, boutiques, réservation, outils web internes.",
          text: "Critère : demandes et commandes. L'objectif est fixé d'avance, l'analytique est en place au lancement. Plateforme selon la tâche : pas d'artillerie lourde pour une page d'atterrissage, pas de constructeur de sites pour une place de marché.",
          inc: ["prototype, design", "frontend, backend, administration", "paiement, livraison, CRM, comptabilité", "SEO, vitesse, analytique", "lancement, maintenance"],
          res: "Un service web au rendement visible en demandes et en chiffre d'affaires." },
        { t: "Applications mobiles",
          lead: "iOS et Android, partie serveur, panneau d'administration.",
          text: "Une application se justifie si le client revient : commandes répétées, suivi, points de fidélité. Sinon, un site mobile coûte moins cher, et nous vous le dirons avant de commencer. Natif ou multiplateforme : selon le budget et le besoin en caméra, géolocalisation, hors ligne.",
          inc: ["applications iOS et Android", "serveur et API", "administration : contenu, commandes, utilisateurs", "notifications push, analytique", "publication sur l'App Store et Google Play"],
          res: "Une application validée par les stores et gérée sans développeurs." },
        { t: "Solutions d'intelligence artificielle",
          lead: "Automatisation des processus métier par des agents IA, fondés sur l'IA et l'apprentissage automatique.",
          text: "Beaucoup de tâches « pour réseau de neurones » relèvent de l'automatisation classique. L'IA se justifie là où des personnes passent des heures à trier e-mails, documents et demandes. D'abord un pilote sur vos données, avec des chiffres de précision.",
          inc: ["agents IA : tri des demandes, saisie CRM, réponses aux clients", "chatbots, assistants", "reconnaissance de documents", "classification, recherche dans la base de connaissances", "prévision de la demande, analyse de données", "pilote avec évaluation de la qualité"],
          res: "Un processus passe des personnes au système. Le contrôle reste humain." },
        { t: "Développement CRM et ERP",
          lead: "CRM et ERP adaptés à vos processus.",
          text: "Un logiciel standard convient à un processus standard. Si vos équipes contournent le système avec des tableurs, un système sur mesure revient moins cher. Données migrées, déploiement service par service, sans arrêt de l'activité.",
          inc: ["ventes, stock, production, finances", "rôles, droits, journal des actions", "rapports, tableaux de bord", "reprise depuis tableurs et anciens systèmes", "comptabilité, téléphonie, e-mail"],
          res: "Un seul système au lieu des tableurs. L'état des affaires se voit sans rapport hebdomadaire." },
        { t: "Solutions cloud",
          lead: "Migration de l'infrastructure vers AWS, totale ou partielle. Fonctionnement et coûts sous contrôle.",
          text: "Le cloud n'est pas toujours moins cher que vos propres serveurs. Il est rentable quand la charge varie fortement, que la tolérance aux pannes est requise ou que des environnements doivent démarrer en quelques minutes. Ordre : audit, chiffrage, migration par étapes avec plan de retour arrière.",
          inc: ["audit, estimation des coûts", "architecture AWS, plan de migration", "serveurs, bases de données, fichiers", "sauvegardes, supervision", "optimisation des coûts"],
          res: "Une infrastructure qui survit à une panne de serveur. Une facture lisible." },
        { t: "Infrastructure d'entreprise sous Red Hat",
          lead: "Infrastructure sous Red Hat : Red Hat Enterprise Linux sur les serveurs, OpenShift, automatisation Ansible.",
          text: "Pour des systèmes qui doivent tourner des années et passer des audits. L'abonnement, c'est le support de l'éditeur et le cycle de vie de dix ans de RHEL. La configuration des serveurs vit dans Ansible : un serveur se reconstruit à partir d'un playbook, pas de mémoire. Red Hat est notre partenaire : nous vous aidons pour les abonnements et le support éditeur.",
          inc: ["audit des serveurs, plan de migration", "RHEL, mises à jour via Satellite", "OpenShift pour les applications", "automatisation avec Ansible", "Identity Management : comptes et accès", "supervision, sauvegardes, documentation"],
          res: "Une infrastructure qu'on peut auditer, reproduire et confier à une autre équipe." },
        { t: "API et intégrations",
          lead: "Des API pour vos systèmes, des liens avec les services externes.",
          text: "Problème typique : la double saisie. Commandes retapées à la main, paiements rapprochés dans des tableurs. L'intégration supprime ce travail et les erreurs. La supervision est obligatoire : une intégration casse en silence quand un partenaire modifie son API.",
          inc: ["conception et documentation d'API", "paiement, livraison, CRM, comptabilité", "échanges entre systèmes internes", "files d'attente, relances en cas d'échec", "supervision, alertes"],
          res: "Les données sont saisies une fois, puis circulent seules." },
        { t: "Support technique",
          lead: "Maintenance et évolution de systèmes informatiques, y compris ceux faits par d'autres.",
          text: "Au-delà des correctifs : mises à jour de sécurité, supervision, petites évolutions. Un système hérité passe d'abord par un audit et une documentation, sinon chaque modification est un pari.",
          inc: ["surveillance de la disponibilité et des erreurs", "correctifs, mises à jour de sécurité", "sauvegardes, tests de restauration", "évolutions planifiées", "audit et documentation"],
          res: "Le système fonctionne. L'équipe sait comment il est construit." }
      ]
    },
    es: {
      labels: ["Qué incluye:", "Resultado:"],
      items: [
        { t: "Concepto de la solución de TI",
          lead: "Definimos para qué sirve el sistema y lo convertimos en requisitos para el negocio y los desarrolladores.",
          text: "Los errores más caros se cometen antes del código. Por eso primero entrevistamos a quienes usarán el sistema: contabilidad, almacén, comerciales. Si un producto existente encaja, lo recomendamos en lugar de desarrollar.",
          inc: ["entrevistas, análisis de procesos", "requisitos de negocio, escenarios", "producto existente o desarrollo propio", "especificación: plazos y presupuesto por fases"],
          res: "Un documento con el que cualquier equipo puede presupuestar y empezar." },
        { t: "Desarrollo SaaS",
          lead: "Plataformas SaaS: desde la versión para clientes piloto hasta un servicio con planes y áreas de cliente.",
          text: "Un SaaS rinde cuando el cliente se registra, paga y trabaja por su cuenta. La multitenencia, la facturación y los permisos se diseñan desde el principio: añadirlos después cuesta varias veces más. La primera versión sale pronto.",
          inc: ["multitenencia, aislamiento de datos", "registro, planes, pagos", "áreas de cliente, roles, permisos", "integraciones, API pública", "escalado"],
          res: "Un producto que se vende por suscripción, sin implantación manual en cada cliente." },
        { t: "Desarrollo web",
          lead: "Webs corporativas, marketplaces, tiendas, reservas, herramientas web internas.",
          text: "El criterio son las solicitudes y los pedidos. El objetivo se acuerda de antemano y la analítica funciona desde el lanzamiento. Plataforma según la tarea: nada pesado para una landing, nada de constructores para un marketplace.",
          inc: ["prototipo, diseño", "frontend, backend, panel de administración", "pagos, envíos, CRM, contabilidad", "SEO, velocidad, analítica", "lanzamiento, mantenimiento"],
          res: "Un servicio web con retorno visible en solicitudes y dinero." },
        { t: "Aplicaciones móviles",
          lead: "iOS y Android, parte de servidor, panel de administración.",
          text: "Una app compensa si el cliente vuelve: pedidos repetidos, seguimiento, puntos. Si no, una web móvil sale más barata, y se lo diremos antes de empezar. Nativa o multiplataforma: según el presupuesto y la necesidad de cámara, geolocalización o modo sin conexión.",
          inc: ["apps para iOS y Android", "servidor y API", "administración: contenido, pedidos, usuarios", "push, analítica", "publicación en App Store y Google Play"],
          res: "Una app que supera la revisión de las tiendas y funciona sin desarrolladores." },
        { t: "Soluciones con inteligencia artificial",
          lead: "Automatización de procesos de negocio con agentes de IA, basados en IA y aprendizaje automático.",
          text: "Muchas tareas «para una red neuronal» se resuelven con automatización corriente. La IA tiene sentido donde las personas pasan horas clasificando correos, documentos y solicitudes. Primero, un piloto con sus datos y cifras de precisión.",
          inc: ["agentes de IA: clasificar solicitudes, rellenar el CRM, responder a clientes", "chatbots, asistentes", "reconocimiento de documentos", "clasificación, búsqueda en la base de conocimiento", "previsión de demanda, análisis de datos", "piloto con evaluación de calidad"],
          res: "Un proceso pasa de las personas al sistema. El control sigue siendo humano." },
        { t: "Desarrollo de CRM y ERP",
          lead: "CRM y ERP a la medida de sus procesos.",
          text: "El software estándar sirve para un proceso estándar. Si su equipo trabaja en hojas de cálculo esquivando el sistema, uno propio sale más barato. Los datos se migran y la implantación va por departamentos, sin parar la actividad.",
          inc: ["ventas, almacén, producción, finanzas", "roles, permisos, registro de actividad", "informes, paneles", "migración desde hojas de cálculo y sistemas antiguos", "contabilidad, telefonía, correo"],
          res: "Un solo sistema en lugar de hojas de cálculo. El estado de las cosas se ve sin informes semanales." },
        { t: "Soluciones en la nube",
          lead: "Migración de la infraestructura a AWS, completa o por partes. Control del funcionamiento y del gasto.",
          text: "La nube no siempre es más barata que los servidores propios. Compensa cuando la carga fluctúa, se necesita tolerancia a fallos o los entornos deben levantarse en minutos. Orden: auditoría, cálculo, migración por etapas con plan de vuelta atrás.",
          inc: ["auditoría, cálculo de costes", "arquitectura AWS, plan de migración", "servidores, bases de datos, archivos", "copias de seguridad, monitorización", "optimización de costes"],
          res: "Una infraestructura que sobrevive a la caída de un servidor. Una factura comprensible." },
        { t: "Infraestructura empresarial con Red Hat",
          lead: "Infraestructura con Red Hat: Red Hat Enterprise Linux en los servidores, OpenShift, automatización con Ansible.",
          text: "Para sistemas que deben funcionar durante años y superar auditorías. La suscripción significa soporte del fabricante y el ciclo de vida de diez años de RHEL. La configuración de los servidores vive en Ansible: un servidor se reconstruye con un playbook, no de memoria. Red Hat es nuestro socio: le ayudamos con suscripciones y soporte del fabricante.",
          inc: ["auditoría de servidores, plan de migración", "RHEL, actualizaciones vía Satellite", "OpenShift para aplicaciones", "automatización con Ansible", "Identity Management: cuentas y accesos", "monitorización, copias de seguridad, documentación"],
          res: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo." },
        { t: "API e integraciones",
          lead: "API para sus sistemas y conexión con servicios externos.",
          text: "Problema típico: la doble entrada. Pedidos que se vuelven a teclear, pagos que se cuadran en hojas de cálculo. La integración elimina ese trabajo y los errores. La monitorización es obligatoria: las integraciones fallan en silencio cuando un socio cambia su API.",
          inc: ["diseño y documentación de API", "pagos, envíos, CRM, contabilidad", "intercambio entre sistemas internos", "colas, reintentos ante fallos", "monitorización, alertas"],
          res: "Los datos se introducen una vez y luego fluyen solos." },
        { t: "Soporte técnico",
          lead: "Soporte y evolución de sistemas de TI, también de terceros.",
          text: "Además de correcciones: actualizaciones de seguridad, monitorización, pequeñas mejoras. Los sistemas heredados pasan primero por auditoría y documentación; si no, cada cambio es una lotería.",
          inc: ["monitorización de disponibilidad y errores", "correcciones, actualizaciones de seguridad", "copias de seguridad, pruebas de restauración", "mejoras planificadas", "auditoría y documentación"],
          res: "El sistema funciona. El equipo sabe cómo está construido." }
      ]
    },
    pt: {
      labels: ["O que inclui:", "Resultado:"],
      items: [
        { t: "Conceção de soluções de TI",
          lead: "Definimos para que serve o sistema e traduzimos isso em requisitos para o negócio e para os programadores.",
          text: "Os erros mais caros acontecem antes do código. Por isso, começamos por entrevistar quem vai usar o sistema: contabilidade, armazém, comerciais. Se um produto existente servir, recomendamo-lo em vez de desenvolver.",
          inc: ["entrevistas, análise de processos", "requisitos de negócio, cenários", "produto existente ou desenvolvimento", "caderno de encargos: prazos e orçamento por fase"],
          res: "Um documento com o qual qualquer equipa consegue orçamentar e arrancar." },
        { t: "Desenvolvimento SaaS",
          lead: "Plataformas SaaS: da versão para clientes-piloto a um serviço com planos e áreas de cliente.",
          text: "Um SaaS compensa quando o cliente se regista, paga e trabalha sozinho. Multi-inquilino, faturação e permissões ficam previstos desde o início: acrescentá-los depois custa várias vezes mais. A primeira versão sai cedo.",
          inc: ["multi-inquilino, isolamento de dados", "registo, planos, pagamentos", "áreas de cliente, perfis, permissões", "integrações, API pública", "escalabilidade"],
          res: "Um produto vendido por subscrição, sem implementação manual em cada cliente." },
        { t: "Desenvolvimento web",
          lead: "Sites empresariais, marketplaces, lojas online, reservas, ferramentas web internas.",
          text: "O critério são pedidos e encomendas. O objetivo é acordado à partida e a análise fica ativa no lançamento. Plataforma conforme a tarefa: nada pesado para uma landing page, nada de construtores para um marketplace.",
          inc: ["protótipo, design", "frontend, backend, backoffice", "pagamentos, entregas, CRM, contabilidade", "SEO, velocidade, análise", "lançamento, manutenção"],
          res: "Um serviço web com retorno visível em pedidos e dinheiro." },
        { t: "Aplicações móveis",
          lead: "iOS e Android, parte de servidor, painel de administração.",
          text: "Uma aplicação compensa se o cliente volta: encomendas repetidas, estados, pontos. Caso contrário, um site móvel fica mais barato, e dizemos-lho antes de começar. Nativa ou multiplataforma: conforme o orçamento e a necessidade de câmara, localização, modo offline.",
          inc: ["aplicações iOS e Android", "servidor e API", "backoffice: conteúdos, encomendas, utilizadores", "push, análise", "publicação na App Store e no Google Play"],
          res: "Uma aplicação aprovada pelas lojas e gerida sem programadores." },
        { t: "Soluções com inteligência artificial",
          lead: "Automatização de processos de negócio com agentes de IA, assentes em IA e aprendizagem automática.",
          text: "Muitas tarefas «para uma rede neuronal» resolvem-se com automatização comum. A IA justifica-se onde há pessoas a passar horas a triar e-mails, documentos e pedidos. Primeiro, um piloto com os seus dados e números de precisão.",
          inc: ["agentes de IA: triagem de pedidos, registo no CRM, respostas a clientes", "chatbots, assistentes", "reconhecimento de documentos", "classificação, pesquisa na base de conhecimento", "previsão da procura, análise de dados", "piloto com avaliação de qualidade"],
          res: "Um processo passa das pessoas para o sistema. O controlo continua humano." },
        { t: "Desenvolvimento de CRM e ERP",
          lead: "CRM e ERP à medida dos seus processos.",
          text: "Software standard serve um processo standard. Se a equipa contorna o sistema com folhas de cálculo, um sistema próprio sai mais barato. Os dados são migrados e a implementação faz-se por departamento, sem parar o trabalho.",
          inc: ["vendas, armazém, produção, finanças", "perfis, permissões, registo de ações", "relatórios, dashboards", "migração de folhas de cálculo e sistemas antigos", "contabilidade, telefonia, e-mail"],
          res: "Um só sistema em vez de folhas de cálculo. A situação vê-se sem relatórios semanais." },
        { t: "Soluções na cloud",
          lead: "Migração da infraestrutura para a AWS, total ou parcial. Funcionamento e custos sob controlo.",
          text: "A cloud nem sempre é mais barata do que servidores próprios. Compensa quando a carga oscila, quando é precisa tolerância a falhas ou quando os ambientes têm de arrancar em minutos. Ordem: auditoria, cálculo, migração faseada com plano de reversão.",
          inc: ["auditoria, cálculo de custos", "arquitetura AWS, plano de migração", "servidores, bases de dados, ficheiros", "cópias de segurança, monitorização", "otimização de custos"],
          res: "Uma infraestrutura que sobrevive à falha de um servidor. Uma fatura que se percebe." },
        { t: "Infraestrutura empresarial em Red Hat",
          lead: "Infraestrutura em Red Hat: Red Hat Enterprise Linux nos servidores, OpenShift, automatização com Ansible.",
          text: "Para sistemas que têm de funcionar durante anos e passar auditorias. A subscrição significa suporte do fabricante e o ciclo de vida de dez anos do RHEL. A configuração dos servidores fica no Ansible: um servidor é reconstruído a partir de um playbook, não de memória. A Red Hat é nossa parceira: ajudamos com subscrições e suporte do fabricante.",
          inc: ["auditoria de servidores, plano de migração", "RHEL, atualizações via Satellite", "OpenShift para aplicações", "automatização com Ansible", "Identity Management: contas e acessos", "monitorização, cópias de segurança, documentação"],
          res: "Uma infraestrutura que pode ser auditada, reproduzida e entregue a outra equipa." },
        { t: "APIs e integrações",
          lead: "APIs para os seus sistemas e ligação a serviços externos.",
          text: "Problema típico: introdução dupla. Encomendas reescritas à mão, pagamentos conferidos em folhas de cálculo. A integração elimina esse trabalho e os erros. A monitorização é obrigatória: as integrações falham em silêncio quando um parceiro altera a sua API.",
          inc: ["desenho e documentação de API", "pagamentos, entregas, CRM, contabilidade", "troca de dados entre sistemas internos", "filas, novas tentativas em caso de falha", "monitorização, alertas"],
          res: "Os dados são introduzidos uma vez e depois seguem sozinhos." },
        { t: "Suporte técnico",
          lead: "Suporte e evolução de sistemas de TI, incluindo os de terceiros.",
          text: "Além das correções: atualizações de segurança, monitorização, pequenas melhorias. Sistemas herdados passam primeiro por auditoria e documentação; caso contrário, cada alteração é uma lotaria.",
          inc: ["monitorização de disponibilidade e erros", "correções, atualizações de segurança", "cópias de segurança, testes de reposição", "melhorias planeadas", "auditoria e documentação"],
          res: "O sistema funciona. A equipa sabe como está construído." }
      ]
    },
    it: {
      labels: ["Cosa comprende:", "Risultato:"],
      items: [
        { t: "Ideazione della soluzione IT",
          lead: "Definiamo a cosa serve il sistema e lo traduciamo in requisiti per il business e per gli sviluppatori.",
          text: "Gli errori più costosi si fanno prima del codice. Per questo intervistiamo prima chi userà il sistema: contabilità, magazzino, commerciali. Se un prodotto esistente va bene, lo consigliamo al posto dello sviluppo.",
          inc: ["interviste, analisi dei processi", "requisiti di business, scenari", "prodotto pronto o sviluppo su misura", "capitolato: tempi e budget per fase"],
          res: "Un documento con cui qualsiasi team può fare una stima e partire." },
        { t: "Sviluppo SaaS",
          lead: "Piattaforme SaaS: dalla versione per i clienti pilota al servizio con piani e aree riservate.",
          text: "Un SaaS rende quando il cliente si registra, paga e lavora in autonomia. Multi-tenancy, fatturazione e permessi si progettano subito: aggiungerli dopo costa molte volte di più. La prima versione esce presto.",
          inc: ["multi-tenancy, isolamento dei dati", "registrazione, piani, pagamenti", "aree riservate, ruoli, permessi", "integrazioni, API pubblica", "scalabilità"],
          res: "Un prodotto venduto in abbonamento, senza installazione manuale presso ogni cliente." },
        { t: "Sviluppo web",
          lead: "Siti aziendali, marketplace, negozi online, prenotazioni, strumenti web interni.",
          text: "Il criterio sono richieste e ordini. L'obiettivo si concorda prima, l'analisi è attiva dal lancio. Piattaforma secondo il compito: niente di pesante per una landing page, niente site builder per un marketplace.",
          inc: ["prototipo, design", "frontend, backend, pannello di amministrazione", "pagamenti, spedizioni, CRM, contabilità", "SEO, velocità, analisi", "lancio, assistenza"],
          res: "Un servizio web con un ritorno visibile in richieste e fatturato." },
        { t: "App mobili",
          lead: "iOS e Android, parte server, pannello di amministrazione.",
          text: "Un'app conviene se il cliente torna: riordini, stato degli ordini, punti fedeltà. Altrimenti un sito mobile costa meno, e glielo diciamo prima di iniziare. Nativa o multipiattaforma: in base al budget e all'uso di fotocamera, geolocalizzazione, modalità offline.",
          inc: ["app per iOS e Android", "server e API", "amministrazione: contenuti, ordini, utenti", "notifiche push, analisi", "pubblicazione su App Store e Google Play"],
          res: "Un'app che supera la revisione degli store e si gestisce senza sviluppatori." },
        { t: "Soluzioni di intelligenza artificiale",
          lead: "Automazione dei processi aziendali con agenti IA, basati su IA e apprendimento automatico.",
          text: "Molti compiti «da rete neurale» si risolvono con la normale automazione. L'IA ha senso dove le persone passano ore a smistare e-mail, documenti e richieste. Prima un pilota sui Suoi dati, con cifre di accuratezza.",
          inc: ["agenti IA: smistamento richieste, compilazione CRM, risposte ai clienti", "chatbot, assistenti", "riconoscimento di documenti", "classificazione, ricerca nella knowledge base", "previsione della domanda, analisi dei dati", "pilota con valutazione della qualità"],
          res: "Un processo passa dalle persone al sistema. Il controllo resta a una persona." },
        { t: "Sviluppo CRM ed ERP",
          lead: "CRM ed ERP su misura per i Suoi processi.",
          text: "Un software standard va bene per un processo standard. Se il personale aggira il sistema lavorando su fogli di calcolo, un sistema proprio costa meno. I dati vengono migrati, l'avvio procede per reparti, senza fermare il lavoro.",
          inc: ["vendite, magazzino, produzione, finanza", "ruoli, permessi, registro delle attività", "report, dashboard", "migrazione da fogli di calcolo e vecchi sistemi", "contabilità, telefonia, e-mail"],
          res: "Un solo sistema al posto dei fogli di calcolo. La situazione si vede senza report settimanali." },
        { t: "Soluzioni cloud",
          lead: "Migrazione dell'infrastruttura su AWS, totale o parziale. Funzionamento e costi sotto controllo.",
          text: "Il cloud non costa sempre meno dei server propri. Conviene quando il carico oscilla, serve tolleranza ai guasti o gli ambienti devono partire in pochi minuti. Ordine: audit, stima, migrazione a tappe con piano di rollback.",
          inc: ["audit, stima dei costi", "architettura AWS, piano di migrazione", "server, database, file", "backup, monitoraggio", "ottimizzazione dei costi"],
          res: "Un'infrastruttura che sopravvive al guasto di un server. Una fattura comprensibile." },
        { t: "Infrastruttura aziendale su Red Hat",
          lead: "Infrastruttura su Red Hat: Red Hat Enterprise Linux sui server, OpenShift, automazione con Ansible.",
          text: "Per sistemi che devono funzionare per anni e superare gli audit. L'abbonamento significa supporto del produttore e il ciclo di vita decennale di RHEL. La configurazione dei server sta in Ansible: un server si ricostruisce da un playbook, non a memoria. Red Hat è nostro partner: La aiutiamo con abbonamenti e supporto del produttore.",
          inc: ["audit dei server, piano di migrazione", "RHEL, aggiornamenti tramite Satellite", "OpenShift per le applicazioni", "automazione con Ansible", "Identity Management: account e accessi", "monitoraggio, backup, documentazione"],
          res: "Un'infrastruttura che si può verificare, riprodurre e passare a un altro team." },
        { t: "API e integrazioni",
          lead: "API per i Suoi sistemi e collegamento con servizi esterni.",
          text: "Problema tipico: il doppio inserimento. Ordini ribattuti a mano, pagamenti riconciliati su fogli di calcolo. L'integrazione elimina il lavoro e gli errori. Il monitoraggio è obbligatorio: le integrazioni si rompono in silenzio quando un partner cambia la sua API.",
          inc: ["progettazione e documentazione API", "pagamenti, spedizioni, CRM, contabilità", "scambio dati tra sistemi interni", "code, nuovi tentativi in caso di errore", "monitoraggio, avvisi"],
          res: "I dati si inseriscono una volta, poi viaggiano da soli." },
        { t: "Supporto tecnico",
          lead: "Supporto ed evoluzione di sistemi IT, anche sviluppati da altri.",
          text: "Oltre alle correzioni: aggiornamenti di sicurezza, monitoraggio, piccoli miglioramenti. I sistemi ereditati passano prima da audit e documentazione, altrimenti ogni modifica è una lotteria.",
          inc: ["monitoraggio di disponibilità ed errori", "correzioni, aggiornamenti di sicurezza", "backup, test di ripristino", "miglioramenti pianificati", "audit e documentazione"],
          res: "Il sistema funziona. Il team sa com'è costruito." }
      ]
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
  const EXECUTABLE = new Set(["EXE", "COM", "BAT"]);
  const MONITORS = ["ega", "green", "amber"];
  /* Мови й порядок перемикача задає рантайм (AIC.langs) */
  const LANGS = AIC.langs;

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;

  /* Мову вже узгодив рантайм варіантів (window.AIC): адреса сторінки або збережений вибір */
  let lang = store.get("aic-lang");
  if (!LANGS.includes(lang)) lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "uk";
  let monitor = store.get("aic-monitor");
  if (!MONITORS.includes(monitor)) monitor = "ega";
  let sel = 0;
  const log = [];

  const t = () => I18N[lang];
  const fname = (f) => f.name + "." + f.ext;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const describe = (f) => {
    const s = t();
    if (f.kind === "service") return SVC[lang].items[f.i].t;
    if (f.kind === "readme") return s.readmeDesc;
    if (f.kind === "partners") return s.partnersTitle;
    return s.contactTitle;
  };
  const fileText = (f) => {
    const s = t();
    if (f.kind === "service") { const v = SVC[lang].items[f.i]; return [v.t, v.lead, v.text, ...v.inc, v.res].join("\n"); }
    if (f.kind === "readme") return [s.heroTitle, s.heroText, s.heroLead, ...s.phrases].join("\n");
    if (f.kind === "partners") return PARTNERS.join("\n");
    return [s.contactTitle, s.contactText, EMAIL].join("\n");
  };

  /* ---------- Логотип растровим шрифтом 5×5 ---------- */
  const GLYPHS = {
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
  const logo = () => [0, 1, 2, 3, 4]
    .map((r) => [..."ARTINTELLICO"].map((c) => GLYPHS[c][r]).join(" ").replace(/#/g, "█"))
    .join("\n");

  /* ---------- Завантаження ---------- */
  let booting = false;
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((resolve) => {
    if (skipping) return resolve();
    const id = setTimeout(resolve, ms);
    waiters.push(() => { clearTimeout(id); resolve(); });
  });
  const skipBoot = () => { skipping = true; waiters.splice(0).forEach((f) => f()); };

  async function boot() {
    booting = true;
    skipping = false;
    stopTypewriter();
    if (dlg.open) dlg.close();
    if (modes.open) modes.close();
    if (langs.open) langs.close();
    $("nc").hidden = true;
    $("boot").hidden = false;
    $("bootLogo").textContent = logo();
    $("bootSkip").textContent = t().skip;
    const out = $("bootOut");
    let buf = "";
    const put = (s) => { buf += s; out.textContent = buf; };
    const type = async (prompt, cmd) => {
      put(prompt);
      await sleep(300);
      for (const ch of cmd) { put(ch); await sleep(60 + Math.random() * 70); }
      put("\n");
      await sleep(250);
    };

    out.textContent = "";
    put("ArtIntelliCo Modular BIOS v4.06\nCopyright (C) 1987-2026, ArtIntelliCo LLC\n\n");
    await sleep(400);
    put("CPU            : 80286 at 12 MHz\n");
    await sleep(200);
    for (let k = 0; k <= 640 && !skipping; k += 32) {
      out.textContent = buf + "Memory Test    : " + k + "K";
      await sleep(30);
    }
    put("Memory Test    : 640K OK\n");
    await sleep(250);
    put("Fixed Disk 0   : ARTINTEL HDD, 40 MB\n");
    await sleep(200);
    put("Floppy Drive A : 1.2 MB 5¼\"\n\n");
    await sleep(450);
    put("Starting DOS...\n\n");
    await sleep(700);
    await type("C:\\>", "vol");
    put(" Volume in drive C is ARTINTELLICO\n Volume Serial Number is 1986-2026\n\n");
    await sleep(450);
    await type("C:\\>", "cd artintel");
    put("\n");
    await type("C:\\ARTINTEL>", "nc");
    await sleep(350);

    booting = false;
    store.set("aic-booted", "1", sessionStorage);
    $("boot").hidden = true;
    $("nc").hidden = false;
    renderAll();
    if (!coarse) $("cmd").focus();
  }

  /* ---------- Рендер ---------- */
  function renderAll() {
    const s = t();
    document.documentElement.lang = lang;
    document.documentElement.dataset.monitor = monitor;
    document.title = s.title;

    [$("mServices"), $("mPartners"), $("mContacts"), $("mLang"), $("mMonitor"), $("mModes")]
      .forEach((el, i) => { el.textContent = s.menu[i]; });
    $("modesTitle").textContent = s.modesTitle;
    $("modesText").textContent = s.modesText;
    $("modesCancel").textContent = s.cancel;
    $("modesList").innerHTML = AIC.variants.map((v) =>
      `<li><a href="${AIC.url(v.id, lang)}"${v.id === AIC.id ? ' aria-current="page"' : ""}>` +
      `<span class="y">${esc(v.year)}</span><span class="n">${esc(v.name[lang])}</span></a></li>`
    ).join("");
    $("langBtn").textContent = AIC.langCodes[lang];
    $("langBtn").setAttribute("aria-label", s.menu[3] + " " + AIC.langNames[lang]);
    $("langsTitle").textContent = s.langTitle;
    $("langsCancel").textContent = s.cancel;
    $("langsList").innerHTML = LANGS.map((l) =>
      `<li><button type="button" data-lang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ""}>` +
      `<span class="y">${esc(AIC.langCodes[l])}</span><span class="n">${esc(AIC.langNames[l])}</span></button></li>`
    ).join("");
    $("monitorBtn").textContent = s.monitors[monitor];
    $("colName").textContent = s.cols[0];
    $("colDesc").textContent = s.cols[1];

    $("fkeys").innerHTML = s.fkeys.map((label, i) =>
      `<button type="button" data-f="${i + 1}"${label ? "" : " disabled tabindex=\"-1\""}><span class="num">${i + 1}</span><span class="lbl">${esc(label)}</span></button>`
    ).join("");

    $("dlgTitle").textContent = s.contactTitle;
    $("dlgText").textContent = s.contactText;
    $("dlgLabel").textContent = s.emailLabel;
    $("dlgWrite").textContent = s.write;
    $("dlgCopy").textContent = s.copy;
    $("dlgCancel").textContent = s.cancel;

    renderList();
    renderView();
  }

  function renderList() {
    const list = $("list");
    list.innerHTML = FILES.map((f, i) =>
      `<li role="option" id="f${i}" data-i="${i}" aria-selected="${i === sel}" class="${EXECUTABLE.has(f.ext) ? "exe" : ""}">` +
      `<span class="n">${esc(f.name.padEnd(8) + " " + f.ext.padEnd(3))} </span><span class="d">${esc(describe(f))}</span></li>`
    ).join("");
    list.setAttribute("aria-activedescendant", "f" + sel);
    $("mini").textContent = fname(FILES[sel]).padEnd(13) + describe(FILES[sel]);
  }

  function select(i) {
    sel = (i + FILES.length) % FILES.length;
    renderList();
    renderView();
    $("f" + sel).scrollIntoView({ block: "nearest" });
  }

  function renderView() {
    const f = FILES[sel];
    const s = t();
    const view = $("view");
    stopTypewriter();
    $("viewTitle").textContent = fname(f);
    let html = "";

    if (f.kind === "readme") {
      html =
        `<h1>${esc(s.heroTitle)}</h1>` +
        `<p>${esc(s.heroText)}</p>` +
        `<p class="lead">${esc(s.heroLead)} ` +
        (reduced
          ? `<span class="tw">${esc(s.phrases.join(", "))}</span>.`
          : `<span class="sr">${esc(s.phrases.join(", "))}</span><span class="tw" aria-hidden="true" id="tw"></span><span class="cur" aria-hidden="true">_</span>`) +
        `</p>` +
        `<p class="meta hint">${esc(s.hint)}</p>` +
        `<p class="foot">${esc(s.copyright)}<br>${esc(s.legal)}<br>${esc(s.slogan)}<br><a href="${AIC.url("classic", lang)}">${esc(s.source)}</a></p>`;
    } else if (f.kind === "service") {
      const { labels, items } = SVC[lang];
      const v = items[f.i];
      html =
        `<h1>${esc(v.t)}</h1>` +
        `<p class="lead">${esc(v.lead)}</p>` +
        `<p>${esc(v.text)}</p>` +
        `<h2>${esc(labels[0])}</h2>` +
        `<ul>${v.inc.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` +
        `<h2>${esc(labels[1])}</h2>` +
        `<p>${esc(v.res)}</p>` +
        `<div class="rule" aria-hidden="true">${"─".repeat(120)}</div>` +
        `<button type="button" class="ncbtn" data-act="mail">${esc(s.discuss)}</button>`;
    } else if (f.kind === "partners") {
      html =
        `<h1>${esc(s.partnersTitle)}</h1>` +
        `<ul>${PARTNERS.map((p) => `<li>${p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)}</li>`).join("")}</ul>`;
    } else {
      html =
        `<h1>${esc(s.contactTitle)}</h1>` +
        `<p>${esc(s.contactText)}</p>` +
        `<p class="meta">${esc(s.emailLabel)}: <a href="mailto:${EMAIL}">${EMAIL}</a></p>` +
        `<a class="ncbtn" href="mailto:${EMAIL}">${esc(s.write)}</a>` +
        `<button type="button" class="ncbtn" data-act="copy">${esc(s.copy)}</button>`;
    }
    view.innerHTML = html;
    view.scrollTop = 0;
    if ($("tw")) startTypewriter($("tw"));
  }

  /* ---------- Друкарська машинка: «Для вашого бізнесу ми …» ---------- */
  let twTimer = 0;
  function stopTypewriter() { clearTimeout(twTimer); }
  function startTypewriter(el) {
    let i = 0, j = 0, deleting = false;
    const step = () => {
      const p = [...t().phrases[i]];
      if (!deleting) {
        el.textContent = p.slice(0, ++j).join("");
        if (j >= p.length) { deleting = true; twTimer = setTimeout(step, 1900); return; }
        twTimer = setTimeout(step, 55);
      } else {
        el.textContent = p.slice(0, --j).join("");
        if (j <= 0) { deleting = false; i = (i + 1) % t().phrases.length; twTimer = setTimeout(step, 350); return; }
        twTimer = setTimeout(step, 22);
      }
    };
    step();
  }

  /* ---------- Налаштування ---------- */
  function setLang(l) {
    if (!LANGS.includes(l)) return false;
    lang = l;
    store.set("aic-lang", l);
    renderAll();
    return true;
  }
  /* LANG приймає код (DE), рідну чи англійську назву мови (deutsch, german), без діакритики */
  const LANG_ALIASES = { ua: "uk", ukrainian: "uk", english: "en", russian: "ru", german: "de", french: "fr", spanish: "es", portuguese: "pt", italian: "it" };
  const fold = (x) => String(x).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function findLang(arg) {
    const a = fold(arg.trim());
    if (LANGS.includes(a)) return a;
    if (LANG_ALIASES[a]) return LANG_ALIASES[a];
    return LANGS.find((l) => fold(AIC.langNames[l]) === a || fold(AIC.langCodes[l]) === a) || null;
  }
  function cycleMonitor() {
    monitor = MONITORS[(MONITORS.indexOf(monitor) + 1) % MONITORS.length];
    store.set("aic-monitor", monitor);
    document.documentElement.dataset.monitor = monitor;
    $("monitorBtn").textContent = t().monitors[monitor];
  }

  function setActive(side) {
    $("leftPanel").classList.toggle("active", side === "left");
    $("rightPanel").classList.toggle("active", side === "right");
  }

  /* ---------- Діалог ---------- */
  const dlg = $("dlg");
  function openMail() {
    $("dlgNote").textContent = "";
    if (!dlg.open) dlg.showModal();
    $("dlgWrite").focus();
  }
  $("dlgCancel").addEventListener("click", () => dlg.close());
  $("dlgWrite").addEventListener("click", () => setTimeout(() => dlg.close(), 0));
  $("dlgCopy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(EMAIL); $("dlgNote").textContent = t().copied; }
    catch { $("dlgNote").textContent = t().copyFailed; }
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

  /* ---------- Вибір режиму: усі варіанти сайту ---------- */
  const modes = $("modes");
  /* Вибір мови: таке ж вікно, як вибір режиму (F2 або «Мова:» у меню) */
  const langs = $("langs");
  function openLangs() {
    if (!langs.open) langs.showModal();
    (langs.querySelector("[aria-current]") || langs.querySelector("button")).focus();
  }
  $("langsCancel").addEventListener("click", () => langs.close());
  $("langsList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    setLang(b.dataset.lang);
    langs.close();
  });
  langs.addEventListener("click", (e) => { if (e.target === langs) langs.close(); });
  langs.addEventListener("close", () => { if (!coarse) $("cmd").focus(); });

  function openModes() {
    if (!modes.open) modes.showModal();
    (modes.querySelector("[aria-current]") || modes.querySelector("a")).focus();
  }
  $("modesCancel").addEventListener("click", () => modes.close());
  modes.addEventListener("click", (e) => { if (e.target === modes) modes.close(); });
  modes.addEventListener("close", () => { if (!coarse) $("cmd").focus(); });
  const listNav = (box) => (e) => {
    const nav = { ArrowUp: -1, ArrowDown: 1, ArrowLeft: -1, ArrowRight: 1 };
    const items = [...box.querySelectorAll("a, button")];
    const k = items.indexOf(document.activeElement);
    if (e.key in nav) items[(k + nav[e.key] + items.length) % items.length].focus();
    else if (e.key === "Home") items[0].focus();
    else if (e.key === "End") items[items.length - 1].focus();
    else return;
    e.preventDefault();
  };
  modes.addEventListener("keydown", listNav(modes));
  langs.addEventListener("keydown", listNav(langs));
  dlg.addEventListener("close", () => { if (!coarse) $("cmd").focus(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const btns = [...dlg.querySelectorAll(".row > *")];
    const k = btns.indexOf(document.activeElement);
    btns[(k + (e.key === "ArrowRight" ? 1 : btns.length - 1)) % btns.length].focus();
    e.preventDefault();
  });

  /* ---------- Консоль ---------- */
  function consoleShown() { return !$("console").hidden; }
  function showConsole(on) {
    $("console").hidden = !on;
    $("panels").hidden = on;
    if (on) {
      stopTypewriter();
      $("console").textContent = log.join("\n");
      $("console").scrollTop = $("console").scrollHeight;
    } else {
      renderView();
    }
  }
  function print(...lines) { log.push(...lines); }

  function findFile(arg) {
    const a = arg.toUpperCase();
    return FILES.findIndex((f) => fname(f) === a || f.name === a);
  }

  function dir() {
    const d = new Date();
    const date = [d.getDate(), d.getMonth() + 1, d.getFullYear() % 100].map((n) => String(n).padStart(2, "0")).join(".");
    let total = 0;
    print("", " Volume in drive C is ARTINTELLICO", " Volume Serial Number is 1986-2026", " Directory of C:\\ARTINTEL", "");
    FILES.forEach((f) => {
      const size = new TextEncoder().encode(fileText(f)).length;
      total += size;
      print(f.name.padEnd(9) + f.ext.padEnd(4) + String(size).padStart(9) + "  " + date + "   9:00");
    });
    print(String(FILES.length).padStart(9) + " file(s)" + String(total).padStart(15) + " bytes", "");
  }

  function run(raw) {
    const s = t();
    const line = raw.trim();
    print("C:\\ARTINTEL>" + raw);
    if (!line) return;
    const [cmd, ...rest] = line.split(/\s+/);
    const c = cmd.toLowerCase();
    const arg = rest.join(" ");

    if (c === "help" || c === "?") { print(...s.help, ""); showConsole(true); return; }
    if (c === "dir") { dir(); showConsole(true); return; }
    if (c === "cls") { log.length = 0; if (consoleShown()) showConsole(true); return; }
    if (c === "ver") { print("", "ArtIntelliCo DOS Version 4.06", s.copyright, s.legal, "Font: PxPlus IBM VGA 9x16, VileR, int10h.org (CC BY-SA 4.0)", ""); showConsole(true); return; }
    if (c === "mail" || c === "mail.bat") { openMail(); return; }
    if (c === "color" || c === "monitor") { cycleMonitor(); return; }
    if (c === "boot" || c === "reboot") { boot(); return; }
    if (c === "nc") { showConsole(false); return; }
    if (c === "mode" || c === "modes") { openModes(); return; }
    if (c === "classic" || c === "site") { location.href = AIC.url("classic", lang); return; }
    if (c === "command" || c === "command.com" || c === "console") { location.href = AIC.url("dos", lang); return; }
    if (c === "unix" || c === "telnet") { location.href = AIC.url("unix", lang); return; }
    if (c === "apple" || c === "apple2") { location.href = AIC.url("apple", lang); return; }
    if (c === "lisa") { location.href = AIC.url("lisa", lang); return; }
    if (c === "linux" || c === "redhat" || c === "startx") { location.href = AIC.url("linux", lang); return; }
    if (c === "mc") { location.href = AIC.url("mc", lang); return; }
    if (c === "win") { location.href = AIC.url("win31", lang); return; }
    if (c === "ai" || c === "future") { location.href = AIC.url("ai", lang); return; }
    if (c === "exit") { print(s.back, ""); showConsole(true); return; }
    if (c === "lang") {
      if (!arg) { openLangs(); return; }
      if (!setLang(findLang(arg))) {
        print("LANG " + LANGS.map((l) => AIC.langCodes[l]).join("|"), ...LANGS.map((l) => "  " + AIC.langCodes[l].padEnd(4) + AIC.langNames[l]), "");
        showConsole(true);
      }
      return;
    }
    const target = c === "type" ? arg : line;
    const i = findFile(target);
    if (i >= 0) {
      if (FILES[i].kind === "mail" && c !== "type") { openMail(); return; }
      showConsole(false);
      select(i);
      return;
    }
    print(s.bad, "");
    showConsole(true);
  }

  $("cmdForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("cmd");
    const value = input.value;
    input.value = "";
    if (value.trim()) run(value);
    else openSelected();
  });

  function openSelected() {
    const f = FILES[sel];
    if (f.kind === "mail") openMail();
    else if (consoleShown()) showConsole(false);
    else if (matchMedia("(max-width: 760px)").matches) $("rightPanel").scrollIntoView({ block: "start" });
  }

  /* ---------- Функціональні клавіші ---------- */
  function fkey(n) {
    switch (n) {
      case 1: run("help"); break;
      case 2: openLangs(); break;
      case 3: showConsole(false); setActive("right"); $("view").focus(); break;
      case 4: openMail(); break;
      case 5: openModes(); break;
      case 9: cycleMonitor(); break;
      case 10: if (consoleShown()) showConsole(false); else { print(t().back, ""); showConsole(true); } break;
    }
  }

  /* ---------- Події ---------- */
  $("fkeys").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (b && !b.disabled) fkey(Number(b.dataset.f));
  });
  $("list").addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    showConsole(false);
    select(Number(li.dataset.i));
    setActive("left");
  });
  $("list").addEventListener("dblclick", openSelected);
  $("view").addEventListener("click", (e) => {
    if (e.target.closest("[data-act=mail]")) openMail();
    const copyBtn = e.target.closest("[data-act=copy]");
    if (copyBtn) {
      navigator.clipboard.writeText(EMAIL)
        .then(() => { copyBtn.textContent = t().copied; })
        .catch(() => { copyBtn.textContent = EMAIL; });
    }
  });
  $("leftPanel").addEventListener("focusin", () => setActive("left"));
  $("rightPanel").addEventListener("focusin", () => setActive("right"));
  $("rightPanel").addEventListener("pointerdown", () => setActive("right"));
  $("leftPanel").addEventListener("pointerdown", () => setActive("left"));

  $("mServices").addEventListener("click", () => { showConsole(false); select(1); setActive("left"); $("list").focus(); });
  $("mPartners").addEventListener("click", () => { showConsole(false); select(FILES.findIndex((f) => f.kind === "partners")); setActive("left"); });
  $("mContacts").addEventListener("click", openMail);
  $("mModes").addEventListener("click", openModes);
  $("langBtn").addEventListener("click", openLangs);
  $("monitorBtn").addEventListener("click", cycleMonitor);

  document.addEventListener("pointerdown", () => { if (booting) skipBoot(); });
  document.addEventListener("keydown", (e) => {
    if (booting) { e.preventDefault(); skipBoot(); return; }
    if (dlg.open || modes.open || langs.open) return;

    const fm = /^F(\d{1,2})$/.exec(e.key);
    if (fm) {
      const n = Number(fm[1]);
      if ([1, 2, 3, 4, 5, 9, 10].includes(n)) { e.preventDefault(); fkey(n); }
      return;
    }
    if (e.ctrlKey && (e.code === "KeyO" || e.key === "o" || e.key === "O" || e.key === "щ" || e.key === "Щ")) {
      e.preventDefault();
      showConsole(!consoleShown());
      return;
    }
    if (e.key === "Escape") {
      if (consoleShown()) showConsole(false);
      else $("cmd").value = "";
      return;
    }
    const inView = document.activeElement === $("view");
    const nav = { ArrowUp: -1, ArrowDown: 1, PageUp: -5, PageDown: 5 };
    if (!inView && !consoleShown() && (e.key in nav || e.key === "Home" || e.key === "End")) {
      const typing = document.activeElement === $("cmd") && $("cmd").value;
      if ((e.key === "Home" || e.key === "End") && typing) return;
      e.preventDefault();
      if (e.key === "Home") select(0);
      else if (e.key === "End") select(FILES.length - 1);
      else select(Math.max(0, Math.min(FILES.length - 1, sel + nav[e.key])));
      return;
    }
    if (e.key === "Enter" && document.activeElement === $("list")) { e.preventDefault(); openSelected(); return; }
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const a = document.activeElement;
      if (a !== $("cmd") && !(a && a.matches("input, textarea, button, a"))) $("cmd").focus();
    }
  });

  const tick = () => {
    const d = new Date();
    $("clock").textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  };
  tick();
  setInterval(tick, 15000);

  /* ---------- Старт ---------- */
  document.documentElement.dataset.monitor = monitor;
  document.fonts.load('16px "IBM VGA"').finally(() => {
    if (reduced || store.get("aic-booted", sessionStorage)) {
      $("boot").hidden = true;
      $("nc").hidden = false;
      renderAll();
      if (!coarse) $("cmd").focus();
    } else {
      boot();
    }
  });
})();
