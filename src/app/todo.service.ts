import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './todo';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Dexie {
  todos?: Dexie.Table<Todo, string>;

  constructor() {
    super('todo-db');

    this.version(1).stores({
      todos: 'id'
    });
  }

  async getAll(): Promise<Todo[]> {
    return this.todos!.toArray();
  }

  async add(title: string): Promise<void> {
    const todo = { title, done: false, id: v4() };
    await this.todos?.add(todo);
  }
  // npm i @types/uuid --save-dev
}
