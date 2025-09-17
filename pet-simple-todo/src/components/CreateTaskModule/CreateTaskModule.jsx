import React, {useEffect, useRef} from 'react';
import './CreateTaskModule.css'
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import {useAppState, useAppStateDispatch} from "../../context/StateProvider.jsx";
import { motion } from "motion/react";

const CreateTaskModule = () => {
  const {inputTaskValue, isCreateTaskModuleOpen} = useAppState()
  const dispatch = useAppStateDispatch()

  const inputRef = useRef(null)

  useEffect(() => {
    isCreateTaskModuleOpen ? inputRef.current.focus() : null
  }, [isCreateTaskModuleOpen]);

  function handleInputChange(value) {
    dispatch({
      type: 'change-input-task-value',
      value
    })
  }

  function addTask(e) {
    e.preventDefault()
    dispatch({
      type: 'add-task',
    })
  }

  function closeModal() {
    dispatch({
      type: 'open-create-task-module',
      isOpened: false
    })
  }

  function handleFormOnKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask(e);
    }
  }

  return (
    <motion.div
      transition={{
        duration: 0.2
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className='module__container'
      onClick={(e) => {
           if (e.target.className === 'module__container') {
             closeModal()
           }
         }}>
      <div className='module'>
        <div className="module__header">
          <h1 className="module__title">NEW NOTE</h1>
          <form id='input-new-task' onSubmit={addTask} onKeyDown={handleFormOnKeyDown}>
            <Input ref={inputRef} type='text' id='create-task' label="Input your note..." value={inputTaskValue} onChange={handleInputChange}/>
          </form>
        </div>
        <div className="module__footer">
          <Button module='secondary' title='Cancel' onClick={closeModal}/>
          <Button type='submit' form='input-new-task' title='Apply'/>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateTaskModule;
