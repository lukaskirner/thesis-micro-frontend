import React from 'react';
import Gender from '../../utils/Gender';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Item from '../../core/model/Item';
import Api from '../../core/api';
import List from '../../components/List/List';
import './Home.scss'

export interface HomeProps {
	gender: Gender
}

export interface HomeState {
	items: Item[]
}

export default class Home extends React.Component<HomeProps, HomeState> {

	state: HomeState = {
		items: []
	} // initial state

	componentDidMount() {
		this.fetch(this.props.gender)
	}

	private async fetch(gender: Gender) {
		let resp = await Api.getFromServer<Item[]>(gender)
		this.setState({
			items: resp.data as Item[]
		})
	}

	render() {
		console.log(this.state)
		return <div>
			<NavigationBar gender={this.props.gender} />
			<List items={this.state.items} />
		</div>;
	}
}
