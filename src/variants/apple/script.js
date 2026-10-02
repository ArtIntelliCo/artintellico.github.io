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
        "  LANG UK|EN|RU   змінити мову",
        "  COLOR           змінити монітор",
        "  CLS             очистити екран",
        "  VER             версія",
        "  BOOT            перезавантажити",
        "  NC              повернутися до панелей",
        "  COMMAND         консольний режим",
        "  UNIX            термінал UNIX",
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
        "  LANG UK|EN|RU   switch language",
        "  COLOR           switch monitor",
        "  CLS             clear screen",
        "  VER             version",
        "  BOOT            reboot",
        "  NC              back to the panels",
        "  COMMAND         console mode",
        "  UNIX            UNIX terminal",
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
        "  LANG UK|EN|RU   сменить язык",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "  COMMAND         консольный режим",
        "  UNIX            терминал UNIX",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
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
    }
  };

  const LANGS = ["uk", "en", "ru"];
  const MONITORS = ["color", "green", "amber"];
  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;

  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || (nav.startsWith("ru") ? "ru" : nav.startsWith("uk") ? "uk" : nav.startsWith("en") ? "en" : "uk");
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
      const lines = wrap(t().heroTitle, 38);
      center(20, lines[0] || "");
      center(21, lines[1] || "");
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
    wrap(t().heroTitle, 38).slice(0, 2).forEach((l, i) => put(2 + i, 1, l));
    const values = ["", "", "", "", a.langName, a.monitors[monitor], ""];
    a.menu.forEach((label, i) => {
      const s = ` ${i + 1}  ${label}${values[i] ? ": " + values[i] : ""}`;
      put(5 + i * 2, 1, s.padEnd(38), i === menuSel ? 1 : 0);
      regions.push({ r: 5 + i * 2, act: () => { menuSel = i; choose(i); } });
    });
    const p = a.select(7);
    put(21, 1, p);
    cursor = { r: 21, c: 1 + norm(p).length };
    render();
    sr(a.menu.map((m, i) => `${i + 1}. ${m}${values[i] ? ": " + values[i] : ""}`).join(". "));
  }

  function choose(i) {
    if (i === 0) readme();
    else if (i === 1) services();
    else if (i === 2) partners();
    else if (i === 3) contact();
    else if (i === 4) { setLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]); menu(); }
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
  const openSite = () => window.open(`${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/`, "_blank", "noopener");
  const mailto = () => { location.href = AIC.mailto("mailto:" + EMAIL); };

  function readme() {
    const s = t();
    showPage({
      title: A().menu[0],
      lines: [
        ...block(s.heroTitle), rule(s.heroTitle), L(""),
        ...block(s.heroText), L(""),
        L(norm(s.heroLead) + ":"),
        ...s.phrases.flatMap((p) => block("- " + p, 38, "  ")), L(""),
        ...block(s.copyright), ...block(s.legal), ...block(s.slogan),
        L(A().site + ": artintellico.com", openSite)
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
        L(norm(s.emailLabel) + ":"),
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
    "500  L = L + 1: IF L > 3 THEN L = 1",
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
    const go = (url) => { drawBasic(); setTimeout(() => { location.href = url; }, 300); };
    if (!cmd) return drawBasic();
    if (/^RUN( HELLO| ARTINTEL)?$/.test(cmd)) return menu();
    if (cmd === "HOME") { term = []; return drawBasic(); }
    if (cmd === "CATALOG") { CATALOG().forEach(println); return drawBasic(); }
    if (cmd === "LIST") { LISTING.forEach(println); println(""); return drawBasic(); }
    if (cmd === "TEXT") return drawBasic();
    if (cmd === "HGR") { mode = "hgr"; gfx = "full"; drawPicture(); shown.fill(1); render(); return; }
    if (/^BLOAD\s+TITLE(\.PIC)?$/.test(cmd)) { mode = "hgr"; gfx = "full"; drawPicture(); bload(2200); return; }
    if (cmd === "PR#6" || cmd === "REBOOT") return boot();
    if (cmd === "NC") return go("/");
    if (cmd === "DOS") return go("/dos/");
    if (cmd === "UNIX") return go("/unix/");
    if (cmd === "LISA") return go("/lisa/");
    if (cmd === "LINUX") return go("/linux/");
    if (cmd === "MC") return go("/mc/");
    if (cmd === "WIN") return go("/win31/");
    if (cmd === "AI") return go("/ai/");
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
