import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {

  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>NodeExpressReact</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
