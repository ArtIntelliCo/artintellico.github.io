(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

  /* Тексти сайту. services — відповіді агента: name, card (картка), say (суть), inc (що входить), caveat (чесна оговорка), q (уточнювальне питання) */
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
      services: [
        { name: "Розробка концепції ІТ рішення",
          card: "Розбираємося, що має робити система, і перетворюємо це на вимоги, зрозумілі і бізнесу, і розробникам.",
          say: "Тут ми ще нічого не програмуємо. Спершу говоримо з людьми, які працюватимуть із системою, — бухгалтерією, складом, менеджерами, не лише з керівником, — і з'ясовуємо, яку задачу вона насправді має розв'язати.",
          inc: ["інтерв'ю й розбір поточних процесів", "бізнес-вимоги та сценарії", "порівняння: готове рішення чи розробка", "ТЗ з оцінкою строків і бюджету по етапах"],
          caveat: "Чесно попереджу: буває, що за підсумком ми радимо нічого не розробляти, а взяти готовий продукт і доналаштувати. Документ на виході такий, що з ним може працювати будь-яка команда, не обов'язково наша.",
          q: "У вас уже є якийсь опис задачі чи поки лише відчуття, що «так далі не можна»?" },
        { name: "Розробка SaaS рішень",
          card: "SaaS-платформи: від першої версії для пілотних клієнтів до сервісу з кабінетами, тарифами й підписками.",
          say: "Беремося за SaaS від першої версії для пілотних клієнтів до сервісу, де в кожного клієнта свій простір, тариф і кабінет. Головне тут — щоб новий клієнт сам зареєструвався, оплатив і почав працювати, не дзвонячи в підтримку.",
          inc: ["ізоляція даних кожного клієнта", "реєстрація, тарифи, підписки, оплата", "кабінети, ролі, права доступу", "інтеграції та відкритий API", "масштабування під навантаження"],
          caveat: "Мультитенантність і білінг краще закласти з першого дня: переробляти їх, коли клієнти вже всередині, в рази дорожче. А з першою версією не варто тягнути — живі користувачі швидко покажуть, які функції зайві.",
          q: "У вас уже є пілотні клієнти чи продукт поки на рівні ідеї?" },
        { name: "Web-розробка",
          card: "Корпоративні сайти, маркетплейси, магазини, бронювання й внутрішні вебсервіси — з аналітикою від запуску.",
          say: "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси. Але спершу домовимося, що вважати результатом, і аналітику ввімкнемо ще до запуску, а не через пів року.",
          inc: ["прототип і дизайн", "frontend, backend, адмінка", "оплата, доставка, CRM, облік", "SEO-основа, швидкість, аналітика", "запуск і супровід"],
          caveat: "Технологію підбираємо під задачу, а не навпаки: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не вміститься.",
          q: "Що для вас буде ознакою, що сайт працює: заявки, продажі чи щось інше?" },
        { name: "Мобільні застосунки",
          card: "Застосунки для iOS та Android разом із сервером і адмінкою — коли вони справді потрібні.",
          say: "Робимо застосунки для iOS і Android разом із серверною частиною та адмінкою, а потім публікуємо їх у App Store і Google Play.",
          inc: ["iOS та Android", "сервер і API", "адмінка для контенту, замовлень, користувачів", "push-сповіщення й аналітика", "публікація в магазинах"],
          caveat: "Але застосунок потрібен не завжди. Він виправданий, коли клієнт повертається регулярно: замовляє повторно, стежить за статусом, збирає бонуси. Якщо до вас заходять раз на рік, хороший мобільний сайт вийде дешевше, і я б почав із нього. Нативно чи кросплатформно — вирішимо за бюджетом і за тим, чи потрібні камера, геолокація й офлайн.",
          q: "Як часто ваші клієнти мали б відкривати цей застосунок?" },
        { name: "Рішення зі штучним інтелектом",
          card: "Автоматизація бізнес-процесів ШІ-агентами: заявки, CRM, відповіді клієнтам, документи.",
          say: "Головне тут — ШІ-агенти, які самі виконують рутинні кроки процесу: розбирають заявки, заповнюють CRM, готують відповіді клієнтам. Людина при цьому перевіряє й вирішує. Я, до речі, простий приклад такого агента: розбираю ваш запит, підбираю напрями й складаю бриф, а надсилаєте його ви.",
          inc: ["ШІ-агенти для рутинних кроків процесу", "чат-боти й асистенти", "розбір документів", "класифікація звернень, пошук у базі знань", "прогноз попиту, аналіз даних", "пілот із заміром якості на ваших даних"],
          caveat: "Скажу прямо: половину ідей «додаймо нейромережу» закриває звичайна автоматизація, без жодного ШІ, і тоді ми так і порадимо. А там, де модель справді потрібна, починаємо з пілота на ваших даних, щоб точність була відома до основної розробки.",
          q: "Яку роботу у вас зараз люди годинами роблять руками — листи, документи, звернення?" },
        { name: "Розробка CRM та ERP",
          card: "CRM та ERP під ваші процеси: продажі, склад, виробництво, фінанси — замість зоопарку таблиць.",
          say: "Будуємо CRM та ERP навколо того, як працює ваша компанія: продажі, склад, виробництво, фінанси — тільки ті модулі, які вам потрібні. Керівник бачить стан справ без щотижневих звітів від кожного відділу.",
          inc: ["лише потрібні модулі", "ролі, права, журнал дій", "звіти й дашборди", "перенесення даних із таблиць і старих систем", "бухгалтерія, телефонія, пошта"],
          caveat: "Якщо ваш процес схожий на стандартний, коробкова CRM цілком підійде, і я так і скажу. Своя система окуповується, коли менеджери ведуть половину роботи в таблицях, бо коробка «так не вміє». Запускаємо по відділах, щоб робота не стала ні на день.",
          q: "Що у вас зараз замість CRM — таблиці, коробкова система, щось своє?" },
        { name: "Хмарні рішення",
          card: "Переїзд в Amazon Web Services повністю або частинами — з розрахунком вартості й планом відкату.",
          say: "Переносимо інфраструктуру в Amazon Web Services, усю або частинами, і стежимо, щоб вона працювала й не дорожчала без причини.",
          inc: ["аудит і розрахунок вартості", "архітектура в AWS, план міграції", "сервери, бази, файли", "бекапи й моніторинг", "оптимізація витрат після переїзду"],
          caveat: "Хмара не завжди дешевша за власний сервер. Вона виграє, коли навантаження стрибає, потрібна відмовостійкість або середовища мають підніматися за хвилини. Тому спершу аудит і розрахунок, а переїзд — поетапно, з планом відкату на кожному кроці.",
          q: "Що підштовхує до переїзду: навантаження, надійність чи вартість теперішніх серверів?" },
        { name: "Інфраструктура компанії на базі Red Hat",
          card: "Інфраструктура на Red Hat Enterprise Linux, OpenShift і Ansible, яку можна перевірити й повторити.",
          say: "Будуємо інфраструктуру на Red Hat: сервери на Red Hat Enterprise Linux, застосунки в контейнерній платформі OpenShift, а конфігурацію описуємо в Ansible, щоб будь-який сервер перезбирався за сценарієм, а не з пам'яті адміністратора.",
          inc: ["аудит серверів і план переходу", "RHEL з оновленнями через Satellite", "OpenShift для застосунків", "автоматизація через Ansible", "облікові записи й доступ (Identity Management)", "моніторинг, бекапи, документація"],
          caveat: "Red Hat — це підписка, і вона виправдана не завжди. Сенс є, коли інфраструктура мусить роками працювати й проходити аудит: тоді ви платите за підтримку виробника й довгий життєвий цикл, у RHEL це десять років. Red Hat — наш партнер, тож із підписками теж допоможемо.",
          q: "Скільки у вас зараз серверів і на чому вони працюють?" },
        { name: "API та інтеграції",
          card: "API для ваших систем і зв'язок з оплатою, доставкою, CRM та обліком, щоб дані не вводили двічі.",
          say: "Пишемо API для ваших систем і з'єднуємо їх із сервісами, якими ви вже користуєтеся: оплатою, доставкою, CRM, обліком. Мета проста — дані вводяться один раз і самі доходять, куди треба.",
          inc: ["проєктування й документація API", "платежі, доставка, CRM, облік", "обмін між внутрішніми системами", "черги й повтори при збоях", "моніторинг і сповіщення"],
          caveat: "Інтеграції ламаються тихо: партнер змінив свій API, і замовлення перестали доходити. Тому моніторинг ставимо завжди — про збій має сказати система, а не клієнт.",
          q: "Де у вас зараз дані вводять двічі?" },
        { name: "Технічна підтримка",
          card: "Підтримка й розвиток ІТ-систем, зокрема тих, які писали не ми.",
          say: "Підтримуємо ІТ-системи й розвиваємо їх далі, зокрема ті, які писали не ми: стежимо за доступністю й помилками, ставимо оновлення безпеки, робимо невеликі доопрацювання по ходу.",
          inc: ["моніторинг доступності й помилок", "виправлення й оновлення безпеки", "бекапи з перевіркою відновлення", "доопрацювання за планом", "аудит і документація чужих систем"],
          caveat: "Якщо систему писав інший підрядник, почнемо з аудиту й документації. Без цього будь-яка правка — лотерея, і обіцяти вам інше я не буду.",
          q: "Хто зараз підтримує систему і чи є до неї документація?" }
      ],
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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
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
      services: [
        { name: "IT solution concept",
          card: "We work out what the system has to do and turn it into requirements both the business and developers can use.",
          say: "No coding happens at this stage. First we talk to the people who'll work with the system (accounting, the warehouse, sales managers, not only whoever signs off) and find out what problem it actually has to solve.",
          inc: ["interviews and a walkthrough of current processes", "business requirements and scenarios", "off-the-shelf vs. custom, compared", "a spec with time and budget estimates per phase"],
          caveat: "Fair warning: sometimes our conclusion is to build nothing and configure an existing product instead. Either way, the document you get is one any team can work from, not just ours.",
          q: "Do you already have some description of the task, or is it more a feeling that things can't go on like this?" },
        { name: "SaaS development",
          card: "SaaS platforms, from a first version for pilot customers to a service with dashboards, plans and subscriptions.",
          say: "We take SaaS from a first version for pilot customers to a service where every customer has their own workspace, plan and dashboard. What matters most is that a new customer can sign up, pay and get going without phoning support.",
          inc: ["isolated data for every customer", "sign-up, plans, subscriptions, payments", "dashboards, roles, permissions", "integrations and a public API", "scaling under load"],
          caveat: "Multi-tenancy and billing are best built in from day one: redoing them once customers are inside costs several times more. And don't sit on the first version too long. Real users will quickly show you which features were never needed.",
          q: "Do you already have pilot customers, or is the product still an idea?" },
        { name: "Web development",
          card: "Corporate sites, marketplaces, online stores, booking systems and internal web tools, with analytics from launch.",
          say: "We build corporate websites, marketplaces, online stores, booking systems and internal web tools. But first we'll agree on what counts as a result, and analytics goes live before launch, not six months later.",
          inc: ["prototype and design", "frontend, backend, admin panel", "payments, delivery, CRM, accounting", "SEO groundwork, speed, analytics", "launch and support"],
          caveat: "The technology follows the task, not the other way round: a landing page doesn't need a heavy platform, and a marketplace won't fit into a website builder.",
          q: "What would tell you the site is working: leads, sales, something else?" },
        { name: "Mobile apps",
          card: "iOS and Android apps with the server side and admin panel, when an app is really what you need.",
          say: "We build iOS and Android apps together with the server side and admin panel, and then publish them to the App Store and Google Play.",
          inc: ["iOS and Android", "server and API", "admin panel for content, orders, users", "push notifications and analytics", "store publishing"],
          caveat: "But you don't always need an app. It earns its keep when customers come back regularly: reordering, tracking a delivery, collecting points. If people visit you once a year, a good mobile website is cheaper, and I'd start there. Native or cross-platform comes down to budget and to whether you need the camera, location and offline mode.",
          q: "How often would your customers actually open this app?" },
        { name: "AI-powered solutions",
          card: "Business process automation with AI agents: requests, CRM, customer replies, documents.",
          say: "The core of it is AI agents that handle routine process steps on their own: triaging requests, filling in the CRM, drafting replies to customers. A person still checks and decides. I'm a simple example of such an agent myself: I sort through your request, match it to what the team does and put the brief together, and you're the one who sends it.",
          inc: ["AI agents for routine process steps", "chatbots and assistants", "document extraction", "request classification, knowledge-base search", "demand forecasting, data analysis", "a pilot with quality measured on your data"],
          caveat: "I'll be blunt: half of the \"let's add a neural network\" ideas are solved by ordinary automation with no AI at all, and then that's what we'll recommend. Where a model really is needed, we start with a pilot on your data, so the accuracy is known before the main build.",
          q: "What work do people at your company spend hours doing by hand right now: emails, documents, support requests?" },
        { name: "CRM and ERP development",
          card: "CRM and ERP built around your processes: sales, warehouse, production, finance, instead of a zoo of spreadsheets.",
          say: "We build CRM and ERP around how your company actually works: sales, warehouse, production, finance, and only the modules you need. Management sees where things stand without weekly reports from every department.",
          inc: ["only the modules you need", "roles, permissions, audit log", "reports and dashboards", "migration from spreadsheets and old systems", "accounting, telephony, email"],
          caveat: "If your process looks standard, an off-the-shelf CRM will do fine, and I'll say so. A custom system pays off when managers run half their work in spreadsheets because the box \"can't do that\". We roll out department by department so work never stops for a day.",
          q: "What are you using instead of a CRM right now: spreadsheets, a boxed product, something home-grown?" },
        { name: "Cloud solutions",
          card: "Moving to Amazon Web Services in full or in part, with a cost estimate and a rollback plan.",
          say: "We move infrastructure to Amazon Web Services, all of it or in parts, and make sure it keeps running and doesn't get more expensive for no reason.",
          inc: ["audit and cost estimate", "AWS architecture, migration plan", "servers, databases, files", "backups and monitoring", "cost optimisation after the move"],
          caveat: "The cloud isn't always cheaper than your own server. It wins when load spikes, when you need fault tolerance, or when environments have to come up in minutes. So first an audit and the numbers, then a staged move with a rollback plan at every step.",
          q: "What's pushing you to move: load, reliability, or what your current servers cost?" },
        { name: "Company infrastructure on Red Hat",
          card: "Infrastructure on Red Hat Enterprise Linux, OpenShift and Ansible that you can audit and reproduce.",
          say: "We build infrastructure on Red Hat: servers on Red Hat Enterprise Linux, applications on the OpenShift container platform, and configuration written down in Ansible, so any server can be rebuilt from a playbook rather than from an admin's memory.",
          inc: ["server audit and migration plan", "RHEL with updates through Satellite", "OpenShift for your applications", "automation with Ansible", "accounts and access (Identity Management)", "monitoring, backups, documentation"],
          caveat: "Red Hat is a subscription, and it isn't always worth it. It makes sense when infrastructure has to run for years and pass audits: then you're paying for vendor support and a long lifecycle, ten years in the case of RHEL. Red Hat is our partner, so we can help with subscriptions too.",
          q: "How many servers do you have now, and what are they running?" },
        { name: "APIs and integrations",
          card: "APIs for your systems and links to payments, delivery, CRM and accounting, so nobody types data in twice.",
          say: "We write APIs for your systems and connect them to the services you already use: payments, delivery, CRM, accounting. The goal is simple: data is entered once and gets where it needs to go on its own.",
          inc: ["API design and documentation", "payments, delivery, CRM, accounting", "exchange between internal systems", "queues and retries on failure", "monitoring and alerts"],
          caveat: "Integrations break quietly: a partner changes their API and orders stop arriving. That's why monitoring is always part of the job. You should hear about a failure from the system, not from a customer.",
          q: "Where does data get typed in twice at your company today?" },
        { name: "Technical support",
          card: "Support and further development of IT systems, including ones we didn't build.",
          say: "We support IT systems and keep developing them, including ones we didn't build: watching availability and errors, installing security updates, making small improvements along the way.",
          inc: ["availability and error monitoring", "fixes and security updates", "backups with restore testing", "planned improvements", "audits and docs for inherited systems"],
          caveat: "If another contractor built the system, we start with an audit and documentation. Without that, every change is a gamble, and I won't promise you otherwise.",
          q: "Who looks after the system now, and is there any documentation for it?" }
      ],
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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
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
      services: [
        { name: "Разработка концепции ИТ решения",
          card: "Разбираемся, что должна делать система, и превращаем это в требования, понятные и бизнесу, и разработчикам.",
          say: "Здесь мы ещё ничего не программируем. Сначала говорим с людьми, которые будут работать с системой, — бухгалтерией, складом, менеджерами, не только с руководителем, — и выясняем, какую задачу она на самом деле должна решать.",
          inc: ["интервью и разбор текущих процессов", "бизнес-требования и сценарии", "сравнение: готовое решение или разработка", "ТЗ с оценкой сроков и бюджета по этапам"],
          caveat: "Честно предупрежу: бывает, что по итогам мы советуем ничего не разрабатывать, а взять готовый продукт и донастроить. Документ на выходе такой, что с ним может работать любая команда, не обязательно наша.",
          q: "У вас уже есть какое-то описание задачи или пока только ощущение, что «так дальше нельзя»?" },
        { name: "Разработка SaaS решений",
          card: "SaaS-платформы: от первой версии для пилотных клиентов до сервиса с кабинетами, тарифами и подписками.",
          say: "Берёмся за SaaS от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и кабинет. Главное здесь — чтобы новый клиент сам зарегистрировался, оплатил и начал работать, не звоня в поддержку.",
          inc: ["изоляция данных каждого клиента", "регистрация, тарифы, подписки, оплата", "кабинеты, роли, права доступа", "интеграции и открытый API", "масштабирование под нагрузку"],
          caveat: "Мультитенантность и биллинг лучше заложить с первого дня: переделывать их, когда клиенты уже внутри, в разы дороже. А с первой версией не стоит тянуть — живые пользователи быстро покажут, какие функции лишние.",
          q: "У вас уже есть пилотные клиенты или продукт пока на уровне идеи?" },
        { name: "Web-разработка",
          card: "Корпоративные сайты, маркетплейсы, магазины, бронирование и внутренние веб-сервисы — с аналитикой с момента запуска.",
          say: "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Но сначала договоримся, что считать результатом, и аналитику включим ещё до запуска, а не через полгода.",
          inc: ["прототип и дизайн", "frontend, backend, админка", "оплата, доставка, CRM, учёт", "SEO-основа, скорость, аналитика", "запуск и сопровождение"],
          caveat: "Технологию подбираем под задачу, а не наоборот: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не поместится.",
          q: "Что для вас будет признаком, что сайт работает: заявки, продажи или что-то другое?" },
        { name: "Мобильные приложения",
          card: "Приложения для iOS и Android вместе с сервером и админкой — когда они действительно нужны.",
          say: "Делаем приложения для iOS и Android вместе с серверной частью и админкой, а потом публикуем их в App Store и Google Play.",
          inc: ["iOS и Android", "сервер и API", "админка для контента, заказов, пользователей", "push-уведомления и аналитика", "публикация в магазинах"],
          caveat: "Но приложение нужно не всегда. Оно оправдано, когда клиент возвращается регулярно: заказывает повторно, следит за статусом, копит бонусы. Если к вам заходят раз в год, хороший мобильный сайт выйдет дешевле, и я бы начал с него. Нативно или кроссплатформенно — решим по бюджету и по тому, нужны ли камера, геолокация и офлайн.",
          q: "Как часто ваши клиенты должны были бы открывать это приложение?" },
        { name: "Решения с искусственным интеллектом",
          card: "Автоматизация бизнес-процессов ИИ-агентами: заявки, CRM, ответы клиентам, документы.",
          say: "Главное здесь — ИИ-агенты, которые сами выполняют рутинные шаги процесса: разбирают заявки, заполняют CRM, готовят ответы клиентам. Человек при этом проверяет и решает. Я, кстати, простой пример такого агента: разбираю ваш запрос, подбираю направления и составляю бриф, а отправляете его вы.",
          inc: ["ИИ-агенты для рутинных шагов процесса", "чат-боты и ассистенты", "разбор документов", "классификация обращений, поиск по базе знаний", "прогноз спроса, анализ данных", "пилот с замером качества на ваших данных"],
          caveat: "Скажу прямо: половину идей «добавим нейросеть» закрывает обычная автоматизация, без всякого ИИ, и тогда мы так и посоветуем. А там, где модель действительно нужна, начинаем с пилота на ваших данных, чтобы точность была известна до основной разработки.",
          q: "Какую работу у вас сейчас люди часами делают руками — письма, документы, обращения?" },
        { name: "Разработка CRM и ERP",
          card: "CRM и ERP под ваши процессы: продажи, склад, производство, финансы — вместо зоопарка таблиц.",
          say: "Строим CRM и ERP вокруг того, как работает ваша компания: продажи, склад, производство, финансы — только те модули, которые вам нужны. Руководитель видит положение дел без еженедельных отчётов от каждого отдела.",
          inc: ["только нужные модули", "роли, права, журнал действий", "отчёты и дашборды", "перенос данных из таблиц и старых систем", "бухгалтерия, телефония, почта"],
          caveat: "Если ваш процесс похож на стандартный, коробочная CRM вполне подойдёт, и я так и скажу. Своя система окупается, когда менеджеры ведут половину работы в таблицах, потому что коробка «так не умеет». Запускаем по отделам, чтобы работа не встала ни на день.",
          q: "Что у вас сейчас вместо CRM — таблицы, коробочная система, что-то своё?" },
        { name: "Облачные решения",
          card: "Переезд в Amazon Web Services целиком или частями — с расчётом стоимости и планом отката.",
          say: "Переносим инфраструктуру в Amazon Web Services, целиком или частями, и следим, чтобы она работала и не дорожала без причины.",
          inc: ["аудит и расчёт стоимости", "архитектура в AWS, план миграции", "серверы, базы, файлы", "бэкапы и мониторинг", "оптимизация расходов после переезда"],
          caveat: "Облако не всегда дешевле своего сервера. Оно выигрывает, когда нагрузка скачет, нужна отказоустойчивость или окружения должны подниматься за минуты. Поэтому сначала аудит и расчёт, а переезд — поэтапно, с планом отката на каждом шаге.",
          q: "Что подталкивает к переезду: нагрузка, надёжность или стоимость нынешних серверов?" },
        { name: "Инфраструктура компании на базе Red Hat",
          card: "Инфраструктура на Red Hat Enterprise Linux, OpenShift и Ansible, которую можно проверить и повторить.",
          say: "Строим инфраструктуру на Red Hat: серверы на Red Hat Enterprise Linux, приложения в контейнерной платформе OpenShift, а конфигурацию описываем в Ansible, чтобы любой сервер пересобирался по сценарию, а не по памяти администратора.",
          inc: ["аудит серверов и план перехода", "RHEL с обновлениями через Satellite", "OpenShift для приложений", "автоматизация через Ansible", "учётные записи и доступ (Identity Management)", "мониторинг, бэкапы, документация"],
          caveat: "Red Hat — это подписка, и она оправдана не всегда. Смысл есть, когда инфраструктура должна годами работать и проходить аудит: тогда вы платите за поддержку производителя и длинный жизненный цикл, у RHEL это десять лет. Red Hat — наш партнёр, так что с подписками тоже поможем.",
          q: "Сколько у вас сейчас серверов и на чём они работают?" },
        { name: "API и интеграции",
          card: "API для ваших систем и связь с оплатой, доставкой, CRM и учётом, чтобы данные не вводили дважды.",
          say: "Пишем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь: оплатой, доставкой, CRM, учётом. Цель простая — данные вводятся один раз и сами доходят, куда нужно.",
          inc: ["проектирование и документация API", "платежи, доставка, CRM, учёт", "обмен между внутренними системами", "очереди и повторы при сбоях", "мониторинг и оповещения"],
          caveat: "Интеграции ломаются тихо: партнёр поменял свой API, и заказы перестали доходить. Поэтому мониторинг ставим всегда — о сбое должна сказать система, а не клиент.",
          q: "Где у вас сейчас данные вводят дважды?" },
        { name: "Техническая поддержка",
          card: "Поддержка и развитие ИТ-систем, в том числе тех, которые писали не мы.",
          say: "Поддерживаем ИТ-системы и развиваем их дальше, в том числе те, которые писали не мы: следим за доступностью и ошибками, ставим обновления безопасности, делаем небольшие доработки по ходу.",
          inc: ["мониторинг доступности и ошибок", "исправления и обновления безопасности", "бэкапы с проверкой восстановления", "доработки по плану", "аудит и документация чужих систем"],
          caveat: "Если систему писал другой подрядчик, начнём с аудита и документации. Без этого любая правка — лотерея, и обещать вам другое я не буду.",
          q: "Кто сейчас поддерживает систему и есть ли к ней документация?" }
      ],
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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "  WIN             Windows 3.11",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Рядки агента. Він не вигадує фактів: ціни й терміни — лише після брифу */
  const AX = {
    uk: {
      tagline: "агент сайту, демо",
      title: "ArtIntelliCo — агент сайту",
      invite: "Опишіть задачу своїми словами — я підберу напрями роботи й зберу бриф для команди.",
      demo: "Демо: агент працює у вашому браузері й відповідає лише тим, що є на сайті. Нічого не надсилається без вашої дії.",
      placeholder: "Опишіть задачу своїми словами…",
      send: "Надіслати",
      thinking: "Зіставляю запит із напрямами",
      matchedMany: (n) => `Схоже, вашій задачі відповідають ${n}. Я додав їх у бриф.`,
      added: (n) => `Додав «${n}» у бриф.`,
      already: (n) => `«${n}» уже є в брифі.`,
      incLabel: "Що входить",
      more: "Детальніше",
      priceQ: "Скільки це коштує?",
      follow: "Розкажіть більше: що вже є, з чим інтегрувати, коли потрібен результат. Або надішліть бриф, коли буде готово.",
      nomatch: "Поки не можу впевнено визначити напрям. Ось що робить команда — оберіть найближче або опишіть задачу інакше.",
      price: "Ціни на сайті не публікуються: вартість залежить від задачі. Надішліть бриф — команда відповість з оцінкою.",
      time: "Терміни команда оцінює після брифу. Додайте в нього бажані дати.",
      about: "Коротко про компанію:",
      retro: "Цей сайт можна відкрити в інтерфейсах минулого. Ось шлях від командного рядка до розмови:",
      greet: "Привіт! Опишіть задачу — підберу напрями.",
      thanks: "Будь ласка. Бриф чекає, коли будете готові.",
      langSwitched: "Далі говоримо українською.",
      chips: ["Потрібна CRM для відділу продажу", "Хочемо автоматизувати процеси з ШІ", "Чи потрібен нам мобільний застосунок?", "Перенести інфраструктуру в хмару", "Запустити SaaS-платформу", "Хто ваші партнери?", "Скільки це коштує?", "Інтерфейси минулого"],
      mapTitle: "Карта запиту",
      mapHint: "Вузли — напрями роботи. Лінії показують, до чого тяжіє ваш запит. Натисніть вузол, щоб спитати про нього.",
      short: ["Концепція", "SaaS", "Web", "Мобільні", "ШІ", "CRM / ERP", "Хмара", "Red Hat", "API", "Підтримка"],
      ask: (n) => `Розкажіть про напрям «${n}»`,
      briefTitle: "Бриф проєкту",
      task: "Задача",
      taskPh: "Тут з'явиться опис задачі з розмови. Можна редагувати.",
      directions: "Напрями",
      email: "Ваш e-mail для відповіді (необов'язково)",
      sendBrief: "Надіслати бриф",
      copy: "Скопіювати",
      copied: "Бриф скопійовано.",
      opened: "Відкриваю поштову програму з готовим листом.",
      inBrief: "У брифі",
      addBrief: "Додати в бриф",
      briefBtn: (n) => `Бриф${n ? " · " + n : ""}`,
      past: "Інтерфейси минулого",
      here: "Ви тут",
      now: "Розмова з агентом",
      subject: (s) => `Бриф: ${s}`,
      briefHead: "Бриф із сайту artintellico.com",
      replyTo: "Відповісти на",
      none: "не вказано",
      copyMail: "Скопіювати адресу",
      writeMail: "Написати листа",
      themeLight: "Світла тема", themeDark: "Темна тема"
    },
    en: {
      tagline: "site agent, demo",
      title: "ArtIntelliCo — site agent",
      invite: "Describe your task in your own words — I'll match it to what the team does and put together a brief.",
      demo: "Demo: the agent runs in your browser and only uses what's on the site. Nothing is sent without your action.",
      placeholder: "Describe your task in your own words…",
      send: "Send",
      thinking: "Matching your request to our services",
      matchedMany: (n) => `Looks like your task fits ${n}. I've added them to the brief.`,
      added: (n) => `Added "${n}" to the brief.`,
      already: (n) => `"${n}" is already in the brief.`,
      incLabel: "What's included",
      more: "Tell me more",
      priceQ: "How much does it cost?",
      follow: "Tell me more: what you already have, what it should integrate with, when you need it. Or send the brief when it's ready.",
      nomatch: "I can't tell the direction yet. Here's what the team does — pick the closest or describe the task differently.",
      price: "Prices aren't published on the site: the cost depends on the task. Send the brief and the team will reply with an estimate.",
      time: "The team estimates timelines after reading the brief. Add your preferred dates to it.",
      about: "About the company:",
      retro: "This site also opens in interfaces of the past. Here's the path from the command line to a conversation:",
      greet: "Hi! Describe your task and I'll match it to our services.",
      thanks: "You're welcome. The brief is ready whenever you are.",
      langSwitched: "Switching to English.",
      chips: ["We need a CRM for the sales team", "We want AI agents to automate our processes", "Do we actually need a mobile app?", "Move our infrastructure to the cloud", "Launch a SaaS platform", "Who are your partners?", "How much does it cost?", "Interfaces of the past"],
      mapTitle: "Request map",
      mapHint: "Nodes are what the team does. Lines show where your request is pulling. Click a node to ask about it.",
      short: ["Concept", "SaaS", "Web", "Mobile", "AI", "CRM / ERP", "Cloud", "Red Hat", "API", "Support"],
      ask: (n) => `What does "${n}" involve?`,
      briefTitle: "Project brief",
      task: "Task",
      taskPh: "Your task from the conversation will appear here. You can edit it.",
      directions: "Directions",
      email: "Your email for the reply (optional)",
      sendBrief: "Send brief",
      copy: "Copy",
      copied: "Brief copied.",
      opened: "Opening your email app with the letter ready.",
      inBrief: "In the brief",
      addBrief: "Add to brief",
      briefBtn: (n) => `Brief${n ? " · " + n : ""}`,
      past: "Interfaces of the past",
      here: "You are here",
      now: "Conversation with an agent",
      subject: (s) => `Brief: ${s}`,
      briefHead: "Brief from artintellico.com",
      replyTo: "Reply to",
      none: "not specified",
      copyMail: "Copy address",
      writeMail: "Write an email",
      themeLight: "Light theme", themeDark: "Dark theme"
    },
    ru: {
      tagline: "агент сайта, демо",
      title: "ArtIntelliCo — агент сайта",
      invite: "Опишите задачу своими словами — я подберу направления работы и соберу бриф для команды.",
      demo: "Демо: агент работает в вашем браузере и отвечает только тем, что есть на сайте. Ничего не отправляется без вашего действия.",
      placeholder: "Опишите задачу своими словами…",
      send: "Отправить",
      thinking: "Сопоставляю запрос с направлениями",
      matchedMany: (n) => `Похоже, вашей задаче соответствуют ${n}. Я добавил их в бриф.`,
      added: (n) => `Добавил «${n}» в бриф.`,
      already: (n) => `«${n}» уже есть в брифе.`,
      incLabel: "Что входит",
      more: "Подробнее",
      priceQ: "Сколько это стоит?",
      follow: "Расскажите больше: что уже есть, с чем интегрировать, когда нужен результат. Или отправьте бриф, когда будет готово.",
      nomatch: "Пока не могу уверенно определить направление. Вот что делает команда — выберите ближайшее или опишите задачу иначе.",
      price: "Цены на сайте не публикуются: стоимость зависит от задачи. Отправьте бриф — команда ответит с оценкой.",
      time: "Сроки команда оценивает после брифа. Добавьте в него желаемые даты.",
      about: "Коротко о компании:",
      retro: "Этот сайт можно открыть в интерфейсах прошлого. Вот путь от командной строки к разговору:",
      greet: "Привет! Опишите задачу — подберу направления.",
      thanks: "Пожалуйста. Бриф ждёт, когда будете готовы.",
      langSwitched: "Дальше говорим по-русски.",
      chips: ["Нужна CRM для отдела продаж", "Хотим автоматизировать процессы с ИИ", "Нужно ли нам мобильное приложение?", "Перенести инфраструктуру в облако", "Запустить SaaS-платформу", "Кто ваши партнёры?", "Сколько это стоит?", "Интерфейсы прошлого"],
      mapTitle: "Карта запроса",
      mapHint: "Узлы — направления работы. Линии показывают, к чему тяготеет ваш запрос. Нажмите узел, чтобы спросить о нём.",
      short: ["Концепция", "SaaS", "Web", "Мобильные", "ИИ", "CRM / ERP", "Облако", "Red Hat", "API", "Поддержка"],
      ask: (n) => `Расскажите о направлении «${n}»`,
      briefTitle: "Бриф проекта",
      task: "Задача",
      taskPh: "Здесь появится описание задачи из разговора. Можно редактировать.",
      directions: "Направления",
      email: "Ваш e-mail для ответа (необязательно)",
      sendBrief: "Отправить бриф",
      copy: "Скопировать",
      copied: "Бриф скопирован.",
      opened: "Открываю почтовую программу с готовым письмом.",
      inBrief: "В брифе",
      addBrief: "Добавить в бриф",
      briefBtn: (n) => `Бриф${n ? " · " + n : ""}`,
      past: "Интерфейсы прошлого",
      here: "Вы здесь",
      now: "Разговор с агентом",
      subject: (s) => `Бриф: ${s}`,
      briefHead: "Бриф с сайта artintellico.com",
      replyTo: "Ответить на",
      none: "не указано",
      copyMail: "Скопировать адрес",
      writeMail: "Написать письмо",
      themeLight: "Светлая тема", themeDark: "Тёмная тема"
    }
  };

  /* Ключові слова (основи) трьома мовами для зіставлення запиту з напрямами */
  const KEYS = [
    ["концеп", "вимог", "требован", "аналіз", "анализ", "консульт", "consult", "concept", "requirement", "специфікац", "спецификац", "specification", "тз", "ідея", "идея", "idea", "почати", "начать", "start", "аудит", "audit", "стратег", "strateg"],
    ["saas", "підписк", "подписк", "subscription", "мультитенант", "multi-tenant", "multitenant", "білінг", "биллинг", "billing", "платформ", "platform", "кабінет", "кабинет", "dashboard"],
    ["сайт", "web", "веб", "маркетплейс", "marketplace", "магазин", "shop", "store", "commerce", "бронюван", "бронирован", "booking", "портал", "portal", "лендінг", "лендинг", "landing", "website"],
    ["мобіл", "мобил", "mobile", "ios", "android", "застосун", "приложен", "app", "смартфон", "smartphone", "телефон", "phone"],
    ["ші", "ии", "штучн", "искусствен", "artificial", "machine", "машинн", "ml", "gpt", "llm", "нейро", "neural", "чат-бот", "чатбот", "chatbot", "бот", "bot", "прогноз", "predict", "rag", "agent", "агент", "ai"],
    ["crm", "erp", "облік", "учет", "accounting", "склад", "warehouse", "продаж", "sales", "клієнт", "клиент", "customer", "бізнес-процес", "бизнес-процесс", "process", "лід", "лид", "lead", "воронк", "funnel"],
    ["хмар", "облак", "cloud", "aws", "amazon", "сервер", "server", "інфраструкт", "инфраструкт", "infrastructure", "міграц", "миграц", "migrat", "devops", "kubernetes", "хостинг", "hosting", "бекап", "backup"],
    ["red hat", "redhat", "rhel", "openshift", "ansible", "satellite", "linux", "лінукс", "линукс", "identity management"],
    ["api", "інтеграц", "интеграц", "integrat", "1с", "1c", "webhook", "синхрон", "sync", "connect", "підключ", "подключ", "обмін даними", "обмен данными"],
    ["підтрим", "поддерж", "support", "супровід", "сопровожд", "maintenance", "баг", "bug", "legacy", "розвит", "развит", "оновлен", "обновлен", "update", "моніторинг", "мониторинг", "monitoring"]
  ];
  const META = {
    price: ["цін", "цен", "вартіст", "стоимост", "скільки", "сколько", "price", "cost", "budget", "бюджет", "кошту", "стоит"],
    time: ["термін", "строк", "срок", "deadline", "timeline", "коли буде", "когда будет", "how long", "як довго", "как долго"],
    partners: ["партнер", "партнёр", "partner", "microsoft", "veeam", "vmware", "dell", "unio24"],
    contact: ["контакт", "зв'яз", "звʼяз", "связ", "contact", "e-mail", "email", "пошт", "почт", "написати", "написать", "телефон"],
    about: ["хто ви", "кто вы", "who are you", "про компан", "о компан", "about", "команд", "team", "чим займ", "чем занима"],
    retro: ["ретро", "retro", "минул", "прошл", "past", "dos", "windows", "unix", "apple", "lisa", "linux", "commander", "інтерфейс", "интерфейс", "interface"],
    greet: ["привіт", "привет", "hello", "hi ", "hey", "добрий день", "добрый день", "вітаю", "здравств"],
    thanks: ["дякую", "спасибо", "thank"]
  };
  const NODES = [[200, 150], [108, 84], [60, 164], [118, 238], [300, 70], [340, 156], [276, 232], [356, 250], [200, 38], [200, 270]];
  const MESH = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 2], [2, 3], [1, 8], [4, 8], [4, 5], [5, 6], [5, 7], [6, 7], [6, 9], [7, 9], [3, 9], [1, 4], [5, 8]];
  /* Суміжний напрям для підказки після відповіді */
  const RELATED = [5, 6, 3, 2, 8, 8, 7, 6, 5, 6];
  const TIMELINE = [
    ["1977", "Apple ][", "/apple/"],
    ["1981", "DOS", "/dos/"],
    ["1983", "Apple Lisa", "/lisa/"],
    ["1986", "Norton Commander", "/"],
    ["1986", "UNIX 4.3 BSD", "/unix/"],
    ["1993", "Windows 3.11", "/win31/"],
    ["1994", "Midnight Commander", "/mc/"],
    ["1996", "Linux, X11 + fvwm", "/linux/"]
  ];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || (nav.startsWith("ru") ? "ru" : nav.startsWith("uk") ? "uk" : nav.startsWith("en") ? "en" : "uk");
  if (!["uk", "en", "ru"].includes(lang)) lang = "uk";
  const t = () => I18N[lang];
  const a = () => AX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));

  const brief = { task: [], dirs: new Set(), edited: false };
  let busy = false;
  let userTurns = 0;

  /* ---------- Розпізнавання наміру ---------- */
  function score(text) {
    const s = " " + text.toLowerCase().replace(/[’ʼ]/g, "'") + " ";
    const hit = (k) => (k.length <= 3 ? new RegExp(`(^|[^\\p{L}])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\p{L}]|$)`, "u").test(s) : s.includes(k));
    const svc = KEYS.map((keys) => keys.reduce((n, k) => n + (hit(k) ? 1 : 0), 0));
    const meta = Object.fromEntries(Object.entries(META).map(([k, keys]) => [k, keys.some(hit)]));
    return { svc, meta };
  }

  /* ---------- Вивід повідомлень ---------- */
  const log = $("log");
  const scrollDown = () => { log.scrollTop = log.scrollHeight; };
  function userMsg(text) {
    const d = document.createElement("div");
    d.className = "msg user appear";
    d.innerHTML = `<p>${esc(text)}</p>`;
    log.appendChild(d);
    scrollDown();
  }
  async function stream(el, text) {
    if (reduced) { el.textContent = text; return; }
    const words = text.split(/(\s+)/);
    for (const w of words) {
      if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); continue; }
      const s = document.createElement("span");
      s.className = "w";
      s.textContent = w;
      el.appendChild(s);
      scrollDown();
      await sleep(26);
    }
  }
  async function agentMsg(blocks, { thinking = true } = {}) {
    busy = true;
    syncSend();
    const d = document.createElement("div");
    d.className = "msg agent";
    log.appendChild(d);
    if (thinking && !reduced) {
      d.innerHTML = `<div class="thinking"><i class="dot" aria-hidden="true"></i><span>${esc(a().thinking)}</span></div>`;
      scrollDown();
      await sleep(650);
      d.innerHTML = "";
    }
    for (const b of blocks) {
      if (b.p !== undefined || b.lead !== undefined || b.note !== undefined) {
        const p = document.createElement("p");
        if (b.lead !== undefined) { p.className = "lead"; p.dataset.text = b.lead; }
        if (b.note !== undefined) p.className = "note";
        d.appendChild(p);
        await stream(p, b.p ?? b.lead ?? b.note);
        /* голограма проявляється, коли слова заголовка «застигли» */
        if (b.lead !== undefined) setTimeout(() => p.classList.add("holo"), reduced ? 0 : 500);
      } else {
        const el = component(b);
        el.classList.add("appear");
        d.appendChild(el);
        scrollDown();
        await sleep(120);
      }
    }
    busy = false;
    syncSend();
    scrollDown();
  }

  function component(b) {
    const wrap = document.createElement("div");
    if (b.chips) {
      wrap.className = "chips";
      b.chips.forEach((c) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chip";
        btn.textContent = c.t ?? c;
        btn.addEventListener("click", () => ask(c.t ?? c, c.svc));
        wrap.appendChild(btn);
      });
    } else if (b.services) {
      wrap.className = "cards";
      b.services.forEach((i) => {
        const { name, card } = t().services[i];
        const c = document.createElement("article");
        c.className = "card";
        c.innerHTML = `<h3>${esc(name)}</h3><p>${esc(card)}</p><div class="row"><button type="button" class="toggle" data-svc="${i}"></button><button type="button" class="more" data-more="${i}">${esc(a().more)}</button></div>`;
        wrap.appendChild(c);
      });
      wrap.addEventListener("click", (e) => {
        const m = e.target.closest("[data-more]");
        if (m) { ask(a().ask(t().services[Number(m.dataset.more)].name), Number(m.dataset.more)); return; }
        const x = e.target.closest("[data-svc]");
        if (x) toggleDir(Number(x.dataset.svc));
      });
      queueMicrotask(syncToggles);
    } else if (b.inc !== undefined) {
      /* Що входить — компактно, з перемикачем брифу */
      const sv = t().services[b.inc];
      wrap.className = "incl";
      wrap.innerHTML = `<h3>${esc(a().incLabel)}</h3><ul>${sv.inc.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><button type="button" class="toggle" data-svc="${b.inc}"></button>`;
      wrap.addEventListener("click", (e) => { const x = e.target.closest("[data-svc]"); if (x) toggleDir(Number(x.dataset.svc)); });
      queueMicrotask(syncToggles);
    } else if (b.partners) {
      wrap.className = "chips";
      wrap.innerHTML = PARTNERS.map((p) => (p === "UNIO24" ? `<a class="chip" href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : `<span class="chip" style="cursor:default">${esc(p)}</span>`)).join("");
    } else if (b.list) {
      wrap.innerHTML = `<ul class="list">${b.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    } else if (b.timeline) {
      wrap.innerHTML = timelineHtml();
    } else if (b.contact) {
      wrap.className = "contact";
      wrap.innerHTML = `<div class="mail"><a href="mailto:${EMAIL}">${EMAIL}</a></div><div class="row"><button type="button" class="primary" data-act="brief">${esc(a().sendBrief)}</button><button type="button" class="ghost" data-act="copy">${esc(a().copyMail)}</button></div>`;
      wrap.addEventListener("click", (e) => {
        const x = e.target.closest("[data-act]");
        if (!x) return;
        if (x.dataset.act === "brief") sendBrief();
        else copy(EMAIL, x);
      });
    }
    return wrap;
  }

  const timelineHtml = () => `<ul class="list">${TIMELINE.map(([y, n, u]) => `<li><span class="yr">${y}</span><a href="${u}">${esc(n)}</a></li>`).join("")}<li><span class="yr">${new Date().getFullYear()}</span><span class="here">${esc(a().now)} — ${esc(a().here)}</span></li></ul>`;

  /* ---------- Відповідь агента ---------- */
  /* Відповідь консультанта про одну послугу: суть, що входить, оговорка, питання */
  function answer(i, had) {
    const sv = t().services[i];
    const rel = RELATED[i];
    return [
      { note: (had ? a().already : a().added)(a().short[i]) },
      { p: sv.say },
      { inc: i },
      { p: sv.caveat },
      { p: sv.q },
      { chips: [{ t: a().ask(t().services[rel].name), svc: rel }, a().priceQ] }
    ];
  }

  function respond(text, forced) {
    const { svc, meta } = score(text);
    const order = svc.map((s, i) => [s, i]).filter(([s]) => s > 0).sort((x, y) => y[0] - x[0]);
    /* Один явний лідер — відповідаємо про нього; рівні збіги — показуємо кілька карток */
    let ranked = order.map(([, i]) => i).slice(0, 3);
    if (Number.isInteger(forced)) ranked = [forced];
    else if (order.length > 1 && order[0][0] > order[1][0]) ranked = [order[0][1]];
    const blocks = [];
    const names = (ids) => {
      const q = ids.map((i) => (lang === "en" ? `"${t().services[i].name}"` : `«${t().services[i].name}»`));
      const and = { uk: " і ", en: " and ", ru: " и " }[lang];
      return q.length > 1 ? q.slice(0, -1).join(", ") + and + q[q.length - 1] : q[0];
    };
    const metaOnly = !ranked.length;

    if (meta.greet && metaOnly && !meta.price && !meta.partners && !meta.contact) blocks.push({ p: a().greet }, { chips: a().chips.slice(0, 4) });
    if (meta.thanks && metaOnly) blocks.push({ p: a().thanks });
    if (meta.about && metaOnly) blocks.push({ p: a().about }, { p: t().heroText }, { list: t().phrases });
    if (meta.partners) blocks.push({ p: t().partnersTitle + ":" }, { partners: true });
    if (meta.retro && metaOnly) blocks.push({ p: a().retro }, { timeline: true });

    const had = ranked.length === 1 && brief.dirs.has(ranked[0]);
    if (ranked.length) {
      ranked.forEach((i) => brief.dirs.add(i));
      if (ranked.length === 1) blocks.push(...answer(ranked[0], had));
      else {
        blocks.push({ p: a().matchedMany(names(ranked)) }, { services: ranked });
        if (!meta.price && !meta.time) blocks.push({ p: a().follow });
      }
    }
    if (meta.price) blocks.push({ p: a().price });
    if (meta.time) blocks.push({ p: a().time });
    if (meta.contact || meta.price) blocks.push(...(meta.contact ? [{ p: t().contactText }] : []), { contact: true });

    if (!blocks.length) blocks.push({ p: a().nomatch }, { services: t().services.map((_, i) => i) });
    return { blocks, ranked };
  }

  async function ask(text, forced) {
    text = text.trim();
    if (!text || busy) return;
    closeSheet();
    userMsg(text);
    userTurns += 1;
    const { meta, svc } = score(text);
    /* У бриф ідуть лише описи задачі: службові питання (ціна, партнери, контакти) і кліки по напрямах — ні */
    const isTask = !Number.isInteger(forced) && (svc.some((x) => x > 0) || !Object.values(meta).some(Boolean));
    if (isTask && !brief.edited) { brief.task.push(text); }
    const { blocks, ranked } = respond(text, forced);
    showQuery(ranked, true);
    renderBrief();
    await agentMsg(blocks);
  }

  /* ---------- Карта запиту ---------- */
  const svgNS = "http://www.w3.org/2000/svg";
  function buildMap() {
    const m = $("map");
    m.innerHTML = `<g class="orbits" aria-hidden="true"><circle cx="200" cy="150" r="78"/><circle cx="200" cy="150" r="136"/></g><g class="mesh">${MESH.map(([x, y]) => `<line x1="${NODES[x][0]}" y1="${NODES[x][1]}" x2="${NODES[y][0]}" y2="${NODES[y][1]}"/>`).join("")}</g><g id="rays"></g><circle class="q" id="qdot" r="5" cx="200" cy="150" opacity="0"/><g id="nodes"></g>`;
    const g = m.querySelector("#nodes");
    NODES.forEach(([x, y], i) => {
      const n = document.createElementNS(svgNS, "g");
      n.setAttribute("class", "node");
      n.setAttribute("tabindex", "0");
      n.setAttribute("role", "button");
      n.dataset.i = i;
      const below = y > 150 || i === 0;
      n.innerHTML = `<circle cx="${x}" cy="${y}" r="7"/><text x="${x}" y="${below ? y + 22 : y - 14}" text-anchor="middle"></text>`;
      g.appendChild(n);
    });
    const askNode = (n) => { const i = Number(n.dataset.i); ask(a().ask(t().services[i].name), i); };
    m.addEventListener("click", (e) => { const n = e.target.closest(".node"); if (n) askNode(n); });
    m.addEventListener("keydown", (e) => { const n = e.target.closest(".node"); if (n && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); askNode(n); } });
    labelMap();
  }
  function labelMap() {
    $("map").querySelectorAll(".node").forEach((n) => {
      const i = Number(n.dataset.i);
      n.querySelector("text").textContent = a().short[i];
      n.setAttribute("aria-label", t().services[i].name);
    });
  }
  /* Точка запиту рухається до зваженого центру знайдених напрямів, промені «прокреслюються» */
  function showQuery(ids, commit, weights) {
    const nodes = $("map").querySelectorAll(".node");
    nodes.forEach((n, i) => {
      const on = ids.includes(i);
      n.classList.toggle(commit ? "hot" : "warm", on);
      if (commit) n.classList.remove("warm");
      if (commit && !on) n.classList.remove("hot");
      n.querySelector("circle").setAttribute("r", on ? (commit ? 11 : 9) : 7);
    });
    if (!commit) return;
    const q = $("qdot");
    const rays = $("rays");
    rays.innerHTML = "";
    if (!ids.length) { q.setAttribute("opacity", "0"); return; }
    const w = weights || ids.map(() => 1);
    const sum = w.reduce((x, y) => x + y, 0);
    let cx = ids.reduce((s, i, k) => s + NODES[i][0] * w[k], 0) / sum;
    let cy = ids.reduce((s, i, k) => s + NODES[i][1] * w[k], 0) / sum;
    if (ids.length === 1) { cx = (cx * 2 + 200) / 3; cy = (cy * 2 + 150) / 3 + 12; }
    q.setAttribute("opacity", "1");
    q.setAttribute("cx", cx);
    q.setAttribute("cy", cy);
    q.style.cx = cx + "px";
    q.style.cy = cy + "px";
    ids.forEach((i) => {
      const l = document.createElementNS(svgNS, "line");
      l.setAttribute("class", "ray");
      l.setAttribute("x1", cx); l.setAttribute("y1", cy);
      l.setAttribute("x2", NODES[i][0]); l.setAttribute("y2", NODES[i][1]);
      rays.appendChild(l);
      requestAnimationFrame(() => requestAnimationFrame(() => l.classList.add("on")));
    });
  }
  /* Поки людина друкує, вузли «теплішають» — видно, на що зважає агент */
  let typingTimer = 0;
  $("q").addEventListener("input", () => {
    autoGrow();
    syncSend();
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      const { svc } = score($("q").value);
      $("map").querySelectorAll(".node").forEach((n, i) => {
        if (n.classList.contains("hot")) return;
        n.classList.toggle("warm", svc[i] > 0);
        n.querySelector("circle").setAttribute("r", svc[i] > 0 ? 9 : 7);
      });
    }, 120);
  });

  /* ---------- Бриф ---------- */
  function toggleDir(i) {
    if (brief.dirs.has(i)) brief.dirs.delete(i); else brief.dirs.add(i);
    renderBrief();
  }
  function syncToggles() {
    document.querySelectorAll("[data-svc]").forEach((b) => {
      const on = brief.dirs.has(Number(b.dataset.svc));
      b.setAttribute("aria-pressed", String(on));
      b.textContent = on ? a().inBrief : a().addBrief;
    });
  }
  function renderBrief() {
    const task = $("task");
    if (!brief.edited) task.value = brief.task.join("\n");
    $("dirs").innerHTML = t().services.map((_, i) => `<button type="button" class="toggle" aria-pressed="${brief.dirs.has(i)}" data-dir="${i}">${esc(a().short[i])}</button>`).join("");
    $("briefBtn").textContent = a().briefBtn(brief.dirs.size);
    syncToggles();
  }
  $("dirs").addEventListener("click", (e) => { const x = e.target.closest("[data-dir]"); if (x) toggleDir(Number(x.dataset.dir)); });
  $("task").addEventListener("input", () => { brief.edited = true; });

  function briefText() {
    const dirs = [...brief.dirs].map((i) => t().services[i].name);
    const mail = $("email").value.trim();
    return [
      a().briefHead,
      "",
      `${a().task}:`,
      $("task").value.trim() || a().none,
      "",
      `${a().directions}:`,
      ...(dirs.length ? dirs.map((d) => `- ${d}`) : [a().none]),
      "",
      `${a().replyTo}: ${mail || a().none}`
    ].join("\n");
  }
  function sendBrief() {
    const dirs = [...brief.dirs].map((i) => a().short[i]).join(", ");
    $("briefStatus").textContent = a().opened;
    location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(a().subject(dirs || t().contactTitle))}&body=${encodeURIComponent(briefText())}`);
  }
  async function copy(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = lang === "en" ? "Copied" : lang === "ru" ? "Скопировано" : "Скопійовано";
      setTimeout(() => { btn.textContent = old; }, 1600);
    } catch { /* буфер обміну недоступний */ }
  }
  $("sendBrief").addEventListener("click", sendBrief);
  $("copyBrief").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(briefText()); $("briefStatus").textContent = a().copied; } catch { /* буфер обміну недоступний */ }
  });

  /* ---------- Поле вводу ---------- */
  const q = $("q");
  function autoGrow() { q.style.height = "auto"; q.style.height = Math.min(160, q.scrollHeight) + "px"; }
  function syncSend() { $("send").disabled = busy || !q.value.trim(); }
  $("form").addEventListener("submit", (e) => { e.preventDefault(); const v = q.value; q.value = ""; autoGrow(); syncSend(); ask(v); });
  q.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); $("form").requestSubmit(); }
  });

  /* ---------- Мобільний аркуш брифу ---------- */
  function closeSheet() { $("side").classList.remove("open"); $("briefBtn").setAttribute("aria-expanded", "false"); }
  $("briefBtn").addEventListener("click", () => {
    const open = !$("side").classList.contains("open");
    $("side").classList.toggle("open", open);
    $("briefBtn").setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeSheet(); closePop(); } });

  /* ---------- Інтерфейси минулого ---------- */
  const pop = $("pop");
  function closePop() { pop.hidden = true; $("pastBtn").setAttribute("aria-expanded", "false"); }
  $("pastBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (!pop.hidden) return closePop();
    pop.innerHTML = timelineHtml();
    pop.hidden = false;
    $("pastBtn").setAttribute("aria-expanded", "true");
  });
  document.addEventListener("click", (e) => { if (!pop.hidden && !e.target.closest("#pop")) closePop(); });

  /* ---------- Тема ---------- */
  function applyTheme(v) {
    if (v) document.documentElement.dataset.theme = v; else delete document.documentElement.dataset.theme;
    const dark = v ? v === "dark" : true; /* типова тема — темна */
    $("themeBtn").setAttribute("aria-label", dark ? a().themeLight : a().themeDark);
    $("themeBtn").setAttribute("title", dark ? a().themeLight : a().themeDark);
  }
  $("themeBtn").addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : true;
    const next = dark ? "light" : "dark";
    store.set("aic-ai-theme", next);
    applyTheme(next);
  });

  /* ---------- Мова ---------- */
  function staticText() {
    const x = a();
    document.documentElement.lang = lang;
    document.title = x.title;
    $("tagline").textContent = x.tagline;
    $("chatTitle").textContent = x.title;
    $("q").placeholder = x.placeholder;
    $("qLabel").textContent = x.placeholder;
    $("sendLabel").textContent = x.send;
    $("demo").textContent = x.demo;
    $("mapTitle").textContent = x.mapTitle;
    $("mapHint").textContent = x.mapHint;
    $("briefTitle").textContent = x.briefTitle;
    $("taskLabel").textContent = x.task;
    $("task").placeholder = x.taskPh;
    $("dirLabel").textContent = x.directions;
    $("emailLabel").textContent = x.email;
    $("sendBrief").textContent = x.sendBrief;
    $("copyBrief").textContent = x.copy;
    $("pastLabel").textContent = x.past;
    $("pastBtn").setAttribute("aria-label", x.past);
    document.querySelectorAll("#langs [data-l]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.l === lang)));
    applyTheme(store.get("aic-ai-theme"));
    labelMap();
    renderBrief();
  }
  $("langs").addEventListener("click", async (e) => {
    const b = e.target.closest("[data-l]");
    if (!b || b.dataset.l === lang || busy) return;
    lang = b.dataset.l;
    store.set("aic-lang", lang);
    staticText();
    if (!userTurns) { log.innerHTML = ""; intro(false); }
    else await agentMsg([{ p: a().langSwitched }, { chips: a().chips.slice(0, 4) }], { thinking: false });
  });

  /* ---------- Початок розмови ---------- */
  async function intro(thinking) {
    await agentMsg([
      { lead: t().heroTitle },
      { p: t().heroText },
      { p: a().invite },
      { chips: a().chips }
    ], { thinking });
  }

  /* ---------- Зоряне поле ---------- */
  /* Три шари глибини: ближчі зорі більші, яскравіші й рухаються швидше. Видно лише в темній темі. */
  function starfield() {
    const cv = document.getElementById("stars");
    const ctx = cv && cv.getContext("2d");
    if (!ctx) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)");
    const TINTS = ["255,255,255", "255,255,255", "255,255,255", "124,247,255", "155,123,255"];
    let w = 0, h = 0, stars = [], comet = null, nextComet = 0, mx = 0, my = 0, px = 0, py = 0, warp = 0, raf = 0;

    const seed = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: Math.round((w * h) / 2400) }, () => {
        const z = Math.random() ** 2.2; /* більшість — далекі й дрібні */
        return { x: Math.random() * w, y: Math.random() * h, z, tw: Math.random() * 6.28, tint: TINTS[Math.floor(Math.random() * TINTS.length)] };
      });
    };
    const visible = () => cv.offsetParent !== null && getComputedStyle(cv).display !== "none";

    const frame = (t) => {
      raf = 0;
      if (!visible()) return;
      ctx.clearRect(0, 0, w, h);
      /* поки агент думає — «стрибок»: зорі розганяються */
      warp += ((document.querySelector(".thinking") ? 1 : 0) - warp) * 0.04;
      px += (mx - px) * 0.05; py += (my - py) * 0.05;
      for (const s of stars) {
        if (!still.matches) {
          s.x -= (0.02 + s.z * 0.18) * (1 + warp * 9);
          if (s.x < -4) { s.x = w + 4; s.y = Math.random() * h; }
        }
        const x = s.x + px * s.z * 14, y = s.y + py * s.z * 10;
        const a = (0.25 + 0.75 * s.z) * (still.matches ? 0.85 : 0.65 + 0.35 * Math.sin(t * 0.0016 * (0.4 + s.z) + s.tw));
        const r = 0.35 + s.z * 1.25;
        ctx.fillStyle = `rgba(${s.tint},${a.toFixed(3)})`;
        if (warp > 0.05) {
          ctx.fillRect(x, y - r / 2, r + warp * s.z * 26, r); /* смуга при розгоні */
        } else {
          ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
        }
        if (s.z > 0.88) { /* найближчі зорі — з променями */
          ctx.fillStyle = `rgba(${s.tint},${(a * 0.35).toFixed(3)})`;
          ctx.fillRect(x - r * 4, y - 0.4, r * 8, 0.8);
          ctx.fillRect(x - 0.4, y - r * 4, 0.8, r * 8);
        }
      }
      /* зрідка — падаюча зоря */
      if (!still.matches) {
        if (!comet && t > nextComet) {
          comet = { x: w * (0.3 + Math.random() * 0.7), y: h * Math.random() * 0.45, life: 0 };
          nextComet = t + 9000 + Math.random() * 9000;
        }
        if (comet) {
          comet.life += 1;
          const k = comet.life / 55, x = comet.x - k * 260, y = comet.y + k * 120;
          const g = ctx.createLinearGradient(x, y, x + 90, y - 42);
          g.addColorStop(0, `rgba(255,255,255,${(1 - k).toFixed(3)})`);
          g.addColorStop(1, "rgba(124,247,255,0)");
          ctx.strokeStyle = g; ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 90, y - 42); ctx.stroke();
          if (k >= 1) comet = null;
        }
        raf = requestAnimationFrame(frame);
      }
    };
    const start = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(frame); };

    seed();
    start();
    let rt = 0;
    addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { seed(); start(); }, 150); });
    document.addEventListener("visibilitychange", start);
    document.addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / Math.max(1, document.body.clientHeight) - 0.5; });
    still.addEventListener("change", start);
    /* тема перемикається атрибутом на <html> — перемальовуємо, коли поле знову видно */
    new MutationObserver(start).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* Нахил голографічного заголовка за курсором: --hx/--hy від 0 до 1 */
  let tiltRaf = 0, hx = .5, hy = .5;
  document.addEventListener("pointermove", (e) => {
    hx = e.clientX / innerWidth;
    hy = e.clientY / Math.max(1, document.body.clientHeight);
    if (tiltRaf) return;
    tiltRaf = requestAnimationFrame(() => {
      tiltRaf = 0;
      document.documentElement.style.setProperty("--hx", hx.toFixed(3));
      document.documentElement.style.setProperty("--hy", hy.toFixed(3));
    });
  });

  buildMap();
  staticText();
  syncSend();
  intro(false);
  starfield();
})();
