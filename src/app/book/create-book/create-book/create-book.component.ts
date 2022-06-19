import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/IBooklist.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent  {
  form: FormGroup;

  constructor() { this.form = new FormGroup({
    'title': new FormControl("" , Validators.required),
    'year': new FormControl("", Validators.required),
    'author': new FormControl("", Validators.required),
    'rank': new FormControl(1, Validators.required),

  }); }
@Output() onAddNewBook = new EventEmitter<Book>();

  onSubmit(){
    const book=new Book(this.form.controls['title'].value,this.form.controls['year'].value,this.form.controls['author'].value,this.form.controls['rank'].value);
this.onAddNewBook.emit(book);
this.form.reset();
  }
}
