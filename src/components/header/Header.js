
import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(props) {
    
    return (
      
            <div className='row'>
                <div >
                    <Navbar bg="dark" expand="lg"  >
                        <Navbar.Brand  className='text-light ps-4 ' href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                            
                                className="ms-auto my-2 my-lg-0 pe-5"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link className='linksItem' to='/' >Home </Link>
                                <Link className='linksItem' to='/about'>About </Link>
                                <Link className='linksItem' to='/contactUs'>Contacts </Link>
                                <Link className='linksItem' to="login">Log In </Link>
                                <Link className='linksItem' to='/singup'>Sing up </Link>
                                
                               
                               
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>

      
    )
}
