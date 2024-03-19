import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, NavbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent implements OnInit{
  @ViewChild('elemMainPanel', { static: false, read: ElementRef })
  elemMainPanel!: ElementRef;

  @ViewChild('elemSidebar',{static:false, read: ElementRef}) 
  elemSidebar!: ElementRef;

  @ViewChild('sidebar',{static:false, read: ElementRef}) 
  sidebar!: ElementRef;

  private _router!: Subscription;
  private lastPoppedUrl: string = "";
  private yScrollStack: number[] = [];

    constructor() {
                 
  }
  ngOnInit(): void {
   
  }

}
