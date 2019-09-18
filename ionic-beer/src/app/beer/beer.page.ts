import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../providers/beer-service';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.page.html',
  styleUrls: ['./beer.page.scss'],
})
export class BeerPage implements OnInit {
private beers: Array<any>;
  constructor(public beerService: BeerService) { }

  ngOnInit() {
  }

}
