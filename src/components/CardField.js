const CardField = ({ tag, classNames = '', ...props }) => {
  const Component = tag || 'input';
  return (
    <Component
      className={`card-field ${classNames}`}
      tabindex='-1'
      autoComplete='none'
      {...props}
    />
  );
};

export default CardField;
