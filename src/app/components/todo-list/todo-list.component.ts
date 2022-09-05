import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  todoTitleCache: string = '';
  todoTitle: string = '';
  filter: string = '';
  checkAllItems: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.todoTitle = ''
    this.checkAllItems = false;
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
      this.todoTitleCache = todo.title;
      todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if(todo.title.trim().length === 0) {
      todo.title = this.todoTitleCache;
    }
    todo.editing = false;
  }

  checkAll(): void {
      this.todos = this.todos.map(({completed, ...rest}) => ({...rest, completed: (<HTMLInputElement>event?.target).checked}));
  }

  remaining(): number {
      return this.todos.filter(todo => todo.completed !== true).length
  }

  atLeastOnecompleted(): boolean {
    return this.todos.filter(todo => todo.completed === true).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(({completed}) => completed === false);
  }

  onFilter(): Todo[] {

    if(this.filter === 'completed'){
      return this.todos.filter(todo => todo.completed)
    }

    if(this.filter === 'active'){
      return  this.todos.filter(todo => !todo.completed)
    }

    return this.todos;
  }
}
