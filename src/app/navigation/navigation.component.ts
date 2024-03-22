import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  mobileMenuOpen: any;
  get openCloseTrigger() {
    return this.mobileMenuOpen ? "open" : "closed";
  }
}
