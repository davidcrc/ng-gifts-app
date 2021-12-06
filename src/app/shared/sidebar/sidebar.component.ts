import { Component } from '@angular/core';
import { GifsService } from '../../gifts/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  get history(): string[] {
    return this.gifsService.history;
  }

  constructor(private gifsService: GifsService) {}
}
