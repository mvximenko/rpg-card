const fields = [
  {
    tag: 'select',
    id: 'color',
    options: ['Black', 'Blue', 'Green', 'Red', 'White'],
  },
  { id: 'name', placeholder: 'Sheoldred' },
  { id: 'mana', title: 'Mana Cost', maxLength: 1, placeholder: '1' },
  { id: 'image', type: 'file' },
  { id: 'type', placeholder: 'Legendary Creature — Phyrexian Praector' },
  { tag: 'textarea', id: 'description', placeholder: 'Deathtouch' },
  {
    id: 'power',
    title: 'Power and Toughness',
    maxLength: 3,
    placeholder: '1/1',
  },
  { id: 'author', placeholder: 'mvximenko' },
];

export default fields;
