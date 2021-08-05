import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamListService {
  url = 'https://api.github.com/users?per_page=8';

  constructor(private http: HttpClient) {}

  getTeamList() {
    return this.http.get(this.url);
  }
}
