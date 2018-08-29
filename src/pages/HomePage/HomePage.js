import React ,{ Component } from 'react';
import { Link} from 'react-router-dom';
import './home-page.scss';
import axios from 'axios/index';
import { DataList } from '../../components/DataList/DataList';
import { Grid, Row, Col } from 'react-bootstrap';

export class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: 'codeguida',
      posts: [],
      postsOffline: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
      ]
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  componentDidMount = () => {
    console.log("цей метод викликається при закінцені рендеру компоненту");
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        .then(res => {
          const posts = res.data.map(obj => obj);
          this.setState({ posts });
        });
  }

  render() {
    return (
        <div className="home-page">
          <Grid>
            <Row>
              <Col xs={12}>
                <div>
                  <p>{this.state.username}</p>
                  Change Name:
                  <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                  />
                </div>
                <DataList data={this.state.posts}/>
                <Link to={{ pathname: '/add_post', state: { data: this.state.postsOffline} }} className="reset-link">
                  <button className="btn btn--green el-center">Add new post</button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

