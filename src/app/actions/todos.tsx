const API_URL = "http://localhost:3001/tasks"

export async function fetchTodos() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error("Failed to fetch todos")
  return res.json()
}

export async function fetchTodoById(id: number) {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error("Failed to fetch todo")
  return res.json()
}

export async function createTodo(data: {
  title: string
  color?: string
  completed?: boolean
}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error("Failed to create todo")
  return res.json()
}

export async function updateTodo(
  id: number,
  data: { title?: string; color?: string; completed?: boolean }
) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error("Failed to update todo")
  return res.json()
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) throw new Error("Failed to delete todo")
  return
}
