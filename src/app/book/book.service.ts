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
        { author: 'Frank Herbert', id: Math.random().toString(), rank: 1, year: '1965', title: 'Dune' },
        { author: 'Orson Scott Card', id: Math.random().toString(), rank: 2, year: '1985', title: 'Enders Game' },
        { author: 'George Orwell', id: Math.random().toString(), rank: 3, year: '1949', title: '1984' },
        { author: 'Ray Bradbury', id: Math.random().toString(), rank: 4, year: '1953', title: 'Fahrenheit 451' },
        { author: 'Aldous Huxley  ', id: Math.random().toString(), rank: 5, year: '1932', title: 'Brave New World' }
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
    const list = this.bookLists.find((a) => a.id == bookListId);

    if (list != undefined) {
      list.bookList = list?.bookList.filter((b) => b.id !== id);
    }
  }
  public updateBookRank(id: string, bookListId: string,bookRank:number) {
    const list = this.bookLists.find((a) => a.id == bookListId);

    if (list != undefined) {
     const book= list.bookList.find((a) => a.id == id);


    if (book != undefined) {
book.rank=bookRank;

list.bookList.sort((a,b)=>a.rank-b.rank)}

    }
  }
}
