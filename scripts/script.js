const words = [
    { "cardNumber": 1, "wordNumber": 1, "ru": "Мрамор", "en": "Marble" },
    { "cardNumber": 1, "wordNumber": 2, "ru": "Зонтик", "en": "Umbrella" },
    { "cardNumber": 1, "wordNumber": 3, "ru": "Гусеница", "en": "Caterpillar" },
    { "cardNumber": 1, "wordNumber": 4, "ru": "Чили", "en": "Chile" },
    { "cardNumber": 1, "wordNumber": 5, "ru": "Штопор", "en": "Corkscrew" },
    { "cardNumber": 1, "wordNumber": 6, "ru": "Классная доска", "en": "Chalkboard" },
    { "cardNumber": 2, "wordNumber": 1, "ru": "Кактус", "en": "Cactus" },
    { "cardNumber": 2, "wordNumber": 2, "ru": "Иглу", "en": "Igloo" },
    { "cardNumber": 2, "wordNumber": 3, "ru": "Попкорн", "en": "Popcorn" },
    { "cardNumber": 2, "wordNumber": 4, "ru": "Пингвин", "en": "Penguin" },
    { "cardNumber": 2, "wordNumber": 5, "ru": "Наушники", "en": "Headphones" },
    { "cardNumber": 2, "wordNumber": 6, "ru": "Тигр", "en": "Tiger" },
    { "cardNumber": 3, "wordNumber": 1, "ru": "Печь", "en": "Quill" },
    { "cardNumber": 3, "wordNumber": 2, "ru": "Перо", "en": "Feather" },
    { "cardNumber": 3, "wordNumber": 3, "ru": "Метроном", "en": "Metronome" },
    { "cardNumber": 3, "wordNumber": 4, "ru": "Сыр", "en": "Cheese" },
    { "cardNumber": 3, "wordNumber": 5, "ru": "Палочка", "en": "Wand" },
    { "cardNumber": 3, "wordNumber": 6, "ru": "Утка", "en": "Duck" },
    { "cardNumber": 4, "wordNumber": 1, "ru": "Свинья", "en": "Pig" },
    { "cardNumber": 4, "wordNumber": 2, "ru": "Подушка", "en": "Pillow" },
    { "cardNumber": 4, "wordNumber": 3, "ru": "Подлодка", "en": "Submarine" },
    { "cardNumber": 4, "wordNumber": 4, "ru": "Айсберг", "en": "Iceberg" },
    { "cardNumber": 4, "wordNumber": 5, "ru": "Небоскрёб", "en": "Skyscraper" },
    { "cardNumber": 4, "wordNumber": 6, "ru": "Шляпа", "en": "Hat" },
    { "cardNumber": 5, "wordNumber": 1, "ru": "Монокль", "en": "Monocle " },
    { "cardNumber": 5, "wordNumber": 2, "ru": "Перо", "en": "Feather" },
    { "cardNumber": 5, "wordNumber": 3, "ru": "Книга", "en": "Book" },
    { "cardNumber": 5, "wordNumber": 4, "ru": "Мелок", "en": "Chalk" },
    { "cardNumber": 5, "wordNumber": 5, "ru": "Сани", "en": "Sleigh" },
    { "cardNumber": 5, "wordNumber": 6, "ru": "Морской конёк", "en": "Seahorse" },
    { "cardNumber": 6, "wordNumber": 1, "ru": "Корона", "en": "Crown" },
    { "cardNumber": 6, "wordNumber": 2, "ru": "Воздушный шар", "en": "Balloon" },
    { "cardNumber": 6, "wordNumber": 3, "ru": "Изгородь", "en": "Fence" },
    { "cardNumber": 6, "wordNumber": 4, "ru": "Степлер", "en": "Stapler" },
    { "cardNumber": 6, "wordNumber": 5, "ru": "Молоток", "en": "Hammer" },
    { "cardNumber": 6, "wordNumber": 6, "ru": "Шлем", "en": "Helmet" },
    { "cardNumber": 7, "wordNumber": 1, "ru": "Гриль", "en": "Grill" },
    { "cardNumber": 7, "wordNumber": 2, "ru": "Печь", "en": "Stove" },
    { "cardNumber": 7, "wordNumber": 3, "ru": "Принтер", "en": "Printer" },
    { "cardNumber": 7, "wordNumber": 4, "ru": "Яйцо", "en": "Egg" },
    { "cardNumber": 7, "wordNumber": 5, "ru": "Поводок", "en": "Leash" },
    { "cardNumber": 7, "wordNumber": 6, "ru": "Термос", "en": "Thermos" },
    { "cardNumber": 8, "wordNumber": 1, "ru": "Гидрант", "en": "Hydrant" },
    { "cardNumber": 8, "wordNumber": 2, "ru": "Карандаш", "en": "Pencil" },
    { "cardNumber": 8, "wordNumber": 3, "ru": "Сарай", "en": "Barn" },
    { "cardNumber": 8, "wordNumber": 4, "ru": "Печать", "en": "Seal" },
    { "cardNumber": 8, "wordNumber": 5, "ru": "Утконос", "en": "Platypus" },
    { "cardNumber": 8, "wordNumber": 6, "ru": "Правитель", "en": "Governor" },
    { "cardNumber": 9, "wordNumber": 1, "ru": "Трофей", "en": " Trophy" },
    { "cardNumber": 9, "wordNumber": 2, "ru": "Пума", "en": " Cougar" },
    { "cardNumber": 9, "wordNumber": 3, "ru": "Лиса", "en": " Fox" },
    { "cardNumber": 9, "wordNumber": 4, "ru": "Бумажник", "en": " Wallet" },
    { "cardNumber": 9, "wordNumber": 5, "ru": "Павлин", "en": " Peacock" },
    { "cardNumber": 9, "wordNumber": 6, "ru": "Рубин", "en": " Ruby" },
    { "cardNumber": 10, "wordNumber": 1, "ru": "Пила", "en": " Saw" },
    { "cardNumber": 10, "wordNumber": 2, "ru": "Вишня", "en": " Cherry" },
    { "cardNumber": 10, "wordNumber": 3, "ru": "Живой мертвец", "en": " Living dead" },
    { "cardNumber": 10, "wordNumber": 4, "ru": "Стервятник", "en": " Vulture" },
    { "cardNumber": 10, "wordNumber": 5, "ru": "Нож", "en": " Knife" },
    { "cardNumber": 10, "wordNumber": 6, "ru": "Крыса", "en": " Rat" },
    { "cardNumber": 11, "wordNumber": 1, "ru": "Камера", "en": " Camera" },
    { "cardNumber": 11, "wordNumber": 2, "ru": "Вилка", "en": " Fork" },
    { "cardNumber": 11, "wordNumber": 3, "ru": "Кит", "en": " Whale" },
    { "cardNumber": 11, "wordNumber": 4, "ru": "Спичка", "en": " Match" },
    { "cardNumber": 11, "wordNumber": 5, "ru": "Часы", "en": " Clock" },
    { "cardNumber": 11, "wordNumber": 6, "ru": "Зеркало", "en": " Mirror" },
    { "cardNumber": 12, "wordNumber": 1, "ru": "Гамак", "en": " Hammock" },
    { "cardNumber": 12, "wordNumber": 2, "ru": "Коробка", "en": " Box" },
    { "cardNumber": 12, "wordNumber": 3, "ru": "Keкс", "en": " Cupcake" },
    { "cardNumber": 12, "wordNumber": 4, "ru": "Арфа", "en": " Harp" },
    { "cardNumber": 12, "wordNumber": 5, "ru": "Динозавр", "en": " Dinosaur" },
    { "cardNumber": 12, "wordNumber": 6, "ru": "Гитара", "en": " Guitar" },
    { "cardNumber": 13, "wordNumber": 1, "ru": "Цепь", "en": " Chain " },
    { "cardNumber": 13, "wordNumber": 2, "ru": "Мёд", "en": "Honey" },
    { "cardNumber": 13, "wordNumber": 3, "ru": "Палатка", "en": "Tent" },
    { "cardNumber": 13, "wordNumber": 4, "ru": "Полотенце", "en": "Towel" },
    { "cardNumber": 13, "wordNumber": 5, "ru": "Арахис", "en": "Peanut" },
    { "cardNumber": 13, "wordNumber": 6, "ru": "Пицца", "en": "Pizza" },
    { "cardNumber": 14, "wordNumber": 1, "ru": "Ковш", "en": "Ladle" },
    { "cardNumber": 14, "wordNumber": 2, "ru": "Статуя", "en": "Statue" },
    { "cardNumber": 14, "wordNumber": 3, "ru": "Кошка", "en": "Cat" },
    { "cardNumber": 14, "wordNumber": 4, "ru": "Раковина", "en": "Sink" },
    { "cardNumber": 14, "wordNumber": 5, "ru": "Колбаса", "en": "Sausage" },
    { "cardNumber": 14, "wordNumber": 6, "ru": "Олень", "en": "Deer" },
    { "cardNumber": 15, "wordNumber": 1, "ru": "Гаечный ключ", "en": "Wrench" },
    { "cardNumber": 15, "wordNumber": 2, "ru": "Якорь", "en": "Anchor" },
    { "cardNumber": 15, "wordNumber": 3, "ru": "Лестница", "en": "Ladder" },
    { "cardNumber": 15, "wordNumber": 4, "ru": "Череп", "en": "Skull" },
    { "cardNumber": 15, "wordNumber": 5, "ru": "Свист", "en": "Whistle" },
    { "cardNumber": 15, "wordNumber": 6, "ru": "Скрипка", "en": "Violin" },
    { "cardNumber": 16, "wordNumber": 1, "ru": "Хлеб", "en": "Bread" },
    { "cardNumber": 16, "wordNumber": 2, "ru": "Униформа", "en": "Uniform" },
    { "cardNumber": 16, "wordNumber": 3, "ru": "Палочки", "en": "Chopsticks" },
    { "cardNumber": 16, "wordNumber": 4, "ru": "Вилы", "en": "Pitchfork" },
    { "cardNumber": 16, "wordNumber": 5, "ru": "Инвалидное кресло", "en": "Wheelchair" },
    { "cardNumber": 16, "wordNumber": 6, "ru": "Медуза", "en": "Jellyfish " },
    { "cardNumber": 17, "wordNumber": 1, "ru": "Журнал", "en": "Magazine" },
    { "cardNumber": 17, "wordNumber": 2, "ru": "Солнце", "en": "Sun" },
    { "cardNumber": 17, "wordNumber": 3, "ru": "Лошадь", "en": "Horse" },
    { "cardNumber": 17, "wordNumber": 4, "ru": "Облако", "en": "Cloud" },
    { "cardNumber": 17, "wordNumber": 5, "ru": "Метла", "en": "Broom" },
    { "cardNumber": 17, "wordNumber": 6, "ru": "Морская звезда", "en": "Starfish" },
    { "cardNumber": 18, "wordNumber": 1, "ru": "Ананас", "en": "Pineapple" },
    { "cardNumber": 18, "wordNumber": 2, "ru": "Червь", "en": "Worm" },
    { "cardNumber": 18, "wordNumber": 3, "ru": "Мышь", "en": "Mouse" },
    { "cardNumber": 18, "wordNumber": 4, "ru": "Кокос", "en": "Coconut" },
    { "cardNumber": 18, "wordNumber": 5, "ru": "Единорог", "en": "Unicorn" },
    { "cardNumber": 18, "wordNumber": 6, "ru": "Компас", "en": "Compass" },
    { "cardNumber": 19, "wordNumber": 1, "ru": "Радио", "en": "Radio" },
    { "cardNumber": 19, "wordNumber": 2, "ru": "Шоколад", "en": "Chocolate" },
    { "cardNumber": 19, "wordNumber": 3, "ru": "Карта", "en": "Map" },
    { "cardNumber": 19, "wordNumber": 4, "ru": "Цветок", "en": "Flower" },
    { "cardNumber": 19, "wordNumber": 5, "ru": "Телевидение", "en": "Television" },
    { "cardNumber": 19, "wordNumber": 6, "ru": "Словарь", "en": "Dictionary" },
    { "cardNumber": 20, "wordNumber": 1, "ru": "Плащ", "en": "Cloak" },
    { "cardNumber": 20, "wordNumber": 2, "ru": "Гонг", "en": "Gong" },
    { "cardNumber": 20, "wordNumber": 3, "ru": "Комар", "en": "Mosquito" },
    { "cardNumber": 20, "wordNumber": 4, "ru": "Кофе", "en": "Coffee" },
    { "cardNumber": 20, "wordNumber": 5, "ru": "Велосипед", "en": "Bicycle" },
    { "cardNumber": 20, "wordNumber": 6, "ru": "Душ", "en": "Shower" },
    { "cardNumber": 21, "wordNumber": 1, "ru": "Кровать", "en": " Bed" },
    { "cardNumber": 21, "wordNumber": 2, "ru": "Звонок", "en": "Ring" },
    { "cardNumber": 21, "wordNumber": 3, "ru": "Туалет", "en": "Toilet" },
    { "cardNumber": 21, "wordNumber": 4, "ru": "Глобус", "en": "Globe" },
    { "cardNumber": 21, "wordNumber": 5, "ru": "Дверь", "en": "Door" },
    { "cardNumber": 21, "wordNumber": 6, "ru": "Носок", "en": "Sock" },
    { "cardNumber": 22, "wordNumber": 1, "ru": "Сандалии", "en": "Sandal" },
    { "cardNumber": 22, "wordNumber": 2, "ru": "Ворона", "en": "Crow" },
    { "cardNumber": 22, "wordNumber": 3, "ru": "Батарея", "en": "Battery" },
    { "cardNumber": 22, "wordNumber": 4, "ru": "Тапочка", "en": "Slipper" },
    { "cardNumber": 22, "wordNumber": 5, "ru": "Баскетбол", "en": "Basketball" },
    { "cardNumber": 22, "wordNumber": 6, "ru": "Снежный шар", "en": "Snowball" },
    { "cardNumber": 23, "wordNumber": 1, "ru": "Страус", "en": "Ostrich" },
    { "cardNumber": 23, "wordNumber": 2, "ru": "Панда", "en": "Panda" },
    { "cardNumber": 23, "wordNumber": 3, "ru": "Чек", "en": "Check" },
    { "cardNumber": 23, "wordNumber": 4, "ru": "Горка", "en": "Slide" },
    { "cardNumber": 23, "wordNumber": 5, "ru": "Скелет", "en": "Skeleton" },
    { "cardNumber": 23, "wordNumber": 6, "ru": "Мост", "en": "Bridge" },
    { "cardNumber": 24, "wordNumber": 1, "ru": "Компьютер", "en": "Computer" },
    { "cardNumber": 24, "wordNumber": 2, "ru": "Барабан", "en": "Drum" },
    { "cardNumber": 24, "wordNumber": 3, "ru": "Чемодан", "en": "Suitcase" },
    { "cardNumber": 24, "wordNumber": 4, "ru": "Одеяло", "en": "Blanket" },
    { "cardNumber": 24, "wordNumber": 5, "ru": "Подсолнух", "en": "Sunflower" },
    { "cardNumber": 24, "wordNumber": 6, "ru": "Сэндвич", "en": "Sandwich" },
    { "cardNumber": 25, "wordNumber": 1, "ru": "Верёвка", "en": "Rope " },
    { "cardNumber": 25, "wordNumber": 2, "ru": "Автомобиль", "en": "Car" },
    { "cardNumber": 25, "wordNumber": 3, "ru": "Фартук", "en": "Apron" },
    { "cardNumber": 25, "wordNumber": 4, "ru": "Снорклинг", "en": "Snorkeling" },
    { "cardNumber": 25, "wordNumber": 5, "ru": "Сосулька", "en": "Icicle" },
    { "cardNumber": 25, "wordNumber": 6, "ru": "Рубашка", "en": "Shirt" },
    { "cardNumber": 26, "wordNumber": 1, "ru": "Щит", "en": "Shield" },
    { "cardNumber": 26, "wordNumber": 2, "ru": "Алмаз", "en": "Diamond" },
    { "cardNumber": 26, "wordNumber": 3, "ru": "Гребень", "en": "Comb" },
    { "cardNumber": 26, "wordNumber": 4, "ru": "Черепаха", "en": "Turtle" },
    { "cardNumber": 26, "wordNumber": 5, "ru": "Шина", "en": "Tire" },
    { "cardNumber": 26, "wordNumber": 6, "ru": "Кирпич", "en": "Brick" },
    { "cardNumber": 27, "wordNumber": 1, "ru": "Шпатель", "en": "Spatula" },
    { "cardNumber": 27, "wordNumber": 2, "ru": "Жирафа", "en": "Giraffe" },
    { "cardNumber": 27, "wordNumber": 3, "ru": "Спутник", "en": "Satellite" },
    { "cardNumber": 27, "wordNumber": 4, "ru": "Меч", "en": "Sword" },
    { "cardNumber": 27, "wordNumber": 5, "ru": "Сердце", "en": "Heart" },
    { "cardNumber": 27, "wordNumber": 6, "ru": "Замок", "en": "Castle" },
    { "cardNumber": 28, "wordNumber": 1, "ru": "Ботинок", "en": "Boot" },
    { "cardNumber": 28, "wordNumber": 2, "ru": "Крыша", "en": "Roof" },
    { "cardNumber": 28, "wordNumber": 3, "ru": "Ожерелье", "en": "Necklace" },
    { "cardNumber": 28, "wordNumber": 4, "ru": "Грузовик", "en": "Truck" },
    { "cardNumber": 28, "wordNumber": 5, "ru": "Мельница", "en": "Windmill" },
    { "cardNumber": 28, "wordNumber": 6, "ru": "Фонарь", "en": "Lamp" },
    { "cardNumber": 29, "wordNumber": 1, "ru": "Качели", "en": "Seesaw" },
    { "cardNumber": 29, "wordNumber": 2, "ru": "Дракон", "en": "Dragon " },
    { "cardNumber": 29, "wordNumber": 3, "ru": "Отбойный молоток", "en": "Jackhammer" },
    { "cardNumber": 29, "wordNumber": 4, "ru": "Молния", "en": "Zipper" },
    { "cardNumber": 29, "wordNumber": 5, "ru": "Песок", "en": "Sand" },
    { "cardNumber": 29, "wordNumber": 6, "ru": "Кальмар", "en": "Squid" },
    { "cardNumber": 30, "wordNumber": 1, "ru": "Мозг", "en": "Brain" },
    { "cardNumber": 30, "wordNumber": 2, "ru": "Камин", "en": "Fireplace" },
    { "cardNumber": 30, "wordNumber": 3, "ru": "Газонокосилка", "en": "Lawnmower" },
    { "cardNumber": 30, "wordNumber": 4, "ru": "Ноутбук", "en": "Laptop" },
    { "cardNumber": 30, "wordNumber": 5, "ru": "Стул", "en": "Chair" },
    { "cardNumber": 30, "wordNumber": 6, "ru": "Ворота", "en": "Gate" },
    { "cardNumber": 31, "wordNumber": 1, "ru": "Салфетка", "en": "Tissue" },
    { "cardNumber": 31, "wordNumber": 2, "ru": "Микрофон", "en": "Microphone" },
    { "cardNumber": 31, "wordNumber": 3, "ru": "Жёлудь", "en": "Acorn" },
    { "cardNumber": 31, "wordNumber": 4, "ru": "Контейнер", "en": "Lunchbox" },
    { "cardNumber": 31, "wordNumber": 5, "ru": "Бабочка", "en": "Butterfly" },
    { "cardNumber": 31, "wordNumber": 6, "ru": "Ископаемое", "en": "Fossil" },
    { "cardNumber": 32, "wordNumber": 1, "ru": "Жук", "en": "Beetle" },
    { "cardNumber": 32, "wordNumber": 2, "ru": "Рамен", "en": "Ramen" },
    { "cardNumber": 32, "wordNumber": 3, "ru": "Катапульта", "en": "Catapult" },
    { "cardNumber": 32, "wordNumber": 4, "ru": "Арбуз", "en": "Watermelon" },
    { "cardNumber": 32, "wordNumber": 5, "ru": "Фонарик", "en": "Flashlight" },
    { "cardNumber": 32, "wordNumber": 6, "ru": "Дельфин", "en": "Dolphin" },
    { "cardNumber": 33, "wordNumber": 1, "ru": "Микроволновка", "en": "Microwave " },
    { "cardNumber": 33, "wordNumber": 2, "ru": "Подиум", "en": "Podium" },
    { "cardNumber": 33, "wordNumber": 3, "ru": "Вино", "en": "Wine" },
    { "cardNumber": 33, "wordNumber": 4, "ru": "Яблоко", "en": "Apple" },
    { "cardNumber": 33, "wordNumber": 5, "ru": "Блин", "en": "Pancake" },
    { "cardNumber": 33, "wordNumber": 6, "ru": "Роза", "en": "Rose" },
    { "cardNumber": 34, "wordNumber": 1, "ru": "Голубь", "en": "Pigeon" },
    { "cardNumber": 34, "wordNumber": 2, "ru": "Судно", "en": "Ship" },
    { "cardNumber": 34, "wordNumber": 3, "ru": "Мыло", "en": "Soap" },
    { "cardNumber": 34, "wordNumber": 4, "ru": "Телескоп", "en": "Telescope" },
    { "cardNumber": 34, "wordNumber": 5, "ru": "Зубочистка", "en": "Toothpick" },
    { "cardNumber": 34, "wordNumber": 6, "ru": "Окно", "en": "Window" },
    { "cardNumber": 35, "wordNumber": 1, "ru": "Медведь", "en": "Bear" },
    { "cardNumber": 35, "wordNumber": 2, "ru": "Сейф", "en": "Safe" },
    { "cardNumber": 35, "wordNumber": 3, "ru": "Планета", "en": "Planet" },
    { "cardNumber": 35, "wordNumber": 4, "ru": "Поезд", "en": "Train" },
    { "cardNumber": 35, "wordNumber": 5, "ru": "Ложка", "en": "Spoon" },
    { "cardNumber": 35, "wordNumber": 6, "ru": "Газета", "en": "Newspaper" },
    { "cardNumber": 36, "wordNumber": 1, "ru": "Серьга", "en": "Earring" },
    { "cardNumber": 36, "wordNumber": 2, "ru": "Гриб", "en": "Mushroom" },
    { "cardNumber": 36, "wordNumber": 3, "ru": "Рюкзак", "en": "Backpack" },
    { "cardNumber": 36, "wordNumber": 4, "ru": "Кристалл", "en": "Crystal" },
    { "cardNumber": 36, "wordNumber": 5, "ru": "Зубная паста", "en": "Toothpaste" },
    { "cardNumber": 36, "wordNumber": 6, "ru": "Варенье", "en": "Jam" },
    { "cardNumber": 37, "wordNumber": 1, "ru": "Масло", "en": "Butter" },
    { "cardNumber": 37, "wordNumber": 2, "ru": "Обувь", "en": " Shoe" },
    { "cardNumber": 37, "wordNumber": 3, "ru": "Отвертка", "en": "Screwdriver" },
    { "cardNumber": 37, "wordNumber": 4, "ru": "Верблюд", "en": "Camel" },
    { "cardNumber": 37, "wordNumber": 5, "ru": "Чай", "en": "Tea" },
    { "cardNumber": 37, "wordNumber": 6, "ru": "Стейк", "en": "Steak" },
    { "cardNumber": 38, "wordNumber": 1, "ru": "Кукла", "en": "Doll" },
    { "cardNumber": 38, "wordNumber": 2, "ru": "Дом", "en": "House" },
    { "cardNumber": 38, "wordNumber": 3, "ru": "Кран", "en": "Crane" },
    { "cardNumber": 38, "wordNumber": 4, "ru": "Буррито", "en": "Burrito" },
    { "cardNumber": 38, "wordNumber": 5, "ru": "Улитка", "en": "Snail" },
    { "cardNumber": 38, "wordNumber": 6, "ru": "Скейтборд", "en": "Skateboard" },
    { "cardNumber": 39, "wordNumber": 1, "ru": "Лифт", "en": "Elevator" },
    { "cardNumber": 39, "wordNumber": 2, "ru": "Пирамида", "en": "Pyramid" },
    { "cardNumber": 39, "wordNumber": 3, "ru": "Свая", "en": "Still" },
    { "cardNumber": 39, "wordNumber": 4, "ru": "Осьминог", "en": "Octopus" },
    { "cardNumber": 39, "wordNumber": 5, "ru": "Сотрудники", "en": "Staff" },
    { "cardNumber": 39, "wordNumber": 6, "ru": "Радуга", "en": "Rainbow" },
    { "cardNumber": 40, "wordNumber": 1, "ru": "Ключ", "en": "Key" },
    { "cardNumber": 40, "wordNumber": 2, "ru": "Орёл", "en": "Eagle" },
    { "cardNumber": 40, "wordNumber": 3, "ru": "Русалочка", "en": "Mermaid" },
    { "cardNumber": 40, "wordNumber": 4, "ru": "Зонтик", "en": "Umbrella" },
    { "cardNumber": 40, "wordNumber": 5, "ru": "Картина", "en": "Painting" },
    { "cardNumber": 40, "wordNumber": 6, "ru": "Золотая Рыбка", "en": "Goldfish" },
    { "cardNumber": 41, "wordNumber": 1, "ru": "Лопата", "en": "Shovel" },
    { "cardNumber": 41, "wordNumber": 2, "ru": "Магнит", "en": "Magnet " },
    { "cardNumber": 41, "wordNumber": 3, "ru": "Ножницы", "en": "Scissors" },
    { "cardNumber": 41, "wordNumber": 4, "ru": "Вакуум", "en": "Vacuum" },
    { "cardNumber": 41, "wordNumber": 5, "ru": "Ручка", "en": "Pen" },
    { "cardNumber": 41, "wordNumber": 6, "ru": "Ластик", "en": "Eraser" },
    { "cardNumber": 42, "wordNumber": 1, "ru": "Вертолёт", "en": "Helicopter" },
    { "cardNumber": 42, "wordNumber": 2, "ru": "Тыква", "en": "Pumpkin" },
    { "cardNumber": 42, "wordNumber": 3, "ru": "Дерево", "en": "Tree" },
    { "cardNumber": 42, "wordNumber": 4, "ru": "Муравей", "en": "Ant" },
    { "cardNumber": 42, "wordNumber": 5, "ru": "Зубная щётка", "en": "Toothbrush" },
    { "cardNumber": 42, "wordNumber": 6, "ru": "Ракета", "en": "Missile" },
    { "cardNumber": 43, "wordNumber": 1, "ru": "Пень", "en": "Stump" },
    { "cardNumber": 43, "wordNumber": 2, "ru": "Бинокль", "en": "Binoculars" },
    { "cardNumber": 43, "wordNumber": 3, "ru": "Лыжи", "en": "Ski" },
    { "cardNumber": 43, "wordNumber": 4, "ru": "Золото", "en": "Gold" },
    { "cardNumber": 43, "wordNumber": 5, "ru": "Почтовый ящик", "en": "Mailbox" },
    { "cardNumber": 43, "wordNumber": 6, "ru": "Конверт", "en": "Envelope" },
    { "cardNumber": 44, "wordNumber": 1, "ru": "Орган", "en": "Organ" },
    { "cardNumber": 44, "wordNumber": 2, "ru": "Лом", "en": "Crowbar" },
    { "cardNumber": 44, "wordNumber": 3, "ru": "Робот", "en": "Robot" },
    { "cardNumber": 44, "wordNumber": 4, "ru": "Летающий змей", "en": "Kite" },
    { "cardNumber": 44, "wordNumber": 5, "ru": "Флаг", "en": "Flag" },
    { "cardNumber": 44, "wordNumber": 6, "ru": "Скворечник", "en": "Birdhouse" },
    { "cardNumber": 45, "wordNumber": 1, "ru": "Попугай", "en": "Parrot" },
    { "cardNumber": 45, "wordNumber": 2, "ru": "Губка", "en": " Sponge" },
    { "cardNumber": 45, "wordNumber": 3, "ru": "Иголка", "en": "Needle" },
    { "cardNumber": 45, "wordNumber": 4, "ru": "Корзина", "en": "Basket" },
    { "cardNumber": 45, "wordNumber": 5, "ru": "Маска", "en": "Mask" },
    { "cardNumber": 45, "wordNumber": 6, "ru": "Мел", "en": "Chalk" },
    { "cardNumber": 46, "wordNumber": 1, "ru": "Лампочка", "en": "Lightbulb" },
    { "cardNumber": 46, "wordNumber": 2, "ru": "Жемчуг", "en": "Pearl" },
    { "cardNumber": 46, "wordNumber": 3, "ru": "Головоломка", "en": "Puzzle" },
    { "cardNumber": 46, "wordNumber": 4, "ru": "Бейсбол", "en": "Baseball" },
    { "cardNumber": 46, "wordNumber": 5, "ru": "Колокол", "en": "Bell" },
    { "cardNumber": 46, "wordNumber": 6, "ru": "Слон", "en": "Elephant" },
    { "cardNumber": 47, "wordNumber": 1, "ru": "Собака", "en": "Dog" },
    { "cardNumber": 47, "wordNumber": 2, "ru": "Тост", "en": "Toast" },
    { "cardNumber": 47, "wordNumber": 3, "ru": "Гора", "en": "Mountain" },
    { "cardNumber": 47, "wordNumber": 4, "ru": "Лента", "en": "Tape" },
    { "cardNumber": 47, "wordNumber": 5, "ru": "Банка", "en": "Jar" },
    { "cardNumber": 47, "wordNumber": 6, "ru": "Духи", "en": "Perfume" },
    { "cardNumber": 48, "wordNumber": 1, "ru": "Тротуар", "en": "Sidewalk" },
    { "cardNumber": 48, "wordNumber": 2, "ru": "Сигара", "en": "Cigar" },
    { "cardNumber": 48, "wordNumber": 3, "ru": "Клавиатура", "en": "Keyboard" },
    { "cardNumber": 48, "wordNumber": 4, "ru": "Фортепиано", "en": "Piano" },
    { "cardNumber": 48, "wordNumber": 5, "ru": "Зебра", "en": "Zebra" },
    { "cardNumber": 48, "wordNumber": 6, "ru": "Паровой каток", "en": "Steamroller" },
    { "cardNumber": 49, "wordNumber": 1, "ru": "Молоко", "en": "Milk" },
    { "cardNumber": 49, "wordNumber": 2, "ru": "Вакуум", "en": "Vacuum " },
    { "cardNumber": 49, "wordNumber": 3, "ru": "Буй", "en": "Buoy" },
    { "cardNumber": 49, "wordNumber": 4, "ru": "Свеча", "en": "Candle" },
    { "cardNumber": 49, "wordNumber": 5, "ru": "Капуста", "en": "Cabbage" },
    { "cardNumber": 49, "wordNumber": 6, "ru": "Пирог", "en": "Pie" },
    { "cardNumber": 50, "wordNumber": 1, "ru": "Рыба", "en": "Fish" },
    { "cardNumber": 50, "wordNumber": 2, "ru": "Сахар", "en": "Sugar" },
    { "cardNumber": 50, "wordNumber": 3, "ru": "Луна", "en": "Moon" },
    { "cardNumber": 50, "wordNumber": 4, "ru": "Чаша", "en": "Bowl" },
    { "cardNumber": 50, "wordNumber": 5, "ru": "Беговая дорожка", "en": "Treadmill" },
    { "cardNumber": 50, "wordNumber": 6, "ru": "Снегоступы", "en": "Snowshoes" },
    { "cardNumber": 51, "wordNumber": 1, "ru": "Тостер", "en": "Toaster" },
    { "cardNumber": 51, "wordNumber": 2, "ru": "Бензопила", "en": "Chainsaw" },
    { "cardNumber": 51, "wordNumber": 3, "ru": "Трактор", "en": "Tractor" },
    { "cardNumber": 51, "wordNumber": 4, "ru": "Иглобрюх", "en": "Blowfish" },
    { "cardNumber": 51, "wordNumber": 5, "ru": "Горчица", "en": "Mustard" },
    { "cardNumber": 51, "wordNumber": 6, "ru": "Скорая", "en": "Ambulance" },
    { "cardNumber": 52, "wordNumber": 1, "ru": "Билет", "en": "Ticket" },
    { "cardNumber": 52, "wordNumber": 2, "ru": "Монета", "en": "Coin" },
    { "cardNumber": 52, "wordNumber": 3, "ru": "Скорпион", "en": "Scorpion" },
    { "cardNumber": 52, "wordNumber": 4, "ru": "Очки", "en": "Sunglasses" },
    { "cardNumber": 52, "wordNumber": 5, "ru": "Бутылка", "en": "Bottle" },
    { "cardNumber": 52, "wordNumber": 6, "ru": "Блендер", "en": "Blender" },
];

