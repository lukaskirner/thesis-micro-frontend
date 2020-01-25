import React from 'react';
import Item from '../../core/model/Item';
import { pricetoEuro } from '../../utils/pricetoEuro';
import { DETAIL_URL } from '../../../config';
import './ListItem.scss';

export interface ListItemProps {
	item: Item
}

const ListItem: React.FC<ListItemProps> = (props) => {

	var divStyle = {
		backgroundImage: `url(${props.item.images[0]})`,
	}

	return <a href={`${DETAIL_URL}/detail/${props.item.id}`} className="list-item">
			<div className="list-item--item" style={divStyle}>
				<div className="item-info">
					{`${props.item.name} - ${pricetoEuro(props.item.price)}`}
				</div>
			</div>
		</a>;
}

export default ListItem;
