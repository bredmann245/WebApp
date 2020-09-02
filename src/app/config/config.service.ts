import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  url = 'http://192.168.99.100/';

  getBlog(): Observable<any> {
    // return new Observable((observer) => {
    //   observer.next({
    //     title: 'hello',
    //     blog: 'Hi how are you',
    //   });
    //   observer.next({
    //     title: 'hello',
    //     blog: 'Hi how are you',
    //   });
    //   observer.next({
    //     title: 'hello',
    //     blog: 'Hi how are you',
    //   });
    //   observer.complete();
    // });
    return this.http.get(this.url);
  }
}
