import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoryService {
  constructor(private http: HttpClient) {}

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>('assets/short-stories/stories.json');
  }
}
