import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalSubscribers: number;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.overview().subscribe(res => {
      this.totalSubscribers = res.subscribers;
    });
  }

}
