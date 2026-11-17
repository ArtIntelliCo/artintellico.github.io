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
    },
    de: {
      welcome: "Willkommen auf unserer Homepage!",
      langLabel: "Sprache:",
      nav: { about: "Über uns", services: "Leistungen", partners: "Partner", contacts: "Kontakt", guestbook: "Gästebuch", webring: "Webring" },
      counter: "Sie sind Besucher Nr.",
      construction: "Diese Seite ist im Aufbau! Schauen Sie öfter vorbei – wir ergänzen ständig etwas Neues.",
      cols: ["Nr.", "Leistung", "Was wir tun"],
      svc: { more: "Hier klicken für mehr Infos!", details: "Alle Leistungen im Detail", incl: "Leistungsumfang:", get: "Was Sie bekommen:", back: "<<< Zurück zur Tabelle" },
      emailMe: "Schreiben Sie uns!",
      gb: {
        title: "Tragen Sie sich in unser Gästebuch ein!",
        name: "Ihr Name:",
        email: "E-Mail:",
        homepage: "Homepage:",
        found: "Wie haben Sie uns gefunden?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "Tipp von einem Freund"],
        comment: "Kommentar:",
        submit: "Eintragen!",
        reset: "Löschen",
        subject: "Gästebucheintrag",
        note: "Ihr E-Mail-Programm wird geöffnet. Ohne Sie wird nichts verschickt."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Zurück", random: "Zufall", next: "Weiter >>", here: "SIE SIND HIER" },
      top: "Nach oben",
      updated: "Letzte Aktualisierung:",
      bestViewed: "Optimiert für Netscape Navigator 4.0 bei 800×600",
      locale: "de-DE"
    },
    fr: {
      welcome: "Bienvenue sur notre page d'accueil !",
      langLabel: "Langue :",
      nav: { about: "Qui sommes-nous", services: "Services", partners: "Partenaires", contacts: "Contact", guestbook: "Livre d'or", webring: "Webring" },
      counter: "Vous êtes le visiteur n°",
      construction: "Site en construction ! Revenez souvent : nous ajoutons des nouveautés en permanence.",
      cols: ["N°", "Service", "Ce que nous faisons"],
      svc: { more: "Cliquez ici pour en savoir plus !", details: "Tout sur chaque service", incl: "Ce qui est inclus :", get: "Ce que vous obtenez :", back: "<<< Retour au tableau" },
      emailMe: "Écrivez-nous !",
      gb: {
        title: "Signez notre livre d'or !",
        name: "Votre nom :",
        email: "E-mail :",
        homepage: "Page perso :",
        found: "Comment nous avez-vous trouvés ?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "Un ami m'en a parlé"],
        comment: "Commentaire :",
        submit: "Signer !",
        reset: "Effacer",
        subject: "Message pour le livre d'or",
        note: "Votre logiciel de messagerie va s'ouvrir. Rien n'est envoyé sans vous."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Précédent", random: "Au hasard", next: "Suivant >>", here: "VOUS ÊTES ICI" },
      top: "Haut de page",
      updated: "Dernière mise à jour :",
      bestViewed: "Site optimisé pour Netscape Navigator 4.0 en 800×600",
      locale: "fr-FR"
    },
    es: {
      welcome: "¡Bienvenido a nuestra página web!",
      langLabel: "Idioma:",
      nav: { about: "Quiénes somos", services: "Servicios", partners: "Socios", contacts: "Contacto", guestbook: "Libro de visitas", webring: "Webring" },
      counter: "Usted es el visitante n.º",
      construction: "¡Página en construcción! Vuelva a menudo: siempre estamos añadiendo cosas nuevas.",
      cols: ["N.º", "Servicio", "Qué hacemos"],
      svc: { more: "¡Haga clic aquí para saber más!", details: "Todo sobre cada servicio", incl: "Qué incluye:", get: "Qué obtiene usted:", back: "<<< Volver a la tabla" },
      emailMe: "¡Escríbanos!",
      gb: {
        title: "¡Firme nuestro libro de visitas!",
        name: "Su nombre:",
        email: "Correo electrónico:",
        homepage: "Página personal:",
        found: "¿Cómo nos encontró?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "Me lo dijo un amigo"],
        comment: "Comentarios:",
        submit: "¡Firmar!",
        reset: "Borrar",
        subject: "Firma en el libro de visitas",
        note: "Se abrirá su programa de correo. No se envía nada sin usted."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Anterior", random: "Al azar", next: "Siguiente >>", here: "USTED ESTÁ AQUÍ" },
      top: "Arriba",
      updated: "Última actualización:",
      bestViewed: "Esta página se ve mejor con Netscape Navigator 4.0 a 800×600",
      locale: "es-ES"
    },
    pt: {
      welcome: "Bem-vindo à nossa página na Internet!",
      langLabel: "Idioma:",
      nav: { about: "Quem somos", services: "Serviços", partners: "Parceiros", contacts: "Contactos", guestbook: "Livro de visitas", webring: "Webring" },
      counter: "É o visitante n.º",
      construction: "Página em construção! Volte muitas vezes — estamos sempre a acrescentar novidades.",
      cols: ["N.º", "Serviço", "O que fazemos"],
      svc: { more: "Clique aqui para saber mais!", details: "Cada serviço em pormenor", incl: "O que inclui:", get: "O que recebe:", back: "<<< Voltar à tabela" },
      emailMe: "Escreva-nos!",
      gb: {
        title: "Assine o nosso livro de visitas!",
        name: "O seu nome:",
        email: "E-mail:",
        homepage: "Página pessoal:",
        found: "Como nos encontrou?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "Foi um amigo que me disse"],
        comment: "Comentário:",
        submit: "Assinar!",
        reset: "Limpar",
        subject: "Mensagem no livro de visitas",
        note: "Vai abrir-se o seu programa de correio. Nada é enviado sem si."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Anterior", random: "Aleatório", next: "Seguinte >>", here: "ESTÁ AQUI" },
      top: "Voltar ao topo",
      updated: "Última atualização:",
      bestViewed: "Melhor visualizado com Netscape Navigator 4.0 a 800×600",
      locale: "pt-PT"
    },
    it: {
      welcome: "Benvenuti nella nostra homepage!",
      langLabel: "Lingua:",
      nav: { about: "Chi siamo", services: "Servizi", partners: "Partner", contacts: "Contatti", guestbook: "Libro degli ospiti", webring: "Webring" },
      counter: "Lei è il visitatore n°",
      construction: "Sito in costruzione! Torni a trovarci spesso: aggiungiamo novità di continuo.",
      cols: ["N°", "Servizio", "Cosa facciamo"],
      svc: { more: "Clicchi qui per saperne di più!", details: "Tutti i dettagli su ogni servizio", incl: "Cosa comprende:", get: "Cosa ottiene:", back: "<<< Torna alla tabella" },
      emailMe: "Ci scriva!",
      gb: {
        title: "Firmi il nostro libro degli ospiti!",
        name: "Il Suo nome:",
        email: "E-mail:",
        homepage: "Homepage:",
        found: "Come ci ha trovati?",
        foundOpts: ["Yahoo!", "AltaVista", "Webring", "Me l'ha detto un amico"],
        comment: "Commento:",
        submit: "Firma!",
        reset: "Cancella",
        subject: "Messaggio nel libro degli ospiti",
        note: "Si aprirà il Suo programma di posta. Nulla viene inviato senza di Lei."
      },
      ring: { title: "ArtIntelliCo Retro Webring", prev: "<< Precedente", random: "A caso", next: "Successivo >>", here: "LEI È QUI" },
      top: "Torna su",
      updated: "Ultimo aggiornamento:",
      bestViewed: "Visualizzazione ottimale con Netscape Navigator 4.0 a 800×600",
      locale: "it-IT"
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
    },
    de: {
      lead: "Hier finden Sie alles, was wir für Sie tun können. Wir sind auf keine Programmiersprache und keine Plattform festgelegt: Erst verstehen wir Ihre Aufgabe, dann wählen wir die Werkzeuge. Und wenn ein fertiger Dienst im Abo besser zu Ihnen passt, sagen wir Ihnen das ganz offen. Ohne Tricks!",
      items: {
        concept: {
          s: "Wir helfen Ihnen herauszufinden, was Ihr künftiges System wirklich leisten muss – bevor auch nur eine Zeile Code geschrieben wird.",
          b: "Der teuerste Fehler passiert gleich am Anfang: Das System wird für eine Aufgabe gebaut, die nie jemand richtig formuliert hat. Deshalb sprechen wir zuerst mit den Leuten, die damit arbeiten werden (Buchhaltung, Lager, Vertrieb), und nicht nur mit der Geschäftsführung. Und ja, manchmal raten wir danach, gar nichts zu entwickeln, sondern ein fertiges Produkt einzurichten. Das sagen wir ganz ohne Scheu!",
          l: ["Gespräche mit Ihren Mitarbeitern und ein Blick darauf, wie heute alles läuft", "Geschäftsanforderungen und Szenarien: wer was wann im System tut", "ein ehrlicher Vergleich: Standardprodukt oder Individualentwicklung", "ein Pflichtenheft mit Zeit- und Budgetschätzung für jede Phase"],
          g: "ein Dokument, nach dem jedes Team (unseres oder ein anderes!) den Aufwand schätzen und loslegen kann."
        },
        saas: {
          s: "Wir entwickeln SaaS-Dienste: von der ersten Version für Pilotkunden bis zur Plattform, auf der jeder Kunde seinen eigenen Arbeitsbereich, seinen Tarif und sein Dashboard hat.",
          b: "Bei SaaS verdient nicht der Code das Geld, sondern die Frage, wie leicht sich ein neuer Kunde registriert, bezahlt und loslegt, ohne je beim Support anzurufen. Darum bauen wir Mandantenfähigkeit, Abrechnung und Zugriffsrechte vom ersten Tag an ein: Sie nachträglich umzubauen, wenn die Kunden schon drin sind, kostet ein Vielfaches. Und die erste Version bringen wir so früh wie möglich heraus, denn echte Nutzer zeigen sehr schnell, welche Funktionen überflüssig waren.",
          l: ["eine Architektur, in der die Daten jedes Kunden von allen anderen getrennt sind", "Registrierung, Tarife, Abonnements und Online-Zahlung", "Kundenbereiche, Rollen und Zugriffsrechte", "Integrationen und eine offene API für Ihre Kunden", "Skalierung, wenn die Last wächst"],
          g: "ein Produkt, das Sie im Abo verkaufen können, statt eines Projekts, das jedes Mal von Hand eingeführt werden muss."
        },
        web: {
          s: "Firmenwebsites, Marktplätze, Online-Shops, Buchungssysteme und interne Webanwendungen. Passend zu Ihrer Aufgabe, nicht in eine Vorlage gepresst!",
          b: "Wir wissen: Ein Unternehmen misst seine Website an Anfragen und Bestellungen, nicht daran, wie hübsch sie in irgendeinem Portfolio aussieht. Deshalb legen wir zuerst gemeinsam fest, was als Erfolg zählt, und richten die Webanalyse schon vor dem Start ein (und nicht erst ein halbes Jahr später, wie es oft passiert). Die Technik richtet sich nach der Aufgabe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Homepage-Baukasten.",
          l: ["Prototyp und Design für jede Seite", "Frontend, Backend und Admin-Bereich", "Anbindung von Zahlung, Versand, CRM und Buchhaltungssystemen", "SEO-Grundlagen, schnelle Ladezeiten und Webanalyse", "Start und Betreuung danach"],
          g: "eine Webanwendung, bei der Sie sehen, wie viele Anfragen und wie viel Umsatz sie bringt."
        },
        mobile: {
          s: "Apps für iOS und Android, samt Serverseite und Admin-Bereich dahinter.",
          b: "Sagen wir es gleich vorweg: Nicht jeder braucht eine App. Sie lohnt sich, wenn Kunden regelmäßig wiederkommen, um erneut zu bestellen, eine Lieferung zu verfolgen oder Bonuspunkte zu sammeln. Wer nur einmal im Jahr vorbeischaut, ist mit einer guten mobilen Website günstiger bedient, und das sagen wir Ihnen, bevor die Arbeit beginnt. Nativ oder plattformübergreifend? Das entscheiden wir gemeinsam, mit Blick auf das Budget und darauf, wie sehr die App Kamera, Standort und Offline-Betrieb braucht.",
          l: ["Apps für iOS und Android", "Serverseite und API", "ein Admin-Bereich für Inhalte, Bestellungen und Nutzer", "Push-Benachrichtigungen und Statistik", "Veröffentlichung im App Store und bei Google Play"],
          g: "eine App, die die Prüfung der Stores besteht und die Ihr eigenes Team ohne Entwickler betreiben kann."
        },
        ai: {
          s: "Wir automatisieren Ihre Geschäftsprozesse mit KI-Agenten: Künstliche Intelligenz und maschinelles Lernen übernehmen die Routine, die heute Ihre Leute erledigen.",
          b: "Stellen Sie sich vor: Eine Anfrage kommt herein, der Agent sortiert sie, trägt sie ins CRM ein und entwirft eine Antwort an den Kunden; ein Mensch muss sie nur noch prüfen. Zugegeben, wir sehen KI skeptischer als viele andere. Die Hälfte der Ideen à la „Bauen wir doch ein neuronales Netz ein!“ lässt sich mit ganz normaler Automatisierung lösen. Aber wo Mitarbeiter stundenlang E-Mails, Dokumente und Anfragen sortieren, nimmt KI ihnen die Routine wirklich ab. Wir beginnen mit einem Pilotprojekt auf Ihren eigenen Daten, damit Sie die Trefferquote vor der eigentlichen Entwicklung sehen, nicht danach.",
          l: ["KI-Agenten, die selbstständig Anfragen sortieren, das CRM pflegen und Antworten an Kunden entwerfen", "Chatbots und Assistenten für Kunden und Mitarbeiter", "Dokumente erkennen und Daten daraus auslesen", "Anfragen sortieren und in Ihrer Wissensdatenbank suchen", "Bedarfsprognosen und Datenanalyse", "ein Pilotprojekt, in dem die Qualität an Ihren Daten gemessen wird"],
          g: "eine konkrete Arbeit, die früher Menschen von Hand gemacht haben, erledigt jetzt das System, und ein Mensch behält die Kontrolle."
        },
        crm: {
          s: "CRM- und ERP-Systeme, die sich nach Ihrem Geschäft richten, nicht umgekehrt.",
          b: "Ein CRM von der Stange ist in Ordnung, solange Ihr Ablauf aussieht wie bei allen anderen. Aber wenn Ihre Vertriebler die Hälfte ihrer Arbeit in Tabellen erledigen, weil das System „das nicht kann“, wird eine eigene Lösung günstiger. Die Daten aus alten Systemen und Tabellen übernehmen wir selbst, und eingeführt wird Abteilung für Abteilung, damit die Arbeit keinen einzigen Tag stillsteht.",
          l: ["Module für Vertrieb, Lager, Produktion und Finanzen, je nach Bedarf", "Rollen, Zugriffsrechte und ein Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsleitung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonanlage und E-Mail"],
          g: "ein System statt eines Zoos aus Tabellen. Die Geschäftsleitung sieht, wie es läuft, ohne jede Woche Berichte aus allen Abteilungen einzusammeln."
        },
        cloud: {
          s: "Wir bringen Ihre Infrastruktur zu Amazon Web Services, komplett oder Stück für Stück, und sorgen dafür, dass sie läuft und nicht grundlos teurer wird.",
          b: "Was viele nicht erwarten: Die Cloud ist nicht immer billiger als der eigene Server. Sie lohnt sich, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn eine neue Umgebung in Minuten statt in einer Woche stehen muss. Deshalb beginnt ein Umzug mit einem Audit und einer Kostenschätzung, und er erfolgt in Etappen, mit einem Plan zum Zurückrollen bei jedem Schritt.",
          l: ["ein Audit des Ist-Zustands und eine Kostenschätzung", "AWS-Architektur und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Backups und Überwachung", "Kostenoptimierung nach dem Umzug"],
          g: "eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie wirklich verstehen."
        },
        redhat: {
          s: "Wir bauen Unternehmensinfrastruktur auf Red Hat: Server mit Red Hat Enterprise Linux, Container auf OpenShift und eine mit Ansible automatisierte Einrichtung.",
          b: "Red Hat ist für alle, die ihre Infrastruktur auf lange Sicht brauchen: jahrelang im Betrieb, prüfungssicher und nicht nur im Kopf eines einzigen Administrators. Das Abonnement macht sich durch den Herstellersupport und den langen Lebenszyklus bezahlt (Red Hat Enterprise Linux wird zehn Jahre lang unterstützt!). Wir planen alles für Ihre Lasten und halten die Serverkonfiguration in Ansible fest, sodass jeder Server nach einem Playbook neu aufgebaut werden kann statt aus dem Gedächtnis von irgendwem. Und noch etwas: Red Hat ist unser Partner, wir helfen also auch bei Abonnements und Herstellersupport.",
          l: ["ein Audit Ihrer Server und ein Migrationsplan", "Einführung von Red Hat Enterprise Linux mit zentralen Updates über Red Hat Satellite", "OpenShift, eine Container-Plattform für Ihre Anwendungen", "automatisierte Einrichtung und Bereitstellung mit Ansible", "zentrale Verwaltung von Benutzerkonten und Zugriffen (Identity Management)", "Überwachung, Backups und Dokumentation für Ihr Team"],
          g: "eine Infrastruktur, die Sie prüfen, reproduzieren und an ein anderes Team übergeben können, ohne dass Wissen verloren geht."
        },
        api: {
          s: "Wir schreiben APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
          b: "Das Problem, das uns am häufigsten begegnet: Daten werden doppelt eingetippt. Bestellungen von der Website werden ins Buchhaltungssystem abgetippt, Zahlungen in einer Tabelle abgehakt. Eine Integration nimmt Ihnen diese Arbeit ab, samt den Fehlern, die dabei entstehen. Überwachung bauen wir immer mit ein: Integrationen gehen leise kaputt, wenn ein Partner seine API ändert, und davon erfährt man besser vom System als vom Kunden.",
          l: ["API-Entwurf und Dokumentation", "Anbindung von Zahlungsanbietern, Versanddiensten, CRM und Buchhaltung", "Datenaustausch zwischen Ihren internen Systemen", "Warteschlangen und Wiederholungen, falls etwas ausfällt", "Überwachung und Alarme"],
          g: "Daten werden einmal erfasst und finden von selbst ihren Weg dorthin, wo sie gebraucht werden."
        },
        support: {
          s: "Wir betreuen Ihre IT-Systeme und entwickeln sie weiter. Auch die, die wir nicht gebaut haben!",
          b: "Support heißt für uns nicht nur „reparieren, wenn es kaputtgeht“. Dazu gehören Updates, die Sicherheitslücken schließen, eine Überwachung, die ein Problem vor Ihren Nutzern bemerkt, und kleine Verbesserungen nebenbei. Haben Sie das System von einem anderen Dienstleister geerbt, beginnen wir mit einem Audit und einer Dokumentation, denn ohne sie ist jede Änderung ein Glücksspiel.",
          l: ["Verfügbarkeit und Fehler im Blick behalten", "Bugs beheben und Sicherheitsupdates einspielen", "Backups anlegen und prüfen, ob sie sich wirklich zurückspielen lassen", "geplante Verbesserungen und neue Funktionen", "Audits und Dokumentation für Systeme anderer Dienstleister"],
          g: "ein System, das läuft, und ein Team, das weiß, wie es aufgebaut ist."
        }
      }
    },
    fr: {
      lead: "Voici tout ce que nous savons faire pour vous. Nous ne sommes liés à aucun langage de programmation ni à aucune plateforme : d'abord nous comprenons votre problème, ensuite nous choisissons les outils. Et si un service en abonnement tout prêt vous convient mieux, nous vous le dirons tout simplement. Sans entourloupe !",
      items: {
        concept: {
          s: "Nous vous aidons à définir ce que votre futur système doit vraiment faire, avant que quiconque n'écrive la moindre ligne de code.",
          b: "L'erreur la plus coûteuse se produit dès le départ : on construit le système pour un problème que personne n'a jamais vraiment formulé. Alors nous commençons par parler avec ceux qui l'utiliseront (la comptabilité, l'entrepôt, les commerciaux), et pas seulement avec la direction. Et oui, il arrive qu'après tout cela nous vous conseillions de ne rien développer et de paramétrer un produit existant. Nous n'avons aucune gêne à le dire !",
          l: ["des entretiens avec vos équipes et un état des lieux de l'existant", "les besoins métier et les scénarios : qui fait quoi, et quand", "une comparaison honnête entre progiciel du marché et développement sur mesure", "un cahier des charges avec estimation des délais et du budget pour chaque phase"],
          g: "un document à partir duquel n'importe quelle équipe (la nôtre ou une autre !) peut chiffrer le travail et démarrer."
        },
        saas: {
          s: "Nous développons des services SaaS, de la première version pour des clients pilotes jusqu'à la plateforme où chaque client dispose de son espace, de son forfait et de son tableau de bord.",
          b: "En SaaS, ce n'est pas le code qui rapporte de l'argent. C'est la facilité avec laquelle un nouveau client s'inscrit, paie et se lance sans jamais appeler le support. C'est pourquoi nous intégrons le multi-locataire, la facturation et les droits d'accès dès le premier jour : les refaire quand les clients sont déjà là coûte plusieurs fois plus cher. Et nous sortons la première version le plus tôt possible, car de vrais utilisateurs montrent très vite quelles fonctions ne servaient à rien.",
          l: ["une architecture où les données de chaque client sont isolées de celles des autres", "inscription, forfaits, abonnements et paiement en ligne", "espaces clients, rôles et droits d'accès", "intégrations et API publique pour vos clients", "montée en charge quand l'activité grandit"],
          g: "un produit que vous pouvez vendre par abonnement, au lieu d'un projet à déployer à la main à chaque fois."
        },
        web: {
          s: "Sites d'entreprise, places de marché, boutiques en ligne, systèmes de réservation et outils web internes. Faits pour votre besoin, pas tassés dans un modèle !",
          b: "Nous le savons : une entreprise juge son site à ses demandes de contact et à ses commandes, pas à sa beauté dans le portfolio de quelqu'un. Alors nous convenons d'abord avec vous de ce qui compte comme résultat, et nous installons les statistiques avant le lancement (et non six mois plus tard, comme c'est souvent le cas). La technique s'adapte au besoin : une page d'atterrissage n'a pas besoin d'une plateforme lourde, et une place de marché ne tiendra pas dans un outil de création de sites.",
          l: ["une maquette et un design pour chaque écran", "frontend, backend et interface d'administration", "branchement du paiement, de la livraison, du CRM et de la comptabilité", "bases du référencement, chargement rapide et statistiques", "mise en ligne, puis suivi"],
          g: "un service web qui vous montre combien de demandes et combien d'argent il rapporte."
        },
        mobile: {
          s: "Applications iOS et Android, avec la partie serveur et l'interface d'administration qui vont derrière.",
          b: "Disons-le d'emblée : tout le monde n'a pas besoin d'une application. Elle a du sens quand les clients reviennent régulièrement pour commander à nouveau, suivre une livraison ou cumuler des points de fidélité. Si quelqu'un vient vous voir une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant que le travail ne commence. Natif ou multiplateforme ? Nous en décidons ensemble, en regardant le budget et à quel point l'application a besoin de l'appareil photo, de la géolocalisation et du mode hors ligne.",
          l: ["applications pour iOS et Android", "partie serveur et API", "une interface d'administration pour le contenu, les commandes et les utilisateurs", "notifications push et statistiques", "publication sur l'App Store et Google Play"],
          g: "une application qui passe la validation des stores et que votre équipe gère elle-même, sans appeler un développeur."
        },
        ai: {
          s: "Nous automatisons vos processus métier avec des agents d'IA : l'intelligence artificielle et l'apprentissage automatique prennent en charge la routine que vos équipes font aujourd'hui.",
          b: "Imaginez : une demande arrive, l'agent la trie, la saisit dans le CRM et prépare une réponse au client ; il ne reste plus qu'à vérifier. Cela dit, nous l'avouons, nous sommes plus sceptiques que beaucoup sur l'IA. La moitié des idées du genre « ajoutons un réseau de neurones ! » se règlent avec une automatisation toute simple. Mais là où l'on passe des heures à trier e-mails, documents et demandes, l'IA supprime vraiment la routine. Nous commençons par un pilote sur vos propres données, pour que vous voyiez les chiffres de précision avant le développement principal, pas après.",
          l: ["des agents d'IA qui trient les demandes, remplissent le CRM et préparent seuls les réponses aux clients", "chatbots et assistants pour vos clients et vos équipes", "lecture de documents et extraction de leurs données", "tri des demandes et recherche dans votre base de connaissances", "prévisions de la demande et analyse de données", "un pilote où la qualité se mesure sur vos données"],
          g: "une tâche précise que des personnes faisaient à la main est désormais réalisée par le système, sous contrôle humain."
        },
        crm: {
          s: "Des CRM et ERP construits autour de la façon dont travaille votre entreprise, et non l'inverse.",
          b: "Un CRM du commerce convient tant que votre fonctionnement ressemble à celui de tout le monde. Mais quand vos commerciaux font la moitié de leur travail dans des tableurs parce que le système « ne sait pas faire ça », une solution sur mesure revient moins cher. Nous reprenons nous-mêmes les données des anciens systèmes et des tableurs, et nous déployons service par service pour que le travail ne s'arrête pas un seul jour.",
          l: ["modules ventes, stock, production et finances, selon vos besoins", "rôles, droits d'accès et journal des actions", "rapports et tableaux de bord pour la direction", "reprise des données depuis les tableurs et les anciens systèmes", "liaison avec la comptabilité, la téléphonie et la messagerie"],
          g: "un seul système au lieu d'un zoo de tableurs. La direction voit où en sont les choses sans réclamer chaque semaine des rapports à chaque service."
        },
        cloud: {
          s: "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou par étapes, et veillons à ce qu'elle tourne sans devenir plus chère sans raison.",
          b: "Une chose qu'on n'attend pas toujours : le cloud n'est pas forcément moins cher que votre propre serveur. Il est rentable quand la charge varie fortement, quand il faut de la tolérance aux pannes, ou quand un nouvel environnement doit être prêt en quelques minutes plutôt qu'en une semaine. Une migration commence donc par un audit et une estimation des coûts, puis se fait par étapes, avec un plan de retour arrière à chaque pas.",
          l: ["un audit de l'existant et une estimation des coûts", "architecture AWS et plan de migration", "migration des serveurs, des bases de données et des fichiers", "sauvegardes et supervision", "réduction des coûts une fois la migration terminée"],
          g: "une infrastructure qui survit à la panne d'un serveur, et une facture cloud que vous comprenez vraiment."
        },
        redhat: {
          s: "Nous bâtissons l'infrastructure de votre entreprise sous Red Hat : serveurs sous Red Hat Enterprise Linux, conteneurs sur OpenShift, configuration automatisée avec Ansible.",
          b: "Red Hat s'adresse à ceux qui veulent une infrastructure pour longtemps : qui tourne des années, passe les audits et ne repose pas sur la mémoire d'un seul administrateur. L'abonnement se rentabilise par le support de l'éditeur et un long cycle de vie (Red Hat Enterprise Linux est maintenu dix ans !). Nous concevons tout en fonction de vos charges et consignons la configuration des serveurs dans Ansible : n'importe quel serveur peut être reconstruit à partir d'un playbook plutôt que de souvenirs. Autre chose : Red Hat est notre partenaire, nous pouvons donc aussi vous aider pour les abonnements et le support de l'éditeur.",
          l: ["un audit de vos serveurs et un plan de migration", "déploiement de Red Hat Enterprise Linux avec mises à jour centralisées via Red Hat Satellite", "OpenShift, une plateforme de conteneurs pour vos applications", "configuration et déploiement automatisés avec Ansible", "gestion centralisée des comptes et des accès (Identity Management)", "supervision, sauvegardes et documentation pour votre équipe"],
          g: "une infrastructure que vous pouvez auditer, reproduire et confier à une autre équipe sans rien perdre de ce qu'elle sait."
        },
        api: {
          s: "Nous écrivons des API pour vos systèmes et les relions aux services que vous utilisez déjà.",
          b: "Le problème que nous rencontrons le plus souvent : les données saisies deux fois. Les commandes du site sont retapées dans la comptabilité, les paiements pointés dans un tableur. Une intégration supprime ce travail, et les erreurs qui vont avec. Nous ajoutons toujours une supervision : une intégration casse sans bruit quand un partenaire modifie son API, et mieux vaut l'apprendre par le système que par un client.",
          l: ["conception et documentation d'API", "branchement des prestataires de paiement, des transporteurs, du CRM et de la comptabilité", "échange de données entre vos systèmes internes", "files d'attente et nouvelles tentatives en cas d'échec", "supervision et alertes"],
          g: "les données sont saisies une seule fois et arrivent toutes seules là où on en a besoin."
        },
        support: {
          s: "Nous maintenons vos systèmes informatiques et continuons à les faire évoluer. Même ceux que nous n'avons pas développés !",
          b: "Pour nous, le support, ce n'est pas seulement « réparer quand ça casse ». Ce sont des mises à jour qui comblent les failles de sécurité, une supervision qui repère un problème avant vos utilisateurs, et de petites améliorations au fil de l'eau. Si vous avez hérité du système d'un autre prestataire, nous commençons par un audit et une documentation, car sans eux chaque modification est un pari.",
          l: ["surveillance de la disponibilité et des erreurs", "correction des bugs et installation des mises à jour de sécurité", "sauvegardes, et vérification qu'on peut vraiment les restaurer", "améliorations planifiées et nouvelles fonctions", "audits et documentation des systèmes d'autres prestataires"],
          g: "un système qui fonctionne, et une équipe qui sait comment il est construit."
        }
      }
    },
    es: {
      lead: "Aquí tiene todo lo que podemos hacer por usted. No estamos casados con ningún lenguaje de programación ni con ninguna plataforma: primero entendemos su problema y después elegimos las herramientas. Y si un servicio por suscripción ya hecho le conviene más, se lo diremos sin rodeos. ¡Sin trucos!",
      items: {
        concept: {
          s: "Le ayudamos a definir qué tiene que hacer de verdad su futuro sistema, antes de que nadie escriba una sola línea de código.",
          b: "El error más caro se comete justo al principio: el sistema se construye para un problema que nadie llegó a formular bien. Por eso primero hablamos con quienes lo van a usar (contabilidad, el almacén, los comerciales), y no solo con la dirección. Y sí, a veces, después de todo eso, le recomendamos no desarrollar nada y configurar un producto que ya existe. ¡No nos da ninguna vergüenza decirlo!",
          l: ["entrevistas con su personal y un análisis de cómo funciona todo ahora", "requisitos de negocio y escenarios: quién hace qué y cuándo", "una comparación honesta entre producto estándar y desarrollo a medida", "una especificación con estimación de plazos y presupuesto por fases"],
          g: "un documento con el que cualquier equipo (¡el nuestro u otro!) puede presupuestar el trabajo y empezar."
        },
        saas: {
          s: "Desarrollamos servicios SaaS, desde una primera versión para clientes piloto hasta una plataforma donde cada cliente tiene su propio espacio, plan y panel.",
          b: "En SaaS el dinero no lo genera el código, sino lo fácil que le resulta a un cliente nuevo registrarse, pagar y empezar sin llamar nunca a soporte. Por eso incorporamos multiinquilino, facturación y permisos desde el primer día: rehacerlos cuando los clientes ya están dentro cuesta varias veces más. Y lanzamos la primera versión lo antes posible, porque los usuarios reales enseñan muy rápido qué funciones sobraban.",
          l: ["una arquitectura en la que los datos de cada cliente están aislados de los demás", "registro, planes, suscripciones y pago en línea", "áreas de cliente, roles y permisos", "integraciones y una API pública para sus clientes", "escalado a medida que crece la carga"],
          g: "un producto que puede vender por suscripción, en lugar de un proyecto que hay que implantar a mano cada vez."
        },
        web: {
          s: "Webs corporativas, marketplaces, tiendas en línea, sistemas de reservas y herramientas web internas. ¡Hechos para su caso, no metidos a presión en una plantilla!",
          b: "Lo sabemos: una empresa valora su web por los contactos y los pedidos, no por lo bonita que queda en el portfolio de alguien. Así que primero acordamos con usted qué cuenta como resultado, y configuramos la analítica antes del lanzamiento (no seis meses después, como pasa a menudo). La tecnología se adapta al trabajo: una landing page no necesita una plataforma pesada, y un marketplace no cabe en un creador de webs.",
          l: ["un prototipo y el diseño de cada pantalla", "frontend, backend y panel de administración", "conexión de pagos, envíos, CRM y sistemas contables", "bases de SEO, carga rápida y analítica", "lanzamiento y soporte posterior"],
          g: "un servicio web que le muestra cuántos contactos y cuánto dinero le aporta."
        },
        mobile: {
          s: "Aplicaciones para iOS y Android, con la parte de servidor y el panel de administración que hay detrás.",
          b: "Digámoslo de entrada: no todo el mundo necesita una aplicación. Tiene sentido cuando los clientes vuelven con regularidad para pedir otra vez, seguir un envío o acumular puntos. Si alguien le visita una vez al año, una buena web móvil sale más barata, y se lo diremos antes de empezar. ¿Nativa o multiplataforma? Lo decidimos juntos, mirando el presupuesto y cuánto necesita la aplicación la cámara, la ubicación y funcionar sin conexión.",
          l: ["aplicaciones para iOS y Android", "parte de servidor y API", "un panel de administración para contenidos, pedidos y usuarios", "notificaciones push y analítica", "publicación en App Store y Google Play"],
          g: "una aplicación que supera la revisión de las tiendas y que su propio equipo puede gestionar sin llamar a un desarrollador."
        },
        ai: {
          s: "Automatizamos sus procesos de negocio con agentes de IA: la inteligencia artificial y el aprendizaje automático se encargan de la rutina que hoy hace su gente.",
          b: "Imagine: llega una solicitud y el agente la clasifica, la registra en el CRM y prepara una respuesta al cliente; a una persona solo le queda revisarla. Eso sí, reconocemos que somos más escépticos con la IA que la mayoría. La mitad de las ideas del tipo «¡añadamos una red neuronal!» se resuelven con automatización de toda la vida. Pero donde la gente pasa horas clasificando correos, documentos y solicitudes, la IA quita la rutina de verdad. Empezamos con un piloto sobre sus propios datos, para que vea las cifras de precisión antes del desarrollo principal, no después.",
          l: ["agentes de IA que clasifican solicitudes, rellenan el CRM y preparan por sí solos respuestas a los clientes", "chatbots y asistentes para clientes y empleados", "lectura de documentos y extracción de sus datos", "clasificación de solicitudes y búsqueda en su base de conocimiento", "previsión de la demanda y análisis de datos", "un piloto en el que la calidad se mide con sus datos"],
          g: "un trabajo concreto que antes hacían personas a mano ahora lo hace el sistema, y una persona mantiene el control."
        },
        crm: {
          s: "Sistemas CRM y ERP construidos en torno a cómo trabaja su empresa, y no al revés.",
          b: "Un CRM estándar está bien mientras su proceso se parezca al de todo el mundo. Pero cuando sus comerciales llevan la mitad de su trabajo en hojas de cálculo porque el sistema «no sabe hacer eso», una solución propia sale más barata. Migramos nosotros mismos los datos de los sistemas antiguos y de las hojas de cálculo, y lo ponemos en marcha departamento a departamento para que el trabajo no se pare ni un día.",
          l: ["módulos de ventas, almacén, producción y finanzas, los que necesite", "roles, permisos y registro de actividad", "informes y cuadros de mando para la dirección", "migración de datos desde hojas de cálculo y sistemas antiguos", "conexión con contabilidad, telefonía y correo"],
          g: "un solo sistema en lugar de un zoo de hojas de cálculo. La dirección ve cómo van las cosas sin recopilar cada semana informes de cada departamento."
        },
        cloud: {
          s: "Llevamos su infraestructura a Amazon Web Services, entera o por partes, y nos aseguramos de que siga funcionando y no se encarezca sin motivo.",
          b: "Algo que no todo el mundo espera: la nube no siempre es más barata que su propio servidor. Compensa cuando la carga sube y baja mucho, cuando necesita tolerancia a fallos o cuando un entorno nuevo tiene que estar listo en minutos y no en una semana. Por eso una migración empieza con una auditoría y una estimación de costes, y se hace por etapas, con un plan de vuelta atrás en cada paso.",
          l: ["una auditoría de lo que tiene ahora y una estimación de costes", "arquitectura en AWS y plan de migración", "migración de servidores, bases de datos y archivos", "copias de seguridad y monitorización", "reducción de costes una vez terminada la migración"],
          g: "una infraestructura que sobrevive a la caída de un servidor y una factura de la nube que de verdad entiende."
        },
        redhat: {
          s: "Construimos la infraestructura de su empresa con Red Hat: servidores con Red Hat Enterprise Linux, contenedores en OpenShift y configuración automatizada con Ansible.",
          b: "Red Hat es para quien necesita su infraestructura a largo plazo: que funcione durante años, supere auditorías y no dependa de la memoria de un solo administrador. La suscripción se amortiza con el soporte del fabricante y un ciclo de vida largo (¡Red Hat Enterprise Linux tiene soporte durante diez años!). Diseñamos todo según sus cargas de trabajo y dejamos la configuración de los servidores escrita en Ansible, de modo que cualquier servidor se puede reconstruir a partir de un playbook y no de la memoria de alguien. Una cosa más: Red Hat es nuestro socio, así que también le ayudamos con las suscripciones y el soporte del fabricante.",
          l: ["una auditoría de sus servidores y un plan de migración", "implantación de Red Hat Enterprise Linux con actualizaciones centralizadas mediante Red Hat Satellite", "OpenShift, una plataforma de contenedores para sus aplicaciones", "configuración y despliegue automatizados con Ansible", "gestión centralizada de cuentas de usuario y accesos (Identity Management)", "monitorización, copias de seguridad y documentación para su equipo"],
          g: "una infraestructura que puede auditar, reproducir y entregar a otro equipo sin perder nada de lo que sabe."
        },
        api: {
          s: "Escribimos API para sus sistemas y los conectamos con los servicios que ya utiliza.",
          b: "El problema que más nos encontramos son los datos tecleados dos veces. Los pedidos de la web se vuelven a escribir en el sistema contable, los pagos se marcan en una hoja de cálculo. Una integración elimina ese trabajo, junto con los errores que provoca. Además, siempre añadimos monitorización: las integraciones se rompen en silencio cuando un socio cambia su API, y es mejor enterarse por el sistema que por un cliente.",
          l: ["diseño y documentación de API", "conexión con pasarelas de pago, empresas de mensajería, CRM y contabilidad", "intercambio de datos entre sus sistemas internos", "colas y reintentos para cuando algo falla", "monitorización y alertas"],
          g: "los datos se introducen una sola vez y llegan solos allí donde hacen falta."
        },
        support: {
          s: "Mantenemos sus sistemas informáticos y seguimos mejorándolos. ¡Incluso los que no hicimos nosotros!",
          b: "Para nosotros el soporte no es solo «arreglarlo cuando se rompe». Son actualizaciones que cierran agujeros de seguridad, una monitorización que detecta un problema antes que sus usuarios y pequeñas mejoras sobre la marcha. Si heredó el sistema de otro proveedor, empezamos con una auditoría y documentación, porque sin ellas cada cambio es una lotería.",
          l: ["vigilancia de la disponibilidad y los errores", "corrección de errores e instalación de actualizaciones de seguridad", "copias de seguridad y comprobación de que de verdad se pueden restaurar", "mejoras planificadas y nuevas funciones", "auditorías y documentación de sistemas hechos por otros proveedores"],
          g: "un sistema que funciona y un equipo que sabe cómo está hecho."
        }
      }
    },
    pt: {
      lead: "Aqui está tudo o que sabemos fazer por si. Não estamos presos a nenhuma linguagem de programação nem a nenhuma plataforma: primeiro percebemos o seu problema, depois escolhemos as ferramentas. E se um serviço por subscrição já pronto lhe servir melhor, dizemos-lho sem rodeios. Sem truques!",
      items: {
        concept: {
          s: "Ajudamos a definir o que o seu futuro sistema tem realmente de fazer, antes de alguém escrever uma única linha de código.",
          b: "O erro mais caro acontece logo no início: o sistema é construído para um problema que ninguém chegou a formular bem. Por isso, primeiro vamos falar com quem o vai usar (a contabilidade, o armazém, os comerciais) e não apenas com a administração. E sim, por vezes, depois de tudo isso, aconselhamos a não desenvolver nada e a configurar um produto que já existe. Não temos vergonha nenhuma de o dizer!",
          l: ["conversas com os seus colaboradores e uma análise de como tudo funciona hoje", "requisitos de negócio e cenários: quem faz o quê, e quando", "uma comparação honesta entre produto de mercado e desenvolvimento à medida", "um caderno de encargos com estimativa de prazos e orçamento por fase"],
          g: "um documento a partir do qual qualquer equipa (a nossa ou outra!) pode orçamentar o trabalho e começar."
        },
        saas: {
          s: "Desenvolvemos serviços SaaS, desde uma primeira versão para clientes-piloto até uma plataforma onde cada cliente tem o seu espaço, plano e painel.",
          b: "Em SaaS, o dinheiro não é feito pelo código. É feito pela facilidade com que um cliente novo se regista, paga e começa a trabalhar sem nunca telefonar para o suporte. Por isso incluímos multi-inquilino, faturação e permissões desde o primeiro dia: refazê-los quando os clientes já lá estão dentro custa várias vezes mais. E lançamos a primeira versão o mais cedo possível, porque os utilizadores reais mostram muito depressa que funcionalidades estavam a mais.",
          l: ["uma arquitetura em que os dados de cada cliente ficam isolados dos restantes", "registo, planos, subscrições e pagamento online", "áreas de cliente, perfis e permissões de acesso", "integrações e uma API pública para os seus clientes", "escalabilidade à medida que a carga cresce"],
          g: "um produto que pode vender por subscrição, em vez de um projeto que tem de ser implementado à mão de cada vez."
        },
        web: {
          s: "Sites empresariais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas. Feitos para o seu caso, não enfiados num modelo!",
          b: "Sabemos que uma empresa avalia o site pelos contactos e pelas encomendas, não pelo bonito que fica no portfólio de alguém. Por isso, primeiro combinamos consigo o que conta como resultado e configuramos a análise de tráfego antes do lançamento (e não seis meses depois, como tantas vezes acontece). A tecnologia adapta-se ao trabalho: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num construtor de sites.",
          l: ["um protótipo e o design de cada ecrã", "frontend, backend e painel de administração", "ligação a pagamentos, entregas, CRM e sistemas de contabilidade", "bases de SEO, carregamento rápido e análise de tráfego", "lançamento e acompanhamento posterior"],
          g: "um serviço web que lhe mostra quantos contactos e quanto dinheiro traz."
        },
        mobile: {
          s: "Aplicações para iOS e Android, com a parte de servidor e o painel de administração por trás.",
          b: "Digamo-lo desde já: nem toda a gente precisa de uma aplicação. Faz sentido quando os clientes voltam com regularidade para encomendar outra vez, seguir uma entrega ou juntar pontos. Se alguém o visita uma vez por ano, um bom site para telemóvel sai mais barato, e dizemos-lho antes de começar o trabalho. Nativa ou multiplataforma? Decidimos em conjunto, olhando para o orçamento e para o quanto a aplicação precisa da câmara, da localização e de funcionar sem rede.",
          l: ["aplicações para iOS e Android", "parte de servidor e API", "um painel de administração para conteúdos, encomendas e utilizadores", "notificações push e análise de utilização", "publicação na App Store e no Google Play"],
          g: "uma aplicação que passa a revisão das lojas e que a sua própria equipa gere sem chamar um programador."
        },
        ai: {
          s: "Automatizamos os seus processos de negócio com agentes de IA: a inteligência artificial e a aprendizagem automática ficam com a rotina que hoje cabe às suas pessoas.",
          b: "Imagine: chega um pedido e o agente classifica-o, regista-o no CRM e prepara uma resposta ao cliente; a uma pessoa só resta verificar. Dito isto, confessamos que somos mais céticos em relação à IA do que muitos. Metade das ideias do género «vamos pôr uma rede neuronal!» resolve-se com automação comum. Mas onde as pessoas passam horas a triar e-mails, documentos e pedidos, a IA tira mesmo a rotina de cima. Começamos com um piloto sobre os seus próprios dados, para que veja os números de precisão antes do desenvolvimento principal, e não depois.",
          l: ["agentes de IA que triam pedidos, preenchem o CRM e preparam sozinhos respostas aos clientes", "chatbots e assistentes para clientes e colaboradores", "leitura de documentos e extração dos seus dados", "triagem de pedidos e pesquisa na sua base de conhecimento", "previsão da procura e análise de dados", "um piloto em que a qualidade é medida nos seus dados"],
          g: "um trabalho concreto que antes era feito à mão por pessoas passa a ser feito pelo sistema, e uma pessoa mantém o controlo."
        },
        crm: {
          s: "Sistemas CRM e ERP construídos à volta da forma como o seu negócio trabalha, e não o contrário.",
          b: "Um CRM de prateleira serve enquanto o seu processo for igual ao de toda a gente. Mas quando os seus comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não faz isso», uma solução própria fica mais barata. Somos nós que migramos os dados dos sistemas antigos e das folhas de cálculo, e implementamos departamento a departamento para que o trabalho não pare um único dia.",
          l: ["módulos de vendas, armazém, produção e finanças, os que precisar", "perfis, permissões de acesso e registo de atividade", "relatórios e painéis para a administração", "migração de dados de folhas de cálculo e sistemas antigos", "ligação à contabilidade, à telefonia e ao e-mail"],
          g: "um só sistema em vez de um jardim zoológico de folhas de cálculo. A administração vê como correm as coisas sem recolher todas as semanas relatórios de cada departamento."
        },
        cloud: {
          s: "Levamos a sua infraestrutura para a Amazon Web Services, toda ou por partes, e garantimos que continua a funcionar e não fica mais cara sem razão.",
          b: "Uma coisa que nem todos esperam: a cloud nem sempre é mais barata do que o seu próprio servidor. Compensa quando a carga oscila muito, quando precisa de tolerância a falhas ou quando um novo ambiente tem de estar pronto em minutos e não numa semana. Por isso, uma migração começa com uma auditoria e uma estimativa de custos, e faz-se por etapas, com um plano para voltar atrás em cada passo.",
          l: ["uma auditoria ao que tem hoje e uma estimativa de custos", "arquitetura na AWS e plano de migração", "migração de servidores, bases de dados e ficheiros", "cópias de segurança e monitorização", "redução de custos depois de concluída a migração"],
          g: "uma infraestrutura que sobrevive à falha de um servidor e uma fatura da cloud que percebe mesmo."
        },
        redhat: {
          s: "Construímos a infraestrutura da sua empresa em Red Hat: servidores com Red Hat Enterprise Linux, contentores no OpenShift e configuração automatizada com Ansible.",
          b: "O Red Hat é para quem precisa da infraestrutura a longo prazo: a funcionar durante anos, a passar auditorias e sem depender da memória de um único administrador. A subscrição paga-se com o suporte do fabricante e um ciclo de vida longo (o Red Hat Enterprise Linux tem suporte durante dez anos!). Desenhamos tudo à medida das suas cargas e deixamos a configuração dos servidores escrita em Ansible, de modo que qualquer servidor pode ser reconstruído a partir de um playbook e não da memória de alguém. Mais uma coisa: a Red Hat é nossa parceira, por isso também ajudamos com as subscrições e o suporte do fabricante.",
          l: ["uma auditoria aos seus servidores e um plano de migração", "implementação do Red Hat Enterprise Linux com atualizações centralizadas através do Red Hat Satellite", "OpenShift, uma plataforma de contentores para as suas aplicações", "configuração e implementação automatizadas com Ansible", "gestão centralizada de contas de utilizador e acessos (Identity Management)", "monitorização, cópias de segurança e documentação para a sua equipa"],
          g: "uma infraestrutura que pode auditar, reproduzir e entregar a outra equipa sem perder nada do que ela sabe."
        },
        api: {
          s: "Escrevemos APIs para os seus sistemas e ligamo-los aos serviços que já utiliza.",
          b: "O problema que mais encontramos são dados introduzidos duas vezes. As encomendas do site são reescritas no sistema de contabilidade, os pagamentos são conferidos numa folha de cálculo. Uma integração acaba com esse trabalho e com os erros que ele provoca. Também acrescentamos sempre monitorização: as integrações avariam em silêncio quando um parceiro muda a sua API, e mais vale sabê-lo pelo sistema do que por um cliente.",
          l: ["desenho e documentação de APIs", "ligação a prestadores de pagamento, transportadoras, CRM e contabilidade", "troca de dados entre os seus sistemas internos", "filas e novas tentativas para quando algo falha", "monitorização e alertas"],
          g: "os dados são introduzidos uma vez e chegam sozinhos onde são precisos."
        },
        support: {
          s: "Mantemos os seus sistemas informáticos e continuamos a melhorá-los. Mesmo os que não fomos nós a fazer!",
          b: "Para nós, suporte não é só «arranjar quando avaria». São atualizações que fecham falhas de segurança, monitorização que deteta um problema antes dos seus utilizadores, e pequenas melhorias pelo caminho. Se herdou o sistema de outro fornecedor, começamos com uma auditoria e documentação, porque sem elas qualquer alteração é uma lotaria.",
          l: ["vigilância da disponibilidade e dos erros", "correção de bugs e instalação de atualizações de segurança", "cópias de segurança e verificação de que se conseguem mesmo restaurar", "melhorias planeadas e novas funcionalidades", "auditorias e documentação de sistemas feitos por outros fornecedores"],
          g: "um sistema que funciona e uma equipa que sabe como ele está feito."
        }
      }
    },
    it: {
      lead: "Qui trova tutto quello che sappiamo fare per Lei. Non siamo legati a un solo linguaggio di programmazione o a una sola piattaforma: prima capiamo il Suo problema, poi scegliamo gli strumenti. E se un servizio in abbonamento già pronto fa più al caso Suo, glielo diciamo e basta. Niente trucchi!",
      items: {
        concept: {
          s: "La aiutiamo a capire che cosa deve fare davvero il Suo futuro sistema, prima che qualcuno scriva anche una sola riga di codice.",
          b: "L'errore più costoso si fa proprio all'inizio: il sistema viene costruito per un problema che nessuno ha mai formulato come si deve. Per questo per prima cosa parliamo con chi lo userà (l'amministrazione, il magazzino, i commerciali) e non solo con la direzione. E sì, a volte dopo tutto questo Le consigliamo di non sviluppare niente e di configurare un prodotto esistente. Non ci vergogniamo affatto a dirlo!",
          l: ["colloqui con il personale e un'analisi di come funziona tutto oggi", "requisiti di business e scenari: chi fa cosa, e quando", "un confronto onesto tra prodotto standard e sviluppo su misura", "un capitolato con stima di tempi e budget per ogni fase"],
          g: "un documento su cui qualsiasi team (il nostro o un altro!) può stimare il lavoro e partire."
        },
        saas: {
          s: "Sviluppiamo servizi SaaS, dalla prima versione per i clienti pilota fino alla piattaforma in cui ogni cliente ha il proprio spazio, piano e pannello.",
          b: "Nel SaaS i soldi non li fa il codice. Li fa la facilità con cui un nuovo cliente si registra, paga e inizia a lavorare senza mai telefonare all'assistenza. Ecco perché multi-tenancy, fatturazione e permessi li prevediamo dal primo giorno: rifarli quando i clienti sono già dentro costa molte volte di più. E la prima versione la rilasciamo il prima possibile, perché gli utenti veri mostrano molto in fretta quali funzioni erano superflue.",
          l: ["un'architettura in cui i dati di ogni cliente sono separati da quelli degli altri", "registrazione, piani, abbonamenti e pagamento online", "aree clienti, ruoli e permessi", "integrazioni e un'API pubblica per i Suoi clienti", "scalabilità man mano che il carico cresce"],
          g: "un prodotto da vendere in abbonamento, invece di un progetto da installare a mano ogni volta."
        },
        web: {
          s: "Siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni. Fatti per il Suo caso, non infilati in un modello!",
          b: "Lo sappiamo: un'azienda giudica il proprio sito dalle richieste e dagli ordini, non da quanto è carino nel portfolio di qualcuno. Per questo prima concordiamo con Lei che cosa conta come risultato, e impostiamo le statistiche prima del lancio (non sei mesi dopo, come capita spesso). La tecnologia si adatta al lavoro: una landing page non ha bisogno di una piattaforma pesante, e un marketplace non entra in un generatore di siti.",
          l: ["un prototipo e il design di ogni schermata", "frontend, backend e pannello di amministrazione", "collegamento a pagamenti, spedizioni, CRM e gestionali contabili", "basi per la SEO, caricamento veloce e statistiche", "messa online e assistenza successiva"],
          g: "un servizio web che Le mostra quante richieste e quanto denaro porta."
        },
        mobile: {
          s: "App per iOS e Android, con la parte server e il pannello di amministrazione che stanno dietro.",
          b: "Diciamolo subito: non a tutti serve un'app. Ha senso quando i clienti tornano regolarmente per ordinare di nuovo, seguire una consegna o raccogliere punti fedeltà. Se qualcuno passa da Lei una volta l'anno, un buon sito mobile costa meno, e glielo diremo prima di iniziare. Nativa o multipiattaforma? Lo decidiamo insieme, guardando il budget e quanto all'app servono fotocamera, posizione e funzionamento offline.",
          l: ["app per iOS e Android", "parte server e API", "un pannello di amministrazione per contenuti, ordini e utenti", "notifiche push e statistiche", "pubblicazione su App Store e Google Play"],
          g: "un'app che supera la revisione degli store e che il Suo team gestisce da solo, senza chiamare uno sviluppatore."
        },
        ai: {
          s: "Automatizziamo i Suoi processi aziendali con agenti di IA: intelligenza artificiale e apprendimento automatico si fanno carico della routine che oggi svolgono le persone.",
          b: "Immagini: arriva una richiesta, e l'agente la smista, la inserisce nel CRM e prepara una risposta al cliente; a una persona resta solo da controllare. Detto questo, ammettiamo di essere più scettici di molti sull'IA. Metà delle idee del tipo «aggiungiamo una rete neurale!» si risolvono con una normale automazione. Ma dove le persone passano ore a smistare e-mail, documenti e richieste, l'IA toglie davvero la routine. Partiamo da un progetto pilota sui Suoi dati, così vede i numeri sulla precisione prima dello sviluppo vero e proprio, non dopo.",
          l: ["agenti di IA che smistano le richieste, compilano il CRM e preparano da soli le risposte ai clienti", "chatbot e assistenti per clienti e dipendenti", "lettura dei documenti ed estrazione dei dati", "smistamento delle richieste e ricerca nella Sua base di conoscenza", "previsioni della domanda e analisi dei dati", "un progetto pilota in cui la qualità si misura sui Suoi dati"],
          g: "un lavoro preciso che prima le persone facevano a mano ora lo svolge il sistema, e una persona mantiene il controllo."
        },
        crm: {
          s: "Sistemi CRM ed ERP costruiti attorno al modo in cui lavora la Sua azienda, e non il contrario.",
          b: "Un CRM pronto all'uso va bene finché il Suo processo somiglia a quello di tutti gli altri. Ma quando i commerciali fanno metà del lavoro su fogli di calcolo perché il sistema «non lo sa fare», una soluzione propria costa meno. I dati dei vecchi sistemi e dei fogli di calcolo li trasferiamo noi, e partiamo un reparto alla volta, così il lavoro non si ferma nemmeno un giorno.",
          l: ["moduli vendite, magazzino, produzione e finanza, quelli che servono", "ruoli, permessi e registro delle attività", "report e dashboard per la direzione", "trasferimento dei dati da fogli di calcolo e vecchi sistemi", "collegamento con contabilità, centralino ed e-mail"],
          g: "un solo sistema al posto di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza raccogliere ogni settimana i report di ogni reparto."
        },
        cloud: {
          s: "Portiamo la Sua infrastruttura su Amazon Web Services, tutta o un pezzo alla volta, e facciamo in modo che continui a funzionare e non diventi più cara senza motivo.",
          b: "Una cosa che non tutti si aspettano: il cloud non sempre costa meno di un server proprio. Conviene quando il carico va su e giù, quando serve tolleranza ai guasti o quando un nuovo ambiente deve essere pronto in pochi minuti anziché in una settimana. Per questo un trasferimento parte da un audit e da una stima dei costi, e avviene per fasi, con un piano per tornare indietro a ogni passo.",
          l: ["un audit di ciò che c'è oggi e una stima dei costi", "architettura su AWS e piano di migrazione", "trasferimento di server, database e file", "backup e monitoraggio", "riduzione dei costi a migrazione conclusa"],
          g: "un'infrastruttura che sopravvive al guasto di un server, e una bolletta del cloud che capisce davvero."
        },
        redhat: {
          s: "Costruiamo l'infrastruttura aziendale su Red Hat: server con Red Hat Enterprise Linux, container su OpenShift e configurazione automatizzata con Ansible.",
          b: "Red Hat è per chi ha bisogno di un'infrastruttura a lungo termine: che funzioni per anni, superi gli audit e non viva solo nella testa di un amministratore. L'abbonamento si ripaga con il supporto del produttore e un ciclo di vita lungo (Red Hat Enterprise Linux è supportato per dieci anni!). Progettiamo tutto in base ai Suoi carichi di lavoro e scriviamo la configurazione dei server in Ansible, così qualsiasi server si può ricostruire da un playbook invece che dalla memoria di qualcuno. Ancora una cosa: Red Hat è nostro partner, quindi possiamo aiutarLa anche con abbonamenti e supporto del produttore.",
          l: ["un audit dei Suoi server e un piano di migrazione", "introduzione di Red Hat Enterprise Linux con aggiornamenti centralizzati tramite Red Hat Satellite", "OpenShift, una piattaforma a container per le Sue applicazioni", "configurazione e deployment automatizzati con Ansible", "gestione centralizzata di account utente e accessi (Identity Management)", "monitoraggio, backup e documentazione per il Suo team"],
          g: "un'infrastruttura che può verificare, riprodurre e passare a un altro team senza perdere nulla di ciò che sa."
        },
        api: {
          s: "Scriviamo API per i Suoi sistemi e li colleghiamo ai servizi che usa già.",
          b: "Il problema che incontriamo più spesso sono i dati digitati due volte. Gli ordini del sito vengono ribattuti nel gestionale, i pagamenti spuntati su un foglio di calcolo. Un'integrazione elimina questo lavoro, insieme agli errori che produce. E aggiungiamo sempre il monitoraggio: le integrazioni si rompono in silenzio quando un partner cambia la propria API, ed è meglio saperlo dal sistema che da un cliente.",
          l: ["progettazione e documentazione di API", "collegamento a circuiti di pagamento, corrieri, CRM e contabilità", "scambio di dati tra i Suoi sistemi interni", "code e nuovi tentativi per quando qualcosa va storto", "monitoraggio e avvisi"],
          g: "i dati si inseriscono una volta sola e arrivano da soli dove servono."
        },
        support: {
          s: "Ci occupiamo dei Suoi sistemi informatici e continuiamo a migliorarli. Anche di quelli che non abbiamo realizzato noi!",
          b: "Per noi assistenza non significa solo «aggiustare quando si rompe». Significa aggiornamenti che chiudono le falle di sicurezza, un monitoraggio che si accorge di un problema prima dei Suoi utenti, e piccoli miglioramenti strada facendo. Se ha ereditato il sistema da un altro fornitore, partiamo da un audit e dalla documentazione, perché senza di essi ogni modifica è una lotteria.",
          l: ["controllo di disponibilità ed errori", "correzione dei bug e installazione degli aggiornamenti di sicurezza", "backup, e verifica che si possano davvero ripristinare", "miglioramenti pianificati e nuove funzioni", "audit e documentazione di sistemi realizzati da altri fornitori"],
          g: "un sistema che funziona, e un team che sa come è fatto."
        }
      }
    }
  };

  const LANGS = AIC.langs;
  const langName = (l) => (AIC.langNames && AIC.langNames[l]) || l;
  const langCode = (l) => (AIC.langCodes && AIC.langCodes[l]) || l.toUpperCase();
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
      `<div class="w90-langs" role="group" aria-label="${esc(u.langLabel)}"><span class="lbl">${esc(u.langLabel)}</span>` +
      LANGS.map((l) => `<button type="button" class="w90-bvl" data-lang="${l}" lang="${l}" title="${esc(langName(l))}" aria-label="${esc(langName(l))}" aria-pressed="${l === lang}">${esc(langCode(l))}</button>`).join("") +
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
