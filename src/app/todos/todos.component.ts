import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.update();
  }

  async add(title: string) {
    await this.todoService.add(title);
    this.update();
  }

  async update() {
    this.todos = await this.todoService.getAll();
  }
}
