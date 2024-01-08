"use client";

import React, { useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: (npi: string, date: Date) => void;
  closeModal: () => void;
  date: Date;
  npi: string;
}

export const ModalContext = React.createContext<ModalContextProps>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  date: new Date(),
  npi: "",
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [npi, setNpi] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  const openModal = (npi: string, date: Date) => {
    setNpi(npi);
    setDate(date);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, npi, date }}
    >
      {children}
    </ModalContext.Provider>
  );
};
