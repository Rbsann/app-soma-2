import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VideoPlayer,VideoOptions} from '@ionic-native/video-player';


import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  item: any;
  teacher:any;
  videoOptions: VideoOptions;
  videoUrl: string;

  constructor(private videoPlayer:VideoPlayer,public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') ;
    console.log(this.item);


  }
  async playVideo(){
    try{
      this.videoOptions ={
        volume:0.5
      }
      this.videoUrl = "http://techslides.com/demos/sample-videos/small.mp4";
      this.videoPlayer.play(this.videoUrl,this.videoOptions);

    }
    catch(e){
      console.error(e);
    }
  }
  marcarAula(){
    this.navCtrl.push('ListMasterPage');
  }


  }
