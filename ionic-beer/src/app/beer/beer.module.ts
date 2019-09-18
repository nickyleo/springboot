import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { BeerService } from '../../providers/beer-service';
import { BeerPage } from './beer.page';
import { GiphyService } from '../../providers/giphy-service';
const routes: Routes = [
  {
    path: '',
    component: BeerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BeerService,
    GiphyService
  ],
  declarations: [BeerPage]
})
export class BeerPageModule {}
