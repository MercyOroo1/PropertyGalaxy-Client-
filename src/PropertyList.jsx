import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Property.css';
import BoostButton from './BoostButton'; // Import the BoostButton component

const PropertyList = ({ userId }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5050/property/list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Error fetching properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleLike = async (propertyId) => {
    if (!authToken) {
      alert('User not authenticated. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5050/savedproperties/saved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
          user_id: userId,
          property_id: propertyId,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get more details about the error
        console.error(`Error saving property: ${response.status} ${response.statusText} ${errorText}`);
        throw new Error('Network response was not ok');
      }

      alert('Property saved successfully!');
    } catch (error) {
      console.error('Error saving property:', error);
      alert('Error saving property');
    }
  };

  const handleContactAgent = (property) => {
    alert(`Contacting agent for property: ${property.address}`);
  };

  if (loading) return <p>Loading... Thank you for your patience!</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="property-list">
      <h1>Properties</h1>
      <BoostButton /> 
      <div className="property-list__cards">
        {properties.map(property => (
          <div key={property.id} className="property-list__card">
            <div className="property-list__card-content">
              <h2>{property.address}</h2>
              <p>{property.city}</p>
              <p>${property.price}</p>
              <p>{property.photos && property.photos.map(photo => photo.photo_url).join(', ')}</p>
              <div className='property-actions'>
                <Link to={"/favorites"}>
                  <button className='like-button' onClick={() => handleLike(property.id)}>
                    ❤️ Like
                  </button>
                </Link>

                <button
                  className='agent-button'
                  onClick={() => handleContactAgent(property)}
                >
                  📞 Contact Agent
                </button>
              </div>
              <Link to={`/property/${property.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
