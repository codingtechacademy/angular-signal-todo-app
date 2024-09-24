import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../../models/task.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  task = input.required<Task>();

  removeTask = output<Task>();
}
