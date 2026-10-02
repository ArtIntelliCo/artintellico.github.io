/* Сайт 2010-х: лендинг у дусі шаблонів Bootstrap 3 з ThemeForest (2012–2014). Тексти — з window.AIC.content, послуги — власні, у SVC */
(() => {
  const AIC = window.AIC;
  const root = document.getElementById("w10");
  const topBtn = document.getElementById("w10Top");
  const modal = document.getElementById("w10Modal");
  if (!AIC || !AIC.content || !root) return;

  const LANGS = AIC.langs;
  const LANG_NAMES = { uk: "Українська", en: "English", ru: "Русский" };

  /* Рядки інтерфейсу; тексти сайту — у AIC.content */
  const UI = {
    uk: {
      home: "Головна", services: "Послуги", partners: "Партнери", contacts: "Контакти",
      versions: "Версії", versionsHead: "Цей сайт у різні роки", language: "Мова", menu: "Меню",
      learnMore: "Дізнатися більше", getInTouch: "Зв'язатися з нами", more: "Детальніше",
      partnersSub: "Технології, з якими ми працюємо щодня",
      name: "Ваше ім'я", email: "Ваш email", message: "Повідомлення", send: "Надіслати повідомлення",
      sent: "Відкриваємо вашу поштову програму…", subject: "Запит із сайту",
      writeUs: "Напишіть нам", share: "Поділитися", like: "Подобається",
      about: "Про компанію", nav: "Навігація", contact: "Контакти",
      topic: "Тема", includes: "Що входить", result: "Результат", close: "Закрити", discuss: "Обговорити проєкт",
      backToTop: "Нагору", prev: "Попередній слайд", next: "Наступний слайд", slide: "Слайд"
    },
    en: {
      home: "Home", services: "Services", partners: "Partners", contacts: "Contact",
      versions: "Versions", versionsHead: "This site through the years", language: "Language", menu: "Menu",
      learnMore: "Learn more", getInTouch: "Get in touch", more: "Read more",
      partnersSub: "Technologies we work with every day",
      name: "Your name", email: "Your email", message: "Message", send: "Send message",
      sent: "Opening your email app…", subject: "Website enquiry",
      writeUs: "Drop us a line", share: "Share", like: "Like",
      about: "About us", nav: "Navigation", contact: "Contact",
      topic: "Subject", includes: "What's included", result: "Result", close: "Close", discuss: "Discuss your project",
      backToTop: "Back to top", prev: "Previous slide", next: "Next slide", slide: "Slide"
    },
    ru: {
      home: "Главная", services: "Услуги", partners: "Партнёры", contacts: "Контакты",
      versions: "Версии", versionsHead: "Этот сайт в разные годы", language: "Язык", menu: "Меню",
      learnMore: "Узнать больше", getInTouch: "Связаться с нами", more: "Подробнее",
      partnersSub: "Технологии, с которыми мы работаем каждый день",
      name: "Ваше имя", email: "Ваш email", message: "Сообщение", send: "Отправить сообщение",
      sent: "Открываем вашу почтовую программу…", subject: "Запрос с сайта",
      writeUs: "Напишите нам", share: "Поделиться", like: "Нравится",
      about: "О компании", nav: "Навигация", contact: "Контакты",
      topic: "Тема", includes: "Что входит", result: "Результат", close: "Закрыть", discuss: "Обсудить проект",
      backToTop: "Наверх", prev: "Предыдущий слайд", next: "Следующий слайд", slide: "Слайд"
    }
  };

  /* Послуги мовою лендингу 2013 року: lead — на картці, pitch/list/result — у модальному вікні.
     Назви — з AIC.content; якщо тут чогось бракує, текст береться звідти ж. */
  const SVC = {
    uk: {
      sub: "Ми не продаємо технологію, яку вміємо. Спершу розбираємося у вашій задачі, потім обираємо інструменти. А якщо вам вистачить готового сервісу за підпискою, чесно про це скажемо.",
      items: {
        concept: {
          lead: "Знайте, що будувати, ще до першого рядка коду",
          pitch: "Найдорожчі помилки в ІТ-проєктах роблять на старті, коли систему починають будувати під задачу, яку ніхто чітко не сформулював. Ми розмовляємо з людьми, які працюватимуть із системою: бухгалтерією, складом, менеджерами. І якщо з'ясується, що вам підійде готовий продукт із доналаштуванням, ви почуєте це від нас до того, як витратите бюджет на розробку.",
          list: ["Інтерв'ю з працівниками та розбір поточних процесів", "Бізнес-вимоги й сценарії роботи", "Порівняння готових рішень і розробки на замовлення", "Технічне завдання з оцінкою строків і бюджету за етапами"],
          result: "Документ, за яким будь-яка команда, наша чи інша, може оцінити проєкт і взятися до роботи."
        },
        saas: {
          lead: "Сервіс, який клієнти купують самі — без дзвінка в підтримку",
          pitch: "Успіх SaaS вирішує не код, а те, наскільки просто новому клієнту зареєструватися, оплатити й почати працювати. Мультитенантність, білінг і права доступу ми закладаємо з першого дня, бо доробляти їх, коли клієнти вже всередині, у рази дорожче. Першу версію випускаємо рано: реальні користувачі швидко покажуть, без яких функцій можна обійтися.",
          list: ["Мультитенантна архітектура з ізоляцією даних клієнтів", "Реєстрація, тарифи, підписки й онлайн-оплата", "Особисті кабінети, ролі та права доступу", "Інтеграції та відкритий API для ваших клієнтів", "Масштабування під зростання навантаження"],
          result: "Продукт, який продається за підпискою, а не проєкт, який щоразу впроваджують вручну."
        },
        web: {
          lead: "Сайт, який оцінюють за заявками, а не за картинкою в портфоліо",
          pitch: "Ще до старту домовляємося, що вважати результатом, і вмикаємо аналітику до запуску, а не через пів року. Технологію підбираємо під задачу: лендинг не потребує важкої платформи, а маркетплейс не вміститься в конструктор. Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси.",
          list: ["Прототип і дизайн інтерфейсів", "Frontend, backend і панель адміністрування", "Інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидке завантаження й аналітика", "Запуск і супровід"],
          result: "Вебсервіс, де видно, скільки заявок і грошей він приносить."
        },
        mobile: {
          lead: "Застосунок, до якого клієнти повертаються, — або чесне «він вам не потрібен»",
          pitch: "Застосунок окуповується, коли клієнт користується ним регулярно: робить повторні замовлення, стежить за статусом, накопичує бонуси. Якщо до вас заходять раз на рік, зручний мобільний сайт обійдеться дешевше, і ми скажемо про це до початку робіт. Нативна чи кросплатформна розробка — вирішуємо за бюджетом і за тим, наскільки застосунку потрібні камера, геолокація й офлайн-режим.",
          list: ["Застосунки для iOS та Android", "Серверна частина та API", "Адмінпанель для контенту, замовлень і користувачів", "Push-сповіщення та аналітика", "Публікація в App Store і Google Play"],
          result: "Застосунок, який проходить модерацію App Store і Google Play і яким ваша команда керує без розробників."
        },
        ai: {
          lead: "ШІ-агенти, які забирають рутину у ваших працівників",
          pitch: "ШІ-агент сам виконує рутинні кроки процесу: розбирає заявки, заповнює CRM, готує відповіді клієнтам, а людина перевіряє результат. Водночас ми скептичніші за більшість: половину ідей «додаймо нейромережу» закриває звичайна автоматизація, і ми про це скажемо. Тому все починається з пілота на ваших даних — точність ви бачите до основної розробки, а не після.",
          list: ["ШІ-агенти, що розбирають заявки, заповнюють CRM і готують відповіді клієнтам", "Чат-боти й асистенти для клієнтів і працівників", "Розпізнавання та розбір документів", "Класифікація звернень і пошук у базі знань", "Прогнози попиту й аналіз даних", "Пілот з оцінкою якості на ваших даних"],
          result: "Процес, який раніше вели люди, тепер виконує система, а контроль лишається за людиною."
        },
        crm: {
          lead: "Система під ваші процеси, а не процеси під систему",
          pitch: "Коробкова CRM працює, доки ваш процес стандартний. Коли менеджери ведуть половину справ у таблицях, бо система «так не вміє», власна розробка стає дешевшою. Ми переносимо дані зі старих систем і таблиць і запускаємо систему по відділах, тож робота не зупиняється ні на день.",
          list: ["Модулі продажів, складу, виробництва, фінансів — за потреби", "Ролі, права доступу та журнал дій", "Звіти й дашборди для керівника", "Перенесення даних із таблиць і старих систем", "Інтеграція з бухгалтерією, телефонією та поштою"],
          result: "Одна система замість зоопарку таблиць: керівник бачить стан справ без щотижневих звітів від кожного відділу."
        },
        cloud: {
          lead: "Хмара AWS, яка переживає збої і не дорожчає без причини",
          pitch: "Хмара не завжди дешевша за власний сервер. Вона виграє, коли навантаження стрибає, потрібна відмовостійкість або нові середовища мають з'являтися за хвилини, а не за тиждень. Тому переїзд до Amazon Web Services починаємо з аудиту й розрахунку вартості, а переносимо поетапно, з планом відкату на кожному кроці.",
          list: ["Аудит поточної інфраструктури й розрахунок вартості", "Архітектура в AWS і план міграції", "Перенесення серверів, баз даних і файлів", "Резервне копіювання та моніторинг", "Оптимізація витрат після переїзду"],
          result: "Інфраструктура, яка переживає відмову сервера, і рахунок за хмару, який ви розумієте."
        },
        redhat: {
          lead: "Інфраструктура, яка не тримається на пам'яті одного адміністратора",
          pitch: "Red Hat обирають, коли сервери мають роками працювати й проходити аудит. Підписка окупається підтримкою виробника й довгим життєвим циклом: Red Hat Enterprise Linux підтримується десять років. Ми проєктуємо інфраструктуру під ваші навантаження й описуємо конфігурацію в Ansible, тож будь-який сервер перезбирається за сценарієм. Red Hat — наш партнер, тому з підписками й підтримкою виробника теж допоможемо.",
          list: ["Аудит поточних серверів і план переходу", "Red Hat Enterprise Linux із централізованими оновленнями через Red Hat Satellite", "Контейнерна платформа OpenShift для ваших застосунків", "Автоматизація налаштування й розгортання через Ansible", "Єдине керування обліковими записами й доступом (Identity Management)", "Моніторинг, резервне копіювання й документація для вашої команди"],
          result: "Інфраструктура, яку можна перевірити, повторити й передати іншій команді без втрати знань."
        },
        api: {
          lead: "Вводьте дані один раз — далі вони дійдуть самі",
          pitch: "Найчастіший біль, який ми бачимо, — подвійне введення: замовлення із сайту вручну переносять в облік, оплати звіряють у таблиці. Інтеграція прибирає цю роботу разом із помилками. А моніторинг налаштовуємо обов'язково: інтеграції ламаються тихо, коли партнер змінює свій API, і про це краще дізнатися від системи, ніж від клієнта.",
          list: ["Проєктування й документація API", "Інтеграція з платіжними системами, службами доставки, CRM та обліком", "Обмін даними між внутрішніми системами", "Черги й повторні спроби при збоях", "Моніторинг і сповіщення"],
          result: "Дані вводяться один раз і самі доходять туди, де потрібні."
        },
        support: {
          lead: "Підтримка, яка помічає проблему раніше за ваших користувачів",
          pitch: "Підтримка — це більше, ніж виправлення помилок: оновлення, що закривають уразливості, моніторинг і невеликі доопрацювання по ходу. Беремося й за системи, які писали не ми. У такому разі починаємо з аудиту й документації, бо без неї кожна правка — лотерея.",
          list: ["Моніторинг доступності та помилок", "Виправлення помилок і оновлення безпеки", "Резервне копіювання й перевірка відновлення", "Доопрацювання та нові функції за планом", "Аудит і документація систем від інших підрядників"],
          result: "Система, яка працює, і команда, яка знає, як вона влаштована."
        }
      }
    },
    ru: {
      sub: "Мы не продаём технологию, которую умеем. Сначала разбираемся в вашей задаче, потом выбираем инструменты. А если вам хватит готового сервиса по подписке, честно об этом скажем.",
      items: {
        concept: {
          lead: "Знайте, что строить, ещё до первой строки кода",
          pitch: "Самые дорогие ошибки в ИТ-проектах делают на старте, когда систему начинают строить под задачу, которую никто чётко не сформулировал. Мы разговариваем с людьми, которые будут работать с системой: бухгалтерией, складом, менеджерами. И если окажется, что вам подойдёт готовый продукт с донастройкой, вы услышите это от нас до того, как потратите бюджет на разработку.",
          list: ["Интервью с сотрудниками и разбор текущих процессов", "Бизнес-требования и сценарии работы", "Сравнение готовых решений и заказной разработки", "Техническое задание с оценкой сроков и бюджета по этапам"],
          result: "Документ, по которому любая команда, наша или другая, может оценить проект и взяться за работу."
        },
        saas: {
          lead: "Сервис, который клиенты покупают сами — без звонка в поддержку",
          pitch: "Успех SaaS решает не код, а то, насколько просто новому клиенту зарегистрироваться, оплатить и начать работать. Мультитенантность, биллинг и права доступа мы закладываем с первого дня, потому что дорабатывать их, когда клиенты уже внутри, в разы дороже. Первую версию выпускаем рано: реальные пользователи быстро покажут, без каких функций можно обойтись.",
          list: ["Мультитенантная архитектура с изоляцией данных клиентов", "Регистрация, тарифы, подписки и онлайн-оплата", "Личные кабинеты, роли и права доступа", "Интеграции и открытый API для ваших клиентов", "Масштабирование под рост нагрузки"],
          result: "Продукт, который продаётся по подписке, а не проект, который каждый раз внедряют вручную."
        },
        web: {
          lead: "Сайт, который оценивают по заявкам, а не по картинке в портфолио",
          pitch: "Ещё до старта договариваемся, что считать результатом, и включаем аналитику до запуска, а не через полгода. Технологию подбираем под задачу: лендингу не нужна тяжёлая платформа, а маркетплейс не поместится в конструктор. Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы.",
          list: ["Прототип и дизайн интерфейсов", "Frontend, backend и панель администрирования", "Интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, быстрая загрузка и аналитика", "Запуск и сопровождение"],
          result: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        mobile: {
          lead: "Приложение, в которое клиенты возвращаются, — или честное «оно вам не нужно»",
          pitch: "Приложение окупается, когда клиент пользуется им регулярно: делает повторные заказы, следит за статусом, копит бонусы. Если к вам заходят раз в год, удобный мобильный сайт обойдётся дешевле, и мы скажем об этом до начала работ. Нативная или кроссплатформенная разработка — решаем по бюджету и по тому, насколько приложению нужны камера, геолокация и офлайн-режим.",
          list: ["Приложения для iOS и Android", "Серверная часть и API", "Админ-панель для контента, заказов и пользователей", "Push-уведомления и аналитика", "Публикация в App Store и Google Play"],
          result: "Приложение, которое проходит модерацию App Store и Google Play и которым ваша команда управляет без разработчиков."
        },
        ai: {
          lead: "ИИ-агенты, которые забирают рутину у ваших сотрудников",
          pitch: "ИИ-агент сам выполняет рутинные шаги процесса: разбирает заявки, заполняет CRM, готовит ответы клиентам, а человек проверяет результат. При этом мы скептичнее большинства: половину идей «добавим нейросеть» закрывает обычная автоматизация, и мы об этом скажем. Поэтому всё начинается с пилота на ваших данных — точность вы видите до основной разработки, а не после.",
          list: ["ИИ-агенты, которые разбирают заявки, заполняют CRM и готовят ответы клиентам", "Чат-боты и ассистенты для клиентов и сотрудников", "Распознавание и разбор документов", "Классификация обращений и поиск по базе знаний", "Прогнозы спроса и анализ данных", "Пилот с оценкой качества на ваших данных"],
          result: "Процесс, который раньше вели люди, теперь выполняет система, а контроль остаётся за человеком."
        },
        crm: {
          lead: "Система под ваши процессы, а не процессы под систему",
          pitch: "Коробочная CRM работает, пока ваш процесс стандартный. Когда менеджеры ведут половину дел в таблицах, потому что система «так не умеет», собственная разработка становится дешевле. Мы переносим данные из старых систем и таблиц и запускаем систему по отделам, так что работа не останавливается ни на день.",
          list: ["Модули продаж, склада, производства, финансов — по необходимости", "Роли, права доступа и журнал действий", "Отчёты и дашборды для руководителя", "Перенос данных из таблиц и старых систем", "Интеграция с бухгалтерией, телефонией и почтой"],
          result: "Одна система вместо зоопарка таблиц: руководитель видит положение дел без еженедельных отчётов от каждого отдела."
        },
        cloud: {
          lead: "Облако AWS, которое переживает сбои и не дорожает без причины",
          pitch: "Облако не всегда дешевле своего сервера. Оно выигрывает, когда нагрузка скачет, нужна отказоустойчивость или новые окружения должны появляться за минуты, а не за неделю. Поэтому переезд в Amazon Web Services начинаем с аудита и расчёта стоимости, а переносим поэтапно, с планом отката на каждом шаге.",
          list: ["Аудит текущей инфраструктуры и расчёт стоимости", "Архитектура в AWS и план миграции", "Перенос серверов, баз данных и файлов", "Резервное копирование и мониторинг", "Оптимизация расходов после переезда"],
          result: "Инфраструктура, которая переживает отказ сервера, и счёт за облако, который вы понимаете."
        },
        redhat: {
          lead: "Инфраструктура, которая не держится на памяти одного администратора",
          pitch: "Red Hat выбирают, когда серверы должны годами работать и проходить аудит. Подписка окупается поддержкой производителя и длинным жизненным циклом: Red Hat Enterprise Linux поддерживается десять лет. Мы проектируем инфраструктуру под ваши нагрузки и описываем конфигурацию в Ansible, так что любой сервер пересобирается по сценарию. Red Hat — наш партнёр, поэтому с подписками и поддержкой производителя тоже поможем.",
          list: ["Аудит текущих серверов и план перехода", "Red Hat Enterprise Linux с централизованными обновлениями через Red Hat Satellite", "Контейнерная платформа OpenShift для ваших приложений", "Автоматизация настройки и развёртывания через Ansible", "Единое управление учётными записями и доступом (Identity Management)", "Мониторинг, резервное копирование и документация для вашей команды"],
          result: "Инфраструктура, которую можно проверить, повторить и передать другой команде без потери знаний."
        },
        api: {
          lead: "Вводите данные один раз — дальше они дойдут сами",
          pitch: "Самая частая боль, которую мы видим, — двойной ввод: заказы с сайта вручную переносят в учёт, оплаты сверяют в таблице. Интеграция убирает эту работу вместе с ошибками. А мониторинг настраиваем обязательно: интеграции ломаются тихо, когда партнёр меняет свой API, и узнать об этом лучше от системы, чем от клиента.",
          list: ["Проектирование и документация API", "Интеграция с платёжными системами, службами доставки, CRM и учётом", "Обмен данными между внутренними системами", "Очереди и повторные попытки при сбоях", "Мониторинг и оповещения"],
          result: "Данные вводятся один раз и сами доходят туда, где нужны."
        },
        support: {
          lead: "Поддержка, которая замечает проблему раньше ваших пользователей",
          pitch: "Поддержка — это больше, чем исправление ошибок: обновления, которые закрывают уязвимости, мониторинг и небольшие доработки по ходу. Берёмся и за системы, которые писали не мы. В этом случае начинаем с аудита и документации, потому что без неё каждая правка — лотерея.",
          list: ["Мониторинг доступности и ошибок", "Исправление ошибок и обновления безопасности", "Резервное копирование и проверка восстановления", "Доработки и новые функции по плану", "Аудит и документация систем от других подрядчиков"],
          result: "Система, которая работает, и команда, которая знает, как она устроена."
        }
      }
    },
    en: {
      sub: "We don't sell whatever technology we happen to know. First we get to grips with your problem, then we choose the tools. And if a ready-made subscription service will do the job, we'll tell you straight.",
      items: {
        concept: {
          lead: "Know what to build before the first line of code",
          pitch: "The costliest mistakes in IT projects are made at the start, when a system gets built for a problem nobody clearly defined. We talk to the people who'll actually use it: accounting, the warehouse, sales managers. And if it turns out a configured off-the-shelf product will do, you'll hear it from us before you spend the budget on development.",
          list: ["Staff interviews and a review of current processes", "Business requirements and user scenarios", "Off-the-shelf products and custom development, compared", "A specification with time and budget estimates per phase"],
          result: "A document any team, ours or another, can estimate from and get to work on."
        },
        saas: {
          lead: "A service customers buy on their own, no support call needed",
          pitch: "SaaS succeeds or fails on how easily a new customer can sign up, pay and start working, not on the code. We build in multi-tenancy, billing and permissions from day one, because adding them once customers are inside costs several times more. And we ship the first version early: real users quickly show which features you can live without.",
          list: ["Multi-tenant architecture with isolated customer data", "Sign-up, plans, subscriptions and online payments", "Customer dashboards, roles and permissions", "Integrations and a public API for your customers", "Scaling as load grows"],
          result: "A product that sells by subscription, not a project that has to be rolled out by hand every time."
        },
        web: {
          lead: "A website measured in leads, not in portfolio screenshots",
          pitch: "Before we start, we agree on what counts as a result and switch on analytics before launch, not six months later. The technology fits the task: a landing page doesn't need a heavy platform, and a marketplace won't fit into a site builder. We build corporate websites, marketplaces, online stores, booking systems and internal web tools.",
          list: ["Prototype and interface design", "Frontend, backend and admin panel", "Integrations with payments, delivery, CRM and accounting systems", "SEO groundwork, fast loading and analytics", "Launch and ongoing support"],
          result: "A web service that shows how many leads and how much revenue it brings in."
        },
        mobile: {
          lead: "An app customers keep coming back to, or an honest \"you don't need one\"",
          pitch: "An app pays off when customers use it regularly: reordering, tracking a delivery, collecting loyalty points. If people visit you once a year, a good mobile website is cheaper, and we'll say so before any work starts. Native or cross-platform is decided by budget and by how much the app needs the camera, location and offline mode.",
          list: ["iOS and Android apps", "Server side and API", "Admin panel for content, orders and users", "Push notifications and analytics", "Publishing to the App Store and Google Play"],
          result: "An app that passes App Store and Google Play review, and that your team runs without a developer."
        },
        ai: {
          lead: "AI agents that take the routine off your team's plate",
          pitch: "An AI agent handles routine process steps on its own: triaging requests, filling in the CRM, drafting replies to customers, while a person checks the result. At the same time we're more sceptical than most: half of the \"let's add a neural network\" ideas are solved by plain automation, and we'll tell you when that's the case. So everything starts with a pilot on your own data, and you see the accuracy before the main build, not after.",
          list: ["AI agents that triage requests, fill in the CRM and draft customer replies", "Chatbots and assistants for customers and staff", "Document recognition and data extraction", "Request classification and knowledge-base search", "Demand forecasting and data analysis", "A pilot with quality measured on your data"],
          result: "A process people used to run by hand is now done by the system, and a person stays in control."
        },
        crm: {
          lead: "A system that fits your processes, not the other way round",
          pitch: "Off-the-shelf CRM works as long as your process is standard. Once managers are running half their work in spreadsheets because the system \"can't do that\", building your own becomes cheaper. We migrate data from old systems and spreadsheets and roll out department by department, so work never stops for a day.",
          list: ["Sales, warehouse, production and finance modules, as needed", "Roles, permissions and an audit log", "Reports and dashboards for management", "Data migration from spreadsheets and legacy systems", "Integration with accounting, telephony and email"],
          result: "One system instead of a zoo of spreadsheets: management sees where things stand without weekly reports from every department."
        },
        cloud: {
          lead: "AWS infrastructure that survives failures and doesn't creep up in price",
          pitch: "The cloud isn't always cheaper than your own server. It wins when load spikes, when you need fault tolerance, or when new environments have to appear in minutes rather than a week. So a move to Amazon Web Services starts with an audit and a cost estimate, and happens in stages, with a rollback plan at every step.",
          list: ["Audit of the current infrastructure and a cost estimate", "AWS architecture and a migration plan", "Moving servers, databases and files", "Backups and monitoring", "Cost optimisation after the move"],
          result: "Infrastructure that survives a server failure, and a cloud bill you understand."
        },
        redhat: {
          lead: "Infrastructure that doesn't live in one admin's head",
          pitch: "Companies choose Red Hat when servers have to run for years and pass audits. The subscription pays for itself through vendor support and a long lifecycle: Red Hat Enterprise Linux is supported for ten years. We design the infrastructure around your workloads and describe configuration in Ansible, so any server can be rebuilt from a playbook. Red Hat is our partner, so we'll help with subscriptions and vendor support as well.",
          list: ["Audit of your current servers and a migration plan", "Red Hat Enterprise Linux with centralised updates through Red Hat Satellite", "The OpenShift container platform for your applications", "Configuration and deployment automation with Ansible", "Central identity and access management (Identity Management)", "Monitoring, backups and documentation for your team"],
          result: "Infrastructure you can audit, reproduce and hand over to another team without losing knowledge."
        },
        api: {
          lead: "Enter data once and let it travel on its own",
          pitch: "The most common pain we see is double entry: website orders retyped into accounting, payments reconciled in a spreadsheet. An integration removes that work along with the mistakes. And we always set up monitoring, because integrations break quietly when a partner changes their API, and you'd rather hear about it from the system than from a customer.",
          list: ["API design and documentation", "Integrations with payment providers, delivery services, CRM and accounting", "Data exchange between internal systems", "Queues and retries when something fails", "Monitoring and alerts"],
          result: "Data is entered once and gets where it needs to go on its own."
        },
        support: {
          lead: "Support that notices a problem before your users do",
          pitch: "Support is more than fixing bugs: it's updates that close security holes, monitoring, and small improvements along the way. We also take on systems we didn't build. In that case we start with an audit and documentation, because without them every change is a gamble.",
          list: ["Availability and error monitoring", "Bug fixes and security updates", "Backups and restore testing", "Planned improvements and new features", "Audit and documentation of systems built by other contractors"],
          result: "A system that works, and a team that knows how it's put together."
        }
      }
    }
  };

  /* Плоскі кольори Flat UI — по одному на послугу */
  const COLORS = ["#1abc9c", "#3498db", "#9b59b6", "#e67e22", "#e74c3c", "#2ecc71", "#34495e", "#c0392b", "#f39c12", "#16a085"];
  const BRANDS = { "Red Hat": "#e00", Microsoft: "#00a4ef", "Amazon Web Services": "#ff9900", Veeam: "#00b336", VMware: "#607078", Dell: "#007db8", UNIO24: "#ff5702" };

  /* Іконки в дусі Glyphicons / Font Awesome 3, намальовані заново */
  const svg = (body) => `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  const ICONS = {
    concept: svg('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>'),
    saas: svg('<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="m3 13 9 5 9-5"/>'),
    web: svg('<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M3 8h18"/>'),
    mobile: svg('<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>'),
    ai: svg('<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/>'),
    crm: svg('<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>'),
    cloud: svg('<path d="M7 18h10.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6 1.6A3.3 3.3 0 0 0 7 18z"/>'),
    redhat: svg('<rect x="4" y="3.5" width="16" height="7" rx="1.2"/><rect x="4" y="13.5" width="16" height="7" rx="1.2"/><path d="M7.5 7h.01M7.5 17h.01M11 7h6M11 17h6"/>'),
    api: svg('<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
    support: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>')
  };
  const MAIL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5.3-8-5.3zM5.6 7l6.4 4.2L18.4 7H5.6z"/></svg>';

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* сховище недоступне */ } }
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = store.get("aic-lang");
  if (!LANGS.includes(lang)) lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "uk";

  const c = () => AIC.content[lang];
  const u = () => UI[lang];

  /* ---------- Розмітка ---------- */
  function navbar() {
    const s = u();
    const versions = AIC.variants.map((v) =>
      `<li><a href="${esc(AIC.url(v.id, lang))}"${v.id === AIC.id ? ' class="active" aria-current="page"' : ""}>` +
      `<span class="yr">${esc(v.year)}</span>${esc(v.name[lang])}</a></li>`
    ).join("");
    const langs = LANGS.map((l) =>
      `<li><a href="#" data-lang="${l}"${l === lang ? ' class="active" aria-current="true"' : ""}><span class="yr">${l.toUpperCase()}</span>${LANG_NAMES[l]}</a></li>`
    ).join("");
    return `
      <header class="navbar" id="w10Nav">
        <div class="container">
          <a class="brand" href="#top" data-scroll="top"><img class="logo" src="${esc(AIC.logo)}" alt="" aria-hidden="true"><span>Art<b>Intelli</b>Co</span></a>
          <ul class="nav" id="w10Menu">
            <li><a href="#top" data-scroll="top" data-spy="top">${esc(s.home)}</a></li>
            <li><a href="#services" data-scroll="services" data-spy="services">${esc(s.services)}</a></li>
            <li><a href="#partners" data-scroll="partners" data-spy="partners">${esc(s.partners)}</a></li>
            <li><a href="#contacts" data-scroll="contacts" data-spy="contacts">${esc(s.contacts)}</a></li>
            <li class="dropdown">
              <button type="button" class="dropdown-toggle" aria-expanded="false" aria-haspopup="true">${esc(s.versions)} <b class="caret"></b></button>
              <ul class="dropdown-menu"><li class="dropdown-header">${esc(s.versionsHead)}</li>${versions}</ul>
            </li>
            <li class="dropdown">
              <button type="button" class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-label="${esc(s.language)}">${lang.toUpperCase()} <b class="caret"></b></button>
              <ul class="dropdown-menu"><li class="dropdown-header">${esc(s.language)}</li>${langs}</ul>
            </li>
          </ul>
          <button type="button" class="navbar-toggle" aria-controls="w10Menu" aria-expanded="false" aria-label="${esc(s.menu)}"><span></span><span></span><span></span></button>
        </div>
      </header>`;
  }

  function hero() {
    const h = c().hero, s = u();
    return `
      <section class="hero" id="top">
        <div class="hero-bg" id="w10HeroBg" aria-hidden="true"></div>
        <div class="container">
          <h1>${esc(h.title)}</h1>
          <p class="lead">${esc(h.text)}</p>
          <div class="buttons">
            <a class="btn btn-primary btn-lg" href="#services" data-scroll="services">${esc(s.learnMore)}</a>
            <a class="btn btn-ghost btn-lg" href="#contacts" data-scroll="contacts">${esc(s.getInTouch)}</a>
          </div>
        </div>
      </section>`;
  }

  function carousel() {
    const h = c().hero, s = u();
    return `
      <section class="carousel" id="w10Carousel" aria-roledescription="carousel">
        <div class="carousel-track" id="w10Track">
          ${h.typed.map((p, i) => `<div class="item" role="group" aria-roledescription="slide" aria-label="${esc(s.slide)} ${i + 1} / ${h.typed.length}"><div><small>${esc(h.typedLead)}</small><strong>${esc(p)}</strong></div></div>`).join("")}
        </div>
        <button type="button" class="carousel-control left" data-slide="-1" aria-label="${esc(s.prev)}">‹</button>
        <button type="button" class="carousel-control right" data-slide="1" aria-label="${esc(s.next)}">›</button>
        <div class="carousel-indicators">
          ${h.typed.map((_, i) => `<button type="button" data-to="${i}" aria-label="${esc(s.slide)} ${i + 1}"></button>`).join("")}
        </div>
      </section>`;
  }

  /* Послуги для поточної мови: наші тексти, а за їх відсутності — словник сайту */
  function svcList() {
    const own = (SVC[lang] || SVC.uk).items;
    return c().services.items.map((it) => {
      const o = own[it.key];
      return {
        key: it.key,
        title: it.title,
        lead: o ? o.lead : it.text,
        pitch: o ? o.pitch : it.details || "",
        list: o ? o.list : it.includes || [],
        result: o ? o.result : it.result || ""
      };
    });
  }

  function services() {
    const s = u(), list = svcList();
    /* 10 карток у сітці на 3 колонки: остання займає весь рядок */
    const wideLast = list.length % 3 === 1;
    return `
      <section class="section" id="services">
        <div class="container">
          <div class="section-title reveal"><h2>${esc(c().services.heading)}</h2><p>${esc((SVC[lang] || SVC.uk).sub)}</p></div>
          <div class="services">
            ${list.map((it, i) => `
              <article class="service reveal${wideLast && i === list.length - 1 ? " wide" : ""}" style="--c:${COLORS[i % COLORS.length]}">
                <div class="icon">${ICONS[it.key] || ICONS.concept}</div>
                <div class="body">
                  <h3>${esc(it.title)}</h3>
                  <p class="pitch">${esc(it.lead)}</p>
                  <button type="button" class="more" data-svc="${esc(it.key)}" aria-haspopup="dialog">${esc(s.more)} →</button>
                </div>
              </article>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function partners() {
    const p = c().partners, s = u();
    return `
      <section class="section alt" id="partners">
        <div class="container">
          <div class="section-title reveal"><h2>${esc(p.heading)}</h2><p>${esc(s.partnersSub)}</p></div>
          <div class="partners reveal">
            ${p.items.map((it) => {
              const style = `style="--brand:${BRANDS[it.name] || "#428bca"}"`;
              /* Логотип файлом; без нього — назва текстом, як було */
              const logo = it.logo
                ? `<img src="${esc(it.logo)}" alt="${esc(it.name)}" style="height:${Number(it.height) || 32}px" loading="lazy" decoding="async">`
                : esc(it.name);
              return it.url
                ? `<a class="partner" ${style} href="${esc(it.url)}" target="_blank" rel="noopener" title="${esc(it.name)}">${logo}</a>`
                : `<div class="partner" ${style} title="${esc(it.name)}">${logo}</div>`;
            }).join("")}
          </div>
        </div>
      </section>`;
  }

  function contacts() {
    const k = c().contacts, s = u();
    return `
      <section class="section" id="contacts">
        <div class="container">
          <div class="section-title reveal"><h2>${esc(k.heading)}</h2><p>${esc(k.text)}</p></div>
          <div class="contact">
            <form class="reveal" id="w10Form" novalidate>
              <div class="form-group"><label for="w10Name">${esc(s.name)}</label><input class="form-control" id="w10Name" name="name" required autocomplete="name"></div>
              <div class="form-group"><label for="w10Email">${esc(s.email)}</label><input class="form-control" id="w10Email" name="email" type="email" required autocomplete="email"></div>
              <div class="form-group"><label for="w10Topic">${esc(s.topic)}</label><input class="form-control" id="w10Topic" name="topic" autocomplete="off"></div>
              <div class="form-group"><label for="w10Msg">${esc(s.message)}</label><textarea class="form-control" id="w10Msg" name="message" required></textarea></div>
              <button type="submit" class="btn btn-primary btn-lg">${esc(s.send)}</button>
              <div class="alert" id="w10Sent" role="status" hidden>${esc(s.sent)}</div>
            </form>
            <aside class="info reveal">
              <h3>${esc(s.writeUs)}</h3>
              <p>${esc(k.text)}</p>
              <a class="mail" href="mailto:${esc(k.email)}">${MAIL_ICON}<span>${esc(k.email)}</span></a>
              <div class="social" aria-label="${esc(s.share)}">
                <span aria-disabled="true" style="--c:#3b5998"><i>${esc(s.like)}</i><em>0</em></span>
                <span aria-disabled="true" style="--c:#55acee"><i>Tweet</i><em>0</em></span>
                <span aria-disabled="true" style="--c:#dd4b39"><i>+1</i><em>0</em></span>
              </div>
            </aside>
          </div>
        </div>
      </section>`;
  }

  function footer() {
    const f = c().footer, h = c().hero, k = c().contacts, s = u();
    return `
      <footer class="footer">
        <div class="container cols">
          <div>
            <h4>${esc(s.about)}</h4>
            <p>${esc(h.text)}</p>
            <blockquote>${esc(f.slogan)}</blockquote>
          </div>
          <div>
            <h4>${esc(s.nav)}</h4>
            <ul>
              <li><a href="#services" data-scroll="services">${esc(s.services)}</a></li>
              <li><a href="#partners" data-scroll="partners">${esc(s.partners)}</a></li>
              <li><a href="#contacts" data-scroll="contacts">${esc(s.contacts)}</a></li>
              <li><a href="${esc(c().classic.url)}">${esc(c().classic.label)}</a></li>
            </ul>
          </div>
          <div>
            <h4>${esc(s.contact)}</h4>
            <p><a href="mailto:${esc(k.email)}">${esc(k.email)}</a></p>
            <p>${esc(f.legalName)}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="container">
            <span>© ${esc(f.year)} ArtIntelliCo. ${esc(f.rights)} · ${esc(f.legalName)}</span>
            <a href="#top" data-scroll="top">${esc(s.backToTop)} ↑</a>
          </div>
        </div>
      </footer>`;
  }

  /* ---------- Рендер ---------- */
  let slide = 0;
  let slideTimer = 0;
  let observer = null;

  function render() {
    const keep = root.scrollTop;
    document.documentElement.lang = lang;
    root.innerHTML = navbar() + hero() + carousel() + services() + partners() + contacts() + footer();
    root.scrollTop = keep;
    topBtn.textContent = "↑";
    topBtn.setAttribute("aria-label", u().backToTop);
    setupCarousel();
    setupReveal();
    onScroll();
  }

  /* ---------- Карусель ---------- */
  function goTo(i) {
    const n = c().hero.typed.length;
    slide = (i + n) % n;
    const track = document.getElementById("w10Track");
    if (!track) return;
    track.style.transform = `translateX(-${slide * 100}%)`;
    track.querySelectorAll(".item").forEach((el, k) => el.setAttribute("aria-hidden", String(k !== slide)));
    root.querySelectorAll(".carousel-indicators button").forEach((b, k) => {
      b.classList.toggle("active", k === slide);
      b.setAttribute("aria-current", String(k === slide));
    });
  }
  function play() {
    clearInterval(slideTimer);
    if (!reduced) slideTimer = setInterval(() => goTo(slide + 1), 5000);
  }
  function setupCarousel() {
    const box = document.getElementById("w10Carousel");
    if (reduced) document.getElementById("w10Track").style.transition = "none";
    goTo(slide);
    play();
    box.addEventListener("mouseenter", () => clearInterval(slideTimer));
    box.addEventListener("mouseleave", play);
    box.addEventListener("focusin", () => clearInterval(slideTimer));
    box.addEventListener("focusout", play);
  }

  /* ---------- Поява блоків ---------- */
  function setupReveal() {
    if (observer) observer.disconnect();
    const items = root.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        observer.unobserve(e.target);
      });
    }, { root, threshold: 0.15 });
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- Гортання: navbar, scrollspy, паралакс, кнопка «нагору» ---------- */
  function onScroll() {
    const y = root.scrollTop;
    const nav = document.getElementById("w10Nav");
    nav.classList.toggle("scrolled", y > 40);
    topBtn.hidden = y < 400;
    const bg = document.getElementById("w10HeroBg");
    if (bg && !reduced) bg.style.transform = `translateY(${Math.round(y * 0.4)}px)`;
    let current = "top";
    ["services", "partners", "contacts"].forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop - nav.offsetHeight - 20 <= y) current = id;
    });
    if (y + root.clientHeight >= root.scrollHeight - 4) current = "contacts";
    root.querySelectorAll("[data-spy]").forEach((a) => a.classList.toggle("active", a.dataset.spy === current));
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = id === "top" ? 0 : el.offsetTop - 54;
    root.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  }

  function closeMenus(except) {
    root.querySelectorAll(".dropdown.open").forEach((d) => {
      if (d === except) return;
      d.classList.remove("open");
      d.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  }
  function collapseNav() {
    const nav = document.getElementById("w10Nav");
    nav.classList.remove("expanded");
    nav.querySelector(".navbar-toggle").setAttribute("aria-expanded", "false");
  }

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    store.set("aic-lang", l);
    render();
  }

  /* ---------- Модальне вікно послуги (як Bootstrap 3 .modal) ---------- */
  const CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.2 11.6 2.8 8.2l1.1-1.1 2.3 2.3 5.9-5.9 1.1 1.1z"/></svg>';
  let lastFocus = null;
  let modalTimer = 0;

  function openModal(key, trigger) {
    const list = svcList();
    const i = list.findIndex((x) => x.key === key);
    if (i < 0) return;
    const it = list[i], s = u();
    lastFocus = trigger || document.activeElement;
    modal.innerHTML = `
      <div class="modal-backdrop" data-dismiss></div>
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="w10ModalTitle" tabindex="-1">
        <div class="modal-content">
          <div class="modal-header" style="--c:${COLORS[i % COLORS.length]}">
            <span class="icon">${ICONS[it.key] || ICONS.concept}</span>
            <h4 id="w10ModalTitle">${esc(it.title)}</h4>
            <button type="button" class="close" data-dismiss aria-label="${esc(s.close)}">&times;</button>
          </div>
          <div class="modal-body">
            <p class="modal-lead">${esc(it.lead)}</p>
            ${it.pitch ? `<p>${esc(it.pitch)}</p>` : ""}
            ${it.list.length ? `<h5>${esc(s.includes)}</h5><ul class="checks">${it.list.map((x) => `<li>${CHECK}<span>${esc(x)}</span></li>`).join("")}</ul>` : ""}
            ${it.result ? `<div class="result"><strong>${esc(s.result)}</strong><p>${esc(it.result)}</p></div>` : ""}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss>${esc(s.close)}</button>
            <button type="button" class="btn btn-primary" data-discuss="${esc(it.key)}">${esc(s.discuss)}</button>
          </div>
        </div>
      </div>`;
    clearTimeout(modalTimer);
    modal.hidden = false;
    root.classList.add("modal-open");
    root.inert = true;
    topBtn.inert = true;
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("in")));
    modal.querySelector(".modal-dialog").focus();
  }

  function closeModal(restore = true) {
    if (modal.hidden) return;
    modal.classList.remove("in");
    root.classList.remove("modal-open");
    root.inert = false;
    topBtn.inert = false;
    const done = () => { modal.hidden = true; modal.innerHTML = ""; };
    if (reduced) done(); else modalTimer = setTimeout(done, 200);
    if (restore && lastFocus && document.contains(lastFocus)) lastFocus.focus();
    lastFocus = null;
  }

  /* Esc закриває, Tab ходить по колу всередині вікна */
  function modalKeys(e) {
    if (e.key === "Escape") { e.preventDefault(); closeModal(); return; }
    if (e.key !== "Tab") return;
    const f = [...modal.querySelectorAll("button, a[href]")];
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement) || document.activeElement.classList.contains("modal-dialog"))) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* «Обговорити проєкт»: до форми з уже заповненою темою */
  function discuss(key) {
    const it = svcList().find((x) => x.key === key);
    closeModal(false);
    const topic = document.getElementById("w10Topic");
    if (topic && it) topic.value = it.title;
    scrollToId("contacts");
    const name = document.getElementById("w10Name");
    if (name) name.focus({ preventScroll: true });
  }

  modal.addEventListener("click", (e) => {
    const d = e.target.closest("[data-discuss]");
    if (d) { discuss(d.dataset.discuss); return; }
    if (e.target.closest("[data-dismiss]")) closeModal();
  });

  /* ---------- Події ---------- */
  root.addEventListener("scroll", onScroll, { passive: true });

  root.addEventListener("click", (e) => {
    const langLink = e.target.closest("[data-lang]");
    if (langLink) { e.preventDefault(); setLang(langLink.dataset.lang); return; }

    const toggle = e.target.closest(".dropdown-toggle");
    if (toggle) {
      const dd = toggle.parentElement;
      closeMenus(dd);
      const open = dd.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      return;
    }

    const burger = e.target.closest(".navbar-toggle");
    if (burger) {
      const nav = document.getElementById("w10Nav");
      const open = nav.classList.toggle("expanded");
      burger.setAttribute("aria-expanded", String(open));
      if (!open) closeMenus();
      return;
    }

    const more = e.target.closest("[data-svc]");
    if (more) { openModal(more.dataset.svc, more); return; }

    const scroll = e.target.closest("[data-scroll]");
    if (scroll) {
      e.preventDefault();
      closeMenus();
      collapseNav();
      scrollToId(scroll.dataset.scroll);
      return;
    }

    const ctrl = e.target.closest("[data-slide]");
    if (ctrl) { goTo(slide + Number(ctrl.dataset.slide)); play(); return; }
    const dot = e.target.closest("[data-to]");
    if (dot) { goTo(Number(dot.dataset.to)); play(); return; }

    if (!e.target.closest(".dropdown")) closeMenus();
  });

  root.addEventListener("submit", (e) => {
    if (e.target.id !== "w10Form") return;
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const f = form.elements;
    const name = f.namedItem("name").value.trim();
    const from = f.namedItem("email").value.trim();
    const body = `${f.namedItem("message").value.trim()}\n\n— ${name} <${from}>`;
    const topic = f.namedItem("topic").value.trim();
    const subject = `${u().subject}: ${topic ? topic + " — " : ""}${name}`;
    const href = `mailto:${c().contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById("w10Sent").hidden = false;
    location.href = AIC.mailto(href);
  });

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) closeMenus();
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden) { modalKeys(e); return; }
    if (e.key !== "Escape") return;
    const open = root.querySelector(".dropdown.open");
    if (open) {
      closeMenus();
      open.querySelector(".dropdown-toggle").focus();
    } else {
      collapseNav();
    }
  });

  topBtn.addEventListener("click", () => scrollToId("top"));

  render();
})();
