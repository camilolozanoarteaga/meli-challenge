import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponentComponent {

  searchText: string;

  constructor(private router: Router) { }

  onSearch() {
    this.router.navigate(['/items'], { queryParams: { query: this.searchText.trim() } });
  }

}
