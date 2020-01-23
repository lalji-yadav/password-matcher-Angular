import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor() { }

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a Name' :
        this.name.hasError('name') ? 'Not a valid Name' :
            '';
  }

  getErrorMessagee() {
    return this.password.hasError('required') ? 'You must enter six digit password' :
       this.password.hasError('password') ? 'Not a valid Password' :
     '';
  }

  ngOnInit() {
  }

}
