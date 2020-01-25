import { Component, Prop, h } from '@stencil/core';
import { TEAM_PRODUCT, TEAM_DISCOVER } from '../../utils/TeamComponent';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css'
})
export class AppDetail {

  @Prop() productId: string;

  render() {
    return (
      <div class="app-detail">
        <team-product-info productid={this.productId}>
          <team-basket-add-btn slot="basket-add" productid={this.productId} />
        </team-product-info>
        <team-discover productid={this.productId} />
        {this.loadTeamComponent()}
      </div>
    );
  }

  loadTeamComponent() {
    return [TEAM_PRODUCT, TEAM_DISCOVER]
  }
}
