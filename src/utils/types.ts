export type productItem = {
  id: number;
  name: string;
  popularity: number;
  category: { id: number; name: string };
  rooms: { id: number; name: string }[];
  info: string[][];
  price: number;
  images: string[];
  discount?: number;
};
