(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

  /* Тексти взяті з artintellico.com — ті самі, що в index.html. Французькі «:» «?» — з нерозривним пробілом */
  const I18N = {
    uk: {
      title: "ArtIntelliCo — розробка та підтримка ІТ рішень для бізнесу",
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
      slogan: "Ми бачили, як зароджувалося IT. Знаємо, як воно працює сьогодні — і розуміємо, куди рухається завтра."
    },
    en: {
      title: "ArtIntelliCo — software development and IT support for business",
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
      slogan: "We saw IT being born. We know how it works today — and we understand where it is heading tomorrow."
    },
    ru: {
      title: "ArtIntelliCo — разработка и поддержка ИТ решений для бизнеса",
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
      slogan: "Мы видели, как зарождалось IT. Знаем, как оно работает сегодня — и понимаем, куда движется завтра."
    },
    de: {
      title: "ArtIntelliCo – Softwareentwicklung und IT-Support für Unternehmen",
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Geschäftsprozesse zu digitalisieren und zu automatisieren: Wir konzipieren moderne IT-Lösungen und setzen sie um.",
      heroLead: "Für Ihr Unternehmen",
      phrases: ["entwickeln wir SaaS-Plattformen", "führen wir CRM- und ERP-Systeme ein", "lassen wir KI für Sie arbeiten", "bringen wir die Infrastruktur in die Cloud"],
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Sie haben einen Vorschlag für eine Zusammenarbeit oder möchten mehr über unsere Lösungen und unsere Erfahrung wissen? Schreiben Sie uns eine E-Mail.",
      emailLabel: "E-Mail",
      copyright: "© 2026 ArtIntelliCo. Alle Rechte vorbehalten.",
      legal: "ArtIntelliCo LLC",
      slogan: "Wir haben die Geburt der IT miterlebt. Wir wissen, wie sie heute funktioniert – und verstehen, wohin sie sich morgen entwickelt."
    },
    fr: {
      title: "ArtIntelliCo — développement logiciel et support informatique pour les entreprises",
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      heroLead: "Pour votre entreprise, nous",
      phrases: ["créons des plateformes SaaS", "mettons en place des systèmes CRM et ERP", "faisons travailler l'IA pour vous", "migrons l'infrastructure vers le cloud"],
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Vous avez une proposition de partenariat ou souhaitez en savoir plus sur nos solutions et notre expérience ? Écrivez-nous par e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tous droits réservés.",
      legal: "ArtIntelliCo LLC",
      slogan: "Nous avons vu naître l'informatique. Nous savons comment elle fonctionne aujourd'hui — et nous comprenons où elle va demain."
    },
    es: {
      title: "ArtIntelliCo — desarrollo de software y soporte de TI para empresas",
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar los procesos de su negocio diseñando e implantando soluciones de TI modernas.",
      heroLead: "Para su negocio",
      phrases: ["desarrollamos plataformas SaaS", "implantamos sistemas CRM y ERP", "ponemos la IA a trabajar", "llevamos la infraestructura a la nube"],
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y nuestra experiencia, escríbanos un correo electrónico.",
      emailLabel: "Correo electrónico",
      copyright: "© 2026 ArtIntelliCo. Todos los derechos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos nacer la informática. Sabemos cómo funciona hoy y entendemos hacia dónde va mañana."
    },
    pt: {
      title: "ArtIntelliCo — desenvolvimento de software e suporte de TI para empresas",
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda-o a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      heroLead: "Para o seu negócio",
      phrases: ["desenvolvemos plataformas SaaS", "implementamos sistemas CRM e ERP", "pomos a IA a trabalhar", "levamos a infraestrutura para a cloud"],
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de parceria ou quer saber mais sobre as nossas soluções e a nossa experiência, envie-nos um e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Todos os direitos reservados.",
      legal: "ArtIntelliCo LLC",
      slogan: "Vimos a informática nascer. Sabemos como funciona hoje — e percebemos para onde caminha amanhã."
    },
    it: {
      title: "ArtIntelliCo — sviluppo software e supporto IT per le aziende",
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali, progettando e realizzando soluzioni IT moderne.",
      heroLead: "Per la Sua azienda",
      phrases: ["sviluppiamo piattaforme SaaS", "realizziamo sistemi CRM ed ERP", "mettiamo l'IA al lavoro", "portiamo l'infrastruttura nel cloud"],
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail.",
      emailLabel: "E-mail",
      copyright: "© 2026 ArtIntelliCo. Tutti i diritti riservati.",
      legal: "ArtIntelliCo LLC",
      slogan: "Abbiamo visto nascere l'informatica. Sappiamo come funziona oggi e capiamo dove andrà domani."
    }
  };

  /* Послуги як LIST програми BASIC з REM-рядками. s — коротка назва для меню (до 33 символів) */
  const SVC = {
    uk: {
      labels: ["ЩО ВХОДИТЬ", "РЕЗУЛЬТАТ"],
      items: [
        { t: "Розробка концепції ІТ рішення",
          lead: "Спершу зрозуміти, що має робити система. Потім писати код.",
          body: "Будувати під задачу, яку ніхто не сформулював, — найдорожчий шлях. Ми йдемо до тих, хто працюватиме із системою: у бухгалтерію, на склад, до менеджерів. Іноді чесна відповідь — готовий продукт плюс налаштування.",
          inc: ["інтерв'ю та розбір процесів", "бізнес-вимоги та сценарії", "готове проти замовного", "ТЗ зі строками й бюджетом за етапами"],
          res: "Документ, з яким будь-яка команда, наша чи ні, може оцінити роботу й почати." },
        { t: "Розробка SaaS рішень",
          lead: "SaaS-платформа: від пілота до сервісу з тарифами й кабінетами клієнтів.",
          body: "Гроші SaaS приносить, коли клієнт сам реєструється, платить і працює без дзвінка в підтримку. Мультитенантність, білінг і права — з першого дня, пізніше це в рази дорожче. Першу версію — якомога раніше: користувачі покажуть, що зайве.",
          inc: ["ізоляція даних клієнтів", "реєстрація, тарифи, оплата", "кабінети, ролі й права", "інтеграції та API для клієнтів", "масштабування під навантаження"],
          res: "Продукт продається за підпискою, а не впроваджується вручну щоразу." },
        { t: "Web-розробка",
          lead: "Сайти, маркетплейси, магазини, бронювання, внутрішні сервіси.",
          body: "Сайт для бізнесу рахують у заявках і замовленнях. Що вважати результатом, вирішуємо до старту, аналітику вмикаємо до запуску. Стек за задачею: лендингу важка платформа ні до чого, а маркетплейс у конструкторі не житиме.",
          inc: ["прототип і дизайн", "frontend, backend, адмінка", "оплата, доставка, CRM, облік", "SEO, швидкість, аналітика", "запуск і супровід"],
          res: "Видно, скільки заявок і грошей приносить сайт." },
        { t: "Мобільні застосунки",
          lead: "iOS та Android плюс сервер і адмінка.",
          body: "Застосунок потрібен, якщо до нього повертаються: повторне замовлення, статус, бонуси. Заходять раз на рік? Беріть мобільний сайт, він дешевший, — скажемо до старту. Натив чи кросплатформа — за бюджетом, камерою, геолокацією й офлайном.",
          inc: ["застосунки iOS та Android", "серверна частина та API", "адмінка: контент, замовлення, люди", "push і аналітика", "App Store і Google Play"],
          res: "Модерацію пройдено, команда керує сама, без розробників." },
        { t: "Рішення зі штучним інтелектом",
          lead: "ШІ-агенти, що автоматизують ваші бізнес-процеси. Всередині — ШІ та машинне навчання.",
          body: "Ми тут скептики: половину ідей про нейромережу закриває проста автоматизація. А от листи, документи й звернення моделі розбирають добре. Спершу пілот на ваших даних, цифри точності — до розробки.",
          inc: ["ШІ-агенти: розбір заявок, CRM, відповіді клієнтам", "чат-боти й асистенти", "розбір документів", "класифікація звернень", "пошук у базі знань", "прогноз попиту, аналіз даних", "пілот з оцінкою якості"],
          res: "Рутину людей виконує система. Людина перевіряє." },
        { t: "Розробка CRM та ERP",
          lead: "CRM та ERP довкола ваших процесів, а не навпаки.",
          body: "Коробка добра для стандартного процесу. Якщо менеджери ведуть пів роботи в таблицях, бо система «так не вміє», власна вийде дешевше. Дані переносимо, запускаємо по відділах, робота не стає.",
          inc: ["продажі, склад, виробництво, фінанси", "ролі, права, журнал дій", "звіти й дашборди", "перенесення з таблиць і старих систем", "бухгалтерія, телефонія, пошта"],
          res: "Одна система замість зоопарку таблиць. Керівник бачить усе без щотижневих звітів." },
        { t: "Хмарні рішення",
          lead: "Переїзд в Amazon Web Services — повністю або частинами.",
          body: "Хмара не завжди дешевша за власний сервер. Вона окупається, коли навантаження стрибає, потрібна відмовостійкість або середовище треба за хвилини. Спершу аудит і розрахунок, потім переїзд кроками, з планом відкату на кожному.",
          inc: ["аудит і розрахунок вартості", "архітектура AWS, план міграції", "сервери, бази, файли", "бекапи й моніторинг", "оптимізація витрат"],
          res: "Відмова сервера не страшна, рахунок за хмару зрозумілий." },
        { t: "Інфраструктура компанії на базі Red Hat", s: "Інфраструктура на Red Hat",
          lead: "Сервери компанії на Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Red Hat беруть, коли інфраструктура живе роками, проходить аудит і не має залежати від пам'яті одного адміна. Підписка — це підтримка виробника й десять років життєвого циклу RHEL. Налаштування серверів пишемо в Ansible: будь-який сервер перезбирається за сценарієм. Red Hat — наш партнер, із підписками теж допоможемо.",
          inc: ["аудит серверів і план переходу", "RHEL та оновлення через Red Hat Satellite", "OpenShift для ваших застосунків", "автоматизація на Ansible", "Identity Management: доступи в одному місці", "моніторинг, бекапи, документація"],
          res: "Інфраструктуру можна перевірити, повторити й передати іншій команді без втрат." },
        { t: "API та інтеграції",
          lead: "API для ваших систем і зв'язок із сервісами, які у вас уже є.",
          body: "Найчастіше болить подвійне введення: замовлення із сайту передруковують руками, оплати звіряють у таблиці. Інтеграція прибирає і роботу, і помилки. Моніторинг обов'язковий: партнер змінить API, і зв'язок зламається мовчки.",
          inc: ["проєктування й документація API", "оплата, доставка, CRM, облік", "обмін між своїми системами", "черги й повтори при збоях", "моніторинг і сповіщення"],
          res: "Ввели раз — дані дійшли самі." },
        { t: "Технічна підтримка",
          lead: "Підтримка й розвиток ваших систем. І тих, що писали не ми.",
          body: "Підтримка — це ще й оновлення безпеки, моніторинг, що помічає збій раніше за користувачів, і дрібні доопрацювання. Чужу систему починаємо з аудиту й документації, інакше кожна правка — лотерея.",
          inc: ["моніторинг доступності й помилок", "виправлення та оновлення", "бекапи й перевірка відновлення", "доопрацювання за планом", "аудит чужих систем"],
          res: "Система працює, команда знає, як вона влаштована." }
      ]
    },
    en: {
      labels: ["INCLUDED", "RESULT"],
      items: [
        { t: "IT solution concept",
          lead: "First work out what the system must do. Then write code.",
          body: "Building for a problem nobody has defined is the most expensive route. We go to the people who'll use the system: accounting, the warehouse, sales managers. Sometimes the honest answer is an existing product plus setup.",
          inc: ["interviews and process review", "business requirements, scenarios", "ready-made vs. custom", "spec with time and budget per phase"],
          res: "A document any team, ours or not, can estimate from and start." },
        { t: "SaaS development",
          lead: "A SaaS platform: from pilot to a service with plans and customer dashboards.",
          body: "SaaS makes money when a customer signs up, pays and works without calling support. Multi-tenancy, billing and permissions go in on day one; later they cost several times more. Ship the first version early: users show what's surplus.",
          inc: ["isolated customer data", "sign-up, plans, payments", "dashboards, roles, permissions", "integrations and a customer API", "scaling as load grows"],
          res: "A product sold by subscription, not rolled out by hand each time." },
        { t: "Web development",
          lead: "Sites, marketplaces, stores, booking, internal tools.",
          body: "A business site is counted in leads and orders. We agree what a result is before we start and switch analytics on at launch. Stack per task: a landing page doesn't need a heavy platform, a marketplace can't live in a site builder.",
          inc: ["prototype and design", "frontend, backend, admin", "payments, delivery, CRM, accounting", "SEO, speed, analytics", "launch and support"],
          res: "You can see the leads and money the site brings in." },
        { t: "Mobile apps",
          lead: "iOS and Android plus server and admin panel.",
          body: "An app is worth it if people come back: reorders, status, points. Once a year? Get a mobile site, it's cheaper, and we'll say so up front. Native or cross-platform: budget, camera, location and offline mode decide.",
          inc: ["iOS and Android apps", "server side and API", "admin: content, orders, users", "push and analytics", "App Store and Google Play"],
          res: "Passed review; your team runs it without developers." },
        { t: "AI-powered solutions",
          lead: "AI agents that automate your business processes, built on AI and machine learning.",
          body: "We're sceptics here: plain automation covers half of the neural-network ideas. Emails, documents and requests, though, models handle well. A pilot on your data first, accuracy figures before the build.",
          inc: ["AI agents: request triage, CRM entry, customer replies", "chatbots and assistants", "document parsing", "request classification", "knowledge-base search", "demand forecasts, data analysis", "pilot with quality check"],
          res: "The system does the routine. A person checks." },
        { t: "CRM and ERP development",
          lead: "CRM and ERP around your processes, not the reverse.",
          body: "A boxed product is fine for a standard process. When managers keep half their work in spreadsheets because the system \"can't\", your own is cheaper. Data migrated, rollout by department, work never stops.",
          inc: ["sales, warehouse, production, finance", "roles, permissions, audit log", "reports and dashboards", "migration from sheets and old systems", "accounting, telephony, email"],
          res: "One system instead of a zoo of spreadsheets. Management sees it all without weekly reports." },
        { t: "Cloud solutions",
          lead: "Moving to Amazon Web Services, whole or in parts.",
          body: "The cloud isn't always cheaper than your own server. It pays off with spiky load, fault-tolerance needs, or environments wanted in minutes. Audit and estimate first, then the move in steps, a rollback plan at each.",
          inc: ["audit and cost estimate", "AWS architecture, migration plan", "servers, databases, files", "backups and monitoring", "cost optimisation"],
          res: "A dead server isn't a disaster; the cloud bill makes sense." },
        { t: "Company infrastructure on Red Hat",
          lead: "Company servers on Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Red Hat is the choice when infrastructure lives for years, passes audits and mustn't depend on one admin's memory. The subscription buys vendor support and RHEL's ten-year lifecycle. Server settings go into Ansible, so any server can be rebuilt from a playbook. Red Hat is our partner; we'll help with subscriptions too.",
          inc: ["server audit and migration plan", "RHEL with updates via Red Hat Satellite", "OpenShift for your applications", "automation with Ansible", "Identity Management: access in one place", "monitoring, backups, documentation"],
          res: "Infrastructure you can audit, reproduce and hand to another team with nothing lost." },
        { t: "APIs and integrations",
          lead: "APIs for your systems, linked to services you already use.",
          body: "The usual pain is double entry: web orders retyped, payments checked in a spreadsheet. Integration removes the work and the errors. Monitoring is a must: a partner changes its API and the link breaks without a sound.",
          inc: ["API design and docs", "payments, delivery, CRM, accounting", "exchange between your systems", "queues and retries on failure", "monitoring and alerts"],
          res: "Typed once, data gets there by itself." },
        { t: "Technical support",
          lead: "Support and development for your systems. Ones we didn't write, too.",
          body: "Support also means security updates, monitoring that spots a failure before users do, and small improvements. An inherited system starts with an audit and docs, or every change is a gamble.",
          inc: ["availability and error monitoring", "fixes and updates", "backups and restore checks", "planned improvements", "audit of inherited systems"],
          res: "The system works, the team knows how it's built." }
      ]
    },
    ru: {
      labels: ["ЧТО ВХОДИТ", "РЕЗУЛЬТАТ"],
      items: [
        { t: "Разработка концепции ИТ решения",
          lead: "Сначала понять, что должна делать система. Потом писать код.",
          body: "Строить под задачу, которую никто не сформулировал, — самый дорогой путь. Мы идём к тем, кто будет работать с системой: в бухгалтерию, на склад, к менеджерам. Иногда честный ответ — готовый продукт плюс настройка.",
          inc: ["интервью и разбор процессов", "бизнес-требования и сценарии", "готовое против заказного", "ТЗ со сроками и бюджетом по этапам"],
          res: "Документ, с которым любая команда, наша или нет, может оценить работу и начать." },
        { t: "Разработка SaaS решений",
          lead: "SaaS-платформа: от пилота до сервиса с тарифами и кабинетами клиентов.",
          body: "Деньги SaaS приносит, когда клиент сам регистрируется, платит и работает без звонка в поддержку. Мультитенантность, биллинг и права — с первого дня, позже это в разы дороже. Первую версию — пораньше: пользователи покажут, что лишнее.",
          inc: ["изоляция данных клиентов", "регистрация, тарифы, оплата", "кабинеты, роли и права", "интеграции и API для клиентов", "масштабирование под нагрузку"],
          res: "Продукт продаётся по подписке, а не внедряется вручную каждый раз." },
        { t: "Web-разработка",
          lead: "Сайты, маркетплейсы, магазины, бронирование, внутренние сервисы.",
          body: "Сайт для бизнеса считают в заявках и заказах. Что считать результатом, решаем до старта, аналитику включаем к запуску. Стек по задаче: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструкторе жить не будет.",
          inc: ["прототип и дизайн", "frontend, backend, админка", "оплата, доставка, CRM, учёт", "SEO, скорость, аналитика", "запуск и сопровождение"],
          res: "Видно, сколько заявок и денег приносит сайт." },
        { t: "Мобильные приложения",
          lead: "iOS и Android плюс сервер и админка.",
          body: "Приложение нужно, если к нему возвращаются: повторный заказ, статус, бонусы. Заходят раз в год? Возьмите мобильный сайт, он дешевле, — скажем до старта. Натив или кроссплатформа — по бюджету, камере, геолокации и офлайну.",
          inc: ["приложения iOS и Android", "серверная часть и API", "админка: контент, заказы, люди", "push и аналитика", "App Store и Google Play"],
          res: "Модерацию прошло, команда управляет сама, без разработчиков." },
        { t: "Решения с искусственным интеллектом", s: "Решения с ИИ и ИИ-агенты",
          lead: "ИИ-агенты, которые автоматизируют ваши бизнес-процессы. Внутри — ИИ и машинное обучение.",
          body: "Мы тут скептики: половину идей про нейросеть закрывает простая автоматизация. А вот письма, документы и обращения модели разбирают хорошо. Сначала пилот на ваших данных, цифры точности — до разработки.",
          inc: ["ИИ-агенты: разбор заявок, CRM, ответы клиентам", "чат-боты и ассистенты", "разбор документов", "классификация обращений", "поиск по базе знаний", "прогноз спроса, анализ данных", "пилот с оценкой качества"],
          res: "Рутину людей делает система. Человек проверяет." },
        { t: "Разработка CRM и ERP",
          lead: "CRM и ERP вокруг ваших процессов, а не наоборот.",
          body: "Коробка хороша для стандартного процесса. Если менеджеры ведут полработы в таблицах, потому что система «так не умеет», своя выйдет дешевле. Данные переносим, запускаем по отделам, работа не встаёт.",
          inc: ["продажи, склад, производство, финансы", "роли, права, журнал действий", "отчёты и дашборды", "перенос из таблиц и старых систем", "бухгалтерия, телефония, почта"],
          res: "Одна система вместо зоопарка таблиц. Руководитель видит всё без еженедельных отчётов." },
        { t: "Облачные решения",
          lead: "Переезд в Amazon Web Services — целиком или по частям.",
          body: "Облако не всегда дешевле своего сервера. Оно окупается, когда нагрузка скачет, нужна отказоустойчивость или окружение нужно за минуты. Сначала аудит и расчёт, потом переезд шагами, с планом отката на каждом.",
          inc: ["аудит и расчёт стоимости", "архитектура AWS, план миграции", "серверы, базы, файлы", "бэкапы и мониторинг", "оптимизация расходов"],
          res: "Отказ сервера не страшен, счёт за облако понятен." },
        { t: "Инфраструктура компании на базе Red Hat", s: "Инфраструктура на Red Hat",
          lead: "Серверы компании на Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Red Hat берут, когда инфраструктура живёт годами, проходит аудит и не должна зависеть от памяти одного админа. Подписка — это поддержка производителя и десять лет жизненного цикла RHEL. Настройки серверов пишем в Ansible: любой сервер пересобирается по сценарию. Red Hat — наш партнёр, с подписками тоже поможем.",
          inc: ["аудит серверов и план перехода", "RHEL и обновления через Red Hat Satellite", "OpenShift для ваших приложений", "автоматизация на Ansible", "Identity Management: доступы в одном месте", "мониторинг, бэкапы, документация"],
          res: "Инфраструктуру можно проверить, повторить и передать другой команде без потерь." },
        { t: "API и интеграции",
          lead: "API для ваших систем и связь с сервисами, которые у вас уже есть.",
          body: "Чаще всего болит двойной ввод: заказ с сайта перебивают руками, оплаты сверяют в таблице. Интеграция убирает и работу, и ошибки. Мониторинг обязателен: партнёр сменит API, и связь сломается молча.",
          inc: ["проектирование и документация API", "оплата, доставка, CRM, учёт", "обмен между своими системами", "очереди и повторы при сбоях", "мониторинг и оповещения"],
          res: "Ввели один раз — данные дошли сами." },
        { t: "Техническая поддержка",
          lead: "Поддержка и развитие ваших систем. И тех, что писали не мы.",
          body: "Поддержка — это ещё обновления безопасности, мониторинг, который замечает сбой раньше пользователей, и мелкие доработки. Чужую систему начинаем с аудита и документации, иначе каждая правка — лотерея.",
          inc: ["мониторинг доступности и ошибок", "исправления и обновления", "бэкапы и проверка восстановления", "доработки по плану", "аудит чужих систем"],
          res: "Система работает, команда знает, как она устроена." }
      ]
    },
    de: {
      labels: ["LEISTUNGSUMFANG", "ERGEBNIS"],
      items: [
        { t: "Konzeption von IT-Lösungen",
          lead: "Erst klären, was das System leisten muss. Dann programmieren.",
          body: "Für ein Problem zu bauen, das niemand definiert hat, ist der teuerste Weg. Wir gehen zu den Menschen, die mit dem System arbeiten werden: in die Buchhaltung, ins Lager, zum Vertrieb. Manchmal lautet die ehrliche Antwort: ein fertiges Produkt plus Einrichtung.",
          inc: ["Interviews und Prozessanalyse", "Geschäftsanforderungen, Szenarien", "Standardprodukt oder Eigenentwicklung", "Pflichtenheft mit Zeit und Budget je Phase"],
          res: "Ein Dokument, mit dem jedes Team, ob unseres oder nicht, den Aufwand schätzen und loslegen kann." },
        { t: "SaaS-Entwicklung",
          lead: "Eine SaaS-Plattform: vom Pilotprojekt zum Dienst mit Tarifen und Kundenportal.",
          body: "SaaS bringt Geld, wenn Kunden sich selbst registrieren, bezahlen und arbeiten, ohne beim Support anzurufen. Mandantenfähigkeit, Abrechnung und Rechte gehören in den ersten Tag, später kosten sie ein Vielfaches. Die erste Version kommt früh: Die Nutzer zeigen, was überflüssig ist.",
          inc: ["getrennte Kundendaten", "Registrierung, Tarife, Zahlung", "Kundenportal, Rollen, Rechte", "Integrationen und Kunden-API", "Skalierung mit wachsender Last"],
          res: "Ein Produkt, das im Abo verkauft wird, statt jedes Mal von Hand eingeführt zu werden." },
        { t: "Webentwicklung",
          lead: "Websites, Marktplätze, Shops, Buchungssysteme, interne Tools.",
          body: "Eine Unternehmenswebsite misst man in Anfragen und Bestellungen. Was als Ergebnis zählt, legen wir vor dem Start fest, die Webanalyse läuft ab dem ersten Tag. Die Technik richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, ein Marktplatz lebt nicht im Baukasten.",
          inc: ["Prototyp und Design", "Frontend, Backend, Admin-Bereich", "Zahlung, Versand, CRM, Buchhaltung", "SEO, Tempo, Webanalyse", "Start und Betreuung"],
          res: "Sie sehen, wie viele Anfragen und wie viel Umsatz die Website bringt." },
        { t: "Mobile Apps",
          lead: "iOS und Android, dazu Server und Admin-Bereich.",
          body: "Eine App lohnt sich, wenn die Leute wiederkommen: Nachbestellung, Status, Bonuspunkte. Nur einmal im Jahr? Dann reicht eine mobile Website, sie ist günstiger, und das sagen wir Ihnen vorab. Nativ oder plattformübergreifend: Das entscheiden Budget, Kamera, Standort und Offline-Betrieb.",
          inc: ["Apps für iOS und Android", "Serverseite und API", "Admin: Inhalte, Bestellungen, Nutzer", "Push und Analyse", "App Store und Google Play"],
          res: "Die Prüfung ist bestanden, Ihr Team betreibt die App ohne Entwickler." },
        { t: "KI-Lösungen",
          lead: "KI-Agenten, die Ihre Geschäftsprozesse automatisieren, auf Basis von KI und maschinellem Lernen.",
          body: "Wir sind hier Skeptiker: Die Hälfte der Ideen für ein neuronales Netz erledigt schlichte Automatisierung. E-Mails, Dokumente und Anfragen verarbeiten Modelle dagegen gut. Zuerst ein Pilot mit Ihren Daten, Zahlen zur Genauigkeit vor der Entwicklung.",
          inc: ["KI-Agenten: Anfragen sortieren, CRM pflegen, Kunden antworten", "Chatbots und Assistenten", "Dokumente auslesen", "Anfragen klassifizieren", "Suche in der Wissensdatenbank", "Bedarfsprognosen, Datenanalyse", "Pilot mit Qualitätsprüfung"],
          res: "Das System erledigt die Routine. Ein Mensch prüft." },
        { t: "CRM- und ERP-Entwicklung",
          lead: "CRM und ERP rund um Ihre Prozesse, nicht umgekehrt.",
          body: "Standardsoftware passt zu Standardprozessen. Wenn Ihre Leute die halbe Arbeit in Tabellen erledigen, weil das System „das nicht kann“, ist eine eigene Lösung günstiger. Die Daten übernehmen wir, eingeführt wird Abteilung für Abteilung, die Arbeit steht nie still.",
          inc: ["Vertrieb, Lager, Produktion, Finanzen", "Rollen, Rechte, Änderungsprotokoll", "Berichte und Dashboards", "Übernahme aus Tabellen und Altsystemen", "Buchhaltung, Telefonie, E-Mail"],
          res: "Ein System statt eines Tabellen-Zoos. Die Geschäftsführung sieht alles ohne Wochenberichte." },
        { t: "Cloud-Lösungen",
          lead: "Umzug zu Amazon Web Services, komplett oder in Teilen.",
          body: "Die Cloud ist nicht immer günstiger als der eigene Server. Sie rechnet sich bei schwankender Last, wenn Ausfallsicherheit gefragt ist oder Umgebungen in Minuten bereitstehen müssen. Erst Analyse und Kalkulation, dann der Umzug in Schritten, mit Rückfallplan für jeden.",
          inc: ["Analyse und Kostenschätzung", "AWS-Architektur, Migrationsplan", "Server, Datenbanken, Dateien", "Backups und Monitoring", "Kostenoptimierung"],
          res: "Ein ausgefallener Server ist keine Katastrophe, die Cloud-Rechnung ist nachvollziehbar." },
        { t: "Unternehmensinfrastruktur auf Red Hat", s: "Infrastruktur auf Red Hat",
          lead: "Unternehmensserver auf Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Red Hat ist die Wahl, wenn Infrastruktur jahrelang läuft, Audits besteht und nicht vom Gedächtnis eines einzelnen Admins abhängen darf. Die Subskription bringt Herstellersupport und zehn Jahre Lebenszyklus für RHEL. Servereinstellungen landen in Ansible, so lässt sich jeder Server per Playbook neu aufbauen. Red Hat ist unser Partner, auch bei Subskriptionen helfen wir.",
          inc: ["Server-Audit und Migrationsplan", "RHEL mit Updates über Red Hat Satellite", "OpenShift für Ihre Anwendungen", "Automatisierung mit Ansible", "Identity Management: Zugänge an einem Ort", "Monitoring, Backups, Dokumentation"],
          res: "Eine Infrastruktur, die sich prüfen, nachbauen und ohne Verluste an ein anderes Team übergeben lässt." },
        { t: "APIs und Integrationen",
          lead: "APIs für Ihre Systeme, verbunden mit den Diensten, die Sie schon nutzen.",
          body: "Meist schmerzt die doppelte Erfassung: Web-Bestellungen werden abgetippt, Zahlungen in Tabellen abgeglichen. Eine Integration beseitigt Arbeit und Fehler. Monitoring ist Pflicht: Ändert ein Partner seine API, reißt die Verbindung lautlos ab.",
          inc: ["API-Design und Dokumentation", "Zahlung, Versand, CRM, Buchhaltung", "Austausch zwischen Ihren Systemen", "Warteschlangen, Wiederholung bei Fehlern", "Monitoring und Alarme"],
          res: "Einmal erfasst, kommen die Daten von selbst an." },
        { t: "Technischer Support",
          lead: "Betreuung und Weiterentwicklung Ihrer Systeme. Auch solcher, die wir nicht geschrieben haben.",
          body: "Support heißt auch Sicherheitsupdates, Monitoring, das einen Ausfall vor den Nutzern bemerkt, und kleine Verbesserungen. Bei einem übernommenen System stehen Audit und Dokumentation am Anfang, sonst ist jede Änderung ein Glücksspiel.",
          inc: ["Verfügbarkeits- und Fehlermonitoring", "Fehlerbehebung und Updates", "Backups und Wiederherstellungstests", "geplante Verbesserungen", "Audit übernommener Systeme"],
          res: "Das System läuft, das Team weiß, wie es aufgebaut ist." }
      ]
    },
    fr: {
      labels: ["CE QUI EST INCLUS", "RÉSULTAT"],
      items: [
        { t: "Conception de solutions informatiques", s: "Conception informatique",
          lead: "D'abord comprendre ce que le système doit faire. Ensuite, écrire le code.",
          body: "Construire pour un problème que personne n'a formulé, c'est la voie la plus coûteuse. Nous allons voir ceux qui utiliseront le système : comptabilité, entrepôt, commerciaux. Parfois, la réponse honnête, c'est un produit existant et son paramétrage.",
          inc: ["entretiens et analyse des processus", "exigences métier et scénarios", "produit du marché ou sur mesure", "cahier des charges : délais et budget par phase"],
          res: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le travail et démarrer." },
        { t: "Développement SaaS",
          lead: "Une plateforme SaaS : du pilote au service avec abonnements et espaces clients.",
          body: "Un SaaS rapporte quand le client s'inscrit, paie et travaille sans appeler le support. Multi-locataire, facturation et droits se prévoient dès le premier jour ; plus tard, ils coûtent plusieurs fois plus cher. La première version sort tôt : les utilisateurs montrent ce qui est superflu.",
          inc: ["données clients isolées", "inscription, abonnements, paiement", "espaces clients, rôles, droits", "intégrations et API clients", "montée en charge"],
          res: "Un produit vendu par abonnement, et non déployé à la main à chaque fois." },
        { t: "Développement web",
          lead: "Sites, places de marché, boutiques, réservation, outils internes.",
          body: "Un site d'entreprise se mesure en demandes et en commandes. Ce qui compte comme résultat, nous le fixons avant de commencer, et les statistiques tournent dès la mise en ligne. La technique suit la tâche : une page d'atterrissage n'a pas besoin d'une plateforme lourde, une place de marché ne vit pas dans un constructeur de sites.",
          inc: ["prototype et design", "frontend, backend, administration", "paiement, livraison, CRM, comptabilité", "SEO, vitesse, statistiques", "mise en ligne et suivi"],
          res: "Vous voyez combien de demandes et de chiffre d'affaires le site apporte." },
        { t: "Applications mobiles",
          lead: "iOS et Android, plus le serveur et l'interface d'administration.",
          body: "Une application se justifie si l'on y revient : nouvelle commande, suivi, points de fidélité. Une visite par an ? Un site mobile suffit, il coûte moins cher, et nous vous le dirons d'emblée. Natif ou multiplateforme : le budget, l'appareil photo, la géolocalisation et le mode hors ligne décident.",
          inc: ["applications iOS et Android", "partie serveur et API", "admin : contenus, commandes, utilisateurs", "notifications push et statistiques", "App Store et Google Play"],
          res: "Validation obtenue ; votre équipe gère l'application sans développeurs." },
        { t: "Solutions d'intelligence artificielle", s: "Solutions d'IA et agents IA",
          lead: "Des agents IA qui automatisent vos processus métier, fondés sur l'IA et l'apprentissage automatique.",
          body: "Ici, nous sommes sceptiques : une simple automatisation couvre la moitié des idées de réseau de neurones. En revanche, les modèles traitent bien les e-mails, les documents et les demandes. D'abord un pilote sur vos données, les chiffres de précision avant le développement.",
          inc: ["agents IA : tri des demandes, saisie CRM, réponses aux clients", "chatbots et assistants", "lecture de documents", "classement des demandes", "recherche dans la base de connaissances", "prévision de la demande, analyse de données", "pilote avec contrôle qualité"],
          res: "Le système fait la routine. Un humain vérifie." },
        { t: "Développement CRM et ERP",
          lead: "Un CRM et un ERP construits autour de vos processus, et pas l'inverse.",
          body: "Un progiciel convient à un processus standard. Quand les commerciaux tiennent la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire », une solution maison revient moins cher. Données reprises, déploiement service par service, le travail ne s'arrête jamais.",
          inc: ["ventes, stock, production, finances", "rôles, droits, journal des actions", "rapports et tableaux de bord", "reprise des tableurs et anciens systèmes", "comptabilité, téléphonie, messagerie"],
          res: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit tout sans rapports hebdomadaires." },
        { t: "Solutions cloud",
          lead: "Migration vers Amazon Web Services, en totalité ou par parties.",
          body: "Le cloud n'est pas toujours moins cher que votre propre serveur. Il devient rentable quand la charge varie fortement, quand la tolérance aux pannes compte ou quand il faut un environnement en quelques minutes. D'abord audit et chiffrage, puis la migration par étapes, avec un plan de retour arrière pour chacune.",
          inc: ["audit et estimation des coûts", "architecture AWS, plan de migration", "serveurs, bases de données, fichiers", "sauvegardes et supervision", "optimisation des coûts"],
          res: "Une panne de serveur n'est plus un drame ; la facture du cloud est lisible." },
        { t: "Infrastructure d'entreprise sous Red Hat", s: "Infrastructure sous Red Hat",
          lead: "Les serveurs de l'entreprise sous Red Hat : Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "On choisit Red Hat quand l'infrastructure doit vivre des années, passer des audits et ne pas dépendre de la mémoire d'un seul administrateur. La souscription apporte le support de l'éditeur et les dix ans de cycle de vie de RHEL. La configuration des serveurs est décrite dans Ansible : chaque serveur se reconstruit à partir d'un playbook. Red Hat est notre partenaire ; nous vous aidons aussi pour les souscriptions.",
          inc: ["audit des serveurs et plan de migration", "RHEL et mises à jour via Red Hat Satellite", "OpenShift pour vos applications", "automatisation avec Ansible", "Identity Management : accès centralisés", "supervision, sauvegardes, documentation"],
          res: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe sans rien perdre." },
        { t: "API et intégrations",
          lead: "Des API pour vos systèmes, reliées aux services que vous utilisez déjà.",
          body: "Le mal le plus courant, c'est la double saisie : commandes web retapées à la main, paiements pointés dans un tableur. L'intégration supprime le travail et les erreurs. La supervision est indispensable : un partenaire modifie son API et la liaison casse sans un bruit.",
          inc: ["conception et documentation d'API", "paiement, livraison, CRM, comptabilité", "échanges entre vos systèmes", "files d'attente et reprises sur erreur", "supervision et alertes"],
          res: "Saisies une fois, les données arrivent toutes seules." },
        { t: "Support technique",
          lead: "Maintenance et évolution de vos systèmes. Y compris ceux que nous n'avons pas écrits.",
          body: "Le support, c'est aussi les mises à jour de sécurité, une supervision qui repère la panne avant les utilisateurs, et de petites améliorations. Un système hérité commence par un audit et une documentation, sinon chaque modification est un pari.",
          inc: ["supervision de la disponibilité et des erreurs", "correctifs et mises à jour", "sauvegardes et tests de restauration", "améliorations planifiées", "audit des systèmes hérités"],
          res: "Le système fonctionne, l'équipe sait comment il est construit." }
      ]
    },
    es: {
      labels: ["QUÉ INCLUYE", "RESULTADO"],
      items: [
        { t: "Concepto de la solución de TI",
          lead: "Primero entender qué debe hacer el sistema. Después, escribir código.",
          body: "Construir para un problema que nadie ha definido es el camino más caro. Vamos a hablar con quienes usarán el sistema: contabilidad, almacén, comerciales. A veces la respuesta honesta es un producto existente más su configuración.",
          inc: ["entrevistas y análisis de procesos", "requisitos de negocio y escenarios", "producto estándar o a medida", "especificación con plazos y presupuesto por fase"],
          res: "Un documento con el que cualquier equipo, nuestro o no, puede estimar el trabajo y empezar." },
        { t: "Desarrollo SaaS",
          lead: "Una plataforma SaaS: del piloto a un servicio con planes y áreas de cliente.",
          body: "Un SaaS da dinero cuando el cliente se registra, paga y trabaja sin llamar a soporte. Multiinquilino, facturación y permisos van desde el primer día; más tarde cuestan varias veces más. La primera versión, cuanto antes: los usuarios enseñan lo que sobra.",
          inc: ["datos de clientes aislados", "registro, planes, pagos", "áreas de cliente, roles, permisos", "integraciones y API para clientes", "escalado según la carga"],
          res: "Un producto que se vende por suscripción, no que se implanta a mano cada vez." },
        { t: "Desarrollo web",
          lead: "Sitios web, marketplaces, tiendas, reservas, herramientas internas.",
          body: "Un sitio de empresa se mide en solicitudes y pedidos. Qué cuenta como resultado lo acordamos antes de empezar, y la analítica se activa con el lanzamiento. La tecnología, según la tarea: una landing page no necesita una plataforma pesada y un marketplace no vive en un creador de webs.",
          inc: ["prototipo y diseño", "frontend, backend, panel de administración", "pagos, envíos, CRM, contabilidad", "SEO, velocidad, analítica", "lanzamiento y mantenimiento"],
          res: "Usted ve cuántas solicitudes y cuánto dinero aporta el sitio." },
        { t: "Aplicaciones móviles",
          lead: "iOS y Android, más servidor y panel de administración.",
          body: "Una aplicación compensa si la gente vuelve: repetir pedido, consultar el estado, sumar puntos. ¿Entran una vez al año? Basta un sitio móvil, sale más barato, y se lo diremos desde el principio. Nativa o multiplataforma: lo deciden el presupuesto, la cámara, la geolocalización y el modo sin conexión.",
          inc: ["aplicaciones iOS y Android", "parte de servidor y API", "panel: contenido, pedidos, usuarios", "notificaciones push y analítica", "App Store y Google Play"],
          res: "Revisión superada; su equipo la gestiona sin desarrolladores." },
        { t: "Soluciones con inteligencia artificial", s: "Soluciones con IA y agentes IA",
          lead: "Agentes de IA que automatizan sus procesos de negocio, basados en IA y aprendizaje automático.",
          body: "Aquí somos escépticos: la mitad de las ideas con redes neuronales se resuelven con automatización sencilla. Eso sí, los correos, documentos y solicitudes los modelos los procesan bien. Primero un piloto con sus datos, cifras de precisión antes del desarrollo.",
          inc: ["agentes de IA: clasificar solicitudes, rellenar el CRM, responder a clientes", "chatbots y asistentes", "lectura de documentos", "clasificación de solicitudes", "búsqueda en la base de conocimiento", "previsión de demanda, análisis de datos", "piloto con control de calidad"],
          res: "El sistema hace la rutina. Una persona lo revisa." },
        { t: "Desarrollo de CRM y ERP",
          lead: "CRM y ERP a la medida de sus procesos, y no al revés.",
          body: "Un producto estándar sirve para un proceso estándar. Si los comerciales llevan media jornada en hojas de cálculo porque el sistema «no lo permite», uno propio sale más barato. Migramos los datos, implantamos por departamentos y el trabajo no se detiene.",
          inc: ["ventas, almacén, producción, finanzas", "roles, permisos, registro de acciones", "informes y paneles", "migración desde hojas de cálculo y sistemas antiguos", "contabilidad, telefonía, correo"],
          res: "Un solo sistema en lugar de un zoo de hojas de cálculo. La dirección lo ve todo sin informes semanales." },
        { t: "Soluciones en la nube",
          lead: "Migración a Amazon Web Services, completa o por partes.",
          body: "La nube no siempre es más barata que un servidor propio. Compensa cuando la carga sube y baja, cuando hace falta tolerancia a fallos o cuando se necesita un entorno en minutos. Primero auditoría y cálculo, después la migración por pasos, con un plan de vuelta atrás en cada uno.",
          inc: ["auditoría y estimación de costes", "arquitectura AWS, plan de migración", "servidores, bases de datos, archivos", "copias de seguridad y monitorización", "optimización de costes"],
          res: "La caída de un servidor no es un drama; la factura de la nube se entiende." },
        { t: "Infraestructura empresarial con Red Hat", s: "Infraestructura con Red Hat",
          lead: "Servidores de la empresa con Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Red Hat se elige cuando la infraestructura vive años, pasa auditorías y no puede depender de la memoria de un solo administrador. La suscripción incluye el soporte del fabricante y diez años de ciclo de vida de RHEL. La configuración de los servidores se escribe en Ansible: cualquier servidor se reconstruye con un playbook. Red Hat es nuestro socio; también le ayudamos con las suscripciones.",
          inc: ["auditoría de servidores y plan de migración", "RHEL con actualizaciones vía Red Hat Satellite", "OpenShift para sus aplicaciones", "automatización con Ansible", "Identity Management: accesos en un solo lugar", "monitorización, copias de seguridad, documentación"],
          res: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin perder nada." },
        { t: "API e integraciones",
          lead: "API para sus sistemas, conectadas con los servicios que ya utiliza.",
          body: "Lo que más duele suele ser la doble entrada: pedidos web que se vuelven a teclear, pagos que se cuadran en una hoja de cálculo. La integración elimina el trabajo y los errores. La monitorización es obligatoria: un socio cambia su API y la conexión se rompe sin hacer ruido.",
          inc: ["diseño y documentación de API", "pagos, envíos, CRM, contabilidad", "intercambio entre sus sistemas", "colas y reintentos ante fallos", "monitorización y alertas"],
          res: "Se introducen una vez y los datos llegan solos." },
        { t: "Soporte técnico",
          lead: "Soporte y evolución de sus sistemas. También de los que no escribimos nosotros.",
          body: "Soporte también significa actualizaciones de seguridad, una monitorización que detecta el fallo antes que los usuarios y pequeñas mejoras. Un sistema heredado empieza con una auditoría y documentación; si no, cada cambio es una lotería.",
          inc: ["monitorización de disponibilidad y errores", "correcciones y actualizaciones", "copias de seguridad y pruebas de restauración", "mejoras planificadas", "auditoría de sistemas heredados"],
          res: "El sistema funciona y el equipo sabe cómo está construido." }
      ]
    },
    pt: {
      labels: ["O QUE INCLUI", "RESULTADO"],
      items: [
        { t: "Conceção de soluções de TI",
          lead: "Primeiro perceber o que o sistema tem de fazer. Depois escrever código.",
          body: "Construir para um problema que ninguém definiu é o caminho mais caro. Vamos falar com quem vai trabalhar com o sistema: contabilidade, armazém, comerciais. Às vezes, a resposta honesta é um produto existente e a respetiva configuração.",
          inc: ["entrevistas e análise de processos", "requisitos de negócio e cenários", "produto pronto ou à medida", "caderno de encargos com prazos e orçamento por fase"],
          res: "Um documento com o qual qualquer equipa, nossa ou não, consegue orçamentar o trabalho e começar." },
        { t: "Desenvolvimento SaaS",
          lead: "Uma plataforma SaaS: do piloto a um serviço com planos e áreas de cliente.",
          body: "Um SaaS dá dinheiro quando o cliente se regista, paga e trabalha sem ligar para o suporte. Multi-inquilino, faturação e permissões entram no primeiro dia; mais tarde custam várias vezes mais. A primeira versão sai cedo: os utilizadores mostram o que está a mais.",
          inc: ["dados de clientes isolados", "registo, planos, pagamentos", "áreas de cliente, perfis, permissões", "integrações e API para clientes", "escalabilidade à medida da carga"],
          res: "Um produto vendido por subscrição, e não implementado à mão de cada vez." },
        { t: "Desenvolvimento web",
          lead: "Sites, marketplaces, lojas online, reservas, ferramentas internas.",
          body: "Um site empresarial mede-se em pedidos de contacto e encomendas. O que conta como resultado é acordado antes de começar, e a análise de tráfego fica ativa no lançamento. A tecnologia depende da tarefa: uma landing page não precisa de uma plataforma pesada e um marketplace não vive num construtor de sites.",
          inc: ["protótipo e design", "frontend, backend, área de administração", "pagamentos, entregas, CRM, contabilidade", "SEO, velocidade, análise de tráfego", "lançamento e acompanhamento"],
          res: "Vê quantos contactos e quanto dinheiro o site traz." },
        { t: "Aplicações móveis",
          lead: "iOS e Android, mais servidor e área de administração.",
          body: "Uma aplicação compensa se as pessoas voltam: nova encomenda, estado do pedido, pontos. Entram uma vez por ano? Chega um site móvel, é mais barato, e dizemos-lho logo à partida. Nativa ou multiplataforma: decidem o orçamento, a câmara, a localização e o modo offline.",
          inc: ["aplicações iOS e Android", "lado do servidor e API", "administração: conteúdos, encomendas, utilizadores", "notificações push e análise", "App Store e Google Play"],
          res: "Revisão aprovada; a sua equipa gere a aplicação sem programadores." },
        { t: "Soluções com inteligência artificial", s: "Soluções com IA e agentes IA",
          lead: "Agentes de IA que automatizam os seus processos de negócio, assentes em IA e aprendizagem automática.",
          body: "Aqui somos céticos: metade das ideias com redes neuronais resolve-se com automatização simples. Já e-mails, documentos e pedidos, os modelos tratam bem. Primeiro um piloto com os seus dados, números de precisão antes do desenvolvimento.",
          inc: ["agentes de IA: triagem de pedidos, registo no CRM, respostas a clientes", "chatbots e assistentes", "leitura de documentos", "classificação de pedidos", "pesquisa na base de conhecimento", "previsão da procura, análise de dados", "piloto com avaliação da qualidade"],
          res: "O sistema faz a rotina. Uma pessoa verifica." },
        { t: "Desenvolvimento de CRM e ERP",
          lead: "CRM e ERP à volta dos seus processos, e não o contrário.",
          body: "Um produto de prateleira serve para um processo-padrão. Se os comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não deixa», um sistema próprio sai mais barato. Migramos os dados, implementamos por departamentos e o trabalho nunca para.",
          inc: ["vendas, armazém, produção, finanças", "perfis, permissões, registo de ações", "relatórios e dashboards", "migração de folhas de cálculo e sistemas antigos", "contabilidade, telefonia, e-mail"],
          res: "Um só sistema em vez de um jardim zoológico de folhas de cálculo. A gestão vê tudo sem relatórios semanais." },
        { t: "Soluções na cloud",
          lead: "Migração para a Amazon Web Services, total ou por partes.",
          body: "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila, quando é preciso tolerância a falhas ou ambientes prontos em minutos. Primeiro auditoria e cálculo, depois a migração por etapas, com um plano de reversão em cada uma.",
          inc: ["auditoria e estimativa de custos", "arquitetura AWS, plano de migração", "servidores, bases de dados, ficheiros", "cópias de segurança e monitorização", "otimização de custos"],
          res: "A falha de um servidor não é um drama; a fatura da cloud percebe-se." },
        { t: "Infraestrutura empresarial em Red Hat", s: "Infraestrutura em Red Hat",
          lead: "Servidores da empresa em Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Escolhe-se Red Hat quando a infraestrutura vive durante anos, passa auditorias e não pode depender da memória de um único administrador. A subscrição traz o suporte do fabricante e dez anos de ciclo de vida do RHEL. A configuração dos servidores fica em Ansible: qualquer servidor é reconstruído a partir de um playbook. A Red Hat é nossa parceira; também ajudamos com as subscrições.",
          inc: ["auditoria de servidores e plano de migração", "RHEL com atualizações via Red Hat Satellite", "OpenShift para as suas aplicações", "automatização com Ansible", "Identity Management: acessos num só lugar", "monitorização, cópias de segurança, documentação"],
          res: "Uma infraestrutura que se pode auditar, reproduzir e entregar a outra equipa sem perdas." },
        { t: "APIs e integrações",
          lead: "APIs para os seus sistemas, ligadas aos serviços que já utiliza.",
          body: "A dor mais comum é a introdução em duplicado: encomendas do site redigitadas à mão, pagamentos conferidos numa folha de cálculo. A integração elimina o trabalho e os erros. A monitorização é obrigatória: um parceiro muda a API e a ligação parte-se sem aviso.",
          inc: ["desenho e documentação de APIs", "pagamentos, entregas, CRM, contabilidade", "troca de dados entre os seus sistemas", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          res: "Introduzidos uma vez, os dados chegam sozinhos." },
        { t: "Suporte técnico",
          lead: "Suporte e evolução dos seus sistemas. Também dos que não fomos nós a escrever.",
          body: "Suporte também são atualizações de segurança, monitorização que deteta a falha antes dos utilizadores e pequenas melhorias. Um sistema herdado começa com auditoria e documentação; caso contrário, cada alteração é uma lotaria.",
          inc: ["monitorização da disponibilidade e de erros", "correções e atualizações", "cópias de segurança e testes de reposição", "melhorias planeadas", "auditoria de sistemas herdados"],
          res: "O sistema funciona e a equipa sabe como está construído." }
      ]
    },
    it: {
      labels: ["COSA COMPRENDE", "RISULTATO"],
      items: [
        { t: "Ideazione della soluzione IT",
          lead: "Prima capire che cosa deve fare il sistema. Poi scrivere il codice.",
          body: "Costruire per un problema che nessuno ha definito è la strada più costosa. Andiamo da chi userà il sistema: contabilità, magazzino, commerciali. A volte la risposta onesta è un prodotto già pronto più la configurazione.",
          inc: ["interviste e analisi dei processi", "requisiti di business e scenari", "prodotto pronto o su misura", "capitolato con tempi e budget per fase"],
          res: "Un documento con cui qualsiasi team, nostro o no, può stimare il lavoro e partire." },
        { t: "Sviluppo SaaS",
          lead: "Una piattaforma SaaS: dal pilota a un servizio con piani tariffari e aree clienti.",
          body: "Un SaaS rende quando il cliente si registra, paga e lavora senza chiamare l'assistenza. Multi-tenancy, fatturazione e permessi vanno previsti dal primo giorno: dopo costano molte volte di più. La prima versione esce presto: gli utenti mostrano che cosa è superfluo.",
          inc: ["dati dei clienti isolati", "registrazione, piani, pagamenti", "aree clienti, ruoli, permessi", "integrazioni e API per i clienti", "scalabilità al crescere del carico"],
          res: "Un prodotto venduto in abbonamento, non installato a mano ogni volta." },
        { t: "Sviluppo web",
          lead: "Siti, marketplace, negozi online, prenotazioni, strumenti interni.",
          body: "Un sito aziendale si misura in richieste e ordini. Che cosa conta come risultato lo stabiliamo prima di partire, e le statistiche sono attive dal lancio. La tecnologia dipende dal compito: a una landing page non serve una piattaforma pesante, un marketplace non vive in un site builder.",
          inc: ["prototipo e design", "frontend, backend, pannello di amministrazione", "pagamenti, spedizioni, CRM, contabilità", "SEO, velocità, statistiche", "lancio e assistenza"],
          res: "Si vede quante richieste e quanto fatturato porta il sito." },
        { t: "App mobili",
          lead: "iOS e Android, più server e pannello di amministrazione.",
          body: "Un'app conviene se le persone ci tornano: nuovi ordini, stato, punti fedeltà. Una volta all'anno? Basta un sito mobile, costa meno, e glielo diciamo subito. Nativa o multipiattaforma: decidono budget, fotocamera, geolocalizzazione e modalità offline.",
          inc: ["app iOS e Android", "lato server e API", "pannello: contenuti, ordini, utenti", "notifiche push e statistiche", "App Store e Google Play"],
          res: "Revisione superata; il Suo team gestisce l'app senza sviluppatori." },
        { t: "Soluzioni di intelligenza artificiale", s: "Soluzioni di IA e agenti IA",
          lead: "Agenti IA che automatizzano i Suoi processi aziendali, basati su IA e machine learning.",
          body: "Qui siamo scettici: metà delle idee con le reti neurali si risolve con una semplice automazione. E-mail, documenti e richieste, invece, i modelli li gestiscono bene. Prima un pilota sui Suoi dati, i numeri sull'accuratezza prima dello sviluppo.",
          inc: ["agenti IA: smistamento richieste, inserimento nel CRM, risposte ai clienti", "chatbot e assistenti", "lettura di documenti", "classificazione delle richieste", "ricerca nella knowledge base", "previsione della domanda, analisi dei dati", "pilota con verifica della qualità"],
          res: "Il sistema fa la routine. Una persona controlla." },
        { t: "Sviluppo CRM ed ERP",
          lead: "CRM ed ERP costruiti intorno ai Suoi processi, non il contrario.",
          body: "Un prodotto standard va bene per un processo standard. Se i commerciali tengono metà del lavoro nei fogli di calcolo perché il sistema «non lo prevede», uno su misura costa meno. Migriamo i dati, avviamo reparto per reparto, il lavoro non si ferma mai.",
          inc: ["vendite, magazzino, produzione, finanza", "ruoli, permessi, registro delle attività", "report e dashboard", "migrazione da fogli di calcolo e vecchi sistemi", "contabilità, telefonia, e-mail"],
          res: "Un unico sistema al posto di uno zoo di fogli di calcolo. La direzione vede tutto senza report settimanali." },
        { t: "Soluzioni cloud",
          lead: "Migrazione su Amazon Web Services, completa o per parti.",
          body: "Il cloud non è sempre più economico di un server proprio. Conviene quando il carico ha picchi, serve tolleranza ai guasti o un ambiente pronto in pochi minuti. Prima audit e stima, poi la migrazione per passi, con un piano di rollback per ognuno.",
          inc: ["audit e stima dei costi", "architettura AWS, piano di migrazione", "server, database, file", "backup e monitoraggio", "ottimizzazione dei costi"],
          res: "Un server guasto non è un dramma; la fattura del cloud è chiara." },
        { t: "Infrastruttura aziendale su Red Hat", s: "Infrastruttura su Red Hat",
          lead: "I server dell'azienda su Red Hat: Red Hat Enterprise Linux, OpenShift, Ansible.",
          body: "Si sceglie Red Hat quando l'infrastruttura deve vivere per anni, superare gli audit e non dipendere dalla memoria di un solo amministratore. La sottoscrizione garantisce il supporto del produttore e dieci anni di ciclo di vita di RHEL. Le impostazioni dei server sono scritte in Ansible: ogni server si ricostruisce da un playbook. Red Hat è nostro partner: La aiutiamo anche con le sottoscrizioni.",
          inc: ["audit dei server e piano di migrazione", "RHEL con aggiornamenti tramite Red Hat Satellite", "OpenShift per le Sue applicazioni", "automazione con Ansible", "Identity Management: accessi in un unico punto", "monitoraggio, backup, documentazione"],
          res: "Un'infrastruttura che si può verificare, riprodurre e passare a un altro team senza perdite." },
        { t: "API e integrazioni",
          lead: "API per i Suoi sistemi, collegate ai servizi che usa già.",
          body: "Il problema più comune è il doppio inserimento: ordini dal sito ridigitati a mano, pagamenti verificati su un foglio di calcolo. L'integrazione elimina lavoro ed errori. Il monitoraggio è d'obbligo: un partner cambia la sua API e il collegamento si rompe in silenzio.",
          inc: ["progettazione e documentazione delle API", "pagamenti, spedizioni, CRM, contabilità", "scambio dati tra i Suoi sistemi", "code e nuovi tentativi in caso di errore", "monitoraggio e avvisi"],
          res: "Inseriti una volta, i dati arrivano da soli." },
        { t: "Supporto tecnico",
          lead: "Supporto ed evoluzione dei Suoi sistemi. Anche di quelli che non abbiamo scritto noi.",
          body: "Supporto significa anche aggiornamenti di sicurezza, un monitoraggio che si accorge del guasto prima degli utenti e piccoli miglioramenti. Con un sistema ereditato si parte da audit e documentazione, altrimenti ogni modifica è una lotteria.",
          inc: ["monitoraggio di disponibilità ed errori", "correzioni e aggiornamenti", "backup e test di ripristino", "miglioramenti pianificati", "audit di sistemi ereditati"],
          res: "Il sistema funziona, il team sa come è fatto." }
      ]
    }
  };

  /* Рядки, потрібні лише версії Apple II */
  const APL = {
    uk: {
      menu: ["Про компанію", "Послуги", "Партнери", "Контакти", "Мова", "Монітор", "Вихід у BASIC"],
      langName: "українська",
      monitors: { color: "кольоровий ТВ", green: "зелений", amber: "бурштиновий" },
      select: (n) => `Виберіть (1-${n}) ?`,
      escMenu: "ESC - меню",
      back: "ESC - назад",
      more: "RETURN - далі",
      prevNext: "<- -> інша послуга",
      discussKey: "M - обговорити задачу",
      mailKey: "M - написати листа",
      pressReturn: "Натисніть RETURN",
      basicHint: ["Введіть RUN або натисніть ESC,", "щоб повернутися до меню.", "", "Команди: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Торкніться екрана, щоб вводити.",
      site: "Класична версія сайту"
    },
    en: {
      menu: ["About the company", "Services", "Partners", "Contacts", "Language", "Monitor", "Exit to BASIC"],
      langName: "English",
      monitors: { color: "colour TV", green: "green", amber: "amber" },
      select: (n) => `Select (1-${n}) ?`,
      escMenu: "ESC - menu",
      back: "ESC - back",
      more: "RETURN - more",
      prevNext: "<- -> other service",
      discussKey: "M - discuss your project",
      mailKey: "M - write an email",
      pressReturn: "Press RETURN",
      basicHint: ["Type RUN or press ESC", "to return to the menu.", "", "Commands: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Tap the screen to type.",
      site: "Classic version of the site"
    },
    ru: {
      menu: ["О компании", "Услуги", "Партнёры", "Контакты", "Язык", "Монитор", "Выход в BASIC"],
      langName: "русский",
      monitors: { color: "цветной ТВ", green: "зелёный", amber: "янтарный" },
      select: (n) => `Выберите (1-${n}) ?`,
      escMenu: "ESC - меню",
      back: "ESC - назад",
      more: "RETURN - далее",
      prevNext: "<- -> другая услуга",
      discussKey: "M - обсудить задачу",
      mailKey: "M - написать письмо",
      pressReturn: "Нажмите RETURN",
      basicHint: ["Введите RUN или нажмите ESC,", "чтобы вернуться в меню.", "", "Команды: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Коснитесь экрана, чтобы вводить.",
      site: "Классическая версия сайта"
    },
    de: {
      menu: ["Über das Unternehmen", "Leistungen", "Partner", "Kontakt", "Sprache", "Monitor", "Weiter in BASIC"],
      langName: "Deutsch",
      monitors: { color: "Farbfernseher", green: "grün", amber: "bernsteinfarben" },
      select: (n) => `Ihre Wahl (1-${n}) ?`,
      escMenu: "ESC - Menü",
      back: "ESC - zurück",
      more: "RETURN - weiter",
      prevNext: "<- -> andere Leistung",
      discussKey: "M - Projekt besprechen",
      mailKey: "M - E-Mail schreiben",
      pressReturn: "Drücken Sie RETURN",
      basicHint: ["Geben Sie RUN ein oder drücken Sie ESC,", "um zum Menü zurückzukehren.", "", "Befehle: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Zum Tippen den Bildschirm berühren.",
      site: "Klassische Website"
    },
    fr: {
      menu: ["À propos de l'entreprise", "Services", "Partenaires", "Contact", "Langue", "Moniteur", "Passer en BASIC"],
      langName: "français",
      monitors: { color: "TV couleur", green: "vert", amber: "ambre" },
      select: (n) => `Votre choix (1-${n}) ?`,
      escMenu: "ESC - menu",
      back: "ESC - retour",
      more: "RETURN - suite",
      prevNext: "<- -> autre service",
      discussKey: "M - parler de votre projet",
      mailKey: "M - écrire un e-mail",
      pressReturn: "Appuyez sur RETURN",
      basicHint: ["Tapez RUN ou appuyez sur ESC", "pour revenir au menu.", "", "Commandes : RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Touchez l'écran pour taper.",
      site: "Site classique"
    },
    es: {
      menu: ["Acerca de la empresa", "Servicios", "Socios", "Contacto", "Idioma", "Monitor", "Salir a BASIC"],
      langName: "español",
      monitors: { color: "TV en color", green: "verde", amber: "ámbar" },
      select: (n) => `Elija (1-${n}) ?`,
      escMenu: "ESC - menú",
      back: "ESC - volver",
      more: "RETURN - seguir",
      prevNext: "<- -> otro servicio",
      discussKey: "M - hablar de su proyecto",
      mailKey: "M - escribir un correo",
      pressReturn: "Pulse RETURN",
      basicHint: ["Escriba RUN o pulse ESC", "para volver al menú.", "", "Órdenes: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Toque la pantalla para escribir.",
      site: "Sitio clásico"
    },
    pt: {
      menu: ["Sobre a empresa", "Serviços", "Parceiros", "Contactos", "Idioma", "Monitor", "Sair para o BASIC"],
      langName: "português",
      monitors: { color: "TV a cores", green: "verde", amber: "âmbar" },
      select: (n) => `Escolha (1-${n}) ?`,
      escMenu: "ESC - menu",
      back: "ESC - voltar",
      more: "RETURN - continuar",
      prevNext: "<- -> outro serviço",
      discussKey: "M - falar do seu projeto",
      mailKey: "M - escrever um e-mail",
      pressReturn: "Prima RETURN",
      basicHint: ["Escreva RUN ou prima ESC", "para voltar ao menu.", "", "Comandos: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Toque no ecrã para escrever.",
      site: "Site clássico"
    },
    it: {
      menu: ["Informazioni sull'azienda", "Servizi", "Partner", "Contatti", "Lingua", "Monitor", "Uscita al BASIC"],
      langName: "italiano",
      monitors: { color: "TV a colori", green: "verde", amber: "ambra" },
      select: (n) => `Selezionare (1-${n}) ?`,
      escMenu: "ESC - menu",
      back: "ESC - indietro",
      more: "RETURN - avanti",
      prevNext: "<- -> altro servizio",
      discussKey: "M - parliamo del progetto",
      mailKey: "M - scrivere un'e-mail",
      pressReturn: "Premere RETURN",
      basicHint: ["Digitare RUN o premere ESC", "per tornare al menu.", "", "Comandi: RUN CATALOG LIST HOME HGR", "BLOAD TITLE.PIC PRINT PR#6", "NC DOS UNIX LISA LINUX MC WIN AI"],
      touchHint: "Toccare lo schermo per digitare.",
      site: "Sito classico"
    }
  };

  /* Мови та їхній порядок — зі спільного AIC.langs; лишаємо ті, для яких є тексти */
  const LANGS = ((window.AIC && AIC.langs) || Object.keys(I18N)).filter((l) => I18N[l] && SVC[l] && APL[l]);
  const LANG_NAMES = (window.AIC && AIC.langNames) || {};
  const MONITORS = ["color", "green", "amber"];
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
  let monitor = store.get("aic-apple-monitor");
  if (!MONITORS.includes(monitor)) monitor = "color";

  const t = () => I18N[lang];
  const A = () => APL[lang];

  /* ---------- Відеопам'ять: 40×24 символи, HI-RES 320×192 ---------- */
  const W = 320, H = 192, COLS = 40, ROWS = 24;
  const canvas = $("scr");
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(W, H);
  const px = new Uint32Array(img.data.buffer);
  const rgb = (r, g, b) => ((255 << 24) | (b << 16) | (g << 8) | r) >>> 0;
  /* Чорний прозорий: світіння drop-shadow лягає лише навколо засвічених пікселів */
  const BLACK = 0;
  /* Палітра HI-RES: 1 зелений, 2 фіолетовий, 3 білий, 4 помаранчевий, 5 синій */
  const PAL = [BLACK, rgb(0x14, 0xF5, 0x3C), rgb(0xFF, 0x44, 0xFD), rgb(255, 255, 255), rgb(0xFF, 0x6A, 0x3C), rgb(0x14, 0xCF, 0xFD)];
  const FG = { color: rgb(255, 255, 255), green: rgb(0x33, 0xFF, 0x33), amber: rgb(0xFF, 0xB0, 0x00) };
  const GREEN = 1, VIOLET = 2, WHITE = 3, ORANGE = 4, BLUE = 5;

  const gcan = document.createElement("canvas");
  gcan.width = 8;
  gcan.height = 8;
  const gctx = gcan.getContext("2d", { willReadFrequently: true });
  const glyphs = new Map();
  function glyph(ch) {
    let bits = glyphs.get(ch);
    if (bits) return bits;
    gctx.clearRect(0, 0, 8, 8);
    gctx.fillStyle = "#fff";
    gctx.font = '8px "CGA Thin"';
    gctx.textBaseline = "alphabetic";
    gctx.fillText(ch, 0, 7);
    const d = gctx.getImageData(0, 0, 8, 8).data;
    bits = new Uint8Array(64);
    for (let i = 0; i < 64; i++) bits[i] = d[i * 4 + 3] > 100 ? 1 : 0;
    glyphs.set(ch, bits);
    return bits;
  }

  let cells = [];
  let gfx = "text";            // text | mixed | full
  const hgr = new Uint8Array(W * H);
  const shown = new Uint8Array(H);
  let cursor = null;
  let flashOn = true;
  let regions = [];

  const norm = (s) => String(s).replace(/[’ʼ]/g, "'").toLocaleUpperCase(lang);
  function cls() {
    cells = Array.from({ length: COLS * ROWS }, () => ({ ch: " ", a: 0 }));
    cursor = null;
    regions = [];
  }
  const keepCase = (s) => String(s).replace(/[’ʼ]/g, "'");
  function put(r, c, s, a = 0, keep = false) {
    for (const ch of keep ? keepCase(s) : norm(s)) {
      if (c >= COLS) break;
      if (r >= 0 && r < ROWS && c >= 0) cells[r * COLS + c] = { ch, a };
      c++;
    }
    return c;
  }
  function center(r, s, a = 0) {
    const n = [...norm(s)].length;
    return put(r, Math.max(0, Math.floor((COLS - n) / 2)), s, a);
  }
  function bar(r, left, right = "") {
    const l = norm(left), rt = norm(right);
    put(r, 0, (l + " ".repeat(Math.max(1, COLS - l.length - rt.length)) + rt).slice(0, COLS), 1);
  }
  function wrap(s, w, indent = "", keep = false) {
    const out = [];
    let cur = "";
    /* «Red Hat» не розриваємо між рядками */
    const src = (keep ? keepCase(s) : norm(s)).replace(/Red Hat/gi, (m) => m.replace(" ", "\u00A0"));
    for (let word of src.split(/[ \t\n]+/).filter(Boolean)) {
      while (word.length > w) { if (cur) { out.push(cur); cur = indent; } out.push(word.slice(0, w)); word = word.slice(w); }
      const room = cur ? cur.length + (cur.trim() ? 1 : 0) + word.length : word.length;
      if (room <= w) cur = cur && cur.trim() ? cur + " " + word : cur + word;
      else { out.push(cur); cur = indent + word; }
    }
    if (cur) out.push(cur);
    return out.map((l) => l.replace(/\u00A0/g, " "));
  }

  function render() {
    px.fill(BLACK);
    const fg = FG[monitor];
    const gRows = gfx === "text" ? 0 : gfx === "mixed" ? 160 : 192;
    for (let y = 0; y < gRows; y++) {
      if (!shown[y]) continue;
      for (let x = 0; x < W; x++) {
        const i = y * W + x;
        const c = hgr[i];
        if (!c) continue;
        const col = monitor === "color" ? PAL[c] : fg;
        px[i] = col;
        /* На кольоровому ТВ сусідній чорний піксель «підсвічується» кольором */
        if (monitor === "color" && c !== WHITE && x + 1 < W && !hgr[i + 1]) px[i + 1] = col;
      }
    }
    const tStart = gfx === "text" ? 0 : gfx === "mixed" ? 20 : ROWS;
    for (let r = tStart; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = cells[r * COLS + c];
        const inv = cell.a === 1 || (cell.a === 2 && flashOn) || (cursor && cursor.r === r && cursor.c === c && flashOn);
        const bits = glyph(cell.ch);
        for (let y = 0; y < 8; y++) {
          for (let x = 0; x < 8; x++) {
            if (bits[y * 8 + x] ^ (inv ? 1 : 0)) px[(r * 8 + y) * W + c * 8 + x] = fg;
          }
        }
      }
    }
    ctx.putImageData(img, 0, 0);
  }
  setInterval(() => { flashOn = !flashOn; render(); }, 300);

  /* ---------- HI-RES: кольори NTSC живуть лише на парних або непарних стовпцях ---------- */
  function setPx(x, y, c) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= W || y >= H) return;
    if ((c === GREEN || c === ORANGE) && x % 2 === 0) return;
    if ((c === VIOLET || c === BLUE) && x % 2 === 1) return;
    hgr[y * W + x] = c;
  }
  const fillRect = (x, y, w, h, c) => { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) setPx(i, j, c); };
  const frame = (x, y, w, h, c, t = 1) => { fillRect(x, y, w, t, c); fillRect(x, y + h - t, w, t, c); fillRect(x, y, t, h, c); fillRect(x + w - t, y, t, h, c); };
  function disc(cx, cy, r, c) {
    for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) if (x * x + y * y <= r * r) setPx(cx + x, cy + y, c);
  }
  function dashed(x0, y0, x1, y1, c) {
    const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    for (let i = 0; i <= n; i++) if (i % 8 < 4) { const x = x0 + (x1 - x0) * i / n; const y = y0 + (y1 - y0) * i / n; setPx(x, y, c); setPx(x + 1, y, c); }
  }
  function text(x, y, s, c) {
    for (const ch of s) {
      const b = glyph(ch);
      for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) if (b[j * 8 + i]) setPx(x + i, y + j, c);
      x += 8;
    }
  }

  const LOGO = {
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
  function logo(x0, y0, s, c) {
    let x = x0;
    for (const ch of "ARTINTELLICO") {
      const g = LOGO[ch];
      g.forEach((row, j) => [...row].forEach((v, i) => { if (v === "#") fillRect(x + i * s, y0 + j * s, s, s, c); }));
      x += (g[0].length + 1) * s;
    }
  }

  /* Титульна картинка: комп'ютер, з'єднаний із хмарою */
  function drawPicture() {
    hgr.fill(0);
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const lw = (56 + 11) * 4;
    const lx = Math.floor((W - lw) / 2);
    logo(lx + 2, 14, 4, ORANGE);
    logo(lx, 12, 4, WHITE);
    fillRect(lx, 40, lw, 1, VIOLET);
    fillRect(lx, 43, lw, 1, BLUE);

    /* Комп'ютер */
    frame(44, 62, 84, 58, WHITE, 2);
    fillRect(52, 69, 68, 44, BLUE);
    text(56, 74, "]RUN", WHITE);
    fillRect(56, 84, 8, 8, WHITE);
    fillRect(72, 120, 28, 6, WHITE);
    fillRect(34, 130, 104, 16, ORANGE);
    for (let ky = 0; ky < 3; ky++) for (let kx = 0; kx < 12; kx++) fillRect(38 + kx * 8, 132 + ky * 5, 6, 3, 0);

    /* Хмара */
    const cloud = [[226, 102, 16], [250, 90, 22], [276, 102, 15]];
    cloud.forEach(([x, y, r]) => disc(x, y, r + 2, VIOLET));
    fillRect(222, 102, 58, 18, VIOLET);
    cloud.forEach(([x, y, r]) => disc(x, y, r, WHITE));
    fillRect(226, 102, 50, 15, WHITE);

    dashed(130, 78, 208, 100, GREEN);

    for (let k = 0; k < 70; k++) {
      const x = Math.floor(rnd() * W), y = 50 + Math.floor(rnd() * 108);
      let free = true;
      for (let j = -3; j <= 3 && free; j++) for (let i = -3; i <= 3; i++) if (hgr[(y + j) * W + x + i]) { free = false; break; }
      if (free) hgr[y * W + x] = WHITE;
    }
  }

  /* BLOAD показує рядки в порядку адрес відеопам'яті Apple II: 0, 64, 128, 8, 72… */
  const addr = (y) => (y % 8) * 0x400 + (Math.floor(y / 8) % 8) * 0x80 + Math.floor(y / 64) * 0x28;
  const LOAD_ORDER = [...Array(H).keys()].sort((a, b) => addr(a) - addr(b));
  function bload(ms) {
    shown.fill(0);
    if (reduced || skipping) { shown.fill(1); render(); return Promise.resolve(); }
    return new Promise((resolve) => {
      const t0 = performance.now();
      const step = (now) => {
        const n = skipping ? H : Math.min(H, Math.floor(((now - t0) / ms) * H));
        for (let i = 0; i < n; i++) shown[LOAD_ORDER[i]] = 1;
        render();
        if (n < H) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------- Звук: короткий «біп» Apple II при помилці ---------- */
  let audio = null;
  function beep() {
    try {
      audio = audio || new AudioContext();
      const o = audio.createOscillator();
      const g = audio.createGain();
      o.type = "square";
      o.frequency.value = 1000;
      g.gain.value = 0.04;
      o.connect(g).connect(audio.destination);
      o.start();
      o.stop(audio.currentTime + 0.1);
    } catch { /* звук недоступний */ }
  }

  /* ---------- Програма ---------- */
  let mode = "boot";
  let menuSel = 0;
  let svcSel = 0;
  let page = null;
  const sr = (s) => { $("sr").textContent = s; };

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    document.title = t().title;
  }
  function setMonitor(m) {
    monitor = m;
    store.set("aic-apple-monitor", m);
    document.documentElement.dataset.monitor = m;
    render();
  }

  function title() {
    mode = "title";
    gfx = "mixed";
    cls();
    drawPicture();
    return bload(1600).then(() => {
      if (mode !== "title") return;
      /* Заголовок займає до трьох рядків (французький не вміщується у два) */
      wrap(t().heroTitle, 38).slice(0, 3).forEach((l, i) => center(20 + i, l));
      center(23, A().pressReturn, 2);
      render();
      sr(t().heroTitle + ". " + A().pressReturn);
    });
  }

  function menu() {
    mode = "menu";
    gfx = "text";
    cls();
    const a = A();
    bar(0, " ArtIntelliCo ][", lang + " ");
    wrap(t().heroTitle, 38).slice(0, 3).forEach((l, i) => put(2 + i, 1, l));
    const values = ["", "", "", "", a.langName, a.monitors[monitor], ""];
    a.menu.forEach((label, i) => {
      const s = ` ${i + 1}  ${label}${values[i] ? colon() + " " + values[i] : ""}`;
      put(5 + i * 2, 1, s.padEnd(38), i === menuSel ? 1 : 0);
      regions.push({ r: 5 + i * 2, act: () => { menuSel = i; choose(i); } });
    });
    const p = a.select(7);
    put(21, 1, p);
    cursor = { r: 21, c: 1 + norm(p).length };
    render();
    sr(a.menu.map((m, i) => `${i + 1}. ${m}${values[i] ? ": " + values[i] : ""}`).join(". "));
  }

  /* Вибір мови — такий самий нумерований список, як меню програми: цифра, стрілки й RETURN */
  let langSel = 0;
  const langName = (l) => LANG_NAMES[l] || APL[l].langName;
  function languages() {
    mode = "langs";
    gfx = "text";
    cls();
    const a = A();
    const step = LANGS.length > 9 ? 1 : 2;
    bar(0, " " + a.menu[4], lang + " ");
    LANGS.forEach((l, i) => {
      put(2 + i * step, 1, ` ${i + 1}  ${l.toUpperCase()}  ${langName(l)}`.padEnd(38), i === langSel ? 1 : 0);
      regions.push({ r: 2 + i * step, act: () => pickLang(i) });
    });
    const p = a.select(LANGS.length);
    put(21, 1, p);
    cursor = { r: 21, c: 1 + norm(p).length };
    put(23, 1, a.escMenu);
    regions.push({ r: 23, act: menu });
    render();
    sr(a.menu[4] + ": " + LANGS.map((l, i) => `${i + 1}. ${langName(l)}`).join(". "));
  }
  function pickLang(i) {
    langSel = i;
    setLang(LANGS[i]);
    menu();
  }

  function choose(i) {
    if (i === 0) readme();
    else if (i === 1) services();
    else if (i === 2) partners();
    else if (i === 3) contact();
    else if (i === 4) { langSel = Math.max(0, LANGS.indexOf(lang)); languages(); }
    else if (i === 5) { setMonitor(MONITORS[(MONITORS.indexOf(monitor) + 1) % MONITORS.length]); menu(); }
    else basic();
  }

  function services() {
    mode = "services";
    gfx = "text";
    cls();
    const a = A();
    const items = SVC[lang].items;
    bar(0, " " + a.menu[1], "1-" + items.length + " ");
    items.forEach((v, i) => {
      put(2 + i * 2, 0, `${String(i + 1).padStart(3)}  ${norm(v.s || v.t).slice(0, 33)}`.padEnd(39), i === svcSel ? 1 : 0);
      regions.push({ r: 2 + i * 2, act: () => { svcSel = i; service(i); } });
    });
    const p = a.select(items.length);
    put(21, 1, p);
    cursor = { r: 21, c: 1 + norm(p).length };
    put(23, 1, a.escMenu);
    regions.push({ r: 23, act: menu });
    render();
    sr(items.map((v, i) => `${i + 1}. ${v.t}`).join(". "));
  }

  /* Сторінка: заголовок, тіло з прокруткою по 18 рядків, підказки внизу */
  const BODY = 18;
  function showPage(p) {
    mode = "page";
    page = { offset: 0, ...p };
    drawPage();
    sr(p.plain);
  }
  function drawPage() {
    gfx = "text";
    cls();
    const a = A();
    const pages = Math.ceil(page.lines.length / BODY);
    const n = Math.floor(page.offset / BODY) + 1;
    bar(0, " " + page.title, (page.right || (pages > 1 ? `${n}/${pages}` : "")) + " ");
    page.lines.slice(page.offset, page.offset + BODY).forEach((l, i) => {
      put(2 + i, 1, l.t, 0, l.k);
      if (l.act) regions.push({ r: 2 + i, act: l.act });
    });
    const foot = [...(page.foot || [])];
    if (page.offset + BODY < page.lines.length) foot.unshift({ t: a.more, act: () => pageKey("Enter") });
    foot.push({ t: a.back, act: page.back });
    foot.slice(-4).forEach((f, i, arr) => {
      const r = ROWS - arr.length + i;
      put(r, 1, f.t);
      if (f.act) regions.push({ r, act: f.act });
    });
    render();
  }
  const L = (s, act, k = false) => ({ t: s, act, k });
  const block = (s, w = 38, indent = "") => wrap(s, w, indent).map((x) => L(x));
  const rule = (s) => L("-".repeat(Math.min(38, Math.max(...wrap(s, 38).map((x) => x.length)))));
  const pageUrl = (id) => (window.AIC && AIC.url ? AIC.url(id, lang) : `/${lang === "uk" ? "" : lang + "/"}${id}/`);
  const openSite = () => window.open(location.origin + pageUrl("classic"), "_blank", "noopener");
  /* Французька типографіка: нерозривний пробіл перед двокрапкою */
  const colon = () => (lang === "fr" ? "\u00A0:" : ":");
  const mailto = () => { location.href = AIC.mailto("mailto:" + EMAIL); };

  function readme() {
    const s = t();
    showPage({
      title: A().menu[0],
      lines: [
        ...block(s.heroTitle), rule(s.heroTitle), L(""),
        ...block(s.heroText), L(""),
        L(norm(s.heroLead) + colon()),
        ...s.phrases.flatMap((p) => block("- " + p, 38, "  ")), L(""),
        ...block(s.copyright), ...block(s.legal), ...block(s.slogan),
        ...wrap(A().site + colon() + " artintellico.com", 38).map((x) => L(x, openSite))
      ],
      back: menu,
      plain: [s.heroTitle, s.heroText, s.heroLead + ": " + s.phrases.join(", "), s.copyright, s.legal, s.slogan].join(" ")
    });
  }

  /* Послуга — розпечатка LIST: REM-рядки по 30 символів тексту, заголовки капсом */
  function listing(v) {
    const [incL, resL] = SVC[lang].labels;
    const W = 30;
    const up = (x) => x.toLocaleUpperCase(lang);
    const out = [L("]LIST")];
    let n = 100;
    const rem = (x = "") => { out.push(L(`${n} REM ${x}`.trimEnd(), null, true)); n += 10; };
    rem("*".repeat(W));
    wrap(up(v.t), W, "", true).forEach((x) => rem(x));
    rem("*".repeat(W));
    rem();
    wrap(v.lead, W, "", true).forEach((x) => rem(x));
    rem();
    wrap(v.body, W, "", true).forEach((x) => rem(x));
    rem();
    rem("--- " + up(incL) + " ---");
    v.inc.forEach((x) => wrap("- " + x, W, "  ", true).forEach((y) => rem(y)));
    rem();
    rem("--- " + up(resL) + " ---");
    wrap(v.res, W, "", true).forEach((x) => rem(x));
    out.push(L(`${n} END`));
    return out;
  }

  function service(i) {
    const a = A();
    const { labels, items } = SVC[lang];
    const N = items.length;
    const v = items[i];
    svcSel = i;
    showPage({
      title: `${a.menu[1]} ${i + 1}/${N}`,
      lines: listing(v),
      foot: [
        { t: a.discussKey, act: contact },
        { t: a.prevNext, act: () => service((i + 1) % N) }
      ],
      back: services,
      /* ↑↓ гортають сторінки розпечатки, ← → — інша послуга */
      keys: {
        ArrowLeft: () => service((i + N - 1) % N),
        ArrowRight: () => service((i + 1) % N),
        KeyM: contact
      },
      plain: [v.t + ".", v.lead, v.body, labels[0] + ": " + v.inc.join("; ") + ".", labels[1] + ": " + v.res].join(" ")
    });
  }

  function partners() {
    const s = t();
    showPage({
      title: A().menu[2],
      lines: [
        ...block(s.partnersTitle), rule(s.partnersTitle), L(""),
        ...PARTNERS.map((p) => L("- " + p, p === "UNIO24" ? () => window.open("https://unio24.com/", "_blank", "noopener") : null))
      ],
      back: menu,
      plain: s.partnersTitle + ": " + PARTNERS.join(", ")
    });
  }

  function contact() {
    const s = t();
    showPage({
      title: A().menu[3],
      lines: [
        ...block(s.contactTitle), rule(s.contactTitle), L(""),
        ...block(s.contactText), L(""),
        L(norm(s.emailLabel) + colon()),
        L(EMAIL, mailto)
      ],
      foot: [{ t: A().mailKey, act: mailto }],
      back: menu,
      keys: { KeyM: mailto },
      plain: [s.contactTitle, s.contactText, s.emailLabel + ": " + EMAIL].join(" ")
    });
  }

  function pageKey(key, code) {
    const k = page.keys || {};
    if (k[key]) return k[key]();
    if (code && k[code]) return k[code]();
    if (key === "Escape" || key === "Backspace") return page.back();
    if (key === "Enter") {
      if (page.offset + BODY < page.lines.length) { page.offset += BODY; drawPage(); }
      else page.back();
    }
    if (key === "ArrowDown" && page.offset + BODY < page.lines.length) { page.offset += BODY; drawPage(); }
    if (key === "ArrowUp" && page.offset > 0) { page.offset -= BODY; drawPage(); }
  }

  /* ---------- Applesoft BASIC ---------- */
  let term = [];
  let line = "";
  function println(s = "") {
    const n = norm(s);
    if (!n) { term.push(""); return; }
    for (let i = 0; i < n.length; i += COLS) term.push(n.slice(i, i + COLS));
  }
  function basic() {
    mode = "basic";
    gfx = "text";
    term = [];
    line = "";
    println("");
    A().basicHint.forEach((h) => println(h));
    if (coarse) { println(""); println(A().touchHint); }
    println("");
    drawBasic();
    sr(A().basicHint.join(" "));
  }
  function drawBasic() {
    cls();
    const shownLine = "]" + line.slice(-(COLS - 2));
    const view = [...term, shownLine].slice(-ROWS);
    view.forEach((l, i) => put(i, 0, l));
    cursor = { r: view.length - 1, c: Math.min(COLS - 1, shownLine.length) };
    render();
  }

  const CATALOG = () => {
    const sectors = (s) => String(Math.ceil(new TextEncoder().encode(s).length / 256) + 1).padStart(3, "0");
    const s = t();
    return [
      "", "DISK VOLUME 254", "",
      "*A 002 HELLO",
      "*B 034 ARTINTEL",
      " T " + sectors([s.heroTitle, s.heroText, ...s.phrases].join("\n")) + " README",
      " T " + sectors(SVC[lang].items.map((v) => [v.t, v.lead, v.body, ...v.inc, v.res].join("\n")).join("\n")) + " SERVICES",
      " T " + sectors(PARTNERS.join("\n")) + " PARTNERS",
      " T " + sectors(s.contactText + EMAIL) + " CONTACT",
      "*B 034 TITLE.PIC", ""
    ];
  };
  const LISTING = [
    "10  HOME : HGR : PRINT CHR$ (4)\"BLOAD TITLE.PIC\"",
    "20  GET K$: TEXT : HOME",
    "30  PRINT \"ARTINTELLICO ][\"",
    "40  FOR I = 1 TO 7: READ M$(I)",
    "50  PRINT I;\"  \";M$(I): NEXT",
    "60  INPUT \"SELECT (1-7) ?\";C",
    "70  ON C GOSUB 100,200,300,400,500,600,700",
    "80  GOTO 20",
    "100  PRINT CHR$ (4)\"TYPE README\": RETURN",
    "200  PRINT CHR$ (4)\"TYPE SERVICES\": RETURN",
    "300  PRINT CHR$ (4)\"TYPE PARTNERS\": RETURN",
    "400  PRINT CHR$ (4)\"TYPE CONTACT\": RETURN",
    `500  INPUT "LANGUAGE (1-${LANGS.length}) ?";L`,
    "510  RETURN",
    "600  M = M + 1: IF M > 3 THEN M = 1",
    "610  RETURN",
    "700  END",
    "900  DATA ABOUT,SERVICES,PARTNERS",
    "910  DATA CONTACT,LANGUAGE,MONITOR,BASIC"
  ];

  function exec() {
    const raw = line;
    term.push("]" + norm(raw).slice(0, COLS - 1));
    line = "";
    const cmd = norm(raw).trim();
    const go = (id) => { drawBasic(); setTimeout(() => { location.href = pageUrl(id); }, 300); };
    if (!cmd) return drawBasic();
    if (/^RUN( HELLO| ARTINTEL)?$/.test(cmd)) return menu();
    if (cmd === "HOME") { term = []; return drawBasic(); }
    if (cmd === "CATALOG") { CATALOG().forEach(println); return drawBasic(); }
    if (cmd === "LIST") { LISTING.forEach(println); println(""); return drawBasic(); }
    if (cmd === "TEXT") return drawBasic();
    if (cmd === "HGR") { mode = "hgr"; gfx = "full"; drawPicture(); shown.fill(1); render(); return; }
    if (/^BLOAD\s+TITLE(\.PIC)?$/.test(cmd)) { mode = "hgr"; gfx = "full"; drawPicture(); bload(2200); return; }
    if (cmd === "PR#6" || cmd === "REBOOT") return boot();
    if (cmd === "NC") return go("nc");
    if (cmd === "DOS") return go("dos");
    if (cmd === "UNIX") return go("unix");
    if (cmd === "LISA") return go("lisa");
    if (cmd === "LINUX") return go("linux");
    if (cmd === "MC") return go("mc");
    if (cmd === "WIN") return go("win31");
    if (cmd === "AI") return go("ai");
    if (cmd === "HELP") { A().basicHint.slice(3).forEach(println); return drawBasic(); }
    const m = /^(PRINT|\?)\s*(.*)$/.exec(cmd);
    if (m) {
      const arg = m[2];
      if (!arg) println("");
      else if (/^".*"?$/.test(arg)) println(arg.replace(/^"|"$/g, ""));
      else if (/^[\d\s+\-*/().]+$/.test(arg)) {
        let v;
        try { v = Function(`"use strict";return (${arg})`)(); } catch { v = NaN; }
        if (Number.isFinite(v)) println(" " + String(Math.round(v * 1e9) / 1e9));
        else { println("?SYNTAX ERROR"); beep(); }
      } else { println("?SYNTAX ERROR"); beep(); }
      return drawBasic();
    }
    println("?SYNTAX ERROR");
    beep();
    drawBasic();
  }

  /* ---------- Завантаження ---------- */
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((resolve) => {
    if (skipping || reduced) return resolve();
    const id = setTimeout(resolve, ms);
    waiters.push(() => { clearTimeout(id); resolve(); });
  });
  const skip = () => { skipping = true; waiters.splice(0).forEach((f) => f()); };

  async function boot() {
    mode = "boot";
    skipping = false;
    gfx = "text";
    const junk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@[]^_!\"#$%&'()*+,-./0123456789:;<=>?";
    for (let k = 0; k < 2 && !skipping && !reduced; k++) {
      cls();
      cells = cells.map(() => ({ ch: junk[Math.floor(Math.random() * junk.length)], a: Math.floor(Math.random() * 3) }));
      render();
      await sleep(200);
    }
    cls();
    center(0, "ArtIntelliCo ][");
    render();
    await sleep(1100);
    cls();
    put(0, 0, "DOS VERSION 3.3  ARTINTELLICO MASTER");
    center(3, new Date().toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" }));
    put(5, 0, "COPYRIGHT ARTINTELLICO LLC 1987-2026");
    put(7, 0, "]");
    render();
    await sleep(700);
    let c = 1;
    for (const ch of "RUN HELLO") {
      put(7, c++, ch);
      cursor = { r: 7, c };
      render();
      await sleep(90);
    }
    await sleep(350);
    store.set("aic-apple-booted", "1", sessionStorage);
    await title();
    skipping = false;
  }

  /* ---------- Введення ---------- */
  function handleKey(key, code = "") {
    if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(key)) return false;
    if (mode === "boot") { skip(); return true; }
    if (mode === "title") { menu(); return true; }
    if (mode === "hgr") { mode = "basic"; gfx = "text"; drawBasic(); return true; }
    if (mode === "menu") {
      if (key === "ArrowUp" || key === "ArrowLeft") { menuSel = (menuSel + 6) % 7; menu(); }
      else if (key === "ArrowDown" || key === "ArrowRight") { menuSel = (menuSel + 1) % 7; menu(); }
      else if (key === "Enter") choose(menuSel);
      else if (/^[1-7]$/.test(key)) { menuSel = Number(key) - 1; choose(menuSel); }
      else return false;
      return true;
    }
    if (mode === "langs") {
      const N = LANGS.length;
      if (key === "ArrowUp" || key === "ArrowLeft") { langSel = (langSel + N - 1) % N; languages(); }
      else if (key === "ArrowDown" || key === "ArrowRight") { langSel = (langSel + 1) % N; languages(); }
      else if (key === "Enter") pickLang(langSel);
      else if (/^[1-9]$/.test(key) && Number(key) <= N) pickLang(Number(key) - 1);
      else if (key === "Escape" || key === "Backspace") menu();
      else return false;
      return true;
    }
    if (mode === "services") {
      const N = SVC[lang].items.length;
      if (key === "ArrowUp" || key === "ArrowLeft") { svcSel = (svcSel + N - 1) % N; services(); }
      else if (key === "ArrowDown" || key === "ArrowRight") { svcSel = (svcSel + 1) % N; services(); }
      else if (key === "Enter") service(svcSel);
      else if (/^[0-9]$/.test(key)) service((Number(key) + 9) % 10);
      else if (key === "Escape" || key === "Backspace") menu();
      else return false;
      return true;
    }
    if (mode === "page") { pageKey(key, code); return true; }
    if (mode === "basic") {
      if (key === "Enter") exec();
      else if (key === "Escape") menu();
      else if (key === "Backspace" || key === "ArrowLeft") { line = line.slice(0, -1); drawBasic(); }
      else if (key.length === 1) { if (line.length < 239) line += key; drawBasic(); }
      else return false;
      return true;
    }
    return false;
  }

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target === $("kbd") && (e.key.length === 1 || e.key === "Unidentified" || e.key === "Process")) return;
    if (handleKey(e.key, e.code)) e.preventDefault();
  });
  $("kbd").addEventListener("input", () => {
    const v = $("kbd").value;
    $("kbd").value = "";
    if (mode !== "basic") return;
    for (const ch of v) handleKey(ch);
  });
  $("keys").addEventListener("click", (e) => {
    const b = e.target.closest("[data-key]");
    if (b) handleKey(b.dataset.key);
  });

  function cellAt(e) {
    const r = canvas.getBoundingClientRect();
    return { row: Math.floor(((e.clientY - r.top) / r.height) * ROWS), col: Math.floor(((e.clientX - r.left) / r.width) * COLS) };
  }
  canvas.addEventListener("click", (e) => {
    if (mode === "boot") return skip();
    if (mode === "title") return menu();
    if (mode === "hgr") return handleKey("Escape");
    if (mode === "basic") { if (coarse) $("kbd").focus(); return; }
    const { row } = cellAt(e);
    const hit = regions.find((g) => g.r === row);
    if (hit) hit.act();
  });
  canvas.addEventListener("mousemove", (e) => {
    const { row } = cellAt(e);
    const clickable = mode === "title" || mode === "boot" || regions.some((g) => g.r === row);
    canvas.style.cursor = clickable ? "pointer" : "default";
  });

  /* ---------- Старт ---------- */
  setLang(lang);
  document.documentElement.dataset.monitor = monitor;
  cls();
  document.fonts.load('8px "CGA Thin"').finally(() => {
    glyphs.clear();
    if (reduced || store.get("aic-apple-booted", sessionStorage)) title();
    else boot();
  });
})();
