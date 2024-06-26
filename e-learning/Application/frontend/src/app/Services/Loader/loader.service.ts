import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  // For linear loader ========================================
  isLinearLoading = false;
  setLinearLoading(state: boolean) {
    this.isLinearLoading = state;
  }

  // For full loader ========================================
  isFullLoading = false;
  setFullLoading(state: boolean) {
    this.isFullLoading = state;
  }

  // For simple loader
  isLoading = false;
  setIsLoading(state: boolean) {
    this.isLoading = state;
  }
}
