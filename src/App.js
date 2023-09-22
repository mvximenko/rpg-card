import { useState, useRef } from 'react';
import Field from './components/Field';
import Card from './components/Card';
import printElement from './utils/printElement';
import fields from './data/fields';
import { ReactComponent as GitHubIcon } from './assets/github.svg';

const initialState = {
  color: 'White',
  name: '',
  mana: '',
  image: '',
  type: '',
  description: '',
  power: '',
  author: '',
};

const App = () => {
  const [state, setState] = useState(initialState);
  const imageRef = useRef(null);

  const handleChange = ({ target }) => {
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

  const resetState = () => {
    setState(initialState);
    imageRef.current.value = null;
  };

  return (
    <main className='main'>
      <div className='left'>
        {fields.map((field) => (
          <Field
            key={field.id}
            onChange={handleChange}
            ref={field.id === 'image' ? imageRef : null}
            {...(field.type !== 'file' && { value: state[field.id] })}
            {...field}
          />
        ))}

        <div className='buttons'>
          <a
            className='github'
            href='https://github.com/mvximenko/rpg-card'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHubIcon />
          </a>

          <button className='button red' onClick={resetState}>
            Reset
          </button>

          <button
            className='button green'
            onClick={() => printElement('cardForPrint', state.name)}
          >
            Save
          </button>
        </div>
      </div>

      <div className='right'>
        <Card state={state} handleChange={handleChange} imageRef={imageRef} />
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
