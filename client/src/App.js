import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import DonorForm from './Components/DonorForm';
import DonorList from './Components/DonorList';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
              <Nav.Link as={NavLink} to='/add'>Add Donor</Nav.Link>
              <Nav.Link as={NavLink} to='/view'>View Donors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<DonorForm/>}/>
        <Route path='/view' element={<DonorList/>}/>
      </Routes>
    </div>
  );
};

export default App;
