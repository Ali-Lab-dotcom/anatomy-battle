const ui={
ru:{
subtitle:"Изучай организм. Проверяй знания. Становись экспертом.",
setup:"⚙️ Настрой свою битву",lang:"Язык",topic:"Тема",level:"Сложность",
info:"Выбери тему и уровень. Вопросы перемешиваются в каждом раунде.",
all:"Все системы организма",topics:["Сердце и кровообращение","Мозг и нервная система","Дыхательная система","Пищеварение","Кости и мышцы","Почки и мочевыделение","Эндокринная система","Кровь и иммунитет","Органы чувств"],
levels:["Все уровни","Начальный","Средний","Продвинутый"],levelNames:["Начальный","Средний","Продвинутый"],
start:"Начать битву →",score:"Очки",progress:"Вопрос",streak:"Серия 🔥",next:"Следующий →",finish:"Результаты →",quit:"← Настройки",
correct:"Правильно! +100 очков",wrong:"Не совсем!",answer:"Правильный ответ",fact:"Интересный факт",
result:"🏆 Битва завершена!",correctTotal:"Правильные ответы",accuracy:"Точность",total:"Всего очков",
review:"📚 Разбор ошибок",home:"Выбрать тему",again:"Играть снова ↻",
perfect:"Идеально! Ни одной ошибки!",great:"Отличная работа! Продолжай изучать анатомию.",
good:"Хорошее начало! Разбор ошибок поможет закрепить знания.",practice:"Продолжай тренироваться!",
detail:"Правильных ответов: {c} из {n}.",empty:"Ошибок нет — великолепный результат!",
your:"Твой ответ",footer:"Anatomy Battle • Независимый образовательный проект",
noQuestions:"Для этих настроек нет вопросов. Выбери другой уровень или тему.",
question:"Вопрос",of:"из"
},
kk:{
subtitle:"Адам ағзасын зертте. Біліміңді тексер. Сарапшы бол.",
setup:"⚙️ Ойынды баптау",lang:"Тіл",topic:"Тақырып",level:"Қиындық",
info:"Тақырып пен деңгейді таңда. Сұрақтар әр раундта араластырылады.",
all:"Ағзаның барлық жүйелері",topics:["Жүрек және қан айналымы","Ми және жүйке жүйесі","Тыныс алу жүйесі","Ас қорыту","Сүйектер мен бұлшықеттер","Бүйрек және зәр шығару","Эндокриндік жүйе","Қан және иммунитет","Сезім мүшелері"],
levels:["Барлық деңгей","Бастапқы","Орташа","Жоғары"],levelNames:["Бастапқы","Орташа","Жоғары"],
start:"Ойынды бастау →",score:"Ұпай",progress:"Сұрақ",streak:"Қатарынан 🔥",next:"Келесі →",finish:"Нәтижелер →",quit:"← Баптаулар",
correct:"Дұрыс! +100 ұпай",wrong:"Қате жауап!",answer:"Дұрыс жауап",fact:"Қызықты дерек",
result:"🏆 Ойын аяқталды!",correctTotal:"Дұрыс жауаптар",accuracy:"Дәлдік",total:"Жалпы ұпай",
review:"📚 Қателерді талдау",home:"Тақырып таңдау",again:"Қайта ойнау ↻",
perfect:"Керемет! Қате жоқ!",great:"Жарайсың! Анатомияны зерттеуді жалғастыр.",
good:"Жақсы бастама! Қателерді қайталау біліміңді бекітеді.",practice:"Жаттығуды жалғастыр!",
detail:"Дұрыс жауаптар: {c}/{n}.",empty:"Қате жоқ — тамаша нәтиже!",
your:"Сенің жауабың",footer:"Anatomy Battle • Тәуелсіз білім беру жобасы",
noQuestions:"Бұл баптауларға сұрақ табылмады. Басқа тақырыпты немесе деңгейді таңда.",
question:"Сұрақ",of:"ішінен"
},
en:{
subtitle:"Explore the body. Test your knowledge. Master anatomy.",
setup:"⚙️ Configure your battle",lang:"Language",topic:"Topic",level:"Difficulty",
info:"Choose a topic and difficulty. Questions are shuffled each round.",
all:"All body systems",topics:["Heart & Circulation","Brain & Nervous System","Respiratory System","Digestion","Bones & Muscles","Kidneys & Urinary System","Endocrine System","Blood & Immunity","Sense Organs"],
levels:["All levels","Beginner","Intermediate","Advanced"],levelNames:["Beginner","Intermediate","Advanced"],
start:"Start battle →",score:"Score",progress:"Question",streak:"Streak 🔥",next:"Next →",finish:"See results →",quit:"← Settings",
correct:"Correct! +100 points",wrong:"Not quite!",answer:"Correct answer",fact:"Did you know?",
result:"🏆 Battle complete!",correctTotal:"Correct answers",accuracy:"Accuracy",total:"Total points",
review:"📚 Mistake review",home:"Choose topic",again:"Play again ↻",
perfect:"Perfect! No mistakes!",great:"Excellent work! Keep exploring anatomy.",
good:"Good start! Reviewing mistakes will help you learn.",practice:"Keep practicing!",
detail:"Correct answers: {c} out of {n}.",empty:"No mistakes — excellent result!",
your:"Your answer",footer:"Anatomy Battle • Independent educational project",
noQuestions:"No questions match these settings. Try another topic or difficulty.",
question:"Question",of:"of"
}
};

