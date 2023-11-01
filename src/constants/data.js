import images from './images';

const wines = [
  {
    title: 'Château Margaux',
    price: 'R1500',
    tags: 'FRANCE | Bottle',
  },
  {
    title: 'Antinori Tignanello',
    price: 'R150',
    tags: 'ITALY | Bottle',
  },
  {
    title: 'Sapporo Premium Lager',
    price: 'R40',
    tags: 'JAPAN | 750 ml',
  },
  {
    title: 'Castle Lager',
    price: 'R25',
    tags: 'SOUTH AFRICA | 750 ml',
  },
  {
    title: 'Marqués de Riscal Rioja Reserva',
    price: 'R750',
    tags: 'SPAIN | Bottle',
  },
];

const food = [
  {
    title: 'Picasso Platter',
    price: 'R175',
    tags: 'Seared Tuna, Avocado, Cucumber, Soy Sauce.',
  },
  {
    title: "Da Vinci Delight",
    price: 'R185',
    tags: 'Prosciutto, Burrata Cheese, Arugula, Balsamic Glaze.',
  },
  {
    title: 'Monroe Meal',
    price: 'R380',
    tags: 'Truffle Risotto, Parmesan Crisps, Chives, Truffle Oil.',
  },
  {
    title: 'Sinatra Surprise',
    price: 'R285',
    tags: 'Chicken Parmesan, Marinara Sauce, Mozzarella, Basil.',
  },
  {
    title: 'Lincoln Lunch',
    price: 'R310',
    tags: 'Smoked Brisket, BBQ Sauce, Coleslaw, Brioche Bun.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Flavor Master',
    subtitle: 'Outstanding mastery of culinary flavors.',
  },
  {
    imgUrl: images.award01,
    title: 'Stellar Service',
    subtitle: 'Exceptional and personalized customer service.',
  },
  {
    imgUrl: images.award05,
    title: 'Menu Innovation',
    subtitle: 'Inventive and surprising menu creations.',
  },
  {
    imgUrl: images.award03,
    title: 'Community Involvement',
    subtitle: 'Active engagement within the local community.',
  },
];

export default { wines, food, awards };