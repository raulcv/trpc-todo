import React, { PureComponent } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function Index() {

  return (
    <div className='p-2'>
      <h1 className='text-white text-2xl text-center'>Your Todos</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
