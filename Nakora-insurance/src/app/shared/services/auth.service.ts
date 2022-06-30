import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NetWorkManager } from "../util/networkManager";


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(private http: HttpClient){}

    proceedLogin(userLogin: any){
        // return this.http.post('')
    }
}