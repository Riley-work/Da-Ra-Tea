import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cafemenu.component.html',
  styleUrl: './cafemenu.component.scss'
})
export class CafemenuComponent {
  cafeItems = [
    { name: 'Masala Chai', price: 50 },
    { name: 'Ginger Tea', price: 60 },
    { name: 'Green Tea', price: 70 }
  ];
}
