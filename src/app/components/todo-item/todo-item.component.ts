import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {id: 0, title:'', completed: false, editing: false} ;
  @Output() checkedItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() doubleClickItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editTodo(todo: Todo): void{
      this.doubleClickItem.emit(todo);
  }

  doneEdit(todo: Todo): void {
      this.checkedItem.emit(todo);
  }

  removeTodo(todoId: number): void {
      this.deleteItem.emit(todoId);
  }
}
