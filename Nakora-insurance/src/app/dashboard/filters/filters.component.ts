import { Component, OnInit } from "@angular/core";
import { INavPills } from "src/app/shared/interfaces/dashboard.interface";

@Component({
    selector: "nk-filters",
    templateUrl: "./filters.component.html",
    styleUrls: ["./filters.component.scss"]

})

export class FiltersComponent implements OnInit{
    public isActive:boolean = false;
    pills: any;

    ngOnInit(): void {        
    }

    constructor(){
    }

    "navPills":INavPills[]=[
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "All",
            "isId": "pills-all",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold active",
            "isActive": true,
            "isIconClass": "",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "openIt()"
        },
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "In Progress",
            "isId": "pills-in-progress",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold",
            "isActive": true,
            "isIconClass":"",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "Declined",
            "isId": "pills-declined",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold",
            "isActive": false,
            "isIconClass": "",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "Issued",
            "isId": "pills-issued",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold",
            "isActive": false,
            "isIconClass":"",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "Booked",
            "isId": "pills-booked",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold",
            "isActive": false,
            "isIconClass":"",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "defaultPills",
            "isDefaultPills": true,
            "isListClass":"nav-item",
            "isLabel": "Expired",
            "isId": "pills-expired",
            "isClass": "nav-link border shadow-sm py-2 px-4 mx-1 text-black fw-bold",
            "isActive": false,
            "isIconClass":"",
            "isUlClass": "",
            "isRole": "button",
            "dropDownNav":false,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "dropDownPills",
            "isDefaultPills": false,
            "isListClass":"nav-item dropdown",
            "isLabel": "",
            "isId": "subNavGrid",
            "isClass": "nav-link dropdown-toggle",
            "isActive": false,
            "isIconClass":"fa fa-bars",
            "isUlClass": "dropdown-menu",
            "isRole": "button",
            "dropDownNav":true,
            "isClicked": "getStatusIssues()"
        },
        {
            "isPills": "dropDownPills",
            "isDefaultPills": false,
            "isListClass":"nav-item dropdown",
            "isLabel": "",
            "isId": "subNavGrid",
            "isClass": "nav-link dropdown-toggle",
            "isActive": false,
            "isIconClass":"fa fa-th",
            "isUlClass": "dropdown-menu",
            "isRole": "button",
            "dropDownNav":true,
            "isClicked": "getStatusIssues()"
        }
    ]
    getStatusIssues(data:any){
        // this.pills.isDefaultPills == true;
        alert(data);
    }
}