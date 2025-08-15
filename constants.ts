
import type { Organ } from './types';

export const ORGAN_DATA: Organ[] = [
  {
    id: 'brain',
    name: 'Creier',
    description: 'Centrul de comandă al corpului, responsabil pentru gândire, memorie și controlul mișcărilor.',
    style: { top: '5%', left: '42%', width: '16%', height: '10%' },
  },
  {
    id: 'lungs',
    name: 'Plămâni',
    description: 'Responsabili pentru respirație, aducând oxigen în sânge și eliminând dioxidul de carbon.',
    style: { top: '22%', left: '32%', width: '36%', height: '15%' },
  },
  {
    id: 'heart',
    name: 'Inimă',
    description: 'Pompează sângele în tot corpul, furnizând oxigen și nutrienți esențiali.',
    style: { top: '26%', left: '45%', width: '10%', height: '8%' },
  },
  {
    id: 'liver',
    name: 'Ficat',
    description: 'Filtrează toxinele din sânge, ajută la digestie și produce proteine importante.',
    style: { top: '37%', left: '51%', width: '18%', height: '10%' },
  },
  {
    id: 'stomach',
    name: 'Stomac',
    description: 'Descompune alimentele folosind acizi și enzime pentru a începe procesul de digestie.',
    style: { top: '38%', left: '35%', width: '15%', height: '10%' },
  },
  {
    id: 'kidneys',
    name: 'Rinichi',
    description: 'Filtrează deșeurile din sânge pentru a produce urină și mențin echilibrul fluidelor.',
    style: { top: '45%', left: '37%', width: '26%', height: '8%' },
  },
  {
    id: 'intestines',
    name: 'Intestine',
    description: 'Absorb nutrienții din alimentele digerate și elimină deșeurile.',
    style: { top: '48%', left: '35%', width: '30%', height: '18%' },
  },
];
