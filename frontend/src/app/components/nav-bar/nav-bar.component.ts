import { Component, signal } from '@angular/core';
import { SideMenuComponent } from "./components/side-menu.component";
import { UserMenuComponent } from "./components/user-menu.component";
import { MainMenuComponent } from "./components/main-menu.component";
import { NavBarLinks } from './models';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SideMenuComponent, UserMenuComponent, MainMenuComponent],
  template: `
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <app-side-menu [listOfLinks]="links()" />
        <a class="btn btn-ghost text-xl">Help Desk</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-main-menu [listOfLinks]="links()" />
      </div>
        <div class="navbar-end">
          <app-user-menu />
        </div>
    </div>
  `,
  styles: ``
})
export class NavBarComponent {
  links = signal<NavBarLinks>([
    { label: 'Students', link: '/students' },
    { label: 'Taco Street', link: 'ts.com',
      children: [
        {
          label: 'Locations',
          link: 'locations.com'
        }
      ] }
  ]);
}
