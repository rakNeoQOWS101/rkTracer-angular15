import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo.component';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TodoModule {}
