import React ,{ PureComponent } from 'react';
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
          <a href="#" className="logo">
            <img src={require('../../assets/logo.svg')} alt="logo" width={50} height={50}  />
          </a>
          <a id="js-btn-menu" onClick={ this.handleClick } className= { this.state.active ? "btn-menu active" : "btn-menu" }>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <nav id="menu" onClick={ this.handleClick } className= { this.state.active ? "menu active" : "menu" }>
            <ul className="menu__ul">
              <li><a className="menu__item" href="#">Home</a></li>
              <li><a className="menu__item" href="#">Catalog</a></li>
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

