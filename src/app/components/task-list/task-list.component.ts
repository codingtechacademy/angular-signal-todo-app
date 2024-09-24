import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    TaskItemComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  readonly searchTerm = signal('');
  readonly taskTitle = signal('');

  private readonly taskService = inject(TaskService);

  readonly filteredTasks = computed(() => {
    return this.taskService
      .tasks()
      .filter((task) =>
        task.title.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
  });

  addTask() {
    const title = this.taskTitle()?.trim();
    
    if (title) {
      this.taskService.addTask({ title });
      this.taskTitle.set('');
    }
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }
}
