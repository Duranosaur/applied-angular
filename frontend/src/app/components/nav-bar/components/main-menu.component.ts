import { Component, input } from '@angular/core';
import { NavBarLinks } from '../models';
import { RouterLink } from '@angular/router';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    //JsonPipe
    RouterLink
  ],
  template: `
    <ul class="menu menu-horizontal px-1">
      <!-- <pre>{{ listOfLinks() | json }}</pre> -->
      @for( link of listOfLinks(); track link) {
        <li><a [routerLink]="link.link">{{link.label}}</a>
        <!-- @if(link.children){
          @for(child of link.children; track label){

          }
        } -->
      }
          <!-- <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul> -->
  `,
  styles: ``
})
export class MainMenuComponent {
  listOfLinks = input.required<NavBarLinks>();
}