const T={
heart:[
{d:1,q:["Which organ pumps blood around the body?","Қанды бүкіл денеге айдайтын мүше қайсы?","Which organ pumps blood around the body?"],a:[["Печень","Сердце","Лёгкие","Почки"],["Бауыр","Жүрек","Өкпе","Бүйрек"],["Liver","Heart","Lungs","Kidneys"]],c:1,w:["Сердце сокращается и продвигает кровь по кровеносной системе.","Жүрек жиырылып, қанды қан айналымы жүйесі арқылы айдайды.","The heart contracts to move blood through the circulatory system."],f:["В покое частота сердечных сокращений у взрослых часто составляет около 60–100 ударов в минуту.","Ересектердің тыныштықтағы жүрек соғу жиілігі көбіне минутына 60–100 рет болады.","A typical adult resting heart rate is often around 60–100 beats per minute."]},
{d:2,q:["Какие сосуды несут кровь ОТ сердца?","Қанды жүректен алып шығатын тамырлар қалай аталады?","Which vessels carry blood AWAY from the heart?"],a:[["Вены","Капилляры","Артерии","Альвеолы"],["Көктамырлар","Қылтамырлар","Артериялар","Альвеолалар"],["Veins","Capillaries","Arteries","Alveoli"]],c:2,w:["Артерии несут кровь от сердца, а вены возвращают её к сердцу.","Артериялар қанды жүректен алып шығады, ал көктамырлар оны жүрекке қайтарады.","Arteries carry blood away from the heart; veins return it."],f:["Лёгочные артерии несут кровь к лёгким для газообмена.","Өкпе артериялары қанды газ алмасу үшін өкпеге жеткізеді.","Pulmonary arteries carry blood to the lungs for gas exchange."]},
{d:3,q:["Какая камера сердца выталкивает кровь в аорту?","Жүректің қай қуысы қанды қолқаға айдайды?","Which heart chamber pumps blood into the aorta?"],a:[["Правое предсердие","Левое предсердие","Правый желудочек","Левый желудочек"],["Оң жүрекше","Сол жүрекше","Оң қарынша","Сол қарынша"],["Right atrium","Left atrium","Right ventricle","Left ventricle"]],c:3,w:["Левый желудочек направляет богатую кислородом кровь в аорту.","Сол қарынша оттегіге бай қанды қолқаға айдайды.","The left ventricle pumps oxygen-rich blood into the aorta."],f:["Стенка левого желудочка толще, чем у правого, потому что он качает кровь по всему телу.","Сол қарыншаның қабырғасы қанды бүкіл денеге айдайтындықтан қалыңырақ.","The left ventricle has a thicker wall because it pumps blood throughout the body."]}
],
brain:[
{d:1,q:["Какой орган является главным центром управления нервной системой?","Жүйке жүйесінің негізгі басқару орталығы қайсы?","What is the main control center of the nervous system?"],a:[["Мозг","Желудок","Печень","Селезёнка"],["Ми","Асқазан","Бауыр","Көкбауыр"],["Brain","Stomach","Liver","Spleen"]],c:0,w:["Мозг обрабатывает информацию и координирует множество функций организма.","Ми ақпаратты өңдеп, ағзаның көптеген қызметін үйлестіреді.","The brain processes information and coordinates many body functions."],f:["Головной и спинной мозг составляют центральную нервную систему.","Бас миы мен жұлын орталық жүйке жүйесін құрайды.","The brain and spinal cord make up the central nervous system."]},
{d:2,q:["Какие клетки передают сигналы в нервной системе?","Жүйке жүйесінде сигналдарды қандай жасушалар жеткізеді?","Which cells transmit signals in the nervous system?"],a:[["Эритроциты","Нейроны","Остеоциты","Тромбоциты"],["Эритроциттер","Нейрондар","Остеоциттер","Тромбоциттер"],["Red blood cells","Neurons","Osteocytes","Platelets"]],c:1,w:["Нейроны используют электрические импульсы и химические сигналы для связи.","Нейрондар байланыс үшін электрлік импульстар мен химиялық сигналдарды пайдаланады.","Neurons communicate using electrical impulses and chemical signals."],f:["Контакт между нейронами часто называется синапсом.","Нейрондар арасындағы байланыс орны синапс деп аталады.","The junction between communicating neurons is called a synapse."]},
{d:3,q:["Какая структура особенно важна для равновесия и координации движений?","Тепе-теңдік пен қимыл үйлесіміне қай құрылым ерекше маңызды?","Which structure is especially important for balance and movement coordination?"],a:[["Гипоталамус","Мозжечок","Гиппокамп","Зрительный нерв"],["Гипоталамус","Мишық","Гиппокамп","Көру жүйкесі"],["Hypothalamus","Cerebellum","Hippocampus","Optic nerve"]],c:1,w:["Мозжечок участвует в координации движений, равновесии и моторном обучении.","Мишық қимылды үйлестіруге, тепе-теңдікке және қозғалыс дағдыларын үйренуге қатысады.","The cerebellum helps coordinate movement, balance, and motor learning."],f:["Мозжечок содержит огромное количество нейронов и играет ключевую роль в точности движений.","Мишықта көптеген нейрондар орналасқан және ол қимыл дәлдігіне маңызды.","The cerebellum contains many neurons and helps make movements precise."]}
],
lungs:[
{d:1,q:["Где в лёгких происходит газообмен?","Өкпеде газ алмасу қай жерде жүреді?","Where does gas exchange take place in the lungs?"],a:[["Трахея","Диафрагма","Альвеолы","Рёбра"],["Кеңірдек","Көкет","Альвеолалар","Қабырғалар"],["Trachea","Diaphragm","Alveoli","Ribs"]],c:2,w:["В альвеолах кислород поступает в кровь, а углекислый газ выходит из неё.","Альвеолаларда оттегі қанға өтеді, ал көмірқышқыл газы қаннан шығады.","Oxygen enters the blood and carbon dioxide leaves it at the alveoli."],f:["Альвеолы окружены сетью крошечных кровеносных сосудов — капилляров.","Альвеолаларды қылтамырлардың ұсақ торы қоршап жатады.","Alveoli are surrounded by a network of tiny blood vessels called capillaries."]},
{d:2,q:["Какая мышца играет главную роль при спокойном вдохе?","Қалыпты тыныс алуда негізгі рөл атқаратын бұлшықет қайсы?","Which muscle plays the main role in quiet inhalation?"],a:[["Бицепс","Диафрагма","Трицепс","Икроножная мышца"],["Бицепс","Көкет","Трицепс","Балтыр бұлшықеті"],["Biceps","Diaphragm","Triceps","Calf muscle"]],c:1,w:["При сокращении диафрагма опускается, увеличивая объём грудной полости.","Көкет жиырылғанда төмен түсіп, кеуде қуысының көлемін арттырады.","When the diaphragm contracts, it moves down and expands the chest cavity."],f:["Дыхание регулируется автоматически, но человек также может ненадолго управлять им сознательно.","Тыныс алу автоматты реттеледі, бірақ адам оны қысқа уақыт саналы түрде басқара алады.","Breathing is automatic, but people can also control it voluntarily for a time."]},
{d:3,q:["Почему кислород обычно переходит из альвеол в кровь?","Оттегі неліктен әдетте альвеоладан қанға өтеді?","Why does oxygen normally move from alveoli into blood?"],a:[["Из-за диффузии по градиенту парциального давления","Из-за работы желудка","Из-за сокращения костей","Из-за фильтрации почек"],["Парциалдық қысым айырмасына байланысты диффузия арқылы","Асқазан жұмысына байланысты","Сүйектердің жиырылуына байланысты","Бүйрек сүзуіне байланысты"],["Diffusion down a partial-pressure gradient","Stomach activity","Bone contraction","Kidney filtration"]],c:0,w:["Газы диффундируют из области более высокого парциального давления в область более низкого.","Газдар парциалдық қысымы жоғары аймақтан төмен аймаққа қарай диффузияланады.","Gases diffuse from higher to lower partial pressure."],f:["Углекислый газ движется в противоположном направлении, из крови в альвеолы.","Көмірқышқыл газы кері бағытта, қаннан альвеолаларға өтеді.","Carbon dioxide moves in the opposite direction, from blood into the alveoli."]}
],
digest:[
{d:1,q:["Где происходит большая часть всасывания питательных веществ?","Қоректік заттардың көп бөлігі қай жерде сіңеді?","Where does most nutrient absorption occur?"],a:[["Пищевод","Тонкая кишка","Толстая кишка","Ротовая полость"],["Өңеш","Аш ішек","Тоқ ішек","Ауыз қуысы"],["Esophagus","Small intestine","Large intestine","Mouth"]],c:1,w:["Тонкая кишка имеет большую поверхность для всасывания питательных веществ.","Аш ішектің қоректік заттарды сіңіруге арналған үлкен беткейі бар.","The small intestine has a large surface area for nutrient absorption."],f:["Микроскопические ворсинки увеличивают поверхность тонкой кишки.","Микроскопиялық бүрлер аш ішектің беткейін ұлғайтады.","Microscopic villi increase the small intestine's surface area."]},
{d:2,q:["Какой орган производит желчь?","Өтті қай мүше өндіреді?","Which organ produces bile?"],a:[["Поджелудочная железа","Желчный пузырь","Печень","Селезёнка"],["Ұйқыбез","Өт қабы","Бауыр","Көкбауыр"],["Pancreas","Gallbladder","Liver","Spleen"]],c:2,w:["Печень производит желчь, а желчный пузырь хранит и концентрирует её.","Бауыр өт өндіреді, ал өт қабы оны сақтап, қоюландырады.","The liver produces bile; the gallbladder stores and concentrates it."],f:["Желчь помогает эмульгировать жиры, облегчая их переваривание.","Өт майларды эмульсиялап, олардың қорытылуын жеңілдетеді.","Bile emulsifies fats, helping their digestion."]},
{d:3,q:["Как ферменты поджелудочной железы помогают пищеварению?","Ұйқыбез ферменттері ас қорытуға қалай көмектеседі?","How do pancreatic enzymes help digestion?"],a:[["Они расщепляют белки, жиры и углеводы","Они переносят кислород","Они создают желчь","Они фильтруют кровь"],["Олар ақуыздарды, майларды және көмірсуларды ыдыратады","Олар оттегін тасымалдайды","Олар өт түзеді","Олар қанды сүзеді"],["They break down proteins, fats, and carbohydrates","They transport oxygen","They produce bile","They filter blood"]],c:0,w:["Ферменты поджелудочной железы расщепляют основные компоненты пищи на более мелкие молекулы.","Ұйқыбез ферменттері тағамның негізгі құрамдастарын ұсақ молекулаларға ыдыратады.","Pancreatic enzymes break major food components into smaller molecules."],f:["Поджелудочная железа также выделяет гормоны, включая инсулин.","Ұйқыбез инсулин сияқты гормондарды да бөледі.","The pancreas also secretes hormones, including insulin."]}
],
bones:[
{d:1,q:["Что защищает головной мозг?","Бас миын не қорғайды?","What protects the brain?"],a:[["Рёбра","Череп","Таз","Лопатка"],["Қабырғалар","Бас сүйек","Жамбас","Жауырын"],["Ribs","Skull","Pelvis","Shoulder blade"]],c:1,w:["Череп окружает мозг и защищает его от многих внешних воздействий.","Бас сүйек миды қоршап, оны көптеген сыртқы әсерлерден қорғайды.","The skull surrounds and protects the brain."],f:["У взрослого человека обычно 206 костей, хотя индивидуальные особенности встречаются.","Ересек адамның қаңқасында әдетте 206 сүйек болады.","An adult skeleton usually has 206 bones."]},
{d:2,q:["Какой тип ткани соединяет мышцы с костями?","Бұлшықеттерді сүйектерге қандай тін жалғайды?","What type of tissue connects muscles to bones?"],a:[["Связки","Сухожилия","Хрящи","Эпителий"],["Байламдар","Сіңірлер","Шеміршектер","Эпителий"],["Ligaments","Tendons","Cartilage","Epithelium"]],c:1,w:["Сухожилия соединяют мышцы с костями; связки обычно соединяют кости друг с другом.","Сіңірлер бұлшықеттерді сүйектерге жалғайды, ал байламдар көбіне сүйектерді өзара байланыстырады.","Tendons connect muscles to bones; ligaments usually connect bones to bones."],f:["Костная ткань постоянно перестраивается в течение жизни.","Сүйек тіні өмір бойы үздіксіз жаңарып отырады.","Bone tissue is continuously remodeled throughout life."]},
{d:3,q:["Какие клетки отвечают за разрушение старой костной ткани при её обновлении?","Сүйек жаңарғанда ескі сүйек тінін қандай жасушалар ыдыратады?","Which cells break down old bone during remodeling?"],a:[["Остеобласты","Остеокласты","Эритроциты","Хондроциты"],["Остеобласттар","Остеокласттар","Эритроциттер","Хондроциттер"],["Osteoblasts","Osteoclasts","Red blood cells","Chondrocytes"]],c:1,w:["Остеокласты рассасывают костную ткань; остеобласты участвуют в образовании новой.","Остеокласттар сүйек тінін ыдыратады, ал остеобласттар жаңа тін түзеді.","Osteoclasts resorb bone, while osteoblasts help build new bone."],f:["Баланс костного разрушения и формирования важен для прочности скелета.","Сүйектің ыдырауы мен түзілуінің тепе-теңдігі қаңқаның беріктігі үшін маңызды.","Balanced bone resorption and formation help maintain skeletal strength."]}
],
kidneys:[
{d:1,q:["Какие органы фильтруют кровь и образуют мочу?","Қанды сүзіп, зәр түзетін мүшелер қайсы?","Which organs filter blood and produce urine?"],a:[["Лёгкие","Почки","Сердце","Желудок"],["Өкпе","Бүйрек","Жүрек","Асқазан"],["Lungs","Kidneys","Heart","Stomach"]],c:1,w:["Почки удаляют из крови отходы и избыток воды, формируя мочу.","Бүйректер қандағы қалдықтар мен артық суды шығарып, зәр түзеді.","The kidneys remove waste and excess water from blood to produce urine."],f:["Почки также помогают регулировать водно-солевой баланс.","Бүйректер су-тұз теңгерімін реттеуге де көмектеседі.","The kidneys also help regulate fluid and electrolyte balance."]},
{d:2,q:["Как называется функциональная единица почки?","Бүйректің құрылымдық-қызметтік бірлігі қалай аталады?","What is the functional unit of the kidney?"],a:[["Нейрон","Нефрон","Альвеола","Остеон"],["Нейрон","Нефрон","Альвеола","Остеон"],["Neuron","Nephron","Alveolus","Osteon"]],c:1,w:["Нефрон фильтрует кровь и участвует в образовании мочи.","Нефрон қанды сүзіп, зәр түзілуіне қатысады.","The nephron filters blood and helps form urine."],f:["В каждой почке обычно около миллиона нефронов, хотя число варьируется.","Әр бүйректе әдетте шамамен миллион нефрон болады, бірақ саны әртүрлі болуы мүмкін.","Each kidney typically has around a million nephrons, though numbers vary."]},
{d:3,q:["Где в нефроне происходит основная фильтрация крови?","Нефронның қай бөлігінде қанның негізгі сүзгіленуі жүреді?","Where does the main filtration of blood occur in a nephron?"],a:[["В клубочке капилляров","В мочеточнике","В мочевом пузыре","В собирательном протоке только"],["Қылтамыр шумағында","Несепағарда","Қуықта","Тек жинағыш түтікшеде"],["Glomerulus","Ureter","Urinary bladder","Only the collecting duct"]],c:0,w:["Клубочек фильтрует жидкость из крови в капсулу нефрона.","Қылтамыр шумағы сұйықтықты қаннан нефрон капсуласына сүзеді.","The glomerulus filters fluid from blood into the nephron capsule."],f:["После фильтрации канальцы возвращают организму много воды и нужных веществ.","Сүзуден кейін өзекшелер судың және пайдалы заттардың көп бөлігін қайта сіңіреді.","After filtration, tubules reabsorb much of the water and useful substances."]}
],
hormones:[
{d:1,q:["Какой орган производит инсулин?","Инсулинді қай мүше өндіреді?","Which organ produces insulin?"],a:[["Щитовидная железа","Поджелудочная железа","Селезёнка","Желчный пузырь"],["Қалқанша без","Ұйқыбез","Көкбауыр","Өт қабы"],["Thyroid","Pancreas","Spleen","Gallbladder"]],c:1,w:["Инсулин помогает регулировать уровень глюкозы в крови.","Инсулин қандағы глюкоза деңгейін реттеуге көмектеседі.","Insulin helps regulate blood glucose levels."],f:["Инсулин вырабатывают бета-клетки островков поджелудочной железы.","Инсулинді ұйқыбез аралшықтарының бета-жасушалары өндіреді.","Insulin is produced by beta cells in the pancreatic islets."]},
{d:2,q:["Какая железа вырабатывает гормоны, регулирующие обмен веществ?","Зат алмасуды реттейтін гормондарды қай без өндіреді?","Which gland produces hormones that regulate metabolism?"],a:[["Щитовидная железа","Слюнная железа","Слёзная железа","Потовая железа"],["Қалқанша без","Сілекей безі","Жас безі","Тер безі"],["Thyroid gland","Salivary gland","Lacrimal gland","Sweat gland"]],c:0,w:["Гормоны щитовидной железы влияют на обмен веществ и работу многих органов.","Қалқанша без гормондары зат алмасуға және көптеген мүшелердің қызметіне әсер етеді.","Thyroid hormones influence metabolism and many organ functions."],f:["Для синтеза гормонов щитовидной железе необходим йод.","Қалқанша без гормондарын түзу үшін йод қажет.","The thyroid requires iodine to make its hormones."]},
{d:3,q:["Какая структура мозга помогает контролировать работу гипофиза и поддерживать гомеостаз?","Мидың қай құрылымы гипофизді реттеп, гомеостазды сақтауға көмектеседі?","Which brain structure helps control the pituitary and maintain homeostasis?"],a:[["Гипоталамус","Мозжечок","Затылочная доля","Мозолистое тело"],["Гипоталамус","Мишық","Шүйде бөлігі","Ми сүйелді денесі"],["Hypothalamus","Cerebellum","Occipital lobe","Corpus callosum"]],c:0,w:["Гипоталамус связывает нервную систему с эндокринной и регулирует многие внутренние процессы.","Гипоталамус жүйке және эндокриндік жүйелерді байланыстырып, ішкі үдерістерді реттейді.","The hypothalamus links the nervous and endocrine systems and regulates internal processes."],f:["Гипоталамус участвует в регуляции температуры тела, жажды и голода.","Гипоталамус дене температурасын, шөлдеу мен аштықты реттеуге қатысады.","The hypothalamus helps regulate body temperature, thirst, and hunger."]}
],
blood:[
{d:1,q:["Какие клетки переносят большую часть кислорода в крови?","Қанда оттегінің көп бөлігін қандай жасушалар тасымалдайды?","Which cells carry most oxygen in the blood?"],a:[["Эритроциты","Тромбоциты","Нейроны","Остеокласты"],["Эритроциттер","Тромбоциттер","Нейрондар","Остеокластар"],["Red blood cells","Platelets","Neurons","Osteoclasts"]],c:0,w:["Эритроциты содержат гемоглобин, который связывает кислород.","Эритроциттерде оттегін байланыстыратын гемоглобин бар.","Red blood cells contain hemoglobin, which binds oxygen."],f:["Зрелые эритроциты человека обычно не имеют ядра.","Адамның жетілген эритроциттерінде әдетте ядро болмайды.","Mature human red blood cells typically lack a nucleus."]},
{d:2,q:["Какие компоненты крови особенно важны для образования тромбов?","Қан ұйындысының түзілуіне қай қан компоненттері ерекше маңызды?","Which blood components are especially important in clot formation?"],a:[["Тромбоциты","Эритроциты только","Нейроны","Альвеолы"],["Тромбоциттер","Тек эритроциттер","Нейрондар","Альвеолалар"],["Platelets","Red blood cells alone","Neurons","Alveoli"]],c:0,w:["Тромбоциты участвуют в образовании первичной пробки при повреждении сосуда.","Қан тамыры зақымданғанда тромбоциттер бастапқы тығын түзуге қатысады.","Platelets help form an initial plug when a blood vessel is injured."],f:["Свертывание крови включает сложную последовательность реакций белков плазмы.","Қанның ұюы плазма ақуыздарының күрделі реакциялар тізбегін қамтиды.","Blood clotting involves a complex sequence of plasma protein reactions."]},
{d:3,q:["Как называется способность иммунной системы распознавать конкретный антиген и реагировать на него?","Иммундық жүйенің белгілі бір антигенді танып, оған жауап беру қабілеті қалай аталады?","What is the immune system's ability to recognize and respond to a specific antigen called?"],a:[["Специфический иммунитет","Дыхание","Фильтрация","Перистальтика"],["Арнайы иммунитет","Тыныс алу","Сүзілу","Перистальтика"],["Adaptive immunity","Respiration","Filtration","Peristalsis"]],c:0,w:["Адаптивный иммунитет использует специфические лимфоциты и может формировать иммунологическую память.","Бейімделгіш иммунитет арнайы лимфоциттерді пайдаланып, иммунологиялық жад қалыптастыра алады.","Adaptive immunity uses specific lymphocytes and can form immunological memory."],f:["В-клетки могут превращаться в плазматические клетки, производящие антитела.","В-жасушалар антиденелер өндіретін плазмалық жасушаларға айнала алады.","B cells can become plasma cells that produce antibodies."]}
],
senses:[
{d:1,q:["Какой орган чувств отвечает за зрение?","Қай сезім мүшесі көруге жауап береді?","Which sense organ is responsible for vision?"],a:[["Ухо","Глаз","Язык","Кожа"],["Құлақ","Көз","Тіл","Тері"],["Ear","Eye","Tongue","Skin"]],c:1,w:["Глаз воспринимает свет и преобразует его в нервные сигналы.","Көз жарықты қабылдап, оны жүйке сигналдарына айналдырады.","The eye detects light and converts it into nerve signals."],f:["Сетчатка содержит фоторецепторы, которые воспринимают свет.","Торлы қабықта жарықты қабылдайтын фоторецепторлар бар.","The retina contains photoreceptors that detect light."]},
{d:2,q:["Какая часть внутреннего уха особенно важна для слуха?","Ішкі құлақтың қай бөлігі есту үшін маңызды?","Which part of the inner ear is essential for hearing?"],a:[["Улитка","Полукружные каналы только","Барабанная перепонка","Евстахиева труба"],["Ұлу","Тек жартылай шеңберлі өзектер","Дабыл жарғағы","Есту түтігі"],["Cochlea","Semicircular canals only","Eardrum","Eustachian tube"]],c:0,w:["Улитка содержит структуры, преобразующие звуковые колебания в нервные сигналы.","Ұлу дыбыс тербелістерін жүйке сигналдарына айналдыратын құрылымдарды қамтиды.","The cochlea contains structures that convert sound vibrations into nerve signals."],f:["Полукружные каналы внутреннего уха помогают поддерживать равновесие.","Ішкі құлақтың жартылай шеңберлі өзектері тепе-теңдікті сақтауға көмектеседі.","The semicircular canals of the inner ear help maintain balance."]},
{d:3,q:["Какие рецепторы сетчатки наиболее важны для цветового зрения при ярком свете?","Жарық ортада түсті көру үшін торлы қабықтың қай рецепторлары маңызды?","Which retinal receptors are most important for color vision in bright light?"],a:[["Палочки","Колбочки","Ноцицепторы","Терморецепторы"],["Таяқшалар","Сауытшалар","Ноцицепторлар","Терморецепторлар"],["Rods","Cones","Nociceptors","Thermoreceptors"]],c:1,w:["Колбочки обеспечивают цветовое зрение и высокую остроту зрения при достаточном освещении.","Сауытшалар жеткілікті жарықта түсті және анық көруді қамтамасыз етеді.","Cones enable color vision and high visual acuity in sufficient light."],f:["Палочки более чувствительны к слабому освещению, но почти не различают цвета.","Таяқшалар әлсіз жарыққа сезімтал, бірақ түстерді нашар ажыратады.","Rods are more sensitive to dim light but do not distinguish colors well."]}
]
};

