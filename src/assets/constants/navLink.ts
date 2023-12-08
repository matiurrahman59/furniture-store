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
