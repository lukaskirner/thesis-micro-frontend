import { Component, h } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'team-header',
  styleUrl: 'team-header.scss',
  shadow: false // otherwise slot has no team-header.scss styles
})
export class TeamHeader {

  private isCurrentPath(path: string) {
    return document.location.pathname.includes(path);
  }

  render() {
    return <nav>
      <ul>
        <li class={classnames({"active": this.isCurrentPath("/men")})}>
          <a href="/men">Herren</a>
        </li>
        <li class={classnames({"active": this.isCurrentPath("/woman")})}>
          <a href="/woman">Damen</a>
        </li>
        <li class={classnames("basket", {"active": this.isCurrentPath("/basket")})}>
          <slot name="basket" />
        </li>
      </ul>
    </nav>;
  }
}
