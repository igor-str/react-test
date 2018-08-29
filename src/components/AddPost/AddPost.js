import React ,{ Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './add-post.scss';

export class AddPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  render() {
    const {data} = this.props.location.state;
    console.log(data.map((item, index) => {
      return item.title
    }));
    return (
        <div>
          <h1 className="el-center">Create new post</h1>
          <Row>
            <Col xs={12}>
              <label>
                Add post title
                <input type="text" />
              </label>
            </Col>
            <Col xs={12}>
              <label>
                Add post body
                <input type="text" />
              </label>
            </Col>
          </Row>
          <button className="btn btn--green el-center">Save</button>
        </div>
    );
  }
}
