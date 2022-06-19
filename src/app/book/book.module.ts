import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book/create-book.component';

@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    CreateBookComponent,
  ],
  imports: [CommonModule, FormsModule, BookRoutingModule, ReactiveFormsModule],
  exports: [BookRoutingModule],
})
export class BookModule {}
