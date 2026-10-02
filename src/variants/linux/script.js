(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";

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
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
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
        "  lang uk|en|ru        мова",
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
        "  lang uk|en|ru        language",
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
        "  lang uk|en|ru        язык",
        "  clear, exit",
        "  nc, dos, unix, apple, lisa — другие версии"
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
    }
  };

  const LANGS = ["uk", "en", "ru"];
  const LANG_NAMES = { uk: "Українська", en: "English", ru: "Русский" };
  const VERSIONS = [["Norton Commander", "/"], ["DOS", "/dos/"], ["UNIX", "/unix/"], ["Apple ][", "/apple/"], ["Apple Lisa", "/lisa/"], ["Midnight Commander", "/mc/"], ["Windows 3.11", "/win31/"], ["AI", "/ai/"]];
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
  let lang = store.get("aic-lang") || (nav.startsWith("ru") ? "ru" : nav.startsWith("uk") ? "uk" : nav.startsWith("en") ? "en" : "uk");
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
    return [...k.desc, R.files + ":", ...k.files.map((f) => "  - " + f), R.result + ":", "  " + k.result].join("\n");
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
  let menuEl = null;
  function menu(x, y, title, items) {
    closeMenu();
    const m = document.createElement("div");
    m.className = "fmenu";
    m.setAttribute("role", "menu");
    m.innerHTML = (title ? `<div class="mt">${esc(title)}</div>` : "") + items.map((it, k) => it.sep ? "<hr>"
      : `<button type="button" role="menuitem${it.checked !== undefined ? "radio" : ""}" data-k="${k}"${it.checked !== undefined ? ` aria-checked="${it.checked}"` : ""}>${esc(it.label)}</button>`).join("");
    xroot.appendChild(m);
    const R = rootRect();
    const mr = m.getBoundingClientRect();
    m.style.left = Math.max(0, Math.min(x - R.left, R.width - mr.width - 4)) + "px";
    m.style.top = Math.max(0, Math.min(y - R.top, R.height - mr.height - 4)) + "px";
    m.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-k]");
      if (!b) return;
      const it = items[Number(b.dataset.k)];
      closeMenu();
      it.act();
    });
    m.addEventListener("keydown", (e) => {
      const bs = [...m.querySelectorAll("button")];
      const k = bs.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); bs[(k + 1) % bs.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); bs[(k - 1 + bs.length) % bs.length].focus(); }
    });
    menuEl = m;
    const first = m.querySelector("button");
    if (first) first.focus({ preventScroll: true });
  }
  function closeMenu() { if (menuEl) { menuEl.remove(); menuEl = null; } }
  document.addEventListener("pointerdown", (e) => { if (menuEl && !e.target.closest(".fmenu")) closeMenu(); }, true);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  function rootMenu(x, y) {
    const a = r().apps;
    menu(x, y, r().utilities, [
      { label: a.xterm, act: () => openXterm() },
      { label: a.cp, act: () => open("cp") },
      { label: a.glint, act: () => open("glint") },
      { label: a.mail, act: () => openMail() },
      { sep: true },
      ...LANGS.map((l) => ({ label: LANG_NAMES[l], checked: l === lang, act: () => setLang(l) })),
      { sep: true },
      ...VERSIONS.map(([n, u]) => ({ label: n, act: () => { location.href = u; } })),
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
      title: () => r().apps.lang, icon: "lang", size: [260, 200], pos: ["c", "c"],
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
        c.innerHTML = `<div class="pad tk" style="display:flex;flex-direction:column;gap:8px;flex:1">${VERSIONS.map(([n, u]) => `<a class="tkbtn" href="${u}">${n}</a>`).join("")}</div>`;
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
      <dt>${esc(f[0])}:</dt><dd>${esc(i.name)}</dd>
      <dt>${esc(f[1])}:</dt><dd>${esc(i.version)}</dd>
      <dt>${esc(f[2])}:</dt><dd>${esc(i.release)} (${esc(r().notInstalled)})</dd>
      <dt>${esc(f[3])}:</dt><dd>${esc(i.group)}</dd>
      <dt>${esc(f[4])}:</dt><dd>${i.size}</dd>
      <dt>${esc(f[5])}:</dt><dd>${esc(i.packager)}</dd>
      <dt>${esc(f[6])}:</dt><dd><a href="${i.url}" target="_blank" rel="noopener">${esc(i.url)}</a></dd>
      <dt>${esc(f[7])}:</dt><dd>${esc(i.summary)}</dd>
    </dl><div class="well pdesc">${extra}</div>`;
    };
    dialog("info", () => r().info + ": " + name, body, [
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
      <dl class="info"><dt>${esc(r().from)}:</dt><dd>ArtIntelliCo &lt;${EMAIL}&gt;</dd><dt>${esc(r().subject)}:</dt><dd>${esc(s.contactTitle)}</dd></dl>
      <div class="well" style="margin-top:10px;font-weight:400"><p>${esc(s.contactText)}</p><p>${esc(s.emailLabel)}: <a href="mailto:${EMAIL}">${EMAIL}</a></p></div>`, [
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
      return [`<span class="b">${esc(s.heroTitle)}</span>`, "", esc(s.heroText), "", esc(s.heroLead) + ":", ...s.phrases.map((p) => "  * " + esc(p)), "",
        esc(s.copyright), esc(s.legal), esc(s.slogan), `${esc(s.source)}: <a href="${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/" target="_blank" rel="noopener">artintellico.com</a>`];
    };
    const fileLines = (name) => {
      const s = t();
      if (name === "README") return readme();
      if (name === "partners") return [`<span class="b">${esc(s.partnersTitle)}</span>`, ...PARTNERS.map((p) => "  * " + esc(p))];
      if (name === "contact") return [`<span class="b">${esc(s.contactTitle)}</span>`, esc(s.contactText), `${esc(s.emailLabel)}: <a href="mailto:${EMAIL}">${EMAIL}</a>`];
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
        "", esc(R.files + ":"), ...k.files.map((f) => esc("  - " + f)),
        "", esc(R.result + ":"), esc("  " + k.result)
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
        case "lang":
          if (LANGS.includes(args[0])) { setLang(args[0]); return put(esc("LANG=" + args[0])); }
          return put(esc("usage: lang uk|en|ru"));
        case "exit": case "logout": setTimeout(() => close("xterm"), 0); return;
        case "nc": case "dos": case "unix": case "apple": case "lisa": case "mc": case "win": case "ai": {
          const u = { nc: "/", dos: "/dos/", unix: "/unix/", apple: "/apple/", lisa: "/lisa/", mc: "/mc/", win: "/win31/", ai: "/ai/" }[c0];
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
        put(esc(r().help[0].replace(":", "")) + ": " + tok("help", "help") + "  " + tok("ls", "ls") + "  " + tok("rpm -qa", "rpm -qa"));
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
