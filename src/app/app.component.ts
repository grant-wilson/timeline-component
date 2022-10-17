import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private startDate = new Date('2022-10-17');
  events = Array.from({ length: 20 }).map((_, i) => ({
    date: new Date(new Date().setDate(this.startDate.getDate() + i)),
    title: `My Event ${i} Title`,
    description: `My Event ${i} description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  }));
}
