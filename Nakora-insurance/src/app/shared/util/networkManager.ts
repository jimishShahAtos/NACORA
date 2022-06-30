import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class NetWorkManager{
    public static successApiCallMessage: string = "API Calls works successfully";

    constructor(public http:HttpClient){}

    public getAPI(url:string, options?:any){
        return this.http.get(url, options)
    }
}