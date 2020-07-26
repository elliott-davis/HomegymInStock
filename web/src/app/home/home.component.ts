import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {AuthService} from "../auth/auth.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'watchers', 'link'];
  dataSource = new MatTableDataSource([]);

  constructor(private auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(auth => {
      if ( auth ) {
        this.displayedColumns.push('subscribe')
      }
    })

    this.api.listItems().subscribe(res => this.dataSource = new MatTableDataSource(res));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  unsubscribe(element: any) {
    this.auth.getUser$().subscribe(user => {
      this.api.Unsubscribe(element.id, user.email, user.name).subscribe(res => {
        let newElement = element;
        newElement.isSubscribed = null;
        newElement.watchers = parseInt(element.watchers) - 1;
        this.dataSource.data[element] = newElement;
      })
    })
  }

  newSubscription(element: any) {
    this.auth.getUser$().subscribe(user => {
      this.api.newSubscribe(element.id, user.email, user.name).subscribe(res => {
        let newElement = element;
        newElement.isSubscribed = 't';
        newElement.watchers = parseInt(element.watchers) + 1;
        this.dataSource.data[element] = newElement;
      })
    })
  }
}
