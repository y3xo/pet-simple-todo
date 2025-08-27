import './Header.css'
import Input from "../Input/Input.jsx";
import {useState} from "react";
import ToolBar from "../ToolBar/ToolBar.jsx";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')

  const searchIcon = <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  return (
    <header className='header container'>
      <h1 className="header__title">Todo List</h1>
      <Input
        name='search'
        id='search'
        type='search'
        label="Search task..."
        value={searchTerm}
        onChange={setSearchTerm}
        icon={searchIcon}
      />
      <ToolBar/>
    </header>
  )
}


{/*<Input*/}
{/*  name='input-task'*/}
{/*  id='input-task'*/}
{/*  type='text'*/}
{/*  label="Input your note..."*/}
{/*  value={searchTerm}*/}
{/*  onChange={setSearchTerm}*/}
{/*/>*/}