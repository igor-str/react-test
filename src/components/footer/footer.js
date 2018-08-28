import React ,{ PureComponent } from 'react';
import { Grid, Row } from 'react-bootstrap';
import './footer.scss';

export class Footer extends PureComponent {

  static defaultProps = {
    listItemsMenu: ['this is', 'defaultProps', 'in children elements']
  }

  render() {
    return (
        <footer className="footer">
          <Grid>
            <Row>
              <ul className="footer__nav reset-list">{this.props.listItemsMenu.map((menuItem, index) => {
                return <li key={index}>{menuItem}</li>
              })}</ul>
            </Row>
            <Row><p className="footer__bottom">© React first test 2018</p></Row>
          </Grid>
        </footer>
    );
  }
}
