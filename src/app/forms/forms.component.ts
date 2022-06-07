import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  staffList: Array<any>;
  staff = {
    first_name: null, 
    last_name: null,
    department: null
  };

  constructor(private fb: FormBuilder) {
    this.staffList = [];
  }

  onSubmit(): void {
    // alert('Full Name: ' + this.staff.first_name + ' ' + this.staff.last_name + ' Department: ' + this.staff.department);
    this.staffList.push(this.staff);
    this.staff = {
      first_name: null, 
      last_name: null,
      department: null
    };
    console.log(this.staffList);
  }
}
