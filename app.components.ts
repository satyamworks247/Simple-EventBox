import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleEvent(event: Event): void {
    console.log('Event type:', event.type);

    const target = event.target as HTMLElement;

    // Log element name if it exists
    const name = target.getAttribute('name');
    if (name) {
      console.log('Element name:', name);
    }

    // If it's an input element, log its value
    if (target instanceof HTMLInputElement) {
      console.log('Input value:', target.value);
    }
  }
}
