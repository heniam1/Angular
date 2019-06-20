import { Component, OnInit } from '@angular/core';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  leader: Leader;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leader = this.leaderservice.getFeaturedLeader();
  }

}
