import { useState } from 'react';
import Field from './components/Field';
import Card from './components/Card';
import fields from './data/fields';
import './styles/main.css';

const App = () => {
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

      <div className='right'>
        <Card state={state} handleChange={handleChange} />
      </div>
    </main>
  );
};

export default App;
