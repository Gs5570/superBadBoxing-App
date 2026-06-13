import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from '@coreui/angular';
import { CarouselCustomConfig } from './carousel.config';

import { Slide } from '../interfaces/slide';
import { carouselData } from './carousel-data';

@Component({
  selector: 'app-carousel',
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  providers: [{ provide: CarouselConfig, useClass: CarouselCustomConfig }],
})
export class Carousel {
  slides: Slide[] = carouselData;
}
