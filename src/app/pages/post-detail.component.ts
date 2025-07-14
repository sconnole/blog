import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  selector: 'app-post-detail',
  styleUrls: ['./post-detail.component.css'],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent {
  slug: string = '';
  get markdownPath(): string {
    return `assets/posts/${this.slug}.md`;
  }

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
  }
}
