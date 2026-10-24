
import type { Vehicle } from "../types/vehicle";

// Temporary sample data until the backend API is ready.
export const vehicles: Vehicle[] = [
  {
    id: "bmw-m5",
    brand: "BMW",
    name: "BMW M5 Competition",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    location: "Mumbai",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 8500,
  },
  {
    id: "mercedes-amg",
    brand: "Mercedes",
    name: "Mercedes-AMG GT 63 S",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    location: "Delhi",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    pricePerDay: 12000,
  },
  {
    id: "porsche-911",
    brand: "Porsche",
    name: "Porsche 911 Carrera S",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    location: "Bangalore",
    seats: 4,
    transmission: "PDK",
    fuelType: "Petrol",
    pricePerDay: 15000,
  },
];
