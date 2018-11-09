import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';
import { ItemDetailPage } from './item-detail';

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    TranslateModule.forChild(),
    StarRatingModule
  ],
  exports: [
    ItemDetailPage
  ]
})
export class ItemDetailPageModule { }
