(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";
  const HOME = "/usr/guest";

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
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Рядки, потрібні лише терміналу UNIX */
  const UX = {
    uk: {
      motd: ["Ласкаво просимо до ArtIntelliCo. Підказка: ", "help", "."],
      discuss: ["Обговорити задачу: ", "mail"],
      phosphors: { white: "білий", green: "зелений", amber: "бурштин" },
      phosphorSet: "Люмінофор: ",
      langSet: "LANG=uk_UA.KOI8-U",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      man: {
        header: "Довідник користувача",
        name: ["НАЗВА", "intro — як читати цей сайт"],
        desc: ["ОПИС", "Сайт — це домашній каталог /usr/guest. Почніть з:"],
        steps: [
          ["ls", "що тут є"],
          ["cat README", "про компанію"],
          ["cd services; ls", "послуги"],
          ["man concept", "послуга як сторінка довідника"],
          ["cat partners", "наші партнери"],
          ["mail", "лист від нас: як зв'язатися"],
          ["finger aic", "хто ми"]
        ],
        cmds: ["КОМАНДИ", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang uk|en|ru", "мова"],
          ["phosphor white|green|amber", "колір люмінофора"],
          ["dos", "DOS-версія сайту"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "вийти"]
        ],
        keys: ["КЛАВІШІ", "↑↓ історія, Tab доповнення, Ctrl+C скасувати, Ctrl+L очистити екран"]
      }
    },
    en: {
      motd: ["Welcome to ArtIntelliCo. Need a hint? Type ", "help", "."],
      discuss: ["Discuss your project: ", "mail"],
      phosphors: { white: "white", green: "green", amber: "amber" },
      phosphorSet: "Phosphor: ",
      langSet: "LANG=en_US.ASCII",
      skip: "Press any key to skip",
      man: {
        header: "UNIX Programmer's Manual",
        name: ["NAME", "intro — how to read this site"],
        desc: ["DESCRIPTION", "The site is the home directory /usr/guest. Start with:"],
        steps: [
          ["ls", "what's here"],
          ["cat README", "about the company"],
          ["cd services; ls", "services"],
          ["man concept", "a service as a manual page"],
          ["cat partners", "our partners"],
          ["mail", "a letter from us: how to get in touch"],
          ["finger aic", "who we are"]
        ],
        cmds: ["COMMANDS", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang uk|en|ru", "language"],
          ["phosphor white|green|amber", "phosphor colour"],
          ["dos", "DOS version of the site"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "log out"]
        ],
        keys: ["KEYS", "↑↓ history, Tab completion, Ctrl+C cancel, Ctrl+L clear screen"]
      }
    },
    ru: {
      motd: ["Добро пожаловать в ArtIntelliCo. Подсказка: ", "help", "."],
      discuss: ["Обсудить задачу: ", "mail"],
      phosphors: { white: "белый", green: "зелёный", amber: "янтарь" },
      phosphorSet: "Люминофор: ",
      langSet: "LANG=ru_RU.KOI8-R",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      man: {
        header: "Руководство пользователя",
        name: ["ИМЯ", "intro — как читать этот сайт"],
        desc: ["ОПИСАНИЕ", "Сайт — это домашний каталог /usr/guest. Начните с:"],
        steps: [
          ["ls", "что здесь есть"],
          ["cat README", "о компании"],
          ["cd services; ls", "услуги"],
          ["man concept", "услуга как страница руководства"],
          ["cat partners", "наши партнёры"],
          ["mail", "письмо от нас: как связаться"],
          ["finger aic", "кто мы"]
        ],
        cmds: ["КОМАНДЫ", "ls [-la]  cd  pwd  cat  more  echo  clear  date  uname  who  whoami  finger  mail  history  man"],
        extra: [
          ["lang uk|en|ru", "язык"],
          ["phosphor white|green|amber", "цвет люминофора"],
          ["dos", "DOS-версия сайта"],
          ["nc", "Norton Commander"],
          ["apple", "Apple ]["],
          ["lisa", "Apple Lisa"],
          ["startx", "X11 + fvwm"],
          ["mc", "Midnight Commander"],
          ["win", "Windows 3.11"],
          ["ai", "AI"],
          ["logout", "выйти"]
        ],
        keys: ["КЛАВИШИ", "↑↓ история, Tab дополнение, Ctrl+C отменить, Ctrl+L очистить экран"]
      }
    }
  };

  /* Послуги як сторінки man у розділі 8. {x} — підкреслене ім'я */
  const SEE = {
    concept: ["saas", "web", "crm-erp"],
    saas: ["concept", "api", "cloud"],
    web: ["mobile", "api", "support"],
    mobile: ["web", "saas", "api"],
    ai: ["api", "crm-erp", "concept"],
    "crm-erp": ["concept", "api", "ai"],
    cloud: ["redhat", "support", "saas"],
    redhat: ["cloud", "support", "api"],
    api: ["crm-erp", "saas", "support"],
    support: ["redhat", "cloud", "api"]
  };
  const FLAGS = {
    concept: ["-i", "-b", "-c", "-s"],
    saas: ["-m", "-b", "-r", "-a", "-s"],
    web: ["-p", "-f", "-i", "-s", "-l"],
    mobile: ["-i", "-s", "-a", "-n", "-p"],
    ai: ["-a", "-c", "-d", "-k", "-f", "-p"],
    "crm-erp": ["-m", "-r", "-d", "-t", "-i"],
    cloud: ["-a", "-p", "-m", "-b", "-o"],
    redhat: ["-a", "-r", "-o", "-p", "-i", "-m"],
    api: ["-d", "-p", "-x", "-q", "-w"],
    support: ["-m", "-u", "-b", "-f", "-a"]
  };
  const MAN = {
    uk: {
      header: "Довідник послуг ArtIntelliCo",
      sec: { name: "НАЗВА", syn: "СИНТАКСИС", desc: "ОПИС", opts: "ПАРАМЕТРИ", ret: "ЗНАЧЕННЯ, ЩО ПОВЕРТАЄТЬСЯ", bugs: "ВАДИ", notes: "ПРИМІТКИ", see: "ДИВ. ТАКОЖ", list: "СТОРІНКИ" },
      intro: {
        name: "вступ до розділу 8: послуги ArtIntelliCo",
        desc: [
          "Кожна сторінка цього розділу описує одну послугу. Стек добираємо під задачу, а не задачу під стек.",
          "Іноді найкраща відповідь — готовий сервіс за підпискою. Тоді ми так і скажемо, і розробляти нічого не доведеться."
        ]
      },
      pages: {
        concept: {
          name: "концепція ІТ-рішення",
          desc: [
            "З'ясовуємо, що насправді має робити система, і записуємо це так, щоб зрозуміли і бізнес, і розробники.",
            "Починається все з розмов. Не лише з керівником, а й з бухгалтерією, складом, менеджерами, тобто з тими, хто щодня натискатиме кнопки. Причина проста: найдорожчу помилку в проєкті роблять ще до першого рядка коду, коли систему будують під задачу, яку ніхто толком не сформулював."
          ],
          opts: ["інтерв'ю з працівниками, розбір того, як процеси йдуть зараз", "бізнес-вимоги та сценарії роботи", "порівняння готових продуктів із розробкою на замовлення", "технічне завдання зі строками й бюджетом, оціненими за етапами"],
          ret: "Документ, за яким будь-яка команда, наша чи чужа, може оцінити роботу й почати її.",
          bugs: "Іноді за підсумком радимо нічого не розробляти, а взяти готовий продукт і доналаштувати його. Так і задумано."
        },
        saas: {
          name: "розробка SaaS-рішень",
          desc: [
            "Проєктуємо й складаємо SaaS-платформу: від першої версії для пілотних клієнтів до сервісу, де кожен клієнт має свій простір, тариф і особистий кабінет.",
            "Гроші в SaaS приносить не код. Їх приносить те, наскільки легко новий клієнт реєструється, платить і береться до роботи, жодного разу не подзвонивши в підтримку. Тому мультитенантність, білінг і права доступу закладаються з першого дня: переробляти їх, коли клієнти вже всередині, виходить у рази дорожче."
          ],
          opts: ["мультитенантна архітектура, дані клієнтів ізольовані одне від одного", "реєстрація, тарифи, підписки, онлайн-оплата", "особисті кабінети, ролі, права доступу", "інтеграції та відкрите API для ваших клієнтів", "масштабування, коли зростає навантаження"],
          ret: "Продукт, який продається за підпискою. Не проєкт, який щоразу впроваджують руками.",
          bugs: "Перша версія виходить раніше, ніж хотілося б. Навмисно: живі користувачі швидко показують, які функції були зайві."
        },
        web: {
          name: "веброзробка",
          desc: [
            "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання та внутрішні вебсервіси. Під задачу, без шаблону.",
            "Сайт для бізнесу міряють заявками й замовленнями, а як він виглядає в портфоліо — справа десята. Ще до старту домовляємося, що вважати результатом, і вмикаємо аналітику до запуску, а не через пів року. Технологію обирають під задачу: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе."
          ],
          opts: ["прототип і дизайн інтерфейсів", "frontend, backend, панель адміністрування", "інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидкість завантаження, аналітика", "запуск і супровід"],
          ret: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        mobile: {
          name: "мобільні застосунки",
          desc: [
            "Складаємо застосунки для iOS та Android разом із серверною частиною й панеллю адміністрування.",
            "Застосунок окуповується, коли до нього повертаються: повторне замовлення, статус доставки, бонуси. Нативно чи кросплатформно — вирішують бюджет і те, наскільки застосунку потрібні камера, геолокація та офлайн-режим."
          ],
          opts: ["застосунки для iOS та Android", "серверна частина та API", "адмінпанель: контент, замовлення, користувачі", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          ret: "Застосунок, що проходить модерацію магазинів. Керувати ним ваша команда може без розробників.",
          bugs: "Якщо клієнт заходить раз на рік, застосунок не потрібен: радимо зручний мобільний сайт, так дешевше. Кажемо про це до початку робіт."
        },
        ai: {
          name: "рішення зі штучним інтелектом",
          desc: [
            "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів та інших рішень на базі штучного інтелекту й машинного навчання. Агент сам проходить рутинні кроки процесу, а людина перевіряє результат.",
            "Мовні моделі справді корисні там, де працівники годинами розбирають листи, документи й звернення. Робота починається з пілота на ваших даних: цифри точності ви бачите до основної розробки, а не після неї."
          ],
          opts: ["ШІ-агенти: самі розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень, пошук у базі знань", "прогнози попиту, аналіз даних", "пілот з оцінкою якості на ваших даних"],
          ret: "Процес, який раніше виконували люди, тепер виконує система. Контроль лишається за людиною.",
          bugs: "До ШІ ми ставимося скептичніше за багатьох. Половину ідей «давайте додамо нейромережу» закриває звичайна автоматизація, і тоді ми так і кажемо."
        },
        "crm-erp": {
          name: "розробка CRM та ERP",
          desc: [
            "{crm-erp} будує CRM та ERP навколо ваших процесів. Навпаки не працює.",
            "Коробкова CRM справляється, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», власна виходить дешевшою.",
            "Дані переносяться зі старих систем і таблиць. Запуск іде по відділах, щоб робота не ставала ні на день."
          ],
          opts: ["модулі продажів, складу, виробництва, фінансів; ставляться лише потрібні", "ролі, права доступу, журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією, поштою"],
          ret: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижневих звітів з кожного відділу."
        },
        cloud: {
          name: "хмарні рішення",
          desc: [
            "Переносимо інфраструктуру до Amazon Web Services, повністю або частинами, і стежимо, щоб вона працювала й не дорожчала без причини.",
            "Переїзд починається з аудиту й розрахунку вартості. Переносять усе поетапно, і на кожному кроці є план відкату."
          ],
          opts: ["аудит поточної інфраструктури, розрахунок вартості", "архітектура в AWS, план міграції", "перенесення серверів, баз даних, файлів", "резервне копіювання та моніторинг", "оптимізація витрат після переїзду"],
          ret: "Інфраструктура переживає відмову сервера. Рахунок за хмару зрозумілий.",
          bugs: "Хмара не завжди дешевша за власний сервер. Вигода з'являється, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають підніматися за хвилини, а не за тиждень."
        },
        redhat: {
          name: "інфраструктура компанії на базі Red Hat",
          desc: [
            "Будуємо ІТ-інфраструктуру компанії на рішеннях Red Hat: сервери на Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
            "Red Hat беруть, коли інфраструктура має працювати роками й проходити аудит, а не триматися на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux підтримується десять років.",
            "Інфраструктуру проєктують під ваші навантаження, а конфігурацію серверів описують в Ansible. Будь-який сервер перезбирається за сценарієм, а не з пам'яті."
          ],
          opts: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux, централізовані оновлення через Red Hat Satellite", "контейнерна платформа OpenShift для ваших застосунків", "автоматизація налаштування й розгортання через Ansible", "єдине керування обліковими записами й доступом (Identity Management)", "моніторинг, резервне копіювання, документація для вашої команди"],
          ret: "Інфраструктура, яку можна перевірити, повторити й передати іншій команді, не втративши знань.",
          notes: "Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися."
        },
        api: {
          name: "API та інтеграції",
          desc: [
            "Проєктуємо API для ваших систем і поєднуємо їх із сервісами, якими ви вже користуєтеся.",
            "Найчастіше трапляється одне й те саме: дані вводять двічі. Замовлення із сайту передруковують в облікову систему вручну, оплати звіряють у таблиці. Інтеграція прибирає і цю роботу, і помилки, які вона плодить."
          ],
          opts: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM, обліком", "обмін даними між внутрішніми системами", "черги й повторні спроби при збоях", "моніторинг і сповіщення"],
          ret: "Дані вводяться один раз і самі доходять туди, де потрібні.",
          bugs: "Інтеграції ламаються тихо, коли партнер змінює свій API. Тому -w увімкнено завжди: про поломку має повідомити система, а не клієнт."
        },
        support: {
          name: "технічна підтримка",
          desc: [
            "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, зокрема ті, що писали не ми.",
            "Виправлення помилок — лише частина роботи. Є ще оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і невеликі доопрацювання по ходу."
          ],
          opts: ["моніторинг доступності та помилок", "виправлення помилок, оновлення безпеки", "резервне копіювання й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація систем від інших підрядників"],
          ret: "Система працює, і є команда, яка знає, як вона влаштована.",
          bugs: "Чужу систему без документації не правлять: будь-яка правка стає лотереєю. Тому в такому разі спершу робимо аудит (support -a)."
        }
      }
    },
    en: {
      header: "ArtIntelliCo Services Manual",
      sec: { name: "NAME", syn: "SYNOPSIS", desc: "DESCRIPTION", opts: "OPTIONS", ret: "RETURN VALUES", bugs: "BUGS", notes: "NOTES", see: "SEE ALSO", list: "PAGES" },
      intro: {
        name: "introduction to section 8: ArtIntelliCo services",
        desc: [
          "Each page in this section describes one service. We pick the stack to fit the task, not the task to fit the stack.",
          "Sometimes the best answer is an off-the-shelf subscription service. Then we'll say so, and nothing needs to be built."
        ]
      },
      pages: {
        concept: {
          name: "IT solution concept",
          desc: [
            "We work out what the system actually has to do and write it down so that both the business and the developers can read it.",
            "It starts with conversations. Not only with whoever signs off, but with accounting, the warehouse and the sales managers, the people who'll be pressing the buttons every day. The reason is simple: the most expensive mistake in a project is made before the first line of code, when the system gets built for a problem nobody properly defined."
          ],
          opts: ["interviews with staff; a walkthrough of how processes run today", "business requirements and user scenarios", "ready-made products compared against custom development", "a specification with time and budget estimated per phase"],
          ret: "A document any team, ours or someone else's, can estimate from and start building.",
          bugs: "Sometimes our advice is to build nothing and configure an existing product instead. This is intended behaviour."
        },
        saas: {
          name: "SaaS development",
          desc: [
            "We design and build SaaS platforms, from a first version for pilot customers to a service where every customer gets their own workspace, plan and dashboard.",
            "The money in SaaS isn't in the code. It's in how easily a new customer signs up, pays and gets going without ever calling support. That's why multi-tenancy, billing and permissions go in on day one: retrofitting them once customers are inside costs several times more."
          ],
          opts: ["multi-tenant architecture; customer data kept isolated", "sign-up, plans, subscriptions, online payments", "customer dashboards, roles, permissions", "integrations and a public API for your customers", "scaling as load grows"],
          ret: "A product you sell by subscription. Not a project someone rolls out by hand every time.",
          bugs: "The first version ships earlier than you'd like. On purpose: real users are quick to show which features were never needed."
        },
        web: {
          name: "web development",
          desc: [
            "We build corporate websites, marketplaces, online stores, booking systems and internal web tools. Built around the task, no templates.",
            "A business website is measured in leads and orders; how it looks in a portfolio comes a distant second. Before work starts we agree on what counts as a result, and analytics go live before launch, not six months later. The technology follows the task: a landing page has no use for a heavy platform, and a marketplace won't squeeze into a website builder."
          ],
          opts: ["prototype and interface design", "frontend, backend, admin panel", "integrations with payments, delivery, CRM and accounting systems", "SEO groundwork, page speed, analytics", "launch and ongoing support"],
          ret: "A web service that shows how many leads and how much revenue it brings in."
        },
        mobile: {
          name: "mobile apps",
          desc: [
            "We build iOS and Android apps together with the server side and the admin panel behind them.",
            "An app earns its keep when people come back to it: a repeat order, a delivery status, loyalty points. Native or cross-platform comes down to budget and to how much the app depends on the camera, location and offline mode."
          ],
          opts: ["iOS and Android apps", "server side and API", "admin panel: content, orders, users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          ret: "An app that passes store review. Your team runs it without calling a developer.",
          bugs: "If a customer would open it once a year, you don't need an app: we suggest a good mobile website instead, it's cheaper. We say so before any work begins."
        },
        ai: {
          name: "AI-powered solutions",
          desc: [
            "We automate business processes with AI agents and other solutions built on artificial intelligence and machine learning. The agent walks through the routine steps of a process itself; a person checks the outcome.",
            "Language models earn their place where people spend hours sorting emails, documents and support requests. Work starts with a pilot on your own data, so you see accuracy figures before the main build, not after it."
          ],
          opts: ["AI agents that triage requests, fill in the CRM and draft replies to customers on their own", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification, knowledge-base search", "demand forecasting, data analysis", "a pilot with quality measured on your data"],
          ret: "A process people used to do by hand is now done by the system. A person stays in control.",
          bugs: "We're more sceptical about AI than most. Half of the \"let's add a neural network\" ideas are covered by ordinary automation, and in that case we say so."
        },
        "crm-erp": {
          name: "CRM and ERP development",
          desc: [
            "{crm-erp} builds CRM and ERP systems around the way your business works. The other way round doesn't work.",
            "Off-the-shelf CRM copes as long as your process looks standard. Once managers run half their work in spreadsheets because the system \"can't do that\", building your own comes out cheaper.",
            "Data is migrated from old systems and spreadsheets. Rollout goes department by department, so work never stops for a day."
          ],
          opts: ["sales, warehouse, production, finance modules; only the ones you need", "roles, permissions, audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony, email"],
          ret: "One system instead of a zoo of spreadsheets. Management sees where things stand without collecting weekly reports from every department."
        },
        cloud: {
          name: "cloud solutions",
          desc: [
            "We move your infrastructure to Amazon Web Services, in full or in part, and keep it running without the bill creeping up for no reason.",
            "A move starts with an audit and a cost estimate. Everything is migrated in stages, with a rollback plan at every step."
          ],
          opts: ["audit of the current infrastructure, cost estimate", "AWS architecture, migration plan", "moving servers, databases, files", "backups and monitoring", "cost optimisation after the move"],
          ret: "Infrastructure that survives a server failure. A cloud bill you understand.",
          bugs: "The cloud isn't always cheaper than your own server. It pays off when load spikes, when you need fault tolerance, or when new environments must come up in minutes rather than a week."
        },
        redhat: {
          name: "company infrastructure on Red Hat",
          desc: [
            "We build your company's IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform, automation with Ansible.",
            "Red Hat is the pick when infrastructure has to run for years and pass audits instead of living in one administrator's head. The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years.",
            "The infrastructure is designed around your workloads, and server configuration is described in Ansible. Any server can be rebuilt from a playbook rather than from memory."
          ],
          opts: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout, centralised updates through Red Hat Satellite", "the OpenShift container platform for your applications", "configuration and deployment automation with Ansible", "central identity and access management (Identity Management)", "monitoring, backups, documentation for your team"],
          ret: "Infrastructure you can audit, reproduce and hand over to another team without losing what it knows.",
          notes: "Red Hat is our partner, so we can also help you sort out subscriptions and vendor support."
        },
        api: {
          name: "APIs and integrations",
          desc: [
            "We design APIs for your systems and connect them to the services you already use.",
            "The same thing turns up most often: data typed in twice. Website orders re-keyed into the accounting system by hand, payments reconciled in a spreadsheet. An integration removes that work along with the mistakes it breeds."
          ],
          opts: ["API design and documentation", "integrations with payment providers, delivery services, CRM, accounting", "data exchange between internal systems", "queues and retries on failure", "monitoring and alerts"],
          ret: "Data is entered once and gets where it needs to go on its own.",
          bugs: "Integrations break quietly when a partner changes their API. That's why -w is always on: the system should report the breakage, not a customer."
        },
        support: {
          name: "technical support",
          desc: [
            "We keep your IT systems running and keep developing them, including ones we didn't build.",
            "Fixing bugs is only part of the job. There are also updates that close security holes, monitoring that spots trouble before users do, and small improvements along the way."
          ],
          opts: ["availability and error monitoring", "bug fixes, security updates", "backups and restore testing", "planned improvements and new features", "audit and documentation of systems from other contractors"],
          ret: "The system works, and there's a team that knows how it's put together.",
          bugs: "Someone else's undocumented system can't be changed safely: every edit is a gamble. In that case we start with an audit (support -a)."
        }
      }
    },
    ru: {
      header: "Руководство по услугам ArtIntelliCo",
      sec: { name: "ИМЯ", syn: "СИНТАКСИС", desc: "ОПИСАНИЕ", opts: "ПАРАМЕТРЫ", ret: "ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ", bugs: "ОШИБКИ", notes: "ПРИМЕЧАНИЯ", see: "СМОТРИТЕ ТАКЖЕ", list: "СТРАНИЦЫ" },
      intro: {
        name: "введение в раздел 8: услуги ArtIntelliCo",
        desc: [
          "Каждая страница этого раздела описывает одну услугу. Стек подбираем под задачу, а не задачу под стек.",
          "Иногда лучший ответ — готовый сервис по подписке. Тогда мы так и скажем, и разрабатывать ничего не придётся."
        ]
      },
      pages: {
        concept: {
          name: "концепция ИТ-решения",
          desc: [
            "Выясняем, что на самом деле должна делать система, и записываем это так, чтобы поняли и бизнес, и разработчики.",
            "Начинается всё с разговоров. Не только с руководителем, но и с бухгалтерией, складом, менеджерами, то есть с теми, кто будет нажимать кнопки каждый день. Причина простая: самую дорогую ошибку в проекте делают ещё до первой строки кода, когда систему строят под задачу, которую никто толком не сформулировал."
          ],
          opts: ["интервью с сотрудниками, разбор того, как процессы идут сейчас", "бизнес-требования и сценарии работы", "сравнение готовых продуктов с разработкой на заказ", "техническое задание со сроками и бюджетом, оценёнными по этапам"],
          ret: "Документ, по которому любая команда, наша или чужая, может оценить работу и начать её.",
          bugs: "Иногда по итогам советуем ничего не разрабатывать, а взять готовый продукт и донастроить его. Так и задумано."
        },
        saas: {
          name: "разработка SaaS-решений",
          desc: [
            "Проектируем и собираем SaaS-платформу: от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и личный кабинет.",
            "Деньги в SaaS приносит не код. Их приносит то, насколько легко новый клиент регистрируется, платит и начинает работать, ни разу не позвонив в поддержку. Поэтому мультитенантность, биллинг и права доступа закладываются с первого дня: переделывать их, когда клиенты уже внутри, выходит в разы дороже."
          ],
          opts: ["мультитенантная архитектура, данные клиентов изолированы друг от друга", "регистрация, тарифы, подписки, онлайн-оплата", "личные кабинеты, роли, права доступа", "интеграции и открытое API для ваших клиентов", "масштабирование, когда растёт нагрузка"],
          ret: "Продукт, который продаётся по подписке. Не проект, который каждый раз внедряют руками.",
          bugs: "Первая версия выходит раньше, чем хотелось бы. Намеренно: живые пользователи быстро показывают, какие функции были лишними."
        },
        web: {
          name: "веб-разработка",
          desc: [
            "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Под задачу, без шаблона.",
            "Сайт для бизнеса меряют заявками и заказами, а как он смотрится в портфолио — дело десятое. Ещё до старта договариваемся, что считать результатом, и включаем аналитику до запуска, а не через полгода. Технологию выбирают под задачу: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет."
          ],
          opts: ["прототип и дизайн интерфейсов", "frontend, backend, панель администрирования", "интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, скорость загрузки, аналитика", "запуск и сопровождение"],
          ret: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        mobile: {
          name: "мобильные приложения",
          desc: [
            "Собираем приложения для iOS и Android вместе с серверной частью и панелью администрирования.",
            "Приложение окупается, когда к нему возвращаются: повторный заказ, статус доставки, бонусы. Нативно или кроссплатформенно — решают бюджет и то, насколько приложению нужны камера, геолокация и офлайн-режим."
          ],
          opts: ["приложения для iOS и Android", "серверная часть и API", "админ-панель: контент, заказы, пользователи", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          ret: "Приложение, которое проходит модерацию магазинов. Управлять им ваша команда может без разработчиков.",
          bugs: "Если клиент заходит раз в год, приложение не нужно: советуем удобный мобильный сайт, так дешевле. Говорим об этом до начала работ."
        },
        ai: {
          name: "решения с искусственным интеллектом",
          desc: [
            "Автоматизируем бизнес-процессы с помощью ИИ-агентов и других решений на базе искусственного интеллекта и машинного обучения. Агент сам проходит рутинные шаги процесса, а человек проверяет результат.",
            "Языковые модели по-настоящему полезны там, где сотрудники часами разбирают письма, документы и обращения. Работа начинается с пилота на ваших данных: цифры точности вы видите до основной разработки, а не после неё."
          ],
          opts: ["ИИ-агенты: сами разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений, поиск по базе знаний", "прогнозы спроса, анализ данных", "пилот с оценкой качества на ваших данных"],
          ret: "Процесс, который раньше делали люди, теперь делает система. Контроль остаётся за человеком.",
          bugs: "К ИИ мы относимся скептичнее многих. Половину идей «давайте добавим нейросеть» закрывает обычная автоматизация, и тогда мы так и говорим."
        },
        "crm-erp": {
          name: "разработка CRM и ERP",
          desc: [
            "{crm-erp} строит CRM и ERP вокруг ваших процессов. Наоборот не работает.",
            "Коробочная CRM справляется, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», своя выходит дешевле.",
            "Данные переносятся из старых систем и таблиц. Запуск идёт по отделам, чтобы работа не вставала ни на день."
          ],
          opts: ["модули продаж, склада, производства, финансов; ставятся только нужные", "роли, права доступа, журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией, почтой"],
          ret: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, и не собирает еженедельные отчёты с каждого отдела."
        },
        cloud: {
          name: "облачные решения",
          desc: [
            "Переносим инфраструктуру в Amazon Web Services, целиком или частями, и следим, чтобы она работала и не дорожала без причины.",
            "Переезд начинается с аудита и расчёта стоимости. Переносят всё поэтапно, и на каждом шаге есть план отката."
          ],
          opts: ["аудит текущей инфраструктуры, расчёт стоимости", "архитектура в AWS, план миграции", "перенос серверов, баз данных, файлов", "резервное копирование и мониторинг", "оптимизация расходов после переезда"],
          ret: "Инфраструктура переживает отказ сервера. Счёт за облако понятен.",
          bugs: "Облако не всегда дешевле своего сервера. Выгода появляется, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны подниматься за минуты, а не за неделю."
        },
        redhat: {
          name: "инфраструктура компании на базе Red Hat",
          desc: [
            "Строим ИТ-инфраструктуру компании на решениях Red Hat: серверы на Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
            "Red Hat берут, когда инфраструктура должна работать годами и проходить аудит, а не держаться на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux поддерживается десять лет.",
            "Инфраструктура проектируется под ваши нагрузки, а конфигурация серверов описывается в Ansible. Любой сервер пересобирается по сценарию, а не по памяти."
          ],
          opts: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux, централизованные обновления через Red Hat Satellite", "контейнерная платформа OpenShift для ваших приложений", "автоматизация настройки и развёртывания через Ansible", "единое управление учётными записями и доступом (Identity Management)", "мониторинг, резервное копирование, документация для вашей команды"],
          ret: "Инфраструктура, которую можно проверить, повторить и передать другой команде, не потеряв знаний.",
          notes: "Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться."
        },
        api: {
          name: "API и интеграции",
          desc: [
            "Проектируем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
            "Чаще всего встречается одно и то же: данные вводят дважды. Заказ с сайта перебивают в учётную систему руками, оплаты сверяют в таблице. Интеграция убирает и эту работу, и ошибки, которые она плодит."
          ],
          opts: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM, учётом", "обмен данными между внутренними системами", "очереди и повторные попытки при сбоях", "мониторинг и оповещения"],
          ret: "Данные вводятся один раз и сами доходят туда, где нужны.",
          bugs: "Интеграции ломаются тихо, когда партнёр меняет свой API. Поэтому -w включён всегда: о поломке должна сообщить система, а не клиент."
        },
        support: {
          name: "техническая поддержка",
          desc: [
            "Поддерживаем ваши ИТ-системы и развиваем их дальше, в том числе написанные не нами.",
            "Исправлять ошибки — только часть работы. Есть ещё обновления, закрывающие уязвимости, мониторинг, который замечает проблему раньше пользователей, и небольшие доработки по ходу."
          ],
          opts: ["мониторинг доступности и ошибок", "исправление ошибок, обновления безопасности", "резервное копирование и проверка восстановления", "доработки и новые функции по плану", "аудит и документация систем от других подрядчиков"],
          ret: "Система работает, и есть команда, которая знает, как она устроена.",
          bugs: "Чужую систему без документации не правят: любая правка превращается в лотерею. Поэтому в таком случае сначала проводим аудит (support -a)."
        }
      }
    }
  };

  const PHOSPHORS = ["white", "green", "amber"];
  const LANGS = ["uk", "en", "ru"];
  const SERVICE_FILES = ["concept", "saas", "web", "mobile", "ai", "crm-erp", "cloud", "redhat", "api", "support"];
  const BIN = ["cat", "clear", "date", "echo", "finger", "hostname", "ls", "mail", "man", "more", "pwd", "uname", "who", "whoami"];
  const BUILTINS = ["cd", "history", "logout", "exit", "help", "lang", "phosphor", "setenv", "printenv", "dos", "nc", "apple", "lisa", "linux", "startx", "mc", "win", "ai"];
  const DENIED = ["rm", "mv", "cp", "mkdir", "rmdir", "touch", "chmod", "chown", "ln", "vi", "ed", "emacs"];

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
  let phosphor = store.get("aic-phosphor");
  if (!PHOSPHORS.includes(phosphor)) phosphor = "white";
  let cwd = HOME;

  const t = () => I18N[lang];
  const u = () => UX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const tok = (label, cmd = label) => `<button type="button" class="tok" data-cmd="${esc(cmd)}">${esc(label)}</button>`;

  const NAV_CMDS = ["cat ~/README", "cd ~/services; ls", "cat ~/partners", "mail", "help"];
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
  const heading = (s) => `<span class="b u">${esc(s)}</span>`;
  const bytes = (s) => new TextEncoder().encode(s).length;

  /* ---------- Дати в стилі UNIX ---------- */
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const two = (n) => String(n).padStart(2, "0");
  const hms = (d) => `${two(d.getHours())}:${two(d.getMinutes())}:${two(d.getSeconds())}`;
  const unixDate = (d) => `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} ${hms(d)} ${d.getFullYear()}`;
  const lsDate = () => { const d = new Date(); return `${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00`; };
  const today9 = () => { const d = new Date(); d.setHours(9, 0, 0, 0); return d; };

  /* ---------- Банер: логотип символами #, як у banner(6) ---------- */
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
    return [0, 1, 2, 3, 4].map((r) => [..."ARTINTELLICO"].map((ch) => G[ch][r]).join(" ")).join("\n");
  };

  /* ---------- Файлова система ---------- */
  const file = (lines, text, extra = {}) => ({ type: "file", lines, text, owner: "aic", mode: "-r--r--r--", ...extra });
  const dir = (kids, extra = {}) => ({ type: "dir", kids, owner: "aic", mode: "dr-xr-xr-x", ...extra });

  const contactLines = () => {
    const s = t();
    return [heading(s.contactTitle), "", esc(s.contactText), "", esc(s.emailLabel) + ": " + `<a href="mailto:${EMAIL}">${EMAIL}</a>`];
  };
  const contactText = () => [t().contactTitle, t().contactText, EMAIL].join("\n");

  const readme = file(
    () => {
      const s = t();
      return [
        `<div class="logo" aria-label="ArtIntelliCo">${esc(logo())}</div>`,
        "",
        heading(s.heroTitle),
        "",
        esc(s.heroText),
        "",
        esc(s.heroLead) + ":",
        ...s.phrases.map((p) => "    - " + esc(p)),
        "",
        `<span class="d">${esc(s.copyright)}</span>`,
        `<span class="d">${esc(s.legal)}</span>`,
        `<span class="d">${esc(s.slogan)}</span>`,
        `<span class="d">${esc(s.source)}:</span> <a href="${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/" target="_blank" rel="noopener">artintellico.com</a>`,
        ...navLines()
      ];
    },
    () => { const s = t(); return [s.heroTitle, s.heroText, s.heroLead, ...s.phrases].join("\n"); }
  );

  /* ---------- Сторінки man для послуг (розділ 8) ---------- */
  const mp = (html, extra = "") => `<span class="mp${extra}">${html}</span>`;
  const fmt = (s) => esc(s).replace(/\{([^}]+)\}/g, '<span class="u">$1</span>');
  const sec = (s) => `<span class="b">${esc(s)}</span>`;
  const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  const MAN_ALIAS = { crm: "crm-erp", erp: "crm-erp", aic: "services", "red-hat": "redhat", rhel: "redhat" };
  const manCols = () => Math.min(columns(), 72);
  /* Рядок з краями по ширині екрана; середина зникає, якщо не вміщується */
  function spread(left, mid, right, cols) {
    if (left.length + mid.length + right.length + 4 <= cols) {
      const free = cols - left.length - mid.length - right.length;
      const a = Math.floor(free / 2);
      return left + " ".repeat(a) + mid + " ".repeat(free - a) + right;
    }
    if (left.length + right.length + 2 <= cols) return left + " ".repeat(cols - left.length - right.length) + right;
    return left;
  }

  function manPage(name) {
    const M = MAN[lang];
    const S = M.sec;
    const intro = name === "services";
    const p = intro ? M.intro : M.pages[name];
    const cols = manCols();
    const title = name.toUpperCase() + "(8)";
    const ref = (n) => tok(n + "(8)", "man " + n);
    const L = [esc(spread(title, M.header, title, cols)), "", sec(S.name), mp(esc(`${name} — ${p.name}`)), ""];
    if (!intro) {
      const letters = FLAGS[name].map((f) => f.slice(1)).sort().join("");
      L.push(
        sec(S.syn),
        mp(`<span class="b">${esc(name)}</span> [-${esc(letters)}]`),
        mp(`<a href="mailto:${EMAIL}?subject=${encodeURIComponent(name)}">mail -s ${esc(name)} ${EMAIL}</a>`),
        ""
      );
    }
    L.push(sec(S.desc));
    p.desc.forEach((d, i) => { if (i) L.push(""); L.push(mp(fmt(d))); });
    L.push("");
    if (intro) {
      L.push(sec(S.list), ...SERVICE_FILES.map((n) => mp(ref(n) + " " + esc(M.pages[n].name), " mt")), "");
      L.push(sec(S.see), mp(tok("intro(1)", "man intro") + ", " + tok("mail(1)", "mail")));
    } else {
      L.push(sec(S.opts), ...FLAGS[name].map((f, i) => mp(`<span class="b">${esc(f)}</span>  ${fmt(p.opts[i])}`, " mt")), "");
      L.push(sec(S.ret), mp(fmt(p.ret)), "");
      if (p.bugs) L.push(sec(S.bugs), mp(fmt(p.bugs)), "");
      if (p.notes) L.push(sec(S.notes), mp(fmt(p.notes)), "");
      L.push(sec(S.see), mp(SEE[name].map(ref).join(", ") + ", " + tok("mail(1)", "mail")));
    }
    L.push("", esc(spread("4.3 Berkeley Distribution", "", "Oct 2, 1987", cols)));
    return L;
  }

  const serviceFile = (name) => file(
    () => {
      const L = manPage(name);
      if (name === "services") return L;
      const [lead, cmd] = u().discuss;
      return [...L, "", esc(lead) + tok(cmd)];
    },
    () => manPage(name).map(strip).join("\n")
  );
  const services = { README: serviceFile("services"), ...Object.fromEntries(SERVICE_FILES.map((name) => [name, serviceFile(name)])) };

  const partners = file(
    () => [
      heading(t().partnersTitle),
      "",
      ...PARTNERS.map((p) => "    - " + (p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)))
    ],
    () => PARTNERS.join("\n")
  );

  const planLines = () => {
    const s = t();
    return [esc(s.heroTitle), "", esc(s.heroLead) + ":", ...s.phrases.map((p) => "    - " + esc(p))];
  };

  const passwd = [
    "root:*:0:0:Charlie &:/:/bin/csh",
    "daemon:*:1:1:The devil himself:/:",
    "aic:*:100:10:ArtIntelliCo LLC:/usr/guest:/bin/csh",
    "guest::101:31:Guest:/usr/guest:/bin/csh"
  ];

  const ROOT = dir({
    bin: dir(Object.fromEntries(BIN.map((n, i) => [n, { type: "bin", owner: "root", mode: "-rwxr-xr-x", size: 8192 + ((n.length * 7919 + i * 1237) % 40000) }])), { owner: "root" }),
    etc: dir({
      motd: file(() => [esc(u().motd.join(""))], () => u().motd.join(""), { owner: "root" }),
      passwd: file(() => passwd.map(esc), () => passwd.join("\n"), { owner: "root" })
    }, { owner: "root" }),
    usr: dir({
      guest: dir({
        README: readme,
        services: dir(services),
        partners,
        contact: file(contactLines, contactText),
        ".plan": file(planLines, () => planLines().join("\n"))
      })
    }, { owner: "root" })
  }, { owner: "root" });

  function normalize(path) {
    let p = path.replace(/^~(?=\/|$)/, HOME);
    if (!p.startsWith("/")) p = cwd + "/" + p;
    const parts = [];
    for (const seg of p.split("/")) {
      if (!seg || seg === ".") continue;
      if (seg === "..") parts.pop();
      else parts.push(seg);
    }
    return "/" + parts.join("/");
  }
  function lookup(abs) {
    let node = ROOT;
    for (const seg of abs.split("/").filter(Boolean)) {
      if (!node || node.type !== "dir") return null;
      node = node.kids[seg];
    }
    return node || null;
  }
  const short = (abs) => (abs === HOME ? "~" : abs.startsWith(HOME + "/") ? "~" + abs.slice(HOME.length) : abs);
  const sizeOf = (n) => (n.type === "dir" ? 512 : n.type === "bin" ? n.size : bytes(n.text()));
  const prompt = () => `${HOST}:${short(cwd)}% `;

  /* ---------- Виведення ---------- */
  const out = $("out");
  const screen = $("screen");
  const input = $("cmd");
  const form = $("promptLine");

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
  async function emit(lines, delay = 14) {
    for (const l of lines) { line(l); await sleep(delay); }
  }
  async function typeIn(before, text) {
    const d = line(esc(before));
    for (const ch of text) { d.textContent += ch; await sleep(70 + Math.random() * 60); }
    await sleep(200);
    return d;
  }

  function setBusy(on) {
    busy = on;
    form.hidden = on;
    if (!on) {
      flushing = false;
      $("prompt").textContent = prompt();
      renderInput();
      scrollDown();
      if (!coarse) input.focus({ preventScroll: true });
    }
  }

  function renderInput() {
    const v = input.value;
    const p = input.selectionStart ?? v.length;
    const rest = [...v.slice(p)];
    $("before").textContent = v.slice(0, p);
    $("cur").textContent = rest[0] || " ";
    $("after").textContent = rest.slice(1).join("");
  }
  ["input", "keyup", "click", "select"].forEach((ev) => input.addEventListener(ev, renderInput));
  document.addEventListener("selectionchange", () => { if (document.activeElement === input) renderInput(); });

  const columns = () => {
    const w = $("measure").getBoundingClientRect().width / 10 || 10;
    return Math.max(20, Math.min(80, Math.floor(out.clientWidth / w)));
  };

  /* ---------- Команди ---------- */
  function lsEntries(node, all) {
    const names = Object.keys(node.kids).filter((n) => all || !n.startsWith(".")).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    return all ? [".", "..", ...names] : names;
  }

  function entryTok(abs, name, node, label = name + (node.type === "dir" ? "/" : node.type === "bin" ? "*" : "")) {
    const target = short(abs);
    if (node.type === "dir") return tok(label, `cd ${target}; ls`);
    if (node.type === "bin") return tok(label, name);
    return tok(label, `cat ${target}`);
  }

  function ls(args) {
    const flags = args.filter((a) => a.startsWith("-")).join("");
    const paths = args.filter((a) => !a.startsWith("-"));
    const long = flags.includes("l");
    const all = flags.includes("a");
    const result = [];
    for (const p of paths.length ? paths : ["."]) {
      const abs = normalize(p);
      const node = lookup(abs);
      if (!node) { result.push(esc(`ls: ${p}: No such file or directory`)); continue; }
      if (paths.length > 1) result.push(esc(p + ":"));
      const entries = node.type === "dir"
        ? lsEntries(node, all).map((name) => {
          const childAbs = name === "." ? abs : name === ".." ? normalize(abs + "/..") : abs + "/" + name;
          return [name, childAbs, lookup(childAbs)];
        })
        : [[p, abs, node]];
      if (long) {
        if (node.type === "dir") result.push("total " + Math.max(1, entries.length));
        for (const [name, childAbs, n] of entries) {
          const meta = `${n.mode}  1 ${n.owner.padEnd(5)} ${String(sizeOf(n)).padStart(6)} ${lsDate()} `;
          result.push(esc(meta) + (name === "." || name === ".." ? esc(name) : entryTok(childAbs, name, n, name)));
        }
      } else {
        const labels = entries.map(([name, , n]) => name + (n.type === "dir" && name !== "." && name !== ".." ? "/" : n.type === "bin" ? "*" : ""));
        const width = Math.max(...labels.map((l) => l.length)) + 2;
        const perRow = Math.max(1, Math.floor(columns() / width));
        const rows = Math.ceil(entries.length / perRow);
        for (let r = 0; r < rows; r++) {
          let row = "";
          for (let c = 0; c < perRow; c++) {
            const k = c * rows + r;
            if (k >= entries.length) continue;
            const [name, childAbs, n] = entries[k];
            const html = name === "." || name === ".." ? esc(labels[k]) : entryTok(childAbs, name, n, labels[k]);
            row += html + " ".repeat(c < perRow - 1 ? width - labels[k].length : 0);
          }
          result.push(row);
        }
      }
      if (paths.length > 1) result.push("");
    }
    return result;
  }

  function cat(args, cmd = "cat") {
    if (!args.length) return [esc(`usage: ${cmd} file ...`)];
    const res = [];
    args.forEach((p, i) => {
      const node = lookup(normalize(p));
      if (!node) res.push(esc(`${cmd}: ${p}: No such file or directory`));
      else if (node.type === "dir") res.push(esc(`${cmd}: ${p}: Is a directory`));
      else if (node.type === "bin") res.push(esc(`${cmd}: ${p}: binary file`));
      else { if (i > 0) res.push(""); res.push(...node.lines()); }
    });
    return res;
  }

  function manIntro() {
    const m = u().man;
    const cols = Math.min(columns(), 72);
    const left = "INTRO(1)";
    const mid = m.header;
    const gap = Math.max(1, Math.floor((cols - left.length * 2 - mid.length) / 2));
    const pad = (s, n) => s + " ".repeat(Math.max(2, n - s.length));
    const cmdTok = (c) => {
      if (c.startsWith("lang ")) return "lang " + ["uk", "en", "ru"].map((l) => tok(l, "lang " + l)).join("|");
      if (c.startsWith("phosphor ")) return "phosphor " + PHOSPHORS.map((p) => tok(p, "phosphor " + p)).join("|");
      /* Шляхи від домашнього каталогу, щоб посилання працювали з будь-якого cwd */
      return tok(c, c.replace(/\b(README|partners|services)\b/, "~/$1"));
    };
    const table = (rows) => {
      const width = Math.max(...rows.map(([c]) => c.length)) + 3;
      return rows.map(([c, d]) => "     " + cmdTok(c) + " ".repeat(width - c.length) + esc(d));
    };
    /* Перелік команд переноситься вручну, зберігаючи відступ */
    const cmdLines = [];
    let cur = [];
    let len = 0;
    for (const c of m.cmds[1].split(/\s{2,}/)) {
      if (cur.length && len + 2 + c.length > cols - 5) { cmdLines.push(cur); cur = []; len = 0; }
      len += (cur.length ? 2 : 0) + c.length;
      cur.push(c);
    }
    if (cur.length) cmdLines.push(cur);
    return [
      esc(left + " ".repeat(gap) + mid + " ".repeat(gap) + left),
      "",
      `<span class="b">${esc(m.name[0])}</span>`,
      "     " + esc(m.name[1]),
      "",
      `<span class="b">${esc(m.desc[0])}</span>`,
      "     " + esc(m.desc[1]),
      "",
      ...table(m.steps),
      "",
      `<span class="b">${esc(m.cmds[0])}</span>`,
      ...cmdLines.map((row) => "     " + row.map((c) => (c.startsWith("ls") ? esc(c) : tok(c))).join("  ")),
      "",
      ...table(m.extra),
      "",
      `<span class="b">${esc(m.keys[0])}</span>`,
      "     " + esc(m.keys[1]),
      "",
      esc("4.3 Berkeley Distribution" + " ".repeat(Math.max(1, cols - 25 - 11)) + "Oct 2, 1987")
    ];
  }

  function mail() {
    const s = t();
    const d = today9();
    const body = contactText();
    const n = body.split("\n").length + 6;
    const subject = s.contactTitle;
    return [
      "Mail version 5.2 6/21/85.  Type ? for help.",
      `"/usr/spool/mail/guest": 1 message 1 new`,
      esc(`>N  1 ${EMAIL}  ${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00  ${n}/${bytes(body)} "${subject}"`),
      "& 1",
      esc(`Message 1:`),
      esc(`From ${EMAIL} ${unixDate(d)}`),
      esc(`To: guest@${HOST}`),
      `Subject: <span class="b">${esc(subject)}</span>`,
      "",
      esc(s.contactText),
      "",
      "-- ",
      "ArtIntelliCo",
      `<a href="mailto:${EMAIL}">${EMAIL}</a>`,
      "",
      "& q",
      esc(`Saved 1 message in ${HOME}/mbox`)
    ];
  }

  function finger(args) {
    const who = (args[0] || "").toLowerCase();
    if (!who) {
      return [
        "Login    Name                TTY  Idle  When",
        esc("aic      ArtIntelliCo LLC     co         Fri 07:00"),
        esc("guest    Guest                01         " + DAYS[new Date().getDay()] + " " + hms(new Date()).slice(0, 5))
      ];
    }
    if (who === "aic" || who === "artintellico") {
      return [
        esc("Login name: aic                         In real life: ArtIntelliCo LLC"),
        esc("Directory: /usr/guest                   Shell: /bin/csh"),
        esc("On since Fri 07:00 on console"),
        "Mail: " + `<a href="mailto:${EMAIL}">${EMAIL}</a>`,
        "Plan:",
        ...planLines()
      ];
    }
    if (who === "guest") {
      return [esc("Login name: guest                       In real life: Guest"), esc("Directory: /usr/guest                   Shell: /bin/csh"), "No Plan."];
    }
    return [esc(`finger: ${args[0]}: no such user.`)];
  }

  function env() {
    return { HOME, USER: "guest", SHELL: "/bin/csh", TERM: "vt100", PATH: "/bin:/usr/bin:/usr/ucb", LANG: u().langSet.split("=")[1] };
  }
  const expand = (s) => s.replace(/\$(\w+)/g, (_, k) => env()[k] ?? "");

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
  }
  function setPhosphor(p) {
    phosphor = p;
    store.set("aic-phosphor", p);
    document.documentElement.dataset.phosphor = p;
  }

  const history = [];
  let hIndex = 0;

  async function run(raw, { typed = false } = {}) {
    setBusy(true);
    if (typed) await typeIn(prompt(), raw);
    else line(esc(prompt() + raw));
    const cmdline = raw.trim();
    if (cmdline) {
      if (history[history.length - 1] !== cmdline) history.push(cmdline);
      hIndex = history.length;
      for (const part of cmdline.split(";").map((x) => x.trim()).filter(Boolean)) {
        const stop = await execute(part);
        if (stop) return;
      }
    }
    setBusy(false);
  }

  async function execute(cmdline) {
    const argv = expand(cmdline).split(/\s+/);
    const cmd = argv[0];
    const args = argv.slice(1);
    const name = cmd.includes("/") ? cmd.split("/").pop() : cmd;

    switch (name) {
      case "help":
        return emit(manIntro(), 10);
      case "man": {
        const want = (args.filter((a) => !/^\d$/.test(a) && !a.startsWith("-"))[0] || "").toLowerCase();
        if (!want || want === "intro" || want === "man") return emit(manIntro(), 10);
        const page = MAN_ALIAS[want] || want;
        if (page === "services" || SERVICE_FILES.includes(page)) return emit(manPage(page), 10);
        return emit([esc(`No manual entry for ${want}.`)]);
      }
      case "ls":
        return emit(ls(args));
      case "cd": {
        const target = normalize(args[0] || "~");
        const node = lookup(target);
        if (!node) return emit([esc(`${args[0]}: No such file or directory.`)]);
        if (node.type !== "dir") return emit([esc(`${args[0]}: Not a directory.`)]);
        cwd = target;
        return;
      }
      case "pwd":
        return emit([esc(cwd)]);
      case "cat":
      case "more":
      case "less":
      case "head":
        return emit(cat(args, name));
      case "echo":
        return emit([esc(args.join(" "))]);
      case "clear":
        out.innerHTML = "";
        return;
      case "date":
        return emit([esc(unixDate(new Date()))]);
      case "uname":
        return emit([args.includes("-a") ? `4.3BSD ${HOST} 4.3 BSD UNIX #1: Fri Jun 13 09:00:00 PDT 1987 vax` : "4.3BSD"]);
      case "hostname":
        return emit([HOST]);
      case "whoami":
        return emit(["guest"]);
      case "who":
        return emit([esc("aic      console Oct  2 07:00"), esc(`guest    tty01   ${MONTHS[new Date().getMonth()]} ${String(new Date().getDate()).padStart(2)} ${hms(new Date()).slice(0, 5)}`)]);
      case "finger":
        return emit(finger(args));
      case "mail":
      case "Mail":
        return emit(mail(), 30);
      case "history":
        return emit(history.map((h, i) => esc(String(i + 1).padStart(5) + "  " + h)));
      case "lang": {
        const l = (args[0] || "").toLowerCase();
        if (!LANGS.includes(l)) return emit(["usage: lang " + LANGS.map((x) => tok(x, "lang " + x)).join("|")]);
        setLang(l);
        return emit([esc(u().langSet), u().motd.map((part, i) => (i === 1 ? tok(part) : esc(part))).join("")]);
      }
      case "setenv": {
        if (!args.length) return emit(Object.entries(env()).map(([k, v]) => esc(`${k}=${v}`)));
        if (args[0] === "LANG") {
          const l = (args[1] || "").slice(0, 2).toLowerCase();
          if (LANGS.includes(l)) { setLang(l); return emit([esc(u().langSet)]); }
        }
        return;
      }
      case "printenv":
      case "env":
        return emit(Object.entries(env()).map(([k, v]) => esc(`${k}=${v}`)));
      case "phosphor": {
        const p = (args[0] || "").toLowerCase();
        if (!p) setPhosphor(PHOSPHORS[(PHOSPHORS.indexOf(phosphor) + 1) % PHOSPHORS.length]);
        else if (PHOSPHORS.includes(p)) setPhosphor(p);
        else return emit(["usage: phosphor " + PHOSPHORS.map((x) => tok(x, "phosphor " + x)).join("|")]);
        return emit([esc(u().phosphorSet + u().phosphors[phosphor])]);
      }
      case "dos":
      case "command.com":
        await emit(["Connection to DOS..."]);
        await sleep(400);
        location.href = "/dos/";
        return true;
      case "ai":
      case "future":
        location.href = "/ai/";
        return true;
      case "win":
        await emit(["Starting Windows 3.11..."]);
        await sleep(400);
        location.href = "/win31/";
        return true;
      case "mc":
        await emit(["Starting Midnight Commander..."]);
        await sleep(400);
        location.href = "/mc/";
        return true;
      case "startx":
      case "linux":
        await emit(["xinit: starting X server..."]);
        await sleep(400);
        location.href = "/linux/";
        return true;
      case "lisa":
        await emit(["Starting ArtIntelliCo Office System..."]);
        await sleep(400);
        location.href = "/lisa/";
        return true;
      case "apple":
        await emit(["Connecting to Apple ][..."]);
        await sleep(400);
        location.href = "/apple/";
        return true;
      case "nc":
        await emit(["Starting Norton Commander..."]);
        await sleep(400);
        location.href = "/";
        return true;
      case "logout":
      case "exit":
        await emit(["logout"]);
        await sleep(500);
        login();
        return true;
      case "su":
        return emit(["su: Sorry"]);
      case "sudo":
        return emit(["sudo: Command not found."]);
    }
    if (DENIED.includes(name)) return emit([esc(`${name}: ${args[0] ? args[0] + ": " : ""}Permission denied`)]);

    /* Виконувані файли та шляхи */
    const node = cmd.includes("/") ? lookup(normalize(cmd)) : null;
    if (node && node.type === "dir") return emit([esc(`${cmd}: Permission denied.`)]);
    if (node && node.type === "file") return emit([esc(`${cmd}: Permission denied.`)]);
    /* Послуги — це сторінки довідника, а не програми */
    if (SERVICE_FILES.includes(name) || MAN_ALIAS[name]) return emit([esc(`${cmd}: Command not found. `) + tok(`man ${MAN_ALIAS[name] || name}`)]);
    return emit([esc(`${cmd}: Command not found.`)]);
  }

  /* ---------- Клавіатура ---------- */
  function complete() {
    const v = input.value;
    const parts = v.split(" ");
    const word = parts[parts.length - 1];
    let pool;
    let prefix = "";
    let base = word;
    if (parts.length === 1 && !word.includes("/")) {
      pool = [...BUILTINS, ...BIN].sort();
    } else if (parts[0] === "man" && parts.length === 2) {
      pool = ["intro", "services", ...SERVICE_FILES];
    } else {
      const slash = word.lastIndexOf("/");
      prefix = slash >= 0 ? word.slice(0, slash + 1) : "";
      base = slash >= 0 ? word.slice(slash + 1) : word;
      const node = lookup(normalize(prefix || "."));
      if (!node || node.type !== "dir") return;
      pool = Object.keys(node.kids)
        .filter((n) => base.startsWith(".") || !n.startsWith("."))
        .map((n) => n + (node.kids[n].type === "dir" ? "/" : ""));
    }
    const hits = [...new Set(pool.filter((x) => x.startsWith(base)))];
    if (!hits.length) return;
    let common = hits[0];
    for (const h of hits) while (!h.startsWith(common)) common = common.slice(0, -1);
    parts[parts.length - 1] = prefix + common;
    input.value = parts.join(" ") + (hits.length === 1 && !common.endsWith("/") ? " " : "");
    if (hits.length > 1 && common.length === base.length) {
      line(esc(prompt() + v));
      line(hits.map(esc).join("  "));
    }
    renderInput();
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { e.preventDefault(); complete(); return; }
    if (e.ctrlKey && (e.key === "c" || e.key === "C" || e.key === "с" || e.key === "С")) {
      e.preventDefault();
      line(esc(prompt() + input.value + "^C"));
      input.value = "";
      renderInput();
      return;
    }
    if (e.ctrlKey && (e.key === "l" || e.key === "L" || e.key === "д" || e.key === "Д")) {
      e.preventDefault();
      out.innerHTML = "";
      return;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      hIndex = Math.max(0, Math.min(history.length, hIndex + (e.key === "ArrowUp" ? -1 : 1)));
      input.value = history[hIndex] || "";
      input.setSelectionRange(input.value.length, input.value.length);
      renderInput();
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
      if (!e.metaKey && !(e.ctrlKey && e.key !== "c")) { e.preventDefault(); flush(); }
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
    if (busy) { flush(); return; }
    if (b) { run(b.dataset.cmd); return; }
    if (e.target.closest("a")) return;
    if (!String(getSelection())) input.focus({ preventScroll: true });
  });

  /* ---------- Вхід у систему ---------- */
  async function login() {
    setBusy(true);
    cwd = HOME;
    out.innerHTML = "";
    flushing = false;
    const quick = store.get("aic-unix-login", sessionStorage);
    const hint = !quick && !reduced ? line(`<span class="d">${esc(u().skip)}</span>`) : null;
    await emit([`4.3 BSD UNIX (${HOST}) (tty01)`, ""], 80);
    await sleep(quick ? 0 : 500);
    const l = await typeIn("login: ", "guest");
    if (hint) hint.remove();
    l.textContent = "login: guest";
    line("Password:");
    await sleep(quick ? 100 : 700);
    const last = new Date(Date.now() - 86400000);
    last.setHours(18, 30, 12);
    await emit([
      esc(`Last login: ${DAYS[last.getDay()]} ${MONTHS[last.getMonth()]} ${String(last.getDate()).padStart(2)} ${hms(last)} on tty01`),
      "4.3 BSD UNIX #1: Fri Jun 13 09:00:00 PDT 1987",
      "",
      u().motd.map((part, i) => (i === 1 ? tok(part) : esc(part))).join(""),
      "",
      "You have new mail."
    ], 60);
    store.set("aic-unix-login", "1", sessionStorage);
    await typeIn(prompt(), "cat README");
    await emit(readme.lines(), 30);
    setBusy(false);
  }

  setLang(lang);
  setPhosphor(phosphor);
  document.fonts.load('20px "DEC Rainbow"').finally(login);
})();
