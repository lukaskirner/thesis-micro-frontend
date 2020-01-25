import { Component, h } from '@stencil/core';
import { TEAM_HEADER, TEAM_BASKET } from '../../utils/TeamComponent';

@Component({
  tag: 'app-header',
})
export class AppHeader {

  render() {
    return <div class="app-header">
      <team-header>
        <team-basket-nav-basket slot="basket" />
      </team-header>
      {this.loadTeamComponent()}
    </div>;
  }

  loadTeamComponent() {
    return [TEAM_HEADER, TEAM_BASKET]
  }
}
