import { Injectable } from "@angular/core";
import { FormsService } from "src/app/shared/services/forms.service";
import { NetWorkManager } from "src/app/shared/util/networkManager";

@Injectable({
   providedIn: "root" 
})

export class LoginServices extends FormsService{
    isLoginApi = this.isBaseUrl = "/loginSections"

    constructor(private networkManager:NetWorkManager){
        super();
    }
}