import React ,{ Component } from 'react';
import './home-page.scss';

export class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  render() {
    return (
        <div className="home-page">
          Home content
        </div>
    );
  }
}

