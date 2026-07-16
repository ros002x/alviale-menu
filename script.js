const menu = [
  {
    category: "antipasti",
    name: "Antipasto Al Viale",
    description: "Cinque tipologie di antipasto in base al pescato del giorno.",
    price: "15",
    featured: true
  },
  {
    category: "antipasti",
    name: "Insalata di mare",
    description: "Seppia, polpo, frutti di scoglio e carota.",
    price: "15"
  },
  {
    category: "antipasti",
    name: "Zuppa di cozze Al Viale",
    description: "Cozze, cicorie, pomodoro, tentacolo di polpo e tarallo. Puo variare in base al pescato giornaliero.",
    price: "20"
  },
  {
    category: "antipasti",
    name: "Impepata di cozze",
    description: "Cozze al pepe.",
    price: "10"
  },
  {
    category: "antipasti",
    name: "Il Cantabrico",
    description: "Crostino di pane fritto, stracciatella e alici del Cantabrico.",
    price: "12"
  },
  {
    category: "antipasti",
    name: "Crudite di mare",
    description: "Su prenotazione. Prezzo in base alla disponibilita.",
    price: "--"
  },
  {
    category: "antipasti",
    name: "Tartare di tonno",
    description: "Tartare di tonno.",
    price: "15"
  },
  {
    category: "antipasti",
    name: "Tartare di gambero viola",
    description: "Tartare di gambero viola.",
    price: "22"
  },
  {
    category: "antipasti",
    name: "Salmone Al Viale",
    description: "Salmone disidratato con crema di limone, pepe rosa e olive taggiasche.",
    price: "16"
  },
  {
    category: "antipasti",
    name: "Antipasto Al Viale terra",
    description: "Salumi misti, verdure grigliate, fior di latte e formaggi misti.",
    price: "15"
  },
  {
    category: "antipasti",
    name: "Formaggi misti con confetture",
    description: "Selezione di formaggi misti con confetture.",
    price: "12"
  },
  {
    category: "antipasti",
    name: "Crudo e mozzarella",
    description: "Prosciutto crudo e mozzarella.",
    price: "12"
  },
  {
    category: "antipasti",
    name: "Cotto e mozzarella",
    description: "Prosciutto cotto e mozzarella.",
    price: "8"
  },
  {
    category: "primi",
    name: "Spaghetti alle cozze",
    description: "Spaghetti con cozze.",
    price: "10"
  },
  {
    category: "primi",
    name: "Spaghetto quadrato alici e crusco",
    description: "Pomodorini, alici, peperone crusco e mollica croccante.",
    price: "15"
  },
  {
    category: "primi",
    name: "Spaghetti alle vongole",
    description: "Spaghetti alle vongole.",
    price: "15",
    featured: true
  },
  {
    category: "primi",
    name: "Ravioli ai crostacei",
    description: "Con profumo di polvere di lime.",
    price: "15"
  },
  {
    category: "primi",
    name: "Risotto ai frutti di mare",
    description: "Minimo per due persone, prezzo a porzione.",
    price: "15"
  },
  {
    category: "primi",
    name: "Calamarata allo spada",
    description: "Pesce spada, melanzane, pinoli e menta fresca.",
    price: "15"
  },
  {
    category: "primi",
    name: "Scialatiello allo scoglio",
    description: "Frutti di mare, crostacei, pomodorini e prezzemolo.",
    price: "15"
  },
  {
    category: "primi",
    name: "Troccoli scampi e funghi",
    description: "Pasta fresca con scampi, funghi freschi e prezzemolo.",
    price: "15"
  },
  {
    category: "primi",
    name: "Pacchero all'astice",
    description: "Pacchero all'astice.",
    price: "30"
  },
  {
    category: "primi",
    name: "Orecchiette al sugo",
    description: "Sugo di pomodoro fresco e basilico.",
    price: "7"
  },
  {
    category: "primi",
    name: "Pennette all'arrabbiata",
    description: "Pomodoro, aglio, olio e peperoncino piccante.",
    price: "7"
  },
  {
    category: "primi",
    name: "Fusilli al sugo lucano",
    description: "Sugo della tradizione, peperone crusco e mollica croccante.",
    price: "12"
  },
  {
    category: "primi",
    name: "Trascodi salsiccia e funghi",
    description: "Pasta fresca, salsiccia nostrana e funghi freschi.",
    price: "12"
  },
  {
    category: "mare",
    name: "Frittura di calamari",
    description: "Frittura di calamari.",
    price: "17"
  },
  {
    category: "mare",
    name: "Frittura di calamari e gamberi",
    description: "Frittura di calamari e gamberi.",
    price: "16"
  },
  {
    category: "mare",
    name: "Frittura di paranza",
    description: "Pesce di piccola taglia, soggetto a disponibilita in base al pescato del giorno.",
    price: "14"
  },
  {
    category: "mare",
    name: "Grigliata mista di mare",
    description: "Seppia, filetti di spigola e orata, gamberone e tonno. Puo variare in base al pescato del giorno.",
    price: "25",
    featured: true
  },
  {
    category: "mare",
    name: "Tagliata di tonno",
    description: "Con pomodorini, rucola e scaglie di grana. Porzione minima 300g.",
    price: "17"
  },
  {
    category: "mare",
    name: "Tagliata di seppia alla genovese",
    description: "Seppie tenere scottate con pesto di basilico e pinoli.",
    price: "12"
  },
  {
    category: "mare",
    name: "Pescato del giorno al forno",
    description: "Secondo disponibilita giornaliera.",
    price: "40/kg"
  },
  {
    category: "terra",
    name: "Petto di pollo arrosto",
    description: "Con insalata verde.",
    price: "8"
  },
  {
    category: "terra",
    name: "Cotoletta di pollo",
    description: "Con contorno di patatine fritte.",
    price: "10"
  },
  {
    category: "terra",
    name: "Tagliata di vitello",
    description: "Con rucola, scaglie di grana e pomodorini.",
    price: "15",
    featured: true
  },
  {
    category: "terra",
    name: "Entrecote di vitello alla griglia",
    description: "Sale rosa, guacamole, confettura di cipolla. Minimo 300g.",
    price: "18"
  },
  {
    category: "terra",
    name: "Filetto di vitello alla piastra",
    description: "Servito con insalata verde e patatine fritte. Minimo 300g.",
    price: "22"
  },
  {
    category: "pizzeria",
    name: "Pizza pane",
    description: "Olio, sale e origano.",
    price: "3,50"
  },
  {
    category: "pizzeria",
    name: "Pizza Alessya",
    description: "Pizza rossa con origano in cottura.",
    price: "5,00"
  },
  {
    category: "pizzeria",
    name: "Marinara",
    description: "Pomodoro, origano e aglio.",
    price: "4,50"
  },
  {
    category: "pizzeria",
    name: "Margherita",
    description: "Pomodoro, mozzarella e basilico.",
    price: "5,00"
  },
  {
    category: "pizzeria",
    name: "Salame",
    description: "Pomodoro, mozzarella, salame dolce e basilico.",
    price: "6,00"
  },
  {
    category: "pizzeria",
    name: "Diavola",
    description: "Pomodoro, mozzarella e salame piccante.",
    price: "6,00"
  },
  {
    category: "pizzeria",
    name: "Cotto",
    description: "Pomodoro, mozzarella e prosciutto cotto.",
    price: "6,00"
  },
  {
    category: "pizzeria",
    name: "Cotto e funghi",
    description: "Pomodoro, mozzarella, cotto e funghi champignon.",
    price: "7,00"
  },
  {
    category: "pizzeria",
    name: "Quattro stagioni",
    description: "Pomodoro, mozzarella, cotto, funghi champignon, carciofi e olive.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Capricciosa",
    description: "Pomodoro, mozzarella, cotto, funghi champignon, carciofi, salame, olive e acciughe.",
    price: "9,00"
  },
  {
    category: "pizzeria",
    name: "Napoli",
    description: "Pomodoro, mozzarella, capperi e acciughe.",
    price: "7,00"
  },
  {
    category: "pizzeria",
    name: "Tonno e cipolla",
    description: "Pomodoro, mozzarella, tonno e cipolla.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Wurstel e patatine",
    description: "Pomodoro, mozzarella, wurstel e patatine fritte.",
    price: "7,00"
  },
  {
    category: "pizzeria",
    name: "Salsiccia e porcini",
    description: "Pomodoro, mozzarella, salsiccia fresca e funghi porcini.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Bufalina",
    description: "Pomodoro, mozzarella di bufala e basilico.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Tartufata",
    description: "Mozzarella di bufala, pomodorino fresco, porcini e crema al tartufo.",
    price: "9,00"
  },
  {
    category: "pizzeria",
    name: "La Calabrese",
    description: "Pomodoro, mozzarella, nduja, salame piccante, cipolla e olive.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Quattro formaggi",
    description: "Mozzarella, emmental, gorgonzola e provola affumicata.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Parma",
    description: "Pomodoro, mozzarella e crudo di Parma.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Vegetariana",
    description: "Mozzarella, zucchine, melanzane e peperoni grigliati.",
    price: "8,00"
  },
  {
    category: "pizzeria",
    name: "Al Viale",
    description: "Provola affumicata, caciocavallo, pomodorini semi dry, stracciatella e basilico.",
    price: "13,00",
    featured: true
  },
  {
    category: "pizzeria",
    name: "Andrea",
    description: "Mozzarella, peperoni, pomodorino semi dry in cottura, stracciatella e basilico.",
    price: "11,00"
  },
  {
    category: "pizzeria",
    name: "Alessio",
    description: "Mozzarella di bufala, pomodorini secchi, capocollo e scaglie di provolone piccante.",
    price: "13,00"
  },
  {
    category: "pizzeria",
    name: "Antonio",
    description: "Mozzarella, pomodorini semi dry, tonno, cipolla, burratina e basilico in uscita.",
    price: "13,00"
  },
  {
    category: "pizzeria",
    name: "Daniele",
    description: "Crema di zucca, mozzarella, salsiccia fresca, funghi porcini e grana in uscita.",
    price: "13,00"
  },
  {
    category: "pizzeria",
    name: "Biancaneve Cilentana",
    description: "Mozzarella, pomodorino, basilico e olio evo.",
    price: "6,50"
  },
  {
    category: "pizzeria",
    name: "Salsiccia e patate",
    description: "Mozzarella, salsiccia e patate al forno.",
    price: "10,00"
  },
  {
    category: "pizzeria",
    name: "Vincenzo",
    description: "Mozzarella, mortadella, stracciatella e granella di pistacchio.",
    price: "9,00"
  },
  {
    category: "pizzeria",
    name: "Salsiccia e friarielli",
    description: "Mozzarella, salsiccia, friarielli e provola affumicata.",
    price: "10,00"
  },
  {
    category: "pizzeria",
    name: "Crudaiola",
    description: "Mozzarella, pesto di pistacchio, pomodorini e scaglie di grana.",
    price: "10,00"
  },
  {
    category: "contorni",
    name: "Insalata verde",
    description: "Insalata verde.",
    price: "4"
  },
  {
    category: "contorni",
    name: "Insalata mista",
    description: "Lattuga, pomodori, carote e mais.",
    price: "5"
  },
  {
    category: "contorni",
    name: "Patatine fritte",
    description: "Patatine fritte.",
    price: "4"
  },
  {
    category: "contorni",
    name: "Verdure grigliate",
    description: "Verdure grigliate.",
    price: "6"
  },
  {
    category: "contorni",
    name: "Insalatona Al Viale",
    description: "Rucola, tonno, pomodorini, mais, olive taggiasche, scaglie di grana e mozzarella.",
    price: "10"
  },
  {
    category: "dolci",
    name: "Pastizzotto di Nova Siri",
    description: "Dolce tipico locale da proporre se disponibile in cucina.",
    price: "5",
    featured: true
  },
  {
    category: "dolci",
    name: "Crostata agli agrumi",
    description: "Frolla, crema leggera e agrumi di stagione.",
    price: "6"
  },
  {
    category: "dolci",
    name: "Tiramisu della casa",
    description: "Crema al mascarpone, caffe e cacao.",
    price: "6"
  },
  {
    category: "dolci",
    name: "Cheesecake ai frutti rossi",
    description: "Base croccante, crema morbida e salsa ai frutti rossi.",
    price: "6"
  },
  {
    category: "bevande",
    name: "Acqua naturale",
    description: "Bottiglia.",
    price: "2,00"
  },
  {
    category: "bevande",
    name: "Acqua effervescente naturale",
    description: "Bottiglia.",
    price: "2,00"
  },
  {
    category: "bevande",
    name: "Aranciata 33cl",
    description: "Lattina.",
    price: "2,50"
  },
  {
    category: "bevande",
    name: "Coca Cola 33cl",
    description: "Lattina.",
    price: "3,00"
  },
  {
    category: "bevande",
    name: "Coca Cola 1L",
    description: "Bottiglia.",
    price: "4,00"
  },
  {
    category: "bevande",
    name: "The pesca 33cl",
    description: "Lattina.",
    price: "2,50"
  },
  {
    category: "bevande",
    name: "The limone 33cl",
    description: "Lattina.",
    price: "2,50"
  },
  {
    category: "bevande",
    name: "Calice vino bianco",
    description: "Vino della casa.",
    price: "2,50"
  },
  {
    category: "bevande",
    name: "Vino della casa bianco 1L",
    description: "Vino della casa.",
    price: "8,00"
  },
  {
    category: "bevande",
    name: "Vino della casa bianco 1/2L",
    description: "Vino della casa.",
    price: "4,00"
  },
  {
    category: "bevande",
    name: "Messina Cristalli di Sale 0,2",
    description: "Birra alla spina.",
    price: "3,00"
  },
  {
    category: "bevande",
    name: "Messina Cristalli di Sale 0,4",
    description: "Birra alla spina.",
    price: "5,00"
  },
  {
    category: "bevande",
    name: "Heineken 0,2",
    description: "Birra alla spina.",
    price: "3,00"
  },
  {
    category: "bevande",
    name: "Heineken 0,4",
    description: "Birra alla spina.",
    price: "5,00"
  },
  {
    category: "bevande",
    name: "Nastro Azzurro analcolica 33cl",
    description: "Birra in bottiglia.",
    price: "2,50"
  },
  {
    category: "bevande",
    name: "Nastro Azzurro 33cl",
    description: "Birra in bottiglia.",
    price: "3,00"
  },
  {
    category: "vini",
    name: "Greco Spiti",
    description: "Bianco.",
    price: "15"
  },
  {
    category: "vini",
    name: "Re Manfredi bianco",
    description: "Bianco.",
    price: "20"
  },
  {
    category: "vini",
    name: "Lica",
    description: "Bianco.",
    price: "22"
  },
  {
    category: "vini",
    name: "Labellum Falanghina",
    description: "Bianco.",
    price: "16"
  },
  {
    category: "vini",
    name: "Labellum Chardonnay",
    description: "Bianco.",
    price: "18"
  },
  {
    category: "vini",
    name: "Rosa dei Sette",
    description: "Rosato.",
    price: "15"
  },
  {
    category: "vini",
    name: "Re Manfredi rosato",
    description: "Rosato.",
    price: "20"
  },
  {
    category: "vini",
    name: "Five Roses",
    description: "Rosato.",
    price: "15"
  },
  {
    category: "vini",
    name: "Lery",
    description: "Rosato.",
    price: "22"
  },
  {
    category: "vini",
    name: "Re Manfredi Taglio del Tralcio",
    description: "Rosso.",
    price: "20"
  },
  {
    category: "vini",
    name: "Vulcano 800",
    description: "Rosso.",
    price: "18"
  },
  {
    category: "vini",
    name: "Le Roi Rosé Brut",
    description: "Bollicine.",
    price: "15"
  },
  {
    category: "vini",
    name: "Montelvini Promosso Extra Dry",
    description: "Bollicine.",
    price: "15"
  },
  {
    category: "vini",
    name: "Masottina Brut",
    description: "Bollicine.",
    price: "20"
  },
  {
    category: "vini",
    name: "Vulcano 800 Pinot Nero Metodo Classico",
    description: "Bollicine.",
    price: "40"
  },
  {
    category: "vini",
    name: "Franciacorta Castello Bonomi Cuvée 22",
    description: "Bollicine.",
    price: "35"
  },
  {
    category: "vini",
    name: "Ca del Bosco Franciacorta",
    description: "Bollicine.",
    price: "30"
  },
  {
    category: "vini",
    name: "Champagne A. Viot & Fils Dosaggio 0 Brut",
    description: "Bollicine.",
    price: "60"
  },
  {
    category: "vini",
    name: "Berlucchi Cuvée Imperiale Brut",
    description: "Bollicine.",
    price: "30"
  },
  {
    category: "vini",
    name: "Laurent Perrier Champagne Cuvée Rosé Brut",
    description: "Bollicine.",
    price: "100"
  },
  {
    category: "distillati",
    name: "Amaro del Capo",
    description: "Digestivo.",
    price: "2,50"
  },
  {
    category: "distillati",
    name: "Amaro Lucano",
    description: "Digestivo.",
    price: "2,50"
  },
  {
    category: "distillati",
    name: "Amaro Biancamenta",
    description: "Digestivo.",
    price: "2,50"
  },
  {
    category: "distillati",
    name: "Amaro Petrus Boonekamp",
    description: "Digestivo.",
    price: "2,50"
  },
  {
    category: "distillati",
    name: "Amaro Jefferson",
    description: "Digestivo.",
    price: "3,00"
  },
  {
    category: "distillati",
    name: "Limoncello",
    description: "Digestivo.",
    price: "2,50"
  },
  {
    category: "distillati",
    name: "Whisky Astucciato",
    description: "Whisky.",
    price: "3,00"
  },
  {
    category: "distillati",
    name: "Dictador 12",
    description: "Rum.",
    price: "6,00"
  },
  {
    category: "distillati",
    name: "Grappa Nardini Extrafina",
    description: "Grappa.",
    price: "4,00"
  },
  {
    category: "distillati",
    name: "Grappa Nardini Bianca",
    description: "Grappa.",
    price: "4,00"
  },
  {
    category: "distillati",
    name: "Gin Bombay",
    description: "Gin.",
    price: "3,00"
  },
  {
    category: "distillati",
    name: "Gin Tonic Bombay",
    description: "Gin tonic.",
    price: "6,00"
  }
];

