import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostsComponent } from './pages/posts/posts.component';
import { StoryDetailsComponent } from './pages/story-details/story-details.component';
import { StoriesComponent } from './pages/stories/stories.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'stories/:slug', component: StoryDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:slug', component: PostDetailsComponent },
];
