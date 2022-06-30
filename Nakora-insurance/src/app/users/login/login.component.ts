import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICredentialsInterface } from 'src/app/shared/interfaces/credentials.interface';

@Component({
  selector: 'nk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isModal = true;
  // isFade = false;  

  constructor() {
    localStorage.clear();
  }

  ngOnInit(): void {  }

  Login= new FormGroup({
    username : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  })

  "loginInfo":ICredentialsInterface[]=[
    {
      "isType":"text",
      "isLabel": "User ID",      
      "isId":"userNameInput",
      "isAutocomplete":"off"
    },
    {
      "isType":"password",
      "isLabel": "Password",      
      "isId":"passwordInput",
      "isAutocomplete":"off"
    }
  ]

  getUserLogin(){
    if(this.Login.valid){
      
    }
  }

  // getModal(){
  //   this.isModal = true;
  //   this.isFade = true;    
  // }

  // onClose(){
  //   this.isModal = false; 
  //   this.isFade = false;
  // }

}
