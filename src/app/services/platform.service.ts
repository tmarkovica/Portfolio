import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor() { }

  isMobile: boolean;

  getPlatformToString(): string {
    if (this.isMobile)
      return "mobile"
    else
      return "web"
  }
}
