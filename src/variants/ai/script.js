(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];

  /* Тексти сайту. services — відповіді агента: name, card (картка), say (суть), inc (що входить), caveat (чесна оговорка), q (уточнювальне питання) */
  const I18N = {
    uk: {
      heroTitle: "Ми створюємо ІТ рішення, що працюють на ваш бізнес",
      heroText: "Команда ArtIntelliCo допомагає цифровізувати та автоматизувати ваші бізнес-процеси шляхом розробки та впровадження сучасних ІТ рішень.",
      phrases: ["розробляємо SaaS-платформи", "будуємо CRM та ERP системи", "впроваджуємо штучний інтелект", "переносимо інфраструктуру в хмару"],
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
      partnersTitle: "Наші партнери",
      contactTitle: "Розкажіть про вашу задачу",
      contactText: "Якщо у вас є пропозиція щодо співпраці або ви хочете дізнатися більше про наші рішення та досвід — напишіть нам на пошту."
    },
    en: {
      heroTitle: "We build IT solutions that work for your business",
      heroText: "The ArtIntelliCo team helps you digitalise and automate business processes by designing and delivering modern IT solutions.",
      phrases: ["build SaaS platforms", "ship CRM and ERP systems", "put AI to work", "move infrastructure to the cloud"],
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
      partnersTitle: "Our partners",
      contactTitle: "Tell us about your project",
      contactText: "If you have a partnership proposal or want to know more about our solutions and experience — drop us an email."
    },
    ru: {
      heroTitle: "Мы создаём работающие ИТ решения для вашего бизнеса",
      heroText: "Команда ArtIntelliCo помогает цифровизировать и автоматизировать ваши бизнес-процессы путём разработки и внедрения современных ИТ решений.",
      phrases: ["разрабатываем SaaS-платформы", "строим CRM и ERP системы", "внедряем искусственный интеллект", "переносим инфраструктуру в облако"],
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
      partnersTitle: "Наши партнёры",
      contactTitle: "Расскажите о вашей задаче",
      contactText: "Если у вас есть предложение о сотрудничестве или вы хотите узнать больше о наших решениях и опыте — напишите нам на почту."
    },
    de: {
      heroTitle: "Wir entwickeln IT-Lösungen, die für Ihr Unternehmen arbeiten",
      heroText: "Das Team von ArtIntelliCo hilft Ihnen, Ihre Geschäftsprozesse zu digitalisieren und zu automatisieren – mit modernen IT-Lösungen, die wir für Sie entwickeln und einführen.",
      phrases: ["SaaS-Plattformen entwickeln", "CRM- und ERP-Systeme bauen", "künstliche Intelligenz einsetzen", "Infrastruktur in die Cloud bringen"],
      services: [
        { name: "Konzeption von IT-Lösungen",
          card: "Wir klären, was das System leisten muss, und machen daraus Anforderungen, mit denen Fachabteilung und Entwickler gleichermaßen arbeiten können.",
          say: "In dieser Phase wird noch nicht programmiert. Zuerst sprechen wir mit den Menschen, die später mit dem System arbeiten – Buchhaltung, Lager, Vertrieb, nicht nur mit der Geschäftsführung – und finden heraus, welches Problem es tatsächlich lösen soll.",
          inc: ["Interviews und Analyse der aktuellen Prozesse", "Geschäftsanforderungen und Szenarien", "Vergleich: Standardlösung oder Eigenentwicklung", "Pflichtenheft mit Zeit- und Budgetschätzung je Phase"],
          caveat: "Ich sage es gleich offen: Manchmal raten wir am Ende, nichts zu entwickeln, sondern ein fertiges Produkt zu nehmen und anzupassen. Das Dokument, das Sie erhalten, kann jedes Team umsetzen, nicht nur unseres.",
          q: "Gibt es schon eine Beschreibung der Aufgabe, oder eher das Gefühl, dass es „so nicht weitergehen kann“?" },
        { name: "SaaS-Entwicklung",
          card: "SaaS-Plattformen: von der ersten Version für Pilotkunden bis zum Dienst mit Kundenbereichen, Tarifen und Abonnements.",
          say: "Wir begleiten SaaS von der ersten Version für Pilotkunden bis zu einem Dienst, in dem jeder Kunde seinen eigenen Bereich, Tarif und Zugang hat. Entscheidend ist, dass sich ein neuer Kunde selbst registrieren, bezahlen und loslegen kann, ohne beim Support anzurufen.",
          inc: ["getrennte Daten für jeden Kunden", "Registrierung, Tarife, Abonnements, Zahlung", "Kundenbereiche, Rollen, Berechtigungen", "Integrationen und eine offene API", "Skalierung unter Last"],
          caveat: "Mandantenfähigkeit und Abrechnung plant man am besten vom ersten Tag an ein: Sie nachträglich umzubauen, wenn schon Kunden im System sind, kostet ein Vielfaches. Und lassen Sie die erste Version nicht zu lange liegen – echte Nutzer zeigen schnell, welche Funktionen überflüssig sind.",
          q: "Haben Sie schon Pilotkunden, oder ist das Produkt noch eine Idee?" },
        { name: "Webentwicklung",
          card: "Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen – mit Analytics ab dem Start.",
          say: "Wir entwickeln Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen. Vorher legen wir aber gemeinsam fest, was als Ergebnis zählt, und die Analytics läuft schon vor dem Start, nicht erst ein halbes Jahr später.",
          inc: ["Prototyp und Design", "Frontend, Backend, Admin-Bereich", "Zahlung, Versand, CRM, Buchhaltung", "SEO-Grundlagen, Ladezeit, Analytics", "Start und Betreuung"],
          caveat: "Die Technik richtet sich nach der Aufgabe, nicht umgekehrt: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Homepage-Baukasten.",
          q: "Woran würden Sie merken, dass die Website funktioniert: Anfragen, Umsatz oder etwas anderes?" },
        { name: "Mobile Apps",
          card: "Apps für iOS und Android samt Server und Admin-Bereich – wenn eine App wirklich das Richtige ist.",
          say: "Wir entwickeln Apps für iOS und Android zusammen mit dem Serverteil und dem Admin-Bereich und veröffentlichen sie anschließend im App Store und bei Google Play.",
          inc: ["iOS und Android", "Server und API", "Admin-Bereich für Inhalte, Bestellungen, Nutzer", "Push-Benachrichtigungen und Analytics", "Veröffentlichung in den Stores"],
          caveat: "Aber eine App braucht man nicht immer. Sie lohnt sich, wenn Kunden regelmäßig wiederkommen: nachbestellen, den Status verfolgen, Punkte sammeln. Wenn man Sie einmal im Jahr besucht, ist eine gute mobile Website günstiger, und ich würde damit anfangen. Ob nativ oder plattformübergreifend, entscheiden wir nach Budget und danach, ob Kamera, Standort und Offline-Modus gebraucht werden.",
          q: "Wie oft würden Ihre Kunden diese App tatsächlich öffnen?" },
        { name: "KI-Lösungen",
          card: "Automatisierung von Geschäftsprozessen mit KI-Agenten: Anfragen, CRM, Kundenantworten, Dokumente.",
          say: "Im Kern geht es um KI-Agenten, die Routineschritte eines Prozesses selbst erledigen: Anfragen sortieren, das CRM befüllen, Antworten an Kunden vorbereiten. Ein Mensch prüft und entscheidet weiterhin. Ich bin übrigens selbst ein einfaches Beispiel für so einen Agenten: Ich werte Ihre Anfrage aus, ordne sie den passenden Leistungen zu und stelle das Briefing zusammen. Abschicken müssen Sie es selbst.",
          inc: ["KI-Agenten für Routineschritte im Prozess", "Chatbots und Assistenten", "Auslesen von Dokumenten", "Klassifizierung von Anfragen, Suche in der Wissensdatenbank", "Nachfrageprognosen, Datenanalyse", "Pilotprojekt mit gemessener Qualität auf Ihren Daten"],
          caveat: "Ganz offen: Die Hälfte der Ideen nach dem Motto „Bauen wir doch ein neuronales Netz ein“ löst gewöhnliche Automatisierung ganz ohne KI, und dann empfehlen wir genau das. Wo ein Modell wirklich nötig ist, beginnen wir mit einem Pilotprojekt auf Ihren Daten, damit die Genauigkeit vor der eigentlichen Entwicklung feststeht.",
          q: "Welche Arbeit erledigen Ihre Leute heute stundenlang von Hand: E-Mails, Dokumente, Anfragen?" },
        { name: "CRM- und ERP-Entwicklung",
          card: "CRM und ERP nach Ihren Prozessen: Vertrieb, Lager, Produktion, Finanzen – statt eines Wildwuchses aus Tabellen.",
          say: "Wir bauen CRM und ERP um die Art herum, wie Ihr Unternehmen tatsächlich arbeitet: Vertrieb, Lager, Produktion, Finanzen – und nur mit den Modulen, die Sie brauchen. Die Geschäftsführung sieht den Stand der Dinge ohne wöchentliche Berichte aus jeder Abteilung.",
          inc: ["nur die nötigen Module", "Rollen, Rechte, Protokoll aller Aktionen", "Berichte und Dashboards", "Datenübernahme aus Tabellen und Altsystemen", "Buchhaltung, Telefonie, E-Mail"],
          caveat: "Wenn Ihr Prozess dem Standard ähnelt, reicht ein fertiges CRM völlig, und das sage ich Ihnen dann auch. Ein eigenes System rechnet sich, wenn Ihre Mitarbeiter die Hälfte der Arbeit in Tabellen erledigen, weil die Standardsoftware „das nicht kann“. Wir führen es Abteilung für Abteilung ein, damit die Arbeit keinen Tag stillsteht.",
          q: "Was nutzen Sie derzeit anstelle eines CRM: Tabellen, eine Standardsoftware, etwas Selbstgebautes?" },
        { name: "Cloud-Lösungen",
          card: "Umzug zu Amazon Web Services, ganz oder in Teilen – mit Kostenrechnung und Rückfallplan.",
          say: "Wir ziehen Ihre Infrastruktur zu Amazon Web Services um, komplett oder in Teilen, und achten darauf, dass sie läuft und nicht grundlos teurer wird.",
          inc: ["Audit und Kostenrechnung", "Architektur in AWS, Migrationsplan", "Server, Datenbanken, Dateien", "Backups und Monitoring", "Kostenoptimierung nach dem Umzug"],
          caveat: "Die Cloud ist nicht immer günstiger als ein eigener Server. Sie gewinnt, wenn die Last stark schwankt, Ausfallsicherheit gefragt ist oder Umgebungen in Minuten bereitstehen müssen. Deshalb zuerst Audit und Kostenrechnung, dann ein schrittweiser Umzug mit Rückfallplan für jeden Schritt.",
          q: "Was gibt den Anstoß zum Umzug: die Last, die Zuverlässigkeit oder die Kosten Ihrer jetzigen Server?" },
        { name: "Unternehmensinfrastruktur auf Red Hat",
          card: "Infrastruktur auf Red Hat Enterprise Linux, OpenShift und Ansible, die sich prüfen und reproduzieren lässt.",
          say: "Wir bauen Infrastruktur auf Red Hat: Server mit Red Hat Enterprise Linux, Anwendungen auf der Container-Plattform OpenShift und die Konfiguration als Code in Ansible, sodass sich jeder Server nach Playbook neu aufsetzen lässt und nicht aus dem Gedächtnis des Administrators.",
          inc: ["Server-Audit und Migrationsplan", "RHEL mit Updates über Satellite", "OpenShift für Ihre Anwendungen", "Automatisierung mit Ansible", "Konten und Zugriffe (Identity Management)", "Monitoring, Backups, Dokumentation"],
          caveat: "Red Hat wird als Subskription bezogen, und die lohnt sich nicht immer. Sinnvoll ist sie, wenn die Infrastruktur jahrelang laufen und Audits bestehen muss: Dann zahlen Sie für Herstellersupport und einen langen Lebenszyklus, bei RHEL sind das zehn Jahre. Red Hat ist unser Partner, daher helfen wir auch bei den Subskriptionen.",
          q: "Wie viele Server haben Sie heute, und was läuft darauf?" },
        { name: "APIs und Integrationen",
          card: "APIs für Ihre Systeme und Anbindung an Zahlung, Versand, CRM und Buchhaltung, damit niemand Daten doppelt eintippt.",
          say: "Wir schreiben APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen: Zahlung, Versand, CRM, Buchhaltung. Das Ziel ist einfach: Daten werden einmal erfasst und kommen von selbst dort an, wo sie gebraucht werden.",
          inc: ["API-Design und Dokumentation", "Zahlung, Versand, CRM, Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholungen bei Fehlern", "Monitoring und Benachrichtigungen"],
          caveat: "Integrationen brechen leise: Ein Partner ändert seine API, und Bestellungen kommen nicht mehr an. Deshalb gehört Monitoring immer dazu. Von einem Ausfall sollte Ihnen das System berichten, nicht ein Kunde.",
          q: "Wo werden bei Ihnen heute Daten doppelt eingegeben?" },
        { name: "Technischer Support",
          card: "Betreuung und Weiterentwicklung von IT-Systemen, auch von solchen, die nicht wir gebaut haben.",
          say: "Wir betreuen IT-Systeme und entwickeln sie weiter, auch solche, die nicht von uns stammen: Wir überwachen Verfügbarkeit und Fehler, spielen Sicherheitsupdates ein und nehmen nebenbei kleinere Verbesserungen vor.",
          inc: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Backups mit getesteter Wiederherstellung", "geplante Weiterentwicklung", "Audit und Dokumentation fremder Systeme"],
          caveat: "Hat ein anderer Dienstleister das System gebaut, beginnen wir mit Audit und Dokumentation. Ohne das ist jede Änderung ein Glücksspiel, und etwas anderes werde ich Ihnen nicht versprechen.",
          q: "Wer betreut das System derzeit, und gibt es eine Dokumentation dazu?" }
      ],
      partnersTitle: "Unsere Partner",
      contactTitle: "Erzählen Sie uns von Ihrem Projekt",
      contactText: "Wenn Sie ein Angebot zur Zusammenarbeit haben oder mehr über unsere Lösungen und unsere Erfahrung wissen möchten, schreiben Sie uns eine E-Mail."
    },
    fr: {
      heroTitle: "Nous créons des solutions informatiques qui travaillent pour votre entreprise",
      heroText: "L'équipe ArtIntelliCo vous aide à numériser et à automatiser vos processus métier en concevant et en déployant des solutions informatiques modernes.",
      phrases: ["développer des plateformes SaaS", "construire des systèmes CRM et ERP", "mettre l'intelligence artificielle au travail", "migrer l'infrastructure vers le cloud"],
      services: [
        { name: "Conception de solutions informatiques",
          card: "Nous déterminons ce que le système doit faire et le traduisons en exigences claires pour les métiers comme pour les développeurs.",
          say: "À ce stade, on ne code encore rien. Nous commençons par parler aux personnes qui utiliseront le système (comptabilité, entrepôt, commerciaux, pas seulement la direction) pour comprendre quel problème il doit réellement résoudre.",
          inc: ["entretiens et analyse des processus actuels", "exigences métier et scénarios", "comparaison\u00a0: solution du marché ou développement sur mesure", "cahier des charges avec estimation des délais et du budget par phase"],
          caveat: "Je préfère vous prévenir\u00a0: il arrive que nous conseillions de ne rien développer et de paramétrer un produit existant. Dans tous les cas, le document final peut servir à n'importe quelle équipe, pas seulement à la nôtre.",
          q: "Avez-vous déjà une description du besoin, ou plutôt le sentiment que «\u00a0ça ne peut plus durer\u00a0»\u00a0?" },
        { name: "Développement SaaS",
          card: "Des plateformes SaaS, de la première version pour les clients pilotes jusqu'au service avec espaces clients, formules et abonnements.",
          say: "Nous accompagnons un SaaS de la première version pour les clients pilotes jusqu'au service où chaque client dispose de son espace, de sa formule et de son tableau de bord. L'essentiel\u00a0: qu'un nouveau client puisse s'inscrire, payer et commencer à travailler sans appeler le support.",
          inc: ["données isolées pour chaque client", "inscription, formules, abonnements, paiement", "espaces clients, rôles, droits d'accès", "intégrations et API publique", "montée en charge"],
          caveat: "L'architecture multi-locataire et la facturation se prévoient dès le premier jour\u00a0: les refaire une fois les clients installés coûte plusieurs fois plus cher. Et ne tardez pas trop avec la première version\u00a0: de vrais utilisateurs vous montreront vite quelles fonctions sont superflues.",
          q: "Avez-vous déjà des clients pilotes, ou le produit en est-il encore au stade de l'idée\u00a0?" },
        { name: "Développement web",
          card: "Sites d'entreprise, places de marché, boutiques en ligne, réservation et outils web internes, avec l'analytique dès le lancement.",
          say: "Nous réalisons des sites d'entreprise, des places de marché, des boutiques en ligne, des systèmes de réservation et des outils web internes. Mais d'abord, nous convenons ensemble de ce qui comptera comme résultat, et l'analytique est active avant le lancement, pas six mois plus tard.",
          inc: ["prototype et design", "frontend, backend, back-office", "paiement, livraison, CRM, comptabilité", "bases SEO, vitesse, analytique", "lancement et suivi"],
          caveat: "La technologie s'adapte au projet, pas l'inverse\u00a0: une landing page n'a pas besoin d'une plateforme lourde, et une place de marché ne tiendra pas dans un constructeur de sites.",
          q: "À quoi verrez-vous que le site fonctionne\u00a0: demandes de contact, ventes, autre chose\u00a0?" },
        { name: "Applications mobiles",
          card: "Applications iOS et Android avec la partie serveur et le back-office, quand une application est vraiment utile.",
          say: "Nous développons des applications iOS et Android avec la partie serveur et le back-office, puis nous les publions sur l'App Store et Google Play.",
          inc: ["iOS et Android", "serveur et API", "back-office pour le contenu, les commandes, les utilisateurs", "notifications push et analytique", "publication dans les stores"],
          caveat: "Mais une application n'est pas toujours nécessaire. Elle se justifie quand les clients reviennent régulièrement\u00a0: ils recommandent, suivent une livraison, cumulent des points. Si l'on vous rend visite une fois par an, un bon site mobile coûtera moins cher, et je commencerais par là. Natif ou multiplateforme\u00a0: nous trancherons selon le budget et selon vos besoins en caméra, géolocalisation et mode hors ligne.",
          q: "À quelle fréquence vos clients ouvriraient-ils réellement cette application\u00a0?" },
        { name: "Solutions d'intelligence artificielle",
          card: "Automatisation des processus métier par des agents IA\u00a0: demandes, CRM, réponses aux clients, documents.",
          say: "L'essentiel, ce sont des agents IA qui exécutent seuls les étapes répétitives d'un processus\u00a0: trier les demandes, remplir le CRM, préparer les réponses aux clients. Une personne vérifie et décide toujours. Je suis d'ailleurs moi-même un exemple simple d'un tel agent\u00a0: j'analyse votre demande, je l'associe aux bons services et je rédige le brief, mais c'est vous qui l'envoyez.",
          inc: ["agents IA pour les étapes répétitives", "chatbots et assistants", "extraction de données des documents", "classement des demandes, recherche dans la base de connaissances", "prévision de la demande, analyse de données", "pilote avec mesure de la qualité sur vos données"],
          caveat: "Je serai franc\u00a0: la moitié des idées du type «\u00a0ajoutons un réseau de neurones\u00a0» se règlent avec une simple automatisation, sans aucune IA, et c'est alors ce que nous recommanderons. Là où un modèle est vraiment nécessaire, nous commençons par un pilote sur vos données, pour connaître la précision avant le développement principal.",
          q: "Quel travail vos équipes font-elles encore à la main pendant des heures\u00a0: e-mails, documents, demandes\u00a0?" },
        { name: "Développement CRM et ERP",
          card: "CRM et ERP adaptés à vos processus\u00a0: ventes, entrepôt, production, finances, au lieu d'une jungle de tableurs.",
          say: "Nous construisons le CRM et l'ERP autour de la façon dont votre entreprise travaille vraiment\u00a0: ventes, entrepôt, production, finances, avec uniquement les modules nécessaires. La direction voit où en sont les choses sans rapports hebdomadaires de chaque service.",
          inc: ["uniquement les modules utiles", "rôles, droits, journal des actions", "rapports et tableaux de bord", "reprise des données depuis les tableurs et les anciens systèmes", "comptabilité, téléphonie, messagerie"],
          caveat: "Si votre processus est standard, un CRM du marché fera très bien l'affaire, et je vous le dirai. Un système sur mesure devient rentable quand les commerciaux gèrent la moitié de leur travail dans des tableurs parce que le logiciel standard «\u00a0ne sait pas faire\u00a0». Nous déployons service par service, pour que le travail ne s'arrête pas un seul jour.",
          q: "Qu'utilisez-vous aujourd'hui à la place d'un CRM\u00a0: tableurs, logiciel standard, outil maison\u00a0?" },
        { name: "Solutions cloud",
          card: "Migration vers Amazon Web Services, totale ou partielle, avec estimation des coûts et plan de retour arrière.",
          say: "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou par parties, et veillons à ce qu'elle fonctionne sans devenir plus chère sans raison.",
          inc: ["audit et estimation des coûts", "architecture AWS, plan de migration", "serveurs, bases de données, fichiers", "sauvegardes et supervision", "optimisation des coûts après la migration"],
          caveat: "Le cloud n'est pas toujours moins cher qu'un serveur à soi. Il l'emporte quand la charge varie fortement, quand il faut de la tolérance aux pannes ou des environnements prêts en quelques minutes. Donc d'abord un audit et un chiffrage, puis une migration par étapes avec un plan de retour arrière à chaque étape.",
          q: "Qu'est-ce qui vous pousse à migrer\u00a0: la charge, la fiabilité ou le coût de vos serveurs actuels\u00a0?" },
        { name: "Infrastructure d'entreprise sous Red Hat",
          card: "Une infrastructure sous Red Hat Enterprise Linux, OpenShift et Ansible, que l'on peut auditer et reproduire.",
          say: "Nous bâtissons l'infrastructure sur Red Hat\u00a0: serveurs sous Red Hat Enterprise Linux, applications sur la plateforme de conteneurs OpenShift et configuration décrite dans Ansible, pour que chaque serveur se reconstruise à partir d'un playbook et non de la mémoire de l'administrateur.",
          inc: ["audit des serveurs et plan de migration", "RHEL avec mises à jour via Satellite", "OpenShift pour vos applications", "automatisation avec Ansible", "comptes et accès (Identity Management)", "supervision, sauvegardes, documentation"],
          caveat: "Red Hat fonctionne par abonnement, et ce n'est pas toujours justifié. Cela a du sens quand l'infrastructure doit tourner des années et passer des audits\u00a0: vous payez alors le support de l'éditeur et un long cycle de vie, dix ans pour RHEL. Red Hat est notre partenaire, nous pouvons donc aussi vous aider pour les abonnements.",
          q: "Combien de serveurs avez-vous aujourd'hui, et sous quel système tournent-ils\u00a0?" },
        { name: "API et intégrations",
          card: "Des API pour vos systèmes et des liaisons avec le paiement, la livraison, le CRM et la comptabilité, pour ne plus saisir deux fois les mêmes données.",
          say: "Nous développons des API pour vos systèmes et les relions aux services que vous utilisez déjà\u00a0: paiement, livraison, CRM, comptabilité. L'objectif est simple\u00a0: une donnée est saisie une seule fois et arrive d'elle-même là où il faut.",
          inc: ["conception et documentation d'API", "paiement, livraison, CRM, comptabilité", "échanges entre systèmes internes", "files d'attente et relances en cas d'échec", "supervision et alertes"],
          caveat: "Les intégrations tombent en panne en silence\u00a0: un partenaire modifie son API et les commandes n'arrivent plus. C'est pourquoi la supervision fait toujours partie du travail. C'est le système qui doit vous signaler une panne, pas un client.",
          q: "Où saisit-on aujourd'hui les mêmes données deux fois chez vous\u00a0?" },
        { name: "Support technique",
          card: "Support et évolution de systèmes informatiques, y compris ceux que nous n'avons pas développés.",
          say: "Nous assurons le support de systèmes informatiques et les faisons évoluer, y compris ceux que nous n'avons pas développés\u00a0: surveillance de la disponibilité et des erreurs, mises à jour de sécurité, petites améliorations au fil de l'eau.",
          inc: ["surveillance de la disponibilité et des erreurs", "correctifs et mises à jour de sécurité", "sauvegardes avec tests de restauration", "évolutions planifiées", "audit et documentation de systèmes hérités"],
          caveat: "Si un autre prestataire a développé le système, nous commençons par un audit et une documentation. Sans cela, chaque modification est un coup de dés, et je ne vous promettrai pas le contraire.",
          q: "Qui assure la maintenance du système aujourd'hui, et existe-t-il une documentation\u00a0?" }
      ],
      partnersTitle: "Nos partenaires",
      contactTitle: "Parlez-nous de votre projet",
      contactText: "Si vous avez une proposition de collaboration ou souhaitez en savoir plus sur nos solutions et notre expérience, écrivez-nous par e-mail."
    },
    es: {
      heroTitle: "Creamos soluciones de TI que trabajan para su negocio",
      heroText: "El equipo de ArtIntelliCo le ayuda a digitalizar y automatizar sus procesos de negocio diseñando e implantando soluciones de TI modernas.",
      phrases: ["desarrollar plataformas SaaS", "construir sistemas CRM y ERP", "poner la inteligencia artificial a trabajar", "llevar la infraestructura a la nube"],
      services: [
        { name: "Concepto de la solución de TI",
          card: "Aclaramos qué debe hacer el sistema y lo convertimos en requisitos que entienden tanto el negocio como los desarrolladores.",
          say: "En esta fase todavía no se programa nada. Primero hablamos con las personas que van a trabajar con el sistema (contabilidad, almacén, comerciales, no solo la dirección) y averiguamos qué problema tiene que resolver realmente.",
          inc: ["entrevistas y análisis de los procesos actuales", "requisitos de negocio y escenarios", "comparativa: solución existente o desarrollo a medida", "especificación con estimación de plazos y presupuesto por fases"],
          caveat: "Se lo advierto con franqueza: a veces la conclusión es no desarrollar nada y configurar un producto existente. En cualquier caso, el documento resultante sirve a cualquier equipo, no solo al nuestro.",
          q: "¿Tiene ya alguna descripción de la tarea o, por ahora, solo la sensación de que «así no se puede seguir»?" },
        { name: "Desarrollo SaaS",
          card: "Plataformas SaaS: desde la primera versión para clientes piloto hasta un servicio con áreas de cliente, planes y suscripciones.",
          say: "Llevamos un SaaS desde la primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, plan y panel. Lo más importante es que un cliente nuevo pueda registrarse, pagar y empezar a trabajar sin llamar a soporte.",
          inc: ["datos aislados para cada cliente", "registro, planes, suscripciones, pagos", "áreas de cliente, roles, permisos", "integraciones y API pública", "escalado según la carga"],
          caveat: "La arquitectura multicliente y la facturación conviene plantearlas desde el primer día: rehacerlas cuando ya hay clientes dentro cuesta varias veces más. Y no retrase demasiado la primera versión: los usuarios reales le mostrarán enseguida qué funciones sobran.",
          q: "¿Tiene ya clientes piloto o el producto es todavía una idea?" },
        { name: "Desarrollo web",
          card: "Webs corporativas, marketplaces, tiendas online, reservas y herramientas web internas, con analítica desde el lanzamiento.",
          say: "Desarrollamos webs corporativas, marketplaces, tiendas online, sistemas de reservas y herramientas web internas. Pero antes acordamos qué se considera un resultado, y la analítica se activa antes del lanzamiento, no seis meses después.",
          inc: ["prototipo y diseño", "frontend, backend, panel de administración", "pagos, envíos, CRM, contabilidad", "base SEO, velocidad, analítica", "lanzamiento y mantenimiento"],
          caveat: "La tecnología se elige según la tarea, no al revés: una landing page no necesita una plataforma pesada y un marketplace no cabe en un creador de webs.",
          q: "¿Qué le indicaría que la web funciona: solicitudes, ventas u otra cosa?" },
        { name: "Aplicaciones móviles",
          card: "Aplicaciones para iOS y Android con su servidor y panel de administración, cuando de verdad hacen falta.",
          say: "Desarrollamos aplicaciones para iOS y Android junto con la parte de servidor y el panel de administración, y después las publicamos en App Store y Google Play.",
          inc: ["iOS y Android", "servidor y API", "panel para contenidos, pedidos, usuarios", "notificaciones push y analítica", "publicación en las tiendas"],
          caveat: "Pero no siempre hace falta una aplicación. Se justifica cuando el cliente vuelve con regularidad: repite pedidos, sigue el estado de un envío, acumula puntos. Si le visitan una vez al año, una buena web móvil sale más barata, y yo empezaría por ahí. Nativa o multiplataforma: lo decidiremos según el presupuesto y según si necesita cámara, geolocalización y modo sin conexión.",
          q: "¿Con qué frecuencia abrirían realmente sus clientes esta aplicación?" },
        { name: "Soluciones con inteligencia artificial",
          card: "Automatización de procesos de negocio con agentes de IA: solicitudes, CRM, respuestas a clientes, documentos.",
          say: "Lo central son agentes de IA que realizan por sí solos los pasos rutinarios de un proceso: clasificar solicitudes, rellenar el CRM, preparar respuestas a los clientes. Una persona sigue revisando y decidiendo. Por cierto, yo mismo soy un ejemplo sencillo de ese tipo de agente: analizo su consulta, la relaciono con los servicios adecuados y preparo el brief, pero quien lo envía es usted.",
          inc: ["agentes de IA para pasos rutinarios", "chatbots y asistentes", "extracción de datos de documentos", "clasificación de solicitudes, búsqueda en la base de conocimiento", "previsión de demanda, análisis de datos", "piloto con medición de la calidad sobre sus datos"],
          caveat: "Se lo digo sin rodeos: la mitad de las ideas del tipo «añadamos una red neuronal» se resuelven con automatización corriente, sin nada de IA, y entonces eso es lo que le recomendaremos. Donde un modelo sí hace falta, empezamos con un piloto sobre sus datos para conocer la precisión antes del desarrollo principal.",
          q: "¿Qué trabajo hace hoy su gente a mano durante horas: correos, documentos, solicitudes?" },
        { name: "Desarrollo de CRM y ERP",
          card: "CRM y ERP a la medida de sus procesos: ventas, almacén, producción, finanzas, en lugar de un caos de hojas de cálculo.",
          say: "Construimos el CRM y el ERP en torno a cómo trabaja realmente su empresa: ventas, almacén, producción, finanzas, y solo con los módulos que necesita. La dirección ve cómo van las cosas sin informes semanales de cada departamento.",
          inc: ["solo los módulos necesarios", "roles, permisos, registro de acciones", "informes y paneles", "migración desde hojas de cálculo y sistemas antiguos", "contabilidad, telefonía, correo"],
          caveat: "Si su proceso es estándar, un CRM comercial le servirá perfectamente, y se lo diré. Un sistema propio se amortiza cuando los comerciales llevan la mitad del trabajo en hojas de cálculo porque el software estándar «no lo permite». Lo implantamos departamento por departamento para que el trabajo no se detenga ni un día.",
          q: "¿Qué usan ahora en lugar de un CRM: hojas de cálculo, un software estándar, algo propio?" },
        { name: "Soluciones en la nube",
          card: "Migración a Amazon Web Services, completa o por partes, con cálculo de costes y plan de vuelta atrás.",
          say: "Trasladamos su infraestructura a Amazon Web Services, completa o por partes, y nos aseguramos de que funcione y no se encarezca sin motivo.",
          inc: ["auditoría y cálculo de costes", "arquitectura en AWS, plan de migración", "servidores, bases de datos, archivos", "copias de seguridad y monitorización", "optimización de costes tras la migración"],
          caveat: "La nube no siempre es más barata que un servidor propio. Sale ganando cuando la carga sube y baja bruscamente, cuando se necesita tolerancia a fallos o cuando los entornos deben levantarse en minutos. Por eso, primero auditoría y cálculo, y después una migración por etapas, con plan de vuelta atrás en cada paso.",
          q: "¿Qué le empuja a migrar: la carga, la fiabilidad o el coste de sus servidores actuales?" },
        { name: "Infraestructura empresarial con Red Hat",
          card: "Infraestructura con Red Hat Enterprise Linux, OpenShift y Ansible que se puede auditar y reproducir.",
          say: "Construimos infraestructura con Red Hat: servidores con Red Hat Enterprise Linux, aplicaciones en la plataforma de contenedores OpenShift y la configuración descrita en Ansible, para que cualquier servidor se pueda reconstruir con un playbook y no de memoria del administrador.",
          inc: ["auditoría de servidores y plan de transición", "RHEL con actualizaciones mediante Satellite", "OpenShift para sus aplicaciones", "automatización con Ansible", "cuentas y accesos (Identity Management)", "monitorización, copias de seguridad, documentación"],
          caveat: "Red Hat es una suscripción y no siempre compensa. Tiene sentido cuando la infraestructura debe funcionar durante años y superar auditorías: entonces paga por el soporte del fabricante y un ciclo de vida largo, diez años en el caso de RHEL. Red Hat es nuestro socio, así que también le ayudamos con las suscripciones.",
          q: "¿Cuántos servidores tiene ahora y con qué sistema funcionan?" },
        { name: "API e integraciones",
          card: "API para sus sistemas y conexión con pagos, envíos, CRM y contabilidad, para que nadie introduzca los datos dos veces.",
          say: "Desarrollamos API para sus sistemas y las conectamos con los servicios que ya utiliza: pagos, envíos, CRM, contabilidad. El objetivo es sencillo: los datos se introducen una vez y llegan solos adonde deben.",
          inc: ["diseño y documentación de API", "pagos, envíos, CRM, contabilidad", "intercambio entre sistemas internos", "colas y reintentos ante fallos", "monitorización y alertas"],
          caveat: "Las integraciones fallan en silencio: un socio cambia su API y los pedidos dejan de llegar. Por eso la monitorización siempre forma parte del trabajo. De un fallo debe avisarle el sistema, no un cliente.",
          q: "¿Dónde se introducen hoy los mismos datos dos veces en su empresa?" },
        { name: "Soporte técnico",
          card: "Soporte y evolución de sistemas de TI, incluidos los que no hemos desarrollado nosotros.",
          say: "Damos soporte a sistemas de TI y los seguimos desarrollando, incluidos los que no hicimos nosotros: vigilamos la disponibilidad y los errores, instalamos actualizaciones de seguridad y hacemos pequeñas mejoras sobre la marcha.",
          inc: ["monitorización de disponibilidad y errores", "correcciones y actualizaciones de seguridad", "copias de seguridad con pruebas de restauración", "mejoras planificadas", "auditoría y documentación de sistemas heredados"],
          caveat: "Si el sistema lo desarrolló otro proveedor, empezamos por una auditoría y la documentación. Sin eso, cada cambio es una lotería, y no le voy a prometer otra cosa.",
          q: "¿Quién mantiene el sistema ahora y existe documentación?" }
      ],
      partnersTitle: "Nuestros socios",
      contactTitle: "Cuéntenos su proyecto",
      contactText: "Si tiene una propuesta de colaboración o quiere saber más sobre nuestras soluciones y experiencia, escríbanos por correo electrónico."
    },
    pt: {
      heroTitle: "Criamos soluções de TI que trabalham para o seu negócio",
      heroText: "A equipa da ArtIntelliCo ajuda a digitalizar e automatizar os processos do seu negócio, concebendo e implementando soluções de TI modernas.",
      phrases: ["desenvolver plataformas SaaS", "construir sistemas CRM e ERP", "pôr a inteligência artificial a trabalhar", "levar a infraestrutura para a cloud"],
      services: [
        { name: "Conceção de soluções de TI",
          card: "Esclarecemos o que o sistema deve fazer e transformamos isso em requisitos claros tanto para o negócio como para os programadores.",
          say: "Nesta fase ainda não se programa nada. Primeiro falamos com as pessoas que vão trabalhar com o sistema (contabilidade, armazém, comerciais, não só a direção) e percebemos que problema ele tem realmente de resolver.",
          inc: ["entrevistas e análise dos processos atuais", "requisitos de negócio e cenários", "comparação: solução existente ou desenvolvimento à medida", "caderno de encargos com estimativa de prazos e orçamento por fase"],
          caveat: "Aviso já, com franqueza: por vezes a conclusão é não desenvolver nada e configurar um produto existente. Seja como for, o documento final pode ser usado por qualquer equipa, não apenas pela nossa.",
          q: "Já tem alguma descrição da tarefa ou, por enquanto, apenas a sensação de que «assim não pode continuar»?" },
        { name: "Desenvolvimento SaaS",
          card: "Plataformas SaaS, desde a primeira versão para clientes-piloto até um serviço com áreas de cliente, planos e subscrições.",
          say: "Acompanhamos um SaaS desde a primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu espaço, plano e painel. O essencial é que um novo cliente consiga registar-se, pagar e começar a trabalhar sem telefonar ao suporte.",
          inc: ["dados isolados para cada cliente", "registo, planos, subscrições, pagamentos", "áreas de cliente, perfis, permissões", "integrações e API pública", "escalabilidade sob carga"],
          caveat: "A arquitetura multicliente e a faturação devem ser previstas desde o primeiro dia: refazê-las quando já há clientes lá dentro custa várias vezes mais. E não adie demasiado a primeira versão: utilizadores reais mostram depressa que funcionalidades estão a mais.",
          q: "Já tem clientes-piloto ou o produto ainda é uma ideia?" },
        { name: "Desenvolvimento web",
          card: "Sites institucionais, marketplaces, lojas online, reservas e ferramentas web internas, com análise de dados desde o lançamento.",
          say: "Desenvolvemos sites institucionais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas. Mas primeiro acordamos o que conta como resultado, e a análise de dados fica ativa antes do lançamento, não seis meses depois.",
          inc: ["protótipo e design", "frontend, backend, painel de administração", "pagamentos, entregas, CRM, contabilidade", "base de SEO, velocidade, análise de dados", "lançamento e acompanhamento"],
          caveat: "A tecnologia escolhe-se em função da tarefa, não o contrário: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites.",
          q: "O que lhe mostraria que o site está a funcionar: pedidos de contacto, vendas ou outra coisa?" },
        { name: "Aplicações móveis",
          card: "Aplicações para iOS e Android com servidor e painel de administração, quando fazem mesmo falta.",
          say: "Desenvolvemos aplicações para iOS e Android em conjunto com a parte de servidor e o painel de administração, e depois publicamo-las na App Store e no Google Play.",
          inc: ["iOS e Android", "servidor e API", "painel para conteúdos, encomendas, utilizadores", "notificações push e análise de dados", "publicação nas lojas"],
          caveat: "Mas nem sempre é precisa uma aplicação. Justifica-se quando o cliente volta com regularidade: repete encomendas, acompanha o estado, acumula pontos. Se o visitam uma vez por ano, um bom site para telemóvel sai mais barato, e eu começaria por aí. Nativa ou multiplataforma: decidimos consoante o orçamento e a necessidade de câmara, geolocalização e modo offline.",
          q: "Com que frequência os seus clientes abririam realmente esta aplicação?" },
        { name: "Soluções com inteligência artificial",
          card: "Automatização de processos de negócio com agentes de IA: pedidos, CRM, respostas a clientes, documentos.",
          say: "O essencial são agentes de IA que executam sozinhos os passos rotineiros de um processo: triar pedidos, preencher o CRM, preparar respostas aos clientes. Uma pessoa continua a verificar e a decidir. Aliás, eu próprio sou um exemplo simples de um agente assim: analiso o seu pedido, associo-o aos serviços certos e preparo o briefing, mas é a si que cabe enviá-lo.",
          inc: ["agentes de IA para passos rotineiros", "chatbots e assistentes", "extração de dados de documentos", "classificação de pedidos, pesquisa na base de conhecimento", "previsão da procura, análise de dados", "piloto com medição da qualidade nos seus dados"],
          caveat: "Digo-lhe sem rodeios: metade das ideias do género «vamos acrescentar uma rede neuronal» resolve-se com automatização comum, sem IA nenhuma, e nesse caso é isso que recomendamos. Onde um modelo é mesmo necessário, começamos com um piloto nos seus dados, para que a precisão seja conhecida antes do desenvolvimento principal.",
          q: "Que trabalho faz hoje a sua equipa à mão durante horas: e-mails, documentos, pedidos?" },
        { name: "Desenvolvimento de CRM e ERP",
          card: "CRM e ERP à medida dos seus processos: vendas, armazém, produção, finanças, em vez de um emaranhado de folhas de cálculo.",
          say: "Construímos o CRM e o ERP à volta da forma como a sua empresa trabalha de facto: vendas, armazém, produção, finanças, e apenas com os módulos de que precisa. A direção vê o ponto da situação sem relatórios semanais de cada departamento.",
          inc: ["apenas os módulos necessários", "perfis, permissões, registo de ações", "relatórios e dashboards", "migração a partir de folhas de cálculo e sistemas antigos", "contabilidade, telefonia, e-mail"],
          caveat: "Se o seu processo for standard, um CRM de mercado serve perfeitamente, e eu digo-lho. Um sistema próprio compensa quando os comerciais fazem metade do trabalho em folhas de cálculo porque o software standard «não faz isso». Implementamos departamento a departamento, para que o trabalho não pare um único dia.",
          q: "O que usa atualmente em vez de um CRM: folhas de cálculo, um software standard, algo feito em casa?" },
        { name: "Soluções na cloud",
          card: "Migração para a Amazon Web Services, total ou parcial, com cálculo de custos e plano de reversão.",
          say: "Migramos a sua infraestrutura para a Amazon Web Services, toda ou por partes, e garantimos que continua a funcionar e não fica mais cara sem motivo.",
          inc: ["auditoria e cálculo de custos", "arquitetura na AWS, plano de migração", "servidores, bases de dados, ficheiros", "cópias de segurança e monitorização", "otimização de custos após a migração"],
          caveat: "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila muito, quando é precisa tolerância a falhas ou quando os ambientes têm de arrancar em minutos. Por isso, primeiro auditoria e cálculo, depois uma migração faseada, com plano de reversão em cada passo.",
          q: "O que o leva a migrar: a carga, a fiabilidade ou o custo dos servidores atuais?" },
        { name: "Infraestrutura empresarial em Red Hat",
          card: "Infraestrutura em Red Hat Enterprise Linux, OpenShift e Ansible que pode ser auditada e reproduzida.",
          say: "Construímos infraestrutura em Red Hat: servidores com Red Hat Enterprise Linux, aplicações na plataforma de contentores OpenShift e a configuração descrita em Ansible, para que qualquer servidor se reconstrua a partir de um playbook e não da memória do administrador.",
          inc: ["auditoria de servidores e plano de transição", "RHEL com atualizações através do Satellite", "OpenShift para as suas aplicações", "automatização com Ansible", "contas e acessos (Identity Management)", "monitorização, cópias de segurança, documentação"],
          caveat: "Red Hat funciona por subscrição, e nem sempre compensa. Faz sentido quando a infraestrutura tem de funcionar durante anos e passar auditorias: aí paga pelo suporte do fabricante e por um ciclo de vida longo, dez anos no caso do RHEL. A Red Hat é nossa parceira, por isso também ajudamos com as subscrições.",
          q: "Quantos servidores tem neste momento e com que sistema funcionam?" },
        { name: "APIs e integrações",
          card: "APIs para os seus sistemas e ligação a pagamentos, entregas, CRM e contabilidade, para que ninguém introduza os dados duas vezes.",
          say: "Desenvolvemos APIs para os seus sistemas e ligamo-las aos serviços que já utiliza: pagamentos, entregas, CRM, contabilidade. O objetivo é simples: os dados são introduzidos uma vez e chegam sozinhos aonde devem.",
          inc: ["desenho e documentação de APIs", "pagamentos, entregas, CRM, contabilidade", "troca de dados entre sistemas internos", "filas e novas tentativas em caso de falha", "monitorização e alertas"],
          caveat: "As integrações falham em silêncio: um parceiro altera a sua API e as encomendas deixam de chegar. Por isso a monitorização faz sempre parte do trabalho. Uma falha deve ser comunicada pelo sistema, não por um cliente.",
          q: "Onde é que, na sua empresa, os dados são introduzidos duas vezes?" },
        { name: "Suporte técnico",
          card: "Suporte e evolução de sistemas de TI, incluindo os que não foram desenvolvidos por nós.",
          say: "Damos suporte a sistemas de TI e continuamos a desenvolvê-los, incluindo os que não foram feitos por nós: vigiamos a disponibilidade e os erros, instalamos atualizações de segurança e fazemos pequenas melhorias pelo caminho.",
          inc: ["monitorização de disponibilidade e erros", "correções e atualizações de segurança", "cópias de segurança com testes de reposição", "melhorias planeadas", "auditoria e documentação de sistemas herdados"],
          caveat: "Se o sistema foi desenvolvido por outro fornecedor, começamos por uma auditoria e pela documentação. Sem isso, cada alteração é uma lotaria, e não lhe vou prometer o contrário.",
          q: "Quem dá hoje suporte ao sistema, e existe documentação?" }
      ],
      partnersTitle: "Os nossos parceiros",
      contactTitle: "Fale-nos do seu projeto",
      contactText: "Se tem uma proposta de colaboração ou quer saber mais sobre as nossas soluções e experiência, escreva-nos por e-mail."
    },
    it: {
      heroTitle: "Realizziamo soluzioni IT che lavorano per la Sua azienda",
      heroText: "Il team di ArtIntelliCo La aiuta a digitalizzare e automatizzare i processi aziendali progettando e introducendo soluzioni IT moderne.",
      phrases: ["sviluppare piattaforme SaaS", "costruire sistemi CRM ed ERP", "mettere al lavoro l'intelligenza artificiale", "portare l'infrastruttura nel cloud"],
      services: [
        { name: "Ideazione della soluzione IT",
          card: "Chiariamo che cosa deve fare il sistema e lo trasformiamo in requisiti comprensibili sia per l'azienda sia per gli sviluppatori.",
          say: "In questa fase non si programma ancora nulla. Prima parliamo con le persone che useranno il sistema (contabilità, magazzino, commerciali, non solo la direzione) e capiamo quale problema deve risolvere davvero.",
          inc: ["interviste e analisi dei processi attuali", "requisiti di business e scenari", "confronto: soluzione pronta o sviluppo su misura", "specifica con stima di tempi e budget per fase"],
          caveat: "Glielo dico subito: a volte la conclusione è non sviluppare nulla e configurare un prodotto esistente. In ogni caso il documento finale può essere usato da qualsiasi team, non solo dal nostro.",
          q: "Ha già una descrizione dell'esigenza o, per ora, solo la sensazione che «così non si può andare avanti»?" },
        { name: "Sviluppo SaaS",
          card: "Piattaforme SaaS, dalla prima versione per i clienti pilota fino a un servizio con aree riservate, piani e abbonamenti.",
          say: "Seguiamo un SaaS dalla prima versione per i clienti pilota fino a un servizio in cui ogni cliente ha il proprio spazio, piano e pannello. La cosa più importante è che un nuovo cliente possa registrarsi, pagare e iniziare a lavorare senza telefonare all'assistenza.",
          inc: ["dati isolati per ogni cliente", "registrazione, piani, abbonamenti, pagamenti", "aree riservate, ruoli, permessi", "integrazioni e API pubblica", "scalabilità sotto carico"],
          caveat: "Multi-tenancy e fatturazione vanno previste dal primo giorno: rifarle quando i clienti sono già dentro costa molte volte di più. E non tenga ferma troppo a lungo la prima versione: gli utenti reali mostrano presto quali funzioni sono superflue.",
          q: "Ha già dei clienti pilota o il prodotto è ancora un'idea?" },
        { name: "Sviluppo web",
          card: "Siti aziendali, marketplace, negozi online, prenotazioni e strumenti web interni, con analytics fin dal lancio.",
          say: "Realizziamo siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni. Prima però concordiamo che cosa conta come risultato, e l'analytics è attiva già prima del lancio, non sei mesi dopo.",
          inc: ["prototipo e design", "frontend, backend, pannello di amministrazione", "pagamenti, spedizioni, CRM, contabilità", "basi SEO, velocità, analytics", "lancio e assistenza"],
          caveat: "La tecnologia si sceglie in base al compito, non il contrario: a una landing page non serve una piattaforma pesante, e un marketplace non entra in un costruttore di siti.",
          q: "Da che cosa capirebbe che il sito funziona: richieste, vendite o altro?" },
        { name: "App mobili",
          card: "App per iOS e Android con server e pannello di amministrazione, quando un'app serve davvero.",
          say: "Sviluppiamo app per iOS e Android insieme alla parte server e al pannello di amministrazione, e poi le pubblichiamo su App Store e Google Play.",
          inc: ["iOS e Android", "server e API", "pannello per contenuti, ordini, utenti", "notifiche push e analytics", "pubblicazione negli store"],
          caveat: "Ma un'app non serve sempre. Ha senso quando i clienti tornano con regolarità: riordinano, seguono lo stato di una consegna, accumulano punti. Se La visitano una volta all'anno, un buon sito mobile costa meno, e io partirei da lì. Nativa o multipiattaforma: lo decideremo in base al budget e all'uso di fotocamera, geolocalizzazione e modalità offline.",
          q: "Quanto spesso i Suoi clienti aprirebbero davvero questa app?" },
        { name: "Soluzioni di intelligenza artificiale",
          card: "Automazione dei processi aziendali con agenti IA: richieste, CRM, risposte ai clienti, documenti.",
          say: "Il cuore sono agenti IA che svolgono da soli i passaggi ripetitivi di un processo: smistano le richieste, compilano il CRM, preparano le risposte ai clienti. Una persona continua a controllare e a decidere. Del resto, io stesso sono un semplice esempio di questo tipo di agente: analizzo la Sua richiesta, la abbino ai servizi giusti e preparo il brief, ma a inviarlo è Lei.",
          inc: ["agenti IA per i passaggi ripetitivi", "chatbot e assistenti", "estrazione di dati dai documenti", "classificazione delle richieste, ricerca nella knowledge base", "previsione della domanda, analisi dei dati", "progetto pilota con qualità misurata sui Suoi dati"],
          caveat: "Sarò diretto: metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione, senza alcuna IA, e in quel caso è proprio ciò che consiglieremo. Dove un modello serve davvero, partiamo da un progetto pilota sui Suoi dati, così l'accuratezza è nota prima dello sviluppo vero e proprio.",
          q: "Quale lavoro svolgono oggi a mano, per ore, le persone della Sua azienda: e-mail, documenti, richieste?" },
        { name: "Sviluppo CRM ed ERP",
          card: "CRM ed ERP su misura per i Suoi processi: vendite, magazzino, produzione, finanza, al posto di una giungla di fogli di calcolo.",
          say: "Costruiamo CRM ed ERP attorno al modo in cui la Sua azienda lavora davvero: vendite, magazzino, produzione, finanza, e solo con i moduli che Le servono. La direzione vede a che punto sono le cose senza report settimanali da ogni reparto.",
          inc: ["solo i moduli necessari", "ruoli, permessi, registro delle azioni", "report e dashboard", "migrazione da fogli di calcolo e vecchi sistemi", "contabilità, telefonia, posta elettronica"],
          caveat: "Se il Suo processo è standard, un CRM pronto va benissimo, e glielo dirò. Un sistema proprio si ripaga quando i commerciali gestiscono metà del lavoro su fogli di calcolo perché il software standard «non lo prevede». Lo introduciamo reparto per reparto, così il lavoro non si ferma nemmeno un giorno.",
          q: "Che cosa usa oggi la Sua azienda al posto di un CRM: fogli di calcolo, un software standard, qualcosa di sviluppato internamente?" },
        { name: "Soluzioni cloud",
          card: "Migrazione su Amazon Web Services, completa o per parti, con stima dei costi e piano di rollback.",
          say: "Trasferiamo l'infrastruttura su Amazon Web Services, tutta o in parte, e ci assicuriamo che funzioni e non diventi più costosa senza motivo.",
          inc: ["audit e stima dei costi", "architettura su AWS, piano di migrazione", "server, database, file", "backup e monitoraggio", "ottimizzazione dei costi dopo la migrazione"],
          caveat: "Il cloud non è sempre più economico di un server proprio. Conviene quando il carico ha forti picchi, quando serve tolleranza ai guasti o quando gli ambienti devono essere pronti in pochi minuti. Per questo prima audit e calcoli, poi una migrazione per fasi, con un piano di rollback a ogni passo.",
          q: "Che cosa La spinge a migrare: il carico, l'affidabilità o il costo dei server attuali?" },
        { name: "Infrastruttura aziendale su Red Hat",
          card: "Infrastruttura su Red Hat Enterprise Linux, OpenShift e Ansible, verificabile e riproducibile.",
          say: "Costruiamo l'infrastruttura su Red Hat: server con Red Hat Enterprise Linux, applicazioni sulla piattaforma di container OpenShift e configurazione descritta in Ansible, così ogni server si ricostruisce da un playbook e non dalla memoria dell'amministratore.",
          inc: ["audit dei server e piano di migrazione", "RHEL con aggiornamenti tramite Satellite", "OpenShift per le applicazioni", "automazione con Ansible", "account e accessi (Identity Management)", "monitoraggio, backup, documentazione"],
          caveat: "Red Hat è un abbonamento, e non sempre conviene. Ha senso quando l'infrastruttura deve funzionare per anni e superare audit: allora si paga il supporto del produttore e un ciclo di vita lungo, dieci anni nel caso di RHEL. Red Hat è nostro partner, quindi possiamo aiutarLa anche con gli abbonamenti.",
          q: "Quanti server ha oggi e con quale sistema funzionano?" },
        { name: "API e integrazioni",
          card: "API per i Suoi sistemi e collegamento con pagamenti, spedizioni, CRM e contabilità, così nessuno inserisce i dati due volte.",
          say: "Scriviamo API per i Suoi sistemi e li colleghiamo ai servizi che già utilizza: pagamenti, spedizioni, CRM, contabilità. L'obiettivo è semplice: i dati si inseriscono una volta sola e arrivano da soli dove servono.",
          inc: ["progettazione e documentazione delle API", "pagamenti, spedizioni, CRM, contabilità", "scambio dati tra sistemi interni", "code e nuovi tentativi in caso di errore", "monitoraggio e avvisi"],
          caveat: "Le integrazioni si rompono in silenzio: un partner modifica la propria API e gli ordini smettono di arrivare. Per questo il monitoraggio fa sempre parte del lavoro. Di un guasto deve avvisarLa il sistema, non un cliente.",
          q: "Dove, nella Sua azienda, oggi i dati vengono inseriti due volte?" },
        { name: "Supporto tecnico",
          card: "Assistenza ed evoluzione di sistemi IT, compresi quelli che non abbiamo sviluppato noi.",
          say: "Seguiamo i sistemi IT e li sviluppiamo ulteriormente, compresi quelli che non abbiamo scritto noi: monitoriamo disponibilità ed errori, installiamo gli aggiornamenti di sicurezza e facciamo piccoli miglioramenti strada facendo.",
          inc: ["monitoraggio di disponibilità ed errori", "correzioni e aggiornamenti di sicurezza", "backup con verifica del ripristino", "miglioramenti pianificati", "audit e documentazione di sistemi altrui"],
          caveat: "Se il sistema l'ha sviluppato un altro fornitore, iniziamo con un audit e la documentazione. Senza questo ogni modifica è una lotteria, e non Le prometterò il contrario.",
          q: "Chi segue il sistema oggi, ed esiste una documentazione?" }
      ],
      partnersTitle: "I nostri partner",
      contactTitle: "Ci parli del Suo progetto",
      contactText: "Se ha una proposta di collaborazione o desidera saperne di più sulle nostre soluzioni e sulla nostra esperienza, ci scriva un'e-mail."
    }
  };

  /* Рядки агента. Він не вигадує фактів: ціни й терміни — лише після брифу */
  const AX = {
    uk: {
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
      themeLight: "Світла тема", themeDark: "Темна тема",
      copiedShort: "Скопійовано",
      and: " і ",
      quote: (s) => `«${s}»`,
      colon: ":",
      langLabel: "Мова"
    },
    en: {
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
      themeLight: "Light theme", themeDark: "Dark theme",
      copiedShort: "Copied",
      and: " and ",
      quote: (s) => `"${s}"`,
      colon: ":",
      langLabel: "Language"
    },
    ru: {
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
      themeLight: "Светлая тема", themeDark: "Тёмная тема",
      copiedShort: "Скопировано",
      and: " и ",
      quote: (s) => `«${s}»`,
      colon: ":",
      langLabel: "Язык"
    },
    de: {
      title: "ArtIntelliCo — Website-Agent",
      invite: "Beschreiben Sie Ihre Aufgabe in eigenen Worten – ich ordne sie den passenden Leistungen zu und stelle ein Briefing für das Team zusammen.",
      demo: "Demo: Der Agent läuft in Ihrem Browser und antwortet nur mit dem, was auf der Website steht. Ohne Ihr Zutun wird nichts gesendet.",
      placeholder: "Beschreiben Sie Ihre Aufgabe in eigenen Worten…",
      send: "Senden",
      thinking: "Gleiche Ihre Anfrage mit unseren Leistungen ab",
      matchedMany: (n) => `Zu Ihrer Aufgabe passen offenbar ${n}. Ich habe sie ins Briefing übernommen.`,
      added: (n) => `„${n}“ ins Briefing übernommen.`,
      already: (n) => `„${n}“ steht bereits im Briefing.`,
      incLabel: "Leistungsumfang",
      more: "Mehr dazu",
      priceQ: "Was kostet das?",
      follow: "Erzählen Sie mehr: Was gibt es schon, woran soll es angebunden werden, bis wann brauchen Sie das Ergebnis? Oder senden Sie das Briefing ab, sobald es fertig ist.",
      nomatch: "Ich kann die Richtung noch nicht sicher bestimmen. Das macht das Team – wählen Sie das Passendste oder beschreiben Sie die Aufgabe anders.",
      price: "Preise stehen nicht auf der Website: Die Kosten hängen von der Aufgabe ab. Senden Sie das Briefing, und das Team antwortet mit einer Schätzung.",
      time: "Den Zeitrahmen schätzt das Team nach dem Briefing. Tragen Sie Ihre Wunschtermine dort ein.",
      about: "Kurz zum Unternehmen:",
      retro: "Diese Website lässt sich auch in Oberflächen der Vergangenheit öffnen. Hier der Weg von der Kommandozeile bis zum Gespräch:",
      greet: "Guten Tag! Beschreiben Sie Ihre Aufgabe, und ich finde die passenden Leistungen.",
      thanks: "Gern geschehen. Das Briefing wartet, wann immer Sie so weit sind.",
      langSwitched: "Ab jetzt sprechen wir Deutsch.",
      chips: ["Wir brauchen ein CRM für den Vertrieb", "Wir möchten Prozesse mit KI-Agenten automatisieren", "Brauchen wir überhaupt eine mobile App?", "Infrastruktur in die Cloud verlagern", "Eine SaaS-Plattform starten", "Wer sind Ihre Partner?", "Was kostet das?", "Oberflächen der Vergangenheit"],
      mapTitle: "Karte der Anfrage",
      mapHint: "Die Knoten sind die Leistungen des Teams. Die Linien zeigen, wohin Ihre Anfrage tendiert. Klicken Sie auf einen Knoten, um danach zu fragen.",
      short: ["Konzept", "SaaS", "Web", "Mobil", "KI", "CRM / ERP", "Cloud", "Red Hat", "API", "Support"],
      ask: (n) => `Erzählen Sie mir mehr über „${n}“`,
      briefTitle: "Projekt-Briefing",
      task: "Aufgabe",
      taskPh: "Hier erscheint die Aufgabe aus dem Gespräch. Sie können sie bearbeiten.",
      directions: "Leistungen",
      email: "Ihre E-Mail-Adresse für die Antwort (optional)",
      sendBrief: "Briefing senden",
      copy: "Kopieren",
      copied: "Briefing kopiert.",
      opened: "Ihr E-Mail-Programm öffnet sich mit dem fertigen Text.",
      inBrief: "Im Briefing",
      addBrief: "Ins Briefing",
      briefBtn: (n) => `Briefing${n ? " · " + n : ""}`,
      past: "Oberflächen der Vergangenheit",
      here: "Sie sind hier",
      now: "Gespräch mit dem Agenten",
      subject: (s) => `Briefing: ${s}`,
      briefHead: "Briefing von artintellico.com",
      replyTo: "Antwort an",
      none: "nicht angegeben",
      copyMail: "Adresse kopieren",
      themeLight: "Helles Design", themeDark: "Dunkles Design",
      copiedShort: "Kopiert",
      and: " und ",
      quote: (s) => `„${s}“`,
      colon: ":",
      langLabel: "Sprache"
    },
    fr: {
      title: "ArtIntelliCo — agent du site",
      invite: "Décrivez votre besoin avec vos propres mots\u00a0: je l'associe aux services de l'équipe et je prépare un brief.",
      demo: "Démo\u00a0: l'agent fonctionne dans votre navigateur et ne répond qu'avec ce qui figure sur le site. Rien n'est envoyé sans action de votre part.",
      placeholder: "Décrivez votre besoin avec vos propres mots…",
      send: "Envoyer",
      thinking: "J'associe votre demande à nos services",
      matchedMany: (n) => `Votre besoin semble correspondre à ${n}. Je les ai ajoutés au brief.`,
      added: (n) => `«\u00a0${n}\u00a0» ajouté au brief.`,
      already: (n) => `«\u00a0${n}\u00a0» figure déjà dans le brief.`,
      incLabel: "Ce qui est inclus",
      more: "En savoir plus",
      priceQ: "Combien cela coûte-t-il\u00a0?",
      follow: "Dites-m'en plus\u00a0: ce qui existe déjà, avec quoi l'intégrer, pour quand il vous faut le résultat. Ou envoyez le brief dès qu'il est prêt.",
      nomatch: "Je ne parviens pas encore à cerner le domaine. Voici ce que fait l'équipe\u00a0: choisissez ce qui s'en rapproche le plus ou décrivez votre besoin autrement.",
      price: "Les prix ne sont pas publiés sur le site\u00a0: le coût dépend du projet. Envoyez le brief et l'équipe vous répondra avec une estimation.",
      time: "L'équipe estime les délais après lecture du brief. Indiquez-y les dates souhaitées.",
      about: "L'entreprise en bref\u00a0:",
      retro: "Ce site s'ouvre aussi dans des interfaces du passé. Voici le chemin de la ligne de commande jusqu'à la conversation\u00a0:",
      greet: "Bonjour\u00a0! Décrivez votre besoin et je trouverai les services adaptés.",
      thanks: "Je vous en prie. Le brief est prêt dès que vous l'êtes.",
      langSwitched: "Nous poursuivons en français.",
      chips: ["Il nous faut un CRM pour l'équipe commerciale", "Nous voulons automatiser nos processus avec des agents IA", "Avons-nous vraiment besoin d'une application mobile\u00a0?", "Migrer notre infrastructure vers le cloud", "Lancer une plateforme SaaS", "Qui sont vos partenaires\u00a0?", "Combien cela coûte-t-il\u00a0?", "Interfaces du passé"],
      mapTitle: "Carte de la demande",
      mapHint: "Chaque point est un service de l'équipe. Les lignes montrent vers quoi tend votre demande. Cliquez sur un point pour en savoir plus.",
      short: ["Conception", "SaaS", "Web", "Mobile", "IA", "CRM / ERP", "Cloud", "Red Hat", "API", "Support"],
      ask: (n) => `Parlez-moi de «\u00a0${n}\u00a0»`,
      briefTitle: "Brief du projet",
      task: "Besoin",
      taskPh: "Votre besoin tiré de la conversation apparaîtra ici. Vous pouvez le modifier.",
      directions: "Services",
      email: "Votre e-mail pour la réponse (facultatif)",
      sendBrief: "Envoyer le brief",
      copy: "Copier",
      copied: "Brief copié.",
      opened: "J'ouvre votre messagerie avec le message prêt.",
      inBrief: "Dans le brief",
      addBrief: "Ajouter au brief",
      briefBtn: (n) => `Brief${n ? " · " + n : ""}`,
      past: "Interfaces du passé",
      here: "Vous êtes ici",
      now: "Conversation avec un agent",
      subject: (s) => `Brief\u00a0: ${s}`,
      briefHead: "Brief depuis artintellico.com",
      replyTo: "Répondre à",
      none: "non précisé",
      copyMail: "Copier l'adresse",
      themeLight: "Thème clair", themeDark: "Thème sombre",
      copiedShort: "Copié",
      and: " et ",
      quote: (s) => `«\u00a0${s}\u00a0»`,
      colon: "\u00a0:",
      langLabel: "Langue"
    },
    es: {
      title: "ArtIntelliCo — agente del sitio",
      invite: "Describa su tarea con sus propias palabras: la relacionaré con lo que hace el equipo y prepararé un brief.",
      demo: "Demo: el agente funciona en su navegador y solo responde con lo que hay en el sitio. No se envía nada sin una acción suya.",
      placeholder: "Describa su tarea con sus propias palabras…",
      send: "Enviar",
      thinking: "Relacionando su consulta con nuestros servicios",
      matchedMany: (n) => `Parece que a su tarea le corresponden ${n}. Los he añadido al brief.`,
      added: (n) => `He añadido «${n}» al brief.`,
      already: (n) => `«${n}» ya está en el brief.`,
      incLabel: "Qué incluye",
      more: "Más detalles",
      priceQ: "¿Cuánto cuesta?",
      follow: "Cuénteme más: qué tiene ya, con qué hay que integrarlo, para cuándo lo necesita. O envíe el brief cuando esté listo.",
      nomatch: "Todavía no puedo determinar el área con seguridad. Esto es lo que hace el equipo: elija lo más cercano o describa la tarea de otra forma.",
      price: "Los precios no se publican en el sitio: el coste depende de la tarea. Envíe el brief y el equipo le responderá con una estimación.",
      time: "El equipo estima los plazos después de leer el brief. Añada en él las fechas que desea.",
      about: "La empresa, en pocas palabras:",
      retro: "Este sitio también se abre en interfaces del pasado. Este es el camino desde la línea de comandos hasta la conversación:",
      greet: "¡Hola! Describa su tarea y le indicaré los servicios adecuados.",
      thanks: "No hay de qué. El brief le espera cuando quiera.",
      langSwitched: "Seguimos en español.",
      chips: ["Necesitamos un CRM para el equipo de ventas", "Queremos automatizar procesos con agentes de IA", "¿De verdad necesitamos una aplicación móvil?", "Llevar la infraestructura a la nube", "Lanzar una plataforma SaaS", "¿Quiénes son sus socios?", "¿Cuánto cuesta?", "Interfaces del pasado"],
      mapTitle: "Mapa de la consulta",
      mapHint: "Los nodos son los servicios del equipo. Las líneas muestran hacia dónde se inclina su consulta. Haga clic en un nodo para preguntar por él.",
      short: ["Concepto", "SaaS", "Web", "Móvil", "IA", "CRM / ERP", "Nube", "Red Hat", "API", "Soporte"],
      ask: (n) => `Hábleme de «${n}»`,
      briefTitle: "Brief del proyecto",
      task: "Tarea",
      taskPh: "Aquí aparecerá la tarea descrita en la conversación. Puede editarla.",
      directions: "Servicios",
      email: "Su correo electrónico para la respuesta (opcional)",
      sendBrief: "Enviar brief",
      copy: "Copiar",
      copied: "Brief copiado.",
      opened: "Abriendo su programa de correo con el mensaje preparado.",
      inBrief: "En el brief",
      addBrief: "Añadir al brief",
      briefBtn: (n) => `Brief${n ? " · " + n : ""}`,
      past: "Interfaces del pasado",
      here: "Usted está aquí",
      now: "Conversación con un agente",
      subject: (s) => `Brief: ${s}`,
      briefHead: "Brief desde artintellico.com",
      replyTo: "Responder a",
      none: "no indicado",
      copyMail: "Copiar dirección",
      themeLight: "Tema claro", themeDark: "Tema oscuro",
      copiedShort: "Copiado",
      and: " y ",
      quote: (s) => `«${s}»`,
      colon: ":",
      langLabel: "Idioma"
    },
    pt: {
      title: "ArtIntelliCo — agente do site",
      invite: "Descreva a sua tarefa por palavras suas: associo-a ao que a equipa faz e preparo um briefing.",
      demo: "Demo: o agente funciona no seu navegador e só responde com o que está no site. Nada é enviado sem uma ação sua.",
      placeholder: "Descreva a sua tarefa por palavras suas…",
      send: "Enviar",
      thinking: "A associar o seu pedido aos nossos serviços",
      matchedMany: (n) => `Parece que à sua tarefa correspondem ${n}. Acrescentei-os ao briefing.`,
      added: (n) => `Acrescentei «${n}» ao briefing.`,
      already: (n) => `«${n}» já está no briefing.`,
      incLabel: "O que inclui",
      more: "Saber mais",
      priceQ: "Quanto custa?",
      follow: "Conte-me mais: o que já existe, com que sistemas integrar, para quando precisa do resultado. Ou envie o briefing quando estiver pronto.",
      nomatch: "Ainda não consigo identificar a área com segurança. Eis o que a equipa faz: escolha o mais próximo ou descreva a tarefa de outra forma.",
      price: "Os preços não são publicados no site: o custo depende da tarefa. Envie o briefing e a equipa responde com uma estimativa.",
      time: "A equipa estima os prazos depois de ler o briefing. Indique nele as datas pretendidas.",
      about: "A empresa, em resumo:",
      retro: "Este site também abre em interfaces do passado. Eis o caminho da linha de comandos até à conversa:",
      greet: "Olá! Descreva a sua tarefa e eu indico os serviços adequados.",
      thanks: "De nada. O briefing fica à espera, quando quiser.",
      langSwitched: "Continuamos em português.",
      chips: ["Precisamos de um CRM para a equipa comercial", "Queremos automatizar processos com agentes de IA", "Precisamos mesmo de uma aplicação móvel?", "Levar a infraestrutura para a cloud", "Lançar uma plataforma SaaS", "Quem são os vossos parceiros?", "Quanto custa?", "Interfaces do passado"],
      mapTitle: "Mapa do pedido",
      mapHint: "Os nós são os serviços da equipa. As linhas mostram para onde tende o seu pedido. Clique num nó para perguntar sobre ele.",
      short: ["Conceção", "SaaS", "Web", "Móvel", "IA", "CRM / ERP", "Cloud", "Red Hat", "API", "Suporte"],
      ask: (n) => `Fale-me de «${n}»`,
      briefTitle: "Briefing do projeto",
      task: "Tarefa",
      taskPh: "Aqui aparece a tarefa descrita na conversa. Pode editá-la.",
      directions: "Serviços",
      email: "O seu e-mail para a resposta (opcional)",
      sendBrief: "Enviar briefing",
      copy: "Copiar",
      copied: "Briefing copiado.",
      opened: "A abrir o seu programa de e-mail com a mensagem pronta.",
      inBrief: "No briefing",
      addBrief: "Adicionar ao briefing",
      briefBtn: (n) => `Briefing${n ? " · " + n : ""}`,
      past: "Interfaces do passado",
      here: "Está aqui",
      now: "Conversa com um agente",
      subject: (s) => `Briefing: ${s}`,
      briefHead: "Briefing a partir de artintellico.com",
      replyTo: "Responder para",
      none: "não indicado",
      copyMail: "Copiar endereço",
      themeLight: "Tema claro", themeDark: "Tema escuro",
      copiedShort: "Copiado",
      and: " e ",
      quote: (s) => `«${s}»`,
      colon: ":",
      langLabel: "Idioma"
    },
    it: {
      title: "ArtIntelliCo — agente del sito",
      invite: "Descriva la Sua esigenza con parole Sue: la abbinerò ai servizi del team e preparerò un brief.",
      demo: "Demo: l'agente funziona nel Suo browser e risponde solo con ciò che si trova sul sito. Nulla viene inviato senza una Sua azione.",
      placeholder: "Descriva la Sua esigenza con parole Sue…",
      send: "Invia",
      thinking: "Abbino la richiesta ai nostri servizi",
      matchedMany: (n) => `Sembra che alla Sua esigenza corrispondano ${n}. Li ho aggiunti al brief.`,
      added: (n) => `Ho aggiunto «${n}» al brief.`,
      already: (n) => `«${n}» è già nel brief.`,
      incLabel: "Cosa comprende",
      more: "Dettagli",
      priceQ: "Quanto costa?",
      follow: "Mi dica di più: che cosa esiste già, con che cosa integrarlo, entro quando Le serve il risultato. Oppure invii il brief quando è pronto.",
      nomatch: "Non riesco ancora a individuare l'ambito con certezza. Ecco che cosa fa il team: scelga la voce più vicina o descriva l'esigenza in un altro modo.",
      price: "I prezzi non sono pubblicati sul sito: il costo dipende dal progetto. Invii il brief e il team Le risponderà con una stima.",
      time: "Il team stima i tempi dopo aver letto il brief. Vi indichi le date desiderate.",
      about: "L'azienda in breve:",
      retro: "Questo sito si apre anche in interfacce del passato. Ecco il percorso dalla riga di comando alla conversazione:",
      greet: "Buongiorno! Descriva la Sua esigenza e Le indicherò i servizi adatti.",
      thanks: "Prego. Il brief è qui quando vorrà inviarlo.",
      langSwitched: "Proseguiamo in italiano.",
      chips: ["Ci serve un CRM per il reparto vendite", "Vogliamo automatizzare i processi con agenti IA", "Ci serve davvero un'app mobile?", "Portare l'infrastruttura nel cloud", "Lanciare una piattaforma SaaS", "Chi sono i vostri partner?", "Quanto costa?", "Interfacce del passato"],
      mapTitle: "Mappa della richiesta",
      mapHint: "I nodi sono i servizi del team. Le linee mostrano verso dove tende la Sua richiesta. Faccia clic su un nodo per chiedere informazioni.",
      short: ["Ideazione", "SaaS", "Web", "Mobile", "IA", "CRM / ERP", "Cloud", "Red Hat", "API", "Supporto"],
      ask: (n) => `Mi parli di «${n}»`,
      briefTitle: "Brief del progetto",
      task: "Esigenza",
      taskPh: "Qui comparirà l'esigenza descritta nella conversazione. Può modificarla.",
      directions: "Servizi",
      email: "La Sua e-mail per la risposta (facoltativa)",
      sendBrief: "Invia il brief",
      copy: "Copia",
      copied: "Brief copiato.",
      opened: "Apro il Suo programma di posta con il messaggio pronto.",
      inBrief: "Nel brief",
      addBrief: "Aggiungi al brief",
      briefBtn: (n) => `Brief${n ? " · " + n : ""}`,
      past: "Interfacce del passato",
      here: "Lei è qui",
      now: "Conversazione con un agente",
      subject: (s) => `Brief: ${s}`,
      briefHead: "Brief da artintellico.com",
      replyTo: "Rispondere a",
      none: "non indicato",
      copyMail: "Copia indirizzo",
      themeLight: "Tema chiaro", themeDark: "Tema scuro",
      copiedShort: "Copiato",
      and: " e ",
      quote: (s) => `«${s}»`,
      colon: ":",
      langLabel: "Lingua"
    }
  };

  /* Ключові слова (основи) для зіставлення запиту з напрямами. Перший рядок кожного напряму — uk/ru/en,
     другий — de/fr/es/pt/it. Діакритику латиниці знімаємо і в ключах, і в запиті (fold), тож «précis» = «precis».
     Ключ до 3 літер — ціле слово; «=слово» — ціле слово, без апострофа поруч (щоб «dell'» не було Dell);
     ключ із пробілом на початку — початок слова (« mobil» без «immobilien»); решта — підрядок. */
  const KEYS = [
    ["концеп", "вимог", "требован", "аналіз", "анализ", "консульт", "consult", "concept", "requirement", "специфікац", "спецификац", "specification", "тз", "ідея", "идея", "idea", "почати", "начать", "start", "аудит", "audit", "стратег", "strateg",
      "konzept", "anforderung", "pflichtenheft", "lastenheft", "beratung", "idee", "machbarkeit", "anfangen", "analys", "analis", "conception", "exigence", "cahier des charges", "conseil", "commencer", "démarr", "requisit", "empezar", "comenzar", "concett", "ideazion", "consulen", "inizia", "conceit", "conceção", "concepção", "ideia", "começar"],
    ["saas", "підписк", "подписк", "subscription", "мультитенант", "multi-tenant", "multitenant", "білінг", "биллинг", "billing", "платформ", "platform", "кабінет", "кабинет", "dashboard",
      "abonnement", "abo", "abrechnung", "mandant", "plattform", "kundenportal", "plateforme", "facturation", "espace client", "suscripc", "facturación", "plataforma", "abbonament", "fatturazion", "piattaforma", "subscriç", "assinatura", "faturação"],
    ["сайт", "web", "веб", "маркетплейс", "marketplace", "магазин", "shop", "store", "commerce", "бронюван", "бронирован", "booking", "портал", "portal", "лендінг", "лендинг", "landing", "website",
      "webseite", "webentwickl", "webanwend", "homepage", "internetseite", "internetauftritt", "buchungs", "marktplatz", " site", "boutique", "réserv", "vitrine", "sitio", "página web", " tienda", "comercio electr", " sito", "negozio", "prenotazion", "loja", "comércio eletr"],
    ["мобіл", "мобил", "mobile", "ios", "android", "застосун", "приложен", "app", "смартфон", "smartphone", "телефон", "phone",
      " mobil", "handy", "apps", "appli", "móvil", "telemóvel", " móvel", "aplicaç", "teléfono", "cellulare", "celular", "tablet"],
    ["ші", "ии", "штучн", "искусствен", "artificial", "machine", "машинн", "ml", "gpt", "llm", "нейро", "neural", "чат-бот", "чатбот", "chatbot", "бот", "bot", "прогноз", "predict", "rag", "agent", "агент", "ai",
      "ki", "künstlich", "maschinell", "neuron", "assistent", "prognose", "vorhersage", "sprachmodell", "ia", "artificiel", "apprentissage", "assistant", "prévision", "inteligencia", "aprendizaje", "asistente", "intelligenza", "apprendimento", "aprendizagem", "previsão"],
    ["crm", "erp", "облік", "учет", "accounting", "склад", "warehouse", "продаж", "sales", "клієнт", "клиент", "customer", "бізнес-процес", "бизнес-процесс", "process", "лід", "лид", "lead", "воронк", "funnel",
      "buchhaltung", "lager", "vertrieb", "verkauf", " kunde", "prozess", "warenwirtschaft", "inventar", "comptab", "entrepôt", "ventes", " vente", "client", "inventaire", "stock", "contabil", "almacén", "ventas", "proceso", "embudo", "magazzino", "vendite", "armazém", "vendas"],
    ["хмар", "облак", "cloud", "aws", "amazon", "сервер", "server", "інфраструкт", "инфраструкт", "infrastructure", "міграц", "миграц", "migrat", "devops", "kubernetes", "хостинг", "hosting", "бекап", "backup",
      "infrastruktur", "rechenzentrum", "datensicherung", "nuage", "serveur", "hébergement", "sauvegarde", "nube", "servidor", "infraestru", "migrac", "alojamiento", "copia de seguridad", "copias de seguridad", "infrastrutt", "migrazion", "nuvem", "alojamento", "cópia de segurança", "cópias de segurança"],
    ["red hat", "redhat", "rhel", "openshift", "ansible", "satellite", "linux", "лінукс", "линукс", "identity management"],
    ["api", "інтеграц", "интеграц", "integrat", "1с", "1c", "webhook", "синхрон", "sync", "connect", "підключ", "подключ", "обмін даними", "обмен данными",
      "apis", "schnittstelle", "anbindung", "datenaustausch", "échange de données", "integrac", "conect", "sincroniz", "intercambio de datos", "integraz", "scambio dati", "collegare", "troca de dados"],
    ["підтрим", "поддерж", "support", "супровід", "сопровожд", "maintenance", "баг", "bug", "legacy", "розвит", "развит", "оновлен", "обновлен", "update", "моніторинг", "мониторинг", "monitoring",
      " wartung", "betreuung", "fehler", "aktualisier", "überwachung", "weiterentwickl", "assistance", "en panne", "une panne", "pannes", "erreur", "mise à jour", "mises à jour", "soporte", "mantenimiento", "actualizac", "monitoriz", "asistencia", "error", "assistenza", "manutenz", "aggiornament", "monitoragg", "suport", "manutenç", "atualizaç", "assistência", " erro"]
  ];
  const META = {
    price: ["цін", "цен", "вартіст", "стоимост", "скільки", "сколько", "price", "cost", "budget", "бюджет", "кошту", "стоит",
      "preis", "kost", "prix", "coût", "combien", "tarif", "precio", "cuánto cuesta", "cuesta", "coste", "presupuesto", "prezzo", "quanto costa", "preço", "custo", "custa", "orçamento"],
    time: ["термін", "строк", "срок", "deadline", "timeline", "коли буде", "когда будет", "how long", "як довго", "как долго",
      "frist", "zeitrahmen", "zeitplan", "wie lange", "bis wann", "dauert", "délai", "combien de temps", "plazo", "cuánto tiempo", "tempistic", "quanto tempo", "scadenz", "prazo"],
    partners: ["партнер", "партнёр", "partner", "microsoft", "veeam", "vmware", "=dell", "unio24",
      "partenai", "socios", "parceir"],
    contact: ["контакт", "зв'яз", "звʼяз", "связ", "contact", "e-mail", "email", "пошт", "почт", "написати", "написать", "телефон",
      "kontakt", "telefon", "anrufen", "téléphone", "appeler", "joindre", "correo", "llamar", "contatt", "chiamare", "indirizzo", "endereço"],
    about: ["хто ви", "кто вы", "who are you", "про компан", "о компан", "about", "команд", "team", "чим займ", "чем занима",
      "wer sind sie", "über uns", "was machen sie", "qui êtes", "à propos", "que faites", "équipe", "quiénes son", "quiénes sois", "a qué se dedican", "equipo", "quem são vocês", "o que fazem", "equipa", "chi siete", "di cosa vi occupate", "di cosa si occupa", "che cosa fate"],
    retro: ["ретро", "retro", "минул", "прошл", "=past", "dos", "windows", "unix", "apple", "lisa", "linux", "commander", "інтерфейс", "интерфейс", "interface",
      "vergangenheit", "oberfläche", "nostalg", "du passé", "pasado", "interfaz", "passato", "interfacc", "passado"],
    greet: ["привіт", "привет", "hello", " hi ", " hey", "добрий день", "добрый день", "вітаю", "здравств",
      "hallo", "guten tag", "guten morgen", "bonjour", "bonsoir", "salut", "hola", "buenos días", "buenas tardes", "ola", "bom dia", "boa tarde", "ciao", "buongiorno", "buonasera", "salve"],
    thanks: ["дякую", "спасибо", "thank", " danke", "=merci", "gracias", "obrigad", "grazie"]
  };
  /* Короткі латинські ключі, які в цих мовах — звичайні слова (it «ai» = «до», es/pt «dos» = «два/з»,
     pt «ia» = «йшов»): для них рахуємо лише написання великими літерами — AI, DOS, IA */
  const CASED = { ai: ["it"], dos: ["es", "pt"], ia: ["pt"] };
  const NODES = [[200, 150], [108, 84], [60, 164], [118, 238], [300, 70], [340, 156], [276, 232], [356, 250], [200, 38], [200, 270]];
  const MESH = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [1, 2], [2, 3], [1, 8], [4, 8], [4, 5], [5, 6], [5, 7], [6, 7], [6, 9], [7, 9], [3, 9], [1, 4], [5, 8]];
  /* Суміжний напрям для підказки після відповіді */
  const RELATED = [5, 6, 3, 2, 8, 8, 7, 6, 5, 6];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = (navigator.language || "").toLowerCase();
  const LANGS = AIC.langs;
  let lang = store.get("aic-lang") || LANGS.find((l) => nav.startsWith(l)) || "uk";
  if (!LANGS.includes(lang)) lang = "uk";
  const t = () => I18N[lang];
  const a = () => AX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));

  const brief = { task: [], dirs: new Set(), edited: false };
  let busy = false;
  let userTurns = 0;

  /* ---------- Розпізнавання наміру ---------- */
  /* Латиниця без діакритики (é→e, ü→u, ç→c, ã→a); кирилицю (й, ї, ё) не чіпаємо */
  const fold = (x) => x.replace(/[’ʼ]/g, "'").normalize("NFD").replace(/([A-Za-z])[\u0300-\u036f]+/g, "$1").normalize("NFC");
  const word = (k, apos) => {
    const edge = apos ? "[^\\p{L}']" : "[^\\p{L}]";
    return new RegExp(`(^|${edge})${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(${edge}|$)`, "u");
  };
  /* Кожен ключ — функція (s — запит малими літерами, raw — як набрано) */
  const matcher = (key) => {
    const k = fold(key).toLowerCase();
    if (CASED[k]) {
      const lo = word(k, false), up = word(k.toUpperCase(), false);
      return (s, raw) => (CASED[k].includes(lang) ? up.test(raw) : lo.test(s));
    }
    if (k.startsWith("=")) { const re = word(k.slice(1), true); return (s) => re.test(s); }
    if (k.length <= 3) { const re = word(k, false); return (s) => re.test(s); }
    return (s) => s.includes(k);
  };
  const KEYS_M = KEYS.map((row) => row.map(matcher));
  const META_M = Object.fromEntries(Object.entries(META).map(([k, row]) => [k, row.map(matcher)]));
  function score(text) {
    const raw = " " + fold(text) + " ";
    const s = raw.toLowerCase();
    const hit = (m) => m(s, raw);
    const svc = KEYS_M.map((row) => row.reduce((n, m) => n + (hit(m) ? 1 : 0), 0));
    const meta = Object.fromEntries(Object.entries(META_M).map(([k, row]) => [k, row.some(hit)]));
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

  /* Інтерфейси минулого — із загального списку варіантів: усі, чий рік раніше поточного, за роком; адреси — поточною мовою */
  const pastVariants = () => AIC.variants
    .filter((v) => v.year && Number(v.year) < new Date().getFullYear() && v.id !== AIC.id)
    .sort((x, y) => Number(x.year) - Number(y.year));
  const timelineHtml = () => `<ul class="list">${pastVariants().map((v) => `<li><span class="yr">${v.year}</span><a href="${AIC.url(v.id, lang)}">${esc(v.name[lang] || v.name.en)}</a></li>`).join("")}<li><span class="yr">${new Date().getFullYear()}</span><span class="here">${esc(a().now)} — ${esc(a().here)}</span></li></ul>`;

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
      const q = ids.map((i) => a().quote(t().services[i].name));
      return q.length > 1 ? q.slice(0, -1).join(", ") + a().and + q[q.length - 1] : q[0];
    };
    const metaOnly = !ranked.length;

    if (meta.greet && metaOnly && !meta.price && !meta.partners && !meta.contact) blocks.push({ p: a().greet }, { chips: a().chips.slice(0, 4) });
    if (meta.thanks && metaOnly) blocks.push({ p: a().thanks });
    if (meta.about && metaOnly) blocks.push({ p: a().about }, { p: t().heroText }, { list: t().phrases });
    if (meta.partners) blocks.push({ p: t().partnersTitle + a().colon }, { partners: true });
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
      btn.textContent = a().copiedShort;
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
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeSheet(); closePop(); closeLang(); } });

  /* ---------- Інтерфейси минулого ---------- */
  const pop = $("pop");
  function closePop() { pop.hidden = true; $("pastBtn").setAttribute("aria-expanded", "false"); }
  $("pastBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    closeLang();
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
    $("langCode").textContent = AIC.langCodes[lang];
    $("langBtn").setAttribute("aria-label", `${x.langLabel}: ${AIC.langNames[lang]}`);
    $("langBtn").title = x.langLabel;
    langMenu.setAttribute("aria-label", x.langLabel);
    langMenu.querySelectorAll("[data-l]").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.l === lang)));
    applyTheme(store.get("aic-ai-theme"));
    labelMap();
    renderBrief();
  }
  /* Меню мов: усі мови з AIC.langs; стрілки, Home/End, Esc — як у звичайному меню */
  const langMenu = $("langMenu");
  langMenu.innerHTML = LANGS.map((l) => `<button type="button" role="menuitemradio" tabindex="-1" data-l="${l}" lang="${l}"><span class="code">${esc(AIC.langCodes[l])}</span><span>${esc(AIC.langNames[l])}</span></button>`).join("");
  const langItems = () => [...langMenu.querySelectorAll("[data-l]")];
  function openLang() {
    closePop();
    langMenu.hidden = false;
    $("langBtn").setAttribute("aria-expanded", "true");
    (langMenu.querySelector('[aria-checked="true"]') || langItems()[0]).focus();
  }
  function closeLang(focusBtn) {
    if (langMenu.hidden) return;
    langMenu.hidden = true;
    $("langBtn").setAttribute("aria-expanded", "false");
    if (focusBtn) $("langBtn").focus();
  }
  $("langBtn").addEventListener("click", (e) => { e.stopPropagation(); if (langMenu.hidden) openLang(); else closeLang(); });
  $("langBtn").addEventListener("keydown", (e) => { if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); openLang(); } });
  langMenu.addEventListener("keydown", (e) => {
    const items = langItems();
    const i = items.indexOf(document.activeElement);
    const go = (n) => { e.preventDefault(); items[(n + items.length) % items.length].focus(); };
    if (e.key === "ArrowDown") go(i + 1);
    else if (e.key === "ArrowUp") go(i - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(items.length - 1);
    else if (e.key === "Escape") { e.stopPropagation(); closeLang(true); }
    else if (e.key === "Tab") closeLang();
  });
  document.addEventListener("click", (e) => { if (!e.target.closest("#langs")) closeLang(); });
  /* Поки агент «друкує», перемикання чекає — інакше два повідомлення переплетуться */
  const idle = () => new Promise((r) => { const w = () => (busy ? setTimeout(w, 80) : r()); w(); });
  $("langs").addEventListener("click", async (e) => {
    const b = e.target.closest("[data-l]");
    if (!b) return;
    closeLang(true);
    await idle();
    if (b.dataset.l === lang) return;
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
