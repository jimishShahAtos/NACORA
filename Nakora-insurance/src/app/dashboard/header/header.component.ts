import { Component, OnInit } from "@angular/core";
import { ILanguages } from "src/app/shared/interfaces/credentials.interface";

@Component({
    selector: 'nk-dashboard-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']

})

export class HeaderComponent implements OnInit{   
    ngOnInit(): void {
        
    }

    constructor(){        
    }

    "languages":ILanguages[]=[
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
}