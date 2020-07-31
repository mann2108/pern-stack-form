import React, {Fragment, useState} from 'react';
import {Navbar, NavbarText, NavbarBrand, NavItem, Collapse, NavbarToggler, Nav} from 'reactstrap';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import FormComponent from './components/FormComponent';
import DisplayDataComponent from './components/DisplayDataComponent';

function App () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <BrowserRouter>
      <Fragment>
        <Navbar light color="warning" expand="md">
            <NavbarBrand>FORM</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse  isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                           
                <NavItem style={{margin : 5}}>
                  <NavLink to="/form">Form</NavLink>
                </NavItem>
                
                <NavItem style={{margin : 5}}>
                  <NavLink to="/data">Data</NavLink>
                </NavItem>  
                
              </Nav>
              <NavbarText>TCS TASK 1</NavbarText>
            </Collapse>
        </Navbar>
      </Fragment>
      
      <Switch> 
        <Route exact path='/' component={FormComponent}></Route> 
        <Route exact path='/data' component={DisplayDataComponent}></Route> 
        <Route exact path='/form' component={FormComponent}></Route>
        <Route exact path='/*' component={FormComponent}></Route> 
      </Switch> 
  </BrowserRouter>
  
  );
}

export default App;