const subtitles = {
  antipasti: "Per iniziare",
  primi: "Proposte di pesce e di terra",
  mare: "Fritture, griglia e pescato",
  terra: "Secondi di carne",
  pizzeria: "Impasto, forno e classici",
  contorni: "Da abbinare",
  dolci: "Fine pasto",
  bevande: "Acqua, bibite e birre",
  vini: "Bianchi, rosati, rossi e bollicine",
  distillati: "Amari, grappe, rum e gin"
};

const menuGrid = document.querySelector("#menuGrid");

const groups = {
  antipasti: [
    { title: "Proposte di pesce", match: (item) => !["Antipasto Al Viale terra", "Formaggi misti con confetture", "Crudo e mozzarella", "Cotto e mozzarella"].includes(item.name) },
    { title: "Proposte di terra", match: (item) => ["Antipasto Al Viale terra", "Formaggi misti con confetture", "Crudo e mozzarella", "Cotto e mozzarella"].includes(item.name) }
  ],
  primi: [
    { title: "Proposte di pesce", match: (item) => !["Orecchiette al sugo", "Pennette all'arrabbiata", "Fusilli al sugo lucano", "Trascodi salsiccia e funghi"].includes(item.name) },
    { title: "Proposte di terra", match: (item) => ["Orecchiette al sugo", "Pennette all'arrabbiata", "Fusilli al sugo lucano", "Trascodi salsiccia e funghi"].includes(item.name) }
  ],
  pizzeria: [
    { title: "Pizze rosse", match: (item) => ["Pizza Alessya", "Marinara", "Margherita", "Salame", "Diavola", "Cotto", "Cotto e funghi", "Quattro stagioni", "Capricciosa", "Napoli", "Tonno e cipolla", "Wurstel e patatine", "Salsiccia e porcini", "Bufalina", "La Calabrese", "Parma"].includes(item.name) },
    { title: "Pizze bianche", match: (item) => ["Pizza pane", "Tartufata", "Quattro formaggi", "Vegetariana"].includes(item.name) },
    { title: "Pizze speciali", match: (item) => ["Al Viale", "Andrea", "Alessio", "Antonio", "Daniele", "Biancaneve Cilentana", "Salsiccia e patate", "Vincenzo", "Salsiccia e friarielli", "Crudaiola"].includes(item.name) }
  ],
  bevande: [
    { title: "Bibite", match: (item) => ["Acqua naturale", "Acqua effervescente naturale", "Aranciata 33cl", "Coca Cola 33cl", "Coca Cola 1L", "The pesca 33cl", "The limone 33cl"].includes(item.name) },
    { title: "Vino della casa e birre", match: (item) => !["Acqua naturale", "Acqua effervescente naturale", "Aranciata 33cl", "Coca Cola 33cl", "Coca Cola 1L", "The pesca 33cl", "The limone 33cl"].includes(item.name) }
  ],
  vini: [
    { title: "Bianco", match: (item) => item.description === "Bianco." },
    { title: "Rosato", match: (item) => item.description === "Rosato." },
    { title: "Rosso", match: (item) => item.description === "Rosso." },
    { title: "Bollicine", match: (item) => item.description === "Bollicine." }
  ],
  distillati: [
    { title: "Digestivi", match: (item) => item.description === "Digestivo." },
    { title: "Whisky, rum e grappe", match: (item) => ["Whisky.", "Rum.", "Grappa."].includes(item.description) },
    { title: "Gin", match: (item) => item.description === "Gin." || item.description === "Gin tonic." }
  ]
};

