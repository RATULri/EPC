import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  carouselInterval = 2000;
  activeSlideIndex = 0;
  slides: { image: string }[] = [
    { image: "assets/images/carousel/1.jpg" },
    { image: "assets/images/carousel/2.jpg" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
