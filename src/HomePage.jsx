import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './assets/Images/proppertygalaxy.jfif';
import image1 from './assets/Images/homepage.jpg';


const HomePage = () => {
    const [showContactCard, setShowContactCard] = useState(false);

    const toggleContactCard = () => {
        setShowContactCard(!showContactCard);
    };

    return (
        <div className="home-page">
            <header className="header">
                <div className="overlay"></div>
                <div className="header-top">
                    <div className="container">
                        <ul className="header-top-list">
                            <li>
                                <a href="mailto:info@propertygalaxy.com" className="header-top-link">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <span>info@propertygalaxy.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="header-top-link">
                                    <ion-icon name="location-outline"></ion-icon>
                                    <address>15/A, Nairobi, Kenya</address>
                                </a>
                            </li>
                        </ul>
                        <div className="wrapper">
                            <ul className="header-top-social-list">
                                <li><a href="#" className="header-top-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="#" className="header-top-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="#" className="header-top-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                                <li><a href="#" className="header-top-social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
                            </ul>
                            <button className="header-top-btn">Profile</button>
                        </div>
                    </div>
                </div>
            </header>

            <header className="navbar">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        Property Galaxy
                    </div>
                    <ul className="navbar-social-list">
                        <li><a href="#" className="navbar-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="navbar-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="navbar-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#" className="navbar-social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
                    </ul>
                </div>
                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/apply-agents">Do you wanna be an agent?</Link>
                    <Link to="/favorites">❤️ Favorites</Link>
                </nav>
            </header>

            <main className="body-content">
                <div className="search-bar">
                    <img src={logo} alt="Property Galaxy" className="logo" />
                    <input type="text" placeholder="Search by location" />
                    <button>Search</button>
                </div>

                <div className="hero-featured-property">
                    <section className="hero" id="home">
                        <div className="container">
                            <div className="hero-content">
                                <h2 className="h1 hero-title">Find Your Dream House By Us</h2>
                                <p className="hero-text">
                                    Find your dream house with ease at [PropertyGalaxy], where diverse listings and
                                    expert guidance meet your real estate needs. Explore, discover, and make informed decisions
                                    with us today!
                                </p>
                                <button className="contact-agent-button" onClick={toggleContactCard}>📞 Contact Agent</button>
                            </div>
                        </div>
                    </section>

                    <div className="featured-property">
                        <div className="property-details">
                            <h2>Featured Property</h2>
                            <img src={image1} alt="Property Galaxy" className="Featured Property" />
                            <div className="property-gallery">
                            </div>
                            <p>Price: $500,000</p>
                            <p>Description: This is a beautiful house located in a serene environment. It features modern amenities and spacious rooms.</p>
                        </div>
                        {showContactCard && (
                            <div className="contact-card">
                                <h3>Contact Agent</h3>
                                <p>Email: agent@example.com</p>
                                <p>Phone: (123) 456-7890</p>
                                <button onClick={toggleContactCard}>Close</button>
                            </div>
                        )}
                    </div>
                </div>

                <Link to="/properties" className="view-all-button">View All Properties</Link>
            </main>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-links">
                    <span>Download our app:</span>
                    <span className="footer-icon">📱 Google Play</span>
                    <span className="footer-icon">🍏 App Store</span>
                    <span className="footer-icon">💳 Visa</span>
                    <span className="footer-icon">📲 Mpesa</span>
                </div>
                <div className="footer-terms">
                    <Link to="/terms">Terms and Conditions</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
