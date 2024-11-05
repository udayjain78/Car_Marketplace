import { drizzle } from 'drizzle-orm';
import { carListingSchema } from '../schema'; // Adjust path if needed

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { make, model, year, price, mileage, color, description, images } = req.body;

    try {
      // Insert data into the database
      await drizzle.insert(carListingSchema).values({
        make,
        model,
        year: parseInt(year, 10),
        price: parseFloat(price),
        mileage: parseInt(mileage, 10),
        color,
        description,
        images, // Adjust to match format if needed
      });

      res.status(200).json({ message: 'Listing added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add listing' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
