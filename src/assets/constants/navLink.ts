import {
  HomeIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Search",
    path: "/search",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: ShoppingCartIcon,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserCircleIcon,
  },
];

export const reviewImages = [
  {
    id: 1,
    path: "/images/avatars/user-avatar-1.png",
  },
  {
    id: 2,
    path: "/images/avatars/user-avatar-2.png",
  },
  {
    id: 3,
    path: "/images/avatars/user-avatar-3.png",
  },
  {
    id: 4,
    path: "/images/avatars/user-avatar-4.png",
  },
];
