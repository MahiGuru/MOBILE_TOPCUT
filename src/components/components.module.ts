import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel';
@NgModule({
	declarations: [CarouselComponent],
	imports: [
    IonicModule
  ],
	exports: [CarouselComponent]
})
export class ComponentsModule {}
