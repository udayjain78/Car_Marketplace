// src/components/MostSearchedCar.jsx

import React from 'react';
import fakeCars from '../../Shared/FakeData';

function MostSearchedCar() {
    return (
        <div>
            <h2 className='font-bold text-2xl text-black text-center my-6'>Most Searched Car</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 px-4 justify-items-center'>
                {fakeCars.map((car) => (
                    <div 
                        key={car.id} 
                        className='border rounded-lg p-4 shadow-md w-64 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
                    >
                        <div className='relative'>
                            <img 
                                src={car.image} 
                                alt={car.name} 
                                className='w-full h-24 object-cover rounded-lg'
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.style.display = 'none'; 
                                }}
                            />
                            <p className="text-center text-black mt-2">{car.name}</p>
                        </div>
                        <div className='text-gray-700 mt-2 text-center text-sm'>
                            <p><strong>Fuel Type:</strong> {car.fuelType}</p>
                            <p><strong>Type:</strong> {car.type}</p>
                            <p><strong>Miles:</strong> {car.miles.toLocaleString()} miles</p>
                            <p><strong>Gear Type:</strong> {car.gearType}</p>
                            <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
                        </div>
                        <div className='mt-4'>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostSearchedCar;
