import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'; 

function Footer() {
  return (
    <div>
      <div className='footer-main-info' >
        {/* Contact us */}
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Tel: +65 9123 4567</Link>
              <Link to='/'>Email: contactus@namastevaibhav.com</Link>

              <h2 class='bizhours'>Business Hours</h2>
                <p><span classname='days'>Wed-Thu</span>: 6:30-11:00pm (Last Seating: 7:30pm)</p>
                <p><span>Fri-Sun</span>: 12-2:30pm (Last Order: 1:00pm),</p>
                <p>6:30-11:00pm (Last Seating: 7:30pm)</p>
                <p>Closed on Mondays & Tuesdays</p>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <section className='map-section'>
          <Iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7736601786223!2d103.8520254747785!3d1.3111671616993783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da195d4e9782e9%3A0xcaf0de3e42799771!2sATN%20SPICE%20RESTAURANT!5e0!3m2!1sen!2ssg!4v1690292759221!5m2!1sen!2ssg'
            width='500'
            height='400'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </section>
      </div>

      <div  className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Namaste Vaibhav
              <i className='fas fa-bowl-food' />
            </Link>
            </div>
            <small class='website-rights'>Namaste Vaibhav © 2023</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      
      
    </div>
  );
}

export default Footer;