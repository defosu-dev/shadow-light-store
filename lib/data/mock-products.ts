import { IProduct } from "@/lib/types";

export const mockProducts: IProduct[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 199.99,
    compareAtPrice: 249.99,
    image: "https://invalid-url-for-testing.com/image1.jpg",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    tags: ["Wireless", "Noise Cancelling", "Premium"],
  },
  {
    id: "2",
    title: "Smart Fitness Watch",
    description:
      "Advanced fitness tracking with heart rate monitoring and GPS capabilities.",
    price: 299.99,
    image: "https://invalid-url-for-testing.com/image2.jpg",
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    tags: ["Fitness", "Smart Watch", "GPS"],
  },
  {
    id: "3",
    title: "Organic Cotton T-Shirt",
    description:
      "Comfortable and sustainable organic cotton t-shirt in various colors.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    category: "Clothing",
    inStock: true,
    rating: 4.2,
    reviewCount: 256,
    tags: ["Organic", "Cotton", "Sustainable"],
  },
  {
    id: "4",
    title: "Minimalist Desk Lamp",
    description:
      "Sleek and modern desk lamp with adjustable brightness and USB charging port.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    category: "Home",
    inStock: false,
    rating: 4.6,
    reviewCount: 67,
    tags: ["Minimalist", "USB Charging", "Adjustable"],
  },
  {
    id: "5",
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    price: 89.99,
    compareAtPrice: 119.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.4,
    reviewCount: 143,
    tags: ["Bluetooth", "Portable", "Waterproof"],
  },
  {
    id: "6",
    title: "Leather Wallet",
    description:
      "Genuine leather wallet with RFID blocking technology and multiple card slots.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    tags: ["Leather", "RFID Blocking", "Premium"],
  },
];

export const featuredProducts = mockProducts.slice(0, 3);
