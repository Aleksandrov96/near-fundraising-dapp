import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { logout } from '../../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/fundraisings" className="brand">Make Good Things Happen 💫</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/newFundraising">New Fundraising</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <button
            type="button"
            className="logout"
            onClick={logout}
          >
            <span>{window.accountId}</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;