const categoryImages = {
  antipasti: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  primi: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
  mare: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
  terra: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  antipastiTerra: "assets/antipasti-terra.png",
  primiTerra: "assets/primi-terra.png",
  pizzaRossa: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  pizzaBianca: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=80",
  pizzaSpeciale: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  contorni: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  dolci: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  cocaCola: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mexican_Coke_%2811380037365%29_%28cropped%29.jpg",
  birra: "assets/birre-vino-casa.png",
  vinoBianco: "assets/vino-bianco.png",
  vinoRosato: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=900&q=80",
  vinoRosso: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=900&q=80",
  bollicine: "assets/bollicine.png",
  limoncello: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  whisky: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  gin: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Bombay_Gin.jpg"
};

const menuSections = [
  { key: "antipasti-pesce", title: "Antipasti mare", subtitle: "Proposte di pesce", category: "antipasti", group: groups.antipasti[0], image: categoryImages.antipasti },
  { key: "antipasti-terra", title: "Antipasti terra", subtitle: "Salumi, formaggi e mozzarella", category: "antipasti", group: groups.antipasti[1], image: categoryImages.antipastiTerra },
  { key: "primi-pesce", title: "Primi mare", subtitle: "Pasta fresca e pescato", category: "primi", group: groups.primi[0], image: categoryImages.primi },
  { key: "primi-terra", title: "Primi terra", subtitle: "Sugo, tradizione e sapori lucani", category: "primi", group: groups.primi[1], image: categoryImages.primiTerra },
  { key: "mare", title: "Mare", subtitle: subtitles.mare, category: "mare", image: categoryImages.mare },
  { key: "terra", title: "Terra", subtitle: subtitles.terra, category: "terra", image: categoryImages.terra },
  { key: "pizze-rosse", title: "Pizze rosse", subtitle: "Pomodoro, forno e classici", category: "pizzeria", group: groups.pizzeria[0], image: categoryImages.pizzaRossa },
  { key: "pizze-bianche", title: "Pizze bianche", subtitle: "Mozzarella, formaggi e verdure", category: "pizzeria", group: groups.pizzeria[1], image: categoryImages.pizzaBianca },
  { key: "pizze-speciali", title: "Pizze speciali", subtitle: "Le proposte Al Viale", category: "pizzeria", group: groups.pizzeria[2], image: categoryImages.pizzaSpeciale },
  { key: "contorni", title: "Contorni", subtitle: subtitles.contorni, category: "contorni", image: categoryImages.contorni },
  { key: "dolci", title: "Dolci", subtitle: subtitles.dolci, category: "dolci", image: categoryImages.dolci },
  { key: "bibite", title: "Bibite", subtitle: "Acqua e soft drink", category: "bevande", group: groups.bevande[0], image: categoryImages.cocaCola },
  { key: "birre-vino-casa", title: "Birre e vino casa", subtitle: "Spina, bottiglia e vino sfuso", category: "bevande", group: groups.bevande[1], image: categoryImages.birra },
  { key: "vini-bianchi", title: "Bianchi", subtitle: "I nostri vini", category: "vini", group: groups.vini[0], image: categoryImages.vinoBianco },
  { key: "vini-rosati", title: "Rosati", subtitle: "I nostri vini", category: "vini", group: groups.vini[1], image: categoryImages.vinoRosato },
  { key: "vini-rossi", title: "Rossi", subtitle: "I nostri vini", category: "vini", group: groups.vini[2], image: categoryImages.vinoRosso },
  { key: "bollicine", title: "Bollicine", subtitle: "Metodo classico e champagne", category: "vini", group: groups.vini[3], image: categoryImages.bollicine },
  { key: "digestivi", title: "Digestivi", subtitle: "Amari e limoncello", category: "distillati", group: groups.distillati[0], image: categoryImages.limoncello },
  { key: "grappe-rum", title: "Whisky, rum e grappe", subtitle: "Spirits", category: "distillati", group: groups.distillati[1], image: categoryImages.whisky },
  { key: "gin", title: "Gin", subtitle: "Gin e gin tonic", category: "distillati", group: groups.distillati[2], image: categoryImages.gin }
];