const keys=["heart","brain","lungs","digest","bones","kidneys","hormones","blood","senses"];
let lang="ru",round=[],index=0,score=0,streak=0,misses=[],answered=false;

const $=id=>document.getElementById(id);
function tr(){return ui[lang]}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}

function setupText(){
const u=tr();
$("subtitle").textContent=u.subtitle;
$("setupTitle").textContent=u.setup;
$("langLabel").textContent=u.lang;
$("topicLabel").textContent=u.topic;
$("levelLabel").textContent=u.level;
$("setupInfo").textContent=u.info;
$("startBtn").textContent=u.start;
$("scoreLabel").textContent=u.score;
$("progressLabel").textContent=u.progress;
$("streakLabel").textContent=u.streak;
$("quitBtn").textContent=u.quit;
$("correctLabel").textContent=u.correctTotal;
$("accuracyLabel").textContent=u.accuracy;
$("totalLabel").textContent=u.total;
$("resultTitle").textContent=u.result;
$("reviewTitle").textContent=u.review;
$("homeBtn").textContent=u.home;
$("againBtn").textContent=u.again;
$("footer").textContent=u.footer;
const topicValue=$("topic").value||"all";
$("topic").innerHTML="";
let all=document.createElement("option");all.value="all";all.textContent=u.all;$("topic").appendChild(all);
keys.forEach((key,i)=>{let o=document.createElement("option");o.value=key;o.textContent=u.topics[i];$("topic").appendChild(o)});
$("topic").value=topicValue;
const levelValue=$("level").value||"0";
$("level").innerHTML="";
u.levels.forEach((name,i)=>{let o=document.createElement("option");o.value=String(i);o.textContent=name;$("level").appendChild(o)});
$("level").value=levelValue;
}
$("lang").addEventListener("change",()=>{lang=$("lang").value;setupText()});
lang=$("lang").value;
setupText();

