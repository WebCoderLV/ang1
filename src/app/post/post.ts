import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  which: boolean = true;

  postImageSource = input.required<string>();

  getImageUrl = output<boolean>();

  chengeImageUrl() {
    this.which = !this.which;
    this.getImageUrl.emit(this.which);
  }
}
