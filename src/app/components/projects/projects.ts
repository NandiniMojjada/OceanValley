import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FilterType = 'All' | 'Residential' | 'Commercial' | 'Hospitality' | 'Government';

export interface Project {
  img: string;
  title: string;
  cat: FilterType;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  filters: FilterType[] = ['All', 'Residential', 'Commercial', 'Hospitality', 'Government'];
  activeFilter = signal<FilterType>('All');

  allProjects: Project[] = [
    { img: 'project-villa.jpg', title: 'Ras Al Khaimah', cat: 'Residential' },
    { img: 'project-pool.jpg', title: 'Palm Jumeirah Pool & Garden', cat: 'Residential' },
    { img: 'project-commercial.jpg', title: 'Downtown Corporate Plaza', cat: 'Commercial' },
    // { img: 'project-pergola.jpg', title: 'Al Barari Pergola Retreat', cat: 'Hospitality' },
    // { img: 'project-villa.jpg', title: 'Jumeirah Bay Estate', cat: 'Residential' },
    // { img: 'project-commercial.jpg', title: 'DIFC Civic Garden', cat: 'Government' },
  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.allProjects : this.allProjects.filter(p => p.cat === f);
  }

  setFilter(f: FilterType) {
    this.activeFilter.set(f);
  }

  trackByTitle(index: number, project: Project): string {
    return project.title + index;
  }
}
