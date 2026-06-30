import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.html',
})
export class OverviewComponent {
  partners = [
    { name: 'Dubai Municipality', logoType: 'dubai-municipality' },
    { name: 'Anantara Resorts', logoType: 'anantara' },
    { name: 'EMAAR', logoType: 'emaar' },
    { name: 'Nakheel', logoType: 'nakheel' },
    { name: 'DMCC', logoType: 'dmcc' },
    { name: 'Private Estates', logoType: 'private-estates' }
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
