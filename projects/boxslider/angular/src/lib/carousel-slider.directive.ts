import { Directive } from '@angular/core';
import { TileSlider, TileSliderOptions } from '@boxslider/slider';

import { BoxSliderDirective } from './box-slider.directive';

@Directive({
  selector: '[bxlCarouselSlider]'
})
export class CarouselSliderDirective extends BoxSliderDirective {

  initializeEffect(options: TileSliderOptions): TileSlider {
    return new TileSlider(options);
  }
}
