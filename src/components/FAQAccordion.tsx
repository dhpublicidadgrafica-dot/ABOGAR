import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  // Default first item opened for immediate engagement
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        const questionId = `faq-q-${idx}`;
        const answerId = `faq-a-${idx}`;

        return (
          <div key={idx} className="transition-colors duration-200">
            <button
              id={questionId}
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="w-full py-5 px-2 flex items-center justify-between text-left gap-4 hover:text-[#15297C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15297C] cursor-pointer"
            >
              <span className="flex items-start gap-3 font-serif text-base sm:text-lg font-medium text-slate-900 leading-snug">
                <HelpCircle className="w-5 h-5 text-[#C89D3C] shrink-0 mt-0.5" />
                <span>{item.pregunta}</span>
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#15297C] text-white border-[#15297C] rotate-180'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 pb-5 pl-10 pr-4' : 'max-h-0 opacity-0 pb-0'
              }`}
            >
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.respuesta}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
