/* Сайт 2010-х: лендинг у дусі шаблонів Bootstrap 3 з ThemeForest (2012–2014). Тексти — з window.AIC.content, послуги — власні, у SVC */
(() => {
  const AIC = window.AIC;
  const root = document.getElementById("w10");
  const topBtn = document.getElementById("w10Top");
  const modal = document.getElementById("w10Modal");
  if (!AIC || !AIC.content || !root) return;

  const LANGS = AIC.langs;
  const LANG_NAMES = AIC.langNames || {};
  const LANG_CODES = AIC.langCodes || {};

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
    },
    de: {
      home: "Start", services: "Leistungen", partners: "Partner", contacts: "Kontakt",
      versions: "Versionen", versionsHead: "Diese Website im Wandel der Jahre", language: "Sprache", menu: "Menü",
      learnMore: "Mehr erfahren", getInTouch: "Kontakt aufnehmen", more: "Weiterlesen",
      partnersSub: "Technologien, mit denen wir täglich arbeiten",
      name: "Ihr Name", email: "Ihre E-Mail-Adresse", message: "Nachricht", send: "Nachricht senden",
      sent: "Ihr E-Mail-Programm wird geöffnet…", subject: "Anfrage über die Website",
      writeUs: "Schreiben Sie uns", share: "Teilen", like: "Gefällt mir",
      about: "Über uns", nav: "Navigation", contact: "Kontakt",
      topic: "Betreff", includes: "Leistungsumfang", result: "Ergebnis", close: "Schließen", discuss: "Projekt besprechen",
      backToTop: "Nach oben", prev: "Vorherige Folie", next: "Nächste Folie", slide: "Folie"
    },
    fr: {
      home: "Accueil", services: "Services", partners: "Partenaires", contacts: "Contact",
      versions: "Versions", versionsHead: "Ce site au fil des ans", language: "Langue", menu: "Menu",
      learnMore: "En savoir plus", getInTouch: "Nous contacter", more: "Lire la suite",
      partnersSub: "Les technologies avec lesquelles nous travaillons au quotidien",
      name: "Votre nom", email: "Votre e-mail", message: "Message", send: "Envoyer le message",
      sent: "Ouverture de votre messagerie…", subject: "Demande depuis le site",
      writeUs: "Écrivez-nous", share: "Partager", like: "J'aime",
      about: "À propos", nav: "Navigation", contact: "Contact",
      topic: "Objet", includes: "Ce qui est inclus", result: "Résultat", close: "Fermer", discuss: "Parler de votre projet",
      backToTop: "Haut de page", prev: "Diapositive précédente", next: "Diapositive suivante", slide: "Diapositive"
    },
    es: {
      home: "Inicio", services: "Servicios", partners: "Socios", contacts: "Contacto",
      versions: "Versiones", versionsHead: "Este sitio a lo largo de los años", language: "Idioma", menu: "Menú",
      learnMore: "Saber más", getInTouch: "Contáctenos", more: "Leer más",
      partnersSub: "Tecnologías con las que trabajamos a diario",
      name: "Su nombre", email: "Su correo electrónico", message: "Mensaje", send: "Enviar mensaje",
      sent: "Abriendo su programa de correo…", subject: "Consulta desde la web",
      writeUs: "Escríbanos", share: "Compartir", like: "Me gusta",
      about: "Sobre nosotros", nav: "Navegación", contact: "Contacto",
      topic: "Asunto", includes: "Qué incluye", result: "Resultado", close: "Cerrar", discuss: "Hablar de su proyecto",
      backToTop: "Volver arriba", prev: "Diapositiva anterior", next: "Diapositiva siguiente", slide: "Diapositiva"
    },
    pt: {
      home: "Início", services: "Serviços", partners: "Parceiros", contacts: "Contactos",
      versions: "Versões", versionsHead: "Este site ao longo dos anos", language: "Idioma", menu: "Menu",
      learnMore: "Saber mais", getInTouch: "Contacte-nos", more: "Ler mais",
      partnersSub: "Tecnologias com que trabalhamos todos os dias",
      name: "O seu nome", email: "O seu e-mail", message: "Mensagem", send: "Enviar mensagem",
      sent: "A abrir o seu programa de e-mail…", subject: "Pedido através do site",
      writeUs: "Escreva-nos", share: "Partilhar", like: "Gosto",
      about: "Sobre nós", nav: "Navegação", contact: "Contactos",
      topic: "Assunto", includes: "O que inclui", result: "Resultado", close: "Fechar", discuss: "Falar sobre o seu projeto",
      backToTop: "Voltar ao topo", prev: "Diapositivo anterior", next: "Diapositivo seguinte", slide: "Diapositivo"
    },
    it: {
      home: "Home", services: "Servizi", partners: "Partner", contacts: "Contatti",
      versions: "Versioni", versionsHead: "Questo sito negli anni", language: "Lingua", menu: "Menu",
      learnMore: "Per saperne di più", getInTouch: "Ci contatti", more: "Dettagli",
      partnersSub: "Le tecnologie con cui lavoriamo ogni giorno",
      name: "Il Suo nome", email: "La Sua e-mail", message: "Messaggio", send: "Invia messaggio",
      sent: "Apertura del programma di posta…", subject: "Richiesta dal sito",
      writeUs: "Ci scriva", share: "Condividi", like: "Mi piace",
      about: "Chi siamo", nav: "Navigazione", contact: "Contatti",
      topic: "Oggetto", includes: "Cosa comprende", result: "Risultato", close: "Chiudi", discuss: "Parliamo del Suo progetto",
      backToTop: "Torna su", prev: "Slide precedente", next: "Slide successiva", slide: "Slide"
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
    },
    de: {
      sub: "Wir verkaufen nicht einfach die Technologie, die wir zufällig beherrschen. Zuerst verstehen wir Ihre Aufgabe, dann wählen wir die Werkzeuge. Und wenn ein fertiger Dienst im Abo für Sie ausreicht, sagen wir Ihnen das offen.",
      items: {
        concept: {
          lead: "Wissen, was gebaut wird – noch vor der ersten Codezeile",
          pitch: "Die teuersten Fehler in IT-Projekten passieren am Anfang, wenn ein System für eine Aufgabe gebaut wird, die niemand klar formuliert hat. Wir sprechen mit den Menschen, die später damit arbeiten: Buchhaltung, Lager, Vertrieb. Und falls sich zeigt, dass ein angepasstes Standardprodukt genügt, hören Sie das von uns, bevor Sie Ihr Budget in die Entwicklung stecken.",
          list: ["Interviews mit Mitarbeitenden und Analyse der aktuellen Prozesse", "Fachliche Anforderungen und Anwendungsszenarien", "Standardlösungen und Individualentwicklung im Vergleich", "Pflichtenheft mit Zeit- und Budgetschätzung je Projektphase"],
          result: "Ein Dokument, anhand dessen jedes Team – unseres oder ein anderes – das Projekt kalkulieren und loslegen kann."
        },
        saas: {
          lead: "Ein Dienst, den Kunden selbst kaufen – ganz ohne Anruf beim Support",
          pitch: "Über den Erfolg von SaaS entscheidet nicht der Code, sondern wie leicht sich ein neuer Kunde registrieren, bezahlen und loslegen kann. Mandantenfähigkeit, Abrechnung und Zugriffsrechte planen wir vom ersten Tag an ein, denn sie nachzurüsten, wenn die Kunden schon im System sind, kostet ein Vielfaches. Die erste Version veröffentlichen wir früh: Echte Nutzer zeigen schnell, auf welche Funktionen Sie verzichten können.",
          list: ["Mandantenfähige Architektur mit getrennten Kundendaten", "Registrierung, Tarife, Abonnements und Online-Zahlung", "Kundenbereiche, Rollen und Zugriffsrechte", "Integrationen und eine offene API für Ihre Kunden", "Skalierung bei wachsender Last"],
          result: "Ein Produkt, das sich im Abo verkauft – kein Projekt, das jedes Mal von Hand eingeführt werden muss."
        },
        web: {
          lead: "Eine Website, die an Anfragen gemessen wird, nicht am Bild im Portfolio",
          pitch: "Schon vor dem Start vereinbaren wir, was als Ergebnis zählt, und schalten die Webanalyse vor dem Launch ein, nicht ein halbes Jahr danach. Die Technologie richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Homepage-Baukasten. Wir entwickeln Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen.",
          list: ["Prototyp und Interface-Design", "Frontend, Backend und Administrationsbereich", "Anbindung an Zahlung, Versand, CRM und Buchhaltungssysteme", "SEO-Grundlagen, schnelle Ladezeiten und Webanalyse", "Launch und laufende Betreuung"],
          result: "Ein Webservice, an dem Sie ablesen können, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        mobile: {
          lead: "Eine App, zu der Kunden zurückkehren – oder ein ehrliches „Sie brauchen keine“",
          pitch: "Eine App rechnet sich, wenn Kunden sie regelmäßig nutzen: nachbestellen, den Lieferstatus verfolgen, Bonuspunkte sammeln. Kommen Ihre Kunden nur einmal im Jahr, ist eine gute mobile Website günstiger – und das sagen wir Ihnen, bevor die Arbeit beginnt. Ob nativ oder plattformübergreifend, entscheiden wir nach Budget und danach, wie sehr die App Kamera, Standort und Offline-Modus braucht.",
          list: ["Apps für iOS und Android", "Serverseite und API", "Admin-Bereich für Inhalte, Bestellungen und Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          result: "Eine App, die die Prüfung im App Store und bei Google Play besteht und die Ihr Team ohne Entwickler betreibt."
        },
        ai: {
          lead: "KI-Agenten, die Ihrem Team die Routine abnehmen",
          pitch: "Ein KI-Agent erledigt Routineschritte eines Prozesses selbstständig: Er sortiert Anfragen, pflegt das CRM, entwirft Antworten an Kunden – und ein Mensch prüft das Ergebnis. Dabei sind wir skeptischer als die meisten: Die Hälfte der Ideen nach dem Motto „Bauen wir ein neuronales Netz ein“ löst schlichte Automatisierung, und das sagen wir Ihnen auch. Deshalb beginnt alles mit einem Pilotprojekt auf Ihren eigenen Daten – die Genauigkeit sehen Sie vor der eigentlichen Entwicklung, nicht danach.",
          list: ["KI-Agenten, die Anfragen sortieren, das CRM pflegen und Kundenantworten entwerfen", "Chatbots und Assistenten für Kunden und Mitarbeitende", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen und Suche in der Wissensdatenbank", "Bedarfsprognosen und Datenanalyse", "Pilotprojekt mit Qualitätsmessung auf Ihren Daten"],
          result: "Ein Prozess, den bisher Menschen von Hand erledigt haben, läuft jetzt im System – und die Kontrolle bleibt beim Menschen."
        },
        crm: {
          lead: "Ein System, das sich Ihren Prozessen anpasst – nicht umgekehrt",
          pitch: "Ein Standard-CRM funktioniert, solange Ihr Prozess Standard ist. Sobald Ihr Vertrieb die Hälfte der Arbeit in Excel-Tabellen erledigt, weil das System „das nicht kann“, wird eine eigene Lösung günstiger. Wir übernehmen die Daten aus Altsystemen und Tabellen und führen das System Abteilung für Abteilung ein, sodass die Arbeit keinen einzigen Tag stillsteht.",
          list: ["Module für Vertrieb, Lager, Produktion und Finanzen – je nach Bedarf", "Rollen, Zugriffsrechte und Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie und E-Mail"],
          result: "Ein System statt eines Tabellen-Zoos: Die Geschäftsführung sieht den Stand der Dinge ohne wöchentliche Berichte aus jeder Abteilung."
        },
        cloud: {
          lead: "AWS-Infrastruktur, die Ausfälle übersteht und nicht grundlos teurer wird",
          pitch: "Die Cloud ist nicht immer günstiger als ein eigener Server. Sie lohnt sich, wenn die Last stark schwankt, Ausfallsicherheit gefragt ist oder neue Umgebungen in Minuten statt in einer Woche bereitstehen müssen. Deshalb beginnt der Umzug zu Amazon Web Services mit einem Audit und einer Kostenschätzung, und migriert wird schrittweise – mit einem Rückfallplan für jeden Schritt.",
          list: ["Audit der bestehenden Infrastruktur und Kostenschätzung", "AWS-Architektur und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Datensicherung und Monitoring", "Kostenoptimierung nach dem Umzug"],
          result: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie verstehen."
        },
        redhat: {
          lead: "Infrastruktur, die nicht nur im Kopf eines einzigen Admins existiert",
          pitch: "Unternehmen setzen auf Red Hat, wenn Server jahrelang laufen und Audits bestehen müssen. Die Subskription zahlt sich durch Herstellersupport und einen langen Lebenszyklus aus: Red Hat Enterprise Linux wird zehn Jahre lang unterstützt. Wir planen die Infrastruktur für Ihre Workloads und beschreiben die Konfiguration in Ansible, sodass sich jeder Server per Playbook neu aufbauen lässt. Red Hat ist unser Partner – deshalb helfen wir auch bei Subskriptionen und Herstellersupport.",
          list: ["Audit Ihrer bestehenden Server und Migrationsplan", "Red Hat Enterprise Linux mit zentralen Updates über Red Hat Satellite", "Die Container-Plattform OpenShift für Ihre Anwendungen", "Automatisierte Konfiguration und Bereitstellung mit Ansible", "Zentrale Verwaltung von Identitäten und Zugriffsrechten (Identity Management)", "Monitoring, Datensicherung und Dokumentation für Ihr Team"],
          result: "Eine Infrastruktur, die sich prüfen, reproduzieren und ohne Wissensverlust an ein anderes Team übergeben lässt."
        },
        api: {
          lead: "Daten einmal erfassen – den Rest des Weges finden sie allein",
          pitch: "Das häufigste Problem, das wir sehen, ist die doppelte Datenerfassung: Bestellungen aus dem Onlineshop werden von Hand in die Buchhaltung übertragen, Zahlungen in einer Tabelle abgeglichen. Eine Integration nimmt Ihnen diese Arbeit ab – und die Fehler gleich mit. Monitoring richten wir grundsätzlich ein, denn Integrationen brechen lautlos, wenn ein Partner seine API ändert, und davon erfahren Sie besser vom System als vom Kunden.",
          list: ["API-Design und Dokumentation", "Anbindung an Zahlungsanbieter, Versanddienstleister, CRM und Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und automatische Wiederholung bei Fehlern", "Monitoring und Benachrichtigungen"],
          result: "Daten werden einmal erfasst und gelangen von selbst dorthin, wo sie gebraucht werden."
        },
        support: {
          lead: "Support, der ein Problem bemerkt, bevor es Ihre Nutzer tun",
          pitch: "Support ist mehr als Fehlerbehebung: Dazu gehören Updates, die Sicherheitslücken schließen, Monitoring und kleine Verbesserungen im laufenden Betrieb. Wir übernehmen auch Systeme, die nicht von uns stammen. Dann beginnen wir mit einem Audit und einer Dokumentation, denn ohne sie ist jede Änderung ein Glücksspiel.",
          list: ["Überwachung von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Datensicherung und Wiederherstellungstests", "Geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation von Systemen anderer Dienstleister"],
          result: "Ein System, das funktioniert, und ein Team, das weiß, wie es aufgebaut ist."
        }
      }
    },
    fr: {
      sub: "Nous ne vendons pas la technologie que nous avons sous la main. Nous commençons par comprendre votre besoin, puis nous choisissons les outils. Et si un service prêt à l'emploi sur abonnement vous suffit, nous vous le dirons franchement.",
      items: {
        concept: {
          lead: "Savoir quoi construire avant la première ligne de code",
          pitch: "Les erreurs les plus coûteuses d'un projet informatique se commettent au départ, quand on construit un système pour un besoin que personne n'a clairement formulé. Nous parlons avec ceux qui utiliseront le système : la comptabilité, l'entrepôt, les commerciaux. Et s'il s'avère qu'un produit du marché bien paramétré vous convient, vous l'apprendrez de notre bouche avant d'avoir dépensé votre budget en développement.",
          list: ["Entretiens avec vos équipes et analyse des processus actuels", "Exigences métier et scénarios d'utilisation", "Comparatif entre solutions du marché et développement sur mesure", "Cahier des charges avec estimation des délais et du budget par phase"],
          result: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le projet et se mettre au travail."
        },
        saas: {
          lead: "Un service que vos clients achètent seuls, sans appeler le support",
          pitch: "Le succès d'un SaaS ne se joue pas sur le code, mais sur la facilité avec laquelle un nouveau client peut s'inscrire, payer et commencer à travailler. Nous prévoyons le multi-tenant, la facturation et les droits d'accès dès le premier jour, car les ajouter une fois les clients installés coûte plusieurs fois plus cher. Et nous sortons la première version tôt : les vrais utilisateurs montrent vite de quelles fonctionnalités vous pouvez vous passer.",
          list: ["Architecture multi-tenant avec isolation des données clients", "Inscription, formules, abonnements et paiement en ligne", "Espaces clients, rôles et droits d'accès", "Intégrations et API publique pour vos clients", "Montée en charge au rythme de la croissance"],
          result: "Un produit qui se vend par abonnement, et non un projet qu'il faut déployer à la main à chaque fois."
        },
        web: {
          lead: "Un site jugé sur les demandes qu'il génère, pas sur une capture de portfolio",
          pitch: "Avant de commencer, nous convenons de ce qui comptera comme résultat, et nous activons les statistiques avant la mise en ligne, pas six mois plus tard. La technologie suit le besoin : une landing page n'a pas besoin d'une plateforme lourde, et une marketplace ne tiendra jamais dans un outil de création de site. Nous réalisons des sites d'entreprise, des marketplaces, des boutiques en ligne, des systèmes de réservation et des outils web internes.",
          list: ["Prototype et design des interfaces", "Frontend, backend et interface d'administration", "Intégration du paiement, de la livraison, du CRM et de la comptabilité", "Bases SEO, chargement rapide et statistiques", "Mise en ligne et maintenance"],
          result: "Un service web dont on voit combien de demandes et de chiffre d'affaires il rapporte."
        },
        mobile: {
          lead: "Une application que vos clients rouvrent, ou un honnête « vous n'en avez pas besoin »",
          pitch: "Une application est rentable quand les clients s'en servent régulièrement : pour recommander, suivre une livraison, cumuler des points de fidélité. Si l'on vient chez vous une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant de commencer. Natif ou multiplateforme ? Nous tranchons selon le budget et selon l'usage que l'application fait de l'appareil photo, de la géolocalisation et du mode hors ligne.",
          list: ["Applications iOS et Android", "Partie serveur et API", "Back-office pour les contenus, les commandes et les utilisateurs", "Notifications push et statistiques", "Publication sur l'App Store et Google Play"],
          result: "Une application qui passe la validation de l'App Store et de Google Play, et que votre équipe pilote sans développeur."
        },
        ai: {
          lead: "Des agents d'IA qui déchargent vos équipes de la routine",
          pitch: "Un agent d'IA exécute seul les étapes routinières d'un processus : il trie les demandes, alimente le CRM, prépare les réponses aux clients, et une personne valide le résultat. Pour autant, nous sommes plus sceptiques que la plupart : la moitié des idées du type « ajoutons un réseau de neurones » se règlent par une simple automatisation, et nous vous le dirons. Tout commence donc par un pilote sur vos propres données : vous voyez la précision avant le développement principal, pas après.",
          list: ["Agents d'IA qui trient les demandes, alimentent le CRM et préparent les réponses aux clients", "Chatbots et assistants pour vos clients et vos équipes", "Reconnaissance de documents et extraction de données", "Classification des demandes et recherche dans la base de connaissances", "Prévision de la demande et analyse de données", "Pilote avec mesure de la qualité sur vos données"],
          result: "Un processus autrefois mené à la main est désormais exécuté par le système, et le contrôle reste humain."
        },
        crm: {
          lead: "Un système adapté à vos processus, et non l'inverse",
          pitch: "Un CRM standard fonctionne tant que votre processus est standard. Quand vos commerciaux gèrent la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire », un développement sur mesure devient moins cher. Nous reprenons les données des anciens systèmes et des tableurs, puis déployons service par service, sans un seul jour d'arrêt.",
          list: ["Modules ventes, stock, production et finance, selon vos besoins", "Rôles, droits d'accès et journal des actions", "Rapports et tableaux de bord pour la direction", "Reprise des données des tableurs et des anciens systèmes", "Intégration avec la comptabilité, la téléphonie et la messagerie"],
          result: "Un seul système au lieu d'une ménagerie de tableurs : la direction voit où en sont les choses sans rapports hebdomadaires de chaque service."
        },
        cloud: {
          lead: "Une infrastructure AWS qui résiste aux pannes et dont le coût ne dérape pas",
          pitch: "Le cloud n'est pas toujours moins cher qu'un serveur à soi. Il l'emporte quand la charge fluctue, quand la tolérance aux pannes est indispensable ou quand de nouveaux environnements doivent être prêts en quelques minutes plutôt qu'en une semaine. C'est pourquoi une migration vers Amazon Web Services commence par un audit et une estimation des coûts, puis se fait par étapes, avec un plan de retour arrière à chaque étape.",
          list: ["Audit de l'infrastructure actuelle et estimation des coûts", "Architecture AWS et plan de migration", "Migration des serveurs, des bases de données et des fichiers", "Sauvegardes et supervision", "Optimisation des coûts après la migration"],
          result: "Une infrastructure qui survit à la panne d'un serveur, et une facture cloud que vous comprenez."
        },
        redhat: {
          lead: "Une infrastructure qui ne repose pas sur la mémoire d'un seul administrateur",
          pitch: "Les entreprises choisissent Red Hat quand leurs serveurs doivent tourner des années et passer des audits. L'abonnement se rentabilise grâce au support de l'éditeur et à un long cycle de vie : Red Hat Enterprise Linux est maintenu pendant dix ans. Nous concevons l'infrastructure selon vos charges et décrivons la configuration dans Ansible, si bien que tout serveur peut être reconstruit à partir d'un playbook. Red Hat est notre partenaire : nous vous aidons donc aussi pour les abonnements et le support de l'éditeur.",
          list: ["Audit de vos serveurs actuels et plan de migration", "Red Hat Enterprise Linux avec mises à jour centralisées via Red Hat Satellite", "La plateforme de conteneurs OpenShift pour vos applications", "Automatisation de la configuration et du déploiement avec Ansible", "Gestion centralisée des identités et des accès (Identity Management)", "Supervision, sauvegardes et documentation pour votre équipe"],
          result: "Une infrastructure que l'on peut auditer, reproduire et transmettre à une autre équipe sans perte de savoir."
        },
        api: {
          lead: "Saisissez les données une fois, elles iront seules où il faut",
          pitch: "Le problème le plus fréquent que nous rencontrons, c'est la double saisie : les commandes du site ressaisies à la main en comptabilité, les paiements rapprochés dans un tableur. Une intégration supprime ce travail, et les erreurs avec. Et nous mettons toujours en place une supervision, car une intégration casse sans bruit quand un partenaire modifie son API, et mieux vaut l'apprendre du système que d'un client.",
          list: ["Conception et documentation d'API", "Intégration avec les prestataires de paiement, les transporteurs, le CRM et la comptabilité", "Échange de données entre systèmes internes", "Files d'attente et nouvelles tentatives en cas d'échec", "Supervision et alertes"],
          result: "Les données sont saisies une seule fois et arrivent d'elles-mêmes là où l'on en a besoin."
        },
        support: {
          lead: "Un support qui repère un problème avant vos utilisateurs",
          pitch: "Le support, ce n'est pas seulement corriger des bugs : ce sont aussi des mises à jour qui comblent les failles de sécurité, de la supervision et de petites améliorations au fil de l'eau. Nous reprenons également des systèmes que nous n'avons pas développés. Dans ce cas, nous commençons par un audit et une documentation, car sans elle chaque modification est une loterie.",
          list: ["Supervision de la disponibilité et des erreurs", "Correction de bugs et mises à jour de sécurité", "Sauvegardes et tests de restauration", "Améliorations et nouvelles fonctionnalités planifiées", "Audit et documentation des systèmes développés par d'autres prestataires"],
          result: "Un système qui fonctionne, et une équipe qui sait comment il est construit."
        }
      }
    },
    es: {
      sub: "No vendemos sin más la tecnología que conocemos. Primero entendemos su problema y después elegimos las herramientas. Y si le basta con un servicio de suscripción ya hecho, se lo diremos con franqueza.",
      items: {
        concept: {
          lead: "Sepa qué construir antes de la primera línea de código",
          pitch: "Los errores más caros de un proyecto de TI se cometen al principio, cuando se construye un sistema para un problema que nadie ha definido con claridad. Hablamos con las personas que trabajarán con el sistema: contabilidad, almacén, comerciales. Y si resulta que le sirve un producto existente bien configurado, se lo diremos antes de que gaste el presupuesto en desarrollo.",
          list: ["Entrevistas con el personal y análisis de los procesos actuales", "Requisitos de negocio y escenarios de uso", "Comparativa entre soluciones existentes y desarrollo a medida", "Especificación técnica con estimación de plazos y presupuesto por fases"],
          result: "Un documento con el que cualquier equipo, el nuestro u otro, puede presupuestar el proyecto y ponerse manos a la obra."
        },
        saas: {
          lead: "Un servicio que los clientes compran por su cuenta, sin llamar a soporte",
          pitch: "El éxito de un SaaS no depende del código, sino de lo fácil que le resulte a un cliente nuevo registrarse, pagar y empezar a trabajar. Incorporamos multiinquilino, facturación y permisos desde el primer día, porque añadirlos cuando los clientes ya están dentro cuesta varias veces más. Y lanzamos pronto la primera versión: los usuarios reales enseguida muestran de qué funciones se puede prescindir.",
          list: ["Arquitectura multiinquilino con los datos de cada cliente aislados", "Registro, tarifas, suscripciones y pago en línea", "Áreas de cliente, roles y permisos", "Integraciones y API pública para sus clientes", "Escalado a medida que crece la carga"],
          result: "Un producto que se vende por suscripción, no un proyecto que hay que implantar a mano cada vez."
        },
        web: {
          lead: "Una web que se mide en contactos, no en capturas para el portafolio",
          pitch: "Antes de empezar acordamos qué se considerará un resultado y activamos la analítica antes del lanzamiento, no seis meses después. La tecnología se elige según la tarea: una landing page no necesita una plataforma pesada y un marketplace no cabe en un creador de webs. Hacemos webs corporativas, marketplaces, tiendas online, sistemas de reservas y herramientas web internas.",
          list: ["Prototipo y diseño de interfaces", "Frontend, backend y panel de administración", "Integración con pagos, envíos, CRM y sistemas contables", "Base SEO, carga rápida y analítica", "Lanzamiento y mantenimiento"],
          result: "Un servicio web en el que se ve cuántos contactos y cuántos ingresos aporta."
        },
        mobile: {
          lead: "Una aplicación a la que sus clientes vuelven, o un sincero «no la necesita»",
          pitch: "Una aplicación se amortiza cuando el cliente la usa con regularidad: repite pedidos, sigue el estado de un envío, acumula puntos. Si le visitan una vez al año, una buena web móvil sale más barata, y se lo diremos antes de empezar. ¿Nativa o multiplataforma? Lo decidimos según el presupuesto y según cuánto necesite la aplicación la cámara, la geolocalización y el modo sin conexión.",
          list: ["Aplicaciones para iOS y Android", "Parte de servidor y API", "Panel de administración para contenidos, pedidos y usuarios", "Notificaciones push y analítica", "Publicación en App Store y Google Play"],
          result: "Una aplicación que supera la revisión de App Store y Google Play y que su equipo gestiona sin desarrolladores."
        },
        ai: {
          lead: "Agentes de IA que liberan a su equipo de la rutina",
          pitch: "Un agente de IA ejecuta por sí solo los pasos rutinarios de un proceso: clasifica solicitudes, rellena el CRM, prepara respuestas a los clientes, y una persona revisa el resultado. Aun así, somos más escépticos que la mayoría: la mitad de las ideas del tipo «añadamos una red neuronal» se resuelven con una automatización corriente, y se lo diremos. Por eso todo empieza con un piloto sobre sus propios datos: usted ve la precisión antes del desarrollo principal, no después.",
          list: ["Agentes de IA que clasifican solicitudes, rellenan el CRM y preparan respuestas a clientes", "Chatbots y asistentes para clientes y empleados", "Reconocimiento de documentos y extracción de datos", "Clasificación de consultas y búsqueda en la base de conocimiento", "Previsión de la demanda y análisis de datos", "Piloto con medición de la calidad sobre sus datos"],
          result: "Un proceso que antes llevaban personas a mano ahora lo ejecuta el sistema, y el control sigue en manos humanas."
        },
        crm: {
          lead: "Un sistema que se adapta a sus procesos, y no al revés",
          pitch: "Un CRM estándar funciona mientras su proceso sea estándar. Cuando los comerciales llevan la mitad del trabajo en hojas de cálculo porque el sistema «no sabe hacerlo», un desarrollo propio sale más barato. Migramos los datos de los sistemas antiguos y de las hojas de cálculo e implantamos el sistema departamento por departamento, para que el trabajo no se detenga ni un solo día.",
          list: ["Módulos de ventas, almacén, producción y finanzas, según necesidad", "Roles, permisos y registro de actividad", "Informes y cuadros de mando para la dirección", "Migración de datos desde hojas de cálculo y sistemas antiguos", "Integración con contabilidad, telefonía y correo electrónico"],
          result: "Un único sistema en lugar de un zoo de hojas de cálculo: la dirección ve cómo van las cosas sin informes semanales de cada departamento."
        },
        cloud: {
          lead: "Infraestructura en AWS que resiste los fallos y no se encarece sin motivo",
          pitch: "La nube no siempre es más barata que un servidor propio. Sale ganando cuando la carga sufre picos, cuando se necesita tolerancia a fallos o cuando los nuevos entornos deben estar listos en minutos y no en una semana. Por eso la migración a Amazon Web Services empieza con una auditoría y un cálculo de costes, y se hace por etapas, con un plan de vuelta atrás en cada paso.",
          list: ["Auditoría de la infraestructura actual y cálculo de costes", "Arquitectura en AWS y plan de migración", "Traslado de servidores, bases de datos y archivos", "Copias de seguridad y monitorización", "Optimización de costes tras la migración"],
          result: "Una infraestructura que sobrevive a la caída de un servidor, y una factura de la nube que usted entiende."
        },
        redhat: {
          lead: "Una infraestructura que no depende de la memoria de un solo administrador",
          pitch: "Las empresas eligen Red Hat cuando sus servidores deben funcionar durante años y superar auditorías. La suscripción se amortiza con el soporte del fabricante y un ciclo de vida largo: Red Hat Enterprise Linux tiene diez años de soporte. Diseñamos la infraestructura según sus cargas de trabajo y describimos la configuración en Ansible, de modo que cualquier servidor se puede reconstruir a partir de un playbook. Red Hat es nuestro socio, así que también le ayudamos con las suscripciones y el soporte del fabricante.",
          list: ["Auditoría de sus servidores actuales y plan de migración", "Red Hat Enterprise Linux con actualizaciones centralizadas mediante Red Hat Satellite", "La plataforma de contenedores OpenShift para sus aplicaciones", "Automatización de la configuración y el despliegue con Ansible", "Gestión centralizada de identidades y accesos (Identity Management)", "Monitorización, copias de seguridad y documentación para su equipo"],
          result: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin perder conocimiento."
        },
        api: {
          lead: "Introduzca los datos una vez: el resto del camino lo hacen solos",
          pitch: "El problema más habitual que vemos es la doble introducción de datos: los pedidos de la web se pasan a mano a contabilidad y los pagos se cuadran en una hoja de cálculo. Una integración elimina ese trabajo, y los errores con él. Y siempre configuramos la monitorización, porque las integraciones fallan en silencio cuando un socio cambia su API, y es mejor enterarse por el sistema que por un cliente.",
          list: ["Diseño y documentación de API", "Integración con pasarelas de pago, empresas de mensajería, CRM y contabilidad", "Intercambio de datos entre sistemas internos", "Colas y reintentos ante fallos", "Monitorización y alertas"],
          result: "Los datos se introducen una sola vez y llegan solos allí donde hacen falta."
        },
        support: {
          lead: "Un soporte que detecta el problema antes que sus usuarios",
          pitch: "El soporte es mucho más que corregir errores: son actualizaciones que cierran vulnerabilidades, monitorización y pequeñas mejoras sobre la marcha. También nos hacemos cargo de sistemas que no hemos desarrollado nosotros. En ese caso empezamos con una auditoría y documentación, porque sin ella cada cambio es una lotería.",
          list: ["Monitorización de la disponibilidad y de los errores", "Corrección de errores y actualizaciones de seguridad", "Copias de seguridad y pruebas de restauración", "Mejoras planificadas y nuevas funciones", "Auditoría y documentación de sistemas de otros proveedores"],
          result: "Un sistema que funciona, y un equipo que sabe cómo está construido."
        }
      }
    },
    pt: {
      sub: "Não vendemos simplesmente a tecnologia que conhecemos. Primeiro percebemos o seu problema, depois escolhemos as ferramentas. E se um serviço por subscrição já pronto lhe bastar, dizemos-lho com franqueza.",
      items: {
        concept: {
          lead: "Saiba o que construir antes da primeira linha de código",
          pitch: "Os erros mais caros num projeto de TI cometem-se no início, quando se começa a construir um sistema para um problema que ninguém formulou com clareza. Falamos com as pessoas que vão trabalhar com o sistema: contabilidade, armazém, comerciais. E se se verificar que lhe serve um produto existente com alguma configuração, vai ouvi-lo da nossa parte antes de gastar o orçamento em desenvolvimento.",
          list: ["Entrevistas com os colaboradores e análise dos processos atuais", "Requisitos de negócio e cenários de utilização", "Comparação entre soluções existentes e desenvolvimento à medida", "Caderno de encargos com estimativa de prazos e orçamento por fase"],
          result: "Um documento com o qual qualquer equipa, a nossa ou outra, pode orçamentar o projeto e pôr mãos à obra."
        },
        saas: {
          lead: "Um serviço que os clientes compram sozinhos, sem ligar para o suporte",
          pitch: "O sucesso de um SaaS não depende do código, mas da facilidade com que um novo cliente se regista, paga e começa a trabalhar. Prevemos a arquitetura multi-inquilino, a faturação e as permissões de acesso desde o primeiro dia, porque acrescentá-las quando os clientes já lá estão custa várias vezes mais. E lançamos cedo a primeira versão: os utilizadores reais depressa mostram de que funcionalidades pode prescindir.",
          list: ["Arquitetura multi-inquilino com os dados de cada cliente isolados", "Registo, planos, subscrições e pagamento online", "Áreas de cliente, perfis e permissões de acesso", "Integrações e API pública para os seus clientes", "Escalabilidade à medida que a carga cresce"],
          result: "Um produto que se vende por subscrição, e não um projeto que é preciso implementar à mão de cada vez."
        },
        web: {
          lead: "Um site avaliado pelos pedidos que gera, não pela imagem no portefólio",
          pitch: "Antes de começar, acordamos o que conta como resultado e ativamos a análise de tráfego antes do lançamento, não seis meses depois. A tecnologia é escolhida em função da tarefa: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num criador de sites. Fazemos sites institucionais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas.",
          list: ["Protótipo e design de interfaces", "Frontend, backend e painel de administração", "Integração com pagamentos, entregas, CRM e sistemas de contabilidade", "Base de SEO, carregamento rápido e análise de tráfego", "Lançamento e acompanhamento"],
          result: "Um serviço web em que se vê quantos pedidos e quanto dinheiro traz."
        },
        mobile: {
          lead: "Uma aplicação a que os clientes regressam, ou um sincero «não precisa dela»",
          pitch: "Uma aplicação compensa quando o cliente a usa com regularidade: repete encomendas, acompanha o estado de uma entrega, acumula pontos. Se os clientes o visitam uma vez por ano, um bom site para telemóvel fica mais barato, e dizemos-lho antes de começar. Nativa ou multiplataforma: decidimos em função do orçamento e de quanto a aplicação precisa da câmara, da geolocalização e do modo offline.",
          list: ["Aplicações para iOS e Android", "Componente de servidor e API", "Painel de administração para conteúdos, encomendas e utilizadores", "Notificações push e análise de utilização", "Publicação na App Store e no Google Play"],
          result: "Uma aplicação que passa a revisão da App Store e do Google Play e que a sua equipa gere sem programadores."
        },
        ai: {
          lead: "Agentes de IA que tiram a rotina das mãos da sua equipa",
          pitch: "Um agente de IA executa sozinho os passos rotineiros de um processo: faz a triagem de pedidos, preenche o CRM, prepara respostas aos clientes, e uma pessoa verifica o resultado. Ainda assim, somos mais céticos do que a maioria: metade das ideias do género «vamos juntar uma rede neuronal» resolve-se com automatização simples, e nós dizemos-lho. Por isso, tudo começa com um piloto sobre os seus próprios dados: vê a precisão antes do desenvolvimento principal, e não depois.",
          list: ["Agentes de IA que fazem a triagem de pedidos, preenchem o CRM e preparam respostas aos clientes", "Chatbots e assistentes para clientes e colaboradores", "Reconhecimento de documentos e extração de dados", "Classificação de pedidos e pesquisa na base de conhecimento", "Previsão da procura e análise de dados", "Piloto com avaliação da qualidade sobre os seus dados"],
          result: "Um processo que antes era conduzido à mão por pessoas passa a ser executado pelo sistema, e o controlo continua nas mãos de uma pessoa."
        },
        crm: {
          lead: "Um sistema feito à medida dos seus processos, e não o contrário",
          pitch: "Um CRM de prateleira funciona enquanto o seu processo for standard. Quando os comerciais gerem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», o desenvolvimento próprio passa a ser mais barato. Migramos os dados dos sistemas antigos e das folhas de cálculo e implementamos o sistema departamento a departamento, para que o trabalho não pare um único dia.",
          list: ["Módulos de vendas, armazém, produção e finanças, conforme a necessidade", "Perfis, permissões de acesso e registo de ações", "Relatórios e dashboards para a direção", "Migração de dados de folhas de cálculo e sistemas antigos", "Integração com contabilidade, telefonia e e-mail"],
          result: "Um só sistema em vez de um jardim zoológico de folhas de cálculo: a direção vê o ponto da situação sem relatórios semanais de cada departamento."
        },
        cloud: {
          lead: "Infraestrutura na AWS que resiste a falhas e não encarece sem razão",
          pitch: "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila muito, quando é preciso tolerância a falhas ou quando novos ambientes têm de estar prontos em minutos e não numa semana. Por isso, a migração para a Amazon Web Services começa com uma auditoria e um cálculo de custos, e faz-se por fases, com um plano de reversão em cada passo.",
          list: ["Auditoria da infraestrutura atual e cálculo de custos", "Arquitetura na AWS e plano de migração", "Migração de servidores, bases de dados e ficheiros", "Cópias de segurança e monitorização", "Otimização de custos após a migração"],
          result: "Uma infraestrutura que sobrevive à falha de um servidor, e uma fatura da cloud que consegue perceber."
        },
        redhat: {
          lead: "Uma infraestrutura que não vive na cabeça de um só administrador",
          pitch: "As empresas escolhem a Red Hat quando os servidores têm de funcionar durante anos e passar auditorias. A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo: o Red Hat Enterprise Linux tem suporte durante dez anos. Concebemos a infraestrutura à medida das suas cargas e descrevemos a configuração em Ansible, de modo que qualquer servidor pode ser reconstruído a partir de um playbook. A Red Hat é nossa parceira, por isso também ajudamos com as subscrições e o suporte do fabricante.",
          list: ["Auditoria dos seus servidores atuais e plano de migração", "Red Hat Enterprise Linux com atualizações centralizadas através do Red Hat Satellite", "A plataforma de contentores OpenShift para as suas aplicações", "Automatização da configuração e da implementação com Ansible", "Gestão centralizada de identidades e acessos (Identity Management)", "Monitorização, cópias de segurança e documentação para a sua equipa"],
          result: "Uma infraestrutura que se pode auditar, reproduzir e entregar a outra equipa sem perda de conhecimento."
        },
        api: {
          lead: "Introduza os dados uma vez, e eles fazem sozinhos o resto do caminho",
          pitch: "A dor mais comum que encontramos é a dupla introdução de dados: as encomendas do site são passadas à mão para a contabilidade e os pagamentos conferidos numa folha de cálculo. Uma integração elimina esse trabalho, e os erros também. E configuramos sempre a monitorização, porque as integrações avariam em silêncio quando um parceiro altera a sua API, e é melhor saber disso pelo sistema do que por um cliente.",
          list: ["Conceção e documentação de APIs", "Integração com prestadores de pagamento, transportadoras, CRM e contabilidade", "Troca de dados entre sistemas internos", "Filas e novas tentativas em caso de falha", "Monitorização e alertas"],
          result: "Os dados são introduzidos uma só vez e chegam sozinhos aonde são precisos."
        },
        support: {
          lead: "Um suporte que deteta o problema antes dos seus utilizadores",
          pitch: "O suporte é mais do que corrigir erros: são atualizações que fecham vulnerabilidades, monitorização e pequenas melhorias pelo caminho. Também assumimos sistemas que não foram feitos por nós. Nesse caso, começamos por uma auditoria e pela documentação, porque sem ela cada alteração é uma lotaria.",
          list: ["Monitorização da disponibilidade e dos erros", "Correção de erros e atualizações de segurança", "Cópias de segurança e testes de recuperação", "Melhorias planeadas e novas funcionalidades", "Auditoria e documentação de sistemas de outros fornecedores"],
          result: "Um sistema que funciona, e uma equipa que sabe como está construído."
        }
      }
    },
    it: {
      sub: "Non vendiamo semplicemente la tecnologia che conosciamo. Prima capiamo il Suo problema, poi scegliamo gli strumenti. E se Le basta un servizio già pronto in abbonamento, glielo diremo con franchezza.",
      items: {
        concept: {
          lead: "Sapere cosa costruire prima ancora della prima riga di codice",
          pitch: "Gli errori più costosi nei progetti IT si commettono all'inizio, quando si costruisce un sistema per un problema che nessuno ha definito con chiarezza. Parliamo con le persone che lavoreranno con il sistema: amministrazione, magazzino, commerciali. E se emerge che Le basta un prodotto esistente opportunamente configurato, lo sentirà da noi prima di spendere il budget nello sviluppo.",
          list: ["Interviste al personale e analisi dei processi attuali", "Requisiti di business e scenari d'uso", "Confronto tra soluzioni pronte e sviluppo su misura", "Capitolato tecnico con stima di tempi e budget per fase"],
          result: "Un documento con cui qualsiasi team, il nostro o un altro, può stimare il progetto e mettersi al lavoro."
        },
        saas: {
          lead: "Un servizio che i clienti acquistano da soli, senza chiamare l'assistenza",
          pitch: "Il successo di un SaaS non dipende dal codice, ma da quanto è semplice per un nuovo cliente registrarsi, pagare e iniziare a lavorare. Multi-tenancy, fatturazione e permessi li prevediamo dal primo giorno, perché aggiungerli quando i clienti sono già dentro costa molte volte di più. E rilasciamo presto la prima versione: gli utenti reali mostrano in fretta di quali funzioni si può fare a meno.",
          list: ["Architettura multi-tenant con i dati dei clienti isolati", "Registrazione, piani, abbonamenti e pagamento online", "Aree riservate, ruoli e permessi", "Integrazioni e API pubblica per i Suoi clienti", "Scalabilità al crescere del carico"],
          result: "Un prodotto che si vende in abbonamento, non un progetto da installare a mano ogni volta."
        },
        web: {
          lead: "Un sito che si misura in contatti, non in screenshot da portfolio",
          pitch: "Prima di partire concordiamo che cosa conta come risultato e attiviamo le statistiche prima del lancio, non sei mesi dopo. La tecnologia si sceglie in base al compito: una landing page non ha bisogno di una piattaforma pesante e un marketplace non sta in un sito fai-da-te. Realizziamo siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni.",
          list: ["Prototipo e design delle interfacce", "Frontend, backend e pannello di amministrazione", "Integrazione con pagamenti, spedizioni, CRM e gestionali contabili", "Basi SEO, caricamento veloce e statistiche", "Lancio e assistenza continuativa"],
          result: "Un servizio web da cui si vede quanti contatti e quanto fatturato porta."
        },
        mobile: {
          lead: "Un'app su cui i clienti tornano, oppure un sincero «non Le serve»",
          pitch: "Un'app si ripaga quando i clienti la usano con regolarità: riordinano, seguono una consegna, accumulano punti fedeltà. Se La visitano una volta l'anno, un buon sito mobile costa meno, e glielo diremo prima di iniziare. Nativa o multipiattaforma: lo decidiamo in base al budget e a quanto l'app ha bisogno di fotocamera, geolocalizzazione e modalità offline.",
          list: ["App per iOS e Android", "Parte server e API", "Pannello di amministrazione per contenuti, ordini e utenti", "Notifiche push e statistiche", "Pubblicazione su App Store e Google Play"],
          result: "Un'app che supera la revisione di App Store e Google Play e che il Suo team gestisce senza sviluppatori."
        },
        ai: {
          lead: "Agenti di IA che tolgono la routine al Suo team",
          pitch: "Un agente di IA esegue da solo i passaggi ripetitivi di un processo: smista le richieste, compila il CRM, prepara le risposte ai clienti, mentre una persona controlla il risultato. Allo stesso tempo siamo più scettici della media: metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione, e glielo diremo. Per questo tutto parte da un progetto pilota sui Suoi dati: vede l'accuratezza prima dello sviluppo vero e proprio, non dopo.",
          list: ["Agenti di IA che smistano le richieste, compilano il CRM e preparano le risposte ai clienti", "Chatbot e assistenti per clienti e dipendenti", "Riconoscimento di documenti ed estrazione dei dati", "Classificazione delle richieste e ricerca nella knowledge base", "Previsione della domanda e analisi dei dati", "Progetto pilota con misurazione della qualità sui Suoi dati"],
          result: "Un processo che prima gestivano le persone a mano ora lo esegue il sistema, e il controllo resta a una persona."
        },
        crm: {
          lead: "Un sistema su misura per i Suoi processi, non il contrario",
          pitch: "Un CRM standard funziona finché il Suo processo è standard. Quando i commerciali gestiscono metà del lavoro in fogli di calcolo perché il sistema «non lo fa», uno sviluppo su misura diventa più conveniente. Trasferiamo i dati dai vecchi sistemi e dai fogli di calcolo e introduciamo il sistema reparto per reparto, così il lavoro non si ferma nemmeno per un giorno.",
          list: ["Moduli vendite, magazzino, produzione e finanza, secondo le necessità", "Ruoli, permessi e registro delle attività", "Report e dashboard per la direzione", "Migrazione dei dati da fogli di calcolo e vecchi sistemi", "Integrazione con contabilità, telefonia ed e-mail"],
          result: "Un solo sistema al posto di uno zoo di fogli di calcolo: la direzione vede come stanno le cose senza report settimanali da ogni reparto."
        },
        cloud: {
          lead: "Infrastruttura AWS che resiste ai guasti e non rincara senza motivo",
          pitch: "Il cloud non è sempre più economico di un server proprio. Conviene quando il carico ha forti picchi, quando serve la tolleranza ai guasti o quando i nuovi ambienti devono essere pronti in pochi minuti anziché in una settimana. Per questo il passaggio ad Amazon Web Services parte da un audit e da una stima dei costi, e avviene per fasi, con un piano di rollback a ogni passo.",
          list: ["Audit dell'infrastruttura attuale e stima dei costi", "Architettura su AWS e piano di migrazione", "Trasferimento di server, database e file", "Backup e monitoraggio", "Ottimizzazione dei costi dopo la migrazione"],
          result: "Un'infrastruttura che sopravvive al guasto di un server, e una fattura del cloud che Lei capisce."
        },
        redhat: {
          lead: "Un'infrastruttura che non vive nella testa di un solo amministratore",
          pitch: "Le aziende scelgono Red Hat quando i server devono funzionare per anni e superare gli audit. L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo: Red Hat Enterprise Linux è supportato per dieci anni. Progettiamo l'infrastruttura sui Suoi carichi di lavoro e descriviamo la configurazione in Ansible, così ogni server si può ricostruire a partire da un playbook. Red Hat è nostro partner, quindi La aiutiamo anche con abbonamenti e supporto del produttore.",
          list: ["Audit dei server attuali e piano di migrazione", "Red Hat Enterprise Linux con aggiornamenti centralizzati tramite Red Hat Satellite", "La piattaforma di container OpenShift per le Sue applicazioni", "Automazione della configurazione e del deployment con Ansible", "Gestione centralizzata di identità e accessi (Identity Management)", "Monitoraggio, backup e documentazione per il Suo team"],
          result: "Un'infrastruttura che si può verificare, riprodurre e passare a un altro team senza perdere conoscenze."
        },
        api: {
          lead: "Inserisca i dati una volta: al resto pensano loro",
          pitch: "Il problema più frequente che vediamo è il doppio inserimento: gli ordini del sito ricopiati a mano nella contabilità, i pagamenti riconciliati in un foglio di calcolo. Un'integrazione elimina questo lavoro, e gli errori con esso. E impostiamo sempre il monitoraggio, perché le integrazioni si rompono in silenzio quando un partner cambia la sua API, ed è meglio saperlo dal sistema che da un cliente.",
          list: ["Progettazione e documentazione delle API", "Integrazione con sistemi di pagamento, corrieri, CRM e contabilità", "Scambio di dati tra sistemi interni", "Code e nuovi tentativi in caso di errore", "Monitoraggio e notifiche"],
          result: "I dati si inseriscono una volta sola e arrivano da soli dove servono."
        },
        support: {
          lead: "Un supporto che nota il problema prima dei Suoi utenti",
          pitch: "Il supporto è più che correggere bug: sono aggiornamenti che chiudono le vulnerabilità, monitoraggio e piccoli miglioramenti strada facendo. Prendiamo in carico anche sistemi che non abbiamo sviluppato noi. In quel caso partiamo da un audit e dalla documentazione, perché senza di essa ogni modifica è una lotteria.",
          list: ["Monitoraggio della disponibilità e degli errori", "Correzione dei bug e aggiornamenti di sicurezza", "Backup e test di ripristino", "Miglioramenti pianificati e nuove funzionalità", "Audit e documentazione di sistemi realizzati da altri fornitori"],
          result: "Un sistema che funziona, e un team che sa come è fatto."
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
  const u = () => UI[lang] || UI.en;

  /* ---------- Розмітка ---------- */
  function navbar() {
    const s = u();
    const versions = AIC.variants.map((v) =>
      `<li><a href="${esc(AIC.url(v.id, lang))}"${v.id === AIC.id ? ' class="active" aria-current="page"' : ""}>` +
      `<span class="yr">${esc(v.year)}</span>${esc(v.name[lang])}</a></li>`
    ).join("");
    const langs = LANGS.map((l) =>
      `<li><a href="#" data-lang="${l}" lang="${l}"${l === lang ? ' class="active" aria-current="true"' : ""}><span class="yr">${esc(LANG_CODES[l] || l.toUpperCase())}</span>${esc(LANG_NAMES[l] || l)}</a></li>`
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
              <button type="button" class="dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-label="${esc(s.language)}">${esc(LANG_CODES[lang] || lang.toUpperCase())} <b class="caret"></b></button>
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
    const own = (SVC[lang] || SVC.en).items;
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
          <div class="section-title reveal"><h2>${esc(c().services.heading)}</h2><p>${esc((SVC[lang] || SVC.en).sub)}</p></div>
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
