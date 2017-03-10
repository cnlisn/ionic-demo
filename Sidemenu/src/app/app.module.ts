import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';


import { Page_home } from '../pages/home/home';
import { Page_todo } from '../pages/todo/todo';
import { Page_user } from '../pages/user/user';
import { Page_warning } from '../pages/warning/warning';
import { Page_Map } from '../pages/map/map';
import {Page_BaiDu_Map} from '../pages/baiduMap/baiduMap';

import {Page_home_myalert} from '../pages/home/Alert/myalert';
import {AlertDemoPage} from '../pages/demo/AlertDemoPage/AlertDemoPage';
import {ButtonDemoPage} from '../pages/demo/button/buttonDemo';
import {checkboxDemo} from '../pages/demo/checkbox/checkboxDemo';
import {actionsheet}from '../pages/demo/action-sheet/actionsheet';
import {chip_page}from '../pages/demo/chip/chip_page';
import {datetime_page}from '../pages/demo/datetime/datetime_page';
import {fab_page}from '../pages/demo/fab/fab_page';
import {hide_when_page}from '../pages/demo/hide-when/hide_when_page';
import {icon_page}from '../pages/demo/icon/icon_page';
import {infinite_scroll}from '../pages/demo/infinite-scroll/infinite_scroll';
import {MockProvider}from '../pages/demo/infinite-scroll/infinite_scroll';
import {input_page}from '../pages/demo/input/input_page';




import { Storage } from '@ionic/storage';
import {StorageHelper} from '../providers/db/StorageHelper';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page3,
    Page2,
    Page_home,
    Page_todo,
    Page_user,
    Page_warning,
    Page_Map,
    Page_BaiDu_Map,
    Page_home_myalert,
    AlertDemoPage,
    ButtonDemoPage,
    checkboxDemo,
    actionsheet,
    chip_page,
    datetime_page,
    fab_page,
    hide_when_page,
    icon_page,
    infinite_scroll,
    input_page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page3,
    Page2,
    Page_home,
    Page_todo,
    Page_user,
    Page_warning,
    Page_Map,
    Page_BaiDu_Map,
    Page_home_myalert,
    AlertDemoPage,
    ButtonDemoPage,
    checkboxDemo,
    actionsheet,
    chip_page,
    datetime_page,
    fab_page,
    hide_when_page,
    icon_page,
    infinite_scroll,
    input_page
  ],
  providers: [
      {
        provide: [
          ErrorHandler
        ], useClass: IonicErrorHandler
      },Storage,StorageHelper,MockProvider
    ]
})
export class AppModule {}
