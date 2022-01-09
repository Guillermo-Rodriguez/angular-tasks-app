import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { UndoneListComponent } from './undone-list/undone-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    MainComponent,
    AddTaskComponent,
    UndoneListComponent,
    DoneListComponent
  ],
  exports:[
    MainComponent,
    AddTaskComponent,
    UndoneListComponent,
    DoneListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  bootstrap: [MainComponent]
})
export class TasksModule { }
