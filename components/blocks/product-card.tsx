"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ProductImage } from "@/components/common/product-image";
import { IProduct } from "@/lib/types";

interface IProductCardProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  className,
}: IProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleAddToCart() {
    onAddToCart(product);
  }

  function handleToggleWishlist() {
    onToggleWishlist(product.id);
  }

  const discountPercentage = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) *
          100
      )
    : 0;

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <ProductImage
          src={product.image}
          alt={product.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay Actions */}
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            onClick={handleToggleWishlist}
            className="h-10 w-10"
          >
            <Heart
              className={`h-4 w-4 ${
                isWishlisted ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>
          <Button size="icon" variant="secondary" className="h-10 w-10" asChild>
            <Link href={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={handleAddToCart}
            className="h-10 w-10"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discountPercentage}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        {/* Product Title */}
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating!)
                      ? "text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount || 0})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}
