export interface MenuItem {
  id: number
  name: string
  image: string
  price: string
  rating?: number
  variants?: string[]
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
