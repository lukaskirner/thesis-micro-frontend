import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

class TeamHeader extends HTMLElement {
  constructor() {
    super();
    var root = document.createElement('div');
    root.id = 'team-header--root'
    this.appendChild(root)

    ReactDOM.render(<App />, root);
    serviceWorker.unregister();
  }
}

customElements.define('team-header', TeamHeader);


