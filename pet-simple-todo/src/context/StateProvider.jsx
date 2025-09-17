import {createContext, useContext, useReducer} from "react";
import {getLocalStorage, setLocalStorage} from "../utils.js";

const StateContext = createContext(null)
const StateDispatchContext = createContext(null)

export default function StateProvider({children}) {
  const initialState = {
      darkTheme: false,
      isCreateTaskModuleOpen: false,
      searchTerm: '',
      inputTaskValue: '',
      filter: null,
      tasks: []
    }


  function stateReducer(state, action) {
    switch (action.type) {
      case 'switch-theme' : {
        return {
          ...state,
          darkTheme: action.isDark
        }
      }
      case 'open-create-task-module' : {
        return {
          ...state,
          isCreateTaskModuleOpen: action.isOpened
        }
      }
      case 'change-search-term' : {
        return {
          ...state,
          searchTerm: action.searchTerm
        }
      }
      case 'change-input-task-value' : {
        return {
          ...state,
          inputTaskValue: action.value
        }
      }
      case 'add-task' : {
        return {
          ...state,
          isCreateTaskModuleOpen: false,
          inputTaskValue: '',
          tasks: [
            ...state.tasks,
            {id: crypto.randomUUID(), title: state.inputTaskValue, isChecked: false}
          ]
        }
      }
      case 'delete-task' : {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.taskId)
        }
      }
      case 'toggle-task-check' : {
        const newTasks = state.tasks.map(task => task.id === action.taskId ? {...task, isChecked: !task.isChecked} : task)
        return {
          ...state,
          tasks: newTasks

        }
      }
      case 'toggle-filter' : {
        return  {
          ...state,
          filter: action.filter
        }
      }
    }
  }

  const [state, dispatch] = useReducer(stateReducer, getLocalStorage('state') || initialState)

  return (
    <StateContext value={state}>
      <StateDispatchContext value={dispatch}>
        {children}
      </StateDispatchContext>
    </StateContext>
  )
}

export function useAppState() {
  return useContext(StateContext)
}

export function useAppStateDispatch() {
  return useContext(StateDispatchContext)
}