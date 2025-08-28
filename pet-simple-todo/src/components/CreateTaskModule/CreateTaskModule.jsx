import React, {useState} from 'react';
import './CreateTaskModule.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

const CreateTaskModule = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div className="module__container">
        <div className='module'>
          <div className="module__header">
            <h1 className="module__title">NEW NOTE</h1>
            <Input type='text' id='create-task' label="Input your note..." value={inputValue} onChange={setInputValue}/>
          </div>
          <div className="module__footer">
            <Button module='secondary' title='Cancel' />
            <Button title='Apply'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTaskModule;
