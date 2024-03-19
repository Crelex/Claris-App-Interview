import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../constants/routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit  {
  constructor(private element: ElementRef, private router: Router) {

   }
  @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef;
  
  ngAfterViewInit() {
    this.navbarToggler.nativeElement.innerHTML = "Hello Angular";
  }

  ngOnInit(): void {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
       var $layer: any = document.getElementsByClassName('close-layer')[0];
       if ($layer) {
         $layer.remove();
         this.mobile_menu_visible = false;
       }
   });
  }

  private listTitles: any[] = [];
    mobile_menu_visible: boolean = false;
  private toggleButton: any;
  private sidebarVisible: boolean = false;


  sidebarOpen():void {
    this.sidebarVisible = true;
};
public sidebarClose():void {
    this.sidebarVisible = false;
};
public sidebarToggle():void {
   
};

public getTitle(): string{
  // var titlee = this.location.prepareExternalUrl(this.location.path());
  // if(titlee.charAt(0) === '#'){
  //     titlee = titlee.slice( 1 );
  // }

  // for(var item = 0; item < this.listTitles.length; item++){
  //     if(this.listTitles[item].path === titlee){
  //         return this.listTitles[item].title;
  //     }
  // }
  return 'Dashboard';
}
}
