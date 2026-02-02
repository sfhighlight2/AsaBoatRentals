
import { Trailer, Review } from './types';

export const TRAILERS: Trailer[] = [
  {
    id: 'jetski',
    name: 'Jet Ski / Dingy Aluminum Trailer',
    capacity: '3,000 lbs',
    length: 'Up to 18 feet',
    price: '$99/day',
    image: 'https://images.unsplash.com/photo-1695666752003-7b3b448f863d?auto=format&fit=crop&q=80&w=800',
    features: [
      'For jet ski, dingy or inflatable boats/tenders up to 18 feet',
      'Aluminum I beams, aluminum cross members, stainless steel hardware',
      'Digital tail lights, Torsion axles, Timken bearings, Dexter Hubs',
      'Good Year Endurance Tires & Nitrofill',
      'Equipped & Protected by Hub Saver',
      'Requires a 2" ball'
    ]
  },
  {
    id: 'tandem',
    name: 'Tandem Axle Trailers with Brakes',
    capacity: '6,000 lbs',
    length: '19 to 25 feet',
    price: '$125/day',
    image: 'https://images.unsplash.com/photo-1621235123018-8424075b28e5?auto=format&fit=crop&q=80&w=800',
    features: [
      'Excellent for jet drive and Shaft driven boats',
      'Plastic transport fenders, aluminum I beams, 6 aluminum cross members',
      'Stainless Kodiak brakes, Stainless Steel brake pads on all axles/wheels',
      'Heavy duty Timken bearings and Dexter hubs',
      'Good Year Endurance 10 ply Tires & Nitrofill',
      'Equipped & Protected by Hub Saver',
      'Requires a 2" ball'
    ]
  },
  {
    id: 'hd-tandem',
    name: 'HD Tandem Axle Trailers with Brakes',
    capacity: '12,500 lbs',
    length: '25 to 30 feet',
    price: '$125/day',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    features: [
      'Aluminum 8" I beams, 7 aluminum cross members',
      'Stainless steel hardware, digital tail lights',
      'Stainless Kodiak brakes, stainless steel brake pads on all axles/wheels',
      '16" wheels and heavy duty 8 lug hubs, heavy duty Timken bearings',
      'Dexter Tie Down Eliminator Axles & Hubs',
      '12 ply tires & Nitrofill',
      'Requires a 2 5/16" ball'
    ]
  },
  {
    id: 'pontoon',
    name: 'Pontoon & Tritoon Trailers',
    capacity: '10,000 lbs',
    length: '16 to 33 feet',
    price: '$150/day',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800',
    features: [
      'Pontoon/Tritoon trailer fully adjustable for any width',
      'Torsion axles, Dexter Brakes on all axles',
      'Timken Bearings & GoodYear Tire',
      'Equipped & Protected by Hub Saver'
    ]
  },
  {
    id: 'triple',
    name: 'Triple Axle Trailers with Electric Brakes',
    capacity: '24,000 lbs',
    length: '30 to 36 feet',
    price: '$150/day',
    image: 'https://images.unsplash.com/photo-1610448721566-473f9c768e70?auto=format&fit=crop&q=80&w=800',
    features: [
      'Aluminum 10 Inch I Beams, 10 aluminum cross members',
      'Custom V bend torsion axles, stainless steel hardware',
      'Stainless Kodiak electric brakes, stainless steel pads on all axles/wheels',
      '16" tires and 8 lug hubs, 2 spare tires and hubs',
      '16" 14 ply Sailun tires with Kodiak 5/8 studs',
      'Requires a 2 5/16" ball'
    ]
  },
  {
    id: 'hd-triple',
    name: 'HD Triple Axle Trailers with Electric Brakes',
    capacity: '30,000 lbs',
    length: '36 to 40 feet',
    price: '$175/day',
    image: 'https://images.unsplash.com/photo-1598502381251-15a0c84c1766?auto=format&fit=crop&q=80&w=800',
    features: [
      'Aluminum 12 Inch I Beams, 10 aluminum cross members',
      'HydraPro stopping power, Stainless DeeMaxx electric brakes',
      'Stainless steel pads on all axles/wheels, 8 lug hubs',
      '2 spare tires and hubs, heavy duty Timken bearings',
      '17.5" with 18 ply Sailun tires with Kodiak 5/8 studs',
      'Requires a 2 5/16" ball'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Bert G.',
    platform: 'google',
    rating: 5,
    text: "I was in a serious jam — had my trailer stolen and spring break in the Keys for my kids would have been screwed without these guys. Albert personally made sure we were taken care of. Premium gear, saved our vacation.",
    date: '1 week ago',
    avatar: 'https://i.pravatar.cc/150?u=bert'
  },
  {
    id: 'r2',
    author: 'Rose M.',
    platform: 'facebook',
    rating: 5,
    text: "The perfect trailer for picking up my new center console. Everything was 2026 equipment, clean, and functional. No junk here. The stainless hardware is a game changer for salt water.",
    date: '3 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=rose'
  },
  {
    id: 'r3',
    author: 'Yeni S.',
    platform: 'google',
    rating: 5,
    text: "Last minute call on a Sunday and they had a trailer ready for us in 30 minutes. The $2M liability coverage gave me total peace of mind for the long tow to West Palm.",
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?u=yeni'
  }
];

export const LOCATIONS_DETAILS = [
  { name: "PEMBROKE PINES", sub: "ASA BOAT TRAILER RENTAL" },
  { name: "MIAMI BEACH", sub: "MEMBERS ONLY" },
  { name: "MIAMI", sub: "ASA BOAT TRAILER RENTAL" },
  { name: "WEST PALM BEACH", sub: "ASA BOAT TRAILER RENTAL" },
  { name: "MEDLEY", sub: "ASA BOAT TRAILER RENTAL" },
  { name: "FORT LAUDERDALE", sub: "ASA BOAT TRAILER RENTAL" }
];
