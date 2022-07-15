import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  delete(taskId: number): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.httpClient.delete<Task>(url);
  }
}
