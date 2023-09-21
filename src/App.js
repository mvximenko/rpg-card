import { useState } from 'react';
import Field from './components/Field';
import Card from './components/Card';
import printElement from './utils/printElement';
import fields from './data/fields';

const App = () => {
  const [state, setState] = useState({
    color: '',
    name: 'Discerning Financier',
    mana: '1',
    image: '',
    type: 'Creature - Human Noble',
    description:
      'At the beginning of your upkeep, if an opponent controls more lands than you, create a Treasure token.',
    power: '3/3',
    author: 'George Maximenko',
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

        <div className='buttons'>
          <button className='button red'>Reset</button>
          <button
            className='button green'
            onClick={() => printElement('cardForPrint', state.name)}
          >
            Save
          </button>
        </div>
      </div>

      <div className='right'>
        <Card state={state} handleChange={handleChange} />
      </div>

      <div className='out-of-screen'>
        <Card
          state={state}
          handleChange={handleChange}
          height={936}
          id='cardForPrint'
        />
      </div>
    </main>
  );
};

export default App;
