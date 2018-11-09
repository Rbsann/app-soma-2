import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  teacher:any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') ;
    this.teacher = this.item.teachers;

  }
  openItem(item){
    console.log(item);
    this.navCtrl.push('ItemCreatePage', {
      item: item

    });
  }

  }
