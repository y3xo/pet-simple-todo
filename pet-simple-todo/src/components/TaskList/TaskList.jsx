import React from 'react';
import './TaskList.css'
import {tasks} from "../data.js";
import Task from "../Task/Task.jsx";

const TaskList = () => {
  return (
    <ul className='task-list'>
      {
        tasks.map(task => {
          return (
            <li key={task.id} className='task-list__item'>
              <Task task={task}/>
            </li>
          )
        })
      }
    </ul>
  );
};

export default TaskList;
