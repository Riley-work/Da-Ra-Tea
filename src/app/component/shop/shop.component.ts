import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  addToCart() {
    alert('Tea added to your cart!');

  }

    promocodes: string[] = ['WEASD', 'QWERT', 'ZXCVB', 'ASDFG', 'POIUY', 'LKJHG', 'MNBVC', 'PLMKO', 'NHYGT', 'BVCXZ'];
    promocode: string = '';
    ispromocode: boolean = false;

    checkPromocode() {
      this.ispromocode = this.promocodes.includes(this.promocode.toUpperCase());  //includes will check if is in array returns true
    }
}
