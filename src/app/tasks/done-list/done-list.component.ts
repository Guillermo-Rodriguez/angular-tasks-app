import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent {

  get taskDone():Task[]{
    return this.taskService.taskDone;
  }

  deleteTask( task: Task ):void{
    this.taskService.deleteDone( task );
  }

  constructor(private taskService: TaskService) { }

}
