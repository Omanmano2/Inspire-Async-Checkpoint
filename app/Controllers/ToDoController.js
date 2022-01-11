import { ProxyState } from "../AppState.js"
import { confirmation, toast } from "../Services/AlertService.js"
import { toDoService } from "../Services/ToDoService.js"

function _drawToDoItems() {
const list = ProxyState.toDoItems
let template = ''
list.forEach(l => template += l.Template)
document.getElementById('todo').innerHTML = template
}
export class ToDoController {
  constructor() {
    ProxyState.on('toDoItems', _drawToDoItems)
    toDoService.getAllToDoItems()
  }
  drawToDoItems() {
    _drawToDoItems()
  }
  async addToDo() {
    try {
      window.event.preventDefault()
      console.log('submitted')
      let form = window.event.target
      const description = {
        description: form.description.value
      }
      console.log('adding to Do', description)
      await toDoService.addToDo(description)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  async deleteToDo(id) {
    try {
      const foundToDo = ProxyState.toDoItems.find(f => f.id == id)
      console.log('found list item to be deleted', foundToDo)
      if (await confirmation('Are you sure you want to delete this to do ?')) {
        await toDoService.deleteToDo(id)
        toast(`${foundToDo.description} was yeeted!`)
      }
    } catch (error) {
      console.error(error)
    }
  }
}