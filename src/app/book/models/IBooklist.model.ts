import { getNewID } from '../Helper/helper';

export class BookList {
  id: string;
  title: string;
  bookList: Book[];
  constructor(title: string, bookList: Book[]) {
    this.id = getNewID();
    this.title = title;
    this.bookList = bookList;
  }
}

export class Book {
  id: string;
  title: string;
  year: string;
  author: string;
  rank: number;
  constructor(title: string, year: string, author: string, rank: number) {
    this.id = getNewID();
    this.title = title;
    this.year = year;
    this.author = author;
    this.rank = rank;
  }
}
