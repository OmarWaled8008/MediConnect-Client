import React, { useState, useEffect } from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/loc.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from 'react-router-dom';
const initialHospitals = [
  {
    id: 1,
    title: "Eye Consultant Center",
    link: "https://healtheg.com/ar/Item/1667/المركز-الاستشارى-للعيون",
    address: "Neighboring, New Eastern Al-Salihiya",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "0553200061 - 0553203161",
    phone: "0553200061",
    email: "info@eyecenter.com",
    description: "Expert eye care and consultations.",
    mapLink: "https://www.google.com/maps?q=Eye+Consultant+Center",
    lat: 11.42494275,
    lng: 124.8479050919301,
  },
  {
    id: 2,
    title: "Doctor Medical Center",
    lat: 30.0475,
    lng: 31.2357,
    icuAvailability: 3,
    services: [],
    link: "https://healtheg.com/ar/Item/1047/الطبيب-ميديكال-سنتر",
    address: "3, Doctor St., Cairo-New Cairo",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "0226161840 - +20226175241",
    phone: "0226161840",
    email: "contact@doctor.com",
    description: "A leading medical center providing various healthcare services.",
    mapLink: "https://www.google.com/maps?q=Doctor+Medical+Center"
  },
  {
    id: 3,
    title: "Psychological Clinic - Dr. Manal Al-Daghar",
    lat: 30.0995671,
    lng: 31.3178072,
    icuAvailability: 0,
    services: [],
    link: "https://healtheg.com/ar/Item/1161/العيادة-النفسية---د-منال-الدغار",
    address: "25 Andalus St., Alexandria-Abrahamic",
    photo: "https://healtheg.com//content/images/healtheg_300.png",
    contactInfo: "035905175 - 01006313619",
    phone: "035905175",
    email: "manal.daghar@clinic.com",
    description: "Specializing in psychological health and therapy.",
    mapLink: "https://www.google.com/maps?q=Psychological+Clinic"
  },
  {
    id: 4,
    title: "Al-Hassan Hospital",
    link: "https://healtheg.com/ar/Item/2500/مستشفى-الحسن",
    address: "De D., Alexandria-Mandara tribal",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png", // Placeholder for photo if needed
    contactInfo: "033230514 - 033230509 - 033263703 - 033263702",
    phone: "033230514", // Or use a more relevant contact number
    email: "info@alhassan.com", // Placeholder email
    description: "N/A", // Update if more information is available
    mapLink: "https://www.google.com/maps?q=Al-Hassan+Hospital",
    lat: 49.405260, // Latitude from the provided data
    lng: 11.147167 // Longitude from the provided data
  },
  {
    id: 5, // New ID for the hospital
    title: "Glim Hospital",
    link: "https://healtheg.com/ar/Item/2960/مستشفى-جليم",
    address: "4 Zahran Rushdi St., Alexandria-Grim",
    icuAvailability: "N/A",
    services: [],
    photo: "https://healtheg.com//content/images/healtheg_300.png", // Placeholder for photo if needed
    contactInfo: "035837139 - 035836312 - 035852341",
    phone: "035837139", // Or use a more relevant contact number
    email: "info@glimhospital.com", // Placeholder email
    description: "N/A", // Update if more information is available
    mapLink: "https://www.google.com/maps?q=Glim+Hospital",
    lat: 31.2377734, // Latitude from the provided data
    lng: 29.9618553 // Longitude from the provided data
  }
];

const RoutingMachine = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{ color: 'red', weight: 4 }],
      },
      createMarker: () => null,
      addWaypoints: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints]);

  return null;
};

