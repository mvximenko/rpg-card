import CardField from './CardField';
import fields from '../data/fields';

const Card = ({ state, handleChange, imageRef, id, height }) => {
  const handleClick = () => {
    imageRef.current.click();
  };

  const backgroundImage = `url(${require(`../assets/${state.color.toLowerCase()}.jpg`)})`;

  return (
    <div className='card' id={id} style={{ height, backgroundImage }}>
      {fields
        .filter((field) => !['color', 'image'].includes(field.id))
        .map(({ placeholder, ...field }) => (
          <CardField
            key={field.id}
            classNames={field.id}
            value={state[field.id]}
            onChange={handleChange}
            {...field}
          />
        ))}

      <div className='card-image-container' onClick={handleClick}>
        {state.image && (
          <img className='card-image' src={state.image} alt='Illustration' />
        )}
      </div>
    </div>
  );
};

export default Card;