function startGame(){
const topic=$("topic").value,level=Number($("level").value);
let pool=[];
keys.forEach(key=>{
if(topic!=="all"&&topic!==key)return;
T[key].forEach(item=>{
if(level!==0&&item.d!==level)return;
pool.push({...item,topicIndex:keys.indexOf(key),topicKey:key});
});
});
if(pool.length===0){alert(tr().noQuestions);return}
round=shuffle(pool);
index=0;score=0;streak=0;misses=[];answered=false;
$("score").textContent="0";$("streak").textContent="0";
$("setup").classList.add("hidden");
$("results").classList.add("hidden");
$("game").classList.remove("hidden");
render();
}

function render(){
answered=false;
const u=tr(),item=round[index];
$("count").textContent=`${index+1}/${round.length}`;
$("bar").style.width=`${index/round.length*100}%`;
$("category").textContent=u.topics[item.topicIndex];
$("difficulty").textContent=u.levelNames[item.d-1];
$("question").textContent=item.q[lang==="ru"?0:lang==="kk"?1:2];
$("feedback").innerHTML="";
$("options").innerHTML="";
$("nextBtn").disabled=true;
$("nextBtn").textContent=index===round.length-1?u.finish:u.next;
const choices=item.a[lang==="ru"?0:lang==="kk"?1:2];
choices.forEach((answer,i)=>{
const b=document.createElement("button");
b.className="option";
const letter=document.createElement("span");
letter.className="letter";
letter.textContent=String.fromCharCode(65+i);
const text=document.createElement("span");
text.textContent=answer;
b.append(letter,text);
b.onclick=()=>choose(i,b);
$("options").appendChild(b);
});
}

