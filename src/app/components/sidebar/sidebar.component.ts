import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScreenSizeService } from '../../services/screen-size.service';
import { RouteInfo} from '../../types/i-route-into';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [ScreenSizeService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public ROUTES: RouteInfo[] = [
    { path: '/account', title: 'Accounts',  icon:'content_paste', class: '' },
    { path: '/health', title: 'Health',  icon:'content_paste', class: '' }
  ];
  constructor(private _screenService: ScreenSizeService) { }

  ngOnInit() {
    
  }
  isMobileMenu() {
      return this._screenService.isScreenSmall();
  };
}
