import { Injectable } from '@angular/core';
import { CarouselConfig } from '@coreui/angular';

@Injectable()
export class CarouselCustomConfig extends CarouselConfig {
  /* Animate transition of slides */
  override activeIndex = 0;
  /* Animate transition of slides */
  override animate = true;
  /* Default direction of auto changing of slides */
  override direction: 'next' | 'prev' = 'next';
  /* Default interval of auto changing of slides */
  override interval = 0;
}