const questions = [
    { "cardNumber": 1, "ru": "Что стоит примерно столько же?", "en": "What does it costs about the same as?" },
    { "cardNumber": 2, "ru": "Что примерно такого же размера?", "en": "What`s it about the same size as?" },
    { "cardNumber": 3, "ru": "Что примерно столько же весит?", "en": "What does it weighs about the same as?" },
    { "cardNumber": 4, "ru": "Что примерно так же опасно?", "en": "What`s about as dangerous as it?" },
    { "cardNumber": 5, "ru": "Если бы это было животное, то каким?", "en": "If it were an animal, what animal would it be?" },
    { "cardNumber": 6, "ru": "Если бы это был музыкальный инструмент, то какой?", "en": "If it were a musical instrument, what woukd it be?" },
    { "cardNumber": 7, "ru": "Если бы это была еда, то какая?", "en": "If it were a food, what food would it be?" },
    { "cardNumber": 8, "ru": "Если бы у него была любимая еда, чтобы это было?", "en": "If it had a favorite food, what would it be?" },
    { "cardNumber": 9, "ru": "Какая научная область изучает это?", "en": "What academic field studies it?" },
    { "cardNumber": 10, "ru": "Кто из исторических личностей имел или использовал это?", "en": "Whho`s a historical figure that had or used it?" },
    { "cardNumber": 11, "ru": "Кто из знаменитостей имеет или использует это?", "en": "Who`s a celebrity that has or uses it?" },
    { "cardNumber": 12, "ru": "Кто из вымышленных персонажей имеет или использует это?", "en": "Who`s a fictional character that has or uses it?" },
    { "cardNumber": 13, "ru": "Как это сделано?", "en": "How is it made?" },
    { "cardNumber": 14, "ru": "Как это перевозят?", "en": "How is it transported?" },
    { "cardNumber": 15, "ru": "Как пользоваться этим в качестве оружия?", "en": "How would you use it as a weapon?" },
    { "cardNumber": 16, "ru": "С каким абстрактным понятием это ассоциируется?", "en": "What abstract concept is it associated with?" },
    { "cardNumber": 17, "ru": "К какому несчастному случаю или травме это может привести?", "en": "What accident or injury could it cause?" },
    { "cardNumber": 18, "ru": "Какое прилагательное лучше всего описывает это?", "en": "What adjective best describes is it?" },
    { "cardNumber": 19, "ru": "С каким древнегреческим или Римским богом это больше всего ассоциируется?", "en": "Which ancient Greek or Roman god is it most associated with?" },
    { "cardNumber": 20, "ru": "К какой категории предметов это относится?", "en": "What category of objects does it fall under" },
    { "cardNumber": 21, "ru": "Какого это цвета?", "en": "What color is it?" },
    { "cardNumber": 22, "ru": "В каком контейнере это хранить?", "en": "What container would you keep it in?" },
    { "cardNumber": 23, "ru": "Что вам нужно для того чтобы использовать это?", "en": "What`s something you need in order to use it?" },
    { "cardNumber": 24, "ru": "Как это пахнет?", "en": "What does it smell like?" },
    { "cardNumber": 25, "ru": "На что это похоже на вкус?", "en": "What does it taste like?" },
    { "cardNumber": 26, "ru": "Какая область науки это изучает?", "en": "What field of science studies it?" },
    { "cardNumber": 27, "ru": "В каком жанре фильма или книги чаще всего встречается это?", "en": "What genre of movie or book is most likely to feature it?" },
    { "cardNumber": 28, "ru": "Для чего это используется?", "en": "What is it used for?" },
    { "cardNumber": 29, "ru": "Что заставляет вас использовать это?", "en": "What couses you to use it?" },
    { "cardNumber": 30, "ru": "Какие люди имеют или используют это?", "en": "What kind of people have or use it?" },
    { "cardNumber": 31, "ru": "В каком магазине вы скорее всего найдёте это?", "en": "What kind of store are you most likely to find it in?" },
    { "cardNumber": 32, "ru": "Из какого материала это сделано?", "en": "What material is it made of?" },
    { "cardNumber": 33, "ru": "Какое у этого прозвище?", "en": "What`s a nickname for it?" },
    { "cardNumber": 34, "ru": "Какие ономатопеи это издаёт (Бум, Мяу и тд)?", "en": "What onomatopoeia does it make (Boom, Meow, etc.)" },
    { "cardNumber": 35, "ru": "С какой частью тела вы это используете?", "en": "What part of the body do you use it with?" },
    { "cardNumber": 36, "ru": "Что это питает?", "en": "What powers it?" },
    { "cardNumber": 37, "ru": "Какая профессия работает с этим?", "en": "What profession works with this?" },
    { "cardNumber": 38, "ru": "В какой книге, в фильме или телепередаче это появляется?", "en": "What`s book, movie or TV show that it appears in?" },
    { "cardNumber": 39, "ru": "Какой распространённый бренд у этого?", "en": "What`s a common brand of it?" },
    { "cardNumber": 40, "ru": "В каких вариантах это встречается?", "en": "What`s a variety it comes in?" },
    { "cardNumber": 41, "ru": "Что не имеет НИКАКОГО отношения к этому, просто чтобы запутать другую команду?", "en": "What has NOTHING to do with it, just to confuse the other team?" },
    { "cardNumber": 42, "ru": "Что находится внутри этого?", "en": "What's inside it?" },
    { "cardNumber": 43, "ru": "Что похоже на это?", "en": "What's something that is like it?" },
    { "cardNumber": 44, "ru": "Что можно сделать с помощью этого?", "en": "What`s something you can make using it?" },
    { "cardNumber": 45, "ru": "Какой ваш любимый вид этого?", "en": "What's your favorite type of it?" },
    { "cardNumber": 46, "ru": "Где вы это используете?", "en": "Where do you use it?" },
    { "cardNumber": 47, "ru": "Куда это отправляется когда умирает, ломается или становится бесполезным?", "en": "Where does it go when it dies, breaks, or is no longer useful?" },
    { "cardNumber": 48, "ru": "Где в доме вы можете это найти?", "en": "Where in a house would you find it?" },
    { "cardNumber": 49, "ru": "Где это хранится?", "en": "Where is it stored?" },
    { "cardNumber": 50, "ru": "Где бы вы это нашли?", "en": "Where would you find it?" },
    { "cardNumber": 51, "ru": "Где бы вы могли это купить или получить?", "en": "Where would you buy or obtain one?" },
    { "cardNumber": 52, "ru": "Кто или что это производит?", "en": "Who or what makes it?" },
    { "cardNumber": 53, "ru": "Какой возрастной группе это нравится больше всего?", "en": "What age group likes it the most?" },
    { "cardNumber": 54, "ru": "Что заставляет людей ссориться из-за этого?", "en": "What causes people fight over it?" },
    { "cardNumber": 55, "ru": "С каким городом это ассоциируется больше всего?", "en": "What city is it most associated with?" },
    { "cardNumber": 56, "ru": "На каком континенте или в каком регионе вы найдёте больше всего этого?", "en": "What continent or region would you find the most of these in?" },
    { "cardNumber": 57, "ru": "Какую одежду вы носите при использовании этого предмета?", "en": "What`s somethinge you wear when using it?" },
    { "cardNumber": 58, "ru": "К какой сказки или детскому стишку это больше всего относится?", "en": "Which fairy tale or nursery rhyme does it most belong in?" },
    { "cardNumber": 59, "ru": "Какое первое слово которое приходит вам в голову по этому поводу?", "en": "What`s the first word that pops into your head about it?" },
    { "cardNumber": 60, "ru": "С каким супергероем это больше всего ассоциируется?", "en": "Which superhero is it most associated with?" },
    { "cardNumber": 61, "ru": "Кому это не нравится?", "en": "Who dislikes it?" },
    { "cardNumber": 62, "ru": "В школе на каком предмете преподают об этом?", "en": "What subject in school teach about it?" },
    { "cardNumber": 63, "ru": "Где находится ближайший?", "en": "Where is the nearest one?" },
    { "cardNumber": 64, "ru": "Какую геометрическую фигуру это включает в себя?", "en": "What`s geometric shape that it includes?" },
    { "cardNumber": 65, "ru": "В какой период в вашей жизни это наиболее полезно?", "en": "At what point in your life is it most useful?" },
    { "cardNumber": 66, "ru": "Что вы чувствуете после его использования?", "en": "How do you feel after using it?" },
    { "cardNumber": 67, "ru": "Как вы лично относитесь к этому?", "en": "How do you personally feel about it?" },
    { "cardNumber": 68, "ru": "Что вы чувствуете, когда кто-то дарит вам это?", "en": "How do you feel when someone gifts it to you?" },
    { "cardNumber": 69, "ru": "Как это влияет на окружающие предметы?", "en": "How does it affect the things around it?" },
    { "cardNumber": 70, "ru": "Как долго это прослужит, если это оставить в покое?", "en": "How long will it last if left alone?" },
    { "cardNumber": 71, "ru": "Как это отреагирует, если это столкнуть с холма?", "en": "How would it react to being pushed down a hill?" },
    { "cardNumber": 72, "ru": "Что это изменит?", "en": "What changes it?" },
    { "cardNumber": 73, "ru": "С какой страной ассоциируется больше всего?", "en": "What country is most associated with?" },
    { "cardNumber": 74, "ru": "Что вы сделаете, если у вас есть только половина этого?", "en": "What do you do it if you only have half of it?" },
    { "cardNumber": 75, "ru": "Каково на ощупь, когда вы это трогаете?", "en": "What does it feel like when you touch it?" },
    { "cardNumber": 76, "ru": "В какой среде обитания вы, скорее всего, его встретите?", "en": "What habitat would you be most likely to find it in?" },
    { "cardNumber": 77, "ru": "Что произойдет если поместить это под воду?", "en": "What happens if you put it underwater?" },
    { "cardNumber": 78, "ru": "Что произойдет с этим, если оставить это под дождём?", "en": "What happens to it when it`s left out in the rain?" },
    { "cardNumber": 79, "ru": "С каким праздником это ассоциируется больше всего?", "en": "What holiday is it most associated with?" },
    { "cardNumber": 80, "ru": "Какой шум издаётся при использовании этого?", "en": "What kind noise does make when used?" },
    { "cardNumber": 81, "ru": "Из какого материала не сделано это?", "en": "What material is it NOT made of?" },
    { "cardNumber": 82, "ru": "Какой шум это издаёт при падении?", "en": "What noise does it make when dropped?" },
    { "cardNumber": 83, "ru": "На какой вечеринке это больше всего подошло бы?", "en": "What party theme would fit it best?" },
    { "cardNumber": 84, "ru": "Какая суперсила нужна этому?", "en": "What superpower would it want?" },
    { "cardNumber": 85, "ru": "В какое время суток это используется?", "en": "What time of day is it used?" },
    { "cardNumber": 86, "ru": "Что произойдет если это закопать на год?", "en": "What would happen if it was buried for a year?" },
    { "cardNumber": 87, "ru": "Чтобы вы использовали, чтобы уничтожить это?", "en": "What would you use to destroy it?" },
    { "cardNumber": 88, "ru": "В какой игре это проявляется?", "en": "What`s game that it appears in?" },
    { "cardNumber": 89, "ru": "Как неправильно это использовать?", "en": "What`s an incorrect way to use it?" },
    { "cardNumber": 90, "ru": "Что является противоположностью этому?", "en": "What`s its opposite?" },
    { "cardNumber": 91, "ru": "Из какого вторичного материала это сделано?", "en": "What`s the secondary material it`s made of?" },
    { "cardNumber": 92, "ru": "Кому за этим столом это нравится больше всего?", "en": "Who at this table likes it the most? " },
    { "cardNumber": 93, "ru": "Кто или что может это поднять?", "en": "Who or what can lift it?" },
    { "cardNumber": 94, "ru": "Как часто вы это используете?", "en": "How frequently do you use it?" },
    { "cardNumber": 95, "ru": "Как это перемещается?", "en": "How does it move?" },
    { "cardNumber": 96, "ru": "Какую проблему это решает?", "en": "What problem does it solve?" },
    { "cardNumber": 97, "ru": "Как вы держите это?", "en": "How do you hold onto it?" },
    { "cardNumber": 98, "ru": "В какой церемонии это скорее всего появится?", "en": "What ceremony wpuld it appear in?" },
    { "cardNumber": 99, "ru": "В каком ресторане это скорее всего подадут?", "en": "What kind of restaurant would be most likely to serve it?" },
    { "cardNumber": 100, "ru": "В каком туристическом месте скорее всего найдётся это?", "en": "What tourist destination would you most likely find it at?" },
    { "cardNumber": 101, "ru": "Что произойдет если это съесть?", "en": "What would happen if you ate it?" },
    { "cardNumber": 102, "ru": "Какое настроение это вызывает?", "en": "What mood does it cause?" }
];

