import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { OverviewComponent } from './components/overview/overview';
import { AboutComponent } from './components/about/about';
import { MvvComponent } from './components/mvv/mvv';
import { ServicesComponent } from './components/services/services';
import { ProjectsComponent } from './components/projects/projects';
import { WhyUsComponent } from './components/why-us/why-us';
import { ProcessComponent } from './components/process/process';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { WhatsAppFloatComponent } from './components/whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    OverviewComponent,
    AboutComponent,
    MvvComponent,
    ServicesComponent,
    ProjectsComponent,
    WhyUsComponent,
    ProcessComponent,
    ContactComponent,
    FooterComponent,
    WhatsAppFloatComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ocean-valley-angular');
}
