
import type { Organ } from './types';

export const ORGAN_DATA: Organ[] = [
  // Main body systems
  {
    id: 'skeletal-system',
    name: 'Sistemul scheletic',
    description: 'Oferă structură, suport și protecție pentru corp. Include oase, cartilaje și ligamente.',
    style: { top: '12%', left: '47%', width: '5%', height: '6%' },
  },
  {
    id: 'muscular-system',
    name: 'Sistemul muscular',
    description: 'Permite mișcarea, menține postura și generează căldură. Compus din mușchi scheletici, netezi și cardiaci.',
    style: { top: '18%', left: '70%', width: '8%', height: '10%' },
  },
  {
    id: 'cardiovascular-system',
    name: 'Sistemul cardiovascular',
    description: 'Transportă sânge, oxigen, nutrienți și hormoni. Include inima, arterele și venele.',
    style: { top: '26%', left: '47%', width: '5%', height: '7%' },
  },
  {
    id: 'lymphatic-system',
    name: 'Sistemul limfatic',
    description: 'Parte a sistemului imunitar, ajută la protejarea corpului împotriva bolilor.',
    style: { top: '32%', left: '55%', width: '5%', height: '8%' },
  },
  {
    id: 'digestive-system',
    name: 'Sistemul digestiv',
    description: 'Procesează alimentele, absoarbe nutrienții și elimină deșeurile.',
    style: { top: '43%', left: '44%', width: '11%', height: '14%' },
  },
  {
    id: 'urinary-system',
    name: 'Sistemul urinar',
    description: 'Produce, stochează și elimină urina, filtrând sângele pentru a menține echilibrul apei.',
    style: { top: '60%', left: '48%', width: '4%', height: '6%' },
  },
  {
    id: 'reproductive-system',
    name: 'Sistemul reproducător',
    description: 'Setul de organe necesare pentru reproducere.',
    style: { top: '68%', left: '48%', width: '4%', height: '6%' },
  },

  // Side diagrams
  {
    id: 'brain-diagram',
    name: 'Creierul',
    description: 'Centrul de comandă al sistemului nervos, responsabil pentru gândire, simțuri și controlul corpului.',
    style: { top: '4%', left: '10%', width: '10%', height: '10%' },
  },
  {
    id: 'heart-diagram',
    name: 'Inima',
    description: 'Organ muscular care pompează sânge prin sistemul circulator prin contracții ritmice.',
    style: { top: '20%', left: '8%', width: '10%', height: '9%' },
  },
  {
    id: 'eye-diagram',
    name: 'Ochiul',
    description: 'Organul vederii care detectează lumina și o convertește în impulsuri electrochimice în neuroni.',
    style: { top: '29%', left: '8%', width: '10%', height: '8%' },
  },
    {
    id: 'skin-diagram',
    name: 'Pielea',
    description: 'Cel mai mare organ al corpului, formând o barieră protectoare împotriva agenților patogeni și a leziunilor.',
    style: { top: '60%', left: '80%', width: '10%', height: '10%' },
  },
];
