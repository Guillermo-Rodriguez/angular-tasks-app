import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _task: Task[] = [];

  private _taskDone: Task[] = [];

  get task():Task[]{
    return [...this._task];
  }

  get taskDone():Task[]{
    return [...this._taskDone];
  }

  addNewTask( task:Task ):void {
    this._task.push( task );
  }

  markDone( task:Task ):void {
    const taskDone:Task|undefined = this._task.find( t => t.id === task.id );
    this._task = this._task.filter( t => t.id !== task.id );
    taskDone && this._taskDone.push( taskDone );
  }

  deleteDone( task:Task ):void{
    this._taskDone = this._taskDone.filter( t => t.id !== task.id );
  }

  constructor() { }
}
