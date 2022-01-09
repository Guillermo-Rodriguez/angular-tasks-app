import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent{

  constructor(private taskService: TaskService) { }

  @Input() newTask: Task = {
    id: new Date().getTime(),
    desc: '',
    done: false
  }
  addNewTask():void{
    if( this.newTask.desc.trim().length === 0 ) return;
    this.taskService.addNewTask( this.newTask );
    this.newTask = {
      id: new Date().getTime(),
      desc: '',
      done: false
    }  
  }

}
