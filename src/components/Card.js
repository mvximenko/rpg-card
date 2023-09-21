import fields from '../data/fields';

const CardField = ({ tag, classNames = '', ...props }) => {
  const Component = tag || 'input';
  return <Component className={`card-field ${classNames}`} {...props} />;
};

const Card = ({ state, handleChange, id, height }) => {
  const handleClick = () => {
    document.getElementById('image').click();
  };

  return (
    <div
      className='card'
      id={id}
      style={{
        height,
        backgroundImage: `url(${require(`../assets/${state.color.toLowerCase()}.jpg`)})`,
      }}
    >
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
