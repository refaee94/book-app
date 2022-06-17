import { Injectable } from '@angular/core';
import { getNewID } from './Helper/helper';
import { Book, BookList } from './models/IBooklist.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookLists: BookList[] = [];
  constructor() {
    this.bookLists.push({
      id:  getNewID(),
      title: 'list1',
      bookList: [
        { author: 'Frank Herbert', id: getNewID(), rank: 1, year: '1965', title: 'Dune' },
        { author: 'Orson Scott Card', id:  getNewID(), rank: 2, year: '1985', title: 'Enders Game' },
        { author: 'George Orwell', id:  getNewID(), rank: 3, year: '1949', title: '1984' }

      ],
    });

    this.bookLists.forEach(a=>a.bookList.sort((a,b)=>a.rank-b.rank))
  }

  public getAllLists(): BookList[] {
    return this.bookLists;
  }

  public createBookList(bookList: BookList) {
    this.bookLists.push(bookList);
  }

  public deleteBookList(id: string) {
    this.bookLists = this.bookLists.filter((b) => b.id !== id);
  }

  public getAllBooks(ListId: string) {
    return this.bookLists.find((a) => a.id == ListId);


  }

  public createBook(book: Book, bookListId: string) {
    this.bookLists.find((a) => a.id == bookListId)?.bookList.push(book);
  }

  public deleteBook(id: string, bookListId: string) {
    var list = this.bookLists.find((a) => a.id == bookListId);

    if (list != undefined) {
      list.bookList = list?.bookList.filter((b) => b.id !== id);
    }
  }
  public updateBookRank(id: string, bookListId: string,bookRank:number) {
    var list = this.bookLists.find((a) => a.id == bookListId);

    if (list != undefined) {
     var book= list.bookList.find((a) => a.id == id);


    if (book != undefined) {
book.rank=bookRank;

list.bookList.sort((a,b)=>a.rank-b.rank)}

    }
  }
}
