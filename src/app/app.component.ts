import { DOCUMENT, JsonPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  INJECTOR,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Layout/Components/navbar/navbar.component';
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { FooterComponent } from './Layout/Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(@Inject(DOCUMENT) private dom: Document) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
