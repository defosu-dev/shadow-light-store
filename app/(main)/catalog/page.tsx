import type { Metadata } from "next";
import { ProductGrid } from "@/components/blocks/product-grid";

// Mock data - will be replaced with Shopify API
const mockProducts = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 199.99,
    compareAtPrice: 249.99,
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
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
    image: "/api/placeholder/300/300",
    category: "Accessories",
    inStock: true,
    rating: 4.7,
    reviewCount: 92,
    tags: ["Leather", "RFID Blocking", "Premium"],
  },
];

export const metadata: Metadata = {
  title: "Product Catalog | Shadow Light Store",
  description:
    "Discover our wide selection of premium products including electronics, clothing, home goods, and accessories. Quality guaranteed with fast shipping.",
  keywords: [
    "product catalog",
    "electronics",
    "clothing",
    "home goods",
    "accessories",
    "premium products",
  ],
  openGraph: {
    title: "Product Catalog | Shadow Light Store",
    description:
      "Discover our wide selection of premium products including electronics, clothing, home goods, and accessories.",
    type: "website",
  },
};

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Product Catalog</h1>
          <p className="text-muted-foreground">
            Discover our wide selection of premium products
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid products={mockProducts} />
      </div>
    </div>
  );
}
