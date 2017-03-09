import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page3 } from '../page3/page3';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  jmp(){
    this.navCtrl.push(Page3);
    // console.log("fffffffffffffff");
  }
}
