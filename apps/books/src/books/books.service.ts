import { Injectable } from '@nestjs/common';
import { BookDto } from '@app/contracts/books/book.dto';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Title 1',
      author: 'Author 1',
      rating: 5,
    },
    {
      id: 2,
      title: 'Title 2',
      author: 'Author 2',
      rating: 4.5,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
