import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Shadow Light Store",
  description:
    "Sign in to your Shadow Light Store account to access your orders, wishlist, and personalized shopping experience.",
  keywords: ["sign in", "login", "account", "authentication"],
  openGraph: {
    title: "Sign In | Shadow Light Store",
    description:
      "Sign in to your Shadow Light Store account to access your orders, wishlist, and personalized shopping experience.",
    type: "website",
  },
};

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-muted-foreground text-center">
          Sign in to your account to continue shopping
        </p>
      </div>
    </div>
  );
}
