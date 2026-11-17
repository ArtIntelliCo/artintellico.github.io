(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";

  /* Тексти взяті з artintellico.com — ті самі, що в index.html */
  const I18N = {
    uk: {
      heroTitle: "Ми створюємо ІТ рішення, що працюють на ваш бізнес",
      heroText: "Команда ArtIntelliCo допомагає цифровізувати та автоматизувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень.",
      heroLead: "Для вашого бізнесу ми",
      phrases: ["розробляємо SaaS-платформи", "будуємо CRM та ERP системи", "впроваджуємо штучний інтелект", "переносимо інфраструктуру в хмару"],
      readmeDesc: "Про компанію",
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
      readmeDesc: "About the company",
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
      readmeDesc: "О компании",
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
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Ihre Geschäftsprozesse zu digitalisieren und zu automatisieren: Wir konzipieren moderne IT-Lösungen und führen sie ein.",
      heroLead: "Was wir für Ihr Unternehmen tun",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme bauen", "künstliche Intelligenz einsetzen", "Infrastruktur in die Cloud verlagern"],
      readmeDesc: "Über das Unternehmen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie uns eine Zusammenarbeit vorschlagen möchten oder mehr über unsere Lösungen und unsere Erfahrung wissen wollen, schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      copyright: "© 2026 ArtIntelliCo. Alle Rechte vorbehalten.",
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt.",
      source: "Klassische Version der Website"
    },
    fr: {
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Ce que nous faisons pour votre entreprise",
      phrases: ["développer des plateformes SaaS", "créer des systèmes CRM et ERP", "mettre l'IA au service de vos processus", "migrer l'infrastructure vers le cloud"],
      readmeDesc: "À propos de l'entreprise",
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Si vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience, écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l'informatique. Nous savons comment elle fonctionne aujourd'hui — et nous comprenons où elle va demain.",
      source: "Version classique du site"
    },
    es: {
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar sus procesos de negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Lo que hacemos por su negocio",
      phrases: ["desarrollar plataformas SaaS", "crear sistemas CRM y ERP", "poner la IA a trabajar", "llevar la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos un correo.",
      emailLabel: "Correo electrónico",
      copyright: "© 2026 ArtIntelliCo. Todos los derechos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos nacer la informática. Sabemos cómo funciona hoy y entendemos hacia dónde va mañana.",
      source: "Versión clásica del sitio"
    },
    pt: {
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda-o a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "O que fazemos pelo seu negócio",
      phrases: ["desenvolver plataformas SaaS", "criar sistemas CRM e ERP", "pôr a IA a trabalhar", "levar a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, envie-nos um e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Todos os direitos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã.",
      source: "Versão clássica do site"
    },
    it: {
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali, progettando e realizzando soluzioni IT moderne.",
      heroLead: "Cosa facciamo per la Sua azienda",
      phrases: ["sviluppare piattaforme SaaS", "realizzare sistemi CRM ed ERP", "mettere al lavoro l'IA", "portare l'infrastruttura nel cloud"],
      readmeDesc: "Informazioni sull'azienda",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l'informatica. Sappiamo come funziona oggi e capiamo dove andrà domani.",
      source: "Versione classica del sito"
    }
  };

  /* Рядки, потрібні лише цій версії */
  const RX = {
    uk: {
      utilities: "Утиліти",
      apps: { xterm: "Xterm", cp: "Панель керування", glint: "Glint", mail: "Пошта", partners: "Партнери", lang: "Мова", versions: "Інші версії сайту" },
      exit: "Вийти з fvwm",
      ops: ["Перемістити", "Змінити розмір", "Підняти", "Опустити", "Згорнути", "Розгорнути", "Закрити"],
      cp: ["Про компанію", "Послуги", "Партнери", "Контакти", "Мова", "Інші версії"],
      groups: ["Усі пакети", "Base", "Services"],
      query: "Запит", verify: "Перевірити", install: "Встановити", uninstall: "Видалити", configure: "Налаштувати…",
      count: (n, s) => `${n} пакетів${s ? ", вибрано: " + s : ""}`,
      info: "Відомості про пакет",
      fields: ["Назва", "Версія", "Випуск", "Група", "Розмір", "Пакувальник", "URL", "Опис"],
      notInstalled: "не встановлено",
      installing: (n) => `Встановлення ${n}…`,
      installNeed: (n) => `Щоб встановити «${n}», розкажіть нам про вашу задачу.`,
      verifyOk: (n) => `${n}: перевірку пройдено, усі файли на місці.`,
      uninstallNo: (n) => `${n} не можна видалити: цей пакет потрібен вашому бізнесу.`,
      write: "Написати листа", copy: "Копіювати адресу", copied: "Адресу скопійовано.", copyFailed: "Не вдалося скопіювати.",
      close: "Закрити", ok: "Гаразд",
      mailTitle: "Пошта: 1 нове повідомлення", from: "Від", subject: "Тема",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      startx: "Введіть startx, щоб знову запустити X.",
      help: [
        "Команди:",
        "  ls [services]        файли",
        "  cat README           про компанію",
        "  cat services/saas    послуга",
        "  rpm -qa              усі пакети",
        "  rpm -qi aic-saas     відомості про пакет",
        "  glint                менеджер пакетів",
        "  control-panel        панель керування",
        "  mail                 пошта",
        "  lang [xx]            мова",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — інші версії"
      ]
    },
    en: {
      utilities: "Utilities",
      apps: { xterm: "Xterm", cp: "Control Panel", glint: "Glint", mail: "Mail", partners: "Partners", lang: "Language", versions: "Other versions of the site" },
      exit: "Exit Fvwm",
      ops: ["Move", "Resize", "Raise", "Lower", "Iconify", "Maximize", "Close"],
      cp: ["About", "Services", "Partners", "Contacts", "Language", "Other versions"],
      groups: ["All packages", "Base", "Services"],
      query: "Query", verify: "Verify", install: "Install", uninstall: "Uninstall", configure: "Configure…",
      count: (n, s) => `${n} packages${s ? ", selected: " + s : ""}`,
      info: "Package Info",
      fields: ["Name", "Version", "Release", "Group", "Size", "Packager", "URL", "Summary"],
      notInstalled: "not installed",
      installing: (n) => `Installing ${n}…`,
      installNeed: (n) => `To install "${n}", tell us about your project.`,
      verifyOk: (n) => `${n}: verification passed, all files are in place.`,
      uninstallNo: (n) => `${n} can't be removed: your business depends on it.`,
      write: "Write an email", copy: "Copy address", copied: "Address copied.", copyFailed: "Couldn't copy.",
      close: "Close", ok: "OK",
      mailTitle: "Mail: 1 new message", from: "From", subject: "Subject",
      skip: "Press any key to skip",
      startx: "Type startx to start X again.",
      help: [
        "Commands:",
        "  ls [services]        files",
        "  cat README           about the company",
        "  cat services/saas    a service",
        "  rpm -qa              all packages",
        "  rpm -qi aic-saas     package info",
        "  glint                package manager",
        "  control-panel        control panel",
        "  mail                 mail",
        "  lang [xx]            language",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — other versions"
      ]
    },
    ru: {
      utilities: "Утилиты",
      apps: { xterm: "Xterm", cp: "Панель управления", glint: "Glint", mail: "Почта", partners: "Партнёры", lang: "Язык", versions: "Другие версии сайта" },
      exit: "Выйти из fvwm",
      ops: ["Переместить", "Изменить размер", "Поднять", "Опустить", "Свернуть", "Развернуть", "Закрыть"],
      cp: ["О компании", "Услуги", "Партнёры", "Контакты", "Язык", "Другие версии"],
      groups: ["Все пакеты", "Base", "Services"],
      query: "Запрос", verify: "Проверить", install: "Установить", uninstall: "Удалить", configure: "Настроить…",
      count: (n, s) => `${n} пакетов${s ? ", выбрано: " + s : ""}`,
      info: "Сведения о пакете",
      fields: ["Имя", "Версия", "Выпуск", "Группа", "Размер", "Сборщик", "URL", "Описание"],
      notInstalled: "не установлен",
      installing: (n) => `Установка ${n}…`,
      installNeed: (n) => `Чтобы установить «${n}», расскажите нам о вашей задаче.`,
      verifyOk: (n) => `${n}: проверка пройдена, все файлы на месте.`,
      uninstallNo: (n) => `${n} нельзя удалить: этот пакет нужен вашему бизнесу.`,
      write: "Написать письмо", copy: "Копировать адрес", copied: "Адрес скопирован.", copyFailed: "Не удалось скопировать.",
      close: "Закрыть", ok: "Хорошо",
      mailTitle: "Почта: 1 новое сообщение", from: "От", subject: "Тема",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      startx: "Введите startx, чтобы снова запустить X.",
      help: [
        "Команды:",
        "  ls [services]        файлы",
        "  cat README           о компании",
        "  cat services/saas    услуга",
        "  rpm -qa              все пакеты",
        "  rpm -qi aic-saas     сведения о пакете",
        "  glint                менеджер пакетов",
        "  control-panel        панель управления",
        "  mail                 почта",
        "  lang [xx]            язык",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — другие версии"
      ]
    },
    de: {
      utilities: "Hilfsprogramme",
      apps: { xterm: "Xterm", cp: "Systemsteuerung", glint: "Glint", mail: "E-Mail", partners: "Partner", lang: "Sprache", versions: "Andere Versionen der Website" },
      exit: "Fvwm beenden",
      ops: ["Verschieben", "Größe ändern", "Nach vorne", "Nach hinten", "Zum Symbol", "Maximieren", "Schließen"],
      cp: ["Über uns", "Leistungen", "Partner", "Kontakt", "Sprache", "Andere Versionen"],
      groups: ["Alle Pakete", "Base", "Services"],
      query: "Abfragen", verify: "Prüfen", install: "Installieren", uninstall: "Entfernen", configure: "Konfigurieren…",
      count: (n, s) => `${n} Pakete${s ? ", ausgewählt: " + s : ""}`,
      info: "Paketinformationen",
      fields: ["Name", "Version", "Release", "Gruppe", "Größe", "Paketersteller", "URL", "Kurzbeschreibung"],
      notInstalled: "nicht installiert",
      installing: (n) => `${n} wird installiert…`,
      installNeed: (n) => `Um „${n}“ zu installieren, erzählen Sie uns von Ihrem Projekt.`,
      verifyOk: (n) => `${n}: Prüfung bestanden, alle Dateien sind vorhanden.`,
      uninstallNo: (n) => `${n} kann nicht entfernt werden: Ihr Unternehmen ist auf dieses Paket angewiesen.`,
      write: "E-Mail schreiben", copy: "Adresse kopieren", copied: "Adresse kopiert.", copyFailed: "Kopieren fehlgeschlagen.",
      close: "Schließen", ok: "OK",
      mailTitle: "E-Mail: 1 neue Nachricht", from: "Von", subject: "Betreff",
      skip: "Drücken Sie eine beliebige Taste, um zu überspringen",
      startx: "Geben Sie startx ein, um X erneut zu starten.",
      help: [
        "Befehle:",
        "  ls [services]        Dateien",
        "  cat README           über das Unternehmen",
        "  cat services/saas    eine Leistung",
        "  rpm -qa              alle Pakete",
        "  rpm -qi aic-saas     Paketinformationen",
        "  glint                Paketmanager",
        "  control-panel        Systemsteuerung",
        "  mail                 E-Mail",
        "  lang [xx]            Sprache",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — andere Versionen"
      ]
    },
    fr: {
      utilities: "Utilitaires",
      apps: { xterm: "Xterm", cp: "Panneau de configuration", glint: "Glint", mail: "Courrier", partners: "Partenaires", lang: "Langue", versions: "Autres versions du site" },
      exit: "Quitter Fvwm",
      ops: ["Déplacer", "Redimensionner", "Premier plan", "Arrière-plan", "Iconifier", "Agrandir", "Fermer"],
      cp: ["À propos", "Services", "Partenaires", "Contacts", "Langue", "Autres versions"],
      groups: ["Tous les paquets", "Base", "Services"],
      query: "Interroger", verify: "Vérifier", install: "Installer", uninstall: "Désinstaller", configure: "Configurer…",
      count: (n, s) => `${n} paquets${s ? ", sélectionné : " + s : ""}`,
      info: "Informations sur le paquet",
      fields: ["Nom", "Version", "Révision", "Groupe", "Taille", "Empaqueteur", "URL", "Résumé"],
      notInstalled: "non installé",
      installing: (n) => `Installation de ${n}…`,
      installNeed: (n) => `Pour installer « ${n} », parlez-nous de votre projet.`,
      verifyOk: (n) => `${n} : vérification réussie, tous les fichiers sont en place.`,
      uninstallNo: (n) => `Impossible de désinstaller ${n} : votre entreprise en a besoin.`,
      write: "Écrire un e-mail", copy: "Copier l'adresse", copied: "Adresse copiée.", copyFailed: "La copie a échoué.",
      close: "Fermer", ok: "OK",
      mailTitle: "Courrier : 1 nouveau message", from: "De", subject: "Objet",
      skip: "Appuyez sur une touche pour passer",
      startx: "Tapez startx pour relancer X.",
      help: [
        "Commandes :",
        "  ls [services]        fichiers",
        "  cat README           à propos de l'entreprise",
        "  cat services/saas    un service",
        "  rpm -qa              tous les paquets",
        "  rpm -qi aic-saas     informations sur le paquet",
        "  glint                gestionnaire de paquets",
        "  control-panel        panneau de configuration",
        "  mail                 courrier",
        "  lang [xx]            langue",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — autres versions"
      ]
    },
    es: {
      utilities: "Utilidades",
      apps: { xterm: "Xterm", cp: "Panel de control", glint: "Glint", mail: "Correo", partners: "Socios", lang: "Idioma", versions: "Otras versiones del sitio" },
      exit: "Salir de Fvwm",
      ops: ["Mover", "Cambiar tamaño", "Traer al frente", "Enviar al fondo", "Iconizar", "Maximizar", "Cerrar"],
      cp: ["Acerca de", "Servicios", "Socios", "Contacto", "Idioma", "Otras versiones"],
      groups: ["Todos los paquetes", "Base", "Services"],
      query: "Consultar", verify: "Verificar", install: "Instalar", uninstall: "Desinstalar", configure: "Configurar…",
      count: (n, s) => `${n} paquetes${s ? ", seleccionado: " + s : ""}`,
      info: "Información del paquete",
      fields: ["Nombre", "Versión", "Revisión", "Grupo", "Tamaño", "Empaquetador", "URL", "Resumen"],
      notInstalled: "no instalado",
      installing: (n) => `Instalando ${n}…`,
      installNeed: (n) => `Para instalar «${n}», cuéntenos su proyecto.`,
      verifyOk: (n) => `${n}: verificación correcta, todos los archivos están en su sitio.`,
      uninstallNo: (n) => `No se puede desinstalar ${n}: su negocio depende de este paquete.`,
      write: "Escribir un correo", copy: "Copiar dirección", copied: "Dirección copiada.", copyFailed: "No se pudo copiar.",
      close: "Cerrar", ok: "Aceptar",
      mailTitle: "Correo: 1 mensaje nuevo", from: "De", subject: "Asunto",
      skip: "Pulse cualquier tecla para omitir",
      startx: "Escriba startx para volver a iniciar X.",
      help: [
        "Comandos:",
        "  ls [services]        archivos",
        "  cat README           sobre la empresa",
        "  cat services/saas    un servicio",
        "  rpm -qa              todos los paquetes",
        "  rpm -qi aic-saas     información del paquete",
        "  glint                gestor de paquetes",
        "  control-panel        panel de control",
        "  mail                 correo",
        "  lang [xx]            idioma",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — otras versiones"
      ]
    },
    pt: {
      utilities: "Utilitários",
      apps: { xterm: "Xterm", cp: "Painel de controlo", glint: "Glint", mail: "Correio", partners: "Parceiros", lang: "Idioma", versions: "Outras versões do site" },
      exit: "Sair do Fvwm",
      ops: ["Mover", "Redimensionar", "Trazer para a frente", "Enviar para trás", "Iconificar", "Maximizar", "Fechar"],
      cp: ["Sobre nós", "Serviços", "Parceiros", "Contactos", "Idioma", "Outras versões"],
      groups: ["Todos os pacotes", "Base", "Services"],
      query: "Consultar", verify: "Verificar", install: "Instalar", uninstall: "Desinstalar", configure: "Configurar…",
      count: (n, s) => `${n} pacotes${s ? ", selecionado: " + s : ""}`,
      info: "Informação do pacote",
      fields: ["Nome", "Versão", "Revisão", "Grupo", "Tamanho", "Empacotador", "URL", "Resumo"],
      notInstalled: "não instalado",
      installing: (n) => `A instalar ${n}…`,
      installNeed: (n) => `Para instalar «${n}», fale-nos do seu projeto.`,
      verifyOk: (n) => `${n}: verificação concluída, todos os ficheiros estão no lugar.`,
      uninstallNo: (n) => `Não é possível desinstalar ${n}: o seu negócio depende deste pacote.`,
      write: "Escrever um e-mail", copy: "Copiar endereço", copied: "Endereço copiado.", copyFailed: "Não foi possível copiar.",
      close: "Fechar", ok: "OK",
      mailTitle: "Correio: 1 mensagem nova", from: "De", subject: "Assunto",
      skip: "Prima qualquer tecla para saltar",
      startx: "Escreva startx para voltar a iniciar o X.",
      help: [
        "Comandos:",
        "  ls [services]        ficheiros",
        "  cat README           sobre a empresa",
        "  cat services/saas    um serviço",
        "  rpm -qa              todos os pacotes",
        "  rpm -qi aic-saas     informação do pacote",
        "  glint                gestor de pacotes",
        "  control-panel        painel de controlo",
        "  mail                 correio",
        "  lang [xx]            idioma",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — outras versões"
      ]
    },
    it: {
      utilities: "Utilità",
      apps: { xterm: "Xterm", cp: "Pannello di controllo", glint: "Glint", mail: "Posta", partners: "Partner", lang: "Lingua", versions: "Altre versioni del sito" },
      exit: "Esci da Fvwm",
      ops: ["Sposta", "Ridimensiona", "In primo piano", "In secondo piano", "Riduci a icona", "Ingrandisci", "Chiudi"],
      cp: ["Chi siamo", "Servizi", "Partner", "Contatti", "Lingua", "Altre versioni"],
      groups: ["Tutti i pacchetti", "Base", "Services"],
      query: "Interroga", verify: "Verifica", install: "Installa", uninstall: "Disinstalla", configure: "Configura…",
      count: (n, s) => `${n} pacchetti${s ? ", selezionato: " + s : ""}`,
      info: "Informazioni sul pacchetto",
      fields: ["Nome", "Versione", "Rilascio", "Gruppo", "Dimensione", "Autore pacchetto", "URL", "Sommario"],
      notInstalled: "non installato",
      installing: (n) => `Installazione di ${n}…`,
      installNeed: (n) => `Per installare «${n}», ci parli del Suo progetto.`,
      verifyOk: (n) => `${n}: verifica superata, tutti i file sono al loro posto.`,
      uninstallNo: (n) => `Impossibile disinstallare ${n}: la Sua azienda ha bisogno di questo pacchetto.`,
      write: "Scrivi un'e-mail", copy: "Copia indirizzo", copied: "Indirizzo copiato.", copyFailed: "Copia non riuscita.",
      close: "Chiudi", ok: "OK",
      mailTitle: "Posta: 1 nuovo messaggio", from: "Da", subject: "Oggetto",
      skip: "Premere un tasto qualsiasi per saltare",
      startx: "Digitare startx per riavviare X.",
      help: [
        "Comandi:",
        "  ls [services]        file",
        "  cat README           informazioni sull'azienda",
        "  cat services/saas    un servizio",
        "  rpm -qa              tutti i pacchetti",
        "  rpm -qi aic-saas     informazioni sul pacchetto",
        "  glint                gestore dei pacchetti",
        "  control-panel        pannello di controllo",
        "  mail                 posta",
        "  lang [xx]            lingua",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — altre versioni"
      ]
    }
  };

  /* Послуги як RPM-пакети: Summary, Description, склад пакета і результат */
  const RPM = {
    uk: {
      files: "Склад пакета",
      result: "Після встановлення",
      lead: "Пакети групи Services ставляться під задачу, а не задача під пакети: мову й платформу обираємо, коли вже зрозуміло, що треба зробити. Іноді найкраща відповідь — готовий сервіс за підпискою, і тоді ми так і скажемо.",
      pkgs: [
        {
          summary: "Розробка концепції ІТ-рішення",
          desc: [
            "Ставиться першим, до будь-якого коду. Розбираємося, яку задачу має розв'язувати система, і перекладаємо її на вимоги, які однаково розуміють бізнес і розробники.",
            "Найдорожчі помилки в ІТ-проєктах закладаються ще до програмування: систему будують під задачу, яку ніхто виразно не сформулював. Тому ми говоримо з усіма, хто нею користуватиметься, — з бухгалтерією, складом, менеджерами, а не лише з керівником. Буває, що висновок — нічого не розробляти й доналаштувати готовий продукт. Це теж результат."
          ],
          files: ["інтерв'ю з працівниками й розбір процесів", "бізнес-вимоги та сценарії роботи", "порівняння готових рішень із розробкою на замовлення", "технічне завдання з оцінкою строків і бюджету за етапами"],
          result: "Документ, за яким будь-яка команда, наша чи чужа, оцінить роботу й зможе її почати."
        },
        {
          summary: "Розробка SaaS-рішень",
          desc: [
            "SaaS-платформа під ключ: від першої версії для пілотних клієнтів до сервісу, де кожен клієнт має свій простір, тарифи й особистий кабінет.",
            "Код у SaaS грошей не приносить. Їх приносить шлях нового клієнта: зареєструвався, оплатив, почав працювати й жодного разу не подзвонив у підтримку. Мультитенантність, білінг і права доступу в цьому пакеті є з першого дня, бо додавати їх, коли клієнти вже всередині, в рази дорожче. Першу версію випускаємо рано: живі користувачі швидко покажуть, що було зайвим."
          ],
          files: ["мультитенантна архітектура, ізоляція даних клієнтів", "реєстрація, тарифи, підписки, онлайн-оплата", "особисті кабінети, ролі й права доступу", "інтеграції та відкрите API для клієнтів", "масштабування під зростання навантаження"],
          result: "Продукт, який продається за підпискою, а не проєкт, який щоразу впроваджують вручну."
        },
        {
          summary: "Веброзробка",
          desc: [
            "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. Шаблонів у пакеті немає.",
            "Бізнес-сайт оцінюють за заявками й замовленнями, а не за дизайном у портфоліо. Тому до початку робіт фіксуємо, що вважати результатом, а аналітику налаштовуємо до запуску. Технологія залежить від задачі: лендингу не потрібна важка платформа, маркетплейс не вміститься в конструктор."
          ],
          files: ["прототип і дизайн інтерфейсів", "frontend, backend, панель адміністрування", "інтеграції з оплатою, доставкою, CRM та обліком", "SEO-основа, швидкість завантаження, аналітика", "запуск і супровід"],
          result: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        {
          summary: "Мобільні застосунки",
          desc: [
            "Застосунки для iOS та Android у комплекті з серверною частиною й панеллю адміністрування.",
            "Застосунок потрібен, коли клієнт повертається регулярно: замовляє знову, стежить за статусом, накопичує бонуси. Якщо до вас заходять раз на рік, зручний мобільний сайт обійдеться дешевше, і ми скажемо про це до початку робіт. Нативно чи кросплатформно — вирішуємо за бюджетом і тим, чи потрібні застосунку камера, геолокація та офлайн-режим."
          ],
          files: ["застосунки для iOS та Android", "серверна частина та API", "адмінпанель для контенту, замовлень і користувачів", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          result: "Застосунок проходить модерацію магазинів, а ваша команда керує ним без розробників."
        },
        {
          summary: "Рішення зі штучним інтелектом",
          desc: [
            "Автоматизація бізнес-процесів за допомогою ШІ-агентів, на базі штучного інтелекту й машинного навчання. Агент сам виконує рутинні кроки: розбирає заявки, заповнює CRM, готує відповіді клієнтам.",
            "До ШІ ми ставимося скептичніше за багатьох: половину ідей «додамо нейромережу» закриває звичайна автоматизація. Але там, де люди годинами розбирають листи, документи й звернення, мовні моделі справді знімають рутину. Починаємо з пілота на ваших даних, тож цифри точності ви побачите до основної розробки."
          ],
          files: ["ШІ-агенти для рутинних кроків процесу", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень, пошук у базі знань", "прогнози попиту й аналіз даних", "пілот з оцінкою якості на ваших даних"],
          result: "Процес, який раніше виконували люди, виконує система. Останнє слово — за людиною."
        },
        {
          summary: "Розробка CRM та ERP",
          desc: [
            "CRM та ERP, зібрані навколо ваших процесів. Зворотна сумісність із «процесом під систему» не підтримується.",
            "Коробкова CRM добра, доки ваш процес схожий на стандартний. Якщо менеджери ведуть половину роботи в таблицях, бо система «так не вміє», власна обійдеться дешевше. Дані переносимо зі старих систем і таблиць, запускаємо по відділах, щоб робота не зупинялася ні на день."
          ],
          files: ["модулі продажів, складу, виробництва, фінансів — за потреби", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією та поштою"],
          result: "Одна система замість зоопарку таблиць. Керівник бачить стан справ без щотижневих звітів від кожного відділу."
        },
        {
          summary: "Хмарні рішення",
          desc: [
            "Перенесення інфраструктури, повністю або частинами, до Amazon Web Services і нагляд за нею після переїзду: щоб працювала й не дорожчала без причини.",
            "Хмара не завжди дешевша за власний сервер. Вона вигідна, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають підніматися за хвилини, а не за тиждень. Тому встановлення починається з аудиту й розрахунку вартості, а переїзд іде поетапно, з планом відкату на кожному кроці."
          ],
          files: ["аудит інфраструктури й розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервне копіювання та моніторинг", "оптимізація витрат після переїзду"],
          result: "Інфраструктура переживає відмову сервера, а рахунок за хмару зрозумілий."
        },
        {
          summary: "Інфраструктура компанії на базі Red Hat",
          desc: [
            "ІТ-інфраструктура компанії на рішеннях Red Hat: сервери на Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
            "Red Hat обирають, коли інфраструктура має роками працювати й проходити аудит, а не триматися на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux підтримується десять років. Проєктуємо під ваші навантаження, конфігурацію серверів описуємо в Ansible, і будь-який сервер можна перезібрати за сценарієм. Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо."
          ],
          files: ["аудит поточних серверів і план переходу", "Red Hat Enterprise Linux, оновлення через Red Hat Satellite", "контейнерна платформа OpenShift", "автоматизація налаштування й розгортання через Ansible", "облікові записи й доступ: Identity Management", "моніторинг, резервне копіювання, документація"],
          result: "Інфраструктуру можна перевірити, повторити й передати іншій команді без втрати знань."
        },
        {
          summary: "API та інтеграції",
          desc: [
            "API для ваших ІТ-систем і зв'язка із сервісами, якими ви вже користуєтеся.",
            "Найчастіше ми бачимо ту саму картину: дані вводять двічі. Замовлення із сайту вручну переносять в облікову систему, оплати звіряють у таблиці. Інтеграція прибирає цю роботу разом із помилками, які вона породжує. Моніторинг входить у пакет обов'язково: інтеграції ламаються тихо, коли партнер змінює свій API, і краще дізнатися про це від системи, ніж від клієнта."
          ],
          files: ["проєктування й документація API", "інтеграції з платіжними системами, доставкою, CRM та обліком", "обмін даними між внутрішніми системами", "черги й повторні спроби при збоях", "моніторинг і сповіщення"],
          result: "Дані вводяться один раз і самі доходять туди, де потрібні."
        },
        {
          summary: "Технічна підтримка",
          desc: [
            "Підтримка й розвиток ваших ІТ-систем, зокрема тих, що писали не ми.",
            "Виправлення помилок — лише частина пакета. Сюди ж входять оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і невеликі доопрацювання по ходу. Якщо система дісталася від іншого підрядника, починаємо з аудиту й документації: без неї будь-яка правка стає лотереєю."
          ],
          files: ["моніторинг доступності та помилок", "виправлення помилок і оновлення безпеки", "резервне копіювання й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація чужих систем"],
          result: "Система працює, а команда знає, як вона влаштована."
        }
      ]
    },
    en: {
      files: "Package contents",
      result: "After installation",
      lead: "Packages in the Services group are installed to fit the task, not the other way round: we choose the language and platform once it's clear what needs doing. Sometimes the best answer is an off-the-shelf subscription service, and then we'll say so.",
      pkgs: [
        {
          summary: "IT solution concept",
          desc: [
            "Install this one first, before any code exists. We work out what problem the system has to solve and turn it into requirements that the business and the developers read the same way.",
            "The most expensive mistakes in IT projects are made before anyone starts programming: the system gets built for a problem nobody clearly stated. So we talk to everyone who'll use it (accounting, the warehouse, sales managers), not just the person signing off. Sometimes the conclusion is to build nothing and configure an existing product. That's a result too."
          ],
          files: ["staff interviews and a walkthrough of current processes", "business requirements and user scenarios", "ready-made products compared with custom development", "a specification with time and budget estimates per phase"],
          result: "A document any team, ours or another, can estimate from and start work on."
        },
        {
          summary: "SaaS development",
          desc: [
            "A complete SaaS platform: from a first version for pilot customers to a service where every customer has their own workspace, plans and dashboard.",
            "Code doesn't make the money in SaaS. The new customer's path does: sign up, pay, start working, never call support. Multi-tenancy, billing and permissions ship in this package from day one, because adding them once customers are inside costs several times more. The first version goes out early: real users quickly show what was never needed."
          ],
          files: ["multi-tenant architecture, isolated customer data", "sign-up, plans, subscriptions, online payments", "customer dashboards, roles and permissions", "integrations and a public API for customers", "scaling as load grows"],
          result: "A product sold by subscription, not a project rolled out by hand every time."
        },
        {
          summary: "Web development",
          desc: [
            "Corporate websites, marketplaces, online stores, booking systems, internal web tools. No templates included.",
            "A business website is judged by leads and orders, not by how it looks in a portfolio. So before work starts we pin down what counts as a result, and analytics are set up before launch. The technology depends on the task: a landing page doesn't need a heavy platform, and a marketplace won't fit in a website builder."
          ],
          files: ["prototype and interface design", "frontend, backend, admin panel", "integrations with payments, delivery, CRM and accounting", "SEO groundwork, page speed, analytics", "launch and ongoing support"],
          result: "A web service that shows how many leads and how much revenue it brings in."
        },
        {
          summary: "Mobile apps",
          desc: [
            "iOS and Android apps, bundled with the server side and an admin panel.",
            "An app is worth it when customers come back regularly: reordering, checking a status, collecting points. If people visit once a year, a good mobile website is cheaper, and we'll say so before any work starts. Native or cross-platform is decided by budget and by whether the app needs the camera, location and offline mode."
          ],
          files: ["iOS and Android apps", "server side and API", "admin panel for content, orders and users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          result: "The app passes store review, and your team runs it without developers."
        },
        {
          summary: "AI-powered solutions",
          desc: [
            "Business process automation with AI agents, built on artificial intelligence and machine learning. An agent handles the routine steps itself: triaging requests, filling in the CRM, drafting replies to customers.",
            "We're more sceptical about AI than most: half of the \"let's add a neural network\" ideas are covered by ordinary automation. But where people spend hours sorting emails, documents and requests, language models really do take the routine away. We start with a pilot on your data, so you see accuracy figures before the main build."
          ],
          files: ["AI agents for routine process steps", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification, knowledge-base search", "demand forecasting and data analysis", "a pilot with quality measured on your data"],
          result: "A process people used to do is now run by the system. A person still has the final say."
        },
        {
          summary: "CRM and ERP development",
          desc: [
            "CRM and ERP built around your processes. Backward compatibility with \"process bent to fit the system\" is not supported.",
            "Off-the-shelf CRM is fine while your process looks standard. If managers keep half their work in spreadsheets because the system \"can't do that\", your own will cost less. We migrate data from old systems and spreadsheets and roll out department by department, so work doesn't stop for a day."
          ],
          files: ["sales, warehouse, production, finance modules, as needed", "roles, permissions, audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony and email"],
          result: "One system instead of a zoo of spreadsheets. Management sees where things stand without weekly reports from every department."
        },
        {
          summary: "Cloud solutions",
          desc: [
            "We move your infrastructure, in full or in part, to Amazon Web Services and look after it afterwards, so it keeps running and doesn't get pricier for no reason.",
            "The cloud isn't always cheaper than your own server. It pays off when load spikes, when you need fault tolerance, or when new environments should come up in minutes rather than a week. So installation starts with an audit and a cost estimate, and the move goes in stages, with a rollback plan at each step."
          ],
          files: ["infrastructure audit and cost estimate", "AWS architecture and migration plan", "moving servers, databases and files", "backups and monitoring", "cost optimisation after the move"],
          result: "Infrastructure that survives a server failure, and a cloud bill that makes sense."
        },
        {
          summary: "Company infrastructure on Red Hat",
          desc: [
            "Company IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform, automation with Ansible.",
            "Red Hat is chosen when infrastructure must run for years and pass audits instead of living in one administrator's memory. The subscription pays off through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years. We design for your workloads and describe server configuration in Ansible, so any server can be rebuilt from a playbook. Red Hat is our partner, so we'll help with subscriptions and vendor support too."
          ],
          files: ["audit of current servers and a migration plan", "Red Hat Enterprise Linux, updates through Red Hat Satellite", "the OpenShift container platform", "configuration and deployment automation with Ansible", "accounts and access: Identity Management", "monitoring, backups, documentation"],
          result: "Infrastructure you can audit, reproduce and hand to another team without losing what it knows."
        },
        {
          summary: "APIs and integrations",
          desc: [
            "APIs for your IT systems and links to the services you already use.",
            "The picture we see most often: data entered twice. Website orders re-typed into the accounting system, payments reconciled in a spreadsheet. An integration removes that work together with the errors it causes. Monitoring is a mandatory part of the package: integrations break quietly when a partner changes their API, and it's better to hear about it from the system than from a customer."
          ],
          files: ["API design and documentation", "integrations with payment providers, delivery, CRM and accounting", "data exchange between internal systems", "queues and retries on failure", "monitoring and alerts"],
          result: "Data is entered once and reaches wherever it's needed on its own."
        },
        {
          summary: "Technical support",
          desc: [
            "Support and further development of your IT systems, including ones we didn't build.",
            "Bug fixing is only part of the package. It also covers updates that close vulnerabilities, monitoring that notices a problem before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and documentation: without it, every change is a gamble."
          ],
          files: ["availability and error monitoring", "bug fixes and security updates", "backups and restore testing", "planned improvements and new features", "audit and documentation of other contractors' systems"],
          result: "The system works, and the team knows how it's put together."
        }
      ]
    },
    ru: {
      files: "Состав пакета",
      result: "После установки",
      lead: "Пакеты группы Services ставятся под задачу, а не задача под пакеты: язык и платформу выбираем, когда уже понятно, что нужно сделать. Иногда лучший ответ — готовый сервис по подписке, и тогда мы так и скажем.",
      pkgs: [
        {
          summary: "Разработка концепции ИТ-решения",
          desc: [
            "Ставится первым, до любого кода. Разбираемся, какую задачу должна решать система, и переводим её в требования, которые одинаково понимают бизнес и разработчики.",
            "Самые дорогие ошибки в ИТ-проектах закладываются ещё до программирования: систему строят под задачу, которую никто внятно не сформулировал. Поэтому мы говорим со всеми, кто будет ею пользоваться, — с бухгалтерией, складом, менеджерами, а не только с руководителем. Бывает, что вывод — ничего не разрабатывать и донастроить готовый продукт. Это тоже результат."
          ],
          files: ["интервью с сотрудниками и разбор процессов", "бизнес-требования и сценарии работы", "сравнение готовых решений с заказной разработкой", "техническое задание с оценкой сроков и бюджета по этапам"],
          result: "Документ, по которому любая команда, наша или чужая, оценит работу и сможет её начать."
        },
        {
          summary: "Разработка SaaS-решений",
          desc: [
            "SaaS-платформа под ключ: от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тарифы и личный кабинет.",
            "Код в SaaS денег не приносит. Их приносит путь нового клиента: зарегистрировался, оплатил, начал работать и ни разу не позвонил в поддержку. Мультитенантность, биллинг и права доступа в этом пакете есть с первого дня, потому что добавлять их, когда клиенты уже внутри, в разы дороже. Первую версию выпускаем рано: живые пользователи быстро покажут, что было лишним."
          ],
          files: ["мультитенантная архитектура, изоляция данных клиентов", "регистрация, тарифы, подписки, онлайн-оплата", "личные кабинеты, роли и права доступа", "интеграции и открытое API для клиентов", "масштабирование под рост нагрузки"],
          result: "Продукт, который продаётся по подписке, а не проект, который каждый раз внедряют вручную."
        },
        {
          summary: "Веб-разработка",
          desc: [
            "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. Шаблонов в пакете нет.",
            "Бизнес-сайт оценивают по заявкам и заказам, а не по дизайну в портфолио. Поэтому до начала работ фиксируем, что считать результатом, а аналитику настраиваем до запуска. Технология зависит от задачи: лендингу не нужна тяжёлая платформа, маркетплейс не поместится в конструктор."
          ],
          files: ["прототип и дизайн интерфейсов", "frontend, backend, панель администрирования", "интеграции с оплатой, доставкой, CRM и учётом", "SEO-основа, скорость загрузки, аналитика", "запуск и сопровождение"],
          result: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        {
          summary: "Мобильные приложения",
          desc: [
            "Приложения для iOS и Android в комплекте с серверной частью и панелью администрирования.",
            "Приложение нужно, когда клиент возвращается регулярно: заказывает снова, следит за статусом, копит бонусы. Если к вам заходят раз в год, удобный мобильный сайт обойдётся дешевле, и мы скажем об этом до начала работ. Нативно или кроссплатформенно — решаем по бюджету и по тому, нужны ли приложению камера, геолокация и офлайн-режим."
          ],
          files: ["приложения для iOS и Android", "серверная часть и API", "админ-панель для контента, заказов и пользователей", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          result: "Приложение проходит модерацию магазинов, а ваша команда управляет им без разработчиков."
        },
        {
          summary: "Решения с искусственным интеллектом",
          desc: [
            "Автоматизация бизнес-процессов с помощью ИИ-агентов, на базе искусственного интеллекта и машинного обучения. Агент сам выполняет рутинные шаги: разбирает заявки, заполняет CRM, готовит ответы клиентам.",
            "К ИИ мы относимся скептичнее многих: половину идей «добавим нейросеть» закрывает обычная автоматизация. Но там, где люди часами разбирают письма, документы и обращения, языковые модели снимают рутину по-настоящему. Начинаем с пилота на ваших данных, так что цифры точности вы увидите до основной разработки."
          ],
          files: ["ИИ-агенты для рутинных шагов процесса", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогнозы спроса и анализ данных", "пилот с оценкой качества на ваших данных"],
          result: "Процесс, который раньше делали люди, выполняет система. Последнее слово — за человеком."
        },
        {
          summary: "Разработка CRM и ERP",
          desc: [
            "CRM и ERP, собранные вокруг ваших процессов. Обратная совместимость с «процессом под систему» не поддерживается.",
            "Коробочная CRM хороша, пока ваш процесс похож на стандартный. Если менеджеры ведут половину работы в таблицах, потому что система «так не умеет», своя обойдётся дешевле. Данные переносим из старых систем и таблиц, запускаем по отделам, чтобы работа не останавливалась ни на день."
          ],
          files: ["модули продаж, склада, производства, финансов — по необходимости", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией и почтой"],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит положение дел без еженедельных отчётов от каждого отдела."
        },
        {
          summary: "Облачные решения",
          desc: [
            "Перенос инфраструктуры, целиком или частями, в Amazon Web Services и присмотр за ней после переезда: чтобы работала и не дорожала без причины.",
            "Облако не всегда дешевле своего сервера. Оно выгодно, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны подниматься за минуты, а не за неделю. Поэтому установка начинается с аудита и расчёта стоимости, а переезд идёт поэтапно, с планом отката на каждом шаге."
          ],
          files: ["аудит инфраструктуры и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервное копирование и мониторинг", "оптимизация расходов после переезда"],
          result: "Инфраструктура переживает отказ сервера, а счёт за облако понятен."
        },
        {
          summary: "Инфраструктура компании на базе Red Hat",
          desc: [
            "ИТ-инфраструктура компании на решениях Red Hat: серверы на Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
            "Red Hat выбирают, когда инфраструктура должна годами работать и проходить аудит, а не держаться на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux поддерживается десять лет. Проектируем под ваши нагрузки, конфигурацию серверов описываем в Ansible, и любой сервер можно пересобрать по сценарию. Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем."
          ],
          files: ["аудит текущих серверов и план перехода", "Red Hat Enterprise Linux, обновления через Red Hat Satellite", "контейнерная платформа OpenShift", "автоматизация настройки и развёртывания через Ansible", "учётные записи и доступ: Identity Management", "мониторинг, резервное копирование, документация"],
          result: "Инфраструктуру можно проверить, повторить и передать другой команде без потери знаний."
        },
        {
          summary: "API и интеграции",
          desc: [
            "API для ваших ИТ-систем и связка с сервисами, которыми вы уже пользуетесь.",
            "Чаще всего мы видим одну и ту же картину: данные вводят дважды. Заказ с сайта вручную переносят в учётную систему, оплаты сверяют в таблице. Интеграция убирает эту работу вместе с ошибками, которые она порождает. Мониторинг входит в пакет обязательно: интеграции ломаются тихо, когда партнёр меняет свой API, и лучше узнать об этом от системы, чем от клиента."
          ],
          files: ["проектирование и документация API", "интеграции с платёжными системами, доставкой, CRM и учётом", "обмен данными между внутренними системами", "очереди и повторные попытки при сбоях", "мониторинг и оповещения"],
          result: "Данные вводятся один раз и сами доходят туда, где нужны."
        },
        {
          summary: "Техническая поддержка",
          desc: [
            "Поддержка и развитие ваших ИТ-систем, включая те, что писали не мы.",
            "Исправление ошибок — лишь часть пакета. Сюда же входят обновления, закрывающие уязвимости, мониторинг, который замечает проблему раньше пользователей, и небольшие доработки по ходу. Если система досталась от другого подрядчика, начинаем с аудита и документации: без неё любая правка превращается в лотерею."
          ],
          files: ["мониторинг доступности и ошибок", "исправление ошибок и обновления безопасности", "резервное копирование и проверка восстановления", "доработки и новые функции по плану", "аудит и документация чужих систем"],
          result: "Система работает, а команда знает, как она устроена."
        }
      ]
    },
    de: {
      files: "Paketinhalt",
      result: "Nach der Installation",
      lead: "Pakete der Gruppe Services werden passend zur Aufgabe installiert, nicht umgekehrt: Sprache und Plattform wählen wir erst, wenn klar ist, was zu tun ist. Manchmal ist ein fertiger Abodienst die beste Antwort, und dann sagen wir das auch.",
      pkgs: [
        {
          summary: "Konzeption von IT-Lösungen",
          desc: [
            "Wird als Erstes installiert, noch bevor es Code gibt. Wir klären, welches Problem das System lösen soll, und übersetzen es in Anforderungen, die Fachabteilung und Entwickler gleich verstehen.",
            "Die teuersten Fehler in IT-Projekten entstehen, bevor jemand programmiert: Das System wird für ein Problem gebaut, das niemand klar formuliert hat. Deshalb sprechen wir mit allen, die damit arbeiten werden (Buchhaltung, Lager, Vertrieb), nicht nur mit der Person, die unterschreibt. Manchmal lautet das Ergebnis: nichts entwickeln, sondern ein vorhandenes Produkt anpassen. Auch das ist ein Ergebnis."
          ],
          files: ["Interviews mit Mitarbeitenden und Analyse der Abläufe", "fachliche Anforderungen und Nutzungsszenarien", "Vergleich fertiger Produkte mit Individualentwicklung", "Pflichtenheft mit Zeit- und Budgetschätzung je Phase"],
          result: "Ein Dokument, nach dem jedes Team, unseres oder ein anderes, den Aufwand schätzen und mit der Arbeit beginnen kann."
        },
        {
          summary: "SaaS-Entwicklung",
          desc: [
            "Eine SaaS-Plattform aus einer Hand: von der ersten Version für Pilotkunden bis zum Dienst, in dem jeder Kunde seinen eigenen Bereich, seinen Tarif und sein Kundenkonto hat.",
            "Bei SaaS verdient nicht der Code das Geld, sondern der Weg des neuen Kunden: registrieren, bezahlen, loslegen und nie beim Support anrufen. Mandantenfähigkeit, Abrechnung und Zugriffsrechte sind in diesem Paket vom ersten Tag an enthalten, denn sie nachzurüsten, wenn die Kunden schon drin sind, kostet ein Vielfaches. Die erste Version geht früh raus: Echte Nutzer zeigen schnell, was überflüssig war."
          ],
          files: ["mandantenfähige Architektur, getrennte Kundendaten", "Registrierung, Tarife, Abonnements, Onlinezahlung", "Kundenkonten, Rollen und Zugriffsrechte", "Integrationen und eine offene API für Kunden", "Skalierung bei wachsender Last"],
          result: "Ein Produkt, das im Abo verkauft wird, statt eines Projekts, das jedes Mal von Hand eingeführt wird."
        },
        {
          summary: "Webentwicklung",
          desc: [
            "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme, interne Webanwendungen. Vorlagen sind im Paket nicht enthalten.",
            "Eine Unternehmenswebsite wird an Anfragen und Bestellungen gemessen, nicht am Design im Portfolio. Deshalb legen wir vor Arbeitsbeginn fest, was als Ergebnis zählt, und richten die Webanalyse vor dem Start ein. Die Technik richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Baukasten."
          ],
          files: ["Prototyp und Oberflächendesign", "Frontend, Backend, Administrationsbereich", "Anbindung von Zahlung, Versand, CRM und Buchhaltung", "SEO-Grundlagen, Ladezeit, Webanalyse", "Start und laufende Betreuung"],
          result: "Ein Webdienst, bei dem man sieht, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        {
          summary: "Mobile Apps",
          desc: [
            "Apps für iOS und Android, zusammen mit Serverteil und Administrationsbereich.",
            "Eine App lohnt sich, wenn Kunden regelmäßig wiederkommen: nachbestellen, einen Status prüfen, Punkte sammeln. Wer nur einmal im Jahr vorbeischaut, ist mit einer guten mobilen Website günstiger bedient, und das sagen wir vor Arbeitsbeginn. Ob nativ oder plattformübergreifend, entscheiden das Budget und die Frage, ob die App Kamera, Standort und Offlinebetrieb braucht."
          ],
          files: ["Apps für iOS und Android", "Serverteil und API", "Administrationsbereich für Inhalte, Bestellungen und Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          result: "Die App besteht die Prüfung der Stores, und Ihr Team betreut sie ohne Entwickler."
        },
        {
          summary: "KI-Lösungen",
          desc: [
            "Automatisierung von Geschäftsprozessen mit KI-Agenten auf Basis von künstlicher Intelligenz und maschinellem Lernen. Ein Agent erledigt Routineschritte selbst: Anfragen sortieren, das CRM befüllen, Antworten an Kunden vorbereiten.",
            "Wir sehen KI skeptischer als viele: Die Hälfte der Ideen nach dem Motto „Bauen wir ein neuronales Netz ein“ deckt gewöhnliche Automatisierung ab. Wo Menschen aber stundenlang E-Mails, Dokumente und Anfragen sortieren, nehmen Sprachmodelle die Routine tatsächlich ab. Wir beginnen mit einem Pilotprojekt auf Ihren Daten, sodass Sie die Trefferquote kennen, bevor die eigentliche Entwicklung beginnt."
          ],
          files: ["KI-Agenten für Routineschritte im Prozess", "Chatbots und Assistenten für Kunden und Mitarbeitende", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen, Suche in der Wissensdatenbank", "Bedarfsprognosen und Datenanalyse", "Pilotprojekt mit gemessener Qualität auf Ihren Daten"],
          result: "Einen Prozess, den bisher Menschen erledigt haben, führt jetzt das System aus. Das letzte Wort hat weiterhin ein Mensch."
        },
        {
          summary: "CRM- und ERP-Entwicklung",
          desc: [
            "CRM und ERP, gebaut um Ihre Abläufe herum. Abwärtskompatibilität mit „Prozess an das System angepasst“ wird nicht unterstützt.",
            "Ein Standard-CRM ist gut, solange Ihr Ablauf dem Standard ähnelt. Wenn der Vertrieb die halbe Arbeit in Tabellen erledigt, weil das System „das nicht kann“, ist ein eigenes System günstiger. Wir übernehmen Daten aus Altsystemen und Tabellen und führen das System Abteilung für Abteilung ein, damit die Arbeit keinen Tag stillsteht."
          ],
          files: ["Module für Vertrieb, Lager, Produktion, Finanzen, je nach Bedarf", "Rollen, Zugriffsrechte, Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie und E-Mail"],
          result: "Ein System statt eines Tabellen-Zoos. Die Geschäftsführung sieht den Stand der Dinge ohne wöchentliche Berichte aus jeder Abteilung."
        },
        {
          summary: "Cloud-Lösungen",
          desc: [
            "Wir verlagern Ihre Infrastruktur ganz oder teilweise zu Amazon Web Services und betreuen sie danach, damit sie läuft und nicht grundlos teurer wird.",
            "Die Cloud ist nicht immer günstiger als ein eigener Server. Sie lohnt sich bei schwankender Last, wenn Ausfallsicherheit gefragt ist oder neue Umgebungen in Minuten statt in einer Woche bereitstehen sollen. Deshalb beginnt die Installation mit einem Audit und einer Kostenschätzung, und der Umzug erfolgt in Etappen, mit einem Rückfallplan für jeden Schritt."
          ],
          files: ["Infrastruktur-Audit und Kostenschätzung", "AWS-Architektur und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Datensicherung und Monitoring", "Kostenoptimierung nach dem Umzug"],
          result: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die nachvollziehbar ist."
        },
        {
          summary: "Unternehmensinfrastruktur auf Red Hat",
          desc: [
            "IT-Infrastruktur des Unternehmens auf Red Hat: Server mit Red Hat Enterprise Linux, die Containerplattform OpenShift, Automatisierung mit Ansible.",
            "Red Hat wählt man, wenn die Infrastruktur jahrelang laufen und Audits bestehen soll, statt nur im Kopf eines einzigen Administrators zu existieren. Die Subskription rechnet sich durch den Herstellersupport und den langen Lebenszyklus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt. Wir planen für Ihre Lasten und beschreiben die Serverkonfiguration in Ansible, sodass sich jeder Server aus einem Playbook neu aufbauen lässt. Red Hat ist unser Partner, daher helfen wir auch bei Subskriptionen und Herstellersupport."
          ],
          files: ["Audit der vorhandenen Server und Migrationsplan", "Red Hat Enterprise Linux, Updates über Red Hat Satellite", "die Containerplattform OpenShift", "Automatisierung von Konfiguration und Deployment mit Ansible", "Benutzerkonten und Zugriff: Identity Management", "Monitoring, Datensicherung, Dokumentation"],
          result: "Eine Infrastruktur, die sich prüfen, reproduzieren und an ein anderes Team übergeben lässt, ohne dass Wissen verloren geht."
        },
        {
          summary: "APIs und Integrationen",
          desc: [
            "APIs für Ihre IT-Systeme und Anbindungen an die Dienste, die Sie bereits nutzen.",
            "Das Bild, das wir am häufigsten sehen: Daten werden doppelt erfasst. Bestellungen von der Website werden von Hand ins Buchhaltungssystem übertragen, Zahlungen in einer Tabelle abgeglichen. Eine Integration nimmt diese Arbeit ab, samt den Fehlern, die sie verursacht. Monitoring ist fester Bestandteil des Pakets: Integrationen brechen leise, wenn ein Partner seine API ändert, und davon erfährt man besser vom System als vom Kunden."
          ],
          files: ["Entwurf und Dokumentation von APIs", "Anbindung von Zahlungsanbietern, Versand, CRM und Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholversuche bei Fehlern", "Monitoring und Benachrichtigungen"],
          result: "Daten werden einmal erfasst und gelangen von selbst überall dorthin, wo sie gebraucht werden."
        },
        {
          summary: "Technischer Support",
          desc: [
            "Betreuung und Weiterentwicklung Ihrer IT-Systeme, auch solcher, die nicht von uns stammen.",
            "Fehlerbehebung ist nur ein Teil des Pakets. Dazu gehören auch Updates, die Sicherheitslücken schließen, Monitoring, das ein Problem vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei. Stammt das System von einem anderen Dienstleister, beginnen wir mit einem Audit und einer Dokumentation: Ohne sie wird jede Änderung zum Glücksspiel."
          ],
          files: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Datensicherung und Wiederherstellungstests", "geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation fremder Systeme"],
          result: "Das System läuft, und das Team weiß, wie es aufgebaut ist."
        }
      ]
    },
    fr: {
      files: "Contenu du paquet",
      result: "Après l'installation",
      lead: "Les paquets du groupe Services s'installent en fonction de la tâche, et non l'inverse : nous choisissons le langage et la plateforme une fois que l'on sait ce qu'il faut faire. Parfois, la meilleure réponse est un service sur abonnement déjà existant, et dans ce cas nous vous le dirons.",
      pkgs: [
        {
          summary: "Conception de solutions informatiques",
          desc: [
            "À installer en premier, avant la moindre ligne de code. Nous cernons le problème que le système doit résoudre et le traduisons en exigences que le métier et les développeurs lisent de la même façon.",
            "Les erreurs les plus coûteuses d'un projet informatique se commettent avant même la programmation : on construit le système pour un problème que personne n'a clairement formulé. Nous parlons donc avec tous ceux qui l'utiliseront (comptabilité, entrepôt, commerciaux), pas seulement avec la personne qui signe. Il arrive que la conclusion soit de ne rien développer et de paramétrer un produit existant. C'est aussi un résultat."
          ],
          files: ["entretiens avec le personnel et analyse des processus", "exigences métier et scénarios d'utilisation", "comparaison des produits existants et du développement sur mesure", "cahier des charges avec estimation des délais et du budget par phase"],
          result: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et le commencer."
        },
        {
          summary: "Développement SaaS",
          desc: [
            "Une plateforme SaaS clés en main : de la première version pour les clients pilotes jusqu'au service où chaque client dispose de son espace, de ses formules et de son compte.",
            "En SaaS, ce n'est pas le code qui rapporte de l'argent, c'est le parcours du nouveau client : il s'inscrit, il paie, il commence à travailler et n'appelle jamais le support. Le multi-locataire, la facturation et les droits d'accès font partie de ce paquet dès le premier jour, car les ajouter quand les clients sont déjà là coûte plusieurs fois plus cher. La première version sort tôt : les vrais utilisateurs montrent vite ce qui était superflu."
          ],
          files: ["architecture multi-locataire, données clients isolées", "inscription, formules, abonnements, paiement en ligne", "espaces clients, rôles et droits d'accès", "intégrations et API publique pour les clients", "montée en charge au fil de la croissance"],
          result: "Un produit vendu par abonnement, et non un projet déployé à la main à chaque fois."
        },
        {
          summary: "Développement web",
          desc: [
            "Sites d'entreprise, places de marché, boutiques en ligne, systèmes de réservation, outils web internes. Aucun modèle tout fait dans le paquet.",
            "Un site d'entreprise se juge aux demandes et aux commandes, pas à son allure dans un portfolio. Avant de commencer, nous fixons donc ce qui compte comme résultat, et l'analytique est en place avant la mise en ligne. La technologie dépend de la tâche : une page d'atterrissage n'a pas besoin d'une plateforme lourde, et une place de marché ne tient pas dans un constructeur de sites."
          ],
          files: ["prototype et conception des interfaces", "frontend, backend, interface d'administration", "intégrations avec le paiement, la livraison, le CRM et la comptabilité", "bases du référencement, vitesse de chargement, analytique", "mise en ligne et suivi"],
          result: "Un service web dont on voit combien de demandes et de chiffre d'affaires il rapporte."
        },
        {
          summary: "Applications mobiles",
          desc: [
            "Applications iOS et Android, livrées avec la partie serveur et une interface d'administration.",
            "Une application se justifie quand les clients reviennent régulièrement : pour recommander, suivre un statut, cumuler des points. S'ils viennent une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant de commencer. Natif ou multiplateforme : le choix dépend du budget et du besoin d'accéder à l'appareil photo, à la localisation et au mode hors ligne."
          ],
          files: ["applications iOS et Android", "partie serveur et API", "interface d'administration pour les contenus, les commandes et les utilisateurs", "notifications push et statistiques", "publication sur l'App Store et Google Play"],
          result: "L'application passe la validation des stores, et votre équipe la gère sans développeurs."
        },
        {
          summary: "Solutions d'intelligence artificielle",
          desc: [
            "Automatisation des processus métier par des agents d'IA, fondés sur l'intelligence artificielle et l'apprentissage automatique. L'agent se charge lui-même des étapes routinières : trier les demandes, remplir le CRM, préparer les réponses aux clients.",
            "Nous sommes plus sceptiques que beaucoup à l'égard de l'IA : la moitié des idées du type « ajoutons un réseau de neurones » se règlent par une automatisation ordinaire. Mais là où des personnes passent des heures à trier e-mails, documents et demandes, les modèles de langage suppriment vraiment la routine. Nous commençons par un pilote sur vos données : vous voyez les chiffres de précision avant le développement principal."
          ],
          files: ["agents d'IA pour les étapes routinières des processus", "chatbots et assistants pour les clients et le personnel", "reconnaissance de documents et extraction de données", "classement des demandes, recherche dans la base de connaissances", "prévision de la demande et analyse de données", "pilote avec mesure de la qualité sur vos données"],
          result: "Un processus autrefois assuré par des personnes est désormais exécuté par le système. Le dernier mot revient toujours à un humain."
        },
        {
          summary: "Développement CRM et ERP",
          desc: [
            "CRM et ERP construits autour de vos processus. La rétrocompatibilité avec « le processus plié au système » n'est pas prise en charge.",
            "Un CRM standard convient tant que votre processus ressemble au standard. Si les commerciaux gèrent la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire », un outil sur mesure reviendra moins cher. Nous reprenons les données des anciens systèmes et des tableurs, et déployons service par service pour que le travail ne s'arrête pas un seul jour."
          ],
          files: ["modules ventes, stock, production, finances, selon les besoins", "rôles, droits d'accès, journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "intégration avec la comptabilité, la téléphonie et la messagerie"],
          result: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit où en sont les choses sans rapports hebdomadaires de chaque service."
        },
        {
          summary: "Solutions cloud",
          desc: [
            "Nous migrons votre infrastructure, en totalité ou en partie, vers Amazon Web Services et nous en occupons ensuite, pour qu'elle fonctionne et ne coûte pas plus cher sans raison.",
            "Le cloud n'est pas toujours moins cher qu'un serveur à soi. Il devient rentable quand la charge varie fortement, quand il faut de la tolérance aux pannes ou quand de nouveaux environnements doivent être prêts en quelques minutes plutôt qu'en une semaine. L'installation commence donc par un audit et une estimation des coûts, et la migration se fait par étapes, avec un plan de retour arrière à chacune."
          ],
          files: ["audit de l'infrastructure et estimation des coûts", "architecture AWS et plan de migration", "transfert des serveurs, des bases de données et des fichiers", "sauvegardes et supervision", "optimisation des coûts après la migration"],
          result: "Une infrastructure qui survit à la panne d'un serveur, et une facture cloud qui a du sens."
        },
        {
          summary: "Infrastructure d'entreprise sous Red Hat",
          desc: [
            "L'infrastructure informatique de l'entreprise sous Red Hat : serveurs sous Red Hat Enterprise Linux, plateforme de conteneurs OpenShift, automatisation avec Ansible.",
            "On choisit Red Hat quand l'infrastructure doit tourner pendant des années et passer des audits, au lieu de ne reposer que sur la mémoire d'un seul administrateur. L'abonnement se rentabilise par le support de l'éditeur et un long cycle de vie : Red Hat Enterprise Linux est maintenu pendant dix ans. Nous concevons pour vos charges et décrivons la configuration des serveurs dans Ansible, si bien que tout serveur peut être reconstruit à partir d'un playbook. Red Hat est notre partenaire : nous vous aidons aussi pour les abonnements et le support de l'éditeur."
          ],
          files: ["audit des serveurs existants et plan de migration", "Red Hat Enterprise Linux, mises à jour via Red Hat Satellite", "la plateforme de conteneurs OpenShift", "automatisation de la configuration et du déploiement avec Ansible", "comptes et accès : Identity Management", "supervision, sauvegardes, documentation"],
          result: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe sans perdre le savoir accumulé."
        },
        {
          summary: "API et intégrations",
          desc: [
            "Des API pour vos systèmes informatiques et des liaisons avec les services que vous utilisez déjà.",
            "Ce que nous voyons le plus souvent : des données saisies deux fois. Les commandes du site retapées dans la comptabilité, les paiements rapprochés dans un tableur. Une intégration supprime ce travail, et avec lui les erreurs qu'il provoque. La supervision fait obligatoirement partie du paquet : les intégrations cassent en silence quand un partenaire modifie son API, et mieux vaut l'apprendre du système que d'un client."
          ],
          files: ["conception et documentation des API", "intégrations avec les prestataires de paiement, la livraison, le CRM et la comptabilité", "échange de données entre systèmes internes", "files d'attente et nouvelles tentatives en cas d'échec", "supervision et alertes"],
          result: "Les données sont saisies une seule fois et arrivent d'elles-mêmes partout où elles sont utiles."
        },
        {
          summary: "Support technique",
          desc: [
            "Maintenance et évolution de vos systèmes informatiques, y compris ceux que nous n'avons pas développés.",
            "La correction de bogues n'est qu'une partie du paquet. Il comprend aussi les mises à jour qui comblent les failles, une supervision qui repère un problème avant les utilisateurs et de petites améliorations au fil de l'eau. Si le système vient d'un autre prestataire, nous commençons par un audit et une documentation : sans elle, chaque modification est un pari."
          ],
          files: ["supervision de la disponibilité et des erreurs", "correction de bogues et mises à jour de sécurité", "sauvegardes et tests de restauration", "améliorations et nouvelles fonctions planifiées", "audit et documentation de systèmes développés par d'autres"],
          result: "Le système fonctionne, et l'équipe sait comment il est construit."
        }
      ]
    },
    es: {
      files: "Contenido del paquete",
      result: "Tras la instalación",
      lead: "Los paquetes del grupo Services se instalan a la medida de la tarea, y no al revés: elegimos el lenguaje y la plataforma cuando ya está claro qué hay que hacer. A veces la mejor respuesta es un servicio de suscripción ya existente, y entonces se lo diremos.",
      pkgs: [
        {
          summary: "Concepto de la solución de TI",
          desc: [
            "Se instala el primero, antes de que exista una sola línea de código. Averiguamos qué problema debe resolver el sistema y lo convertimos en requisitos que el negocio y los desarrolladores entienden de la misma manera.",
            "Los errores más caros de un proyecto de TI se cometen antes de empezar a programar: el sistema se construye para un problema que nadie formuló con claridad. Por eso hablamos con todos los que lo van a usar (contabilidad, almacén, comerciales), no solo con quien firma. A veces la conclusión es no desarrollar nada y configurar un producto existente. Eso también es un resultado."
          ],
          files: ["entrevistas con el personal y análisis de los procesos", "requisitos de negocio y escenarios de uso", "comparación de productos existentes con un desarrollo a medida", "especificación técnica con estimación de plazos y presupuesto por fases"],
          result: "Un documento con el que cualquier equipo, el nuestro u otro, puede presupuestar el trabajo y ponerse manos a la obra."
        },
        {
          summary: "Desarrollo SaaS",
          desc: [
            "Una plataforma SaaS llave en mano: desde la primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, sus planes y su área privada.",
            "En SaaS el dinero no lo genera el código, sino el recorrido del cliente nuevo: se registra, paga, empieza a trabajar y nunca llama a soporte. La arquitectura multiinquilino, la facturación y los permisos vienen en este paquete desde el primer día, porque añadirlos cuando los clientes ya están dentro cuesta varias veces más. La primera versión sale pronto: los usuarios reales enseguida muestran lo que sobraba."
          ],
          files: ["arquitectura multiinquilino, datos de clientes aislados", "registro, planes, suscripciones, pago en línea", "áreas privadas de clientes, roles y permisos", "integraciones y una API pública para clientes", "escalado a medida que crece la carga"],
          result: "Un producto que se vende por suscripción, no un proyecto que se implanta a mano cada vez."
        },
        {
          summary: "Desarrollo web",
          desc: [
            "Sitios corporativos, marketplaces, tiendas en línea, sistemas de reservas, herramientas web internas. El paquete no incluye plantillas.",
            "Un sitio de empresa se juzga por las solicitudes y los pedidos, no por cómo luce en un portafolio. Por eso, antes de empezar fijamos qué cuenta como resultado y dejamos la analítica configurada antes del lanzamiento. La tecnología depende de la tarea: una página de aterrizaje no necesita una plataforma pesada, y un marketplace no cabe en un creador de sitios."
          ],
          files: ["prototipo y diseño de interfaces", "frontend, backend, panel de administración", "integraciones con pagos, envíos, CRM y contabilidad", "base de SEO, velocidad de carga, analítica", "lanzamiento y mantenimiento"],
          result: "Un servicio web en el que se ve cuántas solicitudes y cuántos ingresos aporta."
        },
        {
          summary: "Aplicaciones móviles",
          desc: [
            "Aplicaciones para iOS y Android, junto con la parte de servidor y un panel de administración.",
            "Una aplicación compensa cuando los clientes vuelven con regularidad: para repetir un pedido, consultar un estado o acumular puntos. Si le visitan una vez al año, un buen sitio móvil sale más barato, y se lo diremos antes de empezar. Nativa o multiplataforma: lo deciden el presupuesto y si la aplicación necesita cámara, ubicación y modo sin conexión."
          ],
          files: ["aplicaciones para iOS y Android", "parte de servidor y API", "panel de administración para contenidos, pedidos y usuarios", "notificaciones push y analítica", "publicación en App Store y Google Play"],
          result: "La aplicación supera la revisión de las tiendas y su equipo la gestiona sin desarrolladores."
        },
        {
          summary: "Soluciones con inteligencia artificial",
          desc: [
            "Automatización de procesos de negocio con agentes de IA, basados en inteligencia artificial y aprendizaje automático. El agente se encarga por sí mismo de los pasos rutinarios: clasificar solicitudes, rellenar el CRM, preparar respuestas a los clientes.",
            "Somos más escépticos con la IA que la mayoría: la mitad de las ideas del tipo «pongamos una red neuronal» se resuelven con automatización corriente. Pero donde hay personas que pasan horas clasificando correos, documentos y solicitudes, los modelos de lenguaje eliminan la rutina de verdad. Empezamos con un piloto sobre sus datos, así que verá las cifras de precisión antes del desarrollo principal."
          ],
          files: ["agentes de IA para los pasos rutinarios del proceso", "chatbots y asistentes para clientes y empleados", "reconocimiento de documentos y extracción de datos", "clasificación de solicitudes, búsqueda en la base de conocimiento", "previsión de la demanda y análisis de datos", "un piloto con la calidad medida sobre sus datos"],
          result: "Un proceso que antes hacían personas lo ejecuta ahora el sistema. La última palabra sigue siendo de una persona."
        },
        {
          summary: "Desarrollo de CRM y ERP",
          desc: [
            "CRM y ERP construidos en torno a sus procesos. No se admite la compatibilidad con «el proceso adaptado al sistema».",
            "Un CRM estándar sirve mientras su proceso se parezca al estándar. Si los comerciales llevan la mitad del trabajo en hojas de cálculo porque el sistema «no permite hacerlo», uno propio le saldrá más barato. Migramos los datos de los sistemas antiguos y de las hojas de cálculo e implantamos departamento por departamento, para que el trabajo no se detenga ni un día."
          ],
          files: ["módulos de ventas, almacén, producción y finanzas, según se necesiten", "roles, permisos, registro de actividad", "informes y cuadros de mando para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "integración con contabilidad, telefonía y correo"],
          result: "Un solo sistema en lugar de un zoológico de hojas de cálculo. La dirección ve cómo van las cosas sin informes semanales de cada departamento."
        },
        {
          summary: "Soluciones en la nube",
          desc: [
            "Trasladamos su infraestructura, entera o por partes, a Amazon Web Services y la cuidamos después, para que funcione y no se encarezca sin motivo.",
            "La nube no siempre es más barata que un servidor propio. Compensa cuando la carga sube y baja, cuando se necesita tolerancia a fallos o cuando los nuevos entornos deben estar listos en minutos y no en una semana. Por eso la instalación empieza con una auditoría y un cálculo de costes, y la migración se hace por etapas, con un plan de vuelta atrás en cada paso."
          ],
          files: ["auditoría de la infraestructura y cálculo de costes", "arquitectura en AWS y plan de migración", "traslado de servidores, bases de datos y archivos", "copias de seguridad y monitorización", "optimización de costes tras la migración"],
          result: "Una infraestructura que sobrevive a la caída de un servidor y una factura de la nube que tiene sentido."
        },
        {
          summary: "Infraestructura empresarial con Red Hat",
          desc: [
            "La infraestructura de TI de la empresa con Red Hat: servidores con Red Hat Enterprise Linux, la plataforma de contenedores OpenShift, automatización con Ansible.",
            "Red Hat se elige cuando la infraestructura debe funcionar durante años y superar auditorías, en lugar de depender de la memoria de un solo administrador. La suscripción se amortiza con el soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene soporte durante diez años. Diseñamos para sus cargas y describimos la configuración de los servidores en Ansible, de modo que cualquier servidor puede reconstruirse a partir de un playbook. Red Hat es nuestro socio, así que también le ayudamos con las suscripciones y el soporte del fabricante."
          ],
          files: ["auditoría de los servidores actuales y plan de migración", "Red Hat Enterprise Linux, actualizaciones mediante Red Hat Satellite", "la plataforma de contenedores OpenShift", "automatización de la configuración y el despliegue con Ansible", "cuentas y accesos: Identity Management", "monitorización, copias de seguridad, documentación"],
          result: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin perder lo que se sabe de ella."
        },
        {
          summary: "API e integraciones",
          desc: [
            "API para sus sistemas de TI y conexiones con los servicios que ya utiliza.",
            "Lo que vemos con más frecuencia: datos introducidos dos veces. Los pedidos de la web se vuelven a teclear en el sistema contable y los pagos se cuadran en una hoja de cálculo. Una integración elimina ese trabajo junto con los errores que provoca. La monitorización forma parte obligatoria del paquete: las integraciones se rompen en silencio cuando un socio cambia su API, y es mejor enterarse por el sistema que por un cliente."
          ],
          files: ["diseño y documentación de API", "integraciones con pasarelas de pago, envíos, CRM y contabilidad", "intercambio de datos entre sistemas internos", "colas y reintentos ante fallos", "monitorización y alertas"],
          result: "Los datos se introducen una sola vez y llegan por sí solos a donde hacen falta."
        },
        {
          summary: "Soporte técnico",
          desc: [
            "Soporte y evolución de sus sistemas de TI, incluidos los que no hemos desarrollado nosotros.",
            "Corregir errores es solo una parte del paquete. También incluye actualizaciones que cierran vulnerabilidades, una monitorización que detecta un problema antes que los usuarios y pequeñas mejoras sobre la marcha. Si el sistema viene de otro proveedor, empezamos con una auditoría y documentación: sin ella, cada cambio es una apuesta."
          ],
          files: ["monitorización de la disponibilidad y de los errores", "corrección de errores y actualizaciones de seguridad", "copias de seguridad y pruebas de restauración", "mejoras y nuevas funciones planificadas", "auditoría y documentación de sistemas de otros proveedores"],
          result: "El sistema funciona y el equipo sabe cómo está construido."
        }
      ]
    },
    pt: {
      files: "Conteúdo do pacote",
      result: "Após a instalação",
      lead: "Os pacotes do grupo Services instalam-se à medida da tarefa, e não o contrário: escolhemos a linguagem e a plataforma quando já está claro o que é preciso fazer. Por vezes, a melhor resposta é um serviço por subscrição já existente, e nesse caso dizemo-lo.",
      pkgs: [
        {
          summary: "Conceção de soluções de TI",
          desc: [
            "Instala-se primeiro, antes de existir qualquer código. Percebemos que problema o sistema tem de resolver e traduzimo-lo em requisitos que o negócio e os programadores leem da mesma maneira.",
            "Os erros mais caros de um projeto de TI cometem-se antes de alguém começar a programar: o sistema é construído para um problema que ninguém formulou com clareza. Por isso falamos com todos os que o vão usar (contabilidade, armazém, comerciais), e não apenas com quem assina. Por vezes, a conclusão é não desenvolver nada e configurar um produto existente. Também isso é um resultado."
          ],
          files: ["entrevistas com os colaboradores e análise dos processos", "requisitos de negócio e cenários de utilização", "comparação de produtos existentes com desenvolvimento por medida", "caderno de encargos com estimativa de prazos e orçamento por fase"],
          result: "Um documento com o qual qualquer equipa, a nossa ou outra, consegue orçamentar o trabalho e começá-lo."
        },
        {
          summary: "Desenvolvimento SaaS",
          desc: [
            "Uma plataforma SaaS chave na mão: da primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu espaço, os seus planos e a sua área de cliente.",
            "No SaaS, quem gera receita não é o código, é o percurso do novo cliente: regista-se, paga, começa a trabalhar e nunca liga para o suporte. A arquitetura multi-inquilino, a faturação e as permissões de acesso fazem parte deste pacote desde o primeiro dia, porque acrescentá-las quando os clientes já lá estão custa várias vezes mais. A primeira versão sai cedo: os utilizadores reais mostram depressa o que estava a mais."
          ],
          files: ["arquitetura multi-inquilino, dados dos clientes isolados", "registo, planos, subscrições, pagamento online", "áreas de cliente, perfis e permissões de acesso", "integrações e uma API pública para clientes", "escalabilidade à medida que a carga cresce"],
          result: "Um produto vendido por subscrição, e não um projeto implementado à mão de cada vez."
        },
        {
          summary: "Desenvolvimento web",
          desc: [
            "Sites empresariais, marketplaces, lojas online, sistemas de reservas, ferramentas web internas. O pacote não inclui modelos prontos.",
            "Um site empresarial avalia-se pelos pedidos de contacto e pelas encomendas, não pelo aspeto num portefólio. Por isso, antes de começar, definimos o que conta como resultado, e a análise de tráfego fica configurada antes do lançamento. A tecnologia depende da tarefa: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites."
          ],
          files: ["protótipo e design das interfaces", "frontend, backend, painel de administração", "integrações com pagamentos, entregas, CRM e contabilidade", "bases de SEO, velocidade de carregamento, análise de tráfego", "lançamento e acompanhamento"],
          result: "Um serviço web em que se vê quantos pedidos e quanta receita traz."
        },
        {
          summary: "Aplicações móveis",
          desc: [
            "Aplicações para iOS e Android, com a parte de servidor e um painel de administração.",
            "Uma aplicação compensa quando os clientes voltam com regularidade: para repetir uma encomenda, acompanhar um estado, acumular pontos. Se o visitam uma vez por ano, um bom site móvel fica mais barato, e dizemo-lo antes de começar. Nativa ou multiplataforma: decide o orçamento e a necessidade de câmara, localização e modo offline."
          ],
          files: ["aplicações para iOS e Android", "parte de servidor e API", "painel de administração para conteúdos, encomendas e utilizadores", "notificações push e estatísticas", "publicação na App Store e no Google Play"],
          result: "A aplicação passa a revisão das lojas e a sua equipa gere-a sem programadores."
        },
        {
          summary: "Soluções com inteligência artificial",
          desc: [
            "Automatização de processos de negócio com agentes de IA, baseados em inteligência artificial e aprendizagem automática. O agente trata sozinho dos passos rotineiros: triar pedidos, preencher o CRM, preparar respostas aos clientes.",
            "Somos mais céticos em relação à IA do que a maioria: metade das ideias do género «vamos pôr uma rede neuronal» resolve-se com automatização comum. Mas onde há pessoas a passar horas a triar e-mails, documentos e pedidos, os modelos de linguagem tiram mesmo a rotina de cima. Começamos com um piloto sobre os seus dados, para que veja os números de precisão antes do desenvolvimento principal."
          ],
          files: ["agentes de IA para os passos rotineiros do processo", "chatbots e assistentes para clientes e colaboradores", "reconhecimento de documentos e extração de dados", "classificação de pedidos, pesquisa na base de conhecimento", "previsão da procura e análise de dados", "um piloto com a qualidade medida sobre os seus dados"],
          result: "Um processo que antes era feito por pessoas passa a ser executado pelo sistema. A última palavra continua a ser de uma pessoa."
        },
        {
          summary: "Desenvolvimento de CRM e ERP",
          desc: [
            "CRM e ERP construídos à volta dos seus processos. A retrocompatibilidade com «o processo ajustado ao sistema» não é suportada.",
            "Um CRM de prateleira serve enquanto o seu processo se parecer com o padrão. Se os comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», um sistema próprio sai mais barato. Migramos os dados de sistemas antigos e de folhas de cálculo e implementamos departamento a departamento, para que o trabalho não pare um único dia."
          ],
          files: ["módulos de vendas, armazém, produção e finanças, conforme a necessidade", "perfis, permissões de acesso, registo de atividade", "relatórios e painéis para a gestão", "migração de dados de folhas de cálculo e sistemas antigos", "integração com contabilidade, telefonia e e-mail"],
          result: "Um único sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê o ponto da situação sem relatórios semanais de cada departamento."
        },
        {
          summary: "Soluções na cloud",
          desc: [
            "Levamos a sua infraestrutura, no todo ou em parte, para a Amazon Web Services e cuidamos dela depois, para que funcione e não fique mais cara sem motivo.",
            "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila, quando é precisa tolerância a falhas ou quando novos ambientes devem ficar prontos em minutos e não numa semana. Por isso a instalação começa com uma auditoria e uma estimativa de custos, e a migração faz-se por etapas, com um plano de reversão em cada passo."
          ],
          files: ["auditoria da infraestrutura e estimativa de custos", "arquitetura na AWS e plano de migração", "migração de servidores, bases de dados e ficheiros", "cópias de segurança e monitorização", "otimização de custos após a migração"],
          result: "Uma infraestrutura que sobrevive à falha de um servidor e uma fatura de cloud que faz sentido."
        },
        {
          summary: "Infraestrutura empresarial em Red Hat",
          desc: [
            "A infraestrutura de TI da empresa em Red Hat: servidores com Red Hat Enterprise Linux, a plataforma de contentores OpenShift, automatização com Ansible.",
            "Escolhe-se Red Hat quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de depender da memória de um único administrador. A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos. Projetamos para as suas cargas e descrevemos a configuração dos servidores em Ansible, para que qualquer servidor possa ser reconstruído a partir de um playbook. A Red Hat é nossa parceira, por isso também ajudamos com as subscrições e o suporte do fabricante."
          ],
          files: ["auditoria dos servidores atuais e plano de migração", "Red Hat Enterprise Linux, atualizações através do Red Hat Satellite", "a plataforma de contentores OpenShift", "automatização da configuração e da implementação com Ansible", "contas e acessos: Identity Management", "monitorização, cópias de segurança, documentação"],
          result: "Uma infraestrutura que se pode auditar, reproduzir e entregar a outra equipa sem perder o conhecimento acumulado."
        },
        {
          summary: "APIs e integrações",
          desc: [
            "APIs para os seus sistemas de TI e ligações aos serviços que já utiliza.",
            "O cenário que vemos com mais frequência: dados introduzidos duas vezes. As encomendas do site são copiadas à mão para o sistema de contabilidade, os pagamentos são conferidos numa folha de cálculo. Uma integração elimina esse trabalho, juntamente com os erros que ele provoca. A monitorização faz obrigatoriamente parte do pacote: as integrações avariam em silêncio quando um parceiro altera a sua API, e é melhor saber disso pelo sistema do que por um cliente."
          ],
          files: ["conceção e documentação de APIs", "integrações com prestadores de pagamento, entregas, CRM e contabilidade", "troca de dados entre sistemas internos", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          result: "Os dados são introduzidos uma só vez e chegam sozinhos a todo o lado onde fazem falta."
        },
        {
          summary: "Suporte técnico",
          desc: [
            "Suporte e evolução dos seus sistemas de TI, incluindo os que não fomos nós a desenvolver.",
            "Corrigir erros é apenas uma parte do pacote. Inclui também atualizações que fecham vulnerabilidades, monitorização que deteta um problema antes dos utilizadores e pequenas melhorias pelo caminho. Se o sistema vem de outro fornecedor, começamos por uma auditoria e pela documentação: sem ela, cada alteração é uma lotaria."
          ],
          files: ["monitorização da disponibilidade e dos erros", "correção de erros e atualizações de segurança", "cópias de segurança e testes de reposição", "melhorias e novas funcionalidades planeadas", "auditoria e documentação de sistemas de terceiros"],
          result: "O sistema funciona e a equipa sabe como está construído."
        }
      ]
    },
    it: {
      files: "Contenuto del pacchetto",
      result: "Dopo l'installazione",
      lead: "I pacchetti del gruppo Services si installano in base al compito, non il contrario: linguaggio e piattaforma li scegliamo quando è chiaro che cosa c'è da fare. A volte la risposta migliore è un servizio in abbonamento già pronto, e in quel caso glielo diciamo.",
      pkgs: [
        {
          summary: "Ideazione della soluzione IT",
          desc: [
            "Si installa per primo, prima che esista una riga di codice. Chiariamo quale problema deve risolvere il sistema e lo traduciamo in requisiti che il business e gli sviluppatori leggono allo stesso modo.",
            "Gli errori più costosi di un progetto IT nascono prima ancora della programmazione: il sistema viene costruito per un problema che nessuno ha formulato con chiarezza. Per questo parliamo con tutti quelli che lo useranno (contabilità, magazzino, commerciali), non solo con chi firma. A volte la conclusione è non sviluppare nulla e configurare un prodotto esistente. Anche questo è un risultato."
          ],
          files: ["interviste al personale e analisi dei processi", "requisiti di business e scenari d'uso", "confronto tra prodotti pronti e sviluppo su misura", "capitolato tecnico con stima di tempi e budget per fase"],
          result: "Un documento con cui qualsiasi team, il nostro o un altro, può stimare il lavoro e avviarlo."
        },
        {
          summary: "Sviluppo SaaS",
          desc: [
            "Una piattaforma SaaS chiavi in mano: dalla prima versione per i clienti pilota fino a un servizio in cui ogni cliente ha il proprio spazio, i propri piani e la propria area riservata.",
            "Nel SaaS i soldi non li fa il codice, ma il percorso del nuovo cliente: si registra, paga, inizia a lavorare e non chiama mai l'assistenza. Multi-tenancy, fatturazione e permessi di accesso sono in questo pacchetto dal primo giorno, perché aggiungerli quando i clienti sono già dentro costa molte volte di più. La prima versione esce presto: gli utenti reali mostrano in fretta che cosa era superfluo."
          ],
          files: ["architettura multi-tenant, dati dei clienti isolati", "registrazione, piani, abbonamenti, pagamenti online", "aree riservate dei clienti, ruoli e permessi", "integrazioni e un'API pubblica per i clienti", "scalabilità al crescere del carico"],
          result: "Un prodotto venduto in abbonamento, non un progetto installato a mano ogni volta."
        },
        {
          summary: "Sviluppo web",
          desc: [
            "Siti aziendali, marketplace, negozi online, sistemi di prenotazione, strumenti web interni. Nessun modello preconfezionato nel pacchetto.",
            "Un sito aziendale si giudica dalle richieste e dagli ordini, non da come appare in un portfolio. Per questo, prima di iniziare, stabiliamo che cosa conta come risultato e configuriamo le statistiche prima del lancio. La tecnologia dipende dal compito: una landing page non ha bisogno di una piattaforma pesante, e un marketplace non sta in un costruttore di siti."
          ],
          files: ["prototipo e progettazione delle interfacce", "frontend, backend, pannello di amministrazione", "integrazioni con pagamenti, spedizioni, CRM e contabilità", "basi SEO, velocità di caricamento, statistiche", "lancio e assistenza continuativa"],
          result: "Un servizio web di cui si vede quante richieste e quanto fatturato porta."
        },
        {
          summary: "App mobili",
          desc: [
            "App per iOS e Android, insieme alla parte server e a un pannello di amministrazione.",
            "Un'app conviene quando i clienti tornano regolarmente: per riordinare, controllare uno stato, raccogliere punti. Se La visitano una volta l'anno, un buon sito mobile costa meno, e glielo diciamo prima di iniziare. Nativa o multipiattaforma: decidono il budget e la necessità di fotocamera, posizione e modalità offline."
          ],
          files: ["app per iOS e Android", "parte server e API", "pannello di amministrazione per contenuti, ordini e utenti", "notifiche push e statistiche", "pubblicazione su App Store e Google Play"],
          result: "L'app supera la revisione degli store e il Suo team la gestisce senza sviluppatori."
        },
        {
          summary: "Soluzioni di intelligenza artificiale",
          desc: [
            "Automazione dei processi aziendali con agenti di IA, basati su intelligenza artificiale e apprendimento automatico. L'agente svolge da solo i passaggi di routine: smista le richieste, compila il CRM, prepara le risposte ai clienti.",
            "Nei confronti dell'IA siamo più scettici di molti: metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione. Ma dove le persone passano ore a smistare e-mail, documenti e richieste, i modelli linguistici tolgono davvero la routine. Partiamo da un progetto pilota sui Suoi dati, così vedrà i valori di accuratezza prima dello sviluppo vero e proprio."
          ],
          files: ["agenti di IA per i passaggi di routine del processo", "chatbot e assistenti per clienti e dipendenti", "riconoscimento di documenti ed estrazione di dati", "classificazione delle richieste, ricerca nella knowledge base", "previsione della domanda e analisi dei dati", "un pilota con la qualità misurata sui Suoi dati"],
          result: "Un processo che prima svolgevano le persone ora lo esegue il sistema. L'ultima parola resta a una persona."
        },
        {
          summary: "Sviluppo CRM ed ERP",
          desc: [
            "CRM ed ERP costruiti attorno ai Suoi processi. La retrocompatibilità con «il processo adattato al sistema» non è supportata.",
            "Un CRM standard va bene finché il Suo processo somiglia a quello standard. Se i commerciali tengono metà del lavoro nei fogli di calcolo perché il sistema «non lo prevede», uno su misura costerà meno. Migriamo i dati dai vecchi sistemi e dai fogli di calcolo e avviamo reparto per reparto, così il lavoro non si ferma nemmeno un giorno."
          ],
          files: ["moduli vendite, magazzino, produzione, finanza, secondo le necessità", "ruoli, permessi, registro delle attività", "report e dashboard per la direzione", "migrazione dei dati da fogli di calcolo e vecchi sistemi", "integrazione con contabilità, telefonia e posta elettronica"],
          result: "Un unico sistema al posto di uno zoo di fogli di calcolo. La direzione vede come stanno le cose senza report settimanali da ogni reparto."
        },
        {
          summary: "Soluzioni cloud",
          desc: [
            "Trasferiamo la Sua infrastruttura, in tutto o in parte, su Amazon Web Services e poi ce ne occupiamo, perché funzioni e non diventi più cara senza motivo.",
            "Il cloud non è sempre più economico di un server proprio. Conviene quando il carico oscilla, quando serve tolleranza ai guasti o quando i nuovi ambienti devono essere pronti in pochi minuti anziché in una settimana. Per questo l'installazione inizia con un audit e una stima dei costi, e la migrazione procede per fasi, con un piano di rollback a ogni passo."
          ],
          files: ["audit dell'infrastruttura e stima dei costi", "architettura su AWS e piano di migrazione", "trasferimento di server, database e file", "backup e monitoraggio", "ottimizzazione dei costi dopo la migrazione"],
          result: "Un'infrastruttura che sopravvive al guasto di un server e una bolletta del cloud che ha senso."
        },
        {
          summary: "Infrastruttura aziendale su Red Hat",
          desc: [
            "L'infrastruttura IT dell'azienda su Red Hat: server con Red Hat Enterprise Linux, la piattaforma di container OpenShift, automazione con Ansible.",
            "Si sceglie Red Hat quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di vivere nella memoria di un solo amministratore. L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni. Progettiamo per i Suoi carichi e descriviamo la configurazione dei server in Ansible, così qualsiasi server si può ricostruire da un playbook. Red Hat è nostro partner, quindi La aiutiamo anche con abbonamenti e supporto del produttore."
          ],
          files: ["audit dei server attuali e piano di migrazione", "Red Hat Enterprise Linux, aggiornamenti tramite Red Hat Satellite", "la piattaforma di container OpenShift", "automazione di configurazione e deployment con Ansible", "account e accessi: Identity Management", "monitoraggio, backup, documentazione"],
          result: "Un'infrastruttura che si può verificare, riprodurre e affidare a un altro team senza perdere conoscenze."
        },
        {
          summary: "API e integrazioni",
          desc: [
            "API per i Suoi sistemi IT e collegamenti con i servizi che già utilizza.",
            "Il quadro che vediamo più spesso: dati inseriti due volte. Gli ordini del sito ricopiati a mano nel gestionale contabile, i pagamenti riconciliati in un foglio di calcolo. Un'integrazione elimina questo lavoro insieme agli errori che provoca. Il monitoraggio è parte obbligatoria del pacchetto: le integrazioni si rompono in silenzio quando un partner cambia la propria API, ed è meglio saperlo dal sistema che da un cliente."
          ],
          files: ["progettazione e documentazione delle API", "integrazioni con sistemi di pagamento, spedizioni, CRM e contabilità", "scambio di dati tra sistemi interni", "code e nuovi tentativi in caso di errore", "monitoraggio e avvisi"],
          result: "I dati si inseriscono una sola volta e arrivano da soli ovunque servano."
        },
        {
          summary: "Supporto tecnico",
          desc: [
            "Assistenza ed evoluzione dei Suoi sistemi IT, compresi quelli che non abbiamo sviluppato noi.",
            "La correzione dei bug è solo una parte del pacchetto. Ci sono anche gli aggiornamenti che chiudono le vulnerabilità, un monitoraggio che si accorge di un problema prima degli utenti e piccoli miglioramenti strada facendo. Se il sistema arriva da un altro fornitore, partiamo da un audit e dalla documentazione: senza, ogni modifica è un azzardo."
          ],
          files: ["monitoraggio della disponibilità e degli errori", "correzione dei bug e aggiornamenti di sicurezza", "backup e prove di ripristino", "migliorie e nuove funzioni pianificate", "audit e documentazione di sistemi altrui"],
          result: "Il sistema funziona e il team sa com'è fatto."
        }
      ]
    }
  };

  /* Мови й адреси дає спільний рантайм window.AIC */
  const AIC = window.AIC || {};
  const LANGS = (Array.isArray(AIC.langs) && AIC.langs.length ? AIC.langs : Object.keys(I18N)).filter((l) => I18N[l] && RX[l] && RPM[l]);
  const LANG_NAMES = AIC.langNames || Object.fromEntries(LANGS.map((l) => [l, l.toUpperCase()]));
  const VERSIONS = [["Norton Commander", "nc"], ["DOS", "dos"], ["UNIX", "unix"], ["Apple ][", "apple"], ["Apple Lisa", "lisa"], ["Midnight Commander", "mc"], ["Windows 3.11", "win31"], ["AI", "ai"]];
  /* Адреса іншої версії сайту поточною мовою */
  const vurl = (id) => (typeof AIC.url === "function" ? AIC.url(id, lang) : (lang === "uk" ? "/" : "/" + lang + "/") + id + "/");
  /* Французька ставить нерозривний пробіл перед двокрапкою */
  const colon = () => (lang === "fr" ? "\u00a0:" : ":");
  const SVC = ["concept", "saas", "web", "mobile", "ai", "crm-erp", "cloud", "redhat", "api", "support"];
  const PKGS = [{ name: "aic-release", group: "Base", kind: "about" }, ...SVC.map((s, i) => ({ name: "aic-" + s, group: "Services", kind: "svc", i }))];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const narrow = () => matchMedia("(max-width: 760px)").matches;
  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || LANGS.find((l) => nav.startsWith(l)) || "uk";
  if (!LANGS.includes(lang)) lang = "uk";
  const t = () => I18N[lang];
  const r = () => RX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const bytes = (s) => new TextEncoder().encode(s).length;
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };

  const svcPkg = (i) => RPM[lang].pkgs[i];
  const pkgTitle = (p) => (p.kind === "svc" ? svcPkg(p.i).summary : t().readmeDesc);
  /* Повний текст опису: абзаци, склад пакета, результат */
  const pkgText = (p) => {
    if (p.kind !== "svc") return [t().heroTitle, t().heroText].join(" ");
    const k = svcPkg(p.i);
    const R = RPM[lang];
    return [...k.desc, R.files + colon(), ...k.files.map((f) => "  - " + f), R.result + colon(), "  " + k.result].join("\n");
  };

  /* ---------- Піктограми у стилі XPM ---------- */
  const SVG = {
    xterm: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><rect x="3" y="4" width="30" height="22" fill="#d9d9d9" stroke="#000"/><rect x="6" y="7" width="24" height="16" fill="#fff" stroke="#000"/><path d="M8 10h6M8 13h10M8 16h4" stroke="#000"/><rect x="13" y="16" width="3" height="2"/><rect x="12" y="27" width="12" height="3" fill="#d9d9d9" stroke="#000"/><rect x="6" y="30" width="24" height="3" fill="#d9d9d9" stroke="#000"/></svg>`,
    cp: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><rect x="4" y="5" width="28" height="26" fill="#d9d9d9" stroke="#000"/><rect x="7" y="8" width="22" height="6" fill="#c06077" stroke="#000"/><rect x="7" y="17" width="9" height="11" fill="#fff" stroke="#000"/><rect x="19" y="17" width="10" height="4" fill="#fff" stroke="#000"/><rect x="19" y="24" width="10" height="4" fill="#000080" stroke="#000"/></svg>`,
    glint: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><path d="M4 12 18 6l14 6v16l-14 6-14-6z" fill="#c8a060" stroke="#000"/><path d="M4 12l14 6 14-6M18 18v16" fill="none" stroke="#000"/><path d="M11 9l14 6v5" fill="none" stroke="#6a4a20" stroke-width="2"/></svg>`,
    mail: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><rect x="4" y="9" width="28" height="19" fill="#fff" stroke="#000"/><path d="M4 9l14 11 14-11" fill="none" stroke="#000"/></svg>`,
    partners: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><circle cx="12" cy="12" r="5" fill="#fff" stroke="#000"/><circle cx="24" cy="12" r="5" fill="#d9d9d9" stroke="#000"/><path d="M3 30v-6c0-3 3-5 9-5s9 2 9 5v6zM15 30v-6c0-3 3-5 9-5s9 2 9 5v6z" fill="#c06077" stroke="#000"/></svg>`,
    lang: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><rect x="4" y="6" width="20" height="16" fill="#fff" stroke="#000"/><rect x="12" y="14" width="20" height="16" fill="#d9d9d9" stroke="#000"/><path d="M9 18l5-9 5 9M11 15h6M17 19h10M22 19v7M18 26c4 0 8-3 8-7" fill="none" stroke="#000"/></svg>`,
    versions: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><rect x="3" y="4" width="18" height="14" fill="#000080" stroke="#000"/><rect x="15" y="12" width="18" height="14" fill="#000" stroke="#000"/><path d="M18 17h4M18 20h8" stroke="#33ff66"/><rect x="9" y="22" width="18" height="10" fill="#fff" stroke="#000"/></svg>`,
    about: `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><path d="M8 3h14l6 6v24H8z" fill="#fff" stroke="#000"/><path d="M22 3v6h6M12 14h12M12 18h12M12 22h12M12 26h8" fill="none" stroke="#000"/></svg>`,
    folder: `<svg viewBox="0 0 16 14" shape-rendering="crispEdges"><path d="M.5 2.5h5l1 1h8v10H.5z" fill="#e8d088" stroke="#000"/></svg>`
  };
  const xbiffSvg = (flag) => `<svg viewBox="0 0 36 36" shape-rendering="crispEdges"><path d="M6 14c0-5 4-8 9-8h12c4 0 5 3 5 8v12H6z" fill="#d9d9d9" stroke="#000"/><path d="M6 14c0-4 3-8 7-8s7 4 7 8v12" fill="none" stroke="#000"/><rect x="16" y="26" width="4" height="8" fill="#828282" stroke="#000"/>${flag
    ? `<rect x="27" y="1" width="2" height="14" fill="#000"/><rect x="21" y="1" width="7" height="5" fill="#c00" stroke="#000"/>`
    : `<rect x="27" y="14" width="2" height="10" fill="#000"/><rect x="28" y="14" width="7" height="4" fill="#c00" stroke="#000"/>`}</svg>`;

  /* ---------- Віконний менеджер ---------- */
  const xroot = $("xroot");
  const wins = new Map();
  let zTop = 10;
  let desk = 0;
  const rootRect = () => xroot.getBoundingClientRect();
  const topInset = () => $("goodstuff") ? $("goodstuff").getBoundingClientRect().bottom + 6 : 0;

  function frame(id, def) {
    const el = document.createElement("section");
    el.className = "fw";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "wt-" + id);
    el.innerHTML = `
      <div class="tb">
        <button type="button" class="b menu" aria-label="Window menu"><i></i></button>
        <div class="title" id="wt-${id}"><span></span></div>
        <button type="button" class="b min" aria-label="Iconify"><i></i></button>
        <button type="button" class="b max" aria-label="Maximize"><i></i></button>
      </div>
      <div class="client"></div>
      ${["n", "s", "e", "w", "nw", "ne", "sw", "se"].map((d) => `<div class="h ${d}" data-dir="${d}" aria-hidden="true"></div>`).join("")}`;
    return el;
  }

  function open(id, def) {
    if (wins.has(id)) { const w = wins.get(id); if (w.iconified) deiconify(id); else focus(id); return w; }
    def = def || DEFS[id]();
    const el = frame(id, def);
    const R = rootRect();
    const top = topInset();
    const [w, h] = def.size;
    const width = Math.min(w, R.width - 16);
    const height = Math.min(h, R.height - top - 12);
    let [x, y] = def.pos;
    if (x === "c") x = (R.width - width) / 2;
    if (y === "c") y = top + (R.height - top - height) / 2;
    if (x < 0) x = R.width - width + x;
    x = Math.max(4, Math.min(x, R.width - width - 4));
    y = Math.max(top, Math.min(y, R.height - height - 4));
    Object.assign(el.style, { left: x + "px", top: y + "px", width: width + "px", height: height + "px" });
    const rec = { id, el, def, desk, client: el.querySelector(".client"), iconified: false };
    wins.set(id, rec);
    rec.render = () => {
      el.querySelector(".title span").textContent = def.title();
      def.render(rec.client, rec);
    };
    rec.render();
    setupFrame(rec);
    xroot.appendChild(el);
    focus(id);
    if (def.mounted) def.mounted(rec);
    pager();
    return rec;
  }

  function close(id) {
    const w = wins.get(id);
    if (!w) return;
    if (w.def.closed) w.def.closed(w);
    w.el.remove();
    if (w.icon) w.icon.remove();
    wins.delete(id);
    const next = [...wins.values()].filter((o) => !o.iconified && o.desk === desk).sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0];
    if (next) focus(next.id);
    layoutIcons();
    pager();
  }

  function focus(id) {
    const w = wins.get(id);
    if (!w) return;
    wins.forEach((o) => o.el.classList.toggle("active", o === w));
    if (Number(w.el.style.zIndex) !== zTop) w.el.style.zIndex = ++zTop;
    if (w.def.focused) w.def.focused(w);
    pager();
  }
  const active = () => [...wins.values()].find((w) => w.el.classList.contains("active"));

  function lower(id) {
    const w = wins.get(id);
    const min = Math.min(...[...wins.values()].map((o) => Number(o.el.style.zIndex) || 10));
    w.el.style.zIndex = min - 1;
    pager();
  }

  function iconify(id) {
    const w = wins.get(id);
    if (!w || w.iconified) return;
    w.iconified = true;
    w.el.hidden = true;
    const ic = document.createElement("button");
    ic.type = "button";
    ic.className = "xicon";
    ic.innerHTML = `${w.def.icon ? SVG[w.def.icon] : SVG.xterm}<span>${esc(w.def.title())}</span>`;
    ic.addEventListener("click", () => deiconify(id));
    w.icon = ic;
    xroot.appendChild(ic);
    layoutIcons();
    const next = [...wins.values()].find((o) => !o.iconified && o.desk === desk);
    if (next) focus(next.id);
    pager();
  }
  function deiconify(id) {
    const w = wins.get(id);
    if (!w) return;
    w.iconified = false;
    w.desk = desk;
    w.el.hidden = false;
    if (w.icon) { w.icon.remove(); w.icon = null; }
    layoutIcons();
    focus(id);
  }
  function layoutIcons() {
    const R = rootRect();
    let k = 0;
    wins.forEach((w) => {
      if (!w.icon) return;
      w.icon.hidden = w.desk !== desk;
      if (w.icon.hidden) return;
      Object.assign(w.icon.style, { left: (8 + (k % 10) * 92) + "px", top: (R.height - 76 - Math.floor(k / 10) * 80) + "px" });
      k++;
    });
  }

  function maximize(id) {
    const w = wins.get(id);
    const s = w.el.style;
    if (w.saved) { Object.assign(s, w.saved); w.saved = null; }
    else {
      w.saved = { left: s.left, top: s.top, width: s.width, height: s.height };
      const R = rootRect();
      const top = topInset();
      Object.assign(s, { left: "0px", top: top + "px", width: R.width + "px", height: (R.height - top) + "px" });
    }
    pager();
  }

  function switchDesk(n) {
    desk = n;
    wins.forEach((w) => { w.el.hidden = w.iconified || w.desk !== desk; });
    layoutIcons();
    const top = [...wins.values()].filter((w) => !w.iconified && w.desk === desk).sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0];
    if (top) focus(top.id);
    else wins.forEach((o) => o.el.classList.remove("active"));
    pager();
  }

  /* Переміщення й зміна розміру контуром, як у fvwm */
  function rubber(rec, e, mode) {
    if (narrow() || e.button !== 0) return;
    e.preventDefault();
    focus(rec.id);
    const R = rootRect();
    const b0 = rec.el.getBoundingClientRect();
    const box = { left: b0.left - R.left, top: b0.top - R.top, width: b0.width, height: b0.height };
    const o = document.createElement("div");
    o.className = "outline";
    const draw = (b) => Object.assign(o.style, { left: b.left + "px", top: b.top + "px", width: b.width + "px", height: b.height + "px" });
    draw(box);
    xroot.appendChild(o);
    const sx = e.clientX, sy = e.clientY;
    let next = box;
    const tgt = e.currentTarget;
    tgt.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (mode === "move") next = { ...box, left: box.left + dx, top: Math.max(0, box.top + dy) };
      else {
        next = { ...box };
        if (mode.includes("e")) next.width = Math.max(160, box.width + dx);
        if (mode.includes("s")) next.height = Math.max(90, box.height + dy);
        if (mode.includes("w")) { next.width = Math.max(160, box.width - dx); next.left = box.left + box.width - next.width; }
        if (mode.includes("n")) { next.height = Math.max(90, box.height - dy); next.top = box.top + box.height - next.height; }
      }
      draw(next);
    };
    const up = () => {
      tgt.removeEventListener("pointermove", move);
      tgt.removeEventListener("pointerup", up);
      tgt.removeEventListener("pointercancel", up);
      o.remove();
      Object.assign(rec.el.style, { left: next.left + "px", top: next.top + "px", width: next.width + "px", height: next.height + "px" });
      rec.saved = null;
      if (rec.def.resized) rec.def.resized(rec);
      pager();
    };
    tgt.addEventListener("pointermove", move);
    tgt.addEventListener("pointerup", up);
    tgt.addEventListener("pointercancel", up);
  }

  function setupFrame(rec) {
    const el = rec.el;
    el.addEventListener("pointerdown", () => focus(rec.id), true);
    el.addEventListener("focusin", () => focus(rec.id));
    el.querySelector(".tb .title").addEventListener("pointerdown", (e) => rubber(rec, e, "move"));
    el.querySelectorAll(".h").forEach((h) => h.addEventListener("pointerdown", (e) => rubber(rec, e, h.dataset.dir)));
    el.querySelector(".b.min").addEventListener("click", () => iconify(rec.id));
    el.querySelector(".b.max").addEventListener("click", () => maximize(rec.id));
    el.querySelector(".b.menu").addEventListener("click", (e) => {
      const b = e.currentTarget.getBoundingClientRect();
      const o = r().ops;
      menu(b.left, b.bottom, null, [
        { label: o[2], act: () => focus(rec.id) },
        { label: o[3], act: () => lower(rec.id) },
        { label: o[4], act: () => iconify(rec.id) },
        { label: o[5], act: () => maximize(rec.id) },
        { sep: true },
        { label: o[6], act: () => close(rec.id) }
      ]);
    });
  }

  /* ---------- Меню fvwm ---------- */
  /* Меню можуть розкриватися каскадом: menus[0] — головне, далі підменю */
  const menus = [];
  function menu(x, y, title, items, level = 0, opener = null, focusFirst = true) {
    closeMenu(level);
    const m = document.createElement("div");
    m.className = "fmenu";
    m.setAttribute("role", "menu");
    if (title) m.setAttribute("aria-label", title);
    m.innerHTML = (title ? `<div class="mt">${esc(title)}</div>` : "") + items.map((it, k) => it.sep ? "<hr>"
      : it.sub ? `<button type="button" role="menuitem" class="sub" aria-haspopup="menu" aria-expanded="false" data-k="${k}">${esc(it.label)}</button>`
      : `<button type="button" role="menuitem${it.checked !== undefined ? "radio" : ""}" data-k="${k}"${it.checked !== undefined ? ` aria-checked="${it.checked}"` : ""}>${esc(it.label)}</button>`).join("");
    xroot.appendChild(m);
    const R = rootRect();
    const mr = m.getBoundingClientRect();
    if (opener) {
      /* Підменю праворуч від пункту, а якщо не влазить — ліворуч від батьківського меню */
      const ob = opener.getBoundingClientRect();
      const pb = opener.closest(".fmenu").getBoundingClientRect();
      x = ob.right + mr.width + 4 <= R.right ? ob.right - 2 : pb.left - mr.width + 2;
    }
    m.style.left = Math.max(0, Math.min(x - R.left, R.width - mr.width - 4)) + "px";
    m.style.top = Math.max(0, Math.min(y - R.top, R.height - mr.height - 4)) + "px";
    const openSub = (btn, focus) => {
      const it = items[Number(btn.dataset.k)];
      if (menus[level + 1] && btn.getAttribute("aria-expanded") === "true") { if (focus) menus[level + 1].querySelector("button").focus({ preventScroll: true }); return; }
      const ob = btn.getBoundingClientRect();
      menu(ob.right, ob.top - 3, it.label, it.sub(), level + 1, btn, focus);
      btn.setAttribute("aria-expanded", "true");
    };
    m.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-k]");
      if (!btn) return;
      const it = items[Number(btn.dataset.k)];
      if (it.sub) { openSub(btn, true); return; }
      closeMenu();
      it.act();
    });
    if (!coarse) m.addEventListener("pointerover", (e) => {
      const btn = e.target.closest("button[data-k]");
      if (!btn) return;
      if (items[Number(btn.dataset.k)].sub) openSub(btn, false);
      else closeMenu(level + 1);
    });
    m.addEventListener("keydown", (e) => {
      const bs = [...m.querySelectorAll("button")];
      const k = bs.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); bs[(k + 1) % bs.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); bs[(k - 1 + bs.length) % bs.length].focus(); }
      if (e.key === "ArrowRight" && bs[k] && bs[k].classList.contains("sub")) { e.preventDefault(); openSub(bs[k], true); }
      if ((e.key === "ArrowLeft" || e.key === "Escape") && opener) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu(level);
        opener.focus({ preventScroll: true });
      }
    });
    menus[level] = m;
    const first = m.querySelector("button");
    if (first && focusFirst) first.focus({ preventScroll: true });
    return m;
  }
  function closeMenu(level = 0) {
    while (menus.length > level) menus.pop().remove();
    const parent = menus[level - 1];
    if (parent) parent.querySelectorAll("[aria-expanded]").forEach((b) => b.setAttribute("aria-expanded", "false"));
  }
  document.addEventListener("pointerdown", (e) => { if (menus.length && !e.target.closest(".fmenu")) closeMenu(); }, true);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  function rootMenu(x, y) {
    const a = r().apps;
    menu(x, y, r().utilities, [
      { label: a.xterm, act: () => openXterm() },
      { label: a.cp, act: () => open("cp") },
      { label: a.glint, act: () => open("glint") },
      { label: a.mail, act: () => openMail() },
      { sep: true },
      { label: a.lang, sub: () => LANGS.map((l) => ({ label: LANG_NAMES[l], checked: l === lang, act: () => setLang(l) })) },
      { sep: true },
      ...VERSIONS.map(([n, id]) => ({ label: n, act: () => { location.href = vurl(id); } })),
      { sep: true },
      { label: r().exit, act: exitX }
    ]);
  }

  /* ---------- Застосунки ---------- */
  const DEFS = {
    cp: () => ({
      title: () => r().apps.cp, icon: "cp", size: [160, 560], pos: [-12, 96],
      render: (c) => {
        const icons = ["about", "glint", "partners", "mail", "lang", "versions"];
        c.innerHTML = `<div class="cp tk">${r().cp.map((l, i) => `<button type="button" class="tkbtn" data-i="${i}">${SVG[icons[i]]}<span>${esc(l)}</span></button>`).join("")}</div>`;
        c.querySelector(".cp").addEventListener("click", (e) => {
          const b = e.target.closest("[data-i]");
          if (!b) return;
          [() => openXterm("cat README"), () => open("glint"), () => open("partners"), () => openMail(), () => open("lang"), () => open("versions")][Number(b.dataset.i)]();
        });
      }
    }),
    glint: () => ({
      title: () => "Glint", icon: "glint", size: [640, 340], pos: [330, 445], state: { group: 0, sel: null },
      render: (c, rec) => renderGlint(c, rec)
    }),
    partners: () => ({
      title: () => r().apps.partners, icon: "partners", size: [320, 290], pos: ["c", "c"],
      render: (c, rec) => {
        c.innerHTML = `<div class="pad tk" style="flex:1"><h1>${esc(t().partnersTitle)}</h1><div class="well">${PARTNERS.map((p) =>
          `<div>${p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)}</div>`).join("")}</div></div>
          <div class="row tk"><button type="button" class="tkbtn default">${esc(r().close)}</button></div>`;
        c.querySelector(".row .tkbtn").addEventListener("click", () => close(rec.id));
      }
    }),
    lang: () => ({
      title: () => r().apps.lang, icon: "lang", size: [260, 330], pos: ["c", "c"],
      render: (c, rec) => {
        c.innerHTML = `<div class="pad tk" style="flex:1">${LANGS.map((l) => `<label class="radio"><input type="radio" name="lng" value="${l}"${l === lang ? " checked" : ""}> ${LANG_NAMES[l]}</label>`).join("")}</div>
          <div class="row tk"><button type="button" class="tkbtn default">${esc(r().close)}</button></div>`;
        c.querySelectorAll("input").forEach((i) => i.addEventListener("change", () => setLang(i.value)));
        c.querySelector(".row .tkbtn").addEventListener("click", () => close(rec.id));
      }
    }),
    versions: () => ({
      title: () => r().apps.versions, icon: "versions", size: [300, 290], pos: ["c", "c"],
      render: (c) => {
        c.innerHTML = `<div class="pad tk" style="display:flex;flex-direction:column;gap:8px;flex:1">${VERSIONS.map(([n, id]) => `<a class="tkbtn" href="${vurl(id)}">${n}</a>`).join("")}</div>`;
      }
    })
  };

  function dialog(id, title, html, buttons, size = [380, 180]) {
    if (wins.has(id)) close(id);
    return open(id, {
      title: () => (typeof title === "function" ? title() : title), icon: "glint", size, pos: ["c", "c"],
      render: (c, rec) => {
        c.innerHTML = `<div class="pad tk" style="flex:1">${typeof html === "function" ? html() : html}</div><div class="row tk">${buttons.map((b, i) =>
          b.href ? `<a class="tkbtn${i === 0 ? " default" : ""}" href="${b.href}">${esc(b.label)}</a>` : `<button type="button" class="tkbtn${i === 0 ? " default" : ""}" data-i="${i}">${esc(b.label)}</button>`).join("")}</div>`;
        c.querySelectorAll("button[data-i]").forEach((el) => el.addEventListener("click", () => { const b = buttons[Number(el.dataset.i)]; (b.act || (() => close(rec.id)))(); }));
        c.querySelectorAll("a.tkbtn").forEach((a) => a.addEventListener("click", () => setTimeout(() => close(rec.id), 0)));
        const f = c.querySelector(".tkbtn");
        if (f && !coarse) setTimeout(() => f.focus(), 0);
      }
    });
  }

  /* ---------- Glint: послуги як RPM-пакети ---------- */
  function renderGlint(c, rec) {
    const st = rec.def.state;
    const g = r().groups;
    const list = PKGS.filter((p) => st.group === 0 || (st.group === 1 ? p.group === "Base" : p.group === "Services"));
    const sel = PKGS.find((p) => p.name === st.sel);
    c.innerHTML = `<div class="glint tk">
      <div class="well tree" role="tree">
        <button type="button" role="treeitem" data-g="0" aria-selected="${st.group === 0}">${SVG.folder}${esc(g[0])}</button>
        <div class="sub">
          <button type="button" role="treeitem" data-g="1" aria-selected="${st.group === 1}">${SVG.folder}${esc(g[1])}</button>
          <button type="button" role="treeitem" data-g="2" aria-selected="${st.group === 2}">${SVG.folder}${esc(g[2])}</button>
        </div>
      </div>
      <div class="well pkgs" role="listbox" aria-label="Packages">${list.map((p) =>
        `<button type="button" class="pkg" role="option" data-p="${p.name}" aria-selected="${p.name === st.sel}" title="${esc(pkgTitle(p))}">${SVG.glint.replace('viewBox="0 0 36 36"', 'viewBox="0 0 36 36" aria-hidden="true"')}<span>${p.name}</span></button>`).join("")}</div>
      <div class="gbtns">
        <button type="button" class="tkbtn" data-a="query"${sel ? "" : " disabled"}>${esc(r().query)}</button>
        <button type="button" class="tkbtn" data-a="verify"${sel ? "" : " disabled"}>${esc(r().verify)}</button>
        <button type="button" class="tkbtn" data-a="install"${sel ? "" : " disabled"}>${esc(r().install)}</button>
        <button type="button" class="tkbtn" data-a="uninstall"${sel ? "" : " disabled"}>${esc(r().uninstall)}</button>
        <button type="button" class="tkbtn" disabled>${esc(r().configure)}</button>
      </div>
      <div class="gstatus sunken" style="--l:var(--tk-l);--d:var(--tk-d)">${esc(r().count(list.length, sel ? sel.name : ""))}${sel ? " — " + esc(pkgTitle(sel)) : ""}</div>
    </div>`;
    const root = c.querySelector(".glint");
    /* Виділення змінюється на місці, щоб подвійний клік лишався на тому самому елементі */
    function refresh() {
      const cur = PKGS.find((p) => p.name === st.sel);
      root.querySelectorAll("[data-p]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.p === st.sel)));
      root.querySelectorAll("[data-a]").forEach((b) => { b.disabled = !cur; });
      root.querySelector(".gstatus").textContent = r().count(list.length, cur ? cur.name : "") + (cur ? " — " + pkgTitle(cur) : "");
    }
    root.addEventListener("click", (e) => {
      const gb = e.target.closest("[data-g]");
      if (gb) { st.group = Number(gb.dataset.g); renderGlint(c, rec); return; }
      const pb = e.target.closest("[data-p]");
      if (pb) { st.sel = pb.dataset.p; refresh(); if (coarse) query(st.sel); return; }
      const ab = e.target.closest("[data-a]");
      if (ab && st.sel) ({ query, verify, install, uninstall })[ab.dataset.a](st.sel);
    });
    root.addEventListener("dblclick", (e) => { const pb = e.target.closest("[data-p]"); if (pb) query(pb.dataset.p); });
    root.addEventListener("keydown", (e) => { const pb = e.target.closest("[data-p]"); if (pb && e.key === "Enter") { e.preventDefault(); st.sel = pb.dataset.p; query(st.sel); } });
  }

  function rpmInfo(p) {
    const d = new Date();
    return {
      name: p.name, version: String(d.getFullYear()), release: "1",
      group: "ArtIntelliCo/" + p.group, size: bytes(pkgText(p)),
      packager: `ArtIntelliCo <${EMAIL}>`, url: `${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/`,
      summary: pkgTitle(p), description: pkgText(p)
    };
  }

  function query(name) {
    const p = PKGS.find((x) => x.name === name);
    const body = () => {
      const i = rpmInfo(p);
      const f = r().fields;
      let extra = `<p>${esc(i.description)}</p>`;
      if (p.kind === "svc") {
        const k = svcPkg(p.i);
        const R = RPM[lang];
        extra = k.desc.map((d) => `<p>${esc(d)}</p>`).join("") +
          `<h2 class="ph">${esc(R.files)}</h2><ul class="pfiles">${k.files.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` +
          `<h2 class="ph">${esc(R.result)}</h2><p>${esc(k.result)}</p>`;
      }
      return `<dl class="info">
      <dt>${esc(f[0] + colon())}</dt><dd>${esc(i.name)}</dd>
      <dt>${esc(f[1] + colon())}</dt><dd>${esc(i.version)}</dd>
      <dt>${esc(f[2] + colon())}</dt><dd>${esc(i.release)} (${esc(r().notInstalled)})</dd>
      <dt>${esc(f[3] + colon())}</dt><dd>${esc(i.group)}</dd>
      <dt>${esc(f[4] + colon())}</dt><dd>${i.size}</dd>
      <dt>${esc(f[5] + colon())}</dt><dd>${esc(i.packager)}</dd>
      <dt>${esc(f[6] + colon())}</dt><dd><a href="${i.url}" target="_blank" rel="noopener">${esc(i.url)}</a></dd>
      <dt>${esc(f[7] + colon())}</dt><dd>${esc(i.summary)}</dd>
    </dl><div class="well pdesc">${extra}</div>`;
    };
    dialog("info", () => r().info + colon() + " " + name, body, [
      { label: r().install, act: () => { close("info"); install(name); } },
      { label: r().close }
    ], [540, 480]);
    sr(pkgTitle(p) + ". " + pkgText(p));
  }

  function install(name) {
    const p = PKGS.find((x) => x.name === name);
    const subject = pkgTitle(p);
    const rec = dialog("install", r().install, `<p>${esc(r().installing(name))}</p><div class="well prog"><i></i></div>`, [{ label: r().close }], [380, 170]);
    const bar = rec.client.querySelector(".prog i");
    const finish = () => {
      if (!wins.has("install")) return;
      dialog("install", r().install, `<p>${esc(r().installNeed(subject))}</p><p><a href="mailto:${EMAIL}">${EMAIL}</a></p>`, [
        { label: r().write, href: `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` },
        { label: r().close }
      ], [400, 190]);
    };
    if (reduced) { bar.style.width = "100%"; setTimeout(finish, 200); return; }
    let k = 0;
    const iv = setInterval(() => {
      k += 7 + Math.random() * 12;
      bar.style.width = Math.min(100, k) + "%";
      if (k >= 100) { clearInterval(iv); setTimeout(finish, 250); }
    }, 90);
  }
  const verify = (name) => dialog("verify", r().verify, `<p>${esc(r().verifyOk(name))}</p>`, [{ label: r().ok }]);
  const uninstall = (name) => dialog("uninstall", r().uninstall, `<p>${esc(r().uninstallNo(name))}</p>`, [{ label: r().ok }]);

  /* ---------- Пошта та xbiff ---------- */
  let unread = true;
  function openMail() {
    unread = false;
    updateBiff();
    const s = t();
    return dialog("mail", r().mailTitle, `
      <dl class="info"><dt>${esc(r().from + colon())}</dt><dd>ArtIntelliCo &lt;${EMAIL}&gt;</dd><dt>${esc(r().subject + colon())}</dt><dd>${esc(s.contactTitle)}</dd></dl>
      <div class="well" style="margin-top:10px;font-weight:400"><p>${esc(s.contactText)}</p><p>${esc(s.emailLabel + colon())} <a href="mailto:${EMAIL}">${EMAIL}</a></p></div>`, [
      { label: r().write, href: `mailto:${EMAIL}` },
      { label: r().copy, act: copyEmail },
      { label: r().close }
    ], [480, 330]);
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); sr(r().copied); dialog("copied", r().apps.mail, `<p>${esc(r().copied)}</p>`, [{ label: r().ok }], [280, 130]); }
    catch { dialog("copied", r().apps.mail, `<p>${esc(r().copyFailed)} ${EMAIL}</p>`, [{ label: r().ok }], [320, 140]); }
  }
  function updateBiff() { const b = $("biff"); if (b) b.innerHTML = xbiffSvg(unread) + `<span>xbiff</span>`; }

  /* ---------- xterm ---------- */
  const FILES = { README: "readme", partners: "partners", contact: "contact" };
  function openXterm(cmd) {
    const existing = wins.get("xterm");
    const rec = open("xterm", {
      title: () => `guest@${HOST}: ~`, icon: "xterm", size: [662, 330], pos: [24, 100],
      render: (c, rec) => {
        if (rec.term) { c.replaceChildren(rec.term.root); return; }
        rec.term = makeTerm(rec);
        c.replaceChildren(rec.term.root);
      },
      mounted: (rec) => { if (!existing) rec.term.boot(); },
      focused: (rec) => { rec.term.root.classList.add("focused"); if (!coarse) rec.term.input.focus({ preventScroll: true }); }
    });
    if (cmd && existing) rec.term.run(cmd, true);
    return rec;
  }

  function makeTerm(rec) {
    const root = document.createElement("div");
    root.className = "xterm mono";
    root.innerHTML = `<div class="athena" aria-hidden="true"><i></i></div><div class="tout" role="log"><div class="lines"></div><form><span class="pr"></span><span class="bf"></span><span class="cur"> </span><span class="af"></span><input type="text" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="xterm"></form></div>`;
    const out = root.querySelector(".tout");
    const lines = root.querySelector(".lines");
    const form = root.querySelector("form");
    const input = root.querySelector("input");
    const thumb = root.querySelector(".athena i");
    let cwd = "~";
    let busy = false;
    const hist = [];
    let hi = 0;
    const prompt = () => `[guest@${HOST} ${cwd === "~" ? "~" : "services"}]$ `;
    const sync = () => {
      const max = out.scrollHeight - out.clientHeight;
      const h = out.clientHeight;
      const th = max > 0 ? Math.max(20, h * h / out.scrollHeight) : h;
      thumb.style.height = th + "px";
      thumb.style.top = (max > 0 ? (out.scrollTop / max) * (h - th) : 0) + "px";
    };
    out.addEventListener("scroll", sync);
    new ResizeObserver(sync).observe(out);
    const down = () => { out.scrollTop = out.scrollHeight; sync(); };
    const put = (html, cls = "") => { const d = document.createElement("div"); d.className = "ln " + cls; d.innerHTML = html; lines.appendChild(d); down(); };
    const tok = (label, cmd) => `<button type="button" class="tok" data-cmd="${esc(cmd)}">${esc(label)}</button>`;
    const render = () => {
      const v = input.value, p = input.selectionStart ?? v.length;
      form.querySelector(".pr").textContent = prompt();
      form.querySelector(".bf").textContent = v.slice(0, p);
      form.querySelector(".cur").textContent = v[p] || " ";
      form.querySelector(".af").textContent = v.slice(p + 1);
    };
    ["input", "keyup", "click", "select"].forEach((ev) => input.addEventListener(ev, render));
    input.addEventListener("focus", () => root.classList.add("focused"));
    input.addEventListener("blur", () => root.classList.remove("focused"));
    out.addEventListener("click", (e) => {
      const b = e.target.closest(".tok");
      if (b) { run(b.dataset.cmd, false); return; }
      if (!String(getSelection())) input.focus({ preventScroll: true });
    });
    const sleep = (ms) => new Promise((res) => setTimeout(res, reduced ? 0 : ms));

    const readme = () => {
      const s = t();
      return [`<span class="b">${esc(s.heroTitle)}</span>`, "", esc(s.heroText), "", esc(s.heroLead + colon()), ...s.phrases.map((p) => "  * " + esc(p)), "",
        esc(s.copyright), esc(s.legal), esc(s.slogan), `${esc(s.source + colon())} <a href="${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/" target="_blank" rel="noopener">artintellico.com</a>`];
    };
    const fileLines = (name) => {
      const s = t();
      if (name === "README") return readme();
      if (name === "partners") return [`<span class="b">${esc(s.partnersTitle)}</span>`, ...PARTNERS.map((p) => "  * " + esc(p))];
      if (name === "contact") return [`<span class="b">${esc(s.contactTitle)}</span>`, esc(s.contactText), `${esc(s.emailLabel + colon())} <a href="mailto:${EMAIL}">${EMAIL}</a>`];
      const inSvc = name.startsWith("services/") || cwd === "services";
      const base = name.replace(/^services\//, "");
      if (inSvc && base === "README") return [esc(RPM[lang].lead), "", tok("rpm -qa", "rpm -qa") + "  " + tok("glint", "glint")];
      const i = SVC.indexOf(base);
      if (i >= 0 && inSvc) return [`<span class="b">${esc(svcPkg(i).summary)}</span>`, esc(svcPkg(i).desc[0]), "", tok("rpm -qi aic-" + SVC[i], "rpm -qi aic-" + SVC[i])];
      return null;
    };
    /* Description у стилі spec-файлу: абзаци, склад пакета, результат */
    const descLines = (p, i) => {
      if (p.kind !== "svc") return [esc(i.description)];
      const k = svcPkg(p.i);
      const R = RPM[lang];
      return [
        ...k.desc.flatMap((d, j) => (j ? ["", esc(d)] : [esc(d)])),
        "", esc(R.files + colon()), ...k.files.map((f) => esc("  - " + f)),
        "", esc(R.result + colon()), esc("  " + k.result)
      ];
    };
    const rpmQi = (name) => {
      const p = PKGS.find((x) => x.name === name);
      if (!p) return [esc(`package ${name} is not installed`)];
      const i = rpmInfo(p);
      const L = (a, b, c = "", d = "") => esc((a.padEnd(12) + ": " + b).padEnd(44) + (c ? c + ": " + d : ""));
      return [
        L("Name", i.name, "Distribution", "ArtIntelliCo Linux"),
        L("Version", i.version, "Vendor", "ArtIntelliCo"),
        L("Release", i.release, "Build Host", HOST),
        L("Install date", "(not installed)", "Source RPM", `${i.name}-${i.version}-1.src.rpm`),
        L("Group", i.group),
        L("Size", String(i.size)),
        esc("Packager    : " + i.packager),
        `URL         : <a href="${i.url}" target="_blank" rel="noopener">${esc(i.url)}</a>`,
        esc("Summary     : " + i.summary),
        "Description :",
        ...descLines(p, i)
      ];
    };

    async function run(raw, typed) {
      if (busy) return;
      busy = true;
      form.hidden = true;
      if (typed) {
        const d = document.createElement("div");
        d.className = "ln";
        d.textContent = prompt();
        lines.appendChild(d);
        for (const ch of raw) { d.textContent += ch; down(); await sleep(45 + Math.random() * 50); }
        await sleep(150);
      } else put(esc(prompt() + raw));
      const cmd = raw.trim();
      if (cmd) { hist.push(cmd); hi = hist.length; }
      exec(cmd);
      busy = false;
      form.hidden = false;
      render();
      down();
    }

    function exec(cmd) {
      if (!cmd) return;
      const [c0, ...args] = cmd.split(/\s+/);
      const arg = args.join(" ");
      switch (c0) {
        case "help": r().help.forEach((h) => put(esc(h))); return;
        case "ls": {
          const target = arg.replace(/\/$/, "") || (cwd === "services" ? "services" : "");
          if (target === "services" || (cwd === "services" && target === ".")) return put(["README", ...SVC].map((s) => tok(s, "cat services/" + s)).join("  "));
          if (target && target !== "." && target !== "~") return put(esc(`ls: ${arg}: No such file or directory`));
          return put([tok("README", "cat README"), tok("contact", "cat contact"), tok("partners", "cat partners"), tok("services/", "ls services")].join("  "));
        }
        case "cd":
          if (!arg || arg === "~" || arg === "..") { cwd = "~"; return; }
          if (arg.replace(/\/$/, "") === "services") { cwd = "services"; return; }
          return put(esc(`bash: cd: ${arg}: No such file or directory`));
        case "pwd": return put(cwd === "~" ? "/home/guest" : "/home/guest/services");
        case "cat": case "more": case "less": {
          if (!arg) return put(esc(`usage: ${c0} file`));
          const l = fileLines(arg);
          if (!l) return put(esc(`${c0}: ${arg}: No such file or directory`));
          return l.forEach((x) => put(x));
        }
        case "rpm":
          if (args[0] === "-qa") return PKGS.forEach((p) => put(tok(`${p.name}-${new Date().getFullYear()}-1`, "rpm -qi " + p.name)));
          if (args[0] === "-qi" && args[1]) return rpmQi(args[1]).forEach((x) => put(x));
          if (args[0] === "-i" || args[0] === "-Uvh" || args[0] === "-ivh") { put(esc("error: you must be root to install packages")); put(tok("glint", "glint")); return; }
          return put(esc("usage: rpm -qa | rpm -qi <package>"));
        case "glint": open("glint"); return;
        case "control-panel": open("cp"); return;
        case "mail": case "xbiff": openMail(); return;
        case "xclock": case "xload": return;
        case "clear": lines.replaceChildren(); return;
        case "whoami": return put("guest");
        case "uname": return put(args.includes("-a") ? `Linux ${HOST} 1.2.13 #1 Wed Oct 2 09:00:00 EET 1996 i486` : "Linux");
        case "date": return put(esc(new Date().toString().replace(/ GMT.*/, "")));
        case "startx": return put(esc("Fatal server error: Server is already active for display 0"));
        case "export":
          if (/^(LANG|LC_ALL)=\S/.test(arg)) return exec("lang " + arg.replace(/^\w+=/, ""));
          return;
        case "lang": {
          /* Код (de, de_DE.ISO-8859-1) або назва мови її ж мовою (deutsch, français) */
          const raw = (args[0] || "").toLowerCase().replace(/^lang=/, "");
          const code = raw.split(/[_.-]/)[0];
          const want = LANGS.includes(code) ? code : (raw.length > 2 && LANGS.find((l) => String(LANG_NAMES[l]).toLowerCase().startsWith(raw))) || code;
          if (LANGS.includes(want)) { setLang(want); return put(esc("LANG=" + want)); }
          if (want) put(esc(`lang: ${args[0]}: unknown language`));
          LANGS.forEach((l) => put((l === lang ? "* " : "  ") + tok(l, "lang " + l) + "  " + esc(LANG_NAMES[l])));
          return put(esc("usage: lang " + LANGS.join("|")));
        }
        case "exit": case "logout": setTimeout(() => close("xterm"), 0); return;
        case "nc": case "dos": case "unix": case "apple": case "lisa": case "mc": case "win": case "ai": {
          const u = vurl(c0 === "win" ? "win31" : c0);
          setTimeout(() => { location.href = u; }, 200);
          return;
        }
      }
      const f = fileLines(c0);
      if (f) return put(esc(`bash: ${c0}: Permission denied`));
      put(esc(`bash: ${c0}: command not found`));
    }

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); const v = input.value; input.value = ""; run(v, false); }
      else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        hi = Math.max(0, Math.min(hist.length, hi + (e.key === "ArrowUp" ? -1 : 1)));
        input.value = hist[hi] || "";
        render();
      } else if (e.key === "Tab") {
        e.preventDefault();
        const words = ["help", "ls", "cat", "cd", "rpm", "glint", "control-panel", "mail", "clear", "lang", "exit", "README", "partners", "contact", "services/", "services/README", ...SVC.map((s) => "services/" + s), ...PKGS.map((p) => p.name)];
        const parts = input.value.split(" ");
        const w = parts[parts.length - 1];
        const hits = words.filter((x) => x.startsWith(w));
        if (w && hits.length === 1) { parts[parts.length - 1] = hits[0]; input.value = parts.join(" ") + (hits[0].endsWith("/") ? "" : " "); render(); }
        else if (hits.length > 1) put(esc(hits.join("  ")));
      } else if (e.ctrlKey && (e.key === "l" || e.key === "д")) { e.preventDefault(); lines.replaceChildren(); }
    });

    return {
      root, input,
      run,
      boot: async () => {
        render();
        await sleep(300);
        await run("cat README", true);
        put("");
        put(esc(r().help[0]) + " " + tok("help", "help") + "  " + tok("ls", "ls") + "  " + tok("rpm -qa", "rpm -qa"));
      }
    };
  }

  /* ---------- GoodStuff: кнопки, xbiff, xclock, xload, пейджер ---------- */
  function goodstuff() {
    const gs = document.createElement("div");
    gs.id = "goodstuff";
    gs.innerHTML = `
      <button type="button" class="gsb" data-g="xterm">${SVG.xterm}<span>xterm</span></button>
      <button type="button" class="gsb" data-g="cp">${SVG.cp}<span>control</span></button>
      <button type="button" class="gsb" data-g="glint">${SVG.glint}<span>glint</span></button>
      <button type="button" class="gsb" id="biff" data-g="mail" aria-label="xbiff"></button>
      <div class="gsw" aria-hidden="true"><svg id="xclock" viewBox="-50 -50 100 100"></svg></div>
      <div class="gsw wide" aria-hidden="true"><canvas id="xload" width="120" height="62"></canvas></div>
      <div id="pager" aria-label="Pager"></div>`;
    xroot.appendChild(gs);
    gs.addEventListener("click", (e) => {
      const b = e.target.closest("[data-g]");
      if (!b) return;
      ({ xterm: () => openXterm(), cp: () => open("cp"), glint: () => open("glint"), mail: openMail })[b.dataset.g]();
    });
    updateBiff();
    clock();
    setInterval(clock, 20000);
    xload();
    setInterval(xload, 2000);
    $("pager").addEventListener("click", (e) => { const b = e.target.closest("[data-d]"); if (b) switchDesk(Number(b.dataset.d)); });
  }

  function clock() {
    const svg = $("xclock");
    if (!svg) return;
    const d = new Date();
    const ticks = Array.from({ length: 60 }, (_, i) => {
      const a = i * 6 * Math.PI / 180;
      const r1 = i % 5 ? 43 : 38;
      return `<line x1="${Math.sin(a) * r1}" y1="${-Math.cos(a) * r1}" x2="${Math.sin(a) * 46}" y2="${-Math.cos(a) * 46}" stroke="#000" stroke-width="${i % 5 ? 1.5 : 3}"/>`;
    }).join("");
    const hand = (deg, len, w) => `<polygon points="0,${-len} ${w},0 0,${w * 1.6} ${-w},0" transform="rotate(${deg})" fill="#000"/>`;
    const m = d.getMinutes(), h = d.getHours() % 12;
    svg.innerHTML = ticks + hand(h * 30 + m / 2, 24, 5) + hand(m * 6, 36, 4);
  }

  const loads = Array(120).fill(0);
  let loadV = 0.25;
  function xload() {
    const c = $("xload");
    if (!c) return;
    loadV = Math.max(0.05, Math.min(0.95, loadV + (Math.random() - 0.5) * 0.25));
    loads.push(loadV);
    loads.splice(0, loads.length - 120);
    const g = c.getContext("2d");
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 120, 62);
    g.fillStyle = "#000";
    loads.forEach((v, x) => { const h = Math.round(v * 46); g.fillRect(x, 62 - h, 1, h); });
    g.font = "bold 11px Helvetica, Arial, sans-serif";
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 76, 13);
    g.fillStyle = "#000";
    g.fillText(HOST, 2, 10);
  }

  function pager() {
    const p = $("pager");
    if (!p) return;
    const R = rootRect();
    p.innerHTML = [0, 1, 2, 3].map((d) => `<button type="button" data-d="${d}" class="${d === desk ? "cur" : ""}" aria-label="Desk ${d + 1}"></button>`).join("");
    const cells = p.querySelectorAll("button");
    wins.forEach((w) => {
      if (w.iconified) return;
      const cell = cells[w.desk];
      const cw = cell.clientWidth, ch = cell.clientHeight;
      const b = w.el.getBoundingClientRect();
      const box = w.el.hidden ? { left: parseFloat(w.el.style.left), top: parseFloat(w.el.style.top), width: parseFloat(w.el.style.width), height: parseFloat(w.el.style.height) } : { left: b.left - R.left, top: b.top - R.top, width: b.width, height: b.height };
      const i = document.createElement("i");
      if (w.el.classList.contains("active")) i.className = "act";
      Object.assign(i.style, { left: (box.left / R.width) * cw + "px", top: (box.top / R.height) * ch + "px", width: Math.max(3, (box.width / R.width) * cw) + "px", height: Math.max(3, (box.height / R.height) * ch) + "px" });
      cell.appendChild(i);
    });
  }

  /* ---------- Мова ---------- */
  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    wins.forEach((w) => { w.render(); if (w.icon) w.icon.querySelector("span").textContent = w.def.title(); });
    sr(LANG_NAMES[l]);
  }

  /* ---------- Завантаження: LILO, ядро, вхід, startx ---------- */
  const con = $("console");
  const conOut = $("conOut");
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((res) => {
    if (skipping || reduced) return res();
    const id = setTimeout(res, ms);
    waiters.push(() => { clearTimeout(id); res(); });
  });
  const skip = () => { skipping = true; waiters.splice(0).forEach((f) => f()); };

  async function bootSeq() {
    skipping = false;
    con.hidden = false;
    xroot.hidden = true;
    $("conSkip").textContent = r().skip;
    let buf = "";
    const put = (s) => { buf += s; conOut.textContent = buf; };
    const type = async (s) => { for (const ch of s) { put(ch); await sleep(70 + Math.random() * 50); } };
    const d = new Date();
    const stamp = d.toString().replace(/ GMT.*/, "").replace(/^(\w+ \w+ \d+) (\d+) (\S+)$/, "$1 $3 EET $2");
    put("LILO boot: ");
    await sleep(500);
    await type("linux");
    put("\nLoading linux");
    for (let i = 0; i < 12 && !skipping; i++) { put("."); await sleep(60); }
    put("\nUncompressing Linux... done.\nNow booting the kernel\n");
    await sleep(300);
    const kernel = [
      `Linux version 1.2.13 (root@${HOST}) (gcc version 2.7.0) #1 ${stamp}`,
      "Console: colour VGA+ 80x25, 1 virtual console (max 63)",
      "Calibrating delay loop.. ok - 33.28 BogoMIPS",
      "Memory: 15140k/16384k available (636k kernel code, 384k reserved, 224k data)",
      "Swansea University Computer Society NET3.019",
      "Checking 386/387 coupling... Ok, fpu using exception 16 error reporting.",
      "Linux version 1.2.13: i486 detected",
      "hda: WDC AC2540H, 515MB w/64kB Cache, LBA, CHS=1048/16/63",
      "eth0: 3c509 at 0x300 tag 1, 10baseT port, address 00 a0 24 40 65 61, IRQ 10.",
      "Partition check:",
      "  hda: hda1 hda2",
      "VFS: Mounted root (ext2 filesystem) readonly.",
      "INIT: version 2.64 booting",
      "Checking filesystems... /dev/hda1: clean, 18403/131072 files",
      "Starting system loggers... done",
      "Bringing up network interface eth0... done",
      "INIT: Entering runlevel: 3",
      "",
      "ArtIntelliCo Linux release 3.0.3",
      "Kernel 1.2.13 on an i486",
      ""
    ];
    for (const l of kernel) { put(l + "\n"); await sleep(70); }
    put(`${HOST} login: `);
    await sleep(400);
    await type("guest");
    put("\nPassword: ");
    await sleep(600);
    put(`\nLast login: ${new Date(Date.now() - 86400000).toString().slice(0, 16)}18:30:12 on tty1\n`);
    put(`[guest@${HOST} ~]$ `);
    await sleep(500);
    await type("startx");
    put("\n");
    await sleep(400);
    startX();
  }

  async function startX() {
    store.set("aic-rh-booted", "1", sessionStorage);
    con.hidden = true;
    xroot.hidden = false;
    xroot.classList.remove("wm");
    xroot.replaceChildren();
    wins.clear();
    await sleep(900);
    xroot.classList.add("wm");
    goodstuff();
    await sleep(200);
    if (!narrow()) open("cp");
    await sleep(120);
    if (!narrow()) open("glint");
    await sleep(120);
    openXterm();
    pager();
    skipping = false;
  }

  function exitX() {
    xroot.hidden = true;
    xroot.replaceChildren();
    wins.clear();
    con.hidden = false;
    $("conSkip").textContent = "";
    conOut.textContent = `[guest@${HOST} ~]$ \n${r().startx}\n[guest@${HOST} ~]$ `;
    const inp = $("conIn");
    inp.value = "";
    let typed = "";
    const show = () => { conOut.textContent = `[guest@${HOST} ~]$ \n${r().startx}\n[guest@${HOST} ~]$ ${typed}`; };
    const onKey = (e) => {
      if (e.key === "Enter") { const ok = typed.trim() === "startx"; typed = ""; if (ok) { cleanup(); startX(); } else show(); }
      else if (e.key === "Backspace") { typed = typed.slice(0, -1); show(); }
      else if (e.key.length === 1) { typed += e.key; show(); }
    };
    const tap = () => { if (coarse) { typed = "startx"; show(); setTimeout(() => { cleanup(); startX(); }, 400); } };
    function cleanup() { document.removeEventListener("keydown", onKey); con.removeEventListener("click", tap); }
    document.addEventListener("keydown", onKey);
    con.addEventListener("click", tap);
  }

  xroot.addEventListener("pointerdown", (e) => {
    if (e.target !== xroot || e.button !== 0 || !xroot.classList.contains("wm")) return;
    rootMenu(e.clientX, e.clientY);
  });
  addEventListener("resize", () => { layoutIcons(); pager(); });

  const bootKey = () => skip();
  addEventListener("keydown", bootKey);
  addEventListener("pointerdown", bootKey);

  document.documentElement.lang = lang;
  document.fonts.load('14px "XFixed"').finally(() => {
    const go = reduced || store.get("aic-rh-booted", sessionStorage) ? startX() : bootSeq();
    go.then(() => { removeEventListener("keydown", bootKey); removeEventListener("pointerdown", bootKey); });
  });
})();
