import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shadow Light Store",
  description:
    "Learn about Shadow Light Store's mission to provide premium quality products with exceptional customer service and unbeatable prices.",
  keywords: ["about us", "company", "mission", "quality", "customer service"],
  openGraph: {
    title: "About Us | Shadow Light Store",
    description:
      "Learn about Shadow Light Store's mission to provide premium quality products with exceptional customer service.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Shadow Light Store</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in premium e-commerce
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At Shadow Light Store, we believe in delivering exceptional quality
            products that enhance your lifestyle. Our mission is to provide you
            with carefully curated items that combine style, functionality, and
            value.
          </p>

          <h2>Our Mission</h2>
          <p>
            To make premium products accessible to everyone while maintaining
            the highest standards of quality and customer service. We&apos;re
            committed to your satisfaction and strive to exceed your
            expectations with every purchase.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Premium quality products from trusted brands</li>
            <li>Fast and reliable shipping worldwide</li>
            <li>30-day return policy with no questions asked</li>
            <li>24/7 customer support</li>
            <li>Secure payment processing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
