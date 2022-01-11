
export class Quote{
  constructor(data){
    this.quote = data.content
    this.author = data.author
  }
  
  get Template() {
    return /*html*/ `
    <h3 class="selectable show">${this.quote}</h3>
    <h5 class="author p-0 answer " id="authorElement">Author:${this.author}</h5>
    `
  }
}