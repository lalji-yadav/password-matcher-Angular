import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
export interface Food {
  value: string;
  viewValue: string;
}

export interface City {
   value: string;
   viewValue: string;
}

export interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // aaaaaaaaaaaaaaaaaaaaaaa

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  // constructor() { }

  foods: Food[] = [
    {value: 'India-0', viewValue: 'India'},
    {value: 'China-1', viewValue: 'China'},
    {value: 'Pakistan-2', viewValue: 'Pakistan'}
  ];

  citys: City[] = [
    {value: 'Mumbai-0', viewValue: 'Mumbai'},
    {value: 'Goregaon-1', viewValue: 'Goregaon'},
    {value: 'Jogeshwari-2', viewValue: 'Jogeshwari'},
  ];

  states: State[] = [
    {value: 'Mumbai-0', viewValue: 'Mumbai'},
    {value: 'Delhi-1', viewValue: 'Delhi'},
    {value: 'Punjab-2', viewValue: 'Punjab'},
  ];

 // Form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  email1 = new FormControl('', [Validators.required, Validators.email]);
  mobile = new FormControl('', [Validators.required, Validators.minLength(10)]);
  mobile1 = new FormControl('', [Validators.required, Validators.minLength(10)]);
  name = new FormControl('', [Validators.required]);
  name1 = new FormControl('', [Validators.required]);
  name2 = new FormControl('', [Validators.required]);
// Password Matcher
  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

// aaaaaaaaaaaaaaaaa


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a Valid Email Id' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage1() {
    return this.email1.hasError('required') ? 'You must enter a Valid Email Id' :
        this.email1.hasError('email') ? 'Not a valid email' :
            '';
  }

  getMsgmobile() {
    return this.mobile.hasError('required') ? 'You must enter a ten Digit mobile Number' :
        this.mobile.hasError('mobile') ? 'Not a valid Mobile Number' :
            '';
  }
  getMsgmobile1() {
    return this.mobile1.hasError('required') ? 'You must enter a ten Digit mobile Number' :
        this.mobile1.hasError('mobile1') ? 'Not a valid Mobile Number' :
            '';
  }
  getMsgname() {
    return this.name.hasError('required') ? 'You must enter Name' :
        this.name.hasError('name') ? 'Not a valid Name' :
            '';
  }
  getMsgname1() {
    return this.name1.hasError('required') ? 'You must enter Name' :
        this.name1.hasError('name1') ? 'Not a valid Name' :
            '';
  }
  getMsgname2() {
    return this.name2.hasError('required') ? 'You must enter Name' :
        this.name2.hasError('name2') ? 'Not a valid Name' :
            '';
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

   ngOnInit() { }

}
