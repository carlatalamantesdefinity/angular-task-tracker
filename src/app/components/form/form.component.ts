import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateTaskDTO } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  text: string = '';
  day: string = new Date().toISOString().slice(0, 10);
  reminder: boolean = false;
  @Output() getItems = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.text != '') {
      const newTask: CreateTaskDTO = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.taskService.create(newTask).subscribe((res) => {
        this.getItems.emit();
      });

      this.text = '';
      this.day = new Date().toISOString().slice(0, 10);
      this.reminder = false;
    } else {
      alert('Please write a task title');
    }
  }
}
