import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book, BookList } from '../models/IBooklist.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public form!: FormGroup;
  public books: Book[] = [];
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public bookService: BookService, private router: Router) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  get controls() {
    return this.form.controls;
  }

  add() {
    const bookList = new BookList(
      this.form.controls['title'].value,
      this.books
    );
    this.bookService.createBookList(bookList);
    this.router.navigateByUrl('bookList/index');
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
