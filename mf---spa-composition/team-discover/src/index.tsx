import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

class TeamDiscover extends HTMLElement {

  static get observedAttributes() {
    return ['id'];
  }

  constructor() {
    super()
    const mountPoint = document.createElement('div');
    mountPoint.id = 'team-discover--root'
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    serviceWorker.unregister();
  }

  connectedCallback() {
    // console.log('Team-Discover: connectedCallback');
    this.updateElement()
  }

  disconnectedCallback() {
    // console.log('Team-Discover: disconnectedCallback');
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    // console.log('attribute change --> Old:' + oldValue + ' / New:' + newValue)
    this.updateElement()
  }

  updateElement() {
    // console.log('ID ond update: ' + this.getAttribute('id'))

    if(this.hasAttribute('id')) {
      ReactDOM.render(
        <App id={this.getAttribute('id')!} />,
        this.shadowRoot!.getElementById('team-discover--root')
      );
    }
  }
}

customElements.define('team-discover', TeamDiscover);
