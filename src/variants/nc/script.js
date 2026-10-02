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
        "  LANG UK|EN|RU   змінити мову",
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
        "  LANG UK|EN|RU   switch language",
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
        "  LANG UK|EN|RU   сменить язык",
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
  const LANGS = ["uk", "en", "ru"];

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
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
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
  function cycleLang() { setLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]); }
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
  function openModes() {
    if (!modes.open) modes.showModal();
    (modes.querySelector("[aria-current]") || modes.querySelector("a")).focus();
  }
  $("modesCancel").addEventListener("click", () => modes.close());
  modes.addEventListener("click", (e) => { if (e.target === modes) modes.close(); });
  modes.addEventListener("close", () => { if (!coarse) $("cmd").focus(); });
  modes.addEventListener("keydown", (e) => {
    const nav = { ArrowUp: -1, ArrowDown: 1, ArrowLeft: -1, ArrowRight: 1 };
    const items = [...modes.querySelectorAll("a, button")];
    const k = items.indexOf(document.activeElement);
    if (e.key in nav) items[(k + nav[e.key] + items.length) % items.length].focus();
    else if (e.key === "Home") items[0].focus();
    else if (e.key === "End") items[items.length - 1].focus();
    else return;
    e.preventDefault();
  });
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
      if (!setLang(arg.toLowerCase())) { print("LANG UK|EN|RU", ""); showConsole(true); }
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
      case 2: cycleLang(); break;
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
  $("langGroup").addEventListener("click", (e) => { const b = e.target.closest("[data-lang]"); if (b) setLang(b.dataset.lang); });
  $("monitorBtn").addEventListener("click", cycleMonitor);

  document.addEventListener("pointerdown", () => { if (booting) skipBoot(); });
  document.addEventListener("keydown", (e) => {
    if (booting) { e.preventDefault(); skipBoot(); return; }
    if (dlg.open || modes.open) return;

    const fm = /^F(\d{1,2})$/.exec(e.key);
    if (fm) {
      const n = Number(fm[1]);
      if ([1, 2, 3, 4, 5, 9, 10].includes(n)) { e.preventDefault(); fkey(n); }
      return;
    }
    if (e.ctrlKey && (e.key === "o" || e.key === "O" || e.key === "щ" || e.key === "Щ")) {
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
