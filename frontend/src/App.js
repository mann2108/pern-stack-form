import FormComponent from './components/FormComponent';
import React, {Component, Fragment} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Demo Application</NavbarBrand>
            </div>
        </Navbar>
        <FormComponent />
      </Fragment>
    );
  }
}
export default App;
