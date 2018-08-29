import React ,{ Component } from 'react';
import './data-list.scss';
import { ListItem } from '../ListItem/ListItem';

export class DataList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  activeTrigger = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
        <ol>
          {this.props.data.map((item, index) => {
            return <ListItem key={`item-id-${index}`} title={item.title}/>
          })}
        </ol>
    );
  }
}

