import type { Organ } from './types';

// By embedding the image as a Base64 string, we ensure it always loads
// and remove the dependency on external hosting services.
export const HUMAN_BODY_IMAGE_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIbGNtcwIQAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGVAAAAABzYXdzY3RybAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWhhbmRhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAB1Hb29nbGUgSW5jLiAyMDExAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAtkc2NtAAAAAAAAAA9WZXJzaW9uIDAuOS45OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlwYXJhAAAAAAAEAAAAAGJYWVoAAAEAAAAAPFhZWgAAAgAAAB9YWVogAAACfwAAACBCbWFnYwAAA0AAAAAAY2hybQAAA1wAAAAjd2h0cAAAA5gAAAAUY2FsdAAAADqgAAAAbGt0cnMAAEKgAAABImNwcnQAAAFQAAAAQ2Rlc2MAAAAAAAAAGEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABhHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1sdWMAAAAAAAAAHwAAAAxockhSAAAAFgAAAhxwcFRCAAkAAAAcAAAImmtvS1IAAAAYAAACfHB0QlIAAAAYAAACpHBseGMAAAAWAAACxGRhREsAAAAaAAAC5G5iTk8AAAAWAAADEGZpRkkAAAAQAAADJGl0SVQAAAAYAAADPG5sTkwAAAAWAAADZGh1Uk8AAAAaAAADjGNzQ1oAAAAWAAADomphSlAAAAAYAAADtHJvUk8AAAAUAAADzHZpVk4AAAAWAAAEAmFyRUcAAAAYAAAEFGRlQ0IAAAAmAAAEKmltSUQAAAAsAAAEbGR1Uk0AAAAmAAAEdGRlREUAAAAaAAAEpGlzSEkAAAAkAAAEzGZybkYAAAAWAAAFBGhlSUwAAAAWAAAFHnB0UE8AAAAaAAAFNGVsR1AAAAAkAAAFYnJ1UlUAAAAiAAAFhGVuVVMAAAAWAAAFngBTAGEAZgBlACAAYwBvAGwAbwByACAAcAByAG8AZgBpAGwAZQBQAGUAcgBmAGkAbAAgAGQAZQAgAGMAbwByACAAcwBlAGcAdQByAG8AUAByAG8AZgBpAGwAIABkAGUAIABjAG8AcgBlAHMAIABzAGUAZwB1AHIAbwBLAG8AbABvAHIAcAByAG8AZgBpAGwAIABzAGkAZwB1AHIAYQBqAEMAbwBsAG8AcgAgAFAAcgBvAGYAaQBsACAAcwBlAGMAdQByAGkAdABlAEcAZQBuAGUAcgBpAGMAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGUAUgBHAEIAIABHAHIAYQB5ACAAUAByAG8AZgBpAGwAZQBQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6AByAGkAYwBvAFAAcgBvAGYAaQBsACAAUgBHAEIAIABHAGUAbgDpAHIAaQBjAG8AQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbABHAGEAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAUgBHAEIAUgBHAEIAIABDAG8AbABvAHIAIABQAHIAbwBmAGkAbABlAEIAYQBzAGkAcwBrACAAUgBHAEIALQBwAHIAbwBmAGkAbABRAHEAdQAgAGgA7ABuAGgAIABiAGUAcwBzAGUAZgBpAGUAbAAgAFIARwBCAC0AcAByAG8AZgBpAGwEMgQ1BEIEPgQwBDwEOQAgBD8EQAQ+BEAEMAQ5BDsEPgRABDAEMAQ4BDsAQwBvAGwAbwByACAAZwBlAG4A6QByAGkAYwBvACAAUgBHAEIASgBlAG4AZQByAGkAEwBuAGkAIABSAEcAQgAgAGsAbwBsAG8AcgBwAHIAbwBmAGkAbABQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6QByAGkAYwBvAE8AYgBlAGMAbgDhACAAUgBHAEIAIABwAHIAbwBmAGkAbABQAHIAbwBmAGkAbAAgAFIARwBCACAAZwBlAG4AZQByAGUAbgBjAGkAWQBsAGQAZQBpAG4AZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAaQBsAGkAUAByAG8AZgA/AGkAbAAgAGMAbwBsAG8AcgAgAFIARwBCACAAZwBlAG4AZQByAGkAYwEDAGkARwBCACBhAGwAZwBlAG0AZQBlAG4AIABwAHIAbwBmAGkAZQBsAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDpAHIAaQBjAABURURUAAAAAQAAAAAEAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAABgPAAA9cAAAD1JWFlaIAAAAAAAACJWAAA4agAA5hBYWVogAAAAAAAAJ30BAD0k//8ADwAAAAAAAAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCgICAgkKCgoKCgoKCgwMDAwMDAz/2wBDAQEBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCgICAgkKCgoKCgoKCgwMDAwMDAz/wAARCAfQBiADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1VZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+z/2f/wDkTb3/AK/5P/RSV6VXmv7P/wDyJt7/ANf8n/opK9Kr1anxfcU/iCiiioICiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA....';

