import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../services/team-list.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamMembers: any;

  constructor(private service: TeamListService) {}

  ngOnInit() {
    this.getTeamList();
  }

  getTeamList() {
    this.service
      .getTeamList()
      .subscribe(students => (this.teamMembers = students));
  }
}
