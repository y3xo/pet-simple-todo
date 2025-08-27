import React, {useState} from 'react';
import './Select.css'

const Select = () => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('ALL')

  function onOptionClick(option) {
    setSelectedOption(option)
    setOpen(false)
  }
  return (

    <div className="select">
      <button onClick={() => setOpen(!open)} className="select-trigger">
        {
          selectedOption
            ? selectedOption
          : 'Choose option'
        }
        <span className='select-trigger__icon'>▾</span>
      </button>
      <div className={`options ${open ? "open" : ""}`}>
        <div className="option" onClick={() => onOptionClick('All')}>All</div>
        <div className="option" onClick={() => onOptionClick('Complete')}>Complete</div>
        <div className="option" onClick={() => onOptionClick('Incomplete')}>Incomplete</div>
      </div>
    </div>
  );
};

export default Select;
