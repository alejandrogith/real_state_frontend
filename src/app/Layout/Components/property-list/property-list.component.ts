import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyListComponent {
  @ViewChild('favorite') fav_Element!: ElementRef;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  changefavorite() {
    const element = this.fav_Element.nativeElement;
    if (element !== null && element instanceof HTMLElement) {
      const hasclass = element.classList.contains('fa-regular');

      if (hasclass) {
        this.render.removeClass(element, 'fa-regular');
        this.render.addClass(element, 'fa-solid');
      } else {
        this.render.removeClass(element, 'fa-solid');
        this.render.addClass(element, 'fa-regular');
      }
    }
  }
}
