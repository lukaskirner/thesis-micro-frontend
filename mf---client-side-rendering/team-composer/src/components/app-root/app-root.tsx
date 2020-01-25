import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-header>
          <app-header />
        </ion-header>
        <ion-content class="content">
          <ion-router useHash={false}>
            <ion-route url="/" component="app-home" componentProps={{gender: ""}} />
            <ion-route url="/woman" component="app-home" componentProps={{gender: "woman"}} />
            <ion-route url="/men" component="app-home" componentProps={{gender: "men"}} />
            <ion-route url="/detail/:productId" component="app-detail" />
            <ion-route url="/basket" component="app-basket" />
          </ion-router>
          <ion-nav />
        </ion-content>
      </ion-app>
    );
  }
}
