export interface CityPrice {
  hotel: string;
  meal: string;
  transport: string;
}

export interface CityCoordinates {
  latitude: number;
  longitude: number;
}

export interface City {
  id?: string;
  name: string;
  description: string;
  imageUrl: string;
  bestTimeToVisit: string;
  averagePrice: CityPrice;
  currency: string;
  language: string;
  mustSee: string[];
  coordinates: CityCoordinates;
  created?: Date;
  updated?: Date;
  slug?: string;
} 