import { nanoid } from "nanoid"

export let tasks = [
  {
    id: 0,
    desc: "hola",
    state: false
  },
  {
    id: 1,
    desc: "adios",
    state: true
  },
  {
    id: 2,
    desc: "buenas",
    state: false
  }
]
export const addTask = task => {
  task.id = nanoid()
  tasks.push(task)
  return task
}
export const editTask = (id, task) => {
  tasks = tasks.map(element => element.id !== id ? element : {
    id: id,
    desc: task.desc,
    state: task.state
  })
  return tasks.find(element => element.id === id)
}
export const deleteTask = id => tasks = tasks.filter(element => element.id !== id)
