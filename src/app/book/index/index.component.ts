import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookList } from '../models/IBooklist.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  bookLists: BookList[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookLists=this.bookService.getAllLists();
  }
  deleteList(id:string){
    this.bookService.deleteBookList(id);
    this.bookLists=this.bookService.getAllLists();

  }
}
