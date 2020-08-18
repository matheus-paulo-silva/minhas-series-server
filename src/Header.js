import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Link } from 'react-router-dom';
  
  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return(
      <div className='container'>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to='/series'>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/series">Séries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/generos">Generos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
  
  export default Header;