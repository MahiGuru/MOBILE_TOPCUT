import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.html'
})
export class CarouselComponent {
  text: string;
  @Input('images') productImages: Array<any>;
  constructor() {
    console.log('Hello CarouselComponent Component');
    this.text = 'Hello World';
  }

}
