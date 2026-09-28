import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  phone1 = '+971527072346'
  phone2 = '+971524707548'
  whatsapp = '+971527072346'

  cards = [
    {
      icon: 'phone',
      title: 'Call Us',
      lines: [this.phone1, this.phone2],
      href: `tel:${this.phone1}`,
    },
    {
      icon: 'mail',
      title: 'Email Us',
      lines: ['oceanvalleyls@gmail.com'],
      href: 'mailto:oceanvalleyls@gmail.com',
    },
    {
      icon: 'map-pin',
      title: 'Visit Us',
      lines: ['Dubai, United Arab Emirates'],
      href: 'https://maps.google.com/?q=Dubai+UAE',
    },
    {
      icon: 'linkedin',
      title: 'Follow Us',
      lines: ['LinkedIn'],
      href: 'https://www.linkedin.com/company/ocean-valley-landscaping-llc',
    },
  ];

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

  sent = signal(false);

  onSubmit(form: any) {
    if (form.valid) {
      fetch("https://formsubmit.co/ajax/oceanvalleyls@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: form.value.name,
          Email: form.value.email,
          Phone: form.value.phone,
          Service: form.value.service,
          Message: form.value.message
        })
      })
      .then(response => response.json())
      .then(data => {
        this.sent.set(true);
        form.reset();
        setTimeout(() => this.sent.set(false), 5000);
      })
      .catch(error => {
        console.error("Error sending enquiry:", error);
        // Fallback to local success feedback
        this.sent.set(true);
        form.reset();
        setTimeout(() => this.sent.set(false), 5000);
      });
    }
  }
}
