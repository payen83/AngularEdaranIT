import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsersApi(){
    return new Promise ((resolve) => {
      this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((response: any) => {
        resolve(response);
      })
    });
  }

}
