import React ,{ PureComponent } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './footer.scss';
import logo from '../../assets/logo.svg';

export class Footer extends PureComponent {

  static defaultProps = {
    listItemsMenu: ['this is', 'defaultProps', 'in children elements']
  }

  render() {
    return (
        <footer className="footer">
          <Grid>
            <Row>
              <Col xs={12} className="footer__top">
                <div className="footer__logo">
                  <img src={logo} className="App-logo" alt="logo" width={25} height={25} />
                </div>
                <ul className="footer__nav reset-list">{this.props.listItemsMenu.map((menuItem, index) => {
                  return <li key={index}>{menuItem}</li>
                })}</ul>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className="footer__bottom">© React first test 2018</p>
              </Col>
            </Row>
          </Grid>
        </footer>
    );
  }
}
