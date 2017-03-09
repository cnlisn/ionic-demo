import { Component } from '@angular/core';
import { FabContainer } from 'ionic-angular';


@Component({
  templateUrl: 'fab_page.html'
})
export class fab_page {
  array: number[] = [];

  add() {
    this.array.push(1);
  }

  clickMainFAB() {
    console.log('Clicked open social menu');
  }

  openSocial(network: string, fab: FabContainer) {
    console.log('Share in ' + network);
    fab.close();
  }
}




