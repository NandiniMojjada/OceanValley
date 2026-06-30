import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  title: string;
  desc: string;
  imagePath: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scroller') scroller!: ElementRef<HTMLDivElement>;

  services: Service[] = [
    { title: 'Gardens & Landscape Design', desc: 'We create gardens that inspire imagination and rejuvenation. From design to maintenance, Ocean Valley delivers exceptional landscaping solutions for homes and businesses across Dubai.', imagePath: 'project-villa.jpg' },
    { title: 'Pergolas & Gazebos', desc: 'Enhance your outdoor space with beautifully crafted pergolas designed for comfort and style. Our bespoke designs provide shade, elegance, and a perfect place to unwind.', imagePath: 'project-pergola.jpg' },
    { title: 'Tiles & Interlock', desc: 'From classic patterns to modern finishes, our tiles and interlocks redefine outdoor design. Strong, stylish, and seamlessly integrated into your landscape vision.', imagePath: 'service-tiles.png' },
    { title: 'Irrigation Systems', desc: 'From drip systems to automated sprinklers, we bring precision irrigation to your landscape. Engineered for efficiency and built to support long-lasting greenery.', imagePath: 'service-irrigation.png' },
    { title: 'Palms, Trees & Flowers', desc: 'We offer a vibrant selection of palms, trees, plants, and flowers to bring life and color to your landscape. Each element is carefully chosen to create harmony, beauty, and lasting appeal.', imagePath: 'service-plants.png' },
    { title: 'Swimming Pools', desc: 'Infinity, lap and resort-style pools built to the highest specifications for villa and commercial layouts.', imagePath: 'project-pool.jpg' },
    { title: 'Water Features', desc: 'Custom fountains, cascades and reflective ponds that bring movement, reflection, and peaceful ambient sound to your garden.', imagePath: 'service-water.png' },
    { title: 'Garden Maintenance', desc: 'Specialist year-round care and scheduled horticultural maintenance programs to keep your landscape lush and healthy.', imagePath: 'service-maintenance.png' },
  ];

  private animationId: any;
  private isUserInteracting = false;
  private isDragging = false;
  private startX = 0;
  private scrollLeftStart = 0;
  private interactionTimeout: any;

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.interactionTimeout) {
      clearTimeout(this.interactionTimeout);
    }
  }

  private getLoopWidth(): number {
    const el = this.scroller.nativeElement;
    const wrapper = el.firstElementChild as HTMLElement;
    if (!wrapper) return el.scrollWidth / 2;
    const firstTrack = wrapper.firstElementChild as HTMLElement;
    if (!firstTrack) return el.scrollWidth / 2;

    const trackWidth = firstTrack.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(wrapper).columnGap) || 24;
    return trackWidth + gap;
  }

  private startAutoScroll() {
    const el = this.scroller.nativeElement;
    const step = () => {
      if (!this.isUserInteracting && !this.isDragging) {
        el.scrollLeft += 0.8; // Scroll from right to left (positive scrollLeft moves viewport right)
        const loopWidth = this.getLoopWidth();
        if (el.scrollLeft >= loopWidth) {
          el.scrollLeft -= loopWidth;
        }
      }
      this.animationId = requestAnimationFrame(step);
    };
    this.animationId = requestAnimationFrame(step);
  }

  onScroll() {
    const el = this.scroller.nativeElement;
    const loopWidth = this.getLoopWidth();
    if (el.scrollLeft >= loopWidth) {
      el.scrollLeft -= loopWidth;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += loopWidth;
    }
  }

  onPointerDown(event: PointerEvent) {
    // Only handle primary button (left click) or touch
    if (event.button !== 0 && event.pointerType === 'mouse') return;

    const el = this.scroller.nativeElement;
    this.isUserInteracting = true;
    this.isDragging = true;
    this.startX = event.pageX - el.offsetLeft;
    this.scrollLeftStart = el.scrollLeft;

    // Set pointer capture to track pointer movement even outside the element boundaries
    el.setPointerCapture(event.pointerId);

    if (this.interactionTimeout) {
      clearTimeout(this.interactionTimeout);
    }
  }

  onPointerMove(event: PointerEvent) {
    if (!this.isDragging) return;

    const el = this.scroller.nativeElement;
    const x = event.pageX - el.offsetLeft;
    const walk = (x - this.startX) * 1.5; // Scroll speed multiplier
    el.scrollLeft = this.scrollLeftStart - walk;
  }

  onPointerUp(event: PointerEvent) {
    if (!this.isDragging) return;
    this.isDragging = false;

    const el = this.scroller.nativeElement;
    try {
      el.releasePointerCapture(event.pointerId);
    } catch (e) {
      // Ignored if capture already released or invalid
    }

    // Resume auto-scroll after a short delay (e.g. 1.5s) to allow viewing
    this.interactionTimeout = setTimeout(() => {
      this.isUserInteracting = false;
    }, 1500);
  }

  onWheel() {
    // When the user scrolls with the wheel or trackpad, temporarily pause the auto-scroll
    this.isUserInteracting = true;

    if (this.interactionTimeout) {
      clearTimeout(this.interactionTimeout);
    }

    this.interactionTimeout = setTimeout(() => {
      this.isUserInteracting = false;
    }, 1500);
  }
}
