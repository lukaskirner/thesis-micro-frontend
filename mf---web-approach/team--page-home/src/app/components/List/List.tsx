import React from 'react';
import Item from '../../core/model/Item';
import ListItem from '../ListItem/ListItem';
import './List.scss';

export interface ListProps {
	items: Item[]
}

const List: React.FC<ListProps> = (props) => {
	return 	<div className="list">
		{props.items.map(item => {
			return <ListItem key={item.id} item={item} />
		})}
	</div>;
}

export default List;
