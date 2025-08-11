import { Product } from '../components/ProductCard';

export const products: Product[] = [
  {
    id: '1',
    name: 'DATSUN',
    description: 'Vintage automotive art piece featuring classic Datsun design elements',
    price: 2500,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '001',
    numberFrame: 'Frame A1',
    videoLinks: ['https://example.com/video1'],
    available: true
  },
  {
    id: '2',
    name: 'FERRARI CLASSIC',
    description: 'Iconic Ferrari artwork capturing the essence of Italian automotive excellence',
    price: 3200,
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '002',
    numberFrame: 'Frame B2',
    videoLinks: [],
    available: false
  },
  {
    id: '3',
    name: 'PORSCHE LEGEND',
    description: 'Timeless Porsche design captured in exclusive artistic form',
    price: 2800,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '003',
    numberFrame: 'Frame C3',
    videoLinks: ['https://example.com/video2', 'https://example.com/video3'],
    available: true
  },
  {
    id: '4',
    name: 'LAMBORGHINI DREAM',
    description: 'Bold Lamborghini artwork representing power and luxury',
    price: 3500,
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '004',
    numberFrame: 'Frame D4',
    videoLinks: [],
    available: true
  },
  {
    id: '5',
    name: 'MCLAREN VISION',
    description: 'Futuristic McLaren design showcasing innovation and speed',
    price: 4000,
    image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '005',
    numberFrame: 'Frame E5',
    videoLinks: ['https://example.com/video4'],
    available: false
  },
  {
    id: '6',
    name: 'ASTON MARTIN ELEGANCE',
    description: 'Sophisticated Aston Martin piece embodying British luxury',
    price: 3800,
    image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    idCode: '006',
    numberFrame: 'Frame F6',
    videoLinks: [],
    available: true
  }
];