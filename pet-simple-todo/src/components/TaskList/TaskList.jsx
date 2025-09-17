import React from 'react';
import './TaskList.css'
import Task from "../Task/Task.jsx";
import {useAppState} from "../../context/StateProvider.jsx";
import EmptyStatusContainer
  from "../EmptyStatusContainer/EmptyStatusContainer.jsx";

const TaskList = () => {
  const {tasks, filter, searchTerm} = useAppState()
  const filteredTasks = filter !== null
    ? tasks.filter(task => task.isChecked === filter)
    : tasks

  const visibleTasks = filteredTasks
    .filter(task => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    .map(task => {
      return (
        <li key={task.id} className='task-list__item'>
          <Task task={task}/>
        </li>
      )
    })


  return (
    visibleTasks.length !== 0
      ? <ul className='task-list'>{visibleTasks}</ul>
      : <EmptyStatusContainer/>
  );
};

export default TaskList;
