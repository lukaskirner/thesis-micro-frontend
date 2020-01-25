import React from 'react';
import classnames from 'classnames';
import NavLink from './NavLink';
import './App.scss';

export interface AppProps {}

export interface AppState {
  activeLink: NavLink | undefined
}

export default class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    activeLink: undefined
  }

  componentDidMount() {
    switch (document.location.hash) {
      case NavLink.MEN:
        this.setState({activeLink: NavLink.MEN})
        break
      case NavLink.WOMAN:
        this.setState({activeLink: NavLink.WOMAN})
        break
      default:
        this.setState({activeLink: undefined})
    }
  }

  private updateActive(active: NavLink) {
    this.setState({
      activeLink: active
    })
  }

  render() {
    return (
      <nav>
        <ul>
          <li className={classnames({"active": this.state.activeLink === NavLink.MEN})}>
            <a onClick={(_) => this.updateActive(NavLink.MEN)} href={NavLink.MEN}>Herren</a>
          </li>
          <li className={classnames({"active": this.state.activeLink === NavLink.WOMAN})}>
            <a onClick={(_) => this.updateActive(NavLink.WOMAN)} href={NavLink.WOMAN}>Damen</a>
          </li>
          <li className="basket">
            <team-basket-nav-basket />
          </li>
        </ul>
      </nav>
    );
  }
}
