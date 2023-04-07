import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href="https://goo.gl/maps/E3wFRWg9uYdT6kz56">
                            <h2>Contact</h2>
                            <p>2108 S Irby St #4</p>
                            <p>Florence, SC 29505</p>
                            <a href="tel:843-678-9595">(843) 678-9595</a>
                        </a>
                    </div>
                    <div className='footer-link-items'>
                        <a href="https://goo.gl/maps/E3wFRWg9uYdT6kz56">
                            <h2>Hours</h2>
                            <p>Sunday - Thursday 11am - 9pm</p>
                            <p>Friday - Saturday 11am - 10pm</p>
                        </a>
                    </div>
                </div>
            </div>
            <section>
                <div>
                    <small className='website-rights'>David Chen &copy;{new Date().getFullYear()} Luna Media LLC</small>
                </div>
            </section>
        </div>
    )
}