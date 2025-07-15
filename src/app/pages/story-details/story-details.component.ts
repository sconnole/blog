import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-story-details',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css',
})
export class StoryDetailsComponent {
  slug: string = '';
  markdownPath: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get('slug') ?? '';
      this.markdownPath = `assets/short-stories/${this.slug}.md`;
    });
  }
}
