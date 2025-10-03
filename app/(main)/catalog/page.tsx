import type { Metadata } from "next";
import { ProductGrid } from "@/components/blocks/product-grid";
import { mockProducts } from "@/lib/data/mock-products";

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
