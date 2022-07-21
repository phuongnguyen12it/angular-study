import { Component } from '@angular/core';
import { Author, authors } from '../models/authors.model';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected = (selectedAuthror: Author) => {
    this.currentAuthor = selectedAuthror;
  };

  onDeleted = (idAuthorDelete: number) => {
    this.authors = this.authors.filter((author) => {
      return author.id !== idAuthorDelete;
    });
  };
}
