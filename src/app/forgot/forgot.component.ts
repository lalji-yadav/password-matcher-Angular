import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a Valid Email Id' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor() { }

  ngOnInit() { }

}
