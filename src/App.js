import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AddPost } from './components/AddPost/AddPost';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { HomePage } from './pages/HomePage/HomePage';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menuList: ['About', 'Contact us', 'Home'],
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/catalog' component={ CatalogPage }/>
          <Route exact path='/add_post' component={ AddPost }/>
        </Switch>
        <Footer listItemsMenu={this.state.menuList}/>
      </div>
    );
  }
}
