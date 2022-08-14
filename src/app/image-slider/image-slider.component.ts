import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @ViewChild('nav', {static: false}) ds: NgImageSliderComponent;
  title = 'Ng Image Slider';
  showSlider = true;

  imageObject: Array<object> = [{
      image: 'assets/images/1.jpg',
      thumbImage: 'assets/images/1.jpg',
      alt: 'Image 1',
      title: 'ImageTitle 1',
      order: 1
    }, 
    {
      image: 'assets/images/2.jpg',
      thumbImage: 'assets/images/2.jpg',
      alt: 'Image 2',
      title: 'ImageTitle 2',
      order: 2
    }, 
    {
      image: 'assets/images/3.jpg',
      thumbImage: 'assets/images/3.jpg',
      alt: 'Image 3',
      title: 'ImageTitle 3',
      order: 2
    }, 
    {
      image: 'assets/images/4.jpg',
      thumbImage: 'assets/images/4.jpg',
      alt: 'Image 4',
      title: 'ImageTitle 4',
      order: 2
    }
  ];

  prevImageClick() {
      this.ds.prev();
  }

  nextImageClick() {
      this.ds.next();
  }

}
