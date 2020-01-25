import { Component, h, Prop, State } from '@stencil/core';
import ApiResponse from '../../core/model/ApiResponse';
import Item from '../../core/model/Item';
import Api from '../../core/api';

@Component({
  tag: 'team-product-info',
  styleUrl: 'team-product-info.scss',
  shadow: true
})
export class TeamProductInfo {

  @Prop() productid: string

  @State() item: Item = undefined

  componentDidLoad() {
    this.fetch();
  }

  async fetch() {
    let resp: ApiResponse<Item> = await Api.getFromServer(`products/${this.productid}`);
    console.log(resp.data);

    if (resp.data != undefined) {
      this.item = resp.data
    }
  }

  private pricetoEuro(price: number): string {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })

    return formatter.format(price/100)
  }

  render() {
    if (this.item == undefined) {
      return <h1>Loading ...</h1>
    } else {
      return <div class="product-info-wrapper">
        <div class="image-viewer">
          <team-product-image-viewer images={this.item.images} />
        </div>
        <div class="info-board">
          <h2>{this.item.name}</h2>
          <div class="collection">Collection: {this.item.info.collection}</div>
          <div class="color">Farbe: {this.item.info.color}</div>
          <div class="price"><b>{this.pricetoEuro(this.item.price)}</b> inkl. MwSt.</div>
          <div class="basket-slot"><slot name="basket-add"/></div>
          <div class="shipping-info"><b>Standard Lieferung:</b> <i>Kostenlos</i></div>
        </div>
      </div>;
    }
  }
}
