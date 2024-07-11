import { Component } from '@angular/core';
import { SearchComponent } from '../Components/search/search.component';
import { PropertyListComponent } from '../Components/property-list/property-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PropertyListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
