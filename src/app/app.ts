import { Component, signal } from '@angular/core';
import { Post } from './post/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Post, CommonModule],
})
export class App {
  imageUrl1 = 'images/PutnuBarotajas.jpg';
  imageUrl2 = 'images/KalnuEzers.webp';

  logUrl(event: string) {
    console.log(event);
  }

  imgSource = signal(this.imageUrl1);

  chengeUrl(e: boolean): void {
    if (e) {
      this.imgSource.set(this.imageUrl1);
    } else {
      this.imgSource.set(this.imageUrl2);
    }
  }
}
