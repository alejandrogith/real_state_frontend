import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbar') nav_Element!: ElementRef;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  toggleNavbar() {
    const element = this.nav_Element.nativeElement;
    if (element !== null && element instanceof HTMLElement) {
      const hasclass = element.classList.contains('navbar--active');

      hasclass
        ? this.render.removeClass(element, 'navbar--active')
        : this.render.addClass(element, 'navbar--active');
    }
  }
}
