import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import Typed from 'typed.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  carouselInterval = 20000;
  activeSlideIndex = 0;
  slides: { image: string }[] = [
    { image: "assets/images/carousel/1.jpg" },
    { image: "assets/images/carousel/2.jpg" },
  ]

  constructor() { }

  ngOnInit(): void {
    const canvas = document.getElementById('canvas');

    var options = {
      strings: ['EPC.', 'Engineering, Procurement and Construction'],
      typeSpeed: 45,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    };

    var typed = new Typed('.typed', options);
  }
}
