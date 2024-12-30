import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BookDto as ClientBookDto } from '@app/contracts/books/book.dto';
import { BookDto } from './dto/book.dto';
import { map } from 'rxjs';
import { BOOKS_CLIENT } from './constant';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@Inject(BOOKS_CLIENT) private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient
      .send('books.create', createBookDto)
      .pipe(map(this.mapBookDto));
  }

  findAll() {
    return this.booksClient.send('books.findAll', {});
  }

  findOne(id: number) {
    return this.booksClient.send('books.findOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send('books.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.booksClient.send('books.remove', id);
  }

  private mapBookDto(bookDto: ClientBookDto): BookDto {
    return {
      id: bookDto.id,
      title: bookDto.title,
    };
  }
}