let currentLanguage = 'ru';
let currentCardNumber = 1;
let shownQuestions = new Set();
let gameProgress = {
    currentScreen: 'start-screen',
    currentCardNumber: 1,
    team1Questions: [],
    team2Questions: [],
    extraQuestions: [],
    shownQuestions: []
};

const audio = document.getElementById("clickSound");

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('lng').addEventListener('click', switchLanguage);
document.getElementById('change-word-button').addEventListener('click', displayRandomCard);
document.getElementById('select-word-button').addEventListener('click', showTeam1Questions);
document.getElementById('show-team1-questions-button').addEventListener('click', toggleTeam1Questions);
document.getElementById('show-team2-questions-button').addEventListener('click', toggleTeam2Questions);
document.getElementById('toggle-extra-questions-button').addEventListener('click', toggleExtraQuestions);
document.getElementById('new-questions-button').addEventListener('click', showNewQuestions);
document.getElementById('reset').addEventListener('click', reload);

window.onload = async function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован с областью:', registration.scope);
            })
            .catch(error => {
                console.error('Ошибка при регистрации Service Worker:', error);
            });
    }
    setTimeout(() => {
        const load = document.querySelector('.preloader_malc');
        if (load) {
            load.style.display = 'none';
        }
    }, 700); // Задержка в 700 мс
}

