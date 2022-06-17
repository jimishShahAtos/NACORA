import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isModal:boolean = false;
  isFade:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  getModal(){
    this.isModal = true;
    this.isFade = true; 
  }

}
