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
        <li className="post-item">
          <div className="close-icon">
            <span></span>
            <span></span>
          </div>
          <h5>{this.props.title}</h5>
          <div>

          </div>
        </li>
    );
  }
}
