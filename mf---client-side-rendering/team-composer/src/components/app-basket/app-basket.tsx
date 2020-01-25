import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-basket',
  styleUrl: 'app-basket.css'
})
export class AppBasket {

  render() {
    return (
      <div class="app-basket">
        <h1>Welcome to your basket</h1>
      </div>
    );
  }
}
