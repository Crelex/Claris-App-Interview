import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
        const SMALL_WIDTH_BREAKPOINT = 991;
        @Injectable({
         providedIn: 'root'
         })
    export class ScreenSizeService {
    
     private mediaMatcher: MediaQueryList =  this._mediaMatcher.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

    constructor(private _mediaMatcher: MediaMatcher) {}
    public isScreenSmall(): boolean {
      return this.mediaMatcher.matches;
    }
  }