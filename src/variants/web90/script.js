/* Сайт 90-х: домашня сторінка 1998 року. Тексти сайту — з window.AIC.content; послуги — власні, нижче в SVC. */
(() => {
  const AIC = window.AIC;
  const root = document.getElementById("w90");
  if (!AIC || !AIC.content || !root) return;

  const UI = {
    uk: {
      welcome: "Ласкаво просимо на нашу домашню сторінку!",
      langLabel: "Мова:",
      nav: { about: "Про нас", services: "Послуги", partners: "Партнери", contacts: "Контакти", guestbook: "Гостьова книга", webring: "Вебринг" },
      counter: "Ви — відвідувач №",
      construction: "Сторінка в розробці! Заходьте частіше — ми постійно щось додаємо.",
      cols: ["№", "Послуга", "Що робимо"],
      svc: { more: "Тисніть сюди, щоб дізнатися більше!", details: "Докладно про кожну послугу", incl: "Що входить:", get: "Що ви отримаєте:", back: "<<< Нагору до таблиці" },
      emailMe: "Напишіть нам!",
      gb: {
        title: "Підпишіть нашу гостьову книгу!",
        name: "Ваше ім'я:",
        email: "E-mail:",
        homepage: "Домашня сторінка:",
        found: "Як ви нас знайшли?",
        foundOpts: ["Yahoo!", "AltaVista", "Вебринг", "Друг розповів"],
        comment: "Коментар:",
        submit: "Підписати!",
        reset: "Очистити",
        subject: "Запис у гостьовій книзі",
        note: "Відкриється ваша поштова програма. Без вас нічого не надсилається."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Попередній", random: "Випадковий", next: "Наступний >>", here: "ВИ ТУТ" },
      top: "Нагору",
      updated: "Останнє оновлення:",
      bestViewed: "Найкраще переглядати в Netscape Navigator 4.0 при 800×600",
      locale: "uk-UA"
    },
    en: {
      welcome: "Welcome to our homepage!",
      langLabel: "Language:",
      nav: { about: "About us", services: "Services", partners: "Partners", contacts: "Contacts", guestbook: "Guestbook", webring: "Webring" },
      counter: "You are visitor #",
      construction: "Under construction! Come back often — we add new stuff all the time.",
      cols: ["#", "Service", "What we do"],
      svc: { more: "Click here for more info!", details: "All about each service", incl: "What's included:", get: "What you get:", back: "<<< Back to top" },
      emailMe: "E-mail us!",
      gb: {
        title: "Sign our guestbook!",
        name: "Your name:",
        email: "E-mail:",
        homepage: "Homepage:",
        found: "How did you find us?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "A friend told me"],
        comment: "Comments:",
        submit: "Sign it!",
        reset: "Clear",
        subject: "Guestbook entry",
        note: "Your mail program will open. Nothing is sent without you."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Prev", random: "Random", next: "Next >>", here: "YOU ARE HERE" },
      top: "Back to top",
      updated: "Last updated:",
      bestViewed: "Best viewed with Netscape Navigator 4.0 at 800×600",
      locale: "en-US"
    },
    ru: {
      welcome: "Добро пожаловать на нашу домашнюю страницу!",
      langLabel: "Язык:",
      nav: { about: "О нас", services: "Услуги", partners: "Партнёры", contacts: "Контакты", guestbook: "Гостевая книга", webring: "Вебринг" },
      counter: "Вы — посетитель №",
      construction: "Страница в разработке! Заходите почаще — мы постоянно что-то добавляем.",
      cols: ["№", "Услуга", "Что делаем"],
      svc: { more: "Жмите сюда, чтобы узнать больше!", details: "Подробно о каждой услуге", incl: "Что входит:", get: "Что вы получите:", back: "<<< Наверх к таблице" },
      emailMe: "Напишите нам!",
      gb: {
        title: "Подпишите нашу гостевую книгу!",
        name: "Ваше имя:",
        email: "E-mail:",
        homepage: "Домашняя страница:",
        found: "Как вы нас нашли?",
        foundOpts: ["Yahoo!", "AltaVista", "Вебринг", "Друг рассказал"],
        comment: "Комментарий:",
        submit: "Подписать!",
        reset: "Очистить",
        subject: "Запись в гостевой книге",
        note: "Откроется ваша почтовая программа. Без вас ничего не отправляется."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Предыдущий", random: "Случайный", next: "Следующий >>", here: "ВЫ ЗДЕСЬ" },
      top: "Наверх",
      updated: "Последнее обновление:",
      bestViewed: "Лучше всего смотреть в Netscape Navigator 4.0 при 800×600",
      locale: "ru-RU"
    }
  };

  /* Послуги голосом вебмайстра 1998 року: s — рядок таблиці, b — абзац, l — що входить, g — що ви отримаєте.
     Назви послуг — з AIC.content; якщо тут чогось бракує, беремо текст звідти ж. */
  const SVC = {
    uk: {
      lead: "Тут зібрано все, що ми вміємо. Ми не прив'язані до однієї мови програмування чи платформи: спершу розбираємося у вашій задачі, а вже тоді беремо інструменти. А якщо вам краще підійде готовий сервіс за підпискою, так і скажемо. Без хитрощів!",
      items: {
        concept: {
          s: "Допомагаємо зрозуміти, що саме має робити ваша майбутня система, ще до того, як хтось напише хоч рядок коду.",
          b: "Найдорожча помилка стається на самому початку: систему будують під задачу, яку ніхто як слід не сформулював. Тому спершу ми йдемо говорити з людьми, які в ній працюватимуть, — з бухгалтерією, складом, менеджерами, а не лише з директором. І так, буває, що після цього ми радимо нічого не писати, а взяти готовий продукт і доналаштувати його. Нам не соромно таке казати!",
          l: ["розмови з працівниками й розбір того, як усе влаштовано зараз", "бізнес-вимоги та сценарії: хто, що й коли робить у системі", "чесне порівняння: готове рішення чи розробка на замовлення", "технічне завдання з оцінкою строків і бюджету по етапах"],
          g: "документ, за яким будь-яка команда (хоч наша, хоч інша!) зможе оцінити роботу й почати."
        },
        saas: {
          s: "Робимо SaaS-сервіси: від першої версії для пілотних клієнтів до платформи, де кожен клієнт має свій простір, тариф і кабінет.",
          b: "У SaaS гроші заробляє не код, а те, як легко новий клієнт зареєструється, заплатить і почне працювати, жодного разу не подзвонивши в підтримку. Тому мультитенантність, білінг і права доступу ми закладаємо з першого дня: переробляти їх, коли клієнти вже всередині, коштує в рази дорожче. А першу версію випускаємо якомога раніше — живі користувачі дуже швидко показують, які функції були зайві.",
          l: ["архітектура, де дані кожного клієнта ізольовані від інших", "реєстрація, тарифи, підписки й оплата онлайн", "особисті кабінети, ролі та права доступу", "інтеграції й відкритий API для ваших клієнтів", "масштабування, коли навантаження росте"],
          g: "продукт, який можна продавати за підпискою, а не проєкт, що його щоразу доводиться впроваджувати руками."
        },
        web: {
          s: "Корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси. Під вашу задачу, а не під шаблон!",
          b: "Ми знаємо: бізнес оцінює сайт за заявками й замовленнями, а не за тим, який він гарний у портфоліо. Тож спершу домовляємося з вами, що вважати результатом, і налаштовуємо аналітику ще до запуску (а не через пів року, як це часто буває). Технологію беремо під задачу: лендингу важка платформа ні до чого, а маркетплейс не влізе в конструктор сайтів.",
          l: ["прототип і дизайн усіх екранів", "frontend, backend і панель адміністратора", "підключення оплати, доставки, CRM та облікових систем", "основа для SEO, швидке завантаження й аналітика", "запуск і супровід після нього"],
          g: "вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        mobile: {
          s: "Застосунки для iOS та Android разом із серверною частиною й адмінкою.",
          b: "Скажемо одразу: застосунок потрібен не всім. Він має сенс, коли клієнт повертається регулярно — замовляє ще раз, стежить за статусом, збирає бонуси. Якщо людина заходить раз на рік, дешевше вийде хороший мобільний сайт, і ми скажемо про це ще до початку робіт. Нативно чи кросплатформно — вирішуємо разом, дивлячись на бюджет і на те, наскільки застосунку потрібні камера, геолокація й робота без інтернету.",
          l: ["застосунки для iOS та Android", "серверна частина й API", "адмінка для контенту, замовлень і користувачів", "push-сповіщення та аналітика", "публікація в App Store і Google Play"],
          g: "застосунок, який проходить модерацію магазинів і яким ваша команда керує сама, без розробників."
        },
        ai: {
          s: "Автоматизуємо ваші бізнес-процеси ШІ-агентами: штучний інтелект і машинне навчання беруть на себе рутину, яку зараз роблять люди.",
          b: "Уявіть: приходить заявка, а агент сам її розбирає, заносить у CRM і готує відповідь клієнту, людині лишається тільки перевірити. Водночас зізнаємося, що до ШІ ми ставимося скептичніше за багатьох. Половину ідей «а давайте додамо нейромережу» закриває звичайна автоматизація. Зате там, де працівники годинами розбирають листи, документи й звернення, ШІ знімає рутину по-справжньому. Починаємо з пілота на ваших даних — щоб цифри точності ви побачили до основної розробки, а не після.",
          l: ["ШІ-агенти, які самі розбирають заявки, заповнюють CRM і готують відповіді клієнтам", "чат-боти й асистенти для клієнтів і працівників", "розпізнавання та розбір документів", "сортування звернень і пошук у базі знань", "прогноз попиту й аналіз даних", "пілот, де якість міряємо на ваших даних"],
          g: "конкретну роботу, яку раніше робили люди, тепер виконує система, а людина її контролює."
        },
        crm: {
          s: "CRM та ERP, зібрані навколо того, як працює саме ваш бізнес, а не навпаки.",
          b: "Коробкова CRM — непогана штука, поки ваш процес схожий на стандартний. Але коли менеджери ведуть пів роботи в таблицях, бо система «так не вміє», своє рішення виходить дешевше. Дані зі старих систем і таблиць переносимо самі, а запускаємо по відділах, щоб робота не стала ні на день.",
          l: ["модулі продажів, складу, виробництва, фінансів — які потрібні", "ролі, права доступу та журнал дій", "звіти й дашборди для керівника", "перенесення даних із таблиць і старих систем", "зв'язок із бухгалтерією, телефонією та поштою"],
          g: "одну систему замість зоопарку таблиць. Керівник бачить, як ідуть справи, і не збирає щотижня звіти з кожного відділу."
        },
        cloud: {
          s: "Переносимо інфраструктуру в хмару Amazon Web Services, повністю або частинами, і пильнуємо, щоб вона працювала й не дорожчала без причини.",
          b: "Хмара, між іншим, не завжди дешевша за власний сервер. Вона вигідна, коли навантаження стрибає, коли потрібна відмовостійкість або коли нове середовище треба підняти за хвилини, а не за тиждень. Тому переїзд починаємо з аудиту й підрахунку вартості, а переносимо поетапно — і на кожному кроці маємо план, як відкотитися назад.",
          l: ["аудит того, що є зараз, і розрахунок вартості", "архітектура в AWS і план міграції", "перенесення серверів, баз даних і файлів", "резервні копії та моніторинг", "оптимізація витрат, коли переїзд позаду"],
          g: "інфраструктуру, яка переживе відмову сервера, і зрозумілий вам рахунок за хмару."
        },
        redhat: {
          s: "Будуємо інфраструктуру компанії на Red Hat: сервери на Red Hat Enterprise Linux, контейнери в OpenShift, а налаштування — автоматично через Ansible.",
          b: "Red Hat — для тих, кому інфраструктура потрібна надовго: щоб роками працювала, проходила аудит і не трималася на пам'яті одного адміністратора. Підписка окупається підтримкою виробника й довгим життєвим циклом — Red Hat Enterprise Linux підтримується десять років! Ми проєктуємо все під ваші навантаження, а конфігурацію серверів записуємо в Ansible, тож будь-який сервер можна перезібрати за сценарієм, а не згадувати, що на ньому колись налаштовували. І ще: Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо.",
          l: ["аудит ваших серверів і план переходу", "розгортання Red Hat Enterprise Linux і централізовані оновлення через Red Hat Satellite", "OpenShift — контейнерна платформа для ваших застосунків", "автоматичне налаштування й розгортання через Ansible", "єдиний облік користувачів і доступів (Identity Management)", "моніторинг, резервні копії й документація для вашої команди"],
          g: "інфраструктуру, яку можна перевірити, відтворити й передати іншій команді, і жодне знання при цьому не загубиться."
        },
        api: {
          s: "Пишемо API для ваших систем і з'єднуємо їх із сервісами, якими ви вже користуєтеся.",
          b: "Найчастіше ми бачимо одну й ту саму біду: дані вводять двічі. Замовлення із сайту передруковують в облікову систему, оплати звіряють у таблиці. Інтеграція прибирає цю роботу разом із помилками, які вона породжує. І ще ми обов'язково ставимо моніторинг: інтеграції ламаються тихо, коли партнер міняє свій API, і краще дізнатися про це від системи, ніж від клієнта.",
          l: ["проєктування й документація API", "підключення платіжних систем, служб доставки, CRM та обліку", "обмін даними між вашими внутрішніми системами", "черги й повторні спроби, коли щось збоїть", "моніторинг і сповіщення"],
          g: "дані вводяться один раз і самі потрапляють туди, де вони потрібні."
        },
        support: {
          s: "Підтримуємо ваші ІТ-системи й розвиваємо їх далі. Навіть ті, які писали не ми!",
          b: "Підтримка для нас — це не лише «полагодити, коли зламається». Це оновлення, що закривають уразливості, моніторинг, який помічає проблему раніше за ваших користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася вам від іншого підрядника, ми починаємо з аудиту й документації, бо без неї будь-яка правка — лотерея.",
          l: ["стежимо за доступністю й помилками", "виправляємо баги й ставимо оновлення безпеки", "робимо резервні копії та перевіряємо, що з них можна відновитися", "доопрацювання й нові функції за планом", "аудит і документація систем від інших підрядників"],
          g: "систему, яка працює, і команду, яка знає, як вона влаштована."
        }
      }
    },
    ru: {
      lead: "Здесь собрано всё, что мы умеем. Мы не привязаны к одному языку программирования или платформе: сначала разбираемся в вашей задаче, а уже потом выбираем инструменты. А если вам больше подойдёт готовый сервис по подписке, так и скажем. Без хитростей!",
      items: {
        concept: {
          s: "Помогаем понять, что именно должна делать ваша будущая система, ещё до того, как кто-то напишет хоть строчку кода.",
          b: "Самая дорогая ошибка случается в самом начале: систему строят под задачу, которую никто толком не сформулировал. Поэтому сперва мы идём разговаривать с теми, кто будет в ней работать, — с бухгалтерией, складом, менеджерами, а не только с директором. И да, бывает, что после этого мы советуем ничего не писать, а взять готовый продукт и донастроить его. Нам не стыдно такое говорить!",
          l: ["разговоры с сотрудниками и разбор того, как всё устроено сейчас", "бизнес-требования и сценарии: кто, что и когда делает в системе", "честное сравнение: готовое решение или заказная разработка", "техническое задание с оценкой сроков и бюджета по этапам"],
          g: "документ, по которому любая команда (хоть наша, хоть другая!) сможет оценить работу и начать."
        },
        saas: {
          s: "Делаем SaaS-сервисы: от первой версии для пилотных клиентов до платформы, где у каждого клиента своё пространство, тариф и кабинет.",
          b: "В SaaS деньги зарабатывает не код, а то, насколько легко новый клиент зарегистрируется, заплатит и начнёт работать, ни разу не позвонив в поддержку. Поэтому мультитенантность, биллинг и права доступа мы закладываем с первого дня: переделывать их, когда клиенты уже внутри, в разы дороже. А первую версию выпускаем как можно раньше — живые пользователи очень быстро показывают, какие функции были лишними.",
          l: ["архитектура, где данные каждого клиента изолированы от остальных", "регистрация, тарифы, подписки и оплата онлайн", "личные кабинеты, роли и права доступа", "интеграции и открытый API для ваших клиентов", "масштабирование, когда нагрузка растёт"],
          g: "продукт, который можно продавать по подписке, а не проект, который каждый раз приходится внедрять руками."
        },
        web: {
          s: "Корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Под вашу задачу, а не под шаблон!",
          b: "Мы знаем: бизнес оценивает сайт по заявкам и заказам, а не по тому, как красиво он смотрится в портфолио. Так что сначала договариваемся с вами, что считать результатом, и настраиваем аналитику ещё до запуска (а не через полгода, как это часто бывает). Технологию берём под задачу: лендингу тяжёлая платформа ни к чему, а маркетплейс не влезет в конструктор сайтов.",
          l: ["прототип и дизайн всех экранов", "frontend, backend и панель администратора", "подключение оплаты, доставки, CRM и учётных систем", "основа для SEO, быстрая загрузка и аналитика", "запуск и сопровождение после него"],
          g: "веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        mobile: {
          s: "Приложения для iOS и Android вместе с серверной частью и админкой.",
          b: "Скажем сразу: приложение нужно не всем. Оно имеет смысл, когда клиент возвращается регулярно — заказывает ещё раз, следит за статусом, копит бонусы. Если человек заходит раз в год, дешевле выйдет хороший мобильный сайт, и мы скажем об этом ещё до начала работ. Нативно или кроссплатформенно — решаем вместе, глядя на бюджет и на то, насколько приложению нужны камера, геолокация и работа без интернета.",
          l: ["приложения для iOS и Android", "серверная часть и API", "админка для контента, заказов и пользователей", "push-уведомления и аналитика", "публикация в App Store и Google Play"],
          g: "приложение, которое проходит модерацию магазинов и которым ваша команда управляет сама, без разработчиков."
        },
        ai: {
          s: "Автоматизируем ваши бизнес-процессы ИИ-агентами: искусственный интеллект и машинное обучение берут на себя рутину, которую сейчас делают люди.",
          b: "Представьте: приходит заявка, а агент сам её разбирает, заносит в CRM и готовит ответ клиенту, человеку остаётся только проверить. При этом признаемся, что к ИИ мы относимся скептичнее многих. Половину идей «а давайте добавим нейросеть» закрывает обычная автоматизация. Зато там, где сотрудники часами разбирают письма, документы и обращения, ИИ снимает рутину по-настоящему. Начинаем с пилота на ваших данных — чтобы цифры точности вы увидели до основной разработки, а не после.",
          l: ["ИИ-агенты, которые сами разбирают заявки, заполняют CRM и готовят ответы клиентам", "чат-боты и ассистенты для клиентов и сотрудников", "распознавание и разбор документов", "сортировка обращений и поиск по базе знаний", "прогноз спроса и анализ данных", "пилот, где качество меряем на ваших данных"],
          g: "конкретную работу, которую раньше делали люди, теперь выполняет система, а человек её контролирует."
        },
        crm: {
          s: "CRM и ERP, собранные вокруг того, как работает именно ваш бизнес, а не наоборот.",
          b: "Коробочная CRM — неплохая вещь, пока ваш процесс похож на стандартный. Но когда менеджеры ведут полработы в таблицах, потому что система «так не умеет», своё решение выходит дешевле. Данные из старых систем и таблиц переносим сами, а запускаем по отделам, чтобы работа не встала ни на день.",
          l: ["модули продаж, склада, производства, финансов — какие нужны", "роли, права доступа и журнал действий", "отчёты и дашборды для руководителя", "перенос данных из таблиц и старых систем", "связь с бухгалтерией, телефонией и почтой"],
          g: "одну систему вместо зоопарка таблиц. Руководитель видит, как идут дела, и не собирает каждую неделю отчёты с каждого отдела."
        },
        cloud: {
          s: "Переносим инфраструктуру в облако Amazon Web Services, целиком или частями, и следим, чтобы она работала и не дорожала без причины.",
          b: "Облако, между прочим, не всегда дешевле своего сервера. Оно выгодно, когда нагрузка скачет, когда нужна отказоустойчивость или когда новое окружение надо поднять за минуты, а не за неделю. Поэтому переезд начинаем с аудита и подсчёта стоимости, а переносим поэтапно — и на каждом шаге у нас есть план, как откатиться назад.",
          l: ["аудит того, что есть сейчас, и расчёт стоимости", "архитектура в AWS и план миграции", "перенос серверов, баз данных и файлов", "резервные копии и мониторинг", "оптимизация расходов, когда переезд позади"],
          g: "инфраструктуру, которая переживёт отказ сервера, и понятный вам счёт за облако."
        },
        redhat: {
          s: "Строим инфраструктуру компании на Red Hat: серверы на Red Hat Enterprise Linux, контейнеры в OpenShift, а настройка — автоматически через Ansible.",
          b: "Red Hat — для тех, кому инфраструктура нужна надолго: чтобы годами работала, проходила аудит и не держалась на памяти одного администратора. Подписка окупается поддержкой производителя и длинным жизненным циклом — Red Hat Enterprise Linux поддерживается десять лет! Мы проектируем всё под ваши нагрузки, а конфигурацию серверов записываем в Ansible, так что любой сервер можно пересобрать по сценарию, а не вспоминать, что на нём когда-то настраивали. И ещё: Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем.",
          l: ["аудит ваших серверов и план перехода", "развёртывание Red Hat Enterprise Linux и централизованные обновления через Red Hat Satellite", "OpenShift — контейнерная платформа для ваших приложений", "автоматическая настройка и развёртывание через Ansible", "единый учёт пользователей и доступов (Identity Management)", "мониторинг, резервные копии и документация для вашей команды"],
          g: "инфраструктуру, которую можно проверить, повторить и передать другой команде, и никакие знания при этом не потеряются."
        },
        api: {
          s: "Пишем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          b: "Чаще всего мы видим одну и ту же беду: данные вводят дважды. Заказы с сайта перепечатывают в учётную систему, оплаты сверяют в таблице. Интеграция убирает эту работу вместе с ошибками, которые она порождает. И ещё мы обязательно ставим мониторинг: интеграции ломаются тихо, когда партнёр меняет свой API, и лучше узнать об этом от системы, чем от клиента.",
          l: ["проектирование и документация API", "подключение платёжных систем, служб доставки, CRM и учёта", "обмен данными между вашими внутренними системами", "очереди и повторные попытки, когда что-то сбоит", "мониторинг и оповещения"],
          g: "данные вводятся один раз и сами попадают туда, где они нужны."
        },
        support: {
          s: "Поддерживаем ваши ИТ-системы и развиваем их дальше. Даже те, которые писали не мы!",
          b: "Поддержка для нас — это не только «починить, когда сломается». Это обновления, которые закрывают уязвимости, мониторинг, который замечает проблему раньше ваших пользователей, и мелкие доработки по ходу. Если система досталась вам от другого подрядчика, мы начинаем с аудита и документации, потому что без неё любая правка — лотерея.",
          l: ["следим за доступностью и ошибками", "исправляем баги и ставим обновления безопасности", "делаем резервные копии и проверяем, что из них можно восстановиться", "доработки и новые функции по плану", "аудит и документация систем от других подрядчиков"],
          g: "систему, которая работает, и команду, которая знает, как она устроена."
        }
      }
    },
    en: {
      lead: "Here's everything we can do for you. We aren't married to one programming language or platform: first we figure out your problem, then we pick the tools. And if a ready-made subscription service suits you better, we'll just tell you. No tricks!",
      items: {
        concept: {
          s: "We help you work out what your future system actually has to do, before anybody writes a single line of code.",
          b: "The most expensive mistake happens right at the start: the system gets built for a problem nobody ever properly put into words. So first we go and talk to the people who'll be using it (accounting, the warehouse, the sales managers), not just the boss. And yes, sometimes after all that we tell you not to build anything and to set up an existing product instead. We're not shy about saying so!",
          l: ["talks with your staff and a look at how things work right now", "business requirements and scenarios: who does what, and when", "an honest comparison of off-the-shelf products and custom development", "a specification with time and budget estimates for each phase"],
          g: "a document any team (ours or someone else's!) can estimate from and start working."
        },
        saas: {
          s: "We build SaaS services, from a first version for pilot customers to a platform where every customer gets their own workspace, plan and dashboard.",
          b: "In SaaS the money isn't made by the code. It's made by how easily a new customer can sign up, pay and get going without ever phoning support. That's why we build in multi-tenancy, billing and permissions from day one: redoing them once customers are inside costs several times more. And we ship the first version as early as we can, because real users are very quick to show which features were never needed.",
          l: ["an architecture where each customer's data is kept apart from everyone else's", "sign-up, plans, subscriptions and online payment", "customer dashboards, roles and permissions", "integrations and a public API for your customers", "scaling as the load grows"],
          g: "a product you can sell by subscription, instead of a project you have to roll out by hand every single time."
        },
        web: {
          s: "Corporate websites, marketplaces, online stores, booking systems and internal web tools. Made for your task, not squeezed into a template!",
          b: "We know a business judges its website by leads and orders, not by how pretty it looks in somebody's portfolio. So first we agree with you on what counts as a result, and we set up analytics before launch (not six months later, which happens a lot). The technology fits the job: a landing page doesn't need a heavy platform, and a marketplace won't fit into a website builder.",
          l: ["a prototype and design for every screen", "frontend, backend and an admin panel", "hooking up payments, delivery, CRM and accounting systems", "SEO groundwork, fast loading and analytics", "launch, and support after it"],
          g: "a web service that shows you how many leads and how much money it brings in."
        },
        mobile: {
          s: "iOS and Android apps, plus the server side and admin panel behind them.",
          b: "Let's say it up front: not everybody needs an app. It makes sense when customers come back regularly to order again, track a delivery or collect loyalty points. If someone visits you once a year, a good mobile website is cheaper, and we'll tell you that before any work starts. Native or cross-platform? We decide together, looking at the budget and at how much the app needs the camera, location and working offline.",
          l: ["apps for iOS and Android", "server side and API", "an admin panel for content, orders and users", "push notifications and analytics", "publishing to the App Store and Google Play"],
          g: "an app that passes store review and that your own team can run without calling a developer."
        },
        ai: {
          s: "We automate your business processes with AI agents: artificial intelligence and machine learning take over the routine your people do today.",
          b: "Picture this: a request comes in, and the agent sorts it, enters it into the CRM and drafts a reply to the customer, so a person only has to check it. That said, we'll admit we're more sceptical about AI than most. Half of the \"let's add a neural network!\" ideas can be solved with plain automation. But where people spend hours sorting emails, documents and support requests, AI really does take the routine away. We start with a pilot on your own data, so you see the accuracy figures before the main build, not after.",
          l: ["AI agents that sort requests, fill in the CRM and draft replies to customers on their own", "chatbots and assistants for customers and staff", "reading documents and pulling data out of them", "sorting requests and searching your knowledge base", "demand forecasts and data analysis", "a pilot where quality is measured on your data"],
          g: "a specific job that people used to do by hand is now done by the system, and a person stays in control."
        },
        crm: {
          s: "CRM and ERP systems built around the way your business works, not the other way round.",
          b: "Off-the-shelf CRM is fine as long as your process looks like everybody else's. But when your managers run half their work in spreadsheets because the system \"can't do that\", building your own gets cheaper. We move the data over from old systems and spreadsheets ourselves, and we roll out one department at a time so work never stops for a day.",
          l: ["sales, warehouse, production and finance modules, whichever you need", "roles, permissions and an audit log", "reports and dashboards for management", "moving data from spreadsheets and old systems", "links to accounting, telephony and email"],
          g: "one system instead of a zoo of spreadsheets. Management sees how things are going without collecting weekly reports from every department."
        },
        cloud: {
          s: "We move your infrastructure to Amazon Web Services, all of it or piece by piece, and make sure it keeps running and doesn't get pricier for no reason.",
          b: "Here's something people don't always expect: the cloud isn't always cheaper than your own server. It pays off when load jumps around, when you need fault tolerance, or when a new environment has to be up in minutes instead of a week. So a move starts with an audit and a cost estimate, and it happens in stages, with a plan to roll back at every step.",
          l: ["an audit of what you have now and a cost estimate", "AWS architecture and a migration plan", "moving servers, databases and files", "backups and monitoring", "cutting costs once the move is done"],
          g: "infrastructure that survives a server failure, and a cloud bill you actually understand."
        },
        redhat: {
          s: "We build company infrastructure on Red Hat: servers on Red Hat Enterprise Linux, containers on OpenShift, and setup automated with Ansible.",
          b: "Red Hat is for people who need their infrastructure for the long haul: running for years, passing audits, and not living only in one admin's head. The subscription pays for itself through vendor support and a long lifecycle (Red Hat Enterprise Linux is supported for ten years!). We design everything around your workloads and write the server configuration down in Ansible, so any server can be rebuilt from a playbook instead of from somebody's memory. One more thing: Red Hat is our partner, so we can help with subscriptions and vendor support too.",
          l: ["an audit of your servers and a migration plan", "Red Hat Enterprise Linux rollout with central updates through Red Hat Satellite", "OpenShift, a container platform for your applications", "automated setup and deployment with Ansible", "one place for user accounts and access (Identity Management)", "monitoring, backups and documentation for your team"],
          g: "infrastructure you can audit, reproduce and hand over to another team without losing anything it knows."
        },
        api: {
          s: "We write APIs for your systems and connect them to the services you already use.",
          b: "The trouble we run into most often is data typed in twice. Orders from the website get retyped into the accounting system, payments get checked off in a spreadsheet. An integration takes that work away, along with the mistakes it causes. We always add monitoring too: integrations break quietly when a partner changes their API, and it's better to hear about it from the system than from a customer.",
          l: ["API design and documentation", "hooking up payment providers, delivery services, CRM and accounting", "data exchange between your internal systems", "queues and retries for when something fails", "monitoring and alerts"],
          g: "data gets entered once and finds its own way to wherever it's needed."
        },
        support: {
          s: "We look after your IT systems and keep improving them. Even the ones we didn't build!",
          b: "For us support isn't just \"fix it when it breaks\". It's updates that close security holes, monitoring that spots a problem before your users do, and small improvements along the way. If you inherited the system from another contractor, we start with an audit and documentation, because without them every change is a gamble.",
          l: ["watching availability and errors", "fixing bugs and installing security updates", "making backups and checking they actually restore", "planned improvements and new features", "audits and documentation for systems built by other contractors"],
          g: "a system that works, and a team that knows how it's put together."
        }
      }
    }
  };

  const LANGS = AIC.langs;
  const NEW_KEYS = new Set(["saas", "ai", "redhat"]);

  /* Послуги для поточної мови: наші тексти, а за їх відсутності — словник сайту */
  function services(c) {
    const own = (SVC[lang] || SVC.uk).items;
    return c.services.items.map((it) => {
      const o = own[it.key];
      return {
        key: it.key,
        title: it.title,
        s: o ? o.s : it.text,
        b: o ? o.b : it.details || "",
        l: o ? o.l : it.includes || [],
        g: o ? o.g : it.result || ""
      };
    });
  }
  const BANNER_COLORS = [
    ["#000080", "#ffff00"], ["#800000", "#ffffff"], ["#006400", "#ffffff"], ["#000000", "#00ff00"],
    ["#800080", "#ffffff"], ["#c0c0c0", "#000000"], ["#008080", "#ffffff"], ["#ffff00", "#000000"]
  ];

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let lang = store.get("aic-lang");
  if (!LANGS.includes(lang)) lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "uk";

  /* Лічильник відвідувань: «стаж» сторінки з 1998 року плюс ваші візити */
  const visits = (Number(store.get("aic-w90-hits")) || 0) + 1;
  store.set("aic-w90-hits", String(visits));
  const hits = 31337 + Math.floor((Date.now() - Date.UTC(1998, 0, 1)) / 864e5) * 3 + visits;

  const signSvg =
    '<svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true"><path d="M32 2 62 32 32 62 2 32z" fill="#ffd400" stroke="#000" stroke-width="3"/>' +
    '<circle cx="29" cy="19" r="4"/><path d="M29 24l-5 12m5-12 4 9 7 2M24 36l-4 10m4-10 6 7v5M40 35l8 11" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<path d="M39 42l11 8H36z"/></svg>';
  const mailSvg =
    '<svg viewBox="0 0 40 28" width="40" height="28" aria-hidden="true"><rect x="1" y="1" width="38" height="26" fill="#fff" stroke="#000" stroke-width="2"/>' +
    '<path d="M1 1l19 15L39 1" fill="none" stroke="#000" stroke-width="2"/><rect x="29" y="4" width="7" height="8" fill="#f00"/></svg>';

  const banner = (v, i, current) => {
    const [bg, fg] = BANNER_COLORS[i % BANNER_COLORS.length];
    return `<a class="w90-b88${current ? " here" : ""}" href="${esc(AIC.url(v.id, lang))}" style="background:${bg};color:${fg}"` +
      `${current ? ' aria-current="page"' : ""}>${v.year ? `<span class="y">${esc(v.year)}</span>` : ""}<span class="n">${esc(v.name[lang])}</span></a>`;
  };

  function render() {
    const c = AIC.content[lang];
    const u = UI[lang];
    const vs = AIC.variants;
    const idx = Math.max(0, vs.findIndex((v) => v.id === AIC.id));
    const prev = vs[(idx - 1 + vs.length) % vs.length];
    const next = vs[(idx + 1) % vs.length];
    const others = vs.filter((v) => v.id !== AIC.id);
    const random = others[Math.floor(Math.random() * others.length)];
    const updated = new Date().toLocaleDateString(u.locale);
    const marquee = `${c.hero.typedLead}: ${c.hero.typed.join(" ★ ")} ★ ${c.footer.slogan}`;
    const nav = ["about", "services", "partners", "contacts", "guestbook", "webring"];
    const svc = services(c);

    root.innerHTML =
      `<table class="w90-page" role="presentation"><tbody>` +
      // Шапка
      `<tr><td colspan="2" class="w90-hdr">` +
      `<img class="w90-logoimg" src="${esc(AIC.logo)}" alt="" width="62" height="75">` +
      `<p class="w90-logo">ArtIntelliCo</p>` +
      `<p class="w90-welcome">${esc(u.welcome)}</p>` +
      `<div class="w90-langs" role="group" aria-label="${esc(u.langLabel)}">${esc(u.langLabel)} ` +
      LANGS.map((l) => `<button type="button" class="w90-bvl" data-lang="${l}" lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("") +
      `</div></td></tr>` +
      // Бігучий рядок
      `<tr><td colspan="2" class="w90-marq"><div class="w90-marquee"><span>${esc(marquee)}</span></div></td></tr>` +
      `<tr>` +
      // Ліва колонка
      `<td class="w90-nav"><nav class="w90-navlinks" aria-label="ArtIntelliCo">` +
      nav.map((k) => `<a class="w90-bvl" href="#w90-${k}" data-jump="w90-${k}">${esc(u.nav[k])}</a>`).join("") +
      `</nav>` +
      `<h2>${esc(u.counter)}</h2><div class="w90-counter" aria-label="${hits}">` +
      [...String(hits).padStart(7, "0")].map((d) => `<span aria-hidden="true">${d}</span>`).join("") + `</div>` +
      `<div class="w90-b88s" aria-hidden="true">` +
      `<span class="w90-b88" style="background:#fff;color:#000">MADE WITH<br>NOTEPAD</span>` +
      `<span class="w90-b88" style="background:#000080;color:#fff">NETSCAPE<br>NOW!</span>` +
      `<span class="w90-b88" style="background:#008080;color:#ff0">GET IE 4.0<br>TODAY</span>` +
      `<span class="w90-b88" style="background:#000;color:#0f0">HTML 3.2<br>VALID!</span>` +
      `</div></td>` +
      // Основна колонка
      `<td class="w90-main">` +
      `<section id="w90-about"><h1>${esc(c.hero.title)}</h1>` +
      `<p>${esc(c.hero.text)}</p>` +
      `<p class="w90-lead">${esc(c.hero.typedLead)}:</p>` +
      `<ul class="w90-stars">${c.hero.typed.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>` +
      `<div class="w90-uc">${signSvg}<span>${esc(u.construction)}</span><span class="tape" aria-hidden="true"></span></div>` +
      `<hr class="w90-rainbow">` +
      `<section id="w90-services"><h2>${esc(c.services.heading)}</h2>` +
      `<p>${esc((SVC[lang] || SVC.uk).lead)}</p>` +
      `<table class="w90-svc" border="1"><thead><tr>${u.cols.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>` +
      svc.map((s, i) =>
        `<tr><td>${i + 1}</td><td><b>${esc(s.title)}</b>${NEW_KEYS.has(s.key) ? '<span class="w90-new">NEW!</span>' : ""}</td>` +
        `<td>${esc(s.s)}<br><a class="w90-more" href="#w90-svc-${esc(s.key)}" data-jump="w90-svc-${esc(s.key)}">${esc(u.svc.more)}</a></td></tr>`
      ).join("") +
      `</tbody></table>` +
      // Якірні блоки з подробицями під таблицею
      `<h3 class="w90-dethead">${esc(u.svc.details)}</h3>` +
      svc.map((s, i) =>
        `<div class="w90-det" id="w90-svc-${esc(s.key)}">` +
        `<h4>${i + 1}. ${esc(s.title)}${NEW_KEYS.has(s.key) ? '<span class="w90-new">NEW!</span>' : ""}</h4>` +
        (s.b ? `<p>${esc(s.b)}</p>` : "") +
        (s.l.length ? `<p class="w90-inc">${esc(u.svc.incl)}</p><ul class="w90-dots">${s.l.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "") +
        (s.g ? `<p class="w90-get"><b>${esc(u.svc.get)}</b> ${esc(s.g)}</p>` : "") +
        `<p class="w90-back"><a href="#w90-services" data-jump="w90-services">${esc(u.svc.back)}</a></p></div>`
      ).join("") +
      `</section>` +
      `<hr class="w90-rainbow">` +
      `<section id="w90-partners"><h2>${esc(c.partners.heading)}</h2><ul class="w90-partners">` +
      c.partners.items.map((p) => `<li>${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name)}</li>`).join("") +
      `</ul></section>` +
      `<hr class="w90-rainbow">` +
      `<section id="w90-contacts"><h2>${esc(c.contacts.heading)}</h2>` +
      `<p>${esc(c.contacts.text)}</p>` +
      `<p>${esc(c.contacts.emailLabel)}: <a class="w90-mail" href="mailto:${esc(c.contacts.email)}">${mailSvg}${esc(c.contacts.email)}</a></p>` +
      `<p><b>${esc(u.emailMe)}</b></p></section>` +
      `<hr class="w90-rainbow">` +
      `<section id="w90-guestbook"><h2>${esc(u.gb.title)}</h2>` +
      `<form class="w90-gb" id="w90-gb"><table role="presentation"><tbody>` +
      `<tr><td><label for="w90-gb-name">${esc(u.gb.name)}</label></td><td><input id="w90-gb-name" name="name" type="text" maxlength="60"></td></tr>` +
      `<tr><td><label for="w90-gb-email">${esc(u.gb.email)}</label></td><td><input id="w90-gb-email" name="email" type="email" maxlength="80"></td></tr>` +
      `<tr><td><label for="w90-gb-home">${esc(u.gb.homepage)}</label></td><td><input id="w90-gb-home" name="homepage" type="text" maxlength="120" placeholder="http://"></td></tr>` +
      `<tr><td><label for="w90-gb-found">${esc(u.gb.found)}</label></td><td><select id="w90-gb-found" name="found">${u.gb.foundOpts.map((o) => `<option>${esc(o)}</option>`).join("")}</select></td></tr>` +
      `<tr><td><label for="w90-gb-comment">${esc(u.gb.comment)}</label></td><td><textarea id="w90-gb-comment" name="comment" maxlength="2000"></textarea></td></tr>` +
      `</tbody></table>` +
      `<div class="row"><button type="submit" class="w90-bvl">${esc(u.gb.submit)}</button><button type="reset" class="w90-bvl">${esc(u.gb.reset)}</button></div>` +
      `<p class="note">${esc(u.gb.note)}</p></form></section>` +
      `<hr class="w90-rainbow">` +
      `<section id="w90-webring"><h2>${esc(u.nav.webring)}</h2><div class="w90-ring">` +
      `<div class="title">${esc(u.ring.title)}</div>` +
      `<div class="nav"><a href="${esc(AIC.url(prev.id, lang))}">${esc(u.ring.prev)}</a> | ` +
      `<a href="${esc(AIC.url(random.id, lang))}">${esc(u.ring.random)}</a> | ` +
      `<a href="${esc(AIC.url(next.id, lang))}">${esc(u.ring.next)}</a></div>` +
      `<div class="list">` +
      vs.map((v, i) => v.id === AIC.id
        ? `<span class="cell">${banner(v, i, true)}${esc(u.ring.here)}</span>`
        : `<span class="cell">${banner(v, i, false)}</span>`
      ).join("") +
      `</div></div></section>` +
      `<p style="text-align:center;margin-top:14px"><a href="#w90-about" data-jump="w90-about">^ ${esc(u.top)} ^</a></p>` +
      `</td></tr>` +
      // Підвал
      `<tr><td colspan="2" class="w90-foot"><footer>` +
      `<p>© ${esc(c.footer.year)} ArtIntelliCo. ${esc(c.footer.rights)}</p>` +
      `<p>${esc(c.footer.legalName)}</p>` +
      `<p class="slogan">${esc(c.footer.slogan)}</p>` +
      `<p><a href="${esc(c.classic.url)}">${esc(c.classic.label)}</a></p>` +
      `<p class="tiny">${esc(u.bestViewed)}<br>${esc(u.updated)} ${esc(updated)}</p>` +
      `</footer></td></tr>` +
      `</tbody></table>`;
  }

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    const top = root.scrollTop;
    render();
    root.scrollTop = top;
    const btn = root.querySelector(`[data-lang="${l}"]`);
    if (btn) btn.focus();
  }

  /* Якорі прокручують контейнер сторінки, а не вікно */
  function jump(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = root.scrollTop + el.getBoundingClientRect().top - root.getBoundingClientRect().top - 8;
    root.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  }

  root.addEventListener("click", (e) => {
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) { setLang(langBtn.dataset.lang); return; }
    const link = e.target.closest("[data-jump]");
    if (link) { e.preventDefault(); jump(link.dataset.jump); }
  });

  /* Гостьова книга: лист у поштовій програмі, без мережі */
  root.addEventListener("submit", (e) => {
    if (e.target.id !== "w90-gb") return;
    e.preventDefault();
    const c = AIC.content[lang];
    const u = UI[lang];
    const f = e.target.elements;
    const body = [
      `${u.gb.name} ${f.name.value}`,
      `${u.gb.email} ${f.email.value}`,
      `${u.gb.homepage} ${f.homepage.value}`,
      `${u.gb.found} ${f.found.value}`,
      "",
      f.comment.value
    ].join("\n");
    location.href = AIC.mailto(`mailto:${c.contacts.email}?subject=${encodeURIComponent(u.gb.subject)}&body=${encodeURIComponent(body)}`);
  });

  document.documentElement.lang = lang;
  render();
})();
