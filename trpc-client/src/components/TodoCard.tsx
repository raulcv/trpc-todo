import React from 'react'
import { trpc } from '../../utils/trpc'

function TodoCard({ todo }: any) {
  const deleteTodo = trpc.todo.delete.useMutation()
  const toggleTodoStatus = trpc.todo.toggleTodoStatus.useMutation()
  const context = trpc.useContext()

  const onDeleteTodo = async () => {
    deleteTodo.mutate(todo._id, {
      onSuccess(data) {
        if (data) {
          context.todo.get.invalidate()
        }
      },
      onError(error) {
        console.error(error.message)
      },
    })
  }

  const onToggleTodoStatus = () => {
    toggleTodoStatus.mutate(todo._id, {
      onSuccess(data) {
        if (data) {
          context.todo.get.invalidate();
        }
      }
    })
  }

  return (
    <div className='border-amber-200 border-2 rounded-md p-3'>
      <div className='pb-3'>
        <h2 className='font-bold text-lg text-center'>{todo.title}</h2>
        <p className='p-2'>{todo.description}</p>
      </div>
      <div className='text-right'>
        <button
          onClick={() => onDeleteTodo()}
          className='bg-red-500 px-3 py-2 rounded-md text-white ml-auto'
        >{`${deleteTodo.isLoading ? "Loading..." : "Delete"}`}</button>

        <button
          onClick={() => onToggleTodoStatus()}
          className={`px-3 py-2 rounded-md text-white ml-2 ${todo.done ? "bg-zinc-500" : "bg-green-500"
            }`}
        >{`${todo.done ? "Undone" : "Done"}`}</button>
      </div>
    </div>
  )
}

export default TodoCard