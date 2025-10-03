export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images?: string[];
  tags?: string[];
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  category: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  isActive: boolean;
}

export interface ICartItem {
  id: string;
  product: IProduct;
  quantity: number;
  price: number;
}

export interface IAppError {
  code: string;
  message: string;
  statusCode: number;
}
