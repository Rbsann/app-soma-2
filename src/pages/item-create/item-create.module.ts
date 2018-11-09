import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { StarRatingModule } from 'ionic3-star-rating';
import { ItemCreatePage } from './item-create';

@NgModule({
  declarations: [
    ItemCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemCreatePage),
    TranslateModule.forChild(),
    StarRatingModule
  ],
  exports: [
    ItemCreatePage
  ]
})
export class ItemCreatePageModule { }
