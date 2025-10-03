import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Truck, Shield, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Shadow Light Store - Premium E-commerce Experience",
  description:
    "Discover our curated collection of premium products with exceptional quality and unbeatable prices. Free shipping, secure payments, and quality guarantee.",
  keywords: [
    "e-commerce",
    "premium products",
    "online shopping",
    "quality guarantee",
    "free shipping",
  ],
  openGraph: {
    title: "Shadow Light Store - Premium E-commerce Experience",
    description:
      "Discover our curated collection of premium products with exceptional quality and unbeatable prices.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to{" "}
              <span className="text-primary">Shadow Light Store</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium products with
              exceptional quality and unbeatable prices. Your satisfaction is
              our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to providing you with the best shopping
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 mx-auto text-primary" />
                <CardTitle>Free Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Free shipping on orders over $50. Fast and reliable delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-primary" />
                <CardTitle>Secure Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your payment information is safe and secure with us.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <RefreshCw className="h-12 w-12 mx-auto text-primary" />
                <CardTitle>Easy Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  30-day return policy. No questions asked.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-primary" />
                <CardTitle>Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Premium quality products backed by our guarantee.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our most popular items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Product {item}</CardTitle>
                    <Badge variant="secondary">New</Badge>
                  </div>
                  <CardDescription>
                    High-quality product description goes here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">$99.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
