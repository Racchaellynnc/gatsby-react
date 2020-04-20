import React from'react'
import {Navbar, Nav} from 'react-bootstrap'
import headerStyles from './Header.module.css'
import {Link} from 'gatsby';

export default (props) => (
<Navbar className={headerStyles.navbar} expand="lg">

    
      <Nav.Link className={headerStyles.navbars} as={Link} to="/blog" >
        BLOG
      </Nav.Link>
      <Nav.Link className={headerStyles.navbars} as={Link} to="/about">
        ABOUT 
      </Nav.Link>
      <Nav.Link className={headerStyles.navbars} as={Link} to="/contact">
        CONTACT
      </Nav.Link>
  
  <Navbar.Brand className={headerStyles.navbarname} href="/">Gatsby Tutorial</Navbar.Brand>
</Navbar>
)