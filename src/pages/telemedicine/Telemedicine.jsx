import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const medicineData = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    title: "Aspirin",
    description: "Pain relief and fever reducer.",
    quantity: 632,
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    title: "Ibuprofen",
    description: "Nonsteroidal anti-inflammatory drug.",
    quantity: 512,
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/150",
    title: "Paracetamol",
    description: "Used to treat pain and fever.",
    quantity: 893,
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/150",
    title: "Amoxicillin",
    description: "Antibiotic used to treat bacterial infections.",
    quantity: 431,
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/150",
    title: "Metformin",
    description: "Medication used to treat type 2 diabetes.",
    quantity: 627,
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/150",
    title: "Amlodipine",
    description: "Treats high blood pressure and chest pain.",
    quantity: 829,
  },
  {
    id: 7,
    imageUrl: "https://via.placeholder.com/150",
    title: "Ciprofloxacin",
    description: "Antibiotic used to treat infections.",
    quantity: 376,
  },
  {
    id: 8,
    imageUrl: "https://via.placeholder.com/150",
    title: "Warfarin",
    description: "Used to prevent blood clots.",
    quantity: 945,
  },
  {
    id: 9,
    imageUrl: "https://via.placeholder.com/150",
    title: "Lisinopril",
    description: "Used to treat high blood pressure.",
    quantity: 728,
  },
  {
    id: 10,
    imageUrl: "https://via.placeholder.com/150",
    title: "Omeprazole",
    description: "Reduces stomach acid production.",
    quantity: 581,
  },
  {
    id: 11,
    imageUrl: "https://via.placeholder.com/150",
    title: "Atorvastatin",
    description: "Used to lower cholesterol levels.",
    quantity: 790,
  },
  {
    id: 12,
    imageUrl: "https://via.placeholder.com/150",
    title: "Simvastatin",
    description: "Used to control high cholesterol.",
    quantity: 411,
  },
  {
    id: 13,
    imageUrl: "https://via.placeholder.com/150",
    title: "Levothyroxine",
    description: "Used to treat underactive thyroid.",
    quantity: 583,
  },
  {
    id: 14,
    imageUrl: "https://via.placeholder.com/150",
    title: "Losartan",
    description: "Used to treat high blood pressure.",
    quantity: 499,
  },
  {
    id: 15,
    imageUrl: "https://via.placeholder.com/150",
    title: "Metoprolol",
    description: "Used to treat high blood pressure and heart issues.",
    quantity: 672,
  },
  {
    id: 16,
    imageUrl: "https://via.placeholder.com/150",
    title: "Furosemide",
    description: "Treats fluid retention and swelling.",
    quantity: 389,
  },
  {
    id: 17,
    imageUrl: "https://via.placeholder.com/150",
    title: "Albuterol",
    description: "Used to treat asthma and breathing problems.",
    quantity: 511,
  },
  {
    id: 18,
    imageUrl: "https://via.placeholder.com/150",
    title: "Citalopram",
    description: "Used to treat depression.",
    quantity: 439,
  },
  {
    id: 19,
    imageUrl: "https://via.placeholder.com/150",
    title: "Prednisone",
    description: "Steroid used to treat inflammation.",
    quantity: 823,
  },
  {
    id: 20,
    imageUrl: "https://via.placeholder.com/150",
    title: "Zolpidem",
    description: "Used to treat insomnia.",
    quantity: 374,
  },
];

const Telemedicine = () => {
  const [items] = useState(medicineData); // No need for setItems if data is static
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the purchase page with selected item data
  const handleBuyNow = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    navigate("/purchase", { state: { item: selectedItem } }); // Navigate to the purchase page with the item data
  };

  return (
    <div className="container py-14">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-dark">Telemedicine Services</h1>
        <p className="text-lg text-dark mt-2">
          Access healthcare from the comfort of your home with our secure
          telemedicine services.
        </p>
      </header>

      <section className="p-4">
        <h2 className="text-3xl font-semibold text-dark mb-4">
          Key Features of Our Telemedicine Services
        </h2>
        <div className="row max-w-7xl mx-auto">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-dark">{item.description}</p>

                  {/* Quantity Display */}
                  <p className="mt-2 text-dark">
                    Available Quantity: {item.quantity}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    className="btn btn-primary mt-2"
                    disabled={item.quantity === 0}
                    onClick={() => handleBuyNow(item.id)} // Navigate to the purchase page
                  >
                    {item.quantity === 0 ? "Out of Stock" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Telemedicine;
