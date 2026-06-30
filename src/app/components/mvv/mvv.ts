import { Component } from '@angular/core';

@Component({
  selector: 'app-mvv',
  templateUrl: './mvv.html',
})
export class MvvComponent {
  values = ['Integrity', 'Quality', 'Innovation', 'Sustainability', 'Safety', 'Customer Excellence'];

  cards = [
    {
      icon: 'compass',
      title: 'Our Mission',
      desc: 'Deliver innovative, sustainable and luxury landscaping solutions that transform outdoor spaces across the UAE.'
    },
    {
      icon: 'sparkles',
      title: 'Our Vision',
      desc: "To become one of the UAE's most trusted landscaping companies for premium outdoor living environments."
    },
    {
      icon: 'shield',
      title: 'Our Values',
      desc: ''
    },
  ];
}
