import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['postImageSource'].currentValue);
  }

  which: boolean = true;

  postImageSource = input.required<string>();

  getImageUrl = output<boolean>();

  chengeImageUrl() {
    this.which = !this.which;
    this.getImageUrl.emit(this.which);
  }
}
