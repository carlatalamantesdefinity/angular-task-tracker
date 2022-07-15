import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateTaskDTO, Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

const httOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  delete(taskId: string): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.httpClient.delete<Task>(url);
  }

  update(taskId: string, task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.httpClient.put<Task>(url, task, httOptions);
  }

  create(task: CreateTaskDTO): Observable<Task> {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
    };
    return this.httpClient.post<Task>(this.apiUrl, newTask, httOptions);
  }
}