function startGame() {
    gameProgress.currentScreen = 'select-word-screen';
    updateScreen();
    displayRandomCard();
}

function reload() {
    playSound();
    location.reload();
}

function switchLanguage() {
    playSound();
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    document.getElementById('lng').innerText = currentLanguage === 'ru' ? 'EN' : 'RU';
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-lang-ru]').forEach(element => {
        element.innerText = element.getAttribute(`data-lang-${currentLanguage}`);
    });
    updateScreen();
}

function updateScreen() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(gameProgress.currentScreen).classList.remove('hidden');
    if (gameProgress.currentScreen === 'select-word-screen') {
        displayCardWords();
    } else if (gameProgress.currentScreen.includes('questions')) {
        displayQuestions(gameProgress.currentScreen.split('-')[0]);
    }
}

function displayRandomCard() {
    playSound();
    currentCardNumber = Math.floor(Math.random() * 52) + 1; // Предполагается, что всего 5 карточек
    gameProgress.currentCardNumber = currentCardNumber;
    displayCardWords();
}

function displayCardWords() {
    const wordList = document.getElementById('words-list');
    wordList.innerHTML = '';
    words.filter(word => word.cardNumber === currentCardNumber).forEach(word => {
        const wordItem = document.createElement('p');
        wordItem.innerText = word[currentLanguage];
        wordList.appendChild(wordItem);
    });
}

