import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { DataList } from './components/DataList/DataList';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: 'codeguida',
      menuList: ['About', 'Contact us', 'Home'],
      posts: [],
      some: [
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
    console.log("цей метод - початок життєвого циклу компоненту");
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        .then(res => {
          const posts = res.data.map(obj => obj);
          this.setState({ posts });
        });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
          <p>{this.state.username}</p>
          Change Name:
          <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
          />
        </div>
        <DataList data={this.state.posts} opa={this.state.some} />
        <Footer listItemsMenu={this.state.menuList}/>
      </div>
    );
  }
}
