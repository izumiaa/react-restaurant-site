import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Namaste Vaibhav
            <i className='fas fa-bowl-food' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <ScrollLink
                    // to='/about'
                    className='nav-links'
                    // onClick={closeMobileMenu}
                    to="hero-container"
                    spy={true}
                    smooth={true}
                    offset={-70} 
                    duration={500}
                  >
                    Home
                  </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                // to='/about'
                className='nav-links'
                // onClick={closeMobileMenu}
                to="about"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
              >
                About us
              </ScrollLink>
            </li>
            <li className='nav-item'>
              <ScrollLink
                  className='nav-links'
                  to="cards"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Menu
              </ScrollLink>
            </li>
            
          </ul>

          <Button
            buttonStyle='btn--outline'
            scrollToSection='footer-main-info'
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