function showTeam1Questions() {
    playSound();
    gameProgress.currentScreen = 'team1-questions-screen';
    gameProgress.team1Questions = selectRandomQuestions(7);
    updateScreen();
}

function toggleTeam1Questions() {
    playSound();
    const questionList = document.getElementById('team1-questions-list');
    const button = document.getElementById('show-team1-questions-button');

    if (button.innerText === 'Показать вопросы' || button.innerText === 'Show questions') {
        questionList.classList.remove('hidden');
        button.innerText = currentLanguage === 'ru' ? 'Далее' : 'Next';
    } else {
        questionList.classList.add('hidden');
        gameProgress.currentScreen = 'team2-questions-screen';
        gameProgress.team2Questions = selectRandomQuestions(7);
        updateScreen();
    }
}

function toggleTeam2Questions() {
    playSound();
    const questionList = document.getElementById('team2-questions-list');
    const button = document.getElementById('show-team2-questions-button');

    if (button.innerText === 'Показать вопросы' || button.innerText === 'Show questions') {
        questionList.classList.remove('hidden');
        button.innerText = currentLanguage === 'ru' ? 'Далее' : 'Next';
    } else {
        questionList.classList.add('hidden');
        gameProgress.currentScreen = 'extra-questions-screen';
        gameProgress.extraQuestions = [];
        updateScreen();
    }
}

