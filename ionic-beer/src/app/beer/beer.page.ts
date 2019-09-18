import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../providers/beer-service';

interface Todo{
  id:number;
  name:string;
}

@Component({
  selector: 'app-beer',
  templateUrl: './beer.page.html',
  styleUrls: ['./beer.page.scss'],
})
export class BeerPage implements OnInit {
 beer: Todo[];
  constructor(public beerService: BeerService) { }

  ngOnInit() {

    this.beerService.getGoodBeers().subscribe((response)=>{this.beer=response;})

  }

}
