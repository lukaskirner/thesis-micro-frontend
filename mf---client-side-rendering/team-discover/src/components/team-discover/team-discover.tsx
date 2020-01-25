import { Component, h, Prop, State } from '@stencil/core';
import ApiResponse from '../../core/model/ApiResponse';
import Item from '../../core/model/Item';
import Api from '../../core/api';

@Component({
  tag: 'team-discover',
  styleUrl: 'team-discover.scss',
  shadow: true
})
export class TeamDiscover {

  @Prop() productid: string

  @State() items: Item[] = []

  connectedCallback() {
    this.fetchRelatedProducts()
  }

  private async fetchRelatedProducts() {
    let resp: ApiResponse<Item[]> = await Api.getFromServer(`discover/${this.productid}`);
    console.log(resp.data);

    if (resp.data != undefined) {
      this.items = resp.data;
    }
  }

  render() {
    return <div>
      <h3>Das könnte Ihnen auch gefallen</h3>
      <ul>
        {this.items.map(item => {
          return <li>
              <team-discover-item item={item} />
            </li>
        })}
      </ul>
    </div>;
  }
}
