import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  photoList: Array<any>;
  constructor(private httpService: HttpService) { 
    this.photoList = [];
  }

  ngOnInit(): void {
    this.httpService.getUsersApi().then((response: any) => {
      console.log(response);
      this.photoList = response;
    });
  }
  
}
