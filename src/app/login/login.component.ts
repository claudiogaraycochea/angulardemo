import { Component } from '@angular/core';
import { LoginService } from '../shared/services/login.services';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [LoginService]
})

export class LoginComponent{
    public user_email: string;
    public user_password: string;

    constructor(
        private _loginService: LoginService,
        private router: Router
    ){}

    ngOnInit(){}

    onSubmit(){
        this._loginService.userLogin(this.user_email,this.user_password).subscribe(
            result => {
                if(result !== null) {
                    sessionStorage.setItem('tk',result.user_token);
                    sessionStorage.setItem('user_name',result.user_first_name);
                    sessionStorage.setItem('user_id',result.user_id);
                    console.log('tk:'+sessionStorage.getItem('tk'));
                    console.log('user_name:'+sessionStorage.getItem('user_name'));
                    console.log('user_id:'+sessionStorage.getItem('user_id'));
                    this.router.navigate(['/panel']);
                }
                else{
                    console.log("The user name or password is incorrect.");
                }
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

}