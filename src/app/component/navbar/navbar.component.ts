import { Component, HostListener } from '@angular/core';

interface DropdownState {
  Plan: boolean;
  Book: boolean;
  Card: boolean;
  Fleet: boolean;
  login:boolean;
  vehicle:boolean;
  renter:boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  dropdowns: DropdownState = {
    Plan: false,
    Book: false,
    Card: false,
    Fleet:false,
    login:false,
    vehicle:false,
    renter:false
  };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.nav-item')) {
      this.closeAllDropdowns();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(menu: keyof DropdownState, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeAllDropdowns();
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  closeAllDropdowns() {
    Object.keys(this.dropdowns).forEach(key => {
      this.dropdowns[key as keyof DropdownState] = false;
    });
  }
}