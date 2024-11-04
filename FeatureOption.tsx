import React from 'react';
import { Palette, Smartphone, Globe2, Database, Shield, Gauge } from 'lucide-react';

interface FeatureOptionProps {
  id: string;
  label: string;
  basePrice: number;
  selected: boolean;
  onToggle: (id: string) => void;
}

export default function FeatureOption({ id, label, basePrice, selected, onToggle }: FeatureOptionProps) {
  const getIcon = (id: string) => {
    const iconProps = { className: "w-5 h-5" };
    switch(id) {
      case 'design': return <Palette {...iconProps} />;
      case 'responsive': return <Smartphone {...iconProps} />;
      case 'cms': return <Database {...iconProps} />;
      case 'seo': return <Globe2 {...iconProps} />;
      case 'security': return <Shield {...iconProps} />;
      case 'performance': return <Gauge {...iconProps} />;
      default: return null;
    }
  };

  return (
    <div
      onClick={() => onToggle(id)}
      className={`group p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
        selected
          ? 'border-indigo-500 bg-indigo-50/50 shadow-indigo-100'
          : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors duration-300 ${
            selected ? 'bg-indigo-100' : 'bg-gray-100 group-hover:bg-indigo-50'
          }`}>
            {getIcon(id)}
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{label}</h3>
            <p className="text-sm text-gray-500">Starting from <span className="font-semibold text-indigo-600">${basePrice}</span></p>
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
          selected
            ? 'border-indigo-500 bg-indigo-500 shadow-sm shadow-indigo-200'
            : 'border-gray-200 group-hover:border-indigo-300'
        }`}>
          {selected && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}