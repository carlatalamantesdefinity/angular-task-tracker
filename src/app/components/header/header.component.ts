import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string = 'Carla';
  pendingTasks: number = 0;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private taskService: TaskService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {
    this.taskService.get().subscribe((res) => {
      this.pendingTasks = res.length;
    });
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
