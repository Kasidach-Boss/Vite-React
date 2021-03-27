import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Toast } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import WordArt from 'react-wordart';
import DarkModeToggle from "react-dark-mode-toggle";
import Hello from './page/Hello';


function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const mystyle = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <Router >
     
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home" style={mystyle}><WordArt text='My React App' theme={`rainbow`} fontSize={20}></WordArt> </Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Dashboard">Dashbaord</Nav.Link>
              <Nav.Link href="/Hello">Hello</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Button variant="outline-light">Search</Button>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
        
        </Navbar>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Hello">
            <Hello/>
          </Route>
         
        </Switch>
      
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
      
    
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App
