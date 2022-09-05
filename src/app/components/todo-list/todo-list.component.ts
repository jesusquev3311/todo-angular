import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = ''
    this.todos = [
        {
          'id': 1,
          'title': "Finish Angular Screencast",
          'completed': false,
          'editing': false,
        },
        {
          'id': 2,
          'title': "Take Over the World",
          'completed': false,
          'editing': false,
        },
        {
          'id': 3,
          'title': "Workout",
          'completed': false,
          'editing': false,
        },
    ]
  }

  addTodo(): void {
    if(this.todoTitle.trim().length === 0) return;

    this.todos.push({
      id: 4,
      title: this.todoTitle,
      completed: false,
      editing: false,
    })

    this.todoTitle = ''
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: Todo): void {
      todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    todo.editing = false;
}
}
