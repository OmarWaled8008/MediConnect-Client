import React, { useState } from 'react';
import './hospitaldetails.css'; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import heroImage from "../../assets/selt.png"; // Adjust the path as needed
import MainSecComp from "../../components/mainSecComp/MainSecComp";

const cardData = [
  {
    id: 1,
    imageUrl: "Hospitals/Smouha international Hospital.png",
    title: "Smouha International Hospital",
    detailsLink: "/hospital-details/1", // Link to a detailed page
    address: "Smouha, Alexandria",
    city: "Alexandria",
    description: "A leading hospital providing comprehensive healthcare services.",
    contactInfo: "For inquiries, call 15012.",
    photos: ["Hospitals/Smouha international Hospital_1.png", "Hospitals/Smouha international Hospital_2.png"],
    phone: "15012",
    email: "info@smouhahospital.com",
    streetAddress: "Smouha, Alexandria",
    icu: "Yes",
    rating: "3.6",
    mapLink: "https://www.google.com/maps/place/Smouha+International+Hospital/@31.2090002,29.9323084,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5c5912f15aa27:0xbad5156d8dc6016c!8m2!3d31.2089956!4d29.9348833!16s%2Fg%2F11hzpk747m?entry=ttu"
  },
  {
    id: 2,
    imageUrl: "https://healtheg.com//content/images/healtheg_300.png",
    title: "Dar Al-Muna Current Resort",
    detailsLink: "https://healtheg.com/ar/Item/1207/منتجع-دار-المنى-العلاجى",
    address: "How many 20 5 - In front of the office of Hazem Hassan, legal accountants and advisers, Cairo -Alexandria Desert Road, Giza",
    city: "Giza",
    description: "N/A",
    contactInfo: "N/A",
    photos: ["https://healtheg.com//content/images/healtheg_300.png"],
    phone: "19499 - 0237990703 - 0237990705 - 0237990706 - 0237990707",
    email: "N/A",
    streetAddress: "How many 20 5 - In front of the office of Hazem Hassan, legal accountants and advisers, Cairo -Alexandria Desert Road, Giza",
    icu: "N/A",
    rating: "N/A",
    mapLink: "N/A"
  },
  {
    id: 3,
    imageUrl: "https://healtheg.com//content/images/healtheg_300.png",
    title: "Medi Clinic",
    detailsLink: "https://healtheg.com/ar/Item/3183/ميدى-كلينيك",
    address: "Diyar Al Rabwah, Naama Bay, Sharm El Sheikh",
    city: "Sharm El-Sheikh",
    description: "N/A",
    contactInfo: "N/A",
    photos: ["https://healtheg.com//content/images/healtheg_300.png"],
    phone: "01006260020 - 01006108516",
    email: "N/A",
    streetAddress: "Diyar Al Rabwah, Naama Bay, Sharm El Sheikh",
    icu: "N/A",
    rating: "N/A",
    mapLink: "N/A"
  }
];

const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = '⭐'.repeat(fullStars);

  if (halfStar) {
    stars += '⭐️'; // Adding the half star
  }

  stars = stars.substring(0, 5); // Ensure the total stars do not exceed 5
  return stars;
};

const HospitalDetails = () => {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(Array(cardData.length).fill('details')); // Track the active tab for each card

  const handleBookingClick = () => {
    navigate('/appointmentbooking'); // Change this path to your booking page route
  };

  return (
    <>
      <MainSecComp
        hero={heroImage}
        heading={
          `<p>Discover Hospitals,</p>
           <p>Book Instantly.</p>`
        }
      />

      <nav className="navbar navbar-expand-lg bg-light" style={{ width: '90%', height: '8rem', margin: '0 auto' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><strong>Explore 💨</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="#">Hospitals</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/HospitalDetails">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Pricing</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row">
          {cardData.length > 0 ? (
            cardData.map((card, index) => (
              <div key={card.id} className="col-md-4 mb-4">
                <div className="card text-center">
                  <img
                    src={card.imageUrl}
                    className="card-img-top"
                    alt={card.title}
                    style={{ objectFit: 'cover' }} // Adjusted height for uniformity
                  />
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTabs[index] === 'details' ? 'active' : ''}`}
                          onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'details' : tab)))}
                        >
                          Details
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTabs[index] === 'contact' ? 'active' : ''}`}
                          onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'contact' : tab)))}
                        >
                          Contact Info
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTabs[index] === 'location' ? 'active' : ''}`}
                          onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'location' : tab)))}
                        >
                          Location
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTabs[index] === 'booking' ? 'active' : ''}`}
                          onClick={() => setActiveTabs(prev => prev.map((tab, i) => (i === index ? 'booking' : tab)))}
                        >
                          Book
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    {activeTabs[index] === 'details' && (
                      <>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text"><strong>Description:</strong> {card.description}</p>
                        <p className="card-text"><strong>Rating:</strong> {getStarRating(card.rating)}</p>
                      </>
                    )}
                    {activeTabs[index] === 'contact' && (
                      <>
                        <p className="card-text"><strong>Contact Info:</strong> {card.contactInfo}</p>
                        <p className="card-text"><strong>Phone:</strong> {card.phone}</p>
                        <p className="card-text"><strong>Email:</strong> {card.email}</p>
                      </>
                    )}
                    {activeTabs[index] === 'location' && (
                      <>
                        <p className="card-text"><strong>Address:</strong> {card.address}</p>
                        <Link to={card.mapLink} className="btn btn-primary" target="_blank">View on Map</Link>
                      </>
                    )}
                    {activeTabs[index] === 'booking' && (
                      <>
                        <p className="card-text"><strong>Book Now:</strong></p>
                        <button className="btn btn-success" onClick={handleBookingClick}>Book Now</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hospitals available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HospitalDetails;
