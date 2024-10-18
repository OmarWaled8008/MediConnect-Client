import React, { useState, useEffect } from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/home-mmm.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Custom Hook to fetch hospitals
const useHospitals = () => {
  return useQuery({
    queryKey: ["hospitalsData"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8000/api/data/hospitals");
      return response.data;
    },
  });
};

// RoutingMachine component
const RoutingMachine = ({ waypoints }) => {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{ color: "red", weight: 4 }],
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

// HospitalLocator component
const HospitalLocator = () => {
  const [filterLocation, setFilterLocation] = useState("");
  const [filterService, setFilterService] = useState("");
  const [userLocation, setUserLocation] = useState([31.2664943, 30.0136571]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const navigate = useNavigate();
  const { data: hospitals = [], isLoading, error } = useHospitals();
  const [activeTabs, setActiveTabs] = useState({});

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
        alert("Unable to retrieve your location. Please enable location services.");
      }
    );
  }, []);

  // Loading state
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching hospitals: {error.message}</div>;

  // Calculate distance function
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Filter hospitals by location and services
  const filteredHospitals = hospitals
    .filter(hospital => hospital.name && hospital.name.toLowerCase().includes(filterLocation.toLowerCase()))
    .filter(hospital => !filterService || (hospital.services && hospital.services.includes(filterService)))
    .filter(hospital => hospital.locationAfterConvert); // Ensure the hospital has locationAfterConvert

  // Calculate and sort hospitals by distance
  const hospitalsWithDistance = filteredHospitals.map(hospital => {
    const location = hospital.locationAfterConvert?.split(", ");
    const lat = location && location.length === 2 ? parseFloat(location[0].split(": ")[1]) : null;
    const lng = location && location.length === 2 ? parseFloat(location[1].split(": ")[1]) : null;
    const distance = lat && lng ? calculateDistance(userLocation[0], userLocation[1], lat, lng) : Infinity; // Default to Infinity if no valid location
    return { ...hospital, distance };
  }).sort((a, b) => a.distance - b.distance); // Sort by distance

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
    className: "red-marker",
  });

 

  const toggleTab = (index, tab) => {
    setActiveTabs((prev) => ({
      ...prev,
      [index]: prev[index] === tab ? null : tab,
    }));
  };

  return (
    <div className="hospital-locator-container">
      <MainSecComp
        hero={hero1}
       
          
            heading={`<p>Hospital Locator,</p><p>Find the best hospitals near you.</p>`}
        
      />
      <div className="filter-container">
        <h2 className="text-4xl font-semibold text-center py-5">Search for Hospitals</h2>
        <div className="max-w-[75rem] mx-auto p-5 row">
          <input
            type="text"
            className="form-control m-0"
            placeholder="Search by hospital name"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          />
          <select
            className="form-select my-3"
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
        </div>

        <MapContainer
          center={userLocation}
          zoom={13}
          style={{ height: "600px", width: "100%" }}
          className="max-w-[75rem] mx-auto p-5"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {hospitalsWithDistance.map(hospital => {
            const location = hospital.locationAfterConvert?.split(", ");
            const lat = location && location.length === 2 ? parseFloat(location[0].split(": ")[1]) : null;
            const lng = location && location.length === 2 ? parseFloat(location[1].split(": ")[1]) : null;
            if (lat && lng) {
              return (
                <Marker
                  key={hospital._id}
                  position={[lat, lng]}
                  icon={customIcon}
                  eventHandlers={{ click: () => setSelectedHospital(hospital) }}
                >
                  <Popup>
                    <div>
                      <h4>{hospital.name}</h4>
                      <p>Distance: {hospital.distance.toFixed(2)} km</p>
                      <p>{hospital.address}</p>
                      <p>Contact: {hospital.contactInfo}</p>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        onClick={() => navigate(`/appointmentbooking/${hospital._id}`, { state: { hospital } })}
                      >
                        Book Now
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              );
            }
            return null; // Skip rendering if location is invalid
          })}
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
          <RoutingMachine
            waypoints={selectedHospital ? [
              L.latLng(userLocation[0], userLocation[1]),
              L.latLng(
                parseFloat(selectedHospital.locationAfterConvert.split(", ")[0].split(": ")[1]),
                parseFloat(selectedHospital.locationAfterConvert.split(", ")[1].split(": ")[1])
              ),
            ] : []}
          />
        </MapContainer>
      </div>
      {/* Card Design for Hospitals */}
      <div className="max-w-[75rem] mx-auto py-5">
        <h2 className="text-center mb-4">Available Hospitals</h2>
        <div className="row">
          {hospitalsWithDistance.map((hospital, index) => (
            <div className="col-md-4 mb-4" key={hospital._id}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{hospital.name}</h5>
                  <p className="card-text">
                    <strong>Address:</strong> {hospital.address}<br />
                    <strong>Contact:</strong> {hospital.contactInfo}<br />
                    <strong>Distance:</strong> {hospital.distance.toFixed(2)} km
                  </p>
                  <Link
                   className="btn btn-primary"
                    onClick={() => toggleTab(index, hospital._id)}
                  >
                    {activeTabs[index] === hospital._id ? "Hide Details" : "Show Details"}
                  </Link>
                  {activeTabs[index] === hospital._id && (
                    <div className="hospital-details">
                      <h6>Details:</h6>
                      <p>{hospital.hospital_info}</p>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        onClick={() => navigate(`/appointmentbooking/${hospital._id}`, { state: { hospital } })}
                      >
                        Book Now
                      </Link>
                     
                    </div>
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