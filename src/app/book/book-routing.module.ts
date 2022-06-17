import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'bookList/index', pathMatch: 'full'},
  { path: 'bookList/index', component: IndexComponent },
  { path: 'bookList/:bookListId/view', component: ViewComponent },
  { path: 'bookList/create', component: CreateComponent },
  { path: 'bookList/:bookListId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class BookRoutingModule { }
