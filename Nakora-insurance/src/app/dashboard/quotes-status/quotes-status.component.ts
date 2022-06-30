import { Component, OnInit } from "@angular/core";
import { IStatus } from "src/app/shared/interfaces/dashboard.interface";

@Component({
    selector: "nk-quotes-status",
    templateUrl: "./quotes-status.component.html",
    styleUrls: ["./quotes-status.component.scss"]
})

export class QuotesStatusComponent implements OnInit{
    "isExpired": boolean = true;
    "isTitle" :  string = "Expiring Soon"
    
    constructor(){}

    ngOnInit(): void {        
    }

    "quotesCard":IStatus[]=[
        {
            "isCardId": 1,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Issued",
            "isStatusClass":"badge bg-primary rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 2,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Booked",
            "isStatusClass":"badge bg-success rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 3,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "In Progress",
            "isStatusClass":"badge bg-secondary rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 2,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Issued",
            "isStatusClass":"badge bg-primary rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 5,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Issued",
            "isStatusClass":"badge bg-primary rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 5,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Declined",
            "isStatusClass":"badge bg-warning rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        },
        {
            "isCardId": 5,
            "isHeading": "All",
            "isIcon": "plane",
            "isIconLabel": "Icon Flight",
            "isIconSrc":"assets/icons/icon-plane.png",
            "isDate": "26 Feb", 
            "isInfoLabel": "YUL-LHR",
            "isHeadingsLabel":"Expiring Soon",
            "isName": "John Mills",
            "isAccount":"255638942",
            "isStatus": "Expired",
            "isStatusClass":"badge bg-danger rounded-0 float-end",
            "isCurrency":123,          
            "isCardLabel": "Expiring Soon",            
            "isCrdLink":[
                {
                    "isCardLink":"Book Quotes",
                },
                {
                    "isCardLink":"Copy",
                }
            ],
            "isExpirationStatus": "Expiring in 7 Days"                        
        }
    ]
}