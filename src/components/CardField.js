const CardField = ({ tag, classNames = '', ...props }) => {
  const Component = tag || 'input';
  return (
    <Component
      className={`card-field ${classNames}`}
      tabIndex='-1'
      autoComplete='none'
      {...props}
    />
  );
};

export default CardField;
