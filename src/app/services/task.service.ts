import { Injectable } from '@angular/core';
import { TASKS } from '../mock.tasks';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  get(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
