"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function usePopup() {
  return useContext(PopupContext);
}

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        openPopup: () => setIsOpen(true),
        closePopup: () => setIsOpen(false),
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
