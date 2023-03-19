import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
  <Nav>
    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
    <LinkContainer to="/posts"><Nav.Link>Posts</Nav.Link></LinkContainer>
  </Nav>
);

export default Navigation;