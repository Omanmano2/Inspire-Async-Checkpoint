

export class ToDo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.user = data.user
    this.completed = false
  }

  get Template() {
    return /*html*/ `
    <li class="py-3 text-even">
    <div class= "d-flex justify-content-between align-items-baseline text-center">
     <input type="checkbox" id="completed" ${this.completed ? 'checked' : ''} onclick="app.toDoController.completeToDo()" />
     <h5 onclick="app.toDoController.completeToDo('${this.id}')">${this.description}</h5>
     <i class="mdi mdi-delete selectable" onclick="app.toDoController.deleteToDo('${this.id}')"></i>
    </div>
   </li>
    `
  }
}