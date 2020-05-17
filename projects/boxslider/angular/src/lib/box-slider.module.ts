import { NgModule } from '@angular/core';
import { CubeSliderDirective } from './cube-slider.directive';
import { FadeSliderDirective } from './fade-slider.directive';
import { TileSliderDirective } from './tile-slider.directive';
import { CarouselSliderDirective } from './carousel-slider.directive';

@NgModule({
  declarations: [FadeSliderDirective, CubeSliderDirective, TileSliderDirective, CarouselSliderDirective],
  exports: [FadeSliderDirective, CubeSliderDirective]
})
export class BoxSliderModule {}
