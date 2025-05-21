export interface MenuItem {
  id: number
  name: string
  image: string
  price: string
  rating?: number
  variants?: string[]
}

export interface DeliveryItem {
  id: number
  name: string
  image: string
  description: string
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
