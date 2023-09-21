import { forwardRef } from 'react';

const Field = ({ tag, id, title, options, ...props }, ref) => {
  const Component = tag || 'input';
  return (
    <div className='field'>
      <label htmlFor={id}>{title ?? id}</label>
      <Component id={id} {...props} ref={ref}>
        {options &&
          options.map((option, index) => <option key={index}>{option}</option>)}
      </Component>
    </div>
  );
};

export default forwardRef(Field);
