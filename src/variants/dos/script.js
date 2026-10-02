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
        "  LANG UK|EN|RU   змінити мову",
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
        "  LANG UK|EN|RU   switch language",
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
        "  LANG UK|EN|RU   сменить язык",
        "  COLOR           сменить монитор",
        "  CLS             очистить экран",
        "  VER             версия",
        "  BOOT            перезагрузить",
        "  NC              вернуться к панелям",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
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
        ["LANG", " UK|EN|RU", "мова"],
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
        ["LANG", " UK|EN|RU", "language"],
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
        ["LANG", " UK|EN|RU", "язык"],
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
  const LANGS = ["uk", "en", "ru"];
  const COMMANDS = ["HELP", "DIR", "TYPE", "MAIL", "LANG", "COLOR", "CLS", "VER", "DATE", "TIME", "BOOT", "NC", "UNIX", "APPLE", "LISA", "LINUX", "MC", "WIN", "AI", "ECHO", "CD"];

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
    ru: { versions: "Другие версии сайта:", sections: "Разделы сайта:", items: ["О компании", "Услуги", "Партнёры", "Контакты", "Помощь"] }
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
        `<span class="d">${esc(s.source)}:</span> <a href="${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/" target="_blank" rel="noopener">artintellico.com</a>`,
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
      if (cmd === "LANG") argsHtml = " " + ["UK", "EN", "RU"].map((l) => tok(l, "lang " + l.toLowerCase())).join("|");
      if (cmd === "COLOR") argsHtml = " " + Object.keys(COLOR_CODES).map((code) => tok(code, "color " + code)).join("|");
      const cmdHtml = cmd === "TYPE" || cmd === "LANG" ? esc(cmd) : tok(cmd, cmd.toLowerCase());
      return "  " + cmdHtml + argsHtml + pad + esc(desc);
    };
    return [esc(k.helpTitle), ...k.help.map(row), "", `<span class="d">${esc(k.keys)}</span>`, ""];
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
        const l = arg.toLowerCase();
        if (!LANGS.includes(l)) return emit(["LANG " + ["UK", "EN", "RU"].map((x) => tok(x, "lang " + x.toLowerCase())).join("|")]);
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
        location.href = "/ai/";
        return;
      case "WIN":
        await emit([""]);
        await sleep(200);
        location.href = "/win31/";
        return;
      case "MC":
        await emit(["Starting Midnight Commander..."]);
        await sleep(400);
        location.href = "/mc/";
        return;
      case "LINUX": case "REDHAT":
        await emit(["Booting Linux..."]);
        await sleep(400);
        location.href = "/linux/";
        return;
      case "LISA":
        await emit(["Starting ArtIntelliCo Office System..."]);
        await sleep(400);
        location.href = "/lisa/";
        return;
      case "APPLE": case "APPLE2":
        await emit(["Loading Apple ][..."]);
        await sleep(400);
        location.href = "/apple/";
        return;
      case "UNIX": case "TELNET":
        await emit(["Trying artintellico...", "Connected to artintellico."]);
        await sleep(500);
        location.href = "/unix/";
        return;
      case "NC": case "EXIT":
        await emit([esc(k.nc)]);
        await sleep(400);
        location.href = "/";
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
