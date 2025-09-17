import React, {useState} from 'react';
import './Select.css'
import {useAppStateDispatch} from "../../context/StateProvider.jsx";

const Select = () => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('ALL')

  const dispatch = useAppStateDispatch()

  function onOptionClick(option, isComplete) {
    setSelectedOption(option)
    setOpen(false)

    dispatch({
      type: 'toggle-filter',
      filter: isComplete
    })
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
        <div className="option" onClick={() => onOptionClick('All', null)}>All</div>
        <div className="option" onClick={() => onOptionClick('Complete', true)}>Complete</div>
        <div className="option" onClick={() => onOptionClick('Incomplete', false)}>Incomplete</div>
      </div>
    </div>
  );
};

export default Select;
