import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService{
    public url: string;

    constructor(private _http:Http){
        this.url = "http://sharesmarttv.com/angulardemo/api/v1/";
    }

    userLogin(user_email,user_password){
        let data = {
            'user_email': user_email,
            'user_password': user_password
        }
        
        let json = JSON.stringify(data);
        let params = 'json='+json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        return this._http.post(this.url+'login', params, {headers: headers}).map(res => res.json());
    }

}