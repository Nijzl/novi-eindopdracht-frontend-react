import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe to FoodFindr for regular updates?
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/reviews'>Reviews</Link>
                        <Link to='/sign-up'>Sign up</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>06-12345678</Link>
                        <a href = "mailto: foodfindr@gmail.com">foodfindr@gmail.com</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href = "www.instagram.com">Instagram</a>
                        <a href = "www.facebook.com">Facebook</a>
                        <a href = "www.youtube.com">Youtube</a>
                        <a href = "www.twitter.com">Twitter</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='social-icons'>
                        <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
