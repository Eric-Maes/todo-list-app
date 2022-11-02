import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks!: Task[];

  // Ajout d'une tâche
  addTasks: string = '';

  constructor() {}

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

  // Ajout d'une tâche
  addTask() {
    this.tasks.push({
      title: this.addTasks,
      done: false,
    });
  }

  // Supprimer une tâche
  deleteTask(tasks: Task): void {
    this.tasks = this.tasks.filter((tsk: Task) => {
      return JSON.stringify(tasks) !== JSON.stringify(tsk);
    });
  }

  // Mettre une tâche en "terminée"
  doneTask(id: number) {
    this.tasks.map((task, i) => {
      if (i == id) task.done = !task.done;
      return task;
    });
  }
}