const HospitalLocator = () => {
  const [hospitals, setHospitals] = useState(initialHospitals);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterService, setFilterService] = useState("");
  const [userLocation, setUserLocation] = useState([31.2664943, 30.0136571]);
  const [activeTabs, setActiveTabs] = useState(Array(hospitals.length).fill('details'));
  const [selectedHospital, setSelectedHospital] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      error => {
        console.error("Error getting user location:", error);
        alert("Unable to retrieve your location. Please enable location services.");
      }
    );
  }, []);

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = x => (x * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const sortedHospitals = hospitals
    .map(hospital => ({
      ...hospital,
      distance: calculateDistance(userLocation[0], userLocation[1], hospital.lat, hospital.lng).toFixed(2)
    }))
    .sort((a, b) => a.distance - b.distance);

  const filteredHospitals = sortedHospitals.filter(hospital => 
    hospital.title.toLowerCase().includes(filterLocation.toLowerCase()) &&
    (filterService === "" || hospital.services.includes(filterService))
  );

  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  const userIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -41],
    className: 'red-marker',
  });

  const handleBookingClick = (hospital) => {
    navigate('/appointmentbooking', { state: { hospital } });
  };

  const handleMarkerClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <div className="hospital-locator-container">
      <MainSecComp
        headerText="Hospital Locator"
        paragraphText="Find the best hospitals near you."
        image={hero1}
      />
      <div className="filter-container">
        <h1>Search for Hospitals</h1>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by hospital name"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
        <select
          className="form-select mb-3"
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
        >
          <option value="">All Services</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Emergency">Emergency</option>
          <option value="Surgery">Surgery</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
        <MapContainer
          center={userLocation}
          zoom={13}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredHospitals.map(hospital => (
            <Marker
              key={hospital.id}
              position={[hospital.lat, hospital.lng]}
              icon={customIcon}
              eventHandlers={{ click: () => handleMarkerClick(hospital) }}
            >
              <Popup>
                <div>
                  <h4>{hospital.title}</h4>
                  <p>Distance: {hospital.distance} km</p>
                  <p>{hospital.address}</p>
                  <p>Contact: {hospital.contactInfo}</p>
                  <Link to="#" className="btn btn-primary" onClick={() => handleBookingClick(hospital)}>
                    Book Now
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
          <RoutingMachine
            waypoints={selectedHospital ? [L.latLng(userLocation[0], userLocation[1]), L.latLng(selectedHospital.lat, selectedHospital.lng)] : []}
          />
        </MapContainer>
      </div>

      {/* Card Design for Hospitals */}
      <div className="max-w-[75rem] mx-auto py-5">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5">
          Available Hospitals
        </h2>
        <div className="row sm:p-3">
          {filteredHospitals.map((hospital, index) => (
            <div key={hospital.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center hospital-card">
                <img
                  src={hospital.photo}
                  className="card-img-top hospital-image"
                  alt={hospital.title}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">{hospital.title}</h5>
                  <ul className="nav nav-tabs card-header-tabs">
                    {['details', 'contact', 'location', 'booking'].map((tab) => (
                      <li className="nav-item" key={tab}>
                        <button
                          className={`nav-link ${activeTabs[index] === tab ? "active" : ""}`}
                          onClick={() => setActiveTabs(prev => {
                            const newTabs = [...prev];
                            newTabs[index] = tab;
                            return newTabs;
                          })}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body">
                  {activeTabs[index] === "details" && <>
                          <h5 className="card-title">{hospital.title}</h5>
                          <p className="card-text">{hospital.description}</p>
                          <p className="card-text">Address: {hospital.address}</p>
                          <p className="card-text">Distance: {hospital.distance} km</p>
                          <Link to={hospital.link} target="_blank" className="btn btn-primary">View Details</Link>
                        </>}
                  {activeTabs[index] === "contact" && (
                    <div>
                      <p className="card-text">Telephone: {hospital.contactInfo}</p>
                      <p className="card-text">Contact: {hospital.contactInfo}</p>
                      <p className="card-text">Email: {hospital.email}</p>
                    </div>
                  )}
                  {activeTabs[index] === "location" && (
                    <p className="card-text">Address: {hospital.address}</p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <Link to="#" className="btn btn-primary" onClick={() => handleBookingClick(hospital)}>
                      Book Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalLocator;