function choose(choice,button){
if(answered)return;
answered=true;
const u=tr(),item=round[index],li=lang==="ru"?0:lang==="kk"?1:2;
const correctAnswer=item.a[li][item.c];
const buttons=[...$("options").querySelectorAll("button")];
buttons.forEach(b=>b.disabled=true);
buttons[item.c].classList.add("correct");
if(choice===item.c){
score+=100;streak++;
$("feedback").innerHTML=`<strong>✓ ${u.correct}</strong>`;
}else{
streak=0;button.classList.add("wrong");
misses.push({item,choice});
$("feedback").innerHTML=`<strong>✗ ${u.wrong}</strong><br>${u.your}: ${item.a[li][choice]}<br>${u.answer}: ${correctAnswer}`;
}
const explanation=document.createElement("p");
explanation.textContent=item.w[li];
$("feedback").appendChild(explanation);
const fact=document.createElement("div");
fact.className="fact";
const strong=document.createElement("strong");
strong.textContent="🔬 "+u.fact;
const factText=document.createElement("div");
factText.textContent=item.f[li];
fact.append(strong,factText);
$("feedback").appendChild(fact);
$("score").textContent=score;
$("streak").textContent=streak;
$("nextBtn").disabled=false;
}

function nextQuestion(){
if(!answered)return;
index++;
if(index<round.length)render();else showResults();
}

