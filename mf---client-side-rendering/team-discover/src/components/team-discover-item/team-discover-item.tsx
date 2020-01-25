import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'team-discover-item',
  styleUrl: 'team-discover-item.scss',
  shadow: true
})
export class TeamDiscoverItem {

  @Prop() item: {
    id: number,
    name: string,
    price: number,
    images: string[]
  } // https://github.com/ionic-team/stencil/issues/1002

  render() {
    const divStyle = {
      backgroundImage: `url(${this.item.images[0]})`
    }

    return <a href={`/detail/${this.item.id}`}>
      <div style={divStyle}>
        <p>{this.item.name}</p>
      </div>
    </a>;
  }
}
