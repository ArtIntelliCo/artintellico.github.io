(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

  /* Тексти взяті з artintellico.com — ті самі, що в index.html */
  const I18N = {
    uk: {
      menu: ["Послуги", "Партнери", "Контакти"],
      heroTitle: "Ми створюємо ІТ рішення, що працюють на ваш бізнес",
      heroText: "Команда ArtIntelliCo допомагає цифровізувати та автоматизувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень.",
      heroLead: "Для вашого бізнесу ми:",
      phrases: ["розробляємо SaaS-платформи", "будуємо CRM та ERP системи", "впроваджуємо штучний інтелект", "переносимо інфраструктуру в хмару"],
      readmeDesc: "Про компанію",
      discuss: "Обговорити задачу",
      partnersTitle: "Наші партнери",
      contactTitle: "Розкажіть про вашу задачу",
      contactText: "Якщо у вас є пропозиція щодо співпраці або ви хочете дізнатися більше про наші рішення та досвід — напишіть нам на пошту.",
      emailLabel: "Пошта",
      write: "Написати листа",
      copy: "Копіювати адресу",
      copyright: "© 2026 ArtIntelliCo. Усі права захищено.",
      legal: "ТОВ «АртІнтелліко»",
      slogan: "Ми бачили, як зароджувалося IT. Знаємо, як воно працює сьогодні — і розуміємо, куди рухається завтра.",
      source: "Класична версія сайту"
    },
    en: {
      menu: ["Services", "Partners", "Contacts"],
      heroTitle: "We build IT solutions that work for your business",
      heroText: "The ArtIntelliCo team helps you digitalise and automate business processes by designing and delivering modern IT solutions.",
      heroLead: "For your business we:",
      phrases: ["build SaaS platforms", "ship CRM and ERP systems", "put AI to work", "move infrastructure to the cloud"],
      readmeDesc: "About the company",
      discuss: "Discuss your project",
      partnersTitle: "Our partners",
      contactTitle: "Tell us about your project",
      contactText: "If you have a partnership proposal or want to know more about our solutions and experience — drop us an email.",
      emailLabel: "Email",
      write: "Write an email",
      copy: "Copy address",
      copyright: "© 2026 ArtIntelliCo. All rights reserved.",
      legal: "ArtIntelliCo LLC",
      slogan: "We saw IT being born. We know how it works today — and we understand where it is heading tomorrow.",
      source: "Classic version of the site"
    },
    ru: {
      menu: ["Услуги", "Партнёры", "Контакты"],
      heroTitle: "Мы создаём работающие ИТ решения для вашего бизнеса",
      heroText: "Команда ArtIntelliCo помогает цифровизировать и автоматизировать ваши бизнес-процессы путём разработки и внедрения современных ИТ решений.",
      heroLead: "Для вашего бизнеса мы:",
      phrases: ["разрабатываем SaaS-платформы", "строим CRM и ERP системы", "внедряем искусственный интеллект", "переносим инфраструктуру в облако"],
      readmeDesc: "О компании",
      discuss: "Обсудить задачу",
      partnersTitle: "Наши партнёры",
      contactTitle: "Расскажите о вашей задаче",
      contactText: "Если у вас есть предложение о сотрудничестве или вы хотите узнать больше о наших решениях и опыте — напишите нам на почту.",
      emailLabel: "Почта",
      write: "Написать письмо",
      copy: "Копировать адрес",
      copyright: "© 2026 ArtIntelliCo. Все права защищены.",
      legal: "ООО «АртИнтеллико»",
      slogan: "Мы видели, как зарождалось IT. Знаем, как оно работает сегодня — и понимаем, куда движется завтра.",
      source: "Классическая версия сайта"
    },
    de: {
      menu: ["Leistungen", "Partner", "Kontakt"],
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Geschäftsprozesse zu digitalisieren und zu automatisieren, indem wir moderne IT-Lösungen konzipieren und umsetzen.",
      heroLead: "Für Ihr Unternehmen:",
      phrases: ["entwickeln wir SaaS-Plattformen", "führen wir CRM- und ERP-Systeme ein", "lassen wir KI für Sie arbeiten", "bringen wir die Infrastruktur in die Cloud"],
      readmeDesc: "Über das Unternehmen",
      discuss: "Projekt besprechen",
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Sie haben einen Vorschlag für eine Partnerschaft oder möchten mehr über unsere Lösungen und unsere Erfahrung wissen? Schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      write: "E-Mail schreiben",
      copy: "Adresse kopieren",
      copyright: "© 2026 ArtIntelliCo. Alle Rechte vorbehalten.",
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt.",
      source: "Klassische Version der Website"
    },
    fr: {
      menu: ["Services", "Partenaires", "Contact"],
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L’équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en mettant en place des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous\u00a0:",
      phrases: ["développons des plateformes SaaS", "mettons en place des systèmes CRM et ERP", "faisons travailler l’IA pour vous", "migrons l’infrastructure vers le cloud"],
      readmeDesc: "À propos de l’entreprise",
      discuss: "Parler de votre projet",
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience ? Écrivez-nous.",
      emailLabel: "E-mail",
      write: "Écrire un e-mail",
      copy: "Copier l’adresse",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l’informatique. Nous savons comment elle fonctionne aujourd’hui — et nous comprenons où elle va demain.",
      source: "Version classique du site"
    },
    es: {
      menu: ["Servicios", "Socios", "Contacto"],
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar los procesos de su negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio:",
      phrases: ["desarrollamos plataformas SaaS", "implantamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      readmeDesc: "Sobre la empresa",
      discuss: "Hablar de su proyecto",
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos por correo electrónico.",
      emailLabel: "Correo electrónico",
      write: "Escribir un correo",
      copy: "Copiar dirección",
      copyright: "© 2026 ArtIntelliCo. Todos los derechos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos nacer la informática. Sabemos cómo funciona hoy y entendemos hacia dónde va mañana.",
      source: "Versión clásica del sitio"
    },
    pt: {
      menu: ["Serviços", "Parceiros", "Contactos"],
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio:",
      phrases: ["desenvolvemos plataformas SaaS", "implementamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      readmeDesc: "Sobre a empresa",
      discuss: "Falar do seu projeto",
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, escreva-nos por e-mail.",
      emailLabel: "E-mail",
      write: "Escrever um e-mail",
      copy: "Copiar endereço",
      copyright: "© 2026 ArtIntelliCo. Todos os direitos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã.",
      source: "Versão clássica do site"
    },
    it: {
      menu: ["Servizi", "Partner", "Contatti"],
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali, progettando e introducendo soluzioni IT moderne.",
      heroLead: "Per la Sua azienda:",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo l’IA al lavoro", "portiamo l’infrastruttura nel cloud"],
      readmeDesc: "Chi siamo",
      discuss: "Parliamone",
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o vuole saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un’e-mail.",
      emailLabel: "E-mail",
      write: "Scrivi un’e-mail",
      copy: "Copia indirizzo",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l’informatica. Sappiamo come funziona oggi e capiamo dove andrà domani.",
      source: "Versione classica del sito"
    }
  };

  /* Рядки, потрібні лише Lisa Office System */
  const LX = {
    uk: {
      menus: ["Стіл", "Файл/Друк", "Правка", "Обслуговування"],
      open: "Відкрити",
      setAside: (n) => `Відкласти «${n}»`,
      setAsideAll: "Відкласти все",
      tearOff: "Відірвати бланк запиту",
      copyEmail: "Копіювати адресу пошти",
      cleanUp: "Упорядкувати стіл",
      versions: "Інші версії сайту",
      noWindows: "Немає відкритих вікон",
      start: ["Версія 3.1", "Запуск системи…"],
      disk: "ArtIntelliCo",
      pad: "Бланк запиту",
      request: (n) => `Запит ${n}`,
      clipboard: "Буфер обміну",
      trash: "Кошик",
      prefs: "Налаштування",
      subject: "Тема",
      message: "Повідомлення",
      send: "Надіслати",
      sendNote: "Лист відкриється у вашій поштовій програмі.",
      defaultSubject: "Запит з сайту",
      clipboardEmpty: "Буфер обміну порожній.",
      clipboardHas: "У буфері обміну:",
      trashEmpty: "Кошик порожній.",
      lang: "Мова",
      contrast: "Контраст екрана",
      copied: "Адресу скопійовано в буфер обміну.",
      copyFailed: "Не вдалося скопіювати адресу.",
      ok: "Гаразд",
      close: "Закрити",
      padHint: "Відкрийте бланк, і від нього відірветься новий запит."
    },
    en: {
      menus: ["Desk", "File/Print", "Edit", "Housekeeping"],
      open: "Open",
      setAside: (n) => `Set Aside "${n}"`,
      setAsideAll: "Set Aside Everything",
      tearOff: "Tear Off Request",
      copyEmail: "Copy Email Address",
      cleanUp: "Clean Up Desk",
      versions: "Other versions of the site",
      noWindows: "No open windows",
      start: ["Version 3.1", "Starting up…"],
      disk: "ArtIntelliCo",
      pad: "Request Pad",
      request: (n) => `Request ${n}`,
      clipboard: "Clipboard",
      trash: "Wastebasket",
      prefs: "Preferences",
      subject: "Subject",
      message: "Message",
      send: "Send",
      sendNote: "The letter will open in your email app.",
      defaultSubject: "Enquiry from the website",
      clipboardEmpty: "The Clipboard is empty.",
      clipboardHas: "On the Clipboard:",
      trashEmpty: "The Wastebasket is empty.",
      lang: "Language",
      contrast: "Screen contrast",
      copied: "Address copied to the Clipboard.",
      copyFailed: "Couldn't copy the address.",
      ok: "OK",
      close: "Close",
      padHint: "Open the pad and a new request tears off it."
    },
    ru: {
      menus: ["Стол", "Файл/Печать", "Правка", "Обслуживание"],
      open: "Открыть",
      setAside: (n) => `Отложить «${n}»`,
      setAsideAll: "Отложить всё",
      tearOff: "Оторвать бланк запроса",
      copyEmail: "Копировать адрес почты",
      cleanUp: "Упорядочить стол",
      versions: "Другие версии сайта",
      noWindows: "Нет открытых окон",
      start: ["Версия 3.1", "Запуск системы…"],
      disk: "ArtIntelliCo",
      pad: "Бланк запроса",
      request: (n) => `Запрос ${n}`,
      clipboard: "Буфер обмена",
      trash: "Корзина",
      prefs: "Настройки",
      subject: "Тема",
      message: "Сообщение",
      send: "Отправить",
      sendNote: "Письмо откроется в вашей почтовой программе.",
      defaultSubject: "Запрос с сайта",
      clipboardEmpty: "Буфер обмена пуст.",
      clipboardHas: "В буфере обмена:",
      trashEmpty: "Корзина пуста.",
      lang: "Язык",
      contrast: "Контраст экрана",
      copied: "Адрес скопирован в буфер обмена.",
      copyFailed: "Не удалось скопировать адрес.",
      ok: "Хорошо",
      close: "Закрыть",
      padHint: "Откройте бланк, и от него оторвётся новый запрос."
    },
    de: {
      menus: ["Schreibtisch", "Ablage/Druck", "Bearbeiten", "Wartung"],
      open: "Öffnen",
      setAside: (n) => `„${n}“ beiseitelegen`,
      setAsideAll: "Alles beiseitelegen",
      tearOff: "Anfrageblatt abreißen",
      copyEmail: "E-Mail-Adresse kopieren",
      cleanUp: "Schreibtisch aufräumen",
      versions: "Andere Versionen der Website",
      noWindows: "Keine offenen Fenster",
      start: ["Version 3.1", "System wird gestartet…"],
      disk: "ArtIntelliCo",
      pad: "Anfrageblock",
      request: (n) => `Anfrage ${n}`,
      clipboard: "Zwischenablage",
      trash: "Papierkorb",
      prefs: "Einstellungen",
      subject: "Betreff",
      message: "Nachricht",
      send: "Senden",
      sendNote: "Der Brief öffnet sich in Ihrem E-Mail-Programm.",
      defaultSubject: "Anfrage über die Website",
      clipboardEmpty: "Die Zwischenablage ist leer.",
      clipboardHas: "In der Zwischenablage:",
      trashEmpty: "Der Papierkorb ist leer.",
      lang: "Sprache",
      contrast: "Bildschirmkontrast",
      copied: "Adresse in die Zwischenablage kopiert.",
      copyFailed: "Die Adresse konnte nicht kopiert werden.",
      ok: "OK",
      close: "Schließen",
      padHint: "Öffnen Sie den Block, und ein neues Anfrageblatt wird abgerissen."
    },
    fr: {
      menus: ["Bureau", "Fichier/Impression", "Édition", "Entretien"],
      open: "Ouvrir",
      setAside: (n) => `Mettre de côté « ${n} »`,
      setAsideAll: "Tout mettre de côté",
      tearOff: "Détacher une demande",
      copyEmail: "Copier l’adresse e-mail",
      cleanUp: "Ranger le bureau",
      versions: "Autres versions du site",
      noWindows: "Aucune fenêtre ouverte",
      start: ["Version 3.1", "Démarrage du système…"],
      disk: "ArtIntelliCo",
      pad: "Bloc de demandes",
      request: (n) => `Demande ${n}`,
      clipboard: "Presse-papiers",
      trash: "Corbeille",
      prefs: "Préférences",
      subject: "Objet",
      message: "Message",
      send: "Envoyer",
      sendNote: "La lettre s’ouvrira dans votre logiciel de messagerie.",
      defaultSubject: "Demande depuis le site",
      clipboardEmpty: "Le presse-papiers est vide.",
      clipboardHas: "Dans le presse-papiers :",
      trashEmpty: "La corbeille est vide.",
      lang: "Langue",
      contrast: "Contraste de l’écran",
      copied: "Adresse copiée dans le presse-papiers.",
      copyFailed: "Impossible de copier l’adresse.",
      ok: "OK",
      close: "Fermer",
      padHint: "Ouvrez le bloc : une nouvelle demande s’en détache."
    },
    es: {
      menus: ["Escritorio", "Archivo/Imprimir", "Edición", "Utilidades"],
      open: "Abrir",
      setAside: (n) => `Apartar «${n}»`,
      setAsideAll: "Apartar todo",
      tearOff: "Arrancar hoja de solicitud",
      copyEmail: "Copiar dirección de correo",
      cleanUp: "Ordenar escritorio",
      versions: "Otras versiones del sitio",
      noWindows: "No hay ventanas abiertas",
      start: ["Versión 3.1", "Iniciando el sistema…"],
      disk: "ArtIntelliCo",
      pad: "Bloc de solicitudes",
      request: (n) => `Solicitud ${n}`,
      clipboard: "Portapapeles",
      trash: "Papelera",
      prefs: "Preferencias",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar",
      sendNote: "La carta se abrirá en su programa de correo.",
      defaultSubject: "Consulta desde la web",
      clipboardEmpty: "El portapapeles está vacío.",
      clipboardHas: "En el portapapeles:",
      trashEmpty: "La papelera está vacía.",
      lang: "Idioma",
      contrast: "Contraste de pantalla",
      copied: "Dirección copiada al portapapeles.",
      copyFailed: "No se ha podido copiar la dirección.",
      ok: "Aceptar",
      close: "Cerrar",
      padHint: "Abra el bloc y se arrancará una solicitud nueva."
    },
    pt: {
      menus: ["Secretária", "Ficheiro/Imprimir", "Edição", "Manutenção"],
      open: "Abrir",
      setAside: (n) => `Pôr de parte «${n}»`,
      setAsideAll: "Pôr tudo de parte",
      tearOff: "Destacar folha de pedido",
      copyEmail: "Copiar endereço de e-mail",
      cleanUp: "Arrumar a secretária",
      versions: "Outras versões do site",
      noWindows: "Nenhuma janela aberta",
      start: ["Versão 3.1", "A iniciar o sistema…"],
      disk: "ArtIntelliCo",
      pad: "Bloco de pedidos",
      request: (n) => `Pedido ${n}`,
      clipboard: "Área de transferência",
      trash: "Lixo",
      prefs: "Preferências",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar",
      sendNote: "A carta vai abrir no seu programa de e-mail.",
      defaultSubject: "Pedido a partir do site",
      clipboardEmpty: "A área de transferência está vazia.",
      clipboardHas: "Na área de transferência:",
      trashEmpty: "O lixo está vazio.",
      lang: "Idioma",
      contrast: "Contraste do ecrã",
      copied: "Endereço copiado para a área de transferência.",
      copyFailed: "Não foi possível copiar o endereço.",
      ok: "OK",
      close: "Fechar",
      padHint: "Abra o bloco e dele destaca-se um pedido novo."
    },
    it: {
      menus: ["Scrivania", "Archivio/Stampa", "Composizione", "Utilità"],
      open: "Apri",
      setAside: (n) => `Metti da parte «${n}»`,
      setAsideAll: "Metti da parte tutto",
      tearOff: "Stacca un modulo di richiesta",
      copyEmail: "Copia indirizzo e-mail",
      cleanUp: "Riordina la scrivania",
      versions: "Altre versioni del sito",
      noWindows: "Nessuna finestra aperta",
      start: ["Versione 3.1", "Avvio del sistema…"],
      disk: "ArtIntelliCo",
      pad: "Blocco richieste",
      request: (n) => `Richiesta ${n}`,
      clipboard: "Appunti",
      trash: "Cestino",
      prefs: "Preferenze",
      subject: "Oggetto",
      message: "Messaggio",
      send: "Invia",
      sendNote: "La lettera si aprirà nel Suo programma di posta.",
      defaultSubject: "Richiesta dal sito",
      clipboardEmpty: "Gli appunti sono vuoti.",
      clipboardHas: "Negli appunti:",
      trashEmpty: "Il cestino è vuoto.",
      lang: "Lingua",
      contrast: "Contrasto dello schermo",
      copied: "Indirizzo copiato negli appunti.",
      copyFailed: "Impossibile copiare l’indirizzo.",
      ok: "OK",
      close: "Chiudi",
      padHint: "Apra il blocco e se ne staccherà una nuova richiesta."
    }
  };

  /* Послуги — службові записки LisaWrite: шапка, текст, перелік робіт, результат */
  const MEMOS = {
    uk: {
      kind: "СЛУЖБОВА ЗАПИСКА",
      to: "Кому:", from: "Від:", subj: "Тема:",
      list: "Що зробимо:", result: "Результат:",
      note: {
        title: "Прочитайте спершу",
        to: "Усім, хто відкрив цю теку",
        subj: "Як ми беремося до задач",
        body: [
          "У теці десять записок, по одній на кожен напрям. Спершу головне: ми не тримаємося за одну мову програмування чи платформу. Розбираємося в задачі, а тоді добираємо інструменти.",
          "Іноді чесна відповідь — готовий сервіс за підпискою, а не розробка. Тоді так і напишемо."
        ]
      },
      items: [
        {
          title: "Розробка концепції ІТ рішення",
          to: "Керівнику, який задумав нову систему",
          body: [
            "Перш ніж щось розробляти, треба домовитися, яку задачу система розв'язує. Звучить очевидно, та найдорожчу помилку в проєкті зазвичай роблять саме тут, ще до першого рядка коду: систему будують під задачу, якої ніхто до ладу не сформулював.",
            "Тож просимо часу не лише у вас, а й у тих, хто системою користуватиметься: бухгалтерії, складу, менеджерів. З цього виходять вимоги, які однаково розуміють і бізнес, і розробники. А часом висновок такий: розробляти нічого не треба, візьміть готовий продукт і доналаштуйте його. Для нас це нормальний результат."
          ],
          list: [
            "поговоримо з працівниками й розберемо, як процеси йдуть зараз",
            "запишемо бізнес-вимоги та сценарії роботи",
            "порівняємо готові рішення з розробкою на замовлення",
            "складемо технічне завдання зі строками й бюджетом за етапами"
          ],
          result: "Документ, за яким будь-яка команда — ми чи інша — зможе оцінити роботу й почати її."
        },
        {
          title: "Розробка SaaS рішень",
          to: "Тим, хто хоче продавати свій сервіс за підпискою",
          body: [
            "SaaS-платформу ведемо від першої версії для пілотних клієнтів до сервісу, де в кожного клієнта свій простір, свій тариф і особистий кабінет.",
            "Гроші в SaaS заробляє не код. Їх заробляє те, наскільки просто новому клієнту зареєструватися, заплатити й почати працювати, жодного разу не подзвонивши в підтримку. Мультитенантність, білінг і права доступу закладаємо з першого дня: переробляти це, коли клієнти вже всередині, виходить у рази дорожче. Першу версію намагаємося випустити якнайраніше — живі користувачі швидко покажуть, які функції були зайві."
          ],
          list: [
            "архітектура на багатьох клієнтів, дані кожного ізольовані",
            "реєстрація, тарифи, підписки, онлайн-оплата",
            "особисті кабінети, ролі й права",
            "інтеграції та відкрите API для ваших клієнтів",
            "масштабування, коли зростає навантаження"
          ],
          result: "Продукт, який продається за підпискою, а не проєкт, який щоразу доводиться впроваджувати вручну."
        },
        {
          title: "Web-розробка",
          to: "Тим, кому потрібні заявки із сайту",
          body: [
            "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. За основу беремо задачу, а не шаблон.",
            "Добрий сайт для бізнесу видно за заявками й замовленнями, а не за тим, як він виглядає в портфоліо. Тому ще до старту домовляємося, що вважати результатом, і ставимо аналітику до запуску. Не через пів року. Технологію добираємо під розмір задачі: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе."
          ],
          list: [
            "прототип і дизайн інтерфейсів",
            "frontend, backend, адмінпанель",
            "зв'язок з оплатою, доставкою, CRM та обліком",
            "SEO-основа, швидкість завантаження, аналітика",
            "запуск і супровід"
          ],
          result: "Видно, скільки заявок і грошей приносить сайт."
        },
        {
          title: "Мобільні застосунки",
          to: "Тим, хто думає про власний застосунок",
          body: [
            "Пишемо застосунки для iOS та Android, а до них серверну частину й адмінпанель.",
            "Спершу перевіримо, чи він вам узагалі потрібен. Застосунок виправданий, коли клієнт повертається до нього регулярно: замовляє знову, стежить за статусом, збирає бонуси. Якщо людина заходить раз на рік, дешевше обійдеться зручний мобільний сайт, і ми скажемо про це до початку робіт, а не після. Нативно чи кросплатформно — вирішуємо за бюджетом і тим, скільки застосунку треба від камери, геолокації та офлайн-режиму."
          ],
          list: [
            "застосунки для iOS та Android",
            "серверна частина та API",
            "адмінпанель: контент, замовлення, користувачі",
            "push-сповіщення та аналітика",
            "публікація в App Store і Google Play"
          ],
          result: "Застосунок проходить модерацію магазинів, а ваша команда керує ним без розробників."
        },
        {
          title: "Рішення зі штучним інтелектом",
          to: "Тим, хто хоче «додати нейромережу»",
          body: [
            "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів: частину рутинних кроків вони виконують самі, а людина перевіряє. Штучний інтелект і машинне навчання ставимо туди, де вони заощаджують час працівників або гроші компанії. Туди, де не заощаджують, — не ставимо.",
            "До ШІ ми ставимося скептичніше за багатьох. Добра половина ідей «давайте додамо нейромережу» закривається звичайною автоматизацією. Інша річ, коли люди годинами розбирають листи, документи й звернення: тут мовні моделі справді знімають рутину. Починаємо з пілота на ваших даних, щоб цифри точності лежали на столі ще до основної розробки."
          ],
          list: [
            "ШІ-агенти для рутинних кроків процесу: розібрати заявку, внести дані в CRM, підготувати відповідь клієнтові",
            "чат-боти й асистенти для клієнтів і працівників",
            "розпізнавання та розбір документів",
            "сортування звернень, пошук у базі знань",
            "прогнози попиту, аналіз даних",
            "пілот з оцінкою якості на ваших даних"
          ],
          result: "Конкретну роботу, яку виконували люди, виконує система. Людина її контролює."
        },
        {
          title: "Розробка CRM та ERP",
          to: "Керівнику, в якого половина обліку живе в таблицях",
          body: [
            "Робимо CRM та ERP під те, як влаштована робота саме у вас. Не навпаки.",
            "Коробкова CRM добра, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину справ у таблицях, бо система «так не вміє», власна виходить дешевше. Дані зі старих систем і таблиць переносимо самі, а запускаємо по відділах, щоб робота не ставала ні на день."
          ],
          list: [
            "модулі продажів, складу, виробництва, фінансів — які потрібні",
            "ролі, права доступу, журнал дій",
            "звіти й дашборди для керівника",
            "перенесення даних із таблиць і старих систем",
            "зв'язок із бухгалтерією, телефонією, поштою"
          ],
          result: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижневих звітів з кожного відділу."
        },
        {
          title: "Хмарні рішення",
          to: "Тим, хто зважує переїзд у хмару",
          body: [
            "Переносимо інфраструктуру в Amazon Web Services, повністю чи частинами, а потім стежимо, щоб вона працювала й не дорожчала без причини.",
            "Попереджаємо одразу: хмара не завжди дешевша за власний сервер. Вона окупається, коли навантаження стрибає, коли потрібна відмовостійкість або коли нове середовище має підніматися за хвилини, а не за тиждень. Тому переїзд починається з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є план відкату."
          ],
          list: [
            "аудит поточної інфраструктури, розрахунок вартості",
            "архітектура в AWS, план міграції",
            "перенесення серверів, баз даних, файлів",
            "резервні копії та моніторинг",
            "зменшення витрат після переїзду"
          ],
          result: "Інфраструктура переживає відмову сервера, а рахунок за хмару вам зрозумілий."
        },
        {
          title: "Інфраструктура компанії на базі Red Hat",
          to: "Тим, у кого сервери тримаються на пам'яті одного адміністратора",
          body: [
            "Будуємо інфраструктуру компанії на Red Hat: сервери на Red Hat Enterprise Linux, контейнери в OpenShift, налаштування й розгортання через Ansible.",
            "Red Hat беруть, коли інфраструктура має роками працювати й проходити аудит. Підписка коштує грошей, а окуповується підтримкою виробника й довгим життєвим циклом — Red Hat Enterprise Linux розрахований на десять років. Інфраструктуру проєктуємо під ваші навантаження, а конфігурацію кожного сервера описуємо в Ansible: якщо машина впаде, її перезбирають за сценарієм, і ніхто не згадує, що там колись правили вручну. Red Hat — наш партнер, тож у підписках і підтримці виробника теж допоможемо розібратися."
          ],
          list: [
            "аудит поточних серверів і план переходу",
            "Red Hat Enterprise Linux, оновлення централізовано через Red Hat Satellite",
            "OpenShift для ваших застосунків",
            "налаштування й розгортання через Ansible",
            "облікові записи й доступ в одному місці (Identity Management)",
            "моніторинг, резервні копії, документація для вашої команди"
          ],
          result: "Інфраструктуру можна перевірити, повторити й передати іншій команді, і знання не підуть разом із людьми."
        },
        {
          title: "API та інтеграції",
          to: "Тим, хто вводить ті самі дані двічі",
          body: [
            "Проєктуємо API для ваших систем і зв'язуємо їх із сервісами, якими ви вже користуєтеся.",
            "Найчастіше бачимо одне й те саме: замовлення із сайту хтось передруковує в облікову систему вручну, оплати звіряють у таблиці. Інтеграція забирає цю роботу собі разом із помилками, які вона породжує. Моніторинг налаштовуємо окремо. Інтеграції ламаються тихо — партнер змінив свій API, і все, — тож хай першою про це дізнається система, а не ваш клієнт."
          ],
          list: [
            "проєктування й документація API",
            "платіжні системи, служби доставки, CRM, облік",
            "обмін даними між внутрішніми системами",
            "черги й повторні спроби при збоях",
            "моніторинг і сповіщення"
          ],
          result: "Дані вводять один раз, далі вони самі доходять, куди треба."
        },
        {
          title: "Технічна підтримка",
          to: "Власникам систем, зокрема написаних не нами",
          body: [
            "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, навіть якщо писали їх не ми.",
            "Виправлення помилок — менша частина підтримки. Сюди ж належать оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася від іншого підрядника, спершу робимо аудит і пишемо документацію. Без неї кожна правка — лотерея."
          ],
          list: [
            "моніторинг доступності й помилок",
            "виправлення та оновлення безпеки",
            "резервні копії й перевірка, що з них можна відновитися",
            "доопрацювання й нові функції за планом",
            "аудит і документація чужих систем"
          ],
          result: "Система працює, і є команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      kind: "INTEROFFICE MEMO",
      to: "To:", from: "From:", subj: "Subject:",
      list: "What we'll do:", result: "Outcome:",
      note: {
        title: "Read Me First",
        to: "Anyone who opened this folder",
        subj: "How we take on a job",
        body: [
          "There are ten memos in this folder, one per line of work. The main thing first: we don't stick to one programming language or platform. We work out the problem, then choose the tools.",
          "Sometimes the honest answer is an off-the-shelf subscription service rather than development. Then that's what we'll write."
        ]
      },
      items: [
        {
          title: "IT solution concept",
          to: "Whoever came up with the idea for a new system",
          body: [
            "Before anything gets built, someone has to agree on what the system is for. Sounds obvious. Yet the most expensive mistake in a project is usually made right here, before the first line of code: the system gets built for a problem nobody properly defined.",
            "So we ask for time not only from you but from the people who'll use the thing — accounting, the warehouse, the sales managers. What comes out is a set of requirements the business and the developers read the same way. And sometimes the conclusion is that nothing needs building: take an existing product and configure it. We count that as a perfectly good result."
          ],
          list: [
            "talk to staff and walk through how the processes run today",
            "write down business requirements and user scenarios",
            "compare ready-made products with custom development",
            "draw up a specification with time and budget per phase"
          ],
          result: "A document any team, ours or another, can estimate from and start work on."
        },
        {
          title: "SaaS development",
          to: "Anyone planning to sell their service by subscription",
          body: [
            "We take a SaaS platform from a first version for pilot customers to a service where every customer gets their own workspace, plan and dashboard.",
            "In SaaS the code isn't what earns money. What earns it is how easily a new customer can sign up, pay and get going without ever calling support. Multi-tenancy, billing and permissions go in on day one, because retrofitting them once customers are inside costs several times more. We try to ship the first version early — real users are quick to show which features were never needed."
          ],
          list: [
            "multi-tenant architecture, each customer's data kept separate",
            "sign-up, plans, subscriptions, online payments",
            "customer dashboards, roles and permissions",
            "integrations and a public API for your customers",
            "scaling as the load grows"
          ],
          result: "A product that sells by subscription, not a project you have to roll out by hand every time."
        },
        {
          title: "Web development",
          to: "Anyone who needs the website to bring in leads",
          body: [
            "Corporate sites, marketplaces, online stores, booking systems, internal web tools. We start from the task, not from a template.",
            "A business website proves itself in leads and orders, not in how it looks in a portfolio. So before we begin we agree on what counts as a result, and the analytics go in before launch. Not six months later. The technology is sized to the job: a landing page has no use for a heavy platform, and a marketplace won't squeeze into a website builder."
          ],
          list: [
            "prototype and interface design",
            "frontend, backend, admin panel",
            "hooking up payments, delivery, CRM and accounting",
            "SEO groundwork, page speed, analytics",
            "launch and ongoing support"
          ],
          result: "You can see how many leads and how much money the site brings in."
        },
        {
          title: "Mobile apps",
          to: "Anyone thinking about an app of their own",
          body: [
            "We build iOS and Android apps, plus the server side and admin panel behind them.",
            "First we'll check whether you need one at all. An app earns its keep when customers keep coming back to it: reordering, tracking a delivery, collecting points. If someone opens it once a year, a good mobile website is cheaper, and we'll say so before work starts rather than after. Native or cross-platform comes down to budget and to how much the app needs from the camera, location and offline mode."
          ],
          list: [
            "iOS and Android apps",
            "server side and API",
            "admin panel for content, orders and users",
            "push notifications and analytics",
            "publishing to the App Store and Google Play"
          ],
          result: "The app passes store review, and your team runs it without a developer."
        },
        {
          title: "AI-powered solutions",
          to: "Anyone who wants to “add a neural network”",
          body: [
            "We automate business processes with AI agents: they take some of the routine steps themselves, and a person checks the work. AI and machine learning go where they save staff time or company money. Where they don't, we leave them out.",
            "We're more sceptical about AI than most. A good half of the “let's add a neural network” ideas are covered by plain automation. It's a different story when people spend hours sorting emails, documents and requests: there, language models really do take the routine away. We begin with a pilot on your data, so the accuracy figures are on the table before the main build."
          ],
          list: [
            "AI agents for routine process steps: triage a request, update the CRM, draft a reply to a customer",
            "chatbots and assistants for customers and staff",
            "document recognition and data extraction",
            "sorting requests, searching the knowledge base",
            "demand forecasts, data analysis",
            "a pilot with quality measured on your data"
          ],
          result: "A specific job people used to do is now done by the system, with a person checking on it."
        },
        {
          title: "CRM and ERP development",
          to: "Managers whose real records live in spreadsheets",
          body: [
            "We build CRM and ERP around the way your business actually works. Not the other way round.",
            "Off-the-shelf CRM is fine as long as your process looks standard. Once managers are running half their work in spreadsheets because the system “can't do that”, a system of your own works out cheaper. We move the data from old systems and spreadsheets ourselves and roll out one department at a time, so work never stops for a day."
          ],
          list: [
            "sales, warehouse, production and finance modules, whichever you need",
            "roles, permissions, an audit log",
            "reports and dashboards for management",
            "data migration from spreadsheets and old systems",
            "links to accounting, telephony and email"
          ],
          result: "One system instead of a zoo of spreadsheets. Management sees how things stand without collecting weekly reports from every department."
        },
        {
          title: "Cloud solutions",
          to: "Anyone weighing a move to the cloud",
          body: [
            "We move infrastructure to Amazon Web Services, all of it or in parts, then keep an eye on it so it runs and doesn't get pricier for no reason.",
            "Fair warning: the cloud isn't always cheaper than your own server. It pays off when load jumps around, when you need fault tolerance, or when a new environment has to come up in minutes rather than a week. That's why a move starts with an audit and a cost estimate. We migrate in stages, with a rollback plan at every step."
          ],
          list: [
            "audit of current infrastructure, cost estimate",
            "AWS architecture, migration plan",
            "moving servers, databases and files",
            "backups and monitoring",
            "trimming costs after the move"
          ],
          result: "Infrastructure that survives a server failure, and a cloud bill you understand."
        },
        {
          title: "Company infrastructure on Red Hat",
          to: "Anyone whose servers live in one administrator's head",
          body: [
            "We build company infrastructure on Red Hat: servers on Red Hat Enterprise Linux, containers on OpenShift, configuration and deployment through Ansible.",
            "Red Hat is the pick when infrastructure has to run for years and pass audits. The subscription costs money, and it earns that back through vendor support and a long lifecycle — Red Hat Enterprise Linux is supported for ten years. We design around your workloads and describe every server's configuration in Ansible: if a machine dies, it gets rebuilt from a playbook, and nobody has to remember what was once tweaked by hand. Red Hat is our partner, so we can help you sort out subscriptions and vendor support too."
          ],
          list: [
            "audit of current servers and a migration plan",
            "Red Hat Enterprise Linux, with updates managed centrally through Red Hat Satellite",
            "OpenShift for your applications",
            "configuration and deployment through Ansible",
            "accounts and access in one place (Identity Management)",
            "monitoring, backups, documentation for your team"
          ],
          result: "Infrastructure you can audit, reproduce and hand to another team without the knowledge walking out the door."
        },
        {
          title: "APIs and integrations",
          to: "Anyone typing the same data in twice",
          body: [
            "We design APIs for your systems and connect them to the services you already use.",
            "We see the same thing over and over: someone retypes website orders into the accounting system, payments get reconciled in a spreadsheet. An integration takes that work over, along with the mistakes it produces. Monitoring is set up separately. Integrations break quietly — a partner changes their API and that's that — so the system should be the first to know, not your customer."
          ],
          list: [
            "API design and documentation",
            "payment providers, delivery services, CRM, accounting",
            "data exchange between internal systems",
            "queues and retries when something fails",
            "monitoring and alerts"
          ],
          result: "Data is entered once and finds its own way to where it's needed."
        },
        {
          title: "Technical support",
          to: "Owners of systems, including ones we didn't build",
          body: [
            "We support your IT systems and keep developing them, even when someone else wrote them.",
            "Fixing bugs is the smaller part of support. It also covers updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and write the documentation. Without it, every change is a lottery."
          ],
          list: [
            "availability and error monitoring",
            "fixes and security updates",
            "backups, and checks that they actually restore",
            "planned improvements and new features",
            "audit and documentation of other people's systems"
          ],
          result: "The system works, and there's a team that knows how it's put together."
        }
      ]
    },
    ru: {
      kind: "СЛУЖЕБНАЯ ЗАПИСКА",
      to: "Кому:", from: "От:", subj: "Тема:",
      list: "Что сделаем:", result: "Результат:",
      note: {
        title: "Прочтите сначала",
        to: "Всем, кто открыл эту папку",
        subj: "Как мы берёмся за задачи",
        body: [
          "В папке десять записок, по одной на каждое направление. Сначала о главном: мы не держимся за один язык программирования или платформу. Разбираемся в задаче, а потом подбираем инструменты.",
          "Иногда честный ответ — готовый сервис по подписке, а не разработка. Тогда так и напишем."
        ]
      },
      items: [
        {
          title: "Разработка концепции ИТ решения",
          to: "Руководителю, который задумал новую систему",
          body: [
            "Прежде чем что-то разрабатывать, надо договориться, какую задачу система решает. Звучит очевидно, но самую дорогую ошибку в проекте обычно делают как раз здесь, до первой строки кода: систему строят под задачу, которую никто толком не сформулировал.",
            "Поэтому просим время не только у вас, но и у тех, кто будет системой пользоваться: бухгалтерии, склада, менеджеров. Из этого получаются требования, которые одинаково читают и бизнес, и разработчики. А иногда вывод такой: разрабатывать ничего не нужно, возьмите готовый продукт и донастройте его. Мы считаем это нормальным результатом."
          ],
          list: [
            "поговорим с сотрудниками и разберём, как процессы идут сейчас",
            "запишем бизнес-требования и сценарии работы",
            "сравним готовые решения с заказной разработкой",
            "составим техническое задание со сроками и бюджетом по этапам"
          ],
          result: "Документ, по которому любая команда — мы или другая — сможет оценить работу и начать её."
        },
        {
          title: "Разработка SaaS решений",
          to: "Тем, кто хочет продавать свой сервис по подписке",
          body: [
            "SaaS-платформу ведём от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, свой тариф и личный кабинет.",
            "Деньги в SaaS приносит не код. Их приносит то, насколько просто новому клиенту зарегистрироваться, заплатить и начать работать, ни разу не позвонив в поддержку. Мультитенантность, биллинг и права доступа закладываем с первого дня: переделывать это, когда клиенты уже внутри, выходит в разы дороже. Первую версию стараемся выпустить пораньше — живые пользователи быстро покажут, какие функции были лишними."
          ],
          list: [
            "архитектура на много клиентов, данные каждого изолированы",
            "регистрация, тарифы, подписки, онлайн-оплата",
            "личные кабинеты, роли и права",
            "интеграции и открытый API для ваших клиентов",
            "масштабирование, когда растёт нагрузка"
          ],
          result: "Продукт, который продаётся по подписке, а не проект, который каждый раз приходится внедрять руками."
        },
        {
          title: "Web-разработка",
          to: "Тем, кому нужны заявки с сайта",
          body: [
            "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. За основу берём задачу, а не шаблон.",
            "Хороший сайт для бизнеса узнаётся по заявкам и заказам, а не по тому, как он смотрится в портфолио. Так что ещё до старта договариваемся, что считать результатом, и ставим аналитику до запуска. Не через полгода. Технологию подбираем по размеру задачи: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет."
          ],
          list: [
            "прототип и дизайн интерфейсов",
            "frontend, backend, админ-панель",
            "связка с оплатой, доставкой, CRM и учётом",
            "SEO-основа, скорость загрузки, аналитика",
            "запуск и сопровождение"
          ],
          result: "Видно, сколько заявок и денег приносит сайт."
        },
        {
          title: "Мобильные приложения",
          to: "Тем, кто думает о своём приложении",
          body: [
            "Пишем приложения для iOS и Android, а к ним серверную часть и админ-панель.",
            "Сначала проверим, нужно ли оно вам вообще. Приложение оправдано, если клиент возвращается в него регулярно: заказывает снова, следит за статусом, копит бонусы. Если человек заходит раз в год, дешевле обойдётся удобный мобильный сайт, и мы скажем об этом до начала работ, а не после. Нативно или кроссплатформенно — решаем по бюджету и по тому, сколько приложению нужно от камеры, геолокации и офлайн-режима."
          ],
          list: [
            "приложения под iOS и Android",
            "серверная часть и API",
            "админ-панель: контент, заказы, пользователи",
            "push-уведомления и аналитика",
            "публикация в App Store и Google Play"
          ],
          result: "Приложение проходит модерацию магазинов, а ваша команда управляет им без разработчиков."
        },
        {
          title: "Решения с искусственным интеллектом",
          to: "Тем, кто хочет «добавить нейросеть»",
          body: [
            "Автоматизируем бизнес-процессы с помощью ИИ-агентов: часть рутинных шагов они делают сами, а человек проверяет. Искусственный интеллект и машинное обучение ставим туда, где они экономят время сотрудников или деньги компании. Туда, где не экономят, — не ставим.",
            "Мы к ИИ относимся скептичнее многих. Добрая половина идей «давайте добавим нейросеть» закрывается обычной автоматизацией. Другое дело, когда люди часами разбирают письма, документы и обращения: тут языковые модели действительно снимают рутину. Начинаем с пилота на ваших данных, чтобы цифры точности лежали на столе ещё до основной разработки."
          ],
          list: [
            "ИИ-агенты для рутинных шагов процесса: разобрать заявку, внести данные в CRM, подготовить ответ клиенту",
            "чат-боты и ассистенты для клиентов и сотрудников",
            "распознавание и разбор документов",
            "сортировка обращений, поиск по базе знаний",
            "прогнозы спроса, анализ данных",
            "пилот с оценкой качества на ваших данных"
          ],
          result: "Конкретную работу, которую делали люди, делает система. Человек её контролирует."
        },
        {
          title: "Разработка CRM и ERP",
          to: "Руководителю, у которого половина учёта живёт в таблицах",
          body: [
            "Делаем CRM и ERP под то, как устроена работа именно у вас. Не наоборот.",
            "Коробочная CRM хороша, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину дел в таблицах, потому что система «так не умеет», своя выходит дешевле. Данные из старых систем и таблиц переносим сами, а запускаем по отделам, чтобы работа не вставала ни на день."
          ],
          list: [
            "модули продаж, склада, производства, финансов — какие нужны",
            "роли, права доступа, журнал действий",
            "отчёты и дашборды для руководителя",
            "перенос данных из таблиц и старых систем",
            "связь с бухгалтерией, телефонией, почтой"
          ],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит положение дел и не собирает еженедельные отчёты с каждого отдела."
        },
        {
          title: "Облачные решения",
          to: "Тем, кто взвешивает переезд в облако",
          body: [
            "Переносим инфраструктуру в Amazon Web Services, целиком или по частям, а потом следим, чтобы она работала и не дорожала без причины.",
            "Предупреждаем сразу: облако не всегда дешевле своего сервера. Оно окупается, когда нагрузка скачет, когда нужна отказоустойчивость или когда новое окружение должно подниматься за минуты, а не за неделю. Поэтому переезд начинается с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть план отката."
          ],
          list: [
            "аудит текущей инфраструктуры, расчёт стоимости",
            "архитектура в AWS, план миграции",
            "перенос серверов, баз данных, файлов",
            "резервные копии и мониторинг",
            "снижение расходов после переезда"
          ],
          result: "Инфраструктура переживает отказ сервера, а счёт за облако вам понятен."
        },
        {
          title: "Инфраструктура компании на базе Red Hat",
          to: "Тем, у кого серверы держатся на памяти одного администратора",
          body: [
            "Строим инфраструктуру компании на Red Hat: серверы на Red Hat Enterprise Linux, контейнеры в OpenShift, настройка и развёртывание через Ansible.",
            "Red Hat берут, когда инфраструктура должна годами работать и проходить аудит. Подписка стоит денег, а окупается она поддержкой производителя и длинным жизненным циклом — Red Hat Enterprise Linux рассчитан на десять лет. Инфраструктуру проектируем под ваши нагрузки, а конфигурацию каждого сервера описываем в Ansible: если машина умрёт, её пересоберут по сценарию, и никому не придётся вспоминать, что там когда-то правили руками. Red Hat — наш партнёр, так что в подписках и поддержке производителя тоже поможем разобраться."
          ],
          list: [
            "аудит текущих серверов и план перехода",
            "Red Hat Enterprise Linux, обновления централизованно через Red Hat Satellite",
            "OpenShift для ваших приложений",
            "настройка и развёртывание через Ansible",
            "учётные записи и доступ в одном месте (Identity Management)",
            "мониторинг, резервные копии, документация для вашей команды"
          ],
          result: "Инфраструктуру можно проверить, повторить и передать другой команде, и знания не уйдут вместе с людьми."
        },
        {
          title: "API и интеграции",
          to: "Тем, кто вводит одни и те же данные дважды",
          body: [
            "Проектируем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
            "Чаще всего мы видим одно и то же: заказ с сайта кто-то перебивает в учётную систему руками, оплаты сверяют в таблице. Интеграция забирает эту работу себе вместе с ошибками, которые она порождает. Мониторинг настраиваем отдельно. Интеграции ломаются тихо — партнёр поменял свой API, и всё, — так что пусть первой об этом узнает система, а не ваш клиент."
          ],
          list: [
            "проектирование и документация API",
            "платёжные системы, службы доставки, CRM, учёт",
            "обмен данными между внутренними системами",
            "очереди и повторные попытки при сбоях",
            "мониторинг и оповещения"
          ],
          result: "Данные вводят один раз, дальше они сами доходят куда нужно."
        },
        {
          title: "Техническая поддержка",
          to: "Владельцам систем, в том числе написанных не нами",
          body: [
            "Поддерживаем ваши ИТ-системы и развиваем их дальше, даже если писали их не мы.",
            "Исправлять ошибки — меньшая часть поддержки. Сюда же входят обновления, которые закрывают уязвимости, мониторинг, который замечает проблему раньше пользователей, и мелкие доработки по ходу дела. Если система досталась от другого подрядчика, сначала проводим аудит и пишем документацию. Без неё каждая правка превращается в лотерею."
          ],
          list: [
            "мониторинг доступности и ошибок",
            "исправления и обновления безопасности",
            "резервные копии и проверка, что из них можно восстановиться",
            "доработки и новые функции по плану",
            "аудит и документация чужих систем"
          ],
          result: "Система работает, и есть команда, которая знает, как она устроена."
        }
      ]
    },
    de: {
      kind: "HAUSMITTEILUNG",
      to: "An:", from: "Von:", subj: "Betreff:",
      list: "Was wir tun:", result: "Ergebnis:",
      note: {
        title: "Bitte zuerst lesen",
        to: "Alle, die diesen Ordner geöffnet haben",
        subj: "Wie wir an Aufgaben herangehen",
        body: [
          "In diesem Ordner liegen zehn Mitteilungen, eine pro Arbeitsgebiet. Das Wichtigste vorweg: Wir legen uns nicht auf eine Programmiersprache oder Plattform fest. Erst verstehen wir das Problem, dann wählen wir die Werkzeuge.",
          "Manchmal lautet die ehrliche Antwort: ein fertiger Abo-Dienst statt einer Entwicklung. Dann schreiben wir Ihnen genau das."
        ]
      },
      items: [
        {
          title: "Konzeption von IT-Lösungen",
          to: "Die Führungskraft, die ein neues System plant",
          body: [
            "Bevor etwas entwickelt wird, muss man sich einigen, welches Problem das System lösen soll. Klingt selbstverständlich. Und doch passiert der teuerste Fehler eines Projekts meist genau hier, noch vor der ersten Zeile Code: Das System wird für ein Problem gebaut, das niemand sauber formuliert hat.",
            "Deshalb bitten wir nicht nur Sie um Zeit, sondern auch die Menschen, die mit dem System arbeiten werden: Buchhaltung, Lager, Vertrieb. Daraus entstehen Anforderungen, die Fachabteilung und Entwickler gleich verstehen. Und manchmal lautet das Fazit: Es muss gar nichts entwickelt werden, nehmen Sie ein fertiges Produkt und passen Sie es an. Auch das ist für uns ein vollwertiges Ergebnis."
          ],
          list: [
            "mit den Mitarbeitenden sprechen und die heutigen Abläufe durchgehen",
            "Geschäftsanforderungen und Anwendungsszenarien festhalten",
            "Standardprodukte mit einer Individualentwicklung vergleichen",
            "ein Pflichtenheft mit Zeit- und Budgetplan je Phase erstellen"
          ],
          result: "Ein Dokument, auf dessen Grundlage jedes Team, unseres oder ein anderes, den Aufwand schätzen und mit der Arbeit beginnen kann."
        },
        {
          title: "SaaS-Entwicklung",
          to: "Alle, die ihren Dienst im Abonnement verkaufen wollen",
          body: [
            "Wir begleiten eine SaaS-Plattform von der ersten Version für Pilotkunden bis zum Dienst, in dem jeder Kunde seinen eigenen Arbeitsbereich, Tarif und sein eigenes Dashboard hat.",
            "Bei SaaS verdient nicht der Code das Geld. Es verdient, wie leicht sich ein neuer Kunde registrieren, bezahlen und loslegen kann, ohne je beim Support anzurufen. Mandantenfähigkeit, Abrechnung und Berechtigungen bauen wir ab dem ersten Tag ein, denn sie nachzurüsten, wenn schon Kunden im System sind, kostet ein Vielfaches. Die erste Version versuchen wir früh auszuliefern – echte Nutzer zeigen schnell, welche Funktionen nie gebraucht wurden."
          ],
          list: [
            "mandantenfähige Architektur, die Daten jedes Kunden getrennt",
            "Registrierung, Tarife, Abonnements, Online-Zahlung",
            "Kunden-Dashboards, Rollen und Berechtigungen",
            "Integrationen und eine öffentliche API für Ihre Kunden",
            "Skalierung bei wachsender Last"
          ],
          result: "Ein Produkt, das sich im Abo verkauft, und kein Projekt, das Sie jedes Mal von Hand einführen müssen."
        },
        {
          title: "Webentwicklung",
          to: "Alle, deren Website Anfragen bringen soll",
          body: [
            "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme, interne Web-Tools. Wir gehen von der Aufgabe aus, nicht von einer Vorlage.",
            "Eine Unternehmenswebsite bewährt sich an Anfragen und Bestellungen, nicht daran, wie sie im Portfolio aussieht. Deshalb vereinbaren wir vor dem Start, was als Ergebnis zählt, und richten die Webanalyse vor dem Launch ein. Nicht ein halbes Jahr später. Die Technologie richtet sich nach der Größe der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Website-Baukasten."
          ],
          list: [
            "Prototyp und Oberflächendesign",
            "Frontend, Backend, Admin-Bereich",
            "Anbindung von Zahlung, Versand, CRM und Buchhaltung",
            "SEO-Grundlagen, Ladezeit, Webanalyse",
            "Launch und laufende Betreuung"
          ],
          result: "Sie sehen, wie viele Anfragen und wie viel Umsatz die Website bringt."
        },
        {
          title: "Mobile Apps",
          to: "Alle, die über eine eigene App nachdenken",
          body: [
            "Wir entwickeln Apps für iOS und Android, dazu den Serverteil und den Admin-Bereich dahinter.",
            "Zuerst prüfen wir, ob Sie überhaupt eine App brauchen. Eine App lohnt sich, wenn Kunden regelmäßig zu ihr zurückkehren: erneut bestellen, eine Lieferung verfolgen, Punkte sammeln. Öffnet jemand sie einmal im Jahr, ist eine gute mobile Website günstiger, und das sagen wir Ihnen vor Arbeitsbeginn, nicht danach. Nativ oder plattformübergreifend entscheiden wir nach Budget und danach, wie viel die App von Kamera, Standort und Offlinemodus braucht."
          ],
          list: [
            "Apps für iOS und Android",
            "Serverteil und API",
            "Admin-Bereich für Inhalte, Bestellungen und Nutzer",
            "Push-Benachrichtigungen und Analyse",
            "Veröffentlichung im App Store und bei Google Play"
          ],
          result: "Die App besteht die Prüfung der Stores, und Ihr Team betreibt sie ohne Entwickler."
        },
        {
          title: "KI-Lösungen",
          to: "Alle, die „ein neuronales Netz einbauen“ wollen",
          body: [
            "Wir automatisieren Geschäftsprozesse mit KI-Agenten: Einen Teil der Routineschritte erledigen sie selbst, ein Mensch prüft das Ergebnis. Künstliche Intelligenz und maschinelles Lernen setzen wir dort ein, wo sie Arbeitszeit oder Geld sparen. Wo nicht, lassen wir sie weg.",
            "Wir sehen KI skeptischer als viele andere. Gut die Hälfte der Ideen nach dem Muster „bauen wir doch ein neuronales Netz ein“ lässt sich mit gewöhnlicher Automatisierung erledigen. Anders sieht es aus, wenn Menschen stundenlang E-Mails, Dokumente und Anfragen sortieren: Dort nehmen Sprachmodelle tatsächlich Routine ab. Wir beginnen mit einem Pilotprojekt auf Ihren Daten, damit die Genauigkeitswerte schon vor der eigentlichen Entwicklung auf dem Tisch liegen."
          ],
          list: [
            "KI-Agenten für Routineschritte im Prozess: Anfrage einordnen, Daten ins CRM eintragen, Antwort an den Kunden vorbereiten",
            "Chatbots und Assistenten für Kunden und Mitarbeitende",
            "Erkennung und Auswertung von Dokumenten",
            "Anfragen sortieren, Wissensdatenbank durchsuchen",
            "Nachfrageprognosen, Datenanalyse",
            "Pilotprojekt mit Qualitätsmessung auf Ihren Daten"
          ],
          result: "Eine konkrete Arbeit, die bisher Menschen erledigt haben, übernimmt das System. Ein Mensch behält die Kontrolle."
        },
        {
          title: "CRM- und ERP-Entwicklung",
          to: "Führungskräfte, deren halbe Buchführung in Tabellen lebt",
          body: [
            "Wir bauen CRM und ERP so, wie die Arbeit bei Ihnen tatsächlich läuft. Nicht umgekehrt.",
            "Ein Standard-CRM ist gut, solange Ihr Prozess dem Standard ähnelt. Wenn die Vertriebsleute die Hälfte ihrer Vorgänge in Tabellen führen, weil das System „das nicht kann“, kommt ein eigenes System günstiger. Die Daten aus Altsystemen und Tabellen übernehmen wir selbst, und eingeführt wird Abteilung für Abteilung, damit die Arbeit keinen Tag stillsteht."
          ],
          list: [
            "Module für Vertrieb, Lager, Produktion, Finanzen – je nach Bedarf",
            "Rollen, Zugriffsrechte, Protokoll aller Aktionen",
            "Berichte und Dashboards für die Geschäftsleitung",
            "Datenübernahme aus Tabellen und Altsystemen",
            "Anbindung an Buchhaltung, Telefonie und E-Mail"
          ],
          result: "Ein System statt eines Tabellenzoos. Die Geschäftsleitung sieht, wie es steht, ohne jede Woche Berichte aus allen Abteilungen einzusammeln."
        },
        {
          title: "Cloud-Lösungen",
          to: "Alle, die einen Umzug in die Cloud abwägen",
          body: [
            "Wir bringen Infrastruktur zu Amazon Web Services, ganz oder in Teilen, und achten danach darauf, dass sie läuft und nicht grundlos teurer wird.",
            "Gleich vorweg: Die Cloud ist nicht immer günstiger als der eigene Server. Sie rechnet sich, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn eine neue Umgebung in Minuten statt in einer Woche bereitstehen muss. Deshalb beginnt ein Umzug mit einem Audit und einer Kostenrechnung. Wir migrieren schrittweise, mit einem Rückfallplan für jeden Schritt."
          ],
          list: [
            "Audit der bestehenden Infrastruktur, Kostenrechnung",
            "Architektur in AWS, Migrationsplan",
            "Umzug von Servern, Datenbanken und Dateien",
            "Datensicherung und Monitoring",
            "Kostensenkung nach dem Umzug"
          ],
          result: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie verstehen."
        },
        {
          title: "Unternehmensinfrastruktur auf Red Hat",
          to: "Alle, deren Server nur im Kopf eines einzigen Administrators existieren",
          body: [
            "Wir bauen Unternehmensinfrastruktur auf Red Hat: Server mit Red Hat Enterprise Linux, Container in OpenShift, Konfiguration und Bereitstellung über Ansible.",
            "Red Hat ist die Wahl, wenn Infrastruktur jahrelang laufen und Audits bestehen muss. Das Abonnement kostet Geld und holt es über den Herstellersupport und einen langen Lebenszyklus wieder herein – Red Hat Enterprise Linux wird zehn Jahre lang unterstützt. Wir planen nach Ihren Lasten und beschreiben die Konfiguration jedes Servers in Ansible: Fällt eine Maschine aus, wird sie per Playbook neu aufgebaut, und niemand muss sich erinnern, was einmal von Hand geändert wurde. Red Hat ist unser Partner, daher helfen wir Ihnen auch bei Abonnements und Herstellersupport."
          ],
          list: [
            "Audit der bestehenden Server und Migrationsplan",
            "Red Hat Enterprise Linux, Updates zentral über Red Hat Satellite",
            "OpenShift für Ihre Anwendungen",
            "Konfiguration und Bereitstellung über Ansible",
            "Konten und Zugriffe an einer Stelle (Identity Management)",
            "Monitoring, Datensicherung, Dokumentation für Ihr Team"
          ],
          result: "Eine Infrastruktur, die sich prüfen, nachbauen und an ein anderes Team übergeben lässt, ohne dass das Wissen mit den Leuten geht."
        },
        {
          title: "APIs und Integrationen",
          to: "Alle, die dieselben Daten zweimal eintippen",
          body: [
            "Wir entwerfen APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
            "Wir sehen immer wieder dasselbe: Jemand tippt Bestellungen von der Website von Hand in die Buchhaltung ab, Zahlungen werden in einer Tabelle abgeglichen. Eine Integration übernimmt diese Arbeit, samt den Fehlern, die dabei entstehen. Das Monitoring richten wir eigens ein. Integrationen brechen leise – ein Partner ändert seine API, und schon ist es passiert –, also soll das System es als Erstes merken, nicht Ihr Kunde."
          ],
          list: [
            "API-Entwurf und Dokumentation",
            "Zahlungsanbieter, Versanddienste, CRM, Buchhaltung",
            "Datenaustausch zwischen internen Systemen",
            "Warteschlangen und Wiederholungen bei Störungen",
            "Monitoring und Benachrichtigungen"
          ],
          result: "Daten werden einmal erfasst und finden dann selbst ihren Weg dorthin, wo sie gebraucht werden."
        },
        {
          title: "Technischer Support",
          to: "Betreiber von Systemen, auch solchen, die wir nicht gebaut haben",
          body: [
            "Wir betreuen Ihre IT-Systeme und entwickeln sie weiter, auch wenn jemand anderes sie geschrieben hat.",
            "Fehlerbehebung ist der kleinere Teil des Supports. Dazu gehören auch Updates, die Sicherheitslücken schließen, ein Monitoring, das ein Problem vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei. Stammt das System von einem anderen Dienstleister, beginnen wir mit einem Audit und schreiben die Dokumentation. Ohne sie wird jede Änderung zum Lotteriespiel."
          ],
          list: [
            "Überwachung von Verfügbarkeit und Fehlern",
            "Fehlerbehebungen und Sicherheitsupdates",
            "Datensicherung samt Prüfung, dass sich daraus wiederherstellen lässt",
            "geplante Verbesserungen und neue Funktionen",
            "Audit und Dokumentation fremder Systeme"
          ],
          result: "Das System läuft, und es gibt ein Team, das weiß, wie es aufgebaut ist."
        }
      ]
    },
    fr: {
      kind: "NOTE DE SERVICE",
      to: "À :", from: "De :", subj: "Objet :",
      list: "Ce que nous ferons :", result: "Résultat :",
      note: {
        title: "À lire en premier",
        to: "À toute personne qui a ouvert ce dossier",
        subj: "Notre façon d’aborder une mission",
        body: [
          "Ce dossier contient dix notes, une par domaine d’activité. L’essentiel d’abord : nous ne sommes attachés à aucun langage de programmation ni à aucune plateforme. Nous comprenons d’abord le problème, puis nous choisissons les outils.",
          "Parfois, la réponse honnête est un service prêt à l’emploi sur abonnement plutôt qu’un développement. Dans ce cas, c’est exactement ce que nous vous écrirons."
        ]
      },
      items: [
        {
          title: "Conception de solutions informatiques",
          to: "Au dirigeant qui envisage un nouveau système",
          body: [
            "Avant de développer quoi que ce soit, il faut s’entendre sur le problème que le système doit résoudre. Cela paraît évident. Pourtant, l’erreur la plus coûteuse d’un projet se commet généralement ici, avant la première ligne de code : on construit le système pour un problème que personne n’a vraiment formulé.",
            "Nous demandons donc du temps non seulement à vous, mais aussi à ceux qui utiliseront le système : comptabilité, entrepôt, commerciaux. Il en sort des exigences que le métier et les développeurs lisent de la même façon. Et parfois, la conclusion est qu’il n’y a rien à développer : prenez un produit existant et paramétrez-le. Pour nous, c’est un résultat tout à fait valable."
          ],
          list: [
            "échanger avec les équipes et passer en revue le fonctionnement actuel des processus",
            "consigner les exigences métier et les scénarios d’utilisation",
            "comparer les produits du marché avec un développement sur mesure",
            "rédiger un cahier des charges avec délais et budget par phase"
          ],
          result: "Un document à partir duquel n’importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et le lancer."
        },
        {
          title: "Développement SaaS",
          to: "À ceux qui veulent vendre leur service par abonnement",
          body: [
            "Nous accompagnons une plateforme SaaS depuis la première version pour les clients pilotes jusqu’au service où chaque client dispose de son espace, de son forfait et de son tableau de bord.",
            "En SaaS, ce n’est pas le code qui rapporte. Ce qui rapporte, c’est la facilité avec laquelle un nouveau client s’inscrit, paie et se lance sans jamais appeler le support. L’architecture multi-locataire, la facturation et les droits d’accès sont prévus dès le premier jour, car les ajouter une fois les clients installés coûte plusieurs fois plus cher. Nous essayons de livrer la première version tôt : les vrais utilisateurs montrent vite quelles fonctions étaient superflues."
          ],
          list: [
            "architecture multi-locataire, données de chaque client isolées",
            "inscription, forfaits, abonnements, paiement en ligne",
            "espaces clients, rôles et droits",
            "intégrations et API publique pour vos clients",
            "montée en charge quand le trafic augmente"
          ],
          result: "Un produit qui se vend par abonnement, et non un projet qu’il faut déployer à la main à chaque fois."
        },
        {
          title: "Développement web",
          to: "À ceux dont le site doit apporter des demandes",
          body: [
            "Sites d’entreprise, places de marché, boutiques en ligne, systèmes de réservation, outils web internes. Nous partons du besoin, pas d’un modèle.",
            "Un site d’entreprise se juge aux demandes et aux commandes, pas à son allure dans un portfolio. Avant de commencer, nous convenons donc de ce qui comptera comme résultat, et la mesure d’audience est en place avant la mise en ligne. Pas six mois plus tard. La technologie est à la taille du besoin : une page d’atterrissage n’a que faire d’une plateforme lourde, et une place de marché ne tiendra pas dans un constructeur de sites."
          ],
          list: [
            "prototype et conception des interfaces",
            "frontend, backend, interface d’administration",
            "raccordement au paiement, à la livraison, au CRM et à la comptabilité",
            "bases du référencement, vitesse de chargement, mesure d’audience",
            "mise en ligne et maintenance"
          ],
          result: "Vous voyez combien de demandes et de chiffre d’affaires le site apporte."
        },
        {
          title: "Applications mobiles",
          to: "À ceux qui pensent à leur propre application",
          body: [
            "Nous développons des applications iOS et Android, ainsi que la partie serveur et l’interface d’administration qui vont avec.",
            "D’abord, nous vérifions si vous en avez vraiment besoin. Une application se justifie quand le client y revient régulièrement : il recommande, suit une livraison, cumule des points. S’il l’ouvre une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant le début des travaux, pas après. Natif ou multiplateforme ? Nous tranchons selon le budget et selon ce que l’application doit tirer de l’appareil photo, de la géolocalisation et du mode hors ligne."
          ],
          list: [
            "applications iOS et Android",
            "partie serveur et API",
            "interface d’administration : contenus, commandes, utilisateurs",
            "notifications push et statistiques",
            "publication sur l’App Store et Google Play"
          ],
          result: "L’application passe la validation des stores, et votre équipe la gère sans développeur."
        },
        {
          title: "Solutions d’intelligence artificielle",
          to: "À ceux qui veulent « ajouter un réseau de neurones »",
          body: [
            "Nous automatisons les processus métier avec des agents d’IA : ils exécutent eux-mêmes une partie des étapes routinières, et une personne vérifie. L’intelligence artificielle et l’apprentissage automatique vont là où ils font gagner du temps aux équipes ou de l’argent à l’entreprise. Là où ils n’en font pas gagner, nous ne les mettons pas.",
            "Nous sommes plus sceptiques que beaucoup à l’égard de l’IA. Une bonne moitié des idées du type « ajoutons un réseau de neurones » se règlent par une automatisation ordinaire. C’est autre chose quand des personnes passent des heures à trier des e-mails, des documents et des demandes : là, les modèles de langage enlèvent vraiment la routine. Nous commençons par un pilote sur vos données, pour que les chiffres de précision soient sur la table avant le développement principal."
          ],
          list: [
            "agents d’IA pour les étapes routinières : trier une demande, saisir les données dans le CRM, préparer une réponse au client",
            "chatbots et assistants pour les clients et les équipes",
            "reconnaissance de documents et extraction de données",
            "tri des demandes, recherche dans la base de connaissances",
            "prévisions de la demande, analyse de données",
            "pilote avec mesure de la qualité sur vos données"
          ],
          result: "Un travail précis, fait jusque-là par des personnes, est désormais fait par le système, sous contrôle humain."
        },
        {
          title: "Développement CRM et ERP",
          to: "Au dirigeant dont la moitié de la gestion vit dans des tableurs",
          body: [
            "Nous construisons CRM et ERP autour de votre façon réelle de travailler. Pas l’inverse.",
            "Un CRM standard convient tant que votre processus ressemble au standard. Quand les commerciaux gèrent la moitié de leurs affaires dans des tableurs parce que le système « ne sait pas faire », un système à vous revient moins cher. Nous reprenons nous-mêmes les données des anciens systèmes et des tableurs, et le déploiement se fait service par service, pour que le travail ne s’arrête pas un seul jour."
          ],
          list: [
            "modules ventes, stocks, production, finances : ceux dont vous avez besoin",
            "rôles, droits d’accès, journal des actions",
            "rapports et tableaux de bord pour la direction",
            "reprise des données des tableurs et des anciens systèmes",
            "liaison avec la comptabilité, la téléphonie et la messagerie"
          ],
          result: "Un seul système au lieu d’une ménagerie de tableurs. La direction voit où en sont les choses sans collecter chaque semaine les rapports de chaque service."
        },
        {
          title: "Solutions cloud",
          to: "À ceux qui envisagent de passer au cloud",
          body: [
            "Nous migrons l’infrastructure vers Amazon Web Services, en totalité ou en partie, puis nous veillons à ce qu’elle fonctionne et ne coûte pas plus cher sans raison.",
            "Disons-le tout de suite : le cloud n’est pas toujours moins cher qu’un serveur à vous. Il est rentable quand la charge varie fortement, quand il faut de la tolérance aux pannes, ou quand un nouvel environnement doit être prêt en quelques minutes plutôt qu’en une semaine. C’est pourquoi une migration commence par un audit et une estimation des coûts. Nous migrons par étapes, avec un plan de retour arrière à chacune."
          ],
          list: [
            "audit de l’infrastructure actuelle, estimation des coûts",
            "architecture AWS, plan de migration",
            "transfert des serveurs, bases de données et fichiers",
            "sauvegardes et supervision",
            "réduction des coûts après la migration"
          ],
          result: "Une infrastructure qui survit à la panne d’un serveur, et une facture cloud que vous comprenez."
        },
        {
          title: "Infrastructure d’entreprise sous Red Hat",
          to: "À ceux dont les serveurs ne tiennent qu’à la mémoire d’un seul administrateur",
          body: [
            "Nous construisons l’infrastructure de l’entreprise sous Red Hat : serveurs sous Red Hat Enterprise Linux, conteneurs sur OpenShift, configuration et déploiement avec Ansible.",
            "On choisit Red Hat quand l’infrastructure doit tourner des années et passer des audits. L’abonnement a un coût, qu’il rembourse par le support de l’éditeur et un long cycle de vie : Red Hat Enterprise Linux est maintenu dix ans. Nous concevons l’infrastructure selon vos charges et décrivons la configuration de chaque serveur dans Ansible : si une machine tombe, on la reconstruit à partir d’un playbook, et personne n’a à se souvenir de ce qui avait été modifié à la main. Red Hat est notre partenaire, nous vous aidons donc aussi pour les abonnements et le support de l’éditeur."
          ],
          list: [
            "audit des serveurs actuels et plan de migration",
            "Red Hat Enterprise Linux, mises à jour centralisées via Red Hat Satellite",
            "OpenShift pour vos applications",
            "configuration et déploiement avec Ansible",
            "comptes et accès au même endroit (Identity Management)",
            "supervision, sauvegardes, documentation pour votre équipe"
          ],
          result: "Une infrastructure qu’on peut auditer, reproduire et confier à une autre équipe, sans que le savoir parte avec les personnes."
        },
        {
          title: "API et intégrations",
          to: "À ceux qui saisissent deux fois les mêmes données",
          body: [
            "Nous concevons des API pour vos systèmes et les relions aux services que vous utilisez déjà.",
            "Nous voyons sans cesse la même chose : quelqu’un ressaisit à la main les commandes du site dans la comptabilité, les paiements sont rapprochés dans un tableur. Une intégration reprend ce travail, et les erreurs qui vont avec. La supervision est mise en place à part. Les intégrations cassent sans bruit (un partenaire modifie son API, et voilà), alors autant que le système l’apprenne le premier, pas votre client."
          ],
          list: [
            "conception et documentation d’API",
            "prestataires de paiement, transporteurs, CRM, comptabilité",
            "échange de données entre systèmes internes",
            "files d’attente et nouvelles tentatives en cas d’échec",
            "supervision et alertes"
          ],
          result: "Les données sont saisies une fois et trouvent seules le chemin vers là où on en a besoin."
        },
        {
          title: "Support technique",
          to: "Aux propriétaires de systèmes, y compris ceux que nous n’avons pas construits",
          body: [
            "Nous maintenons vos systèmes informatiques et les faisons évoluer, même si d’autres les ont écrits.",
            "Corriger les bugs n’est que la plus petite partie du support. Il y a aussi les mises à jour qui comblent les failles, la supervision qui repère un problème avant les utilisateurs, et les petites améliorations au fil de l’eau. Si le système vient d’un autre prestataire, nous commençons par un audit et rédigeons la documentation. Sans elle, chaque modification est une loterie."
          ],
          list: [
            "surveillance de la disponibilité et des erreurs",
            "correctifs et mises à jour de sécurité",
            "sauvegardes, avec vérification qu’on peut vraiment restaurer",
            "améliorations planifiées et nouvelles fonctions",
            "audit et documentation de systèmes tiers"
          ],
          result: "Le système fonctionne, et une équipe sait comment il est construit."
        }
      ]
    },
    es: {
      kind: "NOTA INTERNA",
      to: "Para:", from: "De:", subj: "Asunto:",
      list: "Qué haremos:", result: "Resultado:",
      note: {
        title: "Léame primero",
        to: "A quien haya abierto esta carpeta",
        subj: "Cómo abordamos un encargo",
        body: [
          "En esta carpeta hay diez notas, una por cada línea de trabajo. Lo principal, por delante: no nos atamos a un lenguaje de programación ni a una plataforma. Primero entendemos el problema y después elegimos las herramientas.",
          "A veces la respuesta honesta es un servicio de suscripción ya existente y no un desarrollo. En ese caso, eso es justo lo que le escribiremos."
        ]
      },
      items: [
        {
          title: "Concepto de la solución de TI",
          to: "Al directivo que ha ideado un sistema nuevo",
          body: [
            "Antes de desarrollar nada, hay que ponerse de acuerdo en qué problema resuelve el sistema. Parece obvio. Sin embargo, el error más caro de un proyecto suele cometerse justo aquí, antes de la primera línea de código: se construye el sistema para un problema que nadie ha formulado bien.",
            "Por eso pedimos tiempo no solo a usted, sino también a quienes van a usar el sistema: contabilidad, almacén, comerciales. De ahí salen unos requisitos que el negocio y los desarrolladores entienden igual. Y a veces la conclusión es que no hay nada que desarrollar: tome un producto existente y configúrelo. Para nosotros es un resultado perfectamente válido."
          ],
          list: [
            "hablar con el personal y repasar cómo funcionan hoy los procesos",
            "poner por escrito los requisitos de negocio y los escenarios de uso",
            "comparar productos del mercado con un desarrollo a medida",
            "redactar un pliego de especificaciones con plazos y presupuesto por fases"
          ],
          result: "Un documento con el que cualquier equipo, el nuestro u otro, puede presupuestar el trabajo y empezarlo."
        },
        {
          title: "Desarrollo SaaS",
          to: "A quien quiera vender su servicio por suscripción",
          body: [
            "Llevamos una plataforma SaaS desde la primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, su plan y su panel.",
            "En SaaS, el dinero no lo gana el código. Lo gana la facilidad con la que un cliente nuevo se registra, paga y empieza a trabajar sin llamar nunca a soporte. La arquitectura multiinquilino, la facturación y los permisos se incorporan desde el primer día, porque añadirlos cuando ya hay clientes dentro cuesta varias veces más. Intentamos lanzar pronto la primera versión: los usuarios reales enseguida muestran qué funciones sobraban."
          ],
          list: [
            "arquitectura multiinquilino, con los datos de cada cliente aislados",
            "registro, planes, suscripciones, pago en línea",
            "paneles de cliente, roles y permisos",
            "integraciones y una API pública para sus clientes",
            "escalado a medida que crece la carga"
          ],
          result: "Un producto que se vende por suscripción, no un proyecto que hay que implantar a mano cada vez."
        },
        {
          title: "Desarrollo web",
          to: "A quien necesite que su web traiga clientes",
          body: [
            "Webs corporativas, marketplaces, tiendas en línea, sistemas de reservas, herramientas web internas. Partimos de la tarea, no de una plantilla.",
            "Una web de empresa se demuestra con solicitudes y pedidos, no con lo bien que queda en un portafolio. Por eso, antes de empezar acordamos qué contará como resultado, y la analítica se instala antes del lanzamiento. No seis meses después. La tecnología se ajusta al tamaño del trabajo: una landing page no necesita una plataforma pesada, y un marketplace no cabe en un creador de webs."
          ],
          list: [
            "prototipo y diseño de interfaces",
            "frontend, backend, panel de administración",
            "conexión con pagos, envíos, CRM y contabilidad",
            "base SEO, velocidad de carga, analítica",
            "lanzamiento y mantenimiento"
          ],
          result: "Usted ve cuántas solicitudes y cuánto dinero aporta la web."
        },
        {
          title: "Aplicaciones móviles",
          to: "A quien esté pensando en una aplicación propia",
          body: [
            "Desarrollamos aplicaciones para iOS y Android, además de la parte de servidor y el panel de administración que hay detrás.",
            "Primero comprobamos si de verdad la necesita. Una aplicación se justifica cuando el cliente vuelve a ella con regularidad: repite pedidos, sigue un envío, acumula puntos. Si alguien la abre una vez al año, le saldrá más barata una buena web móvil, y se lo diremos antes de empezar, no después. ¿Nativa o multiplataforma? Lo decidimos según el presupuesto y según cuánto necesite la aplicación de la cámara, la geolocalización y el modo sin conexión."
          ],
          list: [
            "aplicaciones para iOS y Android",
            "parte de servidor y API",
            "panel de administración: contenidos, pedidos, usuarios",
            "notificaciones push y analítica",
            "publicación en App Store y Google Play"
          ],
          result: "La aplicación supera la revisión de las tiendas y su equipo la gestiona sin desarrolladores."
        },
        {
          title: "Soluciones con inteligencia artificial",
          to: "A quien quiera «añadir una red neuronal»",
          body: [
            "Automatizamos procesos de negocio con agentes de IA: parte de los pasos rutinarios los hacen ellos solos y una persona revisa el resultado. Ponemos inteligencia artificial y aprendizaje automático donde ahorran tiempo al personal o dinero a la empresa. Donde no ahorran, no los ponemos.",
            "Somos más escépticos con la IA que muchos. Una buena mitad de las ideas del tipo «añadamos una red neuronal» se resuelve con automatización corriente. Otra cosa es cuando hay personas que pasan horas clasificando correos, documentos y solicitudes: ahí los modelos de lenguaje sí quitan rutina. Empezamos con un piloto sobre sus datos, para que las cifras de precisión estén sobre la mesa antes del desarrollo principal."
          ],
          list: [
            "agentes de IA para los pasos rutinarios del proceso: clasificar una solicitud, introducir datos en el CRM, preparar la respuesta al cliente",
            "chatbots y asistentes para clientes y empleados",
            "reconocimiento de documentos y extracción de datos",
            "clasificación de solicitudes, búsqueda en la base de conocimiento",
            "previsión de la demanda, análisis de datos",
            "piloto con medición de calidad sobre sus datos"
          ],
          result: "Un trabajo concreto que hacían personas lo hace ahora el sistema, con una persona supervisándolo."
        },
        {
          title: "Desarrollo de CRM y ERP",
          to: "Al directivo que lleva media gestión en hojas de cálculo",
          body: [
            "Hacemos CRM y ERP a la medida de cómo se trabaja realmente en su empresa. No al revés.",
            "Un CRM estándar está bien mientras su proceso se parezca al estándar. Cuando los comerciales llevan la mitad de sus asuntos en hojas de cálculo porque el sistema «no sabe hacerlo», uno propio sale más barato. Migramos nosotros mismos los datos de los sistemas antiguos y de las hojas de cálculo, y lo implantamos departamento por departamento para que el trabajo no se pare ni un día."
          ],
          list: [
            "módulos de ventas, almacén, producción y finanzas, los que necesite",
            "roles, permisos de acceso, registro de acciones",
            "informes y paneles para la dirección",
            "migración de datos desde hojas de cálculo y sistemas antiguos",
            "conexión con contabilidad, telefonía y correo"
          ],
          result: "Un solo sistema en lugar de un zoológico de hojas de cálculo. La dirección ve cómo van las cosas sin recopilar cada semana informes de todos los departamentos."
        },
        {
          title: "Soluciones en la nube",
          to: "A quien esté valorando pasarse a la nube",
          body: [
            "Trasladamos la infraestructura a Amazon Web Services, entera o por partes, y después vigilamos que funcione y no se encarezca sin motivo.",
            "Avisamos desde el principio: la nube no siempre es más barata que un servidor propio. Compensa cuando la carga varía mucho, cuando se necesita tolerancia a fallos o cuando un entorno nuevo tiene que estar listo en minutos y no en una semana. Por eso la migración empieza con una auditoría y un cálculo de costes. Migramos por etapas, con un plan de vuelta atrás en cada paso."
          ],
          list: [
            "auditoría de la infraestructura actual, cálculo de costes",
            "arquitectura en AWS, plan de migración",
            "traslado de servidores, bases de datos y archivos",
            "copias de seguridad y monitorización",
            "reducción de costes tras la migración"
          ],
          result: "Una infraestructura que sobrevive a la caída de un servidor y una factura de la nube que usted entiende."
        },
        {
          title: "Infraestructura empresarial con Red Hat",
          to: "A quien tenga los servidores solo en la memoria de un administrador",
          body: [
            "Construimos la infraestructura de la empresa con Red Hat: servidores con Red Hat Enterprise Linux, contenedores en OpenShift, configuración y despliegue con Ansible.",
            "Red Hat es la elección cuando la infraestructura tiene que funcionar durante años y pasar auditorías. La suscripción cuesta dinero y lo recupera con el soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene soporte durante diez años. Diseñamos la infraestructura según sus cargas y describimos la configuración de cada servidor en Ansible: si una máquina cae, se reconstruye a partir de un playbook y nadie tiene que recordar qué se cambió a mano en su día. Red Hat es nuestro socio, así que también le ayudamos con las suscripciones y el soporte del fabricante."
          ],
          list: [
            "auditoría de los servidores actuales y plan de migración",
            "Red Hat Enterprise Linux, con actualizaciones centralizadas mediante Red Hat Satellite",
            "OpenShift para sus aplicaciones",
            "configuración y despliegue con Ansible",
            "cuentas y accesos en un solo lugar (Identity Management)",
            "monitorización, copias de seguridad, documentación para su equipo"
          ],
          result: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin que el conocimiento se marche con las personas."
        },
        {
          title: "API e integraciones",
          to: "A quien teclea los mismos datos dos veces",
          body: [
            "Diseñamos API para sus sistemas y los conectamos con los servicios que ya utiliza.",
            "Vemos lo mismo una y otra vez: alguien vuelve a teclear a mano en la contabilidad los pedidos de la web, los pagos se cuadran en una hoja de cálculo. Una integración se queda con ese trabajo, y con los errores que provoca. La monitorización se configura aparte. Las integraciones se rompen en silencio (un socio cambia su API y se acabó), así que mejor que el primero en enterarse sea el sistema y no su cliente."
          ],
          list: [
            "diseño y documentación de API",
            "pasarelas de pago, empresas de mensajería, CRM, contabilidad",
            "intercambio de datos entre sistemas internos",
            "colas y reintentos cuando algo falla",
            "monitorización y alertas"
          ],
          result: "Los datos se introducen una vez y llegan solos adonde hacen falta."
        },
        {
          title: "Soporte técnico",
          to: "A los propietarios de sistemas, también de los que no hicimos nosotros",
          body: [
            "Mantenemos sus sistemas informáticos y seguimos desarrollándolos, aunque los haya escrito otro.",
            "Corregir errores es la parte menor del soporte. También incluye actualizaciones que cierran vulnerabilidades, una monitorización que detecta el problema antes que los usuarios y pequeñas mejoras sobre la marcha. Si el sistema viene de otro proveedor, empezamos con una auditoría y escribimos la documentación. Sin ella, cada cambio es una lotería."
          ],
          list: [
            "monitorización de disponibilidad y errores",
            "correcciones y actualizaciones de seguridad",
            "copias de seguridad y comprobación de que se puede restaurar a partir de ellas",
            "mejoras planificadas y funciones nuevas",
            "auditoría y documentación de sistemas ajenos"
          ],
          result: "El sistema funciona y hay un equipo que sabe cómo está hecho."
        }
      ]
    },
    pt: {
      kind: "NOTA INTERNA",
      to: "Para:", from: "De:", subj: "Assunto:",
      list: "O que faremos:", result: "Resultado:",
      note: {
        title: "Leia primeiro",
        to: "A quem abriu esta pasta",
        subj: "Como abordamos cada trabalho",
        body: [
          "Nesta pasta há dez notas, uma por cada área de trabalho. Antes de mais, o essencial: não nos prendemos a uma linguagem de programação nem a uma plataforma. Percebemos o problema e só depois escolhemos as ferramentas.",
          "Por vezes, a resposta honesta é um serviço por subscrição já existente, e não um desenvolvimento. Nesse caso, é isso mesmo que lhe escreveremos."
        ]
      },
      items: [
        {
          title: "Conceção de soluções de TI",
          to: "Ao gestor que idealizou um novo sistema",
          body: [
            "Antes de desenvolver seja o que for, é preciso acordar que problema o sistema resolve. Parece óbvio. No entanto, o erro mais caro de um projeto costuma ser cometido precisamente aqui, antes da primeira linha de código: constrói-se o sistema para um problema que ninguém formulou como deve ser.",
            "Por isso pedimos tempo não só a si, mas também a quem vai usar o sistema: contabilidade, armazém, comerciais. Daí saem requisitos que o negócio e os programadores leem da mesma forma. E, por vezes, a conclusão é que não há nada a desenvolver: escolha um produto existente e configure-o. Para nós, é um resultado perfeitamente válido."
          ],
          list: [
            "falar com os colaboradores e rever como os processos funcionam hoje",
            "registar os requisitos de negócio e os cenários de utilização",
            "comparar produtos do mercado com desenvolvimento por medida",
            "elaborar um caderno de encargos com prazos e orçamento por fase"
          ],
          result: "Um documento com base no qual qualquer equipa, a nossa ou outra, pode orçamentar o trabalho e começá-lo."
        },
        {
          title: "Desenvolvimento SaaS",
          to: "A quem quer vender o seu serviço por subscrição",
          body: [
            "Acompanhamos uma plataforma SaaS desde a primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu espaço, o seu plano e o seu painel.",
            "Em SaaS, não é o código que ganha dinheiro. Ganha-o a facilidade com que um cliente novo se regista, paga e começa a trabalhar sem nunca ligar para o suporte. A arquitetura multi-inquilino, a faturação e as permissões entram logo no primeiro dia, porque acrescentá-las com os clientes já lá dentro custa várias vezes mais. Procuramos lançar cedo a primeira versão: os utilizadores reais depressa mostram que funcionalidades estavam a mais."
          ],
          list: [
            "arquitetura multi-inquilino, com os dados de cada cliente isolados",
            "registo, planos, subscrições, pagamento online",
            "áreas de cliente, perfis e permissões",
            "integrações e uma API pública para os seus clientes",
            "escalabilidade à medida que a carga cresce"
          ],
          result: "Um produto que se vende por subscrição, e não um projeto que tem de ser implementado à mão de cada vez."
        },
        {
          title: "Desenvolvimento web",
          to: "A quem precisa que o site traga contactos",
          body: [
            "Sites institucionais, marketplaces, lojas online, sistemas de reservas, ferramentas web internas. Partimos da tarefa, não de um modelo.",
            "Um site empresarial prova o seu valor em pedidos e encomendas, não no aspeto que tem num portefólio. Por isso, antes de começar, acordamos o que conta como resultado, e a análise de tráfego fica instalada antes do lançamento. Não seis meses depois. A tecnologia ajusta-se à dimensão da tarefa: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites."
          ],
          list: [
            "protótipo e design de interfaces",
            "frontend, backend, painel de administração",
            "ligação a pagamentos, entregas, CRM e contabilidade",
            "base de SEO, velocidade de carregamento, análise de tráfego",
            "lançamento e acompanhamento"
          ],
          result: "Vê quantos pedidos e quanto dinheiro o site traz."
        },
        {
          title: "Aplicações móveis",
          to: "A quem está a pensar numa aplicação própria",
          body: [
            "Desenvolvemos aplicações para iOS e Android e também a parte de servidor e o painel de administração por trás delas.",
            "Primeiro, verificamos se precisa mesmo de uma. Uma aplicação justifica-se quando o cliente volta a ela com regularidade: encomenda de novo, acompanha uma entrega, junta pontos. Se a pessoa a abre uma vez por ano, um bom site móvel sai mais barato, e dizemos-lho antes de começar o trabalho, não depois. Nativa ou multiplataforma: decidimos em função do orçamento e do que a aplicação precisa da câmara, da localização e do modo offline."
          ],
          list: [
            "aplicações para iOS e Android",
            "parte de servidor e API",
            "painel de administração: conteúdos, encomendas, utilizadores",
            "notificações push e análise",
            "publicação na App Store e no Google Play"
          ],
          result: "A aplicação passa a revisão das lojas, e a sua equipa gere-a sem programadores."
        },
        {
          title: "Soluções com inteligência artificial",
          to: "A quem quer «acrescentar uma rede neuronal»",
          body: [
            "Automatizamos processos de negócio com agentes de IA: uma parte dos passos rotineiros é feita por eles, e uma pessoa verifica. Pomos inteligência artificial e aprendizagem automática onde poupam tempo aos colaboradores ou dinheiro à empresa. Onde não poupam, não os pomos.",
            "Somos mais céticos em relação à IA do que muitos. Boa metade das ideias do género «vamos acrescentar uma rede neuronal» resolve-se com automação comum. Outra coisa é quando há pessoas que passam horas a triar e-mails, documentos e pedidos: aí, os modelos de linguagem tiram mesmo a rotina. Começamos com um piloto sobre os seus dados, para que os números de precisão estejam em cima da mesa antes do desenvolvimento principal."
          ],
          list: [
            "agentes de IA para passos rotineiros do processo: triar um pedido, registar os dados no CRM, preparar a resposta ao cliente",
            "chatbots e assistentes para clientes e colaboradores",
            "reconhecimento de documentos e extração de dados",
            "triagem de pedidos, pesquisa na base de conhecimento",
            "previsões de procura, análise de dados",
            "piloto com avaliação da qualidade sobre os seus dados"
          ],
          result: "Um trabalho concreto que era feito por pessoas passa a ser feito pelo sistema, com uma pessoa a controlá-lo."
        },
        {
          title: "Desenvolvimento de CRM e ERP",
          to: "Ao gestor que tem metade da gestão em folhas de cálculo",
          body: [
            "Fazemos CRM e ERP à medida da forma como se trabalha na sua empresa. Não o contrário.",
            "Um CRM de prateleira serve enquanto o seu processo se parecer com o padrão. Quando os comerciais gerem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», um sistema próprio fica mais barato. Somos nós que migramos os dados dos sistemas antigos e das folhas de cálculo, e a implementação faz-se departamento a departamento, para que o trabalho não pare nem um dia."
          ],
          list: [
            "módulos de vendas, armazém, produção e finanças, os que forem precisos",
            "perfis, permissões de acesso, registo de ações",
            "relatórios e painéis para a gestão",
            "migração de dados de folhas de cálculo e sistemas antigos",
            "ligação à contabilidade, telefonia e e-mail"
          ],
          result: "Um único sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê como estão as coisas sem recolher relatórios semanais de cada departamento."
        },
        {
          title: "Soluções na cloud",
          to: "A quem está a ponderar mudar-se para a cloud",
          body: [
            "Migramos a infraestrutura para a Amazon Web Services, total ou parcialmente, e depois vigiamos para que funcione e não fique mais cara sem razão.",
            "Avisamos desde já: a cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila muito, quando é preciso tolerância a falhas ou quando um novo ambiente tem de estar pronto em minutos e não numa semana. Por isso, a migração começa com uma auditoria e um cálculo de custos. Migramos por etapas, com um plano de reversão em cada passo."
          ],
          list: [
            "auditoria da infraestrutura atual, cálculo de custos",
            "arquitetura na AWS, plano de migração",
            "migração de servidores, bases de dados e ficheiros",
            "cópias de segurança e monitorização",
            "redução de custos depois da migração"
          ],
          result: "Uma infraestrutura que sobrevive à falha de um servidor, e uma fatura da cloud que percebe."
        },
        {
          title: "Infraestrutura empresarial em Red Hat",
          to: "A quem tem os servidores apenas na memória de um administrador",
          body: [
            "Construímos a infraestrutura da empresa em Red Hat: servidores com Red Hat Enterprise Linux, contentores no OpenShift, configuração e implementação com Ansible.",
            "Escolhe-se Red Hat quando a infraestrutura tem de funcionar durante anos e passar auditorias. A subscrição custa dinheiro e paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos. Projetamos a infraestrutura para as suas cargas e descrevemos a configuração de cada servidor em Ansible: se uma máquina for abaixo, é reconstruída a partir de um playbook, e ninguém tem de se lembrar do que alguma vez foi alterado à mão. A Red Hat é nossa parceira, por isso também ajudamos com as subscrições e o suporte do fabricante."
          ],
          list: [
            "auditoria dos servidores atuais e plano de migração",
            "Red Hat Enterprise Linux, com atualizações centralizadas através do Red Hat Satellite",
            "OpenShift para as suas aplicações",
            "configuração e implementação com Ansible",
            "contas e acessos num só lugar (Identity Management)",
            "monitorização, cópias de segurança, documentação para a sua equipa"
          ],
          result: "Uma infraestrutura que se pode auditar, reproduzir e entregar a outra equipa, sem que o conhecimento saia porta fora com as pessoas."
        },
        {
          title: "APIs e integrações",
          to: "A quem introduz os mesmos dados duas vezes",
          body: [
            "Concebemos APIs para os seus sistemas e ligamo-los aos serviços que já utiliza.",
            "Vemos sempre o mesmo: alguém volta a introduzir à mão na contabilidade as encomendas do site, os pagamentos são conferidos numa folha de cálculo. Uma integração fica com esse trabalho, e com os erros que ele gera. A monitorização é configurada à parte. As integrações avariam em silêncio (um parceiro muda a sua API e pronto), por isso é melhor que o primeiro a saber seja o sistema, e não o seu cliente."
          ],
          list: [
            "conceção e documentação de APIs",
            "sistemas de pagamento, transportadoras, CRM, contabilidade",
            "troca de dados entre sistemas internos",
            "filas e novas tentativas em caso de falha",
            "monitorização e alertas"
          ],
          result: "Os dados são introduzidos uma vez e chegam sozinhos aonde são precisos."
        },
        {
          title: "Suporte técnico",
          to: "Aos donos de sistemas, incluindo os que não fomos nós a fazer",
          body: [
            "Damos suporte aos seus sistemas de TI e continuamos a desenvolvê-los, mesmo que tenham sido escritos por outros.",
            "Corrigir erros é a parte mais pequena do suporte. Também contam as atualizações que fecham vulnerabilidades, a monitorização que deteta um problema antes dos utilizadores e as pequenas melhorias pelo caminho. Se o sistema veio de outro fornecedor, começamos por uma auditoria e escrevemos a documentação. Sem ela, cada alteração é uma lotaria."
          ],
          list: [
            "monitorização da disponibilidade e dos erros",
            "correções e atualizações de segurança",
            "cópias de segurança, e verificação de que é possível restaurar a partir delas",
            "melhorias planeadas e novas funcionalidades",
            "auditoria e documentação de sistemas alheios"
          ],
          result: "O sistema funciona, e há uma equipa que sabe como está construído."
        }
      ]
    },
    it: {
      kind: "COMUNICAZIONE INTERNA",
      to: "A:", from: "Da:", subj: "Oggetto:",
      list: "Cosa faremo:", result: "Risultato:",
      note: {
        title: "Da leggere subito",
        to: "A chi ha aperto questa cartella",
        subj: "Come affrontiamo un incarico",
        body: [
          "In questa cartella ci sono dieci comunicazioni, una per ogni area di lavoro. Anzitutto l’essenziale: non siamo legati a un linguaggio di programmazione o a una piattaforma. Prima capiamo il problema, poi scegliamo gli strumenti.",
          "A volte la risposta onesta è un servizio in abbonamento già pronto, non uno sviluppo. In quel caso Le scriveremo proprio questo."
        ]
      },
      items: [
        {
          title: "Ideazione della soluzione IT",
          to: "Al responsabile che ha in mente un nuovo sistema",
          body: [
            "Prima di sviluppare qualsiasi cosa, bisogna mettersi d’accordo su quale problema il sistema deve risolvere. Sembra ovvio. Eppure l’errore più costoso di un progetto si commette di solito proprio qui, prima della prima riga di codice: il sistema viene costruito per un problema che nessuno ha formulato davvero.",
            "Per questo chiediamo tempo non solo a Lei, ma anche a chi userà il sistema: contabilità, magazzino, commerciali. Ne escono requisiti che azienda e sviluppatori leggono allo stesso modo. E a volte la conclusione è che non c’è niente da sviluppare: prenda un prodotto esistente e lo configuri. Per noi è un risultato a tutti gli effetti."
          ],
          list: [
            "parlare con il personale e ripercorrere come funzionano oggi i processi",
            "mettere per iscritto requisiti di business e scenari d’uso",
            "confrontare prodotti pronti e sviluppo su misura",
            "redigere un capitolato con tempi e budget per fase"
          ],
          result: "Un documento su cui qualsiasi team, il nostro o un altro, può stimare il lavoro e avviarlo."
        },
        {
          title: "Sviluppo SaaS",
          to: "A chi vuole vendere il proprio servizio in abbonamento",
          body: [
            "Seguiamo una piattaforma SaaS dalla prima versione per i clienti pilota fino al servizio in cui ogni cliente ha il proprio spazio, il proprio piano e la propria dashboard.",
            "Nel SaaS non è il codice a fare soldi. Li fa la facilità con cui un nuovo cliente si registra, paga e comincia a lavorare senza mai chiamare l’assistenza. Multi-tenancy, fatturazione e permessi li prevediamo dal primo giorno, perché aggiungerli quando i clienti sono già dentro costa molte volte di più. Cerchiamo di rilasciare presto la prima versione: gli utenti veri mostrano in fretta quali funzioni erano superflue."
          ],
          list: [
            "architettura multi-tenant, con i dati di ogni cliente isolati",
            "registrazione, piani, abbonamenti, pagamento online",
            "aree clienti, ruoli e permessi",
            "integrazioni e un’API pubblica per i Suoi clienti",
            "scalabilità quando cresce il carico"
          ],
          result: "Un prodotto che si vende in abbonamento, non un progetto da installare a mano ogni volta."
        },
        {
          title: "Sviluppo web",
          to: "A chi ha bisogno che il sito porti contatti",
          body: [
            "Siti aziendali, marketplace, negozi online, sistemi di prenotazione, strumenti web interni. Partiamo dal compito, non da un modello.",
            "Un sito aziendale si giudica dalle richieste e dagli ordini, non da come appare in un portfolio. Per questo, prima di iniziare, concordiamo che cosa conterà come risultato, e gli strumenti di analisi vanno installati prima del lancio. Non sei mesi dopo. La tecnologia è commisurata al compito: a una landing page non serve una piattaforma pesante, e un marketplace non entra in un costruttore di siti."
          ],
          list: [
            "prototipo e design delle interfacce",
            "frontend, backend, pannello di amministrazione",
            "collegamento a pagamenti, spedizioni, CRM e contabilità",
            "basi SEO, velocità di caricamento, analisi",
            "lancio e assistenza continuativa"
          ],
          result: "Si vede quante richieste e quanto fatturato porta il sito."
        },
        {
          title: "App mobili",
          to: "A chi pensa a un’app tutta sua",
          body: [
            "Sviluppiamo app per iOS e Android, con la parte server e il pannello di amministrazione che le sostengono.",
            "Prima verifichiamo se Le serve davvero. Un’app ha senso quando il cliente ci torna con regolarità: riordina, segue una consegna, raccoglie punti. Se la apre una volta l’anno, un buon sito mobile costa meno, e glielo diciamo prima di cominciare, non dopo. Nativa o multipiattaforma: lo decidiamo in base al budget e a quanto l’app deve sfruttare fotocamera, geolocalizzazione e modalità offline."
          ],
          list: [
            "app per iOS e Android",
            "parte server e API",
            "pannello di amministrazione per contenuti, ordini e utenti",
            "notifiche push e analisi",
            "pubblicazione su App Store e Google Play"
          ],
          result: "L’app supera la revisione degli store e il Suo team la gestisce senza sviluppatori."
        },
        {
          title: "Soluzioni di intelligenza artificiale",
          to: "A chi vuole «aggiungere una rete neurale»",
          body: [
            "Automatizziamo i processi aziendali con agenti di IA: una parte dei passaggi di routine la svolgono da soli, e una persona controlla. Intelligenza artificiale e machine learning li mettiamo dove fanno risparmiare tempo alle persone o denaro all’azienda. Dove non fanno risparmiare, non li mettiamo.",
            "Sull’IA siamo più scettici di molti. Buona parte delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione. Diverso è quando le persone passano ore a smistare e-mail, documenti e richieste: lì i modelli linguistici tolgono davvero la routine. Partiamo da un progetto pilota sui Suoi dati, così i numeri sulla precisione sono sul tavolo prima dello sviluppo vero e proprio."
          ],
          list: [
            "agenti di IA per i passaggi di routine: smistare una richiesta, inserire i dati nel CRM, preparare la risposta al cliente",
            "chatbot e assistenti per clienti e personale",
            "riconoscimento dei documenti ed estrazione dei dati",
            "smistamento delle richieste, ricerca nella knowledge base",
            "previsioni della domanda, analisi dei dati",
            "progetto pilota con misura della qualità sui Suoi dati"
          ],
          result: "Un lavoro preciso che facevano le persone ora lo fa il sistema, sotto il controllo di una persona."
        },
        {
          title: "Sviluppo CRM ed ERP",
          to: "Al responsabile che tiene metà della gestione nei fogli di calcolo",
          body: [
            "Realizziamo CRM ed ERP su misura del modo in cui si lavora davvero nella Sua azienda. Non il contrario.",
            "Un CRM standard va bene finché il Suo processo somiglia a quello standard. Quando i commerciali gestiscono metà delle pratiche nei fogli di calcolo perché il sistema «non lo sa fare», un sistema tutto Suo costa meno. I dati dei vecchi sistemi e dei fogli di calcolo li trasferiamo noi, e l’avvio avviene reparto per reparto, così il lavoro non si ferma nemmeno un giorno."
          ],
          list: [
            "moduli vendite, magazzino, produzione e finanza, quelli che servono",
            "ruoli, permessi di accesso, registro delle attività",
            "report e dashboard per la direzione",
            "migrazione dei dati da fogli di calcolo e vecchi sistemi",
            "collegamento con contabilità, telefonia e posta"
          ],
          result: "Un solo sistema invece di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza raccogliere ogni settimana i report di ogni reparto."
        },
        {
          title: "Soluzioni cloud",
          to: "A chi sta valutando il passaggio al cloud",
          body: [
            "Trasferiamo l’infrastruttura su Amazon Web Services, in tutto o in parte, e poi vigiliamo perché funzioni e non diventi più cara senza motivo.",
            "Lo diciamo subito: il cloud non è sempre più economico di un server proprio. Conviene quando il carico oscilla molto, quando serve tolleranza ai guasti o quando un nuovo ambiente deve essere pronto in pochi minuti e non in una settimana. Per questo la migrazione comincia con un audit e un calcolo dei costi. Migriamo per fasi, con un piano di rollback a ogni passaggio."
          ],
          list: [
            "audit dell’infrastruttura attuale, calcolo dei costi",
            "architettura su AWS, piano di migrazione",
            "trasferimento di server, database e file",
            "backup e monitoraggio",
            "riduzione dei costi dopo la migrazione"
          ],
          result: "Un’infrastruttura che sopravvive al guasto di un server, e una bolletta del cloud che Le è chiara."
        },
        {
          title: "Infrastruttura aziendale su Red Hat",
          to: "A chi ha i server affidati alla memoria di un solo amministratore",
          body: [
            "Costruiamo l’infrastruttura aziendale su Red Hat: server con Red Hat Enterprise Linux, container su OpenShift, configurazione e deployment con Ansible.",
            "Si sceglie Red Hat quando l’infrastruttura deve funzionare per anni e superare gli audit. L’abbonamento costa, e si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni. Progettiamo l’infrastruttura sui Suoi carichi e descriviamo la configurazione di ogni server in Ansible: se una macchina si guasta, viene ricostruita da un playbook, e nessuno deve ricordarsi che cosa era stato ritoccato a mano. Red Hat è nostro partner, quindi La aiutiamo anche con abbonamenti e supporto del produttore."
          ],
          list: [
            "audit dei server attuali e piano di migrazione",
            "Red Hat Enterprise Linux, con aggiornamenti centralizzati tramite Red Hat Satellite",
            "OpenShift per le Sue applicazioni",
            "configurazione e deployment con Ansible",
            "account e accessi in un unico punto (Identity Management)",
            "monitoraggio, backup, documentazione per il Suo team"
          ],
          result: "Un’infrastruttura che si può verificare, riprodurre e passare a un altro team, senza che le conoscenze se ne vadano con le persone."
        },
        {
          title: "API e integrazioni",
          to: "A chi inserisce gli stessi dati due volte",
          body: [
            "Progettiamo API per i Suoi sistemi e li colleghiamo ai servizi che già utilizza.",
            "Vediamo sempre la stessa scena: qualcuno ricopia a mano nella contabilità gli ordini del sito, i pagamenti si riconciliano in un foglio di calcolo. Un’integrazione si prende questo lavoro, insieme agli errori che produce. Il monitoraggio lo configuriamo a parte. Le integrazioni si rompono in silenzio (un partner cambia la sua API e addio), quindi è meglio che il primo a saperlo sia il sistema, non il Suo cliente."
          ],
          list: [
            "progettazione e documentazione delle API",
            "sistemi di pagamento, corrieri, CRM, contabilità",
            "scambio di dati tra sistemi interni",
            "code e nuovi tentativi in caso di errore",
            "monitoraggio e avvisi"
          ],
          result: "I dati si inseriscono una volta sola e poi arrivano da soli dove servono."
        },
        {
          title: "Supporto tecnico",
          to: "Ai titolari di sistemi, anche quelli non realizzati da noi",
          body: [
            "Assistiamo i Suoi sistemi IT e continuiamo a svilupparli, anche se li ha scritti qualcun altro.",
            "Correggere i bug è la parte minore del supporto. Ci sono anche gli aggiornamenti che chiudono le vulnerabilità, il monitoraggio che si accorge di un problema prima degli utenti e i piccoli miglioramenti strada facendo. Se il sistema arriva da un altro fornitore, cominciamo con un audit e scriviamo la documentazione. Senza, ogni modifica è una lotteria."
          ],
          list: [
            "monitoraggio di disponibilità ed errori",
            "correzioni e aggiornamenti di sicurezza",
            "backup, con la verifica che da essi si possa davvero ripristinare",
            "miglioramenti pianificati e nuove funzioni",
            "audit e documentazione di sistemi altrui"
          ],
          result: "Il sistema funziona, e c’è un team che sa come è fatto."
        }
      ]
    }
  };
  const mm = () => MEMOS[lang];

  /* Мови й інші версії сайту беремо зі спільного рантайму window.AIC */
  const LANGS = AIC.langs;
  const LANG_NAMES = AIC.langNames;
  const VERSIONS = () => AIC.variants.filter((v) => v.id !== AIC.id).map((v) => [v.name[lang], AIC.url(v.id, lang)]);
  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const narrow = () => matchMedia("(max-width: 720px)").matches;

  const nav = (navigator.language || "").toLowerCase();
  const navLang = nav.split("-")[0];
  let lang = store.get("aic-lang") || document.documentElement.lang || navLang;
  if (!LANGS.includes(lang)) lang = LANGS.includes(navLang) ? navLang : "uk";
  let contrast = Number(store.get("aic-lisa-contrast")) || 100;
  let clipboard = "";
  let requests = 0;

  const t = () => I18N[lang];
  const x = () => LX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };

  /* ---------- Іконки: 48×32 пікселі Lisa ---------- */
  const ICONS = {
    disk: `<rect class="body" x="4.5" y="9.5" width="39" height="19"/><path d="M4.5 9.5 9.5 4.5h29l5 5M9.5 4.5v5M38.5 4.5v5M4.5 23.5h39" fill="none"/><rect x="33" y="25" width="7" height="2" stroke="none" fill="#000"/><rect x="9" y="25" width="2" height="2" stroke="none" fill="#000"/>`,
    doc: `<path class="body" d="M14.5 .5h14l6 6v25h-20z"/><path d="M28.5 .5v6h6" fill="none"/><path d="M18 11h13M18 14h13M18 17h13M18 20h9M18 23h13M18 26h11" stroke-width="1" fill="none"/>`,
    folder: `<path class="body" d="M7.5 6.5h11l3 3h19v21h-33z"/><path d="M7.5 11.5h33" fill="none"/>`,
    pad: `<rect x="18.5" y="4.5" width="20" height="27" fill="#fff"/><rect class="body" x="16.5" y="2.5" width="20" height="27"/><rect class="body" x="12.5" y=".5" width="20" height="27"/><rect x="12" y="0" width="21" height="4" stroke="none" fill="#000"/><path d="M16 9h13M16 12h13M16 15h13M16 18h9" fill="none"/>`,
    clipboard: `<rect class="body" x="13.5" y="3.5" width="21" height="28"/><rect x="16.5" y="7.5" width="15" height="21" fill="#fff"/><rect x="19" y="0" width="10" height="6" stroke="none" fill="#000"/><path d="M19 12h10M19 15h10M19 18h7" fill="none"/>`,
    trash: `<path class="body" d="M14.5 8.5h19l-2 23h-15z"/><path d="M12.5 5.5h23v3h-23zM21.5 2.5h5v3h-5M19.5 12.5l1 16M24 12.5v16M28.5 12.5l-1 16" fill="none"/>`,
    prefs: `<rect class="body" x="9.5" y="3.5" width="29" height="26"/><path d="M13 10h22M13 17h22M13 24h22" fill="none"/><rect x="17" y="8" width="4" height="5" stroke="none" fill="#000"/><rect x="27" y="15" width="4" height="5" stroke="none" fill="#000"/><rect x="21" y="22" width="4" height="5" stroke="none" fill="#000"/>`
  };
  const iconSvg = (kind) => `<svg viewBox="0 0 48 32" shape-rendering="crispEdges" stroke="#000" stroke-width="1" aria-hidden="true">${ICONS[kind]}</svg>`;
  const arrow = (dir) => {
    const d = { up: "M6 1 11 7H8v4H4V7H1z", down: "M6 11 1 5h3V1h4v4h3z", left: "M1 6 7 1v3h4v4H7v3z", right: "M11 6 5 11V8H1V4h4V1z" }[dir];
    return `<svg viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="#fff" stroke="#000"/></svg>`;
  };

  /* ---------- Вміст вікон ---------- */
  const serviceIds = MEMOS.uk.items.map((_, i) => "svc" + i);

  const DEFS = {
    disk: { icon: "disk", title: () => x().disk, size: [300, 440], pos: [150, 24], render: (el) => iconGrid(el, ["readme", "services", "partners", "contact", "pad"]) },
    services: { icon: "folder", title: () => t().menu[0], size: [480, 440], pos: [230, 50], render: (el) => iconGrid(el, ["svcnote", ...serviceIds]) },
    readme: {
      icon: "doc", ruler: true, title: () => t().readmeDesc, size: [560, 460], pos: [470, 50],
      render: (el) => {
        const s = t();
        el.innerHTML = `<article class="page">
          <img class="doclogo" src="${esc(AIC.logo)}" alt="ArtIntelliCo">
          <h1>${esc(s.heroTitle)}</h1>
          <p>${esc(s.heroText)}</p>
          <h3>${esc(s.heroLead)}</h3>
          <ul>${s.phrases.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <p class="small">${esc(s.copyright)}<br>${esc(s.legal)}<br>${esc(s.slogan)}<br>${esc(s.source)}: <a href="${location.origin}${AIC.url("classic", lang)}" target="_blank" rel="noopener">artintellico.com</a></p>
        </article>`;
      }
    },
    partners: {
      icon: "doc", ruler: true, title: () => t().menu[1], size: [420, 380], pos: [280, 90],
      render: (el) => {
        el.innerHTML = `<article class="page"><h1>${esc(t().partnersTitle)}</h1><ul>${PARTNERS.map((p) =>
          `<li>${p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)}</li>`).join("")}</ul></article>`;
      }
    },
    contact: {
      icon: "doc", ruler: true, title: () => t().menu[2], size: [500, 400], pos: [300, 110],
      render: (el) => {
        const s = t();
        el.innerHTML = `<article class="page">
          <h1>${esc(s.contactTitle)}</h1>
          <p>${esc(s.contactText)}</p>
          <p>${esc(s.emailLabel)}: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
          <div class="btns">
            <button type="button" class="lbtn default" data-act="request">${esc(x().tearOff)}</button>
            <a class="lbtn" href="mailto:${EMAIL}">${esc(s.write)}</a>
            <button type="button" class="lbtn" data-act="copy">${esc(s.copy)}</button>
          </div>
        </article>`;
      }
    },
    pad: { icon: "pad", title: () => x().pad, stationery: true },
    clipboard: {
      icon: "clipboard", title: () => x().clipboard, size: [340, 200], pos: [140, 200],
      render: (el) => {
        el.innerHTML = clipboard
          ? `<div class="page"><p>${esc(x().clipboardHas)}</p><p>${esc(clipboard)}</p></div>`
          : `<div class="page"><p>${esc(x().clipboardEmpty)}</p></div>`;
      }
    },
    trash: { icon: "trash", title: () => x().trash, size: [300, 180], pos: [-340, -220], render: (el) => { el.innerHTML = `<div class="page"><p>${esc(x().trashEmpty)}</p></div>`; } },
    prefs: {
      icon: "prefs", title: () => x().prefs, size: [380, 420], pos: [170, 120],
      render: (el) => {
        el.innerHTML = `<div class="page">
          <h3>${esc(x().lang)}</h3>
          ${LANGS.map((l) => `<label class="choice"><input type="radio" name="lang" value="${l}"${l === lang ? " checked" : ""}> ${LANG_NAMES[l]}</label>`).join("")}
          <h3>${esc(x().contrast)}</h3>
          <input type="range" min="40" max="100" value="${contrast}" data-act="contrast" aria-label="${esc(x().contrast)}">
          <h3>${esc(x().versions)}</h3>
          <div class="btns">${VERSIONS().map(([n, u]) => `<a class="lbtn" href="${esc(u)}">${esc(n)}</a>`).join("")}</div>
        </div>`;
        el.querySelectorAll("input[name=lang]").forEach((r) => r.addEventListener("change", () => setLang(r.value)));
        el.querySelector("[data-act=contrast]").addEventListener("input", (e) => setContrast(Number(e.target.value)));
      }
    }
  };
  /* Записка: шапка «Кому / Від / Тема», текст, перелік, результат */
  function memoHtml(doc, withList) {
    const L = mm();
    return `<article class="page memo">
      <p class="memo-kind">${esc(L.kind)}</p>
      <dl class="memo-head">
        <dt>${esc(L.to)}</dt><dd>${esc(doc.to)}</dd>
        <dt>${esc(L.from)}</dt><dd>ArtIntelliCo</dd>
        <dt>${esc(L.subj)}</dt><dd>${esc(doc.subj || doc.title)}</dd>
      </dl>
      ${doc.body.map((p) => `<p>${esc(p)}</p>`).join("")}
      ${withList ? `<h3>${esc(L.list)}</h3><ul>${doc.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>
      <p class="memo-result"><span>${esc(L.result)}</span> ${esc(doc.result)}</p>
      <div class="btns"><button type="button" class="lbtn default" data-act="request" data-subject="${esc(doc.title)}">${esc(t().discuss)}</button></div>` : ""}
    </article>`;
  }
  DEFS.svcnote = {
    icon: "doc", ruler: true, title: () => mm().note.title, size: [480, 340], pos: [330, 80],
    render: (el) => { el.innerHTML = memoHtml(mm().note, false); }
  };
  serviceIds.forEach((id, i) => {
    DEFS[id] = {
      icon: "doc", ruler: true, title: () => mm().items[i].title, size: [540, 440], pos: [360 + i * 14, 60 + i * 14],
      render: (el) => { el.innerHTML = memoHtml(mm().items[i], true); }
    };
  });

  function requestDef(n, subject) {
    const state = { subject: subject || x().defaultSubject, message: "" };
    return {
      icon: "doc", ruler: true, title: () => x().request(n), size: [520, 460], pos: [260 + n * 18, 60 + n * 18], state,
      render: (el) => {
        el.innerHTML = `<form class="page">
          <h1>${esc(t().contactTitle)}</h1>
          <label class="field"><span>${esc(x().subject)}</span><input name="subject" value="${esc(state.subject)}"></label>
          <label class="field"><span>${esc(x().message)}</span><textarea name="message">${esc(state.message)}</textarea></label>
          <p>${esc(x().sendNote)}</p>
          <div class="btns"><button class="lbtn default">${esc(x().send)}</button></div>
        </form>`;
        const form = el.querySelector("form");
        form.addEventListener("input", () => { state.subject = form.subject.value; state.message = form.message.value; });
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(state.subject)}&body=${encodeURIComponent(state.message)}`);
        });
      }
    };
  }

  /* ---------- Іконки на столі та у вікнах ---------- */
  let selected = null;
  function iconButton(id) {
    const def = DEFS[id];
    const b = document.createElement("button");
    b.type = "button";
    b.className = "icon";
    b.dataset.id = id;
    b.innerHTML = `${iconSvg(def.icon)}<span class="lab">${esc(def.title())}</span>`;
    b.classList.toggle("opened", wins.has(id));
    return b;
  }
  function iconGrid(el, ids) {
    const g = document.createElement("div");
    g.className = "grid";
    ids.forEach((id) => g.appendChild(iconButton(id)));
    el.replaceChildren(g);
  }
  function select(btn) {
    document.querySelectorAll(".icon.sel").forEach((b) => b.classList.remove("sel"));
    selected = btn ? btn.dataset.id : null;
    if (btn) btn.classList.add("sel");
  }

  const DESK = ["disk", "clipboard", "prefs", "trash"];
  function renderDesk() {
    const box = $("deskIcons");
    box.replaceChildren(...DESK.map(iconButton));
    const place = (id, css) => Object.assign(box.querySelector(`[data-id="${id}"]`).style, css);
    place("disk", { left: "16px", top: "16px" });
    place("clipboard", { left: "16px", top: "136px" });
    place("prefs", { left: "16px", top: "256px" });
    place("trash", { right: "16px", bottom: "16px" });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".icon");
    if (!b) { if (e.target.closest("#desk") && !e.target.closest(".win")) select(null); return; }
    select(b);
    if (coarse) openIcon(b);
  });
  document.addEventListener("dblclick", (e) => { const b = e.target.closest(".icon"); if (b) openIcon(b); });
  document.addEventListener("keydown", (e) => {
    const b = e.target.closest && e.target.closest(".icon");
    if (b && e.key === "Enter") { e.preventDefault(); select(b); openIcon(b); }
  });

  function openIcon(btn) {
    const id = btn.dataset.id;
    if (DEFS[id].stationery) return tearOff(null, btn);
    open(id, btn);
  }

  /* ---------- Вікна ---------- */
  const wins = new Map();
  let zTop = 10;

  function deskRect() { return $("desk").getBoundingClientRect(); }
  function clampWin(w) {
    if (narrow()) return;
    const d = deskRect();
    const r = w.el.getBoundingClientRect();
    const left = Math.min(Math.max(0, r.left - d.left), Math.max(0, d.width - 120));
    const top = Math.min(Math.max(0, r.top - d.top), Math.max(0, d.height - 60));
    w.el.style.left = left + "px";
    w.el.style.top = top + "px";
  }

  function open(id, fromEl, def = DEFS[id]) {
    if (wins.has(id)) { focus(id); return wins.get(id); }
    const d = deskRect();
    const el = document.createElement("section");
    el.className = "win";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "t-" + id);
    el.innerHTML = `
      <div class="tbar"><button type="button" class="close" aria-label="${esc(x().close)}"></button><h2 id="t-${id}"></h2></div>
      <div class="ruler"${def.ruler ? "" : " hidden"}></div>
      <div class="wbody">
        <div class="content" tabindex="0"></div>
        <div class="sbar v"><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("up")}</button><div class="track"><div class="thumb"></div></div><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("down")}</button></div>
        <div class="sbar h"><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("left")}</button><div class="track"><div class="thumb"></div></div><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("right")}</button></div>
        <div class="size" aria-hidden="true"></div>
      </div>`;
    const [w, h] = def.size;
    const width = Math.min(w, d.width - 24);
    const height = Math.min(h, d.height - 24);
    let [left, top] = def.pos;
    if (left < 0) left = d.width + left;
    if (top < 0) top = d.height + top;
    left = Math.max(8, Math.min(left, d.width - width - 8));
    top = Math.max(8, Math.min(top, d.height - height - 8));
    Object.assign(el.style, { left: left + "px", top: top + "px", width: width + "px", height: height + "px" });
    const rec = { id, el, def, content: el.querySelector(".content") };
    wins.set(id, rec);
    rec.render = () => { el.querySelector("h2").textContent = def.title(); def.render(rec.content); rec.sync(); };
    setupScroll(rec);
    setupDrag(rec);
    el.querySelector(".close").addEventListener("click", () => close(id));
    el.addEventListener("pointerdown", () => focus(id), true);
    el.addEventListener("focusin", () => focus(id));
    rec.content.addEventListener("click", (e) => {
      const a = e.target.closest("[data-act]");
      if (!a) return;
      if (a.dataset.act === "copy") copyEmail();
      if (a.dataset.act === "request") tearOff(a.dataset.subject || null, a);
    });

    el.hidden = true;
    $("desk").appendChild(el);
    rec.render();
    markOpened();
    const show = () => { el.hidden = false; focus(id); rec.sync(); };
    if (fromEl && !reduced && !narrow()) zoom(fromEl.getBoundingClientRect(), el).then(show);
    else show();
    return rec;
  }

  function close(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.remove();
    wins.delete(id);
    markOpened();
    const rest = [...wins.values()].sort((a, b) => Number(b.el.style.zIndex) - Number(a.el.style.zIndex));
    if (rest[0]) focus(rest[0].id);
  }

  function focus(id) {
    const w = wins.get(id);
    if (!w) return;
    if (!w.el.classList.contains("active")) {
      wins.forEach((o) => o.el.classList.remove("active"));
      w.el.classList.add("active");
    }
    if (Number(w.el.style.zIndex) !== zTop) w.el.style.zIndex = ++zTop;
  }
  const activeWin = () => [...wins.values()].find((w) => w.el.classList.contains("active"));

  function markOpened() {
    document.querySelectorAll(".icon").forEach((b) => b.classList.toggle("opened", wins.has(b.dataset.id)));
  }

  function tearOff(subject, fromEl) {
    requests += 1;
    const id = "req" + requests;
    DEFS[id] = requestDef(requests, subject);
    const w = open(id, fromEl);
    setTimeout(() => { const f = w.el.querySelector("textarea"); if (f && !coarse) f.focus(); }, reduced ? 0 : 260);
  }

  /* Відкриття вікна: прямокутники, що розходяться від іконки, як у Lisa */
  function zoom(from, el) {
    const d = deskRect();
    el.hidden = false;
    const to = el.getBoundingClientRect();
    el.hidden = true;
    const steps = 7;
    const rects = [];
    for (let i = 1; i <= steps; i++) {
      const k = i / steps;
      const r = document.createElement("div");
      r.className = "zoom";
      Object.assign(r.style, {
        left: (from.left + (to.left - from.left) * k - d.left) + "px",
        top: (from.top + (to.top - from.top) * k - d.top) + "px",
        width: (from.width + (to.width - from.width) * k) + "px",
        height: (from.height + (to.height - from.height) * k) + "px"
      });
      rects.push(r);
    }
    return new Promise((resolve) => {
      rects.forEach((r, i) => setTimeout(() => {
        $("desk").appendChild(r);
        if (i >= 2) rects[i - 2].remove();
      }, i * 28));
      setTimeout(() => { rects.forEach((r) => r.remove()); resolve(); }, steps * 28 + 40);
    });
  }

  /* Перетягування та зміна розміру контуром, вікно стрибає після відпускання */
  function setupDrag(rec) {
    const outlineDrag = (handle, onMove) => {
      handle.addEventListener("pointerdown", (e) => {
        if (narrow() || e.button !== 0 || e.target.closest(".close")) return;
        e.preventDefault();
        focus(rec.id);
        const d = deskRect();
        const r = rec.el.getBoundingClientRect();
        const box = { left: r.left - d.left, top: r.top - d.top, width: r.width, height: r.height };
        const o = document.createElement("div");
        o.className = "outline";
        const draw = (b) => Object.assign(o.style, { left: b.left + "px", top: b.top + "px", width: b.width + "px", height: b.height + "px" });
        draw(box);
        $("desk").appendChild(o);
        const sx = e.clientX, sy = e.clientY;
        let next = box;
        const move = (ev) => { next = onMove(box, ev.clientX - sx, ev.clientY - sy, d); draw(next); };
        const up = () => {
          handle.removeEventListener("pointermove", move);
          handle.removeEventListener("pointerup", up);
          handle.removeEventListener("pointercancel", up);
          o.remove();
          Object.assign(rec.el.style, { left: next.left + "px", top: next.top + "px", width: next.width + "px", height: next.height + "px" });
          rec.sync();
        };
        handle.setPointerCapture(e.pointerId);
        handle.addEventListener("pointermove", move);
        handle.addEventListener("pointerup", up);
        handle.addEventListener("pointercancel", up);
      });
    };
    outlineDrag(rec.el.querySelector(".tbar"), (b, dx, dy, d) => ({
      ...b,
      left: Math.min(Math.max(-b.width + 80, b.left + dx), d.width - 80),
      top: Math.min(Math.max(0, b.top + dy), d.height - 30)
    }));
    outlineDrag(rec.el.querySelector(".size"), (b, dx, dy, d) => ({
      ...b,
      width: Math.max(220, Math.min(b.width + dx, d.width - b.left)),
      height: Math.max(140, Math.min(b.height + dy, d.height - b.top))
    }));
  }

  /* Власні смуги прокрутки Lisa: стрілки, растрова доріжка, біла «кабінка» */
  function setupScroll(rec) {
    const c = rec.content;
    const axes = [
      { bar: rec.el.querySelector(".sbar.v"), pos: "scrollTop", client: "clientHeight", full: "scrollHeight", ptr: "clientY", side: "top", len: "height" },
      { bar: rec.el.querySelector(".sbar.h"), pos: "scrollLeft", client: "clientWidth", full: "scrollWidth", ptr: "clientX", side: "left", len: "width" }
    ];
    rec.sync = () => {
      axes.forEach((a) => {
        const max = c[a.full] - c[a.client];
        const track = a.bar.querySelector(".track");
        const thumb = a.bar.querySelector(".thumb");
        a.bar.classList.toggle("idle", max <= 1);
        if (max <= 1) return;
        const room = track.getBoundingClientRect()[a.len] - thumb.getBoundingClientRect()[a.len];
        thumb.style[a.side] = Math.round((c[a.pos] / max) * room) + "px";
      });
    };
    c.addEventListener("scroll", rec.sync);
    new ResizeObserver(rec.sync).observe(c);

    axes.forEach((a) => {
      const [back, fwd] = a.bar.querySelectorAll(".arr");
      const track = a.bar.querySelector(".track");
      const thumb = a.bar.querySelector(".thumb");
      const by = (n) => { const o = {}; o[a.side] = n; c.scrollBy(o); };
      const hold = (btn, n) => {
        btn.addEventListener("pointerdown", (e) => {
          e.preventDefault();
          by(n);
          let iv = null;
          const to = setTimeout(() => { iv = setInterval(() => by(n), 60); }, 300);
          const stop = () => { clearTimeout(to); clearInterval(iv); window.removeEventListener("pointerup", stop); };
          window.addEventListener("pointerup", stop);
        });
      };
      hold(back, -32);
      hold(fwd, 32);
      track.addEventListener("pointerdown", (e) => {
        if (e.target === thumb) return;
        const tr = thumb.getBoundingClientRect();
        by((e[a.ptr] < tr[a.side] ? -1 : 1) * c[a.client] * 0.9);
      });
      thumb.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        thumb.setPointerCapture(e.pointerId);
        const start = e[a.ptr];
        const startPos = c[a.pos];
        const room = track.getBoundingClientRect()[a.len] - thumb.getBoundingClientRect()[a.len];
        const max = c[a.full] - c[a.client];
        const move = (ev) => { c[a.pos] = startPos + ((ev[a.ptr] - start) / room) * max; };
        const up = () => { thumb.removeEventListener("pointermove", move); thumb.removeEventListener("pointerup", up); };
        thumb.addEventListener("pointermove", move);
        thumb.addEventListener("pointerup", up);
      });
    });
  }

  /* ---------- Меню ---------- */
  const MENUS = [
    () => {
      const list = [...wins.values()].map((w) => ({ label: w.def.title(), act: () => focus(w.id) }));
      return [
        ...(list.length ? list : [{ label: x().noWindows, disabled: true }]),
        { sep: true },
        { label: x().setAsideAll, act: () => [...wins.keys()].forEach(close), disabled: !wins.size }
      ];
    },
    () => {
      const w = activeWin();
      return [
        { label: x().open, act: () => { const b = document.querySelector(".icon.sel"); if (b) openIcon(b); }, disabled: !selected },
        { label: w ? x().setAside(w.def.title()) : x().setAside("…"), act: () => w && close(w.id), disabled: !w },
        { sep: true },
        { label: x().tearOff, act: () => tearOff(null, document.querySelector('[data-id="disk"]')) }
      ];
    },
    () => [{ label: x().copyEmail, act: copyEmail }],
    () => [
      { head: x().lang },
      ...LANGS.map((l) => ({ label: LANG_NAMES[l], checked: l === lang, act: () => setLang(l) })),
      { sep: true },
      { head: x().versions },
      ...VERSIONS().map(([n, u]) => ({ label: n, act: () => { location.href = u; } })),
      { sep: true },
      { label: x().cleanUp, act: cleanUp }
    ]
  ];

  let openMenu = null;
  function renderMenubar() {
    const bar = $("menubar");
    bar.innerHTML = x().menus.map((m, i) =>
      `<div class="menu"><button type="button" class="mtitle" aria-haspopup="true" aria-expanded="false" data-m="${i}">${esc(m)}</button><div class="mlist" role="menu" hidden></div></div>`
    ).join("");
  }
  function showMenu(i) {
    closeMenu();
    const title = $("menubar").querySelector(`[data-m="${i}"]`);
    const list = title.nextElementSibling;
    list.innerHTML = MENUS[i]().map((it, k) => it.sep
      ? `<div class="msep" role="separator"></div>`
      : it.head ? `<div class="mhead" role="presentation">${esc(it.head)}</div>`
      : `<button type="button" class="mitem" role="menuitem" data-k="${k}"${it.disabled ? " disabled" : ""}><span class="chk">${it.checked ? "✓" : ""}</span><span class="lbl">${esc(it.label)}</span></button>`
    ).join("");
    const items = MENUS[i]();
    list.querySelectorAll(".mitem").forEach((b) => b.addEventListener("click", () => {
      const it = items[Number(b.dataset.k)];
      closeMenu();
      if (it && it.act && !it.disabled) it.act();
    }));
    list.hidden = false;
    title.setAttribute("aria-expanded", "true");
    openMenu = i;
    if (narrow()) {
      /* На вузькому екрані список фіксований під рядком меню: ставимо його під заголовком, не за край */
      const tl = title.getBoundingClientRect().left;
      list.style.left = Math.max(0, Math.min(tl, innerWidth - list.offsetWidth)) + "px";
    } else {
      const r = list.getBoundingClientRect();
      if (r.right > innerWidth) list.style.left = (innerWidth - r.right - 8) + "px";
    }
  }
  function closeMenu() {
    $("menubar").querySelectorAll(".mlist").forEach((l) => { l.hidden = true; l.style.left = ""; });
    $("menubar").querySelectorAll(".mtitle").forEach((b) => b.setAttribute("aria-expanded", "false"));
    openMenu = null;
  }
  $("menubar").addEventListener("click", (e) => {
    const b = e.target.closest(".mtitle");
    if (!b) return;
    const i = Number(b.dataset.m);
    if (openMenu === i) closeMenu();
    else showMenu(i);
  });
  $("menubar").addEventListener("pointerover", (e) => {
    const b = e.target.closest(".mtitle");
    if (b && openMenu !== null && Number(b.dataset.m) !== openMenu) showMenu(Number(b.dataset.m));
  });
  $("menubar").addEventListener("keydown", (e) => {
    const list = openMenu !== null ? $("menubar").querySelectorAll(".mlist")[openMenu] : null;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!list) { const b = e.target.closest(".mtitle"); if (b) showMenu(Number(b.dataset.m)); }
      const items = [...$("menubar").querySelectorAll(".mlist:not([hidden]) .mitem:not(:disabled)")];
      if (!items.length) return;
      const k = items.indexOf(document.activeElement);
      items[(k + (e.key === "ArrowDown" ? 1 : items.length - 1) + (k < 0 && e.key === "ArrowDown" ? 0 : 0)) % items.length].focus();
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      if (openMenu === null) return;
      const n = (openMenu + (e.key === "ArrowRight" ? 1 : 3)) % 4;
      showMenu(n);
      $("menubar").querySelector(`[data-m="${n}"]`).focus();
    }
  });
  document.addEventListener("pointerdown", (e) => { if (openMenu !== null && !e.target.closest(".menubar")) closeMenu(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!$("modal").hidden) return dismiss();
      if (openMenu !== null) { const i = openMenu; closeMenu(); $("menubar").querySelector(`[data-m="${i}"]`).focus(); }
    }
  });

  /* ---------- Дії ---------- */
  function alertBox(msg) {
    const m = $("modal");
    m.innerHTML = `<div class="alert" role="alertdialog" aria-modal="true" aria-describedby="alertMsg">
      <div class="row">${iconSvg("clipboard").replace("<svg", '<svg style="width:48px;height:32px"')}<p id="alertMsg">${esc(msg)}</p></div>
      <div class="btns"><button type="button" class="lbtn default">${esc(x().ok)}</button></div></div>`;
    m.hidden = false;
    const ok = m.querySelector("button");
    ok.addEventListener("click", dismiss);
    ok.focus();
  }
  let lastFocus = null;
  function dismiss() {
    $("modal").hidden = true;
    if (lastFocus) lastFocus.focus();
  }
  async function copyEmail() {
    lastFocus = document.activeElement;
    try {
      await navigator.clipboard.writeText(EMAIL);
      clipboard = EMAIL;
      if (wins.has("clipboard")) wins.get("clipboard").render();
      alertBox(x().copied);
    } catch {
      alertBox(x().copyFailed + " " + EMAIL);
    }
  }

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    document.title = "ArtIntelliCo Office System";
    renderMenubar();
    renderDesk();
    wins.forEach((w) => w.render());
    markOpened();
    sr(LANG_NAMES[l]);
  }
  function setContrast(v) {
    contrast = v;
    store.set("aic-lisa-contrast", String(v));
    document.body.style.filter = v < 100 ? `contrast(${v / 100}) brightness(${1 + (100 - v) / 250})` : "";
  }
  function cleanUp() {
    wins.forEach((w) => {
      const d = deskRect();
      let [left, top] = w.def.pos;
      if (left < 0) left = d.width + left;
      if (top < 0) top = d.height + top;
      w.el.style.left = left + "px";
      w.el.style.top = top + "px";
      clampWin(w);
    });
  }
  addEventListener("resize", () => wins.forEach(clampWin));

  /* ---------- Запуск ---------- */
  function boot() {
    const desk = () => {
      $("startup").hidden = true;
      store.set("aic-lisa-booted", "1", sessionStorage);
      if (!narrow()) open("disk");
      open("readme", narrow() ? null : document.querySelector('[data-id="disk"]'));
    };
    if (reduced || store.get("aic-lisa-booted", sessionStorage)) return desk();
    $("startText").innerHTML = x().start.map(esc).join("<br>");
    const id = setTimeout(done, 1600);
    function done() {
      clearTimeout(id);
      removeEventListener("keydown", done);
      removeEventListener("pointerdown", done);
      desk();
    }
    addEventListener("keydown", done);
    addEventListener("pointerdown", done);
  }

  setLang(lang);
  setContrast(contrast);
  $("startText").innerHTML = x().start.map(esc).join("<br>");
  document.fonts.load('16px "Lisa"').finally(boot);
})();
