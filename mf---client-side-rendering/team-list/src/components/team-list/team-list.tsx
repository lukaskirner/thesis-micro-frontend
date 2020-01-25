import { Component, h, Prop, State } from '@stencil/core';
import Api from '../../core/api';
import ApiResponse from '../../core/model/ApiResponse';
import Item from '../../core/model/Item';

@Component({
  tag: 'team-list',
  styleUrl: 'team-list.scss',
  shadow: true
})
export class TeamList {

  @Prop() gender: string

  @State() items: Item[] = []

  componentDidLoad() {
    this.fetch();
  }

  async fetch() {
    let resp: ApiResponse<Item[]> = await Api.getFromServer(this.gender);
    console.log(resp.data);

    if (resp.data != undefined) {
      this.items = resp.data;
    }
  }

  render() {
    return <div class="team-list--list">
      {this.items.map(item => {
        return <team-list-item class="list-item" item={item} />
      })}
    </div>;
  }
}
