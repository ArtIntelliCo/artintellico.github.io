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
        "",
        "Клавиши: ↑↓ Home End Enter F1–F10 Esc Ctrl+O"
      ]
    }
  };

  /* Рядки, потрібні лише Lisa Office System */
  const LX = {
    uk: {
      menus: ["Стіл", "Файл/Друк", "Правка", "Обслуговування"],
      open: "Відкрити",
      setAside: (n) => `Відкласти «${n}»`,
      setAsideAll: "Відкласти все",
      tearOff: "Відірвати бланк запиту",
      copyEmail: "Копіювати адресу пошти",
      cleanUp: "Упорядкувати стіл",
      versions: "Інші версії сайту",
      noWindows: "Немає відкритих вікон",
      start: ["Версія 3.1", "Запуск системи…"],
      disk: "ArtIntelliCo",
      pad: "Бланк запиту",
      request: (n) => `Запит ${n}`,
      clipboard: "Буфер обміну",
      trash: "Кошик",
      prefs: "Налаштування",
      subject: "Тема",
      message: "Повідомлення",
      send: "Надіслати",
      sendNote: "Лист відкриється у вашій поштовій програмі.",
      defaultSubject: "Запит з сайту",
      clipboardEmpty: "Буфер обміну порожній.",
      clipboardHas: "У буфері обміну:",
      trashEmpty: "Кошик порожній.",
      lang: "Мова",
      contrast: "Контраст екрана",
      copied: "Адресу скопійовано в буфер обміну.",
      copyFailed: "Не вдалося скопіювати адресу.",
      ok: "Гаразд",
      close: "Закрити",
      padHint: "Відкрийте бланк, і від нього відірветься новий запит."
    },
    en: {
      menus: ["Desk", "File/Print", "Edit", "Housekeeping"],
      open: "Open",
      setAside: (n) => `Set Aside "${n}"`,
      setAsideAll: "Set Aside Everything",
      tearOff: "Tear Off Request",
      copyEmail: "Copy Email Address",
      cleanUp: "Clean Up Desk",
      versions: "Other versions of the site",
      noWindows: "No open windows",
      start: ["Version 3.1", "Starting up…"],
      disk: "ArtIntelliCo",
      pad: "Request Pad",
      request: (n) => `Request ${n}`,
      clipboard: "Clipboard",
      trash: "Wastebasket",
      prefs: "Preferences",
      subject: "Subject",
      message: "Message",
      send: "Send",
      sendNote: "The letter will open in your email app.",
      defaultSubject: "Enquiry from the website",
      clipboardEmpty: "The Clipboard is empty.",
      clipboardHas: "On the Clipboard:",
      trashEmpty: "The Wastebasket is empty.",
      lang: "Language",
      contrast: "Screen contrast",
      copied: "Address copied to the Clipboard.",
      copyFailed: "Couldn't copy the address.",
      ok: "OK",
      close: "Close",
      padHint: "Open the pad and a new request tears off it."
    },
    ru: {
      menus: ["Стол", "Файл/Печать", "Правка", "Обслуживание"],
      open: "Открыть",
      setAside: (n) => `Отложить «${n}»`,
      setAsideAll: "Отложить всё",
      tearOff: "Оторвать бланк запроса",
      copyEmail: "Копировать адрес почты",
      cleanUp: "Упорядочить стол",
      versions: "Другие версии сайта",
      noWindows: "Нет открытых окон",
      start: ["Версия 3.1", "Запуск системы…"],
      disk: "ArtIntelliCo",
      pad: "Бланк запроса",
      request: (n) => `Запрос ${n}`,
      clipboard: "Буфер обмена",
      trash: "Корзина",
      prefs: "Настройки",
      subject: "Тема",
      message: "Сообщение",
      send: "Отправить",
      sendNote: "Письмо откроется в вашей почтовой программе.",
      defaultSubject: "Запрос с сайта",
      clipboardEmpty: "Буфер обмена пуст.",
      clipboardHas: "В буфере обмена:",
      trashEmpty: "Корзина пуста.",
      lang: "Язык",
      contrast: "Контраст экрана",
      copied: "Адрес скопирован в буфер обмена.",
      copyFailed: "Не удалось скопировать адрес.",
      ok: "Хорошо",
      close: "Закрыть",
      padHint: "Откройте бланк, и от него оторвётся новый запрос."
    }
  };

  /* Послуги — службові записки LisaWrite: шапка, текст, перелік робіт, результат */
  const MEMOS = {
    uk: {
      kind: "СЛУЖБОВА ЗАПИСКА",
      to: "Кому:", from: "Від:", subj: "Тема:",
      list: "Що зробимо:", result: "Результат:",
      note: {
        title: "Прочитайте спершу",
        to: "Усім, хто відкрив цю теку",
        subj: "Як ми беремося до задач",
        body: [
          "У теці десять записок, по одній на кожен напрям. Спершу головне: ми не тримаємося за одну мову програмування чи платформу. Розбираємося в задачі, а тоді добираємо інструменти.",
          "Іноді чесна відповідь — готовий сервіс за підпискою, а не розробка. Тоді так і напишемо."
        ]
      },
      items: [
        {
          title: "Розробка концепції ІТ рішення",
          to: "Керівнику, який задумав нову систему",
          body: [
            "Перш ніж щось розробляти, треба домовитися, яку задачу система розв'язує. Звучить очевидно, та найдорожчу помилку в проєкті зазвичай роблять саме тут, ще до першого рядка коду: систему будують під задачу, якої ніхто до ладу не сформулював.",
            "Тож просимо часу не лише у вас, а й у тих, хто системою користуватиметься: бухгалтерії, складу, менеджерів. З цього виходять вимоги, які однаково розуміють і бізнес, і розробники. А часом висновок такий: розробляти нічого не треба, візьміть готовий продукт і доналаштуйте його. Для нас це нормальний результат."
          ],
          list: [
            "поговоримо з працівниками й розберемо, як процеси йдуть зараз",
            "запишемо бізнес-вимоги та сценарії роботи",
            "порівняємо готові рішення з розробкою на замовлення",
            "складемо технічне завдання зі строками й бюджетом за етапами"
          ],
          result: "Документ, за яким будь-яка команда — ми чи інша — зможе оцінити роботу й почати її."
        },
        {
          title: "Розробка SaaS рішень",
          to: "Тим, хто хоче продавати свій сервіс за підпискою",
          body: [
            "SaaS-платформу ведемо від першої версії для пілотних клієнтів до сервісу, де в кожного клієнта свій простір, свій тариф і особистий кабінет.",
            "Гроші в SaaS заробляє не код. Їх заробляє те, наскільки просто новому клієнту зареєструватися, заплатити й почати працювати, жодного разу не подзвонивши в підтримку. Мультитенантність, білінг і права доступу закладаємо з першого дня: переробляти це, коли клієнти вже всередині, виходить у рази дорожче. Першу версію намагаємося випустити якнайраніше — живі користувачі швидко покажуть, які функції були зайві."
          ],
          list: [
            "архітектура на багатьох клієнтів, дані кожного ізольовані",
            "реєстрація, тарифи, підписки, онлайн-оплата",
            "особисті кабінети, ролі й права",
            "інтеграції та відкрите API для ваших клієнтів",
            "масштабування, коли зростає навантаження"
          ],
          result: "Продукт, який продається за підпискою, а не проєкт, який щоразу доводиться впроваджувати вручну."
        },
        {
          title: "Web-розробка",
          to: "Тим, кому потрібні заявки із сайту",
          body: [
            "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання, внутрішні вебсервіси. За основу беремо задачу, а не шаблон.",
            "Добрий сайт для бізнесу видно за заявками й замовленнями, а не за тим, як він виглядає в портфоліо. Тому ще до старту домовляємося, що вважати результатом, і ставимо аналітику до запуску. Не через пів року. Технологію добираємо під розмір задачі: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе."
          ],
          list: [
            "прототип і дизайн інтерфейсів",
            "frontend, backend, адмінпанель",
            "зв'язок з оплатою, доставкою, CRM та обліком",
            "SEO-основа, швидкість завантаження, аналітика",
            "запуск і супровід"
          ],
          result: "Видно, скільки заявок і грошей приносить сайт."
        },
        {
          title: "Мобільні застосунки",
          to: "Тим, хто думає про власний застосунок",
          body: [
            "Пишемо застосунки для iOS та Android, а до них серверну частину й адмінпанель.",
            "Спершу перевіримо, чи він вам узагалі потрібен. Застосунок виправданий, коли клієнт повертається до нього регулярно: замовляє знову, стежить за статусом, збирає бонуси. Якщо людина заходить раз на рік, дешевше обійдеться зручний мобільний сайт, і ми скажемо про це до початку робіт, а не після. Нативно чи кросплатформно — вирішуємо за бюджетом і тим, скільки застосунку треба від камери, геолокації та офлайн-режиму."
          ],
          list: [
            "застосунки для iOS та Android",
            "серверна частина та API",
            "адмінпанель: контент, замовлення, користувачі",
            "push-сповіщення та аналітика",
            "публікація в App Store і Google Play"
          ],
          result: "Застосунок проходить модерацію магазинів, а ваша команда керує ним без розробників."
        },
        {
          title: "Рішення зі штучним інтелектом",
          to: "Тим, хто хоче «додати нейромережу»",
          body: [
            "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів: частину рутинних кроків вони виконують самі, а людина перевіряє. Штучний інтелект і машинне навчання ставимо туди, де вони заощаджують час працівників або гроші компанії. Туди, де не заощаджують, — не ставимо.",
            "До ШІ ми ставимося скептичніше за багатьох. Добра половина ідей «давайте додамо нейромережу» закривається звичайною автоматизацією. Інша річ, коли люди годинами розбирають листи, документи й звернення: тут мовні моделі справді знімають рутину. Починаємо з пілота на ваших даних, щоб цифри точності лежали на столі ще до основної розробки."
          ],
          list: [
            "ШІ-агенти для рутинних кроків процесу: розібрати заявку, внести дані в CRM, підготувати відповідь клієнтові",
            "чат-боти й асистенти для клієнтів і працівників",
            "розпізнавання та розбір документів",
            "сортування звернень, пошук у базі знань",
            "прогнози попиту, аналіз даних",
            "пілот з оцінкою якості на ваших даних"
          ],
          result: "Конкретну роботу, яку виконували люди, виконує система. Людина її контролює."
        },
        {
          title: "Розробка CRM та ERP",
          to: "Керівнику, в якого половина обліку живе в таблицях",
          body: [
            "Робимо CRM та ERP під те, як влаштована робота саме у вас. Не навпаки.",
            "Коробкова CRM добра, доки ваш процес схожий на стандартний. Коли менеджери ведуть половину справ у таблицях, бо система «так не вміє», власна виходить дешевше. Дані зі старих систем і таблиць переносимо самі, а запускаємо по відділах, щоб робота не ставала ні на день."
          ],
          list: [
            "модулі продажів, складу, виробництва, фінансів — які потрібні",
            "ролі, права доступу, журнал дій",
            "звіти й дашборди для керівника",
            "перенесення даних із таблиць і старих систем",
            "зв'язок із бухгалтерією, телефонією, поштою"
          ],
          result: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижневих звітів з кожного відділу."
        },
        {
          title: "Хмарні рішення",
          to: "Тим, хто зважує переїзд у хмару",
          body: [
            "Переносимо інфраструктуру в Amazon Web Services, повністю чи частинами, а потім стежимо, щоб вона працювала й не дорожчала без причини.",
            "Попереджаємо одразу: хмара не завжди дешевша за власний сервер. Вона окупається, коли навантаження стрибає, коли потрібна відмовостійкість або коли нове середовище має підніматися за хвилини, а не за тиждень. Тому переїзд починається з аудиту й розрахунку вартості. Переносимо поетапно, і на кожному кроці є план відкату."
          ],
          list: [
            "аудит поточної інфраструктури, розрахунок вартості",
            "архітектура в AWS, план міграції",
            "перенесення серверів, баз даних, файлів",
            "резервні копії та моніторинг",
            "зменшення витрат після переїзду"
          ],
          result: "Інфраструктура переживає відмову сервера, а рахунок за хмару вам зрозумілий."
        },
        {
          title: "Інфраструктура компанії на базі Red Hat",
          to: "Тим, у кого сервери тримаються на пам'яті одного адміністратора",
          body: [
            "Будуємо інфраструктуру компанії на Red Hat: сервери на Red Hat Enterprise Linux, контейнери в OpenShift, налаштування й розгортання через Ansible.",
            "Red Hat беруть, коли інфраструктура має роками працювати й проходити аудит. Підписка коштує грошей, а окуповується підтримкою виробника й довгим життєвим циклом — Red Hat Enterprise Linux розрахований на десять років. Інфраструктуру проєктуємо під ваші навантаження, а конфігурацію кожного сервера описуємо в Ansible: якщо машина впаде, її перезбирають за сценарієм, і ніхто не згадує, що там колись правили вручну. Red Hat — наш партнер, тож у підписках і підтримці виробника теж допоможемо розібратися."
          ],
          list: [
            "аудит поточних серверів і план переходу",
            "Red Hat Enterprise Linux, оновлення централізовано через Red Hat Satellite",
            "OpenShift для ваших застосунків",
            "налаштування й розгортання через Ansible",
            "облікові записи й доступ в одному місці (Identity Management)",
            "моніторинг, резервні копії, документація для вашої команди"
          ],
          result: "Інфраструктуру можна перевірити, повторити й передати іншій команді, і знання не підуть разом із людьми."
        },
        {
          title: "API та інтеграції",
          to: "Тим, хто вводить ті самі дані двічі",
          body: [
            "Проєктуємо API для ваших систем і зв'язуємо їх із сервісами, якими ви вже користуєтеся.",
            "Найчастіше бачимо одне й те саме: замовлення із сайту хтось передруковує в облікову систему вручну, оплати звіряють у таблиці. Інтеграція забирає цю роботу собі разом із помилками, які вона породжує. Моніторинг налаштовуємо окремо. Інтеграції ламаються тихо — партнер змінив свій API, і все, — тож хай першою про це дізнається система, а не ваш клієнт."
          ],
          list: [
            "проєктування й документація API",
            "платіжні системи, служби доставки, CRM, облік",
            "обмін даними між внутрішніми системами",
            "черги й повторні спроби при збоях",
            "моніторинг і сповіщення"
          ],
          result: "Дані вводять один раз, далі вони самі доходять, куди треба."
        },
        {
          title: "Технічна підтримка",
          to: "Власникам систем, зокрема написаних не нами",
          body: [
            "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, навіть якщо писали їх не ми.",
            "Виправлення помилок — менша частина підтримки. Сюди ж належать оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася від іншого підрядника, спершу робимо аудит і пишемо документацію. Без неї кожна правка — лотерея."
          ],
          list: [
            "моніторинг доступності й помилок",
            "виправлення та оновлення безпеки",
            "резервні копії й перевірка, що з них можна відновитися",
            "доопрацювання й нові функції за планом",
            "аудит і документація чужих систем"
          ],
          result: "Система працює, і є команда, яка знає, як вона влаштована."
        }
      ]
    },
    en: {
      kind: "INTEROFFICE MEMO",
      to: "To:", from: "From:", subj: "Subject:",
      list: "What we'll do:", result: "Outcome:",
      note: {
        title: "Read Me First",
        to: "Anyone who opened this folder",
        subj: "How we take on a job",
        body: [
          "There are ten memos in this folder, one per line of work. The main thing first: we don't stick to one programming language or platform. We work out the problem, then choose the tools.",
          "Sometimes the honest answer is an off-the-shelf subscription service rather than development. Then that's what we'll write."
        ]
      },
      items: [
        {
          title: "IT solution concept",
          to: "Whoever came up with the idea for a new system",
          body: [
            "Before anything gets built, someone has to agree on what the system is for. Sounds obvious. Yet the most expensive mistake in a project is usually made right here, before the first line of code: the system gets built for a problem nobody properly defined.",
            "So we ask for time not only from you but from the people who'll use the thing — accounting, the warehouse, the sales managers. What comes out is a set of requirements the business and the developers read the same way. And sometimes the conclusion is that nothing needs building: take an existing product and configure it. We count that as a perfectly good result."
          ],
          list: [
            "talk to staff and walk through how the processes run today",
            "write down business requirements and user scenarios",
            "compare ready-made products with custom development",
            "draw up a specification with time and budget per phase"
          ],
          result: "A document any team, ours or another, can estimate from and start work on."
        },
        {
          title: "SaaS development",
          to: "Anyone planning to sell their service by subscription",
          body: [
            "We take a SaaS platform from a first version for pilot customers to a service where every customer gets their own workspace, plan and dashboard.",
            "In SaaS the code isn't what earns money. What earns it is how easily a new customer can sign up, pay and get going without ever calling support. Multi-tenancy, billing and permissions go in on day one, because retrofitting them once customers are inside costs several times more. We try to ship the first version early — real users are quick to show which features were never needed."
          ],
          list: [
            "multi-tenant architecture, each customer's data kept separate",
            "sign-up, plans, subscriptions, online payments",
            "customer dashboards, roles and permissions",
            "integrations and a public API for your customers",
            "scaling as the load grows"
          ],
          result: "A product that sells by subscription, not a project you have to roll out by hand every time."
        },
        {
          title: "Web development",
          to: "Anyone who needs the website to bring in leads",
          body: [
            "Corporate sites, marketplaces, online stores, booking systems, internal web tools. We start from the task, not from a template.",
            "A business website proves itself in leads and orders, not in how it looks in a portfolio. So before we begin we agree on what counts as a result, and the analytics go in before launch. Not six months later. The technology is sized to the job: a landing page has no use for a heavy platform, and a marketplace won't squeeze into a website builder."
          ],
          list: [
            "prototype and interface design",
            "frontend, backend, admin panel",
            "hooking up payments, delivery, CRM and accounting",
            "SEO groundwork, page speed, analytics",
            "launch and ongoing support"
          ],
          result: "You can see how many leads and how much money the site brings in."
        },
        {
          title: "Mobile apps",
          to: "Anyone thinking about an app of their own",
          body: [
            "We build iOS and Android apps, plus the server side and admin panel behind them.",
            "First we'll check whether you need one at all. An app earns its keep when customers keep coming back to it: reordering, tracking a delivery, collecting points. If someone opens it once a year, a good mobile website is cheaper, and we'll say so before work starts rather than after. Native or cross-platform comes down to budget and to how much the app needs from the camera, location and offline mode."
          ],
          list: [
            "iOS and Android apps",
            "server side and API",
            "admin panel for content, orders and users",
            "push notifications and analytics",
            "publishing to the App Store and Google Play"
          ],
          result: "The app passes store review, and your team runs it without a developer."
        },
        {
          title: "AI-powered solutions",
          to: "Anyone who wants to “add a neural network”",
          body: [
            "We automate business processes with AI agents: they take some of the routine steps themselves, and a person checks the work. AI and machine learning go where they save staff time or company money. Where they don't, we leave them out.",
            "We're more sceptical about AI than most. A good half of the “let's add a neural network” ideas are covered by plain automation. It's a different story when people spend hours sorting emails, documents and requests: there, language models really do take the routine away. We begin with a pilot on your data, so the accuracy figures are on the table before the main build."
          ],
          list: [
            "AI agents for routine process steps: triage a request, update the CRM, draft a reply to a customer",
            "chatbots and assistants for customers and staff",
            "document recognition and data extraction",
            "sorting requests, searching the knowledge base",
            "demand forecasts, data analysis",
            "a pilot with quality measured on your data"
          ],
          result: "A specific job people used to do is now done by the system, with a person checking on it."
        },
        {
          title: "CRM and ERP development",
          to: "Managers whose real records live in spreadsheets",
          body: [
            "We build CRM and ERP around the way your business actually works. Not the other way round.",
            "Off-the-shelf CRM is fine as long as your process looks standard. Once managers are running half their work in spreadsheets because the system “can't do that”, a system of your own works out cheaper. We move the data from old systems and spreadsheets ourselves and roll out one department at a time, so work never stops for a day."
          ],
          list: [
            "sales, warehouse, production and finance modules, whichever you need",
            "roles, permissions, an audit log",
            "reports and dashboards for management",
            "data migration from spreadsheets and old systems",
            "links to accounting, telephony and email"
          ],
          result: "One system instead of a zoo of spreadsheets. Management sees how things stand without collecting weekly reports from every department."
        },
        {
          title: "Cloud solutions",
          to: "Anyone weighing a move to the cloud",
          body: [
            "We move infrastructure to Amazon Web Services, all of it or in parts, then keep an eye on it so it runs and doesn't get pricier for no reason.",
            "Fair warning: the cloud isn't always cheaper than your own server. It pays off when load jumps around, when you need fault tolerance, or when a new environment has to come up in minutes rather than a week. That's why a move starts with an audit and a cost estimate. We migrate in stages, with a rollback plan at every step."
          ],
          list: [
            "audit of current infrastructure, cost estimate",
            "AWS architecture, migration plan",
            "moving servers, databases and files",
            "backups and monitoring",
            "trimming costs after the move"
          ],
          result: "Infrastructure that survives a server failure, and a cloud bill you understand."
        },
        {
          title: "Company infrastructure on Red Hat",
          to: "Anyone whose servers live in one administrator's head",
          body: [
            "We build company infrastructure on Red Hat: servers on Red Hat Enterprise Linux, containers on OpenShift, configuration and deployment through Ansible.",
            "Red Hat is the pick when infrastructure has to run for years and pass audits. The subscription costs money, and it earns that back through vendor support and a long lifecycle — Red Hat Enterprise Linux is supported for ten years. We design around your workloads and describe every server's configuration in Ansible: if a machine dies, it gets rebuilt from a playbook, and nobody has to remember what was once tweaked by hand. Red Hat is our partner, so we can help you sort out subscriptions and vendor support too."
          ],
          list: [
            "audit of current servers and a migration plan",
            "Red Hat Enterprise Linux, with updates managed centrally through Red Hat Satellite",
            "OpenShift for your applications",
            "configuration and deployment through Ansible",
            "accounts and access in one place (Identity Management)",
            "monitoring, backups, documentation for your team"
          ],
          result: "Infrastructure you can audit, reproduce and hand to another team without the knowledge walking out the door."
        },
        {
          title: "APIs and integrations",
          to: "Anyone typing the same data in twice",
          body: [
            "We design APIs for your systems and connect them to the services you already use.",
            "We see the same thing over and over: someone retypes website orders into the accounting system, payments get reconciled in a spreadsheet. An integration takes that work over, along with the mistakes it produces. Monitoring is set up separately. Integrations break quietly — a partner changes their API and that's that — so the system should be the first to know, not your customer."
          ],
          list: [
            "API design and documentation",
            "payment providers, delivery services, CRM, accounting",
            "data exchange between internal systems",
            "queues and retries when something fails",
            "monitoring and alerts"
          ],
          result: "Data is entered once and finds its own way to where it's needed."
        },
        {
          title: "Technical support",
          to: "Owners of systems, including ones we didn't build",
          body: [
            "We support your IT systems and keep developing them, even when someone else wrote them.",
            "Fixing bugs is the smaller part of support. It also covers updates that close security holes, monitoring that spots a problem before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and write the documentation. Without it, every change is a lottery."
          ],
          list: [
            "availability and error monitoring",
            "fixes and security updates",
            "backups, and checks that they actually restore",
            "planned improvements and new features",
            "audit and documentation of other people's systems"
          ],
          result: "The system works, and there's a team that knows how it's put together."
        }
      ]
    },
    ru: {
      kind: "СЛУЖЕБНАЯ ЗАПИСКА",
      to: "Кому:", from: "От:", subj: "Тема:",
      list: "Что сделаем:", result: "Результат:",
      note: {
        title: "Прочтите сначала",
        to: "Всем, кто открыл эту папку",
        subj: "Как мы берёмся за задачи",
        body: [
          "В папке десять записок, по одной на каждое направление. Сначала о главном: мы не держимся за один язык программирования или платформу. Разбираемся в задаче, а потом подбираем инструменты.",
          "Иногда честный ответ — готовый сервис по подписке, а не разработка. Тогда так и напишем."
        ]
      },
      items: [
        {
          title: "Разработка концепции ИТ решения",
          to: "Руководителю, который задумал новую систему",
          body: [
            "Прежде чем что-то разрабатывать, надо договориться, какую задачу система решает. Звучит очевидно, но самую дорогую ошибку в проекте обычно делают как раз здесь, до первой строки кода: систему строят под задачу, которую никто толком не сформулировал.",
            "Поэтому просим время не только у вас, но и у тех, кто будет системой пользоваться: бухгалтерии, склада, менеджеров. Из этого получаются требования, которые одинаково читают и бизнес, и разработчики. А иногда вывод такой: разрабатывать ничего не нужно, возьмите готовый продукт и донастройте его. Мы считаем это нормальным результатом."
          ],
          list: [
            "поговорим с сотрудниками и разберём, как процессы идут сейчас",
            "запишем бизнес-требования и сценарии работы",
            "сравним готовые решения с заказной разработкой",
            "составим техническое задание со сроками и бюджетом по этапам"
          ],
          result: "Документ, по которому любая команда — мы или другая — сможет оценить работу и начать её."
        },
        {
          title: "Разработка SaaS решений",
          to: "Тем, кто хочет продавать свой сервис по подписке",
          body: [
            "SaaS-платформу ведём от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, свой тариф и личный кабинет.",
            "Деньги в SaaS приносит не код. Их приносит то, насколько просто новому клиенту зарегистрироваться, заплатить и начать работать, ни разу не позвонив в поддержку. Мультитенантность, биллинг и права доступа закладываем с первого дня: переделывать это, когда клиенты уже внутри, выходит в разы дороже. Первую версию стараемся выпустить пораньше — живые пользователи быстро покажут, какие функции были лишними."
          ],
          list: [
            "архитектура на много клиентов, данные каждого изолированы",
            "регистрация, тарифы, подписки, онлайн-оплата",
            "личные кабинеты, роли и права",
            "интеграции и открытый API для ваших клиентов",
            "масштабирование, когда растёт нагрузка"
          ],
          result: "Продукт, который продаётся по подписке, а не проект, который каждый раз приходится внедрять руками."
        },
        {
          title: "Web-разработка",
          to: "Тем, кому нужны заявки с сайта",
          body: [
            "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования, внутренние веб-сервисы. За основу берём задачу, а не шаблон.",
            "Хороший сайт для бизнеса узнаётся по заявкам и заказам, а не по тому, как он смотрится в портфолио. Так что ещё до старта договариваемся, что считать результатом, и ставим аналитику до запуска. Не через полгода. Технологию подбираем по размеру задачи: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет."
          ],
          list: [
            "прототип и дизайн интерфейсов",
            "frontend, backend, админ-панель",
            "связка с оплатой, доставкой, CRM и учётом",
            "SEO-основа, скорость загрузки, аналитика",
            "запуск и сопровождение"
          ],
          result: "Видно, сколько заявок и денег приносит сайт."
        },
        {
          title: "Мобильные приложения",
          to: "Тем, кто думает о своём приложении",
          body: [
            "Пишем приложения для iOS и Android, а к ним серверную часть и админ-панель.",
            "Сначала проверим, нужно ли оно вам вообще. Приложение оправдано, если клиент возвращается в него регулярно: заказывает снова, следит за статусом, копит бонусы. Если человек заходит раз в год, дешевле обойдётся удобный мобильный сайт, и мы скажем об этом до начала работ, а не после. Нативно или кроссплатформенно — решаем по бюджету и по тому, сколько приложению нужно от камеры, геолокации и офлайн-режима."
          ],
          list: [
            "приложения под iOS и Android",
            "серверная часть и API",
            "админ-панель: контент, заказы, пользователи",
            "push-уведомления и аналитика",
            "публикация в App Store и Google Play"
          ],
          result: "Приложение проходит модерацию магазинов, а ваша команда управляет им без разработчиков."
        },
        {
          title: "Решения с искусственным интеллектом",
          to: "Тем, кто хочет «добавить нейросеть»",
          body: [
            "Автоматизируем бизнес-процессы с помощью ИИ-агентов: часть рутинных шагов они делают сами, а человек проверяет. Искусственный интеллект и машинное обучение ставим туда, где они экономят время сотрудников или деньги компании. Туда, где не экономят, — не ставим.",
            "Мы к ИИ относимся скептичнее многих. Добрая половина идей «давайте добавим нейросеть» закрывается обычной автоматизацией. Другое дело, когда люди часами разбирают письма, документы и обращения: тут языковые модели действительно снимают рутину. Начинаем с пилота на ваших данных, чтобы цифры точности лежали на столе ещё до основной разработки."
          ],
          list: [
            "ИИ-агенты для рутинных шагов процесса: разобрать заявку, внести данные в CRM, подготовить ответ клиенту",
            "чат-боты и ассистенты для клиентов и сотрудников",
            "распознавание и разбор документов",
            "сортировка обращений, поиск по базе знаний",
            "прогнозы спроса, анализ данных",
            "пилот с оценкой качества на ваших данных"
          ],
          result: "Конкретную работу, которую делали люди, делает система. Человек её контролирует."
        },
        {
          title: "Разработка CRM и ERP",
          to: "Руководителю, у которого половина учёта живёт в таблицах",
          body: [
            "Делаем CRM и ERP под то, как устроена работа именно у вас. Не наоборот.",
            "Коробочная CRM хороша, пока ваш процесс похож на стандартный. Когда менеджеры ведут половину дел в таблицах, потому что система «так не умеет», своя выходит дешевле. Данные из старых систем и таблиц переносим сами, а запускаем по отделам, чтобы работа не вставала ни на день."
          ],
          list: [
            "модули продаж, склада, производства, финансов — какие нужны",
            "роли, права доступа, журнал действий",
            "отчёты и дашборды для руководителя",
            "перенос данных из таблиц и старых систем",
            "связь с бухгалтерией, телефонией, почтой"
          ],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит положение дел и не собирает еженедельные отчёты с каждого отдела."
        },
        {
          title: "Облачные решения",
          to: "Тем, кто взвешивает переезд в облако",
          body: [
            "Переносим инфраструктуру в Amazon Web Services, целиком или по частям, а потом следим, чтобы она работала и не дорожала без причины.",
            "Предупреждаем сразу: облако не всегда дешевле своего сервера. Оно окупается, когда нагрузка скачет, когда нужна отказоустойчивость или когда новое окружение должно подниматься за минуты, а не за неделю. Поэтому переезд начинается с аудита и расчёта стоимости. Переносим поэтапно, и на каждом шаге есть план отката."
          ],
          list: [
            "аудит текущей инфраструктуры, расчёт стоимости",
            "архитектура в AWS, план миграции",
            "перенос серверов, баз данных, файлов",
            "резервные копии и мониторинг",
            "снижение расходов после переезда"
          ],
          result: "Инфраструктура переживает отказ сервера, а счёт за облако вам понятен."
        },
        {
          title: "Инфраструктура компании на базе Red Hat",
          to: "Тем, у кого серверы держатся на памяти одного администратора",
          body: [
            "Строим инфраструктуру компании на Red Hat: серверы на Red Hat Enterprise Linux, контейнеры в OpenShift, настройка и развёртывание через Ansible.",
            "Red Hat берут, когда инфраструктура должна годами работать и проходить аудит. Подписка стоит денег, а окупается она поддержкой производителя и длинным жизненным циклом — Red Hat Enterprise Linux рассчитан на десять лет. Инфраструктуру проектируем под ваши нагрузки, а конфигурацию каждого сервера описываем в Ansible: если машина умрёт, её пересоберут по сценарию, и никому не придётся вспоминать, что там когда-то правили руками. Red Hat — наш партнёр, так что в подписках и поддержке производителя тоже поможем разобраться."
          ],
          list: [
            "аудит текущих серверов и план перехода",
            "Red Hat Enterprise Linux, обновления централизованно через Red Hat Satellite",
            "OpenShift для ваших приложений",
            "настройка и развёртывание через Ansible",
            "учётные записи и доступ в одном месте (Identity Management)",
            "мониторинг, резервные копии, документация для вашей команды"
          ],
          result: "Инфраструктуру можно проверить, повторить и передать другой команде, и знания не уйдут вместе с людьми."
        },
        {
          title: "API и интеграции",
          to: "Тем, кто вводит одни и те же данные дважды",
          body: [
            "Проектируем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
            "Чаще всего мы видим одно и то же: заказ с сайта кто-то перебивает в учётную систему руками, оплаты сверяют в таблице. Интеграция забирает эту работу себе вместе с ошибками, которые она порождает. Мониторинг настраиваем отдельно. Интеграции ломаются тихо — партнёр поменял свой API, и всё, — так что пусть первой об этом узнает система, а не ваш клиент."
          ],
          list: [
            "проектирование и документация API",
            "платёжные системы, службы доставки, CRM, учёт",
            "обмен данными между внутренними системами",
            "очереди и повторные попытки при сбоях",
            "мониторинг и оповещения"
          ],
          result: "Данные вводят один раз, дальше они сами доходят куда нужно."
        },
        {
          title: "Техническая поддержка",
          to: "Владельцам систем, в том числе написанных не нами",
          body: [
            "Поддерживаем ваши ИТ-системы и развиваем их дальше, даже если писали их не мы.",
            "Исправлять ошибки — меньшая часть поддержки. Сюда же входят обновления, которые закрывают уязвимости, мониторинг, который замечает проблему раньше пользователей, и мелкие доработки по ходу дела. Если система досталась от другого подрядчика, сначала проводим аудит и пишем документацию. Без неё каждая правка превращается в лотерею."
          ],
          list: [
            "мониторинг доступности и ошибок",
            "исправления и обновления безопасности",
            "резервные копии и проверка, что из них можно восстановиться",
            "доработки и новые функции по плану",
            "аудит и документация чужих систем"
          ],
          result: "Система работает, и есть команда, которая знает, как она устроена."
        }
      ]
    }
  };
  const mm = () => MEMOS[lang];

  const LANGS = ["uk", "en", "ru"];
  const LANG_NAMES = { uk: "Українська", en: "English", ru: "Русский" };
  const VERSIONS = [["Norton Commander", "/"], ["DOS", "/dos/"], ["UNIX", "/unix/"], ["Apple ][", "/apple/"], ["Linux 1996", "/linux/"], ["Midnight Commander", "/mc/"], ["Windows 3.11", "/win31/"], ["AI", "/ai/"]];
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
  let contrast = Number(store.get("aic-lisa-contrast")) || 100;
  let clipboard = "";
  let requests = 0;

  const t = () => I18N[lang];
  const x = () => LX[lang];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sr = (s) => { $("sr").textContent = ""; setTimeout(() => { $("sr").textContent = s; }, 30); };

  /* ---------- Іконки: 48×32 пікселі Lisa ---------- */
  const ICONS = {
    disk: `<rect class="body" x="4.5" y="9.5" width="39" height="19"/><path d="M4.5 9.5 9.5 4.5h29l5 5M9.5 4.5v5M38.5 4.5v5M4.5 23.5h39" fill="none"/><rect x="33" y="25" width="7" height="2" stroke="none" fill="#000"/><rect x="9" y="25" width="2" height="2" stroke="none" fill="#000"/>`,
    doc: `<path class="body" d="M14.5 .5h14l6 6v25h-20z"/><path d="M28.5 .5v6h6" fill="none"/><path d="M18 11h13M18 14h13M18 17h13M18 20h9M18 23h13M18 26h11" stroke-width="1" fill="none"/>`,
    folder: `<path class="body" d="M7.5 6.5h11l3 3h19v21h-33z"/><path d="M7.5 11.5h33" fill="none"/>`,
    pad: `<rect x="18.5" y="4.5" width="20" height="27" fill="#fff"/><rect class="body" x="16.5" y="2.5" width="20" height="27"/><rect class="body" x="12.5" y=".5" width="20" height="27"/><rect x="12" y="0" width="21" height="4" stroke="none" fill="#000"/><path d="M16 9h13M16 12h13M16 15h13M16 18h9" fill="none"/>`,
    clipboard: `<rect class="body" x="13.5" y="3.5" width="21" height="28"/><rect x="16.5" y="7.5" width="15" height="21" fill="#fff"/><rect x="19" y="0" width="10" height="6" stroke="none" fill="#000"/><path d="M19 12h10M19 15h10M19 18h7" fill="none"/>`,
    trash: `<path class="body" d="M14.5 8.5h19l-2 23h-15z"/><path d="M12.5 5.5h23v3h-23zM21.5 2.5h5v3h-5M19.5 12.5l1 16M24 12.5v16M28.5 12.5l-1 16" fill="none"/>`,
    prefs: `<rect class="body" x="9.5" y="3.5" width="29" height="26"/><path d="M13 10h22M13 17h22M13 24h22" fill="none"/><rect x="17" y="8" width="4" height="5" stroke="none" fill="#000"/><rect x="27" y="15" width="4" height="5" stroke="none" fill="#000"/><rect x="21" y="22" width="4" height="5" stroke="none" fill="#000"/>`
  };
  const iconSvg = (kind) => `<svg viewBox="0 0 48 32" shape-rendering="crispEdges" stroke="#000" stroke-width="1" aria-hidden="true">${ICONS[kind]}</svg>`;
  const arrow = (dir) => {
    const d = { up: "M6 1 11 7H8v4H4V7H1z", down: "M6 11 1 5h3V1h4v4h3z", left: "M1 6 7 1v3h4v4H7v3z", right: "M11 6 5 11V8H1V4h4V1z" }[dir];
    return `<svg viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="#fff" stroke="#000"/></svg>`;
  };

  /* ---------- Вміст вікон ---------- */
  const serviceIds = MEMOS.uk.items.map((_, i) => "svc" + i);

  const DEFS = {
    disk: { icon: "disk", title: () => x().disk, size: [300, 440], pos: [150, 24], render: (el) => iconGrid(el, ["readme", "services", "partners", "contact", "pad"]) },
    services: { icon: "folder", title: () => t().menu[0], size: [480, 440], pos: [230, 50], render: (el) => iconGrid(el, ["svcnote", ...serviceIds]) },
    readme: {
      icon: "doc", ruler: true, title: () => t().readmeDesc, size: [560, 460], pos: [470, 50],
      render: (el) => {
        const s = t();
        el.innerHTML = `<article class="page">
          <img class="doclogo" src="${esc(AIC.logo)}" alt="ArtIntelliCo">
          <h1>${esc(s.heroTitle)}</h1>
          <p>${esc(s.heroText)}</p>
          <h3>${esc(s.heroLead)}:</h3>
          <ul>${s.phrases.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <p class="small">${esc(s.copyright)}<br>${esc(s.legal)}<br>${esc(s.slogan)}<br>${esc(s.source)}: <a href="${location.origin}/${lang === "uk" ? "" : lang + "/"}classic/" target="_blank" rel="noopener">artintellico.com</a></p>
        </article>`;
      }
    },
    partners: {
      icon: "doc", ruler: true, title: () => t().menu[1], size: [420, 380], pos: [280, 90],
      render: (el) => {
        el.innerHTML = `<article class="page"><h1>${esc(t().partnersTitle)}</h1><ul>${PARTNERS.map((p) =>
          `<li>${p === "UNIO24" ? `<a href="https://unio24.com/" target="_blank" rel="noopener">${p}</a>` : esc(p)}</li>`).join("")}</ul></article>`;
      }
    },
    contact: {
      icon: "doc", ruler: true, title: () => t().menu[2], size: [500, 400], pos: [300, 110],
      render: (el) => {
        const s = t();
        el.innerHTML = `<article class="page">
          <h1>${esc(s.contactTitle)}</h1>
          <p>${esc(s.contactText)}</p>
          <p>${esc(s.emailLabel)}: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
          <div class="btns">
            <button type="button" class="lbtn default" data-act="request">${esc(x().tearOff)}</button>
            <a class="lbtn" href="mailto:${EMAIL}">${esc(s.write)}</a>
            <button type="button" class="lbtn" data-act="copy">${esc(s.copy)}</button>
          </div>
        </article>`;
      }
    },
    pad: { icon: "pad", title: () => x().pad, stationery: true },
    clipboard: {
      icon: "clipboard", title: () => x().clipboard, size: [340, 200], pos: [140, 200],
      render: (el) => {
        el.innerHTML = clipboard
          ? `<div class="page"><p>${esc(x().clipboardHas)}</p><p>${esc(clipboard)}</p></div>`
          : `<div class="page"><p>${esc(x().clipboardEmpty)}</p></div>`;
      }
    },
    trash: { icon: "trash", title: () => x().trash, size: [300, 180], pos: [-340, -220], render: (el) => { el.innerHTML = `<div class="page"><p>${esc(x().trashEmpty)}</p></div>`; } },
    prefs: {
      icon: "prefs", title: () => x().prefs, size: [380, 420], pos: [170, 120],
      render: (el) => {
        el.innerHTML = `<div class="page">
          <h3>${esc(x().lang)}</h3>
          ${LANGS.map((l) => `<label class="choice"><input type="radio" name="lang" value="${l}"${l === lang ? " checked" : ""}> ${LANG_NAMES[l]}</label>`).join("")}
          <h3>${esc(x().contrast)}</h3>
          <input type="range" min="40" max="100" value="${contrast}" data-act="contrast" aria-label="${esc(x().contrast)}">
          <h3>${esc(x().versions)}</h3>
          <div class="btns">${VERSIONS.map(([n, u]) => `<a class="lbtn" href="${u}">${n}</a>`).join("")}</div>
        </div>`;
        el.querySelectorAll("input[name=lang]").forEach((r) => r.addEventListener("change", () => setLang(r.value)));
        el.querySelector("[data-act=contrast]").addEventListener("input", (e) => setContrast(Number(e.target.value)));
      }
    }
  };
  /* Записка: шапка «Кому / Від / Тема», текст, перелік, результат */
  function memoHtml(doc, withList) {
    const L = mm();
    return `<article class="page memo">
      <p class="memo-kind">${esc(L.kind)}</p>
      <dl class="memo-head">
        <dt>${esc(L.to)}</dt><dd>${esc(doc.to)}</dd>
        <dt>${esc(L.from)}</dt><dd>ArtIntelliCo</dd>
        <dt>${esc(L.subj)}</dt><dd>${esc(doc.subj || doc.title)}</dd>
      </dl>
      ${doc.body.map((p) => `<p>${esc(p)}</p>`).join("")}
      ${withList ? `<h3>${esc(L.list)}</h3><ul>${doc.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>
      <p class="memo-result"><span>${esc(L.result)}</span> ${esc(doc.result)}</p>
      <div class="btns"><button type="button" class="lbtn default" data-act="request" data-subject="${esc(doc.title)}">${esc(t().discuss)}</button></div>` : ""}
    </article>`;
  }
  DEFS.svcnote = {
    icon: "doc", ruler: true, title: () => mm().note.title, size: [480, 340], pos: [330, 80],
    render: (el) => { el.innerHTML = memoHtml(mm().note, false); }
  };
  serviceIds.forEach((id, i) => {
    DEFS[id] = {
      icon: "doc", ruler: true, title: () => mm().items[i].title, size: [540, 440], pos: [360 + i * 14, 60 + i * 14],
      render: (el) => { el.innerHTML = memoHtml(mm().items[i], true); }
    };
  });

  function requestDef(n, subject) {
    const state = { subject: subject || x().defaultSubject, message: "" };
    return {
      icon: "doc", ruler: true, title: () => x().request(n), size: [520, 460], pos: [260 + n * 18, 60 + n * 18], state,
      render: (el) => {
        el.innerHTML = `<form class="page">
          <h1>${esc(t().contactTitle)}</h1>
          <label class="field"><span>${esc(x().subject)}</span><input name="subject" value="${esc(state.subject)}"></label>
          <label class="field"><span>${esc(x().message)}</span><textarea name="message">${esc(state.message)}</textarea></label>
          <p>${esc(x().sendNote)}</p>
          <div class="btns"><button class="lbtn default">${esc(x().send)}</button></div>
        </form>`;
        const form = el.querySelector("form");
        form.addEventListener("input", () => { state.subject = form.subject.value; state.message = form.message.value; });
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          location.href = AIC.mailto(`mailto:${EMAIL}?subject=${encodeURIComponent(state.subject)}&body=${encodeURIComponent(state.message)}`);
        });
      }
    };
  }

  /* ---------- Іконки на столі та у вікнах ---------- */
  let selected = null;
  function iconButton(id) {
    const def = DEFS[id];
    const b = document.createElement("button");
    b.type = "button";
    b.className = "icon";
    b.dataset.id = id;
    b.innerHTML = `${iconSvg(def.icon)}<span class="lab">${esc(def.title())}</span>`;
    b.classList.toggle("opened", wins.has(id));
    return b;
  }
  function iconGrid(el, ids) {
    const g = document.createElement("div");
    g.className = "grid";
    ids.forEach((id) => g.appendChild(iconButton(id)));
    el.replaceChildren(g);
  }
  function select(btn) {
    document.querySelectorAll(".icon.sel").forEach((b) => b.classList.remove("sel"));
    selected = btn ? btn.dataset.id : null;
    if (btn) btn.classList.add("sel");
  }

  const DESK = ["disk", "clipboard", "prefs", "trash"];
  function renderDesk() {
    const box = $("deskIcons");
    box.replaceChildren(...DESK.map(iconButton));
    const place = (id, css) => Object.assign(box.querySelector(`[data-id="${id}"]`).style, css);
    place("disk", { left: "16px", top: "16px" });
    place("clipboard", { left: "16px", top: "136px" });
    place("prefs", { left: "16px", top: "256px" });
    place("trash", { right: "16px", bottom: "16px" });
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest(".icon");
    if (!b) { if (e.target.closest("#desk") && !e.target.closest(".win")) select(null); return; }
    select(b);
    if (coarse) openIcon(b);
  });
  document.addEventListener("dblclick", (e) => { const b = e.target.closest(".icon"); if (b) openIcon(b); });
  document.addEventListener("keydown", (e) => {
    const b = e.target.closest && e.target.closest(".icon");
    if (b && e.key === "Enter") { e.preventDefault(); select(b); openIcon(b); }
  });

  function openIcon(btn) {
    const id = btn.dataset.id;
    if (DEFS[id].stationery) return tearOff(null, btn);
    open(id, btn);
  }

  /* ---------- Вікна ---------- */
  const wins = new Map();
  let zTop = 10;

  function deskRect() { return $("desk").getBoundingClientRect(); }
  function clampWin(w) {
    if (narrow()) return;
    const d = deskRect();
    const r = w.el.getBoundingClientRect();
    const left = Math.min(Math.max(0, r.left - d.left), Math.max(0, d.width - 120));
    const top = Math.min(Math.max(0, r.top - d.top), Math.max(0, d.height - 60));
    w.el.style.left = left + "px";
    w.el.style.top = top + "px";
  }

  function open(id, fromEl, def = DEFS[id]) {
    if (wins.has(id)) { focus(id); return wins.get(id); }
    const d = deskRect();
    const el = document.createElement("section");
    el.className = "win";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-labelledby", "t-" + id);
    el.innerHTML = `
      <div class="tbar"><button type="button" class="close" aria-label="${esc(x().close)}"></button><h2 id="t-${id}"></h2></div>
      <div class="ruler"${def.ruler ? "" : " hidden"}></div>
      <div class="wbody">
        <div class="content" tabindex="0"></div>
        <div class="sbar v"><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("up")}</button><div class="track"><div class="thumb"></div></div><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("down")}</button></div>
        <div class="sbar h"><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("left")}</button><div class="track"><div class="thumb"></div></div><button type="button" class="arr" tabindex="-1" aria-hidden="true">${arrow("right")}</button></div>
        <div class="size" aria-hidden="true"></div>
      </div>`;
    const [w, h] = def.size;
    const width = Math.min(w, d.width - 24);
    const height = Math.min(h, d.height - 24);
    let [left, top] = def.pos;
    if (left < 0) left = d.width + left;
    if (top < 0) top = d.height + top;
    left = Math.max(8, Math.min(left, d.width - width - 8));
    top = Math.max(8, Math.min(top, d.height - height - 8));
    Object.assign(el.style, { left: left + "px", top: top + "px", width: width + "px", height: height + "px" });
    const rec = { id, el, def, content: el.querySelector(".content") };
    wins.set(id, rec);
    rec.render = () => { el.querySelector("h2").textContent = def.title(); def.render(rec.content); rec.sync(); };
    setupScroll(rec);
    setupDrag(rec);
    el.querySelector(".close").addEventListener("click", () => close(id));
    el.addEventListener("pointerdown", () => focus(id), true);
    el.addEventListener("focusin", () => focus(id));
    rec.content.addEventListener("click", (e) => {
      const a = e.target.closest("[data-act]");
      if (!a) return;
      if (a.dataset.act === "copy") copyEmail();
      if (a.dataset.act === "request") tearOff(a.dataset.subject || null, a);
    });

    el.hidden = true;
    $("desk").appendChild(el);
    rec.render();
    markOpened();
    const show = () => { el.hidden = false; focus(id); rec.sync(); };
    if (fromEl && !reduced && !narrow()) zoom(fromEl.getBoundingClientRect(), el).then(show);
    else show();
    return rec;
  }

  function close(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.remove();
    wins.delete(id);
    markOpened();
    const rest = [...wins.values()].sort((a, b) => Number(b.el.style.zIndex) - Number(a.el.style.zIndex));
    if (rest[0]) focus(rest[0].id);
  }

  function focus(id) {
    const w = wins.get(id);
    if (!w) return;
    if (!w.el.classList.contains("active")) {
      wins.forEach((o) => o.el.classList.remove("active"));
      w.el.classList.add("active");
    }
    if (Number(w.el.style.zIndex) !== zTop) w.el.style.zIndex = ++zTop;
  }
  const activeWin = () => [...wins.values()].find((w) => w.el.classList.contains("active"));

  function markOpened() {
    document.querySelectorAll(".icon").forEach((b) => b.classList.toggle("opened", wins.has(b.dataset.id)));
  }

  function tearOff(subject, fromEl) {
    requests += 1;
    const id = "req" + requests;
    DEFS[id] = requestDef(requests, subject);
    const w = open(id, fromEl);
    setTimeout(() => { const f = w.el.querySelector("textarea"); if (f && !coarse) f.focus(); }, reduced ? 0 : 260);
  }

  /* Відкриття вікна: прямокутники, що розходяться від іконки, як у Lisa */
  function zoom(from, el) {
    const d = deskRect();
    el.hidden = false;
    const to = el.getBoundingClientRect();
    el.hidden = true;
    const steps = 7;
    const rects = [];
    for (let i = 1; i <= steps; i++) {
      const k = i / steps;
      const r = document.createElement("div");
      r.className = "zoom";
      Object.assign(r.style, {
        left: (from.left + (to.left - from.left) * k - d.left) + "px",
        top: (from.top + (to.top - from.top) * k - d.top) + "px",
        width: (from.width + (to.width - from.width) * k) + "px",
        height: (from.height + (to.height - from.height) * k) + "px"
      });
      rects.push(r);
    }
    return new Promise((resolve) => {
      rects.forEach((r, i) => setTimeout(() => {
        $("desk").appendChild(r);
        if (i >= 2) rects[i - 2].remove();
      }, i * 28));
      setTimeout(() => { rects.forEach((r) => r.remove()); resolve(); }, steps * 28 + 40);
    });
  }

  /* Перетягування та зміна розміру контуром, вікно стрибає після відпускання */
  function setupDrag(rec) {
    const outlineDrag = (handle, onMove) => {
      handle.addEventListener("pointerdown", (e) => {
        if (narrow() || e.button !== 0 || e.target.closest(".close")) return;
        e.preventDefault();
        focus(rec.id);
        const d = deskRect();
        const r = rec.el.getBoundingClientRect();
        const box = { left: r.left - d.left, top: r.top - d.top, width: r.width, height: r.height };
        const o = document.createElement("div");
        o.className = "outline";
        const draw = (b) => Object.assign(o.style, { left: b.left + "px", top: b.top + "px", width: b.width + "px", height: b.height + "px" });
        draw(box);
        $("desk").appendChild(o);
        const sx = e.clientX, sy = e.clientY;
        let next = box;
        const move = (ev) => { next = onMove(box, ev.clientX - sx, ev.clientY - sy, d); draw(next); };
        const up = () => {
          handle.removeEventListener("pointermove", move);
          handle.removeEventListener("pointerup", up);
          handle.removeEventListener("pointercancel", up);
          o.remove();
          Object.assign(rec.el.style, { left: next.left + "px", top: next.top + "px", width: next.width + "px", height: next.height + "px" });
          rec.sync();
        };
        handle.setPointerCapture(e.pointerId);
        handle.addEventListener("pointermove", move);
        handle.addEventListener("pointerup", up);
        handle.addEventListener("pointercancel", up);
      });
    };
    outlineDrag(rec.el.querySelector(".tbar"), (b, dx, dy, d) => ({
      ...b,
      left: Math.min(Math.max(-b.width + 80, b.left + dx), d.width - 80),
      top: Math.min(Math.max(0, b.top + dy), d.height - 30)
    }));
    outlineDrag(rec.el.querySelector(".size"), (b, dx, dy, d) => ({
      ...b,
      width: Math.max(220, Math.min(b.width + dx, d.width - b.left)),
      height: Math.max(140, Math.min(b.height + dy, d.height - b.top))
    }));
  }

  /* Власні смуги прокрутки Lisa: стрілки, растрова доріжка, біла «кабінка» */
  function setupScroll(rec) {
    const c = rec.content;
    const axes = [
      { bar: rec.el.querySelector(".sbar.v"), pos: "scrollTop", client: "clientHeight", full: "scrollHeight", ptr: "clientY", side: "top", len: "height" },
      { bar: rec.el.querySelector(".sbar.h"), pos: "scrollLeft", client: "clientWidth", full: "scrollWidth", ptr: "clientX", side: "left", len: "width" }
    ];
    rec.sync = () => {
      axes.forEach((a) => {
        const max = c[a.full] - c[a.client];
        const track = a.bar.querySelector(".track");
        const thumb = a.bar.querySelector(".thumb");
        a.bar.classList.toggle("idle", max <= 1);
        if (max <= 1) return;
        const room = track.getBoundingClientRect()[a.len] - thumb.getBoundingClientRect()[a.len];
        thumb.style[a.side] = Math.round((c[a.pos] / max) * room) + "px";
      });
    };
    c.addEventListener("scroll", rec.sync);
    new ResizeObserver(rec.sync).observe(c);

    axes.forEach((a) => {
      const [back, fwd] = a.bar.querySelectorAll(".arr");
      const track = a.bar.querySelector(".track");
      const thumb = a.bar.querySelector(".thumb");
      const by = (n) => { const o = {}; o[a.side] = n; c.scrollBy(o); };
      const hold = (btn, n) => {
        btn.addEventListener("pointerdown", (e) => {
          e.preventDefault();
          by(n);
          let iv = null;
          const to = setTimeout(() => { iv = setInterval(() => by(n), 60); }, 300);
          const stop = () => { clearTimeout(to); clearInterval(iv); window.removeEventListener("pointerup", stop); };
          window.addEventListener("pointerup", stop);
        });
      };
      hold(back, -32);
      hold(fwd, 32);
      track.addEventListener("pointerdown", (e) => {
        if (e.target === thumb) return;
        const tr = thumb.getBoundingClientRect();
        by((e[a.ptr] < tr[a.side] ? -1 : 1) * c[a.client] * 0.9);
      });
      thumb.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        thumb.setPointerCapture(e.pointerId);
        const start = e[a.ptr];
        const startPos = c[a.pos];
        const room = track.getBoundingClientRect()[a.len] - thumb.getBoundingClientRect()[a.len];
        const max = c[a.full] - c[a.client];
        const move = (ev) => { c[a.pos] = startPos + ((ev[a.ptr] - start) / room) * max; };
        const up = () => { thumb.removeEventListener("pointermove", move); thumb.removeEventListener("pointerup", up); };
        thumb.addEventListener("pointermove", move);
        thumb.addEventListener("pointerup", up);
      });
    });
  }

  /* ---------- Меню ---------- */
  const MENUS = [
    () => {
      const list = [...wins.values()].map((w) => ({ label: w.def.title(), act: () => focus(w.id) }));
      return [
        ...(list.length ? list : [{ label: x().noWindows, disabled: true }]),
        { sep: true },
        { label: x().setAsideAll, act: () => [...wins.keys()].forEach(close), disabled: !wins.size }
      ];
    },
    () => {
      const w = activeWin();
      return [
        { label: x().open, act: () => { const b = document.querySelector(".icon.sel"); if (b) openIcon(b); }, disabled: !selected },
        { label: w ? x().setAside(w.def.title()) : x().setAside("…"), act: () => w && close(w.id), disabled: !w },
        { sep: true },
        { label: x().tearOff, act: () => tearOff(null, document.querySelector('[data-id="disk"]')) }
      ];
    },
    () => [{ label: x().copyEmail, act: copyEmail }],
    () => [
      ...LANGS.map((l) => ({ label: LANG_NAMES[l], checked: l === lang, act: () => setLang(l) })),
      { sep: true },
      { head: x().versions },
      ...VERSIONS.map(([n, u]) => ({ label: n, act: () => { location.href = u; } })),
      { sep: true },
      { label: x().cleanUp, act: cleanUp }
    ]
  ];

  let openMenu = null;
  function renderMenubar() {
    const bar = $("menubar");
    bar.innerHTML = x().menus.map((m, i) =>
      `<div class="menu"><button type="button" class="mtitle" aria-haspopup="true" aria-expanded="false" data-m="${i}">${esc(m)}</button><div class="mlist" role="menu" hidden></div></div>`
    ).join("");
  }
  function showMenu(i) {
    closeMenu();
    const title = $("menubar").querySelector(`[data-m="${i}"]`);
    const list = title.nextElementSibling;
    list.innerHTML = MENUS[i]().map((it, k) => it.sep
      ? `<div class="msep" role="separator"></div>`
      : it.head ? `<div class="mhead" role="presentation">${esc(it.head)}</div>`
      : `<button type="button" class="mitem" role="menuitem" data-k="${k}"${it.disabled ? " disabled" : ""}><span class="chk">${it.checked ? "✓" : ""}</span><span class="lbl">${esc(it.label)}</span></button>`
    ).join("");
    const items = MENUS[i]();
    list.querySelectorAll(".mitem").forEach((b) => b.addEventListener("click", () => {
      const it = items[Number(b.dataset.k)];
      closeMenu();
      if (it && it.act && !it.disabled) it.act();
    }));
    list.hidden = false;
    title.setAttribute("aria-expanded", "true");
    openMenu = i;
    const r = list.getBoundingClientRect();
    if (r.right > innerWidth) list.style.left = (innerWidth - r.right - 8) + "px";
  }
  function closeMenu() {
    $("menubar").querySelectorAll(".mlist").forEach((l) => { l.hidden = true; l.style.left = ""; });
    $("menubar").querySelectorAll(".mtitle").forEach((b) => b.setAttribute("aria-expanded", "false"));
    openMenu = null;
  }
  $("menubar").addEventListener("click", (e) => {
    const b = e.target.closest(".mtitle");
    if (!b) return;
    const i = Number(b.dataset.m);
    if (openMenu === i) closeMenu();
    else showMenu(i);
  });
  $("menubar").addEventListener("pointerover", (e) => {
    const b = e.target.closest(".mtitle");
    if (b && openMenu !== null && Number(b.dataset.m) !== openMenu) showMenu(Number(b.dataset.m));
  });
  $("menubar").addEventListener("keydown", (e) => {
    const list = openMenu !== null ? $("menubar").querySelectorAll(".mlist")[openMenu] : null;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!list) { const b = e.target.closest(".mtitle"); if (b) showMenu(Number(b.dataset.m)); }
      const items = [...$("menubar").querySelectorAll(".mlist:not([hidden]) .mitem:not(:disabled)")];
      if (!items.length) return;
      const k = items.indexOf(document.activeElement);
      items[(k + (e.key === "ArrowDown" ? 1 : items.length - 1) + (k < 0 && e.key === "ArrowDown" ? 0 : 0)) % items.length].focus();
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      if (openMenu === null) return;
      const n = (openMenu + (e.key === "ArrowRight" ? 1 : 3)) % 4;
      showMenu(n);
      $("menubar").querySelector(`[data-m="${n}"]`).focus();
    }
  });
  document.addEventListener("pointerdown", (e) => { if (openMenu !== null && !e.target.closest(".menubar")) closeMenu(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!$("modal").hidden) return dismiss();
      if (openMenu !== null) { const i = openMenu; closeMenu(); $("menubar").querySelector(`[data-m="${i}"]`).focus(); }
    }
  });

  /* ---------- Дії ---------- */
  function alertBox(msg) {
    const m = $("modal");
    m.innerHTML = `<div class="alert" role="alertdialog" aria-modal="true" aria-describedby="alertMsg">
      <div class="row">${iconSvg("clipboard").replace("<svg", '<svg style="width:48px;height:32px"')}<p id="alertMsg">${esc(msg)}</p></div>
      <div class="btns"><button type="button" class="lbtn default">${esc(x().ok)}</button></div></div>`;
    m.hidden = false;
    const ok = m.querySelector("button");
    ok.addEventListener("click", dismiss);
    ok.focus();
  }
  let lastFocus = null;
  function dismiss() {
    $("modal").hidden = true;
    if (lastFocus) lastFocus.focus();
  }
  async function copyEmail() {
    lastFocus = document.activeElement;
    try {
      await navigator.clipboard.writeText(EMAIL);
      clipboard = EMAIL;
      if (wins.has("clipboard")) wins.get("clipboard").render();
      alertBox(x().copied);
    } catch {
      alertBox(x().copyFailed + " " + EMAIL);
    }
  }

  function setLang(l) {
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    document.title = "ArtIntelliCo Office System";
    renderMenubar();
    renderDesk();
    wins.forEach((w) => w.render());
    markOpened();
    sr(LANG_NAMES[l]);
  }
  function setContrast(v) {
    contrast = v;
    store.set("aic-lisa-contrast", String(v));
    document.body.style.filter = v < 100 ? `contrast(${v / 100}) brightness(${1 + (100 - v) / 250})` : "";
  }
  function cleanUp() {
    wins.forEach((w) => {
      const d = deskRect();
      let [left, top] = w.def.pos;
      if (left < 0) left = d.width + left;
      if (top < 0) top = d.height + top;
      w.el.style.left = left + "px";
      w.el.style.top = top + "px";
      clampWin(w);
    });
  }
  addEventListener("resize", () => wins.forEach(clampWin));

  /* ---------- Запуск ---------- */
  function boot() {
    const desk = () => {
      $("startup").hidden = true;
      store.set("aic-lisa-booted", "1", sessionStorage);
      if (!narrow()) open("disk");
      open("readme", narrow() ? null : document.querySelector('[data-id="disk"]'));
    };
    if (reduced || store.get("aic-lisa-booted", sessionStorage)) return desk();
    $("startText").innerHTML = x().start.map(esc).join("<br>");
    const id = setTimeout(done, 1600);
    function done() {
      clearTimeout(id);
      removeEventListener("keydown", done);
      removeEventListener("pointerdown", done);
      desk();
    }
    addEventListener("keydown", done);
    addEventListener("pointerdown", done);
  }

  setLang(lang);
  setContrast(contrast);
  $("startText").innerHTML = x().start.map(esc).join("<br>");
  document.fonts.load('16px "Lisa"').finally(boot);
})();
