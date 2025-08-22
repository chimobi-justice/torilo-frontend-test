import { useState, type FunctionComponent } from 'react'
import { ChevronDown } from 'lucide-react'

import type { AppButtonDropdownProps } from '~/interface/app-button-dropdown'

export const AppButtonDropdown: FunctionComponent<AppButtonDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-[14px] text-[#4069D0] font-semibold focus:outline-none cursor-pointer"
      >
        <span className="flex-1 text-center py-3 px-4 mr-2  bg-[#EBEFFA] rounded-tl-md rounded-bl-sm">
          {selected || 'Request Other Timeoffs'}
        </span>

        <div className="flex items-center justify-center py-3 px-2  bg-[#EBEFFA] text-[#4069D0] rounded-tr-md rounded-br-sm">
          <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* The dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b border[#f1f1f1] border-[0.4px]"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};