function showResults(){
const u=tr(),correct=round.length-misses.length;
$("game").classList.add("hidden");
$("results").classList.remove("hidden");
$("bar").style.width="100%";
$("correctTotal").textContent=`${correct}/${round.length}`;
$("accuracy").textContent=Math.round(correct/round.length*100)+"%";
$("totalScore").textContent=score;
$("resultMessage").textContent=correct===round.length?u.perfect:correct/round.length>=.7?u.great:correct/round.length>=.4?u.good:u.practice;
$("resultDetail").textContent=u.detail.replace("{c}",correct).replace("{n}",round.length);
$("review").innerHTML="";
if(misses.length===0){
$("review").textContent=u.empty;
return;
}
misses.forEach(({item,choice},i)=>{
const li=lang==="ru"?0:lang==="kk"?1:2;
const div=document.createElement("div");
div.className="review";
const title=document.createElement("strong");
title.textContent=`${i+1}. ${item.q[li]}`;
const answer=document.createElement("p");
answer.textContent=`${u.your}: ${item.a[li][choice]} · ${u.answer}: ${item.a[li][item.c]}`;
const explanation=document.createElement("p");
explanation.className="muted";
explanation.textContent=item.w[li];
div.append(title,answer,explanation);
$("review").appendChild(div);
});
}

function backToSetup(){
$("game").classList.add("hidden");
$("results").classList.add("hidden");
$("setup").classList.remove("hidden");
}