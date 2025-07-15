import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post.service';
import { StoryService } from '../services/story.service';
import { Post } from '../models/post';
import { Story } from '../models/story';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  stories: Story[] = [];

  constructor(
    private postService: PostService,
    private storyService: StoryService,
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.sort((a, b) => b.date.localeCompare(a.date));
    });

    this.storyService.getStories().subscribe((data) => {
      this.stories = data.sort((a, b) => b.date.localeCompare(a.date));
    });
  }
}
