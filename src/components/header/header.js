import React ,{ PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
        <header className="header">
          <NavLink className="logo" to='/'>
            <img src={require('../../assets/logo.svg')} alt="logo" width={50} height={50}  />
          </NavLink>
          <a id="js-btn-menu" onClick={ this.handleClick } className= { this.state.active ? "btn-menu active" : "btn-menu" }>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav id="menu" onClick={ this.handleClick } className= { this.state.active ? "menu active" : "menu" }>
            <ul className="menu__ul">
              <li><NavLink to='/' className="menu__item" activeClassName="active">Home</NavLink></li>
              <li><NavLink to='/catalog' className="menu__item" activeClassName="active">Catalog</NavLink></li>
              <li><a className="menu__item" href="#">Blog</a></li>
              <li><a className="menu__item" href="#">About</a></li>
              <li><a className="menu__item" href="#">Contact us</a></li>
              <li><a className="menu__item" href="#">Home</a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

