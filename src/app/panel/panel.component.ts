import { Component } from '@angular/core';

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html'
})

export class PanelComponent{
    public employes;
    public user_name: string;

    constructor(){}

    ngOnInit(){
        this.user_name = sessionStorage.getItem('user_name');
    }

}