export const ORGAN_DATA: Organ[] = [
  // --- Main System Labels ---
  {
    id: 'skeletal-system',
    name: 'Sistemul scheletic',
    description: 'Oferă structură, suport și protecție. Include oasele, cartilajele și ligamentele.',
    style: { top: '11.5%', left: '47%', width: '15%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'muscular-system',
    name: 'Sistemul muscular',
    description: 'Permite mișcarea, menține postura și generează căldură.',
    style: { top: '17.5%', left: '47%', width: '15%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'cardiovascular-system',
    name: 'Sistemul cardiovascular',
    description: 'Transportă sânge, oxigen, nutrienți și hormoni prin corp.',
    style: { top: '23.5%', left: '47%', width: '17%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'lymphatic-system',
    name: 'Sistemul limfatic',
    description: 'Parte a sistemului imunitar, ajută la protejarea corpului împotriva bolilor.',
    style: { top: '31.5%', left: '55%', width: '15%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'digestive-system',
    name: 'Sistemul digestiv',
    description: 'Procesează alimentele, absoarbe nutrienții și elimină deșeurile.',
    style: { top: '47.5%', left: '55%', width: '15%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'urinary-system',
    name: 'Sistemul urinar',
    description: 'Produce, stochează și elimină urina, filtrând sângele.',
    style: { top: '57.5%', left: '55%', width: '15%', height: '4%', cursor: 'pointer' },
  },
  {
    id: 'reproductive-system',
    name: 'Sistemul reproducător',
    description: 'Setul de organe necesare pentru reproducere.',
    style: { top: '67.5%', left: '55%', width: '17%', height: '4%', cursor: 'pointer' },
  },

  // --- Side Diagrams ---
  {
    id: 'brain-diagram',
    name: 'Creierul',
    description: 'Centrul de comandă al sistemului nervos.',
    style: { top: '9%', left: '80%', width: '15%', height: '13%', cursor: 'pointer' },
  },
  {
    id: 'eye-diagram-right',
    name: 'Ochiul',
    description: 'Organul vederii care detectează lumina.',
    style: { top: '33%', left: '84%', width: '12%', height: '9%', cursor: 'pointer' },
  },
    {
    id: 'skin-diagram',
    name: 'Pielea',
    description: 'Cel mai mare organ, formând o barieră protectoare.',
    style: { top: '59%', left: '79%', width: '15%', height: '12%', cursor: 'pointer' },
  },
  {
    id: 'ear-diagram',
    name: 'Urechea',
    description: 'Organul auzului și echilibrului.',
    style: { top: '9%', left: '5%', width: '15%', height: '13%', cursor: 'pointer' },
  },
  {
    id: 'heart-diagram',
    name: 'Inima',
    description: 'Pompează sânge prin sistemul circulator.',
    style: { top: '23%', left: '4%', width: '16%', height: '10%', cursor: 'pointer' },
  },
  {
    id: 'eye-diagram-left',
    name: 'Ochiul',
    description: 'Organul vederii care detectează lumina.',
    style: { top: '34%', left: '4%', width: '16%', height: '9%', cursor: 'pointer' },
  },
  {
    id: 'vertebrae-diagram',
    name: 'Vertebrele',
    description: 'Oasele care formează coloana vertebrală.',
    style: { top: '44%', left: '4%', width: '16%', height: '11%', cursor: 'pointer' },
  },
   {
    id: 'hand-bones-diagram',
    name: 'Oasele mâinii',
    description: 'Structura osoasă a mâinii umane.',
    style: { top: '56%', left: '4%', width: '16%', height: '11%', cursor: 'pointer' },
  },
  {
    id: 'teeth-diagram',
    name: 'Dentiția',
    description: 'Ansamblul dinților din cavitatea bucală.',
    style: { top: '68%', left: '4%', width: '16%', height: '11%', cursor: 'pointer' },
  },
  {
    id: 'foot-bones-diagram',
    name: 'Oasele piciorului',
    description: 'Structura osoasă a piciorului uman.',
    style: { top: '73%', left: '80%', width: '16%', height: '11%', cursor: 'pointer' },
  }
];
