import {memo} from "react";
import './Input.css'
import {useState} from "react";

export default function Input({icon, onChange, label, ...rest}) {
  const [isFocus, setIsFocus] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  const inFocusLabel = label.replace('...', '')

  return (
    <form className='input__form' onSubmit={handleSubmit}>
      <label htmlFor={rest.id} className={`input__label ${(isFocus || rest.value) ? 'motion' : ''}`}>{isFocus ? inFocusLabel : label}</label>
        <input
          className='input'
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(e) => onChange(e.target.value)}
          autoComplete='off'
          {...rest}
        />
        { (rest.value?.length > 0) ||
          <span className="input__icon">{icon}</span>
        }
    </form>
  )
}