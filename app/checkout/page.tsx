"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Checkout
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            />
          </div>

          {/* Payment Options */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Payment Method
            </label>
            <div className="mt-2 space-y-2">
              {["Credit Card", "Bank Transfer", "Cash on Delivery"].map((method) => (
                <motion.div
                  key={method}
                  whileHover={{ scale: 1.05 }}
                  className={`border rounded-md p-3 cursor-pointer ${
                    paymentMethod === method
                      ? "bg-indigo-100 border-indigo-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handlePaymentChange(method)}
                >
                  <span className="text-gray-700 font-medium">{method}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conditional Fields */}
          {paymentMethod === "Credit Card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                  required
                />
              </div>
              <div className="flex space-x-4 mt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-300 transition-all"
          >
            Confirm Payment
          </button>
        </form>
      </motion.div>
    </div>
  );
}
