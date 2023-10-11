import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  todos: any[] = [];

  onClick(titleInput: string) {
    this.todos.push({
      title: titleInput,
      id: this.generateRandomId(),
      isDone: false,
    });

    console.log(this.todos);
  }

  onStatusChange(id: string) {
    this.todos = this.todos.map((td) => {
      if (td.id === id) {
        td.isDone = !td.isDone;
      }
      return td;
    });
  }

  onDelete(id: string) {
    this.todos = this.todos.filter((td) => td.id !== id);
  }

  generateRandomId(length = 8) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  }
}
