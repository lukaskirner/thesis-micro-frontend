import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';
import Api from '../../core/api';

@Component({
  tag: 'team-basket-add-btn',
  styleUrl: 'team-basket-add-btn.scss',
  shadow: true
})
export class TeamBasketAddBtn {

  @Prop() productid: string

  @Event({
    eventName: 'counterIncrement',
    bubbles: true, // the event bubbles up through the DOM.
    composed: true // the event can bubble across the boundary between the shadow DOM and the regular DOM.
  }) counterIncrement: EventEmitter

  async addToBasket() {
    let resp = await Api.postToServer("basket", [this.productid])
    if (resp.success) {
      this.counterIncrement.emit()
    }
  }

  render() {
    return <button onClick={_ => this.addToBasket()}>Zum Warenkorb hinzufügen</button>;
  }
}
