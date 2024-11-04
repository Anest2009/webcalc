import React from 'react';
import { Gift } from 'lucide-react';

interface PriceCustomizationProps {
  customPrice: number;
  discount: number;
  basePrice: number;
  finalPrice: number;
  onCustomPriceChange: (price: number) => void;
  onDiscountChange: (discount: number) => void;
}

export default function PriceCustomization({
  customPrice,
  discount,
  basePrice,
  finalPrice,
  onCustomPriceChange,
  onDiscountChange
}: PriceCustomizationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Price Customization</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Custom Price (optional)
          </label>
          <input
            type="number"
            value={customPrice || ''}
            onChange={(e) => onCustomPriceChange(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-300 hover:shadow-sm"
            placeholder="Enter your custom price"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Discount Percentage
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="50"
              value={discount}
              onChange={(e) => onDiscountChange(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="w-16 text-center bg-indigo-50 text-indigo-600 rounded-lg py-1 px-2 text-sm font-medium">
              {discount}%
            </span>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-xl border border-indigo-100/50 shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Market Price</span>
              <span className="font-semibold text-gray-800">${basePrice}</span>
            </div>
            {customPrice > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Custom Price</span>
                <span className="font-semibold text-gray-800">${customPrice}</span>
              </div>
            )}
            {discount > 0 && (
              <div className="flex justify-between items-center text-green-600">
                <span className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Discount Applied
                </span>
                <span className="font-semibold">-{discount}%</span>
              </div>
            )}
            <div className="pt-4 border-t border-indigo-100">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Final Price</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${finalPrice.toFixed(2)}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Including all features & discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}