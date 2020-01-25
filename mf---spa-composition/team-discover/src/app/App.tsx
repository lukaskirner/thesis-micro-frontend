import React from 'react';
import Api from '../core/api';
import Item from '../core/model/Item';

export interface AppProps {
  id: string
}

export interface AppState {
  id: string | undefined
  items: Item[]
}

export default class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    id: undefined,
    items: []
  }

  private async fetchRelated(id: string) {
    const resp = await Api.getFromServer<Item[]>(`discover/${id}`)
    if (resp.success) {
      this.setState({
        id: id,
        items: resp.data as Item[]
      })
    } else {
      console.log('Error on loading related products')
    }
  }


  render() {
    if (this.props.id !== this.state.id) {
      this.fetchRelated(this.props.id)
    }

    const style = `
      .discover {
        margin-top: 50px;
      }
      .discover ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .discover ul li {
        display: inline-block;
      }
      .discover ul li a {
        color: black;
      }
      .discover ul li a div {
        width: 125px;
        height: 200px;
        margin: 3px;
        background-color: gray;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .discover ul li a div p {
        background-color: white;
        position: absolute;
        bottom: 0;
      }`

    return<div className="discover">
      <h4>Das könnte Ihnen auch gefallen:</h4>
      <ul>
        {this.state.items.map(item => {
          var divStyle = {
            backgroundImage: `url(${item.images[0]})`,
          }
          return <li key={item.id}>
            <a href={`#/detail/${item.id}`}>
              <div style={divStyle}>
                <p>{item.name}</p>
              </div>
            </a>
          </li>
        })}
      </ul>
      <style type="text/css">
        {style}
      </style>
    </div>
  }
}
