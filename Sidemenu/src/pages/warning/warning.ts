import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertDemoPage}from '../demo/AlertDemoPage/AlertDemoPage';
import {ButtonDemoPage}from '../demo/button/buttonDemo';
import {checkboxDemo}from '../demo/checkbox/checkboxDemo';
import {actionsheet}from '../demo/action-sheet/actionsheet';
import {chip_page}from '../demo/chip/chip_page';
import {datetime_page}from '../demo/datetime/datetime_page';
import {fab_page}from '../demo/fab/fab_page';
import {hide_when_page}from '../demo/hide-when/hide_when_page';


@Component({
    templateUrl: 'warning.html'
})
export class Page_warning{
    constructor(public nav :NavController){
        
    }

    openAlert(){
        this.nav.push(AlertDemoPage);
    }

    openButton(){
        this.nav.push(ButtonDemoPage);
    }

    openCheckbox(){
         this.nav.push(checkboxDemo);
    }
    
    actionsheet(){
        this.nav.push(actionsheet);
    }

    chip_page(){
        this.nav.push(chip_page);
    }

    datetime_page(){
        this.nav.push(datetime_page);
    }

    fab_page(){
        this.nav.push(fab_page);
    }

    hide_when_page(){
        this.nav.push(hide_when_page);
    }
}