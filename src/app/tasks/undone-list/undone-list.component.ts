import { Component } from '@angular/core';

import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-undone-list',
  templateUrl: './undone-list.component.html',
  styleUrls: ['./undone-list.component.css']
})
export class UndoneListComponent {


  get task():Task[]{
    return this.taskService.task;
  }

  markAsDone( task: Task ):void{
    this.taskService.markDone( task );
  }

  constructor(private taskService : TaskService) { }


}
