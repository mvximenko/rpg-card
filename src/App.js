import { useState } from 'react';
import './styles/main.css';

const fields = [
  { tag: 'select', id: 'color', options: ['White', 'Green'] },
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

const Field = ({ tag, id, title, options, ...props }) => {
  const Component = tag || 'input';
  return (
    <div className='field'>
      <label htmlFor={id}>{title ?? id}</label>
      <Component id={id} {...props}>
        {options &&
          options.map((option, index) => <option key={index}>{option}</option>)}
      </Component>
    </div>
  );
};

function App() {
  const [state, setState] = useState({
    color: '',
    name: '',
    mana: '',
    image: '',
    type: '',
    description: '',
    power: '',
    author: '',
  });

  const handleChange = (event) => {
    const { target } = event;

    if (target.files?.[0]) {
      setState((prevState) => ({
        ...prevState,
        [target.id]: URL.createObjectURL(target.files[0]),
      }));
    }

    if (!target.files) {
      setState((prevState) => ({
        ...prevState,
        [target.id]: target.value,
      }));
    }
  };

  return (
    <main className='main'>
      <div className='left'>
        {fields.map((field) => (
          <Field
            key={field.id}
            onChange={handleChange}
            {...(field.type !== 'file' && { value: state[field.id] })}
            {...field}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