function formatPrice(price) {
  return price === "--" ? "s.q." : `<small>&euro;</small>${price}`;
}

function itemTemplate(item) {
  return `
    <article class="menu-item${item.featured ? " featured" : ""}">
      <div class="item-main">
        <div class="item-top">
          <h3 class="item-name">${item.name}</h3>
          ${item.featured ? '<span class="badge">Consigliato</span>' : ""}
        </div>
        <p class="item-description">${item.description}</p>
      </div>
      <span class="price">${formatPrice(item.price)}</span>
    </article>
  `;
}

function renderItems(items) {
  return items.map((item) => itemTemplate(item)).join("");
}

function renderMenu() {
  menuGrid.innerHTML = menuSections.map((section, sectionIndex) => {
    const categoryItems = menu.filter((item) => item.category === section.category);
    const items = section.group ? categoryItems.filter(section.group.match) : categoryItems;
    if (!items.length) return "";

    return `
      <section class="chapter chapter-${section.category} chapter-${section.key}">
        <header class="chapter-head">
          <img class="category-photo" src="${section.image}" alt="${section.title} - immagine rappresentativa" loading="lazy" referrerpolicy="no-referrer" onerror="this.classList.add('is-hidden')">
          <div class="chapter-meta">
            <span>${String(sectionIndex + 1).padStart(2, "0")}</span>
            <span>${items.length} proposte</span>
          </div>
          <h2 class="chapter-title">${section.title}</h2>
          <p class="chapter-subtitle">${section.subtitle}</p>
        </header>
        <div class="item-list">
          ${renderItems(items)}
        </div>
      </section>
    `;
  }).join("");
}

renderMenu();
