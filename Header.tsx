import React from 'react';
import { Calculator } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <Calculator className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Web Development Cost Calculator</h1>
            <p className="mt-2 text-indigo-100">Calculate your project cost based on features and requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
}