import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.html',
})
export class WhyUsComponent {
  reasons = [
    { title: 'Expert Landscaping Team', desc: 'Designers, horticulturists and engineers.', icon: 'award' },
    { title: 'Luxury Finishing Quality', desc: 'Material selection and detailing.', icon: 'sparkles' },
    { title: 'On-Time Delivery', desc: 'Schedule discipline on every project.', icon: 'clock' },
    { title: 'Custom Design Solutions', desc: 'Tailored to your site and lifestyle.', icon: 'pen' },
    { title: 'Full Project Execution', desc: 'Design, build and aftercare in-house.', icon: 'wrench' },
    { title: 'UAE Experience', desc: 'Built for the climate of the Emirates.', icon: 'globe' },
  ];
}