function toggleExtraQuestions() {
    playSound();
    const extraQuestionsList = document.getElementById('extra-questions-list');
    const button = document.getElementById('toggle-extra-questions-button');
    const button1 = document.getElementById('new-questions-button');

    if (button.innerText.includes('Открыть') || button.innerText.includes('Open')) {
        showExtraQuestions();
        button.innerText = currentLanguage === 'ru' ? 'Скрыть вопросы' : 'Hide questions';
        button1.style.display = 'block';

    } else {
        hideExtraQuestions();
        button.innerText = currentLanguage === 'ru' ? 'Открыть еще 2 вопроса' : 'Open 2 more questions';
        button1.style.display = 'block';
    }
}

function showExtraQuestions() {
    playSound();
    gameProgress.extraQuestions = selectRandomQuestions(2);
    updateScreen();
}

function hideExtraQuestions() {
    const extraQuestionsList = document.getElementById('extra-questions-list');
    extraQuestionsList.innerHTML = '';
    gameProgress.extraQuestions = [];
}

function showNewQuestions() {
    playSound();
    const toggleButton = document.getElementById('toggle-extra-questions-button');
    const button = document.getElementById('new-questions-button')
    gameProgress.extraQuestions = selectRandomQuestions(7);
    button.style.display = 'none';
    updateScreen();
    toggleButton.innerText = currentLanguage === 'ru' ? 'Скрыть вопросы' : 'Hide questions';
}

function selectRandomQuestions(count) {
    const selectedQuestions = [];
    const addedQuestions = new Set();

    while (selectedQuestions.length < count && addedQuestions.size < questions.length) {
        const question = questions[Math.floor(Math.random() * questions.length)];
        if (!addedQuestions.has(question.cardNumber)) {
            selectedQuestions.push(question);
            addedQuestions.add(question.cardNumber);
        }
    }

    return selectedQuestions;
}

function displayQuestions(team) {
    const questionList = document.getElementById(`${team}-questions-list`);
    questionList.innerHTML = '';

    let questionsToShow = [];

    if (team === 'team1') {
        questionsToShow = gameProgress.team1Questions;
    } else if (team === 'team2') {
        questionsToShow = gameProgress.team2Questions;
    } else if (team === 'extra') {
        questionsToShow = gameProgress.extraQuestions;
    }

    questionsToShow.forEach(question => {
        const questionItem = document.createElement('li');
        questionItem.innerText = question[currentLanguage];
        questionList.appendChild(questionItem);
    });
}

function playSound() {
    if (audio.readyState !== 4) {
        audio.load();
    }
    audio.play();
}

