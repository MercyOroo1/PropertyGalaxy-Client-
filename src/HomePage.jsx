import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './assets/Images/proppertygalaxy.jfif';
import image1 from './assets/Images/homepage.jpg';
import livingroom from './assets/Images/livingroom.jpg';
import interior from './assets/Images/interior.jpg';
import icon1 from './assets/Images/agent.jpg';
import icon2 from './assets/Images/agent.jpg';
import icon3 from './assets/Images/agent.jpg';
// import { IonIcon } from 'ionicons';

const HomePage = () => {
    const [showContactCard, setShowContactCard] = useState(false);
    const [location, setLocation] = useState('');
    const [properties, setProperties] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5050/property/list')
            .then(response => response.json())
            .then(data => {
                setProperties(data);
                const uniqueCities = [...new Set(data.map(property => property.city))];
                setSuggestions(uniqueCities);
            })
            .catch(error => console.error("There was an error fetching the properties:", error));
    }, []);

    const handleSearch = () => {
        const filteredProperties = properties.filter(property => property.city.toLowerCase().includes(location.toLowerCase()));
        setProperties(filteredProperties);
    };

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    const toggleContactCard = () => {
        setShowContactCard(!showContactCard);
    };

    return (
        <div className="home-page">
            <header className="navbar">
                <img src={logo} alt="Property Galaxy" className="logo" />
                <p className='app-name'>Property Galaxy</p>
                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/favourites-page">❤️ Favorites</Link>
                    <Link to="/apply-agents">Become an agent?</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>

            <main className="body-content">
                <div className="search-bar">
                    <input
                        type="text"
                        value={location}
                        onChange={handleChange}
                        placeholder="Search by location"
                        list="location-suggestions"
                    />
                    <datalist id="location-suggestions">
                        {suggestions.map((city, index) => (
                            <option key={index} value={city} />
                        ))}
                    </datalist>
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="hero-featured-property">
                    <section className="hero" id="home">
                        <div className="container">
                            <div className="hero-content">
                                <h2 className="hero-title">Find Your Dream House By Us</h2>
                                <p className="hero-text">
                                    Find your dream house with ease at Property Galaxy, where diverse listings and expert guidance meet your real estate needs. Explore, discover, and make informed decisions with us today!
                                </p>
                                <button className="contact-agent-button" onClick={toggleContactCard}>📞 Contact Agent</button>
                            </div>
                            {showContactCard && (
                            <div className="contact-card">
                                <p>
                                    <a href="mailto:info@propertygalaxy.com" className="header-top-link">
                                        <ion-icon name="mail-outline"></ion-icon>
                                        <span>info@propertygalaxy.com</span>
                                    </a>
                                </p>
                                <p>📞 +254 718 338217</p>
                            </div>
                        )}
                        </div>
                    </section>

                    <div className="featured-property">
                        <div className="property-details">
                            <img src={image1} alt="Property Galaxy" className="featured-property-image" />
                            <div className="property-gallery">
                                {/* Additional images can be added here */}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='view-all-properties'>
                    <Link to="/properties"><button className='view-all-button'>View All Properties</button></Link>
                </div>

                <section className="about" id="about">
                    <div className="container">
                        <figure className="about-banner">
                            <img src={livingroom} alt="House interior" />
                            <img src={interior} alt="House interior" className="abs-img" />
                        </figure>
                        <div className="about-content">
                            <p className="title">About Us</p>
                            <h2 className="section-title">The Leading Real Estate Rental Marketplace.</h2>
                            <p className="about-text">
                                Over 30,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.
                            </p>
                            <ul className="about-list">
                                <li className="about-item">
                                    <div className="about-item-icon">
                                        {/* <IonIcon name="home-outline" /> */}
                                    </div>
                                    <p className="about-item-text">Smart Home Design</p>
                                </li>
                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="leaf-outline"></ion-icon>
                                    </div>
                                    <p className="about-item-text">Beautiful Scene Around</p>
                                </li>
                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="wine-outline"></ion-icon>
                                    </div>
                                    <p className="about-item-text">Exceptional Lifestyle</p>
                                </li>
                                <li className="about-item">
                                    <div className="about-item-icon">
                                        <ion-icon name="shield-checkmark-outline"></ion-icon>
                                    </div>
                                    <p className="about-item-text">Complete 24/7 Security</p>
                                </li>
                            </ul>
                            <p className="callout">
                                "The only place that can make you comfortable enough to stay by yourself, with your companion and your whole extended family."
                            </p>
                            {/* <a href="#service" className="btn">Our Services</a> */}
                        </div>
                    </div>
                </section>

                {/* Service Section */}
                <section className="service" id="service">
                    <div className="container">
                        <p className="title">Our Services</p>

                        <h2 class="h2 section-title">Our Main Focus</h2>
                        <div className="service-list">
                            <div className="service-card">
                                <div className="card-icon">
                                    <img src={icon1} alt="Service Icon" />
                                </div>
                                <h3 className="card-title"><a href="#">Consulting Services</a></h3>
                                <p className="card-text">We offer professional consulting services to help you make informed decisions about your property investments.</p>
                                <a href="#" className="card-link"><span>Read More</span> <ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img src={icon2} alt="Service Icon" />
                                </div>
                                <h3 className="card-title"><a href="#">Property Management</a></h3>
                                <p className="card-text">Our property management services ensure that your real estate assets are well-maintained and profitable.</p>
                                <a href="#" className="card-link"><span>Read More</span> <ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img src={icon3} alt="Service Icon" />
                                </div>
                                <h3 className="card-title"><a href="#">Market Analysis</a></h3>
                                <p className="card-text">We provide in-depth market analysis to help you understand the real estate trends and make the right investment choices.</p>
                                <a href="#" className="card-link"><span>Read More</span> <ion-icon name="arrow-forward-outline"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Property Section */}



            </main>

            {/* Footer Section */}
            <footer className="footer">
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
