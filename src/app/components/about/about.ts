import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
})
export class AboutComponent {
  blocks = [
    {
      title: 'Who We Are',
      desc: 'Ocean Valley Landscaping L.L.C. provides complete garden and landscaping services for Complexes, Estates, Corporate Business Parks, and Residential Homes across the UAE.'
    },
    {
      title: 'What We Do',
      desc: 'We design gardens that inspire imagination, relaxation, and creativity, delivering end-to-end services including garden design, installation, and expert maintenance for properties of any size.'
    },
    {
      title: 'Our Collaborative Approach',
      desc: 'We work closely with clients, architects, and interior designers to ensure every brief is perfectly executed, reflecting the client’s personal style to create a seamless visual connection between indoor and outdoor spaces.'
    },
  ];
}
