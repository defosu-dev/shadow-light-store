import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Shadow Light Store",
  description: "Create your Shadow Light Store account to enjoy personalized shopping, order tracking, and exclusive offers.",
  keywords: ["sign up", "register", "create account", "new user"],
  openGraph: {
    title: "Sign Up | Shadow Light Store",
    description: "Create your Shadow Light Store account to enjoy personalized shopping, order tracking, and exclusive offers.",
    type: "website",
  },
};

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <p className="text-muted-foreground text-center">
          Create your account to start shopping
        </p>
      </div>
    </div>
  );
}
