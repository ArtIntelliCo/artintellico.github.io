/* Windows NT 4.0 Workstation: тексти сайту беремо з window.AIC.content, описи послуг — власні (SVC), тут — інтерфейс */
(() => {
  const AIC = window.AIC;
  const LANGS = AIC.langs;

  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch { /* сховище недоступне */ } },
    del(k, s = localStorage) { try { s.removeItem(k); } catch { /* сховище недоступне */ } }
  };

  let lang = store.get("aic-lang");
  if (!LANGS.includes(lang)) lang = LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "uk";

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  const narrow = () => matchMedia("(max-width: 600px)").matches;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Рядки інтерфейсу */
  const T = {
    uk: {
      dunTitle: "Віддалений доступ до мережі", dunIntro: "Щоб відкрити сайт, підключіться до Інтернету.",
      dunEntry: "Запис телефонної книги:", dunPhone: "Номер телефону:", dunUser: "Ім'я користувача:", dunPass: "Пароль:",
      dunSave: "Зберегти пароль", dunSpeaker: "Звук динаміка модему", dunDial: "Набрати", dunHang: "Розірвати", dunStatus: "Стан:",
      dunConnecting: "Підключення до {e}", dunSteps: ["Набір номера...", "Перевірка імені користувача та пароля...", "Реєстрація комп'ютера в мережі..."],
      dunDone: "Підключено до ArtIntelliCo Online.", dunSpeed: "Швидкість: 33 600 біт/с", dunOff: "Не підключено",
      start: "Пуск", programs: "Програми", modes: "Режими", language: "Мова", help: "Довідка", run: "Виконати...", shutdown: "Завершення роботи...",
      mycomp: "Мій комп'ютер", bin: "Кошик", readme: "Про компанію", services: "Послуги", partners: "Партнери", contacts: "Написати нам",
      cmd: "Командний рядок", control: "Панель керування", drive: "ARTINTELLICO (C:)",
      min: "Згорнути", max: "Розгорнути", restore: "Відновити", close: "Закрити",
      exMenus: ["Файл", "Правка", "Вигляд", "Довідка"], wpMenus: ["Файл", "Правка", "Вигляд", "Вставка", "Формат", "Довідка"],
      objects: ["об'єкт", "об'єкти", "об'єктів"], f1: "Щоб отримати довідку, натисніть F1",
      serviceType: "Послуга ArtIntelliCo", partnerType: "Партнер", colName: "Ім'я", colType: "Тип",
      type: "Тип:", location: "Розташування:", props: "Властивості", general: "Загальні",
      tabParts: "Склад", tabResult: "Результат", desc: "Опис:", partsIntro: "До складу послуги входять такі компоненти:", partsCount: "Вибрано компонентів: {n} з {n}", resultHead: "Що ви отримаєте", noteHead: "Примітка",
      ok: "OK", cancel: "Скасувати", yes: "Так", no: "Ні", discuss: "Обговорити задачу",
      write: "Написати листа", copy: "Копіювати адресу", copied: "Адресу скопійовано в буфер обміну.", copyFailed: "Не вдалося скопіювати. Адреса: ",
      runTitle: "Виконати", open: "Відкрити:", browse: "Огляд...", runText: "Введіть ім'я програми, папки або документа, і Windows відкриє їх.",
      notFound: "Не вдається знайти файл «%s» (або один з його компонентів). Перевірте правильність шляху та імені файлу.",
      shutTitle: "Завершення роботи Windows", shutText: "Ви бажаєте:",
      shutOpts: { restart: "Перезавантажити комп'ютер", logoff: "Закрити всі програми й увійти як інший користувач", classic: "Перейти на класичну версію сайту" },
      langTitle: "Мова інтерфейсу", langText: "Оберіть мову інтерфейсу:",
      aboutTitle: "Про ArtIntelliCo NT", version: "Версія 4.0 (збірка 1381: Service Pack 6)", licensed: "Цей продукт ліцензовано для:", guest: "Гість",
      memory: "Фізична пам'ять, доступна для Windows NT:", memoryVal: "65 536 КБ",
      helpTitle: "Довідка Windows NT", helpKeysHead: "Клавіші", helpRunHead: "Команди для «Виконати»",
      helpKeys: [["Ctrl+Esc", "меню «Пуск»"], ["F1", "довідка"], ["Enter", "відкрити вибраний об'єкт"], ["Esc", "закрити меню або діалог"], ["← ↑ → ↓", "вибір значка в папці"], ["← →", "вкладки у вікні «Властивості»"], ["Подвійне клацання по заголовку", "розгорнути вікно"]],
      modesHint: "Той самий сайт в інтерфейсах різних років",
      logonTitle: "Початок сеансу", logonText: "Натисніть Ctrl+Alt+Del, щоб почати сеанс.", logonHint: "Або натисніть будь-яку клавішу чи клацніть тут.",
      bootServices: "Запуск служб ArtIntelliCo...", bootSkip: "Натисніть будь-яку клавішу, щоб пропустити",
      taskbar: "Панель задач", langLabel: "Мова інтерфейсу", embHint: "Двічі клацніть вбудований об'єкт, щоб відкрити його.",
      cadKeys: ["Ctrl", "Alt", "Del"]
    },
    en: {
      dunTitle: "Dial-Up Networking", dunIntro: "Connect to the Internet to open the site.",
      dunEntry: "Phonebook entry to dial:", dunPhone: "Phone number:", dunUser: "User name:", dunPass: "Password:",
      dunSave: "Save password", dunSpeaker: "Modem speaker sound", dunDial: "Dial", dunHang: "Hang Up", dunStatus: "Status:",
      dunConnecting: "Connecting to {e}", dunSteps: ["Dialing...", "Verifying user name and password...", "Registering your computer on the network..."],
      dunDone: "Connected to ArtIntelliCo Online.", dunSpeed: "Speed: 33,600 bps", dunOff: "Not connected",
      start: "Start", programs: "Programs", modes: "Modes", language: "Language", help: "Help", run: "Run...", shutdown: "Shut Down...",
      mycomp: "My Computer", bin: "Recycle Bin", readme: "About us", services: "Services", partners: "Partners", contacts: "Write to us",
      cmd: "Command Prompt", control: "Control Panel", drive: "ARTINTELLICO (C:)",
      min: "Minimize", max: "Maximize", restore: "Restore", close: "Close",
      exMenus: ["File", "Edit", "View", "Help"], wpMenus: ["File", "Edit", "View", "Insert", "Format", "Help"],
      objects: ["object", "objects", "objects"], f1: "For Help, press F1",
      serviceType: "ArtIntelliCo service", partnerType: "Partner", colName: "Name", colType: "Type",
      type: "Type:", location: "Location:", props: "Properties", general: "General",
      tabParts: "Components", tabResult: "Outcome", desc: "Description:", partsIntro: "This service includes the following components:", partsCount: "Components selected: {n} of {n}", resultHead: "What you get", noteHead: "Note",
      ok: "OK", cancel: "Cancel", yes: "Yes", no: "No", discuss: "Discuss your project",
      write: "Write an email", copy: "Copy address", copied: "Address copied to the clipboard.", copyFailed: "Couldn't copy. The address is ",
      runTitle: "Run", open: "Open:", browse: "Browse...", runText: "Type the name of a program, folder, or document, and Windows will open it for you.",
      notFound: "Cannot find the file '%s' (or one of its components). Make sure the path and filename are correct.",
      shutTitle: "Shut Down Windows", shutText: "Are you sure you want to:",
      shutOpts: { restart: "Restart the computer", logoff: "Close all programs and log on as a different user", classic: "Go to the classic version of the site" },
      langTitle: "Interface language", langText: "Choose the interface language:",
      aboutTitle: "About ArtIntelliCo NT", version: "Version 4.0 (Build 1381: Service Pack 6)", licensed: "This product is licensed to:", guest: "Guest",
      memory: "Physical Memory Available to Windows NT:", memoryVal: "65,536 KB",
      helpTitle: "Windows NT Help", helpKeysHead: "Keys", helpRunHead: "Commands for Run",
      helpKeys: [["Ctrl+Esc", "Start menu"], ["F1", "help"], ["Enter", "open the selected item"], ["Esc", "close a menu or dialog"], ["← ↑ → ↓", "select an icon in a folder"], ["← →", "switch tabs in a Properties window"], ["Double-click a title bar", "maximize the window"]],
      modesHint: "The same site in interfaces from different years",
      logonTitle: "Begin Logon", logonText: "Press Ctrl+Alt+Del to log on.", logonHint: "Or press any key, or click here.",
      bootServices: "Starting ArtIntelliCo services...", bootSkip: "Press any key to skip",
      taskbar: "Taskbar", langLabel: "Interface language", embHint: "Double-click an embedded object to open it.",
      cadKeys: ["Ctrl", "Alt", "Del"]
    },
    ru: {
      dunTitle: "Удалённый доступ к сети", dunIntro: "Чтобы открыть сайт, подключитесь к Интернету.",
      dunEntry: "Запись телефонной книги:", dunPhone: "Номер телефона:", dunUser: "Имя пользователя:", dunPass: "Пароль:",
      dunSave: "Сохранить пароль", dunSpeaker: "Звук динамика модема", dunDial: "Набрать", dunHang: "Разорвать", dunStatus: "Состояние:",
      dunConnecting: "Подключение к {e}", dunSteps: ["Набор номера...", "Проверка имени пользователя и пароля...", "Регистрация компьютера в сети..."],
      dunDone: "Подключено к ArtIntelliCo Online.", dunSpeed: "Скорость: 33 600 бит/с", dunOff: "Не подключено",
      start: "Пуск", programs: "Программы", modes: "Режимы", language: "Язык", help: "Справка", run: "Выполнить...", shutdown: "Завершение работы...",
      mycomp: "Мой компьютер", bin: "Корзина", readme: "О компании", services: "Услуги", partners: "Партнёры", contacts: "Написать нам",
      cmd: "Командная строка", control: "Панель управления", drive: "ARTINTELLICO (C:)",
      min: "Свернуть", max: "Развернуть", restore: "Восстановить", close: "Закрыть",
      exMenus: ["Файл", "Правка", "Вид", "Справка"], wpMenus: ["Файл", "Правка", "Вид", "Вставка", "Формат", "Справка"],
      objects: ["объект", "объекта", "объектов"], f1: "Для получения справки нажмите F1",
      serviceType: "Услуга ArtIntelliCo", partnerType: "Партнёр", colName: "Имя", colType: "Тип",
      type: "Тип:", location: "Размещение:", props: "Свойства", general: "Общие",
      tabParts: "Состав", tabResult: "Результат", desc: "Описание:", partsIntro: "В состав услуги входят следующие компоненты:", partsCount: "Выбрано компонентов: {n} из {n}", resultHead: "Что вы получите", noteHead: "Примечание",
      ok: "OK", cancel: "Отмена", yes: "Да", no: "Нет", discuss: "Обсудить задачу",
      write: "Написать письмо", copy: "Копировать адрес", copied: "Адрес скопирован в буфер обмена.", copyFailed: "Не удалось скопировать. Адрес: ",
      runTitle: "Выполнить", open: "Открыть:", browse: "Обзор...", runText: "Введите имя программы, папки или документа, и Windows откроет их.",
      notFound: "Не удаётся найти файл «%s» (или один из его компонентов). Проверьте правильность пути и имени файла.",
      shutTitle: "Завершение работы Windows", shutText: "Вы хотите:",
      shutOpts: { restart: "Перезагрузить компьютер", logoff: "Закрыть все программы и войти как другой пользователь", classic: "Перейти на классическую версию сайта" },
      langTitle: "Язык интерфейса", langText: "Выберите язык интерфейса:",
      aboutTitle: "О программе ArtIntelliCo NT", version: "Версия 4.0 (сборка 1381: Service Pack 6)", licensed: "Этот продукт лицензирован для:", guest: "Гость",
      memory: "Физическая память, доступная Windows NT:", memoryVal: "65 536 КБ",
      helpTitle: "Справка Windows NT", helpKeysHead: "Клавиши", helpRunHead: "Команды для «Выполнить»",
      helpKeys: [["Ctrl+Esc", "меню «Пуск»"], ["F1", "справка"], ["Enter", "открыть выбранный объект"], ["Esc", "закрыть меню или диалог"], ["← ↑ → ↓", "выбор значка в папке"], ["← →", "вкладки в окне «Свойства»"], ["Двойной щелчок по заголовку", "развернуть окно"]],
      modesHint: "Тот же сайт в интерфейсах разных лет",
      logonTitle: "Начало сеанса", logonText: "Нажмите Ctrl+Alt+Del, чтобы начать сеанс.", logonHint: "Или нажмите любую клавишу либо щёлкните здесь.",
      bootServices: "Запуск служб ArtIntelliCo...", bootSkip: "Нажмите любую клавишу, чтобы пропустить",
      taskbar: "Панель задач", langLabel: "Язык интерфейса", embHint: "Дважды щёлкните встроенный объект, чтобы открыть его.",
      cadKeys: ["Ctrl", "Alt", "Del"]
    },
    de: {
      dunTitle: "DFÜ-Netzwerk", dunIntro: "Stellen Sie eine Verbindung zum Internet her, um die Website zu öffnen.",
      dunEntry: "Zu wählender Telefonbucheintrag:", dunPhone: "Rufnummer:", dunUser: "Benutzername:", dunPass: "Kennwort:",
      dunSave: "Kennwort speichern", dunSpeaker: "Modemlautsprecher", dunDial: "Wählen", dunHang: "Auflegen", dunStatus: "Status:",
      dunConnecting: "Verbindung mit {e} wird hergestellt", dunSteps: ["Wählvorgang...", "Benutzername und Kennwort werden überprüft...", "Computer wird im Netzwerk registriert..."],
      dunDone: "Verbunden mit ArtIntelliCo Online.", dunSpeed: "Geschwindigkeit: 33.600 Bit/s", dunOff: "Nicht verbunden",
      start: "Start", programs: "Programme", modes: "Modi", language: "Sprache", help: "Hilfe", run: "Ausführen...", shutdown: "Beenden...",
      mycomp: "Arbeitsplatz", bin: "Papierkorb", readme: "Über uns", services: "Leistungen", partners: "Partner", contacts: "Schreiben Sie uns",
      cmd: "Eingabeaufforderung", control: "Systemsteuerung", drive: "ARTINTELLICO (C:)",
      min: "Minimieren", max: "Maximieren", restore: "Wiederherstellen", close: "Schließen",
      exMenus: ["Datei", "Bearbeiten", "Ansicht", "?"], wpMenus: ["Datei", "Bearbeiten", "Ansicht", "Einfügen", "Format", "?"],
      objects: ["Objekt", "Objekte", "Objekte"], f1: "Drücken Sie F1, um Hilfe zu erhalten.",
      serviceType: "ArtIntelliCo-Leistung", partnerType: "Partner", colName: "Name", colType: "Typ",
      type: "Typ:", location: "Ort:", props: "Eigenschaften", general: "Allgemein",
      tabParts: "Komponenten", tabResult: "Ergebnis", desc: "Beschreibung:", partsIntro: "Diese Leistung umfasst folgende Komponenten:", partsCount: "Ausgewählte Komponenten: {n} von {n}", resultHead: "Was Sie erhalten", noteHead: "Hinweis",
      ok: "OK", cancel: "Abbrechen", yes: "Ja", no: "Nein", discuss: "Projekt besprechen",
      write: "E-Mail schreiben", copy: "Adresse kopieren", copied: "Die Adresse wurde in die Zwischenablage kopiert.", copyFailed: "Kopieren nicht möglich. Die Adresse lautet: ",
      runTitle: "Ausführen", open: "Öffnen:", browse: "Durchsuchen...", runText: "Geben Sie den Namen eines Programms, Ordners oder Dokuments ein, das geöffnet werden soll.",
      notFound: "Die Datei „%s“ (oder eine ihrer Komponenten) wurde nicht gefunden. Überprüfen Sie, ob Pfad und Dateiname richtig sind.",
      shutTitle: "Windows beenden", shutText: "Möchten Sie:",
      shutOpts: { restart: "Computer neu starten", logoff: "Alle Programme schließen und unter anderem Namen anmelden", classic: "Zur klassischen Version der Website wechseln" },
      langTitle: "Sprache der Oberfläche", langText: "Wählen Sie die Sprache der Oberfläche:",
      aboutTitle: "Info über ArtIntelliCo NT", version: "Version 4.0 (Build 1381: Service Pack 6)", licensed: "Dieses Produkt ist lizenziert für:", guest: "Gast",
      memory: "Für Windows NT verfügbarer physischer Speicher:", memoryVal: "65.536 KB",
      helpTitle: "Windows NT-Hilfe", helpKeysHead: "Tasten", helpRunHead: "Befehle für „Ausführen“",
      helpKeys: [["Strg+Esc", "Startmenü"], ["F1", "Hilfe"], ["Eingabetaste", "markiertes Objekt öffnen"], ["Esc", "Menü oder Dialogfeld schließen"], ["← ↑ → ↓", "Symbol in einem Ordner markieren"], ["← →", "Registerkarten im Fenster „Eigenschaften“"], ["Doppelklick auf die Titelleiste", "Fenster maximieren"]],
      modesHint: "Dieselbe Website in Oberflächen verschiedener Jahre",
      logonTitle: "Anmeldung", logonText: "Drücken Sie Strg+Alt+Entf, um sich anzumelden.", logonHint: "Oder drücken Sie eine beliebige Taste bzw. klicken Sie hier.",
      bootServices: "ArtIntelliCo-Dienste werden gestartet...", bootSkip: "Drücken Sie eine beliebige Taste, um zu überspringen",
      taskbar: "Taskleiste", langLabel: "Sprache der Oberfläche", embHint: "Doppelklicken Sie auf ein eingebettetes Objekt, um es zu öffnen.",
      cadKeys: ["Strg", "Alt", "Entf"]
    },
    fr: {
      dunTitle: "Accès réseau à distance", dunIntro: "Connectez-vous à Internet pour ouvrir le site.",
      dunEntry: "Entrée de l'annuaire à composer\u00a0:", dunPhone: "Numéro de téléphone\u00a0:", dunUser: "Nom d'utilisateur\u00a0:", dunPass: "Mot de passe\u00a0:",
      dunSave: "Enregistrer le mot de passe", dunSpeaker: "Haut-parleur du modem", dunDial: "Numéroter", dunHang: "Raccrocher", dunStatus: "État\u00a0:",
      dunConnecting: "Connexion à {e}", dunSteps: ["Numérotation...", "Vérification du nom d'utilisateur et du mot de passe...", "Enregistrement de l'ordinateur sur le réseau..."],
      dunDone: "Connecté à ArtIntelliCo Online.", dunSpeed: "Vitesse\u00a0: 33 600 bps", dunOff: "Non connecté",
      start: "Démarrer", programs: "Programmes", modes: "Modes", language: "Langue", help: "Aide", run: "Exécuter...", shutdown: "Arrêter...",
      mycomp: "Poste de travail", bin: "Corbeille", readme: "À propos", services: "Services", partners: "Partenaires", contacts: "Écrivez-nous",
      cmd: "Invite de commandes", control: "Panneau de configuration", drive: "ARTINTELLICO (C:)",
      min: "Réduire", max: "Agrandir", restore: "Restaurer", close: "Fermer",
      exMenus: ["Fichier", "Édition", "Affichage", "?"], wpMenus: ["Fichier", "Édition", "Affichage", "Insertion", "Format", "?"],
      objects: ["objet", "objets", "objets"], f1: "Pour obtenir de l'aide, appuyez sur F1",
      serviceType: "Service ArtIntelliCo", partnerType: "Partenaire", colName: "Nom", colType: "Type",
      type: "Type\u00a0:", location: "Emplacement\u00a0:", props: "Propriétés", general: "Général",
      tabParts: "Composants", tabResult: "Résultat", desc: "Description\u00a0:", partsIntro: "Ce service comprend les composants suivants\u00a0:", partsCount: "Composants sélectionnés\u00a0: {n} sur {n}", resultHead: "Ce que vous obtenez", noteHead: "Remarque",
      ok: "OK", cancel: "Annuler", yes: "Oui", no: "Non", discuss: "Parler du projet",
      write: "Écrire un e-mail", copy: "Copier l'adresse", copied: "Adresse copiée dans le Presse-papiers.", copyFailed: "Copie impossible. L'adresse est\u00a0: ",
      runTitle: "Exécuter", open: "Ouvrir\u00a0:", browse: "Parcourir...", runText: "Tapez le nom d'un programme, dossier ou document, et Windows l'ouvrira pour vous.",
      notFound: "Impossible de trouver le fichier «\u00a0%s\u00a0» (ou l'un de ses composants). Vérifiez que le chemin d'accès et le nom de fichier sont corrects.",
      shutTitle: "Arrêt de Windows", shutText: "Voulez-vous\u00a0:",
      shutOpts: { restart: "Redémarrer l'ordinateur", logoff: "Fermer tous les programmes et ouvrir une session sous un autre nom", classic: "Passer à la version classique du site" },
      langTitle: "Langue de l'interface", langText: "Choisissez la langue de l'interface\u00a0:",
      aboutTitle: "À propos d'ArtIntelliCo NT", version: "Version 4.0 (Build 1381\u00a0: Service Pack 6)", licensed: "Ce produit est concédé sous licence à\u00a0:", guest: "Invité",
      memory: "Mémoire physique disponible pour Windows NT\u00a0:", memoryVal: "65 536 Ko",
      helpTitle: "Aide de Windows NT", helpKeysHead: "Touches", helpRunHead: "Commandes pour «\u00a0Exécuter\u00a0»",
      helpKeys: [["Ctrl+Échap", "menu Démarrer"], ["F1", "aide"], ["Entrée", "ouvrir l'élément sélectionné"], ["Échap", "fermer un menu ou une boîte de dialogue"], ["← ↑ → ↓", "sélectionner une icône dans un dossier"], ["← →", "onglets de la fenêtre Propriétés"], ["Double-clic sur la barre de titre", "agrandir la fenêtre"]],
      modesHint: "Le même site dans des interfaces de différentes époques",
      logonTitle: "Ouverture de session", logonText: "Appuyez sur Ctrl+Alt+Suppr pour ouvrir une session.", logonHint: "Ou appuyez sur une touche, ou cliquez ici.",
      bootServices: "Démarrage des services ArtIntelliCo...", bootSkip: "Appuyez sur une touche pour passer",
      taskbar: "Barre des tâches", langLabel: "Langue de l'interface", embHint: "Double-cliquez sur un objet incorporé pour l'ouvrir.",
      cadKeys: ["Ctrl", "Alt", "Suppr"]
    },
    es: {
      dunTitle: "Acceso telefónico a redes", dunIntro: "Conéctese a Internet para abrir el sitio.",
      dunEntry: "Entrada de la agenda que desea marcar:", dunPhone: "Número de teléfono:", dunUser: "Nombre de usuario:", dunPass: "Contraseña:",
      dunSave: "Guardar contraseña", dunSpeaker: "Altavoz del módem", dunDial: "Marcar", dunHang: "Colgar", dunStatus: "Estado:",
      dunConnecting: "Conectando con {e}", dunSteps: ["Marcando...", "Comprobando el nombre de usuario y la contraseña...", "Registrando el equipo en la red..."],
      dunDone: "Conectado a ArtIntelliCo Online.", dunSpeed: "Velocidad: 33.600 bps", dunOff: "No conectado",
      start: "Inicio", programs: "Programas", modes: "Modos", language: "Idioma", help: "Ayuda", run: "Ejecutar...", shutdown: "Apagar el sistema...",
      mycomp: "Mi PC", bin: "Papelera de reciclaje", readme: "Quiénes somos", services: "Servicios", partners: "Socios", contacts: "Escríbanos",
      cmd: "Símbolo del sistema", control: "Panel de control", drive: "ARTINTELLICO (C:)",
      min: "Minimizar", max: "Maximizar", restore: "Restaurar", close: "Cerrar",
      exMenus: ["Archivo", "Edición", "Ver", "?"], wpMenus: ["Archivo", "Edición", "Ver", "Insertar", "Formato", "?"],
      objects: ["objeto", "objetos", "objetos"], f1: "Para obtener Ayuda, presione F1",
      serviceType: "Servicio de ArtIntelliCo", partnerType: "Socio", colName: "Nombre", colType: "Tipo",
      type: "Tipo:", location: "Ubicación:", props: "Propiedades", general: "General",
      tabParts: "Componentes", tabResult: "Resultado", desc: "Descripción:", partsIntro: "Este servicio incluye los siguientes componentes:", partsCount: "Componentes seleccionados: {n} de {n}", resultHead: "Qué obtiene", noteHead: "Nota",
      ok: "Aceptar", cancel: "Cancelar", yes: "Sí", no: "No", discuss: "Hablar del proyecto",
      write: "Escribir un correo", copy: "Copiar dirección", copied: "Dirección copiada en el Portapapeles.", copyFailed: "No se pudo copiar. La dirección es: ",
      runTitle: "Ejecutar", open: "Abrir:", browse: "Examinar...", runText: "Escriba el nombre de un programa, carpeta o documento, y Windows lo abrirá.",
      notFound: "No se encuentra el archivo «%s» (o uno de sus componentes). Compruebe que la ruta de acceso y el nombre del archivo son correctos.",
      shutTitle: "Apagar Windows", shutText: "¿Qué desea hacer?",
      shutOpts: { restart: "Reiniciar el equipo", logoff: "Cerrar todos los programas e iniciar la sesión como otro usuario", classic: "Ir a la versión clásica del sitio" },
      langTitle: "Idioma de la interfaz", langText: "Elija el idioma de la interfaz:",
      aboutTitle: "Acerca de ArtIntelliCo NT", version: "Versión 4.0 (compilación 1381: Service Pack 6)", licensed: "Este producto está bajo licencia de:", guest: "Invitado",
      memory: "Memoria física disponible para Windows NT:", memoryVal: "65.536 KB",
      helpTitle: "Ayuda de Windows NT", helpKeysHead: "Teclas", helpRunHead: "Comandos para «Ejecutar»",
      helpKeys: [["Ctrl+Esc", "menú Inicio"], ["F1", "ayuda"], ["Intro", "abrir el elemento seleccionado"], ["Esc", "cerrar un menú o un cuadro de diálogo"], ["← ↑ → ↓", "seleccionar un icono de una carpeta"], ["← →", "fichas de la ventana Propiedades"], ["Doble clic en la barra de título", "maximizar la ventana"]],
      modesHint: "El mismo sitio con interfaces de distintas épocas",
      logonTitle: "Iniciar sesión", logonText: "Presione Ctrl+Alt+Supr para iniciar la sesión.", logonHint: "O presione cualquier tecla, o haga clic aquí.",
      bootServices: "Iniciando los servicios de ArtIntelliCo...", bootSkip: "Presione cualquier tecla para omitir",
      taskbar: "Barra de tareas", langLabel: "Idioma de la interfaz", embHint: "Haga doble clic en un objeto incrustado para abrirlo.",
      cadKeys: ["Ctrl", "Alt", "Supr"]
    },
    pt: {
      dunTitle: "Acesso telefónico à rede", dunIntro: "Ligue-se à Internet para abrir o site.",
      dunEntry: "Entrada da lista telefónica a marcar:", dunPhone: "Número de telefone:", dunUser: "Nome de utilizador:", dunPass: "Palavra-passe:",
      dunSave: "Guardar a palavra-passe", dunSpeaker: "Altifalante do modem", dunDial: "Marcar", dunHang: "Desligar", dunStatus: "Estado:",
      dunConnecting: "A ligar a {e}", dunSteps: ["A marcar...", "A verificar o nome de utilizador e a palavra-passe...", "A registar o computador na rede..."],
      dunDone: "Ligado a ArtIntelliCo Online.", dunSpeed: "Velocidade: 33 600 bps", dunOff: "Sem ligação",
      start: "Iniciar", programs: "Programas", modes: "Modos", language: "Idioma", help: "Ajuda", run: "Executar...", shutdown: "Encerrar...",
      mycomp: "O meu computador", bin: "Reciclagem", readme: "Quem somos", services: "Serviços", partners: "Parceiros", contacts: "Escreva-nos",
      cmd: "Linha de comandos", control: "Painel de controlo", drive: "ARTINTELLICO (C:)",
      min: "Minimizar", max: "Maximizar", restore: "Restaurar", close: "Fechar",
      exMenus: ["Ficheiro", "Editar", "Ver", "?"], wpMenus: ["Ficheiro", "Editar", "Ver", "Inserir", "Formatar", "?"],
      objects: ["objeto", "objetos", "objetos"], f1: "Para obter ajuda, prima F1",
      serviceType: "Serviço ArtIntelliCo", partnerType: "Parceiro", colName: "Nome", colType: "Tipo",
      type: "Tipo:", location: "Localização:", props: "Propriedades", general: "Geral",
      tabParts: "Componentes", tabResult: "Resultado", desc: "Descrição:", partsIntro: "Este serviço inclui os seguintes componentes:", partsCount: "Componentes selecionados: {n} de {n}", resultHead: "O que recebe", noteHead: "Nota",
      ok: "OK", cancel: "Cancelar", yes: "Sim", no: "Não", discuss: "Falar do projeto",
      write: "Escrever um e-mail", copy: "Copiar endereço", copied: "Endereço copiado para a Área de transferência.", copyFailed: "Não foi possível copiar. O endereço é: ",
      runTitle: "Executar", open: "Abrir:", browse: "Procurar...", runText: "Escreva o nome de um programa, pasta ou documento e o Windows irá abri-lo.",
      notFound: "Não é possível encontrar o ficheiro «%s» (ou um dos seus componentes). Verifique se o caminho e o nome do ficheiro estão corretos.",
      shutTitle: "Encerrar o Windows", shutText: "Tem a certeza de que pretende:",
      shutOpts: { restart: "Reiniciar o computador", logoff: "Fechar todos os programas e iniciar sessão como outro utilizador", classic: "Mudar para a versão clássica do site" },
      langTitle: "Idioma da interface", langText: "Escolha o idioma da interface:",
      aboutTitle: "Acerca do ArtIntelliCo NT", version: "Versão 4.0 (compilação 1381: Service Pack 6)", licensed: "Este produto está licenciado para:", guest: "Convidado",
      memory: "Memória física disponível para o Windows NT:", memoryVal: "65 536 KB",
      helpTitle: "Ajuda do Windows NT", helpKeysHead: "Teclas", helpRunHead: "Comandos para «Executar»",
      helpKeys: [["Ctrl+Esc", "menu Iniciar"], ["F1", "ajuda"], ["Enter", "abrir o item selecionado"], ["Esc", "fechar um menu ou caixa de diálogo"], ["← ↑ → ↓", "selecionar um ícone numa pasta"], ["← →", "separadores da janela Propriedades"], ["Duplo clique na barra de título", "maximizar a janela"]],
      modesHint: "O mesmo site em interfaces de várias épocas",
      logonTitle: "Iniciar sessão", logonText: "Prima Ctrl+Alt+Delete para iniciar sessão.", logonHint: "Ou prima qualquer tecla, ou clique aqui.",
      bootServices: "A iniciar os serviços ArtIntelliCo...", bootSkip: "Prima qualquer tecla para saltar",
      taskbar: "Barra de tarefas", langLabel: "Idioma da interface", embHint: "Faça duplo clique num objeto incorporado para o abrir.",
      cadKeys: ["Ctrl", "Alt", "Delete"]
    },
    it: {
      dunTitle: "Accesso remoto", dunIntro: "Per aprire il sito, connettersi a Internet.",
      dunEntry: "Voce della rubrica da chiamare:", dunPhone: "Numero di telefono:", dunUser: "Nome utente:", dunPass: "Password:",
      dunSave: "Salva password", dunSpeaker: "Altoparlante del modem", dunDial: "Componi", dunHang: "Riaggancia", dunStatus: "Stato:",
      dunConnecting: "Connessione a {e}", dunSteps: ["Composizione in corso...", "Verifica di nome utente e password...", "Registrazione del computer sulla rete..."],
      dunDone: "Connesso a ArtIntelliCo Online.", dunSpeed: "Velocità: 33.600 bps", dunOff: "Non connesso",
      start: "Avvio", programs: "Programmi", modes: "Modalità", language: "Lingua", help: "Guida", run: "Esegui...", shutdown: "Chiudi sessione...",
      mycomp: "Risorse del computer", bin: "Cestino", readme: "Chi siamo", services: "Servizi", partners: "Partner", contacts: "Ci scriva",
      cmd: "Prompt dei comandi", control: "Pannello di controllo", drive: "ARTINTELLICO (C:)",
      min: "Riduci a icona", max: "Ingrandisci", restore: "Ripristina", close: "Chiudi",
      exMenus: ["File", "Modifica", "Visualizza", "?"], wpMenus: ["File", "Modifica", "Visualizza", "Inserisci", "Formato", "?"],
      objects: ["oggetto", "oggetti", "oggetti"], f1: "Per visualizzare la Guida, premere F1",
      serviceType: "Servizio ArtIntelliCo", partnerType: "Partner", colName: "Nome", colType: "Tipo",
      type: "Tipo:", location: "Percorso:", props: "Proprietà", general: "Generale",
      tabParts: "Componenti", tabResult: "Risultato", desc: "Descrizione:", partsIntro: "Il servizio comprende i seguenti componenti:", partsCount: "Componenti selezionati: {n} di {n}", resultHead: "Che cosa ottiene", noteHead: "Nota",
      ok: "OK", cancel: "Annulla", yes: "Sì", no: "No", discuss: "Parliamo del progetto",
      write: "Scrivi un'e-mail", copy: "Copia indirizzo", copied: "Indirizzo copiato negli Appunti.", copyFailed: "Impossibile copiare. L'indirizzo è: ",
      runTitle: "Esegui", open: "Apri:", browse: "Sfoglia...", runText: "Digitare il nome del programma, della cartella o del documento da aprire.",
      notFound: "Impossibile trovare il file «%s» (o uno dei suoi componenti). Verificare che il percorso e il nome del file siano corretti.",
      shutTitle: "Chiudi sessione di Windows", shutText: "Si desidera:",
      shutOpts: { restart: "Riavviare il sistema", logoff: "Chiudere tutti i programmi e connettersi con un nome diverso", classic: "Passare alla versione classica del sito" },
      langTitle: "Lingua dell'interfaccia", langText: "Scegliere la lingua dell'interfaccia:",
      aboutTitle: "Informazioni su ArtIntelliCo NT", version: "Versione 4.0 (build 1381: Service Pack 6)", licensed: "Questo prodotto è concesso in licenza a:", guest: "Ospite",
      memory: "Memoria fisica disponibile per Windows NT:", memoryVal: "65.536 KB",
      helpTitle: "Guida di Windows NT", helpKeysHead: "Tasti", helpRunHead: "Comandi per «Esegui»",
      helpKeys: [["Ctrl+Esc", "menu Avvio"], ["F1", "Guida"], ["Invio", "aprire l'elemento selezionato"], ["Esc", "chiudere un menu o una finestra di dialogo"], ["← ↑ → ↓", "selezionare un'icona in una cartella"], ["← →", "schede della finestra Proprietà"], ["Doppio clic sulla barra del titolo", "ingrandire la finestra"]],
      modesHint: "Lo stesso sito con interfacce di epoche diverse",
      logonTitle: "Accesso", logonText: "Premere Ctrl+Alt+Canc per accedere.", logonHint: "Oppure premere un tasto qualsiasi o fare clic qui.",
      bootServices: "Avvio dei servizi ArtIntelliCo in corso...", bootSkip: "Premere un tasto qualsiasi per saltare",
      taskbar: "Barra delle applicazioni", langLabel: "Lingua dell'interfaccia", embHint: "Fare doppio clic su un oggetto incorporato per aprirlo.",
      cadKeys: ["Ctrl", "Alt", "Canc"]
    }
  };
  /* Назва мови й код у дужках, як у списку розкладок NT: «Deutsch (DE)» */
  const LANG_NAMES = Object.fromEntries(LANGS.map((l) => [l, `${AIC.langNames?.[l] || l} (${AIC.langCodes?.[l] || l.toUpperCase()})`]));
  const u = () => T[lang];
  /* Власні тексти послуг для вікна «Властивості»: text — опис, about — суть, parts — склад, result — результат.
     AIC.content лишається запасним джерелом. */
  const SVC = {
    uk: {
      note: "Стек добираємо під задачу, а не задачу під стек. Буває, що чесна відповідь — готовий сервіс за підпискою; тоді так і скажемо, навіть якщо розробки не буде.",
      items: {
        concept: {
          title: "Розробка концепції ІТ рішення",
          text: "З'ясовуємо, яку задачу насправді має розв'язувати система, і записуємо це так, щоб зрозуміли і бізнес, і розробники.",
          about: "Найдорожчі помилки стаються ще до першого рядка коду — коли систему будують під задачу, яку ніхто як слід не сформулював. Тому ми говоримо не лише з керівником, а й із бухгалтерією, складом, менеджерами: з тими, хто потім щодня працюватиме в цій системі. Буває, що після цього радимо нічого не писати, а взяти готовий продукт і доналаштувати. Це теж нормальний підсумок.",
          parts: ["Інтерв'ю з працівниками й розбір поточних процесів", "Бізнес-вимоги та сценарії роботи", "Порівняння: готовий продукт чи розробка на замовлення", "Технічне завдання з оцінкою строків і бюджету за етапами"],
          result: "Документ, з яким будь-яка команда — наша чи чужа — може оцінити проєкт і братися до роботи."
        },
        saas: {
          title: "Розробка SaaS рішень",
          text: "Проєктуємо й збираємо SaaS-платформу: від першої версії для пілотних клієнтів до сервісу, де в кожного клієнта свій простір, тариф і кабінет.",
          about: "Гроші в SaaS приносить не код, а те, як швидко новий клієнт проходить шлях «зареєструвався — оплатив — працює» і жодного разу не дзвонить у підтримку. Мультитенантність, білінг і права доступу закладаємо одразу: переробляти їх, коли клієнти вже всередині, виходить у рази дорожче. Першу версію випускаємо якомога раніше — живі користувачі швидко покажуть, які функції були зайві.",
          parts: ["Мультитенантна архітектура, дані клієнтів ізольовані", "Реєстрація, тарифи, підписки, онлайн-оплата", "Особисті кабінети, ролі та права доступу", "Інтеграції та відкрите API для клієнтів", "Масштабування під зростання навантаження"],
          result: "Продукт, який продається за підпискою, а не проєкт, який щоразу доводиться впроваджувати вручну."
        },
        web: {
          title: "Web-розробка",
          text: "Робимо корпоративні сайти, маркетплейси, інтернет-магазини, системи бронювання й внутрішні вебсервіси. Під задачу, без шаблонів.",
          about: "Сайт для бізнесу міряють заявками й замовленнями, а вигляд у портфоліо — справа десята. Тож до старту домовляємося, що вважати результатом, і вмикаємо аналітику до запуску, а не через пів року, коли про неї хтось згадає. Технологію беремо за розміром: лендингу важка платформа ні до чого, а маркетплейс у конструктор сайтів не влізе.",
          parts: ["Прототип і дизайн інтерфейсів", "Frontend, backend і панель адміністрування", "Інтеграція з оплатою, доставкою, CRM та обліковими системами", "SEO-основа, швидкість завантаження, аналітика", "Запуск і супровід"],
          result: "Вебсервіс, за яким видно, скільки заявок і грошей він приносить."
        },
        mobile: {
          title: "Мобільні застосунки",
          text: "Робимо застосунки для iOS та Android, а до них серверну частину й панель адміністрування.",
          about: "Застосунок окупається, коли до нього повертаються: замовити ще раз, глянути статус, перевірити бонуси. Якщо клієнт заходить раз на рік, добрий мобільний сайт коштуватиме менше, і ми скажемо це до початку робіт, а не після. Нативно чи кросплатформно — вирішують бюджет і те, наскільки застосунку потрібні камера, геолокація та робота без мережі.",
          parts: ["Застосунки для iOS та Android", "Серверна частина та API", "Адмінпанель: контент, замовлення, користувачі", "Push-сповіщення та аналітика", "Публікація в App Store і Google Play"],
          result: "Застосунок, який проходить модерацію магазинів, а ваша команда керує ним, не смикаючи розробника."
        },
        ai: {
          title: "Рішення зі штучним інтелектом",
          text: "Автоматизуємо бізнес-процеси за допомогою ШІ-агентів — рішень на основі штучного інтелекту й машинного навчання, які самі проходять рутинні кроки замість працівників.",
          about: "До ШІ ми ставимося скептичніше за багатьох: добра половина ідей «а додаймо нейромережу» закривається звичайною автоматизацією. Але коли люди годинами розбирають листи, документи й звернення, агент на мовній моделі цю рутину справді знімає: сам розкладає заявки, вносить дані в CRM, готує чернетку відповіді клієнту. Починаємо з пілота на ваших даних — цифри точності ви побачите до основної розробки.",
          parts: ["ШІ-агенти для рутинних кроків: розбір заявок, заповнення CRM, чернетки відповідей клієнтам", "Чат-боти й асистенти для клієнтів і працівників", "Розпізнавання та розбір документів", "Класифікація звернень, пошук у базі знань", "Прогнози попиту й аналіз даних", "Пілот з оцінкою якості на ваших даних"],
          result: "Конкретну роботу, яку раніше робили люди, тепер робить система. Людина при цьому лишається за кермом."
        },
        crm: {
          title: "Розробка CRM та ERP",
          text: "Будуємо CRM та ERP навколо ваших процесів. Переробляти процеси під систему не доведеться.",
          about: "Коробкова CRM працює нормально, доки ваш процес схожий на стандартний. Коли половина роботи менеджерів живе в таблицях, бо система «так не вміє», власна вже обходиться дешевше. Дані переносимо зі старих систем і таблиць, а запускаємо по відділах, щоб робота не ставала ні на день.",
          parts: ["Модулі продажів, складу, виробництва, фінансів — які потрібні", "Ролі, права доступу, журнал дій", "Звіти й дашборди для керівника", "Перенесення даних із таблиць і старих систем", "Зв'язок із бухгалтерією, телефонією та поштою"],
          result: "Одна система замість зоопарку таблиць. Керівник бачить, як ідуть справи, без щотижневих звітів від кожного відділу."
        },
        cloud: {
          title: "Хмарні рішення",
          text: "Переносимо інфраструктуру до Amazon Web Services — повністю або частинами — і стежимо, щоб вона працювала й не дорожчала без причини.",
          about: "Хмара не завжди дешевша за власний сервер. Вона окупається, коли навантаження стрибає, коли потрібна відмовостійкість або коли нове середовище треба підняти за хвилини, а не за тиждень. Тож переїзд починається з аудиту й розрахунку вартості, іде поетапно, і на кожному кроці є план відкату.",
          parts: ["Аудит поточної інфраструктури й розрахунок вартості", "Архітектура в AWS і план міграції", "Перенесення серверів, баз даних і файлів", "Резервне копіювання та моніторинг", "Оптимізація витрат після переїзду"],
          result: "Інфраструктура, яка переживає відмову сервера, і рахунок за хмару, в якому вам усе зрозуміло."
        },
        redhat: {
          title: "Інфраструктура компанії на базі Red Hat",
          text: "Будуємо ІТ-інфраструктуру компанії на Red Hat: сервери під Red Hat Enterprise Linux, контейнерна платформа OpenShift, автоматизація через Ansible.",
          about: "Red Hat беруть тоді, коли інфраструктура має роками працювати й проходити аудит, а не жити в голові одного адміністратора. Підписка відпрацьовує себе підтримкою виробника і довгим життєвим циклом — для Red Hat Enterprise Linux це десять років. Ми проєктуємо все під ваші навантаження, а конфігурацію серверів записуємо в Ansible: будь-яку машину можна перезібрати за сценарієм, без «а як ми це тоді налаштовували?». Red Hat — наш партнер, тож із підписками й підтримкою виробника теж допоможемо.",
          parts: ["Аудит поточних серверів і план переходу", "Red Hat Enterprise Linux, оновлення централізовано через Red Hat Satellite", "Контейнерна платформа OpenShift для ваших застосунків", "Автоматизація налаштування й розгортання в Ansible", "Єдине керування обліковими записами й доступом (Identity Management)", "Моніторинг, резервні копії й документація для вашої команди"],
          result: "Інфраструктуру можна перевірити, відтворити й передати іншій команді — і знання не підуть разом з однією людиною."
        },
        api: {
          title: "API та інтеграції",
          text: "Проєктуємо API для ваших систем і з'єднуємо їх із сервісами, якими ви вже користуєтеся.",
          about: "Найчастіше ми бачимо одне й те саме: дані вводять двічі. Замовлення із сайту передруковують в облікову систему вручну, оплати звіряють у таблиці. Інтеграція прибирає і цю роботу, і помилки, які вона породжує. Моніторинг налаштовуємо окремо: інтеграції ламаються мовчки, коли партнер змінює свій API, і краще дізнатися про це від системи, ніж від клієнта.",
          parts: ["Проєктування й документація API", "Платіжні системи, служби доставки, CRM, облік", "Обмін даними між внутрішніми системами", "Черги й повторні спроби при збоях", "Моніторинг і сповіщення"],
          result: "Дані вводяться один раз і самі потрапляють туди, де вони потрібні."
        },
        support: {
          title: "Технічна підтримка",
          text: "Підтримуємо ваші ІТ-системи й розвиваємо їх далі, зокрема ті, що писали не ми.",
          about: "Виправляти помилки — лише частина роботи. Є ще оновлення, що закривають уразливості, моніторинг, який помічає збій раніше за користувачів, і дрібні доопрацювання по ходу. Якщо система дісталася від іншого підрядника, спершу робимо аудит і пишемо документацію, бо без неї кожна правка — лотерея.",
          parts: ["Моніторинг доступності й помилок", "Виправлення помилок і оновлення безпеки", "Резервні копії та перевірка відновлення", "Доопрацювання й нові функції за планом", "Аудит і документація чужих систем"],
          result: "Система працює, а команда знає, як вона влаштована."
        }
      }
    },
    ru: {
      note: "Стек подбираем под задачу, а не задачу под стек. Бывает, что честный ответ — готовый сервис по подписке; тогда так и скажем, даже если разработки не будет.",
      items: {
        concept: {
          title: "Разработка концепции ИТ решения",
          text: "Выясняем, какую задачу на самом деле должна решать система, и записываем это так, чтобы поняли и бизнес, и разработчики.",
          about: "Самые дорогие ошибки случаются до первой строки кода — когда систему строят под задачу, которую никто толком не сформулировал. Поэтому мы разговариваем не только с руководителем, но и с бухгалтерией, складом, менеджерами: с теми, кто потом будет работать в этой системе каждый день. Иногда после этого мы советуем ничего не писать, а взять готовый продукт и донастроить. Это тоже нормальный итог.",
          parts: ["Интервью с сотрудниками и разбор текущих процессов", "Бизнес-требования и сценарии работы", "Сравнение: готовый продукт или заказная разработка", "Техзадание с оценкой сроков и бюджета по этапам"],
          result: "Документ, с которым любая команда — наша или чужая — может оценить проект и сесть за работу."
        },
        saas: {
          title: "Разработка SaaS решений",
          text: "Проектируем и собираем SaaS-платформу: от первой версии для пилотных клиентов до сервиса, где у каждого клиента своё пространство, тариф и кабинет.",
          about: "Деньги в SaaS приносит не код, а то, как быстро новый клиент проходит путь «зарегистрировался — оплатил — работает» и ни разу не звонит в поддержку. Мультитенантность, биллинг и права доступа закладываем сразу: переделывать их, когда клиенты уже внутри, выходит в разы дороже. Первую версию выпускаем как можно раньше — живые пользователи быстро покажут, какие функции были лишними.",
          parts: ["Мультитенантная архитектура, данные клиентов изолированы", "Регистрация, тарифы, подписки, онлайн-оплата", "Личные кабинеты, роли и права доступа", "Интеграции и открытое API для клиентов", "Масштабирование под рост нагрузки"],
          result: "Продукт, который продаётся по подписке, а не проект, который каждый раз приходится внедрять руками."
        },
        web: {
          title: "Web-разработка",
          text: "Делаем корпоративные сайты, маркетплейсы, интернет-магазины, системы бронирования и внутренние веб-сервисы. Под задачу, без шаблонов.",
          about: "Бизнес-сайт меряют заявками и заказами, а как он смотрится в портфолио — дело десятое. Поэтому до старта договариваемся, что считать результатом, и включаем аналитику к запуску, а не через полгода, когда о ней кто-нибудь вспомнит. Технологию берём по размеру: лендингу тяжёлая платформа ни к чему, а маркетплейс в конструктор сайтов не влезет.",
          parts: ["Прототип и дизайн интерфейсов", "Frontend, backend и панель администрирования", "Интеграция с оплатой, доставкой, CRM и учётными системами", "SEO-основа, скорость загрузки, аналитика", "Запуск и сопровождение"],
          result: "Веб-сервис, по которому видно, сколько заявок и денег он приносит."
        },
        mobile: {
          title: "Мобильные приложения",
          text: "Делаем приложения для iOS и Android, а к ним серверную часть и панель администрирования.",
          about: "Приложение окупается, когда к нему возвращаются: заказать ещё раз, посмотреть статус, проверить бонусы. Если клиент заходит раз в год, хороший мобильный сайт обойдётся дешевле, и мы скажем это до начала работ, а не после. Нативно или кроссплатформенно — решают бюджет и то, насколько приложению нужны камера, геолокация и работа без сети.",
          parts: ["Приложения для iOS и Android", "Серверная часть и API", "Админ-панель: контент, заказы, пользователи", "Push-уведомления и аналитика", "Публикация в App Store и Google Play"],
          result: "Приложение, которое проходит модерацию магазинов, а ваша команда управляет им, не дёргая разработчика."
        },
        ai: {
          title: "Решения с искусственным интеллектом",
          text: "Автоматизируем бизнес-процессы с помощью ИИ-агентов — решений на базе искусственного интеллекта и машинного обучения, которые сами проходят рутинные шаги вместо сотрудников.",
          about: "К ИИ мы относимся скептичнее многих: добрая половина идей «давайте добавим нейросеть» закрывается обычной автоматизацией. Но если люди часами разбирают письма, документы и обращения, агент на языковой модели эту рутину действительно снимает: сам раскладывает заявки, вносит данные в CRM, готовит черновик ответа клиенту. Начинаем с пилота на ваших данных — цифры точности вы увидите до основной разработки.",
          parts: ["ИИ-агенты для рутинных шагов: разбор заявок, заполнение CRM, черновики ответов клиентам", "Чат-боты и ассистенты для клиентов и сотрудников", "Распознавание и разбор документов", "Классификация обращений, поиск по базе знаний", "Прогнозы спроса и анализ данных", "Пилот с оценкой качества на ваших данных"],
          result: "Конкретную работу, которую раньше делали люди, теперь делает система. Человек при этом остаётся у руля."
        },
        crm: {
          title: "Разработка CRM и ERP",
          text: "Строим CRM и ERP вокруг ваших процессов. Переделывать процессы под систему не придётся.",
          about: "Коробочная CRM нормально работает, пока ваш процесс похож на стандартный. Когда половина работы менеджеров живёт в таблицах, потому что система «так не умеет», своя уже обходится дешевле. Данные переносим из старых систем и таблиц, а запускаем по отделам, чтобы работа не вставала ни на день.",
          parts: ["Модули продаж, склада, производства, финансов — какие нужны", "Роли, права доступа, журнал действий", "Отчёты и дашборды для руководителя", "Перенос данных из таблиц и старых систем", "Связь с бухгалтерией, телефонией и почтой"],
          result: "Одна система вместо зоопарка таблиц. Руководитель видит, как идут дела, без еженедельных отчётов от каждого отдела."
        },
        cloud: {
          title: "Облачные решения",
          text: "Переносим инфраструктуру в Amazon Web Services — целиком или по частям — и следим, чтобы она работала и не дорожала без причины.",
          about: "Облако не всегда дешевле своего сервера. Оно окупается, когда нагрузка скачет, когда нужна отказоустойчивость или когда новое окружение надо поднять за минуты, а не за неделю. Так что переезд начинается с аудита и расчёта стоимости, идёт поэтапно, и на каждом шаге есть план отката.",
          parts: ["Аудит текущей инфраструктуры и расчёт стоимости", "Архитектура в AWS и план миграции", "Перенос серверов, баз данных и файлов", "Резервное копирование и мониторинг", "Оптимизация расходов после переезда"],
          result: "Инфраструктура, которая переживает отказ сервера, и счёт за облако, в котором вам всё понятно."
        },
        redhat: {
          title: "Инфраструктура компании на базе Red Hat",
          text: "Строим ИТ-инфраструктуру компании на Red Hat: серверы под Red Hat Enterprise Linux, контейнерная платформа OpenShift, автоматизация через Ansible.",
          about: "Red Hat берут тогда, когда инфраструктура должна годами работать и проходить аудит, а не жить в голове одного администратора. Подписка отрабатывает себя поддержкой производителя и длинным жизненным циклом — у Red Hat Enterprise Linux это десять лет. Мы проектируем всё под ваши нагрузки, а конфигурацию серверов записываем в Ansible: любую машину можно пересобрать по сценарию, без «а как мы это тогда настраивали?». Red Hat — наш партнёр, так что с подписками и поддержкой производителя тоже поможем.",
          parts: ["Аудит текущих серверов и план перехода", "Red Hat Enterprise Linux, обновления централизованно через Red Hat Satellite", "Контейнерная платформа OpenShift для ваших приложений", "Автоматизация настройки и развёртывания в Ansible", "Единое управление учётными записями и доступом (Identity Management)", "Мониторинг, резервные копии и документация для вашей команды"],
          result: "Инфраструктуру можно проверить, воспроизвести и передать другой команде — и знания не уйдут вместе с одним человеком."
        },
        api: {
          title: "API и интеграции",
          text: "Проектируем API для ваших систем и связываем их с сервисами, которыми вы уже пользуетесь.",
          about: "Чаще всего мы видим одно и то же: данные вводят дважды. Заказ с сайта перебивают в учётную систему руками, оплаты сверяют в таблице. Интеграция убирает и эту работу, и ошибки, которые она порождает. Мониторинг настраиваем отдельно: интеграции ломаются молча, когда партнёр меняет свой API, и лучше узнать об этом от системы, чем от клиента.",
          parts: ["Проектирование и документация API", "Платёжные системы, службы доставки, CRM, учёт", "Обмен данными между внутренними системами", "Очереди и повторные попытки при сбоях", "Мониторинг и оповещения"],
          result: "Данные вводятся один раз и сами попадают туда, где они нужны."
        },
        support: {
          title: "Техническая поддержка",
          text: "Поддерживаем ваши ИТ-системы и развиваем их дальше, включая те, что писали не мы.",
          about: "Исправлять ошибки — только часть работы. Ещё есть обновления, которые закрывают уязвимости, мониторинг, который замечает сбой раньше пользователей, и мелкие доработки по ходу дела. Если система досталась от другого подрядчика, сначала проводим аудит и пишем документацию, потому что без неё любая правка — лотерея.",
          parts: ["Мониторинг доступности и ошибок", "Исправление ошибок и обновления безопасности", "Резервные копии и проверка восстановления", "Доработки и новые функции по плану", "Аудит и документация чужих систем"],
          result: "Система работает, а команда знает, как она устроена."
        }
      }
    },
    en: {
      note: "We pick the stack to fit the task, never the other way round. Sometimes the honest answer is an off-the-shelf subscription service, and we'll say so even if it leaves nothing for us to build.",
      items: {
        concept: {
          title: "IT solution concept",
          text: "We work out what the system actually has to do and write it down so that both the business and the developers can follow it.",
          about: "The expensive mistakes happen before the first line of code, when a system gets built for a problem nobody quite pinned down. So we talk to more people than the one signing off: accounting, the warehouse, the sales team, everyone who'll be working in this system every day. Sometimes the answer afterwards is to build nothing and configure an existing product instead. That's a perfectly good outcome.",
          parts: ["Staff interviews and a walkthrough of current processes", "Business requirements and user scenarios", "Off-the-shelf product vs. custom build, compared", "Specification with time and budget estimates per phase"],
          result: "A document any team, ours or someone else's, can estimate from and start work on."
        },
        saas: {
          title: "SaaS development",
          text: "We design and build SaaS platforms, from a first version for pilot customers to a service where each customer gets their own workspace, plan and dashboard.",
          about: "In SaaS the money comes from how quickly a new customer gets from sign-up to paying to actually working, without ever calling support. The code is just how you get there. We build in multi-tenancy, billing and permissions from the start, since retrofitting them with customers already inside costs several times more. And the first version ships early, because real users are quick to show which features nobody needed.",
          parts: ["Multi-tenant architecture with isolated customer data", "Sign-up, plans, subscriptions, online payments", "Customer dashboards, roles and permissions", "Integrations and a public API for your customers", "Scaling as load grows"],
          result: "A product that sells by subscription, not a project you have to roll out by hand every time."
        },
        web: {
          title: "Web development",
          text: "We build corporate websites, marketplaces, online stores, booking systems and internal web tools. Made for the task, no templates.",
          about: "A business website is measured in leads and orders, and how it looks in a portfolio comes a distant second. So before we start, we agree on what counts as a result, and analytics goes live with the launch, not six months later when someone remembers. The technology is sized to the job: a landing page has no use for a heavy platform, and a marketplace won't squeeze into a website builder.",
          parts: ["Prototype and interface design", "Frontend, backend and admin panel", "Payment, delivery, CRM and accounting integrations", "SEO groundwork, page speed, analytics", "Launch and ongoing support"],
          result: "A web service that shows you how many leads and how much money it brings in."
        },
        mobile: {
          title: "Mobile apps",
          text: "We build iOS and Android apps, plus the server side and admin panel that run them.",
          about: "An app pays for itself when people come back to it: to reorder, check a status, see their loyalty points. If a customer drops by once a year, a good mobile website is cheaper, and we'll tell you that before work starts rather than after. Native or cross-platform comes down to budget and to how much the app leans on the camera, location and working offline.",
          parts: ["iOS and Android apps", "Server side and API", "Admin panel for content, orders and users", "Push notifications and analytics", "Publishing to the App Store and Google Play"],
          result: "An app that gets through store review and that your team runs without calling a developer."
        },
        ai: {
          title: "AI-powered solutions",
          text: "We automate business processes with AI agents: software built on artificial intelligence and machine learning that works through the routine steps your staff used to do.",
          about: "We're more sceptical about AI than most: a good half of the “let's add a neural network” ideas are covered by plain automation. But where people spend hours sorting emails, documents and support requests, an agent running on a language model really does take that routine away. It triages the requests, puts the data into the CRM and drafts the reply to the customer. We start with a pilot on your data, so you see accuracy figures before the main build, not after.",
          parts: ["AI agents for routine steps: request triage, CRM data entry, draft replies to customers", "Chatbots and assistants for customers and staff", "Document recognition and data extraction", "Request classification, knowledge-base search", "Demand forecasting and data analysis", "Pilot with quality measured on your data"],
          result: "A specific job people used to do by hand is now done by the system, with a person still at the wheel."
        },
        crm: {
          title: "CRM and ERP development",
          text: "We build CRM and ERP around your processes. You won't have to bend the processes to fit the software.",
          about: "Off-the-shelf CRM is fine while your process looks like everyone else's. Once managers are running half their work in spreadsheets because the system “can't do that”, building your own works out cheaper. We bring the data over from old systems and spreadsheets and roll out one department at a time, so work doesn't stop for a single day.",
          parts: ["Sales, warehouse, production, finance modules, whichever you need", "Roles, permissions, audit log", "Reports and dashboards for management", "Data migration from spreadsheets and legacy systems", "Links to accounting, telephony and email"],
          result: "One system instead of a zoo of spreadsheets. Management sees where things stand without a weekly report from every department."
        },
        cloud: {
          title: "Cloud solutions",
          text: "We move your infrastructure to Amazon Web Services, all of it or piece by piece, and keep it running without the bill creeping up for no reason.",
          about: "The cloud isn't always cheaper than your own server. It pays off when load jumps around, when you need fault tolerance, or when a new environment has to come up in minutes instead of a week. So a move starts with an audit and a cost estimate and goes in stages, with a rollback plan at every step.",
          parts: ["Audit of current infrastructure and a cost estimate", "AWS architecture and a migration plan", "Moving servers, databases and files", "Backups and monitoring", "Cost optimisation after the move"],
          result: "Infrastructure that survives a server failure, and a cloud bill you can actually make sense of."
        },
        redhat: {
          title: "Company infrastructure on Red Hat",
          text: "We build your company's IT infrastructure on Red Hat: servers on Red Hat Enterprise Linux, the OpenShift container platform, automation with Ansible.",
          about: "Red Hat is the choice when infrastructure has to run for years and pass audits instead of living in one administrator's head. The subscription earns its keep through vendor support and a long lifecycle; for Red Hat Enterprise Linux that's ten years. We design around your workloads and write the server configuration down in Ansible, so any machine can be rebuilt from a playbook rather than from someone's memory of how it was set up. Red Hat is our partner, so we can help with subscriptions and vendor support too.",
          parts: ["Audit of current servers and a migration plan", "Red Hat Enterprise Linux, with updates managed centrally in Red Hat Satellite", "OpenShift container platform for your applications", "Configuration and deployment automation in Ansible", "Central identity and access management (Identity Management)", "Monitoring, backups and documentation for your team"],
          result: "Infrastructure you can audit, reproduce and hand to another team without the know-how leaving with one person."
        },
        api: {
          title: "APIs and integrations",
          text: "We design APIs for your systems and connect them to the services you already use.",
          about: "What we see most often is data typed in twice. Website orders retyped into the accounting system by hand, payments reconciled in a spreadsheet. An integration takes away that work and the mistakes it breeds. Monitoring gets set up separately, because integrations fail silently when a partner changes their API, and you'd rather hear it from the system than from a customer.",
          parts: ["API design and documentation", "Payment providers, delivery services, CRM, accounting", "Data exchange between internal systems", "Queues and retries when something fails", "Monitoring and alerts"],
          result: "Data gets entered once and finds its own way to wherever it's needed."
        },
        support: {
          title: "Technical support",
          text: "We keep your IT systems running and keep developing them, including ones we didn't build.",
          about: "Fixing bugs is only part of the job. There are also security updates that close holes, monitoring that catches a failure before users do, and small improvements along the way. If the system came from another contractor, we start with an audit and write the documentation, because without it every change is a gamble.",
          parts: ["Availability and error monitoring", "Bug fixes and security updates", "Backups and restore testing", "Planned improvements and new features", "Audit and documentation of other contractors' systems"],
          result: "The system works, and the team knows how it's put together."
        }
      }
    },
    de: {
      note: "Den Technologie-Stack wählen wir passend zur Aufgabe, nie umgekehrt. Manchmal lautet die ehrliche Antwort: ein fertiger Dienst im Abonnement. Dann sagen wir das auch, selbst wenn für uns nichts zu entwickeln bleibt.",
      items: {
        concept: {
          title: "Konzeption von IT-Lösungen",
          text: "Wir klären, was das System tatsächlich leisten muss, und halten es so fest, dass Fachabteilung und Entwickler es gleichermaßen verstehen.",
          about: "Die teuersten Fehler passieren vor der ersten Codezeile – wenn ein System für ein Problem gebaut wird, das niemand richtig auf den Punkt gebracht hat. Deshalb sprechen wir nicht nur mit der Geschäftsführung, sondern auch mit Buchhaltung, Lager und Vertrieb: mit allen, die später jeden Tag mit dem System arbeiten. Manchmal lautet unser Rat danach, gar nichts zu entwickeln und stattdessen ein fertiges Produkt anzupassen. Auch das ist ein gutes Ergebnis.",
          parts: ["Interviews mit Mitarbeitenden und Analyse der aktuellen Abläufe", "Fachliche Anforderungen und Nutzungsszenarien", "Vergleich: Standardprodukt oder Individualentwicklung", "Pflichtenheft mit Zeit- und Budgetschätzung je Phase"],
          result: "Ein Dokument, auf dessen Grundlage jedes Team – unseres oder ein anderes – das Projekt schätzen und loslegen kann."
        },
        saas: {
          title: "SaaS-Entwicklung",
          text: "Wir konzipieren und bauen SaaS-Plattformen – von der ersten Version für Pilotkunden bis zum Dienst, in dem jeder Kunde seinen eigenen Arbeitsbereich, Tarif und Kundenbereich hat.",
          about: "Bei SaaS kommt das Geld nicht vom Code, sondern davon, wie schnell ein neuer Kunde von der Registrierung über die Zahlung zur echten Nutzung gelangt – ohne ein einziges Mal beim Support anzurufen. Mandantenfähigkeit, Abrechnung und Berechtigungen planen wir von Anfang an ein: Sie nachträglich einzubauen, wenn schon Kunden im System sind, kostet ein Vielfaches. Die erste Version geht früh live, denn echte Nutzer zeigen schnell, welche Funktionen niemand braucht.",
          parts: ["Mandantenfähige Architektur mit getrennten Kundendaten", "Registrierung, Tarife, Abonnements, Online-Zahlung", "Kundenbereiche, Rollen und Berechtigungen", "Integrationen und eine offene API für Ihre Kunden", "Skalierung bei wachsender Last"],
          result: "Ein Produkt, das sich im Abonnement verkauft – kein Projekt, das jedes Mal von Hand eingeführt werden muss."
        },
        web: {
          title: "Webentwicklung",
          text: "Wir entwickeln Unternehmenswebsites, Marktplätze, Onlineshops, Buchungssysteme und interne Webanwendungen. Passend zur Aufgabe, ohne Vorlagen.",
          about: "Eine Unternehmenswebsite misst man an Anfragen und Bestellungen; wie sie im Portfolio aussieht, ist zweitrangig. Deshalb legen wir vor dem Start fest, was als Ergebnis zählt, und die Webanalyse läuft ab dem Launch – nicht erst ein halbes Jahr später, wenn jemand daran denkt. Die Technik wählen wir passend zur Größe: Eine Landingpage braucht keine schwere Plattform, und ein Marktplatz passt in keinen Website-Baukasten.",
          parts: ["Prototyp und Interface-Design", "Frontend, Backend und Admin-Bereich", "Anbindung von Zahlung, Versand, CRM und Buchhaltung", "SEO-Grundlagen, Ladezeit, Webanalyse", "Launch und laufende Betreuung"],
          result: "Ein Webdienst, an dem Sie ablesen können, wie viele Anfragen und wie viel Umsatz er bringt."
        },
        mobile: {
          title: "Mobile Apps",
          text: "Wir entwickeln Apps für iOS und Android – samt Serverteil und Admin-Bereich, die sie am Laufen halten.",
          about: "Eine App rechnet sich, wenn Nutzer wiederkommen: um nachzubestellen, einen Status zu prüfen, Bonuspunkte anzusehen. Schaut ein Kunde nur einmal im Jahr vorbei, ist eine gute mobile Website günstiger – und das sagen wir Ihnen vor Projektbeginn, nicht danach. Ob nativ oder plattformübergreifend, hängt vom Budget ab und davon, wie stark die App auf Kamera, Standort und Offline-Betrieb angewiesen ist.",
          parts: ["Apps für iOS und Android", "Serverteil und API", "Admin-Bereich für Inhalte, Bestellungen und Nutzer", "Push-Benachrichtigungen und Analyse", "Veröffentlichung im App Store und bei Google Play"],
          result: "Eine App, die die Store-Prüfung besteht und die Ihr Team betreibt, ohne einen Entwickler zu rufen."
        },
        ai: {
          title: "KI-Lösungen",
          text: "Wir automatisieren Geschäftsprozesse mit KI-Agenten: Software auf Basis von künstlicher Intelligenz und maschinellem Lernen, die Routineschritte übernimmt, die bisher Ihre Mitarbeitenden erledigt haben.",
          about: "Wir sehen KI skeptischer als viele: Gut die Hälfte der Ideen à la „Bauen wir doch ein neuronales Netz ein“ lässt sich mit ganz normaler Automatisierung lösen. Wo Menschen aber stundenlang E-Mails, Dokumente und Anfragen sortieren, nimmt ein Agent auf Basis eines Sprachmodells diese Routine tatsächlich ab: Er ordnet Anfragen zu, trägt Daten ins CRM ein und entwirft die Antwort an den Kunden. Wir beginnen mit einem Pilotprojekt auf Ihren Daten – so sehen Sie die Genauigkeitswerte vor der eigentlichen Entwicklung, nicht danach.",
          parts: ["KI-Agenten für Routineschritte: Anfragen zuordnen, CRM pflegen, Antwortentwürfe an Kunden", "Chatbots und Assistenten für Kunden und Mitarbeitende", "Dokumentenerkennung und Datenextraktion", "Klassifizierung von Anfragen, Suche in der Wissensdatenbank", "Bedarfsprognosen und Datenanalyse", "Pilotprojekt mit Qualitätsmessung auf Ihren Daten"],
          result: "Eine konkrete Aufgabe, die bisher Menschen von Hand erledigt haben, übernimmt jetzt das System – und ein Mensch behält das Steuer in der Hand."
        },
        crm: {
          title: "CRM- und ERP-Entwicklung",
          text: "Wir bauen CRM und ERP rund um Ihre Abläufe. Ihre Prozesse müssen Sie nicht an die Software anpassen.",
          about: "Ein Standard-CRM funktioniert, solange Ihr Prozess dem aller anderen ähnelt. Sobald Ihre Vertriebsleute die Hälfte ihrer Arbeit in Tabellen erledigen, weil das System „das nicht kann“, ist eine eigene Lösung günstiger. Die Daten übernehmen wir aus Altsystemen und Tabellen, eingeführt wird Abteilung für Abteilung – so steht die Arbeit keinen einzigen Tag still.",
          parts: ["Module für Vertrieb, Lager, Produktion, Finanzen – je nach Bedarf", "Rollen, Berechtigungen, Änderungsprotokoll", "Berichte und Dashboards für die Geschäftsführung", "Datenübernahme aus Tabellen und Altsystemen", "Anbindung an Buchhaltung, Telefonie und E-Mail"],
          result: "Ein System statt eines Tabellen-Zoos. Die Geschäftsführung sieht, wo die Dinge stehen, ohne wöchentliche Berichte aus jeder Abteilung."
        },
        cloud: {
          title: "Cloud-Lösungen",
          text: "Wir verlagern Ihre Infrastruktur zu Amazon Web Services – komplett oder schrittweise – und sorgen dafür, dass sie läuft, ohne dass die Rechnung grundlos steigt.",
          about: "Die Cloud ist nicht immer günstiger als der eigene Server. Sie lohnt sich, wenn die Last stark schwankt, wenn Ausfallsicherheit gefragt ist oder wenn eine neue Umgebung in Minuten statt in einer Woche stehen muss. Deshalb beginnt ein Umzug mit einem Audit und einer Kostenrechnung, läuft in Etappen und hat bei jedem Schritt einen Rückfallplan.",
          parts: ["Audit der bestehenden Infrastruktur und Kostenrechnung", "AWS-Architektur und Migrationsplan", "Umzug von Servern, Datenbanken und Dateien", "Datensicherung und Monitoring", "Kostenoptimierung nach dem Umzug"],
          result: "Eine Infrastruktur, die den Ausfall eines Servers übersteht, und eine Cloud-Rechnung, die Sie wirklich nachvollziehen können."
        },
        redhat: {
          title: "Unternehmensinfrastruktur auf Red Hat",
          text: "Wir bauen die IT-Infrastruktur Ihres Unternehmens auf Red Hat auf: Server mit Red Hat Enterprise Linux, die Container-Plattform OpenShift, Automatisierung mit Ansible.",
          about: "Red Hat ist die richtige Wahl, wenn eine Infrastruktur jahrelang laufen und Audits bestehen soll, statt nur im Kopf eines einzigen Administrators zu existieren. Das Abonnement zahlt sich durch Herstellersupport und einen langen Lebenszyklus aus – bei Red Hat Enterprise Linux sind das zehn Jahre. Wir planen alles für Ihre Workloads und halten die Serverkonfiguration in Ansible fest: Jede Maschine lässt sich nach Playbook neu aufsetzen, ohne Rätselraten, wie sie damals eingerichtet wurde. Red Hat ist unser Partner, daher helfen wir auch bei Abonnements und Herstellersupport.",
          parts: ["Audit der bestehenden Server und Migrationsplan", "Red Hat Enterprise Linux mit zentral verwalteten Updates über Red Hat Satellite", "Container-Plattform OpenShift für Ihre Anwendungen", "Automatisierte Konfiguration und Bereitstellung mit Ansible", "Zentrale Verwaltung von Benutzerkonten und Zugriffsrechten (Identity Management)", "Monitoring, Backups und Dokumentation für Ihr Team"],
          result: "Eine Infrastruktur, die sich prüfen, reproduzieren und an ein anderes Team übergeben lässt – ohne dass das Wissen mit einer einzigen Person geht."
        },
        api: {
          title: "APIs und Integrationen",
          text: "Wir entwerfen APIs für Ihre Systeme und verbinden sie mit den Diensten, die Sie bereits nutzen.",
          about: "Am häufigsten sehen wir doppelt erfasste Daten: Bestellungen von der Website werden von Hand in die Warenwirtschaft abgetippt, Zahlungen in einer Tabelle abgeglichen. Eine Integration nimmt Ihnen diese Arbeit ab – und die Fehler, die dabei entstehen. Das Monitoring richten wir gesondert ein, denn Integrationen fallen lautlos aus, wenn ein Partner seine API ändert, und das erfahren Sie besser vom System als von einem Kunden.",
          parts: ["API-Design und Dokumentation", "Zahlungsanbieter, Versanddienste, CRM, Buchhaltung", "Datenaustausch zwischen internen Systemen", "Warteschlangen und Wiederholungsversuche bei Fehlern", "Monitoring und Benachrichtigungen"],
          result: "Daten werden einmal erfasst und landen von selbst dort, wo sie gebraucht werden."
        },
        support: {
          title: "Technischer Support",
          text: "Wir halten Ihre IT-Systeme am Laufen und entwickeln sie weiter – auch solche, die nicht von uns stammen.",
          about: "Fehler beheben ist nur ein Teil der Arbeit. Dazu kommen Sicherheitsupdates, die Lücken schließen, ein Monitoring, das einen Ausfall vor den Nutzern bemerkt, und kleine Verbesserungen nebenbei. Stammt das System von einem anderen Dienstleister, beginnen wir mit einem Audit und schreiben die Dokumentation – ohne sie ist jede Änderung ein Glücksspiel.",
          parts: ["Monitoring von Verfügbarkeit und Fehlern", "Fehlerbehebung und Sicherheitsupdates", "Backups und Wiederherstellungstests", "Geplante Verbesserungen und neue Funktionen", "Audit und Dokumentation von Fremdsystemen"],
          result: "Das System läuft, und das Team weiß, wie es aufgebaut ist."
        }
      }
    },
    fr: {
      note: "Nous choisissons la pile technique en fonction de la tâche, jamais l'inverse. Parfois, la réponse honnête est un service prêt à l'emploi sur abonnement\u00a0: nous vous le dirons, même s'il ne nous reste alors rien à développer.",
      items: {
        concept: {
          title: "Conception de solutions informatiques",
          text: "Nous déterminons ce que le système doit réellement faire et le formalisons de façon compréhensible aussi bien pour les métiers que pour les développeurs.",
          about: "Les erreurs les plus coûteuses surviennent avant la première ligne de code, quand on construit un système pour un problème que personne n'a vraiment formulé. Nous ne parlons donc pas seulement à la direction, mais aussi à la comptabilité, à l'entrepôt, aux commerciaux\u00a0: à tous ceux qui travailleront chaque jour dans ce système. Il arrive qu'ensuite nous conseillions de ne rien développer et de paramétrer un produit existant. C'est aussi une très bonne conclusion.",
          parts: ["Entretiens avec le personnel et analyse des processus actuels", "Exigences métier et scénarios d'utilisation", "Comparatif\u00a0: produit du marché ou développement sur mesure", "Cahier des charges avec estimation des délais et du budget par phase"],
          result: "Un document à partir duquel n'importe quelle équipe, la nôtre ou une autre, peut chiffrer le projet et se mettre au travail."
        },
        saas: {
          title: "Développement SaaS",
          text: "Nous concevons et développons des plateformes SaaS, de la première version pour les clients pilotes jusqu'au service où chaque client dispose de son espace, de son offre et de son tableau de bord.",
          about: "En SaaS, l'argent ne vient pas du code, mais de la rapidité avec laquelle un nouveau client passe de l'inscription au paiement, puis au travail effectif, sans jamais appeler le support. Nous intégrons dès le départ le multi-tenant, la facturation et les droits d'accès\u00a0: les ajouter après coup, avec des clients déjà à bord, coûte plusieurs fois plus cher. Et la première version sort tôt, car les vrais utilisateurs montrent vite quelles fonctions ne servaient à rien.",
          parts: ["Architecture multi-tenant avec données clients isolées", "Inscription, offres, abonnements, paiement en ligne", "Espaces clients, rôles et droits d'accès", "Intégrations et API publique pour vos clients", "Montée en charge au rythme de la croissance"],
          result: "Un produit qui se vend par abonnement, et non un projet à déployer à la main chez chaque client."
        },
        web: {
          title: "Développement web",
          text: "Nous réalisons des sites d'entreprise, des places de marché, des boutiques en ligne, des systèmes de réservation et des outils web internes. Sur mesure, sans modèles tout faits.",
          about: "Un site d'entreprise se mesure en demandes et en commandes\u00a0; son allure dans un portfolio passe loin derrière. Avant de commencer, nous convenons donc de ce qui compte comme résultat, et les statistiques sont actives dès la mise en ligne, pas six mois plus tard quand quelqu'un y pense. La technologie est choisie à la bonne taille\u00a0: une landing page n'a que faire d'une plateforme lourde, et une place de marché ne tiendra pas dans un constructeur de sites.",
          parts: ["Prototype et design des interfaces", "Frontend, backend et interface d'administration", "Intégration paiement, livraison, CRM et comptabilité", "Bases SEO, vitesse de chargement, statistiques", "Mise en ligne et maintenance"],
          result: "Un service web dont vous voyez combien de demandes et de chiffre d'affaires il rapporte."
        },
        mobile: {
          title: "Applications mobiles",
          text: "Nous développons des applications iOS et Android, avec la partie serveur et l'interface d'administration qui les font tourner.",
          about: "Une application est rentable quand on y revient\u00a0: pour recommander, suivre un statut, consulter ses points de fidélité. Si un client ne passe qu'une fois par an, un bon site mobile coûte moins cher, et nous vous le dirons avant de commencer, pas après. Natif ou multiplateforme\u00a0: tout dépend du budget et de la place que prennent l'appareil photo, la géolocalisation et le fonctionnement hors ligne.",
          parts: ["Applications iOS et Android", "Partie serveur et API", "Interface d'administration\u00a0: contenus, commandes, utilisateurs", "Notifications push et statistiques", "Publication sur l'App Store et Google Play"],
          result: "Une application qui passe la validation des stores et que votre équipe gère sans appeler un développeur."
        },
        ai: {
          title: "Solutions d'intelligence artificielle",
          text: "Nous automatisons les processus métier avec des agents d'IA\u00a0: des logiciels fondés sur l'intelligence artificielle et l'apprentissage automatique, qui accomplissent les tâches de routine jusque-là faites par vos équipes.",
          about: "Nous sommes plus sceptiques que beaucoup vis-à-vis de l'IA\u00a0: une bonne moitié des idées du type «\u00a0ajoutons un réseau de neurones\u00a0» se règlent par une simple automatisation. Mais quand des personnes passent des heures à trier e-mails, documents et demandes, un agent fondé sur un modèle de langage supprime vraiment cette routine\u00a0: il trie les demandes, saisit les données dans le CRM et prépare un brouillon de réponse au client. Nous commençons par un pilote sur vos données\u00a0: vous voyez les chiffres de précision avant le développement principal, pas après.",
          parts: ["Agents d'IA pour les tâches de routine\u00a0: tri des demandes, saisie dans le CRM, brouillons de réponses aux clients", "Chatbots et assistants pour les clients et le personnel", "Reconnaissance de documents et extraction de données", "Classification des demandes, recherche dans la base de connaissances", "Prévision de la demande et analyse de données", "Pilote avec mesure de la qualité sur vos données"],
          result: "Une tâche précise, autrefois faite à la main, est désormais assurée par le système, et c'est toujours un humain qui tient la barre."
        },
        crm: {
          title: "Développement CRM et ERP",
          text: "Nous construisons votre CRM et votre ERP autour de vos processus. Vous n'aurez pas à plier vos processus au logiciel.",
          about: "Un CRM du marché convient tant que votre processus ressemble à celui de tout le monde. Dès que vos commerciaux font la moitié de leur travail dans des tableurs parce que le système «\u00a0ne sait pas faire ça\u00a0», un outil sur mesure revient moins cher. Nous reprenons les données des anciens systèmes et des tableurs, et le déploiement se fait service par service, pour que le travail ne s'arrête pas un seul jour.",
          parts: ["Modules ventes, stock, production, finances\u00a0: selon vos besoins", "Rôles, droits d'accès, journal des actions", "Rapports et tableaux de bord pour la direction", "Migration des données depuis les tableurs et les anciens systèmes", "Liaison avec la comptabilité, la téléphonie et la messagerie"],
          result: "Un seul système au lieu d'une ménagerie de tableurs. La direction voit où en sont les choses sans rapport hebdomadaire de chaque service."
        },
        cloud: {
          title: "Solutions cloud",
          text: "Nous migrons votre infrastructure vers Amazon Web Services, en totalité ou par étapes, et veillons à ce qu'elle fonctionne sans que la facture grimpe sans raison.",
          about: "Le cloud n'est pas toujours moins cher que votre propre serveur. Il devient rentable quand la charge fait des bonds, quand il faut de la tolérance aux pannes, ou quand un nouvel environnement doit être prêt en quelques minutes et non en une semaine. Une migration commence donc par un audit et une estimation des coûts, puis avance par étapes, avec un plan de retour arrière à chacune d'elles.",
          parts: ["Audit de l'infrastructure actuelle et estimation des coûts", "Architecture AWS et plan de migration", "Migration des serveurs, bases de données et fichiers", "Sauvegardes et supervision", "Optimisation des coûts après la migration"],
          result: "Une infrastructure qui survit à la panne d'un serveur, et une facture cloud que vous comprenez vraiment."
        },
        redhat: {
          title: "Infrastructure d'entreprise sous Red Hat",
          text: "Nous bâtissons l'infrastructure informatique de votre entreprise sur Red Hat\u00a0: serveurs sous Red Hat Enterprise Linux, plateforme de conteneurs OpenShift, automatisation avec Ansible.",
          about: "On choisit Red Hat quand l'infrastructure doit tourner pendant des années et passer des audits, au lieu de n'exister que dans la tête d'un seul administrateur. L'abonnement se justifie par le support de l'éditeur et un long cycle de vie\u00a0: dix ans pour Red Hat Enterprise Linux. Nous concevons tout en fonction de vos charges et consignons la configuration des serveurs dans Ansible\u00a0: n'importe quelle machine peut être reconstruite à partir d'un playbook, sans se demander comment on l'avait configurée à l'époque. Red Hat est notre partenaire, nous pouvons donc aussi vous aider pour les abonnements et le support de l'éditeur.",
          parts: ["Audit des serveurs actuels et plan de migration", "Red Hat Enterprise Linux, mises à jour centralisées via Red Hat Satellite", "Plateforme de conteneurs OpenShift pour vos applications", "Automatisation de la configuration et du déploiement avec Ansible", "Gestion centralisée des identités et des accès (Identity Management)", "Supervision, sauvegardes et documentation pour votre équipe"],
          result: "Une infrastructure que l'on peut auditer, reproduire et confier à une autre équipe, sans que le savoir-faire parte avec une seule personne."
        },
        api: {
          title: "API et intégrations",
          text: "Nous concevons des API pour vos systèmes et les connectons aux services que vous utilisez déjà.",
          about: "Ce que nous voyons le plus souvent, ce sont des données saisies deux fois\u00a0: les commandes du site retapées à la main dans le logiciel de gestion, les paiements rapprochés dans un tableur. Une intégration supprime ce travail et les erreurs qu'il engendre. La supervision est mise en place à part, car les intégrations tombent en panne sans bruit quand un partenaire modifie son API, et mieux vaut l'apprendre du système que d'un client.",
          parts: ["Conception et documentation d'API", "Prestataires de paiement, transporteurs, CRM, comptabilité", "Échange de données entre systèmes internes", "Files d'attente et nouvelles tentatives en cas d'échec", "Supervision et alertes"],
          result: "Les données sont saisies une seule fois et arrivent d'elles-mêmes là où l'on en a besoin."
        },
        support: {
          title: "Support technique",
          text: "Nous maintenons vos systèmes informatiques en état de marche et les faisons évoluer, y compris ceux que nous n'avons pas développés.",
          about: "Corriger les bugs n'est qu'une partie du travail. Il y a aussi les mises à jour de sécurité qui comblent les failles, la supervision qui repère une panne avant les utilisateurs, et les petites améliorations au fil de l'eau. Si le système vient d'un autre prestataire, nous commençons par un audit et rédigeons la documentation, car sans elle chaque modification est une loterie.",
          parts: ["Supervision de la disponibilité et des erreurs", "Correction des bugs et mises à jour de sécurité", "Sauvegardes et tests de restauration", "Améliorations et nouvelles fonctions planifiées", "Audit et documentation de systèmes tiers"],
          result: "Le système fonctionne, et l'équipe sait comment il est construit."
        }
      }
    },
    es: {
      note: "Elegimos la tecnología según la tarea, nunca al revés. A veces la respuesta honesta es un servicio ya hecho por suscripción, y se lo diremos aunque eso nos deje sin nada que desarrollar.",
      items: {
        concept: {
          title: "Concepto de la solución de TI",
          text: "Averiguamos qué tiene que hacer realmente el sistema y lo dejamos por escrito de forma que lo entiendan tanto el negocio como los desarrolladores.",
          about: "Los errores más caros se cometen antes de la primera línea de código, cuando se construye un sistema para un problema que nadie ha llegado a definir bien. Por eso no hablamos solo con la dirección, sino también con contabilidad, el almacén y el equipo comercial: con todos los que trabajarán cada día en ese sistema. A veces, después, la recomendación es no desarrollar nada y configurar un producto que ya existe. También es un buen resultado.",
          parts: ["Entrevistas con el personal y análisis de los procesos actuales", "Requisitos de negocio y escenarios de uso", "Comparativa: producto estándar o desarrollo a medida", "Especificación técnica con plazos y presupuesto por fases"],
          result: "Un documento con el que cualquier equipo, el nuestro u otro, puede presupuestar el proyecto y ponerse manos a la obra."
        },
        saas: {
          title: "Desarrollo SaaS",
          text: "Diseñamos y construimos plataformas SaaS, desde una primera versión para clientes piloto hasta un servicio en el que cada cliente tiene su propio espacio, plan y panel.",
          about: "En un SaaS, el dinero no lo trae el código, sino la rapidez con la que un cliente nuevo pasa de registrarse a pagar y a trabajar de verdad, sin llamar ni una vez a soporte. La arquitectura multiinquilino, la facturación y los permisos los incorporamos desde el principio: rehacerlos con los clientes ya dentro cuesta varias veces más. Y la primera versión sale pronto, porque los usuarios reales enseguida muestran qué funciones sobraban.",
          parts: ["Arquitectura multiinquilino con los datos de cada cliente aislados", "Registro, planes, suscripciones, pago en línea", "Paneles de cliente, roles y permisos", "Integraciones y una API pública para sus clientes", "Escalado a medida que crece la carga"],
          result: "Un producto que se vende por suscripción, no un proyecto que hay que implantar a mano cada vez."
        },
        web: {
          title: "Desarrollo web",
          text: "Desarrollamos webs corporativas, marketplaces, tiendas online, sistemas de reservas y herramientas web internas. A medida, sin plantillas.",
          about: "Una web de empresa se mide en solicitudes y pedidos; cómo queda en un portfolio es lo de menos. Por eso, antes de empezar, acordamos qué se considera un resultado, y la analítica se activa con el lanzamiento, no seis meses después, cuando alguien se acuerde. La tecnología se elige a la medida: una landing page no necesita una plataforma pesada, y un marketplace no cabe en un creador de webs.",
          parts: ["Prototipo y diseño de interfaces", "Frontend, backend y panel de administración", "Integración con pagos, envíos, CRM y contabilidad", "Base SEO, velocidad de carga, analítica", "Lanzamiento y mantenimiento"],
          result: "Un servicio web en el que usted ve cuántas solicitudes y cuánto dinero aporta."
        },
        mobile: {
          title: "Aplicaciones móviles",
          text: "Desarrollamos aplicaciones para iOS y Android, junto con la parte de servidor y el panel de administración que las hacen funcionar.",
          about: "Una aplicación se amortiza cuando la gente vuelve a ella: para repetir un pedido, consultar un estado, ver sus puntos. Si un cliente entra una vez al año, una buena web móvil sale más barata, y se lo diremos antes de empezar, no después. Nativa o multiplataforma: lo deciden el presupuesto y cuánto depende la aplicación de la cámara, la geolocalización y el trabajo sin conexión.",
          parts: ["Aplicaciones para iOS y Android", "Parte de servidor y API", "Panel de administración: contenidos, pedidos, usuarios", "Notificaciones push y analítica", "Publicación en App Store y Google Play"],
          result: "Una aplicación que supera la revisión de las tiendas y que su equipo gestiona sin llamar a un desarrollador."
        },
        ai: {
          title: "Soluciones con inteligencia artificial",
          text: "Automatizamos procesos de negocio con agentes de IA: software basado en inteligencia artificial y aprendizaje automático que se encarga de los pasos rutinarios que antes hacía su personal.",
          about: "Somos más escépticos con la IA que la mayoría: buena parte de las ideas del tipo «añadamos una red neuronal» se resuelven con automatización de toda la vida. Pero cuando hay personas que pasan horas clasificando correos, documentos y solicitudes, un agente basado en un modelo de lenguaje sí elimina esa rutina: clasifica las solicitudes, introduce los datos en el CRM y prepara un borrador de respuesta al cliente. Empezamos con un piloto sobre sus datos, para que vea las cifras de precisión antes del desarrollo principal, no después.",
          parts: ["Agentes de IA para pasos rutinarios: clasificación de solicitudes, registro en el CRM, borradores de respuesta a clientes", "Chatbots y asistentes para clientes y personal", "Reconocimiento de documentos y extracción de datos", "Clasificación de solicitudes, búsqueda en la base de conocimiento", "Previsión de la demanda y análisis de datos", "Piloto con medición de la calidad sobre sus datos"],
          result: "Un trabajo concreto que antes hacían personas a mano ahora lo hace el sistema, y una persona sigue al volante."
        },
        crm: {
          title: "Desarrollo de CRM y ERP",
          text: "Construimos CRM y ERP en torno a sus procesos. No tendrá que adaptar los procesos al software.",
          about: "Un CRM estándar funciona bien mientras su proceso se parezca al de todo el mundo. Cuando los comerciales llevan la mitad de su trabajo en hojas de cálculo porque el sistema «no sabe hacer eso», uno propio sale más barato. Migramos los datos de los sistemas antiguos y las hojas de cálculo, y lo implantamos departamento a departamento, para que el trabajo no se detenga ni un solo día.",
          parts: ["Módulos de ventas, almacén, producción y finanzas, los que necesite", "Roles, permisos, registro de actividad", "Informes y paneles para la dirección", "Migración de datos desde hojas de cálculo y sistemas antiguos", "Conexión con contabilidad, telefonía y correo"],
          result: "Un único sistema en lugar de un zoológico de hojas de cálculo. La dirección ve cómo van las cosas sin informes semanales de cada departamento."
        },
        cloud: {
          title: "Soluciones en la nube",
          text: "Trasladamos su infraestructura a Amazon Web Services, entera o por partes, y nos aseguramos de que funcione sin que la factura suba sin motivo.",
          about: "La nube no siempre es más barata que un servidor propio. Compensa cuando la carga da saltos, cuando hace falta tolerancia a fallos o cuando un entorno nuevo debe estar listo en minutos y no en una semana. Por eso la migración empieza con una auditoría y un cálculo de costes, avanza por etapas y en cada paso hay un plan de marcha atrás.",
          parts: ["Auditoría de la infraestructura actual y cálculo de costes", "Arquitectura en AWS y plan de migración", "Traslado de servidores, bases de datos y archivos", "Copias de seguridad y monitorización", "Optimización de costes tras la migración"],
          result: "Una infraestructura que sobrevive a la caída de un servidor y una factura de la nube que realmente se entiende."
        },
        redhat: {
          title: "Infraestructura empresarial con Red Hat",
          text: "Construimos la infraestructura de TI de su empresa con Red Hat: servidores con Red Hat Enterprise Linux, la plataforma de contenedores OpenShift y automatización con Ansible.",
          about: "Red Hat es la opción cuando la infraestructura tiene que funcionar durante años y superar auditorías, en lugar de vivir en la cabeza de un solo administrador. La suscripción se justifica por el soporte del fabricante y un ciclo de vida largo: en Red Hat Enterprise Linux son diez años. Diseñamos todo según sus cargas de trabajo y dejamos la configuración de los servidores escrita en Ansible, de modo que cualquier máquina se puede reconstruir a partir de un playbook y no de lo que alguien recuerde sobre cómo se configuró. Red Hat es nuestro socio, así que también podemos ayudarle con las suscripciones y el soporte del fabricante.",
          parts: ["Auditoría de los servidores actuales y plan de migración", "Red Hat Enterprise Linux, con actualizaciones centralizadas mediante Red Hat Satellite", "Plataforma de contenedores OpenShift para sus aplicaciones", "Automatización de la configuración y el despliegue con Ansible", "Gestión centralizada de identidades y accesos (Identity Management)", "Monitorización, copias de seguridad y documentación para su equipo"],
          result: "Una infraestructura que se puede auditar, reproducir y entregar a otro equipo sin que el conocimiento se vaya con una sola persona."
        },
        api: {
          title: "API e integraciones",
          text: "Diseñamos API para sus sistemas y los conectamos con los servicios que ya utiliza.",
          about: "Lo que más vemos son datos que se introducen dos veces: los pedidos de la web se vuelven a teclear a mano en el sistema contable y los pagos se cuadran en una hoja de cálculo. Una integración elimina ese trabajo y los errores que genera. La monitorización se configura aparte, porque las integraciones fallan en silencio cuando un socio cambia su API, y es mejor enterarse por el sistema que por un cliente.",
          parts: ["Diseño y documentación de API", "Pasarelas de pago, empresas de envío, CRM, contabilidad", "Intercambio de datos entre sistemas internos", "Colas y reintentos ante fallos", "Monitorización y alertas"],
          result: "Los datos se introducen una sola vez y llegan solos allí donde hacen falta."
        },
        support: {
          title: "Soporte técnico",
          text: "Mantenemos sus sistemas de TI en marcha y los seguimos desarrollando, incluidos los que no hicimos nosotros.",
          about: "Corregir errores es solo una parte del trabajo. También están las actualizaciones de seguridad que cierran brechas, la monitorización que detecta un fallo antes que los usuarios y las pequeñas mejoras sobre la marcha. Si el sistema viene de otro proveedor, empezamos con una auditoría y redactamos la documentación, porque sin ella cada cambio es una lotería.",
          parts: ["Monitorización de disponibilidad y errores", "Corrección de errores y actualizaciones de seguridad", "Copias de seguridad y pruebas de restauración", "Mejoras y nuevas funciones planificadas", "Auditoría y documentación de sistemas de terceros"],
          result: "El sistema funciona y el equipo sabe cómo está hecho."
        }
      }
    },
    pt: {
      note: "Escolhemos a tecnologia em função da tarefa, nunca o contrário. Por vezes, a resposta honesta é um serviço pronto por subscrição, e dizemo-lo mesmo que isso nos deixe sem nada para desenvolver.",
      items: {
        concept: {
          title: "Conceção de soluções de TI",
          text: "Apuramos o que o sistema tem realmente de fazer e registamo-lo de forma que tanto o negócio como os programadores o compreendam.",
          about: "Os erros mais caros acontecem antes da primeira linha de código, quando se constrói um sistema para um problema que ninguém chegou a definir bem. Por isso, não falamos só com a direção, mas também com a contabilidade, o armazém e a equipa comercial: com todos os que vão trabalhar no sistema todos os dias. Por vezes, a conclusão é não desenvolver nada e configurar um produto que já existe. Também é um bom resultado.",
          parts: ["Entrevistas aos colaboradores e análise dos processos atuais", "Requisitos de negócio e cenários de utilização", "Comparação: produto pronto ou desenvolvimento à medida", "Caderno de encargos com estimativa de prazos e orçamento por fase"],
          result: "Um documento com o qual qualquer equipa, a nossa ou outra, pode orçamentar o projeto e começar a trabalhar."
        },
        saas: {
          title: "Desenvolvimento SaaS",
          text: "Concebemos e construímos plataformas SaaS, desde uma primeira versão para clientes-piloto até um serviço em que cada cliente tem o seu próprio espaço, plano e painel.",
          about: "Num SaaS, o dinheiro não vem do código, mas da rapidez com que um novo cliente passa do registo ao pagamento e ao trabalho efetivo, sem nunca ligar para o suporte. A arquitetura multi-inquilino, a faturação e as permissões ficam previstas desde o início: refazê-las com clientes já lá dentro custa várias vezes mais. E a primeira versão sai cedo, porque os utilizadores reais depressa mostram que funcionalidades estavam a mais.",
          parts: ["Arquitetura multi-inquilino com os dados de cada cliente isolados", "Registo, planos, subscrições, pagamento online", "Áreas de cliente, perfis e permissões", "Integrações e uma API pública para os seus clientes", "Escalabilidade à medida que a carga cresce"],
          result: "Um produto que se vende por subscrição, e não um projeto que é preciso implementar à mão de cada vez."
        },
        web: {
          title: "Desenvolvimento web",
          text: "Desenvolvemos sites empresariais, marketplaces, lojas online, sistemas de reservas e ferramentas web internas. À medida, sem modelos.",
          about: "Um site empresarial mede-se em pedidos e encomendas; o aspeto no portefólio fica muito atrás. Por isso, antes de começar, combinamos o que conta como resultado, e a análise de dados fica ativa no lançamento, não seis meses depois, quando alguém se lembrar. A tecnologia é escolhida à medida: uma landing page não precisa de uma plataforma pesada, e um marketplace não cabe num criador de sites.",
          parts: ["Protótipo e design de interfaces", "Frontend, backend e painel de administração", "Integração com pagamentos, entregas, CRM e contabilidade", "Base de SEO, velocidade de carregamento, análise de dados", "Lançamento e acompanhamento"],
          result: "Um serviço web em que se vê quantos pedidos e quanto dinheiro traz."
        },
        mobile: {
          title: "Aplicações móveis",
          text: "Desenvolvemos aplicações para iOS e Android, com a parte de servidor e o painel de administração que as fazem funcionar.",
          about: "Uma aplicação compensa quando as pessoas voltam a ela: para repetir uma encomenda, ver um estado, consultar os pontos. Se um cliente só aparece uma vez por ano, um bom site móvel fica mais barato, e dizemo-lo antes de começar, não depois. Nativa ou multiplataforma: decidem o orçamento e o quanto a aplicação depende da câmara, da localização e do funcionamento sem rede.",
          parts: ["Aplicações para iOS e Android", "Parte de servidor e API", "Painel de administração: conteúdos, encomendas, utilizadores", "Notificações push e análise de dados", "Publicação na App Store e no Google Play"],
          result: "Uma aplicação que passa a revisão das lojas e que a sua equipa gere sem chamar um programador."
        },
        ai: {
          title: "Soluções com inteligência artificial",
          text: "Automatizamos processos de negócio com agentes de IA: software baseado em inteligência artificial e aprendizagem automática que trata dos passos de rotina que antes eram feitos pelos seus colaboradores.",
          about: "Somos mais céticos em relação à IA do que muitos: boa parte das ideias do género «vamos acrescentar uma rede neuronal» resolve-se com automação simples. Mas quando há pessoas a passar horas a triar e-mails, documentos e pedidos, um agente baseado num modelo de linguagem elimina mesmo essa rotina: faz a triagem dos pedidos, introduz os dados no CRM e prepara um rascunho da resposta ao cliente. Começamos com um piloto sobre os seus dados, para que veja os números de precisão antes do desenvolvimento principal, e não depois.",
          parts: ["Agentes de IA para passos de rotina: triagem de pedidos, registo no CRM, rascunhos de respostas a clientes", "Chatbots e assistentes para clientes e colaboradores", "Reconhecimento de documentos e extração de dados", "Classificação de pedidos, pesquisa na base de conhecimento", "Previsão da procura e análise de dados", "Piloto com medição da qualidade sobre os seus dados"],
          result: "Um trabalho concreto que antes era feito à mão passa a ser feito pelo sistema, com uma pessoa sempre ao volante."
        },
        crm: {
          title: "Desenvolvimento de CRM e ERP",
          text: "Construímos CRM e ERP à volta dos seus processos. Não terá de adaptar os processos ao software.",
          about: "Um CRM pronto a usar funciona enquanto o seu processo for parecido com o de toda a gente. Quando os comerciais fazem metade do trabalho em folhas de cálculo porque o sistema «não sabe fazer isso», um sistema próprio sai mais barato. Migramos os dados dos sistemas antigos e das folhas de cálculo e implementamos departamento a departamento, para que o trabalho não pare um único dia.",
          parts: ["Módulos de vendas, armazém, produção e finanças, os que forem precisos", "Perfis, permissões, registo de ações", "Relatórios e painéis para a direção", "Migração de dados de folhas de cálculo e sistemas antigos", "Ligação à contabilidade, telefonia e e-mail"],
          result: "Um único sistema em vez de um jardim zoológico de folhas de cálculo. A direção vê como estão as coisas sem relatórios semanais de cada departamento."
        },
        cloud: {
          title: "Soluções na cloud",
          text: "Migramos a sua infraestrutura para a Amazon Web Services, na totalidade ou por partes, e garantimos que funciona sem que a fatura suba sem razão.",
          about: "A cloud nem sempre é mais barata do que um servidor próprio. Compensa quando a carga oscila muito, quando é precisa tolerância a falhas ou quando um novo ambiente tem de estar pronto em minutos e não numa semana. Por isso, a migração começa com uma auditoria e um cálculo de custos, avança por etapas e tem um plano de reversão em cada passo.",
          parts: ["Auditoria da infraestrutura atual e cálculo de custos", "Arquitetura na AWS e plano de migração", "Migração de servidores, bases de dados e ficheiros", "Cópias de segurança e monitorização", "Otimização de custos após a migração"],
          result: "Uma infraestrutura que sobrevive à falha de um servidor e uma fatura da cloud que se percebe de facto."
        },
        redhat: {
          title: "Infraestrutura empresarial em Red Hat",
          text: "Construímos a infraestrutura de TI da sua empresa em Red Hat: servidores com Red Hat Enterprise Linux, a plataforma de contentores OpenShift e automação com Ansible.",
          about: "A Red Hat é a escolha certa quando a infraestrutura tem de funcionar durante anos e passar auditorias, em vez de viver na cabeça de um único administrador. A subscrição justifica-se pelo suporte do fabricante e por um ciclo de vida longo: no Red Hat Enterprise Linux são dez anos. Concebemos tudo para as suas cargas de trabalho e registamos a configuração dos servidores em Ansible, para que qualquer máquina possa ser reconstruída a partir de um playbook e não da memória de alguém sobre como foi configurada. A Red Hat é nossa parceira, por isso também ajudamos com as subscrições e o suporte do fabricante.",
          parts: ["Auditoria dos servidores atuais e plano de migração", "Red Hat Enterprise Linux, com atualizações centralizadas no Red Hat Satellite", "Plataforma de contentores OpenShift para as suas aplicações", "Automação da configuração e da implementação com Ansible", "Gestão centralizada de identidades e acessos (Identity Management)", "Monitorização, cópias de segurança e documentação para a sua equipa"],
          result: "Uma infraestrutura que pode ser auditada, reproduzida e entregue a outra equipa sem que o conhecimento saia com uma única pessoa."
        },
        api: {
          title: "APIs e integrações",
          text: "Concebemos APIs para os seus sistemas e ligamo-los aos serviços que já utiliza.",
          about: "O que mais vemos são dados introduzidos duas vezes: as encomendas do site são reescritas à mão no sistema de faturação e os pagamentos são conferidos numa folha de cálculo. Uma integração elimina esse trabalho e os erros que ele gera. A monitorização é configurada à parte, porque as integrações falham em silêncio quando um parceiro altera a sua API, e é melhor sabê-lo pelo sistema do que por um cliente.",
          parts: ["Conceção e documentação de APIs", "Prestadores de pagamento, transportadoras, CRM, contabilidade", "Troca de dados entre sistemas internos", "Filas e novas tentativas em caso de falha", "Monitorização e alertas"],
          result: "Os dados são introduzidos uma só vez e chegam sozinhos aonde são precisos."
        },
        support: {
          title: "Suporte técnico",
          text: "Mantemos os seus sistemas de TI a funcionar e continuamos a desenvolvê-los, incluindo os que não fomos nós a fazer.",
          about: "Corrigir erros é só uma parte do trabalho. Há também as atualizações de segurança que fecham falhas, a monitorização que deteta um problema antes dos utilizadores e as pequenas melhorias pelo caminho. Se o sistema veio de outro fornecedor, começamos por uma auditoria e escrevemos a documentação, porque sem ela cada alteração é uma lotaria.",
          parts: ["Monitorização da disponibilidade e de erros", "Correção de erros e atualizações de segurança", "Cópias de segurança e testes de reposição", "Melhorias e novas funcionalidades planeadas", "Auditoria e documentação de sistemas de terceiros"],
          result: "O sistema funciona e a equipa sabe como está construído."
        }
      }
    },
    it: {
      note: "Scegliamo lo stack in base al compito, mai il contrario. A volte la risposta onesta è un servizio già pronto in abbonamento: in quel caso lo diciamo, anche se a noi non resta nulla da sviluppare.",
      items: {
        concept: {
          title: "Ideazione della soluzione IT",
          text: "Chiariamo che cosa deve fare davvero il sistema e lo mettiamo per iscritto in modo che lo capiscano sia il business sia gli sviluppatori.",
          about: "Gli errori più costosi avvengono prima della prima riga di codice, quando si costruisce un sistema per un problema che nessuno ha davvero messo a fuoco. Per questo non parliamo solo con la direzione, ma anche con la contabilità, il magazzino, i commerciali: con tutti quelli che lavoreranno ogni giorno in quel sistema. A volte, alla fine, il consiglio è di non sviluppare nulla e di configurare un prodotto esistente. Anche questo è un ottimo risultato.",
          parts: ["Interviste al personale e analisi dei processi attuali", "Requisiti di business e scenari d'uso", "Confronto: prodotto standard o sviluppo su misura", "Specifica tecnica con stima di tempi e budget per fase"],
          result: "Un documento con cui qualsiasi team, il nostro o un altro, può stimare il progetto e mettersi al lavoro."
        },
        saas: {
          title: "Sviluppo SaaS",
          text: "Progettiamo e realizziamo piattaforme SaaS, dalla prima versione per i clienti pilota fino a un servizio in cui ogni cliente ha il proprio spazio, piano tariffario e pannello.",
          about: "Nel SaaS i soldi non li porta il codice, ma la velocità con cui un nuovo cliente passa dalla registrazione al pagamento al lavoro vero e proprio, senza mai chiamare l'assistenza. Multi-tenancy, fatturazione e permessi li prevediamo fin dall'inizio: rifarli quando i clienti sono già dentro costa molte volte di più. E la prima versione esce presto, perché gli utenti reali mostrano subito quali funzioni erano superflue.",
          parts: ["Architettura multi-tenant con dati dei clienti isolati", "Registrazione, piani, abbonamenti, pagamenti online", "Aree clienti, ruoli e permessi", "Integrazioni e un'API pubblica per i Suoi clienti", "Scalabilità al crescere del carico"],
          result: "Un prodotto che si vende in abbonamento, non un progetto da installare a mano ogni volta."
        },
        web: {
          title: "Sviluppo web",
          text: "Realizziamo siti aziendali, marketplace, negozi online, sistemi di prenotazione e strumenti web interni. Su misura, senza template.",
          about: "Un sito aziendale si misura in contatti e ordini; come appare in un portfolio viene molto dopo. Per questo, prima di iniziare, concordiamo che cosa conta come risultato, e gli strumenti di analisi partono con il lancio, non sei mesi dopo quando qualcuno se ne ricorda. La tecnologia è scelta su misura: a una landing page non serve una piattaforma pesante, e un marketplace non entra in un website builder.",
          parts: ["Prototipo e design delle interfacce", "Frontend, backend e pannello di amministrazione", "Integrazione con pagamenti, spedizioni, CRM e contabilità", "Basi SEO, velocità di caricamento, analisi", "Lancio e assistenza continuativa"],
          result: "Un servizio web di cui si vede quanti contatti e quanto fatturato porta."
        },
        mobile: {
          title: "App mobili",
          text: "Sviluppiamo app per iOS e Android, insieme alla parte server e al pannello di amministrazione che le fanno funzionare.",
          about: "Un'app si ripaga quando le persone ci tornano: per riordinare, controllare uno stato, vedere i punti fedeltà. Se un cliente passa una volta l'anno, un buon sito mobile costa meno, e glielo diciamo prima di iniziare, non dopo. Nativa o multipiattaforma: decidono il budget e quanto l'app dipende da fotocamera, geolocalizzazione e funzionamento offline.",
          parts: ["App per iOS e Android", "Parte server e API", "Pannello di amministrazione: contenuti, ordini, utenti", "Notifiche push e analisi", "Pubblicazione su App Store e Google Play"],
          result: "Un'app che supera la revisione degli store e che il Suo team gestisce senza chiamare uno sviluppatore."
        },
        ai: {
          title: "Soluzioni di intelligenza artificiale",
          text: "Automatizziamo i processi aziendali con agenti di IA: software basati su intelligenza artificiale e machine learning che svolgono i passaggi di routine prima affidati al personale.",
          about: "Sull'IA siamo più scettici di molti: buona metà delle idee del tipo «aggiungiamo una rete neurale» si risolve con una normale automazione. Ma dove le persone passano ore a smistare e-mail, documenti e richieste, un agente basato su un modello linguistico toglie davvero di mezzo questa routine: smista le richieste, inserisce i dati nel CRM e prepara una bozza di risposta al cliente. Partiamo da un progetto pilota sui Suoi dati, così vede i numeri sull'accuratezza prima dello sviluppo vero e proprio, non dopo.",
          parts: ["Agenti di IA per i passaggi di routine: smistamento delle richieste, inserimento nel CRM, bozze di risposta ai clienti", "Chatbot e assistenti per clienti e personale", "Riconoscimento di documenti ed estrazione dei dati", "Classificazione delle richieste, ricerca nella knowledge base", "Previsione della domanda e analisi dei dati", "Progetto pilota con misura della qualità sui Suoi dati"],
          result: "Un lavoro preciso che prima si faceva a mano ora lo svolge il sistema, con una persona sempre al timone."
        },
        crm: {
          title: "Sviluppo CRM ed ERP",
          text: "Costruiamo CRM ed ERP attorno ai Suoi processi. Non dovrà piegare i processi al software.",
          about: "Un CRM standard va bene finché il Suo processo somiglia a quello di tutti gli altri. Quando i commerciali gestiscono metà del lavoro in fogli di calcolo perché il sistema «non lo sa fare», uno proprio costa meno. Trasferiamo i dati dai vecchi sistemi e dai fogli di calcolo e avviamo un reparto alla volta, così il lavoro non si ferma nemmeno un giorno.",
          parts: ["Moduli vendite, magazzino, produzione, finanza: quelli che servono", "Ruoli, permessi, registro delle attività", "Report e dashboard per la direzione", "Migrazione dei dati da fogli di calcolo e vecchi sistemi", "Collegamento con contabilità, telefonia ed e-mail"],
          result: "Un solo sistema invece di uno zoo di fogli di calcolo. La direzione vede come vanno le cose senza report settimanali da ogni reparto."
        },
        cloud: {
          title: "Soluzioni cloud",
          text: "Spostiamo la Sua infrastruttura su Amazon Web Services, tutta o un pezzo alla volta, e facciamo in modo che funzioni senza che la bolletta salga senza motivo.",
          about: "Il cloud non costa sempre meno di un server proprio. Conviene quando il carico fa sbalzi, quando serve tolleranza ai guasti o quando un nuovo ambiente va messo in piedi in pochi minuti anziché in una settimana. Per questo il trasferimento parte da un audit e da una stima dei costi, procede per fasi e a ogni passo c'è un piano di rollback.",
          parts: ["Audit dell'infrastruttura attuale e stima dei costi", "Architettura AWS e piano di migrazione", "Trasferimento di server, database e file", "Backup e monitoraggio", "Ottimizzazione dei costi dopo il trasferimento"],
          result: "Un'infrastruttura che sopravvive al guasto di un server e una bolletta del cloud che si capisce davvero."
        },
        redhat: {
          title: "Infrastruttura aziendale su Red Hat",
          text: "Costruiamo l'infrastruttura IT della Sua azienda su Red Hat: server con Red Hat Enterprise Linux, la piattaforma di container OpenShift, automazione con Ansible.",
          about: "Red Hat è la scelta giusta quando l'infrastruttura deve funzionare per anni e superare gli audit, invece di vivere nella testa di un solo amministratore. L'abbonamento si ripaga con il supporto del produttore e un lungo ciclo di vita: per Red Hat Enterprise Linux sono dieci anni. Progettiamo tutto sui Suoi carichi di lavoro e mettiamo per iscritto la configurazione dei server in Ansible, così qualsiasi macchina si può ricostruire da un playbook anziché dalla memoria di qualcuno su come era stata configurata. Red Hat è nostro partner, quindi possiamo aiutarLa anche con abbonamenti e supporto del produttore.",
          parts: ["Audit dei server attuali e piano di migrazione", "Red Hat Enterprise Linux, con aggiornamenti centralizzati tramite Red Hat Satellite", "Piattaforma di container OpenShift per le Sue applicazioni", "Automazione di configurazione e deployment con Ansible", "Gestione centralizzata di identità e accessi (Identity Management)", "Monitoraggio, backup e documentazione per il Suo team"],
          result: "Un'infrastruttura che si può verificare, riprodurre e affidare a un altro team, senza che il know-how se ne vada con una sola persona."
        },
        api: {
          title: "API e integrazioni",
          text: "Progettiamo API per i Suoi sistemi e li colleghiamo ai servizi che già utilizza.",
          about: "La cosa che vediamo più spesso sono dati inseriti due volte: gli ordini del sito ricopiati a mano nel gestionale, i pagamenti riconciliati in un foglio di calcolo. Un'integrazione elimina questo lavoro e gli errori che genera. Il monitoraggio lo configuriamo a parte, perché le integrazioni si rompono in silenzio quando un partner cambia la sua API, ed è meglio saperlo dal sistema che da un cliente.",
          parts: ["Progettazione e documentazione delle API", "Sistemi di pagamento, corrieri, CRM, contabilità", "Scambio di dati tra sistemi interni", "Code e nuovi tentativi in caso di errore", "Monitoraggio e avvisi"],
          result: "I dati si inseriscono una volta sola e arrivano da soli dove servono."
        },
        support: {
          title: "Supporto tecnico",
          text: "Manteniamo in funzione i Suoi sistemi IT e continuiamo a svilupparli, compresi quelli che non abbiamo realizzato noi.",
          about: "Correggere i bug è solo una parte del lavoro. Ci sono anche gli aggiornamenti di sicurezza che chiudono le falle, il monitoraggio che si accorge di un guasto prima degli utenti e i piccoli miglioramenti strada facendo. Se il sistema arriva da un altro fornitore, partiamo da un audit e scriviamo la documentazione, perché senza di essa ogni modifica è una lotteria.",
          parts: ["Monitoraggio di disponibilità ed errori", "Correzione dei bug e aggiornamenti di sicurezza", "Backup e test di ripristino", "Miglioramenti e nuove funzioni pianificati", "Audit e documentazione di sistemi di terzi"],
          result: "Il sistema funziona e il team sa com'è fatto."
        }
      }
    }
  };
  const C = () => AIC.content[lang];
  /* Послуга: власний текст поверх запасного з AIC.content */
  const svc = (key) => {
    const base = (C()?.services?.items || []).find((s) => s.key === key);
    const own = SVC[lang]?.items[key];
    if (!base && !own) return null;
    const s = { key, ...base, ...own };
    return { ...s, about: s.about ?? s.details ?? "", parts: s.parts ?? s.includes ?? [], result: s.result ?? "" };
  };
  const svcKeys = () => {
    const items = C()?.services?.items || [];
    return items.length ? items.map((s) => s.key) : Object.keys(SVC[lang].items);
  };
  const svcList = () => svcKeys().map(svc);

  const LOCALES = { uk: "uk-UA", en: "en-US", ru: "ru-RU", de: "de-DE", fr: "fr-FR", es: "es-ES", pt: "pt-PT", it: "it-IT" };
  /* uk/ru: три форми; решта мов: однина чи множина за правилами Intl (у fr 0 — однина) */
  const plural = (n, forms) => {
    if (lang !== "uk" && lang !== "ru") {
      let one = n === 1;
      try { one = new Intl.PluralRules(LOCALES[lang] || lang).select(n) === "one"; } catch { /* стара Intl */ }
      return one ? forms[0] : forms[2];
    }
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return forms[1];
    return forms[2];
  };
  const count = (n) => `${n} ${plural(n, u().objects)}`;

  /* ---------- Значки 32×32 ---------- */
  const ICONS = {
    modem: '<rect x="3.5" y="14.5" width="25" height="8" fill="#c0c0c0" stroke="#000"/><path d="M5.5 22.5l-1 3h23l-1-3" fill="#808080" stroke="#000"/><circle cx="8" cy="18.5" r="1.3" fill="#0c0"/><circle cx="12" cy="18.5" r="1.3" fill="#0c0"/><circle cx="16" cy="18.5" r="1.3" fill="#c00"/><path d="M20 18.5h6" stroke="#000"/><path d="M8 10c4.5-4.5 11.5-4.5 16 0M11.5 12.5c2.5-2.2 6.5-2.2 9 0" fill="none" stroke="#000080" stroke-width="1.5"/>',
    comp: '<rect x="4.5" y="3.5" width="23" height="18" fill="#c0c0c0" stroke="#000"/><rect x="7" y="6" width="18" height="13" fill="#008080"/><rect x="7" y="6" width="18" height="2" fill="#000080"/><rect x="11" y="22" width="10" height="3" fill="#808080"/><rect x="3.5" y="25.5" width="25" height="4" fill="#c0c0c0" stroke="#000"/><rect x="21" y="27" width="5" height="1" fill="#00a000"/>',
    shut: '<rect x="4.5" y="3.5" width="23" height="18" fill="#c0c0c0" stroke="#000"/><rect x="7" y="6" width="18" height="13" fill="#000"/><circle cx="19" cy="10" r="2.5" fill="#ffff80"/><rect x="11" y="22" width="10" height="3" fill="#808080"/><rect x="3.5" y="25.5" width="25" height="4" fill="#c0c0c0" stroke="#000"/>',
    bin: '<path d="M7.5 9.5h17l-2 19h-13z" fill="#dfdfdf" stroke="#000"/><path d="M11.5 12l1 14M16 12v14M20.5 12l-1 14" stroke="#808080"/><rect x="5.5" y="6.5" width="21" height="3" fill="#c0c0c0" stroke="#000"/>',
    doc: '<path d="M7.5 2.5h12l6 6v21h-18z" fill="#fff" stroke="#000"/><path d="M19.5 2.5v6h6" fill="#dfdfdf" stroke="#000"/><path d="M10 12.5h13M10 15.5h13M10 18.5h13M10 21.5h9" stroke="#000080"/><rect x="10" y="24" width="6" height="3" fill="#008080"/>',
    folder: '<path d="M3.5 7.5h9l2 3h14v17h-25z" fill="#ffff80" stroke="#000"/><path d="M4 12.5h24" stroke="#c0c000"/>',
    prog: '<path d="M3.5 7.5h9l2 3h14v17h-25z" fill="#ffff80" stroke="#000"/><rect x="12.5" y="14.5" width="13" height="10" fill="#fff" stroke="#000"/><rect x="13" y="15" width="12" height="2" fill="#000080"/>',
    net: '<rect x="2.5" y="3.5" width="13" height="10" fill="#c0c0c0" stroke="#000"/><rect x="4.5" y="5.5" width="9" height="6" fill="#000080"/><rect x="16.5" y="15.5" width="13" height="10" fill="#c0c0c0" stroke="#000"/><rect x="18.5" y="17.5" width="9" height="6" fill="#000080"/><path d="M9 14v13h14M23 26v1" stroke="#000"/><rect x="5" y="14" width="8" height="2" fill="#808080"/>',
    mail: '<rect x="3.5" y="8.5" width="25" height="16" fill="#fff" stroke="#000"/><path d="M3.5 8.5l12.5 10 12.5-10" fill="none" stroke="#000"/><rect x="22" y="11" width="4" height="4" fill="#f00"/>',
    modes: '<rect x="2.5" y="3.5" width="17" height="13" fill="#fff" stroke="#000"/><rect x="3" y="4" width="16" height="3" fill="#808080"/><rect x="7.5" y="8.5" width="17" height="13" fill="#fff" stroke="#000"/><rect x="8" y="9" width="16" height="3" fill="#808080"/><rect x="12.5" y="14.5" width="17" height="13" fill="#fff" stroke="#000"/><rect x="13" y="15" width="16" height="3" fill="#000080"/>',
    app: '<rect x="3.5" y="5.5" width="25" height="21" fill="#c0c0c0" stroke="#000"/><rect x="4" y="6" width="24" height="4" fill="#000080"/><rect x="6" y="12" width="20" height="12" fill="#fff"/><rect x="8" y="14" width="7" height="2" fill="#008080"/><rect x="8" y="18" width="12" height="2" fill="#808080"/>',
    cmd: '<rect x="3.5" y="5.5" width="25" height="21" fill="#000" stroke="#808080"/><rect x="4" y="6" width="24" height="4" fill="#000080"/><path d="M7 14l3 2-3 2" fill="none" stroke="#c0c0c0"/><rect x="12" y="17" width="6" height="1" fill="#c0c0c0"/>',
    drive: '<rect x="2.5" y="11.5" width="27" height="11" fill="#c0c0c0" stroke="#000"/><path d="M3 22.5h26" stroke="#808080"/><rect x="5" y="18" width="5" height="2" fill="#00c000"/><rect x="16" y="15" width="11" height="2" fill="#808080"/>',
    lang: '<rect x="2.5" y="9.5" width="27" height="15" fill="#c0c0c0" stroke="#000"/><path d="M5 13h2M9 13h2M13 13h2M17 13h2M21 13h2M25 13h2M6 17h2M10 17h2M14 17h2M18 17h2M22 17h2M9 21h14" stroke="#000"/>',
    help: '<path d="M4.5 6.5h10l1.5 2 1.5-2h10v20h-10l-1.5 2-1.5-2h-10z" fill="#ffff80" stroke="#000"/><path d="M16 8.5v18" stroke="#000"/><path d="M20 12.5h5M20 15.5h5M20 18.5h4M7 12.5h5M7 15.5h5" stroke="#000080"/>',
    run: '<rect x="2.5" y="8.5" width="21" height="18" fill="#c0c0c0" stroke="#000"/><rect x="3" y="9" width="20" height="3" fill="#000080"/><rect x="5" y="14" width="16" height="10" fill="#fff"/><path d="M13 21L27 7M20 6.5h7.5V14" fill="none" stroke="#000" stroke-width="2"/>',
    info: '<circle cx="16" cy="16" r="13" fill="#fff" stroke="#000"/><rect x="14" y="7" width="4" height="4" fill="#000080"/><rect x="14" y="13" width="4" height="12" fill="#000080"/>',
    err: '<circle cx="16" cy="16" r="13" fill="#f00" stroke="#800000"/><path d="M11 11l10 10M21 11L11 21" stroke="#fff" stroke-width="3"/>',
    globe: '<circle cx="16" cy="16" r="12.5" fill="#1084d0" stroke="#000080"/><path d="M9 9c3 0 4 2 6 2s2 3 0 4-4 0-5 3-3 1-4-1 0-6 3-8zM18 19c2-1 5 0 6 2s-2 4-4 4-3-3-2-6z" fill="#00a000"/><path d="M4 16h24M16 4c-5 6-5 18 0 24M16 4c5 6 5 18 0 24" fill="none" stroke="#fff" stroke-opacity=".5"/>',
    flag: '<path d="M3 7c4-2 7-2 11 0v8c-4-2-7-2-11 0z" fill="#f00"/><path d="M16 7c4 2 8 2 13 0v8c-5 2-9 2-13 0z" fill="#00a000"/><path d="M3 17c4-2 7-2 11 0v8c-4-2-7-2-11 0z" fill="#00f"/><path d="M16 17c4 2 8 2 13 0v8c-5 2-9 2-13 0z" fill="#ff0"/>'
  };
  const ROUND = new Set(["globe", "flag", "info", "err"]);
  const icon = (name, size = 32) =>
    `<svg viewBox="0 0 32 32" width="${size}" height="${size}" aria-hidden="true"${ROUND.has(name) ? "" : ' shape-rendering="crispEdges"'}>${ICONS[name]}</svg>`;
  const variantIcon = (id) => (id === AIC.id ? "flag" : ["classic", "web90", "web2010", "ai", "xmas"].includes(id) ? "globe" : ["dos", "nc", "unix", "mc", "apple"].includes(id) ? "cmd" : "app");

  /* Гліфи кнопок заголовка */
  const G = {
    check: '<svg width="7" height="7" aria-hidden="true" shape-rendering="crispEdges"><rect x="6" y="0" width="1" height="1"/><rect x="5" y="1" width="1" height="1"/><rect x="6" y="1" width="1" height="1"/><rect x="0" y="2" width="1" height="1"/><rect x="4" y="2" width="1" height="1"/><rect x="5" y="2" width="1" height="1"/><rect x="6" y="2" width="1" height="1"/><rect x="0" y="3" width="1" height="1"/><rect x="1" y="3" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/><rect x="4" y="3" width="1" height="1"/><rect x="5" y="3" width="1" height="1"/><rect x="0" y="4" width="1" height="1"/><rect x="1" y="4" width="1" height="1"/><rect x="2" y="4" width="1" height="1"/><rect x="3" y="4" width="1" height="1"/><rect x="4" y="4" width="1" height="1"/><rect x="1" y="5" width="1" height="1"/><rect x="2" y="5" width="1" height="1"/><rect x="3" y="5" width="1" height="1"/><rect x="2" y="6" width="1" height="1"/></svg>',
    min: '<svg width="8" height="7" aria-hidden="true" shape-rendering="crispEdges"><rect x="1" y="5" width="6" height="2"/></svg>',
    max: '<svg width="9" height="9" aria-hidden="true" shape-rendering="crispEdges"><path d="M0 0h9v9H0zM1 2v6h7V2z" fill-rule="evenodd"/></svg>',
    restore: '<svg width="9" height="9" aria-hidden="true" shape-rendering="crispEdges"><path d="M2 0h7v6H7V2H2zM0 3h7v6H0zM1 5v3h5V5z" fill-rule="evenodd"/></svg>',
    close: '<svg width="8" height="7" aria-hidden="true"><path d="M.5 0l7 7M7.5 0l-7 7" stroke="#000" stroke-width="1.7"/></svg>'
  };

  /* ---------- Вікна: опис ---------- */
  const DEF = {
    readme: {
      icon: "doc", w: 580, h: 460, bodyClass: "wp",
      title: () => "README.WRI - WordPad", menus: () => u().wpMenus, status: () => [u().f1],
      body: () => {
        const c = C();
        return `<div class="tool" aria-hidden="true"><span class="fld">Times New Roman</span><span class="fld n">12</span><span class="tbtn"><b>B</b></span><span class="tbtn"><i>I</i></span><span class="tbtn"><u>U</u></span></div>` +
          `<div class="ruler" aria-hidden="true"></div>` +
          `<div class="doc" tabindex="0" data-focus><div class="page">` +
          `<img class="doclogo" src="${esc(AIC.logo)}" alt="ArtIntelliCo">` +
          `<h2 class="hd">${esc(c.hero.title)}</h2><p>${esc(c.hero.text)}</p>` +
          `<p><b>${esc(c.hero.typedLead)}:</b></p><ul>${c.hero.typed.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` +
          `<p><i>${esc(u().embHint)}</i></p>` +
          `<div class="emb">${[["services", "folder", u().services], ["partners", "net", u().partners], ["contacts", "mail", u().contacts], ["modes", "modes", u().modes]]
            .map(([k, ic, l]) => `<button type="button" data-act="${k}">${icon(ic)}<span>${esc(l)}</span></button>`).join("")}</div>` +
          `<hr>${footerHtml("docfoot")}</div></div>`;
      }
    },
    services: {
      icon: "folder", w: 520, h: 340, bodyClass: "white",
      title: () => u().services, menus: () => u().exMenus,
      status: (w) => [count(svcKeys().length), (svc(w.state.sel) || {}).title || ""],
      body: (w) => `<ul class="lv" role="listbox" tabindex="0" data-focus data-svc-list aria-label="${esc(C()?.services?.heading || u().services)}" aria-activedescendant="svc-${esc(w.state.sel)}">` +
        svcList().map((s) => `<li role="option" id="svc-${esc(s.key)}" data-svc="${esc(s.key)}" aria-selected="${s.key === w.state.sel}">${icon("app")}<span>${esc(s.title)}</span></li>`).join("") + `</ul>`,
      init: (w) => { w.state.sel = svcKeys()[0]; }
    },
    partners: {
      icon: "net", w: 420, h: 300, bodyClass: "white",
      title: () => C().partners.heading, menus: () => u().exMenus,
      status: () => [count(C().partners.items.length), ""],
      body: () => `<div class="det"><div class="dh"><span>${esc(u().colName)}</span><span>${esc(u().colType)}</span></div><ul class="dl">` +
        C().partners.items.map((p) => `<li><span class="n">${icon("net", 16)}${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a>` : esc(p.name)}</span><span>${esc(u().partnerType)}</span></li>`).join("") +
        `</ul></div>`
    },
    modes: {
      icon: "modes", w: 560, h: 380, bodyClass: "white",
      title: () => u().modes, menus: () => u().exMenus,
      status: () => [count(AIC.variants.length), u().modesHint],
      body: () => `<ul class="lv">${AIC.variants.map((v) => {
        const cur = v.id === AIC.id;
        return `<li><a class="lvi" href="${esc(AIC.url(v.id, lang))}"${cur ? ' aria-current="page"' : ""}>${icon(variantIcon(v.id))}<span>${esc(v.name[lang])}</span><small>${esc(v.year)}</small></a></li>`;
      }).join("")}</ul>`
    },
    mycomp: {
      icon: "comp", w: 440, h: 280, bodyClass: "white",
      title: () => u().mycomp, menus: () => u().exMenus,
      status: () => [count(4), ""],
      body: () => `<ul class="lv">${[["services", "drive", u().drive], ["modes", "folder", u().modes], ["partners", "net", u().partners], ["lang", "lang", u().control]]
        .map(([k, ic, l]) => `<li><button type="button" class="lvi" data-open="${k}">${icon(ic)}<span>${esc(l)}</span></button></li>`).join("")}</ul>`
    },
    bin: {
      icon: "bin", w: 380, h: 240, bodyClass: "white",
      title: () => u().bin, menus: () => u().exMenus, status: () => [count(0), ""],
      body: () => `<div class="det"><div class="dh"><span>${esc(u().colName)}</span><span>${esc(u().colType)}</span></div></div>`
    },
    help: {
      icon: "help", w: 460, h: 380, bodyClass: "white",
      title: () => u().helpTitle, menus: () => u().exMenus,
      body: () => `<div class="helpdoc"><h3>${esc(u().helpKeysHead)}</h3><dl>${u().helpKeys.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` +
        `<h3>${esc(u().helpRunHead)}</h3><p><code>${esc(RUN_HELP.join(", "))}</code></p>` +
        `<p><button type="button" class="btn" data-act="about">${esc(u().aboutTitle)}</button></p></div>`
    },
    contacts: {
      icon: "mail", dlg: true, w: 440,
      title: () => u().contacts,
      body: () => {
        const c = C().contacts;
        return `<div class="dlgmain">${icon("mail")}<div><p class="strong">${esc(c.heading)}</p><p>${esc(c.text)}</p>` +
          `<span class="flabel">${esc(c.emailLabel)}:</span><div class="field">${esc(c.email)}</div></div></div>` +
          `<div class="btnrow"><a class="btn def" href="mailto:${esc(c.email)}" data-focus>${esc(u().write)}</a>` +
          `<button type="button" class="btn" data-act="copy">${esc(u().copy)}</button><button type="button" class="btn" data-close>${esc(u().cancel)}</button></div>` +
          `<p class="note" role="status"></p>`;
      }
    },
    about: {
      icon: "info", dlg: true, w: 440,
      title: () => u().aboutTitle,
      body: () => `<div class="aboutban">${icon("flag", 44)}<div><b>Windows NT</b><small>Workstation</small></div></div>` +
        `<div class="abouttext"><p>${esc(u().version)}</p>${footerHtml("")}<hr class="etch">` +
        `<p>${esc(u().licensed)}<br><b>${esc(u().guest)}</b><br>ArtIntelliCo</p><hr class="etch"><p>${esc(u().memory)} ${esc(u().memoryVal)}</p></div>` +
        `<div class="btnrow"><button type="button" class="btn def" data-close data-focus>${esc(u().ok)}</button></div>`
    },
    run: {
      icon: "run", dlg: true, w: 400,
      title: () => u().runTitle,
      body: () => `<form class="runf"><div class="dlgmain">${icon("run")}<p>${esc(u().runText)}</p></div>` +
        `<div class="frow"><label for="ntRun">${esc(u().open)}</label><input id="ntRun" class="field" list="ntRunList" autocomplete="off" spellcheck="false" autocapitalize="off" data-focus>` +
        `<datalist id="ntRunList">${RUN_HELP.map((c) => `<option value="${esc(c)}">`).join("")}</datalist></div>` +
        `<div class="btnrow"><button type="submit" class="btn def">${esc(u().ok)}</button><button type="button" class="btn" data-close>${esc(u().cancel)}</button>` +
        `<button type="button" class="btn" data-act="modes">${esc(u().browse)}</button></div></form>`
    },
    shutdown: {
      icon: "shut", dlg: true, w: 420,
      title: () => u().shutTitle,
      body: () => `<form class="shutf"><div class="dlgmain">${icon("shut")}<div><p>${esc(u().shutText)}</p>` +
        Object.entries(u().shutOpts).map(([k, l], i) => `<label class="radio"><input type="radio" name="sd" value="${k}"${i === 0 ? " checked data-focus" : ""}><span>${esc(l)}</span></label>`).join("") +
        `</div></div><div class="btnrow"><button type="submit" class="btn def">${esc(u().yes)}</button><button type="button" class="btn" data-close>${esc(u().no)}</button>` +
        `<button type="button" class="btn" data-act="help">${esc(u().help)}</button></div></form>`
    },
    dialup: {
      icon: "modem", dlg: true, w: 420,
      title: () => (dun.state === "dialing" ? u().dunConnecting.replace("{e}", DUN_ENTRY) : u().dunTitle),
      body: () => {
        const field = (label, value, extra = "") => `<div class="frow"><label>${esc(label)}</label><div class="field${extra}">${value}</div></div>`;
        if (dun.state === "form") {
          return `<div class="dlgmain">${icon("modem")}<p>${esc(u().dunIntro)}</p></div><div class="dunf">` +
            field(u().dunEntry, esc(DUN_ENTRY)) + field(u().dunPhone, esc(DUN_PHONE)) +
            field(u().dunUser, "guest") + field(u().dunPass, "&#8226;".repeat(8)) +
            `<label class="radio"><input type="checkbox" checked disabled><span>${esc(u().dunSave)}</span></label>` +
            `<label class="radio"><input type="checkbox" id="dunSpk"${dun.sound ? " checked" : ""}><span>${esc(u().dunSpeaker)}</span></label></div>` +
            `<div class="btnrow"><button type="button" class="btn def" data-act="dial" data-focus>${esc(u().dunDial)}</button>` +
            `<button type="button" class="btn" data-close>${esc(u().cancel)}</button></div>`;
        }
        if (dun.state === "dialing") {
          /* як у NT: два комп'ютери, телефон і червона точка, що бігає дротом */
          return `<div class="dunconn">${DUN_PIC}` +
            `<p class="dunstate"><span>${esc(u().dunStatus)}</span> ${esc(u().dunSteps[dun.step])}</p>` +
            `<button type="button" class="btn" data-act="hangup" data-focus>${esc(u().cancel)}</button></div>`;
        }
        return `<div class="dlgmain">${icon("modem")}<div><p class="strong">${esc(u().dunDone)}</p><p>${esc(u().dunSpeed)}</p></div></div>` +
          `<div class="btnrow"><button type="button" class="btn def" data-close data-focus>${esc(u().ok)}</button>` +
          `<button type="button" class="btn" data-act="hangup">${esc(u().dunHang)}</button></div>`;
      }
    },
    lang: {
      icon: "lang", dlg: true, w: 320,
      title: () => u().langTitle,
      body: () => `<form class="langf"><div class="dlgmain">${icon("lang")}<div><p>${esc(u().langText)}</p>` +
        LANGS.map((l) => `<label class="radio"><input type="radio" name="lg" value="${l}"${l === lang ? " checked data-focus" : ""}><span>${esc(LANG_NAMES[l])}</span></label>`).join("") +
        `</div></div><div class="btnrow"><button type="submit" class="btn def">${esc(u().ok)}</button><button type="button" class="btn" data-close>${esc(u().cancel)}</button></div></form>`
    }
  };

  /* ---------- Віддалений доступ: дозвон після завантаження, значок у треї ---------- */
  const DUN_ENTRY = "ArtIntelliCo Online";
  const DUN_PHONE = "0-800-ARTINTEL";
  const dun = {
    state: store.get("aic-nt-online", sessionStorage) ? "online" : "form",
    step: 0, run: 0, stop: null,
    sound: store.get("aic-nt-sound") !== "0"
  };

  /* Звук модему синтезуємо Web Audio: гудок, DTMF-набір, виклик, відповідь 2100 Гц, рукостискання.
     Повертає функцію зупинки. Таймінг кроків дозвону підлаштовано під нього (DUN_STEPS). */
  const DUN_DIGITS = "080027846835"; /* 0-800-ARTINTEL на телефонній клавіатурі */
  /* Піктограма дозвону NT (сітка 32×28): два комп'ютери, телефон, пунктирний дріт і червона точка */
  const DUN_PIC = (() => {
    const px = [];
    const r = (x, y, w, h, c) => px.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>`);
    const monitor = (x) => {
      r(x, 1, 12, 9, "#000"); r(x + 1, 2, 10, 7, "#c0c0c0");
      r(x + 1, 2, 10, 1, "#fff"); r(x + 1, 2, 1, 7, "#fff"); r(x + 10, 3, 1, 6, "#808080"); r(x + 2, 8, 9, 1, "#808080");
      r(x + 2, 3, 8, 5, "#000"); r(x + 3, 4, 6, 3, "#000080"); r(x + 3, 4, 2, 1, "#0000ff");
      r(x + 4, 10, 4, 1, "#808080");
      /* системний блок під монітором */
      r(x, 11, 12, 3, "#000"); r(x + 1, 11, 10, 2, "#c0c0c0"); r(x + 1, 11, 10, 1, "#fff"); r(x + 8, 12, 2, 1, "#008000");
    };
    monitor(1);
    monitor(15);
    r(13, 12, 2, 1, "#000");
    /* пунктир: від комп'ютерів праворуч, униз і до телефону */
    for (let x = 28; x < 30; x += 2) r(x, 12, 1, 1, "#000");
    for (let y = 14; y < 26; y += 2) r(29, y, 1, 1, "#000");
    for (let x = 15; x < 30; x += 2) r(x, 25, 1, 1, "#000");
    /* телефон */
    r(2, 15, 12, 3, "#000"); r(3, 16, 10, 1, "#c8b060"); r(1, 16, 3, 3, "#000"); r(12, 16, 3, 3, "#000");
    r(2, 17, 1, 1, "#c8b060"); r(13, 17, 1, 1, "#c8b060");
    r(3, 18, 10, 1, "#000"); r(2, 19, 12, 1, "#000"); r(1, 20, 14, 7, "#000");
    r(4, 19, 8, 1, "#f0e0a0"); r(3, 20, 10, 1, "#f0e0a0"); r(2, 21, 12, 5, "#f0e0a0");
    r(2, 25, 12, 1, "#c8b060"); r(13, 21, 1, 4, "#c8b060");
    /* круглий диск */
    r(7, 21, 2, 1, "#000"); r(6, 22, 1, 2, "#000"); r(9, 22, 1, 2, "#000"); r(7, 24, 2, 1, "#000"); r(7, 22, 2, 2, "#fff");
    return `<svg class="dunpic" viewBox="0 0 32 28" shape-rendering="crispEdges" aria-hidden="true">${px.join("")}` +
      `<rect class="dundot" x="28" y="24" width="3" height="3" fill="#ff0000"/></svg>`;
  })();

  const DUN_STEPS = { sound: [4100, 3100, 1300], quiet: [1600, 1200, 900] };
  function modemSound() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    let ctx;
    try { ctx = new AC(); } catch { return null; }
    const out = ctx.createGain();
    out.gain.value = 0.22;
    out.connect(ctx.destination);
    const t0 = ctx.currentTime + 0.05;

    const tone = (freqs, from, to, level = 0.35, type = "sine") => {
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t0 + from);
      g.gain.linearRampToValueAtTime(level, t0 + from + 0.01);
      g.gain.setValueAtTime(level, t0 + to - 0.01);
      g.gain.linearRampToValueAtTime(0, t0 + to);
      g.connect(out);
      for (const f of freqs) {
        const o = ctx.createOscillator();
        o.type = type;
        o.frequency.value = f;
        o.connect(g);
        o.start(t0 + from);
        o.stop(t0 + to + 0.02);
      }
      return g;
    };
    const noise = (from, to, freq, q, level) => {
      const len = Math.ceil((to - from) * ctx.sampleRate);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = freq;
      bp.Q.value = q;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t0 + from);
      g.gain.linearRampToValueAtTime(level, t0 + from + 0.05);
      g.gain.setValueAtTime(level, t0 + to - 0.15);
      g.gain.linearRampToValueAtTime(0, t0 + to);
      src.connect(bp).connect(g).connect(out);
      src.start(t0 + from);
      src.stop(t0 + to);
    };

    /* гудок у слухавці */
    tone([350, 440], 0, 0.9, 0.25);
    /* тональний набір */
    const ROW = { 1: 697, 2: 697, 3: 697, 4: 770, 5: 770, 6: 770, 7: 852, 8: 852, 9: 852, 0: 941 };
    const COL = { 1: 1209, 2: 1336, 3: 1477, 4: 1209, 5: 1336, 6: 1477, 7: 1209, 8: 1336, 9: 1477, 0: 1336 };
    [...DUN_DIGITS].forEach((d, i) => tone([ROW[d], COL[d]], 1.0 + i * 0.13, 1.0 + i * 0.13 + 0.08, 0.3));
    /* гудок виклику */
    tone([440, 480], 2.8, 3.7, 0.22);
    /* відповідь модему: 2100 Гц з амплітудною модуляцією */
    const ans = tone([2100], 4.0, 5.1, 0.25);
    const lfo = ctx.createOscillator(), lfoGain = ctx.createGain();
    lfo.frequency.value = 15;
    lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain).connect(ans.gain);
    lfo.start(t0 + 4.0);
    lfo.stop(t0 + 5.1);
    /* V.8: переклик частот */
    for (let i = 0; i < 8; i++) tone([i % 2 ? 1180 : 980], 5.15 + i * 0.05, 5.2 + i * 0.05, 0.18, "square");
    tone([1200, 2400], 5.6, 6.0, 0.12);
    tone([2250], 6.0, 6.3, 0.15);
    /* рукостискання: свист і шипіння */
    const sweep = tone([1800], 6.3, 7.6, 0.08, "sawtooth");
    sweep.gain.setValueAtTime(0.08, t0 + 6.3);
    noise(6.3, 7.7, 1800, 0.7, 0.9);
    noise(6.5, 7.6, 3000, 2, 0.6);
    tone([1650, 1850], 6.35, 6.9, 0.07, "square");

    const timer = setTimeout(() => ctx.close().catch(() => {}), 8200);
    return () => { clearTimeout(timer); ctx.close().catch(() => {}); };
  }
  function stopSound() {
    if (dun.stop) { dun.stop(); dun.stop = null; }
  }

  function dunRender() {
    const w = wins.get("dialup");
    if (w) { render(w); focusInside(w); renderTasks(); }
    const t = $("dunTray");
    t.hidden = dun.state !== "online";
    t.title = `${DUN_ENTRY}: ${u().dunSpeed}`;
    t.setAttribute("aria-label", t.title);
  }
  async function dial() {
    const run = ++dun.run;
    dun.state = "dialing";
    stopSound();
    /* AudioContext створюємо одразу в обробнику кліку — інакше браузер не дасть грати звук */
    dun.stop = dun.sound ? modemSound() : null;
    const steps = dun.stop ? DUN_STEPS.sound : reduced ? [150, 150, 150] : DUN_STEPS.quiet;
    for (dun.step = 0; dun.step < 3; dun.step++) {
      dunRender();
      await new Promise((r) => setTimeout(r, steps[dun.step]));
      if (run !== dun.run) return;
    }
    dun.stop = null;
    dun.state = "online";
    store.set("aic-nt-online", "1", sessionStorage);
    dunRender();
  }
  function hangup() {
    dun.run++;
    stopSound();
    dun.state = "form";
    store.del("aic-nt-online", sessionStorage);
    dunRender();
  }

  const RUN_HELP = ["readme", "services", "partners", "mail", "winver", "control", "help", ...AIC.variants.map((v) => v.id)];

  function footerHtml(cls) {
    const f = C().footer, cl = C().classic;
    return `<div class="${cls}"><p>© ${esc(f.year)} ArtIntelliCo. ${esc(f.rights)}</p><p>${esc(f.legalName)}</p>` +
      `<p class="slogan">${esc(f.slogan)}</p><p><a href="${esc(cl.url)}">${esc(cl.label)}</a></p></div>`;
  }

  /* Властивості послуги: три вкладки, усі панелі в одній клітинці сітки, тож розмір вікна не стрибає */
  const PTABS = ["gen", "parts", "res"];
  const propsDef = (key) => ({
    icon: "app", dlg: true, w: 440,
    title: () => `${u().props}: ${(svc(key) || {}).title || key}`,
    init: (w) => { w.state.tab = "gen"; },
    body: (w) => {
      const s = svc(key) || { title: key, text: "", about: "", parts: [], result: "" };
      const tab = PTABS.includes(w.state.tab) ? w.state.tab : "gen";
      const id = (t) => `pp-${esc(key)}-${t}`;
      const label = { gen: u().general, parts: u().tabParts, res: u().tabResult };
      const n = s.parts.length;
      const panels = {
        gen: `<div class="prow">${icon("app")}<div class="field">${esc(s.title)}</div></div><hr class="etch">` +
          `<dl class="pdl"><dt>${esc(u().type)}</dt><dd>${esc(u().serviceType)}</dd><dt>${esc(u().location)}</dt><dd>C:\\ArtIntelliCo\\${esc(u().services)}</dd>` +
          `<dt>${esc(u().desc)}</dt><dd>${esc(s.text)}</dd></dl>` +
          (s.about ? `<hr class="etch"><p class="ptext">${esc(s.about)}</p>` : ""),
        parts: `<p class="pintro">${esc(u().partsIntro)}</p>` +
          `<ul class="clist">${s.parts.map((p) => `<li><span class="cbox" aria-hidden="true">${G.check}</span><span>${esc(p)}</span></li>`).join("")}</ul>` +
          `<p class="pcount">${esc(u().partsCount.replace(/\{n\}/g, n))}</p>`,
        res: `<fieldset class="grp"><legend>${esc(u().resultHead)}</legend><div class="dlgmain">${icon("info")}<p class="ptext">${esc(s.result)}</p></div></fieldset>` +
          (SVC[lang]?.note ? `<fieldset class="grp"><legend>${esc(u().noteHead)}</legend><p class="ptext">${esc(SVC[lang].note)}</p></fieldset>` : "")
      };
      return `<div class="tabs" role="tablist" aria-label="${esc(u().props)}">` +
        PTABS.map((t) => `<button type="button" role="tab" class="tab" id="${id(t)}-t" data-ptab="${t}" aria-controls="${id(t)}" aria-selected="${t === tab}" tabindex="${t === tab ? 0 : -1}"${t === tab ? " data-focus" : ""}><span>${esc(label[t])}</span></button>`).join("") +
        `</div><div class="tabstack">` +
        PTABS.map((t) => `<div class="tabpanel" role="tabpanel" id="${id(t)}" aria-labelledby="${id(t)}-t"${t === tab ? "" : " hidden"}>${panels[t]}</div>`).join("") +
        `</div>` +
        `<div class="btnrow"><button type="button" class="btn" data-act="contacts">${esc(u().discuss)}</button>` +
        `<button type="button" class="btn def" data-close>${esc(u().ok)}</button><button type="button" class="btn" data-close>${esc(u().cancel)}</button></div>`;
    }
  });

  /* Перемикання вкладок без перемальовування: лише aria-selected і hidden */
  function propsTab(winEl, t, focus) {
    const w = wins.get(winEl.dataset.key);
    if (!w || !PTABS.includes(t)) return;
    w.state.tab = t;
    winEl.querySelectorAll("[data-ptab]").forEach((b) => {
      const on = b.dataset.ptab === t;
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    winEl.querySelectorAll(".tabstack > [role=tabpanel]").forEach((p) => { p.hidden = !p.id.endsWith("-" + t); });
  }


  let msgN = 0;
  const msgDefs = new Map();
  function msgbox(title, text, ic = "err") {
    const key = "msg:" + (++msgN);
    msgDefs.set(key, {
      icon: ic, dlg: true, w: 400, title: () => title,
      body: () => `<div class="dlgmain">${icon(ic)}<p>${esc(text)}</p></div><div class="btnrow center"><button type="button" class="btn def" data-close data-focus>${esc(u().ok)}</button></div>`
    });
    openWin(key);
  }
  const defOf = (key) => (key.startsWith("svc:") ? propsDef(key.slice(4)) : msgDefs.get(key) || DEF[key]);

  /* ---------- Вікна: керування ---------- */
  const winsEl = $("wins");
  const wins = new Map();
  let z = 10, cascade = 0, activeKey = null;

  function openWin(key) {
    const def = defOf(key);
    if (!def) return null;
    let w = wins.get(key);
    if (w) {
      if (w.min) { w.min = false; w.el.hidden = false; }
      focusWin(key);
      focusInside(w);
      return w;
    }
    const el = document.createElement("section");
    el.className = "win" + (def.dlg ? " dlg" : "");
    el.dataset.key = key;
    el.setAttribute("role", "dialog");
    el.innerHTML =
      `<div class="tb">${icon(def.icon, 16)}<span class="tt"></span><span class="tbtns">` +
      (def.dlg ? "" : `<button type="button" data-a="min" tabindex="-1">${G.min}</button><button type="button" data-a="max" tabindex="-1">${G.max}</button>`) +
      `<button type="button" data-a="close" tabindex="-1">${G.close}</button></span></div>` +
      (def.menus ? `<div class="mb"></div>` : "") +
      `<div class="body ${def.dlg ? "pad" : def.bodyClass || ""}"></div>` +
      (def.status ? `<div class="sb"></div>` : "");
    w = { key, def, el, min: false, max: false, state: {} };
    def.init?.(w);
    wins.set(key, w);
    winsEl.appendChild(el);
    render(w);
    place(w);
    focusWin(key);
    focusInside(w);
    return w;
  }

  function render(w) {
    const { def, el } = w;
    const title = def.title(w);
    el.querySelector(".tt").textContent = title;
    el.setAttribute("aria-label", title);
    el.querySelectorAll("[data-a]").forEach((b) => {
      const a = b.dataset.a === "max" && w.max ? "restore" : b.dataset.a;
      b.setAttribute("aria-label", u()[a]);
      b.title = u()[a];
      if (b.dataset.a === "max") b.innerHTML = w.max ? G.restore : G.max;
    });
    if (def.menus) {
      const m = def.menus();
      el.querySelector(".mb").innerHTML = m.map((x, i) => (i === m.length - 1 ? `<button type="button" data-act="about">${esc(x)}</button>` : `<span>${esc(x)}</span>`)).join("");
    }
    el.querySelector(".body").innerHTML = def.body(w);
    if (def.status) el.querySelector(".sb").innerHTML = def.status(w).map((s) => `<span>${esc(s)}</span>`).join("");
  }

  function place(w) {
    const area = winsEl.getBoundingClientRect();
    const { def, el } = w;
    const W = Math.min(def.w, area.width - 8);
    el.style.width = W + "px";
    if (!def.dlg) el.style.height = Math.min(def.h, area.height - 8) + "px";
    let left, top;
    if (def.dlg) {
      left = (area.width - W) / 2;
      top = Math.max(6, (area.height - el.offsetHeight) / 2 - 20);
    } else {
      const step = 26 * (cascade++ % 8);
      left = Math.min(area.width - W - 4, 100 + step);
      top = Math.min(Math.max(4, area.height - el.offsetHeight - 4), 12 + step);
    }
    el.style.left = Math.max(0, Math.round(left)) + "px";
    el.style.top = Math.max(0, Math.round(top)) + "px";
  }

  function focusWin(key) {
    const w = wins.get(key);
    if (!w) return;
    if (activeKey !== key || w.el.style.zIndex !== String(z)) w.el.style.zIndex = ++z;
    activeKey = key;
    for (const o of wins.values()) o.el.classList.toggle("active", o === w);
    renderTasks();
  }

  function focusInside(w) {
    const f = w.el.querySelector("[data-focus]") || w.el.querySelector(".body button, .body a, .body input");
    if (f && !(coarse && f.matches("input[type=text], input:not([type])"))) f.focus({ preventScroll: true });
  }

  function topVisible() {
    let best = null;
    for (const w of wins.values()) if (!w.min && (!best || Number(w.el.style.zIndex) > Number(best.el.style.zIndex))) best = w;
    return best;
  }

  function closeWin(key) {
    const w = wins.get(key);
    if (!w) return;
    w.el.remove();
    wins.delete(key);
    msgDefs.delete(key);
    if (key === "dialup") {
      if (dun.state === "dialing") { dun.run++; dun.state = "form"; stopSound(); }
      dunRender();
      if (!wins.size) openWin("readme");
    }
    if (activeKey === key) {
      activeKey = null;
      const top = topVisible();
      if (top) { focusWin(top.key); focusInside(top); }
    }
    renderTasks();
  }

  function closeAll() {
    for (const w of wins.values()) w.el.remove();
    wins.clear();
    msgDefs.clear();
    activeKey = null;
    renderTasks();
  }

  function minimize(key) {
    const w = wins.get(key);
    if (!w) return;
    w.min = true;
    w.el.hidden = true;
    w.el.classList.remove("active");
    if (activeKey === key) {
      activeKey = null;
      const top = topVisible();
      if (top) focusWin(top.key);
    }
    renderTasks();
  }

  function toggleMax(key) {
    const w = wins.get(key);
    if (!w || w.def.dlg) return;
    w.max = !w.max;
    w.el.classList.toggle("max", w.max);
    render(w);
  }

  function renderTasks() {
    $("tasks").innerHTML = [...wins.values()].map((w) => {
      const title = w.def.title(w);
      return `<button type="button" class="task${w.key === activeKey && !w.min ? " on" : ""}" data-key="${esc(w.key)}" title="${esc(title)}">${icon(w.def.icon, 16)}<span>${esc(title)}</span></button>`;
    }).join("");
  }

  /* Перетягування за заголовок */
  winsEl.addEventListener("pointerdown", (e) => {
    const el = e.target.closest(".win");
    if (!el) return;
    focusWin(el.dataset.key);
    const tb = e.target.closest(".tb");
    const w = wins.get(el.dataset.key);
    if (!tb || e.target.closest("button") || !w || w.max || narrow() || e.button !== 0) return;
    const area = winsEl.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const dx = e.clientX - r.left, dy = e.clientY - r.top;
    tb.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const left = Math.min(Math.max(ev.clientX - area.left - dx, 60 - r.width), area.width - 60);
      const top = Math.min(Math.max(ev.clientY - area.top - dy, 0), area.height - 20);
      el.style.left = Math.round(left) + "px";
      el.style.top = Math.round(top) + "px";
    };
    const up = () => { tb.removeEventListener("pointermove", move); tb.removeEventListener("pointerup", up); tb.removeEventListener("pointercancel", up); };
    tb.addEventListener("pointermove", move);
    tb.addEventListener("pointerup", up);
    tb.addEventListener("pointercancel", up);
  });
  winsEl.addEventListener("focusin", (e) => {
    const el = e.target.closest(".win");
    if (el && el.dataset.key !== activeKey) focusWin(el.dataset.key);
  });

  winsEl.addEventListener("click", (e) => {
    const el = e.target.closest(".win");
    if (!el) return;
    const key = el.dataset.key;
    const a = e.target.closest("[data-a]");
    if (a) {
      if (a.dataset.a === "close") closeWin(key);
      else if (a.dataset.a === "min") minimize(key);
      else toggleMax(key);
      return;
    }
    if (e.target.closest("[data-close]")) { closeWin(key); return; }
    const op = e.target.closest("[data-open]");
    if (op) {
      el.querySelectorAll(".lvi.sel").forEach((x) => x.classList.remove("sel"));
      op.classList.add("sel");
      if (coarse || e.detail === 0) openWin(op.dataset.open);
      return;
    }
    const pt = e.target.closest("[data-ptab]");
    if (pt) { propsTab(el, pt.dataset.ptab, true); return; }
    const li = e.target.closest("[data-svc]");
    if (li) {
      svcSelect(el, li.dataset.svc);
      if (coarse) openWin("svc:" + li.dataset.svc);
    }
  });

  winsEl.addEventListener("dblclick", (e) => {
    const el = e.target.closest(".win");
    if (!el) return;
    const op = e.target.closest("[data-open]");
    if (op) { openWin(op.dataset.open); return; }
    const li = e.target.closest("[data-svc]");
    if (li) { openWin("svc:" + li.dataset.svc); return; }
    if (e.target.closest(".tb") && !e.target.closest("button")) toggleMax(el.dataset.key);
  });

  function svcSelect(winEl, key) {
    const w = wins.get(winEl.dataset.key);
    if (!w) return;
    w.state.sel = key;
    winEl.querySelectorAll("[data-svc]").forEach((li) => li.setAttribute("aria-selected", String(li.dataset.svc === key)));
    winEl.querySelector(".lv")?.setAttribute("aria-activedescendant", "svc-" + key);
    const last = winEl.querySelector(".sb span:last-child");
    if (last) last.textContent = (svc(key) || {}).title || "";
    winEl.querySelector(`[data-svc="${key}"]`)?.scrollIntoView({ block: "nearest" });
  }

  /* Вкладки властивостей: стрілки, Home/End, Ctrl+Tab */
  winsEl.addEventListener("keydown", (e) => {
    const winEl = e.target.closest(".win");
    if (!winEl || !winEl.querySelector("[data-ptab]")) return;
    const onTab = e.target.closest("[data-ptab]");
    const ctrl = e.ctrlKey && (e.key === "Tab" || e.key === "PageDown" || e.key === "PageUp");
    if (!onTab && !ctrl) return;
    const cur = PTABS.indexOf(wins.get(winEl.dataset.key)?.state.tab);
    const back = e.key === "ArrowLeft" || e.key === "PageUp" || (e.key === "Tab" && e.shiftKey);
    let i;
    if (e.key === "Home") i = 0;
    else if (e.key === "End") i = PTABS.length - 1;
    else if (ctrl || e.key === "ArrowLeft" || e.key === "ArrowRight") i = (cur + (back ? -1 : 1) + PTABS.length) % PTABS.length;
    else return;
    e.preventDefault();
    propsTab(winEl, PTABS[i], true);
  });

  winsEl.addEventListener("keydown", (e) => {
    const lv = e.target.closest("[data-svc-list]");
    if (!lv) return;
    const winEl = lv.closest(".win");
    const w = wins.get(winEl.dataset.key);
    const items = [...lv.querySelectorAll("[data-svc]")];
    if (e.key === "Enter") { e.preventDefault(); if (w.state.sel) openWin("svc:" + w.state.sel); return; }
    const cols = Math.max(1, items.filter((li) => li.offsetTop === items[0].offsetTop).length);
    const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols, Home: -1e6, End: 1e6 }[e.key];
    if (step === undefined) return;
    e.preventDefault();
    let i = items.findIndex((li) => li.dataset.svc === w.state.sel);
    if (i < 0) i = 0;
    svcSelect(winEl, items[Math.max(0, Math.min(items.length - 1, i + step))].dataset.svc);
  });

  winsEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    if (f.matches(".runf")) runCmd(f.querySelector("input").value);
    else if (f.matches(".shutf")) shutdown(f.elements.sd.value);
    else if (f.matches(".langf")) { closeWin("lang"); setLang(f.elements.lg.value); }
  });

  $("tasks").addEventListener("click", (e) => {
    const b = e.target.closest(".task");
    const w = b && wins.get(b.dataset.key);
    if (!w) return;
    closeMenus();
    if (w.min) { w.min = false; w.el.hidden = false; focusWin(w.key); focusInside(w); }
    else if (activeKey === w.key) minimize(w.key);
    else { focusWin(w.key); focusInside(w); }
  });

  /* ---------- Дії ---------- */
  function act(a, el) {
    if (a.startsWith("lang:")) { setLang(a.slice(5)); return; }
    if (a === "copy") { copyEmail(el); return; }
    if (a === "dial") { dial(); return; }
    if (a === "hangup") { hangup(); return; }
    openWin(a);
  }

  async function copyEmail(btn) {
    const note = btn && btn.closest(".win") && btn.closest(".win").querySelector(".note");
    const email = C().contacts.email;
    try {
      await navigator.clipboard.writeText(email);
      if (note) note.textContent = u().copied;
    } catch {
      if (note) note.textContent = u().copyFailed + email;
    }
  }

  const RUN_WINS = { readme: "readme", notepad: "readme", wordpad: "readme", write: "readme", explorer: "mycomp", services: "services", partners: "partners",
    mail: "contacts", contacts: "contacts", winver: "about", about: "about", help: "help", winhelp: "help", control: "lang", intl: "lang", modes: "modes" };
  const RUN_ALIAS = { cmd: "dos", command: "dos", "ms-dos": "dos", norton: "nc", redhat: "linux", startx: "linux", x11: "linux", win: "win31", windows: "win31",
    nt: "winnt", site: "classic", "90": "web90", "2010": "web2010", christmas: "xmas" };

  function runCmd(raw) {
    const v = raw.trim();
    if (!v) return;
    const c = v.toLowerCase().replace(/\.(exe|com|bat|wri|txt|cpl)$/, "");
    if (RUN_WINS[c]) { closeWin("run"); openWin(RUN_WINS[c]); return; }
    const id = RUN_ALIAS[c] || c;
    if (AIC.variants.some((x) => x.id === id)) { location.href = AIC.url(id, lang); return; }
    msgbox(v, u().notFound.replace("%s", v), "err");
  }

  function shutdown(opt) {
    if (opt === "classic") { location.href = C().classic.url; return; }
    closeAll();
    if (opt === "restart") { store.del("aic-nt-booted", sessionStorage); boot(); }
    else showLogon();
  }

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    store.set("aic-lang", l);
    document.documentElement.lang = l;
    renderAll();
  }

  /* ---------- Робочий стіл ---------- */
  const DESK = [
    { id: "mycomp", icon: "comp", label: () => u().mycomp },
    { id: "bin", icon: "bin", label: () => u().bin },
    { id: "readme", icon: "doc", label: () => u().readme },
    { id: "services", icon: "folder", label: () => u().services },
    { id: "partners", icon: "net", label: () => u().partners },
    { id: "contacts", icon: "mail", label: () => u().contacts },
    { id: "modes", icon: "modes", label: () => u().modes },
    { id: "classic", icon: "globe", label: () => C().classic.label, href: () => C().classic.url }
  ];

  function renderDesk() {
    $("icons").innerHTML = DESK.map((d) => d.href
      ? `<a class="icon" href="${esc(d.href())}">${icon(d.icon)}<span class="lbl">${esc(d.label())}</span></a>`
      : `<button type="button" class="icon" data-open="${d.id}">${icon(d.icon)}<span class="lbl">${esc(d.label())}</span></button>`
    ).join("");
  }
  $("icons").addEventListener("click", (e) => {
    const b = e.target.closest("button.icon");
    $("icons").querySelectorAll(".icon.sel").forEach((x) => x.classList.remove("sel"));
    if (!b) return;
    b.classList.add("sel");
    if (coarse || e.detail === 0) openWin(b.dataset.open);
  });
  $("icons").addEventListener("dblclick", (e) => {
    const b = e.target.closest("button.icon");
    if (b) openWin(b.dataset.open);
  });

  /* ---------- Меню «Пуск» ---------- */
  const mi = (id, ic, label, sub) =>
    `<li><button type="button" class="mi${sub ? " sub" : ""}" role="menuitem" ${sub ? `data-m="${id}" aria-haspopup="menu"` : `data-act="${id}"`}>${icon(ic, 24)}<span>${esc(label)}</span></button></li>`;

  function renderStart() {
    $("start").innerHTML = `<div class="band" aria-hidden="true"><span><b>Windows</b> NT Workstation</span></div><ul>` +
      mi("programs", "prog", u().programs, true) + mi("modes", "modes", u().modes, true) + mi("langs", "lang", u().language, true) +
      mi("help", "help", u().help.replace("...", "")) + mi("run", "run", u().run) + `<li><hr></li>` + mi("shutdown", "shut", u().shutdown) + `</ul>`;
    $("start").setAttribute("aria-label", u().start);
  }

  let flyAnchor = null, flyKind = null;
  function openFly(kind, anchor, above) {
    if (flyAnchor === anchor && flyKind === kind && !$("fly").hidden) return;
    closeFly();
    let html = "";
    if (kind === "programs") {
      html = [["readme", "doc", u().readme], ["services", "folder", u().services], ["partners", "net", u().partners], ["contacts", "mail", u().contacts], ["mycomp", "comp", u().mycomp]]
        .map(([k, ic, l]) => `<li><button type="button" class="mi" role="menuitem" data-act="${k}">${icon(ic, 16)}<span>${esc(l)}</span></button></li>`).join("") +
        `<li><hr></li><li><a class="mi" role="menuitem" href="${esc(AIC.url("dos", lang))}">${icon("cmd", 16)}<span>${esc(u().cmd)}</span></a></li>`;
    } else if (kind === "modes") {
      html = AIC.variants.map((v) => `<li><a class="mi" role="menuitem" href="${esc(AIC.url(v.id, lang))}"${v.id === AIC.id ? ' aria-current="page"' : ""}>${icon(variantIcon(v.id), 16)}<span class="yr">${esc(v.year)}</span><span>${esc(v.name[lang])}</span></a></li>`).join("");
    } else {
      html = LANGS.map((l) => `<li><button type="button" class="mi" role="menuitemradio" aria-checked="${l === lang}" data-act="lang:${l}"><span class="chk">${l === lang ? "●" : ""}</span><span>${esc(LANG_NAMES[l])}</span></button></li>`).join("");
    }
    const fly = $("fly");
    fly.innerHTML = `<ul>${html}</ul>`;
    fly.hidden = false;
    const nt = $("nt").getBoundingClientRect(), a = anchor.getBoundingClientRect(), f = fly.getBoundingClientRect();
    let left, top;
    if (above) {
      left = Math.min(a.left - nt.left, nt.width - f.width - 2);
      top = a.top - nt.top - f.height - 2;
    } else {
      left = a.right - nt.left - 3;
      if (left + f.width > nt.width) left = nt.width - f.width;
      top = Math.min(a.top - nt.top - 3, nt.height - 28 - f.height);
    }
    fly.style.left = Math.max(0, Math.round(left)) + "px";
    fly.style.top = Math.max(0, Math.round(top)) + "px";
    anchor.classList.add("open");
    anchor.setAttribute("aria-expanded", "true");
    flyAnchor = anchor;
    flyKind = kind;
  }
  function closeFly() {
    $("fly").hidden = true;
    if (flyAnchor) { flyAnchor.classList.remove("open"); flyAnchor.setAttribute("aria-expanded", "false"); }
    flyAnchor = null;
    flyKind = null;
  }
  function openStart() {
    closeFly();
    renderStart();
    $("start").hidden = false;
    $("startBtn").setAttribute("aria-expanded", "true");
  }
  function closeMenus() {
    closeFly();
    $("start").hidden = true;
    $("startBtn").setAttribute("aria-expanded", "false");
  }
  const menuOpen = () => !$("start").hidden || !$("fly").hidden;

  $("startBtn").addEventListener("click", (e) => {
    if (!$("start").hidden) { closeMenus(); return; }
    openStart();
    if (e.detail === 0) $("start").querySelector(".mi")?.focus();
  });
  $("langBtn").addEventListener("click", () => {
    if (flyKind === "langs" && flyAnchor === $("langBtn")) { closeMenus(); return; }
    closeMenus();
    openFly("langs", $("langBtn"), true);
    $("fly").querySelector('[aria-checked="true"]')?.focus();
  });
  $("start").addEventListener("pointerover", (e) => {
    const m = e.target.closest(".mi");
    if (!m || e.pointerType === "touch") return;
    if (m.classList.contains("sub")) openFly(m.dataset.m, m);
    else closeFly();
  });
  $("start").addEventListener("click", (e) => {
    const m = e.target.closest(".mi.sub");
    if (!m) return;
    openFly(m.dataset.m, m);
    if (e.detail === 0) $("fly").querySelector(".mi")?.focus();
  });
  $("nt").addEventListener("click", (e) => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    if (t.closest(".menu")) closeMenus();
    act(t.dataset.act, t);
  });
  $("fly").addEventListener("click", (e) => { if (e.target.closest("a.mi")) closeMenus(); });
  document.addEventListener("pointerdown", (e) => {
    if (menuOpen() && !e.target.closest("#start, #fly, #startBtn, #langBtn")) closeMenus();
  });

  /* ---------- Панель задач ---------- */
  function renderTaskbar() {
    $("startBtn").innerHTML = `${icon("flag", 18)}<span>${esc(u().start)}</span>`;
    $("taskbar").setAttribute("aria-label", u().taskbar);
    $("dunTray").innerHTML = icon("modem", 16);
    dunRender();
    $("langBtn").textContent = AIC.langCodes?.[lang] || lang.toUpperCase();
    $("langBtn").title = u().langLabel;
    $("langBtn").setAttribute("aria-label", `${u().langLabel}: ${LANG_NAMES[lang]}`);
    tick();
  }
  function tick() {
    const d = new Date();
    $("clock").textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    try { $("clock").title = d.toLocaleDateString(LOCALES[lang] || lang, { dateStyle: "full" }); } catch { /* стара Intl */ }
  }
  setInterval(tick, 15000);
  $("dunTray").addEventListener("click", () => openWin("dialup"));
  $("wins").addEventListener("change", (e) => {
    if (e.target.id !== "dunSpk") return;
    dun.sound = e.target.checked;
    store.set("aic-nt-sound", dun.sound ? "1" : "0");
  });

  function renderAll() {
    closeMenus();
    renderDesk();
    renderTaskbar();
    for (const w of wins.values()) render(w);
    renderTasks();
    if (phase === "logon") renderLogon();
    $("bootSkip").textContent = u().bootSkip;
  }

  /* ---------- Завантаження й вхід ---------- */
  let phase = "desk";
  let skipping = false;
  const waiters = [];
  const sleep = (ms) => new Promise((resolve) => {
    if (skipping) return resolve();
    const id = setTimeout(resolve, ms);
    waiters.push(() => { clearTimeout(id); resolve(); });
  });

  async function boot() {
    phase = "boot";
    skipping = false;
    closeMenus();
    const b = $("boot"), out = $("bootTxt");
    b.className = "";
    b.hidden = false;
    $("logon").hidden = true;
    $("bootSkip").textContent = u().bootSkip;
    let buf = "";
    const put = (s) => { buf += s; out.textContent = buf; };
    out.textContent = "";
    put("OS Loader V4.01\n\n");
    await sleep(500);
    put("NTDETECT V4.0 Checking Hardware ...\n");
    await sleep(700);
    if (phase !== "boot") return;
    b.className = "blue";
    buf = "";
    put("Windows NT Workstation Version 4.0 (Build 1381: Service Pack 6).\n");
    put("1 System Processor [65 536 KB Memory] Uniprocessor Kernel\n\n");
    await sleep(350);
    for (let i = 0; i < 30 && !skipping; i++) { put("."); await sleep(50); }
    put("\n\n" + u().bootServices + "\n");
    await sleep(600);
    if (phase !== "boot") return;
    b.hidden = true;
    showLogon();
  }

  function renderLogon() {
    $("logon").innerHTML =
      `<section class="win dlg static active" role="dialog" aria-label="${esc(u().logonTitle)}"><div class="tb">${icon("flag", 16)}<span class="tt">${esc(u().logonTitle)}</span></div>` +
      `<div class="body pad"><div class="banner">${icon("flag", 40)}<div><b>Windows NT</b><small>Workstation</small></div></div>` +
      `<div class="cad"><span class="keys" aria-hidden="true">${u().cadKeys.map((k) => `<kbd>${esc(k)}</kbd>`).join("")}</span><p>${esc(u().logonText)}</p></div>` +
      `<p class="hint">${esc(u().logonHint)}</p></div></section>`;
  }
  function showLogon() {
    phase = "logon";
    closeMenus();
    renderLogon();
    $("logon").hidden = false;
  }

  function enterDesktop() {
    skipping = true;
    waiters.splice(0).forEach((f) => f());
    phase = "desk";
    $("boot").hidden = true;
    $("logon").hidden = true;
    const fresh = !store.get("aic-nt-booted", sessionStorage);
    store.set("aic-nt-booted", "1", sessionStorage);
    if (fresh && dun.state !== "online") openWin("dialup");
    else if (!wins.size) openWin("readme");
  }

  /* ---------- Клавіатура ---------- */
  document.addEventListener("pointerdown", (e) => {
    if (phase === "boot") enterDesktop();
    else if (phase === "logon" && e.target.closest("#logon")) { e.preventDefault(); enterDesktop(); }
  });
  document.addEventListener("keydown", (e) => {
    if (phase !== "desk") {
      if (e.target.closest && e.target.closest("#aic-bar")) return;
      e.preventDefault();
      enterDesktop();
      return;
    }
    if (e.key === "Escape" && e.ctrlKey) {
      e.preventDefault();
      if (menuOpen()) closeMenus();
      else { openStart(); $("start").querySelector(".mi")?.focus(); }
      return;
    }
    if (e.key === "F1") { e.preventDefault(); openWin("help"); return; }
    if (e.key === "Escape") {
      if (menuOpen()) {
        const back = flyAnchor;
        if (back && back.closest("#start")) { closeFly(); back.focus(); }
        else { closeMenus(); (back || $("startBtn")).focus(); }
        return;
      }
      const w = wins.get(activeKey);
      if (w && w.def.dlg) closeWin(activeKey);
      return;
    }
    const menu = e.target.closest && e.target.closest(".menu");
    if (menu && ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const items = [...menu.querySelectorAll(".mi")];
      const i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") items[(i + 1) % items.length].focus();
      else if (e.key === "ArrowUp") items[(i - 1 + items.length) % items.length].focus();
      else if (e.key === "Home") items[0].focus();
      else if (e.key === "End") items[items.length - 1].focus();
      else if (e.key === "ArrowRight" && document.activeElement.classList.contains("sub")) {
        openFly(document.activeElement.dataset.m, document.activeElement);
        $("fly").querySelector(".mi")?.focus();
      } else if (e.key === "ArrowLeft" && menu.id === "fly" && flyAnchor && flyAnchor.closest("#start")) {
        const back = flyAnchor;
        closeFly();
        back.focus();
      }
    }
  });

  /* ---------- Старт ---------- */
  renderAll();
  if (reduced || store.get("aic-nt-booted", sessionStorage)) enterDesktop();
  else boot();
})();
