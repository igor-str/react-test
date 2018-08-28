import React ,{ Component } from 'react';
import './data-list.scss';

export class DataList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      aa: props.opa,
      bb: []
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
            return <li key={index}>{item.title}</li>
          })}
        </ol>
    );
  }
}

