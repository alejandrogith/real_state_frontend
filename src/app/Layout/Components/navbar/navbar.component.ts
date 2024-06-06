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
  @ViewChild('navlist') navlist_Element!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  toggleNavbar() {
    const element: Element = this.navlist_Element.nativeElement;

    const hasclass: boolean = element.classList.contains('nav__list--active');

    hasclass
      ? this.renderer.removeClass(element, 'nav__list--active')
      : this.renderer.addClass(element, 'nav__list--active');
  }
}
