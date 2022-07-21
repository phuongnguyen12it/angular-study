import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../models/authors.model';

@Component({
  selector: 'author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
