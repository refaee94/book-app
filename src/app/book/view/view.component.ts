import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/IBooklist.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  id!: string;
  bookList: Book[] | undefined = [];
  constructor(public bookService: BookService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['bookListId'];
    const list = this.bookService.getAllBooks(this.id)?.bookList;
    if (list !== null) {
      this.bookList = list;
    }
  }

  updateBookList(): void {
    const list = this.bookService.getAllBooks(this.id)?.bookList;
    if (list !== null) {
      this.bookList = list;
    }
  }

  editRank(BookId: string, rank: number): void {
    this.bookService.updateBookRank(BookId, this.id, rank);
  }

  deleteBook(BookId: string): void {
    this.bookService.deleteBook(BookId, this.id);
    this.updateBookList();
  }

  addBook(book: Book) {
    this.bookList?.push(book);
    this.updateBookList();
    this.bookList?.sort((a, b) => a.rank - b.rank);
  }
}
