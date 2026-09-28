import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.html',
})
export class OverviewComponent {
  partners = [
    { name: 'Anantara Resorts', logo: 'anantara.png' },
    { name: 'Water in Motion', logo: 'waterinmotion.png' },
    { name: 'Stone & Slates', logo: 'stones-and-slates.png' },
    { name: 'Marble Life', logo: 'marblelife.png' },
    { name: 'GCL', logo: 'gcl.png' },
    { name: 'Yas Mall', logo: 'yasmall.png' },
    { name: 'Crown plaza Hotel', logo: 'crownplaza.png' },
    { name: 'Jumeirah Ball-Room', logo: '' },
    { name: 'Extra Stone', logo: '' },
  ];

  locations = [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ras Al-Khaimah',
    'Ajman',
    'Umm Al-Quwain',
    'Fujairah',
  ];
}
