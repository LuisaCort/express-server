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
  let id = Math.max.apply(null, [0, ...tasks.map(element => element.id)])+1
  tasks.push({
    id: id,
    desc: task.desc,
    state: task.state
  })
  return tasks
}
export const deleteTask = id => tasks = tasks.filter(element => element.id !== id)
export const editTask = (id, task) => {
  console.log(task)
  tasks = tasks.map(element => element.id !== id ? element : {
    id: id,
    desc: task.desc,
    state: task.state
  })
  return tasks
}