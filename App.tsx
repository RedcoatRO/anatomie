
import React, { useState, useCallback } from 'react';
import { HumanBody } from './components/HumanBody';
import { DetailedInfoModal } from './components/DetailedInfoModal';
import { fetchOrganDetails } from './services/geminiService';
import type { Organ } from './types';

const App: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<Organ | null>(null);
  const [detailedInfo, setDetailedInfo] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOrganClick = useCallback(async (organ: Organ) => {
    setSelectedOrgan(organ);
    setIsLoading(true);
    setError(null);
    setDetailedInfo('');
    try {
      const info = await fetchOrganDetails(organ.name);
      setDetailedInfo(info);
    } catch (e) {
      console.error(e);
      setError('A apărut o eroare la preluarea informațiilor. Vă rugăm să încercați din nou.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const closeModal = () => {
    setSelectedOrgan(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-wider">
          Anatomie Interactivă
        </h1>
        <p className="text-lg text-gray-400 mt-2 max-w-2xl">
          Treceți mouse-ul peste un organ pentru o descriere rapidă sau dați click pentru informații detaliate generate de AI.
        </p>
      </header>
      
      <main className="w-full max-w-lg mx-auto">
        <HumanBody onOrganClick={handleOrganClick} />
      </main>

      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Creat cu React, Tailwind CSS și Google Gemini API.</p>
      </footer>

      {selectedOrgan && (
        <DetailedInfoModal
          isOpen={!!selectedOrgan}
          onClose={closeModal}
          organName={selectedOrgan.name}
          isLoading={isLoading}
          error={error}
          content={detailedInfo}
        />
      )}
    </div>
  );
};

export default App;
