import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  template: `
    <div [formGroup]="loginForm" class="col-md-4 form-inline"> 
      Username: <input type="text" class="form-control" formControlName="username">
      Password: <input type="password" class="form-control" formControlName="password">
      <br>
      <button type="submit" mat-raised-button class="form-control" (click)="formSubmit()" [disabled]="!loginForm.valid"> Submit</button>
    </div>
  `,
  // templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
  // styleUrls: []
})
export class UserProfileComponent implements OnInit{

  loginForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  
  getName(){
    return this.loginForm.value
  }
  
  // loginForm = new FormGroup({ 
  //     username: new FormControl('',[Validators.required, Validators.minLength(6)]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(8)])
  // })
  
  formSubmit(){
    
  }

  ngOnInit(): void {
    
  }

}
