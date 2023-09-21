const CardField = ({ tag, classNames = '', ...props }) => {
  const Component = tag || 'input';
  return <Component className={`card-field ${classNames}`} {...props} />;
};

export default CardField;
