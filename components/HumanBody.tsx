
import React, { useState } from 'react';
import { ORGAN_DATA } from '../constants';
import type { Organ } from '../types';
import { OrganTooltip } from './OrganTooltip';

interface HumanBodyProps {
  onOrganClick: (organ: Organ) => void;
}

export const HumanBody: React.FC<HumanBodyProps> = ({ onOrganClick }) => {
  const [hoveredOrgan, setHoveredOrgan] = useState<Organ | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="relative w-full aspect-[1/2] max-w-md mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredOrgan(null)}
    >
      <img
        src="https://storage.googleapis.com/pai-images/f28e463a566649c2b4d9b4c062a4d35f.png"
        alt="Corpul Uman"
        className="w-full h-full object-contain"
      />
      {ORGAN_DATA.map((organ) => (
        <div
          key={organ.id}
          className="absolute rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-cyan-400/30 hover:backdrop-blur-sm"
          style={organ.style}
          onMouseEnter={() => setHoveredOrgan(organ)}
          onClick={() => onOrganClick(organ)}
          aria-label={`Informații despre ${organ.name}`}
        />
      ))}
      {hoveredOrgan && <OrganTooltip organ={hoveredOrgan} position={mousePosition} />}
    </div>
  );
};
