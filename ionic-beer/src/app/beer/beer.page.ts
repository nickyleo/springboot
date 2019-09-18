import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../providers/beer-service';
import { GiphyService } from '../../providers/giphy-service';
import {  NavController} from '@ionic/angular';
interface Todo{
  id:number;
  name:string;
  giphyUrl: string;
}

@Component({
  selector: 'app-beer',
  templateUrl: './beer.page.html',
  styleUrls: ['./beer.page.scss'],
})
export class BeerPage implements OnInit {
 beers: Todo[];
 
  constructor(public navCtrl: NavController,public beerService: BeerService,public giphyService: GiphyService)
   { }



  

  ngOnInit() {
    this.beerService.getGoodBeers().subscribe((response)=>{this.beers=response;
      for (const beer of this.beers) {
        console.log('5555');
        this.giphyService.get(beer.name).subscribe(url => {
          beer.giphyUrl = url;
          
          });
        }
      })   
    
  }

}
