import { Component } from '@angular/core';



@Component({
  templateUrl: 'chip_page.html'
})
export class chip_page {
  delete(chip: Element) {
    chip.remove();
  }
}


