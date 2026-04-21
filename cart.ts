import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts = signal<any[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCart();
  }

  loadCart() {
    if (isPlatformBrowser(this.platformId)) {
      const cartData = localStorage.getItem('cart');
      this.carts.set(cartData ? JSON.parse(cartData) : []);
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.carts()));
  }

  getCart() {
    return this.carts();
  }

  addToCart(product: any, quantity: number) {
    const existingProduct = this.carts().find((item) => item.productId === product.id);
    if (existingProduct) {
      this.carts.update((cartItems) =>
        cartItems.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      this.carts.update((cartItems) => [
        ...cartItems,
        {
          id: 'c' + (cartItems.length + 1),
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity,
          image: product.image,
          discount: product.discount,
          active: false,
        },
      ]);
    }

    this.saveCart();
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
    console.log('save cart service', this.carts());
    const cartItem = localStorage.getItem('cart');
    console.log(cartItem ? JSON.parse(cartItem) : []);
  }

  updateQuantity(item: any, quantity: number): void {
    this.carts.update((cartItems) =>
      cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity } : cartItem))
    );
    this.saveCart();
    console.log('Update qty:', this.carts());
  }

  removeCart(item: any): void {
    this.carts.set(this.carts().filter((cartItem) => cartItem.id !== item.id));
    this.saveCart();
  }

  toggleActive(item: any): void {
    this.carts.update((cartItems) =>
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, active: !cartItem.active } : cartItem
      )
    );
    this.saveCart();
  }

  toggleActiveAll(active: boolean) {
    this.carts.update((cartItems) => cartItems.map((item) => ({ ...item, active })));
    this.saveCart();
  }

  clearCart() {
    this.carts.set([]);
    this.saveCart();
  }
}