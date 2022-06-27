import { Component, OnInit } from "@angular/core";
import { IActions } from "src/app/shared/interfaces/credentials.interface";

@Component({
    selector: 'nk-header-login',
    templateUrl: './header-login.component.html',
    styleUrls: ['./header-login.component.scss']
})

export class HeaderLoginComponent implements OnInit{
    loginHeader:boolean=true
    isModal = false;
    isFade = false;  

    ngOnInit(): void {        
    }
    constructor(){

    }

    "isActions": IActions[]=[
        {
          "isLabel": "Login",
          "isId": "login",
          "isType": "button",
          "isClass": "btn btn-sm btn-primary w-100 shadow btn-login",
          "isAction": "this.router.navigateByUrl('dashboard');"
        },
        {
          "isLabel": "Forgot Password?",
          "isId": "forgotPw",
          "isType": "button",
          "isClass": "btn btn-sm btn-link w-100 text-decoration-none text-reset btn-fogotPw",
          "isAction": ""
        }
      ]

      "bannerInfo": any[] = [
        {
          "isLogo":"Nacora",
          "isClass":"navbar-brand logo text-white fw-bold col-2"
        },
        {
          "isNavClass":"nav-item",
          "isClass":"nav-link opacity-75 fw-bold text-white active",
          "isLabel":"Verify A Certificate"
        },
        {
          "isNavClass":"nav-item",
          "isClass":"nav-link opacity-75 fw-bold text-white",
          "isLabel":"Report a Loss"
        },
        {
          "isLanguageClass":"opacity-75 fw-bold text-white bg-transparent"
        }
    ]

    "languages":any=[
        {
          "isOptionLabel":"English"
        },
        {
          "isOptionLabel":"English (UK)"
        },
        {
          "isOptionLabel":"English (IN)"
        },
        {
          "isOptionLabel":"French"
        },
        {
          "isOptionLabel":"Italian"
        }
      ]

      getModal(){
        this.isModal = true;
        this.isFade = true;
        
      }
  
      onClose(){
        this.isModal = false; 
        this.isFade = false;
      }
}