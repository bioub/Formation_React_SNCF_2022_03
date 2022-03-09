import { useState } from 'react';
import './Select.css';

function Select({ options = [], defaultValue = '' }) {
  const [open, setOpen] = useState(false);

  if (!options.length) {
    return null;
  }

  if (!defaultValue) {
    defaultValue = options[0];
  }

  // const itemsJsx = [];

  // for (const option of options) {
  //   itemsJsx.push(<div className="item" key={option}>{option}</div>);
  // }

  // Chocolate => transform('Chocolate') => <div className="item" key={option}>Chocolate</div>

  const itemsJsx = options.map((option) => <div className="item" key={option}>{option}</div>);

  return (
    <div className="Select" onClick={() => setOpen(!open)}>
      <div className="selected">{defaultValue}</div>
      {open && <div className="menu">
        {itemsJsx}
      </div>}
    </div>
  )
}

export default Select;