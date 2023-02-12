import React from 'react'
import { trpc } from '../../utils/trpc'
import TodoCard from './TodoCard'

function TodoList() {
  const {data, isError, isLoading, error} = trpc.todo.get.useQuery()
  console.log(data)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>
  return (
    <div className='grid gap-5'>
      {(data || []).map((todo: any)=>(
        <TodoCard key={todo._id} todo={todo}></TodoCard>
      ))}

    </div>
  )
}

export default TodoList