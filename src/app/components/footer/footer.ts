import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  phone1 = '+971527072346'
  phone2 = '+971524707548'
  whatsapp = '+971527072346'

  services = [
    'Gardens & Landscape Design',
    'Pergolas & Gazebos',
    'Tiles & Interlock',
    'Irrigation Systems',
    'Palms, Trees & Flowers',
    'Swimming Pools',
    'Water Features',
    'Garden Maintenance',
  ];
}
