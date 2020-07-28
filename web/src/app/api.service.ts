import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// interface Item {
//   name: string;
//   type: string;
//   link: string;
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    return this.http.get('/api/external');
  }

  listItems(): Observable<any> {
    return this.http.get('/api/items');
  }

  newSubscribe(id: number, email: string, name: string): Observable<any> {
    return this.http.post('/api/subscription', {id, email, name});
  }

  Unsubscribe(id: number, email: string, name: string): Observable<any> {
    return this.http.request('delete', '/api/subscription', {body: {id, email, name}} );
  }

  overview(): Observable<any> {
    return this.http.get('api/overview');
  }
}
