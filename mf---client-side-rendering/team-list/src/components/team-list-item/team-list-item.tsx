import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'team-list-item',
  styleUrl: 'team-list-item.scss',
  shadow: false // <-- no shadow here
})
export class TeamListItem {

  @Prop() item: {
    id: number
    name: string
    price: number
    images: [string]
  } // https://github.com/ionic-team/stencil/issues/1002

  private pricetoEuro(price: number): string {
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })

    return formatter.format(price/100)
  }

  render() {
    var divStyle = {
      backgroundImage: `url(${this.item.images[0]})`,
    }

    return <a href={`detail/${this.item.id}`}>
        <div class="team-list--item" style={divStyle}>
          <div class="item-info">
            {`${this.item.name} - ${this.pricetoEuro(this.item.price)}`}
          </div>
        </div>
      </a>;
  }
}
