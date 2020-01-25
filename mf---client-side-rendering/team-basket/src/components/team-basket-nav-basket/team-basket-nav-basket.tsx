import { Component, h, State, Listen } from '@stencil/core';
import Api from '../../core/api';

@Component({
  tag: 'team-basket-nav-basket',
  styleUrl: 'team-basket-nav-basket.scss',
  shadow: false
})
export class TeamBasketNavBasket {

  @State() basketCount: number = 0

  @Listen('counterIncrement', { target: 'document' })
  counterIncrementHandler(_: CustomEvent) {
    this.fetchBasket()
  }

  connectedCallback() {
    this.fetchBasket()
  }

  private async fetchBasket() {
    let resp = await Api.getFromServer("basket")
    if (resp.success) {
      this.basketCount = resp.data['content'].length
    }
  }

  render() {
    return <a href="/basket">Warenkorb: <span>{this.basketCount}</span></a>;
  }
}
