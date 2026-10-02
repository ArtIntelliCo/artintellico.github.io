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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
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
        "  APPLE           Apple ][",
        "  LISA            Apple Lisa",
        "  LINUX           X11 + fvwm, 1996",
        "  MC              Linux + Midnight Commander",
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Послуги як теми довідки WinHelp. {{ключ|текст}} — термін зі спливним поясненням із GLOSS */
  const SEE = [[1, 5], [6, 8, 0], [3, 8], [2, 8], [8, 0], [8, 0], [7, 9], [6, 8, 9], [5, 7, 2], [6, 8]];
  const SVC = {
    uk: {
      intro: "Ми не тримаємося за одну мову програмування чи платформу. Спершу з'ясовуємо, що саме треба зробити, а інструменти добираємо потім. Буває, що найкраща відповідь — готовий сервіс за підпискою; тоді ми так прямо й скажемо, а не продаватимемо вам розробку.",
      items: [
        {
          t: "Розробка концепції ІТ рішення",
          lead: "З'ясовуємо, яку задачу має розв'язати система, і записуємо вимоги так, щоб їх однаково розуміли і бізнес, і розробники.",
          body: "Найдорожча помилка в ІТ-проєкті стається ще до першого рядка коду: систему починають будувати під задачу, яку ніхто до ладу не сформулював. Тому ми говоримо не лише з керівником, а й з тими, хто працюватиме в системі щодня, — з бухгалтерією, складом, менеджерами.",
          note: "Іноді висновок такий: нічого не розробляти, а взяти готовий продукт і доналаштувати його. Це теж результат, хоч і не той, на який чекають, коли кличуть розробників.",
          inc: ["інтерв'ю з працівниками й розбір того, як процеси влаштовані зараз", "бізнес-вимоги та сценарії роботи", "чесне порівняння готових продуктів із розробкою на замовлення", "{{spec|технічне завдання}} з оцінкою строків і бюджету за етапами"],
          res: "Документ, з яким будь-яка команда, наша чи інша, може оцінити роботу й почати її."
        },
        {
          t: "Розробка SaaS рішень",
          lead: "Проєктуємо й розробляємо {{saas|SaaS}}-платформи — від першої версії для кількох пілотних клієнтів до сервісу, де в кожного клієнта свій простір, тариф і особистий кабінет.",
          body: "Гроші в SaaS приносить не код. Їх приносить те, наскільки легко новий клієнт реєструється, платить і починає працювати, жодного разу не подзвонивши в підтримку. {{tenant|Мультитенантність}}, {{billing|білінг}} і права доступу закладаємо з першого дня: переробляти їх потім, коли клієнти вже всередині, коштує в рази дорожче. А першу версію намагаємося випустити якомога раніше, бо живі користувачі дуже швидко показують, які функції були зайві.",
          inc: ["мультитенантна архітектура, де дані клієнтів ізольовані одні від одних", "реєстрація, тарифи, підписки, онлайн-оплата", "особисті кабінети, ролі й права доступу", "інтеграції та відкрите {{api|API}} для ваших клієнтів", "масштабування, коли навантаження росте"],
          res: "Продукт, який продається за підпискою, а не проєкт, який щоразу доводиться впроваджувати вручну."
        },
        {
          t: "Web-розробка",
          lead: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. Кожен робимо під його задачу, а не підганяємо під шаблон.",
          body: "Сайт для бізнесу оцінюють за заявками й замовленнями. Як він виглядає в портфоліо — справа десята. Тому ще до старту домовляємося, що вважати результатом, і налаштовуємо аналітику до запуску (а не через пів року, коли вже й порівнювати нема з чим). Технологію добираємо під задачу: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів просто не влізе.",
          inc: ["прототип і дизайн інтерфейсів", "frontend, backend і панель адміністрування", "інтеграція з оплатою, доставкою, {{crm|CRM}} та обліковими системами", "{{seo|SEO}}-основа, швидке завантаження сторінок, аналітика", "запуск, а далі супровід"],
          res: "Вебсервіс, про який ви точно знаєте, скільки заявок і грошей він приносить."
        },
        {
          t: "Мобільні застосунки",
          lead: "Застосунки для iOS та Android, а заразом усе, що за ними стоїть: серверна частина й панель адміністрування.",
          body: "Застосунок виправдовує себе, коли клієнт повертається до нього регулярно: замовляє вдруге, стежить за статусом, збирає бонуси. Між {{native|нативною та кросплатформною}} розробкою обираємо за бюджетом і за тим, наскільки застосунку потрібні камера, геолокація й робота без мережі.",
          note: "Якщо людина відкриває ваш застосунок раз на рік, зручний мобільний сайт обійдеться дешевше. Ми скажемо про це до початку робіт, а не після публікації.",
          inc: ["застосунки для iOS та Android", "серверна частина й {{api|API}}", "адмінпанель для контенту, замовлень і користувачів", "{{push|push-сповіщення}} та аналітика", "публікація в App Store і Google Play"],
          res: "Застосунок, який проходить модерацію магазинів і яким ваша команда керує сама, не смикаючи розробника."
        },
        {
          t: "Рішення зі штучним інтелектом",
          lead: "Автоматизуємо бізнес-процеси за допомогою {{agent|ШІ-агентів}}. Штучний інтелект і машинне навчання ставимо туди, де вони заощаджують час працівників або гроші компанії, і більше нікуди.",
          body: "Там, де люди годинами розбирають листи, документи й звернення, {{llm|мовні моделі}} справді знімають рутину. Починаємо з {{pilot|пілота}} на ваших даних: цифри точності ви бачите до основної розробки, а не після неї.",
          note: "До ШІ ми ставимося скептичніше за багатьох. Приблизно половина ідей «а давайте додамо нейромережу» розв'язується звичайною автоматизацією, без жодної моделі.",
          inc: ["ШІ-агенти, що самі проходять рутинні кроки процесу: розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання й розбір документів", "класифікація звернень, пошук у базі знань", "прогноз попиту, аналіз даних", "пілот, де якість міряють на ваших даних"],
          res: "Конкретна ділянка роботи, яку раніше тягнули люди, переходить до системи, а контроль лишається за людиною."
        },
        {
          t: "Розробка CRM та ERP",
          lead: "{{crm|CRM}} та {{erp|ERP}} системи, збудовані навколо ваших процесів. Підлаштовувати бізнес під програму не доведеться.",
          body: "Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», власне рішення виходить дешевшим. Дані зі старих систем і таблиць переносимо самі, а запускаємо по відділах, щоб робота не зупинилася ні на день.",
          note: "Коробкова CRM цілком годиться, доки ваш процес схожий на стандартний. Якщо так і є, ми порадимо її, а не розробку.",
          inc: ["модулі продажів, складу, виробництва, фінансів — ті, що справді потрібні", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією та поштою"],
          res: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижня звіти з кожного відділу."
        },
        {
          t: "Хмарні рішення",
          lead: "Переносимо інфраструктуру до {{aws|Amazon Web Services}}, повністю або частинами, і пильнуємо, щоб після переїзду вона працювала й не дорожчала без причини.",
          body: "Хмара вигідна, коли навантаження стрибає, коли потрібна {{failover|відмовостійкість}} або коли нове середовище має підніматися за хвилини, а не за тиждень. Тому переїзд починається з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є {{rollback|план відкату}}.",
          note: "Хмара не завжди дешевша за власний сервер. Якщо розрахунок покаже, що вам вигідніше лишитися на своєму залізі, ви про це дізнаєтеся.",
          inc: ["аудит поточної інфраструктури й розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервне копіювання та моніторинг", "оптимізація витрат, коли переїзд позаду"],
          res: "Інфраструктура, яка переживе відмову сервера, і рахунок за хмару, який ви можете прочитати й зрозуміти."
        },
        {
          t: "Інфраструктура компанії на базі Red Hat",
          lead: "Будуємо ІТ-інфраструктуру компанії на рішеннях Red Hat: сервери на {{rhel|Red Hat Enterprise Linux}}, застосунки на контейнерній платформі {{openshift|OpenShift}}, налаштування через {{ansible|Ansible}}.",
          body: "Red Hat беруть тоді, коли інфраструктура має працювати роками й проходити аудити, а не триматися на пам'яті одного адміністратора (який теж іноді йде у відпустку). Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux розрахований на десять років. Інфраструктуру проєктуємо під ваші навантаження, а конфігурацію кожного сервера описуємо в Ansible, тож будь-який із них можна перезібрати за сценарієм, нічого не пригадуючи.",
          note: "Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися.",
          inc: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux, оновлення централізовано через {{satellite|Red Hat Satellite}}", "OpenShift для ваших застосунків", "автоматизація налаштування й розгортання в Ansible", "облікові записи й доступи в одному місці — {{idm|Identity Management}}", "моніторинг, резервні копії й документація для вашої команди"],
          res: "Інфраструктура, яку можна перевірити, відтворити й передати іншій команді, і знання при цьому нікуди не зникнуть."
        },
        {
          t: "API та інтеграції",
          lead: "Розробляємо {{api|API}} для ваших систем і з'єднуємо їх із сервісами, якими ви вже користуєтеся.",
          body: "Біль, який ми бачимо найчастіше: дані вводять двічі. Замовлення із сайту хтось руками переносить в облікову систему, оплати звіряють у таблиці. Інтеграція забирає цю роботу, а разом із нею й помилки, які вона плодить. Окремо ставимо моніторинг: коли партнер змінює свій API, інтеграція ламається тихо, і краще дізнатися про це від системи, ніж від клієнта.",
          inc: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM та обліком", "обмін даними між вашими внутрішніми системами", "{{queue|черги й повторні спроби}} на випадок збоїв", "моніторинг і сповіщення"],
          res: "Дані вводять один раз, а далі вони самі потрапляють туди, де потрібні."
        },
        {
          t: "Технічна підтримка",
          lead: "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, зокрема ті, які писали не ми.",
          body: "Виправлення помилок — лише частина роботи. Сюди ж належать оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася від іншого підрядника, починаємо з аудиту й документації, бо без неї кожна правка перетворюється на лотерею.",
          inc: ["моніторинг доступності й помилок", "виправлення помилок, оновлення безпеки", "резервні копії та перевірка, що з них справді можна відновитися", "доопрацювання й нові функції за планом", "аудит і документація систем, які писали інші"],
          res: "Система працює, а поруч є команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      intro: "We don't tie ourselves to one programming language or platform. First we work out what actually needs doing; the tools come after. Sometimes the best answer is an off-the-shelf subscription service, and then we'll tell you so rather than sell you a build.",
      items: [
        {
          t: "IT solution concept",
          lead: "We work out what problem the system has to solve and write the requirements so that the business and the developers read them the same way.",
          body: "The most expensive mistake in an IT project happens before anyone writes a line of code: the system gets built for a problem nobody ever pinned down. So we don't only talk to the person signing off. We talk to the people who'll use it every day — accounting, the warehouse, the sales managers.",
          note: "Sometimes the conclusion is to build nothing and configure an existing product instead. That's a result too, just not the one people expect when they call in developers.",
          inc: ["interviews with staff and a walkthrough of how things work today", "business requirements and user scenarios", "an honest comparison of ready-made products against custom development", "a {{spec|specification}} with time and budget estimates for each phase"],
          res: "A document any team, ours or someone else's, can estimate from and start building."
        },
        {
          t: "SaaS development",
          lead: "We design and build {{saas|SaaS}} platforms, from a first version for a handful of pilot customers to a service where every customer has their own workspace, plan and dashboard.",
          body: "The money in SaaS isn't in the code. It's in how easily a new customer signs up, pays and gets going without ever calling support. We put {{tenant|multi-tenancy}}, {{billing|billing}} and permissions in from day one, because bolting them on once customers are inside costs several times more. And we try to ship the first version early: real users are quick to show you which features nobody needed.",
          inc: ["multi-tenant architecture that keeps each customer's data apart", "sign-up, plans, subscriptions and online payments", "customer dashboards, roles and permissions", "integrations and a public {{api|API}} for your customers", "scaling as the load grows"],
          res: "A product you sell by subscription, not a project you have to roll out by hand every time."
        },
        {
          t: "Web development",
          lead: "Corporate sites, marketplaces, online stores, booking systems, internal web tools. Each one is built around its own task instead of being squeezed into a template.",
          body: "A business website is judged by leads and orders. How it looks in a portfolio barely matters. So before we start we agree on what counts as a result, and analytics goes in before launch (not six months later, when there's nothing left to compare against). The technology follows the task: a landing page has no use for a heavy platform, and a marketplace simply won't fit in a website builder.",
          inc: ["prototype and interface design", "frontend, backend and admin panel", "integrations with payments, delivery, {{crm|CRM}} and accounting systems", "{{seo|SEO}} groundwork, fast page loads, analytics", "launch, then ongoing support"],
          res: "A web service where you know exactly how many leads and how much revenue it brings in."
        },
        {
          t: "Mobile apps",
          lead: "iOS and Android apps, plus everything behind them: the server side and the admin panel.",
          body: "An app earns its keep when customers come back to it regularly — reordering, tracking a delivery, collecting loyalty points. Whether we go {{native|native or cross-platform}} depends on the budget and on how much the app needs the camera, location and offline mode.",
          note: "If someone opens your app once a year, a good mobile website will cost you less. We'll say so before work starts, not after the app is in the store.",
          inc: ["iOS and Android apps", "server side and {{api|API}}", "an admin panel for content, orders and users", "{{push|push notifications}} and analytics", "publishing to the App Store and Google Play"],
          res: "An app that passes store review and that your team runs on its own, without phoning a developer."
        },
        {
          t: "AI-powered solutions",
          lead: "We automate business processes with {{agent|AI agents}}. Artificial intelligence and machine learning go where they save staff time or company money, and nowhere else.",
          body: "Where people spend hours sorting emails, documents and support requests, {{llm|language models}} really do take the routine off their plate. We start with a {{pilot|pilot}} on your own data, so you see accuracy figures before the main build, not after it.",
          note: "We're more sceptical about AI than most. Roughly half of the “let's add a neural network” ideas get solved by ordinary automation, no model required.",
          inc: ["AI agents that work through the routine steps of a process by themselves: sorting incoming requests, filling in the CRM, drafting replies to customers", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification and knowledge-base search", "demand forecasting and data analysis", "a pilot where quality is measured on your data"],
          res: "A specific piece of work that people used to grind through moves to the system, and a person stays in control."
        },
        {
          t: "CRM and ERP development",
          lead: "{{crm|CRM}} and {{erp|ERP}} systems built around the way your business runs. You won't have to bend the business to fit the software.",
          body: "When managers keep half their work in spreadsheets because the system “can't do that”, building your own becomes the cheaper option. We move the data over from old systems and spreadsheets ourselves and roll out one department at a time, so work doesn't stop for a single day.",
          note: "Off-the-shelf CRM is perfectly fine as long as your process looks standard. If it does, we'll recommend that instead of a build.",
          inc: ["sales, warehouse, production and finance modules — the ones you actually need", "roles, permissions and an audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony and email"],
          res: "One system instead of a zoo of spreadsheets. Management can see where things stand without chasing a weekly report from every department."
        },
        {
          t: "Cloud solutions",
          lead: "We move your infrastructure to {{aws|Amazon Web Services}}, all of it or in parts, and keep an eye on it afterwards so it keeps running and doesn't get pricier for no reason.",
          body: "The cloud pays off when load jumps around, when you need {{failover|fault tolerance}}, or when a new environment should be up in minutes rather than a week. That's why a migration starts with an audit and a cost estimate. The move happens in stages, with a {{rollback|rollback plan}} at every step.",
          note: "The cloud isn't always cheaper than your own server. If the numbers say you're better off staying on your own hardware, you'll hear that from us.",
          inc: ["audit of the current infrastructure and a cost estimate", "AWS architecture and a migration plan", "moving servers, databases and files", "backups and monitoring", "cost optimisation once the move is done"],
          res: "Infrastructure that survives a server failure, and a cloud bill you can read and understand."
        },
        {
          t: "Company infrastructure on Red Hat",
          lead: "We build your company's IT infrastructure on Red Hat: servers on {{rhel|Red Hat Enterprise Linux}}, applications on the {{openshift|OpenShift}} container platform, configuration through {{ansible|Ansible}}.",
          body: "Companies go with Red Hat when infrastructure has to run for years and pass audits instead of living in one administrator's head (and administrators do take holidays). The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years. We design the infrastructure around your workloads and describe every server's configuration in Ansible, so any of them can be rebuilt from a playbook, with nobody trying to remember how it was done.",
          note: "Red Hat is our partner, so we can also help you sort out subscriptions and vendor support.",
          inc: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout, with updates managed centrally through {{satellite|Red Hat Satellite}}", "OpenShift for your applications", "configuration and deployment automation in Ansible", "accounts and access in one place with {{idm|Identity Management}}", "monitoring, backups and documentation for your team"],
          res: "Infrastructure you can audit, reproduce and hand to another team without the knowledge walking out the door."
        },
        {
          t: "APIs and integrations",
          lead: "We design {{api|APIs}} for your systems and connect them to the services you already use.",
          body: "The pain we see most often is data typed in twice. Someone re-enters website orders into the accounting system by hand; payments get reconciled in a spreadsheet. An integration takes that work away, along with the mistakes it breeds. We also set up monitoring, because when a partner changes their API the integration breaks quietly, and you'd rather hear it from the system than from a customer.",
          inc: ["API design and documentation", "integrations with payment providers, delivery services, CRM and accounting", "data exchange between your internal systems", "{{queue|queues and retries}} for when something fails", "monitoring and alerts"],
          res: "Data gets entered once and finds its own way to wherever it's needed."
        },
        {
          t: "Technical support",
          lead: "We look after your IT systems and keep developing them, including the ones we didn't build.",
          body: "Fixing bugs is only part of the job. There are also updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and documentation, because without it every change is a gamble.",
          inc: ["availability and error monitoring", "bug fixes and security updates", "backups, and checks that you can actually restore from them", "planned improvements and new features", "audit and documentation of systems built by others"],
          res: "The system works, and there's a team nearby that knows how it's put together."
        }
      ]
    },
    ru: {
      intro: "Мы не держимся за один язык программирования или платформу. Сначала выясняем, что именно нужно сделать, а инструменты подбираем потом. Бывает, что лучший ответ — готовый сервис по подписке; тогда мы так прямо и скажем, а не станем продавать вам разработку.",
      items: [
        {
          t: "Разработка концепции ИТ решения",
          lead: "Выясняем, какую задачу должна решать система, и записываем требования так, чтобы их одинаково понимали и бизнес, и разработчики.",
          body: "Самая дорогая ошибка в ИТ-проекте случается ещё до первой строки кода: систему начинают строить под задачу, которую толком никто не сформулировал. Поэтому мы разговариваем не только с руководителем, но и с теми, кто будет работать в системе каждый день, — с бухгалтерией, складом, менеджерами.",
          note: "Иногда вывод такой: ничего не разрабатывать, а взять готовый продукт и донастроить его. Это тоже результат, хотя и не тот, которого ждут, когда зовут разработчиков.",
          inc: ["интервью с сотрудниками и разбор того, как процессы устроены сейчас", "бизнес-требования и сценарии работы", "честное сравнение готовых продуктов с заказной разработкой", "{{spec|техническое задание}} с оценкой сроков и бюджета по этапам"],
          res: "Документ, с которым любая команда, наша или чужая, сможет оценить работу и начать её."
        },
        {
          t: "Разработка SaaS решений",
          lead: "Проектируем и разрабатываем {{saas|SaaS}}-платформы — от первой версии для нескольких пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и личный кабинет.",
          body: "Деньги в SaaS приносит не код. Их приносит то, насколько легко новый клиент регистрируется, платит и начинает работать, ни разу не позвонив в поддержку. {{tenant|Мультитенантность}}, {{billing|биллинг}} и права доступа закладываем с первого дня: переделывать их потом, когда клиенты уже внутри, в разы дороже. А первую версию стараемся выпустить пораньше — живые пользователи быстро показывают, какие функции были лишними.",
          inc: ["мультитенантная архитектура, где данные клиентов изолированы друг от друга", "регистрация, тарифы, подписки, онлайн-оплата", "личные кабинеты, роли и права доступа", "интеграции и открытое {{api|API}} для ваших клиентов", "масштабирование, когда нагрузка растёт"],
          res: "Продукт, который продаётся по подписке, а не проект, который каждый раз приходится внедрять вручную."
        },
        {
          t: "Web-разработка",
          lead: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. Каждый делаем под его задачу, а не подгоняем под шаблон.",
          body: "Сайт для бизнеса оценивают по заявкам и заказам. Как он смотрится в портфолио — дело десятое. Поэтому ещё до старта договариваемся, что считать результатом, и настраиваем аналитику до запуска (а не через полгода, когда уже и сравнивать не с чем). Технологию подбираем под задачу: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов просто не влезет.",
          inc: ["прототип и дизайн интерфейсов", "frontend, backend и панель администрирования", "интеграция с оплатой, доставкой, {{crm|CRM}} и учётными системами", "{{seo|SEO}}-основа, быстрая загрузка страниц, аналитика", "запуск, а дальше сопровождение"],
          res: "Веб-сервис, про который вы точно знаете, сколько заявок и денег он приносит."
        },
        {
          t: "Мобильные приложения",
          lead: "Приложения для iOS и Android, а заодно всё, что за ними стоит: серверная часть и панель администрирования.",
          body: "Приложение оправдывает себя, когда клиент возвращается к нему регулярно: заказывает повторно, следит за статусом, копит бонусы. Между {{native|нативной и кроссплатформенной}} разработкой выбираем по бюджету и по тому, насколько приложению нужны камера, геолокация и работа без сети.",
          note: "Если человек открывает ваше приложение раз в год, удобный мобильный сайт обойдётся дешевле. Мы скажем об этом до начала работ, а не после публикации.",
          inc: ["приложения для iOS и Android", "серверная часть и {{api|API}}", "админ-панель для контента, заказов и пользователей", "{{push|push-уведомления}} и аналитика", "публикация в App Store и Google Play"],
          res: "Приложение, которое проходит модерацию магазинов и которым ваша команда управляет сама, не дёргая разработчика."
        },
        {
          t: "Решения с искусственным интеллектом",
          lead: "Автоматизируем бизнес-процессы с помощью {{agent|ИИ-агентов}}. Искусственный интеллект и машинное обучение ставим туда, где они экономят время сотрудников или деньги компании, и больше никуда.",
          body: "Там, где люди часами разбирают письма, документы и обращения, {{llm|языковые модели}} действительно снимают рутину. Начинаем с {{pilot|пилота}} на ваших данных: цифры точности вы видите до основной разработки, а не после неё.",
          note: "К ИИ мы относимся скептичнее многих. Примерно половина идей «а давайте добавим нейросеть» решается обычной автоматизацией, безо всякой модели.",
          inc: ["ИИ-агенты, которые сами проходят рутинные шаги процесса: разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогноз спроса, анализ данных", "пилот, где качество меряют на ваших данных"],
          res: "Конкретный участок работы, который раньше тянули люди, переходит к системе, а контроль остаётся за человеком."
        },
        {
          t: "Разработка CRM и ERP",
          lead: "{{crm|CRM}}- и {{erp|ERP}}-системы, построенные вокруг ваших процессов. Подстраивать бизнес под программу не придётся.",
          body: "Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», своё решение выходит дешевле. Данные из старых систем и таблиц переносим сами, а запускаем по отделам, чтобы работа не встала ни на день.",
          note: "Коробочная CRM вполне годится, пока ваш процесс похож на стандартный. Если так и есть, мы посоветуем её, а не разработку.",
          inc: ["модули продаж, склада, производства, финансов — те, что действительно нужны", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией и почтой"],
          res: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, и не собирает каждую неделю отчёты с каждого отдела."
        },
        {
          t: "Облачные решения",
          lead: "Переносим инфраструктуру в {{aws|Amazon Web Services}}, целиком или частями, и следим, чтобы после переезда она работала и не дорожала без причины.",
          body: "Облако выгодно, когда нагрузка скачет, когда нужна {{failover|отказоустойчивость}} или когда новое окружение должно подниматься за минуты, а не за неделю. Поэтому переезд начинается с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть {{rollback|план отката}}.",
          note: "Облако не всегда дешевле своего сервера. Если расчёт покажет, что вам выгоднее остаться на своём железе, вы об этом узнаете.",
          inc: ["аудит текущей инфраструктуры и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервное копирование и мониторинг", "оптимизация расходов, когда переезд позади"],
          res: "Инфраструктура, которая переживёт отказ сервера, и счёт за облако, который вы можете прочитать и понять."
        },
        {
          t: "Инфраструктура компании на базе Red Hat",
          lead: "Строим ИТ-инфраструктуру компании на решениях Red Hat: серверы на {{rhel|Red Hat Enterprise Linux}}, приложения на контейнерной платформе {{openshift|OpenShift}}, настройка через {{ansible|Ansible}}.",
          body: "Red Hat берут тогда, когда инфраструктура должна работать годами и проходить аудиты, а не держаться на памяти одного администратора (который тоже иногда уходит в отпуск). Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux рассчитан на десять лет. Инфраструктуру проектируем под ваши нагрузки, а конфигурацию каждого сервера описываем в Ansible, так что любой из них можно пересобрать по сценарию, ничего не вспоминая.",
          note: "Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться.",
          inc: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux, обновления централизованно через {{satellite|Red Hat Satellite}}", "OpenShift для ваших приложений", "автоматизация настройки и развёртывания в Ansible", "учётные записи и доступы в одном месте — {{idm|Identity Management}}", "мониторинг, резервные копии и документация для вашей команды"],
          res: "Инфраструктура, которую можно проверить, воспроизвести и передать другой команде, и знания при этом никуда не денутся."
        },
        {
          t: "API и интеграции",
          lead: "Разрабатываем {{api|API}} для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          body: "Боль, которую мы видим чаще всего: данные вводят дважды. Заказ с сайта кто-то руками переносит в учётную систему, оплаты сверяют в таблице. Интеграция забирает эту работу, а вместе с ней и ошибки, которые она плодит. Отдельно ставим мониторинг: когда партнёр меняет свой API, интеграция ломается тихо, и лучше узнать об этом от системы, чем от клиента.",
          inc: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM и учётом", "обмен данными между вашими внутренними системами", "{{queue|очереди и повторные попытки}} на случай сбоев", "мониторинг и оповещения"],
          res: "Данные вводят один раз, а дальше они сами попадают туда, где нужны."
        },
        {
          t: "Техническая поддержка",
          lead: "Поддерживаем ваши ИТ-системы и развиваем их дальше, в том числе те, которые писали не мы.",
          body: "Исправление ошибок — только часть работы. Сюда же входят обновления, которые закрывают уязвимости, мониторинг, который замечает проблему раньше пользователей, и мелкие доработки по ходу. Если система досталась от другого подрядчика, начинаем с аудита и документации, потому что без неё каждая правка превращается в лотерею.",
          inc: ["мониторинг доступности и ошибок", "исправление ошибок, обновления безопасности", "резервные копии и проверка, что из них действительно можно восстановиться", "доработки и новые функции по плану", "аудит и документация систем, которые писали другие"],
          res: "Система работает, а рядом есть команда, которая знает, как она устроена."
        }
      ]
    }
  };

  /* Спливні пояснення термінів */
  const GLOSS = {
    uk: {
      saas: "SaaS (software as a service) — програма, якою користуються через браузер за підпискою. Нічого не треба встановлювати: сервіс працює на сервері постачальника.",
      tenant: "Мультитенантність — коли одна копія сервісу обслуговує багатьох клієнтів, а дані кожного з них відокремлені від інших.",
      billing: "Білінг — частина сервісу, яка рахує, скільки клієнт винен за своїм тарифом, виставляє рахунки й приймає оплату.",
      api: "API — домовлений спосіб, у який одна програма звертається до іншої: передає замовлення, питає статус, забирає дані. Людина посередині не потрібна.",
      aws: "Amazon Web Services (AWS) — хмара компанії Amazon: сервери, бази даних і сховища, за які платять за фактичне використання. ArtIntelliCo — партнер AWS.",
      crm: "CRM — система, де ведуть клієнтів і угоди: хто дзвонив, що замовив, на якому етапі продаж.",
      erp: "ERP — система обліку для всього підприємства: склад, виробництво, закупівлі й фінанси в одній базі.",
      seo: "SEO — налаштування сайту, щоб пошукові системи правильно його індексували й показували у видачі.",
      native: "Нативний застосунок пишуть окремо під iOS і окремо під Android. Кросплатформний — один код на обидві платформи. Перший має повніший доступ до можливостей телефона, другий зазвичай дешевший.",
      push: "Push-сповіщення — коротке повідомлення від застосунку, яке з'являється на екрані телефона, навіть коли застосунок закритий.",
      agent: "ШІ-агент — програма на основі штучного інтелекту, яка сама виконує рутинні кроки процесу: розбирає заявку, вносить дані в CRM, готує відповідь клієнту. Контроль лишається за людиною.",
      llm: "Мовна модель — нейромережа, навчена на великих обсягах тексту. Вміє читати, сортувати й складати тексти, але її якість треба перевіряти на ваших даних.",
      pilot: "Пілот — невелика пробна версія на справжніх даних, щоб виміряти точність до того, як вкладатися в повну розробку.",
      failover: "Відмовостійкість — здатність системи працювати далі, коли один із серверів вийшов з ладу.",
      rollback: "План відкату — заздалегідь розписаний спосіб повернутися до попереднього стану, якщо крок міграції пішов не так.",
      queue: "Черга з повторними спробами: якщо інша система не відповіла, повідомлення не губиться, а чекає й надсилається ще раз.",
      rhel: "Red Hat Enterprise Linux (RHEL) — серверна операційна система Red Hat. Її життєвий цикл розрахований на десять років, а підписка включає підтримку виробника.",
      openshift: "OpenShift — контейнерна платформа Red Hat, на якій запускають і оновлюють ваші застосунки.",
      ansible: "Ansible — інструмент автоматизації від Red Hat. Налаштування сервера записують у сценарій, і за ним сервер можна зібрати заново.",
      satellite: "Red Hat Satellite — система, через яку сервери на Red Hat Enterprise Linux оновлюють централізовано, а не кожен окремо.",
      idm: "Identity Management — єдине керування обліковими записами й правами доступу замість окремих налаштувань на кожному сервері.",
      spec: "Технічне завдання — документ, де описано, що саме має робити система і як перевірити, що вона це робить."
    },
    en: {
      saas: "SaaS (software as a service) — software you use in a browser on a subscription. Nothing to install: it runs on the provider's servers.",
      tenant: "Multi-tenancy — one copy of a service serves many customers, while each customer's data stays separate from everyone else's.",
      billing: "Billing — the part of a service that works out what a customer owes on their plan, issues invoices and takes payment.",
      api: "API — an agreed way for one program to talk to another: send an order, ask for a status, fetch data. No person in the middle.",
      aws: "Amazon Web Services (AWS) — Amazon's cloud: servers, databases and storage you pay for as you use them. ArtIntelliCo is an AWS partner.",
      crm: "CRM — a system for customers and deals: who called, what they ordered, what stage the sale is at.",
      erp: "ERP — a system that runs the books for the whole company: warehouse, production, purchasing and finance in one database.",
      seo: "SEO — setting a site up so that search engines index it properly and show it in results.",
      native: "A native app is written separately for iOS and for Android. A cross-platform app shares one codebase across both. Native gets fuller access to the phone; cross-platform is usually cheaper.",
      push: "Push notification — a short message from an app that shows up on the phone's screen even when the app is closed.",
      agent: "AI agent — an AI-based program that carries out routine process steps on its own: sorting a request, entering data into the CRM, drafting a reply to a customer. A person stays in control.",
      llm: "Language model — a neural network trained on large amounts of text. It can read, sort and write text, but its quality has to be checked on your own data.",
      pilot: "Pilot — a small trial version run on real data to measure accuracy before you commit to the full build.",
      failover: "Fault tolerance — the system keeps working when one of its servers goes down.",
      rollback: "Rollback plan — a way back to the previous state, written down in advance, in case a migration step goes wrong.",
      queue: "A queue with retries: if the other system doesn't answer, the message isn't lost; it waits and gets sent again.",
      rhel: "Red Hat Enterprise Linux (RHEL) — Red Hat's server operating system. Its lifecycle runs ten years, and the subscription includes vendor support.",
      openshift: "OpenShift — Red Hat's container platform, where your applications run and get updated.",
      ansible: "Ansible — Red Hat's automation tool. A server's configuration is written down as a playbook, and the server can be rebuilt from it.",
      satellite: "Red Hat Satellite — a system for updating Red Hat Enterprise Linux servers centrally rather than one by one.",
      idm: "Identity Management — one place to manage accounts and access rights instead of separate settings on every server.",
      spec: "Specification — a document describing exactly what the system must do and how to check that it does it."
    },
    ru: {
      saas: "SaaS (software as a service) — программа, которой пользуются через браузер по подписке. Ничего не нужно устанавливать: сервис работает на серверах поставщика.",
      tenant: "Мультитенантность — когда одна копия сервиса обслуживает многих клиентов, а данные каждого отделены от остальных.",
      billing: "Биллинг — часть сервиса, которая считает, сколько клиент должен по своему тарифу, выставляет счета и принимает оплату.",
      api: "API — оговорённый способ, которым одна программа обращается к другой: передаёт заказ, спрашивает статус, забирает данные. Человек посередине не нужен.",
      aws: "Amazon Web Services (AWS) — облако компании Amazon: серверы, базы данных и хранилища, за которые платят по факту использования. ArtIntelliCo — партнёр AWS.",
      crm: "CRM — система, где ведут клиентов и сделки: кто звонил, что заказал, на каком этапе продажа.",
      erp: "ERP — система учёта для всего предприятия: склад, производство, закупки и финансы в одной базе.",
      seo: "SEO — настройка сайта, чтобы поисковые системы правильно его индексировали и показывали в выдаче.",
      native: "Нативное приложение пишут отдельно под iOS и отдельно под Android. Кроссплатформенное — один код на обе платформы. У первого полнее доступ к возможностям телефона, второе обычно дешевле.",
      push: "Push-уведомление — короткое сообщение от приложения, которое появляется на экране телефона, даже когда приложение закрыто.",
      agent: "ИИ-агент — программа на основе искусственного интеллекта, которая сама выполняет рутинные шаги процесса: разбирает заявку, вносит данные в CRM, готовит ответ клиенту. Контроль остаётся за человеком.",
      llm: "Языковая модель — нейросеть, обученная на больших объёмах текста. Умеет читать, сортировать и составлять тексты, но её качество нужно проверять на ваших данных.",
      pilot: "Пилот — небольшая пробная версия на настоящих данных, чтобы измерить точность до того, как вкладываться в полную разработку.",
      failover: "Отказоустойчивость — способность системы работать дальше, когда один из серверов вышел из строя.",
      rollback: "План отката — заранее расписанный способ вернуться к предыдущему состоянию, если шаг миграции пошёл не так.",
      queue: "Очередь с повторными попытками: если другая система не ответила, сообщение не теряется, а ждёт и отправляется ещё раз.",
      rhel: "Red Hat Enterprise Linux (RHEL) — серверная операционная система Red Hat. Её жизненный цикл рассчитан на десять лет, а подписка включает поддержку производителя.",
      openshift: "OpenShift — контейнерная платформа Red Hat, на которой запускают и обновляют ваши приложения.",
      ansible: "Ansible — инструмент автоматизации от Red Hat. Настройку сервера записывают в сценарий, и по нему сервер можно собрать заново.",
      satellite: "Red Hat Satellite — система, через которую серверы на Red Hat Enterprise Linux обновляют централизованно, а не каждый по отдельности.",
      idm: "Identity Management — единое управление учётными записями и правами доступа вместо отдельных настроек на каждом сервере.",
      spec: "Техническое задание — документ, где описано, что именно должна делать система и как проверить, что она это делает."
    }
  };

  /* Підписи вікна довідки */
  const HX = {
    uk: { title: "Довідка", file: "ПОСЛУГИ.HLP", contents: "Зміст", back: "Назад", prevT: "Попередня тема", nextT: "Наступна тема", see: "Див. також", inc: "Що ми робимо", res: "Що ви отримаєте", note: "Примітка.", head: "Послуги ArtIntelliCo", pick: "Клацніть тему, щоб прочитати про послугу:", more: "Докладніше в довідці (F1)", topicHelp: "Довідка про послугу", index: "Зміст довідки", icon: "Довідка" },
    en: { title: "Help", file: "SERVICES.HLP", contents: "Contents", back: "Back", prevT: "Previous topic", nextT: "Next topic", see: "See also", inc: "What we do", res: "What you get", note: "Note:", head: "ArtIntelliCo services", pick: "Click a topic to read about a service:", more: "More in Help (F1)", topicHelp: "Help on this service", index: "Help contents", icon: "Help" },
    ru: { title: "Справка", file: "УСЛУГИ.HLP", contents: "Содержание", back: "Назад", prevT: "Предыдущая тема", nextT: "Следующая тема", see: "См. также", inc: "Что мы делаем", res: "Что вы получите", note: "Примечание.", head: "Услуги ArtIntelliCo", pick: "Щёлкните тему, чтобы прочитать об услуге:", more: "Подробнее в справке (F1)", topicHelp: "Справка об услуге", index: "Содержание справки", icon: "Справка" }
  };

  /* Рядки Windows 3.11 */
  const WX = {
    uk: {
      progman: "Диспетчер програм", write: "Write", cardfile: "Картотека", notepad: "Блокнот", mail: "Пошта", cpl: "Панель керування", clock: "Годинник", tasks: "Список завдань", dos: "Сеанс DOS",
      groups: { aic: "ArtIntelliCo", main: "Головна", ver: "Інші версії" },
      icons: { readme: "Про компанію", services: "Послуги", partners: "Партнери", contact: "Написати нам" },
      pmMenus: ["Файл", "Параметри", "Вікно", "Довідка"],
      pm: { open: "Відкрити", exit: "Завершити сеанс…", minOnUse: "Згортати при запуску", cascade: "Каскадом", tile: "Мозаїкою", about: "Про програму…" },
      sys: ["Відновити", "Перемістити", "Розмір", "Згорнути", "Розгорнути", "Закрити", "Перейти до…"],
      file: "Файл", edit: "Правка", view: "Вигляд", card: "Картка", options: "Параметри", help: "Довідка",
      print: "Друкувати", quit: "Вихід", copyAll: "Копіювати все", aboutApp: (n) => `Про програму «${n}»…`,
      cardsView: "Картки", listView: "Список", prev: "Попередня картка", next: "Наступна картка", writeAbout: "Написати про цю послугу",
      cardCount: (n) => `${n} карток`, cardMode: "Вигляд картки", listMode: "Вигляд списку",
      page: (n) => `Сторінка ${n}`,
      ole: { services: "ПОСЛУГИ.CRD", mail: "ЛИСТ.MSG", partners: "ПАРТНЕР.TXT" },
      oleHint: "Двічі клацніть вбудований об'єкт, щоб відкрити його.",
      to: "Кому:", subject: "Тема:", send: "Надіслати", checkNames: "Перевірити імена", attach: "Вкласти", optionsBtn: "Параметри", address: "Адреса",
      defaultSubject: "Запит з сайту", sendNote: "Лист відкриється у вашій поштовій програмі.",
      cplItems: ["Колір", "Робочий стіл", "Міжнародні"],
      color: "Колір", schemes: "Колірні схеми", desktopDlg: "Робочий стіл", wallpaper: "Шпалери", none: "(немає)", intl: "Міжнародні", language: "Мова",
      schemeNames: { def: "Стандартна", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Активне вікно", menu: "Звичайний  Вимкнено", text: "Текст вікна" },
      ok: "OK", cancel: "Скасувати", switchTo: "Перейти до", endTask: "Завершити завдання",
      analog: "Аналоговий", digital: "Цифровий",
      aboutLines: ["ArtIntelliCo for Workgroups", "Версія 3.11", "© 1985–2026 ArtIntelliCo", "", "Розширений режим 386", "Вільна пам'ять: 14 532 КБ", "Системні ресурси: 79% вільно"],
      exitText: "Це завершить ваш сеанс ArtIntelliCo for Workgroups.",
      exitDos: "Введіть win, щоб знову запустити систему.",
      bad: "Невірна команда або ім'я файлу",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      version: "Версія 3.11",
      copied: "Текст скопійовано в буфер обміну."
    },
    en: {
      progman: "Program Manager", write: "Write", cardfile: "Cardfile", notepad: "Notepad", mail: "Mail", cpl: "Control Panel", clock: "Clock", tasks: "Task List", dos: "DOS Prompt",
      groups: { aic: "ArtIntelliCo", main: "Main", ver: "Other versions" },
      icons: { readme: "About", services: "Services", partners: "Partners", contact: "Write to us" },
      pmMenus: ["File", "Options", "Window", "Help"],
      pm: { open: "Open", exit: "Exit Windows…", minOnUse: "Minimize on Use", cascade: "Cascade", tile: "Tile", about: "About Program Manager…" },
      sys: ["Restore", "Move", "Size", "Minimize", "Maximize", "Close", "Switch To…"],
      file: "File", edit: "Edit", view: "View", card: "Card", options: "Options", help: "Help",
      print: "Print", quit: "Exit", copyAll: "Copy all", aboutApp: (n) => `About ${n}…`,
      cardsView: "Card", listView: "List", prev: "Previous card", next: "Next card", writeAbout: "Write about this service",
      cardCount: (n) => `${n} Cards`, cardMode: "Card View", listMode: "List View",
      page: (n) => `Page ${n}`,
      ole: { services: "SERVICES.CRD", mail: "LETTER.MSG", partners: "PARTNERS.TXT" },
      oleHint: "Double-click an embedded object to open it.",
      to: "To:", subject: "Subject:", send: "Send", checkNames: "Check Names", attach: "Attach", optionsBtn: "Options", address: "Address",
      defaultSubject: "Enquiry from the website", sendNote: "The letter will open in your email app.",
      cplItems: ["Color", "Desktop", "International"],
      color: "Color", schemes: "Color Schemes", desktopDlg: "Desktop", wallpaper: "Wallpaper", none: "(None)", intl: "International", language: "Language",
      schemeNames: { def: "Default", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Active", menu: "Normal  Disabled", text: "Window Text" },
      ok: "OK", cancel: "Cancel", switchTo: "Switch To", endTask: "End Task",
      analog: "Analog", digital: "Digital",
      aboutLines: ["ArtIntelliCo for Workgroups", "Version 3.11", "© 1985–2026 ArtIntelliCo", "", "386 Enhanced Mode", "Memory: 14,532 KB Free", "System Resources: 79% Free"],
      exitText: "This will end your ArtIntelliCo for Workgroups session.",
      exitDos: "Type win to start the system again.",
      bad: "Bad command or file name",
      skip: "Press any key to skip",
      version: "Version 3.11",
      copied: "Text copied to the clipboard."
    },
    ru: {
      progman: "Диспетчер программ", write: "Write", cardfile: "Картотека", notepad: "Блокнот", mail: "Почта", cpl: "Панель управления", clock: "Часы", tasks: "Список задач", dos: "Сеанс DOS",
      groups: { aic: "ArtIntelliCo", main: "Главная", ver: "Другие версии" },
      icons: { readme: "О компании", services: "Услуги", partners: "Партнёры", contact: "Написать нам" },
      pmMenus: ["Файл", "Параметры", "Окно", "Справка"],
      pm: { open: "Открыть", exit: "Завершить сеанс…", minOnUse: "Сворачивать при запуске", cascade: "Каскадом", tile: "Мозаикой", about: "О программе…" },
      sys: ["Восстановить", "Переместить", "Размер", "Свернуть", "Развернуть", "Закрыть", "Перейти к…"],
      file: "Файл", edit: "Правка", view: "Вид", card: "Карточка", options: "Параметры", help: "Справка",
      print: "Печать", quit: "Выход", copyAll: "Копировать всё", aboutApp: (n) => `О программе «${n}»…`,
      cardsView: "Карточки", listView: "Список", prev: "Предыдущая карточка", next: "Следующая карточка", writeAbout: "Написать об этой услуге",
      cardCount: (n) => `${n} карточек`, cardMode: "Вид карточек", listMode: "Вид списка",
      page: (n) => `Страница ${n}`,
      ole: { services: "УСЛУГИ.CRD", mail: "ПИСЬМО.MSG", partners: "ПАРТНЁР.TXT" },
      oleHint: "Дважды щёлкните встроенный объект, чтобы открыть его.",
      to: "Кому:", subject: "Тема:", send: "Отправить", checkNames: "Проверить имена", attach: "Вложить", optionsBtn: "Параметры", address: "Адрес",
      defaultSubject: "Запрос с сайта", sendNote: "Письмо откроется в вашей почтовой программе.",
      cplItems: ["Цвет", "Рабочий стол", "Международные"],
      color: "Цвет", schemes: "Цветовые схемы", desktopDlg: "Рабочий стол", wallpaper: "Обои", none: "(нет)", intl: "Международные", language: "Язык",
      schemeNames: { def: "Стандартная", hotdog: "Hotdog Stand", ocean: "Ocean", leather: "Black Leather Jacket" },
      sample: { active: "Активное окно", menu: "Обычный  Отключён", text: "Текст окна" },
      ok: "OK", cancel: "Отмена", switchTo: "Перейти к", endTask: "Снять задачу",
      analog: "Аналоговые", digital: "Цифровые",
      aboutLines: ["ArtIntelliCo for Workgroups", "Версия 3.11", "© 1985–2026 ArtIntelliCo", "", "Расширенный режим 386", "Свободная память: 14 532 КБ", "Системные ресурсы: 79% свободно"],
      exitText: "Это завершит ваш сеанс ArtIntelliCo for Workgroups.",
      exitDos: "Введите win, чтобы снова запустить систему.",
      bad: "Неверная команда или имя файла",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      version: "Версия 3.11",
      copied: "Текст скопирован в буфер обмена."
    }
  };

  const SCHEMES = {
    def: { desktop: "#C0C0C0", workspace: "#FFFFFF", title: "#000080", "title-text": "#FFFFFF", ititle: "#FFFFFF", "ititle-text": "#000000", frame: "#C0C0C0", menu: "#FFFFFF", "menu-text": "#000000", hl: "#000080", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" },
    hotdog: { desktop: "#FFFF00", workspace: "#FFFF00", title: "#000000", "title-text": "#FFFFFF", ititle: "#FF0000", "ititle-text": "#FFFFFF", frame: "#FF0000", menu: "#FF0000", "menu-text": "#FFFFFF", hl: "#000000", "hl-text": "#FFFFFF", window: "#FF0000", "window-text": "#FFFFFF" },
    ocean: { desktop: "#008080", workspace: "#C0E0E0", title: "#008080", "title-text": "#FFFFFF", ititle: "#C0E0E0", "ititle-text": "#004040", frame: "#80C0C0", menu: "#FFFFFF", "menu-text": "#000000", hl: "#008080", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" },
    leather: { desktop: "#000000", workspace: "#808080", title: "#000000", "title-text": "#FFFFFF", ititle: "#808080", "ititle-text": "#C0C0C0", frame: "#808080", menu: "#C0C0C0", "menu-text": "#000000", hl: "#000000", "hl-text": "#FFFFFF", window: "#FFFFFF", "window-text": "#000000" }
  };
  const WALLS = {
    none: "none",
    squares: "linear-gradient(90deg, rgba(0,0,0,.18) 1px, transparent 1px), linear-gradient(rgba(0,0,0,.18) 1px, transparent 1px)",
    argyle: "linear-gradient(45deg, rgba(0,0,128,.25) 25%, transparent 25%, transparent 75%, rgba(0,0,128,.25) 75%), linear-gradient(45deg, rgba(128,0,0,.18) 25%, transparent 25%, transparent 75%, rgba(128,0,0,.18) 75%)",
    tartan: "repeating-linear-gradient(90deg, rgba(0,96,0,.35) 0 8px, transparent 8px 24px, rgba(160,0,0,.3) 24px 28px, transparent 28px 40px), repeating-linear-gradient(0deg, rgba(0,96,0,.35) 0 8px, transparent 8px 24px, rgba(160,0,0,.3) 24px 28px, transparent 28px 40px)"
  };
  const WALL_SIZE = { none: "auto", squares: "24px 24px", argyle: "32px 32px, 32px 32px", tartan: "auto" };
  const WALL_POS = { none: "0 0", squares: "0 0", argyle: "0 0, 16px 16px", tartan: "0 0" };
  const LANGS = ["uk", "en", "ru"];
  const LANG_NAMES = { uk: "Українська", en: "English", ru: "Русский" };
  const VERSIONS = [["Norton Commander", "/", "nc"], ["DOS", "/dos/", "dos"], ["UNIX", "/unix/", "unix"], ["Apple ][", "/apple/", "apple"], ["Apple Lisa", "/lisa/", "lisa"], ["Linux 1996", "/linux/", "linux"], ["Midnight Commander", "/mc/", "mc"], ["AI", "/ai/", "ai"]];

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const narrow = () => matchMedia("(max-width: 720px)").matches;
  const nav = (navigator.language || "").toLowerCase();
  let lang = store.get("aic-lang") || (nav.startsWith("ru") ? "ru" : nav.startsWith("uk") ? "uk" : nav.startsWith("en") ? "en" : "uk");
  if (!LANGS.includes(lang)) lang = "uk";
  let scheme = store.get("aic-w31-scheme");
  if (!SCHEMES[scheme]) scheme = "def";
  let wall = store.get("aic-w31-wall");
  if (!WALLS[wall]) wall = "none";
  let minOnUse = false;
  const t = () => I18N[lang];
  const w = () => WX[lang];
  const svc = () => SVC[lang].items;
  const hx = () => HX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  /* {{ключ|текст}}: plain — просто текст, rich — кнопка зі спливним поясненням */
  const plain = (s) => String(s).replace(/\{\{\w+\|([^}]+)\}\}/g, "$1");
  const rich = (s) => esc(s).replace(/\{\{(\w+)\|([^}]+)\}\}/g, (m, k, v) => `<button type="button" class="hpop" data-g="${k}" aria-haspopup="dialog" aria-expanded="false">${v}</button>`);
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };
  const siteUrl = () => `${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/`;

  /* ---------- Піктограми 32×32 у 16 кольорах VGA ---------- */
  const px = (body) => `<svg viewBox="0 0 32 32" shape-rendering="crispEdges" aria-hidden="true">${body}</svg>`;
  const ICON = {
    write: px(`<path d="M6 3h15l5 5v21H6z" fill="#fff" stroke="#000"/><path d="M21 3v5h5" fill="none" stroke="#000"/><path d="M9 11h9M9 14h13M9 17h13M9 20h10" stroke="#000080"/><path d="M10 23l3-7 3 7M11 21h4" fill="none" stroke="#C00000" stroke-width="1.5"/><path d="M24 12l5-5 2 2-5 5-3 1z" fill="#C0C000" stroke="#000"/>`),
    cardfile: px(`<rect x="10" y="3" width="19" height="13" fill="#fff" stroke="#000"/><rect x="7" y="7" width="19" height="13" fill="#fff" stroke="#000"/><rect x="4" y="11" width="19" height="13" fill="#fff" stroke="#000"/><path d="M4 15h19" stroke="#C00000"/><path d="M6 18h14M6 21h10" stroke="#000080"/><rect x="4" y="25" width="25" height="4" fill="#808080" stroke="#000"/>`),
    notepad: px(`<rect x="7" y="4" width="18" height="25" fill="#fff" stroke="#000"/><path d="M9 3v3M13 3v3M17 3v3M21 3v3" stroke="#000" stroke-width="2"/><rect x="7" y="6" width="18" height="2" fill="#00C0C0"/><path d="M10 12h12M10 15h12M10 18h12M10 21h8M10 24h10" stroke="#808080"/>`),
    mail: px(`<rect x="3" y="8" width="26" height="17" fill="#FFFF80" stroke="#000"/><path d="M3 8l13 10 13-10" fill="none" stroke="#000"/><path d="M3 25l10-8M29 25l-10-8" stroke="#000"/><rect x="22" y="3" width="7" height="6" fill="#C00000" stroke="#000"/>`),
    cpl: px(`<rect x="4" y="4" width="20" height="15" fill="#C0C0C0" stroke="#000"/><rect x="6" y="6" width="16" height="11" fill="#008080"/><rect x="9" y="19" width="10" height="3" fill="#C0C0C0" stroke="#000"/><rect x="3" y="23" width="22" height="5" fill="#C0C0C0" stroke="#000"/><rect x="26" y="18" width="4" height="7" rx="2" fill="#fff" stroke="#000"/><path d="M28 18v-4h-4" fill="none" stroke="#000"/><rect x="8" y="8" width="4" height="3" fill="#FFFF00"/><rect x="14" y="11" width="5" height="3" fill="#C00000"/>`),
    clock: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000" stroke-width="2"/><path d="M16 16V7M16 16l6 4" stroke="#000" stroke-width="2"/><path d="M16 4v2M16 26v2M4 16h2M26 16h2" stroke="#000080"/>`),
    dos: px(`<rect x="2" y="5" width="28" height="22" fill="#000" stroke="#808080"/><rect x="2" y="5" width="28" height="3" fill="#000080"/><path d="M5 13h3M5 13v6M5 19h3M10 15h1M10 18h1M13 12l4 8M19 19h5" stroke="#C0C0C0"/><rect x="25" y="17" width="2" height="2" fill="#C0C0C0"/>`),
    group: px(`<rect x="2" y="4" width="28" height="23" fill="#fff" stroke="#000"/><rect x="2" y="4" width="28" height="4" fill="#000080"/><rect x="6" y="12" width="5" height="4" fill="#C00000"/><rect x="14" y="12" width="5" height="4" fill="#008000"/><rect x="22" y="12" width="5" height="4" fill="#C0C000"/><rect x="6" y="19" width="5" height="4" fill="#0000C0"/><rect x="14" y="19" width="5" height="4" fill="#808080"/>`),
    progman: px(`<rect x="2" y="4" width="28" height="23" fill="#C0C0C0" stroke="#000"/><rect x="2" y="4" width="28" height="4" fill="#000080"/><rect x="5" y="11" width="10" height="7" fill="#fff" stroke="#000"/><rect x="17" y="11" width="10" height="7" fill="#fff" stroke="#000"/><rect x="5" y="20" width="22" height="4" fill="#fff" stroke="#000"/>`),
    package: px(`<path d="M5 10l11-5 11 5v14l-11 5-11-5z" fill="#C0A060" stroke="#000"/><path d="M5 10l11 5 11-5M16 15v14" fill="none" stroke="#000"/><rect x="18" y="16" width="6" height="5" fill="#fff" stroke="#000"/>`),
    info: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000080" stroke-width="2"/><rect x="14" y="13" width="4" height="11" fill="#000080"/><rect x="14" y="7" width="4" height="4" fill="#000080"/>`),
    question: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000080" stroke-width="2"/><path d="M11 12c0-3 2-5 5-5s5 2 5 5-5 4-5 7v1" fill="none" stroke="#000080" stroke-width="3"/><rect x="14" y="23" width="4" height="3" fill="#000080"/>`),
    color: px(`<rect x="3" y="3" width="26" height="26" fill="#C0C0C0" stroke="#000"/><rect x="6" y="6" width="9" height="9" fill="#C00000"/><rect x="17" y="6" width="9" height="9" fill="#00C000"/><rect x="6" y="17" width="9" height="9" fill="#0000C0"/><rect x="17" y="17" width="9" height="9" fill="#FFFF00"/>`),
    deskicon: px(`<rect x="3" y="5" width="26" height="19" fill="#008080" stroke="#000"/><rect x="6" y="8" width="11" height="8" fill="#fff" stroke="#000"/><rect x="6" y="8" width="11" height="2" fill="#000080"/><rect x="11" y="24" width="10" height="4" fill="#C0C0C0" stroke="#000"/>`),
    intl: px(`<circle cx="16" cy="16" r="13" fill="#0080C0" stroke="#000"/><path d="M8 9c4 1 4 5 8 5s3 6 7 7M20 6c-2 3 1 5 4 5" fill="none" stroke="#00C000" stroke-width="3"/><path d="M3 16h26M16 3c-6 7-6 19 0 26M16 3c6 7 6 19 0 26" fill="none" stroke="#000" stroke-width=".6"/>`),
    nc: px(`<rect x="2" y="4" width="28" height="24" fill="#0000AA" stroke="#000"/><rect x="2" y="4" width="28" height="3" fill="#00AAAA"/><path d="M4 9h11v16H4zM17 9h11v16H17z" fill="none" stroke="#55FFFF"/><rect x="5" y="12" width="9" height="2" fill="#00AAAA"/>`),
    unix: px(`<rect x="2" y="4" width="28" height="22" fill="#000" stroke="#808080"/><path d="M5 10h8M5 14h12M5 18h6" stroke="#C9D6EA"/><rect x="12" y="17" width="3" height="3" fill="#C9D6EA"/>`),
    apple: px(`<rect x="2" y="4" width="28" height="22" rx="3" fill="#D8CCAE" stroke="#000"/><rect x="5" y="7" width="22" height="15" fill="#000"/><path d="M8 11h2v6H8M10 11h1M10 17h1M13 11h8M13 14h6" stroke="#33FF33"/>`),
    lisa: px(`<rect x="2" y="3" width="28" height="26" fill="#fff" stroke="#000"/><rect x="3" y="4" width="26" height="24" fill="#C0C0C0"/><rect x="7" y="9" width="17" height="14" fill="#fff" stroke="#000"/><rect x="7" y="9" width="17" height="3" fill="#fff" stroke="#000"/>`),
    linux: px(`<rect x="2" y="4" width="28" height="22" fill="#908090" stroke="#000"/><rect x="4" y="6" width="24" height="4" fill="#C06077"/><rect x="5" y="12" width="22" height="12" fill="#fff"/><path d="M7 15h9M7 18h12" stroke="#000"/>`),
    ai: px(`<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000"/><circle cx="11" cy="12" r="2.5" fill="#3A2BFF"/><circle cx="21" cy="12" r="2.5" fill="#3A2BFF"/><circle cx="16" cy="21" r="2.5" fill="#3A2BFF"/><path d="M11 12h10M11 12l5 9M21 12l-5 9" stroke="#3A2BFF"/>`),
    mc: px(`<rect x="2" y="4" width="28" height="24" fill="#0000AA" stroke="#000"/><rect x="2" y="4" width="28" height="3" fill="#00AAAA"/><path d="M4 9h11v14H4zM17 9h11v14H17z" fill="none" stroke="#AAAAAA"/><rect x="2" y="25" width="28" height="3" fill="#00AAAA"/><rect x="5" y="13" width="9" height="2" fill="#00AAAA"/>`)
  };

  /* ---------- Віконний менеджер ---------- */
  const desk = $("desk");
  const wins = new Map();
  let z = 10;

  function container(rec) { return rec.parent ? wins.get(rec.parent).mdi : desk; }

  function createWin(id, def) {
    if (wins.has(id)) { const r = wins.get(id); if (r.min) restore(id); else focus(id); return r; }
    const parentEl = def.parent ? wins.get(def.parent).mdi : desk;
    const el = document.createElement("section");
    el.className = "w" + (def.dialog ? " dlg" : "");
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "t-" + id);
    if (def.dialog) el.setAttribute("aria-modal", "true");
    el.innerHTML = `<div class="in">
      <div class="tb"><button type="button" class="ctl" aria-label="${esc(w().sys[0])}"><i></i></button><h2 id="t-${id}"></h2>${def.dialog ? "" : `<button type="button" class="mn" aria-label="${esc(w().sys[3])}"></button><button type="button" class="mx" aria-label="${esc(w().sys[4])}"></button>`}</div>
      <nav class="mb"${def.menus ? "" : " hidden"}></nav>
      <div class="body"></div></div>`;
    const R = parentEl.getBoundingClientRect();
    const [ww, hh] = def.size;
    const width = Math.min(ww, R.width - 8);
    const height = Math.min(hh, R.height - 8);
    let [x, y] = def.pos;
    if (x === "c") x = (R.width - width) / 2;
    if (y === "c") y = (R.height - height) / 2.4;
    if (x < 0) x = R.width - width + x;
    x = Math.max(0, Math.min(x, R.width - width));
    y = Math.max(0, Math.min(y, R.height - height));
    Object.assign(el.style, { left: x + "px", top: y + "px", width: width + "px", height: height + "px" });
    const rec = { id, el, def, parent: def.parent || null, body: el.querySelector(".body"), min: false, max: false };
    wins.set(id, rec);
    rec.render = () => {
      el.querySelector("h2").textContent = def.title();
      if (def.menus) renderMenubar(rec);
      def.render(rec.body, rec);
    };
    parentEl.appendChild(el);
    rec.render();
    wire(rec);
    focus(id);
    if (def.max) maximize(id);
    return rec;
  }

  function wire(rec) {
    const el = rec.el;
    el.addEventListener("pointerdown", () => focus(rec.id));
    el.addEventListener("focusin", () => focus(rec.id));
    const tb = el.querySelector(".tb");
    tb.addEventListener("pointerdown", (e) => { if (!e.target.closest("button")) rubber(rec, e, "move"); });
    tb.addEventListener("dblclick", (e) => { if (!e.target.closest("button") && !rec.def.dialog) maximize(rec.id); });
    const ctl = el.querySelector(".ctl");
    ctl.addEventListener("click", (e) => { e.stopPropagation(); sysMenu(rec, ctl); });
    ctl.addEventListener("dblclick", () => close(rec.id));
    const mn = el.querySelector(".mn");
    if (mn) mn.addEventListener("click", () => minimize(rec.id));
    const mx = el.querySelector(".mx");
    if (mx) mx.addEventListener("click", () => maximize(rec.id));
    if (!rec.def.dialog) {
      el.addEventListener("pointerdown", (e) => {
        if (e.target !== el) return;
        const r = el.getBoundingClientRect();
        const dir = (e.clientY - r.top < 6 ? "n" : r.bottom - e.clientY < 6 ? "s" : "") + (e.clientX - r.left < 6 ? "w" : r.right - e.clientX < 6 ? "e" : "");
        if (dir) rubber(rec, e, dir);
      });
      el.addEventListener("pointermove", (e) => {
        if (e.target !== el) { el.style.cursor = ""; return; }
        const r = el.getBoundingClientRect();
        const v = e.clientY - r.top < 6 ? "n" : r.bottom - e.clientY < 6 ? "s" : "";
        const h = e.clientX - r.left < 6 ? "w" : r.right - e.clientX < 6 ? "e" : "";
        el.style.cursor = { n: "ns-resize", s: "ns-resize", e: "ew-resize", w: "ew-resize", nw: "nwse-resize", se: "nwse-resize", ne: "nesw-resize", sw: "nesw-resize" }[v + h] || "";
      });
    }
  }

  function focus(id) {
    const rec = wins.get(id);
    if (!rec || rec.min) return;
    const siblings = [...wins.values()].filter((r) => r.parent === rec.parent);
    siblings.forEach((r) => r.el.classList.toggle("active", r === rec));
    if (rec.parent) focus(rec.parent);
    if (Number(rec.el.style.zIndex) !== z) rec.el.style.zIndex = ++z;
    if (rec.def.focused) rec.def.focused(rec);
  }
  const activeTop = () => [...wins.values()].filter((r) => !r.parent && !r.min && r.el.classList.contains("active"))[0];

  function close(id) {
    const rec = wins.get(id);
    if (!rec) return;
    if (rec.def.noClose) return rec.def.noClose();
    [...wins.values()].filter((r) => r.parent === id).forEach((r) => close(r.id));
    rec.el.remove();
    if (rec.mini) rec.mini.remove();
    wins.delete(id);
    const next = [...wins.values()].filter((r) => r.parent === rec.parent && !r.min).sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0];
    if (next) focus(next.id);
  }

  function minimize(id) {
    const rec = wins.get(id);
    if (!rec || rec.min) return;
    rec.min = true;
    rec.el.hidden = true;
    const holder = rec.parent ? wins.get(rec.parent).minis : $("deskMinis");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ico";
    b.innerHTML = `${ICON[rec.def.icon] || ICON.group}<span>${esc(rec.def.title())}</span>`;
    b.addEventListener("click", (e) => { selectIcon(b); if (coarse) restore(id); e.stopPropagation(); });
    b.addEventListener("dblclick", () => restore(id));
    b.addEventListener("keydown", (e) => { if (e.key === "Enter") restore(id); });
    rec.mini = b;
    holder.appendChild(b);
  }
  function restore(id) {
    const rec = wins.get(id);
    if (!rec) return;
    if (rec.min) { rec.min = false; rec.el.hidden = false; rec.mini.remove(); rec.mini = null; }
    else if (rec.max) maximize(id);
    focus(id);
  }
  function maximize(id) {
    const rec = wins.get(id);
    const s = rec.el.style;
    if (rec.max) { Object.assign(s, rec.saved); rec.max = false; }
    else { rec.saved = { left: s.left, top: s.top, width: s.width, height: s.height }; Object.assign(s, { left: "-4px", top: "-4px", width: "calc(100% + 8px)", height: "calc(100% + 8px)" }); rec.max = true; }
    const mx = rec.el.querySelector(".mx");
    if (mx) mx.classList.toggle("rs", rec.max);
  }

  /* Переміщення та зміна розміру сірим контуром, як у Windows 3.x */
  function rubber(rec, e, mode) {
    if (narrow() || e.button !== 0 || rec.max) return;
    e.preventDefault();
    focus(rec.id);
    const host = container(rec);
    const H = host.getBoundingClientRect();
    const r = rec.el.getBoundingClientRect();
    const box = { left: r.left - H.left, top: r.top - H.top, width: r.width, height: r.height };
    const o = document.createElement("div");
    o.className = "outline";
    const draw = (b) => Object.assign(o.style, { left: b.left + "px", top: b.top + "px", width: b.width + "px", height: b.height + "px" });
    draw(box);
    host.appendChild(o);
    const sx = e.clientX, sy = e.clientY;
    let next = box;
    const tgt = e.currentTarget;
    tgt.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (mode === "move") next = { ...box, left: box.left + dx, top: box.top + dy };
      else {
        next = { ...box };
        if (mode.includes("e")) next.width = Math.max(160, box.width + dx);
        if (mode.includes("s")) next.height = Math.max(80, box.height + dy);
        if (mode.includes("w")) { next.width = Math.max(160, box.width - dx); next.left = box.left + box.width - next.width; }
        if (mode.includes("n")) { next.height = Math.max(80, box.height - dy); next.top = box.top + box.height - next.height; }
      }
      draw(next);
    };
    const up = () => {
      tgt.removeEventListener("pointermove", move);
      tgt.removeEventListener("pointerup", up);
      tgt.removeEventListener("pointercancel", up);
      o.remove();
      Object.assign(rec.el.style, { left: next.left + "px", top: next.top + "px", width: next.width + "px", height: next.height + "px" });
    };
    tgt.addEventListener("pointermove", move);
    tgt.addEventListener("pointerup", up);
    tgt.addEventListener("pointercancel", up);
  }

  /* ---------- Меню ---------- */
  let menuEl = null, menuOwner = null;
  function popup(anchor, items, owner) {
    closeMenu();
    const m = document.createElement("div");
    m.className = "menu";
    m.setAttribute("role", "menu");
    m.innerHTML = items.map((it, k) => it.sep ? "<hr>" : `<button type="button" role="menuitem${it.checked !== undefined ? "radio" : ""}" data-k="${k}"${it.checked !== undefined ? ` aria-checked="${it.checked}"` : ""}${it.disabled ? " disabled" : ""}><span>${esc(it.label)}</span>${it.acc ? `<span class="acc">${esc(it.acc)}</span>` : ""}</button>`).join("");
    desk.appendChild(m);
    const a = anchor.getBoundingClientRect();
    const D = desk.getBoundingClientRect();
    const mr = m.getBoundingClientRect();
    m.style.left = Math.max(0, Math.min(a.left - D.left, D.width - mr.width - 4)) + "px";
    m.style.top = Math.max(0, Math.min(a.bottom - D.top, D.height - mr.height - 4)) + "px";
    m.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-k]");
      if (!b || b.disabled) return;
      const it = items[Number(b.dataset.k)];
      closeMenu();
      it.act();
    });
    m.addEventListener("keydown", (e) => {
      const bs = [...m.querySelectorAll("button:not(:disabled)")];
      const k = bs.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); bs[(k + 1) % bs.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); bs[(k - 1 + bs.length) % bs.length].focus(); }
    });
    menuEl = m;
    menuOwner = owner || null;
    if (menuOwner) menuOwner.setAttribute("aria-expanded", "true");
    const f = m.querySelector("button:not(:disabled)");
    if (f) f.focus({ preventScroll: true });
  }
  function closeMenu() {
    if (menuEl) menuEl.remove();
    if (menuOwner) menuOwner.setAttribute("aria-expanded", "false");
    menuEl = null;
    menuOwner = null;
  }
  document.addEventListener("pointerdown", (e) => { if (menuEl && !e.target.closest(".menu") && !e.target.closest(".mb")) closeMenu(); }, true);

  function renderMenubar(rec) {
    const mb = rec.el.querySelector(".mb");
    const menus = rec.def.menus();
    mb.innerHTML = menus.map((m, i) => `<button type="button" aria-haspopup="true" aria-expanded="false" data-i="${i}"><span class="u">${esc(m.label[0])}</span>${esc(m.label.slice(1))}</button>`).join("");
    mb.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        if (menuOwner === b) return closeMenu();
        popup(b, rec.def.menus()[Number(b.dataset.i)].items, b);
      });
      b.addEventListener("pointerenter", () => { if (menuOwner && menuOwner !== b && menuOwner.parentElement === mb) popup(b, rec.def.menus()[Number(b.dataset.i)].items, b); });
    });
  }

  function sysMenu(rec, anchor) {
    const s = w().sys;
    popup(anchor, [
      { label: s[0], act: () => restore(rec.id), disabled: !rec.max && !rec.min },
      { label: s[1], disabled: true },
      { label: s[2], disabled: true },
      { label: s[3], act: () => minimize(rec.id), disabled: !!rec.def.dialog },
      { label: s[4], act: () => maximize(rec.id), disabled: rec.max || !!rec.def.dialog },
      { sep: true },
      { label: s[5], acc: rec.parent ? "Ctrl+F4" : "Alt+F4", act: () => close(rec.id) },
      ...(rec.parent ? [] : [{ sep: true }, { label: s[6], acc: "Ctrl+Esc", act: taskList }])
    ]);
  }

  /* ---------- Іконки ---------- */
  function iconBtn(label, icon, act) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ico";
    b.innerHTML = `${ICON[icon]}<span>${esc(label)}</span>`;
    b.addEventListener("click", () => { selectIcon(b); if (coarse) act(); });
    b.addEventListener("dblclick", act);
    b.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); act(); } });
    return b;
  }
  function selectIcon(b) { document.querySelectorAll(".ico.sel").forEach((x) => x.classList.remove("sel")); if (b) b.classList.add("sel"); }

  /* Запуск застосунку: пісочний годинник, і за потреби згорнути Диспетчер */
  function launch(fn) {
    desk.classList.add("busy");
    setTimeout(() => {
      desk.classList.remove("busy");
      fn();
      if (minOnUse && wins.has("pm")) minimize("pm");
    }, reduced ? 0 : 280);
  }

  /* ---------- Диспетчер програм ---------- */
  const GROUPS = {
    aic: () => [
      [w().icons.readme, "write", () => launch(openWrite)],
      [w().icons.services, "cardfile", () => launch(() => openCardfile())],
      [w().icons.partners, "notepad", () => launch(openNotepad)],
      [w().icons.contact, "mail", () => launch(() => openMail())],
      [hx().icon, "question", () => launch(() => openHelp())]
    ],
    main: () => [
      [w().cpl, "cpl", () => launch(openCpl)],
      [w().clock, "clock", () => launch(openClock)],
      [w().dos, "dos", () => { location.href = "/dos/"; }],
      [w().tasks, "progman", taskList]
    ],
    ver: () => VERSIONS.map(([n, u, ic]) => [n, ic, () => { location.href = u; }])
  };

  function openProgman() {
    createWin("pm", {
      title: () => w().progman, icon: "progman", size: [640, 480], pos: [12, 12],
      noClose: exitWindows,
      menus: () => {
        const p = w().pm;
        return [
          { label: w().pmMenus[0], items: [{ label: p.open, acc: "Enter", act: () => { const s = document.querySelector(".mdi .ico.sel"); if (s) s.dispatchEvent(new MouseEvent("dblclick", { bubbles: true })); } }, { sep: true }, { label: p.exit, act: exitWindows }] },
          { label: w().pmMenus[1], items: [{ label: p.minOnUse, checked: minOnUse, act: () => { minOnUse = !minOnUse; } }] },
          { label: w().pmMenus[2], items: [
            { label: p.cascade, acc: "Shift+F5", act: cascade },
            { label: p.tile, acc: "Shift+F4", act: tile },
            { sep: true },
            ...Object.keys(GROUPS).map((g, i) => ({ label: `${i + 1} ${w().groups[g]}`, act: () => openGroup(g) }))
          ] },
          { label: w().pmMenus[3], items: [{ label: hx().index, acc: "F1", act: () => openHelp() }, { sep: true }, { label: p.about, act: about }] }
        ];
      },
      render: (b, rec) => {
        if (rec.mdi) return;
        rec.mdi = document.createElement("div");
        rec.mdi.className = "mdi";
        rec.minis = document.createElement("div");
        rec.minis.className = "minis";
        rec.mdi.appendChild(rec.minis);
        b.appendChild(rec.mdi);
      }
    });
    openGroup("ver"); minimize("g-ver");
    openGroup("main"); minimize("g-main");
    openGroup("aic");
  }

  function openGroup(g) {
    return createWin("g-" + g, {
      parent: "pm", title: () => w().groups[g], icon: "group",
      size: [420, 220], pos: { aic: [8, 8], main: [40, 40], ver: [72, 72] }[g],
      render: (b) => {
        b.classList.add("scroll");
        b.style.overflow = "auto";
        const grid = document.createElement("div");
        grid.className = "grid";
        GROUPS[g]().forEach(([label, icon, act]) => grid.appendChild(iconBtn(label, icon, act)));
        b.replaceChildren(grid);
      }
    });
  }
  function groupWins() { return [...wins.values()].filter((r) => r.parent === "pm" && !r.min); }
  function cascade() { groupWins().forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: 8 + i * 24 + "px", top: 8 + i * 24 + "px", width: "420px", height: "220px" }); focus(r.id); }); }
  function tile() {
    const list = groupWins();
    const H = wins.get("pm").mdi.getBoundingClientRect();
    const usable = H.height - 70;
    list.forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: "0px", top: (i * usable) / list.length + "px", width: H.width + "px", height: usable / list.length + "px" }); });
  }

  /* ---------- Write ---------- */
  function openWrite() {
    createWin("write", {
      title: () => `${w().write} - README.WRI`, icon: "write", size: [600, 520], pos: [-16, 40],
      menus: () => [
        { label: w().file, items: [{ label: w().print, act: () => window.print() }, { sep: true }, { label: w().quit, act: () => close("write") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("write").body.innerText) }] },
        { label: w().help, items: [{ label: w().aboutApp(w().write), act: about }] }
      ],
      render: (b) => {
        const s = t();
        b.innerHTML = `<div class="write scroll" style="overflow:auto">
          <img class="doclogo" src="${esc(AIC.logo)}" alt="ArtIntelliCo">
          <h1>${esc(s.heroTitle)}</h1>
          <p>${esc(s.heroText)}</p>
          <p><b>${esc(s.heroLead)}:</b></p>
          <ul>${s.phrases.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <p><i>${esc(w().oleHint)}</i></p>
          <div class="ole"></div>
          <small>${esc(s.copyright)}<br>${esc(s.legal)}<br>${esc(s.slogan)}<br>${esc(s.source)}: <a href="${siteUrl()}" target="_blank" rel="noopener">artintellico.com</a></small>
          <p class="end">¤</p>
        </div><div class="status">${esc(w().page(1))}</div>`;
        const ole = b.querySelector(".ole");
        ole.append(
          iconBtn(w().ole.services, "package", () => launch(() => openCardfile())),
          iconBtn(w().ole.partners, "package", () => launch(openNotepad)),
          iconBtn(w().ole.mail, "package", () => launch(() => openMail()))
        );
      }
    });
  }

  /* ---------- Картотека: послуги як картки ---------- */
  const cf = { front: 0, list: false };
  function openCardfile(at) {
    if (typeof at === "number") cf.front = at;
    const rec = createWin("cardfile", {
      title: () => `${w().cardfile} - ${w().ole.services}`, icon: "cardfile", size: [560, 400], pos: [200, 120],
      menus: () => [
        { label: w().file, items: [{ label: w().quit, act: () => close("cardfile") }] },
        { label: w().view, items: [{ label: w().cardsView, checked: !cf.list, act: () => { cf.list = false; rerender("cardfile"); } }, { label: w().listView, checked: cf.list, act: () => { cf.list = true; rerender("cardfile"); } }] },
        { label: w().card, items: [
          { label: w().prev, acc: "PgUp", act: () => stepCard(-1) },
          { label: w().next, acc: "PgDn", act: () => stepCard(1) },
          { sep: true },
          { label: hx().topicHelp, acc: "F1", act: () => openHelp(cf.front) },
          { label: w().writeAbout, act: () => openMail(svc()[cf.front].t) }
        ] },
        { label: w().help, items: [{ label: hx().index, act: () => openHelp() }, { sep: true }, { label: w().aboutApp(w().cardfile), act: about }] }
      ],
      render: (b) => renderCards(b),
      focused: () => {}
    });
    /* подвійний клік по послузі відкриває тему довідки; слухач на тілі вікна, бо вміст перемальовується */
    if (!rec.cfWired) {
      rec.cfWired = true;
      rec.body.addEventListener("dblclick", (e) => {
        if (e.target.closest("a, .cardbar")) return;
        const x = e.target.closest("[data-i]");
        if (x) openHelp(Number(x.dataset.i));
        else if (e.target.closest(".cbody")) openHelp(cf.front);
      });
    }
    rerender("cardfile");
    return rec;
  }
  function stepCard(d) { const n = svc().length; cf.front = (cf.front + d + n) % n; rerender("cardfile"); }
  function rerender(id) { const r = wins.get(id); if (r) r.render(); }
  function renderCards(b) {
    const s = svc();
    b.innerHTML = `<div class="cardbar"><span>${esc(cf.list ? w().listMode : w().cardMode)}</span><button type="button" data-d="-1" aria-label="${esc(w().prev)}">◄</button><button type="button" data-d="1" aria-label="${esc(w().next)}">►</button><span>${esc(w().cardCount(s.length))}</span></div>`;
    b.querySelectorAll("[data-d]").forEach((x) => x.addEventListener("click", () => stepCard(Number(x.dataset.d))));
    if (cf.list) {
      const ul = document.createElement("ul");
      ul.className = "clist scroll";
      ul.setAttribute("role", "listbox");
      ul.innerHTML = s.map(({ t: n }, i) => `<li><button type="button" role="option" aria-selected="${i === cf.front}" data-i="${i}">${esc(n)}</button></li>`).join("");
      ul.addEventListener("click", (e) => { const x = e.target.closest("[data-i]"); if (x) { cf.front = Number(x.dataset.i); rerender("cardfile"); } });
      b.appendChild(ul);
      return;
    }
    const area = document.createElement("div");
    area.className = "cards";
    const n = s.length;
    const order = Array.from({ length: n }, (_, k) => (cf.front + k) % n).reverse();
    order.forEach((i, k) => {
      const depth = n - 1 - k;
      const card = document.createElement("div");
      card.className = "card";
      Object.assign(card.style, { left: 10 + depth * 10 + "px", bottom: 10 + depth * 16 + "px" });
      const { t: name, lead } = s[i];
      card.innerHTML = `<button type="button" data-i="${i}">${esc(name)}</button>${depth === 0 ? `<div class="cbody"><p>${esc(plain(lead))}</p><p><a href="#" data-help="${i}">${esc(hx().more)}</a><br><a href="#" data-mail="${i}">${esc(w().writeAbout)}</a></p></div>` : ""}`;
      area.appendChild(card);
    });
    area.addEventListener("click", (e) => {
      const m = e.target.closest("[data-mail]");
      if (m) { e.preventDefault(); openMail(s[Number(m.dataset.mail)].t); return; }
      const h = e.target.closest("[data-help]");
      if (h) { e.preventDefault(); openHelp(Number(h.dataset.help)); return; }
      const x = e.target.closest("[data-i]");
      if (x) { cf.front = Number(x.dataset.i); rerender("cardfile"); sr(s[cf.front].t + ". " + plain(s[cf.front].lead)); }
    });
    b.appendChild(area);
  }

  /* ---------- Довідка WinHelp: послуги як теми ---------- */
  const hlp = { topic: -1, hist: [] };
  function openHelp(i) {
    if (!wins.has("help")) { hlp.topic = -1; hlp.hist = []; }
    const rec = createWin("help", {
      title: () => `${hx().title} - ${hx().file}`, icon: "question", size: [520, 460], pos: [-24, 24],
      menus: () => [
        { label: w().file, items: [{ label: w().print, act: () => window.print() }, { sep: true }, { label: w().quit, act: () => close("help") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("help").body.querySelector(".htext").innerText) }] },
        { label: w().help, items: [{ label: hx().contents, act: () => helpGo(-1) }, { sep: true }, { label: w().aboutApp(hx().title), act: about }] }
      ],
      render: (b, rec) => renderHelp(b, rec)
    });
    helpGo(typeof i === "number" ? i : -1);
    return rec;
  }
  function helpGo(i, fromBack) {
    if (!fromBack && i !== hlp.topic) hlp.hist.push(hlp.topic);
    hlp.topic = i;
    rerender("help");
    const r = wins.get("help");
    if (r) {
      const tx = r.body.querySelector(".htext");
      if (tx && !coarse) tx.focus({ preventScroll: true });
      sr(i < 0 ? hx().head : svc()[i].t);
    }
  }
  function helpBack() { if (hlp.hist.length) helpGo(hlp.hist.pop(), true); }
  function renderHelp(b, rec) {
    closeGloss();
    const H = hx();
    const s = svc();
    const k = hlp.topic;
    const jump = (i) => `<button type="button" class="hjump" data-go="${i}">${esc(s[i].t)}</button>`;
    let title, html;
    if (k < 0) {
      title = H.head;
      html = `<p>${rich(SVC[lang].intro)}</p><p>${esc(H.pick)}</p><ul class="hlist">${s.map((_, i) => `<li>${jump(i)}</li>`).join("")}</ul>`;
    } else {
      const x = s[k];
      title = x.t;
      html = `<p>${rich(x.lead)}</p><p>${rich(x.body)}</p>${x.note ? `<p class="hnote"><b>${esc(H.note)}</b> ${rich(x.note)}</p>` : ""}
        <h3>${esc(H.inc)}</h3><ul>${x.inc.map((v) => `<li>${rich(v)}</li>`).join("")}</ul>
        <h3>${esc(H.res)}</h3><p>${rich(x.res)}</p>
        <div class="hsee"><b>${esc(H.see)}</b><ul class="hlist">${SEE[k].map((j) => `<li>${jump(j)}</li>`).join("")}<li><button type="button" class="hjump" data-mail>${esc(w().writeAbout)}</button></li></ul></div>`;
    }
    b.innerHTML = `<div class="hbar face"><button type="button" class="btn" data-h="toc">${esc(H.contents)}</button><button type="button" class="btn" data-h="back"${hlp.hist.length ? "" : " disabled"}>${esc(H.back)}</button><button type="button" class="btn" data-h="prev" aria-label="${esc(H.prevT)}">&lt;&lt;</button><button type="button" class="btn" data-h="next" aria-label="${esc(H.nextT)}">&gt;&gt;</button></div>
      <h3 class="htitle">${esc(title)}</h3><div class="htext scroll" tabindex="-1">${html}</div>`;
    b.querySelector(".htext").addEventListener("scroll", closeGloss, { passive: true });
    if (rec.hWired) return;
    rec.hWired = true;
    b.addEventListener("click", (e) => {
      const c = e.target.closest("[data-h], [data-go], [data-mail], .hpop");
      if (!c || c.disabled) return;
      if (c.classList.contains("hpop")) return toggleGloss(c);
      if (c.dataset.go !== undefined) return helpGo(Number(c.dataset.go));
      if (c.dataset.mail !== undefined) return openMail(hlp.topic < 0 ? undefined : svc()[hlp.topic].t);
      const n = svc().length, cur = hlp.topic;
      ({ toc: () => helpGo(-1), back: helpBack, prev: () => helpGo(cur <= 0 ? n - 1 : cur - 1), next: () => helpGo(cur >= n - 1 ? 0 : cur + 1) })[c.dataset.h]();
    });
  }

  /* Спливне вікно з визначенням терміна */
  let glossEl = null, glossBtn = null;
  function closeGloss() {
    if (glossEl) glossEl.remove();
    if (glossBtn) glossBtn.setAttribute("aria-expanded", "false");
    glossEl = glossBtn = null;
  }
  function toggleGloss(btn) {
    if (glossBtn === btn) return closeGloss();
    closeGloss();
    const def = GLOSS[lang][btn.dataset.g];
    if (!def) return;
    const p = document.createElement("div");
    p.className = "hpopup";
    p.setAttribute("role", "dialog");
    p.setAttribute("aria-label", btn.textContent);
    p.innerHTML = `<p>${esc(def)}</p>`;
    p.addEventListener("click", closeGloss);
    desk.appendChild(p);
    const a = btn.getBoundingClientRect(), D = desk.getBoundingClientRect(), r = p.getBoundingClientRect();
    const below = a.bottom - D.top + 4;
    p.style.left = Math.max(4, Math.min(a.left - D.left, D.width - r.width - 8)) + "px";
    p.style.top = (below + r.height > D.height - 4 ? Math.max(4, a.top - D.top - r.height - 4) : below) + "px";
    btn.setAttribute("aria-expanded", "true");
    glossEl = p;
    glossBtn = btn;
    sr(def);
  }
  document.addEventListener("pointerdown", (e) => { if (glossEl && !e.target.closest(".hpopup, .hpop")) closeGloss(); }, true);

  /* ---------- Блокнот ---------- */
  function openNotepad() {
    createWin("notepad", {
      title: () => `${w().notepad} - ${w().ole.partners}`, icon: "notepad", size: [380, 320], pos: [90, 180],
      menus: () => [
        { label: w().file, items: [{ label: w().quit, act: () => close("notepad") }] },
        { label: w().edit, items: [{ label: w().copyAll, act: () => copy(wins.get("notepad").body.querySelector("textarea").value) }] },
        { label: w().help, items: [{ label: w().aboutApp(w().notepad), act: about }] }
      ],
      render: (b) => {
        b.innerHTML = `<textarea class="notepad scroll" readonly spellcheck="false" aria-label="${esc(t().partnersTitle)}"></textarea>`;
        b.querySelector("textarea").value = [t().partnersTitle, "=".repeat(t().partnersTitle.length), "", ...PARTNERS.map((p) => `  * ${p}`), "", "https://unio24.com/"].join("\r\n");
      }
    });
  }

  /* ---------- Пошта ---------- */
  function openMail(subject) {
    const exists = wins.get("mail");
    const rec = createWin("mail", {
      title: () => `${w().mail} - ${t().contactTitle}`, icon: "mail", size: [520, 420], pos: ["c", 70], state: { subject: subject || w().defaultSubject, body: "" },
      menus: () => [
        { label: w().file, items: [{ label: w().send, act: sendMail }, { sep: true }, { label: w().quit, act: () => close("mail") }] },
        { label: w().help, items: [{ label: w().aboutApp(w().mail), act: about }] }
      ],
      render: (b, rec) => {
        const st = rec.def.state;
        b.innerHTML = `<form class="mail face">
          <div class="tool"><button class="btn def">${esc(w().send)}</button><button type="button" class="btn" disabled>${esc(w().checkNames)}</button><button type="button" class="btn" disabled>${esc(w().attach)}</button><button type="button" class="btn" disabled>${esc(w().optionsBtn)}</button><button type="button" class="btn" disabled>${esc(w().address)}</button></div>
          <div class="field"><label for="mTo">${esc(w().to)}</label><input id="mTo" class="sunk" value="${EMAIL}" readonly><label for="mSubj">${esc(w().subject)}</label><input id="mSubj" class="sunk" name="subject"></div>
          <p style="font:var(--ui-r)">${esc(t().contactText)}</p>
          <textarea class="sunk scroll" name="body" aria-label="${esc(t().contactTitle)}"></textarea>
          <p style="font:var(--ui-r)">${esc(w().sendNote)}</p>
        </form>`;
        const f = b.querySelector("form");
        f.subject.value = st.subject;
        f.body.value = st.body;
        f.addEventListener("input", () => { st.subject = f.subject.value; st.body = f.body.value; });
        f.addEventListener("submit", (e) => { e.preventDefault(); sendMail(); });
      }
    });
    if (exists && subject) { rec.def.state.subject = subject; rec.render(); }
    setTimeout(() => { const ta = rec.body.querySelector("textarea"); if (ta && !coarse) ta.focus(); }, 0);
  }
  function sendMail() {
    const st = wins.get("mail").def.state;
    location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(st.subject)}&body=${encodeURIComponent(st.body)}`);
  }

  /* ---------- Панель керування ---------- */
  function openCpl() {
    createWin("cpl", {
      title: () => w().cpl, icon: "cpl", size: [360, 200], pos: [140, 90],
      menus: () => [
        { label: w().options, items: [...w().cplItems.map((l, i) => ({ label: l, act: [colorDlg, deskDlg, intlDlg][i] })), { sep: true }, { label: w().quit, act: () => close("cpl") }] },
        { label: w().help, items: [{ label: w().aboutApp(w().cpl), act: about }] }
      ],
      render: (b) => {
        const g = document.createElement("div");
        g.className = "cpl";
        [["color", colorDlg], ["deskicon", deskDlg], ["intl", intlDlg]].forEach(([ic, fn], i) => g.appendChild(iconBtn(w().cplItems[i], ic, fn)));
        b.replaceChildren(g);
      }
    });
  }

  function dialog(id, title, html, buttons, size, onMount) {
    if (wins.has(id)) close(id);
    const rec = createWin(id, {
      dialog: true, title: () => title, size, pos: ["c", "c"],
      render: (b, rec) => {
        b.innerHTML = `<div class="dlgbody">${html}<div class="btns">${buttons.map((x, i) => `<button type="button" class="btn${i === 0 ? " def" : ""}" data-b="${i}">${esc(x.label)}</button>`).join("")}</div></div>`;
        b.querySelectorAll("[data-b]").forEach((x) => x.addEventListener("click", () => { const btn = buttons[Number(x.dataset.b)]; if (btn.act) btn.act(rec); close(id); }));
        if (onMount) onMount(b, rec);
        setTimeout(() => { const f = b.querySelector("select, input, .btn.def"); if (f && !coarse) f.focus(); }, 0);
      }
    });
    rec.el.addEventListener("keydown", (e) => { if (e.key === "Escape") close(id); });
    return rec;
  }

  function colorDlg() {
    const opts = Object.keys(SCHEMES).map((k) => `<option value="${k}"${k === scheme ? " selected" : ""}>${esc(w().schemeNames[k])}</option>`).join("");
    const before = scheme;
    const s = w().sample;
    dialog("dlg-color", w().color, `
      <label>${esc(w().schemes)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>
      <div class="preview" aria-hidden="true"><div class="pw"><div class="pt">${esc(s.active)}</div><div class="pm">${esc(s.menu)}</div><div class="pb">${esc(s.text)}</div></div></div>`,
      [{ label: w().ok }, { label: w().cancel, act: () => setScheme(before) }], [340, 300],
      (b) => b.querySelector("select").addEventListener("change", (e) => setScheme(e.target.value)));
  }
  function deskDlg() {
    const opts = Object.keys(WALLS).map((k) => `<option value="${k}"${k === wall ? " selected" : ""}>${k === "none" ? esc(w().none) : k.toUpperCase() + ".BMP"}</option>`).join("");
    const before = wall;
    dialog("dlg-desk", w().desktopDlg, `<label>${esc(w().wallpaper)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>`,
      [{ label: w().ok }, { label: w().cancel, act: () => setWall(before) }], [320, 170],
      (b) => b.querySelector("select").addEventListener("change", (e) => setWall(e.target.value)));
  }
  function intlDlg() {
    const opts = LANGS.map((l) => `<option value="${l}"${l === lang ? " selected" : ""}>${LANG_NAMES[l]}</option>`).join("");
    let pick = lang;
    dialog("dlg-intl", w().intl, `<label>${esc(w().language)}<br><select class="sunk" style="width:100%;margin-top:4px">${opts}</select></label>`,
      [{ label: w().ok, act: () => setLang(pick) }, { label: w().cancel }], [320, 170],
      (b) => b.querySelector("select").addEventListener("change", (e) => { pick = e.target.value; }));
  }

  /* ---------- Годинник ---------- */
  let clockDigital = false;
  function openClock() {
    createWin("clock", {
      title: () => `${w().clock} - ${new Date().toLocaleDateString(lang)}`, icon: "clock", size: [220, 240], pos: [-30, 30],
      menus: () => [{ label: w().options, items: [{ label: w().analog, checked: !clockDigital, act: () => { clockDigital = false; rerender("clock"); } }, { label: w().digital, checked: clockDigital, act: () => { clockDigital = true; rerender("clock"); } }] }],
      render: (b) => { b.innerHTML = `<div class="clockface"></div>`; tickClock(); }
    });
  }
  function tickClock() {
    const rec = wins.get("clock");
    if (!rec) return;
    const face = rec.body.querySelector(".clockface");
    const d = new Date();
    if (clockDigital) { face.innerHTML = `<div class="digital">${d.toLocaleTimeString(lang)}</div>`; return; }
    const dots = Array.from({ length: 60 }, (_, i) => {
      const a = (i * 6 * Math.PI) / 180;
      const big = i % 5 === 0;
      const r = big ? 3 : 1.2;
      return `<rect x="${Math.sin(a) * 44 - r}" y="${-Math.cos(a) * 44 - r}" width="${r * 2}" height="${r * 2}" fill="${big ? "#008080" : "#000"}"/>`;
    }).join("");
    const hand = (deg, len, wdt, color) => `<polygon points="0,${-len} ${wdt},0 0,${wdt * 1.5} ${-wdt},0" transform="rotate(${deg})" fill="${color}" stroke="#000" stroke-width=".6"/>`;
    const h = d.getHours() % 12, m = d.getMinutes(), s = d.getSeconds();
    face.innerHTML = `<svg viewBox="-50 -50 100 100" aria-label="${d.toLocaleTimeString(lang)}">${dots}${hand(h * 30 + m / 2, 24, 4.5, "#008080")}${hand(m * 6, 36, 3.5, "#008080")}<line x1="0" y1="6" x2="0" y2="-40" transform="rotate(${s * 6})" stroke="#000" stroke-width="1"/></svg>`;
  }
  setInterval(tickClock, 1000);

  /* ---------- Системні вікна ---------- */
  function about() {
    dialog("dlg-about", w().pm.about.replace("…", ""), `<div class="row">${ICON.progman}<div>${w().aboutLines.map((l) => (l ? `<div>${esc(l)}</div>` : "<br>")).join("")}</div></div>`, [{ label: w().ok }], [360, 250]);
  }
  function taskList() {
    closeMenu();
    const tops = () => [...wins.values()].filter((r) => !r.parent && !r.def.dialog);
    let sel = 0;
    dialog("dlg-tasks", w().tasks, `<ul class="tasks sunk" role="listbox"></ul>`, [
      { label: w().switchTo, act: () => { const r = tops()[sel]; if (r) restore(r.id); } },
      { label: w().endTask, act: () => { const r = tops()[sel]; if (r) close(r.id); } },
      { label: w().cancel },
      { label: w().pm.cascade, act: () => tops().forEach((r, i) => { if (r.min) restore(r.id); if (r.max) maximize(r.id); Object.assign(r.el.style, { left: 12 + i * 26 + "px", top: 12 + i * 26 + "px" }); focus(r.id); }) },
      { label: w().pm.tile, act: () => { const l = tops().filter((r) => !r.min); const D = desk.getBoundingClientRect(); l.forEach((r, i) => { if (r.max) maximize(r.id); Object.assign(r.el.style, { left: (i * D.width) / l.length + "px", top: "0px", width: D.width / l.length + "px", height: D.height - 70 + "px" }); }); } }
    ], [380, 260], (b) => {
      const ul = b.querySelector(".tasks");
      const draw = () => { ul.innerHTML = tops().map((r, i) => `<li><button type="button" role="option" aria-selected="${i === sel}" data-i="${i}">${esc(r.def.title())}</button></li>`).join(""); };
      draw();
      ul.addEventListener("click", (e) => { const x = e.target.closest("[data-i]"); if (x) { sel = Number(x.dataset.i); draw(); } });
      ul.addEventListener("dblclick", (e) => { const x = e.target.closest("[data-i]"); if (x) { const r = tops()[Number(x.dataset.i)]; close("dlg-tasks"); if (r) restore(r.id); } });
    });
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); sr(w().copied); } catch { /* буфер обміну недоступний */ }
  }

  /* ---------- Схема, шпалери, мова ---------- */
  function setScheme(k) {
    scheme = k;
    store.set("aic-w31-scheme", k);
    Object.entries(SCHEMES[k]).forEach(([n, v]) => document.documentElement.style.setProperty("--" + n, v));
  }
  function setWall(k) {
    wall = k;
    store.set("aic-w31-wall", k);
    document.documentElement.style.setProperty("--wall", WALLS[k]);
    desk.style.backgroundSize = WALL_SIZE[k];
    desk.style.backgroundPosition = WALL_POS[k];
  }
  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    wins.forEach((r) => { if (!r.def.dialog) { r.render(); if (r.mini) r.mini.querySelector("span").textContent = r.def.title(); } });
  }

  /* ---------- Вихід у DOS і запуск ---------- */
  function exitWindows() {
    dialog("dlg-exit", w().progman, `<div class="row">${ICON.info}<p>${esc(w().exitText)}</p></div>`, [{ label: w().ok, act: toDos }, { label: w().cancel }], [380, 160]);
  }
  function toDos() {
    setTimeout(() => {
      desk.hidden = true;
      [...wins.keys()].forEach((id) => { const r = wins.get(id); if (r) { r.el.remove(); if (r.mini) r.mini.remove(); } });
      wins.clear();
      $("deskMinis").replaceChildren();
      showDosPrompt(w().exitDos);
    }, 0);
  }

  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((res) => { if (skipping || reduced) return res(); const id = setTimeout(res, ms); waiters.push(() => { clearTimeout(id); res(); }); });
  const skip = () => { skipping = true; waiters.splice(0).forEach((f) => f()); };

  function showDosPrompt(hint) {
    const dos = $("dos");
    dos.hidden = false;
    $("dosSkip").textContent = "";
    let typed = "";
    const out = $("dosOut");
    const base = (hint ? hint + "\n\n" : "") + "C:\\>";
    const paint = () => { out.textContent = base + typed + "_"; };
    paint();
    const onKey = (e) => {
      if (e.key === "Enter") {
        const c = typed.trim().toLowerCase();
        typed = "";
        if (c === "win") { cleanup(); boot(false); return; }
        const v = VERSIONS.find((x) => x[2] === c);
        if (v) { location.href = v[1]; return; }
        out.textContent = base + c + "\n" + w().bad + "\n\nC:\\>_";
        return;
      }
      if (e.key === "Backspace") typed = typed.slice(0, -1);
      else if (e.key.length === 1) typed += e.key;
      paint();
    };
    const tap = () => { if (coarse) { cleanup(); boot(false); } };
    function cleanup() { document.removeEventListener("keydown", onKey); dos.removeEventListener("click", tap); }
    document.addEventListener("keydown", onKey);
    dos.addEventListener("click", tap);
  }

  async function boot(full) {
    skipping = false;
    const dos = $("dos");
    const out = $("dosOut");
    const onSkip = () => skip();
    addEventListener("keydown", onSkip);
    addEventListener("pointerdown", onSkip);
    if (full) {
      dos.hidden = false;
      $("dosSkip").textContent = w().skip;
      out.textContent = "";
      const put = (s) => { out.textContent += s; };
      put("Starting DOS...\n\n");
      await sleep(400);
      put("HIMEM is testing extended memory...done.\n\n");
      await sleep(300);
      put("C:\\>");
      await sleep(400);
      for (const ch of "win") { put(ch); await sleep(120); }
      put("\n");
      await sleep(300);
    }
    dos.hidden = true;
    $("splashVer").textContent = w().version;
    $("splash").hidden = false;
    await sleep(1400);
    $("splash").hidden = true;
    desk.hidden = false;
    desk.classList.add("busy");
    await sleep(500);
    desk.classList.remove("busy");
    removeEventListener("keydown", onSkip);
    removeEventListener("pointerdown", onSkip);
    store.set("aic-w31-booted", "1", sessionStorage);
    openProgman();
    if (!narrow()) openWrite();
    skipping = false;
  }

  /* ---------- Глобальні клавіші ---------- */
  document.addEventListener("keydown", (e) => {
    if (desk.hidden) return;
    if (e.key === "Escape" && glossEl) { const g = glossBtn; closeGloss(); if (g) g.focus(); return; }
    if (e.key === "F1") { e.preventDefault(); const c = wins.get("cardfile"); openHelp(c && c.el.classList.contains("active") ? cf.front : undefined); return; }
    if (e.altKey && e.key === "F4") closeGloss();
    if (e.key === "Escape" && menuEl) { const o = menuOwner; closeMenu(); if (o) o.focus(); return; }
    if (e.ctrlKey && e.key === "Escape") { e.preventDefault(); taskList(); return; }
    if (e.altKey && e.key === "F4") { e.preventDefault(); const r = activeTop(); if (r) close(r.id); return; }
    if (e.ctrlKey && e.key === "F4") { e.preventDefault(); const g = groupWins().find((r) => r.el.classList.contains("active")); if (g) close(g.id); return; }
    const card = wins.get("cardfile");
    if (card && card.el.classList.contains("active") && (e.key === "PageDown" || e.key === "PageUp")) { e.preventDefault(); stepCard(e.key === "PageDown" ? 1 : -1); }
  });
  desk.addEventListener("dblclick", (e) => { if (e.target === desk) taskList(); });
  desk.addEventListener("click", (e) => { if (e.target === desk || e.target.classList.contains("mdi")) selectIcon(null); });

  setScheme(scheme);
  setWall(wall);
  document.documentElement.lang = lang;
  document.fonts.load('16px "TCon16"').finally(() => {
    boot(!(reduced || store.get("aic-w31-booted", sessionStorage)));
  });
})();
