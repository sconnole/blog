import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside
      class="bg-gray-100 dark:bg-gray-800 p-4 w-full sm:w-64 sm:sticky top-0 sm:h-screen"
    >
      <h2 class="text-xl font-semibold mb-4 dark:text-white">Blog Posts</h2>
      <ul class="space-y-2">
        <li *ngFor="let post of posts">
          <a
            [routerLink]="['/posts', post.slug]"
            class="text-blue-600 dark:text-blue-400 hover:underline block"
          >
            {{ post.title }}
          </a>
        </li>
      </ul>
    </aside>
  `,
})
export class MainMenuComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.sort((a, b) => b.date.localeCompare(a.date));
    });
  }
}
