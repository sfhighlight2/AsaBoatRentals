
export interface Trailer {
  id: string;
  name: string;
  capacity: string;
  length: string;
  price: string;
  image: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  platform: 'google' | 'facebook' | 'yelp';
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export enum TrailerType {
  SINGLE_AXLE = 'Single Axle',
  TANDEM_AXLE = 'Tandem Axle',
  TRIPLE_AXLE = 'Triple Axle'
}
