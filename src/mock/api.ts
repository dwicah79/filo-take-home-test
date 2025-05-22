export interface MenuItem {
  id: number
  name: string
  image: string
  price: string
  rating?: number
  variants?: string[]
}
export interface SpecialItem {
  id: number
  name: string
  image: string
  price: string
  rating: number
  description: string[]
}

export interface DeliveryItem {
  id: number
  name: string
  image: string
  description: string
}

export interface TestimonialItem {
  id: number
  name: string
  image: string
  description: string[]
}

export const getPopularMenus = (): MenuItem[] => [
  {
    id: 1,
    name: 'Vanilla Latte',
    image: 'vanilalatte.png',
    price: '21K',
    rating: 4.8,
    variants: ['Hot', 'Cold'],
  },
  {
    id: 2,
    name: 'Espresso',
    image: 'espresso.png',
    price: '12K',
    rating: 4.8,
    variants: ['Hot', 'Cold'],
  },
  {
    id: 3,
    name: 'Hazelnut Latte',
    image: 'hazelnutlatte.png',
    price: '23K',
    rating: 4.8,
    variants: ['Hot', 'Cold'],
  },
]

export const getDeliveryItems = (): DeliveryItem[] => [
  {
    id: 1,
    name: 'choose your coffee',
    image: 'imagecoffee.png',
    description: 'there are 20+ coffees for you',
  },
  {
    id: 2,
    name: 'we delivery it to you',
    image: 'food-truck.png',
    description: 'Choose delivery service',
  },
  {
    id: 3,
    name: 'enjoy your coffee',
    image: 'coffee-cup.png',
    description: 'Choose delivery service',
  },
]

export const getSpecialItems = (): SpecialItem[] => [
  {
    id: 1,
    name: 'Sandwich',
    description: 'Bread with meat and vegetables',
    price: '12 K',
    image: 'sandwich.png',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Hot Milk',
    description: 'Hot Milk with less sugar',
    price: '12 K',
    image: 'hot-milk.png',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Coffe Ice Cream',
    description: 'Coffe with ice cream vanilla',
    price: '12 K',
    image: 'coffee-ice-cream.png',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Cappucino',
    description: 'Hot Cappucino',
    price: '12 K',
    image: 'cappucino.png',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Moccacinno',
    description: 'Hot Moccacino',
    price: '12 K',
    image: 'moccacino.png',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Waffle Ice Crem',
    description: 'Waffle with Ice cream',
    price: '12 K',
    image: 'waffle.png',
    rating: 4.8,
  },
]

export const getTestimonialItems = (): TestimonialItem[] => [
  {
    id: 1,
    name: 'Naura',
    image: 'naura.png',
    description: 'I really love the cappucino, the coffee was very smooth  and creamy. I love it',
  },
  {
    id: 2,
    name: 'John',
    image: 'john.png',
    description: 'this coffee shop is very convenient',
  },
  {
    id: 3,
    name: 'Azura',
    image: 'azura.png',
    description: 'the coffee menu here is very much',
  },
]
