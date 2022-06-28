export class INavPills{
    'isPills': string;
    'isDefaultPills': boolean;
    'isListClass': string;
    'isLabel':string;
    'isId': string;
    'isActive': boolean;
    'isClass': string;
    'isIconClass': string;
    'isUlClass':string;
    'isRole': string;
    'dropDownNav': boolean;
    'isClicked': string;
}

export class IStatus{
    'isCardId': number;
    'isName': string;
    'isIconLabel':string;
    'isIconSrc': string;
    'isHeadingsLabel':string;
    'isHeading': string;
    'isStatus': string;
    'isStatusClass':string;
    'isCardLabel': string;    
    'isDate': string;
    'isIcon': string;    
    'isInfoLabel': string;    
    'isCurrency':number;
    'isAccount': string;
    'isCrdLink':isLinks[];
    'isExpirationStatus': string;
}

export class isLinks{
    'isCardLink':string
}