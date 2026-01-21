import { User, Heart, Home, Search, Share, Timer, ChefHat, Users, Flame, ShoppingBasket, Leaf, Lightbulb, Sprout } from 'lucide-react-native'

export const icons = {
  user: User,
  heart: Heart,
  home: Home,
  search: Search,
  share: Share,
  timer: Timer,
  chefHat: ChefHat,
  users: Users,
  flame: Flame,
  shoppingBasket: ShoppingBasket,
  leaf: Leaf,
  lightbulb: Lightbulb,
  sprout: Sprout,
}

export type IconName = keyof typeof icons
