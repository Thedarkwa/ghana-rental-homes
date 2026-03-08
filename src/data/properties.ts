import singleRoom from "@/assets/single-room.jpg";
import chamberHall from "@/assets/chamber-hall.jpg";
import oneBedroom from "@/assets/one-bedroom.jpg";
import twoBedroom from "@/assets/two-bedroom.jpg";

export type PropertyType = "Single Room" | "Chamber & Hall" | "One Bedroom" | "Two Bedroom";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  location: string;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Cozy Single Room at Madina",
    type: "Single Room",
    location: "Madina, Accra",
    price: 250,
    description: "A clean and well-ventilated single room in a quiet neighborhood. Perfect for students and young professionals. Close to transport and market.",
    images: [singleRoom],
    amenities: ["Water", "Electricity", "Shared Bath", "Security"],
    featured: true,
  },
  {
    id: "2",
    title: "Spacious Chamber & Hall at Kasoa",
    type: "Chamber & Hall",
    location: "Kasoa, Central Region",
    price: 400,
    description: "A self-contained chamber and hall with tiled floors, ceiling fan, and ample space. Ideal for couples or small families.",
    images: [chamberHall],
    amenities: ["Water", "Electricity", "Tiled Floor", "Ceiling Fan", "Security"],
    featured: true,
  },
  {
    id: "3",
    title: "Modern 1-Bedroom at East Legon",
    type: "One Bedroom",
    location: "East Legon, Accra",
    price: 800,
    description: "A beautifully furnished one-bedroom apartment with modern kitchen and living area. Located in a prime area with easy access to shops and restaurants.",
    images: [oneBedroom],
    amenities: ["Water", "Electricity", "Kitchen", "Parking", "Security", "Air Conditioning"],
    featured: true,
  },
  {
    id: "4",
    title: "Luxury 2-Bedroom at Airport Residential",
    type: "Two Bedroom",
    location: "Airport Residential, Accra",
    price: 1500,
    description: "A premium two-bedroom apartment with spacious living and dining areas. Features contemporary African decor and high-end finishes.",
    images: [twoBedroom],
    amenities: ["Water", "Electricity", "Kitchen", "Parking", "Security", "Air Conditioning", "Balcony", "Generator"],
    featured: true,
  },
  {
    id: "5",
    title: "Affordable Single Room at Tema",
    type: "Single Room",
    location: "Tema, Greater Accra",
    price: 200,
    description: "Budget-friendly single room in Tema Community. Close to the industrial area and main roads. Great for workers.",
    images: [singleRoom],
    amenities: ["Water", "Electricity", "Shared Bath"],
    featured: false,
  },
  {
    id: "6",
    title: "Chamber & Hall at Dansoman",
    type: "Chamber & Hall",
    location: "Dansoman, Accra",
    price: 350,
    description: "Newly renovated chamber and hall in a gated compound. Quiet and family-friendly environment.",
    images: [chamberHall],
    amenities: ["Water", "Electricity", "Tiled Floor", "Security", "Gated Compound"],
    featured: false,
  },
  {
    id: "7",
    title: "1-Bedroom Apartment at Spintex",
    type: "One Bedroom",
    location: "Spintex Road, Accra",
    price: 650,
    description: "Comfortable one-bedroom apartment along Spintex Road. Close to major shopping centers and business hubs.",
    images: [oneBedroom],
    amenities: ["Water", "Electricity", "Kitchen", "Parking", "Security"],
    featured: false,
  },
  {
    id: "8",
    title: "2-Bedroom at Kumasi Ahodwo",
    type: "Two Bedroom",
    location: "Ahodwo, Kumasi",
    price: 900,
    description: "Spacious two-bedroom apartment in the heart of Kumasi. Modern finishes with great neighborhood amenities.",
    images: [twoBedroom],
    amenities: ["Water", "Electricity", "Kitchen", "Parking", "Security", "Balcony"],
    featured: false,
  },
];
