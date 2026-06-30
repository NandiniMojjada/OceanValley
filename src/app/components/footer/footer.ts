import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  phone1 = '+971524707548';
  phone2 = '+971527072346';
  whatsapp = '971524707548';

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
