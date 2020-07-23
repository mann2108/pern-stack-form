import React, {Component, Fragment} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import FormComponent from './components/FormComponent';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar dark color="primary">
            <NavbarBrand href="/">Form App</NavbarBrand>
        </Navbar>
        <FormComponent />
      </Fragment>
    );
  }
}
export default App;
