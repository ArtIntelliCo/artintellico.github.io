(() => {
  const EMAIL = "io@artintellico.com";
  const PARTNERS = ["Red Hat", "Microsoft", "Amazon Web Services", "Veeam", "VMware", "Dell", "UNIO24"];
  const HOST = "artintellico";
  const HOME = "/home/guest";
  const SITE_DIR = HOME + "/artintellico";

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
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Рядки інтерфейсу mc (у mc є переклади, тож меню локалізовані, як у справжньому) */
  const MX = {
    uk: {
      menu: ["Ліва", "Файл", "Команда", "Налаштування", "Права"],
      leftItems: ["Повний формат", "Короткий формат", "Перечитати"],
      rightModes: ["Список файлів", "Швидкий перегляд", "Інформація"],
      fileItems: ["Перегляд", "Редагування", "Копіювати", "Перейменувати", "Створити каталог", "Видалити", "Вихід"],
      cmdItems: ["Меню користувача", "Написати запит", "Відкрити artintellico.com", "Командна оболонка"],
      versions: "Інші версії сайту",
      skins: "Скін",
      cols: ["Ім'я", "Розмір", "Час правки"],
      keys: ["Допомога", "Меню", "Перегляд", "Редагув.", "Копія", "Перейм.", "НовКат", "Вилуч.", "МенюМС", "Вихід"],
      viewKeys: ["Допомога", "Перенос", "Вихід", "Hex", "", "", "", "", "", "Вихід"],
      editKeys: ["Допомога", "Зберегти", "", "", "", "", "", "", "", "Вихід"],
      hints: [
        "Підказка: Enter відкриває файл, Tab перемикає панелі, F3 — перегляд.",
        "Підказка: запустіть request.sh, щоб написати нам запит.",
        "Підказка: F9 відкриває меню з мовою та скінами.",
        "Підказка: Ctrl+O показує командну оболонку.",
        "Підказка: F5 копіює вміст файлу в буфер обміну."
      ],
      info: ["Файл", "Режим", "Посилань", "Власник", "Розмір", "Змінено", "Файлова система", "Пристрій", "Тип", "Вільно"],
      bytes: "байт",
      dirSummary: (n) => `Каталог: ${n} об'єктів`,
      quitText: "Справді вийти з Midnight Commander?",
      yes: "Так", no: "Ні", ok: "Гаразд", cancel: "Скасувати", error: "Помилка",
      copyTitle: "Копіювання", copyTo: (n) => `Копіювати «${n}» до:`, clipboard: "буфер обміну",
      copied: (n) => `Скопійовано в буфер обміну: ${n}`, copyFailed: "Не вдалося записати в буфер обміну.",
      ro: { move: (n) => `Не можу перейменувати «${n}»: файлова система лише для читання.`, mkdir: "Не можу створити каталог: файлова система лише для читання.", del: (n) => `Не можу вилучити «${n}»: файлова система лише для читання.` },
      delTitle: "Вилучення", delAsk: (n) => `Вилучити «${n}»?`,
      editRO: "Не можу зберегти файл: доступ заборонено.",
      sendTitle: "Запит", sendAsk: `Надіслати запит на ${EMAIL}? Відкриється ваша поштова програма.`, send: "Надіслати", dontSend: "Не надсилати",
      defaultSubject: "Запит з сайту", placeholder: "Напишіть тут про вашу задачу.",
      userMenu: "Меню користувача",
      um: ["Написати запит (request.sh)", "Обговорити вибрану послугу", "Відкрити artintellico.com", "Копіювати адресу пошти", "Змінити мову"],
      shellHint: "Ctrl+O або Esc — назад до панелей",
      mcHint: "Введіть mc, щоб запустити Midnight Commander.",
      notFound: (c) => `bash: ${c}: команду не знайдено`,
      discuss: "Обговорити задачу: ./request.sh",
      skip: "Натисніть будь-яку клавішу, щоб пропустити",
      helpTitle: "Допомога",
      help: [
        "Midnight Commander для сайту ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   рух курсору",
        "Enter           відкрити каталог або файл",
        "Tab             інша панель",
        "F3 / F4         перегляд / редагування",
        "F5              копіювати вміст у буфер обміну",
        "F2              меню користувача",
        "F9              меню: мова, скіни, інші версії",
        "Ctrl+O          командна оболонка",
        "F10             вихід",
        "",
        "Щоб написати нам, запустіть request.sh:",
        "відкриється mcedit, F2 надішле лист."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", "lang uk|en|ru, skin default|dark|mono, clear, exit", "nc, dos, unix, apple, lisa, linux — інші версії"]
    },
    en: {
      menu: ["Left", "File", "Command", "Options", "Right"],
      leftItems: ["Full format", "Brief format", "Reread"],
      rightModes: ["File listing", "Quick view", "Info"],
      fileItems: ["View", "Edit", "Copy", "Rename/Move", "Make directory", "Delete", "Exit"],
      cmdItems: ["User menu", "Write a request", "Open artintellico.com", "Command shell"],
      versions: "Other versions of the site",
      skins: "Skin",
      cols: ["Name", "Size", "Modify time"],
      keys: ["Help", "Menu", "View", "Edit", "Copy", "RenMov", "Mkdir", "Delete", "PullDn", "Quit"],
      viewKeys: ["Help", "Wrap", "Quit", "Hex", "", "", "", "", "", "Quit"],
      editKeys: ["Help", "Save", "", "", "", "", "", "", "", "Quit"],
      hints: [
        "Hint: Enter opens a file, Tab switches panels, F3 views.",
        "Hint: run request.sh to write us a request.",
        "Hint: F9 opens the menu with language and skins.",
        "Hint: Ctrl+O shows the command shell.",
        "Hint: F5 copies a file's contents to the clipboard."
      ],
      info: ["File", "Mode", "Links", "Owner", "Size", "Modified", "Filesystem", "Device", "Type", "Free"],
      bytes: "bytes",
      dirSummary: (n) => `Directory: ${n} entries`,
      quitText: "Do you really want to quit the Midnight Commander?",
      yes: "Yes", no: "No", ok: "OK", cancel: "Cancel", error: "Error",
      copyTitle: "Copy", copyTo: (n) => `Copy "${n}" to:`, clipboard: "clipboard",
      copied: (n) => `Copied to the clipboard: ${n}`, copyFailed: "Couldn't write to the clipboard.",
      ro: { move: (n) => `Cannot rename "${n}": read-only file system.`, mkdir: "Cannot create directory: read-only file system.", del: (n) => `Cannot delete "${n}": read-only file system.` },
      delTitle: "Delete", delAsk: (n) => `Delete "${n}"?`,
      editRO: "Cannot save file: permission denied.",
      sendTitle: "Request", sendAsk: `Send the request to ${EMAIL}? Your email app will open.`, send: "Send", dontSend: "Don't send",
      defaultSubject: "Enquiry from the website", placeholder: "Tell us about your project here.",
      userMenu: "User menu",
      um: ["Write a request (request.sh)", "Discuss the selected service", "Open artintellico.com", "Copy email address", "Switch language"],
      shellHint: "Ctrl+O or Esc — back to the panels",
      mcHint: "Type mc to start Midnight Commander.",
      notFound: (c) => `bash: ${c}: command not found`,
      discuss: "Discuss your project: ./request.sh",
      skip: "Press any key to skip",
      helpTitle: "Help",
      help: [
        "Midnight Commander for the ArtIntelliCo site.",
        "",
        "↑ ↓ PgUp PgDn   move the cursor",
        "Enter           open a directory or file",
        "Tab             other panel",
        "F3 / F4         view / edit",
        "F5              copy contents to the clipboard",
        "F2              user menu",
        "F9              menu: language, skins, other versions",
        "Ctrl+O          command shell",
        "F10             quit",
        "",
        "To write to us, run request.sh:",
        "mcedit opens, F2 sends the letter."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", "lang uk|en|ru, skin default|dark|mono, clear, exit", "nc, dos, unix, apple, lisa, linux — other versions"]
    },
    ru: {
      menu: ["Левая", "Файл", "Команда", "Настройки", "Правая"],
      leftItems: ["Полный формат", "Краткий формат", "Перечитать"],
      rightModes: ["Список файлов", "Быстрый просмотр", "Информация"],
      fileItems: ["Просмотр", "Правка", "Копировать", "Переименовать", "Создать каталог", "Удалить", "Выход"],
      cmdItems: ["Меню пользователя", "Написать запрос", "Открыть artintellico.com", "Командная оболочка"],
      versions: "Другие версии сайта",
      skins: "Скин",
      cols: ["Имя", "Размер", "Время правки"],
      keys: ["Помощь", "Меню", "Просмотр", "Правка", "Копия", "ПереимПер", "НовКтлг", "Удалить", "МенюMC", "Выход"],
      viewKeys: ["Помощь", "Перенос", "Выход", "Hex", "", "", "", "", "", "Выход"],
      editKeys: ["Помощь", "Сохран", "", "", "", "", "", "", "", "Выход"],
      hints: [
        "Совет: Enter открывает файл, Tab переключает панели, F3 — просмотр.",
        "Совет: запустите request.sh, чтобы написать нам запрос.",
        "Совет: F9 открывает меню с языком и скинами.",
        "Совет: Ctrl+O показывает командную оболочку.",
        "Совет: F5 копирует содержимое файла в буфер обмена."
      ],
      info: ["Файл", "Режим", "Ссылок", "Владелец", "Размер", "Изменён", "Файловая система", "Устройство", "Тип", "Свободно"],
      bytes: "байт",
      dirSummary: (n) => `Каталог: ${n} объектов`,
      quitText: "Вы действительно хотите выйти из Midnight Commander?",
      yes: "Да", no: "Нет", ok: "Хорошо", cancel: "Отмена", error: "Ошибка",
      copyTitle: "Копирование", copyTo: (n) => `Копировать «${n}» в:`, clipboard: "буфер обмена",
      copied: (n) => `Скопировано в буфер обмена: ${n}`, copyFailed: "Не удалось записать в буфер обмена.",
      ro: { move: (n) => `Не могу переименовать «${n}»: файловая система только для чтения.`, mkdir: "Не могу создать каталог: файловая система только для чтения.", del: (n) => `Не могу удалить «${n}»: файловая система только для чтения.` },
      delTitle: "Удаление", delAsk: (n) => `Удалить «${n}»?`,
      editRO: "Не могу сохранить файл: доступ запрещён.",
      sendTitle: "Запрос", sendAsk: `Отправить запрос на ${EMAIL}? Откроется ваша почтовая программа.`, send: "Отправить", dontSend: "Не отправлять",
      defaultSubject: "Запрос с сайта", placeholder: "Напишите здесь о вашей задаче.",
      userMenu: "Меню пользователя",
      um: ["Написать запрос (request.sh)", "Обсудить выбранную услугу", "Открыть artintellico.com", "Копировать адрес почты", "Сменить язык"],
      shellHint: "Ctrl+O или Esc — назад к панелям",
      mcHint: "Введите mc, чтобы запустить Midnight Commander.",
      notFound: (c) => `bash: ${c}: команда не найдена`,
      discuss: "Обсудить задачу: ./request.sh",
      skip: "Нажмите любую клавишу, чтобы пропустить",
      helpTitle: "Помощь",
      help: [
        "Midnight Commander для сайта ArtIntelliCo.",
        "",
        "↑ ↓ PgUp PgDn   движение курсора",
        "Enter           открыть каталог или файл",
        "Tab             другая панель",
        "F3 / F4         просмотр / правка",
        "F5              копировать содержимое в буфер обмена",
        "F2              меню пользователя",
        "F9              меню: язык, скины, другие версии",
        "Ctrl+O          командная оболочка",
        "F10             выход",
        "",
        "Чтобы написать нам, запустите request.sh:",
        "откроется mcedit, F2 отправит письмо."
      ],
      shellHelp: ["ls, cd, cat, mcview, mcedit, ./request.sh, mail", "lang uk|en|ru, skin default|dark|mono, clear, exit", "nc, dos, unix, apple, lisa, linux — другие версии"]
    }
  };

  /* Послуги як markdown-файли в services/: заголовок, вступ, розділ «чому», склад, результат */
  const MD = {
    uk: {
      title: "Послуги",
      lead: "Ми не прив'язані до однієї мови програмування чи платформи. Спершу розбираємося, що треба зробити, і лише потім обираємо інструменти. Буває, що найкраща відповідь — готовий сервіс за підпискою; тоді ми так і скажемо, і розробляти нічого не доведеться.",
      open: "Кожна послуга — окремий файл. Відкрийте його через Enter або F3:",
      includes: "Що входить",
      result: "Результат",
      pages: [
        {
          title: "Розробка концепції ІТ-рішення",
          intro: "Допомагаємо зрозуміти, яка система вам потрібна, і записати це так, щоб із документом могли працювати і бізнес, і розробники.",
          head: "Чому варто почати саме з цього",
          why: "Найдорожча помилка в ІТ-проєкті стається до першого рядка коду: команда будує систему під задачу, яку ніхто толком не сформулював. Ми починаємо з розмов із тими, хто в системі працюватиме, — з бухгалтерією, складом, менеджерами. З керівником теж, але не лише з ним.\n\nІноді за підсумком ми радимо нічого не розробляти, а взяти готовий продукт і доналаштувати його. Для нас це нормальний результат.",
          includes: ["інтерв'ю з працівниками й розбір того, як зараз влаштовані процеси", "бізнес-вимоги та опис сценаріїв роботи", "порівняння готових рішень із розробкою на замовлення", "технічне завдання з оцінкою строків і бюджету за етапами"],
          result: "Документ, за яким будь-яка команда — наша чи інша — зможе оцінити роботу й узятися за неї."
        },
        {
          title: "Розробка SaaS-рішень",
          intro: "Проєктуємо й розробляємо SaaS-платформи. Починаємо з першої версії для пілотних клієнтів і доводимо до сервісу, де кожен клієнт має свій простір, тарифи й особистий кабінет.",
          head: "Де в SaaS гроші",
          why: "Не в коді. У тому, наскільки просто новому клієнту зареєструватися, оплатити й почати працювати, не дзвонячи в підтримку. Тому мультитенантність, білінг і права доступу ми закладаємо з першого дня: переробляти їх, коли клієнти вже всередині, коштує в рази дорожче.\n\nПершу версію намагаємося випустити якомога раніше. Справжні користувачі швидко показують, які функції були зайві.",
          includes: ["мультитенантна архітектура з ізоляцією даних клієнтів", "реєстрація, тарифи, підписки й онлайн-оплата", "особисті кабінети, ролі та права доступу", "інтеграції та відкрите API для ваших клієнтів", "масштабування під зростання навантаження"],
          result: "Продукт, який можна продавати за підпискою, а не проєкт, що щоразу впроваджується вручну."
        },
        {
          title: "Веброзробка",
          intro: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси. Робимо під задачу, шаблонів не беремо.",
          head: "Як ми міряємо сайт",
          why: "Заявками й замовленнями. Дизайн у портфоліо тут другорядний. Ще до старту домовляємося, що вважати результатом, і налаштовуємо аналітику до запуску, а не через пів року після нього.\n\nТехнологію добираємо за задачею. Лендингу важка платформа не потрібна, а маркетплейс у конструктор сайтів не вміститься.",
          includes: ["прототип і дизайн інтерфейсів", "frontend, backend і панель адміністрування", "інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидкість завантаження й аналітика", "запуск і супровід"],
          result: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        {
          title: "Мобільні застосунки",
          intro: "Застосунки для iOS та Android разом із серверною частиною й панеллю адміністрування.",
          head: "Коли застосунок не потрібен",
          why: "Застосунок виправданий, якщо клієнт повертається до нього регулярно: робить повторні замовлення, стежить за статусом, накопичує бонуси. Якщо людина заходить раз на рік, зручний мобільний сайт вийде дешевше, і ми скажемо про це до початку робіт.\n\nМіж нативною й кросплатформною розробкою обираємо за бюджетом і тим, наскільки застосунку потрібні камера, геолокація та офлайн-режим.",
          includes: ["застосунки для iOS та Android", "серверна частина та API", "адмінпанель для контенту, замовлень і користувачів", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          result: "Застосунок, що проходить модерацію магазинів і яким ваша команда керує без розробників."
        },
        {
          title: "Рішення зі штучним інтелектом",
          intro: "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів: рішення на базі штучного інтелекту й машинного навчання беруть на себе рутинні кроки, які зараз виконують працівники.",
          head: "ШІ без захвату",
          why: "Ми ставимося до ШІ скептичніше за багатьох. Половину ідей «давайте додамо нейромережу» розв'язує звичайна автоматизація. Але там, де люди годинами розбирають листи, документи й звернення, мовні моделі справді знімають рутину.\n\nПочинаємо з пілота на ваших даних. Цифри точності з'являються до основної розробки, а не після неї.",
          includes: ["ШІ-агенти, які самі проходять рутинні кроки процесу: розбирають заявки, заповнюють CRM, готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "класифікація звернень і пошук у базі знань", "прогнози попиту й аналіз даних", "пілот з оцінкою якості на ваших даних"],
          result: "Конкретний процес, який раніше виконували люди, тепер виконує система, а людина її контролює."
        },
        {
          title: "Розробка CRM та ERP",
          intro: "CRM та ERP, побудовані навколо ваших процесів, а не процеси, підігнані під систему.",
          head: "Коли коробки вже замало",
          why: "Коробкова CRM добра, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину роботи в таблицях, бо система «так не вміє», дешевше зробити своє.\n\nДані переносимо зі старих систем і таблиць. Запускаємо по відділах, щоб робота не зупинялася ні на день.",
          includes: ["модулі продажів, складу, виробництва, фінансів — за потреби", "ролі, права доступу та журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "інтеграція з бухгалтерією, телефонією та поштою"],
          result: "Одна система замість зоопарку таблиць. Керівник бачить стан справ без щотижневих звітів від кожного відділу."
        },
        {
          title: "Хмарні рішення",
          intro: "Переносимо інфраструктуру до Amazon Web Services, повністю або частинами, а потім стежимо, щоб вона працювала й не дорожчала без причини.",
          head: "Хмара не завжди дешевша",
          why: "Власний сервер іноді обходиться дешевше. Хмара виграє, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають підніматися за хвилини, а не за тиждень.\n\nТому переїзд починаємо з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є план відкату.",
          includes: ["аудит поточної інфраструктури й розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервне копіювання та моніторинг", "оптимізація витрат після переїзду"],
          result: "Інфраструктура, яка переживає відмову сервера, і рахунок за хмару, який ви розумієте."
        },
        {
          title: "Інфраструктура компанії на базі Red Hat",
          intro: "Будуємо ІТ-інфраструктуру компанії на Red Hat: сервери на Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
          head: "Навіщо платити за підписку",
          why: "Red Hat обирають, коли інфраструктура має роками працювати й проходити аудит, а не триматися на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом: для Red Hat Enterprise Linux він розрахований на десять років.\n\nІнфраструктуру проєктуємо під ваші навантаження, а конфігурацію серверів описуємо в Ansible. Будь-який сервер перезбирається за сценарієм, а не з пам'яті. Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо розібратися.",
          includes: ["аудит поточних серверів і план переходу", "розгортання Red Hat Enterprise Linux і централізовані оновлення через Red Hat Satellite", "контейнерна платформа OpenShift для ваших застосунків", "автоматизація налаштування й розгортання через Ansible", "єдине керування обліковими записами й доступом (Identity Management)", "моніторинг, резервне копіювання й документація для вашої команди"],
          result: "Інфраструктура, яку можна перевірити, повторити й передати іншій команді, не втративши знань."
        },
        {
          title: "API та інтеграції",
          intro: "Розробляємо API для ваших систем і поєднуємо їх із сервісами, якими ви вже користуєтеся.",
          head: "Найчастіший біль",
          why: "Дані вводять двічі. Замовлення із сайту переносять в облікову систему вручну, оплати звіряють у таблиці. Інтеграція прибирає цю роботу, а разом із нею й помилки.\n\nМоніторинг налаштовуємо окремо. Інтеграції ламаються тихо, коли партнер змінює свій API, і дізнатися про це краще від системи, ніж від клієнта.",
          includes: ["проєктування й документація API", "інтеграція з платіжними системами, службами доставки, CRM та обліком", "обмін даними між внутрішніми системами", "черги й повторні спроби при збоях", "моніторинг і сповіщення"],
          result: "Дані вводяться один раз і самі доходять туди, де потрібні."
        },
        {
          title: "Технічна підтримка",
          intro: "Підтримуємо й розвиваємо ваші ІТ-системи, зокрема ті, що писали не ми.",
          head: "Якщо систему писали не ми",
          why: "Починаємо з аудиту й документації. Без неї будь-яка правка перетворюється на лотерею.\n\nА далі підтримка — це не лише виправлення помилок. Це оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і невеликі доопрацювання по ходу.",
          includes: ["моніторинг доступності та помилок", "виправлення помилок і оновлення безпеки", "резервне копіювання й перевірка відновлення", "доопрацювання та нові функції за планом", "аудит і документація систем від інших підрядників"],
          result: "Система, яка працює, і команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      title: "Services",
      lead: "We aren't tied to one programming language or platform. First we work out what needs doing, and only then pick the tools. Sometimes the best answer is an off-the-shelf subscription service; then we'll say so, and nothing needs to be built.",
      open: "Each service is a separate file. Open it with Enter or F3:",
      includes: "What's included",
      result: "Outcome",
      pages: [
        {
          title: "IT solution concept",
          intro: "We help you figure out which system you actually need and write it down so that both the business and the developers can work from the document.",
          head: "Why start here",
          why: "The most expensive mistake in an IT project happens before the first line of code: a team builds a system for a problem nobody properly defined. We start by talking to the people who'll work in the system: accounting, the warehouse, sales managers. The boss too, but not only the boss.\n\nSometimes we end up advising you to build nothing and configure an existing product instead. We count that as a perfectly good result.",
          includes: ["interviews with staff and a look at how processes run today", "business requirements and user scenarios", "a comparison of ready-made products against custom development", "a specification with time and budget estimates per phase"],
          result: "A document any team, ours or another, can estimate from and get started on."
        },
        {
          title: "SaaS development",
          intro: "We design and build SaaS platforms. We start with a first version for pilot customers and take it to a service where every customer has their own workspace, plan and dashboard.",
          head: "Where the money is in SaaS",
          why: "Not in the code. It's in how easily a new customer can sign up, pay and start working without calling support. That's why we build in multi-tenancy, billing and permissions from day one: reworking them once customers are inside costs several times more.\n\nWe try to ship the first version early. Real users are quick to show which features were never needed.",
          includes: ["multi-tenant architecture with isolated customer data", "sign-up, plans, subscriptions and online payments", "customer dashboards, roles and permissions", "integrations and a public API for your customers", "scaling as load grows"],
          result: "A product you can sell by subscription, not a project that gets rolled out by hand every time."
        },
        {
          title: "Web development",
          intro: "Corporate websites, marketplaces, online stores, booking systems and internal web tools. Built for the task, no templates.",
          head: "How we measure a website",
          why: "In leads and orders. The portfolio shot matters less. Before work starts we agree on what counts as a result, and we set up analytics in time for launch, not six months after it.\n\nThe technology follows the task. A landing page doesn't need a heavy platform, and a marketplace won't fit into a website builder.",
          includes: ["prototype and interface design", "frontend, backend and admin panel", "integrations with payments, delivery, CRM and accounting systems", "SEO groundwork, page speed and analytics", "launch and ongoing support"],
          result: "A web service where you can see how many leads and how much revenue it brings in."
        },
        {
          title: "Mobile apps",
          intro: "iOS and Android apps, together with the server side and the admin panel behind them.",
          head: "When you don't need an app",
          why: "An app is justified when customers come back to it regularly: reordering, tracking a status, collecting loyalty points. If someone visits once a year, a good mobile website is cheaper, and we'll tell you so before any work starts.\n\nNative versus cross-platform is decided by budget and by how much the app relies on the camera, location and offline mode.",
          includes: ["iOS and Android apps", "server side and API", "an admin panel for content, orders and users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          result: "An app that passes store review and that your team runs without a developer."
        },
        {
          title: "AI-powered solutions",
          intro: "We automate business processes with AI agents: solutions built on artificial intelligence and machine learning take over the routine steps your staff handle today.",
          head: "AI without the hype",
          why: "We're more sceptical about AI than most. Half of the \"let's add a neural network\" ideas are solved by ordinary automation. But where people spend hours sorting emails, documents and support requests, language models genuinely take the routine off their plate.\n\nWe start with a pilot on your own data. You get accuracy figures before the main build, not after it.",
          includes: ["AI agents that walk through routine process steps on their own: triaging requests, filling in the CRM, drafting replies to customers", "chatbots and assistants for customers and staff", "document recognition and data extraction", "request classification and knowledge-base search", "demand forecasting and data analysis", "a pilot with quality measured on your data"],
          result: "A specific process that people used to do is now done by the system, with a person keeping it in check."
        },
        {
          title: "CRM and ERP development",
          intro: "CRM and ERP systems built around your processes, rather than processes bent to fit a system.",
          head: "When the box isn't enough",
          why: "Off-the-shelf CRM is fine as long as your process looks standard. When managers run half their work in spreadsheets because the system \"can't do that\", building your own becomes cheaper.\n\nWe migrate data from old systems and spreadsheets. Rollout goes department by department, so work never stops for a day.",
          includes: ["sales, warehouse, production and finance modules, as needed", "roles, permissions and an audit log", "reports and dashboards for management", "data migration from spreadsheets and legacy systems", "integration with accounting, telephony and email"],
          result: "One system instead of a zoo of spreadsheets. Management sees where things stand without weekly reports from every department."
        },
        {
          title: "Cloud solutions",
          intro: "We move your infrastructure to Amazon Web Services, in full or in part, and then make sure it keeps running and doesn't get more expensive for no reason.",
          head: "The cloud isn't always cheaper",
          why: "Your own server can sometimes cost less. The cloud wins when load spikes, when you need fault tolerance, or when new environments should come up in minutes rather than a week.\n\nSo a move starts with an audit and a cost estimate. We migrate in stages, with a rollback plan at every step.",
          includes: ["audit of the current infrastructure and a cost estimate", "AWS architecture and a migration plan", "moving servers, databases and files", "backups and monitoring", "cost optimisation after the move"],
          result: "Infrastructure that survives a server failure, and a cloud bill you actually understand."
        },
        {
          title: "Company infrastructure on Red Hat",
          intro: "We build your company's IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform and automation with Ansible.",
          head: "Why pay for a subscription",
          why: "Companies pick Red Hat when infrastructure has to run for years and pass audits, rather than live in one administrator's head. The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years.\n\nWe design the infrastructure around your workloads and describe server configuration in Ansible. Any server can be rebuilt from a playbook instead of from memory. Red Hat is our partner, so we can also help you sort out subscriptions and vendor support.",
          includes: ["audit of your current servers and a migration plan", "Red Hat Enterprise Linux rollout with centralised updates through Red Hat Satellite", "the OpenShift container platform for your applications", "configuration and deployment automation with Ansible", "central identity and access management (Identity Management)", "monitoring, backups and documentation for your team"],
          result: "Infrastructure you can audit, reproduce and hand over to another team without losing what it knows."
        },
        {
          title: "APIs and integrations",
          intro: "We design APIs for your systems and connect them with the services you already use.",
          head: "The most common pain",
          why: "Data typed in twice. Website orders re-entered into the accounting system by hand, payments reconciled in a spreadsheet. An integration removes that work, and the mistakes go with it.\n\nWe set up monitoring separately. Integrations break quietly when a partner changes their API, and it's better to hear about it from the system than from a customer.",
          includes: ["API design and documentation", "integrations with payment providers, delivery services, CRM and accounting", "data exchange between internal systems", "queues and retries when something fails", "monitoring and alerts"],
          result: "Data is entered once and gets where it needs to go on its own."
        },
        {
          title: "Technical support",
          intro: "We support and keep developing your IT systems, including ones we didn't build.",
          head: "If someone else built it",
          why: "We start with an audit and documentation. Without it, every change is a gamble.\n\nAfter that, support is more than fixing bugs. It's updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way.",
          includes: ["availability and error monitoring", "bug fixes and security updates", "backups and restore testing", "planned improvements and new features", "audit and documentation of systems built by other contractors"],
          result: "A system that works, and a team that knows how it's put together."
        }
      ]
    },
    ru: {
      title: "Услуги",
      lead: "Мы не привязаны к одному языку программирования или платформе. Сначала разбираемся, что нужно сделать, и только потом выбираем инструменты. Бывает, что лучший ответ — готовый сервис по подписке; тогда мы так и скажем, и разрабатывать ничего не придётся.",
      open: "Каждая услуга — отдельный файл. Откройте его через Enter или F3:",
      includes: "Что входит",
      result: "Результат",
      pages: [
        {
          title: "Разработка концепции ИТ-решения",
          intro: "Помогаем понять, какая система вам нужна, и записать это так, чтобы с документом могли работать и бизнес, и разработчики.",
          head: "Почему стоит начать с этого",
          why: "Самая дорогая ошибка в ИТ-проекте случается до первой строки кода: команда строит систему под задачу, которую никто толком не сформулировал. Мы начинаем с разговоров с теми, кто будет в системе работать, — с бухгалтерией, складом, менеджерами. С руководителем тоже, но не только с ним.\n\nИногда по итогам мы советуем ничего не разрабатывать, а взять готовый продукт и донастроить его. Для нас это нормальный результат.",
          includes: ["интервью с сотрудниками и разбор того, как сейчас устроены процессы", "бизнес-требования и описание сценариев работы", "сравнение готовых решений с заказной разработкой", "техническое задание с оценкой сроков и бюджета по этапам"],
          result: "Документ, по которому любая команда — наша или другая — сможет оценить работу и взяться за неё."
        },
        {
          title: "Разработка SaaS-решений",
          intro: "Проектируем и разрабатываем SaaS-платформы. Начинаем с первой версии для пилотных клиентов и доводим до сервиса, где у каждого клиента своё пространство, тарифы и личный кабинет.",
          head: "Где в SaaS деньги",
          why: "Не в коде. В том, насколько просто новому клиенту зарегистрироваться, оплатить и начать работать, не звоня в поддержку. Поэтому мультитенантность, биллинг и права доступа мы закладываем с первого дня: переделывать их, когда клиенты уже внутри, обходится в разы дороже.\n\nПервую версию стараемся выпустить пораньше. Настоящие пользователи быстро показывают, какие функции были лишними.",
          includes: ["мультитенантная архитектура с изоляцией данных клиентов", "регистрация, тарифы, подписки и онлайн-оплата", "личные кабинеты, роли и права доступа", "интеграции и открытое API для ваших клиентов", "масштабирование под рост нагрузки"],
          result: "Продукт, который можно продавать по подписке, а не проект, который каждый раз внедряется вручную."
        },
        {
          title: "Веб-разработка",
          intro: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Делаем под задачу, шаблоны не берём.",
          head: "Как мы меряем сайт",
          why: "Заявками и заказами. Дизайн в портфолио тут вторичен. Ещё до старта договариваемся, что считать результатом, и настраиваем аналитику к запуску, а не через полгода после него.\n\nТехнологию подбираем по задаче. Лендингу тяжёлая платформа не нужна, а маркетплейс в конструктор сайтов не поместится.",
          includes: ["прототип и дизайн интерфейсов", "frontend, backend и панель администрирования", "интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, скорость загрузки и аналитика", "запуск и сопровождение"],
          result: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        {
          title: "Мобильные приложения",
          intro: "Приложения для iOS и Android вместе с серверной частью и панелью администрирования.",
          head: "Когда приложение не нужно",
          why: "Приложение оправдано, если клиент возвращается к нему регулярно: делает повторные заказы, следит за статусом, копит бонусы. Если человек заходит раз в год, удобный мобильный сайт выйдет дешевле, и мы скажем об этом до начала работ.\n\nМежду нативной и кроссплатформенной разработкой выбираем по бюджету и по тому, насколько приложению нужны камера, геолокация и офлайн-режим.",
          includes: ["приложения для iOS и Android", "серверная часть и API", "админ-панель для контента, заказов и пользователей", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          result: "Приложение, которое проходит модерацию магазинов и которым ваша команда управляет без разработчиков."
        },
        {
          title: "Решения с искусственным интеллектом",
          intro: "Автоматизируем бизнес-процессы с помощью ИИ-агентов: решения на базе искусственного интеллекта и машинного обучения берут на себя рутинные шаги, которые сейчас делают сотрудники.",
          head: "ИИ без восторгов",
          why: "Мы относимся к ИИ скептичнее многих. Половину идей «давайте добавим нейросеть» решает обычная автоматизация. Но там, где люди часами разбирают письма, документы и обращения, языковые модели действительно снимают рутину.\n\nНачинаем с пилота на ваших данных. Цифры точности появляются до основной разработки, а не после неё.",
          includes: ["ИИ-агенты, которые сами проходят рутинные шаги процесса: разбирают заявки, заполняют CRM, готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "классификация обращений и поиск по базе знаний", "прогнозы спроса и анализ данных", "пилот с оценкой качества на ваших данных"],
          result: "Конкретный процесс, который раньше делали люди, теперь делает система, а человек её контролирует."
        },
        {
          title: "Разработка CRM и ERP",
          intro: "CRM и ERP, построенные вокруг ваших процессов, а не процессы, подогнанные под систему.",
          head: "Когда коробки уже мало",
          why: "Коробочная CRM хороша, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину работы в таблицах, потому что система «так не умеет», дешевле сделать своё.\n\nДанные переносим из старых систем и таблиц. Запускаем по отделам, чтобы работа не останавливалась ни на день.",
          includes: ["модули продаж, склада, производства, финансов — по необходимости", "роли, права доступа и журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "интеграция с бухгалтерией, телефонией и почтой"],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит состояние дел без еженедельных отчётов от каждого отдела."
        },
        {
          title: "Облачные решения",
          intro: "Переносим инфраструктуру в Amazon Web Services, целиком или частями, а потом следим, чтобы она работала и не дорожала без причины.",
          head: "Облако не всегда дешевле",
          why: "Свой сервер иногда обходится дешевле. Облако выигрывает, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны подниматься за минуты, а не за неделю.\n\nПоэтому переезд начинаем с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть план отката.",
          includes: ["аудит текущей инфраструктуры и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервное копирование и мониторинг", "оптимизация расходов после переезда"],
          result: "Инфраструктура, которая переживает отказ сервера, и счёт за облако, который вы понимаете."
        },
        {
          title: "Инфраструктура компании на базе Red Hat",
          intro: "Строим ИТ-инфраструктуру компании на Red Hat: серверы на Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
          head: "Зачем платить за подписку",
          why: "Red Hat выбирают, когда инфраструктура должна годами работать и проходить аудит, а не держаться на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом: у Red Hat Enterprise Linux он рассчитан на десять лет.\n\nИнфраструктуру проектируем под ваши нагрузки, а конфигурацию серверов описываем в Ansible. Любой сервер пересобирается по сценарию, а не по памяти. Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем разобраться.",
          includes: ["аудит текущих серверов и план перехода", "развёртывание Red Hat Enterprise Linux и централизованные обновления через Red Hat Satellite", "контейнерная платформа OpenShift для ваших приложений", "автоматизация настройки и развёртывания через Ansible", "единое управление учётными записями и доступом (Identity Management)", "мониторинг, резервное копирование и документация для вашей команды"],
          result: "Инфраструктура, которую можно проверить, повторить и передать другой команде, не потеряв знаний."
        },
        {
          title: "API и интеграции",
          intro: "Разрабатываем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          head: "Самая частая боль",
          why: "Данные вводят дважды. Заказ с сайта переносят в учётную систему руками, оплаты сверяют в таблице. Интеграция убирает эту работу, а вместе с ней и ошибки.\n\nМониторинг настраиваем отдельно. Интеграции ломаются тихо, когда партнёр меняет свой API, и узнать об этом лучше от системы, чем от клиента.",
          includes: ["проектирование и документация API", "интеграция с платёжными системами, службами доставки, CRM и учётом", "обмен данными между внутренними системами", "очереди и повторные попытки при сбоях", "мониторинг и оповещения"],
          result: "Данные вводятся один раз и сами доходят туда, где нужны."
        },
        {
          title: "Техническая поддержка",
          intro: "Поддерживаем и развиваем ваши ИТ-системы, в том числе те, что писали не мы.",
          head: "Если систему писали не мы",
          why: "Начинаем с аудита и документации. Без неё любая правка превращается в лотерею.\n\nА дальше поддержка — это не только исправление ошибок. Это обновления, закрывающие уязвимости, мониторинг, который замечает проблему раньше пользователей, и небольшие доработки по ходу.",
          includes: ["мониторинг доступности и ошибок", "исправление ошибок и обновления безопасности", "резервное копирование и проверка восстановления", "доработки и новые функции по плану", "аудит и документация систем от других подрядчиков"],
          result: "Система, которая работает, и команда, которая знает, как она устроена."
        }
      ]
    }
  };

  const LANGS = ["uk", "en", "ru"];
  const LANG_NAMES = { uk: "Українська", en: "English", ru: "Русский" };
  const VERSIONS = [["Norton Commander", "/"], ["DOS", "/dos/"], ["UNIX", "/unix/"], ["Apple ][", "/apple/"], ["Apple Lisa", "/lisa/"], ["Linux 1996", "/linux/"], ["Windows 3.11", "/win31/"], ["AI", "/ai/"]];
  const SVC = ["concept", "saas", "web", "mobile", "ai", "crm-erp", "cloud", "redhat", "api", "support"];

  /* Скіни: роль → [колір тексту, колір фону] */
  const SKINS = {
    default: { panel: [7, 4], frame: [7, 4], dir: [15, 4], exe: [10, 4], header: [11, 4], sel: [0, 6], path: [0, 6], menu: [0, 6], menuSel: [15, 0], keynum: [7, 0], keylbl: [0, 6], cmd: [7, 0], hint: [7, 0], dialog: [0, 7], dtitle: [4, 7], dfocus: [0, 6], error: [15, 1], efocus: [0, 7], view: [7, 4], viewHead: [0, 6], edit: [7, 4], editHead: [0, 6], h1: [11, 4], h2: [14, 4], li: [10, 4], quote: [6, 4], link: [14, 4], shell: [7, 0], shade: [8, 0] },
    dark: { panel: [7, 0], frame: [8, 0], dir: [15, 0], exe: [10, 0], header: [11, 0], sel: [0, 7], path: [0, 7], menu: [7, 8], menuSel: [0, 7], keynum: [7, 0], keylbl: [0, 8], cmd: [7, 0], hint: [8, 0], dialog: [7, 8], dtitle: [15, 8], dfocus: [0, 7], error: [15, 1], efocus: [0, 7], view: [7, 0], viewHead: [0, 7], edit: [7, 0], editHead: [0, 7], h1: [11, 0], h2: [14, 0], li: [10, 0], quote: [8, 0], link: [14, 0], shell: [7, 0], shade: [8, 0] },
    mono: { panel: [7, 0], frame: [7, 0], dir: [15, 0], exe: [15, 0], header: [15, 0], sel: [0, 7], path: [0, 7], menu: [0, 7], menuSel: [7, 0], keynum: [7, 0], keylbl: [0, 7], cmd: [7, 0], hint: [7, 0], dialog: [0, 7], dtitle: [0, 7], dfocus: [7, 0], error: [0, 7], efocus: [7, 0], view: [7, 0], viewHead: [0, 7], edit: [7, 0], editHead: [0, 7], h1: [15, 0], h2: [15, 0], li: [15, 0], quote: [7, 0], link: [15, 0], shell: [7, 0], shade: [8, 0] }
  };

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
  let skin = store.get("aic-mc-skin");
  if (!SKINS[skin]) skin = "default";
  const t = () => I18N[lang];
  const m = () => MX[lang];
  const S = (role) => SKINS[skin][role];
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };
  const bytes = (s) => new TextEncoder().encode(s).length;
  const siteUrl = () => `${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/`;

  /* ---------- Файлова система ---------- */
  const file = (text, extra = {}) => ({ type: "file", text, mode: "-rw-r--r--", ...extra });
  const dir = (kids) => ({ type: "dir", kids, mode: "drwxr-xr-x" });
  const md = {
    readme: () => {
      const s = t();
      return [`# ${s.heroTitle}`, "", s.heroText, "", `## ${s.heroLead}:`, "", ...s.phrases.map((p) => `- ${p}`), "", "---", "", s.copyright, s.legal, s.slogan, `${s.source}: ${siteUrl()}`, ""].join("\n");
    },
    service: (i) => {
      const D = MD[lang];
      const p = D.pages[i];
      return [`# ${p.title}`, "", p.intro, "", `## ${p.head}`, "", p.why, "", `## ${D.includes}`, "", ...p.includes.map((x) => `- ${x}`), "", `## ${D.result}`, "", p.result, "", `> ${m().discuss}`, ""].join("\n");
    },
    services: () => {
      const D = MD[lang];
      return [`# ${D.title}`, "", D.lead, "", D.open, "", ...SVC.map((s, i) => `- ${s}.md — ${D.pages[i].title}`), "", `> ${m().discuss}`, ""].join("\n");
    },
    partners: () => [t().partnersTitle, "", ...PARTNERS.map((p) => `  * ${p}${p === "UNIO24" ? "  https://unio24.com/" : ""}`), ""].join("\n"),
    vcard: () => ["BEGIN:VCARD", "VERSION:3.0", "FN:ArtIntelliCo", "ORG:ArtIntelliCo", `EMAIL;TYPE=work:${EMAIL}`, `URL:${siteUrl()}`, `NOTE:${t().contactText}`, "END:VCARD", ""].join("\n"),
    request: () => ["#!/bin/sh", `# ${t().contactTitle}`, "", "mcedit ~/request.txt && \\", `  mail -s "$(head -1 ~/request.txt)" ${EMAIL} < ~/request.txt`, ""].join("\n"),
    bashrc: () => ["# ~/.bashrc", "export EDITOR=mcedit", "export PAGER=less", "alias ll='ls -l'", "PS1='\\u@\\h:\\w\\$ '", ""].join("\n"),
    motd: () => ["", "ArtIntelliCo GNU/Linux", "", t().heroTitle, ""].join("\n")
  };
  const ROOT = dir({
    bin: dir({}), etc: dir({ motd: file(md.motd) }), tmp: dir({}), usr: dir({}), var: dir({}),
    home: dir({
      guest: dir({
        ".bashrc": file(md.bashrc),
        artintellico: dir({
          "README.md": file(md.readme),
          "contact.vcf": file(md.vcard),
          "partners.txt": file(md.partners),
          "request.sh": file(md.request, { mode: "-rwxr-xr-x", exe: true }),
          services: dir({ "README.md": file(md.services), ...Object.fromEntries(SVC.map((s, i) => [s + ".md", file(() => md.service(i), { svc: i })])) })
        })
      })
    })
  });
  const norm = (p, base) => {
    let path = p.replace(/^~(?=\/|$)/, HOME);
    if (!path.startsWith("/")) path = base + "/" + path;
    const out = [];
    path.split("/").forEach((s) => { if (!s || s === ".") return; if (s === "..") out.pop(); else out.push(s); });
    return "/" + out.join("/");
  };
  const lookup = (abs) => { let n = ROOT; for (const s of abs.split("/").filter(Boolean)) { if (!n || n.type !== "dir") return null; n = n.kids[s]; } return n || null; };
  const short = (abs) => (abs === HOME ? "~" : abs.startsWith(HOME + "/") ? "~" + abs.slice(HOME.length) : abs);
  const sizeOf = (n) => (n.type === "dir" ? 4096 : bytes(n.text()));
  const mtime = () => { const d = new Date(); return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][d.getMonth()]} ${String(d.getDate()).padStart(2)} 09:00`; };
  function entries(abs) {
    const n = lookup(abs);
    const kids = Object.entries(n.kids).map(([name, node]) => ({ name, node, abs: abs === "/" ? "/" + name : abs + "/" + name }));
    const dirs = kids.filter((k) => k.node.type === "dir").sort((a, b) => a.name.localeCompare(b.name));
    const files = kids.filter((k) => k.node.type !== "dir").sort((a, b) => a.name.localeCompare(b.name));
    const up = abs === "/" ? [] : [{ name: "..", node: { type: "dir", mode: "drwxr-xr-x" }, abs: norm("..", abs), up: true }];
    return [...up, ...dirs, ...files];
  }

  /* ---------- Екран: буфер клітинок ---------- */
  const scr = $("scr");
  let C = 80, R = 25, CW = 8, CH = 16, FS = 16;
  let buf = [];
  let hits = [];
  function measure() {
    const W = innerWidth, H = document.body.clientHeight || innerHeight; /* під футером сайту */
    if (W >= 1720 && H >= 1000) { FS = 24; CW = 12; CH = 24; }
    else if (W >= 1100 && H >= 640) { FS = 20; CW = 10; CH = 20; }
    else { FS = 16; CW = 8; CH = 16; }
    C = Math.max(40, Math.floor(W / CW));
    R = Math.max(16, Math.floor(H / CH));
    Object.assign(scr.style, {
      font: `${FS}px/${CH}px "TCon${FS}", monospace`,
      left: Math.floor((W - C * CW) / 2) + "px",
      top: Math.floor((H - R * CH) / 2) + "px",
      width: C * CW + "px",
      height: R * CH + "px"
    });
  }
  function cls(role = "shell") { const [f, b] = S(role); buf = Array.from({ length: R * C }, () => ({ c: " ", f, b })); hits = []; modalFrom = 0; }
  function put(r, c, text, role, extra) {
    if (r < 0 || r >= R) return c;
    const [f, b] = Array.isArray(role) ? role : S(role);
    for (const ch of String(text)) {
      if (c >= C) break;
      if (c >= 0) buf[r * C + c] = { c: ch, f, b, k: extra };
      c++;
    }
    return c;
  }
  function fill(r, c, w, h, role, ch = " ") { for (let y = r; y < r + h; y++) put(y, c, ch.repeat(Math.max(0, w)), role); }
  function box(r, c, w, h, role) {
    put(r, c, "┌" + "─".repeat(w - 2) + "┐", role);
    for (let y = r + 1; y < r + h - 1; y++) { put(y, c, "│", role); put(y, c + w - 1, "│", role); }
    put(r + h - 1, c, "└" + "─".repeat(w - 2) + "┘", role);
  }
  let modalFrom = 0;
  function hit(r, c0, c1, act, dbl) { hits.push({ r, c0, c1, act, dbl }); }
  const fit = (s, w) => { const a = [...String(s)]; return a.length > w ? a.slice(0, Math.max(0, w - 1)).join("") + "~" : a.join("").padEnd(w); };
  function wrap(text, w) {
    const out = [];
    String(text).split("\n").forEach((line) => {
      if (!line) { out.push(""); return; }
      let cur = "";
      for (const word of line.split(/(\s+)/)) {
        if ([...(cur + word)].length > w) {
          if (cur.trim()) out.push(cur.replace(/\s+$/, ""));
          cur = word.trimStart();
          while ([...cur].length > w) { out.push([...cur].slice(0, w).join("")); cur = [...cur].slice(w).join(""); }
        } else cur += word;
      }
      out.push(cur);
    });
    return out;
  }
  const escH = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  function flush() {
    let html = "";
    for (let r = 0; r < R; r++) {
      let run = "", key = null;
      for (let c = 0; c < C; c++) {
        const cell = buf[r * C + c];
        const k = `f${cell.f} b${cell.b}${cell.k ? " " + cell.k : ""}`;
        if (k !== key) { if (key) html += `<span class="${key}">${escH(run)}</span>`; run = ""; key = k; }
        run += cell.c;
      }
      html += `<span class="${key}">${escH(run)}</span>` + (r < R - 1 ? "\n" : "");
    }
    scr.innerHTML = html;
  }

  /* ---------- Стан ---------- */
  let mode = "boot";          // boot | panels | view | edit | shell
  let mcRunning = false;
  let active = 0;
  let single = false;
  const panels = [
    { path: SITE_DIR, cur: 0, top: 0, mode: "list", format: "full" },
    { path: SITE_DIR + "/services", cur: 0, top: 0, mode: "quick", qtop: 0 }
  ];
  let cmd = "";
  let hintIx = 0;
  let hintOverride = "";
  let menu = null;            // { i, sel }
  let dialog = null;          // { title, lines, buttons, focus, error }
  let viewer = null;          // { abs, top, wrap, hex }
  let editor = null;
  const shellLog = [];
  let shellCmd = "";
  const history = [];
  let hIx = 0;

  const P = () => panels[active];
  const curEntry = (p = panels[0]) => entries(p.path)[p.cur];

  /* ---------- Малювання ---------- */
  function draw() {
    if (mode === "boot") return;
    if (mode === "view") return drawViewer();
    if (mode === "edit") return drawEditor();
    if (mode === "shell") return drawShell();
    single = C < 72;
    cls("cmd");
    drawMenubar();
    const H = R - 4;
    if (single) drawPanel(0, 0, C, H);
    else {
      const w0 = Math.floor(C / 2);
      drawPanel(0, 0, w0, H);
      drawPanel(1, w0, C - w0, H);
    }
    put(R - 3, 0, fit(hintOverride || m().hints[hintIx], C), "hint");
    const pr = `guest@${HOST}:${short(P().mode === "list" ? P().path : panels[0].path)}$ `;
    const end = put(R - 2, 0, fit(pr + cmd, C), "cmd");
    const cc = Math.min(C - 1, [...(pr + cmd)].length);
    const cell = buf[(R - 2) * C + cc];
    buf[(R - 2) * C + cc] = { ...cell, k: "blink", f: S("cmd")[1], b: S("cmd")[0] };
    hit(R - 2, 0, C, () => $("ki").focus());
    drawKeybar(m().keys, fkey);
    if (menu) drawMenu();
    if (dialog) drawDialog();
    flush();
    updateSr();
  }

  function drawMenubar() {
    fill(0, 0, C, 1, "menu");
    let c = 2;
    m().menu.forEach((label, i) => {
      const s = ` ${label} `;
      const c0 = c;
      c = put(0, c, s, menu && menu.i === i ? "menuSel" : "menu") + 1;
      hit(0, c0, c, () => openMenu(i));
    });
  }

  function drawKeybar(labels, act) {
    /* На вузькому екрані лишаються п'ять головних клавіш, інакше підписи нечитабельні */
    const keys = labels.map((l, i) => i).filter((i) => C >= 72 || (labels[i] && [1, 2, 3, 8, 9].includes(i)));
    const w = Math.floor(C / keys.length);
    keys.forEach((i, k) => {
      const c0 = k * w;
      const wi = k === keys.length - 1 ? C - c0 : w;
      const n = String(i + 1);
      put(R - 1, c0, n, "keynum");
      put(R - 1, c0 + n.length, fit(labels[i], wi - n.length), "keylbl");
      hit(R - 1, c0, c0 + wi, () => act(i + 1));
    });
  }

  function drawPanel(ix, x, w, H) {
    const p = panels[ix];
    const isActive = ix === active;
    fill(1, x, w, H, "panel");
    box(1, x, w, H, "frame");
    if (p.mode === "list") drawList(p, ix, x, w, H, isActive);
    else if (p.mode === "quick") drawQuick(p, ix, x, w, H, isActive);
    else drawInfo(p, ix, x, w, H, isActive);
    hit(1, x, x + w, () => { active = ix; draw(); });
  }

  function header(x, w, title, isActive) {
    put(1, x + 1, "<─", "frame");
    put(1, x + w - 6, ".[^]>", "frame");
    const room = w - 10;
    const s = ` ${title} `;
    put(1, x + 3, [...s].length > room ? " ~" + [...s].slice(-room + 2).join("") : s, isActive ? "path" : "frame");
  }

  function drawList(p, ix, x, w, H, isActive) {
    const list = entries(p.path);
    p.cur = Math.max(0, Math.min(p.cur, list.length - 1));
    header(x, w, short(p.path), isActive);
    const full = p.format === "full" && w >= 36;
    const nameW = full ? w - 2 - 1 - 7 - 1 - 12 : w - 2;
    const sep = full ? [x + 1 + nameW, x + 1 + nameW + 8] : [];
    put(2, x + 1, fit(center(m().cols[0], nameW), nameW), "header");
    if (full) {
      put(2, sep[0], "│", "frame"); put(2, sep[0] + 1, fit(center(m().cols[1], 7), 7), "header");
      put(2, sep[1], "│", "frame"); put(2, sep[1] + 1, fit(center(m().cols[2], 12), 12), "header");
    }
    const rows = H - 5;
    if (p.cur < p.top) p.top = p.cur;
    if (p.cur >= p.top + rows) p.top = p.cur - rows + 1;
    for (let i = 0; i < rows; i++) {
      const r = 3 + i;
      const e = list[p.top + i];
      sep.forEach((sx) => put(r, sx, "│", "frame"));
      if (!e) continue;
      const isDir = e.node.type === "dir";
      const prefix = isDir ? "/" : e.node.exe ? "*" : " ";
      const role = isActive && p.top + i === p.cur ? "sel" : isDir ? "dir" : e.node.exe ? "exe" : "panel";
      put(r, x + 1, fit(prefix + e.name, nameW), role);
      if (full) {
        put(r, sep[0], "│", role === "sel" ? "sel" : "frame");
        put(r, sep[0] + 1, (e.up ? "UP--DIR" : String(sizeOf(e.node))).padStart(7), role);
        put(r, sep[1], "│", role === "sel" ? "sel" : "frame");
        put(r, sep[1] + 1, fit(mtime(), 12), role);
      }
      const k = p.top + i;
      hit(r, x + 1, x + w - 1, () => {
        const already = active === ix && p.cur === k;
        active = ix; p.cur = k;
        syncQuick();
        if (already && coarse) open(); else draw();
      }, () => { active = ix; p.cur = k; open(); });
    }
    put(1 + H - 3, x, "├" + "─".repeat(w - 2) + "┤", "frame");
    sep.forEach((sx) => put(1 + H - 3, sx, "┴", "frame"));
    const e = list[p.cur];
    if (e) put(1 + H - 2, x + 1, fit((e.node.type === "dir" ? "/" : "") + e.name + (e.up ? "" : "  " + sizeOf(e.node) + " " + m().bytes), w - 2), "panel");
    put(1 + H - 1, x + w - 18, " 40G/40G (99%) ", "frame");
  }
  const center = (s, w) => { const n = [...s].length; const l = Math.max(0, Math.floor((w - n) / 2)); return " ".repeat(l) + s; };

  function mdRole(line) {
    if (/^# /.test(line)) return "h1";
    if (/^## /.test(line)) return "h2";
    if (/^\s*[-*] /.test(line)) return "li";
    if (/^> /.test(line)) return "quote";
    return "panel";
  }

  /* Markdown з підсвіткою: роль береться з вихідного рядка, перенесений пункт списку зберігає відступ */
  function mdLines(text, w) {
    const out = [];
    String(text).split("\n").forEach((line) => {
      const role = mdRole(line);
      if (!w) { out.push({ t: line, role }); return; }
      const lead = role === "li" ? line.match(/^\s*[-*] /) : role === "quote" ? line.match(/^> /) : null;
      const pre = lead ? lead[0] : "";
      const pad = " ".repeat([...pre].length);
      wrap(line.slice(pre.length), Math.max(8, w - pad.length)).forEach((b, k) => out.push({ t: (k ? pad : pre) + b, role }));
    });
    return out;
  }

  function linkHits(r, c, text) {
    [EMAIL, location.origin + "/" + (lang === "uk" ? "" : lang + "/") + "classic/", "https://unio24.com/"].forEach((u) => {
      const i = text.indexOf(u);
      if (i >= 0) {
        const c0 = c + [...text.slice(0, i)].length;
        const c1 = c0 + u.length;
        for (let k = c0; k < Math.min(c1, C); k++) { const cell = buf[r * C + k]; buf[r * C + k] = { ...cell, f: S("link")[0] }; }
        hit(r, c0, c1, () => (u === EMAIL ? (location.href = AIC.mailto("mailto:" + EMAIL)) : window.open(u, "_blank", "noopener")));
      }
    });
  }

  function drawQuick(p, ix, x, w, H, isActive) {
    const e = curEntry(panels[0]);
    header(x, w, e ? e.name : "", isActive);
    if (!e) return;
    let lines;
    if (e.node.type === "dir") {
      const kids = e.up ? [] : entries(e.abs).filter((k) => !k.up);
      lines = e.up ? [] : [m().dirSummary(kids.length), "", ...kids.map((k) => (k.node.type === "dir" ? "/" : " ") + k.name)];
    } else lines = /\.md$/.test(e.name) ? mdLines(e.node.text(), w - 2) : wrap(e.node.text(), w - 2);
    const rows = H - 2;
    p.qtop = Math.max(0, Math.min(p.qtop || 0, Math.max(0, lines.length - rows)));
    lines.slice(p.qtop, p.qtop + rows).forEach((l, i) => {
      const text = typeof l === "string" ? l : l.t;
      put(2 + i, x + 1, fit(text, w - 2), typeof l === "string" ? "panel" : l.role);
      linkHits(2 + i, x + 1, text);
    });
  }

  function drawInfo(p, ix, x, w, H, isActive) {
    const e = curEntry(panels[0]);
    header(x, w, m().rightModes[2], isActive);
    const L = m().info;
    put(2, x + 1, fit(center("Midnight Commander 4.8.30", w - 2), w - 2), "header");
    put(3, x, "├" + "─".repeat(w - 2) + "┤", "frame");
    if (!e) return;
    const rows = [
      [L[0], e.name], [L[1], `${e.node.mode} (${e.node.exe ? "0755" : e.node.type === "dir" ? "0755" : "0644"})`], [L[2], e.node.type === "dir" ? "2" : "1"],
      [L[3], "guest/guest"], [L[4], `${e.up ? 4096 : sizeOf(e.node)} ${m().bytes}`], [L[5], mtime()],
      [L[6], "/home"], [L[7], "/dev/sda1"], [L[8], "ext4"], [L[9], "40G (99%)"]
    ];
    rows.forEach(([k, v], i) => put(4 + i, x + 1, fit(`${k}: ${v}`, w - 2), "panel"));
  }

  /* ---------- Меню F9 ---------- */
  function menuItems(i) {
    const mm = m();
    if (i === 0) return [
      { label: mm.leftItems[0], check: panels[0].format === "full", act: () => { panels[0].format = "full"; } },
      { label: mm.leftItems[1], check: panels[0].format === "brief", act: () => { panels[0].format = "brief"; } },
      { sep: true },
      { label: mm.leftItems[2], key: "C-r", act: () => {} }
    ];
    if (i === 1) return [
      { label: mm.fileItems[0], key: "F3", act: () => fkey(3) },
      { label: mm.fileItems[1], key: "F4", act: () => fkey(4) },
      { label: mm.fileItems[2], key: "F5", act: () => fkey(5) },
      { label: mm.fileItems[3], key: "F6", act: () => fkey(6) },
      { label: mm.fileItems[4], key: "F7", act: () => fkey(7) },
      { label: mm.fileItems[5], key: "F8", act: () => fkey(8) },
      { sep: true },
      { label: mm.fileItems[6], key: "F10", act: () => fkey(10) }
    ];
    if (i === 2) return [
      { label: mm.cmdItems[0], key: "F2", act: userMenu },
      { label: mm.cmdItems[1], act: () => openEditor() },
      { label: mm.cmdItems[2], act: () => window.open(siteUrl(), "_blank", "noopener") },
      { label: mm.cmdItems[3], key: "C-o", act: toggleShell },
      { sep: true },
      { head: mm.versions },
      ...VERSIONS.map(([n, u]) => ({ label: n, act: () => { location.href = u; } }))
    ];
    if (i === 3) return [
      ...LANGS.map((l) => ({ label: LANG_NAMES[l], check: l === lang, act: () => setLang(l) })),
      { sep: true },
      ...Object.keys(SKINS).map((k) => ({ label: `${mm.skins}: ${k}`, check: k === skin, act: () => setSkin(k) }))
    ];
    return mm.rightModes.map((label, k) => ({ label, check: panels[1].mode === ["list", "quick", "info"][k], act: () => { panels[1].mode = ["list", "quick", "info"][k]; } }));
  }
  function openMenu(i) {
    menu = { i, sel: menuItems(i).findIndex((it) => !it.sep && !it.head) };
    draw();
  }
  function drawMenu() {
    const items = menuItems(menu.i);
    const w = Math.min(C - 2, Math.max(...items.map((it) => [...(it.label || it.head || "")].length + (it.key ? it.key.length + 2 : 0))) + 6);
    let x = 2;
    for (let k = 0; k < menu.i; k++) x += [...m().menu[k]].length + 3;
    x = Math.min(x, C - w - 1);
    const h = items.length + 2;
    fill(1, x, w, h, "menu");
    box(1, x, w, h, "menu");
    items.forEach((it, k) => {
      const r = 2 + k;
      if (it.sep) { put(r, x, "├" + "─".repeat(w - 2) + "┤", "menu"); return; }
      if (it.head) { put(r, x + 1, fit(" " + it.head, w - 2), "dtitle"); return; }
      const role = k === menu.sel ? "menuSel" : "menu";
      const left = `${it.check ? "√" : " "} ${it.label}`;
      put(r, x + 1, fit(left, w - 2), role);
      if (it.key) put(r, x + w - 2 - it.key.length, it.key, role);
      hit(r, x, x + w, () => { menu = null; it.act(); draw(); });
    });
  }
  function menuKey(key) {
    const items = menuItems(menu.i);
    const step = (d) => { let k = menu.sel; do { k = (k + d + items.length) % items.length; } while (items[k].sep || items[k].head); menu.sel = k; };
    if (key === "ArrowDown") step(1);
    else if (key === "ArrowUp") step(-1);
    else if (key === "ArrowRight") openMenu((menu.i + 1) % 5);
    else if (key === "ArrowLeft") openMenu((menu.i + 4) % 5);
    else if (key === "Escape" || key === "F9" || key === "F10") menu = null;
    else if (key === "Enter") { const it = items[menu.sel]; menu = null; it.act(); }
    draw();
  }

  /* ---------- Діалоги ---------- */
  function ask(title, text, buttons, error = false) {
    dialog = { title, text, buttons, focus: 0, error };
    draw();
  }
  function drawDialog() {
    modalFrom = hits.length;
    if (dialog.list) return drawListDialog();
    const d = dialog;
    const roleBg = d.error ? "error" : "dialog";
    const roleFocus = d.error ? "efocus" : "dfocus";
    const w = Math.min(C - 4, Math.max(36, Math.min(64, [...d.text].length + 8)));
    const lines = wrap(d.text, w - 6);
    const h = lines.length + 6;
    const x = Math.floor((C - w) / 2), y = Math.max(1, Math.floor((R - h) / 2) - 1);
    fill(y, x, w, h, roleBg);
    for (let r = y + 1; r <= y + h; r++) put(r, x + w, "  ", "shade");
    put(y + h, x + 2, " ".repeat(w), "shade");
    box(y + 1, x + 1, w - 2, h - 2, roleBg);
    const tt = ` ${d.title} `;
    put(y + 1, x + Math.floor((w - [...tt].length) / 2), tt, d.error ? roleBg : "dtitle");
    lines.forEach((l, i) => put(y + 2 + i, x + 3, l, roleBg));
    const labels = d.buttons.map((b, i) => (i === 0 ? `[< ${b.label} >]` : `[ ${b.label} ]`));
    const total = labels.reduce((a, l) => a + [...l].length + 1, -1);
    let c = x + Math.max(2, Math.floor((w - total) / 2));
    labels.forEach((l, i) => {
      const c0 = c;
      c = put(y + h - 3, c, l, i === d.focus ? roleFocus : roleBg) + 1;
      hit(y + h - 3, c0, c, () => { dialog = null; (d.buttons[i].act || (() => {}))(); draw(); });
    });
    hit(y, x, x + w, () => {});
  }
  function dialogKey(key) {
    const d = dialog;
    if (key === "ArrowRight" || key === "Tab") d.focus = (d.focus + 1) % d.buttons.length;
    else if (key === "ArrowLeft") d.focus = (d.focus - 1 + d.buttons.length) % d.buttons.length;
    else if (key === "Escape") { dialog = null; const c = d.buttons.find((b) => b.cancel); if (c && c.act) c.act(); }
    else if (key === "Enter") { dialog = null; (d.buttons[d.focus].act || (() => {}))(); }
    draw();
  }
  const errorBox = (text) => ask(m().error, text, [{ label: m().ok, cancel: true }], true);

  /* ---------- Дії над файлами ---------- */
  function open() {
    const p = P();
    if (p.mode !== "list") return;
    const e = curEntry(p);
    if (!e) return;
    if (e.node.type === "dir") {
      const from = p.path;
      p.path = e.abs;
      p.top = 0;
      const list = entries(p.path);
      const back = list.findIndex((x) => x.abs === from);
      p.cur = e.up && back >= 0 ? back : 0;
      syncQuick();
      draw();
      return;
    }
    if (e.node.exe) return openEditor();
    openViewer(e.abs);
  }
  function syncQuick() { panels[1].qtop = 0; }

  function fkey(n) {
    const p = P();
    const e = p.mode === "list" ? curEntry(p) : curEntry(panels[0]);
    const name = e ? e.name : "";
    switch (n) {
      case 1: return ask(m().helpTitle, m().help.join("\n"), [{ label: m().ok, cancel: true }]);
      case 2: return userMenu();
      case 3: if (e && e.node.type !== "dir") openViewer(e.abs); return;
      case 4: if (e && e.node.type !== "dir") { if (e.node.exe) openViewer(e.abs); else openEditor(e.abs); } return;
      case 5: if (!e || e.up) return;
      return ask(m().copyTitle, `${m().copyTo(name)}\n[${m().clipboard}]`, [
        { label: m().ok, act: () => copyText(e.node.type === "dir" ? entries(e.abs).filter((k) => !k.up).map((k) => k.name).join("\n") : e.node.text(), name) },
        { label: m().cancel, cancel: true }
      ]);
      case 6: if (e && !e.up) errorBox(m().ro.move(name)); return;
      case 7: return errorBox(m().ro.mkdir);
      case 8: if (!e || e.up) return;
      return ask(m().delTitle, m().delAsk(name), [{ label: m().yes, act: () => errorBox(m().ro.del(name)) }, { label: m().no, cancel: true }], true);
      case 9: return openMenu(0);
      case 10: return ask("Midnight Commander", m().quitText, [{ label: m().yes, act: quitMc }, { label: m().no, cancel: true }]);
    }
  }

  async function copyText(text, name) {
    try { await navigator.clipboard.writeText(text); hintOverride = m().copied(name); sr(hintOverride); }
    catch { errorBox(m().copyFailed); }
    draw();
  }

  function userMenu() {
    const e = curEntry(panels[0]);
    const svc = e && e.node.svc !== undefined ? e.node.svc : (P().mode === "list" && curEntry(P()) && curEntry(P()).node.svc);
    const um = m().um;
    const items = [
      { label: um[0], act: () => openEditor() },
      ...(svc !== undefined && svc !== null ? [{ label: um[1], act: () => openEditor(null, MD[lang].pages[svc].title) }] : []),
      { label: um[2], act: () => window.open(siteUrl(), "_blank", "noopener") },
      { label: um[3], act: () => copyText(EMAIL, EMAIL) },
      { label: um[4], act: () => setLang(LANGS[(LANGS.indexOf(lang) + 1) % 3]) }
    ];
    menu = null;
    dialog = { title: m().userMenu, text: "", buttons: [], focus: 0, list: items, sel: 0 };
    draw();
  }

  /* Меню користувача — діалог зі списком */
  function drawListDialog() {
    const d = dialog;
    const w = Math.min(C - 4, Math.max(...d.list.map((it) => [...it.label].length)) + 10);
    const h = d.list.length + 4;
    const x = Math.floor((C - w) / 2), y = Math.max(1, Math.floor((R - h) / 2) - 1);
    fill(y, x, w, h, "dialog");
    for (let r = y + 1; r <= y + h; r++) put(r, x + w, "  ", "shade");
    put(y + h, x + 2, " ".repeat(w), "shade");
    box(y + 1, x + 1, w - 2, h - 2, "dialog");
    const tt = ` ${d.title} `;
    put(y + 1, x + Math.floor((w - [...tt].length) / 2), tt, "dtitle");
    d.list.forEach((it, k) => {
      put(y + 2 + k, x + 2, fit(` ${it.label}`, w - 4), k === d.sel ? "dfocus" : "dialog");
      hit(y + 2 + k, x + 2, x + w - 2, () => { dialog = null; it.act(); draw(); });
    });
  }

  /* ---------- mcview ---------- */
  function openViewer(abs) { viewer = { abs, top: 0, wrap: true, hex: false }; mode = "view"; draw(); sr(lookup(abs).text()); }
  function viewerLines() {
    const n = lookup(viewer.abs);
    const text = n.text();
    if (viewer.hex) {
      const b = new TextEncoder().encode(text);
      const per = C >= 78 ? 16 : 8;
      const out = [];
      for (let i = 0; i < b.length; i += per) {
        const chunk = [...b.slice(i, i + per)];
        out.push(i.toString(16).toUpperCase().padStart(8, "0") + "  " + chunk.map((x) => x.toString(16).toUpperCase().padStart(2, "0")).join(" ").padEnd(per * 3) + " " + chunk.map((x) => (x >= 32 && x < 127 ? String.fromCharCode(x) : ".")).join(""));
      }
      return out.map((l) => ({ t: l, role: "view" }));
    }
    const cut = (l) => [...l].slice(0, C).join("");
    if (/\.md$/.test(viewer.abs)) return mdLines(text, viewer.wrap ? C : 0).map((l) => ({ t: cut(l.t), role: l.role === "panel" ? "view" : l.role }));
    return (viewer.wrap ? wrap(text, C) : text.split("\n").map(cut)).map((l) => ({ t: l, role: "view" }));
  }
  function drawViewer() {
    cls("view");
    const lines = viewerLines();
    const rows = R - 2;
    viewer.top = Math.max(0, Math.min(viewer.top, Math.max(0, lines.length - rows)));
    const size = bytes(lookup(viewer.abs).text());
    const pct = lines.length <= rows ? 100 : Math.round(((viewer.top + rows) / lines.length) * 100);
    const right = `${size}/${size}  ${String(pct).padStart(3)}%`;
    fill(0, 0, C, 1, "viewHead");
    put(0, 0, fit(viewer.abs, C - right.length - 2), "viewHead");
    put(0, C - right.length - 1, right, "viewHead");
    lines.slice(viewer.top, viewer.top + rows).forEach((l, i) => { put(1 + i, 0, l.t, l.role); if (!viewer.hex) linkHits(1 + i, 0, l.t); });
    const keys = [...m().viewKeys];
    keys[1] = viewer.wrap ? m().viewKeys[1] : "Unwrap";
    keys[3] = viewer.hex ? "ASCII" : "Hex";
    drawKeybar(keys, (n) => viewKey("F" + n));
    if (dialog) drawDialog();
    flush();
  }
  function viewKey(key) {
    const rows = R - 2;
    if (["Escape", "F3", "F10", "q"].includes(key)) { viewer = null; mode = "panels"; }
    else if (key === "ArrowDown") viewer.top++;
    else if (key === "ArrowUp") viewer.top--;
    else if (key === "PageDown" || key === " ") viewer.top += rows - 1;
    else if (key === "PageUp") viewer.top -= rows - 1;
    else if (key === "Home") viewer.top = 0;
    else if (key === "End") viewer.top = 1e9;
    else if (key === "F2") viewer.wrap = !viewer.wrap;
    else if (key === "F4") { viewer.hex = !viewer.hex; viewer.top = 0; }
    else if (key === "F1") return fkey(1);
    draw();
  }

  /* ---------- mcedit: справжнє текстове поле поверх екрана ---------- */
  const ed = $("ed");
  function openEditor(abs, subject) {
    menu = null;
    if (abs) {
      editor = { name: abs.split("/").pop(), abs, ro: true, dirty: false };
      ed.value = lookup(abs).text();
      ed.readOnly = true;
    } else {
      editor = { name: "request.txt", abs: HOME + "/request.txt", ro: false, dirty: false };
      ed.readOnly = false;
      ed.value = `${subject || m().defaultSubject}\n\n${m().placeholder}\n`;
    }
    mode = "edit";
    ed.hidden = false;
    draw();
    setTimeout(() => {
      ed.focus();
      if (!editor.ro) { const i = ed.value.indexOf(m().placeholder); ed.setSelectionRange(i, i + m().placeholder.length); }
      draw();
    }, 0);
  }
  function drawEditor() {
    cls("edit");
    const [ef, eb] = S("edit");
    Object.assign(ed.style, {
      left: scr.style.left, top: (parseFloat(scr.style.top) + CH) + "px",
      width: C * CW + "px", height: (R - 2) * CH + "px",
      font: `${FS}px/${CH}px "TCon${FS}", monospace`,
      color: `var(--c${ef})`, background: `var(--c${eb})`, caretColor: `var(--c${S("h1")[0]})`
    });
    const v = ed.value;
    const pos = ed.selectionStart || 0;
    const before = v.slice(0, pos);
    const line = before.split("\n").length;
    const col = before.length - before.lastIndexOf("\n") - 1;
    const total = v.split("\n").length;
    const code = v.charCodeAt(pos) || 0;
    const status = `${editor.name}  [${editor.ro ? "R---" : editor.dirty ? "-M--" : "----"}]  ${col} L:[ 1+${line - 1}  ${line}/${total}] *(${pos}/${bytes(v)}b) ${String(code).padStart(4, "0")} 0x${code.toString(16).toUpperCase().padStart(3, "0")}`;
    fill(0, 0, C, 1, "editHead");
    put(0, 0, fit(status, C), "editHead");
    drawKeybar(m().editKeys, (n) => editKey("F" + n));
    if (dialog) { drawDialog(); ed.style.visibility = "hidden"; } else ed.style.visibility = "";
    flush();
  }
  function editKey(key) {
    if (key === "F2") {
      if (editor.ro) return errorBox(m().editRO);
      return ask(m().sendTitle, m().sendAsk, [{ label: m().send, act: sendRequest }, { label: m().cancel, cancel: true, act: () => setTimeout(() => ed.focus(), 0) }]);
    }
    if (key === "F10" || key === "Escape") {
      if (!editor.ro && editor.dirty) {
        return ask(m().sendTitle, m().sendAsk, [
          { label: m().send, act: () => { sendRequest(); closeEditor(); } },
          { label: m().dontSend, act: closeEditor },
          { label: m().cancel, cancel: true, act: () => setTimeout(() => ed.focus(), 0) }
        ]);
      }
      return closeEditor();
    }
    if (key === "F1") return fkey(1);
  }
  function closeEditor() { editor = null; ed.hidden = true; mode = "panels"; draw(); }
  function sendRequest() {
    const [subject, ...rest] = ed.value.split("\n");
    const body = rest.join("\n").trim();
    editor.dirty = false;
    location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`);
  }
  ed.addEventListener("input", () => { if (editor) { editor.dirty = true; drawEditor(); } });
  ["keyup", "click", "select"].forEach((ev) => ed.addEventListener(ev, () => { if (editor) drawEditor(); }));
  ed.addEventListener("keydown", (e) => {
    if (dialog) return;
    if (/^F\d+$/.test(e.key) || e.key === "Escape") { e.preventDefault(); e.stopPropagation(); editKey(e.key); }
  });

  /* ---------- Командна оболонка (Ctrl+O) ---------- */
  function toggleShell() { menu = null; mode = mode === "shell" ? (mcRunning ? "panels" : "shell") : "shell"; draw(); }
  function drawShell() {
    cls("shell");
    const pr = `guest@${HOST}:${short(panels[0].path)}$ `;
    const lines = shellLog.flatMap((l) => wrap(l, C));
    const promptLines = wrap(pr + shellCmd, C);
    const hintLine = mcRunning ? m().shellHint : m().mcHint;
    const all = [...lines, ...promptLines];
    const rows = R - 1;
    const view = all.slice(-rows);
    view.forEach((l, i) => { put(i, 0, l, "shell"); linkHits(i, 0, l); });
    const lastRow = view.length - 1;
    const cc = Math.min(C - 1, [...view[lastRow]].length);
    const [f, b] = S("shell");
    buf[lastRow * C + cc] = { c: " ", f: b, b: f, k: "blink" };
    put(R - 1, 0, fit(hintLine, C), [8, 0]);
    hit(R - 1, 0, C, () => { if (mcRunning) toggleShell(); });
    hit(0, 0, C, () => $("ki").focus());
    flush();
  }

  function runCommand(line) {
    const raw = line.trim();
    const pr = `guest@${HOST}:${short(panels[0].path)}$ `;
    shellLog.push(pr + line);
    if (raw) { history.push(raw); hIx = history.length; }
    if (!raw) return mode === "shell";
    const [c0, ...args] = raw.split(/\s+/);
    const arg = args.join(" ");
    const out = (s) => s.split("\n").forEach((l) => shellLog.push(l));
    const base = panels[0].path;
    switch (c0) {
      case "help": m().shellHelp.forEach(out); return true;
      case "ls": {
        const target = norm(arg || ".", base);
        const n = lookup(target);
        if (!n) { out(`ls: ${arg}: No such file or directory`); return true; }
        if (n.type !== "dir") { out(arg); return true; }
        out(entries(target).filter((e) => !e.up).map((e) => e.name + (e.node.type === "dir" ? "/" : e.node.exe ? "*" : "")).join("  "));
        return true;
      }
      case "cd": {
        const target = norm(arg || "~", base);
        const n = lookup(target);
        if (!n || n.type !== "dir") { out(`bash: cd: ${arg}: No such file or directory`); return true; }
        panels[0].path = target; panels[0].cur = 0; panels[0].top = 0;
        return mode === "shell";
      }
      case "pwd": out(base); return true;
      case "cat": case "less": case "more": {
        if (!arg) { out(`usage: ${c0} file`); return true; }
        const n = lookup(norm(arg, base));
        if (!n) { out(`${c0}: ${arg}: No such file or directory`); return true; }
        if (n.type === "dir") { out(`${c0}: ${arg}: Is a directory`); return true; }
        out(n.text().replace(/\n$/, ""));
        return true;
      }
      case "mcview": case "view": { const a = norm(arg, base); if (lookup(a) && lookup(a).type === "file") { openViewer(a); return false; } out(`mcview: ${arg}: No such file`); return true; }
      case "mcedit": case "edit": { if (!arg || /request/.test(arg)) { openEditor(); return false; } const a = norm(arg, base); if (lookup(a) && lookup(a).type === "file") { openEditor(a); return false; } out(`mcedit: ${arg}: No such file`); return true; }
      case "./request.sh": case "request.sh": case "sh": openEditor(); return false;
      case "mail": out(`${t().contactTitle}\n${t().contactText}\n${t().emailLabel}: ${EMAIL}`); return true;
      case "mc": mcRunning = true; mode = "panels"; return false;
      case "clear": shellLog.length = 0; return true;
      case "lang": if (LANGS.includes(args[0])) { setLang(args[0]); out("LANG=" + args[0]); } else out("usage: lang uk|en|ru"); return true;
      case "skin": if (SKINS[args[0]]) { setSkin(args[0]); out("skin=" + args[0]); } else out("usage: skin default|dark|mono"); return true;
      case "exit": case "logout": if (mcRunning) { mode = "panels"; return false; } shellLog.length = 0; boot(); return false;
      case "uname": out(args.includes("-a") ? `Linux ${HOST} 6.1.0-artintellico #1 SMP x86_64 GNU/Linux` : "Linux"); return true;
      case "whoami": out("guest"); return true;
      case "date": out(new Date().toString().replace(/ GMT.*/, "")); return true;
      case "nc": case "dos": case "unix": case "apple": case "lisa": case "linux": case "startx": case "win": case "ai": {
        const u = { nc: "/", dos: "/dos/", unix: "/unix/", apple: "/apple/", lisa: "/lisa/", linux: "/linux/", startx: "/linux/", win: "/win31/", ai: "/ai/" }[c0];
        setTimeout(() => { location.href = u; }, 150);
        return true;
      }
    }
    out(m().notFound(c0));
    return true;
  }

  function quitMc() {
    mcRunning = false;
    shellLog.push(`guest@${HOST}:${short(panels[0].path)}$ `);
    mode = "shell";
    draw();
  }

  /* ---------- Клавіатура ---------- */
  let escPending = 0;
  function onKey(e) {
    if (mode === "boot") { skipBoot(); e.preventDefault(); return; }
    if (mode === "edit" && !dialog) return;
    let key = e.key;
    /* Esc + цифра — F-клавіша, як у mc без функціональних клавіш */
    if (escPending && /^[0-9]$/.test(key) && Date.now() - escPending < 1200) { key = "F" + (key === "0" ? 10 : key); escPending = 0; }
    else if (key === "Escape") escPending = Date.now();
    if (e.ctrlKey && (key === "o" || key === "O" || key === "щ" || key === "Щ")) { e.preventDefault(); if (mode !== "view") toggleShell(); return; }
    if (dialog) {
      e.preventDefault();
      if (dialog.list) {
        if (key === "ArrowDown") dialog.sel = (dialog.sel + 1) % dialog.list.length;
        else if (key === "ArrowUp") dialog.sel = (dialog.sel - 1 + dialog.list.length) % dialog.list.length;
        else if (key === "Enter") { const it = dialog.list[dialog.sel]; dialog = null; it.act(); }
        else if (key === "Escape") dialog = null;
        return draw();
      }
      return dialogKey(key);
    }
    if (mode === "view") { e.preventDefault(); return viewKey(key); }
    if (mode === "shell") return shellKey(e, key);
    if (menu) { e.preventDefault(); return menuKey(key); }
    const p = P();
    const fm = /^F(\d+)$/.exec(key);
    if (fm) { e.preventDefault(); return fkey(Number(fm[1])); }
    if (key === "Tab") { e.preventDefault(); if (!single) active = 1 - active; return draw(); }
    if (e.ctrlKey && (key === "q" || key === "й")) { e.preventDefault(); panels[1].mode = panels[1].mode === "quick" ? "list" : "quick"; return draw(); }
    if (e.ctrlKey && (key === "l" || key === "д")) { e.preventDefault(); panels[1].mode = panels[1].mode === "info" ? "list" : "info"; return draw(); }
    const n = p.mode === "list" ? entries(p.path).length : 0;
    const rows = R - 10;
    const move = { ArrowDown: 1, ArrowUp: -1, PageDown: rows, PageUp: -rows };
    if (key in move || key === "Home" || key === "End") {
      e.preventDefault();
      if (p.mode === "list") {
        p.cur = key === "Home" ? 0 : key === "End" ? n - 1 : Math.max(0, Math.min(n - 1, p.cur + move[key]));
        if (active === 0) syncQuick();
      } else if (p.mode === "quick") p.qtop = Math.max(0, (p.qtop || 0) + (key === "Home" ? -1e9 : key === "End" ? 1e9 : move[key]));
      hintOverride = "";
      return draw();
    }
    if (key === "Enter") {
      e.preventDefault();
      if (cmd.trim()) { const c = cmd; cmd = ""; const stay = runCommand(c); mode = stay ? "shell" : mode; return draw(); }
      return open();
    }
    if (key === "Backspace") { e.preventDefault(); cmd = cmd.slice(0, -1); return draw(); }
    if (key === "Escape") { cmd = ""; return draw(); }
    if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); cmd += key; return draw(); }
  }
  function shellKey(e, key) {
    if (key === "Enter") { e.preventDefault(); const c = shellCmd; shellCmd = ""; const stay = runCommand(c); if (stay) mode = "shell"; return draw(); }
    if (key === "Escape") { e.preventDefault(); if (mcRunning) { mode = "panels"; } return draw(); }
    if (key === "Backspace") { e.preventDefault(); shellCmd = shellCmd.slice(0, -1); return draw(); }
    if (key === "ArrowUp" || key === "ArrowDown") {
      e.preventDefault();
      hIx = Math.max(0, Math.min(history.length, hIx + (key === "ArrowUp" ? -1 : 1)));
      shellCmd = history[hIx] || "";
      return draw();
    }
    if (e.ctrlKey && (key === "l" || key === "д")) { e.preventDefault(); shellLog.length = 0; return draw(); }
    if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); shellCmd += key; return draw(); }
  }
  document.addEventListener("keydown", (e) => {
    if (e.target === ed && mode === "edit" && !dialog) return;
    if (e.target === $("ki") && (e.key.length === 1 || e.key === "Unidentified" || e.key === "Process")) return;
    if (e.metaKey) return;
    onKey(e);
  });
  $("ki").addEventListener("input", () => {
    const v = $("ki").value;
    $("ki").value = "";
    for (const ch of v) onKey({ key: ch, preventDefault() {}, ctrlKey: false, metaKey: false, altKey: false });
  });

  /* ---------- Миша ---------- */
  function cellAt(ev) {
    const b = scr.getBoundingClientRect();
    return { r: Math.floor((ev.clientY - b.top) / CH), c: Math.floor((ev.clientX - b.left) / CW) };
  }
  scr.addEventListener("click", (ev) => {
    if (mode === "boot") return skipBoot();
    const { r, c } = cellAt(ev);
    if (mode === "shell") { $("ki").focus(); if (r === R - 1 && mcRunning) toggleShell(); return; }
    if (dialog) {
      const h = hits.slice(modalFrom).reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
      if (h) h.act();
      return;
    }
    if (menu && r > 0) {
      const h = [...hits].reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
      if (!h || h.r === 0) { menu = null; draw(); return; }
    }
    const h = [...hits].reverse().find((x) => x.r === r && c >= x.c0 && c < x.c1);
    if (!h) { if (menu) { menu = null; draw(); } return; }
    if (ev.detail === 2 && h.dbl) h.dbl();
    else if (ev.detail !== 2) h.act();
  });
  scr.addEventListener("wheel", (ev) => {
    ev.preventDefault();
    const key = ev.deltaY > 0 ? "ArrowDown" : "ArrowUp";
    if (mode === "view") return viewKey(key);
    if (mode === "panels" && !menu && !dialog) {
      const { c } = cellAt(ev);
      const ix = single ? 0 : c < Math.floor(C / 2) ? 0 : 1;
      active = ix;
      onKey({ key, preventDefault() {}, ctrlKey: false, metaKey: false, altKey: false });
    }
  }, { passive: false });
  scr.addEventListener("mousemove", (ev) => {
    const { r, c } = cellAt(ev);
    scr.style.cursor = hits.some((x) => x.r === r && c >= x.c0 && c < x.c1 && r !== 1) ? "pointer" : "default";
  });

  /* ---------- Мова, скін, доступний текст ---------- */
  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    buildSrText();
    if (mode !== "boot") draw();
  }
  function setSkin(k) { skin = k; store.set("aic-mc-skin", k); draw(); }
  function buildSrText() {
    const s = t();
    $("srText").textContent = [s.heroTitle, s.heroText, s.heroLead + ": " + s.phrases.join(", "), ...MD[lang].pages.map((p) => [p.title + ".", p.intro, p.why.replace(/\n+/g, " "), MD[lang].includes + ": " + p.includes.join("; ") + ".", MD[lang].result + ": " + p.result].join(" ")), s.partnersTitle + ": " + PARTNERS.join(", "), s.contactTitle, s.contactText, s.emailLabel + ": " + EMAIL].join("\n");
  }
  let lastSr = "";
  function updateSr() {
    const e = curEntry(P().mode === "list" ? P() : panels[0]);
    const s = e ? e.name : "";
    if (s !== lastSr) { lastSr = s; sr(s); }
  }

  /* ---------- Завантаження: консоль Linux → mc ---------- */
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((res) => { if (skipping || reduced) return res(); const id = setTimeout(res, ms); waiters.push(() => { clearTimeout(id); res(); }); });
  function skipBoot() { skipping = true; waiters.splice(0).forEach((f) => f()); }
  async function boot() {
    mode = "boot";
    skipping = false;
    mcRunning = false;
    const lines = [];
    const show = (extra = "") => {
      cls("shell");
      lines.concat(extra ? [extra] : []).flatMap((l) => wrap(l, C)).slice(-(R - 1)).forEach((l, i) => put(i, 0, l, "shell"));
      put(R - 1, 0, fit(m().skip, C), [8, 0]);
      flush();
    };
    const type = async (prefix, text) => {
      let s = prefix;
      for (const ch of text) { s += ch; show(s); await sleep(70 + Math.random() * 50); }
      lines.push(s);
    };
    lines.push("", `ArtIntelliCo GNU/Linux 12 ${HOST} tty1`, "");
    show();
    await sleep(500);
    await type(`${HOST} login: `, "guest");
    lines.push("Password: ");
    show();
    await sleep(600);
    const last = new Date(Date.now() - 86400000).toString().slice(0, 15);
    lines.push(`Last login: ${last} 18:30:12 on tty1`, `Linux ${HOST} 6.1.0-artintellico #1 SMP x86_64`, "", t().heroTitle, "");
    show();
    await sleep(500);
    await type(`guest@${HOST}:~$ `, "mc");
    await sleep(300);
    store.set("aic-mc-booted", "1", sessionStorage);
    lines.forEach((l) => shellLog.push(l));
    mcRunning = true;
    mode = "panels";
    draw();
  }

  /* Підказки mc змінюються з часом */
  setInterval(() => { if (mode === "panels" && !hintOverride) { hintIx = (hintIx + 1) % m().hints.length; draw(); } }, 12000);
  addEventListener("resize", () => { measure(); if (mode !== "boot") draw(); });

  document.documentElement.lang = lang;
  buildSrText();
  measure();
  const readme = entries(SITE_DIR).findIndex((e) => e.name === "README.md");
  panels[0].cur = readme;
  document.fonts.load(`${FS}px "TCon${FS}"`).finally(() => {
    if (reduced || store.get("aic-mc-booted", sessionStorage)) { mcRunning = true; mode = "panels"; shellLog.push(`guest@${HOST}:~$ mc`); draw(); }
    else boot();
  });
})();
