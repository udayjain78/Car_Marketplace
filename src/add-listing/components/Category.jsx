import React from "react";
import carCategories from "../../Shared/Data"; // Adjust the path if needed
import './Category.css'; // Import the CSS file for custom styles

function Category() {
    return (
        <div className="flex flex-wrap justify-center items-center w-full">
            <h2 className="text-3xl font-bold text-black w-full text-center mt-5 mb-5">Browse by Car Types</h2>
            {carCategories.map((category) => (
                <div key={category.id} className="flex flex-col items-center m-5 transition-transform duration-300 cursor-pointer hover:shadow-md hover:scale-105 p-4 border border-gray-300 rounded-lg shadow-md"> {/* Added border, rounded edges, and padding */}
                    <img
                        src={category.logo}
                        alt={category.name} // Use category name as alt text
                        style={{ width: '50px', height: '50px' }} // Adjust size as needed
                        onError={(e) => {
                            e.target.onerror = null; // prevents looping
                            e.target.src = "https://img.icons8.com/ios/50/000000/car.png"; // fallback image
                        }}
                        className="mb-2" // Added margin-bottom for spacing
                    />
                    <h2 className="text-black mt-2">{category.name}</h2> {/* Updated to <h2> */}
                </div>
            ))}
        </div>
    );
}

export default Category;
