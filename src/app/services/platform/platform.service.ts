import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  isMobile: boolean;

  constructor() { }

  getPlatformToString(): string {
    if (this.isMobile) {
      return 'mobile';
    }
    else {
      return 'web';
    }
  }
}
