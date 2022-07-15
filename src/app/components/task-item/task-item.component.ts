import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() getItems = new EventEmitter();
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onDelete(taskId: number | undefined) {
    if (taskId == undefined) {
      return;
    } else {
      this.taskService.delete(taskId).subscribe(() => {
        this.getItems.emit();
      });
    }
  }
}
