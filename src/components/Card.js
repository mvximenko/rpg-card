import fields from '../data/fields';

const CardField = ({ tag, classNames = '', ...props }) => {
  const Component = tag || 'input';
  return <Component className={`card-field ${classNames}`} {...props} />;
};

const Card = ({ state, handleChange }) => {
  return (
    <div className='card'>
      {fields
        .filter((field) => !['color', 'image'].includes(field.id))
        .map(({ placeholder, ...field }) => (
          <CardField
            classNames={field.id}
            value={state[field.id]}
            onChange={handleChange}
            {...field}
          />
        ))}

      <div className='card-image-container'>
        {state.image && (
          <img className='card-image' src={state.image} alt='Illustration' />
        )}
      </div>
    </div>
  );
};

export default Card;
