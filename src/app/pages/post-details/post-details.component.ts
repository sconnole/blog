import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  selector: 'app-post-detail',
  styleUrls: ['./post-details.component.css'],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent {
  slug: string = '';
  markdownPath: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug') ?? '';
      this.markdownPath = `assets/posts/${this.slug}.md`;
    });
  }
}
