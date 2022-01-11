
import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js";

class ToDoService{

  async getAllToDoItems() {
    const res = await sandboxApi.get('/Owen/todos')
    ProxyState.toDoItems = res.data.map(d => new ToDo(d))
    console.log('list items in proxy', ProxyState.toDoItems)
  }
  async addToDo(description) { 
    const res = await sandboxApi.post('/Owen/todos', description)
    ProxyState.toDoItems = [...ProxyState.toDoItems, new ToDo(res.data)]
    console.log('proxystate to do items', ProxyState.toDoItems)
  }

  async deleteToDo(id) {
    const res = await sandboxApi.delete(`/Owen/todos/${id}`)
    console.log('delete list', res.data)
    ProxyState.toDoItems = ProxyState.toDoItems.filter(t => t.id != id)
  }


  async completeToDo(id) {
    let done = ProxyState.toDoItems.find(d => d.id == id)
    done.completed = !done.completed
    console.log(done)
    const res = await sandboxApi.put(`/Owen/todos/${id}`, done.completed)
    ProxyState.toDoItems = ProxyState.toDoItems
  }
}

export const toDoService = new ToDoService()