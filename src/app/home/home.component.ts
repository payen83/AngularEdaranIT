import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Elyzian Interactive';
  sentence = '';
  click_counter = 0;

  constructor(){
    this.click_counter = 0;
  }

  ngOnInit(): void {
  }

  btnCounter(){
    this.click_counter += 1;
  }

  btnClick(){
    // alert('Welcome to ' + this.title);
    let a: any = 10;
    if(this.title){
      
    }
    a = "Ten";
    // let cars: Array<string> = ["Proton", "Perodua", "Ford"];
    // cars[2] = "Toyota";
    // console.log(cars);

    let car: any = { make: "Proton", color: "blue", model: "Persona" };
    car.model = "Iris";
    console.log(car.model);

    let cars: Array<any> = [
      { make: "Proton", color: "blue", model: "Persona" },
      { make: "Perodua", color: "black", model: "MyVi" },
      { make: "Toyota", color: "white", model: "Vios" }
    ];

    console.log('I have ' + cars[1].make + ' ' + cars[1].model + ' in ' + cars[1].color);
    this.sentence = 'I have ' + cars[1].make + ' ' + cars[1].model + ' in ' + cars[1].color;
  }

  submitData(){
    console.log(this.title);
    this.viewData();
  }

  viewData(){

  }

}
