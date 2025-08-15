
import React from 'react';
import type { Organ } from '../types';

interface OrganTooltipProps {
  organ: Organ;
  position: { x: number; y: number };
}

export const OrganTooltip: React.FC<OrganTooltipProps> = ({ organ, position }) => {
  return (
    <div
      className="absolute p-3 bg-gray-800/90 backdrop-blur-sm border border-cyan-500 rounded-lg shadow-xl pointer-events-none transition-opacity duration-200 animate-fade-in z-10 max-w-xs"
      style={{ 
        left: `${position.x + 15}px`, 
        top: `${position.y + 15}px`,
        transform: 'translateY(-100%)',
      }}
    >
      <h3 className="font-bold text-lg text-cyan-400">{organ.name}</h3>
      <p className="text-sm text-gray-300">{organ.description}</p>
    </div>
  );
};
