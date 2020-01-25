import React from 'react';
import {
  Link,
} from "react-router-dom";
import './NavigationBar.scss';
import classnames from 'classnames'
import Gender from '../../utils/Gender';
import Api from '../../core/api';

export interface NavigationBarProps {
	gender: Gender
}

export interface NavigationBarState {
	basketCount: number
}

export default class NavigationBar extends React.Component<NavigationBarProps, NavigationBarState> {
	
	state: NavigationBarState = {
		basketCount: 0
	}

	componentDidMount() {
		this.fetchBasket()
	}

	private async fetchBasket() {
		const resp = await Api.getFromServer<any>("basket", true)
		if (resp.success) {
			this.setState({
				basketCount: resp.data.content.length as number
			})
		}
	}

	render() {
		return (
			<nav>
				<ul>
					<li className={classnames({"active": this.props.gender === Gender.MEN})}>
						<Link to="/men">Herren</Link>
					</li>
					<li className={classnames({"active": this.props.gender === Gender.WOMAN})}>
						<Link to="/woman">Damen</Link>
					</li>
					<li className={classnames("basket")}>
						<a href="https://www.inovex.de">Warenkorb: {this.state.basketCount}</a>
					</li>
				</ul>
			</nav>
		);
	}
}
