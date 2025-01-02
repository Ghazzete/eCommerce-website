"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { urlFor } from "../lib/sanity";
import { useRouter } from "next/navigation"; // Updated to use next/navigation for app router compatibility

// Define the props type for the component
interface ProductCart {
  currency: string;
  description: string;
  image: any; // Adjust based on your sanity image type
  name: string;
  price: number;
  price_id: string;
}

const CheckoutNow: React.FC<ProductCart> = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}) => {
  const router = useRouter(); // Updated for Next.js app directory compatibility

  // Function to handle checkout and redirect
  const handleCheckout = () => {
    const productDetails = {
      name,
      description,
      price,
      currency,
      image: urlFor(image).url(), // Generate the image URL using your Sanity helper
      price_id,
    };

    // Save the product details to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("productDetails", JSON.stringify(productDetails));
    }

    // Navigate to the custom checkout page
    router.push("/checkout");
  };

  return (
    <Button
      variant="outline"
      onClick={handleCheckout}
      className="bg-primary text-white hover:bg-purple-600 transition duration-300 rounded-md px-4 py-2"
    >
      Checkout Now
    </Button>
  );
};
export default CheckoutNow;