import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import GuitarImg from '../../../assest/MarketplacePage/items/TodayPick/guitar.png'
import CarImg from '../../../assest/MarketplacePage/items/TodayPick/car.png'

import GymBenchImg from '../../../assest/MarketplacePage/items/Sports/gym_bench.png'
import BikeImg from '../../../assest/MarketplacePage/items/Sports/bike.png'

import LabubuImg from '../../../assest/MarketplacePage/items/Toys/labubu.png'
import DualtronImg from '../../../assest/MarketplacePage/items/Toys/dualtron.png'

import SwimmingPoolImg from '../../../assest/MarketplacePage/items/Gardening/swimming_pool.png'

export type Product = {
  name: string,
  price: number,
  description?: string,
  image: StaticImport
}

export const TodayPick: Product[] = [
  {
    name: 'Grote Guitar',
    price: 1500,
    description: 'Grote water transfer printing electric guitar (Blue) - Grote Guitar',
    image: GuitarImg,
  },
  {
    name: 'Kia Picanto',
    price: 68000,
    description: 'Small, stylish, and sleek, Kias small car range will reinvent the way you look at small vehicles, defining a new standard for design and performance.',
    image: CarImg,
  },
]

export const Sport: Product[] = [
  {
    name: 'PASYOU Weight Bench',
    price: 441,
    description: 'Heavy Duty Workout Bench, Multi-Position Bench Press for Full Body Workout, Fitness Bench Press for Strength Training',
    image: GymBenchImg,
  },
  {
    name: 'Avatar 2.0 Electric Bike (Step Over)',
    price: 18573,
    description: 'The Avatar 2.0 electric bike is a robust, updated design. It can handle rugged terrain or work as a nippy city bike. It comes in step over (SO) and step through (ST) models.',
    image: BikeImg,
  },
]

export const Toy: Product[] = [
  {
    name: 'Labubu',
    price: 688,
    description: '🎏Pre-order🎏 POPMART LABUBU THE MONSTERS - Sit and Sit Party Vinyl Plush Blind Box',
    image: LabubuImg,
  },
  {
    name: 'DUALTRON ULTRA V2',
    price: 8500,
    description: 'The Dualtron Ultra is the master of all off road electric scooters. The Ultra packs a huge 5400 Watt BLDC motor with heat sinks and a massive 60V 32 Ah battery which will get you a maximum speed of around 85 km/h and a range of up to 120 km. ',
    image: DualtronImg,
  },
]

export const Gardening: Product[] = [
  {
    name: 'Swimming Pool',
    price: 2800,
    image: SwimmingPoolImg,
  },
]

export const Music: Product[] = [
  {
    name: 'Grote Guitar',
    price: 1500,
    description: 'Grote water transfer printing electric guitar (Blue) - Grote Guitar',
    image: GuitarImg,
  },
]