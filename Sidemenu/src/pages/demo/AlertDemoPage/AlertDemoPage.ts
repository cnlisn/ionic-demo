import { Component, NgModule } from '@angular/core';
import { AlertController, IonicApp, IonicModule } from 'ionic-angular';


@Component({
  templateUrl: 'AlertDemoPage.html'
})
export class AlertDemoPage {
  testRadioOpen = false;
  testRadioResult: any;
  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public alertCtrl: AlertController) {}

//Basic Alert
  doAlert() {
    let alert = this.alertCtrl.create({
      title: '主标题!',
      subTitle: '子标题，字体颜色为黑色，不带滚动条!',
      buttons: ['Ok']
    });

    alert.present();
  }

//确定Alert
  doConfirm() {
    let alert = this.alertCtrl.create({
      title: '标题',
      message: 'message消息内容，字体为灰色，右侧带有滚动条',
      buttons: [
        {
          text: '不同意',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '同意',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });

    alert.present();
  }

//提示Alert
  doPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: '请输入你的密码',
      inputs: [
        {
          name: 'title',
          placeholder: '密码'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data: any) => {
            console.log('Saved clicked name=='+data.title);
          }
        }
      ]
    });

    alert.present();
  }

//单选Alert
  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('单选 color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
  }

//多选Alert
  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
        type: 'checkbox',
        label: 'Alderaan',
        value: 'value1',
        checked: true
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Bespin',
        value: 'value2'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Coruscant',
        value: 'value3'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Endor',
        value: 'value4'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Hoth',
        value: 'value5'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Jakku',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Naboo',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Takodana',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Tatooine',
        value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: (data: any) => {
          console.log('Checkbox data:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
      }
    });

    alert.present();
  }

}


