import React ,{ Component } from 'react';
import './add-post.scss';

export class AddPost extends Component {

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
        <div>blabla</div>
    );
  }
}
