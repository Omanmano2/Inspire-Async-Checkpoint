
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
}

export const toDoService = new ToDoService()