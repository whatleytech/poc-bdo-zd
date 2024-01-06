"use client";

import React, { useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: (npi: string) => void;
  closeModal: () => void;
  npi: string;
}

export const ModalContext = React.createContext<ModalContextProps>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  npi: "",
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [npi, setNpi] = useState<string>("");

  const openModal = (npi: string) => {
    setNpi(npi);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, npi }}>
      {children}
    </ModalContext.Provider>
  );
};
