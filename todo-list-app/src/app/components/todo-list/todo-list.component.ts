import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks!: Task[];

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        title: 'Corriger bugs CSS',
        done: false,
      },
      {
        title: 'Développer un tableau HTML/PHP',
        done: false,
      },
      {
        title: 'Boire un délicieux café',
        done: false,
      },
      {
        title: 'Faire des recherches sur GOOGLE (évidement)',
        done: false,
      },
    ];
  }

}
