import React ,{ Component } from 'react';
import './list-item.scss';

export class ListItem extends Component {

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
        <li>{this.props.title}</li>
    );
  }
}
