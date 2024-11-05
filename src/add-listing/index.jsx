import React, { useState } from 'react';
import Header from './components/Header';

const AddListing = () => {
  const [formData, setFormData] = useState({
    color: '',
    vin: '',
    listingDescription: '',
    offerType: '',
    title: '',
    originalPrice: '',
    sellingPrice: '',
    condition: '',
    make: '',
    model: '',
    year: '',
    transmission: '',
    features: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFeatureChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter((feature) => feature !== value)
        : [...prev.features, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addListing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      alert('Listing added successfully!');
    } else {
      alert('Failed to add listing.');
    }
  };
  

  const features = [
    'Air Conditioner', 'Leather Seats', 'Touchscreen Display', 'Child Safety Locks',
    'Stability Control', 'Rain Sensing Wiper', 'Bluetooth', 'Heater', 'Digital Odometer',
    'Panoramic Moonroof', 'Anti-lock Braking', 'Driver Air Bag', 'Traction Control',
    'Rear Spoiler', 'Android Auto', 'Apple CarPlay', 'Power Steering'
  ];

  return (
    
    <div className="min-h-screen w-full bg-gray-100 p-6 flex justify-center items-center">
      <div><Header/></div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-fit">
        <h1 className="text-2xl font-bold mt-12 mb-6 text-center text-gray-800">Add New Listing</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold">Listing Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Original Price</label>
            <input
              type="text"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Selling Price</label>
            <input
              type="text"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Condition</label>
            <input
              type="text"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Make</label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold">Listing Description</label>
            <textarea
              name="listingDescription"
              value={formData.listingDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Features</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {features.map((feature, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={feature}
                  checked={formData.features.includes(feature)}
                  onChange={handleFeatureChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddListing;
