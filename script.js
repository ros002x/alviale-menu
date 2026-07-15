const menu = [
  {
    category: "antipasti",
    name: "Tagliere del Viale",
    description: "Salumi lucani, formaggi, sottoli, olive e pane caldo.",
    price: "16",
    featured: true
  },
  {
    category: "antipasti",
    name: "Verdure grigliate e olio lucano",
    description: "Melanzane, zucchine e peperoni con erbe mediterranee.",
    price: "8"
  },
  {
    category: "antipasti",
    name: "Bruschette miste",
    description: "Pomodoro, basilico, crema di olive e verdure di stagione.",
    price: "7"
  },
  {
    category: "antipasti",
    name: "Frittelle della casa",
    description: "Impasto salato fritto, servito caldo con salsa leggera.",
    price: "8"
  },
  {
    category: "antipasti",
    name: "Polpo, patate e prezzemolo",
    description: "Insalata tiepida con olio extravergine e limone.",
    price: "13"
  },
  {
    category: "primi",
    name: "Frizzuli con mollica croccante",
    description: "Pasta fresca ispirata alla tradizione lucana, con pomodoro e mollica tostata.",
    price: "12",
    featured: true
  },
  {
    category: "primi",
    name: "Orecchiette agli agrumi e gamberi",
    description: "Richiamo alla costa ionica e agli agrumi del territorio.",
    price: "15"
  },
  {
    category: "primi",
    name: "Spaghetti alle vongole",
    description: "Vongole, aglio, olio, prezzemolo e fondo di mare.",
    price: "16",
    featured: true
  },
  {
    category: "primi",
    name: "Cavatelli al ragu lucano",
    description: "Pasta fresca con ragu lento e pecorino.",
    price: "13"
  },
  {
    category: "primi",
    name: "Risotto limone e gambero",
    description: "Risotto cremoso con zest di limone e gamberi.",
    price: "17"
  },
  {
    category: "mare",
    name: "Grigliata dello Ionio",
    description: "Selezione di pescato alla griglia con limone, olio extravergine e contorno.",
    price: "22",
    featured: true
  },
  {
    category: "mare",
    name: "Frittura leggera",
    description: "Calamari, gamberi e verdure croccanti. Disponibilita' da confermare ogni giorno.",
    price: "18"
  },
  {
    category: "mare",
    name: "Orata al forno",
    description: "Con patate, pomodorini, olive e profumo di origano.",
    price: "20"
  },
  {
    category: "mare",
    name: "Calamaro alla piastra",
    description: "Servito con rucola, limone e verdure di stagione.",
    price: "17"
  },
  {
    category: "mare",
    name: "Pepata di cozze",
    description: "Cozze, pepe nero, prezzemolo e crostini.",
    price: "11"
  },
  {
    category: "terra",
    name: "Tagliata di manzo",
    description: "Rucola, scaglie di grana, olio extravergine e sale grosso.",
    price: "20",
    featured: true
  },
  {
    category: "terra",
    name: "Salsiccia lucana alla brace",
    description: "Con patate rustiche e peperoni.",
    price: "14"
  },
  {
    category: "terra",
    name: "Cotoletta e patatine",
    description: "Piatto semplice per bambini e tavolate.",
    price: "10"
  },
  {
    category: "pizzeria",
    name: "Margherita del Viale",
    description: "Pomodoro, fiordilatte, basilico e olio extravergine.",
    price: "7"
  },
  {
    category: "pizzeria",
    name: "Lucana",
    description: "Pomodoro, mozzarella, salsiccia, peperoni cruschi e olive.",
    price: "10"
  },
  {
    category: "pizzeria",
    name: "Diavola",
    description: "Pomodoro, mozzarella e salame piccante.",
    price: "9"
  },
  {
    category: "pizzeria",
    name: "Quattro formaggi",
    description: "Mozzarella, gorgonzola, provola e grana.",
    price: "10"
  },
  {
    category: "pizzeria",
    name: "Ortolana",
    description: "Mozzarella, verdure grigliate e basilico.",
    price: "9"
  },
  {
    category: "pizzeria",
    name: "Tonno e cipolla",
    description: "Pomodoro, mozzarella, tonno e cipolla rossa.",
    price: "10"
  },
  {
    category: "contorni",
    name: "Patate rustiche",
    description: "Patate al forno con rosmarino.",
    price: "5"
  },
  {
    category: "contorni",
    name: "Insalata mista",
    description: "Lattuga, pomodori, carote e mais.",
    price: "5"
  },
  {
    category: "contorni",
    name: "Verdure di stagione",
    description: "Contorno del giorno dalla cucina.",
    price: "6"
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
    name: "Acqua",
    description: "Naturale o frizzante.",
    price: "2"
  },
  {
    category: "bevande",
    name: "Calice di vino",
    description: "Bianco, rosso o rosato della casa.",
    price: "5"
  },
  {
    category: "bevande",
    name: "Birra alla spina",
    description: "Media.",
    price: "5"
  },
  {
    category: "bevande",
    name: "Amari e digestivi",
    description: "Selezione della casa.",
    price: "4"
  }
];

const labels = {
  antipasti: "Antipasti",
  primi: "Primi",
  mare: "Mare",
  terra: "Terra",
  pizzeria: "Pizzeria",
  contorni: "Contorni",
  dolci: "Dolci",
  bevande: "Bevande"
};

const subtitles = {
  antipasti: "Per iniziare",
  primi: "Pasta fresca e sapori del territorio",
  mare: "Pescato, griglia e fritture",
  terra: "Carne e cucina semplice",
  pizzeria: "Impasto, forno e classici",
  contorni: "Da abbinare",
  dolci: "Fine pasto",
  bevande: "Acqua, vino e digestivi"
};

const order = ["antipasti", "primi", "mare", "terra", "pizzeria", "contorni", "dolci", "bevande"];
const menuGrid = document.querySelector("#menuGrid");

const categoryImages = {
  antipasti: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=900&q=80",
  primi: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
  mare: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
  terra: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  pizzeria: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  contorni: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  dolci: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  bevande: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
};
function itemTemplate(item, index) {
  return `
    <article class="menu-item${item.featured ? " featured" : ""}">
      <div class="item-main">
        <div class="item-top">
          <span class="item-number">${String(index + 1).padStart(2, "0")}</span>
          <h3 class="item-name">${item.name}</h3>
          ${item.featured ? '<span class="badge">Consigliato</span>' : ""}
        </div>
        <p class="item-description">${item.description}</p>
      </div>
      <span class="price"><small>&euro;</small>${item.price}</span>
    </article>
  `;
}

function renderMenu() {
  menuGrid.innerHTML = order.map((category, categoryIndex) => {
    const items = menu.filter((item) => item.category === category);
    if (!items.length) return "";

    return `
      <section class="chapter chapter-${category}">
        <header class="chapter-head">
          <img class="category-photo" src="${categoryImages[category]}" alt="${labels[category]} - immagine rappresentativa" loading="lazy" referrerpolicy="no-referrer" onerror="this.classList.add('is-hidden')">
          <div class="chapter-meta">
            <span>${String(categoryIndex + 1).padStart(2, "0")}</span>
            <span>${items.length} proposte</span>
          </div>
          <h2 class="chapter-title">${labels[category]}</h2>
          <p class="chapter-subtitle">${subtitles[category]}</p>
        </header>
        <div class="item-list">
          ${items.map(itemTemplate).join("")}
        </div>
      </section>
    `;
  }).join("");
}

renderMenu();
