import React, { useState } from 'react';
import Header from './components/Header';
import FeatureOption from './components/FeatureOption';
import PriceCustomization from './components/PriceCustomization';

interface PricingOption {
  id: string;
  label: string;
  basePrice: number;
  selected: boolean;
}

function App() {
  const [options, setOptions] = useState<PricingOption[]>([
    { id: 'design', label: 'Custom Design', basePrice: 1200, selected: false },
    { id: 'responsive', label: 'Responsive Design', basePrice: 800, selected: false },
    { id: 'cms', label: 'Content Management System', basePrice: 1500, selected: false },
    { id: 'seo', label: 'SEO Optimization', basePrice: 600, selected: false },
    { id: 'security', label: 'Security Features', basePrice: 900, selected: false },
    { id: 'performance', label: 'Performance Optimization', basePrice: 700, selected: false },
  ]);

  const [customPrice, setCustomPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const calculateBasePrice = () => {
    return options.reduce((sum, option) => 
      option.selected ? sum + option.basePrice : sum, 2000);
  };

  const calculateFinalPrice = () => {
    const basePrice = calculateBasePrice();
    const finalPrice = customPrice > 0 ? customPrice : basePrice;
    return finalPrice - (finalPrice * (discount / 100));
  };

  const toggleOption = (id: string) => {
    setOptions(options.map(option =>
      option.id === id ? { ...option, selected: !option.selected } : option
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/50">
      <Header />
      
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-gray-100">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Project Features</h2>
                <div className="space-y-4">
                  {options.map(option => (
                    <FeatureOption
                      key={option.id}
                      {...option}
                      onToggle={toggleOption}
                    />
                  ))}
                </div>
              </div>

              <PriceCustomization
                customPrice={customPrice}
                discount={discount}
                basePrice={calculateBasePrice()}
                finalPrice={calculateFinalPrice()}
                onCustomPriceChange={setCustomPrice}
                onDiscountChange={setDiscount}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;