import FormComponent from './components/FormComponent';
import React, {Component, Fragment} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar dark color="primary">
            <NavbarBrand href="/">Demo Application</NavbarBrand>
        </Navbar>
        <FormComponent />
      </Fragment>
    );
  }
}
export default App;
