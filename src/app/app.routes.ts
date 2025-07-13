import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PostDetailComponent } from './pages/post-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:slug', component: PostDetailComponent },
];
