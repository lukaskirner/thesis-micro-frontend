import { Component, Prop, h } from '@stencil/core';
import { TEAM_LIST } from '../../utils/TeamComponent';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @Prop() gender: string

  render() {
    return [
      <div class="app-home">
        <team-list gender={this.gender}></team-list>
        {this.loadTeamComponent()}
      </div>
    ];
  }

  loadTeamComponent() {
    return TEAM_LIST
  }
}
