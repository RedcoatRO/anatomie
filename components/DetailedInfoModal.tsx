
import React from 'react';

interface DetailedInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  organName: string;
  isLoading: boolean;
  error: string | null;
  content: string;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
);

export const DetailedInfoModal: React.FC<DetailedInfoModalProps> = ({
  isOpen,
  onClose,
  organName,
  isLoading,
  error,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 border border-cyan-500/50 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-cyan-400">Informații Detaliate: {organName}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Închide fereastra"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 min-h-[200px] text-gray-300 leading-relaxed">
          {isLoading && <LoadingSpinner />}
          {error && <p className="text-red-400">{error}</p>}
          {!isLoading && !error && (
            <p>{content}</p>
          )}
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s forwards;
        }
      `}</style>
    </div>
  );
};
